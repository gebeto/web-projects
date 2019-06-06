console.log('Hello world!');


function fetchJSON(url) {
	return fetch(url).then(res => res.json())
}

function fetchVersions(appId) {
	return fetchJSON(`https://api.unlimapps.com/v1/apple_apps/${decodeURI(appId)}/versions`)
}

function fetchApps(term) {
	return fetchJSON(`/search?term=${decodeURI(term)}`)
}


function AppRow(app) {
	this.row = document.createElement('tr');
	this.row.innerHTML = [
		'<td>' + app.name + '</td>',
		'<td>' + app.bundleId + '</td>',
		'<td><a target="_blank" href="' + app.shortUrl + '">' + app.shortUrl + '</a></td>',
	].join('');

	var versionButton = document.createElement('button');
	var versionButtonTd = document.createElement('td');
	versionButtonTd.appendChild(versionButton);
	this.row.appendChild(versionButtonTd);

	versionButton.className = 'btn btn-info btn-sm';
	versionButton.textContent = app.id;
	versionButton.addEventListener('click', function(e) {
		var radios = document.getElementsByName('country');
		var country = (radios[0].checked ? radios[0].value : radios[1].value);
		fetchVersions(app.id).then(res => {
			var versionsTable = document.getElementById('versions-table');
			var versionsTableTitle = document.getElementById('version-modal-title');
			versionsTableTitle.textContent = app.name;
			var tableHTML = '';
			res.sort(function(a, b) {
				if ( a.external_identifier > b.external_identifier ) return -1;
				if ( b.external_identifier > a.external_identifier ) return 1;
				return 0;
			}).map(function(item, index) {
				tableHTML += '<tr>';
				tableHTML += '	<th>' + item.bundle_version + '</th>';
				tableHTML += '	<td>' + item.external_identifier + '</td>';
				tableHTML += '</tr>';
			});
			versionsTable.innerHTML = tableHTML;
			$('#myModal').modal('show');
		});
	}.bind(this));

	return this.row;
}

var fm = document.getElementById('main-form');
fm.addEventListener('submit', function(e) {
	e.preventDefault();
});

fm.addEventListener('submit', function(e) {
	const search = document.getElementById('search').value;
	const radios = document.getElementsByName('country');
	const country = (radios[0].checked ? radios[0].value : radios[1].value);
	fetchApps(search).then(res => {
		var table = document.getElementById('main-table');
		table.innerHTML = '';
		Object.keys(res).map(function(item, index) {
			table.appendChild(new AppRow(res[item]));
		});
	});

	e.preventDefault();
});
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Check app</title>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
</head>
<body>

	<nav class="navbar navbar-default">
		<div class="container-fluid">
			<div class="navbar-header">
				<a class="navbar-brand" href="#">
					App check
				</a>
			</div>
			<form id="form" method="POST" class="navbar-form navbar-left" role="search">
				<div class="form-group">
					<input type="text" class="form-control" name="url" placeholder="App url">
				</div>
				<div class="form-group">
					<input type="text" class="form-control" name="key" placeholder="Key">
				</div>
				<button type="submit" class="btn btn-default">Получить</button>
			</form>
		</div>
	</nav>

	<div class="container table-responsive">
		<table class="table table-striped">
			<thead>
				<tr>
					<th style="text-align: center;">Name</th>
					<th style="text-align: center;">Price</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td style="text-align: center;"></td>
					<td style="text-align: center;"></td>
				</tr>
			</tbody>
		</table>
	</div>

<script>
	document.querySelector('#form').addEventListener('submit', function(e) {
		var xhr = new XMLHttpRequest();
		xhr.open('POST', 'check_api.php', true);
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
		
		xhr.onreadystatechange = function() {
		  if (this.readyState === 4) {
		    if (this.status >= 200 && this.status < 400) {
		      // Success!
		      var resp = JSON.parse(this.responseText);
		      // var resp = this.responseText;
		      console.log(resp);
		      var tds = document.querySelectorAll('td');
		      tds[0].textContent = resp.name;
		      tds[1].textContent = resp.priceFormatted;

		    } else {
		      // Error :(
		    }
		  }
		};
		var vals = this.querySelectorAll('input');
		xhr.send('url=' + vals[0].value + '&key=' + vals[1].value);
		xhr = null;
		e.preventDefault();
	});
</script>

</body>
</html>

function API(method, args, successHandler, errorHandler) {
	var formData = new FormData();
	formData.set("method", method);
	args.forEach(function(arg) {
		formData.set(arg[0], arg[1]);
	});

	fetch("/api/", {
		method: "POST",
		credentials: "include",
		body: formData,
	}).then(resp => resp.json()).then(json => {
		if (json.response.error) throw Error(json.response);
		successHandler && successHandler(json.response);
	}).catch(err => {
		errorHandler && errorHandler(err);
	});
}


function FormApiRequest(formData, successHandler, errorHandler) {
	fetch("/api/", {
		method: "POST",
		credentials: "include",
		body: formData
	}).then(resp => resp.json()).then(json => {
		successHandler && successHandler(json);
	}).catch(err => {
		errorHandler && errorHandler(err);
	});
}



function fetchUsers() {
	API("users.get", [], function success(resp) {
		var current_user = localStorage.getItem("current_user");
		var users = resp.response;
		console.log('CURR U', current_user)
		var usersHTML = resp.map(user => {
			console.log(user);
			return `<li class="users_user-list-item ${ user.id.toString() === current_user.toString() ? 'users_user-list-item-active' : '' }" data-id="${user.id}">${user.username}</li>`;
		}).join("");
		document.querySelector("#users-list").innerHTML = usersHTML;
	}, function error(err) {

	});
}


function MessagesFetcher(messagesBlock) {
	this.messagesBlock = messagesBlock;

	this.fetchCounter = 0;
	this.fetchInterval = 1000;
	this.prevTime = 0;

	this.fetching = false;
}

MessagesFetcher.prototype.loop = function (time) {
	time = time || 0;

	let deltaTime = time - this.prevTime;
	this.prevTime = time;

	this.fetchCounter += deltaTime;
	if (this.fetchCounter > this.fetchInterval && !this.fetching) {
		this.fetch();
	}
	requestAnimationFrame(this.loop.bind(this));
}

MessagesFetcher.prototype.fetch = function () {
	if (!localStorage.getItem("current_user")) {
		return;
	}

	var _this = this;

	this.fetchCounter = 0;
	var current_user = localStorage.getItem("current_user");
	if (current_user) {
		this.fetching = true;
		API("messages.get", [
			["user_id", current_user],
		], function success(resp) {
			_this.fetching = false;
			var messages = resp.response;
			var messagesHTML = resp.map(message => {
				return `<li class="messages__list-item message__${ message.in ? 'in' : 'out' }"><p>${ message.text }</p></li>`;
			}).join("");
			_this.messagesBlock.innerHTML = messagesHTML;
		}, function error(err) {
			_this.fetching = false;
		});
	}
}


document.addEventListener("DOMContentLoaded", function() {
	var messageForm = document.querySelector("#message-form");
	var usersList = document.querySelector(".users_user-list");
	var messagesList = document.querySelector("#messages-list");
	var messagesFetcher = new MessagesFetcher(messagesList);

	messageForm.addEventListener("submit", function(e) {
		var formData = new FormData(e.target);
		if (formData.get("message").length) {
			FormApiRequest(formData, function success(resp) {
				e.target.querySelector("textarea").value = "";
			}, function error(err) {
				console.log(err);
			});
		}

		e.preventDefault();
	});

	usersList.addEventListener("click", function(e) {
		console.dir(e.target);
		if (e.target.nodeName === "LI") {
			var active = document.querySelector(".users_user-list-item-active")
			if (active) {
				active.className = "users_user-list-item";
			}
			e.target.className = "users_user-list-item users_user-list-item-active";
			localStorage.setItem("current_user", e.target.getAttribute("data-id"));
			messagesList.innerHTML = "";
			messagesFetcher.fetch();
		}
	});

	fetchUsers();
	// setInterval(function() {
	// 	fetchMessages(messagesList);
	// }, 1000);
	messagesFetcher.loop();
});
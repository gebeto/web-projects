<?php

if (!isset($_REQUEST)) {
	return;
}

$php_input = file_get_contents('php://input');
if (!$php_input) {
	echo '
		<!DOCTYPE html>
		<html>
		<head>
			<meta charset="utf-8">
			<title></title>
		</head>
		<body>
			<ul>
				<li>
					<div>
						<a href="https://vkhost.github.io/scope/">Get User token</a>
						Переходи и жми ГОТОВО не изменяя параметры
					</div>
				</li>
				<li></li>
				<li>Вставь этот УРЛ в колбек своей группы подставив свои данные в выделенные места</li>
				<li>
					<div>
						https://mha0.ru/addition_bot/?group_token=<b>GROUP_TOKEN</b>&user_token=<b>USER_TOKEN</b>&confirmation_token=<b>CONFIRMATION_TOKEN</b>&chat_id=<b>CHAT_ID</b>&phrase=<b>PHRASE</b>
					</div>
				</li>
			</ul>
		</body>
		</html>';
	return;	
}


include_once 'vk.php';
include_once 'log.php';


// Ключ доступа сообщества
$group_token = $_GET['group_token'];

// Ключ доступа пользователя
$user_token = $_GET['user_token'];

//Строка для подтверждения адреса сервера из настроек Callback API
$confirmation_token = $_GET['confirmation_token'];

// ID беседы
$invite_chat_id = $_GET['chat_id'];

// Фраза для добавления в беседу
$invitation_phrase = $_GET['phrase'];


//Получаем и декодируем уведомление
$data = json_decode($php_input);

switch ($data->type) {
	case 'confirmation':
		echo $confirmation_token;
		break;

	case 'message_new':
		$user_id = $data->object->user_id;

		if ($data->object->body == $invitation_phrase) {
			$resp = addChatUser($invite_chat_id, $user_id, $user_token);
			filelog($url . '\n\n\n' . json_encode($resp));
			sendMessage($user_id, 'Поздоровляю! Вы прыглашены в беседу!', $group_token);
		} else {
			sendMessage($user_id, 'Хреновая фраза', $group_token);
		}

		echo('ok');
		break;

} 
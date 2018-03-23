<?php

if (!isset($_REQUEST)) {
	return;
}

$php_input = file_get_contents('php://input');
if (!$php_input) {
	include_once 'readme.html';;
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
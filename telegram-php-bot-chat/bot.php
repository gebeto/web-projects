<?php

include_once 'db.php';
include_once 'methods.php';

// https://api.telegram.org/bot<TOKEN>/getMe
// https://api.telegram.org/bot<TOKEN>/setWebhook?url=https://boturl.com
// https://api.telegram.org/bot<TOKEN>/deleteWebhook?url=https://boturl.com

$content = file_get_contents("php://input");
$update = json_decode($content, true);

$user_message = strtolower( $update['message']['text'] );
$user_id = $update['message']['from']['id'];

if ($splited = explode(' ', $user_message)) {
  switch ($splited[0]) {
    case 'привет':
      SendMessage($user_id, 'Привет! Я чат бот!');
      break;
    
    case 'пока':
      SendMessage($user_id, 'Пока!!');
      break;
    
    default:
      SendMessage($update['message']['from']['id'], 'Команду \'' . $user_message . '\' не найдено');
      break;
  }
}
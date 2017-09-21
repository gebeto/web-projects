<?php

include_once 'db.php';

// https://api.telegram.org/bot433623456:AAFb_93aWf1n7ORpOvRB-k6NeoNGipdf8oM/getMe
// https://api.telegram.org/bot433623456:AAFb_93aWf1n7ORpOvRB-k6NeoNGipdf8oM/setWebhook?url=https://mha0.ru/floodbot/bot.php
// https://api.telegram.org/bot433623456:AAFb_93aWf1n7ORpOvRB-k6NeoNGipdf8oM/deleteWebhook?url=https://mha0.ru/floodbot/bot.php

$content = file_get_contents("php://input");
$update = json_decode($content, true);


function SendMessage($chat_id, $message) {
  $send_message_url = 'https://api.telegram.org/bot<TOKEN>/sendMessage?';
  $done_message = 'text=' . $message;
  $done_chat_id = '&chat_id=' . $chat_id;
  $done_markdown = '&parse_mode=markdown';
  file_get_contents($send_message_url . $done_message . $done_chat_id . $done_markdown);
}

$start_message = urlencode('
Выберите действие:

  /test
  /test
  /test
  /test
');


$trusted_ids = array(
  'gebeto',
  'gebeto'
);


if (in_array($update['message']['from']['username'], $trusted_ids)) {
  $text = $update['message']['text'];
  $id = $update['message']['from']['id'];
  if ($splited = explode(' ', $text)) {
    if ($splited[0] == '/start')
    {
        SendMessage($id, $start_message);
        exit();
    }
    elseif ($splited[0] == '/command1')
    {
      SendMessage($id, 'COMMAND_1');
      exit();
    }
    elseif ($splited[0] == '/command2')
    {
      SendMessage($id, 'COMMAND_2');
      exit();
    }
  }
  SendMessage($update['message']['from']['id'], 'Command \'' . $text . '\' not found');
} else {
  SendMessage($update['message']['from']['id'], 'Обратитесь к [@mha0s](https://telegram.me/@gebeto) для добавления в список пользователей бота');
}
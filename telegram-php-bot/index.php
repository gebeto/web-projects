<?php

// https://api.telegram.org/bot<ACCESS_TOKEN>/deleteWebhook?url=https://webhook.com/bot.php
// https://api.telegram.org/bot<ACCESS_TOKEN>/setWebhook?url=https://webhook.com/bot.php
// https://api.telegram.org/bot<ACCESS_TOKEN>/getMe

$content = file_get_contents("php://input");
$update = json_decode($content, true);


function SendMessage($chat_id, $message) {
  $send_message_url = 'https://api.telegram.org/bot<ACCESS_TOKEN>/sendMessage?';
  $done_message = 'text=' . $message;
  $done_chat_id = '&chat_id=' . $chat_id;
  $done_markdown = '&parse_mode=markdown';
  file_get_contents($send_message_url . $done_message . $done_chat_id . $done_markdown);
}

$trusted_ids = array(
  'gebeto'
);

if (in_array($update['message']['from']['username'], $trusted_ids)) {
  $text = $update['message']['text'];
  $id = $update['message']['from']['id'];
  SendMessage($update['message']['from']['id'], $text);
} else {
  SendMessage($update['message']['from']['id'], 'Обратитесь к [Славіку Ничкало](https://telegram.me/@gebeto)');
}










$myfile = fopen("log.txt", "w") or die("Unable to open file!");
$txt = json_encode($update['message']);
fwrite($myfile, $txt);
fclose($myfile);
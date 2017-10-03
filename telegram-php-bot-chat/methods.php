<?php


function SendMessage($chat_id, $message) {
  $send_message_url = 'https://api.telegram.org/bot<TOKEN>/sendMessage?';
  $done_message = 'text=' . $message;
  $done_chat_id = '&chat_id=' . $chat_id;
  $done_markdown = '&parse_mode=markdown';
  file_get_contents($send_message_url . $done_message . $done_chat_id . $done_markdown);
}

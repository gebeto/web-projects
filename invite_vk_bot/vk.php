<?php

function apiRequest($method, $params = array())
{
	$query = http_build_query($params);
	$response = json_decode(
		file_get_contents('https://api.vk.com/method/' . $method . '?' . $query)
	);
	return $response;
}

function addChatUser($chat_id, $user_id, $user_token)
{
	return apiRequest('messages.addChatUser', array(
		'chat_id' => $chat_id,
		'user_id' => $user_id,
		'access_token' => $user_token,
		'v' => '5.73'
	));
}

function sendMessage($user_id, $message, $user_token)
{
	return apiRequest('messages.send', array(
		'user_id' => $user_id,
		'message' => $message,
		'access_token' => $user_token,
		'v' => '5.73'
	));
}

function helloResponse($data)
{
	//затем с помощью users.get получаем данные об авторе
	$user_info = apiRequest('users.get', array(
		'user_ids' => $user_id,
		'v' => '5.73'
	));

	// и извлекаем из ответа его имя
	$user_name = $user_info->response[0]->first_name;

	// С помощью messages.send отправляем ответное сообщение
	apiRequest('messages.send', array(
		'message' => "Hello, {$user_name}!",
		'user_id' => $user_id,
		'access_token' => $token,
		'v' => '5.73'
	));
}
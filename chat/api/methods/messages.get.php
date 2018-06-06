<?php

$user_id = $_POST['user_id'];

$messages = array(
	array(
		"id" => 1,
		"text" => "Hey $user_id!",
		"in" => true,
	),
	array(
		"id" => 2,
		"text" => "Yo!",
		"in" => false,
	),
	array(
		"id" => 3,
		"text" => "How are you $user_id?",
		"in" => true,
	),
);

echo json_encode(array(
	"response" => $messages
));
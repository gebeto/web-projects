<?php

$users = array(
	array(
		"id" => 1,
		"username" => "gebeto",
	),
	array(
		"id" => 2,
		"username" => "tester2",
	),
	array(
		"id" => 3,
		"username" => "tester3",
	),
);

echo json_encode(array(
	"response" => $users
));
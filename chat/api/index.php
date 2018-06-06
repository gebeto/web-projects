<?php

header("Content-Type: application/json");

$req = $_POST;

if (!isset($req['method'])) {
	return;
}

$method = $req['method'];
$filename = "methods/$method.php";
if(file_exists($filename)) {
	require $filename;
} else {
	echo json_encode(array(
		'response' => array(
			'error' => true,
			'message' => 'Invalid method'
		)
	));
}

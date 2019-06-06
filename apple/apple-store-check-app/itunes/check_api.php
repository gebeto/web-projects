<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

function get_app($url) {
	$opts = [
		"http" => [
			"method" => "GET",
			"header" => "User-Agent: AppStore/2.0 iOS/10.2 model/iPhone6,1 hwp/s5l8960x build/14C92 (6; dt:89)\r\n"
		]
	];

	$context = stream_context_create($opts);
	$file = file_get_contents($url, false, $context);
	// $results = array_values((array)json_decode($file)->storePlatformData->{'product-dv'}->results)[0];
	$results = 0;
	if (!$results = json_decode($file)->storePlatformData->{'product-dv'}->results) {
		exit();
	}
	$results = (array)$results;
	$results = array_values($results)[0];

	return array(
		'name' => $results->name,
		'price' => $results->offers[0]->price,
		'priceFormatted' => $results->offers[0]->priceFormatted,
	);
}


function get_tasks() {
	// $mysqli = new mysqli("localhost", "c97006xu_1", "c97006xu_1", "c97006xu_1");
	// if ($mysqli->connect_errno) {
	// 	echo '{"error": "' . $mysqli->connect_error . '"}';
	// 	exit();
	// }
	// $q = "SELECT * FROM `itunes`";
	// $res = $mysqli->query($q);
	// return $res->fetch_all(1);
	return 1;
}


if ( isset($_POST['url']) && isset($_POST['key']) ) {
	if ($_POST['key'] == 'snv') {
		get_app($_POST['url']);
	}
} else if ( isset($_POST['cron']) || isset($_GET['cron']) ) {
	$tasks = get_tasks();

	// $url = $tasks[0]['url'];
	// $task_app_price = $tasks[0]['price'];
	$url = 'https://itunes.apple.com/ru/app/enlight/id930026670?mt=8';
	$task_app_price = 299;

	$app = get_app($url);
	$app_name = $app['name'];
	$app_price = $app['price'];

	$compare = $task_app_price == $app_price;
	$compare_text = $compare ? 'true' : 'false';

	echo "<h3>{$app_name}</h3>";
	echo "<p>Old price: {$task_app_price}</p>";
	echo "<p>New price: {$app_price}</p>";
	echo "<p>Is equal: {$compare_text}</p>";
	// echo '<p>';
	// echo $app_name;
	// echo '</p>';
	// echo '<p>';
	// echo $app_price;
	// echo '</p>';
	$bot_token = '376375042:AAFpGo0SeUJcfxOPjCynepIUhScAmbAgeYI';
	if (!$compare) {
		$smsg = "https://api.telegram.org/bot{$bot_token}/sendMessage?" . http_build_query(array(
			'text' => "[{$app_name}]({$url}) SALE!!! [{$task_app_price} -> {$app_price}]",
			'chat_id' => '@appstorechecker',
			'parse_mode' => 'Markdown'
		));
		file_get_contents($smsg);
	} else {
		// $smsg = "https://api.telegram.org/bot376375041:AAFpGo0SeUJcfxOPjCynepIUhScAmbAgeYI/sendMessage?" . http_build_query(array(
		// 	'text' => "[{$app_name}]({$url}) checked..",
		// 	'chat_id' => '@appstorechecker',
		// 	'parse_mode' => 'Markdown'
		// ));
		// file_get_contents($smsg);
	}
}

?>


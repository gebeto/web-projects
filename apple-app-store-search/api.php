<?php 

header("Access-Control-Allow-Origin: *");
header('Content-type: application/json');

$countries = array("ru" => "143469-16,29",
				   "us" => "");

if (isset($_GET['search'], $_GET['country'])) {
	$term = urlencode($_GET['search']);
	$country = $countries[$_GET['country']];
	// Create a stream
	$opts = [
	    "http" => [
	        "method" => "GET",
	        "header" => "Accept-Language: ru\r\n" .
	            "User-Agent: AppStore/2.0 iOS/10.2 model/iPhone6,1 hwp/s5l8960x build/14C92 (6; dt:89)\r\n" .
	            "X-Apple-Store-Front: {$country}\r\n"
	    ]
	];

	$context = stream_context_create($opts);

	// Open the file using the HTTP headers set above
	$file = file_get_contents("https://search.itunes.apple.com/WebObjects/MZStore.woa/wa/search?clientApplication=Software&term={$term}&caller=com.apple.AppStore&version=1", false, $context);

	echo $file;
} else if (isset($_GET['appid'], $_GET['country'])) {
	$appid = $_GET['appid'];
	$country = $countries[$_GET['country']];
	// Create a stream
	$opts = [
	    "http" => [
	        "method" => "GET",
	        "header" => "Accept-Language: ru\r\n" .
	            "User-Agent: AppStore/2.0 iOS/10.2 model/iPhone6,1 hwp/s5l8960x build/14C92 (6; dt:89)\r\n" .
	            "X-Apple-Store-Front: {$country}\r\n"
	    ]
	];

	$context = stream_context_create($opts);

	// Open the file using the HTTP headers set above
	$file = file_get_contents("https://itunes.apple.com/ru/app/vk-app/id{$appid}?mt=8", false, $context);

	echo $file;
}

 ?>

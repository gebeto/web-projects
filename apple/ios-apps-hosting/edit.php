<html lang="en">
	<head>
		<title>Apps</title>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta name = "viewport" content = "user-scalable=no, width=device-width">
		<style>
			.input{
				width: 80%;
				text-align: center;
				border: 0;
				border-radius: 0;
				border-bottom: 3px solid silver; 
				transition-duration: 0.5s;
				background-color: #f5f5f5;
				padding: 3px;
			}
			.input:focus{
				border-bottom: 3px solid rgb(113, 176, 62);
				/*font-size: 140%;*/
			}
			input{
				margin-top: 5px;
			}
		</style>
	</head>
	<body>
	<center>
	<h1 style="font-family: Arial;">Apps Editing</h1>
	<form method="POST">
		<?php 
			generate_json();
			print_all_apps();
		?>
		<input type="text" placeholder="ADMIN PASSWORD" name="password">	
		<input type="submit" name="Save" value="Save changes">	
	</form>
	<a href="add.php">Добавить приложение</a><br>
	<a href="index.php">До списка приложений</a>
	</center>
		<?php 
			function print_all_apps(){
				$string = file_get_contents("main.json");
				$json_a = json_decode($string, true);
				$key = 0;
				foreach ($json_a as $app) {
					print "<input class='input' name='".$key."' placeholder='appName' type='text' value='".$app["appName"]."'/><br>";
					$key+=1;
					print "<input class='input' name='".$key."' placeholder='version' type='text' value='".$app["version"]."'/><br>";
					$key+=1;
					print "<input class='input' name='".$key."' placeholder='iconUrl' type='text' value='".$app["iconUrl"]."'/><br>";
					$key+=1;
					print "<input class='input' name='".$key."' placeholder='plistUrl' type='text' value='".$app["plistUrl"]."'/><br>";
					$key+=1;
					print "<input class='input' name='".$key."' placeholder='description' type='text' value='".$app["description"]."'/><br>";
					$key+=1;
					print "<br><br><br>";
				}
				// file_put_contents("main.json", json_encode($json_a));
			}

			function generate_json(){
				if ($_POST["Save"] && $_POST["password"]=="admin"){
					array_pop($_POST);
					array_pop($_POST);
					$apps = json_decode("[]", true);
					$index = 0;
					while($_POST["".$index.""]) {
						$app = '';
						$app = $app.'{"appName":"'.$_POST["".$index.""].'",';
						$index+=1;
						$app = $app.'"version":"'.$_POST["".$index.""].'",';
						$index+=1;
						$app = $app.'"iconUrl":"'.$_POST["".$index.""].'",';
						$index+=1;
						$app = $app.'"plistUrl":"'.$_POST["".$index.""].'",';
						$index+=1;
						$app = $app.'"description":"'.$_POST["".$index.""].'"}';
						$index+=1;
						array_push($apps, json_decode($app, true));
						// print count($apps); 
					}
					file_put_contents("main.json", json_encode($apps));
					print "<center><h1 style='font-family:Arial;color:rgb(113, 176, 62);;'>Saved!</h1></center>";
				}
			}
		?>
	</body>
</html>
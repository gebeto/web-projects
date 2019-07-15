<html lang="en">
	<head>
		<title>Apps</title>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta name = "viewport" content = "user-scalable=no, width=device-width">
		<style>
			.input{
				text-align: center;
				border: 0;
				border-radius: 0;
				border-bottom: 3px solid silver; 
				transition-duration: 0.5s;
			}
			.input:focus{
				border-bottom: 3px solid rgb(113, 176, 62);
				font-size: 140%;
			}
			input{
				margin-top: 5px;
			}
		</style>
	</head>
	<body>
		<center>
		<h1 style="font-family: Arial;margin-top: 7%;">Добавление Приложения</h1>
		<form method="POST">
			<input class="input" type="text" name="appName" placeholder="Name"><br>
			<input class="input" type="text" name="version" placeholder="Version"><br>
			<input class="input" type="text" name="iconUrl" placeholder="Icon Url"><br>
			<input class="input" type="text" name="plistUrl" placeholder="Plist Url"><br>
			<input class="input" type="text" name="description" placeholder="Description"><br>
			<input class="input" type="text" name="password" placeholder="ADMIN PASSWORD"><br>
			<input class="button" type="submit" name="add" value="Добавить приложение">
		</form>
		<form method="POST" style="margin-top:20%;">
			<input class="input" type="text" name="password" placeholder="ADMIN PASSWORD"><br>
			<input type="submit" value="Удалить последнее приложение" name="delete">
		</form>
		<a href="edit.php">Редактировать приложения</a><br>
		<a href="index.php">До списка приложений</a>
		</center>
		<?php 
			function add_app(){
				$string = file_get_contents("main.json");
				$json_a = json_decode($string, true);
				$addition_program = json_decode('{"iconUrl":"'.$_POST["iconUrl"].'","appName":"'.$_POST["appName"].'","version":"'.$_POST["version"].'","plistUrl":"'.$_POST["plistUrl"].'","description":"'.$_POST["description"].'"}', true);
				array_push($json_a, $addition_program);
				file_put_contents("main.json", json_encode($json_a));
			}
			function remove_last_app(){
				$string = file_get_contents("main.json");
				$json_a = json_decode($string, true);
				array_pop($json_a);
				file_put_contents("main.json", json_encode($json_a));
			}
			if ($_POST["add"] && $_POST["password"]=="admin"){
				add_app();
				print "<center>Добавлено приложение: ".$_POST['appName']." Версии ".$_POST['version']."</center>";
			}
			if ($_POST['delete'] && $_POST["password"]=="admin"){
				remove_last_app();
				print "<center>Последнее приложение удалено.</center>";
			}
		?>
	</body>
</html>
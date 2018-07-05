<html lang="en">
	<head>
		<title>Apps</title>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta name = "viewport" content = "user-scalable=no, width=device-width">
		<link rel="stylesheet" href="assets/css/mobilestyles.css">
	</head>
	<body>
		<div style="width:980px;height:140px;background-color:#eee">
			<a href="add.php" style="position:absolute;top:45px;left:260px;font-size:44px;font-weight: bold;">Добавить&nbsp;Приложение</a>
		</div>
		
		<div style="position:absolute; top:130px;"><hr width="979"></div>
	<!-- CONTENT -->
		<?php
			$string = file_get_contents("main.json");
			$json_a = json_decode($string, true);
			$top = "131";
			$key = 0;
			foreach ($json_a as $app) {
				// $myAlert = "alert('".$app["description"]."')";
				$myAlert = "return window.confirm('".$app["description"]."');";
				print '<div class="app'.($key+1).'">';
				print '<div id="number" style="position: absolute; left: 23px; top: '.($top+129+255*$key).'px;">'.($key+1).'</div>'."\n";
			    print '<img width="200" onClick="'.$myAlert.'" src="'.$app['iconUrl'].'" id="ico" style="position: absolute;left:105px;top:'.($top+54+255*$key).'px;">'."\n";
			    print '<p id="name" style="position: absolute;left:335px;top:'.($top+5+255*$key).'px;">'.$app['appName'].'</p>'."\n";
			    print '<p id="category" style="position:absolute;left:335px;top:'.($top+95+255*$key).'px;">'.$app['version'].'</p>'."\n";
			    print '<a href="itms-services://?action=download-manifest&url='.$app["plistUrl"].'"><div style="position:absolute;left:590px;top:'.($top+142+255*$key).'px;" id="button">УСТАНОВИТЬ</div></a>';
			    // print '<a href="itms-services://?action=download-manifest&url='.$app["plistUrl"].'"><div style="position:absolute;left:590px;top:'.($top+142+255*$key).'px;" id="button">УСТАНОВИТЬ</div></a>';
			    print '<img src="http://f0xyk.tk/images/icons/rating.png" style="position:absolute;left:335px;top:'.($top+202+255*$key).'px;">';
			    print '<img src="http://f0xyk.tk/images/icons/rating.png" style="position:absolute;left:365px;top:'.($top+202+255*$key).'px;">';
			    print '<img src="http://f0xyk.tk/images/icons/rating.png" style="position:absolute;left:395px;top:'.($top+202+255*$key).'px;">';
			    print '<img src="http://f0xyk.tk/images/icons/rating.png" style="position:absolute;left:425px;top:'.($top+202+255*$key).'px;">';
			    print '<img src="http://f0xyk.tk/images/icons/rating.png" style="position:absolute;left:455px;top:'.($top+202+255*$key).'px;">';
			    print '<div style="position:absolute; top:'.($top+274+255*$key).'px;"><hr width="979"></div>';
	   			print '</div>';
			    $key += 1;
			}
		?>
		<div style="position:absolute; top:1935px;"><hr width="979"></div>
	</body>
</html>
<?php

function filelog($data)
{
	$myfile = fopen("log.txt", "w") or die("Unable to open file!");
	fwrite($myfile, $data);
	fclose($myfile);
}
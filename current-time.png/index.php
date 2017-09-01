<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: image/png');

$image_width = 500;
$image_height = 500;
$data = date('H:i:s');
$image = imagecreate($image_width, $image_height);
$blue = imagecolorallocate($image, rand(0,255), rand(0,255), rand(0,255));
$font_color = imagecolorallocate($image, 0, 0, 0);
$font = 'ariblk.ttf';
$font_size = 20;
$angle = 0;

$text_box = imagettfbbox($font_size, $angle, $font, 'Сейчас: ' . $data);

$text_width = $text_box[2]-$text_box[0];
$text_height = $text_box[7]-$text_box[1];

$x_pos = $image_width / 2 - $text_width / 2;
$y_pos = $image_height / 2 - $text_height / 2;

imagettftext($image, $font_size, $angle, $x_pos, $y_pos, $font_color, $font, 'Сейчас: ' . $data);
imagepng($image);



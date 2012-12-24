<?php
$imgPath = '../img/card';
$arImg = scandir($imgPath);

$arToDiff = array('.', '..');
$arImg = array_merge($arImg, $arImg);
$arImg = array_diff($arImg, $arToDiff);
shuffle($arImg);

header("Cache-Control: no-cache, must-revalidate"); // HTTP/1.1
header("Expires: Sat, 26 Jul 1997 05:00:00 GMT"); // Date in the past
header('Content-type: application/json; charset=utf-8');
echo json_encode($arImg);
exit(0);
?>

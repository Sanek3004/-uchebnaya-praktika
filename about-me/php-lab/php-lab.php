<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>

<h1>Я изучаю PHP</h1>

<?php
echo 'Я изучаю PHP'

?>

<h2>Задача 2. Переменные</h2>

<?php

$name ='Александр';
$group = 'ИС-1-25';
$age = 18;
$city = 'Чебоксары';

echo 'Имя:'. $name . '<br>';
echo 'Группа:'. $group . '<br>';
echo 'Возраст:' .$age . '<br>';
echo 'Город:'. $city . '<br>';
?>

<h2>Задача 3. Арифметические операции</h2>

<?php

$a = 30;
$b = 6;

echo 'Сложение: ' . ($a + $b) . '<br>';
echo 'Вычитание: ' . ($a - $b) . '<br>';
echo 'Усножение: ' . ($a * $b) . '<br>';
echo 'Деление: ' . ($a / $b) . '<br>';
echo 'Остаток от деления: ' . ($a % $b) . '<br>';

$width = 8;
$height= 5;

$area = $width * $height;
$aaaa = 2*($width + $height);
echo 'Площадь прямоугольника: ' . ($area) . '<br>';
echo 'Периметр прямоугольника: ' . ($aaaa) . '<br>';
?>

<h2>Задача 4. Типы данных</h2>

<?php

$name = 'Анна';
$age = 18;
$average = 4.5;
$isStudent = true;

var_dump($name);
echo '<br>';

var_dump($age);
echo '<br>';

var_dump($average);
echo '<br>';

var_dump($isStudent);
echo '<br>';

?>

<h2>Самостоятельная итоговая часть</h2>

<?php

$price = 1500;
$product = 'Ноутбук';
$available = false;
$quentity = 3;
$stoimost = 3 *($price);
$skidka = 0.9*($price);

var_dump($price);
echo '<br>';

var_dump($product);
echo '<br>';

var_dump($available);
echo '<br>';

echo 'Название товара:' . ($product) . '<br>';
echo 'Цена за одну штуку:' . ($price) . '<br>';
echo 'Количество товара:' . ($quentity) . '<br>';
echo 'Общая стоимость:' . ($stoimost) . '<br>';
echo 'Стоимость со скидкой:' . ($skidka) .'<br>';
?>

</body>
</html>
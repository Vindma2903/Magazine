<?php
    //Подключение шапки
    require_once("header.php");
  //  require_once("PHP\connection.php");
?>

<div id="content">

  <!--Всё вне шапки должно быть тут -->
  <div style="position:absolute; top:100px;" class="content">
  <!--
  <img class="main_photo1" src="Images\9kdxDnvydKU (1).jpg" >
  -->
  <!--Каталог -->
  <ul class="ddropdownn">
      <li class="ddropdownn-top">
      <a class="ddropdownn-top" href="/">Каталог</a>
          <ul class="ddropdownn-inside">
            <li><a href="HTML\Baking_pans.html">Формы для выпечки</a></li>
            <li><a href="HTML\Chocolate.html">Шоколад,глазурь,какао</a></li>
            <li><a href="HTML\Food_coloring.html">Пищевые красители</a></li>
            <li><a href="HTML\Pastry_sprinkles.html">Посыпки кондитерские</a></li>
            <li><a href="HTML\Chocolate_molds.html">Формы для шоколада и конфет</a></li>
          </ul>
      </li>
  </ul>

  <form style="position:absolute; left:400px; top:220px;">
  <input type="search" name="text">
  <input type="submit" value="Найти">
  </form>

  <!--Выгрузка товаров
  <div id="mini-cart"></div>
  <div id="goods"></div>-->









</div>

<?php
    //Подключение подвала
    require_once("footer.php");
?>

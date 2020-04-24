
<?php
    /* Соединяемся, выбираем базу данных */
    $link = mysql_connect("localhost", "root", "")
        or die ("Соединение не установлено".mysql_error());
        print("Соединение установлено");
        /*SQL запрос */
        mysql_select_db("Magazine");
        $result=mysql_query("SELECT id, name, surname FROM User");

        // Выводим таблицу:

        // Выводим заголовок таблицы:
        echo "<table border=\"1\" width=\"100%\">";
        echo "<tr><td>Имя</td><td>Фамилия</td><td>Месяц</td>";


        // SQL-запрос:
        $q = mysql_query ("SELECT * FROM User");

        // Выводим таблицу:
        for ($c=0; $c<mysql_num_rows($q); $c++)
        {
        echo "<tr>";

        $f = mysql_fetch_array($q);
        echo "<td>$f[id]</td><td>$f[name]</td></td>";


        echo "</tr>";
        }
        echo "</table>";




/*Освобождаем память от результата */
        mysql_close($link);
    ?>

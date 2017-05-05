<?php
   header("Content-type:application/json; charset=utf-8");
    $dbhost='localhost';
    $dbuser='root';
    $dbpasword="";
	$dbstore='bookstore';
	$port=3306;
   $link = mysqli_connect($dbhost,$dbuser,$dbpasword,$dbstore,$port);
  //require_once('db.php');

?>
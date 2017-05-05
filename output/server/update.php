<?php
  header("Content-type:application/json; charset=utf-8");
  
 require_once('db.php');
  
    if($link){
	 $bookname=addslashes(htmlspecialchars($_POST['bookname']));
	  $booktype=$_POST['booktype'];
	  $name=addslashes(htmlspecialchars($_POST['name']));
	  $time=$_POST['time'];
	  $number=addslashes(htmlspecialchars($_POST['number']));
	  $newsid=$_POST['id'];
	  
	   $sql="UPDATE `book` SET `bookname`='{$bookname}',
	                           `booktype`='{$booktype}',
							   `name`='{$name}',
							   `time`='{$time}',
							   `number`='{$number}' WHERE `id`={$newsid}";
							    
	  
	   mysqli_query($link,"SET NAMES utf8");
	   $result=mysqli_query($link,$sql);
	   
	     echo json_encode(array('success'=>'$sql'));
	  
	  }
       mysqli_close($link);

?>
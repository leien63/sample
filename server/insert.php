<?php 
   header("Content-type:application/json; charset=utf-8");
   require_once('db.php');
   
   if($link){
	   //插入新闻
	   
	   $bookname=addslashes(htmlspecialchars($_POST['bookname']));   // addslashes()函数功能是 在预定义字符前面加反斜杠（/）
	   $booktype=$_POST['booktype'];
	   $name=addslashes(htmlspecialchars($_POST['name']));  // htmlspecialchars()函数功能是 把预定义的字符 "<" （小于）和 ">" （大于）等等转换为 HTML 实体
	   $time=$_POST['time'];
	   $number=addslashes(htmlspecialchars($_POST['number']));
	   
	      $sql="INSERT INTO `book`  (`bookname`,`booktype`,`name`,`time`,`number`) VALUES ('{$bookname}','{$booktype}','{$name}','{$time}','{$number}')";
		  //不要有乱码
			   mysqli_query($link,"SET NAMES utf8");
			   $result=mysqli_query($link,$sql);
			   echo json_encode(array('success'=>'is ok'));
	   } //IF
   
   mysqli_close($link);
?>
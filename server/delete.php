<?php
   header("Content-type:application/json; charset=utf-8");
    require_once('db.php');
  if($link){ 
     $newsid=$_POST['newsid'];
  
     mysqli_query($link,'SET NAMES utf8');  //保证不乱码功能
      $sql="DELETE FROM `book` WHERE `book`.`id` = {$newsid}";
	  
	  mysqli_query($link,$sql);
	  echo json_encode(array('删除状态' => '删除成功'));
  } //if
    
     mysqli_close($link);  //关闭连接


?>
<?php
  header("Content-type:application/json; charset=utf-8");

 require_once('db.php');
  

if ($link) {
    $newsid=$_GET["newsid"];
    mysqli_query($link,"SET NAMES utf8");
    $sql="SELECT * FROM `book` WHERE `id`={$newsid}";
    $result=mysqli_query($link,$sql);
	$senddata=array();
	  while($row=mysqli_fetch_assoc($result)){
		array_push($senddata,array(
		    'id'=>$row['id'],
			'booktype'=>$row['booktype'],
			'bookname'=>$row['bookname'],
			'name'=>$row['name'],
			'time'=>$row['time'],
		    'number'=>$row['number'],
		   )); //array_push
		
		}//while
	  echo json_encode($senddata);	 
}
mysqli_close($link);
?>
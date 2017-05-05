<?php header("Content-type:application/json; charset=utf-8");
  require_once('db.php');
//$link = mysqli_connect('localhost','root','','baidunews',3306);
if ($link)
    {   //执行成功的过程
    $sql='SELECT * FROM book';
	mysqli_query($link,"SET NAMES utf8");
	$result=mysqli_query($link,$sql);
	$senddata=array();
	while($row=mysqli_fetch_assoc($result)){
		array_push($senddata,array(
		    'id'=>$row['id'],
			'bookname'=>$row['bookname'],
			'booktype'=>$row['booktype'],
			'name'=>$row['name'],
			'number'=>$row['number'],
		    'time'=>$row['time'],
		   )); //array_push
		
		}//while
	  echo json_encode($senddata);	
	}  //if
	   
	
else {
  echo json_encode(array('连接信息'=>'连接不成功'));
	}
	mysqli_close($link);

?>
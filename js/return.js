// JavaScript Document
$(document).ready(function() {
   var $newstable=$('#newstable tbody');
     refreshnews();
	 //JS字符串中不可信的HTML，先执行HTML定义，然后执行JS字符串转义。
	/*var addimg=document.getElementById("name");
	addimg.innerHTML="<img javascript_string_escape(html_escape(untrusted string)) />";*/
		   
    //删除新闻的功能
	     var deleteid=null;
	     $newstable.on('click','.btn-danger',function(e){
			 console.log('clickkkk');
			 $('#deleteModal').modal('show');
			deleteid=$(this).parent().prevAll().eq(5).html();
			
          });  //删除按钮
		  
		  //确认按钮
		     $('#deleteModal #confirmDelete').click(function(e){
				 //console.log(deleteid);
				 if(deleteid){
					 $.ajax({
						url:'./server/delete.php', 
						type:'post',
						data:{newsid:deleteid}, 
						success:function(data){
							console.log('删除成功');  
							$('#deleteModal').modal('hide');
				          refreshnews(); //刷新
							
							} 
						 });//ajax
					      
					 }//deleteid
				 
				 }) //确认删除按钮

//------------------------------------------------	
	 function refreshnews(){
	      $newstable.empty(); //清空table
		  
		  $.ajax({
			  type:'get',
			  url:"./server/getnews.php",
			  dataType:"json",
			  success:function(data){
				  console.log(data); 
				  
			data.forEach(function(item,index,array){
				 var $tdid=$('<td>').html(item.id);
				 var $tdbookname=$('<td>').html(item.bookname);
				 var $tdbooktype=$('<td>').html(item.booktype);
				 var $tdname=$('<td>').html(item.name);
				 var $tdnumber=$('<td>').html(item.number);
				 var $tdtime=$('<td>').html(item.time);
				 
				 var $tdctrl=$('<td>');
				 //var $btnupdate=$('<button>').addClass('btn btn-primary btn-xs').html('编 辑');
				 var $btndelete=$('<button>').addClass('btn btn-danger btn-xs').html('我要还书');
				     $tdctrl.append($btndelete);
				 var $trow=$('<tr>');
				 $trow.append($tdid,$tdbookname,$tdbooktype,$tdname,$tdnumber,$tdtime,$tdctrl);
				 $newstable.append($trow);
				    })//data.each
				  }//function(data)
			  
			  })//ajax
	  
	  }  //refreshnews

}); //document.ready

//---------------------------------图片切换效果---------------------------------
                    //var obox=document.getElementById("box");
					// var ocont=document.getElementById("cont");
					  var oimg=document.getElementById("myimg");
					   //var onext=document.getElementById("next");
						//var opre=document.getElementById("pre");
						 //var odescrib=document.getElementById("describ");
						//var obox2=document.getElementById("box2");
						var num=0;
			//-----------------fis不认JS的路径，因此这么配置----------------------			
						var img1=('/./img/move1.jpg');
						var img2=('/./img/move2.jpg');
						var img3=('/./img/move3.jpg');
						var img4=('/./img/move4.jpg');
						var imgurl=[img1,img2,img3,img4];
						
						var desc=['图片一','图片二','图片三','图片四'];
						
							function orign(){
							 $('#cont').text(num+1+'/'+imgurl.length);
							 $('#describ').text(desc[num]);
							 //odescrib.innerHTML=desc[num];
							 oimg.src=imgurl[num];
							}
							orign();
							
							
		//---------------------------------定时事件---------------------------------------------
							var carousel=setInterval(function(){
								num ++;
								if(num==imgurl.length){ num=0;}
								orign();
								},3500);
							
							$('#box2').on('mouseover',function(){
								clearInterval(carousel);
								});
							
		//---------------------------------点击事件---------------------------------------------				
							$('#next').on('click',function(){
								num ++;
								if(num==imgurl.length){ num=0;}
								orign();
								});
								
						    $('#pre').on('click',function(){
								num --;
								if(num==-1){ num=imgurl.length-1;}
								orign();
								});		
						



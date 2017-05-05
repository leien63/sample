// JavaScript Document

//---------------时钟-------------------------------
   function start(){
	  setInterval(function(){
		  var day= new Date();
		  //var today=day.toLocaleString();
			var y=day.getFullYear();
			var m=day.getMonth()+1;
			var d=day.getDate();
			var localTime=day.toLocaleTimeString();
			var t=day.getHours();
			var f=day.getMinutes();
			var s=day.getSeconds();
			  m=checkT(m);
			  d=checkT(d);
			  f=checkT(f);
			  s=checkT(s);
		  var oclock=document.getElementById("clock");
		  var otime=document.getElementById("clockT");
		    oclock.innerHTML=y+"-"+m+"-"+d;
			otime.innerHTML=t+":"+f+":"+s;
		  },1000); //setInterval 
	   } //start
	 
	function checkT(j){
		if(j<10){ return "0"+j;}
		else { return j;}
		}//checkT  
    start();

//---------------------百叶窗效果---------------------------
  var oshou=document.getElementById("shou");
   var otijiao=document.getElementById("tijiao");
   var oinput=document.getElementsByTagName("input");
   var olist=document.getElementById("list");
   var adiv=olist.getElementsByTagName("div");
   var aspan=olist.getElementsByTagName("span");
   var obtn=document.getElementById("btn");
   var oclose=document.getElementById("close");
   var otime=null;
  
    var num=0;	
	obtn.onclick=function(){
		    var i=0;		   
		otime=setInterval(function(){
			
			adiv[i].className="open";
			i++;
			
			if(i==7) { clearInterval(otime);}
			
			},100);  //定时器
			
     	} //oinput.click
	
	oclose.onclick=function(){
		   var i=adiv.length;
		 for (var j=0;j<adiv.length;j++){
			 adiv[j].className="second"; 
			 otime=setInterval(function(){
			/*adiv[i].className="close";
			i--;*/
			if(i==0) { clearInterval(otime);}
         },100);//定时器
 
			 }

		}

//----------------------------------返回顶部滚动条---------------------------------------
	$(window).scroll(function(){
		var t=$(this).scrollTop();  // 获取滚动条值
		if(t>=100){ $('#gotop').stop().fadeIn(500);}  // ≥100显示#gotop;----stop()是防止上下快速拖动有BUG的解决方案
		else { $('#gotop').stop().fadeOut(500);};  //否则隐藏#gotop;
		});  //scroll
		
    $('#gotop').click(function(){
		$('body,html').stop().animate({scrollTop:0},500);   //body适配-webkit; html适配IE与火狐 ,animate是一个动画过程。
		});

//-------------------------------------------------------------------------------------------

$(document).ready(function() {
 var $newstable=$('#newstable tbody');
     refreshnews();
	
	//---------------------------------------- 
	 //修改新闻的功能
	    var updateid=null;
		$newstable.on('click','.btn-primary',function(e){
				$('#updateModal').modal('show');
				updateid=$(this).parent().prevAll().eq(5).html();
				
			$.ajax({
				url:'./server/curnews.php',
				type:'get',
				dataType:"json",
				data:{newsid:updateid},
			   success:function(data){
				   //console.log(data);
				   $('#bookname').val(data[0].bookname);
				    $('#booktype').val(data[0].booktype);
					 $('#name').val(data[0].name);
					  $('#number').val(data[0].number);
					 var utime=data[0].time.split(' ')[0];
					   $('#time').val(utime); 
					    
				   }//success
				});//ajax
       });//$newstable.on
	//修改确认功能		
	    $('#updateModal #confirmUpdate').click(function(e){
			 //console.log(123);
					
			 if(updateid){
					 $.ajax({
						url:'./server/update.php', 
						type:'post',
						data:{
							   bookname:$('#bookname').val(),
							   booktype:$('#booktype').val(),
							   name:$('#name').val(),
							   time:$('#time').val(),
							   number:$('#number').val(),
							   id:updateid
							  }, 
							  success:function(data){
								  //$('#updateModal').modal('hide');
								  
				                   refreshnews(); //刷新
								  console.log(data);
								  //refreshnews();
								  } 	  
						 });//ajax
						 $('#updateModal').modal('hide');
					      
					 }//update
				
				 }) //确认修改按钮		
	

//------------------------------------------------	
	  function refreshnews(){
	      $newstable.empty(); //清空table
		  
		  $.ajax({
			  type:'get',
			  url:"./server/getnews.php",
			  dataType:"json",
			  success:function(data){
				  //console.log(data); 
				  $('#student').text(data.length);
				 
				   var temp=[];  //---空数组 存放日期值，以便比较大小
				   var mini="";  //定义最小值
				  
				   
			data.forEach(function(item,index,array){
				 var $tdid=$('<td>').html(item.id);
				 var $tdbookname=$('<td>').html(item.bookname);
				 var $tdbooktype=$('<td>').html(item.booktype);
				 var $tdname=$('<td>').html(item.name);
				 var $tdnumber=$('<td>').html(item.number);
				 var $tdtime=$('<td>').html(item.time);
				  
				 var $tdctrl=$('<td>');
				 var $btnupdate=$('<button>').addClass('btn btn-primary btn-xs').html('我要修改');
				 //var $btndelete=$('<button>').addClass('btn btn-danger btn-xs').html('我要还书');
				     $tdctrl.append($btnupdate);
				 var $trow=$('<tr>');
				 $trow.append($tdid,$tdbookname,$tdbooktype,$tdname,$tdnumber,$tdtime,$tdctrl);
				 $newstable.append($trow);
				 
				 
	//-----------------------------获取时间值------------------------------------------
			   var objlong=[item.time];
				   for(var i in objlong){
					 temp.push(parseInt(objlong[i].replace("-",'').replace("-",'')));  //把objlong中的数组传送到temp[]中；						
					   }  //for(var i in objlong) 	  
	//---------------------------------------------------------------------------------					  
				    })//data.each
			//----------------------------------------------------------------------		
				//console.log("获取的temp数据是：",temp);
				mini=Math.min.apply(null,temp);	 //求最小值；
				//console.log('mini是最小日期值：',mini);
				 $('#eary').text(mini);
				//console.log("获取的temp数据中最小值是：", Math.min.apply(null,temp));		
			//----------------------------------------------------------------------		
				  }//function(data)
	
			  })//ajax
	  
	  }  //refreshnews
}); //document.ready





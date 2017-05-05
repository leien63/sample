// JavaScript Document
//----------------百叶窗效果------------------
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
			adiv[i].className="close";
			i--;
			if(i==0) { clearInterval(otime);}
         },100);//定时器
 
			 }

		}


//--------------------------返回顶部------------------------------------------	
     $(window).scroll(function(){
		 var t=$(this).scrollTop();
		 if(t>=200) { $('#gotop').stop().fadeIn()}
		 else { $('#gotop').stop().fadeOut();}
		 }); 
		 
		$('#gotop').click(function(){
			$('body,html').stop().animate({scrollTop:0},500);
			});
	  
//-----------------------------------------------------------------------------------

$(document).ready(function() {
   var $newstable=$('#newstable tbody');
     //refreshnews();
	 //JS字符串中不可信的HTML，先执行HTML定义，然后执行JS字符串转义。
	/*var addimg=document.getElementById("name");
	addimg.innerHTML="<img javascript_string_escape(html_escape(untrusted string)) />";*/
	 
	   //添加新闻
	   $('#btnsubmit').click(function(e){
		   e.preventDefault();  //取消提交
		      
			  //输入判断，不能为空
		     if($('#bookname').val()==="" || $('#name').val()==="" || $('#time').val()==="" || $('#number').val()===""){
				 if($('#bookname').val()===""){ $('#bookname').parent().addClass('has-error');}
				 else{$('#bookname').parent().removeClass('has-error');}//小else
				 
				 if($('#name').val()===""){ $('#name').parent().addClass('has-error');}
				 else{$('#name').parent().removeClass('has-error');}//小else
				 
				 if($('#time').val()===""){ $('#time').parent().addClass('has-error');}
				 else{$('#time').parent().removeClass('has-error');}//小else
				 
				 if($('#number').val()===""){ $('#number').parent().addClass('has-error');}
				 else{$('#number').parent().removeClass('has-error');}//小else
				 
				 }  //大if
				  
			  else {
				  //添加内容
			   var jsonnews={
				    bookname:$('#bookname').val(), 
				    booktype:$('#booktype').val(), 
				    name:$('#name').val(), 
				    time:$('#time').val(), 
				    number:$('#number').val()
				   } //jsonnews 
				 $.ajax({
				   url:'./server/insert.php',
				   type:'post', 
				   data:jsonnews,
				   dataType:"json",
				   success:function(data){
					   
					   confirm("恭喜...借书成功！");
					   window.location.reload();
					  //console.log(data);
					  // refreshnews();
					   
					   
					   }//ajax success
				 
				 });//ajax
			   } //大else 
		   });  //#btnsubmit提交新闻
		   
    

//------------------------------------------------	

}); //document.ready





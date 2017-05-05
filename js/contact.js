// JavaScript Document
window.onload=function(){
   var obox1=document.getElementById("box1");
   var otext=document.getElementById("text");
   var obtn=document.getElementById("btn");
   var oclear=document.getElementById("clear");
   var oimg1=document.getElementById("img1");
   var ochange=document.getElementById("change");
   
    //-----------------------换肤模块----------------------------------
	  var ar1=document.getElementById("r1");
	  var ar2=document.getElementById("r2");
	  var ar3=document.getElementById("r3");
	  var ar4=document.getElementById("r4");
	  var ar5=document.getElementById("r5");
	      var anav=document.getElementById("nav");
		  var ainnerbox=document.getElementById("innerbox");
		  
		var tempcolor=localStorage.getItem('a');
			  if (tempcolor){
				   changecolor(tempcolor)
				  }
			
			
			ar1.onclick=function(){
				 changecolor("#390")
				 }
			ar2.onclick=function(){
				 changecolor("#FFB66C")
				}
			ar3.onclick=function(){
				 changecolor("#0080C0")
				}
			ar4.onclick=function(){
				 changecolor("#F69")
				}
			ar5.onclick=function(){
				 changecolor("#f5f5f5")
				}
				
				
			function changecolor(c){
				anav.style.background=c; 
				 ainnerbox.style.background=c; 
				 window.localStorage.setItem('a',c);	
				}	
	
   
   
   
   
   
   
   //-----------------------在线联系客服模块----------------------------------
      var img1=__uri('/./img/biaoqing1.png');
	  var img2=__uri('/./img/biaoqing2.png');
       var oimg=[img1,img2];
       var onoff=true;
	   
	   oimg1.onmouseover=function(){
		   ochange.style.display='block';
		   }
	   oimg1.onmouseout=function(){
		   ochange.style.display='none';
		   }
	   
	  oimg1.onclick = function()
		  { if (onoff) 
			   { oimg1.src = oimg[1];
				 onoff=false;
				   }
			 else { oimg1.src = oimg[0]; onoff=true;}
		   }  //oimg1.click   "img/biaoqing1.png"
	   
	obtn.onclick=function(){
		if (otext.value=="") { alert("空文档不能传送,请输入内容");}
		 else if (onoff==true) { 
		   obox1.innerHTML += '<div id="left"><p><img src="/./static/pic/biaoqing1_efcd98e.png" />' + otext.value + '</p></div>' ;
		   otext.value = "";
		  }
		 else if (onoff==false) {
			 obox1.innerHTML += '<div id="left"><p><img src="/./static/pic/biaoqing2_fb6aca1.png" />' + otext.value + '</p></div>' ;
		     otext.value = "";
            }
		  
     } //obtn.onclick
	
   oclear.onclick=function(){
	   obox1.innerHTML = "";
	   }
	
	
	} //onload
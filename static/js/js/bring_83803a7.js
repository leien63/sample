var oshou=document.getElementById("shou"),otijiao=document.getElementById("tijiao"),oinput=document.getElementsByTagName("input"),olist=document.getElementById("list"),adiv=olist.getElementsByTagName("div"),aspan=olist.getElementsByTagName("span"),obtn=document.getElementById("btn"),oclose=document.getElementById("close"),otime=null,num=0;obtn.onclick=function(){var e=0;otime=setInterval(function(){adiv[e].className="open",e++,7==e&&clearInterval(otime)},100)},oclose.onclick=function(){for(var e=adiv.length,a=0;a<adiv.length;a++)adiv[a].className="second",otime=setInterval(function(){adiv[e].className="close",e--,0==e&&clearInterval(otime)},100)},$(window).scroll(function(){var e=$(this).scrollTop();e>=200?$("#gotop").stop().fadeIn():$("#gotop").stop().fadeOut()}),$("#gotop").click(function(){$("body,html").stop().animate({scrollTop:0},500)}),$(document).ready(function(){$("#newstable tbody");$("#btnsubmit").click(function(e){if(e.preventDefault(),""===$("#bookname").val()||""===$("#name").val()||""===$("#time").val()||""===$("#number").val())""===$("#bookname").val()?$("#bookname").parent().addClass("has-error"):$("#bookname").parent().removeClass("has-error"),""===$("#name").val()?$("#name").parent().addClass("has-error"):$("#name").parent().removeClass("has-error"),""===$("#time").val()?$("#time").parent().addClass("has-error"):$("#time").parent().removeClass("has-error"),""===$("#number").val()?$("#number").parent().addClass("has-error"):$("#number").parent().removeClass("has-error");else{var a={bookname:$("#bookname").val(),booktype:$("#booktype").val(),name:$("#name").val(),time:$("#time").val(),number:$("#number").val()};$.ajax({url:"./server/insert.php",type:"post",data:a,dataType:"json",success:function(){confirm("恭喜...借书成功！"),window.location.reload()}})}})});
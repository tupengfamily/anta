$(function(){
	$(".navlist").mouseover(function(){
		$(this).find(".nav1").show().end().siblings().find(".nav1").hide();
		$(".nav2").show();
	})
	$(".nav").mouseleave(function(e){
		$(".nav2").hide();
		$(this).find(".nav1").hide();
	})


	$(".nav1:last").css({"left":"-300px"});
	
	$(".navlist>a").siblings().find("a").mouseover(function(){
		$(this).css({"text-decoration":"underline"});
	})
	$(".navlist>a").siblings().find("a").mouseleave(function(){
		$(this).css({"text-decoration":"none"});
	})
	
	var oBanner=$(".banner");
	var oPic=$(".pic");
	var apicist=oPic.find("li");
	var oList=$(".list");
	var aList=oList.find("li");
	var preWidth=apicist.eq(0).width();
	apicist.eq(0).clone(true).appendTo(oPic);
	
	oPic.width((apicist.length+1)*preWidth);
	var aWidth=document.documentElement.clientWidth;
	$(".pic li").width(aWidth);
	
	var i=0;
	var timer=setInterval(function(){
				move();
		},4000);
			
	function move(){
		clearInterval(timer);
		i++;
		if(i==apicist.length+1){
			i=1;
			oPic.css("left",0);
		}
		if(i==-1){
			i=apicist.length-1;
			oPic.css("left",-apicist.length*preWidth)
		}
		oPic.stop().animate({"left":-i*preWidth},300);
			 timer=setInterval(function(){
				move();
			 },4000);
			 
			 if(i==apicist.length){
			   	aList.eq(0).addClass("banlist").siblings().removeClass("banlist");
			   }else{
			   	aList.eq(i).addClass("banlist").siblings().removeClass("banlist");
			   }
			 
			 
		}
	
				   
		aList.hover(function(){
			i=$(this).index()-1;
				move();
				clearInterval(timer);
			},function(){move()})
			   
	/*$(window).resize(function(){
		location.reload();
	})*/
	
	$(".callus>a").click(function(){
		$(".callus2").slideToggle("slow",function(){
			$(".callus>a").text("更多");
		});
		$(this).text("关闭");
		$(".callus3").css({"border":0});
	})
	
	//$(".callus2 dl").find("span")
	
	console.log($(".callus2 dl").find("span"));
	$(".check").click(function(){
		$(this).parent().css({"border":"3px solid #fff"});
	})
})



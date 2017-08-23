$(function(){
	$(".navlist").mouseover(function(){
		$(this).find(".nav1").show();
		$(".nav2").show();
	})
	$(".navlist").mouseleave(function(){
		$(this).find(".nav1").hide();
		$(".nav2").hide();
	})
	$(".nav1:last").css({"left":"-300px"});
	
	$(".navlist>a").siblings().find("a").mouseover(function(){
		$(this).css({"text-decoration":"underline"});
	})
	$(".navlist>a").siblings().find("a").mouseleave(function(){
		$(this).css({"text-decoration":"none"});
	})
	
})
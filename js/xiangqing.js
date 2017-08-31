$(function(){
	//console.log($(".navlist"));
	$.get("../json/navdata.json",function(data){
		var html = template("temnav",data);
		$(".navul .navul1").html(html);
		//console.log(html);
		//console.log(data);
		//console.log($(".navlist"));
	})

	$(".navul1").mouseover(function(){
		$(".nav2").show();
	})
	$(".navul1").mouseleave(function(){
		$(".nav2").hide();
	})


	var aPrewidth=$(".pic li").eq(0).width();
	var alength=$(".pic li").length;
	var oList=$(".list");
	var aList=oList.find("li");
	//console.log(alength);
	//console.log(aPrewidth);
	var aWidth=document.documentElement.clientWidth;
//	console.log(aWidth);
	$(".pic").width(aPrewidth*alength);
	$(".pic li").width(aWidth);
	var timer=setInterval(function(){
		move();
	},4000)
	var i=0;
	function move(){
		clearInterval(timer);
		i++;
		if(i==alength){
			i=0;
		}
		$(".pic").animate({"left":-i*aPrewidth},400);
		timer=setInterval(function(){
			move();
		},4000)
		
		aList.eq(i).addClass("banlist").siblings().removeClass("banlist");		
	}	
	

	
	
		aList.hover(function(){
			i=$(this).index()-1;
				move();
				clearInterval(timer);
		},function(){move()})
	
	
	//动态加载列表数据；
	
	$.get("../json/xiangqingdata.json",function(data){
	/*var html="";
	var arr=[];
	for(var j in data){
		console.log(j);
		//console.log(data[j].minimg);
		var dataimg=data[j].minimg;
		arr.push(dataimg);
		//console.log(dataimg);

	html+="<div class='box'><div class='middleimg'><a href='detail.html?id=" + j + "' title='"+data[j].title+"'>"+
	"<img src='"+data[j].imgsrc+"'/></a></div><ul class='minimg'><li><img src='"+data[j].minimg[0]+"'</li><li><img src='"+data[j].minimg[1]+"'</li></ul><p><span>￥</span>"+data[j].price+"</p>"+
	"<h4><a href='"+data[j].title+"'>"+data[j].title+"</a></div>"
		//console.log(html);
	
	}

	
	$(".imgbox").html(html);*/
	
	for(var item in data){
		var html;
		switch (data[item].minimg.length){
			case 2:{
				console.log(2);
				html = `<div class="box">
				<div class="middleimg">
					<a href="detal.html?id=${item}" title="${data[item].title}">
						<img src="${data[item].imgsrc}" />
					</a>
				</div>
				<ul class="minimg">
					<li>
						<img src="${data[item].minimg[0]}" />
					</li>
					<li>
						<img src="${data[item].minimg[1]}" />
					</li>
				</ul>
				<p><span>￥</span>${data[item].price}</p>	
				<h4>
					<a href="detal.html?id=${item}" title="${data[item].title}">${data[item].title}</a>
				</h4>
			</div>`;
			break;
			}
			case 3:{
				console.log(3);
				html = `<div class="box">
				<div class="middleimg">
					<a href="detal.html?id=${item}" title="${data[item].title}">
						<img src="${data[item].imgsrc}" />
					</a>
				</div>
				<ul class="minimg">
					<li>
						<img src="${data[item].minimg[0]}" />
					</li>
					<li>
						<img src="${data[item].minimg[1]}" />
					</li>
					<li>
						<img src="${data[item].minimg[2]}" />
					</li>
				</ul>
				<p><span>￥</span>${data[item].price}</p>	
				<h4>
					<a href="detal.html?id=${item}" title="${data[item].title}">${data[item].title}</a>
				</h4>
			</div>`;
			break;
			}
			case 4:{
				console.log(4);
				html = `<div class="box">
				<div class="middleimg">
					<a href="detal.html?id=${item}" title="${data[item].title}">
						<img src="${data[item].imgsrc}" />
					</a>
				</div>
				<ul class="minimg">
					<li>
						<img src="${data[item].minimg[0]}" />
					</li>
					<li>
						<img src="${data[item].minimg[1]}" />
					</li>
					<li>
						<img src="${data[item].minimg[2]}" />
					</li>
					<li>
						<img src="${data[item].minimg[3]}" />
					</li>
				</ul>
				<p><span>￥</span>${data[item].price}</p>	
				<h4>
					<a href="detal.html?id=${item}" title="${data[item].title}">${data[item].title}</a>
				</h4>
			</div>`;
			break;
			}
			case 5:{
				console.log(5);
				html = `<div class="box">
				<div class="middleimg">
					<a href="detal.html?id=${item}" title="${data[item].title}">
						<img src="${data[item].imgsrc}" />
					</a>
				</div>
				<ul class="minimg">
					<li>
						<img src="${data[item].minimg[0]}" />
					</li>
					<li>
						<img src="${data[item].minimg[1]}" />
					</li>
					<li>
						<img src="${data[item].minimg[2]}" />
					</li>
					<li>
						<img src="${data[item].minimg[3]}" />
					</li>
					<li>
						<img src="${data[item].minimg[4]}" />
					</li>
				</ul>
				<p><span>￥</span>${data[item].price}</p>	
				<h4>
					<a href="detal.html?id=${item}" title="${data[item].title}">${data[item].title}</a>
				</h4>
			</div>`;
			break;
			}
		}
		$(".imgbox").append($(html));
	}
		$(".minimg").hide();
		$(".box").css({"border":0})
		$(".box").mouseenter(function(){
			
			$(this).find(".minimg").stop().slideDown();
			$(this).css({"border":"1px solid #ddd"});
			var middle=$(this).find(".middleimg img");
			var middleimg=$(this).find(".middleimg img").attr("src");
			//console.log(middleimg);
			$(this).find(".minimg li").mouseenter(function(){
/*				var minimg=Array.from($(this).find("img"));
				console.log(minimg);
				var */
				
				//console.log($(this).index());
				var newmiddleimg = middleimg.slice(0, middleimg.lastIndexOf('.')-1) + ($(this).index()+1) + '.jpg';
				//console.log(newmiddleimg);
				middle.attr({src:newmiddleimg});
				
			})
		})
		
		$(".box").mouseleave(function(){
			$(this).find(".minimg").stop().slideUp();
			$(this).css({"border":0});
/*			var newmiddleimg = middleimg.slice(0, middleimg.lastIndexOf('.')-1) +1+ '.jpg';
			middle.attr({src:newmiddleimg});*/
		})
		
		
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	


})



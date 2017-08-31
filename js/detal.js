$(function(){
	var strSearch=location.search;
	//console.log(strSearch);
	var arrSearch=strSearch.split('=');
	var id=arrSearch[1];
	//console.log(id);
	$.get("../json/xiangqingdata.json",function(data){
		//console.log(data[id].xiangqing[1]);
		var html=`<p class="tit">首页<span>&gt;</span>首页<span>&gt;</span>鞋<span>&gt;</span>男鞋<span>&gt;</span>运动鞋<span>&gt;</span>安踏篮球鞋系列<span>&gt;</span>${data[id].title}<span class="tit">&gt;</span></p>
		<div class="box">
			<div class="minimg">
				<p></p>
				<ul class="minimglist">
					<li class="afterclick"><img src="${data[id].xiangqing[0]}" /></li>
					<li><img src="${data[id].xiangqing[1]}" /></li>
					<li><img src="${data[id].xiangqing[2]}" /></li>
					<li><img src="${data[id].xiangqing[3]}" /></li>
					<li><img src="${data[id].xiangqing[4]}" /></li>
				</ul>
				<p></p>
			</div>
			
			<div class="midimg">
				<img src="${data[id].xiangqing[0]}" />
				<div class="fenxiang">
					<a href="javascript:;">分享</a>
					<a href="javascript:;">收藏商品+</a>
				</div>
				<div class="fangda"><img src=""></div>
				<div class="shadow"></div>
			</div>
			<div class="bigimg">
				<p class="righttit">${data[id].title}<span>款号：${data[id].id}</span></p>
				<p class="rightstart"><span></span><span>(4.9)</span></p>
				<p class="price"><span>￥</span><span>${data[id].price}</span><br />商吊牌价：${data[id].price}   折扣：90% (折让:￥51)</p>
				<p class="xinxi">
					${data[id].xinxi[0]}
				</p>
				<p class="color">颜色：宝蓝/国旗黄/安踏白</p>
				<ul class="imgcolor">
					<li><img src="${data[id].xiangqing[0]}"></li>
					<li><img src="${data[id].xiangqing[1]}"></li>
				</ul>
				<p class="cicun1">
					<span>尺码：40.5</span>
					<span>库存：269</span>
					<span>查看尺码对照表</span>
				</p>
				<ul class="cicun2">
					<li>${data[id].cicun[0]}</li>
					<li>${data[id].cicun[1]}</li>
					<li>${data[id].cicun[2]}</li>
					<li>${data[id].cicun[3]}</li>
					<li>${data[id].cicun[4]}</li>
					<li>${data[id].cicun[5]}</li>
					<li>${data[id].cicun[6]}</li>
					<li>${data[id].cicun[7]}</li>
				</ul>
				<div class="btn">
					<div class="btn1">
						<span>数量：<span id=shuliang>1</span></span>
						<ul class="num">
							<li>1</li>
							<li>2</li>
							<li>3</li>
							<li>4</li>
							<li>6</li>
							<li>6</li>
							<li>7</li>
							<li>8</li>
						</ul>
					</div>
					<div class="btn2" data-id=${id}>加入购物车</div>
					<div class="btn3">立即购买</div>
				</div>
				<p class="shuoming">${data[id].shuoming}</p>
			</div>
		</div>`
		
		$(".body").html(html);
/*		var cicun=data[id].cicun.length;
		console.log(cicun);
		var cicun1="";
		for(let i=0;i<cicun;i++){
			
			//cicun1+="<li>+"data[id].cicun[i]"+</li>"
			console.log(data[id].cicun[i]);
		}
		$(".cicun2").html(cicun1);*/
		$(".minimglist li").click(function(){
			$(this).addClass("afterclick").siblings().removeClass("afterclick");
			var midimgsrc=$(this).find("img").attr("src");
			console.log(midimgsrc);
			var newmiddleimg = midimgsrc.slice(0, midimgsrc.lastIndexOf('.')-1) + ($(this).index()+1) + '.jpg';
			$(".midimg img").attr({src:newmiddleimg});
		})
		
		var imaxl=$(".midimg").width()-$(".shadow").width();
		var imaxh=$(".midimg").height()-$(".shadow").height();
		//var imgmaxl=0,imgmaxh=0;
		//console.log(imaxl,imaxh);
		
		$(".midimg").mouseenter(function(ev){
			
			var e=ev||window.event;
		
			$(".midimg .fangda").show();
			var bigimgsrc=$(".midimg>img").attr("src");
			$(".fangda img").attr({src:bigimgsrc});
			
/*		var	iL = e.clientX - $(".minimg").offsetLeft - $(".midimg").offsetLeft - $(".shadow").offsetWidth / 2,
			iT = e.clientY -$(".minimg").offsetTop  -  $(".midimg").offsetTop  - $(".shadow").offsetHeight / 2;
			//console.log(il,iT);
			console.log(iL);*/
		})
		
		$(".midimg").mouseleave(function(){
			$(".midimg .fangda").hide();
		})
		
		$(".btn .btn1").click(function(){
			$(this).find(".num").slideToggle();
			$(".num").find("li").click(function(){
				var numm=$(this).text();
				$("#shuliang").text(numm);
			})
				
		})
		
		
		
		
		$(".btn2").click(function(){
			var id=$(this).attr("data-id");
			console.log($(this).val())
			//console.log(id);
			//var num = Number($(this).prev().val());
			var  num = Number($("#shuliang").text());
			console.log($("#shuliang").text());
			window.location.reload();
			cookie(id,num,false);
		})
		
		//console.log(carhtml);
		
		//$(".shopping").html(carhtml);
		
		
		
		
		var strCookie = $.cookie("cart");
		var objCookie = strCookie ? JSON.parse(strCookie):{};
		console.log(objCookie);
		var carhtml = "";
		for(var attr in objCookie) {
						//console.log(data[attr])
			carhtml+="<div class='barket1' id='"+attr+"'><input type='checkbox' />"+
					"<a href='detal.html?id="+attr+"'><img src='"+data[attr].imgsrc+"'></a><span class='cartit'>"+data[attr].title+"</span>"+
					"<span class='carshu carnumleft'>-</span><span class='carshu carnum'>"+objCookie[attr]+"</span><span class='carshu carnumright'>+</span>"+
					"<span class='carprice'>"+data[attr].price+"</span><span class='delete'>&times;</span></div>"	
						
						
			}
		
		
		$(".shopping .barket").html(carhtml);
		
		$(".shopcar").click(function(){
			$(".barket").fadeToggle();
			//alert(1);
		})
		
		$(".shopping").find(".barket").mouseenter(function(){
			$(this).find(".carshu").show();
			//console.log(6);
		})
		
		
		
			$(".carnumleft").click(function() {
						var id = $(this).parent().attr("id");
						var num = --objCookie[id];
						cookie(id,num,true);
						console.log(id);
						$(".carnum").text(num);
						return false;
						
					})
			$(".carnumright").click(function() {
						var id = $(this).parent().attr("id");
						var num = ++objCookie[id];
						console.log(num);
						$(".carnum").text(num);
						cookie(id,num,true);
						return false;
					})
		
			
		//console.log(objCookie);
		
		
		
		
		
		
	})


	
	
})
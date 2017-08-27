$(function(){
	//点击时获取按钮 切换手机或者邮箱注册
	$(".btn span").click(function(){
		//console.log($(".btn span"));
		$(this).addClass("btn1").siblings().removeClass("btn1");
		console.log($(this).index());
		if($(this).index()==0){
			$(".zmain form").eq($(this).index()+1).addClass("form").siblings().removeClass("form");
		}else{
			$(".zmain form").eq(0).addClass("form").siblings().removeClass("form");
		}
		
	});
	
	
	var flag={
		"name":false,
		"password":false,
		"password1":false,
		"yzm":false
	}
	
//验证邮箱地址
	$("#username").blur(function(){
		var email=$(this).val();
		//console.log(email);
		if(email==""){
			$(".error1").css({"z-index":"5"}).text("邮箱地址不能为空").click(function(){
				$(".error1").css({"z-index":"-5"});
				console.log(2);
			})
		}else{
			var oReg=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
			if(!oReg.test(email)){
				$(".error1").css({"z-index":"5"}).text("邮箱地址不正确").click(function(){
				$(".error1").css({"z-index":"-5"});
				//console.log(2);
				})
			}else{
					flag.name=true;
					//console.log(flag.name);
				}
		}
		
		//console.log(1);
	})

//验证两次密码是否一致

$("#password").blur(function(){
	var psw=$(this).val();
	if(psw==""){
				$(".error2").css({"z-index":"5"}).text("密码不能为空").click(function(){
				$(".error2").css({"z-index":"-5"});
				//console.log(2);
			})
		}else{
			var oReg=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
			if(!oReg.test(psw)){
				$(".error2").css({"z-index":"5"}).text("密码字母数字组合6-20位").click(function(){
				$(".error2").css({"z-index":"-5"});
				//console.log(2);
			})
			}else{
				flag.password=true;
			}
		}
		
	})

$("#password1").blur(function(){
	var psw1=$(this).val();
	
	
	if(!(psw1==$("#password").val())){
		
				$(".error3").css({"z-index":"5"}).text("两次输入密码不一致").click(function(){
				$(".error3").css({"z-index":"-5"});
				console.log(psw1);
			})
		}else{
			flag.password1=true;
		}
	})



//生成并验证验证码
function createcode(){
	var code="";
	for(var i=0;i<4;i++){
		code+=Math.floor(Math.random()*10);
	}
	
	//$(".yzm span").text(code);
	return code;
}

$(".yzm span").text(createcode());
//console.log(createcode());
$(".yzm span").click(function(){
	
	$(".yzm span").text(createcode());
	//console.log(code);
	console.log(5)
})

//console.log($(".yzm span").text());

$("#yzm").blur(function(){
	var yzm=$(this).val();
	if(!(yzm==$(".yzm span").text())){
				
				$(".error4").css({"z-index":"5"}).text("验证码错误").click(function(){
				$(".error4").css({"z-index":"-5"});
				//console.log(2);
				$(".yzm span").text(createcode());
			})
	}else{
		flag.yzm=true;
	}
})


//判断都正确时点击提交

$(".submit").click(function(){
	var ok=flag.name&&flag.password&&flag.password1&&flag.yzm;
	if(ok==false){
		alert("请重新填写");
	}else{
		
		var username=$("#username").val();
		var password=$("#password").val();
		//console.log(username);
		$.get("../php/zhuce.php",{"username":username,"password":password},function(data){
			/*alert("注册成功");
			console.log(data);*/
			if(data==1){
				alert("注册成功，请登陆");
				window.location.replace("../html/denglu.html");
			}else{
				alert("请填写有效信息");
			}
		})
	}
})
	
})
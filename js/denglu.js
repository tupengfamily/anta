$(function(){
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
	//console.log(5)
})
	
	
	
	
	
	$(".submit1").click(function(){
		//console.log(1);
				
		var username=$("#username").val();
		var password=$("#password").val();
		//console.log(username);
		var yzm=$(".inp1").val();
		var yzm1=$(".yzm span").text();
		if(yzm==yzm1){
					
		$.get("../php/denglu.php",{"username":username,"password":password},function(data){
			/*alert("注册成功");
			console.log(data);*/
			if(data==1){
				alert("登陆成功");
				window.location.replace("../index.html");
			}
			
			if(data==0){
		
					$(".error1").css({"z-index":"5"}).text("账号 邮箱 手机号不正确").click(function(){
					$(".error1").css({"z-index":"-5"});
					//console.log(psw1);
				})
			}
			
			if(data==2){
		
					$(".error2").css({"z-index":"5"}).text("密码不正确").click(function(){
					$(".error2").css({"z-index":"-5"});
					//console.log(psw1);
				})
			}
			
			})
		}else{
					$(".error3").css({"z-index":"5"}).text("验证码不正确").click(function(){
					$(".error3").css({"z-index":"-5"});
					//console.log(psw1);
				})
		}
		//console.log(yzm,yzm1);

	})
})
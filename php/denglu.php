<?php
$usernam=$_GET["username"];
$password=$_GET["password"];
$arr=['547833486@qq.com','1036392297@qq.com','tupengfamily@outlook.com'];
$arr1=['tutu123456','tutu1234567','tutu12345678'];
//echo $name;
if(in_array($usernam,$arr)){
	if(in_array($password,$arr1)){
		$a=array_search($usernam,$arr);
		$b=array_search($password,$arr1);
		if($a==$b){
			echo '1';
		}
	}else{
		echo '2';
	}
	
}else{
	echo '0';
}





?>
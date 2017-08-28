<?php
$usernam=$_GET["username"];
$password=$_GET["password"];
$arr=['547833486@qq.com','1036392297@qq.com','tupengfamily@outlook.com'];
$arr1=['tutu123456','tutu1234567','tutu12345678'];
//echo $name;
if(in_array($usernam,$arr)){
	echo '1';
}else{
	echo '0';
}





?>
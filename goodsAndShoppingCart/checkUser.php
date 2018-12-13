<?php
	header("Content-type:text/html;charset=utf-8");
	//一、接收
	$username = $_POST["username"];
	$pass = $_POST["pass"]
	//二、处理
	//1、连接数据库服务器
	$con = mysql_connect("localhost","root","root");
	if(!$con){
		die ("连接出错".mysql_error());
	}else{

		//2、选择数据库
		mysql_select_db("tmall",$con);
		//3、执行sql语句
		$sqlstr = "select * from user where username='$username'";

		$result = mysql_query($sqlstr,$con);  //执行成功或者没有成功，成功是1

		$rows = mysql_num_rows($result);

		if($rows==0){
			$sqlstr = "insert into user values('$username','$pass')";
			$result = mysql_query($sqlstr,$con);
			mysql_close($con);
			if($result==1){
				echo "0";  //没有被注册
			}
		}else{
			echo "1";  //已经被注册
		}
	}								
?>
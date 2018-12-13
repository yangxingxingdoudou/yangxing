// window.onload = function(){
// 	$("#btn").onclick = function(){
// 		//1、实例化对象
// 		let xhr = new XMLHttpRequest();
// 		//2、设置参数
// 		xhr.open("post","deng.php",true);
// 		//3、设置回调函数
// 		xhr.onreadystatechange=function(){

// 			if(xhr.readyState==4 && xhr.status==200){
// 				console.log(xhr.responseText);
// 				//4、响应
// 				if(xhr.responseText==0){
// 					alert("用户名或者密码错误！")
// 				}else{
// 					console("ok")
// 					addCookie("username",$("#one").value,7);
// 					location.href = "index.html";
// 				}
// 			}
			
// 		}
// 		//5、发送请求
// 		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
// 		let str="username="+$("#one").value+"&pass="+$("#two").value;
// 		console.log(str);
//     	xhr.send(str);	
// 	}
// }

window.onload = function(){
	$("#btn").click(function(){
		let usernameVal = $("#one").val();
		let passVal = $("#two").val();
		let str = "username="+usernameVal+"&pass="+passVal;
		if(usernameVal!=""&&userpassVal!=""){
			$.ajax({
				type:'post',
				url:'deng.php',
				data:str,
				success:function(data){
					if(data==1){
						addCookie("username",$("#one").value,7);
						location.href = "index.html"; 
					}
					else{
						$(".userSpan").html("密码输入有误，请重新输入");
					}
				}
			})
		}
		else{
			$(".userSpan").html("用户名或者密码有误，请重新输入");
		}
	})
}
	

window.onload = function(){
	$("#one").onblur = function(){
		//1、账号的规则：数字字母下划线组成，且数字不能开头，长度在6-15之间
		var reg = /^[a-zA-Z_]\w{5,14}$/;		
		//2、电子邮件的规则：若干个数字字母下划线@若干个数字字母下划线.(com|cn|net)结尾
		var reg1 = (/^[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.(com|cn|net)$/i) || (/^1[3-9]\d{9}$/i) ||(/^[\u4e00-\u9fa5]{2,10}$/);
		//3、手机号码的规则：1开头，第二位是3-9，9位数字
		var reg2 = /^1[3-9]\d{9}$/i;
		if(reg.test(this.value) || reg1.test(this.value) || reg2.test(this.value)){
			this.nextElementSibling.innerHTML = "√";
			this.nextElementSibling.style.color = "green";
		}else{
			this.nextElementSibling.innerHTML = "格式有误";
			this.nextElementSibling.style.color = "red";
		}
		
	}
	
	$("#subm").onclick= function(){
		//1、实例化对象
		let xhr = new XMLHttpRequest();
		//2、设置请求参数
		xhr.open("post","zhu.php",true);
		//3、设置回调函数
		xhr.onreadystatechange=function(){

			if(xhr.readyState==4 && xhr.status==200){
				console.log(xhr.responseText);

					//5、接收响应
				if(xhr.responseText=="1"){	
					alert("注册成功！")
				}else{
					alert("注册失败！")
				}
			}
			
		}
		//5、发送请求
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		let str="username="+$("#one").value+"&pass="+$("#two").value;
		xhr.send(str);
		console.log(str);
	}

}
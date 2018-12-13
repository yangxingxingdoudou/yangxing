window.onload = function(){

$(".head_left>a").hover(
	function(){
		$(this).css("color","red");
	},
	function(){
		$(this).css("color","#999");
	}
)

let s1 = new Slider({
		$box:$(".slider"),
		width:1903,
		height:500,
		imgs:["img/lun1.jpg","img/lun2.jpg","img/lun1.jpg","img/lun2.jpg"],
		btnColor:"#fff",
		btnHighColor:'red',
		btnSize:20,
		isCircle:true,
		timeSpace:3000
	});

	let s2 = new Slider({
		$box:$(".topsh"),
		width:488,
		height:274,
		imgs:["img/0.jpg_.webp","img/1.jpg_.webp"],
		btnColor:"#fff",
		btnHighColor:'red',
		btnSize:20,
		isCircle:true,
		timeSpace:2000
	});


// $(".shose_box").hover(
// 	function(){
// 		$(this).css("opacity",".6");
// 	},
// 	function(){
// 		$(this).css("opacity","1");
// 	}
// )

$(".selec").hover(
	function(){
		$(this).children(".yijin").css("display","block");
	},
	function(){
		$(this).children(".yijin").css("display","none");
	}
)

$(".eig").hover(
	function(){
		$(this).children(".support").css("display","block");
	},
	function(){
		$(this).children(".support").css("display","none");
	}
)

$(".last").hover(
	function(){
		$(this).children(".goodsList").css("display","block");
	},
	function(){
		$(this).children(".goodsList").css("display","none");
	}
)

}




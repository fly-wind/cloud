
var pcurrent;
var pnext;
var pprev;

var nextImg = function(){
	$('.pro_photo').removeAttr("style");
		pcurrent.css("left","0");
		pcurrent.animate({left: '-1100px'},'slow',function(){
			$(this).removeAttr("style");
		});	
		pnext = pcurrent.next();
		if(pnext.length === 0) {
			pnext = $(".pro_photo:first");
		}
		pnext.animate({left: '0'},'slow');			
		pcurrent = pnext;
}

var show_photo = function(){

	pcurrent = $(".pro_photo:first");
	

	//初始化显示第一张图片
	pcurrent.css("left","0");

	//点击前一页
	$(".prev").click(function(){

		//去除所有样式，显示当前
		$('.pro_photo').removeAttr("style");
		pcurrent.css("left","0");

		//往右移动退出
		pcurrent.animate({left: '1100px'},'slow');	
		
		//赋值下一元素
		pprev = pcurrent.prev();

		//已经是第一页，则前一个赋值为组中的最后一个元素
		if(pprev.length === 0)
			pprev = $(".pro_photo:last");
		
		//前一元素移动到左边，以便下次依旧从左边进入
		pprev.css("left","-1100px");	
		//显示前一元素
		pprev.animate({left: '0'},'slow');	

		//当前元素为前一元素		
		pcurrent = pprev;
	});
	$(".next").click(function(){
		nextImg();

	});
}


//var pcurrent = $(".pro_photo:first");
var changImg = function(){

	//初始化显示第一张图片
	pcurrent.css("left","0");

	nextImg();
}

$(document).ready(function(e){
	show_photo();
	setInterval(changImg,5000);
});

$(function () {
	$("[data-toggle='tooltip']").tooltip();
	// 获取所有子元素宽度
	var width=30; //应为原本ul上有padding-left
	//便利子元素
	 $(".nav-tabs").children().each(function(index,element){
	 	// width+=$(element).width();
	 	width+=element.clientWidth;
	 	console.log(width)
	 })
	 //此时的width等于所有li的宽度和
	 //判断当前ul宽度是否超出屏幕，超出屏幕显示横向滚动
	 if (width>$(window).width()) {
	 	$(".nav-tabs").css("width",width).parent().css('overflow-x','scroll')
	 }
	  
	 $("#news .nav-pills a").on("click",function(){
	 	var value=$(this).data('tit');
	 	$(".news-title").text(value)
	 })

	 var strarX;
	 $(".carousel").on("touchstart",function(e){
	 	startX=e.originalEvent.touches[0].clientX;
		// console.log(startX);
	 });
	  $(".carousel").on("touchmove",function(e){
	 	endX=e.originalEvent.touches[0].clientX;
	 });
	  $(".carousel").on("touchend",function(e){
	  	var chazhi=Math.abs(endX-startX)
	  	if (chazhi>50) {
	  		console.log(startX>endX?"左":"右");
	  		$(this).carousel(startX>endX?"next":"prev")
	  	}
		
	 });
})
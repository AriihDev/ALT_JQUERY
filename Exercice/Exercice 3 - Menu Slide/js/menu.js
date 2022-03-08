$(function(){
	// cacher le bloc des "ul de li de #navigation
	$("#navigation li ul").hide();// ou bien $("ul li ul").hide();
	//$(".menu ul").hide(); si les 2 li ont la classe="menu"
	
	$("li").hover(
	     function(){
			 $("ul",this).slideDown(2000);
		 },function(){
			 $("ul",this).slideUp(1200);
		 }
	);
	
})

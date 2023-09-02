function leftColorOn() {
	window.some_talking.style.borderLeftColor = "#f6b541";
}
function leftColorOff() {
	window.some_talking.style.borderLeftColor = "#000";
}
function shadow() {
	document.getElementById("iframe").style.boxShadow= "5px 5px 8px #ddd,-5px -5px 8px #ddd";
}
function noShadow() {
	document.getElementById("iframe").style.boxShadow= "none";
}
$("#btn1").click(function(){
	$("#result_of_code").slideDown(5000);
	$(this).fadeOut(5000,function(){
		$("#btn2").css("display","block");
	});
});
$("#btn2").click(function(){
	$("#result_of_code").fadeOut(5000);
	$(this).fadeOut(5000,function(){
		$("#btn1").css("display","block");
	});
});
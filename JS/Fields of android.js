//start of modal
function showJavaModal(){
	document.getElementById("java-modal").style.display="block";
}
function hideJavaModal(){
	document.getElementById("java-modal").style.display="none";
}
//end java modal
function showKotlinModal(){
	document.getElementById("kotlin-modal").style.display="block";
}
function hideKotlinModal(){
	document.getElementById("kotlin-modal").style.display="none";
}
//end of model
var i = 0;
var slideImage = ['img/andriod1.png','img/andriod2.png','img/andriod3.jpg','img/andriod4.jpg'];
function slideShow(){
	window.slideshowNav.src = slideImage[i];
	if ( i < slideImage.length - 1 ){
		i++;
	}
	else{
		i = 0;
	}
	setTimeout("slideShow()",2000);
}
slideShow();
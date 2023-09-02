function showSyntaxModal(){
	document.getElementById("syntax-modal").style.display="block";
	document.getElementById("video").src=document.getElementById("video1").title;
}
function showObjectModal(){
	document.getElementById("syntax-modal").style.display="block";
	document.getElementById("video").src=document.getElementById("video2").title;
}
function showDataModal(){
	document.getElementById("syntax-modal").style.display="block";
	document.getElementById("video").src=document.getElementById("video3").title;
}
function hideModal(){
	document.getElementById("syntax-modal").style.display="none";
	document.getElementById("video").src="";
}
function next1(){
	document.getElementById("syntax").style.display="none";
	document.getElementById("data").style.display="none";
	document.getElementById("object").style.display="block";
	document.getElementById("video").src=document.getElementById("video2").title;
	document.getElementById("next1").style.display="none";
	document.getElementById("next2").style.display="block";
	document.getElementById("previous1").style.display="block";
	document.getElementById("previous2").style.display="none";
}
function previous1(){
	document.getElementById("syntax").style.display="block";
	document.getElementById("video").src=document.getElementById("video1").title;
	document.getElementById("object").style.display="none";
	document.getElementById("data").style.display="none";
	document.getElementById("next2").style.display="none";
	document.getElementById("next1").style.display="block";
	document.getElementById("previous1").style.display="none";
}
function next2(){
	document.getElementById("syntax").style.display="none";
	document.getElementById("object").style.display="none";
	document.getElementById("data").style.display="block";
	document.getElementById("video").src=document.getElementById("video3").title;
	document.getElementById("next2").style.display="none";
	document.getElementById("previous2").style.display="block";
}

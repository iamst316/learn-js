function hi(){
	document.getElementById("hi").innerHTML = "Hello by Js";
	document.getElementById("hi1").innerHTML = "Hello by Js v2";
}


function toggleHi(){
	count+=1;
	if(count%2!=0){
		document.getElementById("toggle").innerHTML = "Show Hello";
	}
	else{
		document.getElementById("toggle").style.display = "hidden";
	}
}
// JavaScript Document
var regex = /ipr/;
if(regex.test(document.body.innerHTML )){
	document.getElementById("submit").click();
}
var regex = /pchome/
if(regex.test(document.body.innerHTML )){
	document.getElementsByName("frmSetPreceptor")[0].submit();
}
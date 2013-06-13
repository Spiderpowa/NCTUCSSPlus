// JavaScript Document
var url = document.URL;
function __(name){return $(document.createElement(name));}

$('head').ready(function(){
	$('body').hide();
	setTimeout("$('body').show()",700);
});
$('body').ready(function(){
	setTimeout("$('body').show()",200);
});

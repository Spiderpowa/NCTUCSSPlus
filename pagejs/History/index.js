$(document).ready(function(){
var center = $('center').first();
var s = center.text().search('請勿透過');
if(s>=0){//found
	var nextp = center.next();
	if(nextp.text().search('回選課')>=0)
		nextp.remove();
	center.remove();
	$('title').text('課程時間表');
}
	
});
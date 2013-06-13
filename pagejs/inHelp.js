$('*').removeAttr('bgcolor');
$('*').removeAttr('text');
$('style').remove();

$('head').append('<style> \
			   .header{background-image:url('+chrome.extension.getURL('pagecss/inHelp/header_bg.gif')+');} \
			   .left{background-image:url('+chrome.extension.getURL('pagecss/inHelp/l_bg.gif')+');} \
			   .right{background-image:url('+chrome.extension.getURL('pagecss/inHelp/r_bg.gif')+');} \
			   .menu ul li a:hover {background-image:url('+chrome.extension.getURL('pagecss/inHelp/r_menu.gif')+');} \
			   .menu ul li a:hover span {background-image:url('+chrome.extension.getURL('pagecss/inHelp/l_menu.gif')+');} \
			   </style>');

var clrdiv=__('div').clone();
clrdiv.attr('class','clr');

var maindiv = __('div').clone().prependTo($('body'));	maindiv.attr('class','main');
//--Head--
var headdiv = __('div').clone().appendTo(maindiv);		headdiv.attr('class','header');
var head_resize = __('div').clone().appendTo(headdiv);	head_resize.attr('class','header_resize');
var logo = __('div').clone().appendTo(head_resize);	logo.attr('class','logo');
clrdiv.clone().appendTo(head_resize);
var menu = __('div').clone().appendTo(head_resize);	menu.attr('class','menu');
clrdiv.clone().appendTo(head_resize);
var text_resize = __('div').clone().appendTo(headdiv);	text_resize.attr('class','headert_text_resize');
var headertimg = __('img').clone().appendTo(text_resize);
headertimg.attr('src',chrome.extension.getURL('pagecss/inHelp/img_main.jpg'));
clrdiv.clone().appendTo(head_resize);

//Logo
logo.append('<h1><a href="index.html"><span>NCTU</span> Course Select System<br /> \
	  <small>With NCTU CSS+</small></a></h1>');
//Menu
var menuul = __('ul').clone().appendTo(menu);
var menulist=[["功課表","adSchedule.asp"],["預排功課表","testCourse/testCourse.asp"],["課程時間表","Course/History/index.asp"],["預警系統","Alert/alert.asp"],["登出","inTheEnd.asp","_top"]];
for(var i=0;i<menulist.length;i++){
	var li = __('li').clone().appendTo(menuul);
	var a = __('a').clone().appendTo(li);
	var span = __('span').clone().appendTo(a);
	a.attr('href',menulist[i][1]);
	if(menulist[i].length>2)
		a.attr('target',menulist[i][2]);
	span.text(menulist[i][0]);
}
//--Head End--

//--Body--
var bodydiv = __('div').clone().appendTo(maindiv);		bodydiv.attr('class','body');
var body_resize = __('div').clone().appendTo(bodydiv);	body_resize.attr('class','body_resize');
var left = __('div').clone().appendTo(body_resize);	left.attr('class','left');
//	$('center').eq(0).appendTo(left);
//	var h2 = __('h1').prependTo(left);
//	h2.text($('center > font').eq(0).text());
left.prepend('<h2>How to use<br /><span>About Course Select System.</span></h2>');
var divs = $('div[class^="div"]');
var ul,li;
for(var i=0;i<divs.length;i++){
	var div=divs.eq(i);
	if(div.attr('class')=='divHead'){
		__('h3').appendTo(left).text(div.text());
		ul = __('ul').clone().appendTo(left);
		ul.attr('class','sponsors');
	}else if(div.attr('class')=='divDesc'){
		var li=div.children('ul').eq(0).children('li');
		if(!li.length)
			ul.append('<li class="sponsors">'+div.children('ul').eq(0).html().replace('font','span')+'</li>');
		for(var j=0;j<li.length;j++){
			ul.append('<li class="sponsors">'+li.eq(j).html().replace('font','span')+'</li>');
		}
	}
}
var right=__('div').clone().appendTo(body_resize);	right.attr('class','right');
right.append('<h2>Features<br /><span>What\'s inside NCTU CSS+</span></h2><ul> \
			 <li><a href="https://github.com/Spiderpowa/NCTUCSSPlus">Fork me on Github</a></li> \
			 <li><a href="#">美化選課系統介面</a></li> \
			 <li><a href="#">跳過繁瑣的登入畫面</a></li> \
			 <li><a href="#">問卷一鍵填寫</a></li> \
			 <li><a href="http://www.nba.nctu.edu.tw/~jim221/chrome/NCTUCSSPlus/" target="_blank">最新消息</a></li> \
			 </ul>');
//--Body End--
clrdiv.clone().appendTo(body_resize);

$('center').eq(0).remove();
$('center > font').eq(0).remove();
$('table[width="100%"]').remove();
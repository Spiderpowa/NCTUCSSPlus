$(document).ready(function(){
var frame=$('frameset');
if(frame.length){//index
	frame.attr('framespacing',0);
	frame.attr('frameborder',0);
	frame.attr('border',0);
	frame.eq(0).attr('cols','250,*');
}else{
	//checklogin
	var fonts = $('font');
	var islogin = false, i;
	for(i=0;i<fonts.length;++i){
		if(fonts.eq(i).text().search('登入選課系統')>=0){
			islogin = true;
			break;
		}
	}
	if(islogin){
		var oldext = getCookie('oldcssplus');
		if(oldext == '1'){
			alert('你尚未移除舊版本的擴充功能(前方有Beta字樣)，可能會造成錯誤，請盡速移除！');
			setCookie('oldcssplus',null,0);
		}
		var table = $('table').eq(1);
		var tds = table.find('td,th');
		
		$('#login-fieldset').css('border', 'none');
	
		table.removeAttr('bgcolor');
		table.removeAttr('border');
		table.addClass('ui-helper-reset ui-widget ui-corner-all');
		table.css('min-width', '700px');
		
		tds.eq(1).addClass('ui-helper-reset ui-widget-content ui-corner-all');
		tds.eq(1).css('height', '400px');
		
		tds.first().addClass('ui-helper-reset ui-state-default ui-corner-all');
		tds.first().find('font').removeAttr('color');
		
		//lottery mode
		setCookie('lotterymode', null, 0);
		var submitinput = $('input[type="submit"]');
		var lottery = $('<input>');
		lottery.attr('type', 'submit');
		lottery.click(function(){
			setCookie('lotterymode', '1', 999);
		});
		lottery.val('開獎模式');
		lottery.addClass('red');
    lottery.attr('title', '"查詢選課狀態"將會自動重新整理，讓你輕鬆看選課開獎！');
		submitinput.parent().after($('<p>').append(lottery));
    
    lottery.tooltip();
		
		//recover corse list
		//var list = $('<tr><td align="middle"><a href="http://timetable.nctu.edu.tw/" target="_blank">課程時間表</a> <a href="http://cos.adm.nctu.edu.tw/Course/History/index.asp" target="_blank">(舊版)</a></td></tr>');
		//table = $('table').eq(3);
		//table.find('tr').eq(1).after(list);
		
		//Fix people status
		$('#sys_lvl_filter').css('padding-left', '7px');
		
		//New System Status
		var lvl_image = ['pbar-green.gif', 'pbar-yellow.gif', 'pbar-orange.gif', 'pbar-red.gif'];
		var level = Math.floor(parseInt($('#sys_lvl_filter').css('margin-top'), 10)/39);
		// get text
		var sys_lvl_div = $('#web_status div.sys_lvl')
		var sys_lvl_text = new Array();
		sys_lvl_div.each(function(i, e){
			var obj = $(e);
			sys_lvl_text.push(obj.text());
		});
		//alert(sys_lvl_text);
		var sys_lvl_holder = $('<div id="sys_lvl_holder">');
		var sys_lvl_title = $('<div>').appendTo(sys_lvl_holder);
		var sys_lvl_content = $('<div>').appendTo(sys_lvl_holder);
		var sys_lvl_progress = $('<div>').appendTo(sys_lvl_content);
		sys_lvl_content.append('<h4 style="text-align:center">線上人數: '+sys_lvl_text[level]+'</h4>');

		sys_lvl_progress.progressbar({value:10+30*level});
		sys_lvl_progress.css('height', '20px');

		
		var sys_lvl_val = sys_lvl_progress.find('.ui-progressbar-value');
		sys_lvl_val.css('background-image', 'url('+chrome.extension.getURL('lib/img/'+lvl_image[level])+')');
		
		lottery.parent().after($('<p>').append(sys_lvl_holder));
		$('#web_status').remove();
	}
}

});
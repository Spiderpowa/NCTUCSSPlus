function countdown(){
	var div = $('div#countdown_div');
	var input = $('input#countdown_input');
	var value = input.attr('value');
	
	if(value <= 0){
		doReload();return
	}
	input.attr('value', value-1);
	updatediv();
	
	setTimeout('countdown();',1000);
}

function doReload(){
	var form = $('form#myform');
	form.submit();
}

function updatediv(){
	var div = $('div#countdown_div');
	var input = $('input#countdown_input');
	
//	div.html(input.attr('value') + '秒後重新整理，<a href="javascript:setCookie(\'lotterymode\',null,0);")>關閉開獎模式</a>');
	div.text(input.attr('value') + '秒後重新整理');
}

$(document).ready(function(){
	var lot = getCookie('lotterymode');
	var h1 = $('h1');
	var div = $('<div>');
	var form = $('<form>');
	var input = $('<input>');
	var qKey = $('<input>');
	
	if(lot != '1'){
//		h1.after('<a href="javascript:setCookie("lotterymode",1,999);")>開啟開獎模式</a>');
		return;
	}
	
	//making elements
	form.attr('method', 'post');
	form.attr('id', 'myform');
	form.attr('action', 'adNow.asp');
	form.html('<input type="hidden" value="選課狀況" name="qAction" /><input type="hidden" value="" name="qAcy" /><input type="hidden" value="" name="qSemester" />');
	qKey.attr('id', 'qKey');
	qKey.attr('name', 'qKey');
	qKey.attr('type', 'hidden');
	form.append(qKey);
	h1.after(form);
	
	input.attr('type','hidden');
	input.attr('value',6);
	input.attr('id', 'countdown_input');
	
	h1.after(div);
	div.after(input);
	div.attr('id', 'countdown_div');
	
	//making school id
	var userid = getCookie('UserId');
	if(userid==null || userid==''){
		var dt = $('dt');
		dt.each(function(index){
			var txt =$(this).text();
			if(txt.search('學　　號')<0)return;
			var id = parseInt(txt.split('：')[1], 10);
			var qKey = $('input#qKey');
			qKey.attr('value', id);
		});
	}
	updatediv();
	countdown();
});
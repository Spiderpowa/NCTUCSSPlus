var cen=$("center");
var ul=__('ul').appendTo(cen);
var table=$('table');
var li=-1;
table.hide();
ul.attr('id','menu');

//CSS image
var menu='url('+chrome.extension.getURL('menu.gif')+')';
var submenu='url('+chrome.extension.getURL('submenu.gif')+')';
var liobj;
for(var i=0;i<table.length;i++){
  var t=table.eq(i).children("tbody").eq(0);
  var tr=t.children("tr").eq(0)
  var c=tr.attr("class");
  if(c=="TRHeader"){//header
	li++;
	h=tr.text().replace(/(\n|　| |	)*/gi,'');
	liobj = __('li').appendTo(ul);
	liobj.attr('id','menu_'+li);
	var href = tr.children('td').children('a');
	if(href.length){
		var a = href.eq(0).appendTo(liobj);
		a.css('text-decoration','underline');
	}else{
		var a = __('a').appendTo(liobj);
		a.attr('href','#');
		a.text(h);
	}
	a.click(function(){
		var menuid = '#'+$(this).parent().attr('id').replace('menu_','submenu_');
		$('[class="submenu"][id!="'+menuid.replace('#','')+'"]').hide(400);
		$(menuid).toggle(400);
	});
	a.css('background-image',menu);
  }else{//content
	  var subtr=t.children("tr");
	  var subul = __('ul').appendTo(liobj);
	  subul.attr('class','submenu');
	  subul.attr('id','submenu_'+li);
	  for(var j=0;j<subtr.length;j++){
		  var href =  subtr.eq(j).children('td').eq(0).children('a').eq(0);
		  var subli = __('li').appendTo(subul);
		  subli.append(href);
		  href.css('background-image',submenu);
	  }
  }
}

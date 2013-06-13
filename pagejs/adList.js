// JavaScript Document

function findrelate(obj){
	var names=$(obj).attr('id').split('r');
	return names[0]+'r'+ (names[1]=='1'?'0':'1');
}
$('head').append('<style> \
				 tbody td a.link { background-image:url(\''+chrome.extension.getURL('pagecss/adList/bullet_blue.png')+'\');} \
				 tbody td a:visited.link { background-image:url(\''+chrome.extension.getURL('pagecss/adList/bullet_blue.png')+'\');} \
				 tbody td .nolink { background-image:url(\''+chrome.extension.getURL('pagecss/adList/bullet_white.png')+'\'); }\
				 </style>');

var building = {
		'C':'C 竹銘館 (博愛校區)',
	'E':'E 教學大樓 (博愛校區)',
	'LI':'LI 實驗館 (博愛校區)',
	'BA':'BA 生科實驗室 (博愛校區)',
	'BB':'BB 生科實驗二館 (博愛校區)',
	'BC':'BC 學生活動中心 (博愛校區)',
	'F':'F 人社二館 (光復校區)',
	'EA':'EA 工程一館 (光復校區)',
	'EB':'EB 工程二館 (光復校區)',
	'EC':'EC 工程三館 (光復校區)',
	'ED':'ED 工程四館 (光復校區)',
	'EE':'EE 工程五館 (光復校區)',
	'EF':'EF 工程六館 (光復校區)',
	'M':'M 管理館 (光復校區)',
	'MB':'MB 管理二館 (光復校區)',
	'SA':'SA 科學一館 (光復校區)',
	'SB':'SB 科學二館 (光復校區)',
	'A':'A 綜合一館 (光復校區)',
	'AB':'AB 綜合一館地下室 (光復校區)',
	'AC':'AC 學生活動中心 (光復校區)',
	'CS':'CS 計算機與網路中心 (光復校區)',
	'HA':'HA 人社一館 (光復校區)',
	'ES':'ES 電子資訊大樓 (光復校區)',
	'CY':'CY 交映樓 (光復校區)',
	'EO':'EO 光電大樓 (光復校區)',
	'EV':'EV 環工館 (光復校區)',
	'TA':'TA 會議室 (台北校區)',
	'TD':'TD 一般教室 (台北校區)',
	'TC':'TC 演講廳 (台北校區)',
	'CM':'CM 奇美樓 (台南校區)',
	'HK':'HK 客家大樓 (六家校區)',
};

var inSelect = $('h3').length;
//alert(inSelect);
if(inSelect){
}

//disabled
var tables = $('tableXDD');

for(var i=0;i<tables.length;i++){
	var prenode=tables.eq(i).prev();
	if(prenode.length && prenode.get(0).nodeName=='H4'){

		var h4=__('h4').appendTo($('body'));
		h4.text(prenode.text());
		prenode.prev().remove();//br
		prenode.remove();
	}
	var tr=tables.eq(i).children('tbody').eq(0).children('tr');
	var newtable=__('table').appendTo($('body'));
	var caption=__('caption');

	caption.text(tr.eq(0).text());
	newtable.append(caption);
	var newtr=__('tr').appendTo(__('thead').appendTo(newtable));
	for(var j=0, td=tr.eq(1).children('td');j<td.length;j++){
		var th=__('th').appendTo(newtr);
		th.text(td.eq(j).text());
		th.attr('width',td.eq(j).attr('width'));
	}
	var tbody=__('tbody').appendTo(newtable);
	var rowspan=0;
	var rowat;
	var cid=0;
	for(var j=2;j<tr.length;j++){//courses
	    var td=tr.eq(j).children('td')
		var newtr=__('tr').appendTo(tbody);
		if(!rowspan){
			cid++;
			for(var k=0;k<td.length;k++){
				var newtd=__('td').appendTo(newtr);
				if(td.eq(k).attr('rowspan')==2){
					rowspan=1;
					newtd.attr('rowspan',2);
				}

				if(td.eq(k).text().indexOf('-')>0){//time and classroom
					newtd.append(td.eq(k).html())
					//building tooltip
					var tmp=td.eq(k).text().split('-');
					var hasbname=0;
					var tip='';
					for(var ireg=1;ireg<tmp.length;ireg++){
						bname=tmp[ireg].match(/^[A-Z]{1,2}/);
						if(bname && building[bname[0]]){
							hasbname=1;
							tip+=building[bname[0]]+'<br />';
						}
					}
					if(hasbname){
						newtd.attr('title',tip);
						newtd.tipTip();
					}
					continue;
				}
				var a=td.eq(k).find('a');
				if(a.length!=0){//link
					a=a.eq(0);
					var newa=__('a').appendTo(newtd);
					newa.attr('href',a.attr('href'));
					newa.attr('target','_blank');
					if(k==0)
						newa.addClass('link');
					newa.text(a.text());
				}else{
					if(k==0){
						var span=__('span').appendTo(newtd);
						span.addClass('nolink');
						span.text(td.eq(k).text());
					}else
						newtd.text(td.eq(k).text());
				}

			}
		}else{
			var newtd=__('td').appendTo(newtr);
			newtd.attr('colspan',td.attr('colspan'));
			newtd.text(td.text());
			rowspan=0;
		}
		if(cid%2)
		newtr.attr('class','odd');
		newtr.attr('id','t'+i+'c'+cid+'r'+rowspan);
		newtr.hover(function(){
				$(this).addClass('hover');
				$('#'+findrelate(this)).addClass('hover');
			},
			function(){
				$(this).removeClass('hover');
				$('#'+findrelate(this)).removeClass('hover');
			});
	}
}

//tables.remove();

var newtable=$('center').append(document.createElement('table')).children('table').eq(1).append(document.createElement('thead')).append(document.createElement('tbody')).children('tbody').eq(0);
var oldtr = $('table').eq(0).children('tbody').children('tr');
//----first row----
var newtr = $('table').eq(1).children('thead').append(document.createElement('tr')).children('tr').eq(0);
var newth = newtr.append(document.createElement('th')).children('th').eq(0);
newth.text(oldtr.eq(3).children('td').eq(0).text());
newth.attr('colspan','2');
for(var i=0;i<oldtr.length-1;i++){
	var tr = oldtr.eq(i);
	var newtr = newtable.append(document.createElement('tr')).children('tr').eq(i);
	var newtd = newtr.append(document.createElement('th')).append(document.createElement('td')).children('*');
	if(i%2)
		newtr.attr('class','odd');
	for(var j=0;j<2;j++)
		newtd.eq(j).text(tr.children('td').eq(j).text());
}
$('table').eq(0).remove();
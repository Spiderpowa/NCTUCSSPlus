function dofill(request, sender, sendResponse){
	var d=document;
	for(var x=1;x<=2;x++){
		for(var y=1;y<=2;y++){
			for(var z=1;;z++){
				var ename="q"+x+"q"+y+"q"+z;
				obj=d.getElementsByName(ename);
				if(!obj.length)break;
				obj.item(0).checked=true;
			}
		}
	}
	sendResponse({});
}
chrome.extension.onRequest.addListener(dofill);
chrome.extension.sendRequest({}, function(response) {});

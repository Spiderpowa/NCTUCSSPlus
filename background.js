chrome.pageAction.onClicked.addListener(function(tab){
	chrome.tabs.sendRequest(tab.id, {}, function(response) {});
});
function onRequest(request, sender, sendResponse){
	chrome.pageAction.show(sender.tab.id);
	sendResponse({});
};
chrome.extension.onRequest.addListener(onRequest);
$(document).ready(function(){
  var btn = $(':submit,:reset,:button');
  btn.addClass('fancy-button-base');
  var myid = chrome.i18n.getMessage("@@extension_id");
  var csslink = $('<link>');
  $('head').append(csslink);
  csslink.attr({
      rel:  "stylesheet",
      type: "text/css",
      href: "chrome-extension://"+myid+"/lib/fancybtn/buttons.css"
    });
});

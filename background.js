chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.insertCSS(tab.id, {
    file: 'pretty_print.css'
  });
});

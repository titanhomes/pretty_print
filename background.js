chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.insertCSS(tab.id, {
    file: 'pretty_print.css'
  });
  chrome.tabs.executeScript(tab.id, {
    file: 'pretty_print.js'
  });
});

chrome.browserAction.onClicked.addListener(function(tab) {
  console.log('Turning '+tab.url+' red!');
  // chrome.tabs.executeScript({
  //   code: 'document.body.style.backgroundColor="red"'
  // });
  console.log(tab.id);
  chrome.tabs.insertCSS(tab.id, {
    file: 'pretty_print.css'
  });
});

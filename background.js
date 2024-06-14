chrome.action.onClicked.addListener( () => {
   chrome.tabs.create({url: "extension-page/index.html"});
});
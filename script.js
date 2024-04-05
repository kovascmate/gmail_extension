chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({ url: 'https://mail.google.com/' });
});

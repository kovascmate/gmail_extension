chrome.browserAction.onClicked.addListener(function(tab) { 
			// Check if there's an existing Gmail tab 
			chrome.tabs.query({ url: "https://mail.google.com/*", currentWindow: true }, function(tabs) 
			{ if (tabs.length > 0){
				// If a Gmail tab is already open, switch to it 
			chrome.tabs.update(tabs[0].id, { active: true }); 
			} else { 
				// If no Gmail tab is open, create a new one 
			chrome.tabs.create({ url: 'https://mail.google.com/' 
			});
		} 
	}); 
});
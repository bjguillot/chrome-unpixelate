var toggle = false;
chrome.browserAction.onClicked.addListener(function(tab) {
	toggle = !toggle;
	if (toggle) {
		chrome.browserAction.setIcon({path: "icon_pixelated.png", tabId:tab.id});
		chrome.tabs.insertCSS({ file: "style_pixelated.css" });
	} else {
		chrome.browserAction.setIcon({path: "icon_antialiased.png", tabId:tab.id});
		chrome.tabs.insertCSS({ file: "style.css" });
	}
});

const configs = [
    ""
]

const getActiveUrl = (tabid, changeInfo, tab) => {
    const url = changeInfo.url;
  
    // url is likely to be empty, and filter chrome:// and about:// URLs
    if (!url || ['chrome://', 'about://'].some(p => url.startsWith(p))) return;
  
    // filtering is not an active tab
    if (!tab.active) return;
  
    // the url address you need
    console.log(url);
  }
  
chrome.tabs.onUpdated.addListener(getActiveUrl);
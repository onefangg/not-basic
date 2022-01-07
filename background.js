const urlPatterns = [
    "uniqlo.com", 
    "zara.com",
    "lovebonito.com",
    "theeditorsmarket.com",
    "theclosetlover.com",
    "thetinselrack.com",
    "lzzie.com", "fayth.com",
    "loveandbravery.com", "ohvola.com",
    "fromthereon.com", "thestagewalk.com",
    "hervelvetvaset.com", "neonmello.com",
    "hollyhoque.com", "younghungryfree.com",
    "shopsassydream.com", "modparade.com",
    "anticlockwise.com", "forever21.sg",
    "charleskeith.com", "shopfashmob.com", "sg.shein.com"
];

var masterPattern = new RegExp(urlPatterns.join('|'))

const getActiveUrl = (tabid, changeInfo, tab) => {
    const url = changeInfo.url;
  
    // url is likely to be empty, and filter chrome:// and about:// URLs
    if (!url || ['chrome://', 'about://'].some(p => url.startsWith(p))) return;
  
    // filtering is not an active tab
    if (!tab.active) return;
  
    // the url address you need
    // if (tab.url.match("uniqlo.com")) {
    if (masterPattern.test(tab.url)) {
        console.log("Stop Right There!")
    }
  }
  
chrome.tabs.onUpdated.addListener(getActiveUrl);
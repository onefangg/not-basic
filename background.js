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


const getActiveUrl = ( changeInfo, tab) => {
    const url = changeInfo.url;
  
    // url is likely to be empty, and filter chrome:// and about:// URLs
    if (!url || ['chrome://', 'about://'].some(p => url.startsWith(p))) return;
    if (!tab.active) return;
  
    // use function for certain stuffs
    if (masterPattern.test(tab.url)) {
        console.log(tab.url);
    }
  }

chrome.tabs.onUpdated.addListener(getActiveUrl);

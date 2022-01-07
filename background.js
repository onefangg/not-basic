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
  
    // filtering is not an active tab
    if (!tab.active) return;
  
    // the url address you need
    // if (tab.url.match("uniqlo.com")) {
    if (masterPattern.test(tab.url)) {
        console.log("Stop Right There!")
    }
  }

chrome.tabs.onUpdated.addListener(getActiveUrl);

function timer2() {
    chrome.browserAction.setPopup({popup: "popup2.html"});
  }

  
function timer3() {
    chrome.browserAction.setPopup({popup: "popup3.html"});
  }
  
function timer4() {
    chrome.browserAction.setPopup({popup: "popup4.html"});
  }
  
function timer5() {
    chrome.browserAction.setPopup({popup: "popup5.html"});
  }
// startTimer = (duration, display) => {
//     let time = duration, minutes, seconds;
  
  
//   setInterval(() => {
    
//     minutes = parseInt(time / 60, 10);
//     seconds = parseInt(time % 60, 10);
//     console.log(seconds)
//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     seconds = seconds < 10 ? "0" + seconds : seconds;
  
//     display.innerHTML = `${minutes}:${seconds}`;
//     if (--time < 0) {
//       time = duration;
//     }
//    }, 1000);
//   }
  
//   chrome.tabs.onUpdated.addListener = () => {
//     let duration = 60 * .1, display = document.querySelector('.time');  
//     startTimer(duration, display);
//   }
// Call this when the pop-up is shown
chrome.runtime.sendMessage({ cmd: 'GET_TIME' }, response => {
    if (response.time) {
      const time = new Date(response.time);
      startTimer(time)
    }
  });
  
  function startTimer(time) {
    if (time.getTime() > Date.now()) {
      setInterval(() => {
        // display the remaining time
      }, 1000)
  
    }
  }
  
  function startTime(time) {
    chrome.runtime.sendMessage({ cmd: 'START_TIMER', when: time });
    startTimer(time);
  }
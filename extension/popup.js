// js for the popoup
'use strict';
(function() {
  window.addEventListener('load', () => {
    // I don't know what this does but everything breaks if I remove it
    console.log("load");
    document.querySelector('input').addEventListener('change', () => {
      chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        chrome.tabs.sendMessage(tabs[0].id, {"message": "toggle"});
      });
    });
  });
})();
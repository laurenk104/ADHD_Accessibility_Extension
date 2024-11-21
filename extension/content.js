// js to modify the page the user is viewing

console.log("remove ads?");

chrome.runtime.onMessage.addListener(processMessage);

function processMessage(request, sender, senderResponse) {
  console.log(request);
}
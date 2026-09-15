
chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed successfully.');
});

chrome.action.onClicked.addListener((tab) => {
  console.log('Action button clicked on tab:', tab.id);
});

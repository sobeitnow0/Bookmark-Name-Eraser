// Function to remove names of bookmarks
function removeBookmarkNames(bookmarks) {
  bookmarks.forEach((bookmark) => {
    if (bookmark.children) {
      removeBookmarkNames(bookmark.children);
    }
    chrome.bookmarks.update(bookmark.id, { title: "" });
  });
}

// Listen for a click on the extension's browser action
chrome.browserAction.onClicked.addListener(() => {
  // Get all bookmarks
  chrome.bookmarks.getTree((bookmarks) => {
    // Call function to remove names
    removeBookmarkNames(bookmarks);
  });
});

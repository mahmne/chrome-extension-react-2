var menuItem = {
  'id': 'Print',
  'title': 'Print',
  'contexts': ['selection']
};

chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener(function (clickData) {
  if (clickData.menuItemId == 'Print' && clickData.selectionText) {
    alert(clickData.selectionText);
  }
});

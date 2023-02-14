function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("MasterMetrics Posta")
    .addItem("Launch Sidebar Posta", "customSidebar")
    .addToUi();
}

function customSidebar() {
  var html = HtmlService.createHtmlOutputFromFile("index");
  html.setTitle("MasterMetrics Posta");
  SpreadsheetApp.getUi().showSidebar(html);
}

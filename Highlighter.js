function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('BarCode Scanner')
    .addItem('Обробити дані сканера', 'scanner')
    .addSeparator()
    .addItem('Створити налаштування для сканера', 'scanner_init')
    .addItem('Очистити сторінку сканера', 'scanner_uninit')
    .addToUi();
}

function init_sheet(sheet) {
  sheet.getRange('A1:C1').setValues([['Колір\nвиділення', 'Назва таблиці\nдля обробки', 'Список зісканованих\nкодів']])
    .setFontWeight('bold')
    .setBorder(true, true, true, true, true, true)
    .setHorizontalAlignment('center');
  
  sheet.getRange('A2').setBackground('lime').setBorder(true, true, true, true, true, true);
  sheet.getRange('B2').setValue('main').setHorizontalAlignment('center').setBorder(true, true, true, true, true, true);
  sheet.getRange('C:C').setHorizontalAlignment('center').setBorder(true, true, true, true, true, true);
  sheet.autoResizeColumns(1, 3);
}

function scanner_init() {
  var ssname = 'Scanner';
  var spreadsheet = SpreadsheetApp.getActive();
  var scanner = spreadsheet.getSheetByName(ssname);
  if (scanner == null) {
    scanner = spreadsheet.insertSheet(ssname);
    init_sheet(scanner);
  } else {
    SpreadsheetApp.getUi().alert('Таблиця з налаштуваннями вже створена!\nВидаліть стару для створення нової!')
  }
}

function scanner_uninit() {
  var ssname = 'Scanner';
  var spreadsheet = SpreadsheetApp.getActive();
  var scanner = spreadsheet.getSheetByName(ssname);
  var lastRow = scanner.getLastRow();
  scanner.getRange(2, 3, scanner.getLastRow() - 1).clear().setHorizontalAlignment('center').setBorder(true, true, true, true, true, true);
  
  //spreadsheet.deleteSheet(scanner);
  //scanner = spreadsheet.insertSheet(ssname);
  //init_sheet(scanner);
}

function getScannedCodesArray(sheet) {
  var lastRow = sheet.getLastRow();
  var scannedRange = sheet.getRange(2, 3, lastRow - 1, 1);
  var scannedData = scannedRange.getValues().map(function(item) { return item[0]; });
  return scannedData;
}


function getHighlightBackgroundColor(sheet) {
  return sheet.getRange(2, 1).getBackground();
}
function getMainDataTableName(sheet) {
  return sheet.getRange(2, 2).getValue();
}

function setCellBackground(sheet, r, c, color) {
  sheet.getRange(r + 1, c + 1).setBackground(color);
}

function scanner() {
  var spreadsheet = SpreadsheetApp.getActive();
  var scannerSheet = spreadsheet.getSheetByName("Scanner");
  if (scannerSheet == null) {
    scanner_init();
    SpreadsheetApp.getUi().alert('Таблицю створено!\nБудь ласка заповніть таблицю кодами!')
    return;
  }
  
  // configs
  var background = getHighlightBackgroundColor(scannerSheet);
  var dataTableName = getMainDataTableName(scannerSheet);
  var scannedData = getScannedCodesArray(scannerSheet);
  
  var dataSheet = spreadsheet.getSheetByName(dataTableName);
  var dataLastRow = dataSheet.getLastRow();
  var dataLastColumn = dataSheet.getLastColumn();
  var dataRange = dataSheet.getRange(1, 1, dataLastRow, dataLastColumn);
  var dataData = dataRange.getValues();
  
  for (var r = 0; r < dataData.length; r++) {
    for (var c = 0; c < dataData.length; c++) {
      if (scannedData.indexOf(dataData[r][c]) > -1) {
        setCellBackground(dataSheet, r, c, background);
      }
    }
  }
  
  spreadsheet.setActiveSheet(dataSheet);
}
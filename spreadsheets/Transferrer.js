function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Transferrer')
    .addItem('Перенести айтем', 'scanner')
    .addSeparator()
    .addToUi();
}

function scanner() {
  var ui = SpreadsheetApp.getUi();
  var spreadsheet = SpreadsheetApp.getActive();
  var range = spreadsheet.getActiveRange();
  
  var numRows = range.getNumRows();
  var numCols = range.getNumColumns();
  for (var i = 1; i <= numCols; i++) {
    var row = 1;
    var cell = range.getCell(row,i);
    var currentValue = cell.getValue();
    var value = String(currentValue).split('');
    while (value.length) {
      var part = value.splice(0, 6);
      range.getCell(row, i).setValue(part.join(''))
      row += 1;
    }
  }
}
/* eslint no-undef: 0 */ // --> OFF
/* eslint no-unused-vars: 0 */ // --> OFF

/**
 * Create the menu item and open it.
 */
function onOpen() {
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .createMenu('Table Topics Sidebar')
      .addItem('Launch Sidebar', 'showSidebar')
      .addToUi();
}

// TODO: title and width? -> .setTitle('Table Topics Sidebar').setWidth(100);
/**
 * Generate sidebar
 */
function showSidebar() {
  const html = HtmlService
      .createTemplateFromFile('html/table-topics-sidebar')
      .evaluate();
  SpreadsheetApp.getUi()
      .showSidebar(html);
}

/**
 * part of the original code to move text input from HTML
 * sidebar to script below to spreadsheet
 * Sets the value of D1 cell to value entered in the input
 * field in the side bar!
 * @param {string} name
 */
function enterName(name) {
  const sheetTS = SpreadsheetApp.getActive().getSheetByName('Timer Sheet');
  sheetTS.getRange('D1').setValue(name);
}

/**
 * WIP: conditional formatting to automate green,yellow,red
 * color changes based on timer in HTML
 */
function applyConditionalFormatting() {
  const sheetD = SpreadsheetApp.getActiveSpreadsheet()
      .getSheetByName('Dashboard');

  const numRows = sheetD.getLastRow();
  const rangeToHighlight = sheetD.getRange(`A2:A${numRows}`);
  const rule = SpreadsheetApp.newConditionalFormatRule()
      .whenFormulaSatisfied('=INDIRECT("R[1]C[1]", FALSE)="X"')
      .setBackground('green')
      .setRanges([rangeToHighlight])
      .build();

  const rules = sheetD.getConditionalFormatRules();
  rules.push(rule);
  sheetD.setConditionalFormatRules(rules);
}

// module.exports = {
// onOpen,
// showSidebar,
// enterName,
// applyConditionalFormatting
// };

// /////////////Notes///////////////g

// * @param {number} num1 The first number.
// * @param {number} num2 The second number.
// * @returns {number} The sum of the two numbers.
//
// // TODO: is this useful?
// const SCRIPT_NAME = 'Toastmaster-Automator';
// const SCRIPT_VERSION = 'V1.0';

// <!-- <script>
//   /* Original code to initiate script to transfer text from html */
//   function sendName(){
//    //Get the value of the input field
//    var name = document.getElementById("name").value
//    //Log the value of input field in the web browser
// console (usually used for debugging)
//    console.log(name)
//    //Send the value of the text field as an arugment
// to the server side function.
//    google.script.run.enterName(name);
//    name = undefined;
//   }
//
//   /* WIP: to initate conditional formatting */
//   function timerGreen(){
//   google.script.run.timerGreen();
//   }
//
// </script> -->

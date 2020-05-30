/* eslint no-undef: 0 */ // --> OFF
/* eslint no-unused-vars: 0 */ // --> OFF
// TODO: rename this file


/**
 * Create the menu item and open it.
 * @return {string} returns the html content.
 */
function doGet() {
  return HtmlService.createTemplateFromFile('Page')
      .evaluate();
}

/**
 * Create the menu item and open it.
 * @param {string} filename The file to import.
 * @return {string} returns the html content.
 */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}

// module.exports = {doGet, include};

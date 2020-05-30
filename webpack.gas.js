var path = require('path');
console.log('process.cwd()');
console.log(process.cwd())
module.exports = {
  mode: 'development',
  entry:{
      lib:'./scripts/sidebarMethodScript.js',
      lib2:'./scripts/code.js',
      lib3:'./appsscript.json',
  },
  output:
  {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'var',
    library: 'AppLib'
  }
}

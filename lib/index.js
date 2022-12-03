const fs = require('fs')
//const include = ['cache']
const process = require('process');


exports.options = require('./options.js')
exports.settings = require('../settings.json')

// Read in the libs from this directory and add them as exports
// This way you can just reference
fs.readdirSync(`${__dirname}`).forEach(function(file){
    if ( file.indexOf(".js") > -1 ) 
      // && file != "index.js" 
        exports[ file.replace('.js','') ] = require(`${__dirname}/${file}`);
});
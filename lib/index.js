const fs = require('fs')
//const include = ['cache']
const process = require('process');


// Read in the libs from this directory and add them as exports
// This way you can just reference
fs.readdirSync('../lib/cache/').forEach(function(file){
    if ( file.indexOf(".js") > -1 ) 
      // && file != "index.js" 
        exports[ file.replace('.js','') ] = require('./'+file);
});

exports.options = require('./options.js')
exports.settings = require('../settings.json')
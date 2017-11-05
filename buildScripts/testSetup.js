//This file isn't transpiled, so must use CommonJs and ES5

//Register Babel to tranpile before tests run
require('babel-register')();

//Disable Webpack feature that Mocha doesn't understand
require.extensions['.css'] = function() {};

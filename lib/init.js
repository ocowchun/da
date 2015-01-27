'use strict';

var pwuid = require('pwuid');
var fs = require('fs');
var migrate = require('./migrate');

var dirPath = pwuid().dir + '/.da';

fs.mkdir(dirPath, function() {
	migrate(dirPath);
});
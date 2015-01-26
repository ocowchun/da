'use strict';

var pwuid = require('pwuid');
var fs = require('fs');
var dirPath = pwuid().dir + '/.da';

fs.mkdir(dirPath, '0644', function() {
	console.log('@@');
});
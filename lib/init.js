'use strict';

var pwuid = require('pwuid');
var fs = require('fs');
var migrate = require('./migrate');

function init(cb) {
	var dirPath = pwuid().dir + '/.da';

	fs.mkdir(dirPath, function() {
		console.log("create dir");
		migrate(dirPath);
		cb();
	});
}

module.exports = init;

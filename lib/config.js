'use strict';

var pwuid = require('pwuid');

function getConfigPath() {
	return pwuid().dir + '/.da';
}

function getDbPath() {
	return getConfigPath() + '/db.sqlite3';
}

module.exports.getDbPath = getDbPath;
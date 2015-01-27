'use strict';

var sqlite3 = require('sqlite3').verbose();
var db;

function open() {
	db = new sqlite3.Database('../db/dev.sqlite3');
}

function close() {
	db.close();
}

function run() {
	db.run.apply(db, arguments);
}

function all() {
	db.all.apply(db, arguments);
}


module.exports = function() {
	open();
	return {
		open: open,
		close: close,
		run: run,
		all: all
	};

}();
'use strict';

var sqlite3 = require('sqlite3').verbose();
var config = require('./config');
var db;
var OPEN = 'open';
var CLOSE = 'close';

var manager = {
	state: CLOSE
};

manager.open = function open() {
	var dbPath = config.getDbPath();
	db = new sqlite3.Database(dbPath);
	this.state = OPEN;
}

manager.close = function close() {
	db.close();
	this.state = CLOSE;
}

manager.run = function run() {
	if (this.state === CLOSE) {
		this.open();
	}
	db.run.apply(db, arguments);
}

manager.all = function all() {
	if (this.state === CLOSE) {
		this.open();
	}
	db.all.apply(db, arguments);
}


module.exports = manager;

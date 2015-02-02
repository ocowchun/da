'use strict';

require('./date');
var db = require('./db.js');
var thingModel = {};

thingModel.create = function create(content, cb) {
	var now = new Date();
	db.run('insert into things(content,create_at) values($content,$createAt)', {
		$content: content,
		$createAt: now.toSQLString()
	}, function() {
		cb(content);
	});
};

thingModel.getToday = function getToday(cb) {
	var now = new Date();
	var today = new Date(now.getFullYear(), now.getMonth() , now.getDate());
	db.all('select * from things where (create_at>=$createAt)', {
		$createAt: today.toSQLString()
	}, function(err, data) {
		cb(data);
	});
};

thingModel.getLast = function getLast(cb) {
	var sql = 'select * from things order by create_at desc limit 1';
	db.all(sql, function(err, data) {
		if (data.length === 1) {
			cb(data[0]);
		} else {
			cb(err);
			console.log(err);
		}
	});
};

thingModel.done = function done(cb) {
	var now = new Date();

	var update = function(thing) {
		var sql = 'update things set update_at = $updateAt where id =$id';
		db.all(sql, {
			$updateAt: now.toSQLString(),
			$id: thing.id
		}, function(err, data) {
			cb(data);
		});
	}
	thingModel.getLast(update);
};

module.exports = thingModel;

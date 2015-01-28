'use strict';

var db = require('./db.js');
var thingModel = {};

thingModel.create = function create(content, cb) {
	var now = new Date();
	db.run('insert into things(content,create_at) values($content,$createAt)', {
		$content: content,
		$createAt: now.toISOString()
	}, function() {
		cb(content);
	});
};

thingModel.getToday = function getToday(cb) {
	var now = new Date();
	var today = new Date(now.getFullYear(), now.getMonth() + 1, now.getDate());
	db.all('select * from things where (create_at<$createAt)', {
		$createAt: today.toISOString()
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
			console.log(err);
		}
	});

};

module.exports = thingModel;

'use strict';

var db = require('./db.js');

var thingModel = {};

thingModel.create = function create(content) {
	var now = new Date();
	db.run('insert into things(content,create_at) values($content,$createAt)', {
			$content: content,
			$createAt: now.toISOString()
		},
		function() {
			console.log(arguments);
		});
};

thingModel.getToday = function getToday() {
	var now = new Date();
	var today = new Date(now.getFullYear(), now.getMonth() + 1, now.getDate());
	db.all('select * from things where (create_at<$createAt)', {
			$createAt: today.toISOString()
		},
		function() {
			console.log(arguments);
		});
};

module.exports = thingModel;
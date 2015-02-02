'use strict';

var _ = require('underscore');

Date.prototype.toSQLString = function toSQLString() {
	var d = {};
	d.month = this.getMonth() + 1;
	d.date = this.getDate();
	d.hour = this.getHours();
	d.min = this.getMinutes();
	d.second = this.getSeconds();

	_.each(['month', 'date', 'hour', 'min', 'second'], function(key) {
		var val = d[key];
		if (val < 10) {
			d[key] = '0' + val;
		}
	});

	return this.getFullYear() + '-' + d.month + '-' + d.date + ' ' + d.hour + ':' + d.min + ':' + d.second;
};

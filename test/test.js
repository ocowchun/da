'use strict';

var assert = require("assert")
var render = require('../lib/render.js')
process.chdir(__dirname);

describe('render', function() {
	describe('#renderTodayThings()', function() {
		it('should return thing with correct style', function() {
			var things = [{
				id: 1,
				content: 'eat',
				create_at: '2015-01-27T06:45:29.007Z',
				update_at: null
			}, {
				id: 1,
				content: 'sleep',
				create_at: '2015-01-27T06:45:29.007Z',
				update_at: null
			}, {
				id: 1,
				content: 'coding',
				create_at: '2015-01-27T06:45:29.007Z',
				update_at: null
			}];
			var actual = render.renderTodayThings(things);
			var expect = '14:45:29 GMT+0800 (CST) | eat\n14:45:29 GMT+0800 (CST) | sleep\n14:45:29 GMT+0800 (CST) | coding';
			assert.equal(expect, actual);
		});
	});
});
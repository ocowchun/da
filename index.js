#!/usr/bin/env node

/**
 * Module dependencies.
 */


var program = require('commander');
var Thing = require('./lib/thing');
var render = require('./lib/render');
program
	.version('0.0.1')


program
	.command('now <thing>')
	.description('run remote setup commands')
	.action(function(thing) {
		Thing.create(thing, function(content) {
			var result = render.renderCreateThing(content);
			console.log(result);
		});
	});

program
	.command('today')
	.description('list things happen today')
	.action(function() {
		Thing.getToday(function(things) {
			var result = render.renderTodayThings(things);
			console.log(result);
		});
	});


program.parse(process.argv);
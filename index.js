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
			if (process.argv.length !== 4) {
				// when user type da now eat apple
				// [ 'node', '/usr/local/bin/da', 'now', 'eat', 'apple' ]
				var args = process.argv;
				content = args.slice(3, args.length).join(' ')
			}
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


program
	.command('last')
	.description('show last thing')
	.action(function() {
		Thing.getLast(function(thing) {
			var result = render.renderLastThing(thing);
			console.log(result);
		});
	});

program.parse(process.argv);
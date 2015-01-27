#!/usr/bin/env node

/**
 * Module dependencies.
 */


var program = require('commander');
var Thing = require('./lib/thing');
program
	.version('0.0.1')
	.option('-p, --peppers', 'Add peppers')
	.option('-P, --pineapple', 'Add pineapple')
	.option('-b, --bbq', 'Add bbq sauce')
	.option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
	// .parse(process.argv);

// console.log('you ordered a pizza with:');
// if (program.peppers) console.log('  - peppers');
// if (program.pineapple) console.log('  - pineapple');
// if (program.bbq) console.log('  - bbq');
// console.log('  - %s cheese', program.cheese);

// program
//   .version('0.0.1')
//   .option('-C, --chdir <path>', 'change the working directory')
//   .option('-c, --config <path>', 'set config path. defaults to ./deploy.conf')
// .option('-T, --no-tests', 'ignore test hook')

program
	.command('now <thing>')
	.description('run remote setup commands')
	.action(function(thing) {
		Thing.create(thing);
	});

program
	.command('today')
	.description('list things happen today')
	.action(function() {
		console.log("things");
		Thing.create(thing);
	});


program.parse(process.argv);
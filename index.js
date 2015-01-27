#!/usr/bin/env node

/**
 * Module dependencies.
 */


var program = require('commander');

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
		console.log(thing);
	});

program.parse(process.argv);

function writeFile() {
	var fileName = "";
	var result = "";
	fs.writeFile(fileName, result, function(err) {
		if (err) {
			console.log("ERROR:")
			console.log(err);
		} else {
			console.log("The file was saved!");
		}
	});
}
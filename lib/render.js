'use strict';

var _ = require('underscore');

function renderTodayThing(thing) {
	var content = thing.content;
	var createAt = new Date(thing['create_at']);
	var result = createAt.toLocaleTimeString() + ' | ' + content;
	return result;
}

function renderTodayThings(things) {
	var result = _.map(things, renderTodayThing);
	return result.join('\n');
}

function renderCreateThing(content) {
	return "create thing: " + content;
}

function renderLastThing(thing) {
	var content = thing.content;
	var createAt = new Date(thing['create_at']);
	var result = createAt.toLocaleDateString() + ' ' + createAt.toLocaleTimeString() + ' | ' + content;
	return result;
}

module.exports.renderTodayThings = renderTodayThings;
module.exports.renderCreateThing = renderCreateThing;
module.exports.renderLastThing = renderLastThing;

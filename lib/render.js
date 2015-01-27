'use strict';

var _ = require('underscore');

function renderTodayThing(thing) {
	var content = thing.content;
	var createAt = new Date(thing['create_at']);
	var result = createAt.toTimeString() + ' | ' + content;
	return result;
}

function renderTodayThings(things) {
	var result = _.map(things, renderTodayThing);
	return result.join('\n');
}

module.exports.renderTodayThings = renderTodayThings;
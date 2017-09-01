var data = require('./data');
var parse = require('./parse');

var actorsByName = {};
for (var i = 0; i < data.actors.length; i++) {
	actorsByName[data.actors[i].name] = data.actors[i];
}
var actions = data.actions;

console.log('\n\n');
for (var i = 0; i < actions.length; i++) {
	var input = actions[i];
	console.log('Testing: "' + input.text + '"');
	var output = parse(input);
	var correctPronouns = true;
	if (JSON.stringify(input.pronouns) === JSON.stringify(output.pronouns)) {
		console.log('  pronouns:    success');
	}
	else {
		console.log('  pronouns:    FAILURE!!');
		console.log('    Input:  ' + JSON.stringify(input.pronouns));
		console.log('    Output: ' + JSON.stringify(output.pronouns));
	}
	/*
	if (input.textSpeaker === output.textSpeaker) {
		console.log('  textSpeaker: success');
	}
	else {
		console.log('  textSpeaker: FAILURE!!');
		console.log('    Input:  ' + input.textSpeaker);
		console.log('    Output: ' + output.textSpeaker);
	}
	*/
}
console.log('\n\n');
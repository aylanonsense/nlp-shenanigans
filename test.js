var data = require('./data');
var parse = require('./parse');

var testCases = data.testCases;

console.log('\n\n');
for (var t = 0; t < testCases.length; t++) {
	var testCase = testCases[t];
	console.log('Testing: "' + testCase.text + '"');

	// test pronouns
	var output = parse(testCase.input);
	if (JSON.stringify(testCase.pronouns) === JSON.stringify(output.pronouns)) {
		console.log('  pronouns:    success');
	}
	else {
		console.log('  pronouns:    FAILURE!!');
		console.log('       input:  ' + JSON.stringify(testCase.pronouns));
		console.log('       output: ' + JSON.stringify(output.pronouns));
	}

	// test casing
	if (JSON.stringify(testCase.casing) === JSON.stringify(output.casing)) {
		console.log('  casing:      success');
	}
	else {
		console.log('  casing:      FAILURE!!');
		console.log('       input:  ' + JSON.stringify(testCase.casing));
		console.log('       output: ' + JSON.stringify(output.casing));
	}

	/*if (input.textSpeaker === output.textSpeaker) {
		console.log('  textSpeaker: success');
	}
	else {
		console.log('  textSpeaker: FAILURE!!');
		console.log('    input:  ' + input.textSpeaker);
		console.log('    output: ' + output.textSpeaker);
	}
	*/
}
console.log('\n\n');
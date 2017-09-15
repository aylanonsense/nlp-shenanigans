var data = require('./data');
var parse = require('./parse');

var testCases = data.testCases;

console.log('\n\n');
for (var t = 0; t < testCases.length; t++) {
	var testCase = testCases[t];
	console.log('Testing: "' + testCase.text + '"');
	var output = parse(testCase.input, data.actors);

	// // check word owners
	// if (JSON.stringify(testCase.wordOwners) === JSON.stringify(output.wordOwners)) {
	// 	console.log('  word owners: success');
	// }
	// else {
	// 	console.log('  word owners: FAILURE!!');
	// 	console.log('       input:  ' + JSON.stringify(testCase.wordOwners));
	// 	console.log('       output: ' + JSON.stringify(output.wordOwners));
	// }

	// check verbs
	if (JSON.stringify(testCase.verbs) === JSON.stringify(output.verbs)) {
		console.log('  verbs:       success');
	}
	else {
		console.log('  verbs:       FAILURE!!');
		console.log('       input:  ' + JSON.stringify(testCase.verbs));
		console.log('       output: ' + JSON.stringify(output.verbs));
	}

	// // check pronouns
	// if (JSON.stringify(testCase.pronouns) === JSON.stringify(output.pronouns)) {
	// 	console.log('  pronouns:    success');
	// }
	// else {
	// 	console.log('  pronouns:    FAILURE!!');
	// 	console.log('       input:  ' + JSON.stringify(testCase.pronouns));
	// 	console.log('       output: ' + JSON.stringify(output.pronouns));
	// }

	// // check casing
	// if (JSON.stringify(testCase.casing) === JSON.stringify(output.casing)) {
	// 	console.log('  casing:      success');
	// }
	// else {
	// 	console.log('  casing:      FAILURE!!');
	// 	console.log('       input:  ' + JSON.stringify(testCase.casing));
	// 	console.log('       output: ' + JSON.stringify(output.casing));
	// }
}
console.log('\n\n');
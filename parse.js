var pronounData = require("./pronouns");

function determinePronounForm(word) {
	if (word.tag === "PRP" && word.pos === "PRON") {
		if (word.parentRelation === "nsubj") {
			return "subject";
		}
		else if (word.parentRelation === "pobj") {
			return "object";
		}
	}
	else if (word.tag === "PRP$" && word.pos === "ADJ") {
		if (word.parentRelation === "poss") {
			return "possessiveAdjective";
		}
	}
	// TODO much more I'm sure
	return null;
}

function determinePronoun(word, form) {
	for (var p in pronounData) {
		if (pronounData[p][form].toLowerCase() === word.text.toLowerCase()) {
			return p;
		}
	}
	return null;
}

function cloneShallow(obj) {
	var clone = {};
	for (var k in obj) {
		clone[k] = obj[k];
	}
	return clone;
}

module.exports = function parse(input) {
	// add pronouns
	var pronouns = [];
	for (var i = 0; i < input.parsed.words.length; i++) {
		var word = input.parsed.words[i];
		var form = determinePronounForm(word);
		if (form) {
			var pronoun = determinePronoun(word, form);
			pronouns.push({
				index: word.index,
				pronoun: pronoun,
				form: form
			});
		}
	}
	return {
		"textSpeaker": null,
		"textListener": null,
		"mentioned": [],
		"textPerMentioned": {},
		"verbs": [],
		"pronouns": pronouns
	};
};
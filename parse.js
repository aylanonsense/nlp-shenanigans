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

function determineCasing(word) {
	var text = word.text;
	var isLowerCase = (text === text.toLowerCase());
	var isUpperCase = (text[0] === text[0].toUpperCase() && text.substr(1) === text.substr(1).toLowerCase());
	if (text[0] === "@" && word.pos === "PROPN") {
		isUpperCase = (text[1] === text[1].toUpperCase() && text.substr(2) === text.substr(2).toLowerCase());
	}
	var isAllCaps = (text === text.toUpperCase());
	if (word.isPunctuation) {
		return "ignore";
	}
	else if (isUpperCase && isAllCaps) { // single character words
		return "ambiguous";
	}
	else if (isLowerCase && (text === "i" || word.pos === "PROPN")) {
		return "lowercase";
	}
	else if (isUpperCase && (word.index === 0 || word.pos !== "PROPN")) {
		return "uppercase";
	}
	else if (isAllCaps) {
		return "caps";
	}
	else if (!isLowerCase && !isUpperCase) {
		return "unique";
	}
	else {
		return "natural";
	}
}

function resolveAmbiguousCasing(word, words) {
	var nextWord = words[word.index + 1] || null;
	var prevWord = words[word.index - 1] || null;
	if (nextWord && nextWord.casing === "caps") {
		return "caps";
	}
	else if (nextWord && nextWord.casing === "unique") {
		return "unique";
	}
	else if (nextWord && nextWord.casing !== "ignore") {
		return "uppercase";
	}
	else if (prevWord && prevWord.casing === "caps") {
		return "caps";
	}
	else if (prevWord && prevWord.casing === "unique") {
		return "unique";
	}
	else {
		return "uppercase";
	}
}

function cloneShallow(obj) {
	var clone = {};
	for (var k in obj) {
		clone[k] = obj[k];
	}
	return clone;
}

module.exports = function parse(input) {
	var s, w, word;
	var casingPerSentence = [];
	var pronounsPerSentence = [];
	for (s = 0; s < input.sentences.length; s++) {
		var sentence = input.sentences[s];
		var words = [];

		// clone
		for (w = 0; w < sentence.words.length; w++) {
			words.push(cloneShallow(sentence.words[w]));
		}

		// parse
		var casing = [];
		var pronouns = [];
		for (w = 0; w < words.length; w++) {
			word = words[w];

			// add casing
			word.casing = determineCasing(word);

			// add pronouns
			var form = determinePronounForm(word);
			if (form) {
				word.isPronoun = true;
				word.pronoun = determinePronoun(word, form);
				word.pronounForm = form;
				pronouns.push({ index: word.index, pronoun: word.pronoun, form: word.pronounForm });
			}
			else {
				word.isPronoun = false;
			}
		}
		for (w = 0; w < words.length; w++) {
			word = words[w];

			// resolve ambiguous casing
			if (word.casing === "ambiguous") {
				word.casing = resolveAmbiguousCasing(word, words);
			}
			casing.push(word.casing);
		}
		casingPerSentence.push(casing);
		pronounsPerSentence.push(pronouns);
	}
	return {
		casing: casingPerSentence,
		pronouns: pronounsPerSentence
	};
	/*var i;
	var words = [];
	var pronouns = [];
	// clone
	for (i = 0; i < input.parsed.words.length; i++) {
		words.push(cloneShallow(input.parsed.words[i]));
	}
	for (i = 0; i < words.length; i++) {
		var word = words[i];
		// add pronouns
		var form = determinePronounForm(word);
		if (form) {
			word.isPronoun = true;
			word.pronoun = determinePronoun(word, form);
			word.pronounForm = form;
			pronouns.push({ index: word.index, pronoun: word.pronoun, form: word.pronounForm });
		}
		else {
			word.isPronoun = false;
		}
	}*/

	/*var casing = [];
	var pronouns = [];
	for (var i = 0; i < input.parsed.words.length; i++) {
		var word = input.parsed.words[i];
		// add casing
		casing.push(determineCasing(word));
		// add pronouns
		var form = determinePronounForm(word);
		if (form) {
			var pronoun = determinePronoun(word, form);
			pronouns.push({
				index: word.index,
				pronoun: pronoun,
				form: form
			});
		}
	}*/
	return {
		words: [], //words,
		pronouns: [], //pronouns
		// "textSpeaker": null,
		// "textListener": null,
		// "mentioned": [],
		// "textPerMentioned": {},
		// "verbs": [],
		// "casing": casing,
		// "pronouns": pronouns
	};
};
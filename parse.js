/*
	TAG		POS		DESCRIPTION
	-LRB-	PUNCT	left round bracket
	-PRB-	PUNCT	right round bracket
	,		PUNCT	punctuation mark, comma
	:		PUNCT	punctuation mark, colon or ellipsis
	.		PUNCT	punctuation mark, sentence closer
	''		PUNCT	closing quotation mark
	""		PUNCT	closing quotation mark
	#		SYM		symbol, number sign
	``		PUNCT	opening quotation mark
	$		SYM		symbol, currency
	ADD		X		email
	AFX		ADJ		affix
	BES		VERB	auxillary "be"
	CC		CONJ	conjunction, coordinating
	CD		NUM		cardinal number
	DT		DET		determiner					
	EX		ADV		existential there
	FW		X		foreign word
	GW		X		additional word in multi-word expression
	HVS		VERB	forms of "have"
	HYPH	PUNCT	punctuation mark, hyphen
	IN		ADP		conjunction, subordinating or preposition
	JJ		ADJ		adjective
	JJR		ADJ		adjective, comparative
	JJS		ADJ		adjective, superlative
	LS		PUNCT	list item marker
	MD		VERB	verb, modal auxillary
	NFP		PUNCT	superfluous punctuation
	NIL				missing 			
	NN		NOUN	noun, singular or mass
	NNP		PROPN	noun, proper singular
	NNPS	PROPN	noun, proper plural
	NNS		NOUN	noun, plural
	PDT		ADJ		predeterminer
	POS		PART	possessive ending
	PRP		PRON	pronoun, personal
	PRP$	ADJ		pronoun, possessive
	RB		ADV		adverb
	RBR		ADV		adverb, comparative
	RBS		ADV		adverb, superlative
	RP		PART	adverb, particle
	SP		SPACE	space
	SYM		SYM		symbol
	TO		PART	infinitival to
	UH		INTJ	interjection
	VB		VERB	verb, base form
	VBD		VERB	verb, past tense
	VBG		VERB	verb, gerund or present participle
	VBN		VERB	verb, past participle
	VBP		VERB	verb, non-3rd person singular present
	VBZ		VERB	verb, 3rd person singular present
	WDT		ADJ		wh-determiner
	WP		NOUN	wh-pronoun, personal
	WP$		ADJ		wh-pronoun, possessive
	WRB		ADV		wh-adverb
	XX		X		unknown

	DEPENDENCY	DESCRIPTION
	acomp		adjectival complement
	advcl		adverbial clause modifier
	advmod		adverbial modifier
	agent		agent
	amod		adjectival modifier
	appos		appositional modifier
	attr		attribute
	aux			auxiliary
	auxpass		auxiliary (passive)
	cc			coordinating conjunction
	ccomp		clausal complement
	complm		complementizer
	conj		conjunct
	cop			copula
	csubj		clausal subject
	csubjpass	clausal subject (passive)
	dep			unclassified dependent
	det			determiner
	dobj		direct object
	expl		expletive
	hmod		modifier in hyphenation
	hyph		hyphen
	infmod		infinitival modifier
	intj		interjection
	iobj		indirect object
	mark		marker
	meta		meta modifier
	neg			negation modifier
	nmod		modifier of nominal
	nn			noun compound modifier
	npadvmod	noun phrase as adverbial modifier
	nsubj		nominal subject
	nsubjpass	nominal subject (passive)
	num			number modifier
	number		number compound modifier
	oprd		object predicate
	obj			object
	obl			oblique nominal
	parataxis	parataxis
	partmod		participal modifier
	pcomp		complement of preposition
	pobj		object of preposition
	poss		possession modifier
	possessive	possessive modifier
	preconj		pre-correlative conjunction
	prep		prepositional modifier
	prt			particle
	punct		punctuation
	quantmod	modifier of quantifier
	rcmod		relative clause modifier
	root		root
	xcomp		open clausal complement
*/

var pronounData = require("./pronouns");

function parseAsTree(words) {
	var root = null;
	for (var w = 0; w < words.length; w++) {
		var word = words[w];
		if (!word.childIndices) {
			word.childIndices = [];
		}
		var parentWord = words[word.parentIndex];
		if (word.parentRelation === "ROOT") {
			root = word;
		}
		else if (!parentWord.childIndices) {
			parentWord.childIndices = [ word.index ];
		}
		else {
			parentWord.childIndices.push(word.index);
		}
	}
	return root;
}

function findVerbs(words) {
	var verbs = [];
	for (var w = 0; w < words.length; w++) {
		var word = words[w];
		if (word.pos === "VERB") {
			var verb = word;
			// console.log(verb.text);
			var modifiers = [];
			var subject = null;
			var objects = [];
			for (var i = 0; i < verb.childIndices.length; i++) {
				var word2 = words[verb.childIndices[i]];
				if (word2.parentRelation === "nsubj") {
					subject = word2;
					if (!verb.owner) {
						verb.owner = subject.owner;
					}
				}
				else if (word2.parentRelation === "npadvmod") {
					objects.push({ object: word2.text, objectFull: collapseToText(word2, words), isDirect: false });
				}
				else if (word2.parentRelation === "dobj") {
					objects.push({ object: word2.text, objectFull: collapseToText(word2, words), isDirect: true });
					forEachDirectChild(word2, words, function(child) {
						if (child.parentRelation === "prep") {
							forEachDirectChild(child, words, function(child2) {

							});
							// objects.push({ object: child.text, objectFull: collapseToText(child, words), isDirect: false, })
						}
					});
				}
				else if (word2.parentRelation === "advmod") {
					modifiers.push(word2.text);
				}
				// console.log('  ' + word2.text + ' (' + word2.parentRelation + ')');
			}
			verbs.push({
				verb: word.lemma,
				modifiers: modifiers,
				subject: subject && subject.owner || null,
				objects: objects
			});
		}
	}
	return verbs;
	/*for (var w = 0; w < words.length; w++) {
		var word = words[w];
		if (word.parentRelation === 'nsubj') {
			var subject = word;
			var verb = words[subject.parentIndex];
			// console.log('\nverb:     ', verb.text);
			// console.log('  subject:', subject.text);
			for (var i = 0; i < verb.childIndices.length; i++) {
				var word2 = words[verb.childIndices[i]];
				// console.log('  related:', word2.text);
				// if (word2.index !== subject.index && word2.index !== verb.index && word2.parentIndex === verb.index) {

				// }
			}
		}
	}*/
}

function forEachDirectChild(word, words, callback) {
	for (var i = 0; i < word.childIndices.length; i++) {
		if (callback(words[word.childIndices[i]]) === false) {
			break;
		}
	}
}

function collapseToText(word, words) {
	var i;
	var wordsToExplore = [ word ];
	var index = 0;
	while (index < wordsToExplore.length) {
		var word2 = wordsToExplore[index];
		for(i = 0; i < word2.childIndices.length; i++) {
			var word3 = words[word2.childIndices[i]];
			if (word3.parentRelation !== "prep") {
				wordsToExplore.push(word3);
			}
		}
		index++;
	}
	wordsToExplore.sort(function (a, b) {
		return a.index - b.index;
	});
	var text = '';
	for(i = 0; i < wordsToExplore.length; i++) {
		text += wordsToExplore[i].textWithWhitespace;
	}
	return text.trim();
}

function determineCasing(word) {
	var text = word.text;
	var isLowerCase = (text === text.toLowerCase());
	var isUpperCase = (text[0] === text[0].toUpperCase() && text.substr(1) === text.substr(1).toLowerCase());
	if ((text[0] === "@" && word.pos === "PROPN") || text[0] === "'") {
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

function determinePronoun(word) {
	var formPossibilities;
	if (word.tag === "PRP" && word.pos === "PRON") {
		if (word.parentRelation === "nsubj") {
			formPossibilities = [ "subject" ];
		}
		else if (word.parentRelation === "dobj") {
			formPossibilities = [ "object" ];
		}
		else if (word.parentRelation === "pobj") {
			formPossibilities = [ "object", "possessivePronoun", "reflexive" ];
		}
	}
	else if (word.tag === "PRP$" && word.pos === "ADJ" && word.parentRelation === "poss") {
		formPossibilities = [ "possessiveAdjective" ];
	}
	else if (word.tag === "NN" && word.pos === "NOUN" && word.parentRelation === "attr") {
		formPossibilities = [ "possessivePronoun" ];
	}
	// determine which form and pronoun is actually correct
	if (formPossibilities) {
		for (var f = 0; f < formPossibilities.length; f++) {
			var form = formPossibilities[f];
			for (var p in pronounData) {
				if (pronounData[p][form].toLowerCase() === word.text.toLowerCase()) {
					return { form: form, pronoun: p };
				}
			}
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

function findActorByName(actorName, actors) {
	for (var a = 0; a < actors.length; a++) {
		if (actors[a].name === actorName) {
			return actors[a];
		}
	}
	return null;
}

function determineBasicWordOwners(words, speakerName, actors) {
	var mentionedActors = {
		"I/me": findActorByName(speakerName, actors)
	};
	for(var w = 0; w < words.length; w++) {
		var word = words[w];
		if (word.pos === "PROPN" && word.tag === "NNP") {
			var actor = findActorByName(word.text, actors);
			if (actor) {
				word.owner = actor.name;
				mentionedActors[actor.pronouns] = actor;
			}
			else {
				word.owner = null;
			}
		}
		else if (word.isPronoun && mentionedActors[word.pronoun]) {
			word.owner = mentionedActors[word.pronoun].name;
		}
		else {
			word.owner = null;
		}
	}
}

module.exports = function parse(input, actors) {
	var s, w, word;
	var wordOwnersPerSentence = [];
	var verbsPerSentence = [];
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
			var pronoun = determinePronoun(word);
			if (pronoun) {
				word.isPronoun = true;
				word.pronoun = pronoun.pronoun;
				word.pronounForm = pronoun.form;
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
		parseAsTree(words);
		determineBasicWordOwners(words, "@Shanji", actors);
		verbsPerSentence.push(findVerbs(words));
		casingPerSentence.push(casing);
		pronounsPerSentence.push(pronouns);
		var wordOwners = [];
		for (w = 0; w < words.length; w++) {
			word = words[w];
			wordOwners.push(word.owner);
		}
		wordOwnersPerSentence.push(wordOwners);
	}
	return {
		wordOwners: wordOwnersPerSentence,
		verbs: verbsPerSentence,
		casing: casingPerSentence,
		pronouns: pronounsPerSentence
	};
};
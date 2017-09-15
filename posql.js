/*
syntax:
	POS						e.g. NOUN
	:TAG					e.g. PRP$
	>dependency				e.g. >dobj
	POS:TAG>dependency		e.g. VERB:VBD>root

	|	or					e.g. NOUN | VERB
	&	and					e.g. NOUN & VERB

	~ 	may have 0 layers	e.g. NOUN~ VERB matches "VERB" and "NOUN VERB"
	+	may have 2+ layers	e.g. NOUN+ VERB matches "NOUN VERB" and "NOUN NOUN VERB"
	~+	may have 0+ layers	e.g. NOUN~+ VERB matches "VERB" and "NOUN VERB" and "NOUN NOUN VERB"

	()	logical group	e.g. VERB (NOUN | >dobj)
*/

function parsePOSQL(str) {
	var i ;
	var stringTokens = str.trim().split(' ');
	var tokens = [];
	for(i = 0; i < stringTokens.length; i++) {
		var token = {};
		var stringToken = stringTokens[i].trim();
		if (stringToken === '|') {
			token.isOr = true;
		}
		else if (stringToken === '&') {
			token.isAnd = true;
		}
		else if (stringToken !== '') {
			var stringPart = '';
			var partType = 'pos';
			for (var j = 0; j < stringToken.length; j++) {
				var c = stringToken[j];
				if (c === ':') {
					if (stringPart.length > 0) {
						token[partType] = stringPart;
					}
					stringPart = '';
					partType = 'tag';
				}
				else if (c === '>') {
					if (stringPart.length > 0) {
						token[partType] = stringPart;
					}
					stringPart = '';
					partType = 'dependency';
				}
				else if (c === '~') {
					token.canBeZero = true;
				}
				else if (c === '+') {
					token.canBeMany = true;
				}
				else if (c === '(') {
					if (!token.groupBegins) {
						token.groupBegins = 1;
					}
					else {
						token.groupBegins++;
					}
				}
				else if (c === ')') {
					if (!token.groupEnds) {
						token.groupEnds = 1;
					}
					else {
						token.groupEnds++;
					}
				}
				else {
					stringPart += c;
				}
			}
			if (stringPart.length > 0) {
				token[partType] = stringPart;
			}
			// | or &
			// var squiggleIndex = s.indexOf('~');
			// var plusIndex = s.indexOf('+');
			tokens.push(token);
		}
	}
	var tokenTree = { children: [] };
	// var currToken = tokenTree;
	// var currTokenRoot = tokenTree;
	for (i = 0; i < tokens.length; i++) {
	}
}


/*
console.log(parsePOSQL("NOUN:PRP$>dobj VERB:VBD~+"));

var a = "VERB>root (>nsubj :PRP$ | NOUN) :NNP";
	// (VERB | NOUN)
	{
		isOr: true,
		group: [
			{
				isRoot: true,
				pos: "VERB"
			},
			{
				isRoot: true,
				pos: "NOUN"
			}
		]
	}
var b = {
	isRoot: true,
	pos: "VERB",
	dependency: "root",
	child: {
		isOr: true,
		group: [
			{
				dependency: "nsubj",
				child: {
					tag: "PRP$"
				}
			},
			{
				pos: "NOUN"
			}
		],
		child: {
			tag: "NNP"
		}
	}
};
*/


function createCriteriaCheck(criteria) {
	return function(node) {
		if (criteria.pos && node.pos !== criteria.pos) {
			return false;
		}
		else if (criteria.tag && node.tag !== criteria.tag) {
			return false;
		}
		else if (criteria.dependency && node.dependency !== criteria.dependency) {
			return false;
		}
		else {
			return true;
		}
	};
}

/*
	VERB
		NOUN
		:NNP
			NOUN
		PREP
			:NNP
				:NNP
					NOUN
		PREP
			NOUN
		PREP
			PREP
				NOUN

VERB PREP~+ :NNP~+ NOUN

{
	node: VERB
	children: [
		{
			node: NOUN
		},
		{
			node: PREP,
			children: [
				{ node: NOUN }
			]
		},
		...
	]
}
*/

function parse(root, criteria, recursively) {
	if (criteria.isOr) {
		//todo
		//pass recursively through
	}
	else if (criteria.isAnd) {
		//todo
		//pass recursively through
	}
	else {
		// console.log('Parsing criteria ' + criteria.pos + (recursively ? ' (recursively)' : ''));
		var checkCriteria = createCriteriaCheck(criteria);
		var validChildren;
		if (!root.children) {
			validChildren = [];
		}
		else if (recursively) {
			validChildren = filterRecursively(root, checkCriteria, true);
		}
		else {
			validChildren = filterNodes(root.children, checkCriteria);
		}
		// console.log('  Found ' + validChildren.length + ' valid children for criteria ' + criteria.pos);
		// do the recursion
		//todo handle canBeMany
		//todo handle canBeZero
		if (criteria.child) {
			// if (criteria.canBeZero) {
			// 	var validChildrenSkip = parse(root, criteria.child, false);
			// 	if (validChildrenSkip) {
			// 		validChildren = validChildren.concat(validChildrenSkip);
			// 	}
			// }
			var veryValidChildren = [];
			for (var i = 0; i < validChildren.length; i++) {
				var doubleChildren = parse(validChildren[i], criteria.child, false);
				if (doubleChildren) {
					veryValidChildren.push({
						index: validChildren[i].index,
						pos: validChildren[i].pos,
						children: doubleChildren
					});
				}
			}
			validChildren = veryValidChildren;
		}
		else {
			for (var j = 0; j < validChildren.length; j++) {
				validChildren[j] = {
					index: validChildren[j].index,
					pos: validChildren[j].pos
				};
			}
		}
		if (validChildren.length > 0) {
			return validChildren;
		}
	}
	return false;
}

function filterNodes(nodes, filterFunc) {
	var arr = [];
	for (var i = 0; i < nodes.length; i++) {
		if (filterFunc(nodes[i])) {
			arr.push(nodes[i]);
		}
	}
	return arr;
}

function filterRecursively(node, filterFunc, skipNode, arr) {
	if (!arr) {
		arr = [];
	}
	if (!skipNode && filterFunc(node)) {
		arr.push(node);
	}
	if (node.children) {
		for (var i = 0; i < node.children.length; i++) {
			filterRecursively(node.children[i], filterFunc, false, arr);
		}
	}
	return arr;
}

function union() {
}

function intersection() {
}


var testPOSQL = "B C~ D";
var testCriteria = {
	pos: "B",
	child: {
		pos: "C",
		canBeZero: true,
		child: {
			pos: "D"
		}
	}
};
var testTree = {
	index: 0, pos: "A",
	children: [
		{ index: 1, pos: "B",
			children: [
				{ index: 2, pos: "C",
					children: [
						{ index: 3, pos: "D" }
					]
				}
			]
		},
		{ index: 4, pos: "C",
			children: [
				{ index: 5, pos: "B",
					children: [
						{ index: 6, pos: "C",
							children: [
								{ index: 7, pos: "D" }
							]
						},
						{ index: 8, pos: "C" }
					]
				}
			]
		},
		{ index: 9, pos: "B",
			children: [
				{ index: 10, pos: "D" }
			]
		},
		{ index: 10, pos: "D",
			children: [
				{ index: 11, pos: "B",
					children: [
						{ index: 12, pos: "C",
							children: [
								{ index: 13, pos: "C",
									children: [
										{ index: 14, pos: "D" }
									]
								}
							]
						}
					]
				}
			]
		},
		{ index: 15, pos: "D" }
	]
};

console.log(JSON.stringify(parse(testTree, testCriteria, true), null, 4));
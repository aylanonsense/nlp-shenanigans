function Token(params) {
	//token properties
	this.index = params.index;
	this.text = params.text;
	this.textWithWhitespace = params.textWithWhitespace;
	this.whitespace = params.whitespace;
	this.pos = params.pos;
	this.tag = params.tag;
	this.lemma = params.lemma;
	this.isSpace = params.isSpace || false;
	this.isPunctuation = params.isPunctuation || false;
	//token relationships
	this.parentRelation = params.parentRelation;
	this.parent = null;
	this.children = [];
}
Token.prototype.addChild = function(token) {
	this.children.push(token);
	token.parent = this;
};
Token.prototype.find = function(posql, directChildrenOnly) {
	return find(this, posql, directChildrenOnly);
};

function Sentence(rawTokens) {
	this.root = null;
	this.tokens = rawTokens.map(rawToken => new Token(rawToken));
	for (let [i, token] of this.tokens.entries()) {
		if (rawTokens[i].parentIndex === token.index) {
			this.root = token;
		}
		else {
			this.tokens[rawTokens[i].parentIndex].addChild(token);
		}
	}
}
Sentence.prototype.find = function(posql, directChildrenOnly) {
	return find(this.root, posql, directChildrenOnly);
};

function parsePOSQLTag(posql) {
	let criteria = {};
	let parts = posql.split('>');
	if (parts.length > 1) {
		criteria.rel = parts[1];
		posql = parts[0];
	}
	parts = posql.split(':');
	if (parts.length > 1) {
		criteria.tag = parts[1];
		posql = parts[0];
	}
	if (posql.length > 0) {
		criteria.parentRelation = posql;
	}
	return criteria;
}

function createCriteriaCheck(criteria) {
	return token => {
		for (let k in criteria) {
			if (token[k] !== criteria[k]) {
				return false;
			}
		}
		return true;
	};
}

function find(token, posql, directChildrenOnly) {
	let criteria = parsePOSQLTag(posql);
	let checkCriteria = createCriteriaCheck(criteria);
	if (directChildrenOnly) {
		return token.children.filter(checkCriteria);
	}
	else {
		return filterRecursively(token, checkCriteria);
	}
}

function filterRecursively(token, checkCriteria, tokens) {
	tokens = tokens || [];
	for (let child of token.children) {
		if (checkCriteria(child)) {
			tokens.push(child);
		}
		filterRecursively(child, checkCriteria, tokens);
	}
	return tokens;
}

module.exports = {
	Token: Token,
	Sentence: Sentence
};
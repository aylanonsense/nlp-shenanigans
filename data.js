module.exports = {
	"actors": [
		{
			"name": "@Shanji",
			"descriptor": "@tall-elf",
			"pronouns": "she/her"
		},
		{
			"name": "@Drumwin",
			"descriptor": "@short-dwarf",
			"pronouns": "he/him"
		},
		{
			"name": "@Rowlryr",
			"descriptor": "@queer-ogre",
			"pronouns": "they/them"
		},
		{
			"name": "@Jara",
			"descriptor": "@muscular-human",
			"pronouns": "she/her"
		},
		{
			"name": "@Mikfilks",
			"descriptor": "@lively-gnome",
			"pronouns": "he/him"
		}
	],
	"actions": [
		{
			"speaker": "@Shanji",
			"text": "I walk East.",
			"textSpeaker": "You walk East.",
			"textListener": "@Shanji walks East.",
			"mentioned": [],
			"textPerMentioned": {},
			"verbs": [
				{
					"verb": "walk",
					"objects": [
						{ "object": "East", "objectFull": "East", "isDirect": true }
					]
				}
			],
			"pronouns": [
				{ "index": 0, "pronoun": "I/me", "form": "subject" }
			],
			"parsed": {
				"words": [
					{
						"index": 0,
						"pos": "PRON",
						"textWithWhitespace": "I ",
						"isPunctuation": false,
						"text": "I",
						"parentRelation": "nsubj",
						"isSpace": false,
						"tag": "PRP",
						"lemma": "-PRON-",
						"parentIndex": 1,
						"whitespace": " "
					},
					{
						"index": 1,
						"pos": "VERB",
						"textWithWhitespace": "walk ",
						"isPunctuation": false,
						"text": "walk",
						"parentRelation": "ROOT",
						"isSpace": false,
						"tag": "VBP",
						"lemma": "walk",
						"parentIndex": 1,
						"whitespace": " "
					},
					{
						"index": 2,
						"pos": "PROPN",
						"textWithWhitespace": "East",
						"isPunctuation": false,
						"text": "East",
						"parentRelation": "npadvmod",
						"isSpace": false,
						"tag": "NNP",
						"lemma": "east",
						"parentIndex": 1,
						"whitespace": ""
					},
					{
						"index": 3,
						"pos": "PUNCT",
						"textWithWhitespace": ".",
						"isPunctuation": true,
						"text": ".",
						"parentRelation": "punct",
						"isSpace": false,
						"tag": ".",
						"lemma": ".",
						"parentIndex": 1,
						"whitespace": ""
					}
				],
				"text": "I walk East.",
				"chunks": [
					{
						"end": 1,
						"start": 0
					}
				]
			}
		},
		{
			"speaker": "@Shanji",
			"text": "I open the door.",
			"textSpeaker": "You open the door.",
			"textListener": "@Shanji opens the door.",
			"mentioned": [],
			"textPerMentioned": {},
			"verbs": [
				{
					"verb": "open",
					"objects": [
						{ "object": "door", "objectFull": "the door", "isDirect": true }
					]
				}
			],
			"pronouns": [
				{ "index": 0, "pronoun": "I/me", "form": "subject" }
			],
			"parsed": {
				"words": [
					{
						"index": 0,
						"pos": "PRON",
						"textWithWhitespace": "I ",
						"isPunctuation": false,
						"text": "I",
						"parentRelation": "nsubj",
						"isSpace": false,
						"tag": "PRP",
						"lemma": "-PRON-",
						"parentIndex": 1,
						"whitespace": " "
					},
					{
						"index": 1,
						"pos": "VERB",
						"textWithWhitespace": "open ",
						"isPunctuation": false,
						"text": "open",
						"parentRelation": "ROOT",
						"isSpace": false,
						"tag": "VBP",
						"lemma": "open",
						"parentIndex": 1,
						"whitespace": " "
					},
					{
						"index": 2,
						"pos": "DET",
						"textWithWhitespace": "the ",
						"isPunctuation": false,
						"text": "the",
						"parentRelation": "det",
						"isSpace": false,
						"tag": "DT",
						"lemma": "the",
						"parentIndex": 3,
						"whitespace": " "
					},
					{
						"index": 3,
						"pos": "NOUN",
						"textWithWhitespace": "door",
						"isPunctuation": false,
						"text": "door",
						"parentRelation": "dobj",
						"isSpace": false,
						"tag": "NN",
						"lemma": "door",
						"parentIndex": 1,
						"whitespace": ""
					},
					{
						"index": 4,
						"pos": "PUNCT",
						"textWithWhitespace": ".",
						"isPunctuation": true,
						"text": ".",
						"parentRelation": "punct",
						"isSpace": false,
						"tag": ".",
						"lemma": ".",
						"parentIndex": 1,
						"whitespace": ""
					}
				],
				"text": "I open the door.",
				"chunks": [
					{
						"end": 1,
						"start": 0
					},
					{
						"end": 4,
						"start": 2
					}
				]
			}	
		},
		{
			"speaker": "@Shanji",
			"text": "I stealthilty unsheathe my sword from its scabbard.",
			"textSpeaker": "You stealthilty unsheathe your sword from its scabbard.",
			"textListener": "@Shanji stealthilty unsheathes her sword from its scabbard.",
			"mentioned": [],
			"textPerMentioned": {},
			"verbs": [
				{
					"verb": "unsheathe",
					"modifiers": [ "stealthily" ],
					"objects": [
						{ "object": "sword", "objectFull": "my sword", "isDirect": true },
						{ "object": "scabbard", "objectFull": "its scabbard", "isDirect": false, "relation": "from" }
					]
				}
			],
			"pronouns": [
				{ "index": 0, "pronoun": "I/me", "form": "subject" },
				{ "index": 3, "pronoun": "I/me", "form": "possessiveAdjective" },
				{ "index": 6, "pronoun": "it/it", "form": "possessiveAdjective" }
			],
			"parsed": {
				"words": [
					{
						"index": 0,
						"pos": "PRON",
						"textWithWhitespace": "I ",
						"isPunctuation": false,
						"text": "I",
						"parentRelation": "nsubj",
						"isSpace": false,
						"tag": "PRP",
						"lemma": "-PRON-",
						"parentIndex": 1,
						"whitespace": " "
					},
					{
						"index": 1,
						"pos": "VERB",
						"textWithWhitespace": "stealthilty ",
						"isPunctuation": false,
						"text": "stealthilty",
						"parentRelation": "ROOT",
						"isSpace": false,
						"tag": "VBP",
						"lemma": "stealthilty",
						"parentIndex": 1,
						"whitespace": " "
					},
					{
						"index": 2,
						"pos": "VERB",
						"textWithWhitespace": "unsheathe ",
						"isPunctuation": false,
						"text": "unsheathe",
						"parentRelation": "xcomp",
						"isSpace": false,
						"tag": "VB",
						"lemma": "unsheathe",
						"parentIndex": 1,
						"whitespace": " "
					},
					{
						"index": 3,
						"pos": "ADJ",
						"textWithWhitespace": "my ",
						"isPunctuation": false,
						"text": "my",
						"parentRelation": "poss",
						"isSpace": false,
						"tag": "PRP$",
						"lemma": "-PRON-",
						"parentIndex": 4,
						"whitespace": " "
					},
					{
						"index": 4,
						"pos": "NOUN",
						"textWithWhitespace": "sword ",
						"isPunctuation": false,
						"text": "sword",
						"parentRelation": "dobj",
						"isSpace": false,
						"tag": "NN",
						"lemma": "sword",
						"parentIndex": 2,
						"whitespace": " "
					},
					{
						"index": 5,
						"pos": "ADP",
						"textWithWhitespace": "from ",
						"isPunctuation": false,
						"text": "from",
						"parentRelation": "prep",
						"isSpace": false,
						"tag": "IN",
						"lemma": "from",
						"parentIndex": 4,
						"whitespace": " "
					},
					{
						"index": 6,
						"pos": "ADJ",
						"textWithWhitespace": "its ",
						"isPunctuation": false,
						"text": "its",
						"parentRelation": "poss",
						"isSpace": false,
						"tag": "PRP$",
						"lemma": "-PRON-",
						"parentIndex": 7,
						"whitespace": " "
					},
					{
						"index": 7,
						"pos": "NOUN",
						"textWithWhitespace": "scabbard",
						"isPunctuation": false,
						"text": "scabbard",
						"parentRelation": "pobj",
						"isSpace": false,
						"tag": "NN",
						"lemma": "scabbard",
						"parentIndex": 5,
						"whitespace": ""
					},
					{
						"index": 8,
						"pos": "PUNCT",
						"textWithWhitespace": ".",
						"isPunctuation": true,
						"text": ".",
						"parentRelation": "punct",
						"isSpace": false,
						"tag": ".",
						"lemma": ".",
						"parentIndex": 1,
						"whitespace": ""
					}
				],
				"text": "I stealthilty unsheathe my sword from its scabbard.",
				"chunks": [
					{
						"end": 1,
						"start": 0
					},
					{
						"end": 5,
						"start": 3
					},
					{
						"end": 8,
						"start": 6
					}
				]
			}
		},
		{
			"speaker": "@Shanji",
			"text": "I look at @Drumwin and enthusiastically wave at him while he dances.",
			"textSpeaker": "You look at @Drumwin and enthusiastically wave at him while he dances.",
			"textListener": "@Shanji looks at @Drumwin and enthusiastically waves at him while he dances.",
			"mentioned": [ "@Drumwin" ],
			"textPerMentioned": {
				"@Drumwin": "@Shanji looks at you and enthusiastically waves at you while you dance."
			},
			"verbs": [
				{
					"verb": "look",
					"objects": [
						{ "object": "@Drumwin", "objectFull": "@Drumwin", "isDirect": true, "relation": "at" }
					]
				},
				{
					"verb": "wave",
					"modifiers": [ "enthusiastically" ],
					"objects": [
						{ "object": "@Drumwin", "objectFull": "@Drumwin", "isDirect": true, "relation": "at" }
					]
				}
			],
			"pronouns": [
				{ "index": 0, "pronoun": "I/me", "form": "subject" },
				{ "index": 8, "pronoun": "he/him", "form": "object" },
				{ "index": 10, "pronoun": "he/him", "form": "subject" }
			],
			"parsed": {
				"words": [
					{
						"index": 0,
						"pos": "PRON",
						"textWithWhitespace": "I ",
						"isPunctuation": false,
						"text": "I",
						"parentRelation": "nsubj",
						"isSpace": false,
						"tag": "PRP",
						"lemma": "-PRON-",
						"parentIndex": 1,
						"whitespace": " "
					},
					{
						"index": 1,
						"pos": "VERB",
						"textWithWhitespace": "look ",
						"isPunctuation": false,
						"text": "look",
						"parentRelation": "ROOT",
						"isSpace": false,
						"tag": "VBP",
						"lemma": "look",
						"parentIndex": 1,
						"whitespace": " "
					},
					{
						"index": 2,
						"pos": "ADP",
						"textWithWhitespace": "at ",
						"isPunctuation": false,
						"text": "at",
						"parentRelation": "prep",
						"isSpace": false,
						"tag": "IN",
						"lemma": "at",
						"parentIndex": 1,
						"whitespace": " "
					},
					{
						"index": 3,
						"pos": "PROPN",
						"textWithWhitespace": "@Drumwin ",
						"isPunctuation": false,
						"text": "@Drumwin",
						"parentRelation": "pobj",
						"isSpace": false,
						"tag": "NNP",
						"lemma": "benjamin",
						"parentIndex": 2,
						"whitespace": " "
					},
					{
						"index": 4,
						"pos": "CCONJ",
						"textWithWhitespace": "and ",
						"isPunctuation": false,
						"text": "and",
						"parentRelation": "cc",
						"isSpace": false,
						"tag": "CC",
						"lemma": "and",
						"parentIndex": 1,
						"whitespace": " "
					},
					{
						"index": 5,
						"pos": "ADV",
						"textWithWhitespace": "enthusiastically ",
						"isPunctuation": false,
						"text": "enthusiastically",
						"parentRelation": "advmod",
						"isSpace": false,
						"tag": "RB",
						"lemma": "enthusiastically",
						"parentIndex": 6,
						"whitespace": " "
					},
					{
						"index": 6,
						"pos": "VERB",
						"textWithWhitespace": "wave ",
						"isPunctuation": false,
						"text": "wave",
						"parentRelation": "conj",
						"isSpace": false,
						"tag": "VB",
						"lemma": "wave",
						"parentIndex": 1,
						"whitespace": " "
					},
					{
						"index": 7,
						"pos": "ADP",
						"textWithWhitespace": "at ",
						"isPunctuation": false,
						"text": "at",
						"parentRelation": "prep",
						"isSpace": false,
						"tag": "IN",
						"lemma": "at",
						"parentIndex": 6,
						"whitespace": " "
					},
					{
						"index": 8,
						"pos": "PRON",
						"textWithWhitespace": "him ",
						"isPunctuation": false,
						"text": "him",
						"parentRelation": "pobj",
						"isSpace": false,
						"tag": "PRP",
						"lemma": "-PRON-",
						"parentIndex": 7,
						"whitespace": " "
					},
					{
						"index": 9,
						"pos": "ADP",
						"textWithWhitespace": "while ",
						"isPunctuation": false,
						"text": "while",
						"parentRelation": "mark",
						"isSpace": false,
						"tag": "IN",
						"lemma": "while",
						"parentIndex": 11,
						"whitespace": " "
					},
					{
						"index": 10,
						"pos": "PRON",
						"textWithWhitespace": "he ",
						"isPunctuation": false,
						"text": "he",
						"parentRelation": "nsubj",
						"isSpace": false,
						"tag": "PRP",
						"lemma": "-PRON-",
						"parentIndex": 11,
						"whitespace": " "
					},
					{
						"index": 11,
						"pos": "VERB",
						"textWithWhitespace": "dances",
						"isPunctuation": false,
						"text": "dances",
						"parentRelation": "advcl",
						"isSpace": false,
						"tag": "VBZ",
						"lemma": "dance",
						"parentIndex": 6,
						"whitespace": ""
					},
					{
						"index": 12,
						"pos": "PUNCT",
						"textWithWhitespace": ".",
						"isPunctuation": true,
						"text": ".",
						"parentRelation": "punct",
						"isSpace": false,
						"tag": ".",
						"lemma": ".",
						"parentIndex": 1,
						"whitespace": ""
					}
				],
				"text": "I look at @Drumwin and enthusiastically wave at him while he dances.",
				"chunks": [
					{
						"end": 1,
						"start": 0
					},
					{
						"end": 4,
						"start": 3
					},
					{
						"end": 9,
						"start": 8
					},
					{
						"end": 11,
						"start": 10
					}
				]
			}
		}
	]
};
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
	"testCases": [
		{
			"text": "I walk East.",
			"textSpeaker": "You walk East.",
			"textListener": "@Shanji walks East.",
			"mentioned": [],
			"textPerMentioned": {},
			"wordOwners": [
				[ "@Shanji", "@Shanji", null, null ]
			],
			"verbs": [
				[
					{
						"verb": "walk",
						"modifiers": [],
						"subject": "@Shanji",
						"objects": [
							{ "object": "East", "objectFull": "East", "isDirect": false }
						]
					}
				]
			],
			"casing": [
				[ "uppercase", "natural", "natural", "ignore" ]
			],
			"pronouns": [
				[ { "index": 0, "pronoun": "I/me", "form": "subject" } ]
			],
			"input": {
				"speaker": "@Shanji",
				"sentences": [
					{
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
						"chunks": [
							{ "start": 0, "end": 1 }
						],
						"text": "I walk East."
					},
				]
			}
		},
		{
			"text": "I open the door.",
			"textSpeaker": "You open the door.",
			"textListener": "@Shanji opens the door.",
			"mentioned": [],
			"textPerMentioned": {},
			"wordOwners": [
				[ "@Shanji", "@Shanji", null, null, null ]
			],
			"verbs": [
				[
					{
						"verb": "open",
						"modifiers": [],
						"subject": "@Shanji",
						"objects": [
							{ "object": "door", "objectFull": "the door", "isDirect": true }
						]
					}
				]
			],
			"casing": [
				[ "uppercase", "natural", "natural", "natural", "ignore" ]
			],
			"pronouns": [
				[
					{ "index": 0, "pronoun": "I/me", "form": "subject" }
				]
			],
			"input": {
				"speaker": "@Shanji",
				"sentences": [
					{
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
						"chunks": [
							{ "start": 0, "end": 1 },
							{ "start": 2, "end": 4 }
						],
						"text": "I open the door."
					}
				]
			}	
		},
		{
			"text": "I proudly unsheathe my sword from its scabbard.",
			"textSpeaker": "You proudly unsheathe your sword from its scabbard.",
			"textListener": "@Shanji proudly unsheathes her sword from its scabbard.",
			"mentioned": [],
			"textPerMentioned": {},
			"wordOwners": [
				[ "@Shanji", null, "@Shanji", "@Shanji", null, null, null, null, null ]
			],
			"verbs": [
				[
					{
						"verb": "unsheathe",
						"modifiers": [ "proudly" ],
						"subject": "@Shanji",
						"objects": [
							{ "object": "sword", "objectFull": "my sword", "isDirect": true },
							{ "object": "scabbard", "objectFull": "its scabbard", "isDirect": false, "relation": "from" }
						]
					}
				]
			],
			"casing": [
				[ "uppercase", "natural", "natural", "natural", "natural", "natural", "natural", "natural", "ignore" ]
			],
			"pronouns": [
				[
					{ "index": 0, "pronoun": "I/me", "form": "subject" },
					{ "index": 3, "pronoun": "I/me", "form": "possessiveAdjective" },
					{ "index": 6, "pronoun": "it/it", "form": "possessiveAdjective" }
				]
			],
			"input": {
				"speaker": "@Shanji",
				"sentences": [
					{
						"words": [
							{
								"textWithWhitespace": "I ",
								"tag": "PRP",
								"index": 0,
								"text": "I",
								"parentIndex": 2,
								"pos": "PRON",
								"whitespace": " ",
								"lemma": "-PRON-",
								"parentRelation": "nsubj",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "proudly ",
								"tag": "RB",
								"index": 1,
								"text": "proudly",
								"parentIndex": 2,
								"pos": "ADV",
								"whitespace": " ",
								"lemma": "proudly",
								"parentRelation": "advmod",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "unsheathe ",
								"tag": "VBP",
								"index": 2,
								"text": "unsheathe",
								"parentIndex": 2,
								"pos": "VERB",
								"whitespace": " ",
								"lemma": "unsheathe",
								"parentRelation": "ROOT",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "my ",
								"tag": "PRP$",
								"index": 3,
								"text": "my",
								"parentIndex": 4,
								"pos": "ADJ",
								"whitespace": " ",
								"lemma": "-PRON-",
								"parentRelation": "poss",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "sword ",
								"tag": "NN",
								"index": 4,
								"text": "sword",
								"parentIndex": 2,
								"pos": "NOUN",
								"whitespace": " ",
								"lemma": "sword",
								"parentRelation": "dobj",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "from ",
								"tag": "IN",
								"index": 5,
								"text": "from",
								"parentIndex": 4,
								"pos": "ADP",
								"whitespace": " ",
								"lemma": "from",
								"parentRelation": "prep",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "its ",
								"tag": "PRP$",
								"index": 6,
								"text": "its",
								"parentIndex": 7,
								"pos": "ADJ",
								"whitespace": " ",
								"lemma": "-PRON-",
								"parentRelation": "poss",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "scabbard",
								"tag": "NN",
								"index": 7,
								"text": "scabbard",
								"parentIndex": 5,
								"pos": "NOUN",
								"whitespace": "",
								"lemma": "scabbard",
								"parentRelation": "pobj",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": ".",
								"tag": ".",
								"index": 8,
								"text": ".",
								"parentIndex": 2,
								"pos": "PUNCT",
								"whitespace": "",
								"lemma": ".",
								"parentRelation": "punct",
								"isPunctuation": true,
								"isSpace": false
							}
						],
						"chunks": [
							{ "start": 0, "end": 1 },
							{ "start": 3, "end": 5 },
							{ "start": 6, "end": 8 }
						],
						"text": "I proudly unsheathe my sword from its scabbard."
					}
				]
			}
		},
		{
			"text": "I look at @Drumwin and ENTHUSIASTICALLY wave at him while he dances.",
			"textSpeaker": "You look at @Drumwin and ENTHUSIASTICALLY wave at him while he dances.",
			"textListener": "@Shanji looks at @Drumwin and ENTHUSIASTICALLY waves at him while he dances.",
			"mentioned": [ "@Drumwin" ],
			"textPerMentioned": {
				"@Drumwin": "@Shanji looks at you and ENTHUSIASTICALLY waves at you while you dance."
			},
			"wordOwners": [
				[ "@Shanji", "@Shanji", null, "@Drumwin", null, null, "@Shanji", null, "@Drumwin", null, "@Drumwin", "@Drumwin", null ]
			],
			"verbs": [
				[
					{
						"verb": "look",
						"modifiers": [],
						"subject": "@Shanji",
						"objects": [
							{ "object": "@Drumwin", "objectFull": "@Drumwin", "isDirect": true, "relation": "at" }
						]
					},
					{
						"verb": "wave",
						"modifiers": [ "ENTHUSIASTICALLY" ],
						"subject": "@Shanji",
						"objects": [
							{ "object": "@Drumwin", "objectFull": "@Drumwin", "isDirect": true, "relation": "at" }
						]
					},
					{
						"verb": "dance",
						"modifiers": [],
						"subject": "@Drumwin",
						"objects": []
					}
				]
			],
			"casing": [
				[ "uppercase", "natural", "natural", "natural", "natural", "caps", "natural", "natural", "natural", "natural", "natural", "natural", "ignore" ]
			],
			"pronouns": [
				[
					{ "index": 0, "pronoun": "I/me", "form": "subject" },
					{ "index": 8, "pronoun": "he/him", "form": "object" },
					{ "index": 10, "pronoun": "he/him", "form": "subject" }
				]
			],
			"input": {
				"speaker": "@Shanji",
				"sentences": [
					{
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
								"textWithWhitespace": "ENTHUSIASTICALLY ",
								"isPunctuation": false,
								"text": "ENTHUSIASTICALLY",
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
						"chunks": [
							{ "start": 0, "end": 1 },
							{ "start": 3, "end": 4 },
							{ "start": 8, "end": 9 },
							{ "start": 10, "end": 11 }
						],
						"text": "I look at @Drumwin and ENTHUSIASTICALLY wave at him while he dances."
					}
				]
			}
		},
		{
			"text": "I sit on the bench and think.",
			"textSpeaker": "You sit on the bench and think",
			"textListener": "@Shanji sits on the bench and thinks.",
			"mentioned": [],
			"textPerMentioned": {},
			"wordOwners": [
				[ "@Shanji", "@Shanji", null, null, null, null, "@Shanji", null ]
			],
			"verbs": [
				[
					{
						"verb": "sit",
						"modifiers": [],
						"subject": "@Shanji",
						"objects": [
							{ "object": "bench", "objectFull": "the bench", "isDirect": true, "relation": "on" }
						]
					},
					{
						"verb": "think",
						"modifiers": [],
						"subject": "@Shanji",
						"objects": []
					}
				]
			],
			"casing": [
				[ "uppercase", "natural", "natural", "natural", "natural", "natural", "natural", "ignore" ]
			],
			"pronouns": [
				[
					{ "index": 0, "pronoun": "I/me", "form": "subject" }
				]
			],
			"input": {
				"speaker": "@Shanji",
				"sentences": [
					{
						"words": [
							{
								"textWithWhitespace": "I ",
								"tag": "PRP",
								"index": 0,
								"text": "I",
								"parentIndex": 1,
								"pos": "PRON",
								"whitespace": " ",
								"lemma": "-PRON-",
								"parentRelation": "nsubj",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "sit ",
								"tag": "VBP",
								"index": 1,
								"text": "sit",
								"parentIndex": 1,
								"pos": "VERB",
								"whitespace": " ",
								"lemma": "sit",
								"parentRelation": "ROOT",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "on ",
								"tag": "IN",
								"index": 2,
								"text": "on",
								"parentIndex": 1,
								"pos": "ADP",
								"whitespace": " ",
								"lemma": "on",
								"parentRelation": "prep",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "the ",
								"tag": "DT",
								"index": 3,
								"text": "the",
								"parentIndex": 4,
								"pos": "DET",
								"whitespace": " ",
								"lemma": "the",
								"parentRelation": "det",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "bench ",
								"tag": "NN",
								"index": 4,
								"text": "bench",
								"parentIndex": 2,
								"pos": "NOUN",
								"whitespace": " ",
								"lemma": "bench",
								"parentRelation": "pobj",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "and ",
								"tag": "CC",
								"index": 5,
								"text": "and",
								"parentIndex": 4,
								"pos": "CCONJ",
								"whitespace": " ",
								"lemma": "and",
								"parentRelation": "cc",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "think",
								"tag": "VBP",
								"index": 6,
								"text": "think",
								"parentIndex": 1,
								"pos": "VERB",
								"whitespace": "",
								"lemma": "think",
								"parentRelation": "conj",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": ".",
								"tag": ".",
								"index": 7,
								"text": ".",
								"parentIndex": 1,
								"pos": "PUNCT",
								"whitespace": "",
								"lemma": ".",
								"parentRelation": "punct",
								"isPunctuation": true,
								"isSpace": false
							}
						],
						"chunks": [
							{
								"start": 0,
								"end": 1
							},
							{
								"start": 3,
								"end": 5
							}
						],
						"text": "I sit on the bench and think."
					}
				]
			}
		},
		{
			"text": "I silently creep forward into the darkness.",
			"textSpeaker": "You silently creep forward into the darkness.",
			"textListener": "@Shanji silently creeps forward into the darkness.",
			"mentioned": [],
			"textPerMentioned": {},
			"wordOwners": [
				[ "@Shanji", null, "@Shanji", null, null, null, null, null ]
			],
			"verbs": [
				[
					{
						"verb": "creep",
						"modifiers": [ "silently", "forward" ],
						"subject": "@Shanji",
						"objects": [
							{ "object": "darkness", "objectFull": "the darkness", "isDirect": false, "relation": "into" }
						]
					}
				]
			],
			"casing": [
				[ "uppercase", "natural", "natural", "natural", "natural", "natural", "natural", "ignore" ]
			],
			"pronouns": [
				[
					{ "index": 0, "pronoun": "I/me", "form": "subject" }
				]
			],
			"input": {
				"speaker": "@Shanji",
				"sentences": [
					{
						"words": [
							{
								"textWithWhitespace": "I ",
								"tag": "PRP",
								"index": 0,
								"text": "I",
								"parentIndex": 2,
								"pos": "PRON",
								"whitespace": " ",
								"lemma": "-PRON-",
								"parentRelation": "nsubj",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "silently ",
								"tag": "RB",
								"index": 1,
								"text": "silently",
								"parentIndex": 2,
								"pos": "ADV",
								"whitespace": " ",
								"lemma": "silently",
								"parentRelation": "advmod",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "creep ",
								"tag": "VBP",
								"index": 2,
								"text": "creep",
								"parentIndex": 2,
								"pos": "VERB",
								"whitespace": " ",
								"lemma": "creep",
								"parentRelation": "ROOT",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "forward ",
								"tag": "RB",
								"index": 3,
								"text": "forward",
								"parentIndex": 2,
								"pos": "ADV",
								"whitespace": " ",
								"lemma": "forward",
								"parentRelation": "advmod",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "into ",
								"tag": "IN",
								"index": 4,
								"text": "into",
								"parentIndex": 3,
								"pos": "ADP",
								"whitespace": " ",
								"lemma": "into",
								"parentRelation": "prep",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "the ",
								"tag": "DT",
								"index": 5,
								"text": "the",
								"parentIndex": 6,
								"pos": "DET",
								"whitespace": " ",
								"lemma": "the",
								"parentRelation": "det",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "darkness",
								"tag": "NN",
								"index": 6,
								"text": "darkness",
								"parentIndex": 4,
								"pos": "NOUN",
								"whitespace": "",
								"lemma": "darkness",
								"parentRelation": "pobj",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": ".",
								"tag": ".",
								"index": 7,
								"text": ".",
								"parentIndex": 2,
								"pos": "PUNCT",
								"whitespace": "",
								"lemma": ".",
								"parentRelation": "punct",
								"isPunctuation": true,
								"isSpace": false
							}
						],
						"chunks": [
							{
								"start": 0,
								"end": 1
							},
							{
								"start": 5,
								"end": 7
							}
						],
						"text": "I silently creep forward into the darkness."
					}

				]
			}
		},
		{
			"text": "I take the chicken that's mine from under the coop and put it in @Drumwin's cage.",
			"textSpeaker": "You take the chicken that's yours from under the coop and put it in @Drumwin's cage.",
			"textListener": "@Shanji takes the chicken that's hers from under the coop and puts it in @Drumwin's cage.",
			"mentioned": [ "@Drumwin" ],
			"textPerMentioned": {
				"@Drumwin": "@Shanji takes the chicken that's hers from under the coop and puts it in your cage."
			},
			"wordOwners": [
				[ "@Shanji", "@Shanji", null, null, null, null, "@Shanji", null, null, null, null, null, "@Shanji", null, null, "@Drumwin", "@Drumwin", null, null ]
			],
			"verbs": [
				[
					{
						"verb": "take",
						"modifiers": [],
						"subject": "@Shanji",
						"objects": [
							{ "object": "chicken", "objectFull": "the chicken that's mine", "isDirect": true },
							{ "object": "coop", "objectFull": "the coop", "isDirect": false, "relation": "from" }
						]
					},
					{
						"verb": "put",
						"modifiers": [],
						"subject": "@Shanji",
						"objects": [
							{ "object": "it", "objectFull": "it", "isDirect": true },
							{ "object": "cage", "objectFull": "@Drumwin's cage", "isDirect": false, "relation": "in" }
						]
					}
				]
			],
			"casing": [
				[ "uppercase", "natural", "natural", "natural", "natural", "natural", "natural", "natural", "natural", "natural", "natural", "natural", "natural", "natural", "natural", "natural", "natural", "natural", "ignore" ]
			],
			"pronouns": [
				[
					{ "index": 0, "pronoun": "I/me", "form": "subject" },
					{ "index": 6, "pronoun": "I/me", "form": "possessivePronoun" },
					{ "index": 13, "pronoun": "it/it", "form": "object" }
				]
			],
			"input": {
				"speaker": "@Shanji",
				"sentences": [
					{
						"words": [
							{
								"textWithWhitespace": "I ",
								"tag": "PRP",
								"index": 0,
								"text": "I",
								"parentIndex": 1,
								"pos": "PRON",
								"whitespace": " ",
								"lemma": "-PRON-",
								"parentRelation": "nsubj",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "take ",
								"tag": "VBP",
								"index": 1,
								"text": "take",
								"parentIndex": 1,
								"pos": "VERB",
								"whitespace": " ",
								"lemma": "take",
								"parentRelation": "ROOT",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "the ",
								"tag": "DT",
								"index": 2,
								"text": "the",
								"parentIndex": 3,
								"pos": "DET",
								"whitespace": " ",
								"lemma": "the",
								"parentRelation": "det",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "chicken ",
								"tag": "NN",
								"index": 3,
								"text": "chicken",
								"parentIndex": 1,
								"pos": "NOUN",
								"whitespace": " ",
								"lemma": "chicken",
								"parentRelation": "dobj",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "that",
								"tag": "WDT",
								"index": 4,
								"text": "that",
								"parentIndex": 5,
								"pos": "ADJ",
								"whitespace": "",
								"lemma": "that",
								"parentRelation": "nsubj",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "'s ",
								"tag": "VBZ",
								"index": 5,
								"text": "'s",
								"parentIndex": 3,
								"pos": "VERB",
								"whitespace": " ",
								"lemma": "be",
								"parentRelation": "relcl",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "mine ",
								"tag": "NN",
								"index": 6,
								"text": "mine",
								"parentIndex": 5,
								"pos": "NOUN",
								"whitespace": " ",
								"lemma": "mine",
								"parentRelation": "attr",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "from ",
								"tag": "IN",
								"index": 7,
								"text": "from",
								"parentIndex": 6,
								"pos": "ADP",
								"whitespace": " ",
								"lemma": "from",
								"parentRelation": "prep",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "under ",
								"tag": "IN",
								"index": 8,
								"text": "under",
								"parentIndex": 7,
								"pos": "ADP",
								"whitespace": " ",
								"lemma": "under",
								"parentRelation": "prep",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "the ",
								"tag": "DT",
								"index": 9,
								"text": "the",
								"parentIndex": 10,
								"pos": "DET",
								"whitespace": " ",
								"lemma": "the",
								"parentRelation": "det",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "coop ",
								"tag": "NN",
								"index": 10,
								"text": "coop",
								"parentIndex": 8,
								"pos": "NOUN",
								"whitespace": " ",
								"lemma": "coop",
								"parentRelation": "pobj",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "and ",
								"tag": "CC",
								"index": 11,
								"text": "and",
								"parentIndex": 1,
								"pos": "CCONJ",
								"whitespace": " ",
								"lemma": "and",
								"parentRelation": "cc",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "put ",
								"tag": "VBD",
								"index": 12,
								"text": "put",
								"parentIndex": 1,
								"pos": "VERB",
								"whitespace": " ",
								"lemma": "put",
								"parentRelation": "conj",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "it ",
								"tag": "PRP",
								"index": 13,
								"text": "it",
								"parentIndex": 12,
								"pos": "PRON",
								"whitespace": " ",
								"lemma": "-PRON-",
								"parentRelation": "dobj",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "in ",
								"tag": "IN",
								"index": 14,
								"text": "in",
								"parentIndex": 12,
								"pos": "ADP",
								"whitespace": " ",
								"lemma": "in",
								"parentRelation": "prep",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "@Drumwin",
								"tag": "NNP",
								"index": 15,
								"text": "@Drumwin",
								"parentIndex": 17,
								"pos": "PROPN",
								"whitespace": "",
								"lemma": "@Drumwin",
								"parentRelation": "poss",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "'s ",
								"tag": "POS",
								"index": 16,
								"text": "'s",
								"parentIndex": 15,
								"pos": "PART",
								"whitespace": " ",
								"lemma": "'s",
								"parentRelation": "case",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "cage",
								"tag": "NN",
								"index": 17,
								"text": "cage",
								"parentIndex": 14,
								"pos": "NOUN",
								"whitespace": "",
								"lemma": "cage",
								"parentRelation": "pobj",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": ".",
								"tag": ".",
								"index": 18,
								"text": ".",
								"parentIndex": 1,
								"pos": "PUNCT",
								"whitespace": "",
								"lemma": ".",
								"parentRelation": "punct",
								"isPunctuation": true,
								"isSpace": false
							}
						],
						"chunks": [
							{
								"start": 0,
								"end": 1
							},
							{
								"start": 2,
								"end": 4
							},
							{
								"start": 6,
								"end": 7
							},
							{
								"start": 9,
								"end": 11
							},
							{
								"start": 13,
								"end": 14
							},
							{
								"start": 15,
								"end": 18
							}
						],
						"text": "I take the chicken that's mine from under the coop and put it in @Drumwin's cage."
					}
				]
			}
		},
		{
			"text": "I carefully watch @Drumwin cook a steak and do the same with mine.",
			"textSpeaker": "You carefully watch @Drumwin cook a steak and do the same with yours.",
			"textListener": "@Shanji carefully watches @Drumwin cook a steak and do the same with hers.",
			"mentioned": [ "@Drumwin" ],
			"textPerMentioned": {
				"@Drumwin": "@Shanji carefully watches you cook a steak and do the same with hers."
			},
			"wordOwners": [
				[ "@Shanji", null, "@Shanji", "@Drumwin", "@Drumwin", null, null, null, "@Drumwin", null, null, null, "@Shanji", null ]
			],
			"verbs": [
				[
					{
						"verb": "watch",
						"modifiers": [ "carefully" ],
						"objects": [
							{ "object": "@Drumwin", "objectFull": "@Drumwin cook a steak", "isDirect": true }
						]
					},
					{
						"verb": "cook",
						"modifiers": [],
						"subject": "@Drumwin",
						"objects": [
							{ "object": "steak", "objectFull": "a steak", "isDirect": true }
						]
					},
					{
						"verb": "do",
						"modifiers": [],
						"subject": "@Drumwin",
						"objects": [
							{ "object": "mine", "objectFull": "mine", "isDirect": true, "relation": "with" }
						]
					}
				]
			],
			"casing": [
				[ "uppercase", "natural", "natural", "natural", "natural", "natural", "natural", "natural", "natural", "natural", "natural", "natural", "natural", "ignore" ]
			],
			"pronouns": [
				[
					{ "index": 0, "pronoun": "I/me", "form": "subject" },
					{ "index": 12, "pronoun": "I/me", "form": "possessivePronoun" }
				]
			],
			"input": {
				"speaker": "@Shanji",
				"sentences": [
					{
						"words": [
							{
								"textWithWhitespace": "I ",
								"tag": "PRP",
								"index": 0,
								"text": "I",
								"parentIndex": 2,
								"pos": "PRON",
								"whitespace": " ",
								"lemma": "-PRON-",
								"parentRelation": "nsubj",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "carefully ",
								"tag": "RB",
								"index": 1,
								"text": "carefully",
								"parentIndex": 2,
								"pos": "ADV",
								"whitespace": " ",
								"lemma": "carefully",
								"parentRelation": "advmod",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "watch ",
								"tag": "VBP",
								"index": 2,
								"text": "watch",
								"parentIndex": 2,
								"pos": "VERB",
								"whitespace": " ",
								"lemma": "watch",
								"parentRelation": "ROOT",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "@Drumwin ",
								"tag": "NNP",
								"index": 3,
								"text": "@Drumwin",
								"parentIndex": 4,
								"pos": "PROPN",
								"whitespace": " ",
								"lemma": "@Drumwin",
								"parentRelation": "compound",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "cook ",
								"tag": "VB",
								"index": 4,
								"text": "cook",
								"parentIndex": 2,
								"pos": "VERB",
								"whitespace": " ",
								"lemma": "cook",
								"parentRelation": "dobj",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "a ",
								"tag": "DT",
								"index": 5,
								"text": "a",
								"parentIndex": 6,
								"pos": "DET",
								"whitespace": " ",
								"lemma": "a",
								"parentRelation": "det",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "steak ",
								"tag": "NN",
								"index": 6,
								"text": "steak",
								"parentIndex": 4,
								"pos": "NOUN",
								"whitespace": " ",
								"lemma": "steak",
								"parentRelation": "dobj",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "and ",
								"tag": "CC",
								"index": 7,
								"text": "and",
								"parentIndex": 4,
								"pos": "CCONJ",
								"whitespace": " ",
								"lemma": "and",
								"parentRelation": "cc",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "do ",
								"tag": "VB",
								"index": 8,
								"text": "do",
								"parentIndex": 4,
								"pos": "VERB",
								"whitespace": " ",
								"lemma": "do",
								"parentRelation": "conj",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "the ",
								"tag": "DT",
								"index": 9,
								"text": "the",
								"parentIndex": 10,
								"pos": "DET",
								"whitespace": " ",
								"lemma": "the",
								"parentRelation": "det",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "same ",
								"tag": "JJ",
								"index": 10,
								"text": "same",
								"parentIndex": 8,
								"pos": "ADJ",
								"whitespace": " ",
								"lemma": "same",
								"parentRelation": "dobj",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "with ",
								"tag": "IN",
								"index": 11,
								"text": "with",
								"parentIndex": 8,
								"pos": "ADP",
								"whitespace": " ",
								"lemma": "with",
								"parentRelation": "prep",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "mine",
								"tag": "PRP",
								"index": 12,
								"text": "mine",
								"parentIndex": 11,
								"pos": "PRON",
								"whitespace": "",
								"lemma": "-PRON-",
								"parentRelation": "pobj",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": ".",
								"tag": ".",
								"index": 13,
								"text": ".",
								"parentIndex": 2,
								"pos": "PUNCT",
								"whitespace": "",
								"lemma": ".",
								"parentRelation": "punct",
								"isPunctuation": true,
								"isSpace": false
							}
						],
						"chunks": [
							{
								"start": 0,
								"end": 1
							},
							{
								"start": 5,
								"end": 7
							},
							{
								"start": 12,
								"end": 13
							}
						],
						"text": "I carefully watch @Drumwin cook a steak and do the same with mine."
					}
				]
			}
		},
		{
			"text": "I stroll towards the mine where @Drumwin talks to himself.",
			"textSpeaker": "You stroll towards the mine where @Drumwin talks to himself.",
			"textListener": "@Shanji strolls towards the mine where @Drumwin talks to himself.",
			"mentioned": [ "@Drumwin" ],
			"textPerMentioned": {
				"@Drumwin": "@Shanji strolls towards the mine where you talk to yourself."
			},
			"wordOwners": [
				[ "@Shanji", "@Shanji", null, null, null, null, "@Drumwin", "@Drumwin", null, "@Drumwin", null ]
			],
			"verbs": [
				[
					{
						"verb": "stroll",
						"modifiers": [],
						"objects": [
							{ "object": "mine", "objectFull": "the mine", "isDirect": false, "relation": "towards" }
						]
					},
					{
						"verb": "talk",
						"modifiers": [],
						"subject": "@Drumwin",
						"objects": [
							{ "object": "himself", "objectFull": "himself", "isDirect": false, "relation": "to" }
						]
					}
				]
			],
			"casing": [
				[ "uppercase", "natural", "natural", "natural", "natural", "natural", "natural", "natural", "natural", "natural", "ignore" ]
			],
			"pronouns": [
				[
					{ "index": 0, "pronoun": "I/me", "form": "subject" },
					{ "index": 9, "pronoun": "he/him", "form": "reflexive" }
				]
			],
			"input": {
				"speaker": "@Shanji",
				"sentences": [
					{
						"words": [
							{
								"textWithWhitespace": "I ",
								"tag": "PRP",
								"index": 0,
								"text": "I",
								"parentIndex": 1,
								"pos": "PRON",
								"whitespace": " ",
								"lemma": "-PRON-",
								"parentRelation": "nsubj",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "stroll ",
								"tag": "VBP",
								"index": 1,
								"text": "stroll",
								"parentIndex": 1,
								"pos": "VERB",
								"whitespace": " ",
								"lemma": "stroll",
								"parentRelation": "ROOT",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "towards ",
								"tag": "IN",
								"index": 2,
								"text": "towards",
								"parentIndex": 1,
								"pos": "ADP",
								"whitespace": " ",
								"lemma": "towards",
								"parentRelation": "prep",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "the ",
								"tag": "DT",
								"index": 3,
								"text": "the",
								"parentIndex": 4,
								"pos": "DET",
								"whitespace": " ",
								"lemma": "the",
								"parentRelation": "det",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "mine ",
								"tag": "NN",
								"index": 4,
								"text": "mine",
								"parentIndex": 2,
								"pos": "NOUN",
								"whitespace": " ",
								"lemma": "mine",
								"parentRelation": "pobj",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "where ",
								"tag": "WRB",
								"index": 5,
								"text": "where",
								"parentIndex": 7,
								"pos": "ADV",
								"whitespace": " ",
								"lemma": "where",
								"parentRelation": "advmod",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "@Drumwin ",
								"tag": "NNP",
								"index": 6,
								"text": "@Drumwin",
								"parentIndex": 7,
								"pos": "PROPN",
								"whitespace": " ",
								"lemma": "@Drumwin",
								"parentRelation": "nsubj",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "talks ",
								"tag": "VBZ",
								"index": 7,
								"text": "talks",
								"parentIndex": 4,
								"pos": "VERB",
								"whitespace": " ",
								"lemma": "talk",
								"parentRelation": "relcl",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "to ",
								"tag": "IN",
								"index": 8,
								"text": "to",
								"parentIndex": 7,
								"pos": "ADP",
								"whitespace": " ",
								"lemma": "to",
								"parentRelation": "prep",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "himself",
								"tag": "PRP",
								"index": 9,
								"text": "himself",
								"parentIndex": 8,
								"pos": "PRON",
								"whitespace": "",
								"lemma": "-PRON-",
								"parentRelation": "pobj",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": ".",
								"tag": ".",
								"index": 10,
								"text": ".",
								"parentIndex": 1,
								"pos": "PUNCT",
								"whitespace": "",
								"lemma": ".",
								"parentRelation": "punct",
								"isPunctuation": true,
								"isSpace": false
							}
						],
						"chunks": [
							{
								"start": 0,
								"end": 1
							},
							{
								"start": 3,
								"end": 5
							},
							{
								"start": 6,
								"end": 7
							},
							{
								"start": 9,
								"end": 10
							}
						],
						"text": "I stroll towards the mine where @Drumwin talks to himself."
					}
				]
			}
		},
		{
			"text": "I disarm @Drumwin before he can equip his weapon and attack me.",
			"textSpeaker": "You disarm @Drumwin before he can equip his weapon and attack you.",
			"textListener": "@Shanji disarms @Drumwin before he can equip his weapon and attack her.",
			"mentioned": [ "@Drumwin" ],
			"textPerMentioned": {
				"@Drumwin": "@Shanji disarms you before you can equip your weapon and attack her."
			},
			"wordOwners": [
				[ "@Shanji", "@Shanji", "@Drumwin", null, "@Drumwin", "@Drumwin", "@Drumwin", "@Drumwin", null, null, "@Drumwin", "Shanji", null ]
			],
			"verbs": [
				[
					{
						"verb": "disarm",
						"modifiers": [],
						"subject": "@Shanji",
						"objects": [
							{ "object": "@Drumwin", "objectFull": "@Drumwin", "isDirect": true }
						]
					}
				]
			],
			"casing": [
				[ "uppercase", "natural", "natural", "natural", "natural", "natural", "natural", "natural", "natural", "natural", "natural", "natural", "ignore" ]
			],
			"pronouns": [
				[
					{ "index": 0, "pronoun": "I/me", "form": "subject" },
					{ "index": 4, "pronoun": "he/him", "form": "subject" },
					{ "index": 7, "pronoun": "he/him", "form": "possessiveAdjective" },
					{ "index": 11, "pronoun": "I/me", "form": "object" }
				]
			],
			"input": {
				"speaker": "@Shanji",
				"sentences": [
					{
						"words": [
							{
								"textWithWhitespace": "I ",
								"tag": "PRP",
								"index": 0,
								"text": "I",
								"parentIndex": 1,
								"pos": "PRON",
								"whitespace": " ",
								"lemma": "-PRON-",
								"parentRelation": "nsubj",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "disarm ",
								"tag": "VBP",
								"index": 1,
								"text": "disarm",
								"parentIndex": 1,
								"pos": "VERB",
								"whitespace": " ",
								"lemma": "disarm",
								"parentRelation": "ROOT",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "@Drumwin ",
								"tag": "NNP",
								"index": 2,
								"text": "@Drumwin",
								"parentIndex": 1,
								"pos": "PROPN",
								"whitespace": " ",
								"lemma": "@Drumwin",
								"parentRelation": "dobj",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "before ",
								"tag": "IN",
								"index": 3,
								"text": "before",
								"parentIndex": 6,
								"pos": "ADP",
								"whitespace": " ",
								"lemma": "before",
								"parentRelation": "mark",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "he ",
								"tag": "PRP",
								"index": 4,
								"text": "he",
								"parentIndex": 6,
								"pos": "PRON",
								"whitespace": " ",
								"lemma": "-PRON-",
								"parentRelation": "nsubj",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "can ",
								"tag": "MD",
								"index": 5,
								"text": "can",
								"parentIndex": 6,
								"pos": "VERB",
								"whitespace": " ",
								"lemma": "can",
								"parentRelation": "aux",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "equip ",
								"tag": "VB",
								"index": 6,
								"text": "equip",
								"parentIndex": 1,
								"pos": "VERB",
								"whitespace": " ",
								"lemma": "equip",
								"parentRelation": "advcl",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "his ",
								"tag": "PRP$",
								"index": 7,
								"text": "his",
								"parentIndex": 8,
								"pos": "ADJ",
								"whitespace": " ",
								"lemma": "-PRON-",
								"parentRelation": "poss",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "weapon ",
								"tag": "NN",
								"index": 8,
								"text": "weapon",
								"parentIndex": 6,
								"pos": "NOUN",
								"whitespace": " ",
								"lemma": "weapon",
								"parentRelation": "dobj",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "and ",
								"tag": "CC",
								"index": 9,
								"text": "and",
								"parentIndex": 6,
								"pos": "CCONJ",
								"whitespace": " ",
								"lemma": "and",
								"parentRelation": "cc",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "attack ",
								"tag": "VB",
								"index": 10,
								"text": "attack",
								"parentIndex": 6,
								"pos": "VERB",
								"whitespace": " ",
								"lemma": "attack",
								"parentRelation": "conj",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": "me",
								"tag": "PRP",
								"index": 11,
								"text": "me",
								"parentIndex": 10,
								"pos": "PRON",
								"whitespace": "",
								"lemma": "-PRON-",
								"parentRelation": "dobj",
								"isPunctuation": false,
								"isSpace": false
							},
							{
								"textWithWhitespace": ".",
								"tag": ".",
								"index": 12,
								"text": ".",
								"parentIndex": 1,
								"pos": "PUNCT",
								"whitespace": "",
								"lemma": ".",
								"parentRelation": "punct",
								"isPunctuation": true,
								"isSpace": false
							}
						],
						"chunks": [
							{
								"start": 0,
								"end": 1
							},
							{
								"start": 2,
								"end": 3
							},
							{
								"start": 4,
								"end": 5
							},
							{
								"start": 7,
								"end": 9
							},
							{
								"start": 11,
								"end": 12
							}
						],
						"text": "I disarm @Drumwin before he can equip his weapon and attack me."
					}
				]
			}
		}
		/*,
		{
			"text": "I ",
			"textSpeaker": "You ",
			"textListener": "@Shanji ",
			"mentioned": [ "@Drumwin" ],
			"textPerMentioned": {
				"@Drumwin": "@Shanji "
			},
			"wordOwners": [
				[ "@Shanji" ]
			],
			"verbs": [
				[
					{
						"verb": "",
						"modifiers": [],
						"subject": "@Shanji",
						"objects": [
							{ "object": "@Drumwin", "objectFull": "@Drumwin", "isDirect": true, "relation": "at" }
						]
					}
				]
			],
			"casing": [
				[ "uppercase", "natural", "ignore" ]
			],
			"pronouns": [
				[
					{ "index": 0, "pronoun": "I/me", "form": "subject" }
				]
			],
			"input": {
				"speaker": "@Shanji",
				"sentences": [
				]
			}
		}*/
	]
};
"use strict"
const fs = require('fs');

/**
 * Returns a list of words that do not end in a single "s".
 * So for example, if the list contains "TESS", that will be returned.
 * But if the list contains "NESTS" that will not be returned.
 */
var removePlurals = function(words) {
	var result = words.filter(function(w) {
		var lower = w.toLowerCase();
		if (lower.endsWith('s') && !lower.endsWith('ss')) {
			return false;
		} else {
			return true;
		}
	});
	return result;
}

/**
 * Given an input file name, assumed to contain a list of words separated by newlines,
 * returns the words as an array.

 */
var getWordsAsArray = function(filename) {
	return new Promise(function(resolve, reject) {
		var words = [];
		fs.readFile(filename, 'utf8', function(err, content) {
			if (err) {
				console.log(err);
				reject(err);
			} else {
				words = content.split(/\r?\n/);
				resolve(words);
			}
		});
	});
}

var promise = getWordsAsArray("./data/somewords.txt");
promise.then(function(value) {
	var noPlurals = removePlurals(value);
	noPlurals.forEach(function(w) {
		console.log(w.toUpperCase());
	});
}).catch(function(err) {
	console.log("There was an error");
	console.log(err);
})

if (typeof module !== 'undefined' && module.exports !== null) {
	exports.getWordsAsArray = getWordsAsArray;
}

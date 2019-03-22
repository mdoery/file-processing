"use strict"
var assert = require('assert');
var wordlistProcessor = require('../index');
var getWordsAsArray = wordlistProcessor.getWordsAsArray;

/*****************\
| Tests of isFile |
\*****************/
describe('test', function() {
  describe('#getWordsAsArray()', function() {
    it('should return list of words', function() {
      return getWordsAsArray('test/data.txt').then(function(value) {
        assert.deepEqual(value, ['PLOT','SAMPLE','DATA','INFINITE','BEST','BESTIES','LEAST','TESTS','TEST','EXAMPLE','EXAMPLES','SUCCESS'],
        'got ' + JSON.stringify(value));
      }).catch(function(err) {
        throw new Error('Failed returning list of words');
      });
    });
  });
});

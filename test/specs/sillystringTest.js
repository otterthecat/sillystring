// assertion library
// /////////////////////////////////////////////////////////
var chai = require('chai').should();

// mock objects
// /////////////////////////////////////////////////////////
var sampleString = "One pluse one is two, not three, but two";
var sampleFilter = ["two", "three"];
var addMark = function(match){
	return "<mark>" + match + "</mark>";
};

// modules to test
// /////////////////////////////////////////////////////////
var sillystring = require('../../lib/sillystring');

describe('sillystring', function(){

	it('should pass regex matches to callback', function(){

		sillystring({keys: sampleFilter, cb: addMark}, sampleString).should.contain("<mark>two</mark>");
	});
});
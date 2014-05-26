var silly = require('./lib/sillystring');

var sample = "Cat dog and cow with moose and dog and cat";
var words = ['dog', 'cow'];

var transf = function(match){

	return "<mark>" + match + "</mark>";
};

console.log(silly({keys: words, cb: transf}, sample));
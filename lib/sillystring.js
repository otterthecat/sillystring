var wordsToRegx = function(obj){

	var str = '';
	for(item in obj){

		str += obj[item] + '|';
	};

	return new RegExp('(' + str.substring(0, str.length - 1) + ')', 'gi');
};

module.exports = function(opt, src){

	return src.replace(wordsToRegx(opt.keys), opt.cb);
};
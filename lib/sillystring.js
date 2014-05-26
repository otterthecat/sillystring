'use strict';

var createRegx = function(baseString){

	return new RegExp('(' + baseString.substring(0, baseString.length-1) + ')', 'gi');
};

var iterateArray = function(arr){

	var str = '';
	for (var i = arr.length; i >= 0; i--){

		str += arr[i] + '|';
	}

	return str;
};

module.exports = function(opt, src){

	return src.replace(createRegx(iterateArray(opt.keys)), opt.cb);
};
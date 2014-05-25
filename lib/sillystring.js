'use strict';

var createRegx = function(baseString){

	return new RegExp('(' + baseString.substring(0, baseString.length-1) + ')', 'gi');
};

var iterateObject = function(obj){

	var str = '';
	for(var item in obj){

		str += obj[item] + '|';
	}

	return str;
};

var iterateArray = function(arr){

	var str = '';
	for(var i=0; i < arr.length; i++){

		str += arr[i] + '|';
	}

	return str;
};

var parseFilters = function(items){

	return createRegx(items instanceof Array ? iterateArray(items) : iterateObject(items));
};


module.exports = function(opt, src){

	return src.replace(parseFilters(opt.keys), opt.cb);
};
var createRegx = function(baseString){
	'use strict';

	return new RegExp('(' + baseString.substring(0, baseString.length-1) + ')', 'gi');
};

var iterateArray = function(arr){
	'use strict';

	var str = '';
	for (var i = arr.length; i >= 0; i -= 1){

		str += arr[i] + '|';
	}

	return str;
};

module.exports = function(opt, src){
	'use strict';
	return src.replace(createRegx(iterateArray(opt.keys)), opt.cb);
};
var axdomConverter = function(_selector){
	var _this = bs.Dom(_selector);
	_this.css = function(css){
		for ( k in css ) {
			_this.S(k, css[k]);
		}
	};
	
	
	return _this;
};

axdomConverter.fn = axdomConverter.prototype = {
	
};
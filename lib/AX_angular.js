var axdom = ax_angularjs = function(elem){
	var _this = angular.element(elem);
	if(elem.id === undefined) _this.attr("id", elem.id = "axf_"+axf.timekey());

	_this._get_set_width_height = function(type, value, extrs){
		if( Object.isWindow(elem) ) return elem.document.documentElement.clientWidth;
		if ( elem.nodeType === 9 ) return Math.max(elem.body[ "scroll" + type ], elem.body[ "offset" + type ]);
		if( value != undefined && ( Object.isNumber(value) || value == value.number() ) ) value += "px";
		var extrsNum = 0;
		axf.each(extrs, function(){
			trace(_this.css("padding"), this);
			trace(_this.css(this), this);
			//extrsNum += _this.css(this).number();
		});
		return value === undefined ? _this.css( type ).number() + extrsNum : _this.css( type, value );		
	};
	_this.width = function(value){ return _this._get_set_width_height("width", value).number(); }
	_this.height = function(value){ return _this._get_set_width_height("height", value).number(); }
	_this.innerWidth = function(value){ return _this._get_set_width_height("width", value, ["padding"]).number(); }
	_this.innerHeight = function(value){ return _this._get_set_width_height("height", value, ["padding"]).number(); }
	_this.outerWidth = function(value){ return _this._get_set_width_height("width", value, ["padding","border"]).number(); }
	_this.outerHeight = function(value){ return _this._get_set_width_height("height", value, ["padding","border"]).number(); }

	return _this;
};
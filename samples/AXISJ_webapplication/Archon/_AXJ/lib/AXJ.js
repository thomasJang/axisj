/*!
 * axisJ Javascript Library Version 1.0
 * http://axisJ.com
 * 
 * 아래 소스의 라이선스는 axisJ.com 에서 확인 하실 수 있습니다.
 * http://axisJ.com/license
 * axisJ를 사용하시려면 라이선스 페이지를 확인 및 숙지 후 사용 하시기 바람니다. 무단 사용시 예상치 못한 피해가 발생 하실 수 있습니다.
 */

/* *** jquery event extend for mobile ***************************** */
var rkeyEvent = /^key/;
var rmouseEvent = /^(?:mouse|contextmenu)|click/;
jQuery.each(("touchstart touchmove touchend").split(" "), function (i, name) {
	// Handle event binding
	jQuery.fn[name] = function (data, fn) {
		if (fn == null) { fn = data; data = null; }
		return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
	};
	if (rkeyEvent.test(name)) { jQuery.event.fixHooks[name] = jQuery.event.keyHooks; }
	if (rmouseEvent.test(name)) { jQuery.event.fixHooks[name] = jQuery.event.mouseHooks; }
});

/* *** extend implement block ***************************** */
var Class = (function () {
	function subclass() { };
	function create() { var parent = null, properties = $A(arguments); if (Object.isFunction(properties[0])) parent = properties.shift(); function klass() { this.initialize.apply(this, arguments); } Object.extend(klass, Class.Methods); klass.superclass = parent; klass.subclasses = []; if (parent) { subclass.prototype = parent.prototype; klass.prototype = new subclass; parent.subclasses.push(klass); } for (var i = 0; i < properties.length; i++) klass.addMethods(properties[i]); if (!klass.prototype.initialize) klass.prototype.initialize = Prototype.emptyFunction; klass.prototype.constructor = klass; return klass; }
	function addMethods(source) { var ancestor = this.superclass && this.superclass.prototype; var properties = Object.keys(source); if (!Object.keys({ toString: true }).length) { if (source.toString != Object.prototype.toString) properties.push("toString"); if (source.valueOf != Object.prototype.valueOf) properties.push("valueOf"); } for (var i = 0, length = properties.length; i < length; i++) { var property = properties[i], value = source[property]; if (ancestor && Object.isFunction(value) && value.argumentNames().first() == "$super") { var method = value; value = (function (m) { return function () { return ancestor[m].apply(this, arguments); }; })(property).wrap(method); value.valueOf = method.valueOf.bind(method); value.toString = method.toString.bind(method); } this.prototype[property] = value; } return this; }
	return { create: create, Methods: { addMethods: addMethods } };
})();

(function () {
	var _toString = Object.prototype.toString;
	function extend(destination, source) { for (var property in source) destination[property] = source[property]; return destination; }
	function inspect(obj) { try { if (isUndefined(obj)) return 'undefined'; if (obj === null) return 'null'; return obj.inspect ? obj.inspect() : String(obj); } catch (e) { if (e instanceof RangeError) return '...'; throw e; } }
	function toJSON(object, qoute) {
		var type = typeof object;
		var isqoute = qoute;
		if (isqoute == undefined) isqoute = true;
		switch (type) {
			case 'undefined':
			case 'function': return;
			case 'unknown': return;
			case 'boolean': return object.toString();
			case 'number': return object.toString();
			case 'string': return object.toJSON(true);
		}
		if (object === null) return 'null';
		if (object.toJSON) return object.toJSON(isqoute);
		if (isElement(object)) return;
		var results = [];
		for (var property in object) {
			if (object.hasOwnProperty(property)) {
				var value = toJSON(object[property], isqoute);
				if (!isUndefined(value)) results.push(property.toJSON(isqoute) + ':' + value);
			}
		}
		return '{' + results.join(', ') + '}';
	}
	function toJSONfn(object, qoute) {
		var type = typeof object;
		var isqoute = qoute;
		if (isqoute == undefined) isqoute = true;
		switch (type) {
			case 'undefined':
			case 'function':
					try {
						return toJSONfn(object(), isqoute);
					} catch (e) {
						return;
					}
			case 'unknown': return;
			case 'boolean': return object.toString();
			case 'number': return object.toString();
			case 'string': return object.toJSON(true);
		}
		if (object === null) return 'null';
		if (object.toJSON) return object.toJSON(isqoute);
		if (isElement(object)) return;
		var results = [];
		for (var property in object) {
			if (object.hasOwnProperty(property)) {
				var value = toJSONfn(object[property], isqoute);
				if (!isUndefined(value)) results.push(property.toJSON(isqoute) + ':' + value);
			}
		}
		return '{' + results.join(', ') + '}';
	}
	function toJSONforMobile(object) {
		var type = typeof object;
		switch (type) {
			case 'undefined':
			case 'function': return;
			case 'unknown': return;
			case 'boolean': return "\"" + object.toString() + "\"";
			case 'number': return "\"" + object.toString() + "\"";
			case 'string': return object.toJSON(true);
		}
		if (object === null) return 'null';
		if (object.toJSONforMobile) return object.toJSONforMobile(true);
		if (isElement(object)) return;
		var results = [];
		for (var property in object) {
			if (object.hasOwnProperty(property)) {
				var value = toJSON(object[property]);
				if (!isUndefined(value)) results.push(property.toJSON(true) + ':' + value);
			}
		}
		return '{' + results.join(', ') + '}';
	}
	function keys(obj) { var results = []; for (var property in obj) results.push(property); return results; }
	function values(obj) { var results = []; for (var property in obj) results.push(obj[property]); return results; }
	function clone(obj) { return extend({}, obj); }
	function isElement(obj) { return !!(obj && obj.nodeType == 1); }
	function isObject(obj) { return _toString.call(obj) == "[object Object]"; }
	function isArray(obj) { return _toString.call(obj) == "[object Array]"; }
	function isHash(obj) { return obj instanceof Hash; }
	function isFunction(obj) { return typeof obj === "function"; }
	function isString(obj) { return _toString.call(obj) == "[object String]"; }
	function isNumber(obj) { return _toString.call(obj) == "[object Number]"; }
	function isUndefined(obj) { return typeof obj === "undefined"; }
	extend(Object, { extend: extend, inspect: inspect, toJSON: toJSON, toJSONfn: toJSONfn, toJSONforMobile: toJSONforMobile, keys: keys, values: values, clone: clone, isElement: isElement, isObject: isObject, isArray: isArray, isHash: isHash, isFunction: isFunction, isString: isString, isNumber: isNumber, isUndefined: isUndefined });
})();

Object.extend(Function.prototype, (function () {
	var slice = Array.prototype.slice;
	function update(array, args) { var arrayLength = array.length, length = args.length; while (length--) array[arrayLength + length] = args[length]; return array; }
	function merge(array, args) { array = slice.call(array, 0); return update(array, args); }
	function argumentNames() { var names = this.toString().match(/^[\s\(]*function[^(]*\(([^)]*)\)/)[1].replace(/\/\/.*?[\r\n]|\/\*(?:.|[\r\n])*?\*\//g, '').replace(/\s+/g, '').split(','); return names.length == 1 && !names[0] ? [] : names; }
	function bind(context) { if (arguments.length < 2 && Object.isUndefined(arguments[0])) return this; var __method = this, args = slice.call(arguments, 1); return function () { var a = merge(args, arguments); return __method.apply(context, a); } }
	function curry() { if (!arguments.length) return this; var __method = this, args = slice.call(arguments, 0); return function () { var a = merge(args, arguments); return __method.apply(this, a); } }
	function delay(timeout) { var __method = this, args = slice.call(arguments, 1); timeout = timeout * 1000; return window.setTimeout(function () { return __method.apply(__method, args); }, timeout); }
	function defer() { var args = update([0.01], arguments); return this.delay.apply(this, args); }
	function wrap(wrapper) { var __method = this; return function () { var a = update([__method.bind(this)], arguments); return wrapper.apply(this, a); } }
	function methodize() { if (this._methodized) return this._methodized; var __method = this; return this._methodized = function () { var a = update([this], arguments); return __method.apply(null, a); }; }
	return { argumentNames: argumentNames, bind: bind, curry: curry, delay: delay, defer: defer, wrap: wrap, methodize: methodize }
})());

Object.extend(String.prototype, (function () {
	function left(strLen) { return this.toString().substr(0, strLen); }
	function right(strLen) { return this.substring(this.length - strLen, this.length); }
	function dec() { return (this) ? decodeURIComponent(this.replace(/\+/g, " ")) : this; }
	function enc() { return (this) ? encodeURIComponent(this) : this; }
	function object() { try { var res = this.evalJSON(); } catch (e) { res = { result: "syntaxerr", msg: "to object error, " + e.print() + ", " + this }; try { mask.close(); } catch (e) { } } return res; }
	function array() { try { var res = this.split(/,/g); } catch (e) { res = { result: "syntaxerr", msg: "to object error, " + e.print() + ", " + this }; } return res; }
	function toDate(separator, defaultDate) {
		if (this.length == 10) {
			try {
				var aDate = this.split(separator || "-");
				return new Date(aDate[0], ((aDate[1]) - 1).number(), (aDate[2]).number(), 12);
			} catch (e) {
				return (defaultDate || new Date());
			}
		} else if (this.length == 8) {
			var separator = (separator || "-");
			var va = this.replace(/\D/g, "");
			return (va.substr(0, 4) + separator + va.substr(4, 2) + separator + va.substr(6, 2)).date();
		} else if (this.length < 10) {
			return (defaultDate || new Date());
		} else if (this.length > 15) {
			try {
				var aDateTime = this.split(/ /g);
				var aDate = aDateTime[0].split(separator || "-");
				if (aDateTime[1]) {
					var aTime = aDateTime[1];
				} else {
					var aTime = "09:00";
				}
				var is24 = true;
				if (aTime.right(2) == "AM" || aTime.right(2) == "PM") {
					is24 = false;
				}
				var aTimes = aTime.left(5).split(":");
				var hh = aTimes[0];
				var mm = aTimes[1];
				if (!is24) hh += 12;
				return new Date(aDate[0], (parseFloat(aDate[1]) - 1), parseFloat(aDate[2]), parseFloat(hh), parseFloat(mm));
			} catch (e) {
				return (defaultDate || new Date());
			}
		} else { // > 10
			return (defaultDate || new Date());
		}
	}
	function toNum() {
		var pair = this.replace(/,/g, "").split(".");
		var isMinus = false;
		if (parseFloat(pair[0]) < 0) isMinus = true;
		if (pair[0] == "-0") isMinus = true;
		var returnValue = 0.0; pair[0] = pair[0].replace(/[-|+]?[\D]/gi, "");
		if (pair[1]) {
			pair[1] = pair[1].replace(/\D/gi, "");
			returnValue = parseFloat(pair[0] + "." + pair[1]) || 0;
		} else {
			returnValue = parseFloat(pair[0]) || 0;
		}
		return (isMinus) ? -returnValue : returnValue;
	}
	function parseF() { return parseFloat(this); }
	function strip() { return this.replace(/^\s+/, '').replace(/\s+$/, ''); }
	function stripTags() { return this.replace(/<\w+(\s+("[^"]*"|'[^']*'|[^>])+)?>|<\/\w+>/gi, ''); } //"
	function stripScript() {
		//스크립트 제거
		var cStr;
		var RegExpJS = new RegExp("<[ ]*script[^>]*>[^<]*</[ ]*script[^>]*>", "gi");
		cStr = this.replace(RegExpJS, "");
		
		cStr = cStr.replace(/[\s]*onclick[^=]*=/gi," xonclick=");
		cStr = cStr.replace(/[\s]*onmouserover[^=]*=/gi," xonmouseover=");
		cStr = cStr.replace(/[\s]*onmouseout[^=]*=/gi," xonmouseout=");
		cStr = cStr.replace(/[\s]*onchange[^=]*=/gi," xonchange=");
		cStr = cStr.replace(/[\s]*onblur[^=]*=/gi," xonblur=");
	    cStr = cStr.replace(/[\s]*onerror[^=]*=/gi," xonerror=");
	    cStr = cStr.replace(/[\s]*onload[^=]*=/gi," xonload=");
	    cStr = cStr.replace(/[\s]*href[^=]*=[\s]*["']?javascript/gi, " href=\"xjavascript");
	    
	    return cStr;
	}
	function times(count) { return count < 1 ? '' : new Array(count + 1).join(this); }
	function inspect(useDoubleQuotes) {
		var escapedString = this.replace(
			/[\x00-\x1f\\]/g,
			function (character) {
				try {
					if (character in String.specialChar) return String.specialChar[character];
				} catch (e) { }
				return '\\u00' + character.charCodeAt()
			}
		);
		if (useDoubleQuotes) return '"' + escapedString.replace(/"/g, '\\"') + '"';
		return "" + escapedString.replace(/'/g, '\\\'') + "";
	}
	function toJSON(TF) {
		return this.inspect(TF || false);
	}
	function blank() { return /^\s*$/.test(this); }
	function isJSON() { var str = this; if (str.isBlank()) return false; str = this.replace(/\\./g, '@').replace(/"[^"\\\n\r]*"/g, ''); return (/^[,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]*$/).test(str); } //"
	function unfilterJSON(filter) { return this.replace(filter || AXUtil.JSONFilter, '$1'); }
	function evalJSON(sanitize) { var json = this.unfilterJSON(); try { if (!sanitize || json.isJSON()) return eval("(" + json + ")"); else return { result: "syntaxerr", msg: "JSON syntax error. fail to convert Object\n" + this }; } catch (e) { return { result: "err", msg: "JSON syntax error.\n" + this, body: this }; } }
	function queryToObject(separator) { var match = this.trim().match(/([^?#]*)(#.*)?$/); if (!match) return {}; var rs = match[1].split(separator || '&'); var returnObj = {}; var i = 0; while (i < rs.length) { var pair = rs[i].split("="); var k = pair[0], v = pair[1]; if (returnObj[k] != undefined) { if (!Object.isArray(returnObj[k])) returnObj[k] = [returnObj[k]]; returnObj[k].push(v); } else { returnObj[k] = v; } i++; } return returnObj; }
	function crlf(replaceTarget, replacer) { return this.replace((replaceTarget || /\n/g), (replacer || "<br/>")); }
	function ecrlf(replaceTarget, replacer) { return this.replace((replaceTarget || /%0A/g), (replacer || "<br/>")); }
	function formatDigit(length, padder) { var string = this; return (padder || '0').times(length - string.length) + string; }
	function getFileName() { var sToMatch = this; var reAt = /[\/\\]?([^\/\\]?\.?[^\/\\]+)$/; var reArr = sToMatch.match(reAt); return RegExp.$1; }
	function toColor(sharp) { var colorValue = ""; if (this.left(3) == "rgb") { var val = this; var reAt = /rgb\((.+)\)/; val.match(reAt); var vals = RegExp.$1.split(", "); for (var a = 0; a < vals.length; a++) { vals[a] = vals[a].number().setDigit(2, '0', 16); } colorValue = vals.join(""); } else { colorValue = this.replace("#", ""); } var preFix = (sharp) ? "#" : ""; return preFix + colorValue; }
	function toMoney() { return this.number().money(); }
	function toByte() { return this.number().byte(); }
	function lcase() { return this.toLowerCase(); }
	function ucase() { return this.toUpperCase(); }
	function getByte() {
		var valueByte = this.length;
		for (i = 0, l = this.length; i < l; i++) if (this.charCodeAt(i) > 128) valueByte++;
		return valueByte;
	}
	function toPhoneString() {
		if (this == "") return this;
		var _this = this.replace(/\D+/g, "");
		var myLocalNums = "";
		var num1 = "", num2 = "";
		var localNum = "031/032/033/041/042/043/051/052/053/054/055/061/062/063/064/010/011/016/017/019/070/080/060"
		if (_this.left(2) == "02") {
			myLocalNums = "02";
		} else {
			var localNums = localNum.split(/\//g);
			var tempNum = _this.left(3);
			$.each(localNums, function () {
				if (this == tempNum) {
					myLocalNums = this;
					return false;
				}
			});
		}

		if (myLocalNums == "") {
			myLocalNums = "02";
			if (_this.length > 7) {
				num1 = _this.substr(0, 4);
				num2 = _this.substr(4);
			} else {
				num1 = _this.substr(0, 3);
				num2 = _this.substr(3);
			}
		} else {
			try {
				var snum = myLocalNums.length;
				if ((_this.length - snum) > 7) {
					num1 = _this.substr(snum, 4);
					num2 = _this.substr(snum + 4);
				} else {
					num1 = _this.substr(snum, 3);
					num2 = _this.substr(snum + 3);
				}
			} catch (e) {
				//trace(e);
			}
		}

		var returnString = myLocalNums;
		if (num1 != "") returnString += "-" + num1;
		if (num2 != "") returnString += "-" + num2;

		return returnString;

	}
	function print() {
		return this;
	}
	return {
		left: left,
		right: right,
		dec: dec,
		decode: dec,
		enc: enc,
		object: object,
		array: array,
		date: toDate,
		number: toNum,
		num: parseF,
		money: toMoney,
		byte: toByte,
		trim: strip,
		delHtml: stripTags,
		delScript: stripScript,
		removeScript: stripScript,
		times: times,
		inspect: inspect,
		toJSON: toJSON,
		isBlank: blank,
		isJSON: isJSON,
		unfilterJSON: unfilterJSON,
		evalJSON: evalJSON,
		queryToObject: queryToObject,
		crlf: crlf,
		ecrlf: ecrlf,
		setDigit: formatDigit,
		getFileName: getFileName,
		toColor: toColor,
		lcase: lcase,
		ucase: ucase,
		getByte: getByte,
		phone: toPhoneString,
		print: print
	}
})());

Object.extend(Number.prototype, (function () {
	function left(strLen) { return this.toString().substr(0, strLen); }
	function right(strLen) { return this.toString().substring(this.toString().length - strLen, this.toString().length); }
	function toMoney() { var txtNumber = '' + this; if (isNaN(txtNumber) || txtNumber == "") { return ""; } else { var rxSplit = new RegExp('([0-9])([0-9][0-9][0-9][,.])'); var arrNumber = txtNumber.split('.'); arrNumber[0] += '.'; do { arrNumber[0] = arrNumber[0].replace(rxSplit, '$1,$2'); } while (rxSplit.test(arrNumber[0])); if (arrNumber.length > 1) { return arrNumber.join(''); } else { return arrNumber[0].split('.')[0]; } } }
	function toByte() { var n_unit = "KB"; var myByte = this / 1024; if (myByte / 1024 > 1) { n_unit = "MB"; myByte = myByte / 1024; } if (myByte / 1024 > 1) { n_unit = "GB"; myByte = myByte / 1024; } return myByte.round(1) + n_unit; }
	function toNum() { return this; }
	function formatDigit(length, padder, radix) { var string = this.toString(radix || 10); return (padder || '0').times(length - string.length) + string; }
	function range(start) { var ra = []; for (var a = (start || 0) ; a < this + 1; a++) ra.push(a); return ra; }
	function toJSON() { return this; }
	function abs() { return Math.abs(this); }
	function round(digit) { return Math.round(this * Math.pow(10, (digit || 0))) / Math.pow(10, (digit || 0)); }
	function ceil() { return Math.ceil(this); }
	function floor() { return Math.floor(this); }
	function date() { return new Date(this); }
	function div(divisor) { if (divisor != 0) { return this / divisor; } else { return 0; } }
	function none() { return this; }
	function times(count) { return count < 1 ? '' : new Array(count + 1).join(this.toString()); }
	function phone() {
		var txtNumber = '' + this;
		return txtNumber.phone();
	}
	return {
		left: left,
		right: right,
		abs: abs,
		round: round,
		ceil: ceil,
		floor: floor,
		money: toMoney,
		byte: toByte,
		num: toNum,
		number: toNum,
		setDigit: formatDigit,
		date: date,
		div: div,
		dec: none,
		enc: none,
		rangeFrom: range,
		toJSON: toJSON,
		times: times,
		phone: phone
	}
})());

Object.extend(Date.prototype, (function () {
	function dateAdd(daynum, interval) {
		interval = interval || "d";
		var interval = interval.toLowerCase();
		var DyMilli = ((1000 * 60) * 60) * 24;
		var aDate = new Date(this.getUTCFullYear(), this.getMonth(), this.getDate(), 12);
		if (interval == "d") {
			aDate.setTime(this.getTime() + (daynum * DyMilli));
		} else if (interval == "m") {
			var yy = aDate.getFullYear();
			var mm = aDate.getMonth();
			var dd = aDate.getDate();
			if (mm == 0 && dd == 1) yy += 1;
			yy = yy + parseInt(daynum / 12);
			mm += daynum % 12;
			var mxdd = AXUtil.dayLen(yy, mm);
			if (mxdd < dd) dd = mxdd;
			aDate = new Date(yy, mm, dd, 12);
		} else if (interval == "y") {
			aDate.setTime(this.getTime() + ((daynum * 365) * DyMilli));
		} else {

		}
		return aDate;
	}
	function dayDiff(edDate, tp) {
		var DyMilli = ((1000 * 60) * 60) * 24;
		//trace(this.print() +"/"+ edDate.print() + "//" + ((edDate.date() - this) / DyMilli) + "//" + ((edDate.date() - this) / DyMilli).floor());
		var y1 = this.getFullYear();
		var m1 = this.getMonth();
		var d1 = this.getDate();
		var hh1 = this.getHours();
		var mm1 = this.getMinutes();
		var dd1 = new Date(y1, m1, d1, hh1, mm1);

		var day2 = edDate.date();
		var y2 = day2.getFullYear();
		var m2 = day2.getMonth();
		var d2 = day2.getDate();
		var hh2 = day2.getHours();
		var mm2 = day2.getMinutes();
		var dd2 = new Date(y2, m2, d2, hh2, mm2);

		if (tp != undefined) {
			if (tp == "D") {
				DyMilli = ((1000 * 60) * 60) * 24;
			} else if (tp == "H") {
				DyMilli = ((1000 * 60) * 60);
			} else if (tp == "mm") {
				DyMilli = (1000 * 60);
			} else {
				DyMilli = ((1000 * 60) * 60) * 24;
			}
		}

		return ((dd2 - dd1) / DyMilli).floor();

	}
	function toString(format) {
		if (format == undefined) {
			var sSeper = "-";
			return this.getUTCFullYear() + sSeper + (this.getMonth() + 1).setDigit(2) + sSeper + this.getDate().setDigit(2);
		} else {
			var fStr = format;
			var nY, nM, nD, nH, nMM, nS;
			nY = this.getUTCFullYear();
			nM = (this.getMonth() + 1).setDigit(2);
			nD = this.getDate().setDigit(2);
			nH = this.getHours().setDigit(2);
			nMM = this.getMinutes().setDigit(2);
			nS = this.getSeconds().setDigit(2);
			var yre = /[^y]*(y{0,4})[^y]*/gi; yre.test(fStr); var regY = RegExp.$1;
			var mre = /[^m]*(m{2})[^m]*/gi; mre.test(fStr); var regM = RegExp.$1;
			var dre = /[^d]*(d{1,2})[^d]*/gi; dre.test(fStr); var regD = RegExp.$1;
			var hre = /[^h]*(h{2})[^d]*/gi; hre.test(fStr); var regH = RegExp.$1;
			var mire = /[^mi]*(mi)[^mi]*/gi; mire.test(fStr); var regMI = RegExp.$1;
			var sre = /[^s]*(s{2})[^s]*/gi; sre.test(fStr); var regS = RegExp.$1;

			if (regY) {
				fStr = fStr.replace(regY, nY.right(regY.length));
			}
			if (regM) {
				if (regM.length == 1) nM = (this.getMonth() + 1);
				fStr = fStr.replace(regM, nM);
			}
			if (regD) {
				if (regD.length == 1) nD = this.getDate();
				fStr = fStr.replace(regD, nD);
			}
			if (regH) {
				fStr = fStr.replace(regH, nH);
			}
			if (regMI) {
				fStr = fStr.replace(regMI, nMM);
			}
			if (regS) {
				fStr = fStr.replace(regS, nS);
			}
			return fStr;
		}
	}

	function getTimeAgo(rDate) {
		var rtnStr = ""
		var nMinute = Math.abs((new Date()).diff(rDate, "mm"));
		var wknames = []
		wknames.push("일", "월", "화", "수", "목", "금", "토");

		if (isNaN(nMinute)) {
			rtnStr = "알수없음";
		} else {
			if (parseInt(nMinute / 60 / 24) >= 1) {
				rtnStr = rDate.date().print("yyyy년 mm월 dd일") + " " + wknames[rDate.date().getDay()];
			} else {
				rtnStr = nMinute;

				if (parseInt(nMinute / 60) > 1) {
					rtnStr = parseInt(nMinute / 60) + "시간" + (nMinute % 60) + "분 전";
				} else {
					rtnStr = nMinute + "분 전";
				}
			}
		}
		return rtnStr;
	}

	function date() { return this; }
	function toJSON() { return '"' + this.getUTCFullYear() + '-' + (this.getUTCMonth() + 1).setDigit(2) + '-' + this.getUTCDate().setDigit(2) + 'T' + this.getUTCHours().setDigit(2) + ':' + this.getUTCMinutes().setDigit(2) + ':' + this.getUTCSeconds().setDigit(2) + 'Z"'; }
	return {
		add: dateAdd,
		diff: dayDiff,
		print: toString,
		date: date,
		toJSON: toJSON,
		getTimeAgo: getTimeAgo
	}
})());

Object.extend(Error.prototype, (function () {
	function print() {
		return (this.number & 0xFFFF) + " : " + this;
	}
	return {
		print: print
	}
})());

Object.extend(Array.prototype, (function () {
	function clear() {
		this.length = 0;
		return this;
	}
	function first() {
		return this[0];
	}
	function last() {
		return this[this.length - 1];
	}
	function getToSeq(seq) {
		if (seq > (this.length - 1)) {
			return null;
		} else {
			return this[seq];
		}
	}
	function toJSON(qoute) {
		var results = [];
		for (var i = 0; i < this.length; i++) results.push(Object.toJSON(this[i], qoute));
		return '[' + results.join(', ') + ']';
	}
	function toJSONforMobile() {
		var results = [];
		for (var i = 0; i < this.length; i++) results.push(Object.toJSONforMobile(this[i]));
		return '[' + results.join(', ') + ']';
	}
	function remove(callBack) {
		var _self = this;
		var collect = [];
		$.each(this, function (index, O) {
			if (!callBack.call({ index: index, item: O })) collect.push(O);
		});
		return collect;
	}
	function search(callBack) {
		var _self = this;
		var collect = [];
		$.each(this, function (index, O) {
			if (callBack.call({ index: index, item: O })) collect.push(O);
		});
		return collect.length;
	}
	function getObject(callBack) {
		var _self = this;
		var collect = [];
		$.each(this, function (index, O) {
			if (callBack.call({ index: index, item: O })) collect.push(O);
		});
		return collect;
	}
	function hasObject(callBack) {
		var _self = this;
		var collect = null;
		$.each(this, function (index, O) {
			if (callBack.call({ index: index, item: O })) {
				collect = O;
				return false;
			}
		});
		return collect;
	}
	/* 13-06-13 메소드 확장 */
	function getMinObject(key) {
		var tempArray = this.concat();
		tempArray = tempArray.sort(function (pItem, nItem) {
			var v1 = pItem[key];
			var v2 = nItem[key];
			if (v1 < v2) return -1;
			else if (v1 > v2) return 1;
			else if (v1 == v2) return 0;
		});
		return (tempArray.first() || {});
	}
	function getMaxObject(key) {
		var tempArray = this.concat();
		tempArray = tempArray.sort(function (pItem, nItem) {
			var v1 = pItem[key];
			var v2 = nItem[key];
			if (v1 < v2) return 1;
			else if (v1 > v2) return -1;
			else if (v1 == v2) return 0;
		});
		return (tempArray.first() || {});
	}

	function m_notall(context) {
		context = context || function (x) { return x; };
		var result = true;
		var i = 0;
		while (i < this.length) {
			result = !Boolean(context(this[i]));
			if (!result) break;
			i++;
		}
		return result;
	}
	function m_any(context) {
		context = context || function (x) { return x; };
		var result = false;
		var i = 0;
		while (i < this.length) {
			result = Boolean(context(this[i], i));
			if (result) break;
			i++;
		}
		return result;
	}
	function m_find(context) {
		context = context || function (x) { return false; };
		var myselect;
		var i = 0;
		while (i < this.length) {
			if (context(this[i], i)) {
				myselect = this[i];
				break;
			}
			i++;
		}
		return myselect;
	}
	function m_find2(context) {
		if (!Object.isFunction(context)) {
			findObj = context;
			context = function (x) { return (x == findObj); }
		}
		var myselect, myindex;
		var i = 0;
		while (i < this.length) {
			if (context(this[i], i)) {
				myselect = this[i];
				myindex = i;
				break;
			}
			i++;
		}
		return { obj: myselect, index: myindex };
	}
	function m_findAll(context) {
		context = context || function (x) { return false; };
		var myselect = [];;
		var i = 0;
		while (i < this.length) {
			if (context(this[i], i)) myselect.push(this[i]);
			i++;
		}
		return myselect;
	}
	function convertTree(parentKey, childKey, hashDigit){
		var tree = [];
		var pointer = {};
		var seq = 0;
		var hashDigit = hashDigit || 3;
		for (var idx = 0; idx < this.length; idx++) {
			var L = this[idx];
			if (!L.isRoot) {
				pointer[L[childKey]] = idx;

				if (L[parentKey].number() == 0) {
					L["subTree"] = [];
					L.__subTreeLength = 0;
					L["pHash"] = "0".setDigit(hashDigit);
					L["hash"] = "0".setDigit(hashDigit) + "_" + seq.setDigit(hashDigit);
					tree.push(AXUtil.copyObject(L));
					seq++;
				} else {
					L.__subTreeLength = 0;
				}
			}
		}

		for (var idx = 0; idx < this.length; idx++) {
			var L = this[idx];
			if (L["pHash"] == undefined && !L.isRoot) {
				var pItem = this[pointer[L[parentKey]]];
				var pHash = pItem["hash"];
				var pHashs = pHash.split(/_/g);
				var pTree = tree;
				var pTreeItem;
				$.each(pHashs, function (idx, T) {
					if (idx > 0){
						pTreeItem = pTree[T.number()];
						pTree = pTree[T.number()].subTree;
					}
				});
				L["subTree"] = [];
				var __subTreeLength = pItem.__subTreeLength;

				L["pHash"] = pHash;
				L["hash"] = pHash + "_" + __subTreeLength.setDigit(hashDigit);
				pTree.push(AXUtil.copyObject(L));
				pItem.__subTreeLength++;
				pTreeItem.__subTreeLength = pItem.__subTreeLength;
			}
		}
		return tree;
	}


	return {
		clear: clear,
		first: first,
		last: last,
		getToSeq: getToSeq,
		toJSON: toJSON,
		toJSONforMobile: toJSONforMobile,
		remove: remove,
		search: search,
		has: hasObject,
		searchObject: getObject,
		getMinObject: getMinObject,
		getMaxObject: getMaxObject,

		not: m_notall,
		or: m_any,
		get: m_find,
		gets: m_findAll,
		getObj: m_find2,
		
		convertTree: convertTree
	}
})());

/* **************************** extend implement block ** */

function $M(id) { return document.getElementById(id); }
function $A(iterable) { if (!iterable) return []; if ('toArray' in Object(iterable)) return iterable.toArray(); var length = iterable.length || 0, results = new Array(length); while (length--) results[length] = iterable[length]; return results; }

/* jQuery 1.9 bug fix */
var AXConfig = {
	AXReq: {
		async: true, // AJAX 비동기 처리 여부
		okCode: "ok", // 통신 성공 코드
		responseType: "", // AJAX responseType
		dataType: "", // AJAX return Data type
		contentType: "application/x-www-form-urlencoded; charset=UTF-8", // AJAX contentType
		dataSendMethod: "parameter", // AJAX parameter send type
		crossDomain : false,
		resultFormatter: function () { // onsucc formatter
			return this;
		}
	},
	AXGrid: {
		passiveMode: false,
		passiveRemoveHide: false,
		fitToWidthRightMargin: 10,
		fitToWidth: false,
		pageSize: 10,
		pageHeight: 400,
		keyResult: "result",
		keyList: "list",
		emptyListMSG : "목록이 없습니다."
	},
	AXTree: {
		fitToWidthRightMargin: 10,
		fitToWidth: false,
		pageSize: 10,
		pageHeight: 400,
		keyResult: "result",
		keyTree: "tree",
		keyList: "list",
		emptyListMSG : "목록이 없습니다."
	},
	AXProgress: {
		cancelMsg:"프로세스를 취소 하시겠습니까?"
	}
};

var AXUtil = {
	
	async:true,
	ajaxOkCode:"ok",
	ajaxResponseType:"",
	ajaxDataType:"",
	gridPassiveMode:false,
	gridPassiveRemoveHide:false,
	gridFitToWidthRightMargin:10,
	
	browser: (function () {
		var ua = navigator.userAgent.toLowerCase();
		var mobile = (ua.search(/mobile/g) != -1) ? true : false;
		if (ua.search(/iphone/g) != -1) {
			return { name: "iphone", version: 0, mobile: true }
		} else if (ua.search(/ipad/g) != -1) {
			return { name: "ipad", version: 0, mobile: true }
		} else if (ua.search(/android/g) != -1) {
			return { name: "android", version: 0, mobile: mobile }
		} else {
			var browserName = "";

			var match = /(chrome)[ \/]([\w.]+)/.exec(ua) ||
				/(webkit)[ \/]([\w.]+)/.exec(ua) ||
				/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
				/(msie) ([\w.]+)/.exec(ua) ||
				ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) ||
				[];

			var browser = (match[1] || "");
			var browserVersion = (match[2] || "0");

			if (browser == "msie") browser = "ie";
			return {
				name: browser,
				version: browserVersion,
				mobile: mobile
			}
		}
	})(),
	docTD: (function () {
		if (!document.compatMode || document.compatMode == 'BackCompat') return "Q";
		else return "S";
	})(),
	timekey: function () {
		var d = new Date();
		return ("A" + d.getHours().setDigit(2) + d.getMinutes().setDigit(2) + d.getSeconds().setDigit(2) + d.getMilliseconds());
	},
	overwriteObject: function (tg, obj, rewrite) {
		if (rewrite == undefined) rewrite = true;
		//trace(tg[k]);
		if (obj) jQuery.each(obj, function (k, v) {
			if (rewrite) { tg[k] = v; }
			else {
				//trace(tg[k]);
				if (tg[k] == undefined) tg[k] = v;
			}
		});
		return tg;
	},
	copyObject: function (obj) {
		return Object.toJSON(obj).object();
	},
	consonantKR: function (cword) {
		var cons = [
			{ c: "ㄱ", re: "[가-깋]" }, { c: "ㄲ", re: "[까-낗]" }, { c: "ㄴ", re: "[나-닣]" }, { c: "ㄷ", re: "[다-딯]" }, { c: "ㄸ", re: "[따-띻]" }, { c: "ㄹ", re: "[라-맇]" },
			{ c: "ㅁ", re: "[마-밓]" }, { c: "ㅂ", re: "[바-빟]" }, { c: "ㅃ", re: "[빠-삫]" }, { c: "ㅅ", re: "[사-싷]" }, { c: "ㅆ", re: "[싸-앃]" }, { c: "ㅇ", re: "[아-잏]" }, { c: "ㅈ", re: "[자-짛]" },
			{ c: "ㅉ", re: "[짜-찧]" }, { c: "ㅊ", re: "[차-칳]" }, { c: "ㅋ", re: "[카-킿]" }, { c: "ㅌ", re: "[타-팋]" }, { c: "ㅍ", re: "[파-핗]" }, { c: "ㅎ", re: "[하-힣]" }
		];
		var rword = "";
		var cwords = cword.split("");
		jQuery.each(cwords, function (i, n) {
			var fos = cons.searchObject(function () {
				return this.item.c == n;
			});
			var fo = fos.first();
			if (fo) rword += fo.re;
			else rword += n;
		});
		return rword;
	},
	setCookie: function (name, value, expiredays) { if (expiredays) { var todayDate = new Date(); todayDate.setDate(todayDate.getDate() + expiredays); document.cookie = name + '=' + escape(value) + '; path=/; expires=' + todayDate.toGMTString() + ';'; } else { document.cookie = name + '=' + escape(value) + '; path=/;'; } },
	getCookie: function (name) { var nameOfCookie = name + "="; var x = 0; while (x <= document.cookie.length) { var y = (x + nameOfCookie.length); if (document.cookie.substring(x, y) == nameOfCookie) { if ((endOfCookie = document.cookie.indexOf(";", y)) == -1) endOfCookie = document.cookie.length; return unescape(document.cookie.substring(y, endOfCookie)); } x = document.cookie.indexOf(" ", x) + 1; if (x == 0) break; } return ""; },
	JSONFilter: /^\/\*-secure-([\s\S]*)\*\/\s*$/,
	dayLen: function (y, m) {
		if ([3, 5, 8, 10].has(function () { return this.item == m; })) { return 30; } else if (m == 1) { return (((y % 4 == 0) && (y % 100 != 0)) || (y % 400 == 0)) ? 29 : 28; } else { return 31; }
	},
	clientHeight: function(){
		return (AXUtil.docTD == "Q") ? document.body.clientHeight : document.documentElement.clientHeight;
	},
	scrollHeight: function(){
		return (AXUtil.docTD == "Q") ? document.body.scrollHeight : document.documentElement.scrollHeight;
	},
	clientWidth: function(){
		return (AXUtil.docTD == "Q") ? document.body.clientWidth : document.documentElement.clientWidth;
	},
	scrollWidth: function(){
		return (AXUtil.docTD == "Q") ? document.body.scrollWidth : document.documentElement.scrollWidth;
	},
	Event: {
		KEY_BACKSPACE: 8,
		KEY_TAB: 9,
		KEY_RETURN: 13,
		KEY_ESC: 27,
		KEY_LEFT: 37,
		KEY_UP: 38,
		KEY_RIGHT: 39,
		KEY_DOWN: 40,
		KEY_DELETE: 46,
		KEY_HOME: 36,
		KEY_END: 35,
		KEY_PAGEUP: 33,
		KEY_PAGEDOWN: 34,
		KEY_INSERT: 45,
		cache: {}
	},
	console: function (obj) {
		var po = "";
		var type = (typeof obj).toLowerCase();
		if (type == "undefined" || type == "function") {
			po = type;
		} else if (type == "boolean" || type == "number" || type == "string") {
			po = obj;
		} else if (type == "object") {
			po = Object.toJSON(obj);
		}
		if (window.console == undefined) {
			//toast.push("console's say : " + po);
		} else {
			try {
				console.log(AXUtil.timekey() + " : " + po);
			} catch (e) {
			}
		}
	},
	alert: function (obj) {
		var po = "";
		var type = (typeof obj).toLowerCase();
		if (type == "undefined" || type == "function") {
			po = type;
		} else if (type == "boolean" || type == "number" || type == "string") {
			po = obj;
		} else if (type == "object") {
			po = Object.toJSON(obj);
		}
		alert(po);
	},
	confirm: function (obj) {
		var po = "";
		var type = (typeof obj).toLowerCase();
		if (type == "undefined" || type == "function") {
			po = type;
		} else if (type == "boolean" || type == "number" || type == "string") {
			po = obj;
		} else if (type == "object") {
			po = Object.toJSON(obj);
		}
		var result = confirm(po);
		return result;
	},
	importJS: function (src) {
		var scriptElement = document.createElement("script");
		scriptElement.setAttribute("src", src);
		scriptElement.setAttribute("type", "text/javascript");
		document.getElementsByTagName("head")[0].appendChild(scriptElement);
	},
	bindPlaceholder: function () {

	},
	isEmpty: function (val) {
		return (val == "" || val == null || val == undefined) ? true : false;
	}
};
var trace = AXUtil.console;
/* ** AXJ ********************************************** */
var AXJ = Class.create({
	version: "AXJ - v1.0",
	author: "tom@axisj.com",
	logs: [
		"2012-09-28 오후 2:58:32 - 시작"
	],
	initialize: function () {
		this.config = {
			debugMode: false,
			hashSpliter: "_"
		};
	},
	init: function () {
		trace(Object.toJSON(this.config));
	},
	info: function (dispType) {
		if (dispType == undefined || dispType == "console")
			trace(this.version + "\n" + this.logs.join("\n"));
		else if (dispType == "alert")
			AXUtil.alert(this.version + "\n" + this.logs.join("\n"));
		else if (dispType == "return")
			return this.version + "\n" + this.logs.join("\n");
	},
	echo: function (msg, mtype) {
		if (mtype == undefined || mtype == "console")
			trace(msg);
		else if (mtype == "alert")
			AXUtil.alert(msg);
		else if (mtype == "toast")
			toast.push(msg);
		else if (mtype == "dialog")
			dialog.push(msg);
	},
	setConfig: function (configs) {
		var _self = this;
		if (configs) jQuery.each(configs, function (k, v) { _self.config[k] = v; });
		this.init();
	},
	getEventTarget: function (arg) {
		var eventTarget = arg.evt;
		var eid = (eventTarget.id) ? eventTarget.id.split(/_AX_/g) : [];
		if (eventTarget) {
			while (!arg.find(eventTarget, eid)) {
				if (!eventTarget.parentNode) { eventTarget = null; break; }
				if (arg.until) { if (arg.until(eventTarget, eid)) { eventTarget = null; break; } }
				if (eventTarget.parentNode) {
					eventTarget = eventTarget.parentNode; eid = (eventTarget.id) ? eventTarget.id.split(/_AX_/g) : [];
				} else {
					//trace("break");
					break;
				}
			}
		}
		return eventTarget;
	},
	getMousePositon: function (event) {
		var eventDoc, doc, body;
		eventDoc = document;
		doc = eventDoc.documentElement;
		body = eventDoc.body;
		var css = {};

		//trace({ cy: event.clientY, st: (doc && doc.scrollTop || body && body.scrollTop || 0), ct: (doc && doc.clientTop || body && body.clientTop || 0) });
		css.pageX = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
		css.pageY = event.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
		return css;
	},
	_GID: function (ids) {
		var myid = [];
		for (var a = 0; a < ids.length; a++) {
			myid.push(ids[a]);
		}
		return myid.join("_");
	},
	_GPT: function (myid, idx) {
		var ids = myid.split(/_/g);
		if (idx == undefined) {
			return ids.last();
		} else {
			return ids[idx];
		}
	}
});
/* ********************************************** AXJ ** */

/* ** AXReq ********************************************** */
var AXReqQue = Class.create({
	version: "AXReqQue v1.0",
	author: "tom@axisj.com",
	logs: [
		"2012-09-28 오후 2:58:32 - 시작"
	],
	initialize: function () {
		this.que = [];
		this.busy = false;
	},
	add: function (obj) {
		this.que.push(obj);

		try {
			this.start();
		} catch (e) {
			//AXUtil.alert(e);	
		}
	},
	start: function () {
		if (this.que.length == 0) return;
		if (this.busy) return;

		this.busy = true;
		var myQue = this.que.first();
		var _self = this;
		var config = {
			type: "post",
			onsucc: "",
			async: AXConfig.AXReq.async,
			responseType: AXConfig.AXReq.responseType,
			dataType: AXConfig.AXReq.dataType,
			contentType: AXConfig.AXReq.contentType,
			debug: false
		};
		jQuery.each(myQue.configs, function (k, v) { // update to {this.config}
			if (k == "pars") {

			}
			else {
				config[k] = v;
			}
		});

		var onerr = this.onerror.bind(this);
		var ontimeout = this.ontimeout.bind(this);
		var onsucc = this.onsucc.bind(this);

		if (typeof myQue.configs.pars == "object") {
			myQue.configs.pars.dummy = AXUtil.timekey();
		} else if (typeof myQue.configs.pars == "string") {
			if (myQue.configs.pars == "") myQue.configs.pars += "dummy=" + AXUtil.timekey();
			else myQue.configs.pars += "&dummy=" + AXUtil.timekey();
		}

		if (config.debug) trace({ url: myQue.url, pars: myQue.configs.pars });

		var ajaxOption = {};
		jQuery.each(config, function (k, v) { // update to {this.config}
			ajaxOption[k] = v;
		});
		ajaxOption.url = myQue.url;

		if (AXConfig.AXReq.dataSendMethod == "json") ajaxOption["data"] = "{queryString:\"" + myQue.configs.pars + "\"}";
		else ajaxOption["data"] = myQue.configs.pars;

		ajaxOption.success = onsucc;
		ajaxOption.error = onerr;
		ajaxOption.timeout = ontimeout;

		jQuery.ajax(ajaxOption);
	},
	onsucc: function (req) {
		if (req != undefined) {
			var myQue = this.que.first();
			try {
				if (myQue.configs.debug) trace("onsucc" + req);
				if ((typeof req) == "string") {
					var res = req.object();
				} else {
					var res = AXConfig.AXReq.resultFormatter.call(req);
				}

				if (res.result == "syntaxerr") {
					if (myQue.configs.onerr) myQue.configs.onerr(res);
				} else {
					if (myQue.configs.onsucc) myQue.configs.onsucc(res);
				}
			} catch (e) {
				res.e = e;
				if (myQue.configs.onerr) myQue.configs.onerr(res);
			}

			this.que.shift();
			this.busy = false;
			this.start();
		}
	},
	onerror: function (req) {
		var myQue = this.que.first();
		if (myQue.configs.onerr) myQue.configs.onerr(req);
		else trace("error : " + Object.toJSON(req));

		this.que.shift();
		this.busy = false;
		try {
			mask.close();
		} catch (e) { }
	},
	ontimeout: function (req) {
		trace("onTimeout:" + req.responseText);
		this.que.shift();
		this.busy = false;
		try {
			mask.close();
		} catch (e) { }
	}
});
var myAXreqQue = new AXReqQue();
var AXReq = Class.create({
	version: "AXReq v1.0",
	author: "tom@axisj.com",
	logs: [
		"2012-09-28 오후 2:58:32 - 시작"
	],
	initialize: function (url, configs) {
		
		if(window.location.toString().left(4) != "http"){
			toast.push("현재 파일시스템으로 샘플 코드를 보고 계십니다. ajax 통신 관련한 기능은 정상 작동하지 않게 됩니다. ");
		}
		
		myAXreqQue.add({ url: url, configs: configs });
	}
});
/* ********************************************** AXReq ** */

/* ** AXMask ********************************************** */
var AXMask = Class.create(AXJ, {
	version: "AXMask v1.0",
	author: "tom@axisj.com",
	logs: [
		"2012-10-06 오후 4:17:59"
	],
	initialize: function ($super) {
		$super();
		this.selects = [];
		this.config.maskClassName = "AXMask";
		this.config.content = "disable content";
		this.config.maskZindex = "2000";
		this.blinkTrack = [];
	},
	init: function () {
		this.mask = $("<div class=\"" + this.config.maskClassName + "\" style=\"z_index:" + this.config.maskZindex + "\"></div>");
	},
	open: function (val) {
		$(document.body).append(this.mask);
		var bodyHeight = 0;
		(AXUtil.docTD == "Q") ? bodyHeight = document.body.clientHeight : bodyHeight = document.documentElement.clientHeight;
	},
	close: function (delay) {
		if (!delay) {
			this.mask.remove();
		} else {
			var maskHide = this.hide.bind(this);
			setTimeout(maskHide, delay);
		}
		this.blinkTrack.clear();
	},
	hide: function () {
		this.mask.remove();
		this.blinkTrack.clear();
	},
	setCSS: function (CSS) {
		this.mask.css(CSS);
	},
	addClass: function (className) {
		this.mask.addClass(className);
	},
	removeClass: function (className) {
		this.mask.removeClass(className);
	},
	blink: function (obj) {
		this.blinkTrack = [{ css: { opacity: 0.1 }, time: 1000 }, { css: { opacity: 0.8 }, time: 1000 }];
		if (obj) this.blinkTrack = obj;
		this.blinking(0);
	},
	stopBlink: function (obj) {
		this.blinkTrack.clear();
	},
	blinking: function (blinkIndex) {
		if (this.blinkTrack.length > 0) {
			var blinkTrack = this.blinkTrack;
			var onblink = this.blinking.bind(this);
			this.mask.animate(blinkTrack[blinkIndex].css, blinkTrack[blinkIndex].time, 'circInOut', function () {
				onblink((blinkIndex + 1) % blinkTrack.length);
			});
		}
	}
});
var mask = new AXMask();
mask.setConfig();
/* ********************************************** AXMask ** */

/* ** AXNotification ********************************************** */
var AXNotification = Class.create(AXJ, {
	version: "AXNotification v1.0",
	author: "tom@axisj.com",
	logs: [
		"2012-10-30 오후 12:01:10",
		"2013-01-09 오후 1:46:55 push type bug fix - tom"
	],
	initialize: function ($super) {
		$super();
		this.Observer = null;
		this.lasBreadSeq = 0;
		this.bread = [];
		this.config.easing = { open: { duration: 300, easing: "expoOut" }, close: { duration: 500, easing: "expoOut" } };
		this.config.eatUpTime = 2500;
		this.config.confirmStr = "확인";
		this.config.cancelStr = "취소";
	},
	init: function () {
		var config = this.config;
		if (config.type == "toast") {
			this.toastTray = $("<div class=\"AXNotificationTray\" id=\"" + config.targetID + "\"></div>");
		} else if (config.type == "dialog") {
			this.dialogTray = $("<div class=\"AXNotificationTrayDialog\" id=\"" + config.targetID + "\"></div>");
			//dialog type display center;
		}
	},
	push: function (obj) {
		var config = this.config;
		var breadID = config.targetID + "" + this.lasBreadSeq;
		this.lasBreadSeq++;

		var po = [];
		if ((typeof obj).toLowerCase() != "object") {
			po.push("<div class=\"AXNotification\" id=\"bread_AX_" + breadID + "\" style=\"display:none;\">");
			if (config.type == "dialog") {
				po.push("<div class=\"AXNotificationHead\">" + (obj.title || "Dialog Message") + "</div>");
			}
			po.push("<div class=\"AXNotificationCT\">");
			po.push("	<table cellpadding=\"0\" cellspacing=\"0\" class=\"AXNotificationTable\">");
			po.push("		<tbody>");
			po.push("			<tr>");
			po.push("				<td class=\"AXNotificationIcon\"></td>");
			po.push("				<td class=\"AXNotificationBody\">");
			po.push(obj);
			po.push("				</td>");
			po.push("			</tr>");
			po.push("		</tbody>");
			po.push("	</table>");

			if (config.type == "dialog") {
				po.push("	<div class=\"AXNotificationButtons\">");
				po.push("	<input type=\"button\" value=\"" + config.confirmStr + "\" class=\"AXButton Red W40\"  id=\"bread_AX_" + breadID + "_AX_confirm\" />");
				po.push("	</div>");
			}

			po.push("</div>");
			po.push("</div>");

		} else {
			po.push("<div class=\"AXNotification " + obj.type + "\" id=\"bread_AX_" + breadID + "\" style=\"display:none;\">");
			if (config.type == "dialog") {
				po.push("<div class=\"AXNotificationHead\">" + (obj.title || "Dialog Message") + "</div>");
			}
			po.push("<div class=\"AXNotificationCT\">");
			po.push("	<table cellpadding=\"0\" cellspacing=\"0\" class=\"AXNotificationTable\">");
			po.push("		<tbody>");
			po.push("			<tr>");
			po.push("				<td class=\"AXNotificationIcon\"></td>");
			po.push("				<td class=\"AXNotificationBody\">");
			po.push(obj.body);
			po.push("				</td>");
			if (obj.type == "Caution" && config.type != "dialog") {
				if (!obj.buttons) {
					po.push("				<td class=\"AXNotificationButton\" align=\"right\">");
					po.push("				<input type=\"button\" value=\"" + config.confirmStr + "\" class=\"AXButton Red W40\"  id=\"bread_AX_" + breadID + "_AX_confirm\" />");
					po.push("				</td>");
				}
			}
			po.push("			</tr>");
			po.push("		</tbody>");
			po.push("	</table>");
			if (obj.buttons) {
				po.push("	<div class=\"AXNotificationButtons\">");
				$.each(obj.buttons, function (index, B) {
					po.push("	<input type=\"button\" value=\"" + this.buttonValue + "\" class=\"AXButton " + (this.buttonClass || "") + "\"  id=\"bread_AX_" + breadID + "_AX_buttons_AX_" + index + "\" />");
				});
				po.push("	</div>");
			} else if (config.type == "dialog") {
				po.push("	<div class=\"AXNotificationButtons\">");
				po.push("	<input type=\"button\" value=\"" + config.confirmStr + "\" class=\"AXButton Red W40\"  id=\"bread_AX_" + breadID + "_AX_confirm\" />");
				po.push("	</div>");
			}
			po.push("</div>");
			po.push("</div>");

		}

		if (config.type == "toast") {
			if (!$M(config.targetID)) $(document.body).append(this.toastTray);
			this.bread.push({ breadID: breadID, type: obj.type, html: po.join('').enc() });
			this.insertBread();
		} else if (config.type == "dialog") {
			if (!$M(config.targetID)) $(document.body).append(this.dialogTray);
			this.dialogTray.prepend(po.join(''));

			mask.open();
			var bodyWidth = (AXUtil.docTD == "Q") ? document.body.clientWidth : document.documentElement.clientWidth;
			var l = bodyWidth / 2 - this.dialogTray.width() / 2;
			this.dialogTray.css({ left: l + "px" });
			$("#bread_AX_" + breadID).fadeIn();

			var endCheck = this.endCheck.bind(this);

			//Confirm button
			$("#bread_AX_" + breadID + "_AX_confirm").bind("click", function () {
				if (obj.onConfirm) obj.onConfirm(obj.data);
				$("#bread_AX_" + breadID).fadeOut({
					duration: config.easing.close.duration, easing: config.easing.close.easing, complete: function () {
						$("#bread_AX_" + breadID).remove();
						endCheck();
					}
				});
			});

			//AXBUTTON
			$(".AXNotificationButtons").find(".AXButton").bind("click", function (event) {
				var eid = event.target.id.split(/_AX_/g);
				var myBreadID = eid[1];
				var buttonSeq = eid.last();
				if (obj.buttons) {
					if (obj.buttons[buttonSeq]) {
						if (obj.buttons[buttonSeq].onClick) obj.buttons[buttonSeq].onClick(obj.buttons[buttonSeq].data);
					}
				}
				$("#bread_AX_" + myBreadID).fadeOut({
					duration: config.easing.close.duration, easing: config.easing.close.easing, complete: function () {
						$("#bread_AX_" + myBreadID).remove();
						endCheck();
					}
				});
			});

			$(".AXNotificationButtons").find(".AXButton").get(0).focus();

		}
	},
	insertBread: function () {
		var config = this.config;
		if (this.bread.length == 0) {
			return;
		}
		if (this.busy) return;
		this.busy = true;

		var nextBread = this.nextBread.bind(this);
		var endCheck = this.endCheck.bind(this);

		var myQue = this.bread.first();
		var breadID = myQue.breadID;
		$("#" + config.targetID).prepend(myQue.html.decode());
		$("#bread_AX_" + breadID + "_AX_confirm").bind("click", function () {
			$("#bread_AX_" + breadID).fadeOut({
				duration: config.easing.close.duration, easing: config.easing.close.easing, complete: function () {
					$("#bread_AX_" + breadID).remove();
					endCheck();
				}
			});
		});

		$("#bread_AX_" + breadID).slideDown({
			duration: config.easing.open.duration, easing: config.easing.open.easing, complete: function () {
				nextBread();
				//$("#msg").html($("#msg").html()+"<br/>"+$M("bread_AX_"+breadID)+"/"+breadID);
				if (myQue.type != "Caution") {
					setTimeout(function () {
						$("#bread_AX_" + breadID).fadeOut({
							duration: config.easing.close.duration, easing: config.easing.close.easing, complete: function () {
								$("#bread_AX_" + breadID).remove();
								endCheck();
							}
						});
					}, config.eatUpTime);
				}
			}
		});
	},
	nextBread: function () {
		this.bread.shift();
		this.busy = false;
		this.insertBread();
	},
	endCheck: function () {

		if ($("#" + this.config.targetID).html() == "") {
			this.lasBreadSeq = 0;
			if (this.config.type == "dialog") {
				mask.close();
			}
		}
	}
});

var toast = new AXNotification();
toast.setConfig({ targetID: "basicToast", type: "toast" });

var dialog = new AXNotification();
dialog.setConfig({ targetID: "basicDialog", type: "dialog" });
/* ********************************************** AXNotification ** */

/* ** AXScroll ********************************************** */
var AXScroll = Class.create(AXJ, {
	version: "AXScroll v1.1",
	author: "tom@axisj.com",
	logs: [
		"2012-10-10 오전 11:17:34",
		"2013-01-08 오후 2:33:39 스크롤대상을 스크롤바에서 컨테이너 기준으로 변경 - root",
		"2013-01-09 오후 1:29:26 mobile 환경에서 클릭버그수정 - tom",
		"2013-01-11 오후 4:18:21 스크롤바 드래그시 컨테이너 top 계산 수정-root",
		"2013-01-11 오후 5:18:54 컨테이너와 스크롤타겟의 높이에 따른 스크롤바표시 관련 수정-root",
		"2013-01-31 오후 3:10:02 스크롤바가 최소일때 휠 및 드래그 계산수정-root ",
		"2013-02-08 오후 5:48:26 컨테이너가 스크롤타켓보다 길때 휠 함수 중단 처리 - tom",
		"2013-02-16 오후 4:13:16 unbind 후 다시 bind할때 생기는 이벤트 중첩현상 처리 - tom",
		"2013-08-01 오후 4:54:17 mobile touch 버그픽스 - tom "
	],
	initialize: function ($super) {
		$super();
		this.config.CT_className = "AXScroll";
		this.config.ST_className = "scrollTarget";
		this.scrollBarMove = false;
		this.scrollBarAttr = {};
		this.Observer = null;
		this.config.touchDirection = false;
		this.minHeightSB = { TF: false, h: 0 };
	},
	init: function () {
		var config = this.config;
		if (Object.isUndefined(config.targetID)) {
			trace("need targetID - setConfig({targetID:''})");
			return;
		}
		if (Object.isUndefined(config.scrollID)) {
			trace("need scrollID - setConfig({scrollID:''})");
			return;
		}

		$("#" + config.targetID).addClass(this.config.CT_className);
		$("#" + config.scrollID).addClass(this.config.ST_className);
		this.initScroll();
		this.bindEvent();
	},
	initScroll: function () {
		var config = this.config;
		if (!this.scroll) {
			var po = [];
			po.push("<div class=\"scrollTrack\" id=\"" + config.targetID + "_AX_scrollTrack\"></div>");
			po.push("<div class=\"scrollBar\" id=\"" + config.targetID + "_AX_scrollBar\"></div>");
			$("#" + config.targetID).append(po.join(''));
			this.scroll = true;
		}

		var CTheight = $("#" + config.targetID).innerHeight();
		var CTwidth = $("#" + config.targetID).innerWidth();
		$("#" + config.targetID + "_AX_scrollTrack").css({ height: CTheight - 4 });
		$("#" + config.scrollID).css({ width: CTwidth });
		var Cheight = $("#" + config.scrollID).outerHeight();



		var SBheight = CTheight * (CTheight - 4) / Cheight;
		$("#" + config.targetID + "_AX_scrollBar").css({ height: Math.ceil(SBheight) });
		if (SBheight < 10) {
			this.minHeightSB.TF = true;
			this.minHeightSB.h = SBheight;
		}

		if (CTheight == Cheight || CTheight > Cheight) {
			$("#" + config.targetID + "_AX_scrollTrack").hide();
			$("#" + config.targetID + "_AX_scrollBar").hide();
		} else {
			$("#" + config.targetID + "_AX_scrollTrack").show();
			$("#" + config.targetID + "_AX_scrollBar").show();
		}
	},
	resizeScroll: function () {
		this.initScroll();
	},
	bindEvent: function () {
		var config = this.config;

		var CTheight = $("#" + config.targetID).innerHeight();
		var Cheight = $("#" + config.scrollID).outerHeight();

		/* event 선언자 */
		var tractActive = this.tractActive.bind(this);
		this.tractActiveBind = function (event) {
			tractActive(event);
		}
		var tractInActive = this.tractInActive.bind(this);
		this.tractInActiveBind = function (event) {
			tractInActive(event);
		}
		var cancelEvent = this.cancelEvent.bind(this);
		this.cancelEventBind = function (event) {
			cancelEvent(event);
		}
		var SBonMouseDown = this.SBonMouseDown.bind(this);
		this.SBonMouseDownBind = function (event) {
			SBonMouseDown(event);
		}
		var SBonMouseMove = this.SBonMouseMove.bind(this);
		this.SBonMouseMoveBind = function (event) {
			SBonMouseMove(event);
		}
		var SBonMouseUp = this.SBonMouseUp.bind(this);
		this.SBonMouseUpBind = function (event) {
			SBonMouseUp(event);
		}
		this.SBonWheelBind = this.SBonWheel.bind(this);

		var SBtouchstart = this.SBtouchstart.bind(this);
		this.SBtouchstartBind = function (event) {
			SBtouchstart(event);
		}
		/* event 선언자 */

		$("#" + config.targetID).bind("mouseover", this.tractActiveBind);
		$("#" + config.targetID).bind("mouseout", this.tractInActiveBind);

		$("#" + config.targetID + "_AX_scrollBar").bind("dragstart", this.cancelEventBind);
		$("#" + config.targetID + "_AX_scrollBar").bind("mousedown", this.SBonMouseDownBind);

		//if(CTheight < Cheight ) {
		var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel";
		if (document.attachEvent) { //if IE (and Opera depending on user setting)
			if ($M(config.targetID)) $M(config.targetID).attachEvent("on" + mousewheelevt, this.SBonWheelBind);
		} else if (document.addEventListener) { //WC3 browsers
			if ($M(config.targetID)) $M(config.targetID).addEventListener(mousewheelevt, this.SBonWheelBind, false);
		}
		if (document.addEventListener) {
			if ($M(config.targetID)) $M(config.targetID).addEventListener("touchstart", this.SBtouchstartBind, false)
		}
		//}
	},
	tractActive: function (event) {
		var config = this.config;
		$("#" + config.targetID + "_AX_scrollBar").addClass("scrollBar_hover");
		$("#" + config.targetID + "_AX_scrollTrack").addClass("scrollTrack_hover");
		if (this.Observer) clearTimeout(this.Observer); //닫기 명령 제거
		this.initScroll();
	},
	tractInActive: function (event) {
		var SBonWheelEnd = this.SBonWheelEnd.bind(this);
		this.Observer = setTimeout(function () {
			SBonWheelEnd();
		}, 500);
	},

	getMousePosition: function (event) {
		var config = this.config;
		var pos = $("#" + config.targetID + "_AX_scrollTrack").offset();
		//trace(pos);
		var x = (event.pageX - pos.left);
		var y = (event.pageY - pos.top);
		//trace({x:x, y:y});
		return { x: x, y: y };
	},
	getTouchPosition: function (event) {
		var config = this.config;
		var touch = event.touches[0];
		var pos = $("#" + config.targetID + "_AX_scrollTrack").offset();
		if (this.config.touchDirection) {
			var x = (touch.pageX - pos.left);
			var y = (touch.pageY - pos.top);
		} else {
			var x = (-touch.pageX - pos.left);
			var y = (-touch.pageY - pos.top);
		}
		return { x: x, y: y };
	},

	/* scrollBar event */
	SBtouchstart: function (e) {
		var event = window.event || e;
		var config = this.config;

		var CTheight = $("#" + config.targetID).innerHeight();
		var Cheight = $("#" + config.scrollID).outerHeight();
		var Ch = $("#" + config.scrollID).outerHeight();
		var STh = $("#" + config.targetID + "_AX_scrollTrack").height();

		this.CTheight = CTheight;
		this.Cheight = Cheight;
		this.Ch = Ch;
		this.STh = STh;
		if (CTheight < Cheight) {

			this.scrollBarMove = true;

			var pos = this.getTouchPosition(event);
			var SBpos = $("#" + config.targetID + "_AX_scrollBar").position();
			var SBh = $("#" + config.targetID + "_AX_scrollBar").height();
			this.scrollBarAttr = { y: (SBpos.top - pos.y).number(), h: SBh.number(), sth: STh };

			var SBtouchend = this.SBtouchend.bind(this);
			this.SBtouchendBind = function () {
				SBtouchend(event);
			}
			var SBtouchmove = this.SBtouchmove.bind(this);
			this.SBtouchmoveBind = function () {
				SBtouchmove(event);
			}

			if (document.addEventListener) {
				document.addEventListener("touchend", this.SBtouchendBind, false);
				document.addEventListener("touchmove", this.SBtouchmoveBind, false);
			}


			if (event.preventDefault) event.preventDefault();
			else return false;

		} else {


		}
	},
	SBtouchend: function (e) {
		var event = window.event || e;
		var config = this.config;
		if (this.scrollBarMove) {
			this.scrollBarMove = false;
			this.scrollMoving = false;

			$(document.body).removeAttr("onselectstart");
			$(document.body).removeClass("AXUserSelectNone");
			$("#" + config.targetID + "_AX_scrollBar").removeClass("scrollBar_hover");
			$("#" + config.targetID + "_AX_scrollTrack").removeClass("scrollTrack_hover");

			if (document.removeEventListener) {
				document.removeEventListener("touchend", this.SBtouchendBind, false);
				document.removeEventListener("touchmove", this.SBtouchmoveBind, false);
			}
		}
	},
	SBtouchmove: function (e) {
		var event = window.event || e;
		var config = this.config;
		if (this.scrollBarMove) {
			$(document.body).attr("onselectstart", "return false");
			$(document.body).addClass("AXUserSelectNone");
			var pos = this.getTouchPosition(event);

			var SBy = pos.y + this.scrollBarAttr.y;
			if (SBy < 2) SBy = 2;
			if ((SBy + this.scrollBarAttr.h) > this.scrollBarAttr.sth) {
				SBy = this.scrollBarAttr.sth - this.scrollBarAttr.h + 2;
			}

			$("#" + config.targetID + "_AX_scrollBar").css({ top: SBy.round() });
			//$M(config.targetID+"_AX_scrollBar").style.top = SBy;
			this.setContentPosition();

			if (this.scrollMoving == false) {
				$("#" + config.targetID + "_AX_scrollBar").addClass("scrollBar_hover");
				$("#" + config.targetID + "_AX_scrollTrack").addClass("scrollTrack_hover");
				this.scrollMoving = true;
			}

			if (event.preventDefault) event.preventDefault();
			else return false;
		}
	},
	SBonMouseDown: function (event) {
		var config = this.config;
		this.scrollBarMove = true;
		var pos = this.getMousePosition(event);
		var SBpos = $("#" + config.targetID + "_AX_scrollBar").position();
		var SBh = $("#" + config.targetID + "_AX_scrollBar").height();
		var STh = $("#" + config.targetID + "_AX_scrollTrack").height();
		var Ch = $("#" + config.scrollID).outerHeight();

		this.Ch = Ch;
		this.STh = STh;

		this.scrollBarAttr = { y: (SBpos.top - pos.y).number(), h: SBh.number(), sth: STh };
		//trace("y:"+SBpos.top +" - "+ pos.y +", h:"+ SBh +", sth:"+STh+", calc y : "+(SBpos.top - pos.y).number());

		$(document.body).bind("mousemove.AXScroll", this.SBonMouseMoveBind);
		$(document.body).bind("mouseup.AXScroll", this.SBonMouseUpBind);
		$(document.body).bind("mouseleave.AXScroll", this.SBonMouseUpBind);
	},
	SBonMouseMove: function (event) {
		var config = this.config;
		if (this.scrollBarMove) {
			$(document.body).attr("onselectstart", "return false");
			$(document.body).addClass("AXUserSelectNone");
			var pos = this.getMousePosition(event);

			var SBy = pos.y + this.scrollBarAttr.y;
			//trace(SBy +" = "+ pos.y +"+"+ this.scrollBarAttr.y);

			if (SBy < 2) SBy = 2;
			if ((SBy + this.scrollBarAttr.h) > this.scrollBarAttr.sth) {
				SBy = this.scrollBarAttr.sth - this.scrollBarAttr.h + 2;
				//trace(SBy)
			}
			$("#" + config.targetID + "_AX_scrollBar").css({ top: SBy });
			this.setContentPosition();
			//this.setScrollbarPositionForWheel();
		}
	},
	SBonMouseUp: function (event) {
		if (this.scrollBarMove) {
			var config = this.config;
			this.scrollBarMove = false;
			$(document.body).removeAttr("onselectstart");
			$(document.body).removeClass("AXUserSelectNone");
		}
		$(document.body).unbind("mousemove.AXScroll");
		$(document.body).unbind("mouseup.AXScroll");
		$(document.body).unbind("mouseleave.AXScroll");
	},
	SBonWheel: function (e) {
		//content top handle
		var config = this.config;

		var event = (window.event || e);
		var delta = event.detail ? event.detail * (-10) : event.wheelDelta //check for detail first so Opera uses that instead of wheelDelta

		var Sy = $("#" + config.scrollID).position().top;
		var Sh = $("#" + config.scrollID).outerHeight();
		var TGh = $("#" + config.targetID).height();

		//trace(Sh+" + "+Sy+" < "+TGh );
		if (Sh < TGh) return; //스크롤 할 대상이 없음 2013-02-08 오후 5:48:07 tom@axmods.com

		var eventCancle = false;
		Sy += delta;
		if (Sy > 0) {
			Sy = 0;
			eventCancle = true;
		}
		if ((Sh + Sy) < TGh) {
			Sy = -(Sh - TGh);
			eventCancle = true;
		}


		$("#" + config.scrollID).css({ top: Sy });

		//this.setContentPosition();
		this.setScrollbarPositionForWheel();

		if (!eventCancle) {
			if (event.preventDefault) event.preventDefault();
			if (event.stopPropagation) event.stopPropagation();
			event.cancelBubble = true;
			return false;
		}

	},
	SBonWheelEnd: function () {
		if (this.scrollBarMove) return;
		var config = this.config;
		$("#" + config.targetID + "_AX_scrollBar").removeClass("scrollBar_hover");
		$("#" + config.targetID + "_AX_scrollTrack").removeClass("scrollTrack_hover");
	},
	cancelEvent: function (event) {
		event.stopPropagation(); // disable  event
		return false;
	},
	setContentPosition: function () {
		var config = this.config;
		var SBy = $("#" + config.targetID + "_AX_scrollBar").position().top;
		var STh = this.STh;
		var Ch = this.Ch;

		var CTheight = this.CTheight;
		var Cheight = this.Cheight;
		var SBheight = CTheight * (CTheight - 4) / Cheight;

		if (SBheight < 10) { //스크롤 바가 최소값일 때
			//SBy + 5;
			/*
			if(SBy == 2) SBy = 0;
			var Ctop = SBy * Ch / STh;
			*/
			var addTop, Ctop;

			if (SBy == 2) SBy = 0;

			addTop = ((10 - this.minHeightSB.h) / (STh - 10)) * SBy;
			addTop = addTop == 0 ? addTop = 0 : addTop = addTop - 1;

			if (STh - 10 > SBy) {
				Ctop = (SBy + addTop) * Ch / STh;
			} else {
				Ctop = Ch - CTheight;
			}

			if ((SBy) == STh) {
				Ctop = Ch - CTheight;
			}
		} else {
			SBy = SBy == 2 ? SBy = 0 : SBy = SBy - 2;
			//trace({SBy:SBy, Ch:Ch, STh:STh});			
			var Ctop = SBy * Ch / STh;
		}
		$("#" + config.scrollID).css({ top: -(Ctop.round()) });
		//$M(config.scrollID).style.top = -Ctop;
	},

	setScrollbarPositionForWheel: function () {
		//scrollbar top position handle for wheel

		var config = this.config;
		//wheel control event is not jquery event !
		var Sy = $("#" + config.scrollID).position().top;
		var STh = $("#" + config.targetID + "_AX_scrollTrack").height() + 4;
		var Sh = $("#" + config.scrollID).outerHeight();

		var SBy = (-Sy * STh) / Sh;
		/*
		trace(Sy+", "+STh+", "+Sh+", "+SBy);
		if(SBy < 2) SBy = 2;
		*/

		var addTop = 0;
		if (this.minHeightSB.TF) {
			addTop = Math.floor(((10 - this.minHeightSB.h) / (STh - 4 - 10)) * SBy);
			//addTop = addTop == 0 ? addTop = 0 : addTop = addTop + 1;
		}

		if (SBy < 2) {
			SBy = 2;
		} else {
			//trace(Sy+", "+STh+", "+Sh+", "+SBy+", "+addTop);
			SBy = SBy - addTop;
			if (SBy > STh - 10 - 2) {
				SBy = STh - 10 - 2;
			}
		}

		$("#" + config.targetID + "_AX_scrollBar").css({ top: SBy });
	},


	setSBPosition: function () {
		var config = this.config;
		var Ctop = $("#" + config.scrollID).position().top;
		var CTheight = $("#" + config.targetID).innerHeight();
		var STh = $("#" + config.targetID + "_AX_scrollTrack").height() + 8;
		var Ch = $("#" + config.scrollID).outerHeight();

		var SBh = $("#" + config.targetID + "_AX_scrollBar").height();

		//trace({Ctop:Ctop, CTheight:CTheight, Ch:Ch, STh:STh, SBh:SBh, x:(STh*Ctop)/Ch});

		var SBtop = -(STh * Ctop) / Ch;
		if (SBtop < 0) SBtop;
		if ((SBtop + SBh) > STh) SBtop = STh - SBh;
		$("#" + config.targetID + "_AX_scrollBar").css({ top: SBtop });

	},
	focusElement: function (id) {
		var config = this.config;
		if ($M(id)) {
			//trace($("#"+id).position());
			var pos = $("#" + id).position();

			var myNewTop = pos.top;
			var CTheight = $("#" + config.targetID).innerHeight();
			var Cheight = $("#" + config.scrollID).outerHeight();
			if ((Cheight - myNewTop) < CTheight) {
				myNewTop = Cheight - CTheight;
			}
			$("#" + config.scrollID).css({ top: -myNewTop });
			this.setSBPosition();
		}
	},
	unbind: function () {
		var config = this.config;
		$("#" + config.targetID + "_AX_scrollTrack").remove();
		$("#" + config.targetID + "_AX_scrollBar").remove();

		$("#" + config.targetID).unbind("mouseover", this.tractActiveBind);
		$("#" + config.targetID).unbind("mouseout", this.tractInActiveBind);

		//$("#"+config.targetID+"_AX_scrollBar").unbind("dragstart", this.cancelEventBind);
		//$("#"+config.targetID+"_AX_scrollBar").unbind("mousedown", this.SBonMouseDownBind);
		$(document.body).unbind("mousemove.AXScroll", this.SBonMouseMoveBind);
		$(document.body).unbind("mouseup.AXScroll", this.SBonMouseUpBind);

		var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel";
		if (document.attachEvent) { //if IE (and Opera depending on user setting)
			if ($M(config.targetID)) $M(config.targetID).detachEvent("on" + mousewheelevt, this.SBonWheelBind);
		} else if (document.addEventListener) { //WC3 browsers
			if ($M(config.targetID)) $M(config.targetID).removeEventListener(mousewheelevt, this.SBonWheelBind, false);
		}

		if (document.addEventListener) {
			if ($M(config.targetID)) $M(config.targetID).removeEventListener("touchstart", this.SBtouchstartBind, false)
		}

	}
});
/* ********************************************** AXScroll ** */

/* ** AXCalendar ********************************************** */
var AXCalendar = Class.create(AXJ, {
	version: "AXCalendar v1.0",
	author: "tom@axisj.com",
	logs: [
		"2012-12-05 오후 11:54:27"
	],
	initialize: function ($super) {
		$super();
		this.config.CT_className = "AXCalendar";
		this.Observer = null;
		this.config.weeks = [
			{ name: "SUN", style: "color:#c78b82;" },
			{ name: "MON", style: "color:#7b7b7b;" },
			{ name: "TUE", style: "color:#7b7b7b;" },
			{ name: "WED", style: "color:#7b7b7b;" },
			{ name: "THU", style: "color:#7b7b7b;" },
			{ name: "FRI", style: "color:#7b7b7b;" },
			{ name: "SAT", style: "color:#627d9b;" }
		];
		this.config.printFormat = "d";
		this.config.titleFormat = "yyyy/mm/dd";
		this.config.valueFormat = "yyyy-mm-dd";
	},
	init: function () {

	},
	getBasicDate: function () {
		var cfg = this.config;
		if (cfg.basicDate != undefined) {
			return cfg.basicDate.date();
		} else {
			return new Date();
		}
	},
	getCalendarStartDate: function (date) {
		var cfg = this.config;
		var calendarStartDate, monthStartDate, basicDate;
		basicDate = (date) ? date.date() : this.getBasicDate();
		monthStartDate = new Date(basicDate.getFullYear(), basicDate.getMonth(), 1, 12);
		var calendarStartDateDay = monthStartDate.getDay();
		if (calendarStartDateDay == 0) calendarStartDateDay = 7;
		calendarStartDate = monthStartDate.add(-calendarStartDateDay);
		return { calendarStartDate: calendarStartDate, monthStartDate: monthStartDate };
	},
	printDayPage: function (date) {
		var cfg = this.config;
		if (Object.isUndefined(cfg.targetID)) {
			trace("need targetID - setConfig({targetID:''})");
			return;
		}

		var calendarDate = this.getCalendarStartDate(date);
		var calendarStartDate = calendarDate.calendarStartDate;
		var monthStartDate = calendarDate.monthStartDate;
		var basicDate = this.getBasicDate();
		var setDate = (date) ? date.date() : new Date();
		//
		var po = [];
		po.push("<div id=\"" + cfg.targetID + "_AX_box\" class=\"" + cfg.CT_className + "\">");
		po.push("<table cellspacing=\"0\" cellpadding=\"0\" class=\"calendarPage\">");
		po.push("<thead>");
		po.push("<tr>");
		$.each(cfg.weeks, function (wi, ww) {
			po.push("<td class=\"head_" + wi + "\" style=\"" + ww.style + "\">" + ww.name + "</td>");
		});
		po.push("</tr>");
		po.push("</thead>");
		po.push("<tbody>");
		var roopDate = calendarStartDate;
		var i = 0; while (i < 6) {
			po.push("<tr>");
			var k = 0; while (k < 7) {
				var dayValue = roopDate.print(this.config.printFormat);
				var addClass = [];
				var tdClass = [];
				if (roopDate.getMonth() != monthStartDate.getMonth()) addClass.push("notThisMonth");
				if (setDate.diff(roopDate) == 0) tdClass.push("setDate");
				po.push("<td class=\"bodyCol_" + k + " bodyRow_" + i + " " + tdClass.join(" ") + "\"><a href=\"#axexec\" class=\"calendarDate " + addClass.join(" ") + "\" id=\"" + cfg.targetID + "_AX_" + roopDate.print(this.config.valueFormat) + "_AX_date\" title=\"" + roopDate.print(this.config.titleFormat) + "\">" + dayValue + "</a></td>");
				k++;
				roopDate = roopDate.add(1);
			}
			po.push("</tr>");
			i++;
		}
		po.push("</tbody>");
		po.push("</table>");
		po.push("</div>");
		$("#" + cfg.targetID).html(po.join(''));
	},
	dayPageSetDay: function (date) {
		var cfg = this.config;
		$("#" + cfg.targetID).find(".calendarDate").removeClass("selected");
		$("#" + cfg.targetID + "_AX_" + date.print(this.config.valueFormat) + "_AX_date").addClass("selected");
	},
	printMonthPage: function (date) {
		var cfg = this.config;
		if (Object.isUndefined(cfg.targetID)) {
			trace("need targetID - setConfig({targetID:''})");
			return;
		}
		var setDate = (date) ? date.date() : new Date();
		//alert(setDate);
		var po = [];
		po.push("<div id=\"" + cfg.targetID + "_AX_box\" class=\"" + cfg.CT_className + "\">");
		po.push("<table cellspacing=\"0\" cellpadding=\"0\" class=\"calendarPageMonth\">");
		po.push("<tbody>");

		var m = 1;
		var i = 0; while (i < 4) {
			po.push("<tr>");
			var k = 0; while (k < 3) {
				var tdClass = [];
				if (m == (setDate.getMonth() + 1)) tdClass.push("setDate");
				po.push("<td class=\"bodyCol_" + k + " bodyRow_" + i + " " + tdClass.join(" ") + "\"><a href=\"#axexec\" class=\"calendarMonth\" id=\"" + cfg.targetID + "_AX_" + m + "_AX_month\" title=\"\">" + m + "월</a></td>");
				k++;
				m++;
			}
			po.push("</tr>");
			i++;
		}
		po.push("</tbody>");
		po.push("</table>");
		po.push("</div>");
		$("#" + cfg.targetID).html(po.join(''));
	},
	monthPageSetMonth: function (date) {
		var cfg = this.config;
		$("#" + cfg.targetID).find(".calendarMonth").removeClass("selected");
		$("#" + cfg.targetID + "_AX_" + (date.getMonth() + 1) + "_AX_month").addClass("selected");
	},
	printYearPage: function (year) {
		var cfg = this.config;
		if (Object.isUndefined(cfg.targetID)) {
			trace("need targetID - setConfig({targetID:''})");
			return;
		}
		var po = [];
		po.push("<div id=\"" + cfg.targetID + "_AX_box\" class=\"" + cfg.CT_className + "\">");
		po.push("<table cellspacing=\"0\" cellpadding=\"0\" class=\"calendarPageMonth\">");
		po.push("<tbody>");

		var m = year - 4;
		var i = 0; while (i < 4) {
			po.push("<tr>");
			var k = 0; while (k < 3) {
				var tdClass = [];
				if (m == year) tdClass.push("setDate");
				po.push("<td class=\"bodyCol_" + k + " bodyRow_" + i + " " + tdClass.join(" ") + "\"><a href=\"#axexec\" class=\"calendarMonth\" id=\"" + cfg.targetID + "_AX_" + m + "_AX_year\" title=\"\">" + m + "년</a></td>");
				k++;
				m++;
			}
			po.push("</tr>");
			i++;
		}
		po.push("</tbody>");
		po.push("</table>");
		po.push("</div>");
		$("#" + cfg.targetID).html(po.join(''));
	},
	yearPageSetYear: function (date) {
		var cfg = this.config;
		$("#" + cfg.targetID).find(".calendarMonth").removeClass("selected");
		$("#" + cfg.targetID + "_AX_" + date.print("yyyy") + "_AX_year").addClass("selected");
	},
	printTimePage: function (displayTime) {
		var cfg = this.config;
		if (Object.isUndefined(cfg.targetID)) {
			trace("need targetID - setConfig({targetID:''})");
			return;
		}

		if (displayTime) {
			var now = displayTime.split(":");
			var hh = now[0].setDigit(2);
			var mm = now[1].left(2).setDigit(2);
			var apm = now[1].right(2);
			if (hh == "00" && mm == "00") {
				hh = "12";
				apm = "PM";
			}
			if (apm == "00") apm = "AM";
		} else {
			var now = new Date();
			var hh = now.getHours();
			var mm = now.getMinutes();
			var apm = "AM";
			if (hh == 0 && mm == 0) {
				hh = 24;
			}
			if (hh > 12) {
				apm = "PM";
				hh -= 12;
			}
			hh = hh.setDigit(2);
			mm = mm.setDigit(2);
		}

		var po = [];
		po.push("<div id=\"" + cfg.targetID + "_AX_box\" class=\"" + cfg.CT_className + "\" style=\"padding:0px;\">");
		po.push("<div class='timeBox'>");
		po.push("<div class='hourTitle'>Hour</div>");
		po.push("<div class='hourSlider'><input type='text' value='" + hh + "' id='" + cfg.targetID + "_AX_hour' style='width:120px;' class='AXInput' /></div>");
		po.push("<div class='minuteTitle'>Minute</div>");
		po.push("<div class='minuteSlider'><input type='text' value='" + mm + "' id='" + cfg.targetID + "_AX_minute' style='width:120px;' class='AXInput' /></div>");
		po.push("<div class='timeDisplay'>" + hh + ":" + mm + " " + apm + "</div>");
		po.push("<div class='AMPM'><input type='text' id='" + cfg.targetID + "_AX_AMPM' value='" + apm + "' style='width:50px;' /></div>");
		po.push("</div>");
		po.push("</div>");
		$("#" + cfg.targetID).html(po.join(''));

		var timePageChange = this.timePageChange.bind(this);
		$("#" + cfg.targetID + "_AX_hour").unbindInput();
		$("#" + cfg.targetID + "_AX_minute").unbindInput();
		$("#" + cfg.targetID + "_AX_AMPM").unbindInput();
		$("#" + cfg.targetID + "_AX_hour").bindSlider({
			min: 1, max: 12, onChange: function (objID, objVal) {
				timePageChange(objID, objVal);
			}
		});
		$("#" + cfg.targetID + "_AX_minute").bindSlider({
			min: 0, max: 59, onChange: function (objID, objVal) {
				timePageChange(objID, objVal);
			}
		});
		$("#" + cfg.targetID + "_AX_AMPM").bindSwitch({
			off: "AM", on: "PM", onChange: function (objID, objVal) {
				timePageChange(objID, objVal);
			}
		});
	},
	timePageChange: function (objID, objVal) {
		var cfg = this.config;
		var mytime = $("#" + cfg.targetID + "_AX_hour").val().number().setDigit(2) + ":" + $("#" + cfg.targetID + "_AX_minute").val().number().setDigit(2) + " " + $("#" + cfg.targetID + "_AX_AMPM").val();
		$("#" + cfg.targetID + "_AX_box").find(".timeDisplay").html(mytime);
		if (cfg.onChange) {
			var hh = $("#" + cfg.targetID + "_AX_hour").val().number();
			var mi = $("#" + cfg.targetID + "_AX_minute").val().number();
			var apm = $("#" + cfg.targetID + "_AX_AMPM").val();
			if (apm == "PM") hh += 12;
			cfg.onChange(hh.setDigit(2) + ":" + mi.setDigit(2));
		}
	},
	getTime: function () {
		var cfg = this.config;
		var hh = $("#" + cfg.targetID + "_AX_hour").val().number();
		var mi = $("#" + cfg.targetID + "_AX_minute").val().number();
		var apm = $("#" + cfg.targetID + "_AX_AMPM").val();
		if (apm == "PM") hh += 12;
		return hh.setDigit(2) + ":" + mi.setDigit(2);
	}
});
/* ********************************************** AXCalendar ** */

/* ** AXMultiSelect ********************************************** */
var AXMultiSelect = Class.create(AXJ, {
	version: "AXMultiSelect v1.5",
	author: "SQUALL",
	createDate: "2013-01-31 오후 5:01:12",
	lastModifyDate: "2013-01-31 오후 5:01:15",
	initialize: function ($super) {
		$super();
		this.selects = [];
		this.config.selectClassName = "readySelect";
		this.config.beselectClassName = "beSelected";
	},
	init: function () {

		var mouseClick = this.onmouseClick.bind(this);
		jQuery("#" + this.config.selectStage).bind("mousedown", function (event) {
			mouseClick(this, event);
		});
		this.collect();
	},
	/* ------------------------------------------------------------------------------------------------------------------ */
	/* observe method ~~~~~~ */
	onmouseClick: function (element, event) {
		var myTarget = event.target;
		if (myTarget) {
			while (!$(myTarget).hasClass(this.config.selectClassName) && myTarget.parentNode) {
				myTarget = myTarget.parentNode;
			}
		}
		if (!jQuery(myTarget).hasClass(this.config.selectClassName)) {
			this.clearSelects();
			return;
		}
		var selectElement = myTarget;
		if (selectElement) {
			if (event.shiftKey) {
				this.shiftSelects(selectElement);
			} else if (event.ctrlKey) {
				this.toggleSelects(selectElement);
			} else {
				this.clickSelects(selectElement);
			}
		}
	},
	/* ------------------------------------------------------------------------------------------------------------------ */
	/* class method ~~~~~~ */
	collect: function () {
		this.selectTargets = $("#" + this.config.selectStage + " ." + this.config.selectClassName).get();
	},
	clearSelects: function () {
		var beselectClassName = this.config.beselectClassName;
		jQuery.each(this.selects, function (i, n) {
			jQuery(n).removeClass(beselectClassName);
		});
		this.selects.clear();
	},
	pushSelects: function (Obj) {
		var hasSelect = this.selects.has(function () {
			return this.item == Obj;
		});
		if (!hasSelect) this.selects.push(Obj);
	},
	clickSelects: function (Obj) {
		var hasSelect = this.selects.has(function () {
			return this.item == Obj;
		});
		if (!hasSelect) this.clearSelects();
		var beselectClassName = this.config.beselectClassName;
		jQuery(Obj).addClass(beselectClassName);
		this.pushSelects(Obj);
	},
	toggleSelects: function (Obj) {
		var beselectClassName = this.config.beselectClassName;
		var hasSelect = this.selects.has(function () {
			return this.item == Obj;
		});
		if (hasSelect) {
			jQuery(Obj).removeClass(beselectClassName);
			var collects = [];
			collects = jQuery.grep(this.selects, function (n, i) {
				return (Obj != n);
			});
			this.selects = collects;
		} else {
			jQuery(Obj).addClass(beselectClassName);
			this.pushSelects(Obj);
		}
	},
	shiftSelects: function (Obj) {
		var beselectClassName = this.config.beselectClassName;
		var selectTargets = this.selectTargets;
		var addSelect = function (Obj) {
			this.selects.push(Obj);
		};
		var addSelectBind = addSelect.bind(this);

		if (this.selects.length == 0) {
			this.clickSelects(Obj);
		} else {
			//마지막 selects 개체를 찾는다.
			var lastElement = this.selects.last();
			var li = this.selectTargets.getObj($(lastElement)[0]).index;
			var si = this.selectTargets.getObj($(Obj)[0]).index;
			if (si == li) return;

			this.clearSelects();
			var objParent = $(Obj).parent()[0];

			if (si > li) {
				jQuery.each(si.rangeFrom(li), function (i, n) {
					if (objParent == $(selectTargets[n]).parent()[0]) {
						$(selectTargets[n]).addClass(beselectClassName);
						addSelectBind(selectTargets[n]);
					}
				});
			} else {
				jQuery.each(li.rangeFrom(si), function (i, n) {
					if (objParent == $(selectTargets[n]).parent()[0]) {
						$(selectTargets[n]).addClass(beselectClassName);
						addSelectBind(selectTargets[n]);
					}
				});
			}
		}
	},
	getSelects: function () {
		return this.selects;
	},
	size: function () {
		return this.selects.length;
	}
});
/* ********************************************** AXMultiSelect ** */

/* ** AXContextMenu ********************************************** */
var AXContextMenuClass = Class.create(AXJ, {
	version: "AXContextMenuClass v1.1",
	author: "tom@axisj.com",
	logs: [
		"2013-03-22 오후 6:08:57",
		"2013-09-03 오후 7:10:14 메뉴확장 위치 제어 버그 픽스"
	],
	initialize: function ($super) {
		$super();
		this.showedItem = {};
		this.objects = [];
		this.config.theme = "AXContextMenu";
		this.config.width = "140";
	},
	init: function () {

	},
	bindSetConfig: function (objID, configs) {
		var findIndex = null;
		$.each(this.objects, function (index, O) {
			if (O.id == objID) {
				findIndex = index;
				return false;
			}
		});
		if (findIndex == null) {
			//trace("바인드 된 오브젝트를 찾을 수 없습니다.");
			return;
		} else {
			var _self = this.objects[findIndex];
			jQuery.each(configs, function (k, v) {
				_self.config[k] = v;
			});
		}
	},
	bind: function (obj) {
		var cfg = this.config;
		if (!obj.id) {
			trace("ID가 없어 bind 처리할 수 없습니다. AXContentMenu.bind({id:'idValue'});");
			return;
		}
		var mlen = this.objects.search(
			function () {
				return (this.item.id == obj.id);
			}
		);
		if (mlen > 0) {
			//이미 바인딩된 개체 아이디 입니다.
			return;
		}
		var objID = obj.id;
		var objSeq = this.objects.length;
		this.objects.push(obj);
	},
	filter: function (objSeq, objID, myobj, menu) {
		var cfg = this.config;
		var obj = this.objects[objSeq];
		if (myobj.filter) {
			var sendObj = {
				menu: menu,
				sendObj: obj.sendObj
			}
			return myobj.filter.call(sendObj, objID);
		} else {
			return true;
		}
	},
	getSubMenu: function (parentID, objSeq, objID, myobj, subMenu, depth) {
		var cfg = this.config;
		var obj = this.objects[objSeq];
		var theme = obj.theme || cfg.theme;
		var width = obj.width || cfg.width;

		var filter = this.filter.bind(this);
		var getSubMenu = this.getSubMenu.bind(this);
		var subMenuID = parentID + "_AX_subMenu";

		//trace(subMenu.length);		
		var po = [];
		po.push("<div id=\"" + subMenuID + "\" class=\"" + theme + "\" style=\"width:" + width + "px;left:" + (width.number() - 15) + "px;display:none;\">");
		$.each(subMenu, function (idx, menu) {
			if (filter(objSeq, objID, myobj, menu)) {
				var className = (menu.className) ? menu.className : "";
				var hasSubMenu = (menu.subMenu) ? " hasSubMenu" : "";
				po.push("<a href=\"#AXexec\" class=\"contextMenuItem " + className + hasSubMenu + "\" id=\"" + subMenuID + "_AX_" + depth + "_AX_" + idx + "\">");
				po.push(menu.label);
				if (menu.subMenu) {
					if (menu.subMenu.length > 0) {
						po.push("<div class=\"contextSubMenuIcon\"></div>");
					}
				}
				po.push("</a>");
				if (menu.subMenu) {
					if (menu.subMenu.length > 0) {
						po.push(getSubMenu(subMenuID + "_AX_" + depth + "_AX_" + idx, objSeq, objID, myobj, menu.subMenu, (depth + 1)));
					}
				}
			}
		});
		po.push("</div>");
		return po.join('');
	},
	open: function (myobj, position) {
		var cfg = this.config;
		var objSeq = null;
		$.each(this.objects, function (index, O) {
			if (O.id == myobj.id) {
				objSeq = index;
				return false;
			}
		});
		if (objSeq == null) {
			//trace("바인드 된 오브젝트를 찾을 수 없습니다.");
			return;
		}
		var obj = this.objects[objSeq];
		var objID = obj.id;

		if (myobj.sendObj) {
			obj.sendObj = myobj.sendObj;
		}

		if ($M(objID)) return;

		var theme = obj.theme || cfg.theme;
		var width = obj.width || cfg.width;

		$("#" + objID).remove();

		var filter = this.filter.bind(this);
		var getSubMenu = this.getSubMenu.bind(this);
		var po = [];
		po.push("<div id=\"" + objID + "\" class=\"" + theme + "\" style=\"width:" + width + "px;\">");
		$.each(obj.menu, function (idx, menu) {
			if (filter(objSeq, objID, myobj, menu)) {
				if (menu.upperLine) {
					po.push("<div class=\"hline\"></div>");
				}
				var className = (menu.className) ? " " + menu.className : "";
				var hasSubMenu = (menu.subMenu) ? " hasSubMenu" : "";
				po.push("<a href=\"#AXexec\" class=\"contextMenuItem" + className + hasSubMenu + "\" id=\"" + objID + "_AX_contextMenu_AX_0_AX_" + idx + "\">");
				po.push(menu.label);
				if (menu.subMenu) {
					if (menu.subMenu.length > 0) {
						po.push("<div class=\"contextSubMenuIcon\"></div>");
					}
				}
				po.push("</a>");
				if (menu.subMenu) {
					if (menu.subMenu.length > 0) {
						po.push(getSubMenu(objID + "_AX_contextMenu_AX_0_AX_" + idx, objSeq, objID, myobj, menu.subMenu, 1));
					}
				}
				if (menu.underLine) {
					po.push("<div class=\"hline\"></div>");
				}
			}
		});
		po.push("</div>");
		$(document.body).append(po.join(''));

		$("#" + objID + " .contextMenuItem:first-child").addClass("first");
		$("#" + objID + " .contextMenuItem:last-child").addClass("last");

		var contextMenuItemMouseOver = this.contextMenuItemMouseOver.bind(this);
		this.contextMenuItemMouseOverBind = function (event) {
			contextMenuItemMouseOver(event, objSeq, objID);
		};
		$("#" + objID + " .contextMenuItem").bind("mouseover", this.contextMenuItemMouseOverBind);

		//컨텍스트 메뉴의 위치 지정
		var css = {};
		if (!position.clientX) {
			if (position.left != undefined) css.left = position.left;
			else css.right = position.right;
			css.top = position.top;
		} else {
			var mouse = this.getMousePositon(position);
			css.left = mouse.pageX;
			css.top = mouse.pageY;
		}

		// -- 부모박스 정보와 박스 정보
		var pElement = $("#" + objID).offsetParent();
		var pBox = { width: pElement.width(), height: pElement.height() };
		var clientHeight = (AXUtil.docTD == "Q") ? document.body.scrollHeight : document.documentElement.scrollHeight;
		var clienWidth = (AXUtil.docTD == "Q") ? document.body.scrollWidth : document.documentElement.scrollWidth;
		if (clienWidth > pBox.width) pBox.width = clienWidth;
		if (clientHeight > pBox.height) pBox.height = clientHeight;
		var _box = { width: $("#" + objID).outerWidth(), height: $("#" + objID).outerHeight() };
		// -- 부모박스 정보와 박스 정보		

		if ((_box.height.number() + css.top.number()) > pBox.height) {
			css.top -= ((_box.height.number() + css.top.number()) - pBox.height) + 5;
			this.openTB = "up";
		}

		if (css.left != undefined) {

			if ((_box.width.number() + css.left.number()) > pBox.width) {
				var moveLeft = ((_box.width.number() + css.left.number()) - pBox.width) + 5;
				css.left -= moveLeft;
				this.openLR = "left";
			} else {
				if ((_box.width.number() * 2 + css.left.number()) > pBox.width) {
					this.openLR = "left";
				}
			}

			/*
			if((_box.width.number() + css.left.number()) > pBox.width){
				css.left -= ((_box.width.number() + css.left.number()) - pBox.width) + 5;
				this.openLR = "left";
			}
			*/
		} else {
			css.left = "auto";
			this.openLR = "right";
		}
		$("#" + objID).css(css);

		//var eventBind = this.eventBind.bind(this);
		this.eventBind(objSeq, objID);
		//setTimeout(function(){}, 1);
	},
	eventBind: function (objSeq, objID) {
		var cfg = this.config;
		/* closeEvent bind */
		var contextMenuItemDown = this.contextMenuItemDown.bind(this);
		this.contextMenuItemDownBind = function (event) {
			contextMenuItemDown(event, objSeq, objID);
		};
		$(document).bind("mousedown", this.contextMenuItemDownBind);
		$(document).bind("keydown", this.contextMenuItemDownBind);
		/* closeEvent bind ~~~~~~~~~~~~~~~~~~~ */
		//click
		var contextMenuItemClick = this.contextMenuItemClick.bind(this);
		this.contextMenuItemClickBind = function (event) {
			contextMenuItemClick(event, objSeq, objID);
		};
		$("#" + objID).find(".contextMenuItem").bind("click", this.contextMenuItemClickBind);
	},
	_close: function (objSeq, objID) {
		var cfg = this.config;
		$("#" + objID).fadeOut("fast", function () {
			$("#" + objID).remove();
		});
		$(document).unbind("keydown", this.contextMenuItemDownBind);
		$(document).unbind("mousedown", this.contextMenuItemDownBind);
		this.showedItem = {}; // 초기화
		this.openTB = "";
		this.openLR = "";
	},
	close: function (myobj) {
		var cfg = this.config;
		var objSeq = null;
		$.each(this.objects, function (index, O) {
			if (O.id == myobj.id) {
				objSeq = index;
				return false;
			}
		});
		if (objSeq == null) {
			//trace("바인드 된 오브젝트를 찾을 수 없습니다.");
			return;
		}
		var obj = this.objects[objSeq];
		var objID = obj.id;

		$("#" + objID).fadeOut("fast", function () {
			$("#" + objID).remove();
		});

		$(document).unbind("keydown", this.contextMenuItemDownBind);
		$(document).unbind("mousedown", this.contextMenuItemDownBind);

		this.showedItem = {}; // 초기화
		this.openTB = "";
		this.openLR = "";
	},
	contextMenuItemMouseOver: function (event, objSeq, objID) {
		var cfg = this.config;
		var obj = this.objects[objSeq];

		var menuWidth = obj.width || cfg.width;
		// event target search -
		var eid = event.target.id.split(/_AX_/g);
		var eventTarget = event.target;
		var myTarget = this.getEventTarget({
			evt: eventTarget, evtIDs: eid,
			find: function (evt, evtIDs) { return ($(evt).hasClass("contextMenuItem")) ? true : false; }
		});
		// event target search ------------------------    	
		if (myTarget) {
			var poi = myTarget.id.split(/_AX_/g);
			var depth = poi[poi.length - 2];
			if (this.showedItem[depth]) {
				$("#" + this.showedItem[depth]).hide();
			}
			if ($(myTarget).hasClass("hasSubMenu")) {

				// -- 부모박스 정보와 박스 정보
				var pElement = $("#" + myTarget.id + "_AX_subMenu").offsetParent();
				var pBox = { width: pElement.width(), height: pElement.height() };
				var clientHeight = (AXUtil.docTD == "Q") ? document.body.scrollHeight : document.documentElement.scrollHeight;
				var clienWidth = (AXUtil.docTD == "Q") ? document.body.scrollWidth : document.documentElement.scrollWidth;
				if (clienWidth > pBox.width) pBox.width = clienWidth;
				if (clientHeight > pBox.height) pBox.height = clientHeight;
				var _box = { width: $("#" + myTarget.id + "_AX_subMenu").outerWidth(), height: $("#" + myTarget.id + "_AX_subMenu").outerHeight() };
				// -- 부모박스 정보와 박스 정보		

				var subMenuTop = $("#" + myTarget.id).position().top;

				var css;
				if (this.openTB == "up") {
					var ph = $("#" + myTarget.id).offsetParent().height();
					var h = $("#" + myTarget.id).height();
					var bottom = ph - subMenuTop - h;
					css = { top: "auto", bottom: bottom };
				} else {
					css = { top: subMenuTop };
				}
				if (this.openLR == "left") {
					//css.left = -(menuWidth - 15);
					css.left = -(20);
				}

				$("#" + myTarget.id + "_AX_subMenu").css(css);
				$("#" + myTarget.id + "_AX_subMenu").show();

				this.showedItem[depth] = myTarget.id + "_AX_subMenu";
			}
		}
	},
	contextMenuItemDown: function (event, objSeq, objID) {
		var cfg = this.config;
		var obj = this.objects[objSeq];

		if (event.keyCode == AXUtil.Event.KEY_ESC) {
			this._close(objSeq, objID);
			return;
		}

		// event target search -
		var eid = event.target.id.split(/_AX_/g);
		var eventTarget = event.target;
		var myTarget = this.getEventTarget({
			evt: eventTarget, evtIDs: eid,
			find: function (evt, evtIDs) { return ($(evt).hasClass("contextMenuItem")) ? true : false; }
		});
		// event target search ------------------------

		if (myTarget) {

		} else {
			this._close(objSeq, objID);
		}
	},
	contextMenuItemClick: function (event, objSeq, objID) {
		var cfg = this.config;
		var obj = this.objects[objSeq];

		// event target search -
		var eid = event.target.id.split(/_AX_/g);
		var eventTarget = event.target;
		var myTarget = this.getEventTarget({
			evt: eventTarget, evtIDs: eid,
			find: function (evt, evtIDs) { return ($(evt).hasClass("contextMenuItem")) ? true : false; }
		});
		// event target search ------------------------

		if (myTarget) {
			var poi = myTarget.id.split(/_AX_/g);
			var depth = poi[poi.length - 2].number();
			var hashs = [];

			var mystrPosition = poi.length - 1;
			for (var r = 0; r < depth + 1; r++) {
				hashs.push(poi[mystrPosition]);
				mystrPosition -= 3;
			}
			hashs = hashs.reverse();

			var menu = obj.menu;
			$.each(hashs, function (idx, hash) {
				if (idx == 0) menu = menu[hash];
				else menu = menu.subMenu[hash];
			});

			if (menu.onclick) {
				menu.onclick.call({ menu: menu, sendObj: obj.sendObj }, objID);
			}
			this._close(objSeq, objID);
		}
	}
});
var AXContextMenu = new AXContextMenuClass();
AXContextMenu.setConfig({});

var AXPopOverClass = Class.create(AXContextMenuClass, {
	version: "AXPopOverClass v1.0",
	author: "tom@axisj.com",
	logs: [
		"2013-08-28 오후 6:16:46 - 시작 - tom"
	],
	open: function (myobj, position) {
		var cfg = this.config;
		var objSeq = null;
		$.each(this.objects, function (index, O) {
			if (O.id == myobj.id) {
				objSeq = index;
				//return false;
			} else {
				$("#" + O.id).remove();
			}
		});
		if (objSeq == null) {
			//trace("바인드 된 오브젝트를 찾을 수 없습니다.");
			return;
		}

		var obj = this.objects[objSeq];
		var objID = obj.id;

		if (myobj.sendObj) {
			obj.sendObj = myobj.sendObj;
		}

		if (this.observer) clearTimeout(this.observer); //닫기 명령 제거

		var direction = obj.direction || "top";

		if ($M(objID)) {
			if (position.clientX) {
				this.contentMenuSetCss(event, position, objSeq, objID);
			}
			return;
		}

		var theme = obj.theme || cfg.theme;
		var width = obj.width || cfg.width;

		//컨텍스트 메뉴의 위치 지정


		var arrowStyle = "";
		if (position.clientX) {
			arrowStyle = "background-position:10px 0px;"
		} else {
			if (position.arrowLeft) arrowStyle = "background-position:" + position.arrowLeft + "px 0px;"
		}

		$("#" + objID).remove();

		var filter = this.filter.bind(this);
		var getSubMenu = this.getSubMenu.bind(this);
		var po = [];
		po.push("<div id=\"" + objID + "\" class=\"" + theme + "\" style=\"width:" + width + "px;\">");
		po.push("<div class=\"arrowTop\" style=\"" + arrowStyle + "\"></div>");
		po.push("<div class=\"arrowBottom\" style=\"" + arrowStyle + "\"></div>");
		po.push("<div class=\"blockContainer\">");
		if (obj.menu) {
			$.each(obj.menu, function (idx, menu) {
				if (!menu) return false;
				if (filter(objSeq, objID, myobj, menu)) {
					if (menu.upperLine) {
						po.push("<div class=\"hline\"></div>");
					}
					var className = (menu.className) ? " " + menu.className : "";
					var hasSubMenu = (menu.subMenu) ? " hasSubMenu" : "";
					po.push("<a href=\"#AXexec\" class=\"contextMenuItem" + className + hasSubMenu + "\" id=\"" + objID + "_AX_contextMenu_AX_0_AX_" + idx + "\">");
					po.push(menu.label);
					if (menu.subMenu) {
						if (menu.subMenu.length > 0) {
							po.push("<div class=\"contextSubMenuIcon\"></div>");
						}
					}
					po.push("</a>");
					if (menu.subMenu) {
						if (menu.subMenu.length > 0) {
							po.push(getSubMenu(objID + "_AX_contextMenu_AX_0_AX_" + idx, objSeq, objID, myobj, menu.subMenu, 1));
						}
					}
					if (menu.underLine) {
						po.push("<div class=\"hline\"></div>");
					}
				}
			});
		} else if (obj.body) {
			po.push("<div class=\"contextMenuBody\">");
			po.push(obj.body);
			po.push("</div>");
		}
		po.push("</div>");
		po.push("</div>");
		$(document.body).append(po.join(''));

		if (direction == "top") {
			$("#" + objID).find(".arrowTop").show();
			$("#" + objID).find(".arrowBottom").hide();
		} else if (direction == "bottom") {
			$("#" + objID).find(".arrowTop").hide();
			$("#" + objID).find(".arrowBottom").show();
		} else {
			$("#" + objID).find(".arrowTop").show();
			$("#" + objID).find(".arrowBottom").hide();
		}

		$("#" + objID + " .contextMenuItem:first-child").addClass("first");
		$("#" + objID + " .contextMenuItem:last-child").addClass("last");

		var contextMenuItemMouseOver = this.contextMenuItemMouseOver.bind(this);
		this.contextMenuItemMouseOverBind = function (event) {
			contextMenuItemMouseOver(event, objSeq, objID);
		};
		var contextMenuMouseOut = this.contextMenuMouseOut.bind(this);
		this.contextMenuMouseOutBind = function (event) {
			contextMenuMouseOut(event, objSeq, objID);
		};

		var eventClear = function () {
			if (this.observer) clearTimeout(this.observer); //닫기 명령 제거
		}
		$("#" + objID + " .contextMenuItem").bind("mouseover", this.contextMenuItemMouseOverBind);
		$("#" + objID).bind("mouseover", eventClear.bind(this));
		$("#" + objID).bind("mouseout", this.contextMenuMouseOutBind);

		this.contentMenuSetCss(null, position, objSeq, objID);

		//var eventBind = this.eventBind.bind(this);
		this.eventBind(objSeq, objID);
		//setTimeout(function(){}, 1);
	},
	contentMenuSetCss: function (event, position, objSeq, objID) {
		var cfg = this.config;
		var obj = this.objects[objSeq];
		var direction = obj.direction || "top";
		var css = {};

		if (!position.clientX) {
			if (position.left != undefined) {
				css.left = position.left;
			} else {
				css.left = "auto";
				css.right = position.right;
			}
			css.top = position.top;
		} else {
			var mouse = this.getMousePositon(position);
			obj.eventPosition = true;
			css.left = mouse.pageX;
			css.left -= 20;
			css.top = mouse.pageY;
		}
		// -- 부모박스 정보와 박스 정보
		var pElement = $("#" + objID).offsetParent();
		var pBox = { width: pElement.width(), height: pElement.height() };
		var clientHeight = (AXUtil.docTD == "Q") ? document.body.scrollHeight : document.documentElement.scrollHeight;
		var clienWidth = (AXUtil.docTD == "Q") ? document.body.scrollWidth : document.documentElement.scrollWidth;
		if (clienWidth > pBox.width) pBox.width = clienWidth;
		if (clientHeight > pBox.height) pBox.height = clientHeight;
		var _box = { width: $("#" + objID).outerWidth(), height: $("#" + objID).outerHeight() };
		// -- 부모박스 정보와 박스 정보		
		var openTB = "";
		if (direction == "top") {
			openTB = "top";
		} else if (direction == "bottom") {
			css.top -= $("#" + objID).outerHeight();
			openTB = "bottom";
		} else {
			if ((_box.height.number() + css.top.number()) > pBox.height) {
				css.top = css.top - _box.height.number() - position.handleHeight - 3;
				$("#" + objID).find(".arrowTop").hide();
				$("#" + objID).find(".arrowBottom").show();
				//css.top -= ((_box.height.number() + css.top.number()) - pBox.height) + 5;
				openTB = "bottom";
			} else {
				$("#" + objID).find(".arrowTop").show();
				$("#" + objID).find(".arrowBottom").hide();
				openTB = "top";
			}
		}

		if (css.left != undefined) {
			if ((_box.width.number() + css.left.number()) > pBox.width) {
				var moveLeft = ((_box.width.number() + css.left.number()) - pBox.width) + 5;
				css.left -= moveLeft;
				if (openTB == "top") {
					$("#" + objID).find(".arrowTop").css({ "background-position": (moveLeft + 5) + "px 0px;" });
				} else {
					$("#" + objID).find(".arrowBottom").css({ "background-position": (moveLeft + 5) + "px 0px;" });
				}
			} else {

			}
		} else {

		}
		$("#" + objID).css(css);
	},
	contextMenuItemMouseOver: function (event, objSeq, objID) {
		var cfg = this.config;
		var obj = this.objects[objSeq];

		if (this.observer) clearTimeout(this.observer); //닫기 명령 제거

		var menuWidth = obj.width || cfg.width;
		// event target search -
		var eid = event.target.id.split(/_AX_/g);
		var eventTarget = event.target;
		var myTarget = this.getEventTarget({
			evt: eventTarget, evtIDs: eid,
			find: function (evt, evtIDs) { return ($(evt).hasClass("contextMenuItem")) ? true : false; }
		});
		// event target search ------------------------    	
		if (myTarget) {
			var poi = myTarget.id.split(/_AX_/g);
			var depth = poi[poi.length - 2];
			if (this.showedItem[depth]) {
				$("#" + this.showedItem[depth]).hide();
			}
			if ($(myTarget).hasClass("hasSubMenu")) {
				var subMenuTop = $("#" + myTarget.id).position().top;
				var css;
				if (this.openTB == "up") {
					var ph = $("#" + myTarget.id).offsetParent().height();
					var h = $("#" + myTarget.id).height();
					var bottom = ph - subMenuTop - h;
					css = { top: "auto", bottom: bottom };
				} else {
					css = { top: subMenuTop };
				}
				if (this.openLR == "left") {
					//css.left = -(menuWidth - 15);
					css.left = -(20);
				}
				$("#" + myTarget.id + "_AX_subMenu").css(css);
				$("#" + myTarget.id + "_AX_subMenu").show();

				this.showedItem[depth] = myTarget.id + "_AX_subMenu";
			}
		}
	},
	contextMenuMouseOut: function (event, objSeq, objID) {
		var close = this._close.bind(this);
		this.observer = setTimeout(function () {
			close(objSeq, objID);
		}, 200);
	}
});
var AXPopOver = new AXPopOverClass();
AXPopOver.setConfig({ theme: "AXPopOver" });

jQuery.fn.bindTooltip = function (config) {
	if (config == undefined) config = {};
	$.each(this, function () {
		var tooltipContent = $("#" + this.id + "_AX_tooltip").html();
		AXPopOver.bind({
			id: this.id + "_AX_tooltipobj",
			theme: (config.theme || "AXPopOverTooltip"), // 선택항목
			width: (config.width || ""), // 선택항목
			direction: (config.direction || "top"), // 선택항목
			body: tooltipContent
		});

		$(this).bind((config.event || "mouseover"), function () {
			var pos = $(this).offset();
			var direction = (config.direction || "top");
			var posTop = pos.top;
			if (direction == "bottom") {
				posTop -= 3;
			} else {
				posTop += $(this).outerHeight() + 3;
			}
			AXPopOver.open({ id: this.id + "_AX_tooltipobj", sendObj: {} }, { left: pos.left, top: posTop, handleHeight: ($(this).outerHeight().number() + 3) }); // event 직접 연결 방식
		});
		return this;
	});
};
/* ********************************************** AXContextMenu ** */

/* ** jQuery easing plugin ********************************************** */
jQuery.extend(true, {
	easing: {
		backIn: function (p, n, f, d) { var c = f + d; var s = 1.70158; return c * (p /= 1) * p * ((s + 1) * p - s) + f; },
		backOut: function (p, n, f, d) { var c = f + d; var s = 1.70158; return c * ((p = p / 1 - 1) * p * ((s + 1) * p + s) + 1) + f; },
		backInOut: function (p, n, f, d) { var c = f + d; var s = 1.70158; if ((p /= 0.5) < 1) return c / 2 * (p * p * (((s *= (1.525)) + 1) * p - s)) + f; else return c / 2 * ((p -= 2) * p * (((s *= (1.525)) + 1) * p + s) + 2) + f; },
		bounceIn: function (p, n, f, d) { var c = f + d; var inv = this.bounceOut(1 - p, 1, 0, d); return c - inv + f; },
		bounceOut: function (p, n, f, d) { var c = f + d; if (p < (1 / 2.75)) return c * (7.5625 * p * p) + f; else if (p < (2 / 2.75)) return c * (7.5625 * (p -= (1.5 / 2.75)) * p + .75) + f; else if (p < (2.5 / 2.75)) return c * (7.5625 * (p -= (2.25 / 2.75)) * p + .9375) + f; else return c * (7.5625 * (p -= (2.625 / 2.75)) * p + .984375) + f; },
		circIn: function (p, n, f, d) { var c = f + d; return -c * (Math.sqrt(1 - (p /= 1) * p) - 1) + f; },
		circOut: function (p, n, f, d) { var c = f + d; return c * Math.sqrt(1 - (p = p / 1 - 1) * p) + f; },
		circInOut: function (p, n, f, d) { var c = f + d; if ((p /= 0.5) < 1) return -c / 2 * (Math.sqrt(1 - p * p) - 1) + f; else return c / 2 * (Math.sqrt(1 - (p -= 2) * p) + 1) + f; },
		cubicIn: function (p, n, f, d) { var c = f + d; return c * (p /= 1) * p * p + f; },
		cubicOut: function (p, n, f, d) { var c = f + d; return c * ((p = p / 1 - 1) * p * p + 1) + f; },
		cubicInOut: function (p, n, f, d) { var c = f + d; if ((p /= 0.5) < 1) return c / 2 * p * p * p + f; else return c / 2 * ((p -= 2) * p * p + 2) + f; },
		elasticIn: function (p, n, f, d) { var c = f + d; if (p == 0) return f; if (p == 1) return c; var peroid = 0.25; var s; var amplitude = c; if (amplitude < Math.abs(c)) { amplitude = c; s = peroid / 4; } else { s = peroid / (2 * Math.PI) * Math.asin(c / amplitude); } return -(amplitude * Math.pow(2, 10 * (p -= 1)) * Math.sin((p * 1 - s) * (2 * Math.PI) / peroid)) + f; },
		elasticOut: function (p, n, f, d) { var c = f + d; if (p == 0) return f; if (p == 1) return c; var peroid = 0.25; var s; var amplitude = c; if (amplitude < Math.abs(c)) { amplitude = c; s = peroid / 4; } else { s = peroid / (2 * Math.PI) * Math.asin(c / amplitude); } return -(amplitude * Math.pow(2, -10 * p) * Math.sin((p * 1 - s) * (2 * Math.PI) / peroid)) + c; },
		expoIn: function (p, n, f, d) { var c = f + d; return (p == 0) ? f : c * Math.pow(2, 10 * (p - 1)) + f - c * 0.001; },
		expoOut: function (p, n, f, d) { var c = f + d; return (p == 1) ? c : d * 1.001 * (-Math.pow(2, -10 * p) + 1) + f; },
		expoInOut: function (p, n, f, d) { var c = f + d; if (p == 0) return f; if (p == 1) return c; if ((p /= 0.5) < 1) return c / 2 * Math.pow(2, 10 * (p - 1)) + f - c * 0.0005; else return c / 2 * 1.0005 * (-Math.pow(2, -10 * --p) + 2) + f; },
		quadIn: function (p, n, f, d) { var c = f + d; return c * (p /= 1) * p + f; },
		quadOut: function (p, n, f, d) { var c = f + d; return -c * (p /= 1) * (p - 2) + f; },
		quadInOut: function (p, n, f, d) { var c = f + d; if ((p /= 0.5) < 1) return c / 2 * p * p + f; else return -c / 2 * ((--p) * (p - 2) - 1) + f; },
		quartIn: function (p, n, f, d) { var c = f + d; return c * (p /= 1) * p * p * p + f; },
		quartOut: function (p, n, f, d) { var c = f + d; return -c * ((p = p / 1 - 1) * p * p * p - 1) + f; },
		quartInOut: function (p, n, f, d) { var c = f + d; if ((p /= 0.5) < 1) return c / 2 * p * p * p * p + f; else return -c / 2 * ((p -= 2) * p * p * p - 2) + f; },
		quintIn: function (p, n, f, d) { var c = f + d; return c * (p /= 1) * p * p * p * p + f; },
		quintOut: function (p, n, f, d) { var c = f + d; return c * ((p = p / 1 - 1) * p * p * p * p + 1) + f; },
		quintInOut: function (p, n, f, d) { var c = f + d; if ((p /= 0.5) < 1) return c / 2 * p * p * p * p * p + f; else return c / 2 * ((p -= 2) * p * p * p * p + 2) + f; },
		sineIn: function (p, n, f, d) { var c = f + d; return -c * Math.cos(p * (Math.PI / 2)) + c + f; },
		sineOut: function (p, n, f, d) { var c = f + d; return c * Math.sin(p * (Math.PI / 2)) + f; },
		sineInOut: function (p, n, f, d) { var c = f + d; return -c / 2 * (Math.cos(Math.PI * p) - 1) + f; }
	}
});
/* ********************************************** jQuery easing plugin ** */

/* ** jQuery misc plugin ***********************************************/
jQuery.fn.scrollToDiv = function (margin, boxDim, leftScroll) {
	var pElement = this.offsetParent();
	var pBox = { width: pElement.width(), height: pElement.height() };
	if (boxDim) {
		if (boxDim.width > 0) pBox.width = boxDim.width;
		if (boxDim.height > 0) pBox.height = boxDim.height;
	}
	var pos = this.position();
	if (!pos) return;
	if (margin) var m = { left: margin.left || 0, top: margin.top || 0, right: margin.right || 0, bottom: margin.bottom || 0 };
	else var m = { left: 0, top: 0, right: 0, bottom: 0 };
	var ePos = { left: pos.left + this.outerWidth(), top: pos.top + this.outerHeight() };
	var pEbox = { width: pBox.width - m.right, height: pBox.height - m.bottom }
	var pES = { left: pElement.scrollLeft(), top: pElement.scrollTop() }

	if (ePos.top > pEbox.height) {
		pElement.scrollTop(ePos.top - pEbox.height + pES.top + 1);
	} else if ((ePos.top - this.outerHeight() - m.top) < 0) {
		pElement.scrollTop(pES.top + (ePos.top - this.outerHeight() - m.top));
	} else {
		if (pElement[0].tagName == "BODY")
			window.scroll(0, pES.top + (ePos.top - m.top));
	}
	if (leftScroll) {
		if (ePos.left > pEbox.width) {
			pElement.scrollLeft(ePos.left - pEbox.width + pES.left + 1);
		} else if ((ePos.left - this.outerWidth() - m.left) < 0) {
			pElement.scrollLeft(pES.left + (ePos.left - this.outerWidth() - m.left));
		}
	}
	return this;
};
/* *********************************************** jQuery misc plugin **/


var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rinput = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
	rselectTextarea = /^(?:select|textarea)/i;

jQuery.fn.extend({
	serializeObject: function () {

		var myArray = this.map(function () {
			return this.elements ? jQuery.makeArray(this.elements) : this;
		})
		.filter(function () {
			return this.name && !this.disabled &&
				(this.checked || rselectTextarea.test(this.nodeName) ||
					rinput.test(this.type));
		})
		.map(function (i, elem) {
			var val = jQuery(this).val();
			//(elem.title || elem.placeholder || "")  //ie에서는 placeholder를 인식하지못함
			var label = ($(elem).attr("title") || $(elem).attr("placeholder") || "");
			return val == null ?
				null :
				jQuery.isArray(val) ?
					jQuery.map(val, function (val, i) {
						return { id: elem.id, name: elem.name, type: elem.type, value: val.replace(rCRLF, "\r\n"), label: label };
					}) :
					{ id: elem.id, name: elem.name, type: elem.type, value: val.replace(rCRLF, "\r\n"), label: label };
		}).get();
		return myArray;
	}
});

$(document.body).ready(function(){
	$("input[type=text]").bind("mousedown", function(){this.focus();});
	$("textarea").bind("mousedown", function(){this.focus();});
});
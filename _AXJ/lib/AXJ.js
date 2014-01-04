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
	function create() { var parent = null, properties = AX_A(arguments); if (Object.isFunction(properties[0])) parent = properties.shift(); function klass() { this.initialize.apply(this, arguments); } Object.extend(klass, Class.Methods); klass.superclass = parent; klass.subclasses = []; if (parent) { subclass.prototype = parent.prototype; klass.prototype = new subclass; parent.subclasses.push(klass); } for (var i = 0; i < properties.length; i++) klass.addMethods(properties[i]); if (!klass.prototype.initialize) klass.prototype.initialize = Prototype.emptyFunction; klass.prototype.constructor = klass; return klass; }
	function addMethods(source) { var ancestor = this.superclass && this.superclass.prototype; var properties = Object.keys(source); if (!Object.keys({ toString: true }).length) { if (source.toString != Object.prototype.toString) properties.push("toString"); if (source.valueOf != Object.prototype.valueOf) properties.push("valueOf"); } for (var i = 0, length = properties.length; i < length; i++) { var property = properties[i], value = source[property]; if (ancestor && Object.isFunction(value) && value.argumentNames().first() == "AXJ_super") { var method = value; value = (function (m) { return function () { return ancestor[m].apply(this, arguments); }; })(property).wrap(method); value.valueOf = method.valueOf.bind(method); value.toString = method.toString.bind(method); } this.prototype[property] = value; } return this; }
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
			case 'string': return object.axtoJSON(true);
		}
		if (object === null) return 'null';
		if (object.axtoJSON) return object.axtoJSON(isqoute);
		if (isElement(object)) return;
		var results = [];
		for (var property in object) {
			if (object.hasOwnProperty(property)) {
				var value = toJSON(object[property], isqoute);
				if (!isUndefined(value)) results.push(property.axtoJSON(isqoute) + ':' + value);
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
			case 'string': return object.axtoJSON(true);
		}
		if (object === null) return 'null';
		if (object.axtoJSON) return object.axtoJSON(isqoute);
		if (isElement(object)) return;
		var results = [];
		for (var property in object) {
			if (object.hasOwnProperty(property)) {
				var value = toJSONfn(object[property], isqoute);
				if (!isUndefined(value)) results.push(property.axtoJSON(isqoute) + ':' + value);
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
			case 'string': return object.axtoJSON(true);
		}
		if (object === null) return 'null';
		if (object.toJSONforMobile) return object.toJSONforMobile(true);
		if (isElement(object)) return;
		var results = [];
		for (var property in object) {
			if (object.hasOwnProperty(property)) {
				var value = axtoJSON(object[property]);
				if (!isUndefined(value)) results.push(property.axtoJSON(true) + ':' + value);
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
	function object() { try { var res = this.evalJSON(); } catch (e) { res = { error: "syntaxerr", result: "syntaxerr", msg: "to object error, " + e.print() + ", " + this }; try { mask.close(); } catch (e) { } } return res; }
	function array() { try { var res = this.split(/,/g); } catch (e) { res = { error: "syntaxerr", result: "syntaxerr", msg: "to object error, " + e.print() + ", " + this }; } return res; }
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
				var now = new Date();
				return (defaultDate || new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12));
			}
		} else { // > 10
			var now = new Date();
			return (defaultDate || new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12));
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

		cStr = cStr.replace(/[\s]*onclick[^=]*=/gi, " xonclick=");
		cStr = cStr.replace(/[\s]*onmouserover[^=]*=/gi, " xonmouseover=");
		cStr = cStr.replace(/[\s]*onmouseout[^=]*=/gi, " xonmouseout=");
		cStr = cStr.replace(/[\s]*onchange[^=]*=/gi, " xonchange=");
		cStr = cStr.replace(/[\s]*onblur[^=]*=/gi, " xonblur=");
		cStr = cStr.replace(/[\s]*onerror[^=]*=/gi, " xonerror=");
		cStr = cStr.replace(/[\s]*onload[^=]*=/gi, " xonload=");
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
	function axtoJSON(TF) {
		return this.inspect(TF || false);
	}
	function blank() { return /^\s*$/.test(this); }
	function isJSON() { var str = this; if (str.isBlank()) return false; str = this.replace(/\\./g, '@').replace(/"[^"\\\n\r]*"/g, ''); return (/^[,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]*$/).test(str); } //"
	function unfilterJSON(filter) { return this.replace(filter || AXUtil.JSONFilter, '$1'); }
	function evalJSON(sanitize) { var json = this.unfilterJSON(); try { if (!sanitize || json.isJSON()) return eval("(" + json + ")"); else return { error: "syntaxerr", result: "syntaxerr", msg: "JSON syntax error. fail to convert Object\n" + this }; } catch (e) { return { error: "syntaxerr", result: "syntaxerr", msg: "JSON syntax error.\n" + this, body: this }; } }
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
			jQuery.each(localNums, function () {
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
	function getAnchorData() {
		var idx = this.indexOf("#", 0);
		if (idx < 0) return "";
		var cnt = this.length;
		var str = this.substring(idx + 1, cnt);
		return str;
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
		axtoJSON: axtoJSON,
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
		getAnchorData: getAnchorData,
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
	function axtoJSON() { return this; }
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
		axtoJSON: axtoJSON,
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
			/*if (mm == 0 && dd == 1) yy += 1;*/
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
		var dd1 = new Date(y1, m1, d1, hh1, mm1, this.getSeconds());

		var day2 = edDate.date();
		var y2 = day2.getFullYear();
		var m2 = day2.getMonth();
		var d2 = day2.getDate();
		var hh2 = day2.getHours();
		var mm2 = day2.getMinutes();
		var dd2 = new Date(y2, m2, d2, hh2, mm2, this.getSeconds());

		if (tp != undefined) {
			if (tp == "D") {
				DyMilli = ((1000 * 60) * 60) * 24;
				dd2 = new Date(y2, m2, d2, hh1, mm1, this.getSeconds());
			} else if (tp == "H") {
				DyMilli = ((1000 * 60) * 60);
			} else if (tp == "mm") {
				DyMilli = (1000 * 60);
			} else {
				DyMilli = ((1000 * 60) * 60) * 24;
				dd2 = new Date(y2, m2, d2, hh1, mm1, this.getSeconds());
			}
		}

		return ((dd2.getTime() - dd1.getTime()) / DyMilli).floor();

	}
	function toString(format) {
		if (format == undefined) {
			var sSeper = "-";
			return this.getUTCFullYear() + sSeper + (this.getMonth() + 1).setDigit(2) + sSeper + this.getDate().setDigit(2);
		} else {
			var fStr = format;
			var nY, nM, nD, nH, nMM, nS, nDW;
			nY = this.getUTCFullYear();
			nM = (this.getMonth() + 1).setDigit(2);
			nD = this.getDate().setDigit(2);
			nH = this.getHours().setDigit(2);
			nMM = this.getMinutes().setDigit(2);
			nS = this.getSeconds().setDigit(2);
			nDW = this.getDay();

			var yre = /[^y]*(y{0,4})[^y]*/gi; yre.test(fStr); var regY = RegExp.$1;
			var mre = /[^m]*(m{2})[^m]*/gi; mre.test(fStr); var regM = RegExp.$1;
			var dre = /[^d]*(d{1,2})[^d]*/gi; dre.test(fStr); var regD = RegExp.$1;
			var hre = /[^h]*(h{2})[^d]*/gi; hre.test(fStr); var regH = RegExp.$1;
			var mire = /[^mi]*(mi)[^mi]*/gi; mire.test(fStr); var regMI = RegExp.$1;
			var sre = /[^s]*(s{2})[^s]*/gi; sre.test(fStr); var regS = RegExp.$1;
			var dwre = /[^d]*(dw)[^w]*/gi; dwre.test(fStr); var regDW = RegExp.$1;

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
			if (regS) {
				fStr = fStr.replace(regDW, AXConfig.weekDays[nDW].label);

			}
			return fStr;
		}
	}

	function getTimeAgo() {

		var rtnStr = ""
		var nMinute = Math.abs((new Date()).diff(this, "mm"));

		var wknames = []
		wknames.push("일", "월", "화", "수", "목", "금", "토");

		if (isNaN(nMinute)) {
			rtnStr = "알수없음";
		} else {
			if (parseInt(nMinute / 60 / 24) >= 1) {
				rtnStr = this.print("yyyy년 mm월 dd일") + " " + wknames[this.getDay()];
			} else {
				rtnStr = nMinute;

				if ((nMinute / 60) > 1) {
					rtnStr = parseInt(nMinute / 60) + "시간 " + (nMinute % 60) + "분 전";
				} else {
					rtnStr = nMinute + "분 전";
				}
			}
		}
		return rtnStr;
	}

	function date() { return this; }
	function axtoJSON() { return '"' + this.getUTCFullYear() + '-' + (this.getUTCMonth() + 1).setDigit(2) + '-' + this.getUTCDate().setDigit(2) + 'T' + this.getUTCHours().setDigit(2) + ':' + this.getUTCMinutes().setDigit(2) + ':' + this.getUTCSeconds().setDigit(2) + 'Z"'; }
	return {
		add: dateAdd,
		diff: dayDiff,
		print: toString,
		date: date,
		axtoJSON: axtoJSON,
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
	function axtoJSON(qoute) {
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
		jQuery.each(this, function (index, O) {
			if (!callBack.call({ index: index, item: O }, index, O)) collect.push(O);
		});
		return collect;
	}
	function search(callBack) {
		var _self = this;
		var collect = [];
		jQuery.each(this, function (index, O) {
			if (callBack.call({ index: index, item: O }, index, O)) collect.push(O);
		});
		return collect.length;
	}
	function getObject(callBack) {
		var _self = this;
		var collect = [];
		jQuery.each(this, function (index, O) {
			if (callBack.call({ index: index, item: O }, index, O)) collect.push(O);
		});
		return collect;
	}
	function hasObject(callBack) {
		var _self = this;
		var collect = null;
		jQuery.each(this, function (index, O) {
			if (callBack.call({ index: index, item: O }, index, O)) {
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
	function convertTree(parentKey, childKey, hashDigit) {
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
				jQuery.each(pHashs, function (idx, T) {
					if (idx > 0) {
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
	function getIndex(context) {
		if (!Object.isFunction(context)) {
			findObj = context;
			context = function (x) { return (x == findObj); }
		}
		var findObject, findIndex;
		var i = 0;
		while (i < this.length) {
			var sobj = {
				index: i,
				item: this[i]
			};
			if (context.call(sobj, sobj)) {
				findObject = this[i];
				findIndex = i;
				break;
			}
			i++;
		}
		return { item: findObject, index: findIndex };
	}

	return {
		clear: clear,
		first: first,
		last: last,
		getToSeq: getToSeq,
		axtoJSON: axtoJSON,
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
		getIndex: getIndex,
		convertTree: convertTree
	}
})());

/* **************************** extend implement block ** */

//JSON.stringify = Object.toJSON;
function AXgetId(id) { return document.getElementById(id); }
function AX_A(iterable) { if (!iterable) return []; if ('toArray' in Object(iterable)) return iterable.toArray(); var length = iterable.length || 0, results = new Array(length); while (length--) results[length] = iterable[length]; return results; }

/* jQuery 1.9 bug fix */
var AXConfig = {
	weekDays: [
		{ label: "일" },
		{ label: "월" },
		{ label: "화" },
		{ label: "수" },
		{ label: "목" },
		{ label: "금" },
		{ label: "토" }
	],
	AXReq: {
		async: true, // AJAX 비동기 처리 여부
		okCode: "ok", // 통신 성공 코드
		responseType: "", // AJAX responseType
		dataType: "", // AJAX return Data type
		contentType: "application/x-www-form-urlencoded; charset=UTF-8", // AJAX contentType
		dataSendMethod: "parameter", // AJAX parameter send type
		crossDomain: false,
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
		emptyListMSG: "목록이 없습니다."
	},
	AXTree: {
		fitToWidthRightMargin: 10,
		fitToWidth: false,
		pageSize: 10,
		pageHeight: 400,
		keyResult: "result",
		keyTree: "tree",
		keyList: "list",
		emptyListMSG: "목록이 없습니다."
	},
	AXProgress: {
		cancelMsg: "프로세스를 취소 하시겠습니까?"
	},
	AXUpload5: {
		buttonTxt: "Upload files",
		deleteConfirm: "정말 삭제하시겠습니까?",
		uploadSelectTxt: "업로드 하실 파일을 선택해주세요.",
		dropZoneTxt: "업로드할 파일을 여기에 놓습니다."
	},
	AXModal: {
		contentDivClass: "bodyHeightDiv"
	},
	AXInput: {
		errorPrintType: "toast",
		selectorOptionEmpty: "목록이 없습니다."
	},
	AXContextMenu: {
		title:"선택하세요"
	},
	mobile: {
		responsiveWidth: 640
	}
};

var AXUtil = {
	async: true,
	ajaxOkCode: "ok",
	ajaxResponseType: "",
	ajaxDataType: "",
	gridPassiveMode: false,
	gridPassiveRemoveHide: false,
	gridFitToWidthRightMargin: 10,

	browser: (function () {
		var ua = navigator.userAgent.toLowerCase();
		var mobile = (ua.search(/mobile/g) != -1) ? true : false;
		if (ua.search(/iphone/g) != -1) {
			return { name: "iphone", version: 0, mobile: true }
		} else if (ua.search(/ipad/g) != -1) {
			return { name: "ipad", version: 0, mobile: true }
		} else if (ua.search(/android/g) != -1) {
			var match = /(android)[ \/]([\w.]+)/.exec(ua) ||
				[];
			var browserVersion = (match[2] || "0");
			return { name: "android", version: browserVersion, mobile: mobile }
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
		//return Object.clone(obj);
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
	clientHeight: function () {
		return (AXUtil.docTD == "Q") ? document.body.clientHeight : document.documentElement.clientHeight;
	},
	scrollHeight: function () {
		return (AXUtil.docTD == "Q") ? document.body.scrollHeight : document.documentElement.scrollHeight;
	},
	clientWidth: function () {
		return (AXUtil.docTD == "Q") ? document.body.clientWidth : document.documentElement.clientWidth;
	},
	scrollWidth: function () {
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
		if (arguments.length > 1) {
			for (i = 0; i < arguments.length; i++) {
				var obji = arguments[i];
				var objStr = "";
				var type = (typeof obji).toLowerCase();
				if (type == "undefined" || type == "function") {
					objStr = type;
				} else if (type == "boolean" || type == "number" || type == "string") {
					objStr = obji;
				} else if (type == "object") {
					objStr = Object.toJSON(obji);
				}
				if (po != "") po += ", ";
				po += "arg[" + i + "] : " + objStr;
			}
		} else {
			var type = (typeof obj).toLowerCase();
			if (type == "undefined" || type == "function") {
				po = type;
			} else if (type == "boolean" || type == "number" || type == "string") {
				po = obj;
			} else if (type == "object") {
				po = Object.toJSON(obj);
			}
		}

		if(AXUtil.mobileConsole){
			AXUtil.mobileConsole.append("<div>" + po + "</div>");
		}else{
			if (window.console == undefined) {
			} else {
				try {
					console.log(po);
				} catch (e) {
					alert(e);
				}
			}
		}
	},
	alert: function (obj) {
		var po = "";
		if (arguments.length > 1) {
			for (i = 0; i < arguments.length; i++) {
				var obji = arguments[i];
				var objStr = "";
				var type = (typeof obji).toLowerCase();
				if (type == "undefined" || type == "function") {
					objStr = type;
				} else if (type == "boolean" || type == "number" || type == "string") {
					objStr = obji;
				} else if (type == "object") {
					objStr = Object.toJSON(obji);
				}
				if (po != "") po += ", ";
				po += "arguments[" + i + "] : " + objStr;
			}
		} else {
			var type = (typeof obj).toLowerCase();
			if (type == "undefined" || type == "function") {
				po = type;
			} else if (type == "boolean" || type == "number" || type == "string") {
				po = obj;
			} else if (type == "object") {
				po = Object.toJSON(obj);
			}
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
		return (val === "" || val == null || val == undefined) ? true : false;
	},
	getUrlInfo: function () {

		var url, url_param, param, referUrl, pathName, AXparam, pageProtocol, pageHostName;
		url_param = window.location.href;
		param = window.location.search;
		referUrl = document.referrer;
		pathName = window.location.pathname;
		url = url_param.replace(param, '');
		param = param.replace(/^\?/, '');
		pageProtocol = window.location.protocol;
		pageHostName = window.location.hostname;

		AXparam = url_param.replace(pageProtocol + "//", "");
		if (param) {
			AXparam = AXparam.replace(pageHostName + pathName + "?" + param, "");
		} else {
			AXparam = AXparam.replace(pageHostName + pathName, "");
		}

		pageInfo = {};
		pageInfo.url = url;
		pageInfo.param = param;
		pageInfo.anchorData = AXparam;
		pageInfo.urlParam = url_param;
		pageInfo.referUrl = referUrl;
		pageInfo.pathName = pathName;
		pageInfo.protocol = pageProtocol;
		pageInfo.hostName = pageHostName;

		return pageInfo;
	},
	encParam: function (str) {
		var re = new RegExp("[^&?]*?=[^&?]*", "ig");
		var pars = [];
		var arr;
		while ((arr = re.exec(str)) != null) {
			var strContent = arr.toString();
			var dotIndex = strContent.indexOf("=");
			pars.push(strContent.substring(0, dotIndex) + "=" + strContent.substring(dotIndex + 1).enc());
		}
		return pars.join("&");
	},
	readyMobileConsole: function(){
		AXUtil.mobileConsole = jQuery("<div class=\"AXMobileConsole\"></div>");
		jQuery(document.body).append(AXUtil.mobileConsole);
	}
};
var trace = AXUtil.console;
var getUrlInfo = AXUtil.getUrlInfo;
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
			hashSpliter: "_",
			href: "href=\"javascript:;\""
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
	changeConfig: function (configs) {
		var _self = this;
		if (configs) jQuery.each(configs, function (k, v) { _self.config[k] = v; });
	},
	getEventTarget: function (arg) {
		var eventTarget = arg.evt;
		var eid = (eventTarget && eventTarget.id && eventTarget.id != "") ? eventTarget.id.split(/_AX_/g) : [];
		if (eventTarget) {
			while (!arg.find(eventTarget, eid)) {
				if (!eventTarget.parentNode) { eventTarget = null; break; }
				if (arg.until) { if (arg.until(eventTarget, eid)) { eventTarget = null; break; } }
				if (eventTarget.parentNode) {
					eventTarget = eventTarget.parentNode;
					try {
						eid = (eventTarget && eventTarget.id && eventTarget.id != "") ? eventTarget.id.split(/_AX_/g) : [];
					} catch (e) {
						eid = [];
					}
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
	},
	stopEvent: function (event) {
		if (event.preventDefault) event.preventDefault();
		if (event.stopPropagation) event.stopPropagation();
		event.cancelBubble = true;
		return false;
	},
	clearRange: function () {
		if (window.getSelection) {
			if (window.getSelection().empty) {  // Chrome
				window.getSelection().empty();
			} else if (window.getSelection().removeAllRanges) {  // Firefox
				window.getSelection().removeAllRanges();
			}
		} else if (document.selection) {  // IE?
			document.selection.empty();
		}
	},
	windowResize: function () {
		var windowResizeApply = this.windowResizeApply.bind(this);
		if (this.windowResizeObserver) clearTimeout(this.windowResizeObserver);
		this.windowResizeObserver = setTimeout(function () {
			windowResizeApply();
		}, 100);
	},
	windowResizeApply: function () {

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

		if (AXConfig.AXReq.dataSendMethod != "json") {

		} else {
			if (typeof myQue.configs.pars == "object") {
				myQue.configs.pars.dummy = AXUtil.timekey();
			} else if (typeof myQue.configs.pars == "string") {
				if (myQue.configs.pars == "") myQue.configs.pars += "dummy=" + AXUtil.timekey();
				else myQue.configs.pars += "&dummy=" + AXUtil.timekey();
			}
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

		this.que[0]._jQueryAjax = jQuery.ajax(ajaxOption);
	},
	onsucc: function (req) {
		if (req != undefined) {
			var myQue = this.que.first();
			try {
				if (myQue.configs.debug) trace("onsucc" + req);
				if (myQue.configs.responseType == "text/html") {
					var res = req;
				} else {
					if ((typeof req) == "string") {
						var res = req.object();
					} else {
						var res = AXConfig.AXReq.resultFormatter.call(req);
					}
				}

				if (res.result == "syntaxerr") {
					if (myQue.configs.onerr) myQue.configs.onerr(res);
				} else {
					if (myQue.configs.onsucc) myQue.configs.onsucc(res);
				}
			} catch (e) {
				if (myQue.configs.responseType == "text/html") {

				} else {
					res.e = e;
				}
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
	},
	abort: function(){
		try{
			this.que[0]._jQueryAjax.abort();
		}catch(e){
			
		}
	}
});
var myAXreqQue = new AXReqQue();
var AXReqAbort = function(){
	myAXreqQue.abort();
};
var AXReq = Class.create({
	version: "AXReq v1.0",
	author: "tom@axisj.com",
	logs: [
		"2012-09-28 오후 2:58:32 - 시작"
	],
	initialize: function (url, configs) {
		if (window.location.toString().left(4) != "http") {
			//dialog.push("현재 파일시스템으로 샘플 코드를 보고 계십니다. ajax 통신 관련한 기능은 정상 작동하지 않게 됩니다. ");
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
	initialize: function (AXJ_super) {
		AXJ_super();
		this.selects = [];
		this.config.maskClassName = "AXMask";
		this.config.content = "disable content";
		this.config.maskZindex = "2000";
		this.blinkTrack = [];
	},
	init: function () {
		this.mask = jQuery("<div class=\"" + this.config.maskClassName + "\" style=\"z_index:" + this.config.maskZindex + "\"></div>");
	},
	open: function (configs) {
		jQuery(document.body).append(this.mask);
		var bodyHeight = 0;
		(AXUtil.docTD == "Q") ? bodyHeight = document.body.clientHeight : bodyHeight = document.documentElement.clientHeight;
		
		if(configs){
			if(!configs.onclick) configs.onclick = configs.onClick;
			if(configs.onclick){
				this.mask.bind("click.AXMask", configs.onclick);
			}
		}
	},
	
	close: function (delay) {
		if (!delay) {
			this.mask.unbind("click.AXMask");
			this.mask.remove();
		} else {
			var maskHide = this.hide.bind(this);
			setTimeout(maskHide, delay);
		}
		this.blinkTrack.clear();
	},
	hide: function () {
		this.mask.unbind("click.AXMask");
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
	initialize: function (AXJ_super) {
		AXJ_super();
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
			this.toastTray = jQuery("<div class=\"AXNotificationTray\" id=\"" + config.targetID + "\"></div>");
		} else if (config.type == "dialog") {
			this.dialogTray = jQuery("<div class=\"AXNotificationTrayDialog\" id=\"" + config.targetID + "\"></div>");
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
				jQuery.each(obj.buttons, function (index, B) {
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
			if (!AXgetId(config.targetID)) jQuery(document.body).append(this.toastTray);
			this.bread.push({ breadID: breadID, type: obj.type, html: po.join('').enc() });
			this.insertBread();
		} else if (config.type == "dialog") {
			if (!AXgetId(config.targetID)) jQuery(document.body).append(this.dialogTray);
			this.dialogTray.prepend(po.join(''));

			mask.open();
			var bodyWidth = (AXUtil.docTD == "Q") ? document.body.clientWidth : document.documentElement.clientWidth;
			var l = bodyWidth / 2 - this.dialogTray.width() / 2;
			this.dialogTray.css({ left: l + "px" });
			jQuery("#bread_AX_" + breadID).fadeIn();

			var endCheck = this.endCheck.bind(this);

			//Confirm button
			jQuery("#bread_AX_" + breadID + "_AX_confirm").bind("click", function () {
				if (obj.onConfirm) obj.onConfirm(obj.data);
				jQuery("#bread_AX_" + breadID).fadeOut({
					duration: config.easing.close.duration, easing: config.easing.close.easing, complete: function () {
						jQuery("#bread_AX_" + breadID).remove();
						endCheck();
					}
				});
			});

			//AXBUTTON
			jQuery(".AXNotificationButtons").find(".AXButton").bind("click", function (event) {
				var eid = event.target.id.split(/_AX_/g);
				var myBreadID = eid[1];
				var buttonSeq = eid.last();
				if (obj.buttons) {
					if (obj.buttons[buttonSeq]) {
						if (obj.buttons[buttonSeq].onClick) obj.buttons[buttonSeq].onClick(obj.buttons[buttonSeq].data);
					}
				}
				jQuery("#bread_AX_" + myBreadID).fadeOut({
					duration: config.easing.close.duration, easing: config.easing.close.easing, complete: function () {
						jQuery("#bread_AX_" + myBreadID).remove();
						endCheck();
					}
				});
			});

			jQuery(".AXNotificationButtons").find(".AXButton").get(0).focus();

			jQuery(document.body).unbind("keyup."+breadID).bind("keyup."+breadID, function(event){
				if(event.keyCode == AXUtil.Event.KEY_ESC){
					jQuery("#bread_AX_" + breadID).fadeOut({
						duration: config.easing.close.duration, easing: config.easing.close.easing, complete: function () {
							jQuery("#bread_AX_" + breadID).remove();
							endCheck(breadID);
						}
					});
				}
			});
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
		jQuery("#" + config.targetID).prepend(myQue.html.decode());
		jQuery("#bread_AX_" + breadID + "_AX_confirm").bind("click", function () {
			jQuery("#bread_AX_" + breadID).fadeOut({
				duration: config.easing.close.duration, easing: config.easing.close.easing, complete: function () {
					jQuery("#bread_AX_" + breadID).remove();
					endCheck();
				}
			});
		});

		jQuery("#bread_AX_" + breadID).slideDown({
			duration: config.easing.open.duration, easing: config.easing.open.easing, complete: function () {
				nextBread();
				//jQuery("#msg").html(jQuery("#msg").html()+"<br/>"+AXgetId("bread_AX_"+breadID)+"/"+breadID);
				if (myQue.type != "Caution") {
					setTimeout(function () {
						jQuery("#bread_AX_" + breadID).fadeOut({
							duration: config.easing.close.duration, easing: config.easing.close.easing, complete: function () {
								jQuery("#bread_AX_" + breadID).remove();
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
	endCheck: function (breadID) {
		if (jQuery("#" + this.config.targetID).html() == "") {
			this.lasBreadSeq = 0;
			if (this.config.type == "dialog") {
				mask.close();	
				if(breadID) jQuery(document.body).unbind("keyup."+breadID);
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
	version: "AXScroll v1.4",
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
		"2013-08-01 오후 4:54:17 mobile touch 버그픽스 - tom ",
		"2013-10-16 오후 6:45:48 mobile 스크롤 속도문제 패치 - tom",
		"2013-11-28 오전 11:23:11 tom - AX scrollTop 메소드 추가",
		"2013-12-12 오전 10:25:28 tom - moveTo 메소드 추가"
	],
	initialize: function (AXJ_super) {
		AXJ_super();
		this.config.CT_className = "AXScroll";
		this.config.ST_className = "scrollTarget";
		this.scrollBarMove = false;
		this.scrollBarAttr = {};
		this.Observer = null;
		this.config.yscroll = true;
		this.config.xscroll = false;

		this.minHeightSB = { TF: false, h: 0 };
		this.minWidthSB = { TF: false, w: 0 };
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
		this.scrollTargetID = jQuery("#" + config.targetID);
		this.scrollScrollID = jQuery("#" + config.scrollID);
		this.scrollTargetID.addClass(this.config.CT_className);
		this.scrollScrollID.addClass(this.config.ST_className);
		this.initScroll();
		this.bindEvent();
	},
	updateScroll: function () {
		this.initScroll();
	},
	initScroll: function () {
		var cfg = this.config;
		if (!this.scroll) {
			var po = [];
			if (cfg.yscroll) {
				po.push("<div class=\"scrollTrack\" id=\"" + cfg.targetID + "_AX_scrollTrack\"></div>");
				po.push("<div class=\"scrollBar\" id=\"" + cfg.targetID + "_AX_scrollBar\"></div>");
			} else {
				this.scrollTargetID.css({ height: this.scrollScrollID.outerHeight() });
			}
			if (cfg.xscroll) {
				po.push("<div class=\"xscrollTrack\" id=\"" + cfg.targetID + "_AX_xscrollTrack\"></div>");
				po.push("<div class=\"xscrollBar\" id=\"" + cfg.targetID + "_AX_xscrollBar\"></div>");
			}

			this.scrollTargetID.append(po.join(''));
			this.scroll = true;

			if (cfg.yscroll) {
				this.scrollTrack = jQuery("#" + cfg.targetID + "_AX_scrollTrack");
				this.scrollBar = jQuery("#" + cfg.targetID + "_AX_scrollBar");
			}
			if (cfg.xscroll) {
				this.xscrollTrack = jQuery("#" + cfg.targetID + "_AX_xscrollTrack");
				this.xscrollBar = jQuery("#" + cfg.targetID + "_AX_xscrollBar");
			}
		} else {
			if (!cfg.yscroll) {
				this.scrollTargetID.css({ height: this.scrollScrollID.outerHeight() });
			}
		}

		var CTheight = this.scrollTargetID.innerHeight();
		var CTwidth = this.scrollTargetID.innerWidth();

		if (cfg.yscroll) {
			this.scrollTrack.css({ height: CTheight - 4 });
		}
		if (cfg.xscroll) {
			this.xscrollTrack.css({ width: CTwidth - 4 });
		} else {
			this.scrollScrollID.css({ width: CTwidth });
		}

		var Cheight = this.scrollScrollID.outerHeight();
		var Cwidth = this.scrollScrollID.outerWidth();


		if (cfg.yscroll) {
			var SBheight = CTheight * (CTheight - 4) / Cheight;
			this.scrollBar.css({ height: Math.ceil(SBheight) });
			if (SBheight < 10) {
				this.minHeightSB.TF = true;
				this.minHeightSB.h = SBheight;
			}
			if (CTheight == Cheight || CTheight > Cheight) {
				this.scrollTrack.hide();
				this.scrollBar.hide();
			} else {
				this.scrollTrack.show();
				this.scrollBar.show();
			}
		}
		if (cfg.xscroll) {
			var SBwidth = CTwidth * (CTwidth - 4) / Cwidth;
			this.xscrollBar.css({ width: Math.ceil(SBwidth) });
			if (SBwidth < 10) {
				this.minWidthSB.TF = true;
				this.minWidthSB.w = SBwidth;
			}
			if (CTwidth == Cwidth || CTwidth > Cwidth) {
				this.xscrollTrack.hide();
				this.xscrollBar.hide();
			} else {
				this.xscrollTrack.show();
				this.xscrollBar.show();
			}
		}
	},
	resizeScroll: function () {
		this.initScroll();
	},
	bindEvent: function () {
		var cfg = this.config;

		var CTheight = this.scrollTargetID.innerHeight();
		var Cheight = this.scrollScrollID.outerHeight();

		if (cfg.xscroll) {
			var CTwidth = this.scrollTargetID.innerWidth();
			var Cwidth = this.scrollScrollID.outerWidth();
		}

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
		/* event 선언자 */

		this.scrollTargetID.bind("mouseover", this.tractActiveBind);
		this.scrollTargetID.bind("mouseout", this.tractInActiveBind);

		if (cfg.yscroll) {
			this.scrollBar.bind("dragstart", this.cancelEventBind);
			this.scrollBar.bind("mousedown", this.SBonMouseDownBind);
		}

		if (cfg.xscroll) {
			var SBonMouseDownX = this.SBonMouseDownX.bind(this);
			this.SBonMouseDownXBind = function (event) {
				SBonMouseDownX(event);
			}
			var SBonMouseMoveX = this.SBonMouseMoveX.bind(this);
			this.SBonMouseMoveXBind = function (event) {
				SBonMouseMoveX(event);
			}
			var SBonMouseUpX = this.SBonMouseUpX.bind(this);
			this.SBonMouseUpXBind = function (event) {
				SBonMouseUpX(event);
			}

			this.xscrollBar.bind("dragstart", this.cancelEventBind);
			this.xscrollBar.bind("mousedown", this.SBonMouseDownXBind);
		}

		var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel";
		if (document.attachEvent) { //if IE (and Opera depending on user setting)
			if (AXgetId(cfg.targetID)) AXgetId(cfg.targetID).attachEvent("on" + mousewheelevt, this.SBonWheelBind);
		} else if (document.addEventListener) { //WC3 browsers
			if (AXgetId(cfg.targetID)) AXgetId(cfg.targetID).addEventListener(mousewheelevt, this.SBonWheelBind, false);
		}
		if (document.addEventListener) {
			var touchstart = this.touchstart.bind(this);
			this.touchstartBind = function () {
				touchstart();
			};
			if (AXgetId(cfg.targetID)){
				AXgetId(cfg.targetID).addEventListener("touchstart", this.touchstartBind, false);
			}			
		}
	},
	tractActive: function (event) {
		var cfg = this.config;

		if (cfg.yscroll) {
			this.scrollBar.addClass("scrollBar_hover");
			this.scrollTrack.addClass("scrollTrack_hover");
		}

		if (cfg.xscroll) {
			this.xscrollBar.addClass("xscrollBar_hover");
			this.xscrollTrack.addClass("xscrollTrack_hover");
		}

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
		var pos = (this.scrollTrack) ? this.scrollTrack.offset() : { left: 0, top: 0 };
		var posx = (this.xscrollTrack) ? this.xscrollTrack.offset() : { left: 0, top: 0 };

		var x = (event.pageX - posx.left);
		var y = (event.pageY - pos.top);
		return { x: x, y: y };
	},
	getTouchPosition: function (event) {
		/* 사용안함. 옵션 */
		var config = this.config;
		var touch = event.touches[0];
		var pos = this.scrollTrack.offset();
		if (this.config.touchDirection) { 
			var x = (touch.pageX - pos.left);
			var y = (touch.pageY - pos.top);
		} else {
			var x = (-touch.pageX - pos.left);
			var y = (-touch.pageY - pos.top);
		}
		return { x: x, y: y };
	},


	/* touch event init --- s */
	touchstart: function (e) {
		var cfg = this.config;
		var touch;
		var event = window.event;
		touch = event.touches[0];
		if (!touch.pageX) return;
		
		this.touchStartXY = {
			sTime: ((new Date()).getTime() / 1000),
			sTop: this.scrollScrollID.position().top,
			sLeft: this.scrollScrollID.position().left,
			scrollWidth: this.scrollScrollID.outerWidth(),
			scrollHeight: this.scrollScrollID.outerHeight(),
			targetWidth: this.scrollTargetID.outerWidth(),
			targetHeight: this.scrollTargetID.outerHeight(),
			x: touch.pageX,
			y: touch.pageY
		};

		var touchEnd = this.touchEnd.bind(this);
		this.touchEndBind = function () {
			touchEnd(event);
		};	
		var touchMove = this.touchMove.bind(this);
		this.touchMoveBind = function () {
			touchMove(event);
		};
		
		if (document.removeEventListener) {
			document.removeEventListener("touchend", this.touchEndBind, false);
			document.removeEventListener("touchmove", this.touchMoveBind, false);
		}
		if (document.addEventListener) {
			document.addEventListener("touchend", this.touchEndBind, false);
			document.addEventListener("touchmove", this.touchMoveBind, false);
		}
		
		var minLeft = 0;
		var maxLeft = - (this.touchStartXY.scrollWidth - this.touchStartXY.targetWidth);
		var minTop = 0;
		var maxTop = - (this.touchStartXY.scrollHeight - this.touchStartXY.targetHeight);
		var scrollPosition = this.scrollScrollID.position();
		if(scrollPosition.left > minLeft && scrollPosition.left < maxLeft && scrollPosition.top > minTop && scrollPosition.top < maxTop){
			this.scrollScrollID.stop();
		}
		this.tractActive();
	},
	touchMove: function (e) {
		if (this.touhEndObserver) clearTimeout(this.touhEndObserver);
		if (this.touhMoveObserver) clearTimeout(this.touhMoveObserver);
		var cfg = this.config;
		
		var touch;
		var event = window.event;
		touch = event.touches[0];
		if (!touch.pageX) return;
		
		if ((this.touchStartXY.x - touch.pageX).abs() < (this.touchStartXY.y - touch.pageY).abs()) {
			if (cfg.yscroll && this.touchStartXY.scrollHeight > this.touchStartXY.targetHeight) {
				this.touchMode = "ns";
				var touchDirection = ((this.touchStartXY.y - touch.pageY) <= 0) ? "T" : "B"; /* 위아래 이동 */

				if(touchDirection != this.touchDirection){
					this.touchMoveAfter(touch);
				}

				this.touchDirection = touchDirection;
				if(this.moveBlock({top:touch.pageY - this.touchStartXY.y, })){
					if (event.preventDefault) event.preventDefault();
					else return false;
				}
			}
		} else if ((this.touchStartXY.x - touch.pageX).abs() > (this.touchStartXY.y - touch.pageY).abs()) {
			if (cfg.xscroll && this.touchStartXY.scrollWidth > this.touchStartXY.targetWidth) {
				this.touchMode = "we";
				var touchDirection = ((this.touchStartXY.x - touch.pageX) <= 0) ? "L" : "R"; /* 좌우 이동 */

				if(touchDirection != this.touchDirection){
					this.touchMoveAfter(touch);
				}

				this.touchDirection = touchDirection;
				if(this.moveBlock({left:touch.pageX - this.touchStartXY.x})){
					if (event.preventDefault) event.preventDefault();
					else return false;
				}
			}
		}
		if (((this.touchStartXY.x - touch.pageX).abs() - (this.touchStartXY.y - touch.pageY).abs()).abs() < 5) {
			//this.touchSelecting = true;
		}
		var touchMoveAfter = this.touchMoveAfter.bind(this);
		this.touhMoveObserver = setTimeout(function () {
			touchMoveAfter(touch);
		}, 50);
	},
	touchMoveAfter: function(touch){
		try{
			this.touchStartXY.sTime = ((new Date()).getTime() / 1000);
			this.touchStartXY.sTop = this.scrollScrollID.position().top;
			this.touchStartXY.sLeft = this.scrollScrollID.position().left;
			this.touchStartXY.x = touch.pageX;
			this.touchStartXY.y = touch.pageY;
		}catch(e){
			//trace(e);
		}
	},
	touchEnd: function (e) {
		var cfg = this.config;
		var event = window.event || e;
		//this.moveSens = 0;
		//this.touchMode = false;

		if (document.removeEventListener) {
			document.removeEventListener("touchend", this.touchEndBind, false);
			document.removeEventListener("touchmove", this.touchMoveBind, false);
		}

		var moveEndBlock = this.moveEndBlock.bind(this);
		this.touhEndObserver = setTimeout(function () {
			moveEndBlock();
		}, 10);
	},
	moveBlock: function(moveXY){
		var cfg = this.config;
		var returnTF = true;
		if(moveXY.left != undefined){
			var newLeft = (this.touchStartXY.sLeft + (moveXY.left));
			var minLeft = 0;
			var maxLeft = - (this.touchStartXY.scrollWidth - this.touchStartXY.targetWidth);
			if(cfg.bounces){
				minLeft = this.touchStartXY.targetWidth * 0.4;
				maxLeft = -((this.touchStartXY.scrollWidth - this.touchStartXY.targetWidth) * 1.2);
			}
			if(newLeft > minLeft){
				newLeft = minLeft;
				returnTF = false;
			}else if(newLeft < maxLeft){
				newLeft = maxLeft;
				returnTF = false;
			}
			this.scrollScrollID.css({left: newLeft});
			this.setScrollbarPositionForWheel("left");
		}else if(moveXY.top != undefined){
			var newTop = (this.touchStartXY.sTop + (moveXY.top));
			var minTop = 0;
			var maxTop = - (this.touchStartXY.scrollHeight - this.touchStartXY.targetHeight);
			if(cfg.bounces){
				minTop = this.touchStartXY.targetHeight * 0.4;
				maxTop = -((this.touchStartXY.scrollHeight - this.touchStartXY.targetHeight) * 1.2);
			}
			if(newTop > minTop){
				newTop = minTop;
				returnTF = false;
			}else if(newTop < maxTop){
				newTop = maxTop;
				returnTF = false;
			}
			this.scrollScrollID.css({top: newTop});
			this.setScrollbarPositionForWheel("top");
		}
		/*trace(moveXY);*/
		return returnTF;
		//return true;
	},
	moveEndBlock: function(){
		/* 관성발동여부 체크 */
		if(!this.touchStartXY) return;
		var sTime = this.touchStartXY.sTime;
		var eTime = ((new Date()).getTime() / 1000);
		var dTime = eTime - sTime;
		//var setScrollbarPositionForWheel = this.setScrollbarPositionForWheel.bind(this);
		var tractInActive = this.tractInActive.bind(this);
		
		if(this.touchMode == "we"){ /* 좌우 */
			if (this.touchStartXY.scrollWidth <= this.touchStartXY.targetWidth) return;
			var eLeft = this.scrollScrollID.position().left;
			var dLeft = eLeft - this.touchStartXY.sLeft;
			var velocityLeft = Math.ceil((dLeft/dTime)/1); // 속력= 거리/시간
			var endLeft = Math.ceil(eLeft + velocityLeft); //스크롤할때 목적지
			if(endLeft > 0) endLeft = 0;
			else if(endLeft < - (this.touchStartXY.scrollWidth - this.touchStartXY.targetWidth)){
				endLeft = - (this.touchStartXY.scrollWidth - this.touchStartXY.targetWidth);
			}
			var newLeft = endLeft.abs();
			this.touchStartXY.sLeft = -newLeft;
			this.scrollScrollID.animate({left: -newLeft}, (eLeft + newLeft).abs(), "circOut", function () {
				tractInActive();
			});
			this.setScrollbarPositionForWheel("left", (eLeft + newLeft).abs(), "circOut", {left: -newLeft});
			
			if (cfg.yscroll){
				var eTop = this.scrollScrollID.position().top;
				var topChange = false;
				if(eTop > 0){
					eTop = 0;
					topChange = true;
				}else if(eTop < - (this.touchStartXY.scrollHeight - this.touchStartXY.targetHeight)){
					eTop = (this.touchStartXY.scrollHeight - this.touchStartXY.targetHeight);
					topChange = true;
				}
				if(topChange) this.scrollScrollID.css({top: -eTop});
			}
			
		}else{ /* 위아래 */
			if (this.touchStartXY.scrollHeight <= this.touchStartXY.targetHeight) return;
			var eTop = this.scrollScrollID.position().top;
			var dTop = eTop - this.touchStartXY.sTop;
			var velocityTop = Math.ceil((dTop/dTime)/1); // 속력= 거리/시간
			var endTop = Math.ceil(eTop + velocityTop); //스크롤할때 목적지		
			if(endTop > 0) endTop = 0;
			else if(endTop < - (this.touchStartXY.scrollHeight - this.touchStartXY.targetHeight)){
				endTop = - (this.touchStartXY.scrollHeight - this.touchStartXY.targetHeight);
			}
			
			var newTop = endTop.abs();
			this.touchStartXY.sTop = -newTop;
			this.scrollScrollID.animate({top: -newTop}, (eTop + newTop).abs(), "circOut", function () {
				tractInActive();
			});
			this.setScrollbarPositionForWheel("top", (eTop + newTop).abs(), "circOut", {top: -newTop});
			
			if (cfg.xscroll){
				var eLeft = this.scrollScrollID.position().left;
				var leftChange = false;
				if(eLeft > 0){
					eLeft = 0;
					leftChange = true;
				}else if(eLeft < - (this.touchStartXY.scrollWidth - this.touchStartXY.targetWidth)){
					eLeft = (this.touchStartXY.scrollWidth - this.touchStartXY.targetWidth);
					leftChange = true;
				}
				if(leftChange) this.scrollScrollID.css({left: -eLeft});
			}
		}
		this.touchStartXY = null;	

	},
	/* touch event init --- e */
	
	
	/* scrollBar event */
	SBonMouseDown: function (event) {
		var config = this.config;
		this.scrollBarMove = true;
		var pos = this.getMousePosition(event);
		var SBpos = this.scrollBar.position();
		var SBh = this.scrollBar.height();
		var STh = this.scrollTrack.height();
		var Ch = this.scrollScrollID.outerHeight();

		this.Ch = Ch;
		this.STh = STh;

		this.scrollBarAttr = { x: (SBpos.left - pos.x).number(), y: (SBpos.top - pos.y).number(), h: SBh.number(), sth: STh };
		//trace("y:"+SBpos.top +" - "+ pos.y +", h:"+ SBh +", sth:"+STh+", calc y : "+(SBpos.top - pos.y).number());

		jQuery(document.body).bind("mousemove.AXScroll", this.SBonMouseMoveBind);
		jQuery(document.body).bind("mouseup.AXScroll", this.SBonMouseUpBind);
		jQuery(document.body).bind("mouseleave.AXScroll", this.SBonMouseUpBind);
	},
	SBonMouseMove: function (event) {
		var config = this.config;
		if (this.scrollBarMove) {
			jQuery(document.body).attr("onselectstart", "return false");
			jQuery(document.body).addClass("AXUserSelectNone");
			var pos = this.getMousePosition(event);

			var SBy = pos.y + this.scrollBarAttr.y;
			//trace(SBy +" = "+ pos.y +"+"+ this.scrollBarAttr.y);

			if (SBy < 2) SBy = 2;
			if ((SBy + this.scrollBarAttr.h) > this.scrollBarAttr.sth) {
				SBy = this.scrollBarAttr.sth - this.scrollBarAttr.h + 2;
				//trace(SBy)
			}
			this.scrollBar.css({ top: SBy });
			this.setContentPosition();
		}
	},
	SBonMouseUp: function (event) {
		if (this.scrollBarMove) {
			var config = this.config;
			this.scrollBarMove = false;
			jQuery(document.body).removeAttr("onselectstart");
			jQuery(document.body).removeClass("AXUserSelectNone");
		}
		jQuery(document.body).unbind("mousemove.AXScroll");
		jQuery(document.body).unbind("mouseup.AXScroll");
		jQuery(document.body).unbind("mouseleave.AXScroll");
	},

	SBonMouseDownX: function (event) {
		var config = this.config;
		this.scrollBarMove = true;
		var pos = this.getMousePosition(event);
		var SBpos = this.xscrollBar.position();
		var SBw = this.xscrollBar.width();
		var STw = this.xscrollTrack.width();
		var Cw = this.scrollScrollID.outerWidth();

		this.Cw = Cw;
		this.STw = STw;

		this.scrollBarAttr = { x: (SBpos.left - pos.x).number(), w: SBw.number(), stw: STw };

		jQuery(document.body).bind("mousemove.AXScroll", this.SBonMouseMoveXBind);
		jQuery(document.body).bind("mouseup.AXScroll", this.SBonMouseUpXBind);
		jQuery(document.body).bind("mouseleave.AXScroll", this.SBonMouseUpXBind);
	},
	SBonMouseMoveX: function (event) {
		var config = this.config;
		if (this.scrollBarMove) {

			jQuery(document.body).attr("onselectstart", "return false");
			jQuery(document.body).addClass("AXUserSelectNone");
			var pos = this.getMousePosition(event);

			var SBx = pos.x + this.scrollBarAttr.x;
			//trace(SBy +" = "+ pos.y +"+"+ this.scrollBarAttr.y);

			if (SBx < 2) SBx = 2;
			if ((SBx + this.scrollBarAttr.w) > this.scrollBarAttr.stw) {
				SBx = this.scrollBarAttr.stw - this.scrollBarAttr.w + 2;
			}

			this.xscrollBar.css({ left: SBx });
			this.setContentPosition("xscroll");
		}
	},
	SBonMouseUpX: function (event) {
		if (this.scrollBarMove) {
			var config = this.config;
			this.scrollBarMove = false;
			jQuery(document.body).removeAttr("onselectstart");
			jQuery(document.body).removeClass("AXUserSelectNone");
		}
		jQuery(document.body).unbind("mousemove.AXScroll");
		jQuery(document.body).unbind("mouseup.AXScroll");
		jQuery(document.body).unbind("mouseleave.AXScroll");
	},

	SBonWheel: function (e) {
		//content top handle
		var config = this.config;

		var event = (window.event || e);
		var delta = event.detail ? event.detail * (-10) : event.wheelDelta //check for detail first so Opera uses that instead of wheelDelta

		var Sy = this.scrollScrollID.position().top;
		var Sh = this.scrollScrollID.outerHeight();
		var TGh = this.scrollTargetID.height();

		//trace(Sh+" + "+Sy+" < "+TGh );
		if (Sh < TGh) return; //스크롤 할 대상이 없음 2013-02-08 오후 5:48:07 tom@axmods.com

		var eventCancle = false;
		Sy += delta;
		if (Sy > 0) {
			Sy = 0;
			eventCancle = true;
		}

		//trace(Sh+" + "+Sy+" < "+TGh );

		if ((Sh + Sy) < TGh) {
			Sy = (TGh - Sh);
			eventCancle = true;
		}
		this.scrollScrollID.css({ top: Sy });

		//this.setContentPosition();
		this.setScrollbarPositionForWheel("top");

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

		if (config.yscroll) {
			this.scrollBar.removeClass("scrollBar_hover");
			this.scrollTrack.removeClass("scrollTrack_hover");
		}

		if (config.xscroll) {
			this.xscrollBar.removeClass("xscrollBar_hover");
			this.xscrollTrack.removeClass("xscrollTrack_hover");
		}

	},
	cancelEvent: function (event) {
		event.stopPropagation(); // disable  event
		return false;
	},
	setContentPosition: function (xscroll) {
		var config = this.config;

		if (xscroll == "xscroll") {
			var SBx = this.xscrollBar.position().left;
			var STw = this.STw;
			var Cw = this.Cw;

			var CTwidth = this.CTwidth;
			var Cwidth = this.Cwidth;
			var SBwidth = CTwidth * (CTwidth - 4) / Cwidth;

			if (SBwidth < 10) { //스크롤 바가 최소값일 때
				var addLeft, Cleft;
				if (SBx == 2) SBx = 0;
				addLeft = ((10 - this.minWidthSB.w) / (STw - 10)) * SBx;
				addLeft = addLeft == 0 ? addLeft = 0 : addLeft = addLeft - 1;
				if (STw - 10 > SBx) {
					Cleft = (SBx + addLeft) * Cw / STw;
				} else {
					Cleft = Cw - CTwidth;
				}
				if ((SBx) == STw) {
					Cleft = Cw - CTwidth;
				}
			} else {
				SBx = SBx == 2 ? SBx = 0 : SBx = SBx - 2;
				var Cleft = SBx * Cw / STw;
			}
			this.scrollScrollID.css({ left: -(Cleft.round()) });
		} else {
			var SBy = this.scrollBar.position().top;
			var STh = this.STh;
			var Ch = this.Ch;

			var CTheight = this.CTheight;
			var Cheight = this.Cheight;
			var SBheight = CTheight * (CTheight - 4) / Cheight;

			if (SBheight < 10) { //스크롤 바가 최소값일 때
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
				var Ctop = SBy * Ch / STh;
			}
			this.scrollScrollID.css({ top: -(Ctop.round()) });
		}

	},

	setScrollbarPositionForWheel: function (direction, duration, easing, position) {
		//scrollbar top position handle for wheel
		var config = this.config;
		
		if(direction == "left"){
			if(position){
				var Sy = position.left;
			}else{
				var Sy = this.scrollScrollID.position().left;
			}
			
			var STh = this.xscrollTrack.outerWidth();
			var Sh = this.scrollScrollID.outerWidth();
			var SBh = this.xscrollBar.outerWidth();
	
			var SBy = (-Sy * STh) / Sh;
	
			var addTop = 0;
			if (this.minWidthSB.TF) {
				addTop = Math.floor(((10 - this.minWidthSB.h) / (STh - 4 - 10)) * SBy);
				//addTop = addTop == 0 ? addTop = 0 : addTop = addTop + 1;
			}
			
			var addY = 0;
			if (SBy < 2) {
				addY = (SBy).abs();
				SBy = 2;
			} else {
				addY = 0;
				SBy = SBy - addTop;
				if ((SBy + SBh) > STh) {
					addY = (SBy + SBh) - STh;
					SBy = STh - SBh + 2;
				}
			}
			if(easing){
				this.xscrollBar.animate({ 
					left: SBy, 
					width: Math.ceil(this.scrollTargetID.outerWidth() * (this.scrollTargetID.outerWidth() - 4) / (this.scrollScrollID.outerWidth() + addY)) 
				}, duration, easing, function () {});
			}else{
				this.xscrollBar.css({ 
					left: SBy, 
					width: Math.ceil(this.scrollTargetID.outerWidth() * (this.scrollTargetID.outerWidth() - 4) / (this.scrollScrollID.outerWidth() + addY)) 
				});
			}
		}else{
			if (!config.yscroll) return false;
			//wheel control event is not jquery event !
			
			if(position){
				var Sy = position.top;
			}else{
				var Sy = this.scrollScrollID.position().top;
			}			
			var STh = this.scrollTrack.outerHeight();
			var Sh = this.scrollScrollID.outerHeight();
			var SBh = this.scrollBar.outerHeight();
	
			var SBy = (-Sy * STh) / Sh;
	
			var addTop = 0;
			if (this.minHeightSB.TF) {
				addTop = Math.floor(((10 - this.minHeightSB.h) / (STh - 4 - 10)) * SBy);
				//addTop = addTop == 0 ? addTop = 0 : addTop = addTop + 1;
			}
			
			var addY = 0;
			if (SBy < 2) {
				addY = (SBy).abs();
				SBy = 2;
			} else {
				addY = 0;
				SBy = SBy - addTop;
				if ((SBy + SBh) > STh) {
					addY = (SBy + SBh) - STh;
					SBy = STh - SBh + 2;
				}
			}
			if(easing){
				//trace({ top: SBy }, duration, easing);
				this.scrollBar.animate({ 
					top: SBy,
					height: Math.ceil(this.scrollTargetID.outerHeight() * (this.scrollTargetID.outerHeight() - 4) / (this.scrollScrollID.outerHeight() + addY))
				}, duration, easing, function () {});
			}else{
				this.scrollBar.css({ 
					top: SBy, 
					height: Math.ceil(this.scrollTargetID.outerHeight() * (this.scrollTargetID.outerHeight() - 4) / (this.scrollScrollID.outerHeight() + addY)) 
				});
			}
			
		}
	},


	setSBPosition: function () {
		var config = this.config;
		var Ctop = this.scrollScrollID.position().top;
		var CTheight = this.scrollTargetID.innerHeight();
		var STh = this.scrollTrack.height() + 8;
		var Ch = this.scrollScrollID.outerHeight();

		var SBh = this.scrollBar.height();

		//trace({Ctop:Ctop, CTheight:CTheight, Ch:Ch, STh:STh, SBh:SBh, x:(STh*Ctop)/Ch});

		var SBtop = -(STh * Ctop) / Ch;
		if (SBtop < 0) SBtop;
		if ((SBtop + SBh) > STh) SBtop = STh - SBh;
		this.scrollBar.css({ top: SBtop });

	},
	focusElement: function (id) {
		var config = this.config;
		if (AXgetId(id)) {
			//trace(jQuery("#"+id).position());
			var pos = jQuery("#" + id).position();

			var myNewTop = pos.top;
			var CTheight = this.scrollTargetID.innerHeight();
			var Cheight = this.scrollScrollID.outerHeight();
			if ((Cheight - myNewTop) < CTheight) {
				myNewTop = Cheight - CTheight;
			}
			if (myNewTop < 0) myNewTop = 0;
			this.scrollScrollID.css({ top: -myNewTop });
			this.setSBPosition();
		}
	},
	scrollTop: function (top) {
		var myNewTop = top;
		var CTheight = this.scrollTargetID.innerHeight();
		var Cheight = this.scrollScrollID.outerHeight();
		if ((Cheight - myNewTop) < CTheight) {
			myNewTop = Cheight - CTheight;
		}
		if (myNewTop < 0) myNewTop = 0;
		this.scrollScrollID.css({ top: -myNewTop });
		this.setSBPosition();
	},
	moveTo: function (x, y) {

		var cfg = this.config;
		var css = {};
		if (!AXUtil.isEmpty(x)) {
			css.left = -x;
		}
		if (!AXUtil.isEmpty(y)) {
			css.top = -y;
		}

		this.scrollScrollID.css(css);
		if (cfg.yscroll && !AXUtil.isEmpty(css.top)) {
			this.scrollBar.css({ top: css.top });
		}
		if (cfg.xscroll && !AXUtil.isEmpty(css.left)) {
			this.xscrollBar.css({ left: css.left });
		}

	},
	unbind: function () {
		var config = this.config;
		this.scroll = false;

		this.scrollTrack.remove();
		this.scrollBar.remove();

		this.scrollTargetID.unbind("mouseover", this.tractActiveBind);
		this.scrollTargetID.unbind("mouseout", this.tractInActiveBind);

		//jQuery("#"+config.targetID+"_AX_scrollBar").unbind("dragstart", this.cancelEventBind);
		//jQuery("#"+config.targetID+"_AX_scrollBar").unbind("mousedown", this.SBonMouseDownBind);
		jQuery(document.body).unbind("mousemove.AXScroll", this.SBonMouseMoveBind);
		jQuery(document.body).unbind("mouseup.AXScroll", this.SBonMouseUpBind);

		var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel";
		if (document.attachEvent) { //if IE (and Opera depending on user setting)
			if (AXgetId(config.targetID)) AXgetId(config.targetID).detachEvent("on" + mousewheelevt, this.SBonWheelBind);
		} else if (document.addEventListener) { //WC3 browsers
			if (AXgetId(config.targetID)) AXgetId(config.targetID).removeEventListener(mousewheelevt, this.SBonWheelBind, false);
		}

		if (document.addEventListener) {
			if (AXgetId(config.targetID)) AXgetId(config.targetID).removeEventListener("touchstart", this.SBtouchstartBind, false)
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
	initialize: function (AXJ_super) {
		AXJ_super();
		this.config.CT_className = "AXCalendar";
		this.Observer = null;
		this.config.weeks = [
			{ name: "SUN" },
			{ name: "MON" },
			{ name: "TUE" },
			{ name: "WED" },
			{ name: "THU" },
			{ name: "FRI" },
			{ name: "SAT" }
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
		jQuery.each(cfg.weeks, function (wi, ww) {
			po.push("<td class=\"head_" + wi + " dayofweek_" + wi + "\">" + ww.name + "</td>");
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
				if (setDate.diff(roopDate, "D") == 0) tdClass.push("setDate");
				po.push("<td class=\"bodyCol_" + k + " bodyRow_" + i + " " + tdClass.join(" ") + "\"><a " + cfg.href + " class=\"calendarDate " + addClass.join(" ") + "\" id=\"" + cfg.targetID + "_AX_" + roopDate.print(this.config.valueFormat) + "_AX_date\" title=\"" + roopDate.print(this.config.titleFormat) + "\">" + dayValue + "</a></td>");
				k++;
				roopDate = roopDate.add(1);
			}
			po.push("</tr>");
			i++;
		}
		po.push("</tbody>");
		po.push("</table>");
		po.push("</div>");
		jQuery("#" + cfg.targetID).html(po.join(''));
	},
	dayPageSetDay: function (date) {
		var cfg = this.config;
		jQuery("#" + cfg.targetID).find(".calendarDate").removeClass("selected");
		jQuery("#" + cfg.targetID + "_AX_" + date.print(this.config.valueFormat) + "_AX_date").addClass("selected");
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
				po.push("<td class=\"bodyCol_" + k + " bodyRow_" + i + " " + tdClass.join(" ") + "\"><a " + cfg.href + " class=\"calendarMonth\" id=\"" + cfg.targetID + "_AX_" + m + "_AX_month\" title=\"\">" + m + "월</a></td>");
				k++;
				m++;
			}
			po.push("</tr>");
			i++;
		}
		po.push("</tbody>");
		po.push("</table>");
		po.push("</div>");
		jQuery("#" + cfg.targetID).html(po.join(''));
	},
	monthPageSetMonth: function (date) {
		var cfg = this.config;
		jQuery("#" + cfg.targetID).find(".calendarMonth").removeClass("selected");
		jQuery("#" + cfg.targetID + "_AX_" + (date.getMonth() + 1) + "_AX_month").addClass("selected");
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
				po.push("<td class=\"bodyCol_" + k + " bodyRow_" + i + " " + tdClass.join(" ") + "\"><a " + cfg.href + " class=\"calendarMonth\" id=\"" + cfg.targetID + "_AX_" + m + "_AX_year\" title=\"\">" + m + "년</a></td>");
				k++;
				m++;
			}
			po.push("</tr>");
			i++;
		}
		po.push("</tbody>");
		po.push("</table>");
		po.push("</div>");
		jQuery("#" + cfg.targetID).html(po.join(''));
	},
	yearPageSetYear: function (date) {
		var cfg = this.config;
		jQuery("#" + cfg.targetID).find(".calendarMonth").removeClass("selected");
		jQuery("#" + cfg.targetID + "_AX_" + date.print("yyyy") + "_AX_year").addClass("selected");
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
		jQuery("#" + cfg.targetID).html(po.join(''));

		var timePageChange = this.timePageChange.bind(this);
		jQuery("#" + cfg.targetID + "_AX_hour").unbindInput();
		jQuery("#" + cfg.targetID + "_AX_minute").unbindInput();
		jQuery("#" + cfg.targetID + "_AX_AMPM").unbindInput();
		jQuery("#" + cfg.targetID + "_AX_hour").bindSlider({
			min: 1, max: 12, onChange: function (objID, objVal) {
				timePageChange(objID, objVal);
			}
		});
		jQuery("#" + cfg.targetID + "_AX_minute").bindSlider({
			min: 0, max: 59, onChange: function (objID, objVal) {
				timePageChange(objID, objVal);
			}
		});
		jQuery("#" + cfg.targetID + "_AX_AMPM").bindSwitch({
			off: "AM", on: "PM", onChange: function (objID, objVal) {
				timePageChange(objID, objVal);
			}
		});
	},
	timePageChange: function (objID, objVal) {
		var cfg = this.config;
		var mytime = jQuery("#" + cfg.targetID + "_AX_hour").val().number().setDigit(2) + ":" + jQuery("#" + cfg.targetID + "_AX_minute").val().number().setDigit(2) + " " + jQuery("#" + cfg.targetID + "_AX_AMPM").val();
		jQuery("#" + cfg.targetID + "_AX_box").find(".timeDisplay").html(mytime);
		if (cfg.onChange) {
			var hh = jQuery("#" + cfg.targetID + "_AX_hour").val().number();
			var mi = jQuery("#" + cfg.targetID + "_AX_minute").val().number();
			var apm = jQuery("#" + cfg.targetID + "_AX_AMPM").val();
			if (apm == "PM") hh += 12;
			cfg.onChange(hh.setDigit(2) + ":" + mi.setDigit(2));
		}
	},
	getTime: function () {
		var cfg = this.config;
		var hh = jQuery("#" + cfg.targetID + "_AX_hour").val().number();
		var mi = jQuery("#" + cfg.targetID + "_AX_minute").val().number();
		var apm = jQuery("#" + cfg.targetID + "_AX_AMPM").val();
		if (apm == "PM") hh += 12;
		return hh.setDigit(2) + ":" + mi.setDigit(2);
	}
});
/* ********************************************** AXCalendar ** */

/* ** AXMultiSelect ********************************************** */
var AXMultiSelect = Class.create(AXJ, {
	version: "AXMultiSelect v1.8",
	author: "tom@axisj.com",
	logs: [
    	"2013-01-31 오후 5:01:12",
		"2013-11-12 오전 9:19:09 - tom : 버그픽스",
		"2013-11-12 오전 11:59:38 - tom : body relative 버그 픽스, 스크롤바 마우스 선택 문제 해결",
		"2013-11-13 오후 3:01:15 - tom : 모바일 터치 기능 지원"
	],

	initialize: function (AXJ_super) {
		AXJ_super();
		this.selects = [];
		this.config.selectClassName = "readySelect";
		this.config.beselectClassName = "beSelected";
		this.config.selectingClassName = "AX_selecting";
		this.config.unselectingClassName = "AX_unselecting";
		this.moveSens = 0;
		this.config.moveSens = 5;
		this.touchMode;
		this.config.useHelper = true;
	},
	init: function () {

		var mouseClick = this.onmouseClick.bind(this);
		this._selectStage = jQuery("#" + this.config.selectStage);
		this._selectStage.css({ "position": "relative" });

		/*
		if(AXUtil.browser.mobile){
			this._selectStage.css({"overflow":"visible", "min-height":this._selectStage.innerHeight(), "height":"auto"});	
		}
		*/

		this._selectStage.bind("mousedown", this.mousedown.bind(this));

		this._selectStage.bind("click", function (event) {
			mouseClick(this, event);
		});

		this.helper = jQuery("<div class='AXMultiselectorHelper'></div>");
		this.collect();

		jQuery(window).bind("resize.AXMultiSelect", this.collect.bind(this));
		jQuery(window).bind("keydown.AXMultiSelect", this.onKeydown.bind(this));
		this._selectStage.bind("scroll", this.onScrollStage.bind(this));
		
		this._selectStage.bind("touchstart", this.touchstart.bind(this));
	},
	onKeydown: function (event) {
		if (event.keyCode == AXUtil.Event.KEY_ESC) {
			this.clearSelects();
		}
	},
	onScrollStage: function (event) {
		var cfg = this.config;
		if (!AXUtil.browser.mobile) {
			if (this.helperAppened || this.helperAppenedReady) {
				this.moveSens = 0;
				jQuery(document.body).unbind("mousemove.AXMultiSelect");
				jQuery(document.body).unbind("mouseup.AXMultiSelect");
				jQuery(document.body).unbind("mouseleave.AXMultiSelect");
				jQuery(document.body).removeAttr("onselectstart");
				jQuery(document.body).removeClass("AXUserSelectNone");
				this.helperAppenedReady = false;
				this.helperAppened = false;
				this.helper.remove();
			}
		}

	},
	/* ------------------------------------------------------------------------------------------------------------------ */
	/* observe method ~~~~~~ */
	onmouseClick: function (element, event) {
		var cfg = this.config;
		var eid = event.target.id.split(/_AX_/g);
		var eventTarget = event.target;
		var myTarget = this.getEventTarget({
			evt: eventTarget, evtIDs: eid,
			until: function (evt, evtIDs) { return (AXgetId(evt.parentNode) == AXgetId(cfg.selectStage)) ? true : false; },
			find: function (evt, evtIDs) { return (jQuery(evt).hasClass(cfg.selectClassName)) ? true : false; }
		});
		//trace("click");
		if (myTarget) {
			var selectElement = myTarget;
			if (selectElement) {
				if (event.shiftKey) {
					this.shiftSelects(selectElement);
				} else if (event.metaKey || event.ctrlKey) {
					this.toggleSelects(selectElement);
				} else {
					this.clickSelects(selectElement);
				}
			}
		} else {

			if (event.target.id == cfg.selectStage && AXUtil.browser.name != "ie") this.clearSelects();
			return;
		}
	},
	/* ------------------------------------------------------------------------------------------------------------------ */
	/* class method ~~~~~~ */
	collect: function () {
		var cfg = this.config;
		this._selectTargets = jQuery("#" + cfg.selectStage + " ." + cfg.selectClassName);
		this.selectTargets = this._selectTargets.get();
		var scrollLeft = this._selectStage.scrollLeft().number();
		var scrollTop = this._selectStage.scrollTop().number();
		this._selectTargets.each(function () {
			var jQuerythis = jQuery(this), pos = jQuerythis.position();
			jQuery.data(this, "selectableItem", {
				element: this,
				jQueryelement: jQuerythis,
				left: pos.left + scrollLeft,
				top: pos.top + scrollTop,
				right: pos.left + scrollLeft + jQuerythis.outerWidth(),
				bottom: pos.top + scrollTop + jQuerythis.outerHeight(),
				selected: jQuerythis.hasClass(cfg.beselectClassName),
				selecting: jQuerythis.hasClass(cfg.selectingClassName)
			});
		});
	},
	clearSelects: function () {
		var cfg = this.config;
		this._selectTargets.each(function () {
			var selectTarget = jQuery.data(this, "selectableItem");
			if (selectTarget) {
				if (selectTarget.selecting) {
					selectTarget.jQueryelement.removeClass(cfg.selectingClassName);
					selectTarget.selecting = false;
				}
				if (selectTarget.selected) {
					selectTarget.jQueryelement.removeClass(cfg.beselectClassName);
					selectTarget.selected = false;
				}
			}
		});
	},
	pushSelects: function (Obj) {
		var hasSelect = this.selects.has(function () {
			return this.item == Obj;
		});
		if (!hasSelect) this.selects.push(Obj);
	},
	clickSelects: function (Obj) {
		var cfg = this.config;

		this.clearSelects();

		var selectTarget = jQuery.data(Obj, "selectableItem");
		selectTarget.jQueryelement.addClass(cfg.beselectClassName);
		selectTarget.selected = true;
	},
	toggleSelects: function (Obj) {
		var cfg = this.config;

		var selectTarget = jQuery.data(Obj, "selectableItem");
		if (selectTarget.selected) {
			selectTarget.jQueryelement.removeClass(cfg.beselectClassName);
			selectTarget.selected = false;
		} else {
			selectTarget.jQueryelement.addClass(cfg.beselectClassName);
			selectTarget.selected = true;
		}
	},
	shiftSelects: function (Obj) {
		var cfg = this.config;

		var selectedLength = 0;
		var li, si;
		this._selectTargets.each(function (stIndex, ST) {
			var selectTarget = jQuery.data(this, "selectableItem");
			if (selectTarget) {
				if (selectTarget.selected) {
					selectedLength++;
					li = stIndex;
				}
			}
			if (this === Obj) si = stIndex;
		});

		if (selectedLength == 0) {
			this.clickSelects(Obj);
		} else {
			//마지막 selects 개체를 찾는다.
			if (si == li) return;
			this.clearSelects();
			var temp;
			if (si > li) {
				temp = si;
				si = li;
				li = temp;
			}
			this._selectTargets.each(function (stIndex, ST) {
				var selectTarget = jQuery.data(this, "selectableItem");
				if (selectTarget) {
					if (si <= stIndex && li >= stIndex) {
						selectTarget.jQueryelement.addClass(cfg.beselectClassName);
						selectTarget.selected = true;
					}
				}
			});
		}
	},

	/* mouser helper */
	mousedown: function (event) {
		var cfg = this.config;

		jQuery(document.body).bind("mousemove.AXMultiSelect", this.mousemove.bind(this));
		jQuery(document.body).bind("mouseup.AXMultiSelect", this.mouseup.bind(this));
		jQuery(document.body).bind("mouseleave.AXMultiSelect", this.mouseup.bind(this));

		jQuery(document.body).attr("onselectstart", "return false");
		jQuery(document.body).addClass("AXUserSelectNone");

		this.helperAppenedReady = true;
	},
	mousemove: function (event) {
		var cfg = this.config;
		if (!event.pageX) return;

		/*드래그 감도 적용 */
		if (this.config.moveSens > this.moveSens) this.moveSens++;
		if (this.moveSens == this.config.moveSens) this.selectorHelperMove(event);
	},
	mouseup: function (event) {
		var cfg = this.config;

		this.helperAppenedReady = false;
		this.moveSens = 0;

		jQuery(document.body).unbind("mousemove.AXMultiSelect");
		jQuery(document.body).unbind("mouseup.AXMultiSelect");
		jQuery(document.body).unbind("mouseleave.AXMultiSelect");

		jQuery(document.body).removeAttr("onselectstart");
		jQuery(document.body).removeClass("AXUserSelectNone");

		if (this.helperAppened) {
			this.helperAppened = false;
			this.helper.remove();

			/* selected change */
			this._selectTargets.each(function () {
				var selectTarget = jQuery.data(this, "selectableItem");
				if (selectTarget) {
					if (selectTarget.selecting) {
						selectTarget.jQueryelement.removeClass(cfg.selectingClassName);
						selectTarget.selecting = false;
						selectTarget.jQueryelement.addClass(cfg.beselectClassName);
						selectTarget.selected = true;
					} else if (selectTarget.selected) {

					}
				}
			});
		}

	},
	selectorHelperMove: function (event) {
		var cfg = this.config;

		if (!cfg.useHelper) {
			return;
		}

		if (this.helperAppened) {

			var _helperPos = this.helperPos;
			var tmp,
				x1 = this.helperPos.x,
				y1 = this.helperPos.y,
				x2 = event.pageX - _helperPos.bodyLeft,
				y2 = event.pageY - _helperPos.bodyTop;
			if (x1 > x2) { tmp = x2; x2 = x1; x1 = tmp; }
			if (y1 > y2) { tmp = y2; y2 = y1; y1 = tmp; }
			this.helper.css({ left: x1, top: y1, width: x2 - x1, height: y2 - y1 });

			this._selectTargets.each(function () {

				var selectTarget = jQuery.data(this, "selectableItem"), hit = false;
				/*trace({sl:selectTarget.left, sr:selectTarget.right, st:selectTarget.top, sb:selectTarget.bottom, x1:x1, x2:x2, y1:y1, y2:y2}); */
				if (!selectTarget) return;

				var stL = selectTarget.left.number(), stR = selectTarget.right.number(), stT = selectTarget.top.number(), stB = selectTarget.bottom.number();
				stL = stL + _helperPos.stageX - _helperPos.scrollLeft - _helperPos.bodyLeft;
				stR = stR + _helperPos.stageX - _helperPos.scrollLeft - _helperPos.bodyLeft;
				stT = stT + _helperPos.stageY - _helperPos.scrollTop - _helperPos.bodyTop;
				stB = stB + _helperPos.stageY - _helperPos.scrollTop - _helperPos.bodyTop;

				hit = (!(stL > x2 || stR < x1 || stT > y2 || stB < y1)); /* touch */
				/* hit = (selectTarget.left > x1 && selectTarget.right < x2 && selectTarget.top > y1 && selectTarget.bottom < y2); fit */
				if (hit) {
					/* SELECT */
					if (selectTarget.selected) {
						selectTarget.jQueryelement.removeClass(cfg.beselectClassName);
						selectTarget.selected = false;
					}
					if (!selectTarget.selecting) {
						selectTarget.jQueryelement.addClass(cfg.selectingClassName);
						selectTarget.selecting = true;
					}
				} else {
					/* UNSELECT */
					if (selectTarget.selecting) {
						selectTarget.jQueryelement.removeClass(cfg.selectingClassName);
						selectTarget.selecting = false;
					}
					if (selectTarget.selected) {
						if (!event.metaKey && !event.shiftKey && !event.ctrlKey) {
							selectTarget.jQueryelement.removeClass(cfg.beselectClassName);
							selectTarget.selected = false;
						}
					}
				}
			});

		} else {
			this.helperAppened = true;
			jQuery(document.body).append(this.helper);

			var css = { left: (event.pageX - jQuery(document.body).offset().left), top: (event.pageY - jQuery(document.body).offset().top), width: 0, height: 0 };
			this.helper.css(css);
			var stagePos = this._selectStage.offset();
			this.helperPos = {
				stageX: stagePos.left.number(),
				stageY: stagePos.top.number(),
				x: css.left.number(),
				y: css.top.number(),
				scrollLeft: this._selectStage.scrollLeft().number(),
				scrollTop: this._selectStage.scrollTop().number(),
				bodyLeft: jQuery(document.body).offset().left,
				bodyTop: jQuery(document.body).offset().top
			};
		}
	},

	/* touch helper */
	touchstart: function (event) {
		var cfg = this.config;

		var touchEnd = this.touchEnd.bind(this);
		this.touchEndBind = function () {
			touchEnd(event);
		};

		var touchMove = this.touchMove.bind(this);
		this.touchMoveBind = function () {
			touchMove(event);
		};

		if (document.addEventListener) {
			document.addEventListener("touchend", this.touchEndBind, false);
			document.addEventListener("touchmove", this.touchMoveBind, false);
		}

		this.helperAppenedReady = true;
	},
	touchMove: function (event) {
		var cfg = this.config;
		var event = window.event || e;
		var touch = event.touches[0];
		if (!touch.pageX) return;
		var offset = this._selectStage.offset();
		var right = offset.left + this._selectStage.width();
		var bottom = offset.top + this._selectStage.height();

		if (this.moveSens == 0) {
			this.touchStartXY = { x: touch.pageX, y: touch.pageY, scrollTop: this._selectStage.scrollTop() };
		}

		/*드래그 감도 적용 */
		if (this.config.moveSens > this.moveSens) this.moveSens++;
		if (this.moveSens == this.config.moveSens) {
			if (this.touchMode == "drag") {
				if (bottom < touch.pageY) this._selectStage.scrollTop(this.touchStartXY.scrollTop - (bottom - touch.pageY));
				else if (offset.top > touch.pageY) this._selectStage.scrollTop(this.touchStartXY.scrollTop - (offset.top - touch.pageY));
				if (right < touch.pageX) this._selectStage.scrollLeft(this.touchStartXY.scrollLeft - (right - touch.pageX));
				else if (offset.left > touch.pageX) this._selectStage.scrollLeft(this.touchStartXY.scrollLeft - (offset.left - touch.pageX));
				this.selectorHelperMoveByTouch(event);
			} else if (this.touchMode == "scrollTop") {
				this._selectStage.scrollTop(this.touchStartXY.scrollTop + (this.touchStartXY.y - touch.pageY));
			} else if (this.touchMode == "scrollLeft") {
				this._selectStage.scrollLeft(this.touchStartXY.scrollLeft + (this.touchStartXY.x - touch.pageX));
			} else {
				if (((this.touchStartXY.x - touch.pageX).abs() - (this.touchStartXY.y - touch.pageY).abs()).abs() < 5) {
					this.touchMode = "drag"
					this.selectorHelperMoveByTouch(event);
				} else if ((this.touchStartXY.x - touch.pageX).abs() < (this.touchStartXY.y - touch.pageY).abs()) {
					this.touchMode = "scrollTop";
					this._selectStage.scrollTop(this.touchStartXY.scrollTop + (this.touchStartXY.y - touch.pageY));
				} else if ((this.touchStartXY.x - touch.pageX).abs() > (this.touchStartXY.y - touch.pageY).abs()) {
					this.touchMode = "scrollLeft";
					this._selectStage.scrollLeft(this.touchStartXY.scrollLeft + (this.touchStartXY.x - touch.pageX));
				}
			}
		}

		if (event.preventDefault) event.preventDefault();
		else return false;
	},
	selectorHelperMoveByTouch: function (e) {
		var cfg = this.config;
		var event = window.event || e;
		var touch = event.touches[0];

		if (this.helperAppened) {

			var _helperPos = this.helperPos;
			var tmp,
				x1 = this.helperPos.x,
				y1 = this.helperPos.y,
				x2 = touch.pageX - _helperPos.bodyLeft,
				y2 = touch.pageY - _helperPos.bodyTop;
			if (x1 > x2) { tmp = x2; x2 = x1; x1 = tmp; }
			if (y1 > y2) { tmp = y2; y2 = y1; y1 = tmp; }
			this.helper.css({ left: x1, top: y1, width: x2 - x1, height: y2 - y1 });

			this._selectTargets.each(function () {

				var selectTarget = jQuery.data(this, "selectableItem"), hit = false;
				/*trace({sl:selectTarget.left, sr:selectTarget.right, st:selectTarget.top, sb:selectTarget.bottom, x1:x1, x2:x2, y1:y1, y2:y2}); */
				if (!selectTarget) return;

				var stL = selectTarget.left.number(), stR = selectTarget.right.number(), stT = selectTarget.top.number(), stB = selectTarget.bottom.number();
				stL = stL + _helperPos.stageX - _helperPos.scrollLeft - _helperPos.bodyLeft;
				stR = stR + _helperPos.stageX - _helperPos.scrollLeft - _helperPos.bodyLeft;
				stT = stT + _helperPos.stageY - _helperPos.scrollTop - _helperPos.bodyTop;
				stB = stB + _helperPos.stageY - _helperPos.scrollTop - _helperPos.bodyTop;

				hit = (!(stL > x2 || stR < x1 || stT > y2 || stB < y1)); /* touch */
				/* hit = (selectTarget.left > x1 && selectTarget.right < x2 && selectTarget.top > y1 && selectTarget.bottom < y2); fit */
				if (hit) {
					/* SELECT */
					if (selectTarget.selected) {
						selectTarget.jQueryelement.removeClass(cfg.beselectClassName);
						selectTarget.selected = false;
					}
					if (!selectTarget.selecting) {
						selectTarget.jQueryelement.addClass(cfg.selectingClassName);
						selectTarget.selecting = true;
					}
				} else {
					/* UNSELECT */
					if (selectTarget.selecting) {
						selectTarget.jQueryelement.removeClass(cfg.selectingClassName);
						selectTarget.selecting = false;
					}
					if (selectTarget.selected) {
						if (!event.metaKey && !event.shiftKey && !event.ctrlKey) {
							selectTarget.jQueryelement.removeClass(cfg.beselectClassName);
							selectTarget.selected = false;
						}
					}
				}
			});

		} else {
			this.helperAppened = true;
			jQuery(document.body).append(this.helper);

			var css = { left: (touch.pageX - jQuery(document.body).offset().left), top: (touch.pageY - jQuery(document.body).offset().top), width: 0, height: 0 };
			this.helper.css(css);
			var stagePos = this._selectStage.offset();
			this.helperPos = {
				stageX: stagePos.left.number(),
				stageY: stagePos.top.number(),
				x: css.left.number(),
				y: css.top.number(),
				scrollLeft: this._selectStage.scrollLeft().number(),
				scrollTop: this._selectStage.scrollTop().number(),
				bodyLeft: jQuery(document.body).offset().left,
				bodyTop: jQuery(document.body).offset().top
			};
		}
	},
	touchEnd: function (e) {
		var cfg = this.config;
		var event = window.event || e;
		this.helperAppenedReady = false;
		this.moveSens = 0;

		this.touchMode = false;

		if (document.removeEventListener) {
			document.removeEventListener("touchend", this.touchEndBind, false);
			document.removeEventListener("touchmove", this.touchMoveBind, false);
		}

		if (this.helperAppened) {
			this.helperAppened = false;
			this.helper.remove();

			/* selected change */
			this._selectTargets.each(function () {
				var selectTarget = jQuery.data(this, "selectableItem");
				if (selectTarget) {
					if (selectTarget.selecting) {
						selectTarget.jQueryelement.removeClass(cfg.selectingClassName);
						selectTarget.selecting = false;
						selectTarget.jQueryelement.addClass(cfg.beselectClassName);
						selectTarget.selected = true;
					} else if (selectTarget.selected) {

					}
				}
			});
		}
	},
	getSelects: function () {
		var cfg = this.config;
		var selects = [];
		this._selectTargets.each(function () {
			var selectTarget = jQuery.data(this, "selectableItem");
			if (selectTarget) {
				if (selectTarget.selected) {
					selects.push(selectTarget.element);
				}
			}
		});
		return selects;
	},
	size: function () {
		var cfg = this.config;
		var selects = [];
		this._selectTargets.each(function () {
			var selectTarget = jQuery.data(this, "selectableItem");
			if (selectTarget) {
				if (selectTarget.selected) {
					selects.push(selectTarget.element);
				}
			}
		});
		return selects.length;
	}
});
/* ********************************************** AXMultiSelect ** */

/* ** AXResizable ********************************************** */
var AXResizable = Class.create(AXJ, {
	version: "AXResizable v1.0",
	author: "tom@axisj.com",
	logs: [
    	"2013-11-12 오전 10:22:06"
	],
	initialize: function (AXJ_super) {
		AXJ_super();
		this.moveSens = 0;
		this.config.moveSens = 2;
		this.objects = [];
		this.config.bindResiableContainer = "AXResizable";
		this.config.bindResiableHandle = "AXResizableHandle";
	},
	init: function () {
		this.helper = jQuery("<div class='AXResizableHelper'></div>");
	},
	bind: function (obj) {
		var cfg = this.config;
		if (!obj.id) {
			trace("bind 대상 ID가 없어 bind 처리할 수 없습니다.");
			return;
		}
		if (!AXgetId(obj.id)) {
			trace("bind 대상이 없어 bind 처리할 수 없습니다.");
			return;
		}
		var objID = obj.id;
		var objSeq = null;

		jQuery.each(this.objects, function (idx, O) {
			/*if (this.id == objID && this.isDel == true) objSeq = idx;*/
			if (this.id == objID) {
				objSeq = idx;
			}
		});
		if (objSeq == null) {
			objSeq = this.objects.length;
			this.objects.push({
				id: objID,
				element: AXgetId(objID),
				jQueryElement: jQuery("#" + objID),
				config: obj
			});
		} else {
			this.objects[objSeq].isDel = undefined;
			this.objects[objSeq].config = obj;
		}
		this.bindResizer(objID, objSeq);
	},
	unbind: function (obj) {
		var cfg = this.config;
		var removeIdx;
		jQuery.each(this.objects, function (idx, O) {
			if (O.id != obj.id) {
			} else {
				if (O.isDel != true) {
					removeIdx = idx;
				}
			}
		});
		if (removeIdx != undefined) {
			this.objects[removeIdx].isDel = true;
			/* unbind 구문 */
		}
	},
	bindResizer: function (objID, objSeq) {
		var _this = this;
		var cfg = this.config;

		var obj = this.objects[objSeq];

		var po = [];
		po.push("<div class=\"" + cfg.bindResiableHandle + "\"></div>");
		obj.jQueryElement.addClass(cfg.bindResiableContainer);
		obj.jQueryElement.append(po.join(''));

		//obj.jQueryElement.bind("mousedown.AXResizable", function(){_this.mousedown(objID, objSeq, event)});
		obj.jQueryElement.bind("mousedown.AXResizable", this.mousedown.bind(this, objID, objSeq));
	},
	mousedown: function (objID, objSeq, event) {
		var _this = this;
		var cfg = this.config;

		jQuery(window).bind("mousemove.AXResizable", this.mousemove.bind(this, objID, objSeq));
		jQuery(window).bind("mouseup.AXResizable", this.mouseup.bind(this, objID, objSeq));
		/*jQuery(document.body).bind("mouseleave.AXResizable", this.mouseup.bind(this, objID, objSeq));*/

		jQuery(document.body).attr("onselectstart", "return false");
		jQuery(document.body).addClass("AXUserSelectNone");

		this.helperAppenedReady = true;
	},
	mousemove: function (objID, objSeq, event) {
		var cfg = this.config;
		if (!event.pageX) return;

		/*드래그 감도 적용 */
		if (this.config.moveSens > this.moveSens) this.moveSens++;
		if (this.moveSens == this.config.moveSens) this.selectorHelperMove(objID, objSeq, event);
	},
	mouseup: function (objID, objSeq, event) {
		var cfg = this.config;
		var obj = this.objects[objSeq];

		this.helperAppenedReady = false;
		this.moveSens = 0;

		jQuery(window).unbind("mousemove.AXResizable");
		jQuery(window).unbind("mouseup.AXResizable");
		/*jQuery(document.body).unbind("mouseleave.AXResizable");*/

		jQuery(document.body).removeAttr("onselectstart");
		jQuery(document.body).removeClass("AXUserSelectNone");

		if (this.helperAppened) {
			this.helperAppened = false;

			var newWidth = this.helper.width();
			var newHeight = this.helper.height();

			var paddingLeft = obj.jQueryElement.css("padding-left");
			var paddingRight = obj.jQueryElement.css("padding-right");
			var paddingTop = obj.jQueryElement.css("padding-top");
			var paddingBottom = obj.jQueryElement.css("padding-bottom");
			var paddingW = paddingLeft.number() + paddingRight.number();
			var paddingH = paddingTop.number() + paddingBottom.number();

			if (obj.config.animate) {
				obj.jQueryElement.animate(
					{ width: newWidth - paddingW, height: newHeight - paddingH },
					(obj.config.animate.duration || 300), (obj.config.animate.easing || "liner"),
					function () {
						if (obj.config.onChange) {
							obj.config.onChange.call(obj, obj);
						}
					}
				);
			} else {
				obj.jQueryElement.css({ width: newWidth - paddingW, height: newHeight - paddingH });
				if (obj.config.onChange) {
					obj.config.onChange.call(obj, obj);
				}
			}

			this.helper.remove();
		}
	},
	selectorHelperMove: function (objID, objSeq, event) {
		var cfg = this.config;
		var obj = this.objects[objSeq];

		if (this.helperAppened) {

			var _helperPos = this.helperPos;
			var tmp,
				x1 = this.helperPos.x,
				y1 = this.helperPos.y,
				x2 = event.pageX - _helperPos.bodyLeft,
				y2 = event.pageY - _helperPos.bodyTop;

			var minWidth = (obj.config.minWidth || 0),
				minHeight = (obj.config.minHeight || 0),
				maxWidth = (obj.config.maxWidth || 0),
				maxHeight = (obj.config.maxHeight || 0);

			var myWidth = x2 - x1, myHeight = y2 - y1;

			if (minWidth != 0 && myWidth < minWidth) myWidth = minWidth;
			if (minHeight != 0 && myHeight < minHeight) myHeight = minHeight;
			if (maxWidth != 0 && myWidth > maxWidth) myWidth = maxWidth;
			if (maxHeight != 0 && myHeight > maxHeight) myHeight = maxHeight;

			if (obj.config.aspectRatio) {
				myWidth = myHeight * obj.config.aspectRatio;
			}

			if (obj.config.snap) {
				myWidth = obj.config.snap * (myWidth / obj.config.snap).ceil();
				myHeight = obj.config.snap * (myHeight / obj.config.snap).ceil();
			}
			//trace({width: myWidth, height: myHeight});
			this.helper.css({ width: myWidth, height: myHeight });

		} else {
			this.helperAppened = true;
			jQuery(document.body).append(this.helper);

			var bodyLeft = jQuery(document.body).offset().left;
			var bodyTop = jQuery(document.body).offset().top;

			var pos = obj.jQueryElement.offset();
			var css = {
				left: pos.left + bodyLeft,
				top: pos.top + bodyLeft,
				width: obj.jQueryElement.outerWidth(),
				height: obj.jQueryElement.outerHeight()
			};
			this.helper.css(css);

			this.helperPos = {
				x: css.left,
				y: css.top,
				bodyLeft: jQuery(document.body).offset().left,
				bodyTop: jQuery(document.body).offset().top
			};
		}
	}
});
var AXResizableBinder = new AXResizable();
AXResizableBinder.setConfig({ targetID: "defaultResiable" });

jQuery.fn.bindAXResizable = function (config) {
	jQuery.each(this, function () {
		config = config || {}; config.id = this.id;
		AXResizableBinder.bind(config);
		return this;
	});
};

jQuery.fn.unbindAXResizable = function (config) {
	jQuery.each(this, function () {
		if (config == undefined) config = {};
		config.id = this.id;
		AXResizableBinder.unbind(config);
		return this;
	});
};
/* ********************************************** AXResizable ** */

/* ** AXContextMenu ********************************************** */
var AXContextMenuClass = Class.create(AXJ, {
	version: "AXContextMenuClass v1.21",
	author: "tom@axisj.com",
	logs: [
		"2013-03-22 오후 6:08:57",
		"2013-09-03 오후 7:10:14 메뉴확장 위치 제어 버그 픽스",
		"2013-12-16 href=javascript 설정했을 때 onbeforeunload 이벤트 충돌문제 해결",
		"2013-12-26 오후 4:27:00 tom left, top position "
	],
	initialize: function (AXJ_super) {
		AXJ_super();
		this.showedItem = {};
		this.objects = [];
		this.config.theme = "AXContextMenu";
		this.config.width = "140";
		this.config.responsiveWidth = AXConfig.mobile.responsiveWidth; /* 모바일 반응 너비 */
	},
	init: function () {

	},
	bindSetConfig: function (objID, configs) {
		var findIndex = null;
		jQuery.each(this.objects, function (index, O) {
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

		var href = (obj.href == undefined) ? cfg.href : obj.href;

		//trace(subMenu.length);		
		var po = [];
		po.push("<div id=\"" + subMenuID + "\" class=\"" + theme + "\" style=\"width:" + width + "px;left:" + (width.number() - 15) + "px;display:none;\">");
		jQuery.each(subMenu, function (idx, menu) {
			if (filter(objSeq, objID, myobj, menu)) {
				var className = (menu.className) ? menu.className : "";
				var hasSubMenu = (menu.subMenu) ? " hasSubMenu" : "";
				po.push("<a " + href + " class=\"contextMenuItem " + className + hasSubMenu + "\" id=\"" + subMenuID + "_AX_" + depth + "_AX_" + idx + "\">");
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
		if(AXUtil.clientWidth() < cfg.responsiveWidth){
			this.mobileOpen(myobj, position);
		}else{
			this.deskTopOpen(myobj, position);
		}
	},
	mobileOpen: function(myobj, position){
		var cfg = this.config;
		var objSeq = null;
		jQuery.each(this.objects, function (index, O) {
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
		
		this.modal = new AXMobileModal();
		this.modal.setConfig({
			addClass:"",
			height: 388,
			width: 300,
			head:{
				title:(myobj.title||AXConfig.AXContextMenu.title),
				close:{
					onclick:function(){
						
					}
				}
			},
			onclose: function(){

			}
		});
		
    	var initMobileModalBind = this.initMobileModal.bind(this);
    	var onLoad = function(modalObj){
    		initMobileModalBind(objID, objSeq, myobj, modalObj);
    	};
    	this.modal.open(null, onLoad);
	},
	initMobileModal: function(objID, objSeq, myobj, modalObj){
		var cfg = this.config;
		var obj = this.objects[objSeq];
		
		if (myobj.sendObj) {
			obj.sendObj = myobj.sendObj;
		}
		var href = (obj.href == undefined) ? cfg.href : obj.href;
		var filter = this.filter.bind(this);
		//var getSubMenu = this.getSubMenu.bind(this);
		
		var styles = [];
		styles.push("height:339px;");
		
		var po = [];
		po.push("<div id=\"" + objID + "_AX_containerBox\" class=\"AXContextMenuContainer\" style=\"" + styles.join(";") + "\">");
		po.push("<div id=\"" + objID + "_AX_scroll\" class=\"AXContextMenuScroll\">");
		jQuery.each(obj.menu, function (idx, menu) {
			if (filter(objSeq, objID, myobj, menu)) {
				var className = (menu.className) ? " " + menu.className : "";
				var hasSubMenu = (menu.subMenu) ? " hasSubMenu" : "";
				po.push("<a " + href + " class=\"contextMenuItem" + className + hasSubMenu + "\" id=\"" + objID + "_AX_contextMenu_AX_0_AX_" + idx + "\">");
				po.push(menu.label);
				if (menu.subMenu) {
					if (menu.subMenu.length > 0) {
						po.push("<div class=\"contextSubMenuIcon\"></div>");
					}
				}
				po.push("</a>");
			}
		});
		po.push("</div>");
		po.push("</div>");
		
    	modalObj.modalBody.empty();
    	modalObj.modalBody.append(po.join(''));
		
		this.myUIScroll = new AXScroll();
		this.myUIScroll.setConfig({
			targetID: objID + "_AX_containerBox",
			scrollID: objID + "_AX_scroll"
		});
		
		var contextMenuItemClick = this.contextMenuItemClick.bind(this);
		var closeMobileModal = this.closeMobileModal.bind(this);
		this.contextMenuItemClickBind = function (event) {
			contextMenuItemClick(event, objSeq, objID);
			closeMobileModal();
		};
		modalObj.modalBody.find(".contextMenuItem").bind("click", this.contextMenuItemClickBind);
	},
	closeMobileModal: function(){
		var cfg = this.config;
		this.modal.close();
	},
	deskTopOpen: function (myobj, position) {
		var cfg = this.config;
		var objSeq = null;
		jQuery.each(this.objects, function (index, O) {
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

		if (AXgetId(objID)) return;

		var theme = obj.theme || cfg.theme;
		var width = obj.width || cfg.width;

		jQuery("#" + objID).remove();

		var href = (obj.href == undefined) ? cfg.href : obj.href;

		var filter = this.filter.bind(this);
		var getSubMenu = this.getSubMenu.bind(this);
		var po = [];
		po.push("<div id=\"" + objID + "\" class=\"" + theme + "\" style=\"width:" + width + "px;\">");
		jQuery.each(obj.menu, function (idx, menu) {
			if (filter(objSeq, objID, myobj, menu)) {
				if (menu.upperLine) {
					po.push("<div class=\"hline\"></div>");
				}
				var className = (menu.className) ? " " + menu.className : "";
				var hasSubMenu = (menu.subMenu) ? " hasSubMenu" : "";
				po.push("<a " + href + " class=\"contextMenuItem" + className + hasSubMenu + "\" id=\"" + objID + "_AX_contextMenu_AX_0_AX_" + idx + "\">");
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
		jQuery(document.body).append(po.join(''));

		jQuery("#" + objID + " .contextMenuItem:first-child").addClass("first");
		jQuery("#" + objID + " .contextMenuItem:last-child").addClass("last");

		var contextMenuItemMouseOver = this.contextMenuItemMouseOver.bind(this);
		this.contextMenuItemMouseOverBind = function (event) {
			contextMenuItemMouseOver(event, objSeq, objID);
		};
		jQuery("#" + objID + " .contextMenuItem").bind("mouseover", this.contextMenuItemMouseOverBind);

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
		var pElement = jQuery("#" + objID).offsetParent();
		var pBox = { width: pElement.width(), height: pElement.height() };
		var clientHeight = (AXUtil.docTD == "Q") ? document.body.scrollHeight : document.documentElement.scrollHeight;
		var clienWidth = (AXUtil.docTD == "Q") ? document.body.scrollWidth : document.documentElement.scrollWidth;
		if (clienWidth > pBox.width) pBox.width = clienWidth;
		if (clientHeight > pBox.height) pBox.height = clientHeight;
		var _box = { width: jQuery("#" + objID).outerWidth(), height: jQuery("#" + objID).outerHeight() };
		// -- 부모박스 정보와 박스 정보		

		if ((_box.height.number() + css.top.number()) > pBox.height) {
			css.top -= ((_box.height.number() + css.top.number()) - pBox.height) + 25;
			this.openTB = "up";
			if(css.top < 0) css.top = 0;
		}

		if (css.left != undefined) {

			if ((_box.width.number() + css.left.number()) > pBox.width) {
				var moveLeft = ((_box.width.number() + css.left.number()) - pBox.width) + 25;
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
		jQuery("#" + objID).css(css);

		this.eventBind(objSeq, objID);
	},
	eventBind: function (objSeq, objID) {
		var cfg = this.config;
		/* closeEvent bind */
		var contextMenuItemDown = this.contextMenuItemDown.bind(this);
		var contextMenuItemDownBind = function (event) {
			contextMenuItemDown(event, objSeq, objID);
		};

		jQuery(document).bind("mousedown.AXContenxtMenu", contextMenuItemDownBind);
		jQuery(document).bind("keydown.AXContenxtMenu", contextMenuItemDownBind);

		jQuery(document).find("iframe").each(function () {
			try{
				jQuery(window[this.name].document).bind("mousedown.AXContenxtMenu", contextMenuItemDownBind);
				jQuery(window[this.name].document).bind("keydown.AXContenxtMenu", contextMenuItemDownBind);
			}catch(e){
				
			}
		});


		/* closeEvent bind ~~~~~~~~~~~~~~~~~~~ */
		//click
		var contextMenuItemClick = this.contextMenuItemClick.bind(this);
		this.contextMenuItemClickBind = function (event) {
			contextMenuItemClick(event, objSeq, objID);
		};
		jQuery("#" + objID).find(".contextMenuItem").bind("click", this.contextMenuItemClickBind);
	},
	_close: function (objSeq, objID) {
		var cfg = this.config;
		jQuery("#" + objID).fadeOut("fast", function () {
			jQuery("#" + objID).remove();
		});
		jQuery(document).unbind("keydown.AXContenxtMenu");
		jQuery(document).unbind("mousedown.AXContenxtMenu");

		jQuery(document).find("iframe").each(function () {
			jQuery(window[this.name].document).unbind("mousedown.AXContenxtMenu");
			jQuery(window[this.name].document).unbind("keydown.AXContenxtMenu");
		});

		this.showedItem = {}; // 초기화
		this.openTB = "";
		this.openLR = "";
	},
	close: function (myobj) {
		var cfg = this.config;
		var objSeq = null;
		jQuery.each(this.objects, function (index, O) {
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

		jQuery("#" + objID).fadeOut("fast", function () {
			jQuery("#" + objID).remove();
		});

		jQuery(document).unbind("keydown", this.contextMenuItemDownBind);
		jQuery(document).unbind("mousedown", this.contextMenuItemDownBind);

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
			find: function (evt, evtIDs) { return (jQuery(evt).hasClass("contextMenuItem")) ? true : false; }
		});
		// event target search ------------------------    	
		if (myTarget) {
			var poi = myTarget.id.split(/_AX_/g);
			var depth = poi[poi.length - 2];
			if (this.showedItem[depth]) {
				jQuery("#" + this.showedItem[depth]).hide();
			}
			if (jQuery(myTarget).hasClass("hasSubMenu")) {

				// -- 부모박스 정보와 박스 정보
				var pElement = jQuery("#" + myTarget.id + "_AX_subMenu").offsetParent();
				var pBox = { width: pElement.width(), height: pElement.height() };
				var clientHeight = (AXUtil.docTD == "Q") ? document.body.scrollHeight : document.documentElement.scrollHeight;
				var clienWidth = (AXUtil.docTD == "Q") ? document.body.scrollWidth : document.documentElement.scrollWidth;
				if (clienWidth > pBox.width) pBox.width = clienWidth;
				if (clientHeight > pBox.height) pBox.height = clientHeight;
				var _box = { width: jQuery("#" + myTarget.id + "_AX_subMenu").outerWidth(), height: jQuery("#" + myTarget.id + "_AX_subMenu").outerHeight() };
				// -- 부모박스 정보와 박스 정보		

				var subMenuTop = jQuery("#" + myTarget.id).position().top;

				var css;
				if (this.openTB == "up") {
					var ph = jQuery("#" + myTarget.id).offsetParent().height();
					var h = jQuery("#" + myTarget.id).height();
					var bottom = ph - subMenuTop - h;
					css = { top: "auto", bottom: bottom };
				} else {
					css = { top: subMenuTop };
				}
				if (this.openLR == "left") {
					//css.left = -(menuWidth - 15);
					css.left = -(20);
				}

				jQuery("#" + myTarget.id + "_AX_subMenu").css(css);
				jQuery("#" + myTarget.id + "_AX_subMenu").show();

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
			find: function (evt, evtIDs) { return (jQuery(evt).hasClass("contextMenuItem")) ? true : false; }
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
			find: function (evt, evtIDs) { return (jQuery(evt).hasClass("contextMenuItem")) ? true : false; }
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
			jQuery.each(hashs, function (idx, hash) {
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
		jQuery.each(this.objects, function (index, O) {
			if (O.id == myobj.id) {
				objSeq = index;
				//return false;
			} else {
				jQuery("#" + O.id).remove();
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

		if (AXgetId(objID)) {
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

		jQuery("#" + objID).remove();

		var href = (obj.href == undefined) ? cfg.href : obj.href;

		var filter = this.filter.bind(this);
		var getSubMenu = this.getSubMenu.bind(this);
		var po = [];
		po.push("<div id=\"" + objID + "\" class=\"" + theme + "\" style=\"width:" + width + "px;\">");
		po.push("<div class=\"arrowTop\" style=\"" + arrowStyle + "\"></div>");
		po.push("<div class=\"arrowBottom\" style=\"" + arrowStyle + "\"></div>");
		po.push("<div class=\"blockContainer\">");
		if (obj.menu) {
			jQuery.each(obj.menu, function (idx, menu) {
				if (!menu) return false;
				if (filter(objSeq, objID, myobj, menu)) {
					if (menu.upperLine) {
						po.push("<div class=\"hline\"></div>");
					}
					var className = (menu.className) ? " " + menu.className : "";
					var hasSubMenu = (menu.subMenu) ? " hasSubMenu" : "";
					po.push("<a " + href + " class=\"contextMenuItem" + className + hasSubMenu + "\" id=\"" + objID + "_AX_contextMenu_AX_0_AX_" + idx + "\">");
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
		jQuery(document.body).append(po.join(''));

		if (direction == "top") {
			jQuery("#" + objID).find(".arrowTop").show();
			jQuery("#" + objID).find(".arrowBottom").hide();
		} else if (direction == "bottom") {
			jQuery("#" + objID).find(".arrowTop").hide();
			jQuery("#" + objID).find(".arrowBottom").show();
		} else {
			jQuery("#" + objID).find(".arrowTop").show();
			jQuery("#" + objID).find(".arrowBottom").hide();
		}

		jQuery("#" + objID + " .contextMenuItem:first-child").addClass("first");
		jQuery("#" + objID + " .contextMenuItem:last-child").addClass("last");

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
		jQuery("#" + objID + " .contextMenuItem").bind("mouseover", this.contextMenuItemMouseOverBind);
		jQuery("#" + objID).bind("mouseover", eventClear.bind(this));
		jQuery("#" + objID).bind("mouseout", this.contextMenuMouseOutBind);

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
		var pElement = jQuery("#" + objID).offsetParent();
		var pBox = { width: pElement.width(), height: pElement.height() };
		var clientHeight = (AXUtil.docTD == "Q") ? document.body.scrollHeight : document.documentElement.scrollHeight;
		var clienWidth = (AXUtil.docTD == "Q") ? document.body.scrollWidth : document.documentElement.scrollWidth;
		if (clienWidth > pBox.width) pBox.width = clienWidth;
		if (clientHeight > pBox.height) pBox.height = clientHeight;
		var _box = { width: jQuery("#" + objID).outerWidth(), height: jQuery("#" + objID).outerHeight() };
		// -- 부모박스 정보와 박스 정보		
		var openTB = "";
		if (direction == "top") {
			openTB = "top";
		} else if (direction == "bottom") {
			css.top -= jQuery("#" + objID).outerHeight();
			openTB = "bottom";
		} else {
			if ((_box.height.number() + css.top.number()) > pBox.height) {
				css.top = css.top - _box.height.number() - position.handleHeight - 3;
				jQuery("#" + objID).find(".arrowTop").hide();
				jQuery("#" + objID).find(".arrowBottom").show();
				//css.top -= ((_box.height.number() + css.top.number()) - pBox.height) + 5;
				openTB = "bottom";
			} else {
				jQuery("#" + objID).find(".arrowTop").show();
				jQuery("#" + objID).find(".arrowBottom").hide();
				openTB = "top";
			}
		}

		if (css.left != undefined) {
			if ((_box.width.number() + css.left.number()) > pBox.width) {
				var moveLeft = ((_box.width.number() + css.left.number()) - pBox.width) + 5;
				css.left -= moveLeft;
				if (openTB == "top") {
					jQuery("#" + objID).find(".arrowTop").css({ "background-position": (moveLeft + 5) + "px 0px;" });
				} else {
					jQuery("#" + objID).find(".arrowBottom").css({ "background-position": (moveLeft + 5) + "px 0px;" });
				}
			} else {

			}
		} else {

		}
		jQuery("#" + objID).css(css);
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
			find: function (evt, evtIDs) { return (jQuery(evt).hasClass("contextMenuItem")) ? true : false; }
		});
		// event target search ------------------------    	
		if (myTarget) {
			var poi = myTarget.id.split(/_AX_/g);
			var depth = poi[poi.length - 2];
			if (this.showedItem[depth]) {
				jQuery("#" + this.showedItem[depth]).hide();
			}
			if (jQuery(myTarget).hasClass("hasSubMenu")) {
				var subMenuTop = jQuery("#" + myTarget.id).position().top;
				var css;
				if (this.openTB == "up") {
					var ph = jQuery("#" + myTarget.id).offsetParent().height();
					var h = jQuery("#" + myTarget.id).height();
					var bottom = ph - subMenuTop - h;
					css = { top: "auto", bottom: bottom };
				} else {
					css = { top: subMenuTop };
				}
				if (this.openLR == "left") {
					//css.left = -(menuWidth - 15);
					css.left = -(20);
				}
				jQuery("#" + myTarget.id + "_AX_subMenu").css(css);
				jQuery("#" + myTarget.id + "_AX_subMenu").show();

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
	jQuery.each(this, function () {
		var tooltipContent = jQuery("#" + this.id + "_AX_tooltip").html();
		AXPopOver.bind({
			id: this.id + "_AX_tooltipobj",
			theme: (config.theme || "AXPopOverTooltip"), // 선택항목
			width: (config.width || ""), // 선택항목
			direction: (config.direction || "top"), // 선택항목
			body: tooltipContent
		});

		jQuery(this).bind((config.event || "mouseover"), function () {
			var pos = jQuery(this).offset();
			var direction = (config.direction || "top");
			var posTop = pos.top;
			if (direction == "bottom") {
				posTop -= 3;
			} else {
				posTop += jQuery(this).outerHeight() + 3;
			}
			AXPopOver.open({ id: this.id + "_AX_tooltipobj", sendObj: {} }, { left: pos.left, top: posTop, handleHeight: (jQuery(this).outerHeight().number() + 3) }); // event 직접 연결 방식
		});
		return this;
	});
};
/* ********************************************** AXContextMenu ** */

/* ** AXMobileModal ********************************************** */
var AXMobileModal = Class.create(AXJ, {
	version: "AXMobileModal v0.9",
	author: "tom@axisj.com",
	logs: [
		"2013-12-11 오후 5:48:28"
	],
	initialize: function (AXJ_super) {
		AXJ_super();
		this.config.theme = "AXMobileModal";
		this.config.width = "auto";
		this.config.height = "auto";
		this.config.margin = "10px";
		this.config.align = "center";
		this.config.valign = "center";
	},
	init: function () {
		var cfg = this.config;

		if (!cfg.head) {
			cfg.head = {};
		}
	},
	open: function (configs, onLoad) {
		var cfg = this.config;
		if (!configs) configs = {};
		var theme = (configs.theme || cfg.theme);
		if (cfg.addClass) {
			theme += " " + cfg.addClass;
		}
		this.modalId = "AXMobileModal" + AXUtil.timekey();
		var modalId = this.modalId;
		var clientWidth = (configs.clientWidth || AXUtil.clientWidth());
		
		var po = [];
		po.push('<div id="', modalId, '" class="', theme, '" style="left:0px;top:0px;width:100%;height:100%;">');
		po.push('	<div  id="', modalId, '_AX_modal" class="AXMobileModalPanel" style="height:50px;width:50px;left:', (AXUtil.clientWidth() - 50) / 2, 'px;top:', (AXUtil.clientHeight() - 50) / 2,'px;">');
		po.push('		<div  id="', modalId, '_AX_head" class="mobileModalHead">');
		po.push('			<div class="modalTitle">' + (cfg.head.title || "") + '</div>');
		po.push('		</div>');
		if (cfg.head.close) {
			po.push('		<a ' + cfg.href + ' class="mobileModelClose">Close</a>');
		}
		po.push('		<div  id="', modalId, '_AX_body" class="mobileModalBody"></div>');
		po.push('		<div  id="', modalId, '_AX_foot" class="mobileModalFoot"></div>');
		po.push('	</div>');
		po.push('</div>');
		this.jQueryModal = jQuery(po.join(''));
		jQuery(document.body).append(this.jQueryModal);

		this.modalPanel = this.jQueryModal.find(".AXMobileModalPanel");
		this.modalHead = this.modalPanel.find(".mobileModalHead");
		this.modalBody = this.modalPanel.find(".mobileModalBody");
		this.modalFoot = this.modalPanel.find(".mobileModalFoot");

		this.openConfigs = configs;
		this.setSizeModal(this.openConfigs, onLoad);
		this.modalPanel.find(".mobileModelClose").bind("click", this.close.bind(this));
		this.jQueryModal.bind("click", this.modalClick.bind(this));
		
		jQuery(window).unbind("resize.AXMobileModal").bind("resize.AXMobileModal", this.reposition.bind(this));
		
		return {
			jQueryModal: this.jQueryModal,
			modalPanel: this.modalPanel,
			modalHead: this.modalHead,
			modalBody: this.modalBody,
			modalFoot: this.modalFoot
		};
	},
	setSizeModal: function (configs, onLoad) {
		var cfg = this.config;
		var cssStyles = {};
		var clientWidth, width, height, left, top, margin, align, valign;
		var modalWidth, modalHeight;
		var clientWidth = this.jQueryModal.innerWidth();
		var clientHeight = AXUtil.clientHeight();
		var width = (configs.width || cfg.width);
		var height = (configs.height || cfg.height);
		var margin = (configs.margin || cfg.margin);
		var align = (configs.align || cfg.align);
		var valign = (configs.valign || cfg.valign);
		
		this.openModalAttr = {
			width:width, height:height, margin:margin, align:align, valign:valign
		};
		
		if (width == "auto") {
			if (margin.right(1) == "%") {
				modalWidth = clientWidth * (100 - margin.number() * 2) / 100;
			} else {
				modalWidth = clientWidth - margin.number() * 2;
			}
		} else {
			modalWidth = width;
		}
		left = (clientWidth - modalWidth) / 2;

		if (height == "auto") {
			if (margin.right(1) == "%") {
				modalHeight = clientHeight * (100 - margin.number() * 2) / 100;
			} else {
				modalHeight = clientHeight - margin.number() * 2;
			}
		} else {
			modalHeight = height;
		}
		top = (clientHeight - modalHeight) / 2;

		if (left < 0) left = margin;
		if (top < 0) top = margin;

		
		var cssStylesStart = {
			left: (AXUtil.clientWidth() - (modalWidth*0.8)) / 2,
			top: (AXUtil.clientHeight() - (modalHeight*0.8)) / 2,
			width: (modalWidth*0.8),
			height: (modalHeight*0.8)
		};
		this.modalPanel.css(cssStylesStart);

		cssStyles.left = left;
		cssStyles.top = top;
		cssStyles.width = modalWidth;
		cssStyles.height = modalHeight;
		
		/*cssStyles.transform = "rotateY(180deg)";*/
		/*this.modalPanel.addClass("open");*/
		mask.open();

		var returnObj = {
			jQueryModal: this.jQueryModal,
			modalPanel: this.modalPanel,
			modalHead: this.modalHead,
			modalBody: this.modalBody,
			modalFoot: this.modalFoot
		};
		
		if(AXUtil.browser.name == "android"){
			//alert(AXUtil.browser.version);
			this.modalPanel.css(cssStyles);
			if(onLoad){
				onLoad.call(returnObj, returnObj);
			}
		}else{
			this.modalPanel.animate(cssStyles, 300, "expoOut", function () {
				if(onLoad){
					onLoad.call(returnObj, returnObj);	
				}
			});			
		}
	},
	modalClick: function(event){
		var cfg = this.config;
		if(event.target.id == this.modalId){
			this.close();
		}
	},
	close: function () {
		var cfg = this.config;
		mask.close();
		
		var modalWidth, modalHeight;
		modalWidth = this.modalPanel.width();
		modalHeight = this.modalPanel.height();
		
		var cssStylesStart = {
			left: (AXUtil.clientWidth() - (modalWidth*0.8)) / 2,
			top: (AXUtil.clientHeight() - (modalHeight*0.8)) / 2,
			width: (modalWidth*0.8),
			height: (modalHeight*0.8),
			opacity:0
		};		
		var remove = this.remove.bind(this);
		this.modalPanel.animate(cssStylesStart, 300, "expoOut", function () {
			remove();
			if (cfg.onclose) {
				cfg.onclose();
			}
		});
		this.modalPanel.empty();
		//this.jQueryModal.fadeOut();
		//this.remove();
		/*
		
		remove.delay(0.01);
		*/
		
		jQuery(window).unbind("resize.AXMobileModal");
	},
	remove: function () {
		var cfg = this.config;
		this.jQueryModal.remove();
	},
	reposition: function(){
		var cfg = this.config;
		
		var clientWidth = AXUtil.clientWidth();
		var clientHeight = AXUtil.clientHeight();
		this.jQueryModal.css({width:clientWidth, height:clientHeight});
		
		var modalWidth, modalHeight, left, top;
		var width = this.openModalAttr.width;
		var height = this.openModalAttr.height;
		var margin = this.openModalAttr.margin;
		var align = this.openModalAttr.align;
		var valign = this.openModalAttr.valign;
		var cssStyles = {};
		
		if (width == "auto") {
			if (margin.right(1) == "%") {
				modalWidth = clientWidth * (100 - margin.number() * 2) / 100;
			} else {
				modalWidth = clientWidth - margin.number() * 2;
			}
		} else {
			modalWidth = width;
		}
		left = (clientWidth - modalWidth) / 2;

		if (height == "auto") {
			if (margin.right(1) == "%") {
				modalHeight = clientHeight * (100 - margin.number() * 2) / 100;
			} else {
				modalHeight = clientHeight - margin.number() * 2;
			}
		} else {
			modalHeight = height;
		}
		top = (clientHeight - modalHeight) / 2;

		if (left < 0) left = margin;
		if (top < 0) top = margin;

		cssStyles.left = left;
		cssStyles.top = top;
		cssStyles.width = modalWidth;
		cssStyles.height = modalHeight;
		
		this.modalPanel.css(cssStyles);
	}
});
/* ********************************************** AXMobileModal ** */

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

var __r20 = /%20/g,
	__rbracket = /\[\]$/,
	__rCRLF = /\r?\n/g,
	__rinput = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
	__rselectTextarea = /^(?:select|textarea)/i;

jQuery.fn.extend({
	serializeObject: function () {

		var myArray = this.map(function () {
			return this.elements ? jQuery.makeArray(this.elements) : this;
		})
		.filter(function () {
			return this.name && !this.disabled &&
				(this.checked || __rselectTextarea.test(this.nodeName) ||
					__rinput.test(this.type));
		})
		.map(function (i, elem) {
			var val = jQuery(this).val();
			//(elem.title || elem.placeholder || "")  //ie에서는 placeholder를 인식하지못함
			var label = (jQuery(elem).attr("title") || jQuery(elem).attr("placeholder") || "");
			return val == null ?
				null :
				jQuery.isArray(val) ?
					jQuery.map(val, function (val, i) {
						return { id: elem.id, name: elem.name, type: elem.type, value: val.replace(__rCRLF, "\r\n"), label: label };
					}) :
					{ id: elem.id, name: elem.name, type: elem.type, value: val.replace(__rCRLF, "\r\n"), label: label };

		}).get();
		return myArray;
	}
});

jQuery(document.body).ready(function () {
	jQuery("input[type=text]").bind("mousedown", function () { this.focus(); });
	jQuery("textarea").bind("mousedown", function () { this.focus(); });
});

jQuery.fn.endFocus = function () {
	var elem = this;
	var elemLen = elem.val().length;
	if (elemLen == 0) {
		elem.focus();
		return;
	}
	// For IE Only
	if (document.selection) {
		// Set focus
		elem.focus();
		elem.val(elem.val());
	}
	else if (document.selection == undefined || elem.selectionStart || elem.selectionStart == '0') {
		// Firefox/Chrome
		elem.focus().val(elem.val());
	} // if
};
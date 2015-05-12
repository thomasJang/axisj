/**
 * AXISJ 유틸함수 라이브러리 axf 또는 AXUtil이라고 한다.
 * @namespace {Object} axf
 * @example
 ```json
 trace(axf.browser);
 trace(AXUtil.browser);
 ```
 */
var axf = AXUtil = {
	async: true,
	ajaxOkCode: "ok",
	ajaxResponseType: "",
	ajaxDataType: "",
	gridPassiveMode: false,
	gridPassiveRemoveHide: false,
	gridFitToWidthRightMargin: 10,

	uniqueSeq: 0,

/**
 * 현재페이지에서 고유한 순번을 반환합니다.
 * @method axf.getUniqueId
 * @returns {Number} uniqueSeq
 * @example
 ```
 trace( axf.getUniqueId() );
 ```
 */

	getUniqueId: function(){ return (axf.uniqueSeq += 1); },
/**
 * document.getElementById(id) 와 같습니다. 아이디가 같은 엘리먼트를 반환합니다.
 * @method axf.getId
 * @param {String} id
 * @returns {HtmlElement}
 * @example
 ```
 if(axf.getId("myele_id")){
    $("#myele_id").css({...});
 }
 ```
 */
	getId: function(id) { return document.getElementById(id);  },
/**
 * @method axf.each
 * @param {Array|Object} obj
 * @param {Function} callback
 * @description Array 또는 Object의 아이템만큰 callback 함수를 call합니다.
 * @example
```
var new_array = [];
axf.each([0, 1, 2], function(){
	new_array.push(this*2);
});
var new_object = {};
axf.each({a:1, b:2, c:3}, function(k, v){
	new_object[k] = v*2;
});
```
 */
	each:  function(obj, callback){
		if(obj){
			var name, i = 0, length = obj.length,
				isObj = length === undefined || Object.isFunction( obj );
			if ( isObj ) {
				for ( name in obj ) {
					if ( callback.call( obj[ name ], name, obj[ name ] ) === false ) {
						break;
					}
				}
			} else {
				for ( ; i < length; ) {
					if ( callback.call( obj[ i ], i, obj[ i++ ] ) === false ) {
						break;
					}
				}
			}
		}
	},
/**
 * 브라우저의 이름과 버전 모바일여부
 *
 * @member {Object} axf.browser
 * @example
 ```
{
	name: {String} - bowserName (ie|chrome|webkit|oprea),
	version: {Number} - browserVersion,
	mobile: {Boolean}
}
 ```
 */
	browser: (function () {
		var ua = navigator.userAgent.toLowerCase();
		var mobile = (ua.search(/mobile/g) != -1);
		if (ua.search(/iphone/g) != -1) {
			return { name: "iphone", version: 0, mobile: true }
		} else if (ua.search(/ipad/g) != -1) {
			return { name: "ipad", version: 0, mobile: true }
		} else if (ua.search(/android/g) != -1) {
			var match = /(android)[ \/]([\w.]+)/.exec(ua) || [];
			var browserVersion = (match[2] || "0");
			return { name: "android", version: browserVersion, mobile: mobile }
		} else {
			var match = /(msie) ([\w.]+)/.exec(ua) ||
				/(trident)(?:.*? rv:([\w.]+)|)/.exec(ua) ||
				/(opera|opr)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
				/(chrome)[ \/]([\w.]+)/.exec(ua) ||
				/(webkit)[ \/]([\w.]+)/.exec(ua) ||
				ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) ||
				[];

			var browser = (match[1] || "");
			var browserVersion = (match[2] || "0");

			var browserName = {
				"msie"   : "ie",
				"trident": "ie",
				"opr"    : "opera"
			};
			if (browser in browserName) browser = browserName[browser];

			return {
				name: browser,
				version: browserVersion,
				mobile: mobile
			}
		}
	})(),
/**
 * 호환성보기 여부
 * @member {String} axf.docTD
 * @example
 ```
 axf.docTD = (Q|S)
 ```
 */
	docTD: (function () {
		if (!document.compatMode || document.compatMode == 'BackCompat') return "Q";
		else return "S";
	})(),
/**
 * @method axf.timekey
 * @returns {String} timeKey
 * @description 밀리세컨드까지 조합한 문자열을 반환합니다.
 * @example
```js
trace(axf.timeKey()); // A004222760
```
 */
	timekey: function () {
		var d = new Date();
		return ("A" + d.getHours().setDigit(2) + d.getMinutes().setDigit(2) + d.getSeconds().setDigit(2) + d.getMilliseconds());
	},
/**
 * @method axf.overwriteObject
 * @param {Object} tg - 덮어쓰기 대상 오브젝트
 * @param {Object} obj - 덮어쓰기 할 오브젝트
 * @param {Boolean} [rewirte=false] - 덮어쓰기 모드
 * @returns {Object} 덮어쓰기된 tg
 * @description 덮어쓰기 대상 오브젝트에 덮어쓰기 할 오브젝트를 덮어쓰기 합니다.
 * @example
 ```js
 axf.overwriteObject({a:1}, {b:1});
 // {a:1, b:1}
 axf.overwriteObject({a:1}, {a:2}, true);
 // {a:2}
 // rewirte : false 이면 {a:1} 로 유지 됩니다. 대상오브젝트에 키가 없는 경우에만 덮어쓰기 합니다.
 ```
 */
	overwriteObject: function (tg, obj, rewrite) {
		if (rewrite == undefined) rewrite = true;
		//trace(tg[k]);
		if (obj) AXUtil.each(obj, function (k, v) {
			if (rewrite) { tg[k] = v; }
			else {
				//trace(tg[k]);
				if (tg[k] == undefined) tg[k] = v;
			}
		});
		return tg;
	},
/**
 * @method axf.copyObject
 * @param {Object} obj - 복제할 오브젝트
 * @returns {Object} 복제된 오브젝트
 * @description 오브젝트를 복제하여 새로운 참조를 리턴합니다.
 * @example
 ```js
 axf.copyObject({a:1});
 // 내부코드가 Object.toJSON(obj).object(); 이므로 상황에 맞게 사용해야 합니다.
 ```
 */
	copyObject: function (obj) {
		//return Object.clone(obj);
		return Object.toJSON(obj).object();
	},
	consonantKR: function (cword) {
		var cons = [
			{ c: "ㄱ", re: "[가-깋]" }, { c: "ㄲ", re: "[까-낗]" }, { c: "ㄴ", re: "[나-닣]" }, { c: "ㄷ", re: "[다-딯]" }, { c: "ㄸ", re: "[따-띻]" }, { c: "ㄹ", re: "[라-맇]" },
			{ c: "ㅁ", re: "[마-밓]" }, { c: "ㅂ", re: "[바-빟]" }, { c: "ㅃ", re: "[빠-삫]" }, { c: "ㅅ", re: "[사-싷]" }, { c: "ㅆ", re: "[싸-앃]" }, { c: "ㅇ", re: "[아-잏]" }, { c: "ㅈ", re: "[자-짛]" },
			{ c: "ㅉ", re: "[짜-찧]" }, { c: "ㅊ", re: "[차-칳]" }, { c: "ㅋ", re: "[카-킿]" }, { c: "ㅌ", re: "[타-팋]" }, { c: "ㅍ", re: "[파-핗]" }, { c: "ㅎ", re: "[하-힣]" },
			{ c: "(", re:"\\(" }, { c: ")", re:"\\)" }, { c: "[", re:"\\[" }, { c: "]", re:"\\]" }
		];
		var rword = "";
		var cwords = cword.split("");
		for(var i= 0,l=cwords.length;i<l;i++){
			var fos = cons.searchObject(function () {
				return this.item.c == cwords[i];
			});
			var fo = fos.first();
			if (fo) rword += fo.re;
			else rword += cwords[i];
		}
		return rword;
	},
/**
 * @method axf.setCookie
 * @param {String} name
 * @param {String} value
 * @param {Number} [expiredays]
 * @param {Object} options
 * @description 쿠키에 값을 지정합니다.
 * @example
```js
axf.setCookie("myname", "tomas", 10, {
    path  : "/",             // {String} [현재 페이지의 path]
    domain: "www.axisj.com", // {String} [현재 사이트의 domain]
    secure: true             // {Boolean} [false]
});
```
 */
	setCookie: function (name, value, expiredays, options) {
        var expireDate;
        if (typeof expiredays === "number") {
            expireDate = new Date();
            expireDate.setDate(expireDate.getDate() + expiredays);
        }

        options = options || {};

        return (document.cookie = [
            encodeURIComponent(name), '=', String(value),
            expireDate      ? "; expires=" + expireDate.toUTCString() : "", // use expires attribute, max-age is not supported by IE
            options.path    ? "; path=" + options.path : "",
            options.domain  ? "; domain=" + options.domain : "",
            options.secure  ? "; secure" : ""
        ].join(""));
    },
/**
 * @method axf.getCookie
 * @param {String} name
 * @description 쿠키에서 값을 읽어들입니다
 * @example
 ```js
 trace( axf.getCookie("myname") );
 // tomas
 ```
 */
	getCookie: function (name) {
        var nameOfCookie = name + "=";
        var x = 0;
        while (x <= document.cookie.length) {
            var y = (x + nameOfCookie.length);
            if (document.cookie.substring(x, y) == nameOfCookie) {
                if ((endOfCookie = document.cookie.indexOf(";", y)) == -1) endOfCookie = document.cookie.length;
                return decodeURIComponent(document.cookie.substring(y, endOfCookie));
            }
            x = document.cookie.indexOf(" ", x) + 1;
            if (x == 0) break;
        }
        return "";
    },
	JSONFilter: /^\/\*-secure-([\s\S]*)\*\/\s*$/,
/**
 * @method axf.dayLen
 * @param {Number} year
 * @param {Number} month
 * @returns {Number} end of daynum
 * @description 지정한 년도와 월의 날자수를 반환합니다.
 * @example
```js
 trace( axf.dayLen(2013, 1) );
 // 28
 // 주의 Data.getMonth() 의 반환값을 그대로 사용 하므로 1월은 0 으로 전달 해야 합니다. 0~11 까지의 값을 사용할 수 있습니다.
```
 */
	dayLen: function (y, m) { if ([3, 5, 8, 10].has(function () { return this.item == m; })) { return 30; } else if (m == 1) { return (((y % 4 == 0) && (y % 100 != 0)) || (y % 400 == 0)) ? 29 : 28; } else { return 31; } },
/**
 * @method  axf.clientHeight
 * @returns {Number} clientHeight
 * @description 브라우저 clientHeight 반환합니다. window 창 높이와 같습니다.
 * @example
```js
 axf.clientHeight();
```
 */
	clientHeight: function () { return (AXUtil.docTD == "Q") ? document.body.clientHeight : document.documentElement.clientHeight; },
/**
 * @method  axf.scrollHeight
 * @returns {Number} scrollHeight
 * @description HTML scrollHeight 반환합니다.
 * @example
 ```js
 axf.scrollHeight();
 ```
 */
	scrollHeight: function () { return (AXUtil.docTD == "Q") ? document.body.scrollHeight : document.documentElement.scrollHeight; },
/**
 * @method  axf.clientWidth
 * @returns {Number} clientWidth
 * @description 브라우저 clientWidth 반환합니다. window 창 너비와 같습니다.
 * @example
 ```js
 axf.clientWidth();
 ```
 */
	clientWidth: function () { return (AXUtil.docTD == "Q") ? document.body.clientWidth : document.documentElement.clientWidth; },
/**
 * @method  axf.scrollWidth
 * @returns {Number} scrollWidth
 * @description HTML scrollWidth 반환합니다.
 * @example
 ```js
 axf.scrollWidth();
 ```
 */
	scrollWidth: function () { return (AXUtil.docTD == "Q") ? document.body.scrollWidth : document.documentElement.scrollWidth; },
	scrollTop: function(){
		return (document.documentElement && document.documentElement.scrollTop) ||
			document.body.scrollTop;
	},
	scrollLeft: function(){
		return (document.documentElement && document.documentElement.scrollLeft) ||
			document.body.scrollLeft;
	},
/**
 * @member {Object} axf.Event
 * @description Event.keyCode 모음 ref => https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
 * @example
 *``js
 *Event: {
 *    KEY_BACKSPACE: 8,
 *    KEY_TAB      : 9,
 *    KEY_RETURN   : 13,
 *    KEY_SHIFT    : 16,
 *    KEY_CONTROL  : 17,
 *    KEY_ALT      : 18,
 *    KEY_ESC      : 27,
 *    KEY_SPACE    : 32,
 *    KEY_PAGEUP   : 33,
 *    KEY_PAGEDOWN : 34,
 *    KEY_END      : 35,
 *    KEY_HOME     : 36,
 *    KEY_LEFT     : 37,
 *    KEY_UP       : 38,
 *    KEY_RIGHT    : 39,
 *    KEY_DOWN     : 40,
 *    KEY_INSERT   : 45,
 *    KEY_DELETE   : 46,
 *    KEY_WINDOW   : 91,
 *    KEY_EQUAL    : 187,
 *    KEY_MINUS    : 189,
 *    KEY_PERIOD   : 190,
 *    NUMPAD_EQUAL   : 12,
 *    NUMPAD_MULTIPLY: 106,
 *    NUMPAD_ADD     : 107,
 *    NUMPAD_SUBTRACT: 109,
 *    NUMPAD_DECIMAL : 110,
 *    NUMPAD_DIVIDE  : 111,
 *    NUMPAD_COMMA   : 194,
 *    cache: {}
 *}
 *```
 */
	Event: {
		KEY_BACKSPACE: 8,
		KEY_TAB      : 9,
		KEY_RETURN   : 13,
		KEY_SHIFT    : 16,
		KEY_CONTROL  : 17,
		KEY_ALT      : 18,
		KEY_ESC      : 27,
		KEY_SPACE    : 32,
		KEY_PAGEUP   : 33,
		KEY_PAGEDOWN : 34,
		KEY_END      : 35,
		KEY_HOME     : 36,
		KEY_LEFT     : 37,
		KEY_UP       : 38,
		KEY_RIGHT    : 39,
		KEY_DOWN     : 40,
		KEY_INSERT   : 45,
		KEY_DELETE   : 46,
		KEY_WINDOW   : 91,
		KEY_EQUAL    : 187,
		KEY_MINUS    : 189,
		KEY_PERIOD   : 190,
		NUMPAD_EQUAL   : 12,
		NUMPAD_MULTIPLY: 106,
		NUMPAD_ADD     : 107,
		NUMPAD_SUBTRACT: 109,
		NUMPAD_DECIMAL : 110,
		NUMPAD_DIVIDE  : 111,
		NUMPAD_COMMA   : 194,
		cache: {}
	},
/**
 * @method axf.console
 * @param {String|Object|Array} obj
 * @description 브라우저 console 에 메세지를 출력하여 줍니다. trace 와 같습니다.
 * @example
```js
 axf.console("AXISJ");
 // AXISJ

 axf.console(1234);
 // 1234

 var myObj = {name:"AXISJ", url:"http://www.axisj.com"};
 axf.console(myObj);
 // {"name":"AXISJ", "url":"http://www.axisj.com"}
 ```
 */
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

		if(axf.mobileConsole){
			axf.mobileConsole.prepend("<div>" + po + "</div>");
		}else{
			if (window.console == undefined) {
			} else {
				try {
					console.log( po );
					//+ ":" + axf.console.caller.name
				} catch (e) {
					alert(e);
				}
			}
		}
	},
/**
 * @method  axf.alert
 * @param {String|Object|Array} obj
 * @description window.alert 를 확장하여 JSObject 구조를 출력 합니다.
 * @example
```js
 axf.alert("AXISJ");
 // AXISJ

 axf.alert(1234);
 // 1234

 var myObj = {name:"AXISJ", url:"http://www.axisj.com"};
 axf.alert(myObj);
 // {"name":"AXISJ", "url":"http://www.axisj.com"}
 ```
 */
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
/**
 * @method  axf.confirm
 * @param {String|Object|Array} obj
 * @description window.confirm 를 확장하여 JSObject 구조를 출력 합니다.
 * @example
 ```js
 axf.confirm("AXISJ");
 // AXISJ

 axf.confirm(1234);
 // 1234

 var myObj = {name:"AXISJ", url:"http://www.axisj.com"};
 axf.confirm(myObj);
 // {"name":"AXISJ", "url":"http://www.axisj.com"}
 ```
 */
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
/**
 * @method axf.isEmpty
 * @param {obj} obj
 * @returns {Boolean}
 * @description 대상 개체가 undefined, null, "" 인지 체크 합니다.
 * @example
```js
 trace( axf.isEmpty("AXISJ") );
 // false
 trace( axf.isEmpty("") );
 // true
 trace( axf.isEmpty(undefined) );
 // true
```
 */
	isEmpty: function (obj) {
		return (obj === "" || obj === null || obj === undefined);
	},
/**
 * @method axf.getUrlInfo
 * @returns {Object} urlInfo
 * @description 브라우저 각종 속성을 반환합니다.
 * @example
```js
trace( axf.getUrlInfo() );
{
	"url":"http://127.0.0.1:2013/samples/AXcore/test.html",
	"param":"",
	"anchorData":"127.0.0.1:2013/samples/AXcore/test.html",
	"urlParam":"http://127.0.0.1:2013/samples/AXcore/test.html",
	"referUrl":"",
	"pathName":"/samples/AXcore/test.html",
	"protocol":"http:",
	"hostName":"127.0.0.1"
}
```
 */
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
		AXparam = (param) ? AXparam.replace(pageHostName + pathName + "?" + param, "") : AXparam.replace(pageHostName + pathName, "");
		return {
			url : url,
			param : param,
			anchorData : AXparam,
			urlParam : url_param,
			referUrl : referUrl,
			pathName : pathName,
			protocol : pageProtocol,
			hostName : pageHostName
		};
	},
/**
 * @method axf.encParam
 * @param {String} str - parameter
 * @returns {String} parameter
 * @description 파라미터에 value를 URLEncode해 줍니다.
 * @example
```js
axf.encParam("name=장기영&sex=남");
 //"name=%EC%9E%A5%EA%B8%B0%EC%98%81&sex=%EB%82%A8"
```
 */
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
		AXUtil.mobileConsole = axdom("<div class=\"AXMobileConsole\"></div>");
		axdom(document.body).append(AXUtil.mobileConsole);
	},
	parsingTable: function(elemObj, returnType){
		var head = {}, body = [];
		elemObj.find("thead tr td").each(function(){
			var elem = axdom( this );
			var attrs = {
				key: elem.attr("name"),
				label: (elem.html() || ""),
				width: (elem.attr("width") || "*"),
				align: (elem.attr("align") || "")
			};
			head[attrs.key] = attrs;
		});

		elemObj.find("tbody tr").each(function(){
			var item = {};
			axdom( this ).find("td").each(function(){
				var elem = axdom( this );
				item[ elem.attr("name") ] = elem.html();
			});
			body.push(item);
		});
		return {
			head: head, body: body
		};
	},
/**
 * @member {type} axf.mousewheelevt
 * @description 브라우저에 따른 마우스 휠 이벤트이름
 */
	mousewheelevt: ((/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel"),

//todo : event bubble catch
/**
 * 타겟엘리먼트의 부모 엘리멘트에서 원하는 조건의 엘리먼트를 얻습니다.
 * @method axf.get_event_target
 * @param {Element} target - target element
 * @param {Object} cond - 원하는 element를 찾을 조건
 * @returns {Element}
 * @example
 ```js
 console.log(axf.get_event_target(e.target, {tagname:"a", clazz:"findclass", etc:"attribute"}));
 ```
 */
	get_event_target: function(target, cond){
		var _target = target;
		if (_target) {
			while ((function(){
				var result = true;
				if(Object.isFunction(cond)){
					result = cond(_target);
				}
				else
				if(Object.isObject(cond)){
					for(var k in cond){
						if(k === "tagname"){
							if(_target.tagName.lcase() != cond[k]) {
								result = false;
								break;
							}
						}
						else
						if(k === "clazz"){
							var klasss = _target.className.split(/ /g);
							var hasClass = false;
							for(var a=0;a<klasss.length;a++){
								if(klasss[a] == cond[k]){
									hasClass = true;
									break;
								}
							}
							result = hasClass;
						}
						else
						{ // 그외 속성값들.
							if(_target.getAttribute) {
								if (_target.getAttribute(k) != cond[k]) {
									result = false;
									break;
								}
							}else{
								result = false;
								break;
							}
						}
					}
				}
				return !result;
			})()) {
				if (_target.parentNode) {
					_target = _target.parentNode;
				} else {
					_target = false; break;
				}
			}
		}
		return _target;
	}
};
var axdom;
if(window.jQuery) axdom = jQuery;
if(window.axdomConverter) axdom = axdomConverter;

// extend implement block

/**
 * AXISJ Class 지원 오브젝트
 * @namespace {Object} Class
 */
var Class = (function () {
	function subclass() { }
/**
 * @method Class.create
 * @param {Object} [superClass] - 부모 클래스 오브젝트
 * @param {Object} Class Body
 * @description 클래스를 만들어 줍니다.
 * @example
 ```js
 var AXJ = Class.create({
	initialize: function () {
		this.config = {
			debugMode: false,
			hashSpliter: "_",
			href: "href=\"javascript:;\""
		};
	},
	init: function () {
		trace(Object.toJSON(this.config));
	}
});
 ```
 */
	function create() { var parent = null, properties = AX_A(arguments); if (Object.isFunction(properties[0])) parent = properties.shift();
	function klass() { this.initialize.apply(this, arguments); } Object.extend(klass, Class.Methods); klass.superclass = parent; klass.subclasses = []; if (parent) { subclass.prototype = parent.prototype; klass.prototype = new subclass; parent.subclasses.push(klass); } for (var i = 0; i < properties.length; i++) klass.addMethods(properties[i]); if (!klass.prototype.initialize) klass.prototype.initialize = Prototype.emptyFunction; klass.prototype.constructor = klass; return klass; }
	function addMethods(source) { var ancestor = this.superclass && this.superclass.prototype; var properties = Object.keys(source); if (!Object.keys({ toString: true }).length) { if (source.toString != Object.prototype.toString) properties.push("toString"); if (source.valueOf != Object.prototype.valueOf) properties.push("valueOf"); } for (var i = 0, length = properties.length; i < length; i++) { var property = properties[i], value = source[property]; if (ancestor && Object.isFunction(value) && value.argumentNames().first() == "AXJ_super") { var method = value; value = (function (m) { return function () { return ancestor[m].apply(this, arguments); }; })(property).wrap(method); value.valueOf = method.valueOf.bind(method); value.toString = method.toString.bind(method); } this.prototype[property] = value; } return this; }
	return { create: create, Methods: { addMethods: addMethods } };
})();

/**
 * Object.prototype
 * @namespace {Object} Object
 */
// Object extend
(function () {
	var _toString = Object.prototype.toString;
	//function extend(destination, source) { for (var property in source) destination[property] = source[property]; return destination; }

/**
 * @method Object.extend
 * @param {Object} [target]
 * @param {Object} extend object
 * @param {Boolean} [overwrite=false] - 덮어쓰기 여부
 * @returns {Object} extended object
 * @description 오브젝트를 확장합니다. 타겟 오브젝트에 확장오브젝트의 키를 추가하거나 덮어쓰기 합니다.
 * @example
```js
 Object.extend({a:1}, {a:2});
 // Object {a: 1}
 Object.extend({a:1}, {b:2});
 // Object {a: 1, b: 2}
 Object.extend({a:1}, {a:2}, true);
 // Object {a: 2}
```
 */
	function extend() {
		var target = arguments[0] || {}, items = arguments[1], overwrite = arguments[2]||false;
		if ( typeof target !== "object" && typeof target !== "function" ) {
			target = {};
		}
		if(typeof items === "string"){
			target = items;
		}
		else {
			if(overwrite === true) {
				for(var k in items) target[k] = items[k];
			}
			else
			if(overwrite === false) {
				for(var k in items){
					if(typeof target[k] === "undefined") target[k] = items[k];
				}
			}
		}
		return target;
	}

	function inspect(obj) { try { if (isUndefined(obj)) return 'undefined'; if (obj === null) return 'null'; return obj.inspect ? obj.inspect() : String(obj); } catch (e) { if (e instanceof RangeError) return '...'; throw e; } }

/**
 * @method Object.toJSON
 * @param {Object} object
 * @param {Boolean} [qoute=true] - 따옴표 표시 여부
 * @returns {String} JSON String
 * @description Object JSON String 으로 반환합니다. Function은 제외합니다.
 * @example
 ```js
 Object.toJSON({a:1, b:2});
 // "{"a":1, "b":2}"
 Object.toJSON({a:1, b:2}, false);
 // "{a:1, b:2}"
 ```
 */
	function toJSON(object, qoute) {
		var type = typeof object;
		var isqoute = qoute;
		if (isqoute == undefined) isqoute = true;
		switch (type) {
			case 'undefined': return "undefined";
			//case 'function': return "\"" + object.toString().replace(/\"/g, "\\\"") + "\"";
			case 'function': return;
			case 'unknown': return "unknown";
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
	/**
	 * 오브젝트의 새로운 참조를 생성합니다.
	 * @method Object.toJSONfn
	 * @param {Object} object
	 * @param {Boolean} [qoute=true] - 따옴표 표시 여부
	 * @returns {String} JSON String
	 */
	function toJSONfn(object, qoute) {
		var type = typeof object;
		var isqoute = qoute;
		if (isqoute == undefined) isqoute = true;
		switch (type) {
			case 'undefined': return "undefined";
			case 'function':
				try {
					return toJSONfn(object(), isqoute);
				} catch (e) {
					return;
				}
			case 'unknown': return "unknown";
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
	/**
	 * 오브젝트의 key를 배열로 반환합니다.
	 * @method Object.keys
	 * @param {Object} object
	 * @returns {Array}
	 */
	function keys(obj) { var results = []; for (var property in obj) results.push(property); return results; }
	/**
	 * 오브젝트의 value를 배열로 반환합니다.
	 * @method Object.values
	 * @param {Object} object
	 * @returns {Array}
	 */
	function values(obj) { var results = []; for (var property in obj) results.push(obj[property]); return results; }
	/**
	 * 오브젝트의 새로운 참조를 생성합니다.
	 * @method Object.clone
	 * @param {Object} object
	 * @returns {Object}
	 */
	function clone(obj) { return extend({}, obj); }
	/**
	 * 오브젝트가 HTML 엘리먼트여부인지 판단합니다.
	 * @method Object.isElement
	 * @param {Object} object
	 * @returns {Boolean}
	 */
	function isElement(obj) { return !!(obj && obj.nodeType == 1); }
	/**
	 * 오브젝트가 Object인지 판단합니다.
	 * @method Object.isObject
	 * @param {Object} object
	 * @returns {Boolean}
	 */
	function isObject(obj) { return _toString.call(obj) == "[object Object]"; }
	/**
	 * 오브젝트가 Array인지 판단합니다.
	 * @method Object.isArray
	 * @param {Object} object
	 * @returns {Boolean}
	 */
	function isArray(obj) { return _toString.call(obj) == "[object Array]"; }
	/**
	 * 오브젝트가 Hash인지 판단합니다.
	 * @method Object.isHash
	 * @param {Object} object
	 * @returns {Boolean}
	 */
	function isHash(obj) { return obj instanceof Hash; }
	/**
	 * 오브젝트가 Function인지 판단합니다.
	 * @method Object.isFunction
	 * @param {Object} object
	 * @returns {Boolean}
	 */
	function isFunction(obj) { return typeof obj === "function"; }
	/**
	 * 오브젝트가 String인지 판단합니다.
	 * @method Object.isString
	 * @param {Object} object
	 * @returns {Boolean}
	 */
	function isString(obj) { return _toString.call(obj) == "[object String]"; }
	/**
	 * 오브젝트가 Number인지 판단합니다.
	 * @method Object.isNumber
	 * @param {Object} object
	 * @returns {Boolean}
	 */
	function isNumber(obj) { return _toString.call(obj) == "[object Number]"; }
	/**
	 * 오브젝트가 undefined인지 판단합니다.
	 * @method Object.isUndefined
	 * @param {Object} object
	 * @returns {Boolean}
	 */
	function isUndefined(obj) { return typeof obj === "undefined"; }
	extend(Object, { extend: extend, inspect: inspect, toJSON: toJSON, toJSONfn: toJSONfn, toJSONforMobile: toJSONforMobile, keys: keys, values: values, clone: clone, isElement: isElement, isObject: isObject, isArray: isArray, isHash: isHash, isFunction: isFunction, isString: isString, isNumber: isNumber, isUndefined: isUndefined });
})();


/**
 * Function.prototype
 * @namespace {Function} Function
 */
Object.extend(Function.prototype, (function () {
	var slice = Array.prototype.slice;
	function update(array, args) { var arrayLength = array.length, length = args.length; while (length--) array[arrayLength + length] = args[length]; return array; }
	function merge(array, args) { array = slice.call(array, 0); return update(array, args); }
/**
 * @method Function.argumentNames
 * @returns {Array} arguments
 * @description 함수의 아규먼트를 배열로 반환합니다.
 * @example
```js
 var myFn = function(a, b, c){
	return a;
};

 trace(myFn.argumentNames());
 //  ["a", "b", "c"]
 // prototypejs 를 참조하여 제작되었습니다.
```
 */
	function argumentNames() { var names = this.toString().match(/^[\s\(]*function[^(]*\(([^)]*)\)/)[1].replace(/\/\/.*?[\r\n]|\/\*(?:.|[\r\n])*?\*\//g, '').replace(/\s+/g, '').split(','); return names.length == 1 && !names[0] ? [] : names; }

/**
 * @method Function.bind
 * @param {Object} bindTarget
 * @param {Object} [Argument]
 * @description 함수의 위치를 bind 대상에 연결하여 줍니다.
 * @example
 ```js
 var AlertClass = Class.create({
	initialize: function(msg) {
		this.msg = msg;
	},
	handleClick: function(event) {
		alert(this.msg);
	}
 });
 var myalert = new AlertClass("AXJ Clicked");

 $("#link1").click(myalert.handleClick);
 //undefined
 $("#link2").click(myalert.handleClick.bind(myalert));
 //AXJ Clicked

 // ---------------------
 var AlertClass = Class.create({
	initialize: function(msg) {
		this.msg = msg;
	},
	handleClick: function(a, b, c, event) {
		trace({a:a, b:b, c:c, event:event.type});
		// {"a":"A", "b":"X", "c":"J", "event":"click"}
		alert(this.msg);
	}
 });
 var myalert = new AlertClass("AXJ Clicked");

 $("#link1").click(myalert.handleClick);
 $("#link2").click(myalert.handleClick.bind(myalert, "A", "X", "J"));
 ```
 */
	function bind(context) { if (arguments.length < 2 && Object.isUndefined(arguments[0])) return this; var __method = this, args = slice.call(arguments, 1); return function () { var a = merge(args, arguments); return __method.apply(context, a); } }
	function curry() { if (!arguments.length) return this; var __method = this, args = slice.call(arguments, 0); return function () { var a = merge(args, arguments); return __method.apply(this, a); } }

/**
 * @method Function.delay
 * @param {Number} timeout - second
 * @description 함수의 실행을 지정된 시간 후에 실행되게 합니다.
 * @example
 ```
 var showMsg = function(a, b){
	alert(a+"/"+b);
 };
 showMsg.delay(2, "AX", "ISJ");
 // 2초 후에 alert 구문이 실행됩니다.
 // 내부네서 this.apply 를 호출합니다. 간단한 함수 호출에는 사용을 권장하지만 복잡한 형태의 함수 구현에는 권장하지 않습니다.
 ```
 */
	function delay(timeout) { var __method = this, args = slice.call(arguments, 1); timeout = timeout * 1000; return window.setTimeout(function () { return __method.apply(__method, args); }, timeout); }
	function defer() { var args = update([0.01], arguments); return this.delay.apply(this, args); }
	function wrap(wrapper) { var __method = this; return function () { var a = update([__method.bind(this)], arguments); return wrapper.apply(this, a); } }
	function methodize() { if (this._methodized) return this._methodized; var __method = this; return this._methodized = function () { var a = update([this], arguments); return __method.apply(null, a); }; }
	function addPrototype(fns) { var name, i = 0, length = fns.length, isObj = length === undefined || Object.isFunction( fns ); if ( isObj ) { for ( name in fns ) { this.prototype[name] = fns[name]; } } }
	return { argumentNames: argumentNames, bind: bind, curry: curry, delay: delay, defer: defer, wrap: wrap, methodize: methodize, addPrototype:addPrototype }
})());

/**
 * String.prototype
 * @namespace {String} String
 */
Object.extend(String.prototype, (function () {
	function password(){ return Math.tan(45).toString().substr(7)}

/**
 * 문자열 시작부터 지정한 글자수 만큼 반환합니다.
 * @method String.left
 * @param {Number} strLen
 * @returns {String}
 * @example
 ```
 "AXJ_String".left(3); -> "AXJ"
 toast.push('left(3) : ' + "AXJ_String".left(3));
 ```
 */
	function left(strLen) { return this.toString().substr(0, strLen); }
/**
 * 문자열 끝부터 지정한 글자수 만큼 반환합니다.
 * @method String.right
 * @param {Number} strLen
 * @returns {String}
 * @example
 ```
 "AXJ_String".right(3); -> "ing"
 toast.push('right(3) : '+$('#AXJrightTest').val().left(3));
 ```
 */
	function right(strLen) { return this.substring(this.length - strLen, this.length); }
/**
 * URLencode된 문자열을 디코드 합니다.
 * @method String.dec
 * @returns {String}
 * @example
 ```
 "AXJ_String%2C%EC%97%91%EC%8B%9C%EC%8A%A4%EC%A0%9C%EC%9D%B4".dec(); -> "AXJ_String,엑시스제이"
 ```
 */
	function dec() {
		var decodeURI;
		try{decodeURI = decodeURIComponent(this.replace(/\+/g, " "));}catch(e){var decodeURI = this;}
		return (this) ? (decodeURI) : this;
	}
/**
 * URLencode된 문자열로 인코드 합니다.
 * @method String.enc
 * @returns {String}
 * @example
 ```
 "AXJ_String,엑시스제이".enc(); -> "AXJ_String%2C%EC%97%91%EC%8B%9C%EC%8A%A4%EC%A0%9C%EC%9D%B4"
 ```
 */
	function enc() { return (this) ? encodeURIComponent(this) : this; }
/**
 * JSONString이면 Object로 변환합니다.
 * @method String.object
 * @returns {Object}
 * @example
 ```
 var myObj = "{a:1, b:2, name:'AXJ'}".object();
 trace(myObj);
 // {"a":1, "b":2, "name":"AXJ"}

 var myObjError = "{1, b:2, name:'AXJ'}".object();
 trace(myObjError);
 // {"error":"syntaxerr", "result":"syntaxerr", "msg":"JSON syntax error.{1, b:2, name:'AXJ'}", "body":"{1, b:2, name:'AXJ'}"}
 ```
 */
	function object() { try { var res = this.evalJSON(); } catch (e) { res = { error: "syntaxerr", result: "syntaxerr", msg: "to object error, " + e.print() + ", " + this }; try { mask.close(); } catch (e) { } } return res; }
/**
 * 콤마가 포함된 문자열을 Array로 변환합니다.
 * @method String.array
 * @returns {Array}
 * @example
 ```
 var myObj = "a,b,c".array();
 trace(myObj);
 // ["a", "b", "c"]
 ```
 */
	function array() { try { var res = this.split(/,/g); } catch (e) { res = { error: "syntaxerr", result: "syntaxerr", msg: "to object error, " + e.print() + ", " + this }; } return res; }
/**
 * 문자열을 date 형식에 맞추어 날짜 포멧으로 리턴합니다.
 * @method String.date
 * @param {String} [separator=-] 날짜구분자
 * @returns {Date}
 * @example
 ```
 trace("20121119".date());
 // "2012-11-19T03:00:00Z"

 trace("2012-11-19".date());
 // "2012-11-19T03:00:00Z"

 trace("2012/11/19".date("/"));
 // "2012-11-19T03:00:00Z"
 ```
 */
	function toDate(separator, defaultDate) {
		function local_date(yy, mm, dd, hh, mi, ss){
			var utc_d, local_d;
			local_d = new Date();
			if(typeof hh === "undefined") hh = 23;
			if(typeof mi === "undefined") mi = 59;
			utc_d = new Date(Date.UTC(yy, mm, dd||1, hh, mi, ss||0));

			if(mm == 0 && dd == 1 && utc_d.getUTCHours() + (utc_d.getTimezoneOffset()/60) < 0){
				utc_d.setUTCHours(0);
			}else{
				utc_d.setUTCHours(utc_d.getUTCHours() + (utc_d.getTimezoneOffset()/60));
			}
			return utc_d;
		}

		if(this.length == 0){
			return defaultDate || new Date();
		}
		else if (this.length > 15) {
			var yy, mm, dd, hh, mi,
				aDateTime = this.split(/ /g), aTimes, aTime,
				aDate = aDateTime[0].split(separator || "-"),
				utc_d, local_d;

			yy = aDate[0];
			mm = parseFloat(aDate[1]);
			dd = parseFloat(aDate[2]);
			aTime = aDateTime[1] || "09:00";
			aTimes = aTime.left(5).split(":");
			hh = parseFloat(aTimes[0]);
			mi = parseFloat(aTimes[1]);
			if (aTime.right(2) === "AM" || aTime.right(2) === "PM") hh += 12;
			return local_date(yy, mm-1, dd, hh, mi);
		}
		else if(this.length == 14){
			var va = this.replace(/\D/g, "");
			return local_date(va.substr(0, 4), va.substr(4, 2).number()-1, va.substr(6, 2).number(), va.substr(8, 2).number(), va.substr(10, 2).number(), va.substr(12, 2).number());
		}
		else if (this.length > 7) {
			var va = this.replace(/\D/g, "");
			return local_date(va.substr(0, 4), va.substr(4, 2).number()-1, va.substr(6, 2).number());
		}
		else if (this.length > 4) {
			var va = this.replace(/\D/g, "");
			return local_date(va.substr(0, 4), va.substr(4, 2).number()-1, 1);
		}
		else if (this.length > 2) {
			var va = this.replace(/\D/g, "");
			return local_date(va.substr(0, 4), va.substr(4, 2).number()-1, 1);
		}
		else
		{
			return defaultDate || new Date();
		}
	}
/**
 * 문자열을 Number로 변환해 줍니다.
 * @method String.number
 * @returns {Number}
 * @example
 ```
 var str = "1234";
 trace(typeof str);
 // string

 str = str.number();
 trace(typeof str);
 // number

 "1,234".number(); -> 1234
 "1,234.1".number(); -> 1234.1
 ```
 */
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
/**
 * 문자열의 앞뒤 공백을 제거하여 줍니다.
 * @method String.trim
 * @returns {String}
 * @example
 ```
 " AXJ ".trim(); ->  "AXJ"
 ```
 */
	function strip() { return this.replace(/^\s+/, '').replace(/\s+$/, ''); }
/**
 * 문자열에서 HTML 태그를 제거하여 반환합니다.
 * @method String.delHtml
 * @returns {String}
 * @example
 ```
 "<div>AXJ</div>".delHtml(); ->  "AXJ"
 ```
 */
	function stripTags() { return this.replace(/<\w+(\s+("[^"]*"|'[^']*'|[^>])+)?>|<\/\w+>/gi, ''); }
/**
 * 문자열에서 Script 태그를 제거하여 반환합니다.
 * @method String.delScript
 * @returns {String}
 * @example
 ```
 "<script src="scriptname"></script>AXJ".delScript(); ->  "AXJ"
 ```
 */
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
/**
 * 문자열을 반복하여 반환합니다.
 * @method String.times
 * @param {Number} count
 * @returns {String}
 * @example
 ```
 "AXJ".times(3); ->  "AXJAXJAXJ"
 ```
 */
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
	function evalJSON(sanitize) {
		var json = this.unfilterJSON();
		try {
			var _evl = eval;
			if (!sanitize || json.isJSON()) return _evl("(" + json + ")");
			else return { error: "syntaxerr", result: "syntaxerr", msg: "JSON syntax error. fail to convert Object\n" + this };
			_evl = null;
		} catch (e) {
			return {
				error: e,
				result: "syntaxerr",
				msg: e,
				body: this
			};
		}
	}
/**
 * queryString 형식의 문자열을 json object로 변환하여 줍니다.
 * @method String.queryToObject
 * @param {String} [separator=&]
 * @returns {Object}
 * @example
 ```
 var myObject = "a=1&b=1".queryToObject();
 trace(myObject);
 // {"a":"1", "b":"1"}
 ```
 */
	function queryToObject(separator) { var match = this.trim().match(/([^?#]*)(#.*)?$/); if (!match) return {}; var rs = match[1].split(separator || '&'); var returnObj = {}; var i = 0; while (i < rs.length) { var pair = rs[i].split("="); var k = pair[0], v = pair[1]; if (returnObj[k] != undefined) { if (!Object.isArray(returnObj[k])) returnObj[k] = [returnObj[k]]; returnObj[k].push(v); } else { returnObj[k] = v; } i++; } return returnObj; }
/**
 * queryString 형식의 문자열을 json object로 변환하여 줍니다. (파라미터 값은 URLDecode 합니다.)
 * @method String.queryToObjectDec
 * @param {String} [separator=&]
 * @returns {Object}
 * @example
 ```
 var myObject = "a=1&b=1".queryToObject();
 trace(myObject);
 // {"a":"1", "b":"1"}
 ```
 */
	function queryToObjectDec(separator) { var match = this.trim().match(/([^?#]*)(#.*)?$/); if (!match) return {}; var rs = match[1].split(separator || '&'); var returnObj = {}; var i = 0; while (i < rs.length) { var pair = rs[i].split("="); var k = pair[0], v = pair[1]; if (returnObj[k] != undefined) { if (!Object.isArray(returnObj[k])) returnObj[k] = [returnObj[k]]; returnObj[k].push(v.dec()); } else { returnObj[k] = v.dec(); } i++; } return returnObj; }
/**
 * 줄넘김 문자열 '\n'을 &gt;br/> 태그로 변환하여 줍니다.
 * @method String.crlf
 * @param {Regexp} [replaceTarget=/\n/g]
 * @param {String} [replacer=&gt;br/>]
 * @returns {String}
 * @example
 ```
 "123
 123".crlf(); ->  "123<br/>123"
 ```
 */
	function crlf(replaceTarget, replacer) { return this.replace((replaceTarget || /\n/g), (replacer || "<br/>")); }
/**
 * 줄넘김 문자열 '%0A'을 &gt;br/> 태그로 변환하여 줍니다.
 * @method String.ecrlf
 * @param {Regexp} [replaceTarget=/%0A/g]
 * @param {String} [replacer=&gt;br/>]
 * @returns {String}
 * @example
 ```
 "123%0A123".crlf(); ->  "123<br/>123"
 ```
 */
	function ecrlf(replaceTarget, replacer) { return this.replace((replaceTarget || /%0A/g), (replacer || "<br/>")); }
/**
 * 문자열 자리수를 맞추어 줍니다.
 * @method String.setDigit
 * @param {Number} length
 * @param {String} [padder=0]
 * @returns {String}
 * @example
 ```
 "A".setDigit(3); ->  "00A"
 "A".setDigit(3, '!'); ->  "!!A"
 ```
 */
	function formatDigit(length, padder) { var string = this; return (padder || '0').times(length - string.length) + string; }
/**
 * 파일경로에서 파일명을 반환합니다.
 * @method String.getFileName
 * @returns {String}
 * @example
 ```
 "C://Works/AXISJ_project/css/myfile.zip".getFileName(); ->  "myfile.zip"
 ```
 */
	function getFileName() { var sToMatch = this; var reAt = /[\/\\]?([^\/\\]?\.?[^\/\\]+)$/; var reArr = sToMatch.match(reAt); return RegExp.$1; }
/**
 * Mozila 브라우저 등에서 사용하는 색상정보 값을 표준색상코드로 변환합니다. 표준색상코드를 입력하여도 표준색상코드 값을 얻을 수 있습니다.
 * @method String.toColor
 * @param {String} [prefix]
 * @returns {String}
 * @example
 ```
 "rgb(243, 243, 243)".toColor(); ->  "f3f3f3"
 "rgb(243, 243, 243)".toColor('#'); ->  "#f3f3f3"
 "#f3f3f3".toColor(); ->  "f3f3f3"
 "f3f3f3".toColor(); ->  "f3f3f3"
 "f3f3f3".toColor('#'); ->  "#f3f3f3"
 ```
 */
	function toColor(sharp) { var colorValue = ""; if (this.left(3) == "rgb") { var val = this; var reAt = /rgb\((.+)\)/; val.match(reAt); var vals = RegExp.$1.split(", "); for (var a = 0; a < vals.length; a++) { vals[a] = vals[a].number().setDigit(2, '0', 16); } colorValue = vals.join(""); } else { colorValue = this.replace("#", ""); } var preFix = (sharp) ? "#" : ""; return preFix + colorValue; }
/**
 * 숫자형 문자열에 콤마를 삽입하여 통화단위로 반환합니다.
 * @method String.money
 * @returns {String}
 * @example
 ```
 "1000000".money()
 // "1,000,000"
 ```
 */
	function toMoney() { return this.number().money(); }

	function toByte() { return this.number().byte(); }
/**
 * 문자열을 소문자로 반환합니다.
 * @method String.lcase
 * @returns {String}
 * @example
 ```
 "AXISJ".lcase() -> "axisj"
 ```
 */
	function lcase() { return this.toLowerCase(); }
/**
 * 문자열을 대문자로 반환합니다.
 * @method String.ucase
 * @returns {String}
 * @example
 ```
 "axisj".ucase() -> "AXISJ"
 ```
 */
	function ucase() { return this.toUpperCase(); }

/**
 * 문자열의 바이트 값을 계산하여 줍니다.
 * @method String.getByte
 * @returns {Number}
 * @example
 ```
 trace("장".getByte());
 // 2
 trace("a".getByte());
 // 1
 ```
 */
	function getByte() {
		var valueByte = this.length;
		for (i = 0, l = this.length; i < l; i++) if (this.charCodeAt(i) > 128) valueByte++;
		return valueByte;
	}
/**
 * 문자열을 전화번호 형태로 반홥니다.
 * @method String.phone
 * @returns {String}
 * @example
 ```
 trace("장".phone());
 // 02
 trace("a".phone());
 // 02
 trace("88819123".phone());
 // 02-8881-9123
 trace("01088819123".phone());
 // 010-8881-9137
 ```
 */
	function toPhoneString() {
		if (this == "") return this;
		var _this = this.replace(/\D+/g, "");
		var myLocalNums = "";
		var num1 = "", num2 = "";
		var localNum = "031/032/033/041/042/043/051/052/053/054/055/061/062/063/064/010/011/016/017/019/070/080/060";
		if (_this.left(2) == "02") {
			myLocalNums = "02";
		} else {
			var localNums = localNum.split(/\//g);
			var tempNum = _this.left(3);
			AXUtil.each(localNums, function () {
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
/**
 * anchor 데이터를 반환합니다.
 * @method String.getAnchorData
 * @returns {String}
 * @example
 ```
 "http://jdoc.axisj.com/#{id:\"/API/Prototype/String/phone\"}".getAnchorData();
 "{id:"/API/Prototype/String/phone"}"
 ```
 */
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
		ppassword: password,
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
		queryToObjectDec: queryToObjectDec,
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

/**
 * Number.prototype
 * @namespace {Number} Number
 */
Object.extend(Number.prototype, (function () {
/**
 * 숫자를 문자열로 변환하고 시작부터 지정한 글자수 만큼 반환합니다.
 * @method Number.left
 * @param {Number} strLen
 * @returns {String}
 * @example
 ```
 (1234).left(3); -> "123"
 ```
 */
	function left(strLen) { return this.toString().substr(0, strLen); }
/**
 * 숫자를 문자열로 변환하고 마지막부터 지정한 글자수 만큼 반환합니다.
 * @method Number.right
 * @param {Number} strLen
 * @returns {String}
 * @example
 ```
 1234.right(3); -> 234
 ```
 */
	function right(strLen) { return this.toString().substring(this.toString().length - strLen, this.toString().length); }
/**
 * 통화표현 단위로 변환된 문자열을 반환합니다.
 * @method Number.money
 * @returns {String}
 * @example
 ```
 trace((1234.9).money());
 //1,234.9
 trace((1234.1).money());
 //1,234.1
 trace((-1234.9).money());
 //-1,234.9
 trace((-1234.1).money());
 //-1,234.1

 (12345678).money(); -> "12,345,678"
 "12345678".money(); -> "12,345,678"
 // String 에서도 money 메소드를 직접 사용 할 수 있습니다.
 ```
 */
	function toMoney() {
		var txtNumber = '' + this;
		if (isNaN(txtNumber) || txtNumber == "") { return ""; }
		else {
			var rxSplit = new RegExp('([0-9])([0-9][0-9][0-9][,.])');
			var arrNumber = txtNumber.split('.');
			arrNumber[0] += '.';
			do {
				arrNumber[0] = arrNumber[0].replace(rxSplit, '$1,$2');
			} while (rxSplit.test(arrNumber[0]));
			if (arrNumber.length > 1) {
				return arrNumber.join('');
			} else {
				return arrNumber[0].split('.')[0];
			}
		}
	}
/**
 * 숫자값을 Byte로 인식하여 값에 크기에 따르 KB, MB, GB 의 형식으로 반환합니다.
 * @method Number.byte
 * @returns {String}
 * @example
 ```
 trace((1234567890).byte());
 // 1.1GB
 trace((12345678).byte());
 // 11.8MB
 trace((123456).byte());
 // 120.6KB
 trace((123).byte());
 // 0.1KB
 ```
 */
	function toByte() { var n_unit = "KB"; var myByte = this / 1024; if (myByte / 1024 > 1) { n_unit = "MB"; myByte = myByte / 1024; } if (myByte / 1024 > 1) { n_unit = "GB"; myByte = myByte / 1024; } return myByte.round(1) + n_unit; }
/**
 * 자신을 반환합니다.
 * @method Number.number
 * @returns {Number}
 */
	function toNum() { return this; }
/**
 * 원하는 횟수 만큼 자릿수 맞춤 문자열을 포함한 문자열을 반환합니다.
 * @method Number.setDigit
 * @param {Number} length - 자릿수
 * @param {String} padder - 자릿수 맞춤 문자열
 * @param {Number} radix - 진수
 * @returns {String}
 * @example
 ```
 trace( (11).setDigit(3) );
 //011
 trace( (11).setDigit(3, '!') );
 //!11
 trace( (11).setDigit(3, 0, 16) );
 //00b
 trace( (25).setDigit(5, "X", 8) );
 //XXX31
 ```
 */
	function formatDigit(length, padder, radix) { var string = this.toString(radix || 10); return (padder || '0').times(length - string.length) + string; }
/**
 * 인자값부터 원본까지 정수 단위로 이어진 배열을 리턴합니다.
 * @method Number.rangeFrom
 * @param {Number} start - 배열시작위치
 * @returns {Array}
 * @example
 ```
 (3).rangeFrom(0);
 [0, 1, 2, 3]
 ```
 */
	function range(start) { var ra = []; for (var a = (start || 0) ; a < this + 1; a++) ra.push(a); return ra; }
	function axtoJSON() { return this; }
/**
 * 절대값을 반환합니다.
 * @method Number.abs
 * @returns {Number}
 * @example
 ```
 trace((1234).abs());
 // 1234
 trace((-1234).abs());
 // 1234
 trace((1234.123).abs());
 // 1234.123
 trace((-1234.123).abs());
 // 1234.123
 ```
 */
	function abs() { return Math.abs(this); }
/**
 * 반올림 위치에서부터 반올림 한 값을 반환합니다.
 * @method Number.round
 * @param {Number} digit
 * @returns {Number}
 * @example
 ```
 trace((1234.5678).round());
 //1235
 trace((1234.5678).round(1));
 //1234.6
 trace((1234.5678).round(2));
 //1234.57
 ```
 */
	function round(digit) {
		return (typeof digit == "undefined") ? Math.round(this): +(Math.round(this+"e+"+digit)+"e-"+digit);
	}
	/**
	 * Math.ceil
	 * @method Number.ceil
	 * @returns {Number}
	 */
	function ceil() { return Math.ceil(this); }
	/**
	 * Math.floor
	 * @method Number.floor
	 * @returns {Number}
	 */
	function floor() { return Math.floor(this); }
/**
 * 숫자를 time값으로 이용하여 Date를 반환합니다.
 * @method Number.date
 * @returns {Date}
 * @example
 ```
 var ndate = new Date();
 ndate.getTime();
 // 1417253161813
 (1417253161813).date();
 // Sat Nov 29 2014 18:26:01 GMT+0900 (KST)
 ```
 */
	function date() { return new Date(this); }
/**
 * 나누기 연산 결과를 반환합니다. divisor 가 0인 경우 연산 결과는 오류 없이 0을 반환합니다.
 * @method Number.div
 * @param {Number} divisor - 나눔수
 * @returns {Number}
 * @example
 ```
 trace( (10).div(2); );
 // 5
 trace( (10).div(0); );
 // 0
 ```
 */
	function div(divisor) { if (divisor != 0) { return this / divisor; } else { return 0; } }
	function none() { return this; }

	function times(count) { return count < 1 ? '' : new Array(count + 1).join(this.toString()); }
/**
 * 숫자를 문자로 변환후 String.phone를 실행합니다.
 * @method Number.phone
 * @returns {String}
 */
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

/**
 * Date.prototype
 * @namespace {Date} Date
 */
Object.extend(Date.prototype, (function () {
/**
 * @method Data.add
 * @param {Number} daunum
 * @param {String} [interval=d] - y|m|d
 * @returns {Date}
 * @description 원본날짜에서 인자만큼 더해진 날짜 데이터를 반환합니다.
 * @example
```js
 var myDate = new Date();
 trace(myDate.add(1));
 // 내일값이 나옵니다.

 trace("2013-05-05".date().add(3));
 // "2013-05-08T03:00:00Z"
 trace("2013-05-05".date().add(2, 'm'));
 //  "2013-07-05T03:00:00Z"
 trace("2013-05-05".date().add(2, 'y'));
 //  "2015-05-05T03:00:00Z"
 ```
 */
	function dateAdd(daynum, interval) {
		interval = interval || "d";
		var interval = interval.toLowerCase();
		var DyMilli = ((1000 * 60) * 60) * 24;
		var aDate = new Date(this.getUTCFullYear(), this.getMonth(), this.getDate(), 12);

		if (interval == "d") {
			//trace(aDate.getTime(), (daynum) , (DyMilli));
			aDate.setTime(aDate.getTime() + (daynum * DyMilli));
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
			aDate.setTime(aDate.getTime() + ((daynum * 365) * DyMilli));
		} else {
			aDate.setTime(aDate.getTime() + (daynum * DyMilli));
		}
		return aDate;
	}
/**
 * @method Data.diff
 * @param {Date|String} edDate
 * @param {String} [type=d] - y|m|d
 * @returns {Number}
 * @description 날짜와 날짜 사이의 날짜 수를 반환합니다.
 * @example
 ```js
 trace( "2013-05-05".date().diff("2013-05-08") );
 // 3
 trace( "2013-05-05".date().diff("2013-05-08".date()) );
 // 3
 ```
 */
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
/**
 * @method  Date.print
 * @param {String} [format=yyyy-mm-dd]
 * @returns {type} name
 * @description yyyy:년도, mm:월, dd:일, hh:시, mi:분, ss:초, dw:요일 을 조합하여 format으로 지정하면 그에 맞는 날짜형식 문자열이 반환됩니다.
 * @example
```js
 "2013-05-05".date().print(); -> "2013-05-05"
 "2013-05-05".date().print('yyyy년 mm월 dd일'); -> "2013년 05월 05일"
 "2013-05-05".date().print('yyyy년 mm월 dd일 (dw)'); -> "2013년 05월 05일 (일)"
```
 */
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

			var yre = /[^y]*(yyyy)[^y]*/gi; yre.exec(fStr); var regY = RegExp.$1;
			var mre = /[^m]*(mm)[^m]*/gi; mre.exec(fStr); var regM = RegExp.$1;
			var dre = /[^d]*(dd)[^d]*/gi; dre.exec(fStr); var regD = RegExp.$1;
			var hre = /[^h]*(hh)[^h]*/gi; hre.exec(fStr); var regH = RegExp.$1;
			var mire = /[^m]*(mi)[^i]*/gi; mire.exec(fStr); var regMI = RegExp.$1;
			var sre = /[^s]*(ss)[^s]*/gi; sre.exec(fStr); var regS = RegExp.$1;
			var dwre = /[^d]*(dw)[^w]*/gi; dwre.exec(fStr); var regDW = RegExp.$1;

			if (regY === "yyyy") {
				fStr = fStr.replace(regY, nY.right(regY.length));
			}
			if (regM === "mm") {
				if (regM.length == 1) nM = (this.getMonth() + 1);
				fStr = fStr.replace(regM, nM);
			}
			if (regD === "dd") {
				if (regD.length == 1) nD = this.getDate();
				fStr = fStr.replace(regD, nD);
			}
			if (regH === "hh") {
				fStr = fStr.replace(regH, nH);
			}
			if (regMI === "mi") {
				fStr = fStr.replace(regMI, nMM);
			}
			if (regS === "ss") {
				fStr = fStr.replace(regS, nS);
			}
			if (regDW == "dw") {
				fStr = fStr.replace(regDW, AXConfig.weekDays[nDW].label);
			}
			return fStr;
		}
	}
/**
 * @method  Date.getTimeAgo
 * @returns {String}
 * @description 현재와 날짜 데이터 간의 간격을 문자열로 반환합니다.
 * @example
 ```js
 var pDate = new Date();
 pDate.setTime(pDate.getTime()-1000*60);
 trace( pDate.getTimeAgo() );
 // 1분 전

 pDate.setTime(pDate.getTime()-1000*60*5);
 trace( pDate.getTimeAgo() );
 //  6분 전

 pDate.setTime(pDate.getTime()-1000*60*60);
 trace( pDate.getTimeAgo() );
 //  1시간 6분 전

 pDate.setTime(pDate.getTime()-1000*60*60*24);
 trace( pDate.getTimeAgo() );
 //  2013년 11월 19일 화
 ```
 */
	function getTimeAgo() {

		var rtnStr = "";
		var nMinute = Math.abs((new Date()).diff(this, "mm"));

		var wknames = [];
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
/**
 * @method  Date.axGetDay
 * @param {Number} [dayOfStart=0]
 * @returns {Number}
 * @description 요일의 시작인덱스를 변경한 요일인덱스를 반환합니다.
 */
	function axGetDay(dayOfStart){
		if(dayOfStart == undefined) dayOfStart = 0;
		var myDay = this.getDay() - dayOfStart;
		if(myDay < 0) myDay = 7 + myDay;
		return myDay;
	}
	return {
		add: dateAdd,
		diff: dayDiff,
		print: toString,
		date: date,
		axtoJSON: axtoJSON,
		getTimeAgo: getTimeAgo,
		axGetDay: axGetDay
	}
})());

/**
 * Error.prototype
 * @namespace {Error} Error
 */
Object.extend(Error.prototype, (function () {
/**
 * 에러넘버와 에러 객체를 리턴합니다.
 * @method Error.print
 * @returns {String}
 */
	function print() {
		return (this.number & 0xFFFF) + " : " + this;
	}
	return {
		print: print
	}
})());

/**
 * Array.prototype
 * @namespace {Array} Array
 */
Object.extend(Array.prototype, (function () {
/**
 * @method Array.clear
 * @returns {Array}
 * @description Array를 빈 Array 로 변경합니다.
 * @example
```js
 var a = [1,2,3];
 trace(a);
 // [1, 2, 3]
 trace(a.clear());
 // []
 trace(a);
 // []
```
 */
	function clear() {
		this.length = 0;
		return this;
	}
/**
 * @method Array.first
 * @returns {Object}
 * @description Array의 첫번째 아이템을 반환합니다.
 * @example
```js
 var a = [1,2,3];
 trace(a.first());
 // 1

 var b = [{a:"액시스제이"}, 2, 3];
 trace(b.first());
 // {"a":"액시스제이"}

 var c = [[1,2,3], 2, 3];
 trace(c.first());
 // [1, 2, 3]
 ```
 */
	function first() {
		return this[0];
	}
/**
 * @method Array.last
 * @returns {Object}
 * @description Array의 마지막 아이템을 반환합니다.
 * @example
 ```js
 var a = [1,2,3];
 trace(a.last());
 // 1

 var b = [1, 2, {a:"액시스제이"}];
 trace(b.last());
 // {"a":"액시스제이"}

 var c = [1, 2, [1,2,3]];
 trace(c.last());
 // [1, 2, 3]
 ```
 */
	function last() {
		return this[this.length - 1];
	}
/**
 * 인자값에 해당하는 인덱스의 아이템을 반환합니다.
 * @method Array.getToSeq
 * @param {Number} seq
 * @returns {Object}
 * @example
```js
 var a = [1,2,3];
 trace(a.getToSeq(1));
 // 2

 var a = [1,{a:2},3];
 trace(a.getToSeq(1));
 // {"a":2}
 ```
 */
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
/**
 * 사용자가 정의한 조건에 맞는 아이템을 제거한 Array 를 반환합니다.
 * @method Array.remove
 * @param {Function} callBack - remove 처리할 대상에 return true; 하면 true 인 대상이 제거 됩니다.
 * @returns {Array}
 * @example
```js
 var a = [1,2,3,4];
 trace(a);
 // [1, 2, 3, 4]
 a = a.remove(function(idx, item){
	return (item == 3);
});
 trace(a);
 // [1, 2, 4]

 var b = [1,2,3,4];
 trace(b);
 // [1, 2, 3, 4]
 b = b.remove(function(){
	return (this.item == 3 || this.index == 0);
});
 trace(b);
 // [2, 4]
 ```
 */
	function remove(callBack) {
		var _self = this;
		var collect = [];
		AXUtil.each(this, function (index, O) {
			if (!callBack.call({ index: index, item: O }, index, O)) collect.push(O);
		});
		return collect;
	}
/**
 * 사용자가 정의한 조건에 맞는 아이템 갯수를 반환합니다.
 * @method Array.search
 * @param {Function} callBack
 * @returns {Number}
 * @example
```js
 var a = [1,2,3,4];
 trace(a);
 // [1, 2, 3, 4]
 trace(a.search(function(idx, item){
	return (item < 3);
}));
 // 2
 ```
 */
	function search(callBack) {
		var _self = this;
		var collect = [];
		AXUtil.each(this, function (index, O) {
			if (callBack.call({ index: index, item: O }, index, O)) collect.push(O);
		});
		return collect.length;
	}
/**
 * 사용자가 정의한 조건에 맞는 아이템을 모두 반환합니다.
 * @method Array.searchObject
 * @param {Function} callBack
 * @returns {Array}
 * @example
```js
 var a = [1,2,3,4];
 trace(a);
 // [1, 2, 3, 4]
 trace(a.searchObject(function(idx, item){
	return (item < 3);
}));
 // [1, 2]

 var b = [1,2,3,4];
 trace(b);
 // [1, 2, 3, 4]
 trace(b.searchObject(function(idx, item){
	return (this.item < 3);
}));
 // [1, 2]
```
 */
	function getObject(callBack) {
		var _self = this;
		var collect = [];
		AXUtil.each(this, function (index, O) {
			if (callBack.call({ index: index, item: O }, index, O)) collect.push(O);
		});
		return collect;
	}
/**
 * 사용자가 정의한 조건에 맞는 아이템을 한 개만 반환합니다.
 * @method Array.hasObject
 * @param {Function} callBack
 * @returns {Object}
 * @example
```js
 var a = [1,2,3,4];
 trace(a);
 // [1, 2, 3, 4]
 trace(a.has(function(idx, item){
	return (item == 3);
}));
 // 3

 var b = [1,2,3,4];
 trace(b);
 // [1, 2, 3, 4]
 trace(b.has(function(idx, item){
	return (this.item == 3);
}));
 // 3
 ```
 */
	function hasObject(callBack) {
		var _self = this;
		var collect = null;
		AXUtil.each(this, function (index, O) {
			if (callBack.call({ index: index, item: O }, index, O)) {
				collect = O;
				return false;
			}
		});
		return collect;
	}
	/* 13-06-13 메소드 확장 */

/**
 * Object Array의 키를 정렬한후 가장 작은 값을 반환합니다.
 * @method Array.getMinObject
 * @param {String} key
 * @returns {Object}
 * @example
```js
 var myArray = [{a:99},{a:2},{a:1}];
 myArray.getMinObject("a");
 // Object {a: 1}
```
 */
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
/**
 * Object Array의 키를 정렬한후 가장 큰 값을 반환합니다.
 * @method Array.getMaxObject
 * @param {String} key
 * @returns {Object}
 * @example
 ```js
 var myArray = [{a:2},{a:99},{a:1}];
 myArray.getMaxObject("a");
 // Object {a: 99}
 ```
 */
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
/**
 * 리스트형 데이터를 부모 참조키와 자식 참조키를 이용하여 트리형 데이터로 변환처리 합니다.
 * @method Array.convertTree
 * @param {String} parentKey
 * @param {String} childKey
 * @param {String} [hashDigit=3] - 트리의 주소값에 해당하는 hash 의 자릿수 단위 설정 (기본값 3)
 * @returns {Object}
 * @example
```js
 var a = [
	 {pno:0, no:1, name:"장기영"},
	 {pno:1, no:2, name:"장기영"},
	 {pno:1, no:3, name:"장기영"},
	 {pno:3, no:4, name:"장기영"},
	 {pno:3, no:5, name:"장기영"},
	 {pno:5, no:6, name:"장기영"},
	 {pno:5, no:7, name:"장기영"}
 ];

 var myTree = a.convertTree("pno", "no");
 trace(myTree);
 //[{"pno":0, "no":1, "name":"장기영", "subTree":[{"pno":1, "no":2, "name":"장기영", "__subTreeLength":0, "subTree":[], "pHash":"000_000", "hash":"000_000_000"}, {"pno":1, "no":3, "name":"장기영", "__subTreeLength":2, "subTree":[{"pno":3, "no":4, "name":"장기영", "__subTreeLength":0, "subTree":[], "pHash":"000_000_001", "hash":"000_000_001_000"}, {"pno":3, "no":5, "name":"장기영", "__subTreeLength":2, "subTree":[{"pno":5, "no":6, "name":"장기영", "__subTreeLength":0, "subTree":[], "pHash":"000_000_001_001", "hash":"000_000_001_001_000"}, {"pno":5, "no":7, "name":"장기영", "__subTreeLength":0, "subTree":[], "pHash":"000_000_001_001", "hash":"000_000_001_001_001"}], "pHash":"000_000_001", "hash":"000_000_001_001"}], "pHash":"000_000", "hash":"000_000_001"}], "__subTreeLength":2, "pHash":"000", "hash":"000_000"}]
 ```
 */
	function convertTree(parentKey, childKey, hashDigit) {
		var tree = [];
		var pointer = {};
		var seq = 0;
		var hashDigit = hashDigit || 3;
		for (var idx = 0; idx < this.length; idx++) {
			var L = this[idx];
			if (!L.isRoot) {
				pointer[L[childKey]] = idx;

				if (typeof L[parentKey] === "undefined" || L[parentKey] == "" || L[parentKey].number() == 0) {
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
				axf.each(pHashs, function (idx, T) {
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
/**
 * 조건에 맞는 아이템을 index 값과 함께 반환합니다.
 * @method Array.getIndex
 * @param {Function} context
 * @returns {Object}
 * @example
```js
 var b = [1,2,3,4];
 trace(b);
 // [1, 2, 3, 4]
 trace(b.getIndex(function(idx, item){
	return (this.item >= 3);
 }));
 //  {"item":3, "index":2}
 ```
 */
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

//JSON.stringify = Object.toJSON;
function AXgetId(id) { return document.getElementById(id); }
function AX_A(iterable) { if (!iterable) return []; if ('toArray' in Object(iterable)) return iterable.toArray(); var length = iterable.length || 0, results = new Array(length); while (length--) results[length] = iterable[length]; return results; }

var trace = axf.console;
var getUrlInfo = axf.getUrlInfo;
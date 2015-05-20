/*! 
AXJ - v1.0.15 - 2015-05-20 
*/
/*! 
AXJ - v1.0.15 - 2015-05-20 
*/

if(!window.AXConfig){
/**
 * AXISJ UI 등에 기본값으로 사용되는 설정 변수
 * @namespace {Object} AXConfig
 * @example
 ```json
 AXconfig.weekDays = [{label:""},..];
 AXConfig.AXReq.contentType = "";
 // 처럼 기본값을 수정할 수 있습니다.
 // .net 에서 webMethod를 이용하여 개발할 때는 다음의 설정을 권장합니다.
 AXConfig.AXReq.okCode = "00";
 AXConfig.AXReq.contentType = "application/json; charset=utf-8";
 AXConfig.AXReq.dataSendMethod = "json";
 AXConfig.AXReq.resultFormatter = function () {
	return this.d.object();
 };
 ```
 */
	var AXConfig = {
/**
 * calendar weekDays label
 * @memberof AXConfig
 * @example
 ```json
 weekDays: [
	 { label: "일" },
	 { label: "월" },
	 { label: "화" },
	 { label: "수" },
	 { label: "목" },
	 { label: "금" },
	 { label: "토" }
 ]
 ```
 */
		weekDays: [
			{ label: "일" },
			{ label: "월" },
			{ label: "화" },
			{ label: "수" },
			{ label: "목" },
			{ label: "금" },
			{ label: "토" }
		],
/**
 * AXReq default config
 * @memberof AXConfig
 * @example
 ```json
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
}
 ```
 */
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
/**
 * AXGrid default config
 * @memberof AXConfig
 * @example
 ```json
 AXGrid: {
	passiveMode: false,
	passiveRemoveHide: false,
	fitToWidthRightMargin: 10,
	fitToWidth: false,
	pageSize: 10,
	pageHeight: 400,
	keyResult: "result",
	keyList: "list",
	emptyListMSG: "empty of list",
	listCountMSG: "<b>{listCount}</b> count(s)",
	pageCountMSG: "page(s)"
}
 ```
 */
		AXGrid: {
			passiveMode: false,
			passiveRemoveHide: false,
			fitToWidthRightMargin: 10,
			fitToWidth: false,
			pageSize: 10,
			pageHeight: 400,
			keyResult: "result",
			keyList: "list",
			emptyListMSG: "empty of list",
			listCountMSG: "<b>{listCount}</b> count(s)",
			pageCountMSG: "page(s)"
		},
/**
 * AXTree default config
 * @memberof AXConfig
 * @example
 ```json
 AXTree: {
	fitToWidthRightMargin: 10,
	fitToWidth: false,
	pageSize: 10,
	pageHeight: 400,
	keyResult: "result",
	keyTree: "tree",
	keyList: "list",
	emptyListMSG: "목록이 없습니다.",
	persist: true,
    cookiePrefix: "axtree-",
    cookieExpiredays: 7
}
 ```
 */
		AXTree: {
			fitToWidthRightMargin: 10,
			fitToWidth: false,
			pageSize: 10,
			pageHeight: 400,
			keyResult: "result",
			keyTree: "tree",
			keyList: "list",
			emptyListMSG: "목록이 없습니다.",
			persistExpanded: false,
			persistSelected: false,
			cookiePrefix: "axtree-",
			cookieExpiredays: 7
		},
/**
 * AXProgress default config
 * @memberof AXConfig
 * @example
 ```json
 AXProgress: {
	cancelMsg: "프로세스를 취소 하시겠습니까?"
}
 ```
 */
		AXProgress: {
			cancelMsg: "프로세스를 취소 하시겠습니까?"
		},
/**
 * AXUpload5 default config
 * @memberof AXConfig
 * @example
 ```json
 AXUpload5: {
	buttonTxt: "Upload files",
	deleteConfirm: "정말 삭제하시겠습니까?",
	uploadSelectTxt: "업로드 하실 파일을 선택해주세요.",
	dropZoneTxt: "업로드할 파일을 여기에 놓습니다."
}
 ```
 */
		AXUpload5: {
			buttonTxt: "Upload files",
			deleteConfirm: "정말 삭제하시겠습니까?",
			uploadSelectTxt: "업로드 하실 파일을 선택해주세요.",
			dropZoneTxt: "업로드할 파일을 여기에 놓습니다."
		},
/**
 * AXModal default config
 * @memberof AXConfig
 * @example
 ```json
 AXModal: {
	contentDivClass: "bodyHeightDiv"
}
 ```
 */
		AXModal: {
			contentDivClass: "bodyHeightDiv",
			pars: ""
		},
/**
 * AXInput default config
 * @memberof AXConfig
 * @example
 * ```json
 * AXInput: {
 * 	errorPrintType: "toast",
 * 	selectorOptionEmpty: "목록이 없습니다.",
 * 	yearText:"{year}년",
 * 	monthText:"{month}월",
 * 	confirmText:"확인",
 * 	keyOptions:"options",
 * 	keyOptionValue:"optionValue",
 * 	keyOptionText:"optionText"
 * }
 * ```
 */
		AXInput: {
			errorPrintType: "toast",
			selectorOptionEmpty: "목록이 없습니다.",
			yearText:"{year}년",
			monthText:"{month}월",
			confirmText:"확인",
			keyOptions:"options",
			keyOptionValue:"optionValue",
			keyOptionText:"optionText"
		},
/**
 * AXSelect default config
 * @memberof AXConfig
 * @example
 * ```json
 * AXSelect: {
 *  keyOptions:"options",
 *  keyOptionValue:"optionValue",
 *  keyOptionText:"optionText"
 * }
 * ```
 */
		AXSelect: {
			keyOptions:"options",
			keyOptionValue:"optionValue",
			keyOptionText:"optionText"
		},
/**
 * AXContextMenu default config
 * @memberof AXConfig
 * @example
 ```json
 AXContextMenu: {
	title:"선택하세요"
}
 ```
 */
		AXContextMenu: {
			title:"선택하세요"
		},
/**
 * mobile default config : 모바일 UI 반응너비
 * @memberof AXConfig
 * @example
 ```json
 mobile: {
	responsiveWidth: 0
}
 ```
 */
		mobile: {
			responsiveWidth: 0
		},
/**
 * AXEditor default config
 * @memberof AXConfig
 * @example
 ```json
 AXEditor: {
	editor_frameSrc : "/_AXJ/lib/AXEditor.html",
	iconDirectory : "/ui/icons/"
}
 ```
 */
		AXEditor: {
			editor_frameSrc : "/_AXJ/lib/AXEditor.html",
			iconDirectory : "/ui/icons/"
		},
/**
 * AXTab default config
 * @memberof AXConfig
 * @example
 ```json
 AXTab: {
	closable : false
}
 ```
 */
		AXTab: {
			closable : false
		}
	};
}
/* ---------------------------- */
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
/* ---------------------------- */
/**
 * AXJ UI 클래스 기본형
 * @class AXJ
 */
var AXJ = Class.create({
/**
 * @member AXJ.config
 * @description UI클래스 설정 변수
 */
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
/**
 * @method AXJ.setConfig
 * @param {Object} configs - 속성오브젝트
 * @returns {AXJ}
 * @description UI 클래스의 속성을 정의 또는 재정의 하고 클래스내부에 init 메소드를 호출합니다.
 * @example
 ```js
myClass.setConfig({
	a:1, b:2, c:function(){}
});
 ```
 */
    setConfig: function (configs) {
		// overwrite this.config
		if (configs) {for ( k in configs ) {if (configs.hasOwnProperty(k)) this.config[k] = configs[k];}}
		// configs에 targetID가 없고 target만 지정한 경우 targetID 자동생성
        if(this.config.target) if(this.config.target.id === undefined || this.config.target.id == "") axdom(this.config.target).attr("id", this.config.target.id = this.config.targetID = "AXJUnique_"+axf.getUniqueId());
        this.init();
	    return this;
    },
/**
 * @method AXJ.changeConfig
 * @param {Object} configs - 속성오브젝트
 * @returns {AXJ}
 * @description UI 클래스의 속성을 변경 합니다.
 * @example
 ```js
myClass.changeConfig({
	a:1
});
 ```
 */
    changeConfig: function (configs) {
	    if (configs) {for ( k in configs ) {if (configs.hasOwnProperty(k)) this.config[k] = configs[k];}}
	    return this;
    },
/**
 * @method AXJ.getEventTarget
 * @param {Object} args - 설명
 * @returns {Null}
 * @description 설명
 * @example
 ```js
var myTarget = this.getEventTarget({
    evt : event.target,
	until:function(evt, evtIDs){
		// 선택 조건
		// event bubble 탐색 종료 시점 정의 함수 argument 로 받은 eventTarget 과 evtIDs 객체로 부터 다양한 조건으로 설정가능
		// return true; 하면 버블 탐색 종료 됨.
		// return ( axdom(evt.parentNode).hasClass("CTclassName") );
		return (evt.parentNode.tagName == "body");
	},
	find:function(evt, evtIDs){
		// return true; 하면 버블탐색 종료 후 현재 eventTarget 리턴
		//return ( axdom(evt).hasClass("colHeadTd") );
		return ( evt.id == objID || (evtIDs[0] == cfg.targetID && evtIDs[1] == objID) );
	}
});

if(myTarget){
	//something
}
 ```
*/
    getEventTarget: function (args) {
        var eventTarget = args.evt;
        var eid = (eventTarget && eventTarget.id && eventTarget.id != "") ? eventTarget.id.split(/_AX_/g) : [];
        if (eventTarget) {
            while (!args.find(eventTarget, eid)) {
                if (!eventTarget.parentNode) { eventTarget = null; break; }
                if (args.until) { if (args.until(eventTarget, eid)) { eventTarget = null; break; } }
                if (eventTarget.parentNode) {
                    eventTarget = eventTarget.parentNode;
                    try {
                        eid = (eventTarget && eventTarget.id && eventTarget.id != "") ? eventTarget.id.split(/_AX_/g) : [];
                    } catch (e) {
                        eid = [];
                    }
                } else {
                    break;
                }
            }
        }
        return eventTarget;
    },
/**
 * @method AXJ.getMousePositon
 * @param {eventObject} event
 * @returns {Object} css - pageX, pageY
 * @description 스크롤된 페이지에서 이벤트의 마우스 x,y 페이지포지션을 구해줍니다.
 */
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
/**
 * @method AXJ.stopEvent
 * @param {eventObject} event - 이벤트
 * @description 이벤트 버블링을 중지 합니다.
 * @example
```js
var _this = this;
axdom("#" + elementID).on("mousedown", function(event){
	_this.stopEvent();
});
 ```
 */
    stopEvent: function (event) {
		try {
			if (event.preventDefault) event.preventDefault();
	        if (event.stopPropagation) event.stopPropagation();
			event.cancelBubble = true;
		}catch(e){

		}
        return false;
    },
/**
 * @method AXJ.clearRange
 * @returns {AXJ}
 * @description 현재 페이지의 모든 사용자 선택을 취소 합니다.
 * @example
```js
this.clearRange();
```
 */
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
		return this;
    },
/**
 * @method AXJ.windowResize
 * @description windowResizeApply메소드 호출을 연속으로 수행되지 않도록 하는 보호장치
 * @example
```js
 var _this = this;
 $(window).resize(function(){
   _this.windowResize();
 });
 // 결과적으로 windowResizeApply가 호출됩니다.
```
 */
    windowResize: function () {
        var windowResizeApply = this.windowResizeApply.bind(this);
        if (this.windowResizeObserver) clearTimeout(this.windowResizeObserver);
        this.windowResizeObserver = setTimeout(function () {
            windowResizeApply();
        }, 1);
    },
    windowResizeApply: function () {

    }
});

/**
 * @namespace {jQueryObject} jQueryExtends
 */

// -- AXReq ----------------------------------------------
/**
 * @class AXReqQue
 * @version v1.4
 * @author tom@axisj.com
 * @logs
 * 2012-09-28 오후 2:58:32 - 시작
 * 2014-04-10 - tom : onbeforesend 옵션 추가 return false 하면 호출 제어됨.
 * 2014-10-06 - tom : dataSendMethod bug fix.
 * 2014-12-31 - tom : AXConfig.AXReq.pars 확장
 * 2015-03-19 - tom : AXConfig.AXReq.dataSendMethod = "json|query-json|parameter" 옵션을 수용하도록 변경 *
 */
var AXReqQue = Class.create({
/**
 * AJAX호출 큐
 * @member {Array} AXReqQue.que
 */
/**
 * AJAX호출 진행상태
 * @member {Boolean} AXReqQue.busy
 */
    initialize: function () {
        this.que = [];
        this.busy = false;
    },
/**
 * @method AXReqQue.add
 * @param {Object} obj - ajax config
 * @returns {AXReqQue}
 * @description que.push
 */
    add: function (obj) {
        this.que.push(obj);
        try {
            this.start();
        } catch (e) {

        }
		return this;
    },
/**
 * @method AXReqQue.start
 * @description que에 담긴 AJAX호출을 처리합니다.
 */
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
        axf.each(myQue.configs, function (k, v) { // update to {this.config}
            if (k == "pars") {

            }
            else {
                config[k] = v;
            }
        });

        var onerr = this.onerror.bind(this);
        var ontimeout = this.ontimeout.bind(this);
        var onsucc = this.onsucc.bind(this);
		var dataSendMethod = (myQue.configs.dataSendMethod || AXConfig.AXReq.dataSendMethod || "");
        if (dataSendMethod != "json") {

        } else {
            if (typeof myQue.configs.pars == "object") {
                myQue.configs.pars.dummy = AXUtil.timekey();
            } else if (typeof myQue.configs.pars == "string") {
                if (myQue.configs.pars == "") myQue.configs.pars += "dummy=" + AXUtil.timekey();
                else myQue.configs.pars += "&dummy=" + AXUtil.timekey();
            }
        }

        if (config.debug) trace({ url: myQue.url, pars: myQue.configs.pars });

        var ajaxOption = {}, pars;
        axf.each(config, function (k, v) { // update to {this.config}
            ajaxOption[k] = v;
        });
        ajaxOption.url = myQue.url;
        pars = myQue.configs.pars;
        if(dataSendMethod != "DTO" && AXConfig.AXReq.pars){
            if (typeof pars == "object") {
                if (typeof AXConfig.AXReq.pars == "object") {
                    pars = jQuery.extend(pars, AXConfig.AXReq.pars);
                } else if (typeof AXConfig.AXReq.pars == "string") {
                    pars = jQuery.extend(pars, AXConfig.AXReq.pars.queryToObject());
                }
            }else if (typeof pars == "string") {
                if (typeof AXConfig.AXReq.pars == "object") {
                    pars += "&" + jQuery.param(AXConfig.AXReq.pars);
                } else if (typeof AXConfig.AXReq.pars == "string") {
                    pars += "&" + AXConfig.AXReq.pars;
                }
            }
        }

		if (dataSendMethod == "json") {
			ajaxOption["data"] = Object.toJSON( ((typeof pars == "string") ? pars.queryToObject() : pars ) );
		}else if (dataSendMethod == "query-json") {
			ajaxOption["data"] = "{queryString:\"" + pars + "\"}";
		}else {
			ajaxOption["data"] = pars;
		}

		ajaxOption.success = onsucc;
        ajaxOption.error = onerr;
        ajaxOption.timeout = ontimeout;

        if (myQue.configs.onbeforesend) {
            if(!myQue.configs.onbeforesend.call(ajaxOption)){
                return false;
            }
        }

        this.que[0]._jQueryAjax = axdom.ajax(ajaxOption);
    },
    onsucc: function (req) {
        if (req != undefined) {
            var myQue = this.que.first(), res;

            try {
                if (myQue.configs.debug) trace("onsucc" + req);

                if (myQue.configs.responseType == "text/html") {
                    res = req;
                } else {
                    if ((typeof req) == "string") {
                        res = req.object();
                    } else {
                        res = AXConfig.AXReq.resultFormatter.call(req);
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
/**
 * @method AXReqQue.abort
 * @returns {AXReqQue} AXReqQue
 * @description 설명
 * @example
```js
 // AXCore.js파일 에서 미리선언된 AXReqQue의 인스턴스 myAXreqQue를 이용하여 abort 명령을 내릴수 있습니다.
 myAXreqQue.abort();
 // 또는
 AXReqAbort();
 // 현재 진행중인 AJAX호출을 취소시켜줍니다.
```
 */
    abort: function(){
        try{
            this.que[0]._jQueryAjax.abort();
        }catch(e){

        }
		return this;
    }
});
var myAXreqQue = new AXReqQue();
var AXReqAbort = function(){
    myAXreqQue.abort();
};

/**
 * @class AXReq
 * @param {String} url - 비동기 호출 URL
 * @param {Object} config - 비동기 호출 설정
 * @description AJAX 호출구문을 AXReqQue 에 add 하여 비동기 호출합니다.
 * @example
```
var url = "";
var pars = "";
new AXReq(url, {
	debug: [true|false] default false,
	type: ["GET"|"POST"|"PUT"|"DELETE"|String] default "POST",
	contentType: [AJAX content type] optional,
	responseType: [AJAX response type] optional,
	dataType: [Ajax data type] optional,
	headers: [AJAX headers] optional,
	pars: [parameter|Object],
	onsucc: [Function],
	onerr: [Function] optional
});
```
 */
var AXReq = Class.create({
    initialize: function (url, configs) {
        myAXreqQue.add({ url: url, configs: configs });
    }
});
/* ---------------------------------------------- AXReq -- */

/* -- AXMask ---------------------------------------------- */
/**
 * @class AXMask
 * @version v1.4
 * @author tom@axisj.com
 * @logs
 * 2012-09-28 오후 2:58:32 - 시작
 * append 메소드 추가
 * 2014-09-17 hyunjun19 : 지정한 대상의 영역만 masking 하도록 style 추가
 * 2015-04-19 tom : body.data에 마스크상태값 저장
 * 2015-05-16 tom : mask.close(delay) 중 open 되면 예외처리, open상태에서 다시 open 도 예외처리
 * @description 웹페이지 전체에 사용자 입력을 막기위한 마스크를 추가하는데 사용
 * ```js
 mask.open();
 ```
 *
 */
var AXMask = Class.create(AXJ, {
    initialize: function (AXJ_super) {
        AXJ_super();
        this.selects = [];
        this.config.maskClassName = "AXMask";
        this.config.maskContentClassName = "AXMaskContent";
        this.config.content = "disable content";
        this.config.maskZindex = "5000";
        this.blinkTrack = [];
    },
    init: function () {
        this.mask = axdom("<div class=\"" + this.config.maskClassName + "\" style=\"z_index:" + this.config.maskZindex + "\"></div>");
    },
    open: function (configs) {
        if(this.maskDelay) clearTimeout(this.maskDelay);
        if(axdom(document.body).data("masked") != "true"){
            axdom(document.body).append(this.mask);
            axdom(document.body).data("masked", "true");
            var bodyHeight = 0;
            (AXUtil.docTD == "Q") ? bodyHeight = document.body.clientHeight : bodyHeight = document.documentElement.clientHeight;

            if (configs) {
                if (!configs.onclick) configs.onclick = configs.onClick;
                if (configs.onclick) {
                    this.mask.bind("click.AXMask", configs.onclick);
                }
            }
        }
    },
    append: function (targetID, configs) {
        var target = axdom("#"+targetID);
        if (target.css("position") == "static") { target.css("position", "relative") }
        target.append(this.mask.css({ 'position': 'absolute', 'top': 0, 'left': 0 }));

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
            axdom(document.body).data("masked", null);
        } else {
            var maskHide = this.hide.bind(this);
            if(this.maskDelay) clearTimeout(this.maskDelay);
            this.maskDelay = setTimeout(maskHide, delay);
        }
        this.blinkTrack.clear();
    },
    hide: function () {
        this.mask.unbind("click.AXMask");
        this.mask.remove();
        axdom(document.body).data("masked", null);
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
    },
    setContent: function(content){
        var po = [];
        if(Object.isString(content)){
            po.push(content);
        }else{
            var po = [];
            po.push("<div style='width: "+content.width+"px;height:"+content.height+"px;position: absolute;left:50%;top:50%;text-align: center;margin-left: -"+ (content.width/2) +"px;margin-top:-"+ (content.height/2) +"px;'>");
            po.push(content.html);
            po.push("</div>")
        }
        this.mask.html(po.join(''));
    }
});
var mask = new AXMask();
mask.setConfig();

/**
 * @method AXMask.open
 * @param {Object} config - 설명
 * @returns {Null}
 * @description 설명
 * @example
```
 mask.open({onclick:function(){
    // mask click event
 });
 mask.open();
```
 */


/**
 * @method jQueryExtends.mask
 * @param {Object} config - 설명
 * @returns {jQueryObject}
 * @description mask 삽입위치를 엘리먼트 다음의 위치로 합니다.
 * @example
 ```
 $("#target").mask();
 $("#target").mask({
    onclick: function(){
        // mask click event
    }
 });
 ```
 */
axdom.fn.mask = function (configs) {
	axf.each(this, function () {
		mask.append(this.id, configs);
	});
	return this;
};

/* ---------------------------------------------- AXMask -- */

/* -- AXNotification ---------------------------------------------- */
/**
 * AXNotification
 * @class AXNotification
 * @extends AXJ
 * @version v1.7
 * @author tom@axisj.com
 * @logs
 "2012-10-30 오후 12:01:10",
 "2013-01-09 오후 1:46:55 push type bug fix - tom"
 "2014-05-23 tom : dialog 에서 mask 제어 안하도록 변경"
 "2014-05-26 tom : dialog 에서 top 속성 설정 추가"
 "2014-08-16 tom : dialog body에서 \n -> <br/> auto replace "
 "2014-08-25 tom : dialog body에서 \n -> <br/> auto replace 예외처리 "
 "2015-01-12 tom : ie7,8 fadeOut error fix https://github.com/axisj-com/axisj/issues/386"
 "2015-01-19 tom : https://github.com/axisj-com/axisj/issues/392 dialog에 onConfirm 추가"
 "2015-04-14 tom : https://github.com/axisj-com/axisj/issues/532 dialog에 onclose 추가"
 */
var AXNotification = Class.create(AXJ, {
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
            this.toastTray = axdom("<div class=\"AXNotificationTray\" id=\"" + config.targetID + "\"></div>");
        } else if (config.type == "dialog") {
            this.dialogTray = axdom("<div class=\"AXNotificationTrayDialog\" id=\"" + config.targetID + "\"></div>");
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
	        if(Object.isString(obj)){
		        po.push(obj.crlf());
	        }else{
		        po.push(obj);
	        }
            po.push("				</td>");
            po.push("			</tr>");
            po.push("		</tbody>");
            po.push("	</table>");

            if (config.type == "dialog") {
                po.push("	<div class=\"AXNotificationButtons\">");
                po.push("	<input type=\"button\" value=\"" + config.confirmStr + "\" class=\"AXButton Red\"  id=\"bread_AX_" + breadID + "_AX_confirm\" />");
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
            if(Object.isString(obj.body)){
	            po.push(obj.body.crlf());
            }else{
	            po.push(obj.body);
            }
            po.push("				</td>");
            if (obj.type == "Caution" && config.type != "dialog") {
                if (!obj.buttons) {
                    po.push("				<td class=\"AXNotificationButton\" align=\"right\">");
                    po.push("				<input type=\"button\" value=\"" + config.confirmStr + "\" class=\"AXButton Red\"  id=\"bread_AX_" + breadID + "_AX_confirm\" />");
                    po.push("				</td>");
                }
            }
            po.push("			</tr>");
            po.push("		</tbody>");
            po.push("	</table>");
            if (obj.buttons) {
                po.push("	<div class=\"AXNotificationButtons\">");
                AXUtil.each(obj.buttons, function (index, B) {
                    po.push("	<input type=\"button\" value=\"" + this.buttonValue + "\" class=\"AXButton " + (this.buttonClass || "") + "\"  id=\"bread_AX_" + breadID + "_AX_buttons_AX_" + index + "\" />");
                });
                po.push("	</div>");
            } else if (config.type == "dialog") {
                po.push("	<div class=\"AXNotificationButtons\">");
                po.push("	<input type=\"button\" value=\"" + config.confirmStr + "\" class=\"AXButton Red\"  id=\"bread_AX_" + breadID + "_AX_confirm\" />");
                po.push("	</div>");
            }
            po.push("</div>");
            po.push("</div>");

        }

        if (config.type == "toast") {
            if (!AXgetId(config.targetID)) axdom(document.body).append(this.toastTray);
            this.bread.push({ breadID: breadID, type: obj.type, html: po.join('').enc() });
            this.insertBread(obj);
        }
        else
        if (config.type == "dialog") {
            if (!AXgetId(config.targetID)) axdom(document.body).append(this.dialogTray);
            this.dialogTray.prepend(po.join(''));

            var bodyWidth = (AXUtil.docTD == "Q") ? document.body.clientWidth : document.documentElement.clientWidth;
            //var l = bodyWidth / 2 - this.dialogTray.width() / 2;
	        if(obj.top != undefined){
		        this.dialogTray.css({ top:obj.top });
	        }else{
		        this.dialogTray.css({ top:50 });
	        }

            var breadBox = axdom("#bread_AX_" + breadID);
            breadBox.fadeIn();

            var endCheck = this.endCheck.bind(this);

            //Confirm button
            axdom("#bread_AX_" + breadID + "_AX_confirm").bind("click", function () {
                if (obj.onConfirm) obj.onConfirm(obj.data);
                breadBox.find("button, input").hide();
                breadBox.fadeOut({
                    duration: config.easing.close.duration, easing: config.easing.close.easing, complete: function () {
                        breadBox.remove();
                        endCheck();
                    }
                });
            });

            //AXBUTTON
            axdom(".AXNotificationButtons").find(".AXButton").bind("click", function (event) {
                var eid = event.target.id.split(/_AX_/g);
                var myBreadID = eid[1];
                var buttonSeq = eid.last(), breadBox = axdom("#bread_AX_" + myBreadID);
                if (obj.buttons) {
                    if (obj.buttons[buttonSeq]) {
                        if (obj.buttons[buttonSeq].onClick) obj.buttons[buttonSeq].onClick(obj.buttons[buttonSeq].data);
                    }
                }
                breadBox.find("button, input").hide();
                breadBox.fadeOut({
                    duration: config.easing.close.duration, easing: config.easing.close.easing, complete: function () {
                        breadBox.remove();
                        endCheck();
                    }
                });
            });

            axdom(".AXNotificationButtons").find(".AXButton").get(0).focus();

            axdom(document.body).unbind("keyup."+breadID).bind("keyup."+breadID, function(event){
                if(event.keyCode == AXUtil.Event.KEY_ESC){
                    axdom("#bread_AX_" + breadID).fadeOut({
                        duration: config.easing.close.duration, easing: config.easing.close.easing, complete: function () {
                            axdom("#bread_AX_" + breadID).remove();
                            endCheck(breadID, obj);
                        }
                    });
                }
            });
        }
    },
    insertBread: function (obj) {
        var config = this.config;
        if (this.bread.length == 0) {
            return;
        }
        if (this.busy) return;
        this.busy = true;

        var nextBread = this.nextBread.bind(this);
        var endCheck = this.endCheck.bind(this);

        var myQue = this.bread.first();
        var breadID = myQue.breadID, breadBox;
        axdom("#" + config.targetID).prepend(myQue.html.decode());
        breadBox = axdom("#bread_AX_" + breadID);

        axdom("#bread_AX_" + breadID + "_AX_confirm").bind("click", function () {
            if (obj.onConfirm) obj.onConfirm(obj.data);
            breadBox.find("button, input").hide();
            breadBox.fadeOut({
                duration: config.easing.close.duration, easing: config.easing.close.easing, complete: function () {
                    breadBox.remove();
                    endCheck();
                }
            });
        });

        axdom("#bread_AX_" + breadID).slideDown({
            duration: config.easing.open.duration, easing: config.easing.open.easing, complete: function () {
                nextBread();
                //axdom("#msg").html(axdom("#msg").html()+"<br/>"+AXgetId("bread_AX_"+breadID)+"/"+breadID);
                if (myQue.type != "Caution") {
                    setTimeout(function () {
                        breadBox.fadeOut({
                            duration: config.easing.close.duration, easing: config.easing.close.easing, complete: function () {
                                breadBox.remove();
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
    endCheck: function (breadID, obj) {
        if (axdom("#" + this.config.targetID).html() == "") {
            this.lasBreadSeq = 0;
            if (this.config.type == "dialog") {
                if(breadID) {
                    axdom(document.body).unbind("keyup." + breadID);
                    if(obj && obj.onclose) obj.onclose.call(obj, obj);
                }
            }
        }
    }
});

/**
 * @method AXNotification.push
 * @param {Object|String} content - 대상물 문자열 혹은 오브젝트로 구성
 * @description notification은 dialog, toast 2가지 형태가 존재하고 각각 push 메소드를 이용하여 출력한다.
 * @example
```
 //toast
 toast.push('<b>Complete</b>\n Complete messange send !!');
 toast.push({body:'<b>Warning</b> Warning messange send !!', type:'Warning'});
 toast.push({body:'<b>Caution</b> Caution messange send !!', type:'Caution'});

 //dialog
 dialog.push('<b>Alert</b>\n Application Call dialog push');
 dialog.push({body:'<b>Warning</b> Application Call dialog push', type:'Warning'});
 dialog.push({body:'<b>Caution</b> Application Call dialog push', type:'Caution', onConfirm:fnObj.btnOnConfirm, data:'onConfirmData'});
 dialog.push({
	body:'<b>Caution</b> Application Call dialog push', top:0, type:'Caution', buttons:[
	    {buttonValue:'button1', buttonClass:'Red W100', onClick:fnObj.btnClick, data:'data1'},
	    {buttonValue:'button2', buttonClass:'Blue', onClick:fnObj.btnClick, data:'data2'},
	    {buttonValue:'button3', buttonClass:'Green', onClick:fnObj.btnClick, data:'data3'}
	]
 });
```
 */
var toast = new AXNotification();
toast.setConfig({ targetID: "basicToast", type: "toast" });

var dialog = new AXNotification();
dialog.setConfig({ targetID: "basicDialog", type: "dialog" });
/* ---------------------------------------------- AXNotification -- */

/**
 * AXScroll
 * @class AXScroll
 * @extends AXJ
 * @version v1.53.1
 * @author tom@axisj.com, axisj.com
 * @logs
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
 "2013-12-12 오전 10:25:28 tom - moveTo 메소드 추가",
 "2014-01-06 오후 12:55:20 tom - 관성 작용중 touchStart stop 버그픽스",
 "2014-03-31 오후 6:26:34 root - yscroll 이 없어지면 scroll top 을 0으로"
 "2014-06-13 tom scrollBar 와 content 싱크방식 변경 / 버그픽스"
 "2014-07-14 tom issue#221, issue#222 fix"
 "2014-08-20 tom focusElement 버그픽스"
 "2014-08-28 tom setSBPosition 예외사항 exeception"
 * @example
```js
var myUIScroll = new AXScroll(); // 스크롤 인스턴스 선언
myUIScroll.setConfig({
	targetID:"UIScrollContainer",
	scrollID:"UIScrollTarget"
});
 ```
 *
 */
var AXScroll = Class.create(AXJ, {
    initialize: function (AXJ_super) {
        AXJ_super();
        this.config.CT_className = "AXScroll";
        this.config.ST_className = "scrollTarget";
        this.scrollBarMove = false;
        this.scrollBarAttr = {};
        this.Observer = null;
        this.config.yscroll = true;
        this.config.xscroll = false;
	    this.config.scrollBarMargin = 3;

        this.minHeightSB = { TF: false, h: 0 };
        this.minWidthSB = { TF: false, w: 0 };
    },
/**
 * @method AXScroll.setConfig
 * @param {Object} configs - 스크롤 속성 오브젝트
 * @description 스크롤 대상과 스크롤 컨테이너를 지정하여 스크롤UI를 구현합니다.
 * @example
myUIScroll.setConfig({
	targetID:"UIScrollContainer",
	scrollID:"UIScrollTarget",
	bounces:true
});
 */
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
        this.scrollTargetID = axdom("#" + config.targetID);
        this.scrollScrollID = axdom("#" + config.scrollID);
        this.scrollTargetID.addClass(this.config.CT_className);
        this.scrollScrollID.addClass(this.config.ST_className);
        this.initScroll();
        this.bindEvent();
    },
/**
 * @method AXScroll.updateScroll
 * @returns {AXScroll}
 * @description 스크롤 처리 대상의 사이즈를 재정의 합니다. 스크롤 대상의 크기가 변경되었을 때 호출
 * @example
 myUIScroll.updateScroll();
 myUIScroll.resizeScroll(); // updateScroll과 동일한 기능
 */
    updateScroll: function () {
        this.initScroll();
		return this;
    },
	resizeScroll: function () {
		this.initScroll();
		return this;
	},
    initScroll: function () {
        var cfg = this.config, _this = this;
        if (!this.scroll) {
            var po = [];
            if (cfg.yscroll) {
                po.push("<div class=\"scrollTrack\" id=\"" + cfg.targetID + "_AX_scrollTrack\"></div>");
                po.push("<div class=\"scrollBar\" id=\"" + cfg.targetID + "_AX_scrollBar\"></div>");
            } else {
                this.scrollTargetID.css({ height: this.scrollScrollID.outerHeight() });
                /*
                setTimeout(function(){

                }, 10);
                */
            }
            if (cfg.xscroll) {
                po.push("<div class=\"xscrollTrack\" id=\"" + cfg.targetID + "_AX_xscrollTrack\"></div>");
                po.push("<div class=\"xscrollBar\" id=\"" + cfg.targetID + "_AX_xscrollBar\"></div>");
            }

            this.scrollTargetID.append(po.join(''));
            this.scroll = true;

            if (cfg.yscroll) {
                this.scrollTrack = axdom("#" + cfg.targetID + "_AX_scrollTrack");
                this.scrollBar = axdom("#" + cfg.targetID + "_AX_scrollBar");
            }
            if (cfg.xscroll) {
                this.xscrollTrack = axdom("#" + cfg.targetID + "_AX_xscrollTrack");
                this.xscrollBar = axdom("#" + cfg.targetID + "_AX_xscrollBar");
            }
        } else {
            if (!cfg.yscroll) {
                this.scrollTargetID.css({ height: this.scrollScrollID.outerHeight() });
            }
        }

        var CTheight = this.scrollTargetID.innerHeight();
        var CTwidth = this.scrollTargetID.innerWidth();

        if (cfg.yscroll) {
            this.scrollTrack.css({ height: CTheight - (cfg.scrollBarMargin*2) });
        }
        if (cfg.xscroll) {
            this.xscrollTrack.css({ width: CTwidth - (cfg.scrollBarMargin*2) });
        } else {
            this.scrollScrollID.css({ width: CTwidth });
        }

        var Cheight = this.scrollScrollID.outerHeight();
        var Cwidth = this.scrollScrollID.outerWidth();

        if (cfg.yscroll) {
            var SBheight = CTheight * (CTheight - (cfg.scrollBarMargin*2)) / Cheight;
	        if(SBheight < 30) SBheight = 30;
            this.scrollBar.css({ height: Math.ceil(SBheight) });
	        /*
            if (SBheight < 30) {
                this.minHeightSB.TF = true;
                this.minHeightSB.h = SBheight;
            }
            */
            if (CTheight == Cheight || CTheight > Cheight) {
                this.scrollTrack.hide();
                this.scrollBar.hide();
                this.scrollScrollID.css({ top: 0 });
            } else {
                this.scrollTrack.show();
                this.scrollBar.show();
            }
        }
        if (cfg.xscroll) {
            var SBwidth = CTwidth * (CTwidth - (cfg.scrollBarMargin*2)) / Cwidth;
	        if(SBwidth < 30) SBwidth = 30;
            this.xscrollBar.css({ width: Math.ceil(SBwidth) });
	        /*
            if (SBwidth < 30) {
                this.minWidthSB.TF = true;
                this.minWidthSB.w = SBwidth;
            }
            */
            if (CTwidth == Cwidth || CTwidth > Cwidth) {
                this.xscrollTrack.hide();
                this.xscrollBar.hide();
            } else {
                this.xscrollTrack.show();
                this.xscrollBar.show();
            }
        }
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
        if (this.touhEndObserver) clearTimeout(this.touhEndObserver);
        if (this.touhMoveObserver) clearTimeout(this.touhMoveObserver);

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

        if((scrollPosition.left < minLeft && scrollPosition.left > maxLeft) || (scrollPosition.top < minTop && scrollPosition.top > maxTop)){
            this.scrollScrollID.stop();
            if(cfg.yscroll) this.scrollBar.stop();
            if(cfg.xscroll) this.xscrollBar.stop();
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
                if(this.moveBlock({top:touch.pageY - this.touchStartXY.y})){
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
        if(this.touchStartXY){
            this.touhEndObserver = setTimeout(function () {
                moveEndBlock();
            }, 10);
        }
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
	    var cfg = this.config;
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

        axdom(document.body).bind("mousemove.AXScroll", this.SBonMouseMoveBind);
        axdom(document.body).bind("mouseup.AXScroll", this.SBonMouseUpBind);
        axdom(document.body).bind("mouseleave.AXScroll", this.SBonMouseUpBind);
    },
    SBonMouseMove: function (event) {
        var config = this.config;
        if (this.scrollBarMove) {
            axdom(document.body).attr("onselectstart", "return false");
            //axdom(document.body).addClass("AXUserSelectNone");
            var pos = this.getMousePosition(event);

            var SBy = pos.y + this.scrollBarAttr.y;
            //trace(SBy +" = "+ pos.y +"+"+ this.scrollBarAttr.y);

            if (SBy < config.scrollBarMargin) SBy = config.scrollBarMargin;
            if ((SBy + this.scrollBarAttr.h) > this.scrollBarAttr.sth) {
                SBy = this.scrollBarAttr.sth - this.scrollBarAttr.h + config.scrollBarMargin;
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
            axdom(document.body).removeAttr("onselectstart");
            //axdom(document.body).removeClass("AXUserSelectNone");
        }
        axdom(document.body).unbind("mousemove.AXScroll");
        axdom(document.body).unbind("mouseup.AXScroll");
        axdom(document.body).unbind("mouseleave.AXScroll");
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

        axdom(document.body).bind("mousemove.AXScroll", this.SBonMouseMoveXBind);
        axdom(document.body).bind("mouseup.AXScroll", this.SBonMouseUpXBind);
        axdom(document.body).bind("mouseleave.AXScroll", this.SBonMouseUpXBind);
    },
    SBonMouseMoveX: function (event) {
        var config = this.config;
        if (this.scrollBarMove) {

            axdom(document.body).attr("onselectstart", "return false");
            //axdom(document.body).addClass("AXUserSelectNone");
            var pos = this.getMousePosition(event);

            var SBx = pos.x + this.scrollBarAttr.x;
            //trace(SBy +" = "+ pos.y +"+"+ this.scrollBarAttr.y);

            if (SBx < config.scrollBarMargin) SBx = config.scrollBarMargin;
            if ((SBx + this.scrollBarAttr.w) > this.scrollBarAttr.stw) {
                SBx = this.scrollBarAttr.stw - this.scrollBarAttr.w + config.scrollBarMargin;
            }

            this.xscrollBar.css({ left: SBx });
            this.setContentPosition("xscroll");
        }
    },
    SBonMouseUpX: function (event) {
        if (this.scrollBarMove) {
            var config = this.config;
            this.scrollBarMove = false;
            axdom(document.body).removeAttr("onselectstart");
            //axdom(document.body).removeClass("AXUserSelectNone");
        }
        axdom(document.body).unbind("mousemove.AXScroll");
        axdom(document.body).unbind("mouseup.AXScroll");
        axdom(document.body).unbind("mouseleave.AXScroll");
    },

    SBonWheel: function (e) {
        //content top handle
        var config = this.config;

        var event = (window.event || e);
        var delta = event.detail ? event.detail * (-10) : event.wheelDelta; //check for detail first so Opera uses that instead of wheelDelta

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

	        if (!this.contentScrollXAttr) {
		        this.contentScrollXAttr = {
			        bodyWidth: this.scrollTargetID.width(),
			        scrollWidth: this.scrollScrollID.width(),
			        scrollTrackXWidth: this.xscrollTrack.width(),
			        scrollXHandleWidth: this.xscrollBar.width()
		        };
	        }else{
		        // scrollContent height update
		        this.contentScrollXAttr.scrollWidth = this.scrollScrollID.width();
		        this.contentScrollXAttr.scrollTrackXWidth = this.xscrollTrack.width();
		        this.contentScrollXAttr.scrollXHandleWidth = this.xscrollBar.width();
	        }

            var SBx = this.xscrollBar.position().left - config.scrollBarMargin;
	        var L = (this.contentScrollXAttr.scrollWidth * (SBx) / this.contentScrollXAttr.scrollTrackXWidth).round(0);
            this.scrollScrollID.css({ left: -L });

        } else {

	        if (!this.contentScrollYAttr) {
		        this.contentScrollYAttr = {
			        bodyHeight: this.scrollTargetID.height(),
			        scrollHeight: this.scrollScrollID.height(),
			        scrollTrackYHeight: this.scrollTrack.height(),
			        scrollYHandleHeight: this.scrollBar.height()
		        };
	        }else{
		        // scrollContent height update
		        this.contentScrollYAttr.scrollHeight = this.scrollScrollID.height();
		        this.contentScrollYAttr.scrollTrackYHeight = this.scrollTrack.height();
		        this.contentScrollYAttr.scrollYHandleHeight = this.scrollBar.height();
	        }

            var SBy = this.scrollBar.position().top - config.scrollBarMargin;
	        var T = (this.contentScrollYAttr.scrollHeight - this.contentScrollYAttr.bodyHeight) * ( (SBy) / (this.contentScrollYAttr.scrollTrackYHeight - this.contentScrollYAttr.scrollYHandleHeight) ).number();
            this.scrollScrollID.css({ top: -T });
        }

    },

    setScrollbarPositionForWheel: function (direction, duration, easing, position) {
        //scrollbar top position handle for wheel
        var config = this.config;

        if(direction == "left"){

	        if (!this.contentScrollXAttr) {
		        this.contentScrollXAttr = {
			        bodyWidth: this.scrollTargetID.width(),
			        scrollWidth: this.scrollScrollID.width(),
			        scrollTrackXWidth: this.xscrollTrack.width(),
			        scrollXHandleWidth: this.scrollBar.outerWidth()
		        };
	        }else{
		        // scrollContent height update
		        this.contentScrollXAttr.scrollWidth = this.scrollScrollID.width();
		        this.contentScrollXAttr.scrollTrackXWidth = this.xscrollTrack.width();
		        this.contentScrollXAttr.scrollXHandleWidth = this.xscrollBar.outerWidth();
	        }

	        var Sy = (position) ? position.left : this.scrollScrollID.position().left;
	        var L = (this.contentScrollXAttr.scrollTrackXWidth - this.contentScrollXAttr.scrollXHandleWidth) * ((Sy) / (this.contentScrollXAttr.scrollWidth - this.contentScrollXAttr.bodyWidth));
	        L -= config.scrollBarMargin;
	        if(easing){
                this.xscrollBar.animate({
                    left: -L
                    //,width: Math.ceil(this.scrollTargetID.outerWidth() * (this.scrollTargetID.outerWidth() - 4) / (this.scrollScrollID.outerWidth() + addY))
                }, duration, easing, function () {});
            }else{
                this.xscrollBar.css({
                    left: -L
                    //,width: Math.ceil(this.scrollTargetID.outerWidth() * (this.scrollTargetID.outerWidth() - 4) / (this.scrollScrollID.outerWidth() + addY))
                });
            }
        }else{

            if (!config.yscroll) return false;
            //wheel control event is not jquery event !

	        if (!this.contentScrollYAttr) {
		        this.contentScrollYAttr = {
			        bodyHeight: this.scrollTargetID.height(),
			        scrollHeight: this.scrollScrollID.height(),
			        scrollTrackYHeight: this.scrollTrack.height(),
			        scrollYHandleHeight: this.scrollBar.outerHeight()
		        };
	        }else{
		        // scrollContent height update
		        this.contentScrollYAttr.scrollHeight = this.scrollScrollID.height();
		        this.contentScrollYAttr.scrollTrackYHeight = this.scrollTrack.height();
		        this.contentScrollYAttr.scrollYHandleHeight = this.scrollBar.outerHeight();
	        }

	        var Sy = (position) ? position.top : this.scrollScrollID.position().top;
	        var T = (this.contentScrollYAttr.scrollTrackYHeight - this.contentScrollYAttr.scrollYHandleHeight) * ((Sy) / (this.contentScrollYAttr.scrollHeight - this.contentScrollYAttr.bodyHeight));
			T -= config.scrollBarMargin;
            if(easing){
                //trace({ top: SBy }, duration, easing);

                this.scrollBar.animate({
                    top: -T
                    //,height: Math.ceil(this.scrollTargetID.outerHeight() * (this.scrollTargetID.outerHeight() - 4) / (this.scrollScrollID.outerHeight() + addY))
                }, duration, easing, function () {});
            }else{
                this.scrollBar.css({
                    top: -T
                    //,height: Math.ceil(this.scrollTargetID.outerHeight() * (this.scrollTargetID.outerHeight() - 4) / (this.scrollScrollID.outerHeight() + addY))
                });
            }

        }
    },


    setSBPosition: function () {
        var config = this.config;
	    try {

		    var Ctop = this.scrollScrollID.position().top;
		    var CTheight = this.scrollTargetID.innerHeight();
		    var STh = this.scrollTrack.height();
		    var Ch = this.scrollScrollID.outerHeight();

		    var SBh = this.scrollBar.height();

		    //trace({Ctop:Ctop, CTheight:CTheight, Ch:Ch, STh:STh, SBh:SBh, x:(STh*Ctop)/Ch});
		    var SBtop = -(STh * Ctop) / Ch;
		    if (SBtop < config.scrollBarMargin) SBtop = config.scrollBarMargin;
		    if ((SBtop + SBh) > STh) {
			    SBtop = STh - SBh + config.scrollBarMargin;
		    }
		    this.scrollBar.css({ top: SBtop });
	    }catch(e){

	    }
    },
/**
 * @method AXScroll.focusElement
 * @param {String} id - 포커스 할 대상 엘리먼트 아이디
 * @returns {AXScroll}
 * @description 스크롤 오브젝트 안에 엘리먼트를 포커스 합니다.
 * @example
 myUIScroll.focusElement("resizer01");
 */
    focusElement: function (id) {
        var config = this.config;
        if (AXgetId(id)) {
            //trace(axdom("#"+id).position());
	        var ppos = this.scrollScrollID.offset();
            var pos = axdom("#" + id).offset();

            var myNewTop = pos.top - ppos.top;
            var CTheight = this.scrollTargetID.innerHeight();
            var Cheight = this.scrollScrollID.outerHeight();
            if ((Cheight - myNewTop) < CTheight) {
                myNewTop = Cheight - CTheight;
            }
            if (myNewTop < 0) myNewTop = 0;
            this.scrollScrollID.css({ top: -myNewTop });
            this.setSBPosition();
        }
		return this;
    },
/**
 * @method AXScroll.scrollTop
 * @param {Number} top - scrollTop position
 * @returns {AXScroll}
 * @description 스크롤 포지션을 원하는 포지션으로 이동합니다.
 * @example
 myUIScroll.scrollTop(0);
 */
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
		return this;
    },
/**
 * @method AXScroll.moveTo
 * @param {Number} x - scrollTop position (optional)
 * @param {Number} y - scrollLeft position (optional)
 * @returns {AXScroll}
 * @description 스크롤위치를 이동시킵니다.
 * @example
 myUIScroll.moveTo();
 */

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
		return this;
    },
/**
 * @method AXScroll.unbind
 * @returns {AXScroll}
 * @description 스크롤을 UI를 제거합니다.
 * @example
 myUIScroll.unbind();
 */
    unbind: function () {
        var config = this.config;
        this.scroll = false;

        this.scrollTrack.remove();
        this.scrollBar.remove();

        this.scrollTargetID.unbind("mouseover", this.tractActiveBind);
        this.scrollTargetID.unbind("mouseout", this.tractInActiveBind);

        //axdom("#"+config.targetID+"_AX_scrollBar").unbind("dragstart", this.cancelEventBind);
        //axdom("#"+config.targetID+"_AX_scrollBar").unbind("mousedown", this.SBonMouseDownBind);
        axdom(document.body).unbind("mousemove.AXScroll", this.SBonMouseMoveBind);
        axdom(document.body).unbind("mouseup.AXScroll", this.SBonMouseUpBind);

        var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel";
        if (document.attachEvent) { //if IE (and Opera depending on user setting)
            if (AXgetId(config.targetID)) AXgetId(config.targetID).detachEvent("on" + mousewheelevt, this.SBonWheelBind);
        } else if (document.addEventListener) { //WC3 browsers
            if (AXgetId(config.targetID)) AXgetId(config.targetID).removeEventListener(mousewheelevt, this.SBonWheelBind, false);
        }

        if (document.addEventListener) {
            if (AXgetId(config.targetID)) AXgetId(config.targetID).removeEventListener("touchstart", this.SBtouchstartBind, false)
        }
		return this;
    }
});
/* ---------------------------------------------- AXScroll -- */

/* -- AXCalendar ---------------------------------------------- */
/**
 * @class AXCalendar
 * @extends AXJ
 * @version v1.2
 * @author tom@axisj.com
 * @logs
 * "2012-12-05 오후 11:54:27"
 * "2014-03-31 오후 4:53:02 - tom : timePage PM 이면 12시 선택 못하도록 기능 변경"
 * "2015-03-17 tom : 0시 0분 입력 가능 하도록 수정"
 *
 */
var AXCalendar = Class.create(AXJ, {
/**
 * AXCalendar 기본속성
 * @member {Object} AXCalendar.config
 * @example
 ```js
 {
	 CT_className : {String},
	 weeks : {
	    { name: "SUN" },
	    { name: "MON" },
	    { name: "TUE" },
	    { name: "WED" },
	    { name: "THU" },
	    { name: "FRI" },
	    { name: "SAT" }
	 },
	 printFormat : "dd",
	 titleFormat : "yyyy/mm/dd",
	 valueFormat : "yyyy-mm-dd"
 }
 ```
 */
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
        this.config.printFormat = "dd";
        this.config.titleFormat = "yyyy/mm/dd";
        this.config.valueFormat = "yyyy-mm-dd";
    },
/**
 * @method AXCalendar.setConfig
 * @param {Object} config
 * @description 선언된 스크롤 클래스를 사용하기 위해 속성을 정의합니다.
 * @example
```js
 mycalendar.setConfig(config);

 var config = {
	 CT_className : {String},
	 weeks : {Object} [{ { name: "SUN" }, { name: "MON" }, { name: "TUE" }, { name: "WED" }, { name: "THU" }, { name: "FRI" }, { name: "SAT" } }],
	 printFormat : {String} [dd],
	 titleFormat : {String} [yyyy/mm/dd],
	 valueFormat : {String} [yyyy-mm-dd]
 };
```
 */
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
/**
 * @method AXCalendar.printDayPage
 * @param {String} [toDay]
 * @returns {AXCalendar}
 * @description 일자 캘린더를 targetID 안에 출력합니다
 * @example
```js
 mycalendar.printDayPage("2014-11-01");
```
 */
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
        axf.each(cfg.weeks, function (wi, ww) {
            po.push("<td class=\"head_" + wi + " dayofweek_" + wi + "\">" + ww.name + "</td>");
        });
        po.push("</tr>");
        po.push("</thead>");
        po.push("<tbody>");

        var minTime = -1;
        var maxTime = -1;
        var onBeforeShowDay;
        var roopDate = calendarStartDate;
        if (cfg.minDate) { minTime = cfg.minDate.date().getTime(); }
        if (cfg.maxDate) { maxTime = cfg.maxDate.date().getTime(); }
        if (cfg.onBeforeShowDay) { onBeforeShowDay = cfg.onBeforeShowDay.bind(this); }
        var i = 0; while (i < 6) {
            po.push("<tr>");
            var k = 0; while (k < 7) {
                var roopTime = roopDate.getTime();
                var dayValue = roopDate.print(this.config.printFormat);
                var addClass = [];
                var addStyle = "";
                var tdClass = [];
                var printTitle = roopDate.print(this.config.titleFormat);
                var isEnable = true;
                if (onBeforeShowDay) {
                    var addData = onBeforeShowDay(roopDate); // addData -> { isEnable: true|false, title:'성탄절', class: 'holyday', style: 'color:red' }
                    if (addData) {
                        if (addData.className) { addClass.push(addData.className); } // ie7 이하에서 class 예약어라 사용안됨
                        if (addData.style) { addStyle = addData.style; }
                        if (addData.title) { printTitle = addData.title; }
                        if (addData.isEnable === false) { isEnable = false; }
                    }
                }
                if (isEnable && minTime > -1) { isEnable = !(roopTime < minTime); }
                if (isEnable && maxTime > -1) { isEnable = !(roopTime > maxTime); }
                if (roopDate.getMonth() != monthStartDate.getMonth()) addClass.push("notThisMonth");
                if (setDate.diff(roopDate, "D") == 0) tdClass.push("setDate");
                if (!isEnable) { addClass.push("disabled"); }
                po.push("<td class=\"bodyCol_" + k + " bodyRow_" + i + " " + tdClass.join(" ") + "\"><a " + cfg.href + " class=\"calendarDate " + addClass.join(" ") + "\" id=\"" + cfg.targetID + "_AX_" + roopDate.print(this.config.valueFormat) + "_AX_date\" title=\"" + printTitle + "\">" + dayValue.number() + "</a></td>");
                k++;
                roopDate = roopDate.add(1);
            }
            po.push("</tr>");
            i++;
        }
        po.push("</tbody>");
        po.push("</table>");
        po.push("</div>");
        axdom("#" + cfg.targetID).html(po.join(''));
		return this;
    },
/**
 * @method AXCalendar.dayPageSetDay
 * @param {Date} - 날짜
 * @returns {AXCalendar}
 * @description 일자달력의 표시 날짜를 변경합니다.
 * @example
```js
 var myDate = new Date();
 // var myDate = "2014-11-01".date();
 mycalendar.dayPageSetDay(myDate);
```
 */
    dayPageSetDay: function (date) {
        var cfg = this.config;
        axdom("#" + cfg.targetID).find(".calendarDate").removeClass("selected");
        axdom("#" + cfg.targetID + "_AX_" + date.print(this.config.valueFormat) + "_AX_date").addClass("selected");
		return this;
    },
/**
 * @method AXCalendar.printMonthPage
 * @param {String} [toDay]
 * @returns {AXCalendar}
 * @description 월 선택 캘린더를 targetID 안에 출력합니다.
 * @example
 ```js
 mycalendar.printMonthPage("2014-11-01");
 ```
 */
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
        axdom("#" + cfg.targetID).html(po.join(''));
		return this;
    },
/**
 * @method AXCalendar.monthPageSetMonth
 * @param {Date} - 날짜
 * @returns {AXCalendar}
 * @description 월달력의 표시 날짜를 변경합니다.
 * @example
 ```js
 var myDate = new Date();
 // var myDate = "2014-11-01".date();
 mycalendar.monthPageSetMonth(myDate);
 ```
 */
    monthPageSetMonth: function (date) {
        var cfg = this.config;
        axdom("#" + cfg.targetID).find(".calendarMonth").removeClass("selected");
        axdom("#" + cfg.targetID + "_AX_" + (date.getMonth() + 1) + "_AX_month").addClass("selected");
    },
/**
 * @method AXCalendar.printYearPage
 * @param {(String|Number)}
 * @returns {AXCalendar}
 * @description 년도 선택 캘린더를 targetID 안에 출력합니다.
 * @example
 ```js
 mycalendar.printYearPage("2014");
 mycalendar.printYearPage(2014);
 ```
 */
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
        axdom("#" + cfg.targetID).html(po.join(''));
    },
/**
 * @method AXCalendar.yearPageSetYear
 * @param {Date} - 날짜
 * @returns {AXCalendar}
 * @description 년도달력의 표시 날짜를 변경합니다.
 * @example
 ```js
 var myDate = new Date();
 // var myDate = "2014-11-01".date();
 mycalendar.yearPageSetYear(myDate);
 ```
 */
    yearPageSetYear: function (date) {
        var cfg = this.config;
        axdom("#" + cfg.targetID).find(".calendarMonth").removeClass("selected");
        axdom("#" + cfg.targetID + "_AX_" + date.print("yyyy") + "_AX_year").addClass("selected");
    },
/**
 * @method AXCalendar.printTimePage
 * @param {String}
 * @returns {AXCalendar}
 * @description 시간 선택 캘린더를 targetID 안에 출력합니다.
 * @example
 ```js
 mycalendar.printTimePage("06:36 AM");
 ```
 */
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
                //hh = "12";
                apm = "AM";
            }
            if (apm == "00") apm = "AM";
        } else {
            var now = new Date();
            var hh = now.getHours();
            var mm = now.getMinutes();
            var apm = "AM";
            if (hh == 0 && mm == 0) {
                //hh = 24;
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
        po.push("<div class='hourSlider'><input type='text' value='" + hh + "' id='" + cfg.targetID + "_AX_hour' class='AXInput' /></div>");
        po.push("<div class='minuteTitle'>Minute</div>");
        po.push("<div class='minuteSlider'><input type='text' value='" + mm + "' id='" + cfg.targetID + "_AX_minute' class='AXInput' /></div>");
        po.push("<div class='timeDisplay'>" + hh + ":" + mm + " " + apm + "</div>");
        po.push("<div class='AMPM'><input type='text' id='" + cfg.targetID + "_AX_AMPM' value='" + apm + "' style='width:50px;height:21px;border:0px none;' /></div>");
        po.push("</div>");
        po.push("</div>");
        axdom("#" + cfg.targetID).html(po.join(''));

        var timePageChange = this.timePageChange.bind(this);
        axdom("#" + cfg.targetID + "_AX_hour").unbindInput();
        axdom("#" + cfg.targetID + "_AX_minute").unbindInput();
        axdom("#" + cfg.targetID + "_AX_AMPM").unbindInput();
        axdom("#" + cfg.targetID + "_AX_hour").bindSlider({
            min: 0, max: 12, onChange: function (objID, objVal) {
                timePageChange(objID, objVal);
            }
        });
        axdom("#" + cfg.targetID + "_AX_minute").bindSlider({
            min: 0, max: 59, onChange: function (objID, objVal) {
                timePageChange(objID, objVal);
            }
        });
        axdom("#" + cfg.targetID + "_AX_AMPM").bindSwitch({
            off: "AM", on: "PM", onChange: function (objID, objVal) {
                timePageChange(objID, objVal);
            }
        });
    },
	// 내부 함수
    timePageChange: function () {
        var cfg = this.config, hh, mi, apm, mytime;
	    hh = axdom("#" + cfg.targetID + "_AX_hour").val().number();
	    mi = axdom("#" + cfg.targetID + "_AX_minute").val().number();
	    apm = axdom("#" + cfg.targetID + "_AX_AMPM").val();
        if(apm == "PM"){
	        //hh += 12;
            if(hh > 12){
                axdom("#" + cfg.targetID + "_AX_hour").val(12);
                axdom("#" + cfg.targetID + "_AX_hour").setValueInput(12);
            }
        }
        mytime = hh.setDigit(2) + ":" + mi.setDigit(2) + " " + apm;
        axdom("#" + cfg.targetID + "_AX_box").find(".timeDisplay").html(mytime);
        if (cfg.onChange) {
            cfg.onChange(hh.setDigit(2) + ":" + mi.setDigit(2));
        }
    },
/**
 * @method AXCalendar.getTime
 * @returns {String} hh:mm
 * @description 현재 시간과 분을 리턴합니다.
 * @example
```js
 myCalendar.getTime();
 // 09:20
```
 */
    getTime: function () {
        var cfg = this.config;
        var hh = (axdom("#" + cfg.targetID + "_AX_hour").val()||0).number();
        var mi = (axdom("#" + cfg.targetID + "_AX_minute").val()||0).number();
        var apm = axdom("#" + cfg.targetID + "_AX_AMPM").val();
        if (apm == "PM" && hh < 12) hh += 12;
        return hh.setDigit(2) + ":" + mi.setDigit(2);
    }
});
/* ---------------------------------------------- AXCalendar -- */

/* -- AXMultiSelect ---------------------------------------------- */
/**
 * @class AXMultiSelect
 * @classdesc 박스안에 아이템들중에 약속된 Class를 가진 아이템에 대해 다중선택를 할 수 있도록 지원합니다.
 * @extends AXJ
 * @version v1.9
 * @author tom@axisj.com
 * @logs
 "2013-01-31 오후 5:01:12",
 "2013-11-12 오전 9:19:09 - tom : 버그픽스",
 "2013-11-12 오전 11:59:38 - tom : body relative 버그 픽스, 스크롤바 마우스 선택 문제 해결",
 "2013-11-13 오후 3:01:15 - tom : 모바일 터치 기능 지원"
 "2015-04-01 tom : 드래그 셀렉트 버그 픽스"
 * @example
 ```js
 var multiSelector = new AXMultiSelect();
 multiSelector.setConfig({
	selectStage       : "selectStageBox", // 컨테이너 타겟 아이디
	selectClassName   : "readyselect", // 셀렉트 대상
	beselectClassName : "beSelected", // 셀렉트 되었을 때.
	selectingClassName: "AX_selecting" // 셀렉트중일 때
 });
 ```
 */
var AXMultiSelect = Class.create(AXJ, {
    initialize: function (AXJ_super) {
        AXJ_super();

/**
 * 선택된 아이템 <en>Array of selected Item.</en>
 * @member {Array} AXMultiSelect.selects
 */

        this.selects = [];
	    this.moveSens = 0;
	    this.touchMode;

        this.config.selectClassName = "readySelect";
        this.config.beselectClassName = "beSelected";
        this.config.selectingClassName = "AX_selecting";
        this.config.moveSens = 5;
        this.config.useHelper = true;
    },
/**
 * @method AXMultiSelect.setConfig
 * @param {Object} config
 * @description 멀티셀렉트
 * @example
```js
 var config = {
	selectStage: {String} - Element ID of select item container,
	selectClassName: {String} [readySelect] - CSS Class Name of select item,
	beselectClassName: {String} [beSelected] - CSS Class Name of selected item,
	selectingClassName: {String} [AX_selecting] - CSS Class Name of selecting item,
	moveSens: {Number} [5] - mouse position move of detect select,
	useHelper: {Boolean} [true] - use mouse select box
 }
 multiSelector.setConfig(config);
```
 */
    init: function () {

        var mouseClick = this.onmouseClick.bind(this);
        this._selectStage = axdom("#" + this.config.selectStage);
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

        this.helper = axdom("<div class='AXMultiselectorHelper'></div>");
        this.collect();

        axdom(window).bind("resize.AXMultiSelect", this.collect.bind(this));
        axdom(window).bind("keydown.AXMultiSelect", this.onKeydown.bind(this));
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
                axdom(document.body).unbind("mousemove.AXMultiSelect");
                axdom(document.body).unbind("mouseup.AXMultiSelect");
                axdom(document.body).unbind("mouseleave.AXMultiSelect");
                axdom(document.body).removeAttr("onselectstart");
                //axdom(document.body).removeClass("AXUserSelectNone");
                this.helperAppenedReady = false;
                this.helperAppened = false;
                this.helper.remove();
            }
        }

    },
    /* ------------------------------------------------------------------------------------------------------------------ */
    /* observe method ~~~~~~ */
    onmouseClick: function (element, event) {
        if (this.helperAppened){
            return this;
        }
        var cfg = this.config;
        var eid = event.target.id.split(/_AX_/g);
        var eventTarget = event.target;
        var myTarget = this.getEventTarget({
            evt: eventTarget, evtIDs: eid,
            until: function (evt, evtIDs) { return (AXgetId(evt.parentNode) == AXgetId(cfg.selectStage)) ? true : false; },
            find: function (evt, evtIDs) { return (axdom(evt).hasClass(cfg.selectClassName)) ? true : false; }
        });

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
        }
        return this;
    },
    /* ------------------------------------------------------------------------------------------------------------------ */
    /* class method ~~~~~~ */
/**
 * @method AXMultiSelect.collect
 * @returns {AXMultiSelect}
 * @description 컨테이너안에 셀렉트 아이템을 재정의 합니다.
 * @example
```js
 multiSelector.collect();
 // 컨테이너안에 아이템의 변화가 생긴 경우 호출합니다.
```
 */
    collect: function () {
        var cfg = this.config;
        this._selectTargets = axdom("#" + cfg.selectStage + " ." + cfg.selectClassName);
        this.selectTargets = this._selectTargets.get();
        var scrollLeft = this._selectStage.scrollLeft().number();
        var scrollTop = this._selectStage.scrollTop().number();
        this._selectTargets.each(function () {
            var jQuerythis = axdom(this), pos = jQuerythis.position();
            axdom.data(this, "selectableItem", {
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
	    return this;
    },
    clearSelects: function () {
        var cfg = this.config;
        this._selectTargets.each(function () {
            var selectTarget = axdom.data(this, "selectableItem");
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

        var selectTarget = axdom.data(Obj, "selectableItem");
        selectTarget.jQueryelement.addClass(cfg.beselectClassName);
        selectTarget.selected = true;
    },
    toggleSelects: function (Obj) {
        var cfg = this.config;

        var selectTarget = axdom.data(Obj, "selectableItem");
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
            var selectTarget = axdom.data(this, "selectableItem");
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
                var selectTarget = axdom.data(this, "selectableItem");
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

        axdom(document.body).bind("mousemove.AXMultiSelect", this.mousemove.bind(this));
        axdom(document.body).bind("mouseup.AXMultiSelect", this.mouseup.bind(this));
        axdom(document.body).bind("mouseleave.AXMultiSelect", this.mouseup.bind(this));
        axdom(document.body).attr("onselectstart", "return false");
        //axdom(document.body).addClass("AXUserSelectNone");

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
        var cfg = this.config, _this = this;

        this.helperAppenedReady = false;
        this.moveSens = 0;

        axdom(document.body).unbind("mousemove.AXMultiSelect");
        axdom(document.body).unbind("mouseup.AXMultiSelect");
        axdom(document.body).unbind("mouseleave.AXMultiSelect");

        axdom(document.body).removeAttr("onselectstart");
        //axdom(document.body).removeClass("AXUserSelectNone");

        if (this.helperAppened) {
            setTimeout(function(){
                _this.helperAppened = false;
                _this.helper.remove();
            }, 100);


            /* selected change */
            this._selectTargets.each(function () {
                var selectTarget = axdom.data(this, "selectableItem");
                if (selectTarget) {
                    if (selectTarget.selecting) {
                        selectTarget.jQueryelement.removeClass(cfg.selectingClassName);
                        selectTarget.selecting = false;
                        selectTarget.jQueryelement.addClass(cfg.beselectClassName);
                        selectTarget.selected = true;
                    }
                    /*
                    else if (selectTarget.selected) {

                    }
                    */
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

                var selectTarget = axdom.data(this, "selectableItem"), hit = false;
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
            axdom(document.body).append(this.helper);

            var css = { left: (event.pageX - axdom(document.body).offset().left), top: (event.pageY - axdom(document.body).offset().top), width: 0, height: 0 };
            this.helper.css(css);
            var stagePos = this._selectStage.offset();
            this.helperPos = {
                stageX: stagePos.left.number(),
                stageY: stagePos.top.number(),
                x: css.left.number(),
                y: css.top.number(),
                scrollLeft: this._selectStage.scrollLeft().number(),
                scrollTop: this._selectStage.scrollTop().number(),
                bodyLeft: axdom(document.body).offset().left,
                bodyTop: axdom(document.body).offset().top
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

                var selectTarget = axdom.data(this, "selectableItem"), hit = false;
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
            axdom(document.body).append(this.helper);

            var css = { left: (touch.pageX - axdom(document.body).offset().left), top: (touch.pageY - axdom(document.body).offset().top), width: 0, height: 0 };
            this.helper.css(css);
            var stagePos = this._selectStage.offset();
            this.helperPos = {
                stageX: stagePos.left.number(),
                stageY: stagePos.top.number(),
                x: css.left.number(),
                y: css.top.number(),
                scrollLeft: this._selectStage.scrollLeft().number(),
                scrollTop: this._selectStage.scrollTop().number(),
                bodyLeft: axdom(document.body).offset().left,
                bodyTop: axdom(document.body).offset().top
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
                var selectTarget = axdom.data(this, "selectableItem");
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
/**
 * @method AXMultiSelect.getSelects
 * @returns {Array} selects
 * @description 셀렉트된 아이템 엘리먼트 배열을 반환합니다. Return Array of selected item element
 * @example
```js
 multiSelector.getSelects();
```
 */
    getSelects: function () {
        var cfg = this.config;
        var selects = [];
        this._selectTargets.each(function () {
            var selectTarget = axdom.data(this, "selectableItem");
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
            var selectTarget = axdom.data(this, "selectableItem");
            if (selectTarget) {
                if (selectTarget.selected) {
                    selects.push(selectTarget.element);
                }
            }
        });
        return selects.length;
    }
});
/* ---------------------------------------------- AXMultiSelect -- */

/* -- AXResizable ---------------------------------------------- */
/**
 * 아이템을 주어진 조건에 맞게 리사이즈 할 수 있는 클래스
 * @class AXResizable
 * @classdesc
 * @extends AXJ
 * @version v0.9
 * @author tom@axisj.com
 * @logs
 "2013-11-12 오전 10:22:06"
 */
var AXResizable = Class.create(AXJ, {
    initialize: function (AXJ_super) {
        AXJ_super();
        this.moveSens = 0;
	    this.objects = [];

        this.config.moveSens = 2;
        this.config.bindResiableContainer = "AXResizable";
        this.config.bindResiableHandle = "AXResizableHandle";
    },
/**
 * @method AXResizable.setConfig
 * @param {Object} config
 * @description targetID를 지정합니다. 인스턴스간에 구분을 할 수 있게 해줍니다.
 * @example
```js
 var AXResizableBinder = new AXResizable();
 AXResizableBinder.setConfig({ targetID: "defaultResiable" });
```
 */
    init: function () {
        this.helper = axdom("<div class='AXResizableHelper'></div>");
    },
/**
 * @method AXResizable.bind
 * @param {Object} obj
 * @returns {AXResizable}
 * @example
```js
 var config = {
    id: {String} - Element ID,
    minWidth: {Number} [0],
    minHeight: {Number} [0],
	maxWidth: {Number} [0],
	maxHeight: {Number} [0],
	animate: {easing:"bounceOut", duration:500},
	aspectRatio: {Number} - 2/1,
	snap: {Number} - 10,
	onChange: function(){
		// this.id, this.element, this.jQueryElement, this.config
		toast.push(this.id);
	}
 };
 myResizer.bind(config);
```
 */
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

        AXUtil.each(this.objects, function (idx, O) {
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
                jQueryElement: axdom("#" + objID),
                config: obj
            });
        } else {
            this.objects[objSeq].isDel = undefined;
            this.objects[objSeq].config = obj;
        }
        this.bindResizer(objID, objSeq);
		return this;
    },
/**
 * @method AXResizable.unbind
 * @param {Object} obj
 * @returns {AXResizable}
 * @description 바인드 해제 합니다.
 * @example
```js
 myResizer.unbind({id:"ElementID"});
```
 */
    unbind: function (obj) {
        var cfg = this.config;
        var removeIdx;
        AXUtil.each(this.objects, function (idx, O) {
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
		return this;
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

        axdom(window).bind("mousemove.AXResizable", this.mousemove.bind(this, objID, objSeq));
        axdom(window).bind("mouseup.AXResizable", this.mouseup.bind(this, objID, objSeq));
        /*axdom(document.body).bind("mouseleave.AXResizable", this.mouseup.bind(this, objID, objSeq));*/

        axdom(document.body).attr("onselectstart", "return false");
        //axdom(document.body).addClass("AXUserSelectNone");

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

        axdom(window).unbind("mousemove.AXResizable");
        axdom(window).unbind("mouseup.AXResizable");
        /*axdom(document.body).unbind("mouseleave.AXResizable");*/

        axdom(document.body).removeAttr("onselectstart");
        //axdom(document.body).removeClass("AXUserSelectNone");

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
            axdom(document.body).append(this.helper);

            var bodyLeft = axdom(document.body).offset().left;
            var bodyTop = axdom(document.body).offset().top;

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
                bodyLeft: axdom(document.body).offset().left,
                bodyTop: axdom(document.body).offset().top
            };
        }
    }
});
var AXResizableBinder = new AXResizable();
AXResizableBinder.setConfig({ targetID: "defaultResizable" });

/**
 * @method jQueryExtends.bindAXResizable
 * @param {Object} config
 * @returns {jQueryObject}
 * @description box 엘리먼트 크기를 조정할 수 있게 해줍니다.
 * @example
 ```js
 $("#mytarget").bindAXResizable({
	minWidth:50, minHeight:50,
	maxWidth:200, maxHeight:200,
	animate: {easing:"bounceOut", duration:500},
	aspectRatio: 2/1,
	snap:10,
	onChange: function(){
		toast.push(this.id);
	}
 });

 // 옵션 스펙
 var config = {
    minWidth: {Number} [0],
    minHeight: {Number} [0],
	maxWidth: {Number} [0],
	maxHeight: {Number} [0],
	animate: {easing:"bounceOut", duration:500},
	aspectRatio: {Number} - 2/1,
	snap: {Number} - 10,
	onChange: function(){
		// this.id, this.element, this.jQueryElement, this.config
		toast.push(this.id);
	}
 };

 ```
 */
axdom.fn.bindAXResizable = function (config) {
    AXUtil.each(this, function () {
        config = config || {}; config.id = this.id;
        AXResizableBinder.bind(config);
        return this;
    });
	return this;
};

/**
 * @method jQueryExtends.unbindAXResizable
 * @param {Object} [config]
 * @returns {jQueryObject}
 * @description box 엘리먼트 크기를 조정자를 제거합니다.
 * @example
 ```js
 $("#mytarget").unbindAXResizable();
 ```
 */
axdom.fn.unbindAXResizable = function (config) {
    AXUtil.each(this, function () {
        if (config == undefined) config = {};
        config.id = this.id;
        AXResizableBinder.unbind(config);
        return this;
    });
	return this;
};
/* ---------------------------------------------- AXResizable -- */

/* -- AXContextMenu ---------------------------------------------- */
/**
 * AXContextMenuClass
 * @class AXContextMenuClass
 * @extends AXJ
 * @version v1.28
 * @author tom@axisj.com, axisj.com
 * @logs
 "2013-03-22 오후 6:08:57",
 "2013-09-03 오후 7:10:14 메뉴확장 위치 제어 버그 픽스",
 "2013-12-16 href=javascript 설정했을 때 onbeforeunload 이벤트 충돌문제 해결",
 "2013-12-26 오후 4:27:00 tom, left, top position ",
 "2014-02-11 오전 11:06:13 root, subMenu underLine, upperLine add",
 "2014-04-07 오전 9:55:57 tom, extent checkbox, sortbox"
 "2014-06-24 tom : reserveKeys.subMenu 설정할 수 있도록 기능 보강, 콜백함수 개선"
 "2014-12-18 tom : onclose 속성을 추가 할 수 있도록 속성 추가
 "2014-12-22 tom : filter를 통과한 메뉴 아이템이 없을 경우 표시 안하도록 변경"
 "2015-01-22 tom : item false 이면 표시 안하도록 변경"
 "2015-02-26 tom : bind를 다시 할때 reserveKeys 초기화 버그 픽스"
 */

var AXContextMenuClass = Class.create(AXJ, {
    initialize: function (AXJ_super) {
        AXJ_super();
        this.showedItem = {};
        this.objects = [];
        this.config.theme = "AXContextMenu";
        this.config.width = "140";
        this.config.responsiveMobile = 0; /* 모바일 반응 너비 */
	    this.config.reserveKeys = {
		    subMenu: "subMenu"
	    };
    },
/**
 * @method AXContextMenuClass.setConfig
 * @param {Object} configs
 * @description 선언된 클래스를 사용하기 위해 속성을 정의합니다.
 * @example
```js
 var AXContextMenu = new AXContextMenuClass();
 AXContextMenu.setConfig({});
```
 */
    init: function () {

    },
/**
 * @method AXContextMenuClass.bindSetConfig
 * @param {String} objID - object ID
 * @param {Object} configs - contentMenu config
 * @description contextmenu 오브젝트에 속성을 변경합니다.
 * @example
```js
 AXContextMenu.bindSetConfig("contenxt01", {});
```
 */
    bindSetConfig: function (objID, configs) {
        var findIndex = null;
        AXUtil.each(this.objects, function (index, O) {
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
            axf.each(configs, function (k, v) {
                _self.config[k] = v;
            });
        }
    },
/**
 * @method AXContextMenuClass.bind
 * @param {Object} obj - 컨텍스트메뉴 속성
 * @returns {AXContextMenuClass}
 * @description 컨텍스트메뉴를 선언하여 컨텍스트메뉴를 사용준비합니다. bind한 컨텍스트메뉴는 id로 open 할 수 있습니다.
 * @example
```js
 AXContextMenu.bind({
		id:"myContextMenu",
		theme:"AXContextMenu", // 선택항목
		width:"150", // 선택항목
		checkbox:"checkbox", // [checkbox|radio]
		sortbox:true,
		menu:[
			{
				label:'선택 1',
				checked:true,
				className: 'doc | docline | plus | minus | group | edit | copy | cut | paste | up | down | left | right | link | unlink | openall | closeall'
				onclick:function(){
					return false;
				}
			},
			{label:'선택 2', checked:true,
				subMenu:[
					{label:"하위메뉴1"},
					{label:"하위메뉴2",
						subMenu:[
							{label:"하위메뉴21"},
							{label:"하위메뉴22"}
						]
					},
					{label:"하위메뉴3"},
					{label:"하위메뉴3"},
					{label:"하위메뉴3"}
				]
			},
			{label:'선택 3', checked:true},
			{label:'선택 4', checked:false, sort:"asc"} // config 에 checkbox 가 있는데. menu에 onclick 가 없으면 체크박스 액션이 작동합니다.
		],
		onchange: function(){ // 체크박스 선택값이 변경 된 경우 호출 됩니다.
			trace(this.menu);

			// return true; 메뉴 창이 닫히지 않게 합니다.
		},
		onsort: function(){ // 정렬이 변경 된 경우 호출 됩니다.
			trace(this.sortMenu);

			// return true; 메뉴 창이 닫히지 않게 합니다.
		}
	});
```
 */
    bind: function (obj) {
        var cfg = this.config;
        if (!obj.id) {
            trace("ID가 없어 bind 처리할 수 없습니다. AXContentMenu.bind({id:'idValue'});");
            return;
        }
        var objSeq = null;
        axf.each(this.objects, function (idx, O) {
            if (this.id == obj.id) {
                objSeq = idx;
                return false;
            }
        });

		if(!obj.reserveKeys){
			obj.reserveKeys = cfg.reserveKeys;
		}
        if (objSeq != null) {
            this.objects[objSeq] = obj;
            return this;
        }
        objSeq = this.objects.length;

        this.objects.push(obj);
		return this;
    },
    filter: function (objSeq, objID, myobj, menu) {
        var cfg = this.config;
        var obj = this.objects[objSeq];
        if (myobj.filter) {
            var sendObj = {
                menu: menu,
                sendObj: obj.sendObj
            };
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
        var po = [];
        po.push("<div id=\"" + subMenuID + "\" class=\"" + theme + "\" style=\"width:" + width + "px;left:" + (width.number() - 15) + "px;display:none;\">");
        AXUtil.each(subMenu, function (idx, menu) {
            if (filter(objSeq, objID, myobj, menu)) {
                if (menu.upperLine) po.push("<div class=\"hline\"></div>");
                var className = (menu.className) ? menu.className : "";
                var hasSubMenu = (menu[obj.reserveKeys.subMenu]) ? " hasSubMenu" : "";
                po.push("<a " + href + " class=\"contextMenuItem " + className + hasSubMenu + "\" id=\"" + subMenuID + "_AX_" + depth + "_AX_" + idx + "\">");
                var checked = "";
                if(obj.checkbox){
                    if(menu.checked) checked = " on";
                    po.push("<div class='tool-checkbox"+ checked +"' id=\"" + subMenuID + "_tool_AX_" + depth + "_AX_" + idx + "\"></div>");
                }

                po.push("<span class='label'>" + menu.label + "</span>");

                if(menu.shotCut) po.push("<span class='shot-cut'>" + menu.shotCut + "</span>");

                po.push("<div class='tool-rightGroup'>");
                if (menu[obj.reserveKeys.subMenu] && menu[obj.reserveKeys.subMenu].length > 0) po.push("<div class=\"contextSubMenuIcon\"></div>");
                po.push("</div>");
                po.push("</a>");
                menu.__axdomId = subMenuID + "_AX_" + depth + "_AX_" + idx;

                if (menu[obj.reserveKeys.subMenu] && menu[obj.reserveKeys.subMenu].length > 0) po.push(getSubMenu(subMenuID + "_AX_" + depth + "_AX_" + idx, objSeq, objID, myobj, menu[obj.reserveKeys.subMenu], (depth + 1)));
                if (menu.underLine) po.push("<div class=\"hline\"></div>");
            }
        });
        po.push("</div>");
        return po.join('');
    },
/**
 * @method AXContextMenuClass.open
 * @param {Object} myobj
 * @param {Event|Object} position - 이벤트 객체를 전달하거나 {left:[Number], top:[Number]} 를 전달합니다.
 * @returns {AXContextMenuClass}
 * @description bind된 컨텍스트메뉴 개체를 오픈합니다. (이벤트속성에 정해진 마우스 포지션또는 사용자가 정한 left, top 포지션에)
 * @example
```js
AXContextMenu.open({
	id:"myContextMenuTree", sendObj:{id:"전달하고싶은 오브젝트", name:"형식은 자유"}
}, event); // event 직접 연결 방식

AXContextMenu.open({
	id:"myContextMenuTree", sendObj:{id:"전달하고싶은 오브젝트", name:"형식은 자유"}
}, {left:0, top:0}); // position 직접 결정 방식
```
 */
    open: function (myobj, position) {
        var cfg = this.config;
        if(axf.clientWidth() < cfg.responsiveMobile){
            this.mobileOpen(myobj, position);
        }else{
            this.deskTopOpen(myobj, position);
        }
		return this;
    },
    mobileOpen: function(myobj, position){
        var cfg = this.config;
        var objSeq = null;
        AXUtil.each(this.objects, function (index, O) {
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
                //title:(myobj.title||AXConfig.AXContextMenu.title),
                close:{
                    onclick:function(){}
                }
            },
            onclose: function(){}
        });

        var initMobileModalBind = this.initMobileModal.bind(this);
        var onLoad = function(modalObj){
            initMobileModalBind(objID, objSeq, myobj, modalObj);
        };
        this.modal.open(null, onLoad);
        this.mobileMode = true;
    },
    initMobileModal: function(objID, objSeq, myobj, modalObj){ // 현재 선택된 모바일 메뉴를 오픈합니다.
        var cfg = this.config, _this = this;
        var obj = this.objects[objSeq];
        this.mobileModalObj = {
            myobj:myobj,
            modalObj:modalObj
        }; // memo mobileModal
        if (myobj.sendObj) {
            obj.sendObj = myobj.sendObj;
        }
        var href = (obj.href == undefined) ? cfg.href : obj.href;
        var filter = this.filter.bind(this);

        var headPo = [];
        /* 현재 선택된 메뉴 선택 하는 기능구현 필요 */
        headPo.push('<a ' + href + ' class="AXContextMenuHome">home</a>');
        headPo.push('<span id="' + objID + '_AX_mobileMenuPrevBox"></span>');
        modalObj.modalHead.empty();
        modalObj.modalHead.append(headPo.join(''));

        modalObj.modalHead.find(".AXContextMenuHome").bind("click", function(){
            _this.initMobileModal(objID, objSeq, myobj, modalObj);
        });

        var styles = [];
        styles.push("height:339px;");
        var menuList = obj.menu;
        var po = [];
        po.push("<div id=\"" + objID + "_AX_containerBox\" class=\"AXContextMenuContainer\" style=\"" + styles.join(";") + "\">");
        po.push("<div id=\"" + objID + "_AX_scroll\" class=\"AXContextMenuScroll\">");

	    if(typeof obj.reserveKeys == "undefined"){
		    obj.reserveKeys = cfg.reserveKeys;
	    }

        axf.each(menuList, function (idx, menu) {
            if (menu && filter(objSeq, objID, myobj, menu)) {
                //if (menu.upperLine) po.push("<div class=\"hline\"></div>");
                var className = (menu.className) ? " " + menu.className : "";
                var hasSubMenu = (menu[obj.reserveKeys.subMenu]) ? " hasSubMenu" : "";
                po.push("<a " + href + " class=\"contextMenuItem" + className + hasSubMenu + "\" id=\"" + objID + "_AX_contextMenu_AX_"+ 0 +"_AX_" + idx + "\">");

                var checked = "";
                if(obj.checkbox){
                    if(menu.checked) checked = " on";
                    po.push("<div class='tool-checkbox"+ checked +"' id=\"" + objID + "_AX_contextMenuToolCheck_AX_"+ 0 +"_AX_" + idx + "\"></div>");
                }

                po.push("<span class='label'>" + menu.label + "</label>");

                if(menu.shotCut) po.push("<span class='shot-cut'>" + menu.shotCut + "</span>");

                po.push("<div class='tool-rightGroup'>");
                if (menu[obj.reserveKeys.subMenu] && menu[obj.reserveKeys.subMenu].length > 0) po.push("<div class=\"contextSubMenuIcon\"></div>");
                if (obj.sortbox){
                    var sortdirect = "";
                    if(menu.sort){
                        sortdirect = " " + menu.sort.toString().lcase();
                    }
                    po.push("<div class=\"tool-sort"+ sortdirect +"\" id=\"" + objID + "_AX_contextMenuToolSort_AX_"+ 0 +"_AX_" + idx + "\"></div>");
                }
                po.push("</div>");
                po.push("</a>");

                menu.__axdomId = objID + "_AX_contextMenu_AX_0_AX_" + idx;
                //if (menu.underLine) po.push("<div class=\"hline\"></div>");
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
            //closeMobileModal();
        };
        modalObj.modalBody.find(".contextMenuItem").bind("click", this.contextMenuItemClickBind);
    },

    mobileModalSubMenu: function (parentID, objSeq, objID, myobj, modalObj, pMenu, depth) {
        var cfg = this.config, _this = this;
        var obj = this.objects[objSeq];
        var theme = obj.theme || cfg.theme;
        var width = obj.width || cfg.width;

        var filter = this.filter.bind(this);
        var mobileModalSubMenu = this.mobileModalSubMenu.bind(this);
        var subMenuID = parentID + "_AX_subMenu";

        var href = (obj.href == undefined) ? cfg.href : obj.href;

        var poi = parentID.split(/_AX_/g);
        var pdepth = poi[poi.length - 2].number();
        /*
         if(pdepth == 0) {
         this.mobileModalObj.previousMenu = "root";
         this.mobileModalObj.nowMenu = pMenu.__axdomId;
         }else{
         this.mobileModalObj.previousMenu = this.mobileModalObj.nowMenu;
         this.mobileModalObj.nowMenu = pMenu.__axdomId;
         }
         */
        //trace(axdom("#" + objID + "_AX_mobileMenuPrevBox").get(0));
        axdom("#" + objID + "_AX_mobileMenuPrevBox").html('<a class="AXContextMenuPrev" id="'+objID+'_AX_prev_AX_'+poi.join("_")+'">'+pMenu.label+'</a>');

        axdom("#"+objID+'_AX_prev_AX_'+poi.join("_")).bind("click", function(){
            if(pdepth == 0) {
                _this.initMobileModal(objID, objSeq, myobj, modalObj);
            }else{
                var poi = pMenu.__axdomId.split(/_AX_/g);
                var _depth = poi[poi.length - 2].number();
                var hashs = [];

                var mystrPosition = poi.length - 1;
                for (var r = 0; r < depth + 1; r++) {
                    if(!isNaN(poi[mystrPosition])) hashs.push(poi[mystrPosition]);
                    mystrPosition -= 3;
                }
                hashs = hashs.reverse();
                hashs.pop();
                var menu = obj.menu;
                for (var hash, idx= 0, __arr = hashs; (idx < __arr.length && (hash = __arr[idx])); idx++) {
                    if (idx == 0) menu = menu[hash];
                    else menu = menu[obj.reserveKeys.subMenu][hash];
                }
                _this.mobileModalSubMenu(menu.__axdomId,  objSeq, objID,  _this.mobileModalObj.myobj, _this.mobileModalObj.modalObj, menu, (depth-1));
            }
        });

        var styles = [];
        styles.push("height:339px;");
        var menuList = pMenu[obj.reserveKeys.subMenu];
        var po = [];
        po.push("<div id=\"" + objID + "_AX_containerBox\" class=\"AXContextMenuContainer\" style=\"" + styles.join(";") + "\">");
        po.push("<div id=\"" + objID + "_AX_scroll\" class=\"AXContextMenuScroll\">");
        axf.each(menuList, function (idx, menu) {
            if (menu && filter(objSeq, objID, myobj, menu)) {
                var className = (menu.className) ? " " + menu.className : "";
                var hasSubMenu = (menu[obj.reserveKeys.subMenu]) ? " hasSubMenu" : "";
                po.push("<a " + href + " class=\"contextMenuItem" + className + hasSubMenu + "\" id=\"" + subMenuID + "_AX_" + depth + "_AX_" + idx + "\">");

                var checked = "";
                if(obj.checkbox){
                    if(menu.checked) checked = " on";
                    po.push("<div class='tool-checkbox"+ checked +"' id=\"" + subMenuID + "_AX_contextMenuToolCheck_AX_" + depth + "_AX_" + idx + "\"></div>");
                }

                po.push("<span class='label'>" + menu.label + "</label>");

                if(menu.shotCut) po.push("<span class='shot-cut'>" + menu.shotCut + "</span>");

                po.push("<div class='tool-rightGroup'>");
                if (menu[obj.reserveKeys.subMenu] && menu[obj.reserveKeys.subMenu].length > 0) po.push("<div class=\"contextSubMenuIcon\"></div>");
                if (obj.sortbox){
                    var sortdirect = "";
                    if(menu.sort){
                        sortdirect = " " + menu.sort.toString().lcase();
                    }
                    po.push("<div class=\"tool-sort"+ sortdirect +"\" id=\"" + subMenuID + "_AX_contextMenuToolSort_AX_"+ depth +"_AX_" + idx + "\"></div>");
                }
                po.push("</div>");

                po.push("</a>");

                menu.__axdomId = subMenuID + "_AX_" + depth + "_AX_" + idx;
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
            //closeMobileModal();
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
        this.mobileMode = false;
        AXUtil.each(this.objects, function (index, O) {
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

        axdom("#" + objID).remove();

        var href = (obj.href == undefined) ? cfg.href : obj.href;

        var filter = this.filter.bind(this);
        var getSubMenu = this.getSubMenu.bind(this);

        var displayMenuCount = 0;
        var po = [];
        po.push("<div id=\"" + objID + "\" class=\"" + theme + "\" style=\"width:" + width + "px;\">");
        AXUtil.each(obj.menu, function (idx, menu) {
            if (menu && filter(objSeq, objID, myobj, menu)) {

                if (menu.upperLine) {
                    po.push("<div class=\"hline\"></div>");
                }
                var className = (menu.className) ? " " + menu.className : "";
                var hasSubMenu = (menu[obj.reserveKeys.subMenu]) ? " hasSubMenu" : "";
                po.push("<a " + href + " class=\"contextMenuItem" + className + hasSubMenu + "\" id=\"" + objID + "_AX_contextMenu_AX_0_AX_" + idx + "\">");
                var checked = "";
                if(obj.checkbox){
                    if(menu.checked) checked = " on";
                    po.push("<div class='tool-checkbox"+ checked +"' id=\"" + objID + "_AX_contextMenuTool_AX_0_AX_" + idx + "\"></div>");
                }

                po.push("<span class='label'>" + menu.label + "</span>");

                if(menu.shotCut) po.push("<span class='shot-cut'>" + menu.shotCut + "</span>");

                po.push("<div class='tool-rightGroup'>");
                if (menu[obj.reserveKeys.subMenu] && menu[obj.reserveKeys.subMenu].length > 0) po.push("<div class=\"contextSubMenuIcon\"></div>");
                if (obj.sortbox)  po.push("<div class=\"tool_sort desc\"></div>");
                po.push("</div>");
                po.push("</a>");

                menu.__axdomId = objID + "_AX_contextMenu_AX_0_AX_" + idx;

                if (menu[obj.reserveKeys.subMenu]) {
                    if (menu[obj.reserveKeys.subMenu].length > 0) {
                        po.push(getSubMenu(objID + "_AX_contextMenu_AX_0_AX_" + idx, objSeq, objID, myobj, menu[obj.reserveKeys.subMenu], 1));
                    }
                }
                if (menu.underLine) {
                    po.push("<div class=\"hline\"></div>");
                }
                displayMenuCount++;
            }
        });
        po.push("</div>");

        if(displayMenuCount == 0){
            // 표시할 메뉴가 없음.
            return false;
        }
        axdom(document.body).append(po.join(''));

        axdom("#" + objID + " .contextMenuItem:first-child").addClass("first");
        axdom("#" + objID + " .contextMenuItem:last-child").addClass("last");

        var contextMenuItemMouseOver = this.contextMenuItemMouseOver.bind(this);
        this.contextMenuItemMouseOverBind = function (event) {
            contextMenuItemMouseOver(event, objSeq, objID);
        };
        axdom("#" + objID + " .contextMenuItem").bind("mouseover", this.contextMenuItemMouseOverBind);

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
        var pElement = axdom("#" + objID).offsetParent();
        var pBox = { width: pElement.width(), height: pElement.height() };
        var clientHeight = (AXUtil.docTD == "Q") ? document.body.scrollHeight : document.documentElement.scrollHeight;
        var clienWidth = (AXUtil.docTD == "Q") ? document.body.scrollWidth : document.documentElement.scrollWidth;
        if (clienWidth > pBox.width) pBox.width = clienWidth;
        if (clientHeight > pBox.height) pBox.height = clientHeight;
        var _box = { width: axdom("#" + objID).outerWidth(), height: axdom("#" + objID).outerHeight() };
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
        axdom("#" + objID).css(css);

        this.eventBind(objSeq, objID);
    },
    eventBind: function (objSeq, objID) {
        var cfg = this.config;
        /* closeEvent bind */
        var contextMenuItemDown = this.contextMenuItemDown.bind(this);
        var contextMenuItemDownBind = function (event) {
            contextMenuItemDown(event, objSeq, objID);
        };

        axdom(document).bind("mousedown.AXContenxtMenu", contextMenuItemDownBind);
        axdom(document).bind("keydown.AXContenxtMenu", contextMenuItemDownBind);

        axdom(document).find("iframe").each(function () {
            try{
                axdom(window[this.name].document).bind("mousedown.AXContenxtMenu", contextMenuItemDownBind);
                axdom(window[this.name].document).bind("keydown.AXContenxtMenu", contextMenuItemDownBind);
            }catch(e){

            }
        });

        /* closeEvent bind ~~~~~~~~~~~~~~~~~~~ */
        //click
        var contextMenuItemClick = this.contextMenuItemClick.bind(this);
        this.contextMenuItemClickBind = function (event) {
            contextMenuItemClick(event, objSeq, objID);
        };
        axdom("#" + objID).find(".contextMenuItem").bind("click", this.contextMenuItemClickBind);
    },
    // 이벤트로 인한 닫기
    _close: function (objSeq, objID) {
        var cfg = this.config,
            obj = this.objects[objSeq],
            that = {id:obj.id, event_type:"event"};

        if(this.mobileMode){
            this.closeMobileModal();
        }else{
            axdom("#" + objID).fadeOut("fast", function () {
                axdom("#" + objID).remove();
            });
        }

        axdom(document).unbind("keydown.AXContenxtMenu");
        axdom(document).unbind("mousedown.AXContenxtMenu");

        axdom(document).find("iframe").each(function () {
	        if(window[this.name]){
		        axdom(window[this.name].document).unbind("mousedown.AXContenxtMenu");
		        axdom(window[this.name].document).unbind("keydown.AXContenxtMenu");
	        }
        });

        this.showedItem = {}; // 초기화
        this.openTB = "";
        this.openLR = "";

        if(obj.onclose){
            obj.onclose.call(that);
        }
    },
/**
 * @method AXContextMenuClass.close
 * @param {Object} obj
 * @returns {AXContextMenuClass}
 * @description 열린 컨텍스트메뉴 개체를 닫습니다.
 * @example
```js
AXContextMenu.close({
	id:"myContextMenuTree"
});
```
 */
    close: function (myobj) {
        var cfg = this.config,
            objSeq = null;

        axf.each(this.objects, function (index, O) {
            if (O.id == myobj.id) {
                objSeq = index;
                return false;
            }
        });
        if (objSeq == null) {
            //trace("바인드 된 오브젝트를 찾을 수 없습니다.");
            return;
        }

        var obj = this.objects[objSeq], objID = obj.id,
            that = {id:obj.id, event_type:"script"};

        if(this.mobileMode){
            this.closeMobileModal();
        }else{
            axdom("#" + objID).fadeOut("fast", function () {
                axdom("#" + objID).remove();
            });
        }

        axdom(document).unbind("keydown", this.contextMenuItemDownBind);
        axdom(document).unbind("mousedown", this.contextMenuItemDownBind);

        this.showedItem = {}; // 초기화
        this.openTB = "";
        this.openLR = "";

        if(obj.onclose){

        }

		return this;
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
            find: function (evt, evtIDs) { return (axdom(evt).hasClass("contextMenuItem")) ? true : false; }
        });
        // event target search ------------------------
        if (myTarget) {
            var poi = myTarget.id.split(/_AX_/g);
            var depth = poi[poi.length - 2];
            if (this.showedItem[depth]) {
                axdom("#" + this.showedItem[depth]).hide();
            }
            if (axdom(myTarget).hasClass("hasSubMenu")) {

                // -- 부모박스 정보와 박스 정보
                var pElement = axdom("#" + myTarget.id + "_AX_subMenu").offsetParent();
                var pBox = { width: pElement.width(), height: pElement.height() };
                var clientHeight = (AXUtil.docTD == "Q") ? document.body.scrollHeight : document.documentElement.scrollHeight;
                var clienWidth = (AXUtil.docTD == "Q") ? document.body.scrollWidth : document.documentElement.scrollWidth;
                if (clienWidth > pBox.width) pBox.width = clienWidth;
                if (clientHeight > pBox.height) pBox.height = clientHeight;
                var _box = { width: axdom("#" + myTarget.id + "_AX_subMenu").outerWidth(), height: axdom("#" + myTarget.id + "_AX_subMenu").outerHeight() };
                // -- 부모박스 정보와 박스 정보

                var subMenuTop = axdom("#" + myTarget.id).position().top;

                var css;
                if (this.openTB == "up") {
                    var ph = axdom("#" + myTarget.id).offsetParent().height();
                    var h = axdom("#" + myTarget.id).height();
                    var bottom = ph - subMenuTop - h;
                    css = { top: "auto", bottom: bottom };
                } else {
                    css = { top: subMenuTop };
                }
                if (this.openLR == "left") {
                    //css.left = -(menuWidth - 15);
                    css.left = -(20);
                }

                axdom("#" + myTarget.id + "_AX_subMenu").css(css);
                axdom("#" + myTarget.id + "_AX_subMenu").show();

                this.showedItem[depth] = myTarget.id + "_AX_subMenu";
            }
        }
    },
    contextMenuItemDown: function (event, objSeq, objID) {
        var cfg = this.config;
        var obj = this.objects[objSeq];

        if (event.keyCode == AXUtil.Event.KEY_ESC) {
            this._close(objSeq, objID, event);
            return;
        }

        // event target search -
        var eid = event.target.id.split(/_AX_/g);
        var eventTarget = event.target;
        var myTarget = this.getEventTarget({
            evt: eventTarget, evtIDs: eid,
            find: function (evt, evtIDs) { return (axdom(evt).hasClass("contextMenuItem")) ? true : false; }
        });
        // event target search ------------------------

        if (myTarget) {

        } else {
            this._close(objSeq, objID, event);
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
            find: function (evt, evtIDs) { return (axdom(evt).hasClass("contextMenuItem") || axdom(evt).hasClass("tool-checkbox") || axdom(evt).hasClass("tool-sort")) ? true : false; }
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
            for (var hash, idx= 0, __arr = hashs; (idx < __arr.length && (hash = __arr[idx])); idx++) {
                if (idx == 0) menu = menu[hash];
                else menu = menu[obj.reserveKeys.subMenu][hash];
            }

            if (menu[obj.reserveKeys.subMenu] && menu[obj.reserveKeys.subMenu].length > 0 && this.mobileMode){
                //this.initMobileModal(objID, objSeq, this.mobileModalObj.myobj, this.mobileModalObj.modalObj, (depth+1), menu.subMenu);
                this.mobileModalSubMenu(myTarget.id,  objSeq, objID,  this.mobileModalObj.myobj, this.mobileModalObj.modalObj, menu, (depth+1));
                return false;
            }

            if (axdom(myTarget).hasClass("tool-checkbox")){
                menu.checked = !menu.checked;
                axdom("#" + menu.__axdomId).find(".tool-checkbox").toggleClass("on");

                if (obj.onchange) {
                    obj.onchange.call({ menu: obj.menu, clickMenu: menu, sendObj: obj.sendObj }, objID);
                }
                return true;
            }

            if (axdom(myTarget).hasClass("tool-sort")){

                // 다른 메뉴들은 모두 정렬 헤제
                for (var M, midx= 0, __arr = obj.menu; (midx < __arr.length && (M = __arr[midx])); midx++) {
                    if(menu != M){
                        M.sort = undefined;
                        axdom("#" + M.__axdomId).find(".tool-sort").removeClass("asc").removeClass("desc");
                    }
                }


                if(menu.sort == undefined) menu.sort = "";
                if(menu.sort.toString().lcase() == "asc"){
                    axdom("#" + menu.__axdomId).find(".tool-sort").removeClass("asc").addClass("desc");
                    menu.sort = "desc";
                }else if(menu.sort.toString().lcase() == "desc"){
                    axdom("#" + menu.__axdomId).find(".tool-sort").removeClass("desc").addClass("asc");
                    menu.sort = "asc";
                }else{
                    axdom("#" + menu.__axdomId).find(".tool-sort").addClass("desc");
                    menu.sort = "desc";
                }

                if (obj.onsort) {
                    if(obj.onsort.call({ menu: obj.menu, sortMenu: menu, sendObj: obj.sendObj }, objID) != true){
                        this._close(objSeq, objID, event);
                    }
                }
                return true;
            }

            if (menu.onclick) {
                if(menu.onclick.call({ menu: menu, sendObj: obj.sendObj }, objID) != true){
                    this._close(objSeq, objID, event);
                }
                return true;
            }else if (obj.onchange) { // 라벨 선택 할 때. 정렬항목도 없는 경우만 체크 모드로 연결
                menu.checked = !menu.checked;
                axdom("#" + menu.__axdomId).find(".tool-checkbox").toggleClass("on");

                if (obj.onchange) {
                    if (obj.onchange.call({ menu: obj.menu, clickMenu: menu, sendObj: obj.sendObj }, objID) != true){
                        this._close(objSeq, objID, event);
                    }
                }
                return true;
            }
        }
    }
});

var AXContextMenu = new AXContextMenuClass();
AXContextMenu.setConfig({});

/**
 * @namespace AXContextMenu
 * @description AXContextMenu 오브젝트는 AXContextMenuClass 를 이용하여 AXJ에서 미리 선언한 인스턴스입니다.
 * AXContentMenu와 같이 사용할 때마다 new를 하지 않고 사용되는 UI들은 AXJ에서 미리 선언해두고 있습니다.
 */
/**
 * @method AXContextMenu.bindSetConfig
 * @param {String} objID - object ID
 * @param {Object} configs - contentMenu config
 * @description contextmenu 오브젝트에 속성을 변경합니다.
 * @example
 ```js
 AXContextMenu.bindSetConfig("contenxt01", {});
 ```
 */
/**
 * @method AXContextMenu.bind
 * @param {Object} obj - 컨텍스트메뉴 속성
 * @returns {AXContextMenu}
 * @description 컨텍스트메뉴를 선언하여 컨텍스트를 메뉴를 사용준비합니다. bind한 컨텍스트 메뉴는 id로 open 할 수 있습니다.
 * @example
 ```js
 AXContextMenu.bind({
		id:"myContextMenu",
		theme:"AXContextMenu", // 선택항목
		width:"150", // 선택항목
		checkbox:"checkbox", // [checkbox|radio]
		sortbox:true,
		menu:[
			{label:'선택 1', checked:true, onclick:function(){
				return false;
			}},
			{label:'선택 2', checked:true,
				subMenu:[
					{label:"하위메뉴1"},
					{label:"하위메뉴2",
						subMenu:[
							{label:"하위메뉴21"},
							{label:"하위메뉴22"}
						]
					},
					{label:"하위메뉴3"},
					{label:"하위메뉴3"},
					{label:"하위메뉴3"}
				]
			},
			{label:'선택 3', checked:true},
			{label:'선택 4', checked:false, sort:"asc"} // config 에 checkbox 가 있는데. menu에 onclick 가 없으면 체크박스 액션이 작동합니다.
		],
		onchange: function(){ // 체크박스 선택값이 변경 된 경우 호출 됩니다.
			trace(this.menu);

			// return true; 메뉴 창이 닫히지 않게 합니다.
		},
		onsort: function(){ // 정렬이 변경 된 경우 호출 됩니다.
			trace(this.sortMenu);

			// return true; 메뉴 창이 닫히지 않게 합니다.
		}
	});
 ```
 */
/**
 * @method AXContextMenu.open
 * @param {Object} myobj
 * @param {Event|Object} position - 이벤트 객체를 전달하거나 {left:[Number], top:[Number]} 를 전달합니다.
 * @returns {AXContextMenu}
 * @description bind된 컨텍스트메뉴 개체를 오픈합니다. (이벤트속성에 정해진 마우스 포지션또는 사용자가 정한 left, top 포지션에)
 * @example
 ```js
 AXContextMenu.open({
	id:"myContextMenuTree", sendObj:{id:"전달하고싶은 오브젝트", name:"형식은 자유"}
}, event); // event 직접 연결 방식

 AXContextMenu.open({
	id:"myContextMenuTree", sendObj:{id:"전달하고싶은 오브젝트", name:"형식은 자유"}
}, {left:0, top:0}); // position 직접 결정 방식
 ```
 */
/**
 * @method AXContextMenu.close
 * @param {Object} obj
 * @returns {AXContextMenu}
 * @description 열린 컨텍스트메뉴 개체를 닫습니다.
 * @example
 ```js
 AXContextMenu.close({
	id:"myContextMenuTree"
});
 ```
 */


/**
 * @class AXPopOverClass
 * @extends AXContextMenuClass
 * @version v1.0
 * @author tom@axisj.com, axisj.com
 * @description AXContextMenuClass를 상속하여 만들어진 클래스로 마우스 오버이벤트에 최적화 됨
 * @example
```js
 var AXPopOver = new AXPopOverClass();
 AXPopOver.setConfig({ theme: "AXPopOver" });
```
 */
var AXPopOverClass = Class.create(AXContextMenuClass, {
/**
 * @method AXPopOverClass.bind
 * @param {Object} obj 팝오버메뉴 속성
 * @returns AXPopOverClass
 * @description 팝오버메뉴를 선언하여 팝오버 메뉴를 사용준비합니다. bind한 팝오버메뉴는 id로 open 할 수 있습니다.
 * @example
 ```js
 AXPopOver.bind({
	id:"myPopOver",
	theme:"AXPopOver", // 선택항목
	width:"200", // 선택항목
	menu:[
		{userType:0, label:"Friends", className:"groupName"},
		{userType:0, label:"Invite friends", className:"", onclick:function(){}},
		{userType:0, label:"Find friends", className:"", onclick:function(){}},
		{userType:0, label:"Photo", className:"groupName"},
		{userType:0, label:"Cut", className:"", onclick:function(){}},
		{userType:0, label:"Roll", className:"", onclick:function(){}},
		{userType:0, label:"Equipment", className:"groupName"},
		{userType:0, label:"Setting", className:""},
		{userType:0, label:"Screen", className:"", onclick:function(){}},
		{userType:0, label:"Securities", className:"groupName"},
		{userType:0, label:"Account", className:"", onclick:function(){}},
		{userType:0, label:"Logout", className:"", onclick:function(){}},
	]
});

 $("#popoverBtn1").bind("mouseover", function(){
	var pos = $(this).offset();
	AXPopOver.open({
		id:"myPopOver", sendObj:{id:"전달하고싶은 오브젝트", name:"형식은 자유"}},
		{left:pos.left-60, top:pos.top+30}
	);
});
 ```
 */

/**
 * @method AXPopOverClass.open
 * @param {Object} myobj
 * @param {Event|Object} position - 이벤트 객체를 전달하거나 {left:[Number], top:[Number]} 를 전달합니다.
 * @returns {AXPopOverClass}
 * @description bind된 컨텍스트메뉴 개체를 오픈합니다. (이벤트속성에 정해진 마우스 포지션또는 사용자가 정한 left, top 포지션에)
 * @example
 ```js
 AXPopOver.open({
	id:"myPopover", sendObj:{id:"전달하고싶은 오브젝트", name:"형식은 자유"}
}, event); // event 직접 연결 방식

 AXPopOver.open({
	id:"myPopover", sendObj:{id:"전달하고싶은 오브젝트", name:"형식은 자유"}
}, {left:0, top:0}); // position 직접 결정 방식
 ```
 */

/**
 * @method AXPopOverClass.close
 * @param {Object} obj
 * @returns {AXPopOverClass}
 * @description 열린 팝오버메뉴 개체를 닫습니다.
 * @example
 ```js
 AXPopOver.close({
	id:"myPopOver"
});
 ```
 */
    open: function (myobj, position) {
        var cfg = this.config;
        var objSeq = null;
        AXUtil.each(this.objects, function (index, O) {
            if (O.id == myobj.id) {
                objSeq = index;
                //return false;
            } else {
                axdom("#" + O.id).remove();
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

        axdom("#" + objID).remove();

        var href = (obj.href == undefined) ? cfg.href : obj.href;

        var filter = this.filter.bind(this);
        var getSubMenu = this.getSubMenu.bind(this);
        var po = [];
        po.push("<div id=\"" + objID + "\" class=\"" + theme + "\" style=\"width:" + width + "px;\">");
        po.push("<div class=\"arrowTop\" style=\"" + arrowStyle + "\"></div>");
        po.push("<div class=\"arrowBottom\" style=\"" + arrowStyle + "\"></div>");
        po.push("<div class=\"blockContainer\">");
        if (obj.menu) {
            AXUtil.each(obj.menu, function (idx, menu) {
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
        axdom(document.body).append(po.join(''));

        if (direction == "top") {
            axdom("#" + objID).find(".arrowTop").show();
            axdom("#" + objID).find(".arrowBottom").hide();
        } else if (direction == "bottom") {
            axdom("#" + objID).find(".arrowTop").hide();
            axdom("#" + objID).find(".arrowBottom").show();
        } else {
            axdom("#" + objID).find(".arrowTop").show();
            axdom("#" + objID).find(".arrowBottom").hide();
        }

        axdom("#" + objID + " .contextMenuItem:first-child").addClass("first");
        axdom("#" + objID + " .contextMenuItem:last-child").addClass("last");

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
        axdom("#" + objID + " .contextMenuItem").bind("mouseover", this.contextMenuItemMouseOverBind);
        axdom("#" + objID).bind("mouseover", eventClear.bind(this));
        axdom("#" + objID).bind("mouseout", this.contextMenuMouseOutBind);

        this.contentMenuSetCss(null, position, objSeq, objID);

        //var eventBind = this.eventBind.bind(this);
        this.eventBind(objSeq, objID);
        //setTimeout(function(){}, 1);

		return this;
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
        var pElement = axdom("#" + objID).offsetParent();
        var pBox = { width: pElement.width(), height: pElement.height() };
        var clientHeight = (AXUtil.docTD == "Q") ? document.body.scrollHeight : document.documentElement.scrollHeight;
        var clienWidth = (AXUtil.docTD == "Q") ? document.body.scrollWidth : document.documentElement.scrollWidth;
        if (clienWidth > pBox.width) pBox.width = clienWidth;
        if (clientHeight > pBox.height) pBox.height = clientHeight;
        var _box = { width: axdom("#" + objID).outerWidth(), height: axdom("#" + objID).outerHeight() };
        // -- 부모박스 정보와 박스 정보
        var openTB = "";
        if (direction == "top") {
            openTB = "top";
        } else if (direction == "bottom") {
            css.top -= axdom("#" + objID).outerHeight();
            openTB = "bottom";
        } else {
            if ((_box.height.number() + css.top.number()) > pBox.height) {
                css.top = css.top - _box.height.number() - position.handleHeight - 3;
                axdom("#" + objID).find(".arrowTop").hide();
                axdom("#" + objID).find(".arrowBottom").show();
                //css.top -= ((_box.height.number() + css.top.number()) - pBox.height) + 5;
                openTB = "bottom";
            } else {
                axdom("#" + objID).find(".arrowTop").show();
                axdom("#" + objID).find(".arrowBottom").hide();
                openTB = "top";
            }
        }

        if (css.left != undefined) {
            if ((_box.width.number() + css.left.number()) > pBox.width) {
                var moveLeft = ((_box.width.number() + css.left.number()) - pBox.width) + 5;
                css.left -= moveLeft;
                if (openTB == "top") {
                    axdom("#" + objID).find(".arrowTop").css({ "background-position": (moveLeft + 5) + "px 0px;" });
                } else {
                    axdom("#" + objID).find(".arrowBottom").css({ "background-position": (moveLeft + 5) + "px 0px;" });
                }
            } else {

            }
        } else {

        }
        axdom("#" + objID).css(css);
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
            find: function (evt, evtIDs) { return (axdom(evt).hasClass("contextMenuItem")) ? true : false; }
        });
        // event target search ------------------------
        if (myTarget) {
            var poi = myTarget.id.split(/_AX_/g);
            var depth = poi[poi.length - 2];
            if (this.showedItem[depth]) {
                axdom("#" + this.showedItem[depth]).hide();
            }
            if (axdom(myTarget).hasClass("hasSubMenu")) {
                var subMenuTop = axdom("#" + myTarget.id).position().top;
                var css;
                if (this.openTB == "up") {
                    var ph = axdom("#" + myTarget.id).offsetParent().height();
                    var h = axdom("#" + myTarget.id).height();
                    var bottom = ph - subMenuTop - h;
                    css = { top: "auto", bottom: bottom };
                } else {
                    css = { top: subMenuTop };
                }
                if (this.openLR == "left") {
                    //css.left = -(menuWidth - 15);
                    css.left = -(20);
                }
                axdom("#" + myTarget.id + "_AX_subMenu").css(css);
                axdom("#" + myTarget.id + "_AX_subMenu").show();

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

/**
 * @namespace AXPopOver
 * @description AXPopOver 오브젝트는 AXPopOverClass 를 이용하여 AXJ에서 미리 선언한 인스턴스입니다.
 * AXPopOver 같이 사용할 때마다 new를 하지 않고 사용되는 UI들은 AXJ에서 미리 선언해두고 있습니다.
 */
/**
 * @method AXPopOver.bindSetConfig
 * @param {String} objID - object ID
 * @param {Object} configs contentMenu config
 * @description contextmenu 오브젝트에 속성을 변경합니다.
 * @example
 ```js
 AXPopOver.bindSetConfig("popover01", {});
 ```
 */
/**
 * @method AXPopOver.bind
 * @param {Object} obj - 컨텍스트메뉴 속성
 * @returns {AXPopOver}
 * @description 컨텍스트메뉴를 선언하여 컨텍스트를 메뉴를 사용준비합니다. bind한 컨텍스트 메뉴는 id로 open 할 수 있습니다.
 * @example
 ```js
 AXPopOver.bind({
	id:"myPopOver",
	theme:"AXPopOver", // 선택항목
	width:"200", // 선택항목
	menu:[
		{userType:0, label:"Friends", className:"groupName"},
		{userType:0, label:"Invite friends", className:"", onclick:function(){}},
		{userType:0, label:"Find friends", className:"", onclick:function(){}},
		{userType:0, label:"Photo", className:"groupName"},
		{userType:0, label:"Cut", className:"", onclick:function(){}},
		{userType:0, label:"Roll", className:"", onclick:function(){}},
		{userType:0, label:"Equipment", className:"groupName"},
		{userType:0, label:"Setting", className:""},
		{userType:0, label:"Screen", className:"", onclick:function(){}},
		{userType:0, label:"Securities", className:"groupName"},
		{userType:0, label:"Account", className:"", onclick:function(){}},
		{userType:0, label:"Logout", className:"", onclick:function(){}},
	]
});

 $("#popoverBtn1").bind("mouseover", function(){
	var pos = $(this).offset();
	AXPopOver.open({
		id:"myPopOver", sendObj:{id:"전달하고싶은 오브젝트", name:"형식은 자유"}},
		{left:pos.left-60, top:pos.top+30}
	);
});
 ```
 */
/**
 * @method AXPopOver.open
 * @param {Object} myobj
 * @param {Event|Object} position - 이벤트 객체를 전달하거나 {left:[Number], top:[Number]} 를 전달합니다.
 * @returns {AXPopOver}
 * @description bind된 컨텍스트메뉴 개체를 오픈합니다. (이벤트속성에 정해진 마우스 포지션또는 사용자가 정한 left, top 포지션에)
 * @example
 ```js
 AXPopOver.open({
	id:"myPopover", sendObj:{id:"전달하고싶은 오브젝트", name:"형식은 자유"}
}, event); // event 직접 연결 방식

 AXPopOver.open({
	id:"myPopover", sendObj:{id:"전달하고싶은 오브젝트", name:"형식은 자유"}
}, {left:0, top:0}); // position 직접 결정 방식
 ```
 */
/**
 * @method AXPopOver.close
 * @param {Object} obj
 * @returns {AXPopOver}
 * @description 열린 팝오버 개체를 닫습니다.
 * @example
 ```js
 AXPopOver.close({
	id:"myPopover"
});
 ```
 */


/**
 * @method jQueryExtends.bindTooltip
 * @param {Object} configs - 툴팁설정
 * @returns {jQueryObject}
 * @description 툴팁을 바인드 하는 대상의 '아이디+"_AX_tooltip"'를 아이디로 하는 엘리먼트를 대상이 마우스 오버 이벤트 발생 할때 툴팁으로 표시 합니다.
 * @example
```js

 <div style="position:relative;">
	 <button class="AXButton" onclick="" id="tooltip4"><div class="black_help">Bottom</div></button>
	 <div id="tooltip4_AX_tooltip" class="AXTooltipContent">
		 AXCore 에서는 자바스크립트 자료형에 대한 prototype 확장 메소드,
		 AXJ 클래스 원형, AXUtil 개체, AXReq(AJAX통신용) 클래스, AXCalendar 클래스, AXContext 클래스, AXPopOver 클래스, AXMask 클래스, AXNotification 클래스,
		 AXScroll 클래스, AXMultiSelect 클래스, jQuery extend(eventType, easing) 구문 등을 포함하고 있습니다.
	 </div>

	 <button class="AXButton" onclick="" id="tooltip5"><div class="black_help">Top</div></button>
	 <div id="tooltip5_AX_tooltip" class="AXTooltipContent">
		 AXCore 에서는 자바스크립트 자료형에 대한 prototype 확장 메소드,
		 AXJ 클래스 원형, AXUtil 개체, AXReq(AJAX통신용) 클래스, AXCalendar 클래스, AXContext 클래스, AXPopOver 클래스, AXMask 클래스, AXNotification 클래스,
		 AXScroll 클래스, AXMultiSelect 클래스, jQuery extend(eventType, easing) 구문 등을 포함하고 있습니다.
	 </div>

	 <button class="AXButton" onclick="" id="tooltip6"><div class="black_help">Auto</div></button>
	 <div id="tooltip6_AX_tooltip" class="AXTooltipContent">
		 AXCore 에서는 자바스크립트 자료형에 대한 prototype 확장 메소드,
		 AXJ 클래스 원형, AXUtil 개체, AXReq(AJAX통신용) 클래스, AXCalendar 클래스, AXContext 클래스, AXPopOver 클래스, AXMask 클래스, AXNotification 클래스,
		 AXScroll 클래스, AXMultiSelect 클래스, jQuery extend(eventType, easing) 구문 등을 포함하고 있습니다.
	 </div>
 </div>
 <script>
	// configs:{
	//	theme: (config.theme || "AXPopOverTooltip"), // (optional)
	//	width: (config.width || ""), // (optional)
	//	direction: (config.direction || "top"), // (optional)
	// }

	// class 가 tooltipbind인 모든 엘리먼트에 툴팁설정
	$(".tooltipbind").bindTooltip({width:300});

	//AXPopOverTooltip (bindTooltip) 방향설정 방식
	$("#tooltip4").bindTooltip({direction:"bottom", width:300}); //{direction:"[auto|top|bottom]"}
	$("#tooltip5").bindTooltip({direction:"top", width:300}); //{direction:"[auto|top|bottom]"}
	$("#tooltip6").bindTooltip({direction:"auto", width:300}); //{direction:"[auto|top|bottom]"}
 </script>
```
 */
axdom.fn.bindTooltip = function (config) {
    if (config == undefined) config = {};
    AXUtil.each(this, function () {
        var tooltipContent = axdom("#" + this.id + "_AX_tooltip").html();
        AXPopOver.bind({
            id: this.id + "_AX_tooltipobj",
            theme: (config.theme || "AXPopOverTooltip"), // 선택항목
            width: (config.width || ""), // 선택항목
            direction: (config.direction || "top"), // 선택항목
            body: tooltipContent
        });

        axdom(this).bind((config.event || "mouseover"), function () {
            var pos = axdom(this).offset();
            var direction = (config.direction || "top");
            var posTop = pos.top;
            if (direction == "bottom") {
                posTop -= 3;
            } else {
                posTop += axdom(this).outerHeight() + 3;
            }
            AXPopOver.open({ id: this.id + "_AX_tooltipobj", sendObj: {} }, { left: pos.left, top: posTop, handleHeight: (axdom(this).outerHeight().number() + 3) }); // event 직접 연결 방식
        });
    });
	return this;
};
/* ---------------------------------------------- AXContextMenu -- */

/* -- AXMobileModal ---------------------------------------------- */
/**
 * @class AXMobileModal
 * @extends AXJ
 * @version v1.0
 * @author tom@axisj.com, axisj.com
 * @logs
 "2013-12-11 오후 5:48:28"
 "2014-04-14 : tom - modalOpen위치 scrollTop 적용"
 * @example
```js
 var myMobileModal = new AXMobileModal();
 // default config
 myMobileModal.config.theme = "AXMobileModal";
 myMobileModal.config.width = "auto";
 myMobileModal.config.height = "auto";
 myMobileModal.config.margin = "10px";
 myMobileModal.config.align = "center";
 myMobileModal.config.valign = "center";
```
 */
var AXMobileModal = Class.create(AXJ, {
    initialize: function (AXJ_super) {
        AXJ_super();
        this.config.theme = "AXMobileModal";
        this.config.width = "auto";
        this.config.height = "auto";
        this.config.margin = "10px";
        this.config.align = "center";
        this.config.valign = "center";
    },
/**
 * @method AXMobileModal.setConfig
 * @param {Object} configs
 * @description 모바일모달 개체 초기화
 * @example
```js
myMobileModal.setConfig({
	//theme, margin, align, valign
	width:300,
	height:300,
	head:{
		close:{
			onclick:function(){

			}
		}
	},
	onclose: function(){
		trace("close bind");
	}
});
```
 */
    init: function () {
        var cfg = this.config;

        if (!cfg.head) {
            cfg.head = {};
        }
    },
/**
 * @method AXMobileModal.open
 * @returns {Object} modalObject - 열린 모달의 오브젝트
 * @description 모바일 모달창을 열고 열린 모달의 엘리먼트 정보를 리턴합니다.
 * @example
```js
var obj = myMobileModal.open();
// 다음의 정보를 리턴합니다.
// obj: {
//    jQueryModal: 모달,
//    modalPanel: 모달의 패널,
//    modalHead: 모달패널의 헤드,
//    modalBody: 모달패널의 바디,
//    modalFoot: 모달패널의 풋
// }

obj.modalHead.html("자유Head 설정테스트");
obj.modalBody.html("<div style='height:250px;background:#fff;text-align: center;line-height:30px;'>자유body 테스트</div>");
//obj.modalFoot.html("자유footer 테스트");
```
 */
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
        this.jQueryModal = axdom(po.join(''));
        axdom(document.body).append(this.jQueryModal);

        this.modalPanel = this.jQueryModal.find(".AXMobileModalPanel");
        this.modalHead = this.modalPanel.find(".mobileModalHead");
        this.modalBody = this.modalPanel.find(".mobileModalBody");
        this.modalFoot = this.modalPanel.find(".mobileModalFoot");

        this.openConfigs = configs;
        this.setSizeModal(this.openConfigs, onLoad);
        this.modalPanel.find(".mobileModelClose").bind("click", this.close.bind(this));
        this.jQueryModal.bind("click", this.modalClick.bind(this));

        axdom(window).unbind("resize.AXMobileModal").bind("resize.AXMobileModal", this.reposition.bind(this));

        this.opened = true;

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
	    if (top < -5) top = -5;

        var cssStylesStart = {
            left: (axf.clientWidth() - (modalWidth*0.8)) / 2,
            top: (axf.clientHeight() - (modalHeight*0.8)) / 2,
            width: (modalWidth*0.8),
            height: (modalHeight*0.8)
        };
        //cssStylesStart.top += jQuery(window).scrollTop();
        this.modalPanel.css(cssStylesStart);

        cssStyles.left = left;
        cssStyles.top = top;
        cssStyles.width = modalWidth;
        cssStyles.height = modalHeight;
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

/**
 * @method AXMobileModal.close
 * @returns {AXMobileModal}
 * @description 모바일모달창을 닫습니다.
 * @example
```js
 myMobileModal.close();
```
 */
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
        this.opened = false;
        axdom(window).unbind("resize.AXMobileModal");

		return this;
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
        if (top < -5) top = -5;

        cssStyles.left = left;
        cssStyles.top = top;
        cssStyles.width = modalWidth;
        cssStyles.height = modalHeight;

        this.modalPanel.css(cssStyles);
    }
});
/* ---------------------------------------------- AXMobileModal -- */

/* -- jQuery easing plugin ---------------------------------------------- */
axdom.extend(true, {
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
/* ---------------------------------------------- jQuery easing plugin -- */

// jQuery misc plugin
// 2014-08-08 tom : select option 이 없으면 엘리먼트를 찾지 않는 버그 픽스
var __r20 = /%20/g,
    __rbracket = /\[\]$/,
    __rCRLF = /\r?\n/g,
    __rinput = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
    __rselectTextarea = /^(?:select|textarea)/i;

// jquery event extend for mobile
var rkeyEvent = /^key/;
var rmouseEvent = /^(?:mouse|contextmenu)|click/;
axf.each(("touchstart touchmove touchend").split(" "), function (i, name) {
	axdom.fn[name] = function (data, fn) {
		if (fn == null) { fn = data; data = null; }
		return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
	};
	if (rkeyEvent.test(name)) { axdom.event.fixHooks[name] = axdom.event.keyHooks; }
	if (rmouseEvent.test(name)) { axdom.event.fixHooks[name] = axdom.event.mouseHooks; }
});

/**
 * 설명
 * @member {type} AXJ.name
 */
/**
 * @method jQueryExtends.serializeObject
 * @returns {Array}
 * @description 엘리먼트 안에 폼아이템 요소들을 수집합니다. <en>Collect 'form item' inside target element</en>
 * @example
 ```js
 var myItems = $("#mytarget").serializeObject();
 ```
 */
axdom.fn.serializeObject = function () {
    var myArray = this.map(function () {
            return this.elements ? axdom.makeArray(this.elements) : this;
        })
        .filter(function () {
            return this.name && !this.disabled &&
                (this.checked || __rselectTextarea.test(this.nodeName) ||
                    __rinput.test(this.type));
        })
        .map(function (i, elem) {
            var val = axdom(this).val();
            var label = (axdom(elem).attr("title") || axdom(elem).attr("placeholder") || "");

	        if(val == null){
		        if(this.nodeName.lcase() == "select") val = "";
	        }

            return val == null ?
                null :
                axdom.isArray(val) ?
                    axdom.map(val, function (val, i) {
                        return { id: elem.id, name: elem.name, type: elem.type, value: val.replace(__rCRLF, "\r\n"), label: label };
                    }) :
                { id: elem.id, name: elem.name, type: elem.type, value: val.replace(__rCRLF, "\r\n"), label: label };

        }).get();
    return myArray;
};

/**
 * @method jQueryExtends.endFocus
 * @returns {jQueryObject}
 * @description input 엘리먼트 맨끝에 포커스되도록 합니다.
 * @example
 ```js
 $("#mytarget").endFocus();
 ```
 */
axdom.fn.endFocus = function () {
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
	return this;
};

/**
 * @method jQueryExtends.setCaret
 * @param {Number} [pos=valueLength] - 포커스 포지션 넘버
 * @returns {jQueryObject}
 * @description input 엘리먼트 특정위치에 커서를 위치시켜 줍니다.
 * @example
 ```js
 $("#mytarget").setCaret(2);
 ```
 */
axdom.fn.setCaret = function (pos) {
    var input = this[0];
    if(typeof pos == "undefined"){
        pos = input.value.length;
    }
    if (input.setSelectionRange) {
        input.focus();
        input.setSelectionRange(pos, pos);
    } else if (input.createTextRange) {
        var range = input.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    } else if(input.selectionStart){
        input.focus();
        input.selectionStart = pos;
        input.selectionEnd = pos;
    }
	return this;
};

/**
 * @method jQueryExtends.onwheel
 * @param {String} handler - 이벤트 키 네임
 * @param {Function} callBackFn - 이벤트 콜백 함수
 * @returns {jQueryObject}
 * @description 엘리먼트에 휠이벤트를 바인드 합니다. (단 엘리먼트에 id속성이 없는 경우 제대로 작동하지 않을 수 있습니다.)
 * @example
 ```
$("#mytarget").onwheel("mywheel", function(event){
	var delta = event.detail ? event.detail * (-20) : event.wheelDelta / 2;
	trace(delta);
});
 ```
 */
axdom.fn.onwheel = function(handler, callBackFn){
	axf.each(this,  function(){
		if(typeof axf._customerEvents == "undefined") axf._customerEvents = {};
		axf._customerEvents[this.id+"_AX_"+handler] = callBackFn;
		if (document.attachEvent) {
			this.attachEvent("on" + axf.mousewheelevt, axf._customerEvents[this.id+"_AX_"+handler]);
		} else if (document.addEventListener) {
			this.addEventListener(axf.mousewheelevt, axf._customerEvents[this.id+"_AX_"+handler], false);
		}
	});
	return this;
};

/**
 * @method jQueryExtends.offwheel
 * @param {String} handler - 이벤트 키 네임
 * @returns {jQueryObject}
 * @description 엘리먼트에 휠이벤트를 언바인드 합니다. (단 엘리먼트에 id속성이 없는 경우 제대로 작동하지 않을 수 있습니다.)
 * @example
 ```
 $("#mytarget").offwheel("mywheel");
 ```
 */
axdom.fn.offwheel = function(handler){
	axf.each(this,  function(){
		if (document.attachEvent) {
			this.detachEvent("on" + axf.mousewheelevt, axf._customerEvents[this.id+"_AX_"+handler]);
		} else if (document.addEventListener) {
			this.removeEventListener(axf.mousewheelevt, axf._customerEvents[this.id+"_AX_"+handler], false);
		}
	});
	return this;
};

/*
input type=text, textarea가 일부 브라우저에서 포커스 되지 않는 현상해결 해주는 구문
 */
axdom(document.body).ready(function () {
	axdom("input[type=text]").bind("mousedown", function () { this.focus(); });
	axdom("textarea").bind("mousedown", function () { this.focus(); });
});
/* ---------------------------- */
var AXInputConverter = Class.create(AXJ, {
	initialize: function (AXJ_super) {
		AXJ_super();
		this.objects = [];
		this.inputTypes = [
			{ type: "search" }, { type: "number" }, { type: "money" }, { type: "slider" }, { type: "twinSlider" },
			{ type: "selector" }, { type: "switch" }, { type: "segment" },
			{ type: "date" }, { type: "dateTime" }, { type: "twinDate" }, { type: "twinDateTime" },
			{ type: "checked" }, { type: "pattern" }
		];
		this.config.anchorClassName = "AXanchor";
		this.config.anchorPlaceHolderClassName = "AXanchorPlaceHolder";
		this.config.anchorSearchClassName = "AXanchorSearch";
		this.config.anchorNumberContainerClassName = "AXanchorNumberContainer";
		this.config.anchorIncreaseClassName = "AXanchorIncrease";
		this.config.anchorDecreaseClassName = "AXanchorDecrease";
		this.config.anchorSelectorHandleContainerClassName = "AXanchorSelectorHandleContainer";
		this.config.anchorSelectorFinderContainerClassName = "AXanchorSelectorFinderContainer";
		this.config.anchorSelectorHandleClassName = "AXanchorSelectorHandle";
		this.config.anchorSelectorFinderClassName = "AXanchorSelectorFinder";
		this.config.anchorSelectorExpandBoxClassName = "AXanchorSelectorExpandBox";
		this.config.anchorSelectorExpandScrollClassName = "AXanchorSelectorExpandScroll"
		this.config.anchorSliderBoxClassName = "AXanchorSliderBox";
		this.config.anchorSwitchBoxClassName = "AXanchorSwitchBox";
		this.config.anchorSegmentBoxClassName = "AXanchorSegmentBox";
		this.config.anchorDateHandleClassName = "AXanchorDateHandle";
		this.config.bindDateExpandBoxClassName = "AXbindDateExpandBox";
		this.config.bindTwinDateExpandBoxClassName = "AXbindTwinDateExpandBox";
		this.config.anchorCheckedContainerClassName = "AXbindCheckedHandle";
		/* 모바일 반응 너비 */
		this.config.responsiveMobile = AXConfig.mobile.responsiveWidth;

		this.config.reserveKeys = {
			options: (AXConfig.AXSelect && AXConfig.AXSelect.keyOptions) || "options",
			optionValue: (AXConfig.AXSelect && AXConfig.AXSelect.keyOptionValue) || "optionValue",
			optionText: (AXConfig.AXSelect && AXConfig.AXSelect.keyOptionText) || "optionText",
			optionData: (AXConfig.AXSelect && AXConfig.AXSelect.keyOptionData) || "optionData"
		};
	},
	init: function () {
		axdom(window).resize(this.alignAllAnchor.bind(this));

		// 예약어 초기화
		this.config.reserveKeys = {
			options: (AXConfig.AXInput && AXConfig.AXInput.keyOptions) || "options",
			optionValue: (AXConfig.AXInput && AXConfig.AXInput.keyOptionValue) || "optionValue",
			optionText: (AXConfig.AXInput && AXConfig.AXInput.keyOptionText) || "optionText"
		};
	},
	windowResize: function () {
		// 사용안함
		var windowResizeApply = this.windowResizeApply.bind(this);
		if (this.windowResizeObserver) clearTimeout(this.windowResizeObserver);
		this.windowResizeObserver = setTimeout(function () {
			windowResizeApply();
		}, 1);
	},
	windowResizeApply: function(){
		// 사용안함
		if (this.windowResizeObserver) clearTimeout(this.windowResizeObserver);
		this.alignAllAnchor();
	},
	alignAllAnchor: function () {
		for(var i=0;i<this.objects.length;i++){
			this.alignAnchor(this.objects[i].id, i);
		}
	},
	msgAlert: function (msg) {
		var errorPrintType = "toast";
		if (AXConfig.AXInput) {
			errorPrintType = (AXConfig.AXInput.errorPrintType || "toast");
		}
		if (errorPrintType == "toast") toast.push(msg);
		else if (errorPrintType == "dialog") dialog.push(msg);
		else if (errorPrintType == "alert") AXUtil.alert(msg);
	},
	bindSetConfig: function (objID, configs) {
		var findIndex = null;
		axf.each(this.objects, function (index, O) {
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
			axf.each(configs, function (k, v) {
				_self.config[k] = v;
			});
		}
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

		if(obj.reserveKeys) cfg.reserveKeys = jQuery.extend(cfg.reserveKeys, obj.reserveKeys, true);
		var objID = obj.id;
		var objSeq = null;

		axf.each(this.objects, function (idx, O) {
			//if (this.id == objID && this.isDel == true) objSeq = idx;
			if (this.id == objID) {
				objSeq = idx;
				return false;
			}
		});

		if (obj.href == undefined) obj.href = cfg.href;

		if (objSeq == null) {
			objSeq = this.objects.length;
			this.objects.push({ id: objID, anchorID: cfg.targetID + "_AX_" + objID, config: obj, bindType: obj.bindType });
		} else {
			this.objects[objSeq].isDel = undefined;
			this.objects[objSeq].config = obj;
		}

		//if (obj.bindType != "checked") {
		//	this.appendAnchor(objID, objSeq, obj.bindType);
		//}
		// bind checked anchor 연결
		this.appendAnchor(objID, objSeq, obj.bindType);

		if (obj.bindType == "placeHolder") {
			this.bindPlaceHolder(objID, objSeq);
		} else if (obj.bindType == "search") {
			this.bindSearch(objID, objSeq);
		} else if (obj.bindType == "number") {
			this.bindNumber(objID, objSeq);
		} else if (obj.bindType == "money") {
			this.bindMoney(objID, objSeq);
		} else if (obj.bindType == "selector") {
			this.bindSelector(objID, objSeq);
		} else if (obj.bindType == "slider") {
			this.bindSlider(objID, objSeq);
		} else if (obj.bindType == "twinSlider") {
			this.bindTwinSlider(objID, objSeq);
		} else if (obj.bindType == "switch") {
			this.bindSwitch(objID, objSeq);
		} else if (obj.bindType == "segment") {
			this.bindSegment(objID, objSeq);
		} else if (obj.bindType == "date") {
			this.bindDate(objID, objSeq);
		} else if (obj.bindType == "twinDate") {
			this.bindTwinDate(objID, objSeq);
		} else if (obj.bindType == "twinDateTime") {
			this.bindTwinDate(objID, objSeq, "time");
		} else if (obj.bindType == "checked") {
			this.bindChecked(objID, objSeq);
		} else if (obj.bindType == "pattern") {
			this.bindPattern(objID, objSeq);
		}
	},
	unbind: function (obj) {
		var cfg = this.config;
		var removeAnchorId;
		var removeIdx;
		axf.each(this.objects, function (idx, O) {
			if (O.id != obj.id) {
				// collect.push(this);
			} else {
				if (O.isDel != true) {
					removeAnchorId = this.anchorID;
					removeIdx = idx;
				}
			}
		});

		var objID = obj.id;
		var obj = this.objects[removeIdx];
		if(obj) {
			if (obj.documentclickEvent) axdom(document).unbind("click.AXInput", obj.documentclickEvent);
			var objDom = axdom("#" + objID);
			objDom.unbind("keydown.AXInput");
			objDom.unbind("keydown.AXInputCheck");
			objDom.unbind("change.AXInput");
			objDom.unbind("focus.AXInput");
			objDom.unbind("blur.AXInput");
		}


		if (removeAnchorId) {
			this.objects[removeIdx].isDel = true;
			axdom("#" + obj.id).removeAttr("data-axbind");
			axdom("#" + removeAnchorId).remove();


			if (obj.bindSliderMouseMove) axdom(document.body).unbind("mousemove.AXInput", obj.bindSliderMouseMove);
			if (obj.bindSliderMouseUp) axdom(document.body).unbind("mouseup.AXInput", obj.bindSliderMouseUp);
			if (obj.bindSliderTouchMove) document.removeEventListener("touchmove.AXInput", obj.bindSliderTouchMove, false);
			if (obj.bindSliderTouchEnd) document.removeEventListener("touchend.AXInput", obj.bindSliderTouchEnd, false);
			if (obj.bindTwinSliderMouseMove) axdom(document.body).unbind("mousemove.AXInput", obj.bindTwinSliderMouseMove);
			if (obj.bindTwinSliderMouseUp) axdom(document.body).unbind("mouseup.AXInput", obj.bindTwinSliderMouseUp);

			if (AXgetId(cfg.targetID + "_AX_" + objID + "_AX_expandBox")) {
				axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox").remove(); // 개체 삭제 처리
				axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_Handle").removeClass("on");
			}
		}
	},
	bindInputDisabled: function(objID, _disabled){
		var findIndex = null;
		for (var O, index = 0; (index < this.objects.length && (O = this.objects[index])); index++) {
			if (O.id == objID && O.isDel != true) {
				findIndex = index;
				break;
			}
		};

		if (findIndex == null) {
			//trace("바인드 된 오브젝트를 찾을 수 없습니다.");
			return;
		} else {
			var obj = this.objects[findIndex];
			var cfg = this.config;

			if(typeof _disabled == "boolean"){
				axf.getId(objID).disabled = _disabled;
			}else{
				axf.getId(objID).disabled = !AXgetId(objID).disabled;
			}

			obj.bindAnchorTarget.data("disabled", axf.getId(objID).disabled);
			if(axf.getId(objID).disabled){
				obj.bindAnchorTarget.addClass("disable");
				obj.bindAnchorTarget.attr("disable", "disable");

				obj.bindAnchorTarget.find("a").bind("mousedown.AXInputDisabled", function(e){
					//alert("block");
					var event = window.event || e;
					if (event.preventDefault) event.preventDefault();
					if (event.stopPropagation) event.stopPropagation();
					event.cancelBubble = true;
					return false;
				});
			}else{
				obj.bindAnchorTarget.removeClass("disable");
				obj.bindAnchorTarget.removeAttr("disable");

				obj.bindAnchorTarget.find("a").unbind("mousedown.AXInputDisabled");
			}
		}
	},
	appendAnchor: function (objID, objSeq, bindType) {
		var cfg = this.config;
		var obj = this.objects[objSeq];
		//trace("appendAnchor");
		axdom("#" + cfg.targetID + "_AX_" + objID).remove();
		var anchorNode = axdom("<div id=\"" + cfg.targetID + "_AX_" + objID + "\" class=\"" + cfg.anchorClassName + "\" style=\"display:none;\"></div>");
		var iobj = axdom("#" + objID);
		iobj.attr("data-axbind", bindType);
		iobj.after(anchorNode);

		obj.bindAnchorTarget = axdom("#" + cfg.targetID + "_AX_" + objID);
		obj.bindTarget = iobj;

		//var offSetParent = iobj.offsetParent();
		var iobjPosition = iobj.position();
		var l = iobjPosition.left, t = iobjPosition.top, w = 0, h = 0;

		var borderW = iobj.css("border-left-width").number();
		var borderH = iobj.css("border-top-width").number();
		var marginW = iobj.css("margin-left").number();
		var marginH = iobj.css("margin-top").number();
		l = l + marginW;
		/*t = t;*/
		w = iobj.outerWidth();
		h = iobj.outerHeight();

		var css = { left: l, top: t, width: w, height: 0 };
		//trace(css);
		obj.bindAnchorTarget.css(css);
		obj.bindAnchorTarget.data("height", h);

		var _this = this;
		setTimeout(function () {
			_this.alignAnchor(objID, objSeq);
		});
		setTimeout(function () {
			_this.alignAnchor(objID, objSeq);
		}, 500);
	},
	alignAnchor: function (objID, objSeq) {
		var cfg = this.config;

		if(typeof objSeq == "undefined"){
			for(var i=0;i<this.objects.length;i++){
				if(this.objects[i].id == objID && !this.objects[i].isDel) {
					objSeq = i;
					break;
				}
			}
		}

		var obj = this.objects[objSeq];

		if (!AXgetId(objID)) return; /* 엘리먼트 존재 여부 확인 */

		if(!obj.bindTarget) {
			obj.bindTarget = axdom("#" + objID);
			obj.bindAnchorTarget = axdom("#" + cfg.targetID + "_AX_" + objID);
		}

		var iobjPosition = obj.bindTarget.position();
		var l = iobjPosition.left, t = iobjPosition.top;
		var w = obj.bindTarget.outerWidth();
		var h = obj.bindTarget.outerHeight();
		if (obj.bindTarget.css("display") == "none") {
			h = obj.bindAnchorTarget.data("height");
			var css = { width: w };
		} else {
			var css = { left: l, top: t, width: w, height: 0 };
		}
		//trace(css);
		if(!obj.bindAnchorTarget){
			obj.bindAnchorTarget = axdom("#" + cfg.targetID + "_AX_" + objID);
			obj.bindTarget = axdom("#" + objID);
		}
		if(obj.bindAnchorTarget) {
			obj.bindAnchorTarget.css(css);
			obj.bindAnchorTarget.data("height", h);
		}

		if (obj.bindType == "placeHolder") {

		} else if (obj.bindType == "search") {

		} else if (obj.bindType == "number") {
			var UPh = parseInt((h - 2) / 2) - 1;
			var DNh = parseInt((h - 2) / 2) - 2;
			var handleWidth = h - 2;
			if (handleWidth > 20) handleWidth = 20;
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_HandleContainer").css({ width: handleWidth, height: h - 2 });
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_increase").css({ width: handleWidth, height: UPh });
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_decrease").css({ top: (UPh + 1), width: handleWidth, height: DNh });
			//trace({top:(UPh+1), width:h, height:DNh});
		} else if (obj.bindType == "money") {

		} else if (obj.bindType == "selector") {
			h -= 2;
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_HandleContainer").css({ width: h, height: h });
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_Handle").css({ width: h, height: h });

			if (obj.config.finder) {
				axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_FinderContainer").css({ right: h, width: h, height: h });
				axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_Finder").css({ width: h, height: h });
			}
		} else if (obj.bindType == "slider") {

		} else if (obj.bindType == "twinSlider") {

		} else if (obj.bindType == "switch") {
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SwitchBox").css({ width: w, height: h });
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SwitchDisplay").css({ height: h, "line-height": h + "px" });
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SwitchHandle").css({ height: h });
			obj.bindAnchorTarget.css({ height: h });
		} else if (obj.bindType == "segment") {
			obj.bindAnchorTarget.css({ height: h + "px", "position": "relative", display: "inline-block", left: "auto", top: "auto" });
			var borderTop = obj.bindAnchorTarget.find(".AXanchorSegmentHandle").css("border-top-width").number();
			var borderBot = obj.bindAnchorTarget.find(".AXanchorSegmentHandle").css("border-bottom-width").number();
			obj.bindAnchorTarget.find(".AXanchorSegmentHandle").css({ height: (obj.bindAnchorTarget.innerHeight() - borderTop - borderBot) + "px", "line-height": (obj.bindAnchorTarget.innerHeight() - borderTop - borderBot) + "px" });
		} else if (obj.bindType == "date") {
			var handleWidth = h - 2;
			if (handleWidth > 20) handleWidth = 20;
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_dateHandle").css({ width: h, height: h });
		} else if (obj.bindType == "twinDate") {

		} else if (obj.bindType == "twinDateTime") {

		} else if (obj.bindType == "checked") {

		}
	},
	bindSetValue: function (objID, value) {
		var cfg = this.config;
		var objSeq = null;
		axf.each(this.objects, function (index, O) {
			if (O.id == objID) {
				objSeq = index;
				return false;
			}
		});
		if (objSeq == null) {
			//trace("바인드 된 오브젝트를 찾을 수 없습니다.");
			return;
		} else {
			var obj = this.objects[objSeq];

			if (obj.bindType == "search") {
				//	this.bindSearch(objID, objSeq);
			} else if (obj.bindType == "number") {
				//	this.bindNumber(objID, objSeq);
			} else if (obj.bindType == "money") {
				//	this.bindMoney(objID, objSeq);
			} else if (obj.bindType == "selector") {
				this.bindSelectorSetValue(objID, objSeq, value);
			} else if (obj.bindType == "slider") {
				this.bindSliderSetValue(objID, objSeq, value);
			} else if (obj.bindType == "twinSlider") {
				this.bindTwinSliderSetValue(objID, objSeq, value);
			} else if (obj.bindType == "switch") {
				this.bindSwitchSetValue(objID, objSeq, value);
			} else if (obj.bindType == "segment") {
				this.bindSegmentSetValue(objID, objSeq, value);
			} else if (obj.bindType == "date") {
				//	this.bindDate(objID, objSeq);
			} else if (obj.bindType == "twinDate") {
				//	this.bindTwinDate(objID, objSeq);
			}
		}
	},

	// onlyHolder ~~~~~~~~~~~~~~~
	bindPlaceHolder: function (objID, objSeq) {
		var cfg = this.config;
		var obj = this.objects[objSeq];

		// 브라우저 체크
		if (AXUtil.browser.name != "ie") return;
		if (AXUtil.browser.name == "ie" && AXUtil.browser.version > 9) return;

		var w = axdom("#" + cfg.targetID + "_AX_" + objID).width();
		var h = axdom("#" + cfg.targetID + "_AX_" + objID).data("height");

		var placeholder = axdom("#" + objID).attr("placeholder");
		if (placeholder == "undefined") placeholder = "";

		var po = ["<a " + obj.config.href + " id=\"" + cfg.targetID + "_AX_" + objID + "_AX_PlaceHolder\" class=\"" + cfg.anchorPlaceHolderClassName + "\" style=\"left:0px;top:0px;width:" + w + "px;height:" + h + "px;line-height:" + h + "px;\">" + placeholder + "</a>"];
		//append to anchor
		axdom("#" + cfg.targetID + "_AX_" + objID).append(po.join(''));
		//bind handle
		var bindPlaceHolderKeyup = this.bindPlaceHolderSyncAnchor.bind(this);
		axdom("#" + objID).unbind("keyup.AXInput").bind("keyup.AXInput", function () {
			bindPlaceHolderKeyup(objID, objSeq);
		});
		bindPlaceHolderKeyup(objID, objSeq);
		axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_PlaceHolder").unbind("click.AXInput").bind("click.AXInput", function () {
			//axdom("#"+objID).val("");
			axdom("#" + objID).focus();
			bindPlaceHolderKeyup(objID, objSeq);
		});
		//------------------------------------
	},
	bindPlaceHolderSyncAnchor: function (objID, objSeq) {
		var cfg = this.config;
		if (axdom("#" + objID).val().trim() == "") {
			//if(AXgetId(cfg.targetID+"_AX_"+objID).style.display == "none") 
			axdom("#" + cfg.targetID + "_AX_" + objID).show();
		} else {
			//if(AXgetId(cfg.targetID+"_AX_"+objID).style.display != "none") 
			axdom("#" + cfg.targetID + "_AX_" + objID).hide();
		}
	},
	// onlyHolder ~~~~~~~~~~~~~~

	// search
	bindSearch: function (objID, objSeq) {
		var cfg = this.config;
		var obj = this.objects[objSeq];

		var w = axdom("#" + cfg.targetID + "_AX_" + objID).width();
		var h = axdom("#" + cfg.targetID + "_AX_" + objID).data("height");
		var placeholder = axdom("#" + objID).attr("placeholder");
		if (placeholder == undefined) placeholder = "";
		var po = [];

		if (AXUtil.browser.name == "ie" && AXUtil.browser.version < 10 && placeholder != "") {
			po.push("<a " + obj.config.href + " id=\"" + cfg.targetID + "_AX_" + objID + "_AX_PlaceHolder\" class=\"" + cfg.anchorPlaceHolderClassName + "\" ");
			po.push(" style=\"left:0px;top:0px;width:" + w + "px;height:" + h + "px;line-height:" + h + "px;\">" + placeholder + "</a>");
		}
		po.push("<a " + obj.config.href + " id=\"" + cfg.targetID + "_AX_" + objID + "_AX_Search\" class=\"" + cfg.anchorSearchClassName + "\" ");
		po.push(" style=\"right:0px;top:0px;width:" + h + "px;height:" + h + "px;\">Search</a>");
		//append to anchor
		axdom("#" + cfg.targetID + "_AX_" + objID).append(po.join(''));
		//bind handle
		var bindSearchKeyup = this.bindSearchSyncAnchor.bind(this);
		axdom("#" + objID).unbind("keydown.AXInput").bind("keydown.AXInput", function () {
			bindSearchKeyup(objID, objSeq);
		});
		bindSearchKeyup(objID, objSeq);
		axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_Search").unbind("click.AXInput").bind("click.AXInput", function () {
			axdom("#" + objID).val("");
			axdom("#" + objID).focus();
			bindSearchKeyup(objID, objSeq);
		});
		//------------------------------------
	},
	bindSearchSyncAnchor: function (objID, objSeq) {
		var cfg = this.config;
		axdom("#" + cfg.targetID + "_AX_" + objID).show();

		if (axdom("#" + objID).val() == "") {
			//if(AXgetId(cfg.targetID+"_AX_"+objID).style.display != "none") axdom("#"+cfg.targetID+"_AX_"+objID).hide();
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_Search").hide();
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_PlaceHolder").show();
		} else {
			//if(AXgetId(cfg.targetID+"_AX_"+objID).style.display == "none") axdom("#"+cfg.targetID+"_AX_"+objID).fadeIn();
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_Search").show();
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_PlaceHolder").hide();
		}
	},

	// number
	bindNumber: function (objID, objSeq) {
		var cfg = this.config;
		var obj = this.objects[objSeq];

		if(!obj.bindAnchorTarget) obj.bindAnchorTarget = axdom("#" + cfg.targetID + "_AX_" + objID);
		if(!obj.bindTarget) obj.bindTarget = axdom("#" + objID);

		var h = obj.bindAnchorTarget.data("height");
		//trace(objID+"//"+h);
		var po = [];
		var UPh = parseInt((h - 2) / 2) - 1;
		var DNh = parseInt((h - 2) / 2) - 2;
		//trace(UPh+"//"+DNh);
		var handleWidth = h - 2;
		if (handleWidth > 20) handleWidth = 20;

		po.push("<div id=\"" + cfg.targetID + "_AX_" + objID + "_AX_HandleContainer\" class=\"" + cfg.anchorNumberContainerClassName + "\" style=\"right:0px;top:0px;width:" + handleWidth + "px;height:" + (h - 2) + "px;\" onselectstart=\"return false;\">");
		po.push("	<a id=\"" + cfg.targetID + "_AX_" + objID + "_AX_increase\" class=\"" + cfg.anchorIncreaseClassName + "\" style=\"right:0px;top:0px;width:" + handleWidth + "px;height:" + UPh + "px;\">increase</a>");
		po.push("	<a id=\"" + cfg.targetID + "_AX_" + objID + "_AX_decrease\" class=\"" + cfg.anchorDecreaseClassName + "\" style=\"right:0px;top:" + (UPh + 1) + "px;width:" + handleWidth + "px;height:" + DNh + "px;\">decrease</a>");
		po.push("</div>");
		obj.bindAnchorTarget.append(po.join(''));
		obj.bindAnchorTarget.show();
		//alert("show");

		var bindNumberAdd = this.bindNumberAdd.bind(this);
		var bindNumberCheck = this.bindNumberCheck.bind(this);
		axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_increase").unbind("mousedown.AXInput").bind("mousedown.AXInput", function (event) {
			bindNumberAdd(objID, 1, objSeq);
			bindNumberCheck(objID, objSeq, event);
		});
		axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_decrease").unbind("mousedown.AXInput").bind("mousedown.AXInput", function (event) {
			bindNumberAdd(objID, -1, objSeq);
			bindNumberCheck(objID, objSeq, event);
		});
		/*
		obj.bindTarget.unbind("blur.AXInput").bind("blur.AXInput", function (event) {
			bindNumberCheck(objID, objSeq, event);
		});
		*/
		obj.bindTarget.unbind("keydown.AXInput").bind("keydown.AXInput", function (event) {
			if (event.keyCode == AXUtil.Event.KEY_UP) bindNumberAdd(objID, 1, objSeq);
			else if (event.keyCode == AXUtil.Event.KEY_DOWN) bindNumberAdd(objID, -1, objSeq);
			//else bindNumberCheck(objID, objSeq, event);
		});
		obj.bindTarget.unbind("change.AXInput").bind("change.AXInput", function (event) {
			bindNumberCheck(objID, objSeq, event);
		});
	},
	bindNumberAdd: function (objID, adder, objSeq) {
		var obj = this.objects[objSeq];
		if(obj.bindAnchorTarget.attr("disable") == "disable" || obj.bindTarget.attr("disable") == "disable"){
			return false;
		}
		var maxval = obj.config.max;
		var minval = obj.config.min;
		var nval = obj.bindTarget.val().number();
		if (adder > 0) {
			//max 를 초과 하는지 확인
			if ((nval + adder) < minval) nval = minval;
			if (maxval != undefined && maxval != null) {
				if ((nval + adder) > maxval) return;
			}
		} else {
			//min 를 초과 하는지 확인
			if (minval != undefined && minval != null) {
				if ((nval + adder) < minval) return;
			}
		}
		obj.bindTarget.val(nval + adder);
		obj.bindTarget.change();
	},
	bindNumberCheck: function (objID, objSeq, event) {
		var obj = this.objects[objSeq];
		if(obj.bindAnchorTarget.attr("disable") == "disable" || obj.bindTarget.attr("disable") == "disable"){
			return false;
		}
		if(this.numbercheck_obs) clearTimeout(this.numbercheck_obs);
		this.numbercheck_obs = setTimeout(function(){
			var maxval = obj.config.max;
			var minval = obj.config.min;
			var nval;
			if (obj.bindTarget.val() == "") {
				if (minval != undefined && minval != null) {
					nval = minval;
				} else {
					nval = obj.bindTarget.val().number();
				}
			} else {
				nval = obj.bindTarget.val().number();
			}

			if (maxval != undefined && maxval != null) {
				if ((nval) > maxval) {
					obj.bindTarget.val("");
					try {
						this.msgAlert("설정된 최대값을 넘어서는 입력입니다.");
					} catch (e) {
					}
				} else {
					if (minval != undefined && minval != null) {
						if ((nval) < minval) {
							obj.bindTarget.val("");
							try {
								this.msgAlert("설정된 최소값보다 작은 입력입니다.");
							} catch (e) {
							}
						} else {
							obj.bindTarget.val(nval);
						}
					}
				}
			} else {
				if (minval != undefined && minval != null) {
					if ((nval) < minval) {
						obj.bindTarget.val("");
						try {
							this.msgAlert("설정된 최소값보다 작은 입력입니다.");
						} catch (e) {
						}
					}
				} else {
					obj.bindTarget.val(nval);
				}
			}
			
			if (event && event.type == "mousedown") {
				obj.bindTarget.setCaret();
			}

			if (obj.config.onChange) {
				obj.config.onChange.call({objID: objID, objSeq: objSeq, value: axdom("#" + objID).val()});
			}
			if (obj.config.onchange) {
				obj.config.onchange.call({objID: objID, objSeq: objSeq, value: axdom("#" + objID).val()});
			}
		}, 1);
		
	},

	// money
	bindMoney: function (objID, objSeq) {
		var obj = this.objects[objSeq];
		obj.bindTarget.css({ "text-align": "right" });
		var bindMoneyCheck = this.bindMoneyCheck.bind(this);
		var val = obj.bindTarget.val().trim();
		if (val != "") val = obj.bindTarget.val().number().money();
		obj.bindTarget.val(val);

		obj.bindTarget.unbind("keydown.AXInput").bind("keydown.AXInput", function (event) {
			if ( (event.ctrlKey || event.metaKey) ){
				obj.bindTarget.data("ctrlKey", "T");
			}else{
				obj.bindTarget.data("ctrlKey", "F");
			}
		});
		obj.bindTarget.unbind("keyup.AXInput").bind("keyup.AXInput", function (event) {
			var elem = obj.bindTarget.get(0);

			if(elem.type != "number") {
				event = window.event || event;

				// ignore tab & shift key 스킵 & ctrl
				if (
					(!event.keyCode || event.keyCode == 9 || event.keyCode == 16 || event.keyCode == 17) ||
					((obj.bindTarget.data("ctrlKey") == "T") && (event.keyCode == 65 || event.keyCode == 91))
				){
					jQuery.removeData(obj.bindTarget.get(0), "focusPosition");
				}
				else{
					var elemFocusPosition;
					if ('selectionStart' in elem) {
						// Standard-compliant browsers
						elemFocusPosition = elem.selectionStart;
					} else if (document.selection) {
						// IE
						//elem.focus();
						var sel = document.selection.createRange();
						var selLen = document.selection.createRange().text.length;
						sel.moveStart('character', -elem.value.length);
						elemFocusPosition = sel.text.length - selLen;
					}
					//trace(elemFocusPosition);
					// 계산된 포커스 위치 앞에 쉼표 갯수를 구합니다.

					obj.bindTarget.data("focusPosition", elemFocusPosition);
					obj.bindTarget.data("prevLen", elem.value.length);

					if (event.keyCode != AXUtil.Event.KEY_DELETE && event.keyCode != AXUtil.Event.KEY_BACKSPACE && event.keyCode != AXUtil.Event.KEY_LEFT && event.keyCode != AXUtil.Event.KEY_RIGHT) {
						bindMoneyCheck(objID, objSeq, "keyup");
					} else if (event.keyCode == AXUtil.Event.KEY_DELETE || event.keyCode == AXUtil.Event.KEY_BACKSPACE) {
						bindMoneyCheck(objID, objSeq, "keyup");
					}
				}
			}
		});

		/* blur 이벤트 처리 이상 작동으로 제거 - 15-01-16
		obj.bindTarget.unbind("change.AXInput").bind("change.AXInput", function (event) {
			if(obj.bindAnchorTarget.attr("disable") == "disable" || obj.bindTarget.attr("disable") == "disable"){
				return false;
			}
			if(event.target.type != "number") {
				bindMoneyCheck(objID, objSeq, "change");
			}
		});
		*/
	},
	bindMoneyCheck: function (objID, objSeq, eventType) {
		var obj = this.objects[objSeq];
		var maxval = obj.config.max;
		var minval = obj.config.min;
		var nval;
		if(obj.bindAnchorTarget.attr("disable") == "disable" || obj.bindTarget.attr("disable") == "disable"){
			return false;
		}
		if (!obj.config.onChange) obj.config.onChange = obj.config.onchange;

		if (obj.bindTarget.val() == "") {
			if (minval != undefined && minval != null) {
				nval = minval;
			} else {
				nval = "";
			}
		} else {
			if(obj.bindTarget.val() != "-") {
				nval = obj.bindTarget.val().number();
			}else{
				nval = "";
			}
		}
		if (maxval != undefined && maxval != null) {
			if ((nval) > maxval) {
				obj.bindTarget.val(maxval.money());
				try {
					if(eventType == "change") this.msgAlert("설정된 최대값{" + maxval.number().money() + "} 을 넘어서는 입력입니다.");
				} catch (e) { }
			} else {
				if (minval != undefined && minval != null) {
					if ((nval) < minval) {
						obj.bindTarget.val(minval.money());
						try {
							if(eventType == "change") this.msgAlert("설정된 최소값{" + minval.number().money() + "}보다 작은 입력입니다.");
						} catch (e) { }
					} else {
						obj.bindTarget.val(nval.money());
					}
				}else{
					obj.bindTarget.val(nval.money());
				}
			}
		}
		else
		{
			if (minval != undefined && minval != null) {
				if ((nval) < minval) {
					obj.bindTarget.val(minval.money());
					try {
						if(eventType == "change") this.msgAlert("설정된 최소값{" + minval.number().money() + "}보다 작은 입력입니다.");
					} catch (e) { }
				} else {
					if(nval != "" && nval != "-") obj.bindTarget.val(nval.money());
				}
			} else {
				if(nval != "" && nval != "-") obj.bindTarget.val(nval.money());
			}
		}

		if( !axf.isEmpty( obj.bindTarget.data("focusPosition") ) ){
			obj.bindTarget.setCaret( obj.bindTarget.data("focusPosition").number() + ( obj.bindTarget.val().length - obj.bindTarget.data("prevLen") ) );
		}

		if (obj.config.onChange) {
			obj.config.onChange.call({ objID: objID, objSeq: objSeq, value: obj.bindTarget.val().number() });
		}

		if(eventType == "change"){
			if(obj.bindTarget.val() == "-") obj.bindTarget.val('');
		}
	},

	// selector
	bindSelector: function (objID, objSeq) {
		var cfg = this.config;
		var obj = this.objects[objSeq];

		if (!obj.config.onChange) obj.config.onChange = obj.config.onchange;

		if(!obj.bindAnchorTarget) obj.bindAnchorTarget = axdom("#" + cfg.targetID + "_AX_" + objID);
		if(!obj.bindTarget) obj.bindTarget = axdom("#" + objID);

		obj.bindTarget.data("val", obj.bindTarget.val());


		var reserveKeys = jQuery.extend({}, cfg.reserveKeys);
		if(typeof obj.config.reserveKeys == "undefined") obj.config.reserveKeys = {};
		obj.config.reserveKeys = jQuery.extend(reserveKeys, obj.config.reserveKeys, true);

		var h = obj.bindAnchorTarget.data("height") - 2;
		var po = [];
		po.push("<div id=\"" + cfg.targetID + "_AX_" + objID + "_AX_HandleContainer\" class=\"bindSelectorNodes " + cfg.anchorSelectorHandleContainerClassName + "\" style=\"right:0px;top:0px;width:" + h + "px;height:" + h + "px;\">");
		po.push("	<a " + obj.config.href + " id=\"" + cfg.targetID + "_AX_" + objID + "_AX_Handle\" class=\"bindSelectorNodes " + cfg.anchorSelectorHandleClassName + "\" style=\"right:0px;top:0px;width:" + h + "px;height:" + h + "px;\">expand</a>");
		po.push("</div>");
		if (obj.config.finder) {
			po.push("<div id=\"" + cfg.targetID + "_AX_" + objID + "_AX_FinderContainer\" class=\"bindSelectorNodes " + cfg.anchorSelectorFinderContainerClassName + "\" style=\"right:" + h + "px;top:0px;width:" + h + "px;height:" + h + "px;\">");
			po.push("	<a " + obj.config.href + " id=\"" + cfg.targetID + "_AX_" + objID + "_AX_Finder\" class=\"bindSelectorNodes " + cfg.anchorSelectorFinderClassName + "\" style=\"right:0px;top:0px;width:" + h + "px;height:" + h + "px;\">finder</a>");
			po.push("</div>");
		}

		obj.bindAnchorTarget.append(po.join(''));
		obj.bindAnchorTarget.show();

		var bindSelectorExpand = this.bindSelectorExpand.bind(this);
		var bindSelectorClose = this.bindSelectorClose.bind(this);

		axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_Handle").unbind("click.AXInput").bind("click.AXInput", function (event) {
			if (!AXgetId(cfg.targetID + "_AX_" + objID + "_AX_expandBox")) {
				axdom("#" + objID).focus();
			} else {
				//bindSelectorExpand(objID, objSeq, true, event);
				bindSelectorClose(objID, objSeq, event);
			}
		});
		obj.bindTarget.unbind("focus.AXInput").bind("focus.AXInput", function (event) {
			if(obj.bindAnchorTarget.attr("disable") == "disable" || obj.bindTarget.attr("disable") == "disable"){
				return false;
			}
			try {
				this.select();
			} catch (e) {
			}
			if (!AXgetId(cfg.targetID + "_AX_" + objID + "_AX_expandBox")) {
				bindSelectorExpand(objID, objSeq, false, event);
			}
		});
		obj.bindTarget.unbind("keydown.AXInputCheck").bind("keydown.AXInputCheck", function(event){
			if(obj.bindAnchorTarget.attr("disable") == "disable" || obj.bindTarget.attr("disable") == "disable"){
				return false;
			}
			if (!AXgetId(cfg.targetID + "_AX_" + objID + "_AX_expandBox")) {
				bindSelectorExpand(objID, objSeq, false, event);
			}
		});

		if (obj.config.finder) {
			if (obj.config.finder.onclick) {
				axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_Finder").unbind("click.AXInput").bind("click.AXInput", function (event) {
					if(obj.bindAnchorTarget.attr("disable") == "disable" || obj.bindTarget.attr("disable") == "disable"){
						return false;
					}
					obj.config.finder.onclick.call({
						targetID: objID,
						value: axdom("#" + objID).val()
					}, objID);
					bindSelectorClose(objID, objSeq, event);
				});
			}
		}

		/*
		 var bindSelectorInputChange = this.bindSelectorInputChange.bind(this);
		 obj.inputChange = function(event){
		 bindSelectorInputChange(objID, objSeq, event);
		 }
		 axdom("#"+objID).bind("change.AXInput", obj.inputChange);
		 */
	},
	bindSelectorExpand: function (objID, objSeq, isToggle, event) {
		var cfg = this.config;
		var obj = this.objects[objSeq];
		var reserveKeys = obj.config.reserveKeys;
		if(obj.bindAnchorTarget.attr("disable") == "disable" || obj.bindTarget.attr("disable") == "disable"){
			return false;
		}
		obj.bindTarget.data("val", obj.bindTarget.val().enc());

		//alert(obj.bindTarget.data("val").end());

		if (this.opendExpandBox) {
			this.bindSelectorClose(this.opendExpandBox.objID, this.opendExpandBox.objSeq, event); // 셀럭터 외의 영역이 므로 닫기
		}

		var jqueryTargetObjID = axdom("#" + cfg.targetID + "_AX_" + objID);
		//trace({objID:objID, objSeq:objSeq});

		if (axdom("#" + cfg.targetID + "_AX_" + objID).data("blurEvent")) {
			//blur event 발생 상태 메소드 작동 중지
			return;
		}

		//Selector Option box Expand
		if (isToggle) { // 활성화 여부가 토글 이면
			if (AXgetId(cfg.targetID + "_AX_" + objID + "_AX_expandBox")) {
				axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox").remove(); // 개체 삭제 처리
				axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_Handle").removeClass("on");
				//비활성 처리후 메소드 종료
				return;
			}
		}
		axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox").remove(); // 활성화 전에 개체 삭제 처리
		axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_Handle").removeClass("on");
		//Expand Box 생성 구문 작성
		var anchorWidth = jqueryTargetObjID.width() - 2; // anchor width
		var anchorHeight = jqueryTargetObjID.data("height") - 1;
		var styles = [];
		styles.push("top:" + anchorHeight + "px");
		styles.push("width:" + (obj.config.anchorWidth || anchorWidth) + "px");
		styles.push("z-index:5100");

		var po = [];
		po.push("<div id=\"" + cfg.targetID + "_AX_" + objID + "_AX_expandBox\" class=\"bindSelectorNodes " + cfg.anchorSelectorExpandBoxClassName + "\" style=\"" + styles.join(";") + "\">");
		po.push("<div id=\"" + cfg.targetID + "_AX_" + objID + "_AX_expandScroll\" class=\"bindSelectorNodes " + cfg.anchorSelectorExpandScrollClassName + "\">");
		po.push("	<div class=\"AXLoadingSmall bindSelectorNodes\"></div>");
		po.push("</div>");
		po.push("</div>");
		axdom(document.body).append(po.join(''));
		axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_Handle").addClass("on");

		var expandBox = axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox");
		if (obj.config.positionFixed) {
			expandBox.css({ "position": "fixed" });
		}
		var expBoxHeight = expandBox.outerHeight();
		var offset = (obj.config.positionFixed) ? jqueryTargetObjID.position() : jqueryTargetObjID.offset();
		if (obj.config.position) {
			offset = jqueryTargetObjID.offset();
			if (obj.config.position.top != undefined) {
				offset.top = obj.config.position.top;
			}
		}
		var css = {};
		css.top = offset.top + anchorHeight;
		if (obj.config.direction == "bottom") {
			css.top -= expandBox.outerHeight();
		}

		css.left = offset.left;
		expandBox.css(css);

		this.opendExpandBox = { objID: objID, objSeq: objSeq };

		//_AX_expandBox set options
		//trace(obj.config.ajaxUrl);
		if (obj.config.onsearch) {
			this.bindSelectorKeyupChargingUp(objID, objSeq, event);
		} else if (obj.config.ajaxUrl) {
			// AJAX호출
			this.bindSelectorKeyupChargingUp(objID, objSeq, event);
		} else {
			if (!obj.config.options) {
				trace("options 항목이 없어 bind selector 를 완성 할 수 없습니다.");
				return;
			}
			this.bindSelectorSetOptions(objID, objSeq);
			this.bindSelectorKeyupChargingUp(objID, objSeq, event);
		}

		var bindSelectorOptionsClick = this.bindSelectorOptionsClick.bind(this);
		obj.documentclickEvent = function (event) {
			bindSelectorOptionsClick(objID, objSeq, event);
		};
		axdom(document).unbind("click.AXInput").bind("click.AXInput", obj.documentclickEvent);

	},
	bindSelectorBlur: function (objID) {
		var cfg = this.config;
		var objSeq = null;
		axf.each(this.objects, function (idx, O) {
			//if (this.id == objID && this.isDel == true) objSeq = idx;
			if (this.id == objID) {
				objSeq = idx;
			}
		});
		if (objSeq != null) this.bindSelectorClose(objID, objSeq);
	},
	bindSelectorClose: function (objID, objSeq, event, originChangeCall) {
		var cfg = this.config;
		var obj = this.objects[objSeq];
		var reserveKeys = obj.config.reserveKeys;
		if(!obj.bindTarget) obj.bindTarget = axdom("#" + objID);

		if(obj.inProgress) AXReqAbort(); // AJAX 호출 중지 하기

		if(obj.bindAnchorTarget.attr("disable") == "disable" || obj.bindTarget.attr("disable") == "disable"){
			return false;
		}

		if (AXgetId(cfg.targetID + "_AX_" + objID + "_AX_expandBox")) {
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox").remove(); // 개체 삭제 처리
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_Handle").removeClass("on");

			//비활성 처리후 메소드 종료

			axdom(document).unbind("click.AXInput");
			obj.bindTarget.unbind("keydown.AXInput");
			obj.bindTarget.unbind("change.AXInput");

			if(obj.bindTarget.data("val") == obj.bindTarget.val().enc() && !obj.config.isSelectorClick) {
				return obj.bindTarget.val();
			}

			if (obj.config.isChangedSelect) {

				var myVal = "";
				if (obj.config.selectedObject) {
					myVal = obj.config.selectedObject[reserveKeys.optionText];
				}

				if (obj.config.appendable) {
					//trace(myVal);
					if (myVal != "") axdom("#" + objID).val(myVal);
				} else {
					axdom("#" + objID).val(myVal);
				}

				if (obj.config.onChange) {
					var sendObj = {
						targetID: objID,
						options: obj.config.options,
						selectedIndex: obj.config.selectedIndex,
						selectedOption: obj.config.selectedObject
					}
					if (obj.config.onChange) obj.config.onChange.call(sendObj);
					else if (obj.config.onchange) obj.config.onchange.call(sendObj);
				}
				obj.config.isChangedSelect = false;
				if(originChangeCall) obj.bindTarget.change();
			}
			//trace(obj.config.selectedObject);
			if (obj.config.selectedObject) this.bindSelectorInputChange(objID, objSeq);
			else {
				if (!obj.config.appendable) {
					if (!obj.config.selectedObject && !obj.inProgress) axdom("#" + objID).val("");
				}
			}
			//if(event) event.stopPropagation(); // disableevent
			//return;
		}
	},
	bindSelectorSetOptions: function (objID, objSeq) {
		var obj = this.objects[objSeq];
		var cfg = this.config;
		var reserveKeys = obj.config.reserveKeys;
		var maxHeight = obj.config.maxHeight || 130;
		var optionPrintLength = obj.config.optionPrintLength || 100;
		if (!obj.config.options) return;

		var expandBox = axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox");
		var jqueryTargetObjID = axdom("#" + cfg.targetID + "_AX_" + objID);
		var po = [];
		axf.each(obj.config.options, function (index, O) {
			if (!isNaN(optionPrintLength)) {
				if (index > optionPrintLength - 1) return false;
			}

            // options의 optionText, optionDesc의 참조값을 디코딩해서 디코딩은 한 번만 사용하도록 변경
            O[reserveKeys.optionText] = (O[reserveKeys.optionText] ? O[reserveKeys.optionText].dec() : "");
            O.desc = (O.desc ? O.desc.dec() : "");
            O.optionDesc = (O.optionDesc ? O.optionDesc.dec() : "");

			var descStr = O.desc || O.optionDesc;
			if (descStr != "") descStr = "<span>" + descStr + "</span>";
			po.push("<a " + obj.config.href + " id=\"" + cfg.targetID + "_AX_" + objID + "_AX_" + index + "_AX_option\" class=\"bindSelectorNodes\">" + O[reserveKeys.optionText] + descStr + "</a>");
		});
		if (po.length == 0) {
			var selectorOptionEmpty = "";
			if (AXConfig.AXInput) selectorOptionEmpty = (AXConfig.AXInput.selectorOptionEmpty || "empty options");
			po.push("<div class=\"empty\">" + selectorOptionEmpty + "</div>");
		}
		axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_expandScroll").html(po.join(''));
		obj.config.isSelectorClick = false;

		var expandScrollHeight = axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_expandScroll").outerHeight();
		if (expandScrollHeight > maxHeight) expandScrollHeight = maxHeight;
		expandBox.css({ height: expandScrollHeight + "px" });

		var bindSelectorOptionsClick = this.bindSelectorOptionsClick.bind(this);
		obj.documentclickEvent = function (event) {
			bindSelectorOptionsClick(objID, objSeq, event);
		};
		var bindSelectorKeyup = this.bindSelectorKeyup.bind(this);
		obj.inputKeyup = function (event) {
			bindSelectorKeyup(objID, objSeq, event);
		};

		axdom(document).unbind("click.AXInput").bind("click.AXInput", obj.documentclickEvent);
		axdom("#" + objID).unbind("keydown.AXInput").bind("keydown.AXInput", obj.inputKeyup);

		if (obj.myUIScroll) obj.myUIScroll.unbind();
		obj.myUIScroll = new AXScroll();
		obj.myUIScroll.setConfig({
			CT_className: "AXScrollSmall",
			targetID: cfg.targetID + "_AX_" + objID + "_AX_expandBox",
			scrollID: cfg.targetID + "_AX_" + objID + "_AX_expandScroll",
			touchDirection: false
		});
		obj.myUIScroll.scrollTop(0);

		if (obj.config.selectedIndex != undefined) {
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_" + obj.config.selectedIndex + "_AX_option").addClass("on");
			obj.myUIScroll.focusElement(cfg.targetID + "_AX_" + objID + "_AX_" + obj.config.selectedIndex + "_AX_option"); //focus
			obj.config.focusedIndex = obj.config.selectedIndex;
		}

		if (obj.config.direction == "bottom") {
			var offset = (obj.config.positionFixed) ? jqueryTargetObjID.position() : jqueryTargetObjID.offset();
			if (obj.config.position) {
				offset = jqueryTargetObjID.offset();
				if (obj.config.position.top != undefined) {
					offset.top = obj.config.position.top;
				}
			}
			expandBox.css({top:offset.top - expandBox.outerHeight() });
		}
	},
	bindSelectorOptionsClick: function (objID, objSeq, event) {
		var obj = this.objects[objSeq];
		var cfg = this.config;
		var reserveKeys = obj.config.reserveKeys;
		var eid = event.target.id.split(/_AX_/g);
		var eventTarget = event.target;

		var myTarget = this.getEventTarget({
			evt: eventTarget,
			until: function (evt, evtIDs) {
				return (evt.parentNode.tagName == "body") ? true : false;
			},
			find: function (evt, evtIDs) {
				if (evt.id == "") return false;
				if (evt.id == objID || axdom(evt).hasClass("bindSelectorNodes")) {
					return true;
				} else {
					return false;
				}
			}
		});
		var isSelectorClick = (myTarget) ? true : false;
		if (!isSelectorClick) {
			this.bindSelectorClose(objID, objSeq, event); // 셀럭터 외의 영역이 므로 닫기
		} else {
			eid = myTarget.id.split(/_AX_/g);

			if (eid.last() == "option") {
				var selectedIndex = eid[eid.length - 2];
				obj.config.selectedIndex = selectedIndex;
				obj.config.focusedIndex = selectedIndex;
				obj.config.selectedObject = obj.config.options[selectedIndex];
				obj.config.isChangedSelect = true;
				obj.config.isSelectorClick = true;
				this.bindSelectorClose(objID, objSeq, event, "bindTarget_onchange"); // 값 전달 후 닫기
			}
		}
	},
	bindSelectorKeyup: function (objID, objSeq, event) {
		var obj = this.objects[objSeq], _this = this;
		var cfg = this.config;
		var reserveKeys = obj.config.reserveKeys;
		if (obj.inProgress) {
			obj.inProgressReACT = true;
			return;
		}

		if (event.keyCode == AXUtil.Event.KEY_TAB) {
			this.bindSelectorClose(objID, objSeq, event); // 닫기
			return;
		}

		if (event.keyCode == AXUtil.Event.KEY_UP) {
			if (!obj.config.options) return;
			if (obj.config.options.length == 0) return;
			var focusIndex = obj.config.options.length - 1;
			if (obj.config.focusedIndex == undefined || obj.config.focusedIndex == 0) {
				//trace(obj.config.selectedIndex+"//"+focusIndex);
			} else {
				focusIndex = (obj.config.focusedIndex) - 1;
				//trace(obj.config.selectedIndex+"//"+focusIndex);
			}
			this.bindSelectorSelect(objID, objSeq, focusIndex);
		} else if (event.keyCode == AXUtil.Event.KEY_DOWN) {
			if (!obj.config.options) return;
			if (obj.config.options.length == 0) return;
			var focusIndex = 0;
			if (obj.config.focusedIndex == undefined || obj.config.focusedIndex == obj.config.options.length - 1) {
				//trace(obj.config.selectedIndex+"//"+focusIndex);
			} else {
				focusIndex = (obj.config.focusedIndex).number() + 1;
				//trace(obj.config.selectedIndex+"//"+focusIndex);
			}
			this.bindSelectorSelect(objID, objSeq, focusIndex);
		} else if (event.keyCode == AXUtil.Event.KEY_RETURN) {

			if (obj.config.focusedIndex == null) {
				/*axdom("#" + objID).blur();*/
				_this.bindSelectorClose(objID, objSeq, event); // 닫기
			} else {
				//trace(obj.config.focusedIndex);
				obj.config.selectedObject = obj.config.options[obj.config.focusedIndex];
				obj.config.selectedIndex = obj.config.focusedIndex;
				obj.config.isChangedSelect = true;
				axdom("#" + objID).val(obj.config.selectedObject[reserveKeys.optionText]);
				/*axdom("#" + objID).blur();*/
				_this.bindSelectorClose(objID, objSeq, event, "bindTarget_onchange"); // 닫기
			}

		} else {
			//1. 반복입력 제어 하기
			var bindSelectorKeyupChargingUp = this.bindSelectorKeyupChargingUp.bind(this);
			if (obj.Observer) clearTimeout(obj.Observer); //명령 제거
			obj.Observer = setTimeout(function () {
				bindSelectorKeyupChargingUp(objID, objSeq, event);
			}, 500);
		}
	},
	bindSelectorKeyupChargingUp: function (objID, objSeq, event) {
		var obj = this.objects[objSeq];
		var cfg = this.config;
		var reserveKeys = obj.config.reserveKeys;
		var objVal = axdom("#" + objID).val();
		var bindSelectorSearch = this.bindSelectorSearch.bind(this);

		if (obj.config.onsearch) {

			var res = obj.config.onsearch.call(
				{
					id: objID,
					value: objVal
				},
				objID,
				objVal,
				(function(res){
					obj.config.options = res.options;
					obj.config.focusedIndex = null;
					this.bindSelectorSetOptions(objID, objSeq);
				}).bind(this)
			);

			/*
			callBack 함수를 이용하는 경우와 return 하는 두 가지 경우가 존재 하겠다. 아래는 obj.config.onsearch 에서 return 한 경우이고 위의 함수는 callBack 함수인 경우이다.
			*/
			if (res) {
				res.options = res.options || [];
				obj.config.options = res.options;
				obj.config.focusedIndex = null;
				this.bindSelectorSetOptions(objID, objSeq);
			}

		} else if (obj.config.ajaxUrl) {
			// AJAX호출
			// 2. AJAX request
			// 3. AJAX 결과로 bindSelectorSetOptions 처리하기
			//this.bindSelectorSetOptions(objID, objSeq);
			// 4. 입력어로 bindSelectorSearch 실행하기
			obj.inProgress = true; //진행중 상태 변경
			var bindSelectorSetOptions = this.bindSelectorSetOptions.bind(this);
			var bindSelectorKeyupChargingUp = this.bindSelectorKeyupChargingUp.bind(this);
			var url = obj.config.ajaxUrl;
			var pars = obj.config.ajaxPars || {};
			var selectorName = obj.config.selectorName || axdom("#" + objID).attr("name");
			if (pars == "") {
				pars = selectorName + "=" + (objVal||"").enc();
			} else if ((typeof pars).toLowerCase() == "string") {
				pars += "&" + selectorName + "=" + objVal.enc();
			} else if ((typeof pars).toLowerCase() == "object") {
				pars[selectorName] = objVal.enc();
			}

			var msgAlert = this.msgAlert.bind(this);
			new AXReq(url, {
				debug: false, pars: pars, onsucc: function (res) {
					if ((res.result && res.result == AXConfig.AXReq.okCode) || (res.result == undefined && !res.error)) {

						//obj.config.options = (res.options || []);
						obj.config.options = (res[reserveKeys.options] || []);
						obj.config.focusedIndex = null;

						bindSelectorSetOptions(objID, objSeq);
						bindSelectorSearch(objID, objSeq, objVal);

						if (obj.inProgressReACT) {
							bindSelectorKeyupChargingUp(objID, objSeq, event);
						}
					} else {
						msgAlert(res);
					}
					obj.inProgress = false;
					obj.inProgressReACT = false;
				}
			});
		} else {
			// 입력어로 bindSelectorSearch 실행하기
			//alert(objVal);
			bindSelectorSearch(objID, objSeq, objVal);
		}
	},
	bindSelectorInputChange: function (objID, objSeq, event) {
		var obj = this.objects[objSeq];
		var cfg = this.config;
		var reserveKeys = obj.config.reserveKeys;
		if (axdom("#" + objID).val() != obj.config.selectedObject[reserveKeys.optionText]) {
			if (!obj.config.appendable) axdom("#" + objID).val("");
			obj.config.selectedObject = null;
			obj.config.selectedIndex = null;
			obj.config.focusedIndex = null;
			if (obj.config.onChange) {
				obj.config.onChange(null);
			}
		}
	},
	bindSelectorSetValue: function (objID, objSeq, value) {
		var obj = this.objects[objSeq];
		var cfg = this.config;
		var reserveKeys = obj.config.reserveKeys;

		if (!obj.config.options) return;

		var selectedIndex = null;
		axf.each(obj.config.options, function (oidx, opt) {
			if (opt[reserveKeys.optionValue] == value) selectedIndex = oidx;
		});

		if (selectedIndex != null) {
			obj.config.focusedIndex = selectedIndex;
			obj.config.selectedObject = obj.config.options[selectedIndex];
			obj.config.isChangedSelect = true;
			axdom("#" + objID).val(obj.config.selectedObject[reserveKeys.optionText]);

			if (obj.config.onChange || obj.config.onchange) {
				var sendObj = {
					targetID: objID,
					options: obj.config.options,
					selectedIndex: obj.config.selectedIndex,
					selectedOption: obj.config.selectedObject
				};
				if (obj.config.onChange) obj.config.onChange.call(sendObj);
				else if (obj.config.onchange) obj.config.onchange.call(sendObj);
			}
		}
	},
	bindSelectorSearch: function (objID, objSeq, kword) { // 입력된 값으로 검색 하기
		var obj = this.objects[objSeq];
		var cfg = this.config;
		var reserveKeys = obj.config.reserveKeys;
		if (kword == "") {
			this.bindSelectorSelectClear(objID, objSeq);
			return;
		}
		kword = kword.replace(/\//g, "\\\/");
		var sw = AXUtil.consonantKR((kword || "").dec());
		var reAt = new RegExp("^" + sw + ".*", "i");

		var ix = null;
		for (var a = 0; a < obj.config.options.length; a++) {
			if (reAt.test((obj.config.options[a][reserveKeys.optionText] || ""))) {
				ix = a;
				break;
			}
		}
		if (ix != null) {
			this.bindSelectorSelect(objID, objSeq, ix, "dont change value");
		} else {
			this.bindSelectorSelectClear(objID, objSeq);
		}
	},
	bindSelectorSelect: function (objID, objSeq, index, changeValue) {
		var obj = this.objects[objSeq];
		var cfg = this.config;
		var reserveKeys = obj.config.reserveKeys;
		if (obj.config.focusedIndex != undefined) {
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_" + obj.config.focusedIndex + "_AX_option").removeClass("on");
		}
		axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_" + index + "_AX_option").addClass("on");
		obj.config.focusedIndex = index;
		//obj.config.selectedObject = obj.config.options[index];
		//obj.config.isChangedSelect = true;
		//if(!changeValue) axdom("#"+objID).val(obj.config.selectedObject.optionText.dec());
		obj.myUIScroll.focusElement(cfg.targetID + "_AX_" + objID + "_AX_" + index + "_AX_option"); //focus
	},
	bindSelectorSelectClear: function (objID, objSeq) {
		var obj = this.objects[objSeq];
		var cfg = this.config;
		var reserveKeys = obj.config.reserveKeys;
		if (obj.config.selectedIndex != undefined) {
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_" + obj.config.selectedIndex + "_AX_option").removeClass("on");
		}
		obj.config.selectedIndex = null;
		obj.config.focusedIndex = null;
		obj.config.selectedObject = null;
		obj.config.isChangedSelect = true;
	},



	// slider
	bindSlider: function (objID, objSeq) {
		var cfg = this.config;
		var obj = this.objects[objSeq];

		if(!obj.bindAnchorTarget) obj.bindAnchorTarget = axdom("#" + cfg.targetID + "_AX_" + objID);
		if(!obj.bindTarget) obj.bindTarget = axdom("#" + objID);

		axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderBox").remove();

		var w = obj.bindAnchorTarget.width();
		var h = obj.bindAnchorTarget.data("height");
		//trace(h);
		var objVal = obj.bindTarget.val().number().money();
		if (objVal.number() < obj.config.min.number()) objVal = obj.config.min;
		else if (objVal.number() > obj.config.max.number()) objVal = obj.config.max;

		if (!obj.config.unit) obj.config.unit = "";

		var po = [];
		po.push("<div id=\"" + cfg.targetID + "_AX_" + objID + "_AX_SliderBox\" class=\"" + cfg.anchorSliderBoxClassName + "\" style=\"left:0px;width:" + w + "px;height:" + h + "px;\">");
		po.push("	<div class=\"AXanchorSliderMinTitle\">" + obj.config.min.number().money() + obj.config.unit + "</div>");
		po.push("	<div id=\"" + cfg.targetID + "_AX_" + objID + "_AX_SliderBar\" class=\"AXanchorSliderBar\">");
		po.push("		<div id=\"" + cfg.targetID + "_AX_" + objID + "_AX_SliderInside\" class=\"AXanchorSliderBarInside\"><div id=\"" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleTitle\" class=\"AXanchorSliderHandleTitle\">" + objVal.number().money() + obj.config.unit + "</div></div>");
		po.push("		<a " + obj.config.href + " id=\"" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandle\" class=\"AXanchorSliderHandle\">handle</a>");
		po.push("	</div>");
		po.push("	<div class=\"AXanchorSliderMaxTitle\">" + obj.config.max.number().money() + obj.config.unit + "</div>");
		po.push("</div>");

		//append to anchor
		obj.bindAnchorTarget.append(po.join(''));
		//obj.bindAnchorTarget.css({ height: h + "px", "position": "relative", display: "inline-block", left: "auto", top: "auto" });
		obj.bindAnchorTarget.css({ height: h + "px", "position": "relative", display: "inline-block", left: "auto", top: "auto" });
		//, background:"#eee"


		var maxTitleWidth = axdom("#" + cfg.targetID + "_AX_" + objID).find(".AXanchorSliderMaxTitle").outerWidth().number() + 10;
		var minTitleWidth = axdom("#" + cfg.targetID + "_AX_" + objID).find(".AXanchorSliderMinTitle").outerWidth().number() + 10;
		if (maxTitleWidth < 30) maxTitleWidth = 30;
		if (minTitleWidth < 30) minTitleWidth = 30;
		axdom("#" + cfg.targetID + "_AX_" + objID).find(".AXanchorSliderMinTitle").css({ width: minTitleWidth + "px" });
		axdom("#" + cfg.targetID + "_AX_" + objID).find(".AXanchorSliderMaxTitle").css({ width: maxTitleWidth + "px" });
		var sliderBarWidth = w - minTitleWidth - maxTitleWidth;
		obj.bindAnchorTarget.find(".AXanchorSliderBar").css({ width: sliderBarWidth + "px", left: minTitleWidth + "px", top: h / 2 + 2 });
		//------------------------------------
		axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleTitle").css({ width: maxTitleWidth });
		obj.config._maxTitleWidth = maxTitleWidth;
		obj.config._handleWidth = axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandle").width();
		obj.config._trackWidth = sliderBarWidth;
		this.bindSliderSetValue(objID, objSeq);

		var onmousedown = this.bindSliderMouseDown.bind(this);
		axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandle").unbind("mousedown.AXInput").bind("mousedown.AXInput", function () {
			onmousedown(objID, objSeq);
		});
		axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandle").unbind("dragstart.AXInput").bind("dragstart.AXInput", function (event) {
			event.stopPropagation(); // disable  event
			return false;
		});

		//add touch event
		if (document.addEventListener) {
			var ontouchstart = this.sliderTouchStart.bind(this);
			obj.bindSliderTouchStart = function (event) { ontouchstart(objID, objSeq); }

			AXgetId(cfg.targetID + "_AX_" + objID + "_AX_SliderHandle").addEventListener("touchstart", obj.bindSliderTouchStart, false);
		}

		obj.bindAnchorTarget.show();
		obj.bindTarget.hide();

	},
	bindSliderMouseDown: function (objID, objSeq) {
		var cfg = this.config;
		var obj = this.objects[objSeq];
		if(obj.bindAnchorTarget.attr("disable") == "disable" || obj.bindTarget.attr("disable") == "disable"){
			return false;
		}
		if (!obj.config.isMoving) {
			var bindSliderMouseMove = this.bindSliderMouseMove.bind(this);
			obj.bindSliderMouseMove = function (event) {
				bindSliderMouseMove(objID, objSeq, event);
			};
			var bindSliderMouseUp = this.bindSliderMouseUp.bind(this);
			obj.bindSliderMouseUp = function (event) {
				bindSliderMouseUp(objID, objSeq, event);
			};
			axdom(document.body).unbind("mousemove.AXInput").bind("mousemove.AXInput", obj.bindSliderMouseMove);
			axdom(document.body).unbind("mouseup.AXInput").bind("mouseup.AXInput", obj.bindSliderMouseUp);
			obj.config.isMoving = true;
		}

	},
	bindSliderMouseMove: function (objID, objSeq, event) {
		var cfg = this.config;
		var obj = this.objects[objSeq];

		var eX = event.pageX;
		var cX = axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderBar").offset().left;

		var rX = eX - cX;

		var valueWidth = obj.config.max.number() - obj.config.min.number();
		var pixelWidth = obj.config._trackWidth;
		var objVal = (rX * valueWidth) / pixelWidth;
		var snap = obj.config.snap;
		if (typeof snap == "undefined") snap = 1;

		if (snap >= 1) {
			objVal = (objVal.number() + obj.config.min.number()).round();
			objVal = (parseInt(objVal / (snap), 10) * (snap));
		} else {
			objVal = (objVal.number() + obj.config.min.number()).round((snap.toString().length - 2));
			objVal = (parseFloat(objVal / (snap)) * (snap)).round((snap.toString().length - 2));
		}

		var rX = ((objVal - obj.config.min) * pixelWidth) / valueWidth;

		if (objVal < obj.config.min) {
			objVal = obj.config.min;
			rX = 0;
		} else if (objVal > obj.config.max) {
			objVal = obj.config.max;
			rX = pixelWidth;
		}
		if (rX > pixelWidth) rX = pixelWidth;

		var sX = rX - (obj.config._handleWidth / 2);
		var stX = rX - (obj.config._maxTitleWidth / 2);

		//trace({rX:rX, pixelWidth:pixelWidth, objVal:objVal, valueWidth:valueWidth});
		axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandle").css({ left: sX });
		axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderInside").css({ width: rX });
		axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleTitle").css({ left: stX });
		axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleTitle").text(objVal.number().money() + obj.config.unit);
		axdom("#" + objID).val(objVal);
	},
	bindSliderMouseUp: function (objID, objSeq, event) {
		var cfg = this.config;
		var obj = this.objects[objSeq];
		var objVal = axdom("#" + objID).val();
		if (obj.config.onChange || obj.config.onchange) {
			var onchange = obj.config.onChange || obj.config.onchange;
			onchange.call({ id: objID, value: objVal }, objID, objVal);
		}

		if(!obj.bindTarget) obj.bindTarget = axdom("#" + objID);
		obj.bindTarget.change();

		axdom(document.body).unbind("mousemove.AXInput");
		axdom(document.body).unbind("mouseup.AXInput");
		obj.config.isMoving = false;
	},
	bindSliderSetValue: function (objID, objSeq, value) {
		var cfg = this.config;
		var obj = this.objects[objSeq];

		if (value != undefined) {
			var objVal = value;
		} else {
			var objVal = axdom("#" + objID).val();
		}

		if (objVal.number() < obj.config.min.number()) objVal = obj.config.min;
		else if (objVal.number() > obj.config.max.number()) objVal = obj.config.max;
		var valueWidth = obj.config.max.number() - obj.config.min.number();
		var pixelWidth = obj.config._trackWidth;
		var pixelLeft = ((objVal - obj.config.min) * pixelWidth) / valueWidth;

		axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandle").css({ left: pixelLeft - (obj.config._handleWidth / 2) });
		axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderInside").css({ width: pixelLeft });
		axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleTitle").css({ left: pixelLeft - (obj.config._maxTitleWidth / 2) });
		axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleTitle").text(objVal.number().money() + obj.config.unit);

		axdom("#" + objID).val(objVal);
	},
	sliderTouchStart: function (objID, objSeq) {
		//alert(objID+"_"+ objSeq);
		var cfg = this.config;
		var obj = this.objects[objSeq];
		if(obj.bindAnchorTarget.attr("disable") == "disable" || obj.bindTarget.attr("disable") == "disable"){
			return false;
		}
		if (!obj.config.isMoving) {
			var bindSliderTouchMove = this.sliderTouchMove.bind(this);
			obj.bindSliderTouchMove = function (event) {
				bindSliderTouchMove(objID, objSeq, event);
			};
			var bindSliderTouchEnd = this.sliderTouchEnd.bind(this);
			obj.bindSliderTouchEnd = function (event) {
				bindSliderTouchEnd(objID, objSeq, event);
			};

			if (document.addEventListener) {
				document.addEventListener("touchmove", obj.bindSliderTouchMove, false);
				document.addEventListener("touchend", obj.bindSliderTouchEnd, false);

			}
			obj.config.isMoving = true;

		}

	},
	sliderTouchMove: function (objID, objSeq, event) {
		var cfg = this.config;
		var obj = this.objects[objSeq];

		event.preventDefault();
		var touch = event.touches[0];

		var eX = touch.pageX;
		var cX = axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderBar").offset().left;
		var rX = eX - cX;

		var valueWidth = obj.config.max.number() - obj.config.min.number();
		var pixelWidth = obj.config._trackWidth;
		var objVal = (rX * valueWidth) / pixelWidth;
		var snap = obj.config.snap;
		if (!snap) snap = 1;
		objVal = (objVal.number() + obj.config.min.number()).round();
		objVal = parseInt(objVal / (snap)) * (snap);
		var rX = ((objVal - obj.config.min) * pixelWidth) / valueWidth;

		if (objVal < obj.config.min) {
			objVal = obj.config.min;
			rX = 0;
		} else if (objVal > obj.config.max) {
			objVal = obj.config.max;
			rX = pixelWidth;
		}
		if (rX > pixelWidth) rX = pixelWidth;

		var sX = rX - (obj.config._handleWidth / 2);
		var stX = rX - (obj.config._maxTitleWidth / 2);

		//trace({rX:rX, pixelWidth:pixelWidth, objVal:objVal, valueWidth:valueWidth});
		axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandle").css({ left: sX });
		axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderInside").css({ width: rX });
		axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleTitle").css({ left: stX });
		axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleTitle").text(objVal.number().money() + obj.config.unit);
		axdom("#" + objID).val(objVal);
		if (obj.config.onChange) obj.config.onChange(objID, objVal);
		else if (obj.config.onchange) obj.config.onchange(objID, objVal);

		if(!obj.bindTarget) obj.bindTarget = axdom("#" + objID);
		obj.bindTarget.change();
	},
	sliderTouchEnd: function (objID, objSeq, event) {
		var cfg = this.config;
		var obj = this.objects[objSeq];
		var objVal = axdom("#" + objID).val();

		if (obj.config.onChange || obj.config.onchange) {
			var onchange = obj.config.onChange || obj.config.onchange;
			onchange.call({ id: objID, value: objVal }, objID, objVal);
		}
		if(!obj.bindTarget) obj.bindTarget = axdom("#" + objID);
		obj.bindTarget.change();

		if (document.addEventListener) {
			document.removeEventListener("touchmove", obj.bindSliderTouchMove, false);
			document.removeEventListener("touchend", obj.bindSliderTouchEnd, false);
		}
		obj.config.isMoving = false;
	},

	// twinSlider
	bindTwinSliderGetVals: function (objValString, separator) {
		var objVals = objValString.split(separator);
		var objVal = { min: 0, max: 0 };
		if (objVals.length < 2) {
			objVal = { min: objVals[0], max: objVals[0] };
		} else {
			objVal = { min: objVals[0], max: objVals[1] };
		}
		return objVal;
	},
	bindTwinSlider: function (objID, objSeq) {
		var cfg = this.config;
		var obj = this.objects[objSeq];

		if(!obj.bindAnchorTarget) obj.bindAnchorTarget = axdom("#" + cfg.targetID + "_AX_" + objID);
		if(!obj.bindTarget) obj.bindTarget = axdom("#" + objID);

		var w = obj.bindAnchorTarget.width();
		var h = obj.bindAnchorTarget.data("height");
		var objValString = obj.bindTarget.val();
		var separator = obj.config.separator || "~";
		var objVal = this.bindTwinSliderGetVals(objValString, separator);
		obj.vals = objVal;

		if (objVal.min.number() < obj.config.min.number()) objVal.min = obj.config.min;
		else if (objVal.min.number() > obj.config.max.number()) objVal.min = obj.config.max;
		if (objVal.max.number() < obj.config.min.number()) objVal.max = obj.config.min;
		else if (objVal.max.number() > obj.config.max.number()) objVal.max = obj.config.max;

		if (!obj.config.unit) obj.config.unit = "";

		var po = [];
		po.push("<div id=\"" + cfg.targetID + "_AX_" + objID + "_AX_SliderBox\" class=\"" + cfg.anchorSliderBoxClassName + "\" style=\"left:0px;width:" + w + "px;height:" + h + "px;\">");
		po.push("	<a " + obj.config.href + " class=\"AXanchorSliderMinTitle\">" + obj.config.min.number().money() + obj.config.unit + "</a>");
		po.push("	<a " + obj.config.href + " class=\"AXanchorSliderMaxTitle\">" + obj.config.max.number().money() + obj.config.unit + "</a>");
		po.push("	<div id=\"" + cfg.targetID + "_AX_" + objID + "_AX_SliderBar\" class=\"AXanchorSliderBar\">");
		po.push("		<div id=\"" + cfg.targetID + "_AX_" + objID + "_AX_SliderInside\" class=\"AXanchorSliderBarInside\"></div>");
		po.push("		<div id=\"" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMinTitle\" class=\"AXanchorSliderHandleMinTitle\">" + objVal.min.number().money() + obj.config.unit + "</div>");
		po.push("		<div id=\"" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMaxTitle\" class=\"AXanchorSliderHandleMaxTitle\">" + objVal.max.number().money() + obj.config.unit + "</div>");
		po.push("		<a " + obj.config.href + " id=\"" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMin\" class=\"AXanchorSliderHandleMin\">handleMin</a>");
		po.push("		<a " + obj.config.href + " id=\"" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMax\" class=\"AXanchorSliderHandleMax\">handleMax</a>");
		po.push("	</div>");
		po.push("</div>");

		//append to anchor
		obj.bindAnchorTarget.append(po.join(''));
		obj.bindAnchorTarget.css({ height: h + "px", "position": "relative", display: "inline-block", left: "auto", top: "auto" });
		//, background:"#eee"
		obj.bindAnchorTarget.show();
		obj.bindTarget.hide();

		var maxTitleWidth = obj.bindAnchorTarget.find(".AXanchorSliderMaxTitle").outerWidth().number() + 10;
		var minTitleWidth = obj.bindAnchorTarget.find(".AXanchorSliderMinTitle").outerWidth().number() + 10;
		obj.bindAnchorTarget.find(".AXanchorSliderMinTitle").css({ width: minTitleWidth + "px" });
		obj.bindAnchorTarget.find(".AXanchorSliderMaxTitle").css({ width: maxTitleWidth + "px" });
		var sliderBarWidth = w - minTitleWidth - maxTitleWidth;
		obj.bindAnchorTarget.find(".AXanchorSliderBar").css({ width: sliderBarWidth + "px", left: minTitleWidth + "px", top: h / 2 + 2 });
		//------------------------------------
		axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMinTitle").css({ width: maxTitleWidth });
		axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMaxTitle").css({ width: maxTitleWidth });
		obj.config._maxTitleWidth = maxTitleWidth;
		obj.config._handleWidth = axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMin").width();
		obj.config._trackWidth = sliderBarWidth;
		this.bindTwinSliderSetValue(objID, objSeq);

		var onmousedown = this.bindTwinSliderMouseDown.bind(this);
		axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMin").unbind("mousedown.AXInput").bind("mousedown.AXInput", function () {
			onmousedown(objID, objSeq, "min");
		});
		axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMax").unbind("mousedown.AXInput").bind("mousedown.AXInput", function () {
			onmousedown(objID, objSeq, "max");
		});

		axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMin").unbind("dragstart.AXInput").bind("dragstart.AXInput", function (event) {
			event.stopPropagation(); // disable  event
			return false;
		});
		axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMax").unbind("dragstart.AXInput").bind("dragstart.AXInput", function (event) {
			event.stopPropagation(); // disable  event
			return false;
		});

		//add touch event
		if (document.addEventListener) {
			var ontouchstart = this.twinSliderTouchStart.bind(this);
			obj.bindTwinSliderTouchStartMin = function (event) { ontouchstart(objID, objSeq, "min"); }
			obj.bindTwinSliderTouchStartMax = function (event) { ontouchstart(objID, objSeq, "max"); }

			AXgetId(cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMin").addEventListener("touchstart", obj.bindTwinSliderTouchStartMin, false);
			AXgetId(cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMax").addEventListener("touchstart", obj.bindTwinSliderTouchStartMax, false);
		}

	},
	bindTwinSliderMouseDown: function (objID, objSeq, handleName) {
		var cfg = this.config;
		var obj = this.objects[objSeq];
		if(obj.bindAnchorTarget.attr("disable") == "disable" || obj.bindTarget.attr("disable") == "disable"){
			return false;
		}
		if (!obj.config.isMoving) {
			var bindTwinSliderMouseMove = this.bindTwinSliderMouseMove.bind(this);
			obj.bindTwinSliderMouseMove = function (event) {
				bindTwinSliderMouseMove(objID, objSeq, event, handleName);
			};
			var bindTwinSliderMouseUp = this.bindTwinSliderMouseUp.bind(this);
			obj.bindTwinSliderMouseUp = function (event) {
				bindTwinSliderMouseUp(objID, objSeq, event, handleName);
			};
			axdom(document.body).unbind("mousemove.AXInput").bind("mousemove.AXInput", obj.bindTwinSliderMouseMove);
			axdom(document.body).unbind("mouseup.AXInput").bind("mouseup.AXInput", obj.bindTwinSliderMouseUp);
			obj.config.isMoving = true;
		}

	},
	bindTwinSliderMouseMove: function (objID, objSeq, event, handleName) {
		var cfg = this.config;
		var obj = this.objects[objSeq];

		var eX = event.pageX;
		var cX = axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderBar").offset().left;

		var rX = eX - cX;

		var valueWidth = obj.config.max.number() - obj.config.min.number();
		var pixelWidth = obj.config._trackWidth;
		var objVal = (rX * valueWidth) / pixelWidth;
		var snap = obj.config.snap;
		if (!snap) snap = 1;
		objVal = (objVal.number() + obj.config.min.number()).round();
		objVal = parseInt(objVal / (snap)) * (snap);
		var rX = ((objVal - obj.config.min) * pixelWidth) / valueWidth;

		if (objVal < obj.config.min) {
			objVal = obj.config.min;
			rX = 0;
		} else if (objVal > obj.config.max) {
			objVal = obj.config.max;
			rX = pixelWidth;
		}
		if (rX > pixelWidth) rX = pixelWidth;

		//trace({rX:rX, pixelWidth:pixelWidth, objVal:objVal, valueWidth:valueWidth});
		if (handleName == "min") {
			if (objVal > obj.vals.max) {
				objVal = obj.vals.max;
				rX = obj.handleMaxLeft;
			}
			var sX = rX - (obj.config._handleWidth);
			var stX = rX - (obj.config._maxTitleWidth);
			obj.handleMinLeft = rX;
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMin").css({ left: sX });
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMinTitle").css({ left: stX });
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMinTitle").text(objVal.number().money() + obj.config.unit);
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderInside").css({ width: rX });
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderInside").css({ left: obj.handleMinLeft, width: obj.handleMaxLeft - obj.handleMinLeft });
			//axdom("#"+objID).val(objVal);
			obj.vals.min = objVal;
		} else {
			if (objVal < obj.vals.min) {
				objVal = obj.vals.min;
				rX = obj.handleMinLeft;
			}
			var sX = rX;
			var stX = rX;
			obj.handleMaxLeft = rX;
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMax").css({ left: sX });
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMaxTitle").css({ left: stX });
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMaxTitle").text(objVal.number().money() + obj.config.unit);
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderInside").css({ left: obj.handleMinLeft, width: obj.handleMaxLeft - obj.handleMinLeft });
			//axdom("#"+objID).val(objVal);
			obj.vals.max = objVal;
		}
		var separator = obj.config.separator || "~";
		axdom("#" + objID).val(obj.vals.min + separator + obj.vals.max);

	},
	bindTwinSliderMouseUp: function (objID, objSeq, event) {
		var cfg = this.config;
		var obj = this.objects[objSeq];

		var objVal = axdom("#" + objID).val();
		if (obj.config.onChange || obj.config.onchange) {
			var onchange = obj.config.onChange || obj.config.onchange;
			onchange.call({ id: objID, value: objVal }, objID, objVal);
		}
		if(!obj.bindTarget) obj.bindTarget = axdom("#" + objID);
		obj.bindTarget.change();

		axdom(document.body).unbind("mousemove.AXInput");
		axdom(document.body).unbind("mouseup.AXInput");
		obj.config.isMoving = false;
	},
	bindTwinSliderSetValue: function (objID, objSeq, value) {
		var cfg = this.config;
		var obj = this.objects[objSeq];
		if (value != undefined) {
			var objValString = value;
		} else {
			var objValString = axdom("#" + objID).val();
		}

		var separator = obj.config.separator || "~";
		var objVal = this.bindTwinSliderGetVals(objValString, separator);
		obj.vals = objVal;

		if (objVal.min.number() < obj.config.min.number()) objVal.min = obj.config.min;
		else if (objVal.min.number() > obj.config.max.number()) objVal.min = obj.config.max;
		if (objVal.max.number() < obj.config.min.number()) objVal.max = obj.config.min;
		else if (objVal.max.number() > obj.config.max.number()) objVal.max = obj.config.max;

		var valueWidth = obj.config.max.number() - obj.config.min.number();
		var pixelWidth = obj.config._trackWidth;
		var pixelMinLeft = ((objVal.min - obj.config.min) * pixelWidth) / valueWidth;
		var pixelMaxLeft = ((objVal.max - obj.config.min) * pixelWidth) / valueWidth;

		axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMin").css({ left: pixelMinLeft - (obj.config._handleWidth) });
		axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMinTitle").css({ left: pixelMinLeft - (obj.config._maxTitleWidth) });
		axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMinTitle").text(objVal.min.number().money() + obj.config.unit);

		axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMax").css({ left: pixelMaxLeft });
		axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMaxTitle").css({ left: pixelMaxLeft });
		axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMaxTitle").text(objVal.max.number().money() + obj.config.unit);

		obj.handleMinLeft = pixelMinLeft;
		obj.handleMaxLeft = pixelMaxLeft;
		axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderInside").css({ left: pixelMinLeft, width: pixelMaxLeft - pixelMinLeft });

		axdom("#" + objID).val(obj.vals.min + separator + obj.vals.max);
	},
	// -- add touch event
	twinSliderTouchStart: function (objID, objSeq, handleName) {
		var cfg = this.config;
		var obj = this.objects[objSeq];
		if(obj.bindAnchorTarget.attr("disable") == "disable" || obj.bindTarget.attr("disable") == "disable"){
			return false;
		}

		if (!obj.config.isMoving) {
			var bindTwinSliderTouchMove = this.twinSliderTouchMove.bind(this);
			obj.bindTwinSliderTouchMove = function (event) {
				bindTwinSliderTouchMove(objID, objSeq, event, handleName);
			};
			var bindTwinSliderTouchEnd = this.twinSliderTouchEnd.bind(this);
			obj.bindTwinSliderTouchEnd = function (event) {
				bindTwinSliderTouchEnd(objID, objSeq, event, handleName);
			};

			if (document.addEventListener) {
				document.addEventListener("touchmove", obj.bindTwinSliderTouchMove, false);
				document.addEventListener("touchend", obj.bindTwinSliderTouchEnd, false);

			}
			obj.config.isMoving = true;

		}

	},
	twinSliderTouchMove: function (objID, objSeq, event, handleName) {
		var cfg = this.config;
		var obj = this.objects[objSeq];

		event.preventDefault();
		var touch = event.touches[0];

		//var eX = event.pageX;
		var eX = touch.pageX;
		var cX = axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderBar").offset().left;
		var rX = eX - cX;

		var valueWidth = obj.config.max.number() - obj.config.min.number();
		var pixelWidth = obj.config._trackWidth;
		var objVal = (rX * valueWidth) / pixelWidth;
		var snap = obj.config.snap;
		if (!snap) snap = 1;
		objVal = (objVal.number() + obj.config.min.number()).round();
		objVal = parseInt(objVal / (snap)) * (snap);
		var rX = ((objVal - obj.config.min) * pixelWidth) / valueWidth;

		if (objVal < obj.config.min) {
			objVal = obj.config.min;
			rX = 0;
		} else if (objVal > obj.config.max) {
			objVal = obj.config.max;
			rX = pixelWidth;
		}
		if (rX > pixelWidth) rX = pixelWidth;

		//trace({rX:rX, pixelWidth:pixelWidth, objVal:objVal, valueWidth:valueWidth});

		if (handleName == "min") {
			if (objVal > obj.vals.max) {
				objVal = obj.vals.max;
				rX = obj.handleMaxLeft;
			}
			var sX = rX - (obj.config._handleWidth);
			var stX = rX - (obj.config._maxTitleWidth);
			obj.handleMinLeft = rX;
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMin").css({ left: sX });
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMinTitle").css({ left: stX });
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMinTitle").text(objVal.number().money() + obj.config.unit);
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderInside").css({ width: rX });
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderInside").css({ left: obj.handleMinLeft, width: obj.handleMaxLeft - obj.handleMinLeft });
			//axdom("#"+objID).val(objVal);
			obj.vals.min = objVal;
		} else {
			if (objVal < obj.vals.min) {
				objVal = obj.vals.min;
				rX = obj.handleMinLeft;
			}
			var sX = rX;
			var stX = rX;
			obj.handleMaxLeft = rX;
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMax").css({ left: sX });
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMaxTitle").css({ left: stX });
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMaxTitle").text(objVal.number().money() + obj.config.unit);
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderInside").css({ left: obj.handleMinLeft, width: obj.handleMaxLeft - obj.handleMinLeft });
			//axdom("#"+objID).val(objVal);
			obj.vals.max = objVal;
		}
		var separator = obj.config.separator || "~";
		axdom("#" + objID).val(obj.vals.min + separator + obj.vals.max);
		if (obj.config.onChange) obj.config.onChange(objID, obj.vals.min + separator + obj.vals.max);
		else if (obj.config.onchange) obj.config.onchange(objID, obj.vals.min + separator + obj.vals.max);
		if(!obj.bindTarget) obj.bindTarget = axdom("#" + objID);
		obj.bindTarget.change();
	},
	twinSliderTouchEnd: function (objID, objSeq, event) {
		var cfg = this.config;
		var obj = this.objects[objSeq];

		var objVal = axdom("#" + objID).val();
		if (obj.config.onChange || obj.config.onchange) {
			var onchange = obj.config.onChange || obj.config.onchange;
			onchange.call({ id: objID, value: objVal }, objID, objVal);
		}
		if(!obj.bindTarget) obj.bindTarget = axdom("#" + objID);
		obj.bindTarget.change();
		document.removeEventListener("touchmove", obj.bindTwinSliderTouchMove, false);
		document.removeEventListener("touchend", obj.bindTwinSliderTouchEnd, false);

		obj.config.isMoving = false;
	},

	// switch
	bindSwitch: function (objID, objSeq) {
		var cfg = this.config;
		var obj = this.objects[objSeq];

		if(!obj.bindAnchorTarget) obj.bindAnchorTarget = axdom("#" + cfg.targetID + "_AX_" + objID);
		if(!obj.bindTarget) obj.bindTarget = axdom("#" + objID);

		var w = obj.bindAnchorTarget.width();
		var h = obj.bindAnchorTarget.data("height");
		var objVal = obj.bindTarget.val();
		var switchValue = obj.config.on;
		if (objVal == switchValue) {
			obj.switchValue = "on";
		} else {
			switchValue = obj.config.off;
			obj.switchValue = "off";
		}
		obj.bindTarget.val(switchValue);

		var po = [];
		po.push("<div id=\"" + cfg.targetID + "_AX_" + objID + "_AX_SwitchBox\" class=\"" + cfg.anchorSwitchBoxClassName + "\" style=\"left:0px;top:0px;width:" + w + "px;height:" + h + "px;\">");
		po.push("<div id=\"" + cfg.targetID + "_AX_" + objID + "_AX_SwitchDisplay\" class=\"AXanchorSwitchDisplay\" style=\"height:" + h + "px;line-height:" + h + "px;\">" + switchValue + "</div>");
		po.push("<a " + obj.config.href + " id=\"" + cfg.targetID + "_AX_" + objID + "_AX_SwitchHandle\" class=\"AXanchorSwitchHandle\" style=\"height:" + h + "px;\">handle</a>");
		po.push("</div>");

		//append to anchor
		obj.bindAnchorTarget.append(po.join(''));
		obj.bindAnchorTarget.css({ height: h + "px", "position": "relative", display: "inline-block", left: "auto", top: "auto" });

		obj.bindTarget_switchBox = obj.bindAnchorTarget.find("." + cfg.anchorSwitchBoxClassName);
		obj.bindTarget_switchDisplay = obj.bindAnchorTarget.find(".AXanchorSwitchDisplay");
		obj.bindTarget_switchHandle = obj.bindAnchorTarget.find(".AXanchorSwitchHandle");

		if (obj.switchValue == "on") {
			obj.bindAnchorTarget.find("." + cfg.anchorSwitchBoxClassName).addClass("on");
		}

		//, background:"#eee"
		obj.bindAnchorTarget.show();
		obj.bindTarget.hide();

		var bindSwitchClick = this.bindSwitchClick.bind(this);
		obj.bindSwitchClick = function (event) {
			bindSwitchClick(objID, objSeq, event);
		};
		obj.bindAnchorTarget.find("." + cfg.anchorSwitchBoxClassName).unbind("click.AXInput").bind("click.AXInput", obj.bindSwitchClick);

	},
	bindSwitchClick: function (objID, objSeq, event) {
		var cfg = this.config;
		var obj = this.objects[objSeq];

		if(obj.bindAnchorTarget.attr("disable") == "disable" || obj.bindTarget.attr("disable") == "disable"){
			return false;
		}

		if (obj.switchValue == "on") {
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SwitchBox").removeClass("on");
			obj.switchValue = "off";
			axdom("#" + objID).val(obj.config.off);
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SwitchDisplay").html(obj.config.off);
		} else {
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SwitchBox").addClass("on");
			obj.switchValue = "on";
			axdom("#" + objID).val(obj.config.on);
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SwitchDisplay").html(obj.config.on);
		}
		if (obj.config.onChange || obj.config.onchange) {
			var sendObj = {
				targetID: objID,
				on: obj.config.on,
				off: obj.config.off,
				value: axdom("#" + objID).val()
			}
			if (obj.config.onChange) obj.config.onChange.call(sendObj);
			if (obj.config.onchange) obj.config.onchange.call(sendObj);
		}
		if(!obj.bindTarget) obj.bindTarget = axdom("#" + objID);
		obj.bindTarget.change();
	},
	bindSwitchSetValue: function (objID, objSeq, value) {
		var cfg = this.config;
		var obj = this.objects[objSeq];

		var objVal = value;
		var switchValue = obj.config.on;
		if (objVal == switchValue) {
			obj.switchValue = "on";
		} else {
			switchValue = obj.config.off;
			obj.switchValue = "off";
		}
		axdom("#" + objID).val(switchValue);

		if (obj.switchValue == "off") {
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SwitchBox").removeClass("on");
			obj.switchValue = "off";
			axdom("#" + objID).val(obj.config.off);
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SwitchDisplay").html(obj.config.off);
		} else {
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SwitchBox").addClass("on");
			obj.switchValue = "on";
			axdom("#" + objID).val(obj.config.on);
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SwitchDisplay").html(obj.config.on);
		}
		if (obj.config.onChange || obj.config.onchange) {
			var sendObj = {
				targetID: objID,
				on: obj.config.on,
				off: obj.config.off,
				value: axdom("#" + objID).val()
			}
			if (obj.config.onChange) obj.config.onChange.call(sendObj);
			else if (obj.config.onchange) obj.config.onchange.call(sendObj);
		}
		if(!obj.bindTarget) obj.bindTarget = axdom("#" + objID);
		obj.bindTarget.change();
	},
	bindSwitch_touchstart: function () {

	},
	bindSwitch_touchMove: function () {

	},
	bindSwitch_touchEnd: function () {

	},

	// segment
	bindSegment: function (objID, objSeq) {
		var cfg = this.config;
		var obj = this.objects[objSeq];

		if(!obj.bindAnchorTarget) obj.bindAnchorTarget = axdom("#" + cfg.targetID + "_AX_" + objID);
		if(!obj.bindTarget) obj.bindTarget = axdom("#" + objID);

		var w = obj.bindAnchorTarget.width();
		var h = obj.bindAnchorTarget.data("height");
		var objVal = obj.bindTarget.val();
		var segmentOptions = obj.config.options;
		obj.selectedSegmentIndex = null;
		axf.each(segmentOptions, function (idx, seg) {
			//trace({optionValue:this.optionValue, objVal:objVal});
			if (this.optionValue == objVal) {
				obj.selectedSegmentIndex = idx;
				obj.selectedSegment = seg;
			}
		});
		if (obj.selectedSegmentIndex == null) {
			obj.selectedSegmentIndex = 0;
			obj.selectedSegment = segmentOptions[0];
		}
		obj.bindTarget.val(obj.selectedSegment.optionValue);

		var handleWidth = (w / segmentOptions.length).round() - 2;
		var po = [];
		var theme = obj.config.theme || cfg.anchorSegmentBoxClassName;
		po.push("<div id=\"" + cfg.targetID + "_AX_" + objID + "_AX_SegmentBox\" class=\"" + theme + "\" style=\"left:0px;top:0px;width:" + w + "px;\">");
		axf.each(segmentOptions, function (idx, seg) {
			var addClass = "";
			if (idx == 0) addClass = " segmentLeft";
			else if (idx == segmentOptions.length - 1) addClass = " segmentRight";
			if (obj.selectedSegmentIndex == idx) addClass += " on";
			if (seg.addClass) addClass += " " + seg.addClass;
			po.push("<a " + obj.config.href + " id=\"" + cfg.targetID + "_AX_" + objID + "_AX_SegmentHandle_AX_" + idx + "\" class=\"AXanchorSegmentHandle" + addClass + "\" style=\"width:" + handleWidth + "px;\">" + seg.optionText + "</a>");
		});
		po.push("</div>");

		//append to anchor
		obj.bindAnchorTarget.append(po.join(''));
		obj.bindAnchorTarget.css({ height: h + "px", "position": "relative", display: "inline-block", left: "auto", top: "auto" });
		var borderTop = obj.bindAnchorTarget.find(".AXanchorSegmentHandle").css("border-top-width").number();
		var borderBot = obj.bindAnchorTarget.find(".AXanchorSegmentHandle").css("border-bottom-width").number();
		obj.bindAnchorTarget.find(".AXanchorSegmentHandle").css({ height: (obj.bindAnchorTarget.innerHeight() - borderTop - borderBot) + "px", "line-height": (obj.bindAnchorTarget.innerHeight() - borderTop - borderBot) + "px" });

		//, background:"#eee"
		obj.bindAnchorTarget.show();
		obj.bindTarget.hide();

		var bindSegmentClick = this.bindSegmentClick.bind(this);
		obj.bindSegmentClick = function (event) {
			bindSegmentClick(objID, objSeq, event);
		};

		axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SegmentBox").find(".AXanchorSegmentHandle").unbind("click.AXInput").bind("click.AXInput", obj.bindSegmentClick);
	},
	bindSegmentClick: function (objID, objSeq, event) {
		var cfg = this.config;
		var obj = this.objects[objSeq];

		if(obj.bindAnchorTarget.attr("disable") == "disable" || obj.bindTarget.attr("disable") == "disable"){
			return false;
		}

		var segmentOptions = obj.config.options;

		var myTarget = axf.get_event_target(event.target, {tagname:"a", clazz:"AXanchorSegmentHandle"});
		if (myTarget) {

			var seq = myTarget.id.split(/_AX_/g).last();
			if (obj.selectedSegmentIndex != seq) {
				axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SegmentHandle_AX_" + obj.selectedSegmentIndex).removeClass("on");
				axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SegmentHandle_AX_" + seq).addClass("on");
				obj.selectedSegmentIndex = seq;
				obj.selectedSegment = segmentOptions[seq];
			}
			//strace(obj.selectedSegment.optionValue);
			axdom("#" + objID).val(obj.selectedSegment.optionValue);
			//trace(axdom("#"+objID).val());
			if (obj.config.onChange || obj.config.onchange) {
				var sendObj = {
					targetID: objID,
					options: segmentOptions,
					selectedIndex: obj.selectedSegmentIndex,
					selectedOption: obj.selectedSegment
				};
				if (obj.config.onChange) obj.config.onChange.call(sendObj);
				else if (obj.config.onchange) obj.config.onchange.call(sendObj);
			}
			if(!obj.bindTarget) obj.bindTarget = axdom("#" + objID);
			obj.bindTarget.change();
		}
	},
	bindSegmentSetValue: function (objID, objSeq, value) {
		var cfg = this.config;
		var obj = this.objects[objSeq];

		var selectedSegmentIndex = obj.selectedSegmentIndex;

		var objVal = value;
		var segmentOptions = obj.config.options;
		obj.selectedSegmentIndex = null;
		axf.each(segmentOptions, function (idx, seg) {
			if (this.optionValue == objVal) {
				obj.selectedSegmentIndex = idx;
				obj.selectedSegment = seg;
			}
		});
		if (obj.selectedSegmentIndex == null) {
			obj.selectedSegmentIndex = 0;
			obj.selectedSegment = segmentOptions[0];
		}
		axdom("#" + objID).val(obj.selectedSegment.optionValue);

		if (selectedSegmentIndex != obj.selectedSegmentIndex) {
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SegmentHandle_AX_" + selectedSegmentIndex).removeClass("on");
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SegmentHandle_AX_" + obj.selectedSegmentIndex).addClass("on");
		}

		if (obj.config.onChange || obj.config.onchange) {
			var sendObj = {
				targetID: objID,
				options: segmentOptions,
				selectedIndex: obj.selectedSegmentIndex,
				selectedOption: obj.selectedSegment
			};
			if (obj.config.onChange) obj.config.onChange.call(sendObj);
			else if (obj.config.onchange) obj.config.onchange.call(sendObj);
		}
		if(!obj.bindTarget) obj.bindTarget = axdom("#" + objID);
		obj.bindTarget.change();
	},

	// date
	bindDate: function (objID, objSeq) {
		var cfg = this.config;
		var obj = this.objects[objSeq];

		if(!obj.bindAnchorTarget) obj.bindAnchorTarget = axdom("#" + cfg.targetID + "_AX_" + objID);
		if(!obj.bindTarget) obj.bindTarget = axdom("#" + objID);

		var h = obj.bindAnchorTarget.data("height");
		var po = [];
		po.push("<a " + obj.config.href + " id=\"" + cfg.targetID + "_AX_" + objID + "_AX_dateHandle\" class=\"" + cfg.anchorDateHandleClassName + "\" style=\"right:0px;top:0px;width:" + h + "px;height:" + h + "px;\">handle</a>");
		obj.bindAnchorTarget.append(po.join(''));
		obj.bindAnchorTarget.show();

		var bindDateExpand = this.bindDateExpand.bind(this);
		var bindDateExpandClose = this.bindDateExpandClose.bind(this);
		axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_dateHandle").unbind("click.AXInput").bind("click.AXInput", function (event) {
			if (AXgetId(cfg.targetID + "_AX_" + objID + "_AX_expandBox")) {
				bindDateExpandClose(objID, objSeq, event);
			}else{
				bindDateExpand(objID, objSeq, true, event);
			}
		});
		obj.bindTarget.unbind("focus.AXInput").bind("focus.AXInput", function (event) {
			setTimeout(function(){
				obj.bindTarget.select();
			},1);
		});

		var separator = (obj.config.separator) ? obj.config.separator : "-";

		//trace(obj.config);

		obj.bindTarget.unbind("keydown.AXInput").bind("keydown.AXInput", function (event) {
			var _this = this;
			setTimeout(function(){
				if(event.keyCode == axf.Event.KEY_RETURN){
					//bindDateInputBlur(objID, objSeq, event);
					_this.blur();
				}else if (event.keyCode != AXUtil.Event.KEY_BACKSPACE && event.keyCode != AXUtil.Event.KEY_DELETE && event.keyCode != AXUtil.Event.KEY_LEFT && event.keyCode != AXUtil.Event.KEY_RIGHT) {
					var va = _this.value.replace(/\D/gi, ""); //숫자 이외의 문자를 제거 합니다.
					if (obj.config.selectType == "y") {
						if (va.length > 4) _this.value = va.left(4);
					} else if (obj.config.selectType == "m") {
						if (va.length == 4) {
							va = va + separator;
							_this.value = va;
						} else if (va.length > 4) {
							va = va.substr(0, 4) + separator + va.substr(4, 2);
							_this.value = va;
						}
					} else {
						if (va.length < 4) {
							_this.value = va;
						}
						else
						if (va.length == 4) {
							va = va + separator;
							_this.value = va;
						}
						else
						if (va.length <= 6) {
							va = va.substr(0, 4) + separator + va.substr(4, 2) + separator;
							_this.value = va;
						}
						else
						if (va.length <= 8) {
							va = va.substr(0, 4) + separator + va.substr(4, 2) + separator + va.substr(6, 2);
							if (obj.config.expandTime) va += " ";
							_this.value = va;
						}
						else
						{
							if(obj.config.expandTime){
								if (va.length <= 10) {
									va = va.substr(0, 4) + separator + va.substr(4, 2) + separator + va.substr(6, 2) + " " + va.substr(8, 2) + ":";
									_this.value = va;
								} else if (va.length > 12) {
									va = va.substr(0, 4) + separator + va.substr(4, 2) + separator + va.substr(6, 2) + " " + va.substr(8, 2) + ":" + va.substr(10, 2);
									_this.value = va;
								}
							}else{
								va = va.substr(0, 4) + separator + va.substr(4, 2) + separator + va.substr(6, 2);
								_this.value = va;
							}
						}
					}
				}
			});
		});

		var bindDateInputBlur = this.bindDateInputBlur.bind(this);
		obj.bindTarget.unbind("blur.AXInput").bind("blur.AXInput", function (event) {
			bindDateInputBlur(objID, objSeq, event);
		});

		// config.expand : true, 속성 bindDateExpand
		if(obj.config.expand === true){
			bindDateExpand(objID, objSeq, true, event);
			setTimeout(function(){
				obj.bindTarget.focus();
			}, 100);
		}
	},
	bindDateExpand: function (objID, objSeq, isToggle, event) {
		var cfg = this.config;
		var obj = this.objects[objSeq];

		if(obj.bindAnchorTarget.attr("disable") == "disable" || obj.bindTarget.attr("disable") == "disable"){
			return false;
		}

		for (var OO, oidx = 0, __arr = this.objects; (oidx < __arr.length && (OO = __arr[oidx])); oidx++) {
			if(OO.expandBox_axdom){
				OO.expandBox_axdom.remove();
				OO.expandBox_axdom = null;
			}
		}

		if (AXUtil.clientWidth() < cfg.responsiveMobile) {
			this.bindDateExpandMobile(objID, objSeq, isToggle, event);
			return;
			/* 클라이언트 너비가 모바일 너비이면 프로세스 중지 */
		}
		var obj = this.objects[objSeq];
		var separator = (obj.config.separator) ? obj.config.separator : "-";

		//Selector Option box Expand
		if (isToggle) { // 활성화 여부가 토글 이면
			if (AXgetId(cfg.targetID + "_AX_" + objID + "_AX_expandBox")) {
				axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox").remove(); // 개체 삭제 처리
				axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_Handle").removeClass("on");
				//비활성 처리후 메소드 종료
				return;
			}
		}
		axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox").remove(); // 활성화 전에 개체 삭제 처리

		//Expand Box 생성 구문 작성
		var objVal = axdom("#" + objID).val(), objHours = "";
		if (obj.config.expandTime) obj.config.selectType == "d"; //시간 확장 시 selectType : d 로 고정

		var today = new Date();
		if (obj.config.selectType == "y") {
			if (objVal != "") {
				objVal = objVal.left(4) + separator + "01" + separator + "01";
			}
		} else if (obj.config.selectType == "m") {
			if (objVal != "") {
				objVal = objVal + separator + "02";
			}
		}

		var dfDate = (obj.config.defaultDate || "").date();
		var myDate = objVal.date(separator, dfDate);

		var myYear = myDate.getUTCFullYear();
		var myMonth = (myDate.getUTCMonth() + 1).setDigit(2);

		var po = [];
		po.push("<div id=\"" + cfg.targetID + "_AX_" + objID + "_AX_expandBox\" class=\"" + cfg.bindDateExpandBoxClassName + "\" style=\"z-index:5100;\">");
		po.push("	<div>");
		po.push("		<div class=\"dateControlBox\">");
		po.push("			<a " + obj.config.href + " class=\"yearbutton\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_controlYear\">" + myYear + "년</a>");
		po.push("			<a " + obj.config.href + " class=\"monthbutton\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_controlMonth\">" + myMonth + "월</a>");
		po.push("			<a " + obj.config.href + " class=\"prevbutton\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_expandPrev\">P</a>");
		po.push("			<a " + obj.config.href + " class=\"nextbutton\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_expandNext\">N</a>");
		po.push("		</div>");
		po.push("		<div class=\"dateDisplayBox\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_displayBox\"></div>");
		if (obj.config.expandTime) { //시간 선택 기능 확장시
			po.push("		<div class=\"timeDisplayBox\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_displayTimeBox\"></div>");
		}
		po.push("	</div>");
		po.push("</div>");

		axdom(document.body).append(po.join('')); // bindDateExpandBox append
		//axdom("#"+cfg.targetID + "_AX_" + objID+"_AX_Handle").addClass("on");

		// AXCalendar display
		obj.nDate = myDate;
		obj.mycalendar = new AXCalendar();
		obj.mycalendar.setConfig({
			targetID: cfg.targetID + "_AX_" + objID + "_AX_displayBox",
			basicDate: myDate,
			href: obj.config.href,
            minDate: obj.config.minDate,
            maxDate: obj.config.maxDate,
            onBeforeShowDay: obj.config.onBeforeShowDay
		});
		if (obj.config.expandTime) { //시간 선택 기능 확장시
			obj.nDate = myDate;
			var mycalendartimeChange = this.bindDateTimeChange.bind(this);
			obj.mycalendartimeChange = function (myTime) {
				mycalendartimeChange(objID, objSeq, myTime);
			};
			obj.mycalendartime = new AXCalendar();
			obj.mycalendartime.setConfig({
				targetID: cfg.targetID + "_AX_" + objID + "_AX_displayTimeBox",
				onChange: obj.mycalendartimeChange
			});
			var apm = "AM";
			var myTimes = myDate.print("hh:mi").split(":");
			var myHH = myTimes[0].number();
			var myMI = myTimes[1];


			if (myHH == 12 && myMI > 0){
				apm = "PM";
			}
			else if (myHH > 12) {
				apm = "PM";
				myHH -= 12;
			}
			obj.mycalendartime.printTimePage(myHH.setDigit(2) + ":" + myMI.setDigit(2) + " " + apm);
		}

		var printDate = "";
		if (obj.config.selectType == "y") {
			obj.mycalendarPageType = "y";
			obj.mycalendar.printYearPage(myDate.print("yyyy"));
			printDate = myDate.print("yyyy");
			axdom("#" + objID).val(printDate);
		} else if (obj.config.selectType == "m") {
			obj.mycalendarPageType = "m";
			obj.mycalendar.printMonthPage(myDate);
			printDate = myDate.print("yyyy" + separator + "mm");
			axdom("#" + objID).val(printDate);
		} else {
			if (obj.config.defaultSelectType) {
				if (obj.config.defaultSelectType == "y") {
					obj.mycalendarPageType = "y";
					obj.mycalendar.printYearPage(myDate.print("yyyy"));
				} else if (obj.config.defaultSelectType == "m") {
					obj.mycalendarPageType = "m";
					obj.mycalendar.printMonthPage(myDate);
				} else {
					obj.mycalendarPageType = "d";
					obj.mycalendar.printDayPage(myDate);
				}
				printDate = myDate.print("yyyy" + separator + "mm" + separator + "dd");
				if (obj.config.expandTime) {
					printDate += " " + myDate.print("hh:mi");
				}
				axdom("#" + objID).val(printDate);

			} 
			else 
			{
				obj.mycalendarPageType = "d";
				obj.mycalendar.printDayPage(myDate);
				printDate = myDate.print("yyyy" + separator + "mm" + separator + "dd");
				if (obj.config.expandTime) {
					printDate += " " + myDate.print("hh:mi");
				}
				axdom("#" + objID).val(printDate);
			}
		}
		// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AXCalendar display

		// expandBox set Position ~~~~~~~~~~~~~~~~~~~~~~~~~
		var expandBox = axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox");
		var expBoxWidth = expandBox.outerWidth();
		var expBoxHeight = expandBox.outerHeight();
		var offset = axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_dateHandle").offset();
		var handleWidth = axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_dateHandle").width();
		var handleHeight = axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_dateHandle").height();

		var css = {};
		if (obj.config.align == "left") {
			css.left = offset.left.number() - expBoxWidth;
		} else if (obj.config.align == "center") {
			css.left = offset.left.number() - expBoxWidth / 2 + handleWidth;
		} else if (obj.config.align == "right") {
			css.left = offset.left.number() + handleWidth;
		} else {
			css.left = offset.left.number() + handleWidth;
		}
		if (obj.config.valign == "top") {
			css.top = offset.top;
		} else if (obj.config.valign == "middle") {
			css.top = offset.top.number() - expBoxHeight / 2 + handleWidth / 2;
		} else if (obj.config.valign == "bottom") {
			css.top = offset.top.number() - expBoxHeight + handleWidth;
		} else {
			css.top = offset.top;
		}

		var pElement = expandBox.offsetParent();
		var pBox = { width: pElement.width(), height: pElement.height() };

		var clientHeight = (AXUtil.docTD == "Q") ? document.body.scrollHeight : document.documentElement.scrollHeight;
		var clienWidth = (AXUtil.docTD == "Q") ? document.body.scrollWidth : document.documentElement.scrollWidth;
		if (clienWidth > pBox.width) pBox.width = clienWidth;
		if (clientHeight > pBox.height) pBox.height = clientHeight;
		var _box = { width: expandBox.outerWidth() + 10, height: expandBox.outerHeight() + 10 };

		if ((_box.height.number() + css.top.number()) > pBox.height) {
			css.top = css.top - ((_box.height.number() + css.top.number()) - pBox.height);
		}
		if (css.top < 0) {
			css.top = 0;
		}

		if ((_box.width.number() + css.left.number()) > pBox.width) {
			css.left = css.left - ((_box.width.number() + css.left.number()) - pBox.width);
		}
		if (css.left < 0) {
			css.left = 0;
		}

		expandBox.css(css);
		obj.expandBox_axdom = expandBox;

		// ~~~~~~~~~~~~~~~~~~~~~~~~~ expandBox set Position ~~~~~~~~~~~~~~~~~~~~~~~~~

		var bindDateExpandBoxClick = this.bindDateExpandBoxClick.bind(this);
		obj.documentclickEvent = function (event) {
			//trace(objID);
			bindDateExpandBoxClick(objID, objSeq, event);
		}
		var bindDateKeyup = this.bindDateKeyup.bind(this);
		obj.inputKeyup = function (event) {
			bindDateKeyup(objID, objSeq, event);
		}
		if (obj.config.selectType == "y") {
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_controlYear").css({ left: "70px" });
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_controlMonth").hide();
		}

		//trace("event bind");
		axdom(document).unbind("click.AXInput").bind("click.AXInput", obj.documentclickEvent);
		axdom("#" + objID).bind("keydown.AXInput", obj.inputKeyup);
	},
	// -- bindDate for mobile
	bindDateExpandMobile: function (objID, objSeq, isToggle, event) {
		var cfg = this.config;
		var obj = this.objects[objSeq];

		if(obj.bindAnchorTarget.attr("disable") == "disable" || obj.bindTarget.attr("disable") == "disable"){
			return false;
		}

		axdom("#" + objID).unbind("keydown.AXInput").bind("keydown.AXInput", obj.inputKeyup);

		//Selector Option box Expand
		if (isToggle) { // 활성화 여부가 토글 이면
			if (obj.modal && obj.modal.opened) {
				obj.modal.close();
				axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_Handle").removeClass("on");
				//비활성 처리후 메소드 종료
				return;
			}
		}

		/* mobile modal ready */
		obj.modal = new AXMobileModal();
		obj.modal.setConfig({
			addClass: "",
			height: (obj.config.expandTime) ? 532 : 388,
			width: 300,
			head: {},
			onclose: function () { }
		});

		var initBindDateMobileModal = this.initBindDateMobileModal.bind(this);
		var onLoad = function (modalObj) {
			initBindDateMobileModal(objID, objSeq, modalObj);
		};
		obj.modal.open(null, onLoad);
	},
	initBindDateMobileModal: function (objID, objSeq, modalObj) {
		var cfg = this.config;
		var obj = this.objects[objSeq];
		var separator = (obj.config.separator) ? obj.config.separator : "-";

		//Expand Box 생성 구문 작성
		var objVal = axdom("#" + objID).val();
		if (obj.config.expandTime) obj.config.selectType == "d"; //시간 확장 시 selectType : d 로 고정			

		var today = new Date();
		if (obj.config.selectType == "y") {
			if (objVal != "") {
				objVal = objVal.left(4) + separator + "01" + separator + "01";
			}
		} else if (obj.config.selectType == "m") {
			if (objVal != "") {
				objVal = objVal + separator + "01";
			}
		}

		var dfDate = (obj.config.defaultDate || "").date();
		var myDate = objVal.date(separator, dfDate);

		var myYear = myDate.getFullYear();
		var myMonth = (myDate.getMonth() + 1).setDigit(2);

		/* head 만들기 */
		var headPo = [];
		/* 현재 선택된 메뉴 선택 하는 기능구현 필요 */
		headPo.push("<div class=\"AXDateControlBox\">");
		headPo.push("	<a " + obj.config.href + " class=\"AXDateControl yearbutton\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_controlYear\">" + (AXConfig.AXInput.yearText || "{year}년").replace("{year}", myYear) + "</a>");
		headPo.push("	<a " + obj.config.href + " class=\"AXDateControl monthbutton\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_controlMonth\">" + (AXConfig.AXInput.monthText || "{month}월").replace("{month}", myMonth) + "</a>");
		headPo.push("	<a " + obj.config.href + " class=\"AXDateControl prevbutton\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_expandPrev\">P</a>");
		headPo.push("	<a " + obj.config.href + " class=\"AXDateControl nextbutton\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_expandNext\">N</a>");
		headPo.push("</div>");

		var bodyPo = [];
		bodyPo.push('<div class="AXDateContainer">');
		bodyPo.push('<div class="AXDateDisplayBox" id="' + cfg.targetID + '_AX_' + objID + '_AX_displayBox"></div>');
		if (obj.config.expandTime) { //시간 선택 기능 확장시
			bodyPo.push('		<div class="AXTimeDisplayBox" id="' + cfg.targetID + '_AX_' + objID + '_AX_displayTimeBox"></div>');
		}
		bodyPo.push('</div>');

		var footPo = [];
		footPo.push('<div class="AXDateButtonBox" id="' + cfg.targetID + '_AX_' + objID + '_AX_buttonBox">');
		footPo.push('	<button class="AXButtonSmall W80 AXBindDateConfirm" type="button" id="' + cfg.targetID + '_AX_' + objID + '_AX_button_AX_confirm">' + (AXConfig.AXInput.confirmText || "확인") + '</button>');
		footPo.push('</div>');

		/* modal에 캘린더 장착 */
		modalObj.modalHead.empty();
		modalObj.modalHead.append(headPo.join(''));
		modalObj.modalBody.empty();
		modalObj.modalBody.append(bodyPo.join(''));
		modalObj.modalFoot.empty();
		modalObj.modalFoot.append(footPo.join(''));

		/* 캘린더 클래스 로드 */
		// AXCalendar display
		obj.nDate = myDate;
		obj.mycalendar = new AXCalendar();
		obj.mycalendar.setConfig({
			targetID: cfg.targetID + "_AX_" + objID + "_AX_displayBox",
			basicDate: myDate,
			href: obj.config.href
		});
		if (obj.config.expandTime) { //시간 선택 기능 확장시
			obj.nDate = myDate;
			var mycalendartimeChange = this.bindDateTimeChange.bind(this);
			obj.mycalendartimeChange = function (myTime) {
				mycalendartimeChange(objID, objSeq, myTime);
			};
			obj.mycalendartime = new AXCalendar();
			obj.mycalendartime.setConfig({
				targetID: cfg.targetID + "_AX_" + objID + "_AX_displayTimeBox",
				onChange: obj.mycalendartimeChange
			});
			var apm = "AM";
			var myTimes = myDate.print("hh:mi").split(":");
			var myHH = myTimes[0].number();
			var myMI = myTimes[1];

			if (myHH == 12 && myMI > 0){
				apm = "PM";
			}
			else if (myHH > 12) {
				apm = "PM";
				myHH -= 12;
			}
			obj.mycalendartime.printTimePage(myHH.setDigit(2) + ":" + myMI.setDigit(2) + " " + apm);
		}

		var printDate = "";
		if (obj.config.selectType == "y") {
			obj.mycalendarPageType = "y";
			obj.mycalendar.printYearPage(myDate.print("yyyy"));
			printDate = myDate.print("yyyy");
			axdom("#" + objID).val(printDate);
		} else if (obj.config.selectType == "m") {
			obj.mycalendarPageType = "m";
			obj.mycalendar.printMonthPage(myDate);
			printDate = myDate.print("yyyy" + separator + "mm");
			axdom("#" + objID).val(printDate);
		} else {
			if (obj.config.defaultSelectType) {
				if (obj.config.defaultSelectType == "y") {
					obj.mycalendarPageType = "y";
					obj.mycalendar.printYearPage(myDate.print("yyyy"));
				} else if (obj.config.defaultSelectType == "m") {
					obj.mycalendarPageType = "m";
					obj.mycalendar.printMonthPage(myDate);
				} else {
					obj.mycalendarPageType = "d";
					obj.mycalendar.printDayPage(myDate);
				}
				printDate = myDate.print("yyyy" + separator + "mm" + separator + "dd");
				if (obj.config.expandTime) {
					printDate += " " + myDate.print("hh:mi");
				}
				axdom("#" + objID).val(printDate);

			} else {
				obj.mycalendarPageType = "d";
				obj.mycalendar.printDayPage(myDate);
				printDate = myDate.print("yyyy" + separator + "mm" + separator + "dd");
				if (obj.config.expandTime) {
					printDate += " " + myDate.print("hh:mi");
				}
				axdom("#" + objID).val(printDate);
			}
		}
		// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AXCalendar display

		// control event bind
		var _this = this;
		/*var bindDateMobileModalHeadClick = this.bindDateMobileModalHeadClick.bind(this);*/
		modalObj.modalHead.unbind("click.AXInput").bind("click.AXInput", function (event) {
			_this.bindDateMobileModalHeadClick(objID, objSeq, event);
		});
		/*var bindDateMobileModalBodyClick = this.bindDateMobileModalBodyClick.bind(this);*/
		modalObj.modalBody.unbind("click.AXInput").bind("click.AXInput", function (event) {
			_this.bindDateMobileModalBodyClick(objID, objSeq, event);
		});
		/*var bindDateMobileModalFootClick = this.bindDateMobileModalFootClick.bind(this);*/
		modalObj.modalFoot.unbind("click.AXInput").bind("click.AXInput", function (event) {
			_this.bindDateMobileModalFootClick(objID, objSeq, event);
		});
		// control event bind
	},
	bindDateMobileModalHeadClick: function (objID, objSeq, event) {
		var obj = this.objects[objSeq];
		var cfg = this.config;
		var eid = event.target.id.split(/_AX_/g);
		var eventTarget = event.target;
		var myTarget = this.getEventTarget({
			evt: eventTarget, evtIDs: eid,
			until: function (evt, evtIDs) { return (axdom(evt.parentNode).hasClass("AXDateControlBox")) ? true : false; },
			find: function (evt, evtIDs) { return (axdom(evt).hasClass("AXDateControl")) ? true : false; }
		});
		if (myTarget) {
			var act = myTarget.id.split(/_AX_/g).last();
			var nDate = obj.nDate;

			if (act == "controlYear") {
				this.bindDateChangePage(objID, objSeq, nDate, "y");
			} else if (act == "controlMonth") {
				if (obj.config.selectType != "y") {
					this.bindDateChangePage(objID, objSeq, nDate, "m");
				}
			} else if (act == "expandPrev") {
				if (obj.mycalendarPageType == "d") {
					this.bindDateChangePage(objID, objSeq, nDate.add(-1, "m"), "d");
				} else if (obj.mycalendarPageType == "m") {
					this.bindDateChangePage(objID, objSeq, nDate.add(-1, "y"), "m");
				} else if (obj.mycalendarPageType == "y") {
					this.bindDateChangePage(objID, objSeq, nDate.add(-12, "y"), "y");
				}
			} else if (act == "expandNext") {
				if (obj.mycalendarPageType == "d") {
					this.bindDateChangePage(objID, objSeq, nDate.add(1, "m"), "d");
				} else if (obj.mycalendarPageType == "m") {
					this.bindDateChangePage(objID, objSeq, nDate.add(1, "y"), "m");
				} else if (obj.mycalendarPageType == "y") {
					this.bindDateChangePage(objID, objSeq, nDate.add(12, "y"), "y");
				}
			}
		}
	},
	bindDateMobileModalBodyClick: function (objID, objSeq, event) {
		var obj = this.objects[objSeq];
		var cfg = this.config;
		var eid = event.target.id.split(/_AX_/g);
		var eventTarget = event.target;
		var myTarget = this.getEventTarget({
			evt: eventTarget, evtIDs: eid,
			until: function (evt, evtIDs) { return (axdom(evt.parentNode).hasClass("AXDateContainer")) ? true : false; },
			find: function (evt, evtIDs) { return (axdom(evt).hasClass("calendarDate") || axdom(evt).hasClass("calendarMonth")) ? true : false; }
		});
		if (myTarget) {
			var ids = myTarget.id.split(/_AX_/g);
			var act = ids.last();
			var nDate = obj.nDate;
			var separator = (obj.config.separator) ? obj.config.separator : "-";
			if (act == "date") {
				//trace(ids[ids.length-2]);
				obj.nDate = ids[ids.length - 2].date();
				var printDate = obj.nDate.print("yyyy" + separator + "mm" + separator + "dd");
				if (obj.config.expandTime) {
					printDate += " " + obj.mycalendartime.getTime();
				}
				axdom("#" + objID).val(printDate);
				//obj.modal.close();
				this.bindDateExpandClose(objID, objSeq, event);
			} else if (act == "month") {
				var myMonth = ids[ids.length - 2].number() - 1;
				if (obj.config.selectType == "m") {
					var yy = nDate.getFullYear();
					var dd = 1;
					obj.nDate = new Date(Date.UTC(yy, myMonth, dd));
					//obj.modal.close();
					this.bindDateExpandClose(objID, objSeq, event);
				} else {
					var yy = nDate.getFullYear();
					var dd = 1;
					obj.nDate = new Date(Date.UTC(yy, myMonth, dd));
					this.bindDateChangePage(objID, objSeq, obj.nDate, "d");
				}
			} else if (act == "year") {
				var myYear = ids[ids.length - 2];
				if (obj.config.selectType == "y") {
					var mm = 0;
					var dd = 1;
					obj.nDate = new Date(Date.UTC(myYear, mm, dd));
					//obj.modal.close();
					this.bindDateExpandClose(objID, objSeq, event);
				} else {
					var mm = 0;
					var dd = 1;
					obj.nDate = new Date(Date.UTC(myYear, mm, dd));
					this.bindDateChangePage(objID, objSeq, obj.nDate, "m");
				}
			}

		}
	},
	bindDateMobileModalFootClick: function (objID, objSeq, event) {
		var obj = this.objects[objSeq];
		var cfg = this.config;
		var eid = event.target.id.split(/_AX_/g);
		var eventTarget = event.target;
		var myTarget = this.getEventTarget({
			evt: eventTarget, evtIDs: eid,
			until: function (evt, evtIDs) { return (axdom(evt.parentNode).hasClass("AXDateButtonBox")) ? true : false; },
			find: function (evt, evtIDs) { return (axdom(evt).hasClass("AXBindDateConfirm")) ? true : false; }
		});
		if (myTarget) {
			var act = myTarget.id.split(/_AX_/g).last();
			if (act == "confirm") {
				obj.modal.close();
			}
		}
	},
	// -- bindDate for mobile
	bindDateExpandClose: function (objID, objSeq, event) {
		var obj = this.objects[objSeq];
		var cfg = this.config;

		if (!obj){
			//비활성 처리후 메소드 종료
			axdom(document).unbind("click.AXInput");
			//axdom("#" + objID).unbind("keydown.AXInput");
			return;
		}

		if (obj.modal && obj.modal.opened) { /* mobile modal close */
			var objVal = axdom("#" + objID).val();
			if (objVal == "") {

			} else {
				var separator = (obj.config.separator) ? obj.config.separator : "-";
				if (obj.config.selectType == "y") {
					axdom("#" + objID).val(obj.nDate.print("yyyy"));
				} else if (obj.config.selectType == "m") {
					axdom("#" + objID).val(obj.nDate.print("yyyy" + separator + "mm"));
				} else {
					//axdom("#"+objID).val(obj.nDate.print("yyyy"+separator+"mm"+separator+"dd"));
					printDate = obj.nDate.print("yyyy" + separator + "mm" + separator + "dd");
					if (obj.config.expandTime) {
						printDate += " " + obj.mycalendartime.getTime();
					}
					axdom("#" + objID).val(printDate);
				}
			}

			if (!obj.config.onChange) obj.config.onChange = obj.config.onchange;

			if (obj.config.onChange) {
				if (axdom.isFunction(obj.config.onChange)) {
					obj.config.onChange.call({
						objID: objID,
						value: axdom("#" + objID).val()
					});
				} else {
					var st_date, ed_date;
					if (obj.config.onChange.earlierThan) {
						st_date = axdom("#" + objID).val();
						ed_date = axdom("#" + obj.config.onChange.earlierThan).val();
					} else if (obj.config.onChange.laterThan) {
						ed_date = axdom("#" + objID).val();
						st_date = axdom("#" + obj.config.onChange.laterThan).val();
					}
					if (st_date != "" && ed_date != "") {
						if (st_date.date().diff(ed_date) < 0) {
							this.msgAlert(obj.config.onChange.err);
							axdom("#" + objID).val("");
							return;
						}
					}

					obj.config.onChange.onChange.call({
						objID: objID,
						value: axdom("#" + objID).val(),
						eventType: "expandClose"
					});
				}
			}

			if(!obj.bindTarget) obj.bindTarget = axdom("#" + objID);
			obj.bindTarget.change();

			obj.modal.close();
			//axdom("#" + objID).unbind("keydown.AXInput");

			//비활성 처리후 메소드 종료
			axdom(document).unbind("click.AXInput");
			//axdom("#" + objID).unbind("keydown.AXInput");
			return;
		}
		if (AXgetId(cfg.targetID + "_AX_" + objID + "_AX_expandBox")) {
			//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
			var objVal = axdom("#" + objID).val();

			if (objVal == "") {

			} else {
				var separator = (obj.config.separator) ? obj.config.separator : "-";
				if (obj.config.selectType == "y") {
					axdom("#" + objID).val(obj.nDate.print("yyyy"));
				} else if (obj.config.selectType == "m") {
					axdom("#" + objID).val(obj.nDate.print("yyyy" + separator + "mm"));
				} else {
					//axdom("#"+objID).val(obj.nDate.print("yyyy"+separator+"mm"+separator+"dd"));
					printDate = obj.nDate.print("yyyy" + separator + "mm" + separator + "dd");
					if (obj.config.expandTime) {
						printDate += " " + obj.mycalendartime.getTime();
					}
					axdom("#" + objID).val(printDate);
				}
			}

			if (!obj.config.onChange) obj.config.onChange = obj.config.onchange;

			if (obj.config.onChange) {
				if (axdom.isFunction(obj.config.onChange)) {
					obj.config.onChange.call({
						objID: objID,
						value: axdom("#" + objID).val()
					});
				} else {
					var st_date, ed_date;
					if (obj.config.onChange.earlierThan) {
						st_date = axdom("#" + objID).val();
						ed_date = axdom("#" + obj.config.onChange.earlierThan).val();
					} else if (obj.config.onChange.laterThan) {
						ed_date = axdom("#" + objID).val();
						st_date = axdom("#" + obj.config.onChange.laterThan).val();
					}
					if (st_date != "" && ed_date != "") {
						if (st_date.date().diff(ed_date) < 0) {
							this.msgAlert(obj.config.onChange.err);
							axdom("#" + objID).val("");
							return;
						}
					}
					if (obj.config.onChange.onChange) {
						obj.config.onChange.onChange.call({
							objID: objID,
							value: axdom("#" + objID).val()
						});
					} else if (obj.config.onChange.onchange) {
						obj.config.onChange.onchange.call({
							objID: objID,
							value: axdom("#" + objID).val()
						});
					}
				}
			}
			if(!obj.bindTarget) obj.bindTarget = axdom("#" + objID);
			obj.bindTarget.change();

			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox").remove(); // 개체 삭제 처리
			obj.expandBox_axdom = null;
			obj.mycalendartime = null;

			//비활성 처리후 메소드 종료
			axdom(document).unbind("click.AXInput");
			//axdom("#" + objID).unbind("keydown.AXInput");

			event.stopPropagation(); // disableevent
			return;
		}
	},
	bindDateInputBlur: function (objID, objSeq, event) {
		var obj = this.objects[objSeq];
		var cfg = this.config;
		var objVal = axdom("#" + objID).val();
		/*
		if(obj.config.expand === true) {
			//return false;
		}
		*/

		if (objVal == "") {

		}
		else
		{
			var clearDate = false;
			var nDate = (obj.nDate || new Date());
			var va = axdom("#" + objID).val().replace(/\D/gi, ""); //숫자 이외의 문자를 제거 합니다.
			if (va.search(/\d+/g) == -1) {
				clearDate = true;
			}

			if (clearDate) {
				axdom("#" + objID).val("");
			} else {
				var separator = (obj.config.separator) ? obj.config.separator : "-";
				if (obj.config.selectType == "y") {

					var yy = va.left(4).number();
					if (yy == 0) yy = nDate.getFullYear();
					if (yy < 1000) yy += 2000;
					var mm = nDate.getMonth();
					var dd = nDate.getDate();
					obj.nDate = new Date(Date.UTC(yy, mm, dd, 12));

					axdom("#" + objID).val(obj.nDate.print("yyyy"));

				} else if (obj.config.selectType == "m") {

					if (va.length > 4) {
						var yy = va.left(4).number();
						var mm = va.substr(4, 2).number() - 1;
						var dd = 1;
					} else {
						var yy = va.left(4).number();
						var mm = 0;
						var dd = 1;
					}
					if (yy == 0) yy = nDate.getFullYear();
					if (yy < 1000) yy += 2000;
					obj.nDate = new Date(Date.UTC(yy, mm, dd, 12));

					axdom("#" + objID).val(obj.nDate.print("yyyy" + separator + "mm"));

				} else {
					var needAlert = false;
					if (va.length > 5) {
						var yy = va.left(4).number();
						var mm = va.substr(4, 2).number() - 1;
						var dd = va.substr(6, 2).number();
					} else if (va.length > 3) {
						var yy = "20" + va.substr(0, 2);
						var mm = va.substr(2, 2).number() - 1;
						var dd = va.substr(4, 2).number();
					} else if (va.length > 2) {
						var yy = nDate.getFullYear();
						var mm = va.substr(0, 2).number() - 1;
						var dd = va.substr(2, 2).number();
					} else {
						var yy = nDate.getFullYear(); //va.left(4).number();
						var mm = nDate.getMonth();
						var dd = va.substr(0, 2).number();
					}
					if (yy == 0) needAlert = true;
					if (yy == 0) yy = nDate.getFullYear();
					if (yy < 1000) yy += 2000;

					obj.nDate = new Date(Date.UTC(yy, mm, dd, 12));

					 //trace(obj.nDate.getFullYear() != yy.number());
					 //trace(obj.nDate.getMonth() != mm.number());
					 //trace(obj.nDate.getDate(), dd.number());

					if (obj.nDate.getFullYear() != yy.number()
						|| obj.nDate.getMonth() != mm.number()
						|| obj.nDate.getDate() != dd.number()) {
						needAlert = true;
						obj.nDate = new Date();
					}

					printDate = obj.nDate.print("yyyy" + separator + "mm" + separator + "dd");
					
					if (obj.config.expandTime) {
						var hh, mi;
						try {
							printDate += " " + obj.mycalendartime.getTime();
							trace(printDate);
							
						} catch (e) {
							if (va.length > 11) { // hh,mm
								hh = va.substr(8, 2).number();
								mi = va.substr(10, 2).number();
							} else if (va.length > 9) {
								hh = va.substr(8, 2).number();
								mi = "00";
							} else {
								hh = "12";
								mi = "00";
							}
							printDate += " " + hh.setDigit(2) + ":" + mi.setDigit(2);
						}
					}

					if (needAlert) {
						this.msgAlert("날짜 형식이 올바르지 않습니다.");
					}
					axdom("#" + objID).val(printDate);
				}
			}
		}

		if (!obj.config.onChange) obj.config.onChange = obj.config.onchange;
		if (obj.config.onChange) {

			if (axdom("#" + objID).data("val") && axdom("#" + objID).data("val") != axdom("#" + objID).val()) {

				if (axdom.isFunction(obj.config.onChange)) {
					obj.config.onChange.call({
						objID: objID,
						value: axdom("#" + objID).val()
					});
				} else {
					var st_date, ed_date;
					if (obj.config.onChange.earlierThan) {
						st_date = axdom("#" + objID).val();
						ed_date = axdom("#" + obj.config.onChange.earlierThan).val();
					} else if (obj.config.onChange.laterThan) {
						ed_date = axdom("#" + objID).val();
						st_date = axdom("#" + obj.config.onChange.laterThan).val();
					}
					if (st_date != "" && ed_date != "") {
						if (st_date.date().diff(ed_date) < 0) {
							this.msgAlert(obj.config.onChange.err);
							axdom("#" + objID).val("");
						}
					}

					obj.config.onChange.onChange.call({
						objID: objID,
						value: axdom("#" + objID).val(),
						eventType: "blur"
					});
				}
				axdom("#" + objID).data("val", axdom("#" + objID).val());

			}
		}
		if(!obj.bindTarget) obj.bindTarget = axdom("#" + objID);
		obj.bindTarget.change();
		/* ie10 버그
		 axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox").remove(); // 개체 삭제 처리

		 //비활성 처리후 메소드 종료
		 axdom(document).unbind("click.AXInput");
		 axdom("#" + objID).unbind("keydown.AXInput");
		 */

		event.stopPropagation(); // disableevent
		return;
	},
	unbindDate: function (obj) {
		var cfg = this.config;
		var objID = obj.id;
		var objSeq = null;

		axf.each(this.objects, function (oidx, O) {
			if (this.id == objID) {
				objSeq = oidx;
				return false;
			}
		});

		if (objSeq != null) {
			var obj = this.objects[objSeq];

			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox").remove(); // 개체 삭제 처리

			//비활성 처리후 메소드 종료
			axdom(document).unbind("click.AXInput");
			axdom("#" + objID).unbind("keydown.AXInput");
		}

		var collect = [];
		var removeAnchorId;
		axf.each(this.objects, function () {
			if (this.id != obj.id) collect.push(this);
			else {
				removeAnchorId = this.anchorID;
			}
		});
		this.objects = collect;

		axdom("#" + removeAnchorId).remove();

	},
	bindDateTimeChange: function (objID, objSeq, myTime) {
		var obj = this.objects[objSeq];
		var cfg = this.config;
		var separator = (obj.config.separator) ? obj.config.separator : "-";
		var printDate = obj.nDate.print("yyyy" + separator + "mm" + separator + "dd");
		if (obj.config.expandTime) {
			printDate += " " + obj.mycalendartime.getTime();
		}
		axdom("#" + objID).val(printDate);
	},
	bindDateExpandBoxClick: function (objID, objSeq, event) {
		var obj = this.objects[objSeq];
		var cfg = this.config;
		var isDateClick = false;

		var eventTarget = event.target;
		var myTarget = this.getEventTarget({
			evt: eventTarget,
			until: function (evt, evtIDs) {
				return (evt.parentNode.tagName == "BODY") ? true : false;
			},
			find: function (evt, evtIDs) {
				if (!evt.id) return false;
				var checkID = cfg.targetID + "_AX_" + objID;
				if (evt.id == objID || evt.id.substr(0, checkID.length) == checkID) {
					return true;
				} else {
					return false;
				}
			}
		});

		isDateClick = (myTarget) ? true : false;
		if (!isDateClick) {
			this.bindDateExpandClose(objID, objSeq, event);
		} else {
            if (axdom(myTarget).hasClass("disabled")) { return; } // disabled 대상은 선택 불가

			var ids = myTarget.id.split(/_AX_/g);
			var ename = ids.last();

			var nDate = obj.nDate;
			var separator = (obj.config.separator) ? obj.config.separator : "-";
			if (ename == "expandPrev") {
				if (obj.mycalendarPageType == "d") {
					this.bindDateChangePage(objID, objSeq, nDate.add(-1, "m"), "d");
				} else if (obj.mycalendarPageType == "m") {
					this.bindDateChangePage(objID, objSeq, nDate.add(-1, "y"), "m");
				} else if (obj.mycalendarPageType == "y") {
					this.bindDateChangePage(objID, objSeq, nDate.add(-12, "y"), "y");
				}
			} else if (ename == "expandNext") {
				if (obj.mycalendarPageType == "d") {
					this.bindDateChangePage(objID, objSeq, nDate.add(1, "m"), "d");
				} else if (obj.mycalendarPageType == "m") {
					this.bindDateChangePage(objID, objSeq, nDate.add(1, "y"), "m");
				} else if (obj.mycalendarPageType == "y") {
					this.bindDateChangePage(objID, objSeq, nDate.add(12, "y"), "y");
				}
			} else if (ename == "controlYear") {
				this.bindDateChangePage(objID, objSeq, nDate, "y");
			} else if (ename == "controlMonth") {
				if (obj.config.selectType != "y") {
					this.bindDateChangePage(objID, objSeq, nDate, "m");
				}
			} else if (ename == "date") {
				//trace(ids[ids.length-2]);
				obj.nDate = ids[ids.length - 2].date();
				var printDate = obj.nDate.print("yyyy" + separator + "mm" + separator + "dd");
				if (obj.config.expandTime) {
					printDate += " " + obj.mycalendartime.getTime();
				}
				axdom("#" + objID).val(printDate);
				this.bindDateExpandClose(objID, objSeq, event);
			} else if (ename == "month") {
				var myMonth = ids[ids.length - 2].number() - 1;
				if (obj.config.selectType == "m") {
					var yy = nDate.getFullYear();
					var dd = 1;
					obj.nDate = new Date(Date.UTC(yy, myMonth, dd, 12));
					this.bindDateExpandClose(objID, objSeq, event);
				} else {
					var yy = nDate.getFullYear();
					var dd = 1;
					obj.nDate = new Date(Date.UTC(yy, myMonth, dd, 12));
					this.bindDateChangePage(objID, objSeq, obj.nDate, "d");
				}
			} else if (ename == "year") {
				var myYear = ids[ids.length - 2];
				if (obj.config.selectType == "y") {
					var mm = 0;
					var dd = 1;
					obj.nDate = new Date(Date.UTC(myYear, mm, dd, 12));
					this.bindDateExpandClose(objID, objSeq, event);
				} else {
					var mm = 0;
					var dd = 1;
					obj.nDate = new Date(Date.UTC(myYear, mm, dd, 12));
					this.bindDateChangePage(objID, objSeq, obj.nDate, "m");
				}
			}
		}
	},
	bindDateKeyup: function (objID, objSeq, event) {
		var obj = this.objects[objSeq];
		var cfg = this.config;
		if (obj.config.selectType == "y") {

		} else if (obj.config.selectType == "m") {

		} else {

		}
	},
	bindDateChangePage: function (objID, objSeq, setDate, pageType) {
		var obj = this.objects[objSeq];
		var cfg = this.config;
		var separator = (obj.config.separator) ? obj.config.separator : "-";

		if (pageType == "m") {
			//alert(setDate);
			obj.mycalendarPageType = "m";
			obj.nDate = setDate;
			obj.mycalendar.printMonthPage(setDate);
			var myYear = setDate.getFullYear();
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_controlYear").html(myYear + "년");
		} else if (pageType == "y") {
			obj.mycalendarPageType = "y";
			obj.nDate = setDate;
			obj.mycalendar.printYearPage(setDate.getFullYear());
			var myYear = setDate.getFullYear();
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_controlYear").html(myYear + "년");
		} else {
			obj.mycalendarPageType = "d";
			obj.nDate = setDate;
			obj.mycalendar.printDayPage(setDate);
			var myYear = setDate.getFullYear();
			var myMonth = (setDate.getMonth() + 1).setDigit(2);
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_controlYear").html(myYear + "년");
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_controlMonth").html(myMonth + "월");
		}

		if (obj.config.selectType == "y") {
			axdom("#" + objID).val(obj.nDate.print("yyyy"));
		} else if (obj.config.selectType == "m") {
			axdom("#" + objID).val(obj.nDate.print("yyyy" + separator + "mm"));
		} else {
			//axdom("#"+objID).val(obj.nDate.print("yyyy"+separator+"mm"+separator+"dd"));
			var printDate = obj.nDate.print("yyyy" + separator + "mm" + separator + "dd");
			if (obj.config.expandTime) {
				printDate += " " + obj.mycalendartime.getTime();
			}
			axdom("#" + objID).val(printDate);
		}
	},

	// twinDate
	bindTwinDate: function (objID, objSeq, option) {
		var cfg = this.config;
		var obj = this.objects[objSeq];

		if(!obj.bindAnchorTarget) obj.bindAnchorTarget = axdom("#" + cfg.targetID + "_AX_" + objID);
		if(!obj.bindTarget) obj.bindTarget = axdom("#" + objID);
		obj.bindTargetStart = axdom("#" + obj.config.startTargetID);

		var h = obj.bindAnchorTarget.data("height");
		var po = [];
		var handleLeft = 0;
		if(obj.config) handleLeft = (obj.config.handleLeft||0).number();

		po.push("<a " + obj.config.href + " id=\"" + cfg.targetID + "_AX_" + objID + "_AX_dateHandle\" class=\"" + cfg.anchorDateHandleClassName + "\" style=\"right:"+ (0-handleLeft) +"px;top:0px;width:" + h + "px;height:" + h + "px;\">handle</a>");
		obj.bindAnchorTarget.append(po.join(''));
		obj.bindAnchorTarget.show();

		var bindDateExpand = this.bindTwinDateExpand.bind(this);
		var bindTwinDateExpandClose = this.bindTwinDateExpandClose.bind(this);

		axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_dateHandle").unbind("click.AXInput").bind("click.AXInput", function (event) {
			if (AXgetId(cfg.targetID + "_AX_" + objID + "_AX_expandBox")) {
				bindTwinDateExpandClose(objID, objSeq, event);
			}else{
				bindDateExpand(objID, objSeq, true, event);
			}
		});
		obj.bindTarget.unbind("focus.AXInput").bind("focus.AXInput", function (event) {
			setTimeout(function() {
				obj.bindTarget.select();
			}, 1);
			/*
			 if(!AXgetId(cfg.targetID + "_AX_"+objID+"_AX_expandBox")){
			 bindDateExpand(objID, objSeq, false, event);
			 }
			 */
		});
		obj.bindTargetStart.unbind("focus.AXInput").bind("focus.AXInput", function (event) {
			setTimeout(function(){
				obj.bindTargetStart.select();
			}, 1);
			/*
			 if(!AXgetId(cfg.targetID + "_AX_"+objID+"_AX_expandBox")){
			 bindDateExpand(objID, objSeq, false, event);
			 }
			 */
		});


		var separator = (obj.config.separator) ? obj.config.separator : "-";
		axdom("#" + objID + ", #" + obj.config.startTargetID).unbind("keyup.AXInput").bind("keyup.AXInput", function (event) {
			//alert(this.value);
			if(event.keyCode == axf.Event.KEY_RETURN){
				//bindDateInputBlur(objID, objSeq, event);
				this.blur();
			}else if (event.keyCode != AXUtil.Event.KEY_BACKSPACE && event.keyCode != AXUtil.Event.KEY_DELETE && event.keyCode != AXUtil.Event.KEY_LEFT && event.keyCode != AXUtil.Event.KEY_RIGHT) {

				var va = this.value.replace(/\D/gi, ""); //숫자 이외의 문자를 제거 합니다.
				var _this = this;

				if (obj.config.selectType == "y") {
					if (va.length > 4) _this.value = va.left(4);
				} else if (obj.config.selectType == "m") {
					if (va.length == 4) {
						va = va + separator;
						_this.value = va;
					} else if (va.length > 4) {
						va = va.substr(0, 4) + separator + va.substr(4, 2);
						_this.value = va;
					}
				} else {
					if (va.length < 4) {
						_this.value = va;
					} else if (va.length <= 6) {
						va = va.substr(0, 4) + separator + va.substr(4, 2);
						_this.value = va;
					} else if (va.length <= 8) {
						va = va.substr(0, 4) + separator + va.substr(4, 2) + separator + va.substr(6, 2);
						_this.value = va;
					} else if (va.length <= 10) {
						if (obj.config.expandTime) {
							va = va.substr(0, 4) + separator + va.substr(4, 2) + separator + va.substr(6, 2) + " " + va.substr(8, 2);
							_this.value = va;
						}else{
							va = va.substr(0, 4) + separator + va.substr(4, 2) + separator + va.substr(6, 2);
							_this.value = va;
						}
					} else if (va.length > 10) {
						if (obj.config.expandTime) {
							va = va.substr(0, 4) + separator + va.substr(4, 2) + separator + va.substr(6, 2) + " " + va.substr(8, 2) + ":" + va.substr(10, 2);
							_this.value = va;
						}else{
							va = va.substr(0, 4) + separator + va.substr(4, 2) + separator + va.substr(6, 2);
							_this.value = va;
						}
					}
				}
			}
		});

		var bindTwinDateInputBlur = this.bindTwinDateInputBlur.bind(this);
		obj.bindTarget.unbind("blur.AXInput").bind("blur.AXInput", function (event) {
			bindTwinDateInputBlur(objID, objSeq, event, 2);
		});
		axdom("#" + obj.config.startTargetID).unbind("blur.AXInput").bind("blur.AXInput", function (event) {
			bindTwinDateInputBlur(objID, objSeq, event, 1);
		});

		var objVal1 = obj.bindTargetStart.val();
		var objVal2 = obj.bindTarget.val();
		var myDate1 = objVal1.date(separator);
		var myDate2 = objVal2.date(separator);
		obj.nDate1 = myDate1;
		obj.nDate2 = myDate2;
	},
	bindTwinDateExpand: function (objID, objSeq, isToggle, event) {
		var cfg = this.config;
        var obj = this.objects[objSeq];

		for (var OO, oidx = 0, __arr = this.objects; (oidx < __arr.length && (OO = __arr[oidx])); oidx++) {
			if(OO.expandBox_axdom){
				OO.expandBox_axdom.remove();
				OO.expandBox_axdom = null;
			}
		}

		var obj = this.objects[objSeq];

		if(obj.bindAnchorTarget.attr("disable") == "disable" || obj.bindTarget.attr("disable") == "disable"){
			return false;
		}

		var separator = (obj.config.separator) ? obj.config.separator : "-";

		//Selector Option box Expand
		if (isToggle) { // 활성화 여부가 토글 이면
			if (AXgetId(cfg.targetID + "_AX_" + objID + "_AX_expandBox")) {
				axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox").remove(); // 개체 삭제 처리
				axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_Handle").removeClass("on");
				//비활성 처리후 메소드 종료
				return;
			}
		}
		axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox").remove(); // 활성화 전에 개체 삭제 처리
		//axdom("#"+cfg.targetID + "_AX_" + objID+"_AX_Handle").removeClass("on");

		//Expand Box 생성 구문 작성
		var objVal1 = axdom("#" + obj.config.startTargetID).val();
		var objVal2 = axdom("#" + objID).val();

		if (obj.config.expandTime) obj.config.selectType == "d"; //시간 확장 시 selectType : d 로 고정

		var today = new Date();
		var objVal1Empty = false;
		if (obj.config.selectType == "y") {
			if (objVal1 != "") {
				objVal1 = objVal1.left(4) + separator + "01" + separator + "02";
			} else {
				objVal1Empty = true;
			}
			if (objVal2 != "") {
				objVal2 = objVal2.left(4) + separator + "01" + separator + "02";
			}
		} else if (obj.config.selectType == "m") {
			if (objVal1 != "") {
				objVal1 = objVal1 + separator + "02";
			} else {
				objVal1Empty = true;
			}
			if (objVal2 != "") {
				objVal2 = objVal2 + separator + "02";
			}
		}
		if (AXUtil.isEmpty(objVal1)) {
			objVal1 = "";
			objVal1Empty = true;
		}

		/*var myDate1 = (objVal1Empty) ? objVal1.date(separator).add(-1, "m") : objVal1.date(separator);*/
		var myDate1 = objVal1.date(separator);
		var myDate2 = objVal2.date(separator);
		var myYear1 = myDate1.getFullYear();
		var myYear2 = myDate2.getFullYear();
		var myMonth1 = (myDate1.getMonth() + 1).setDigit(2);
		var myMonth2 = (myDate2.getMonth() + 1).setDigit(2);
		var buttonText = obj.config.buttonText || "OK";
		var po = [];
		po.push("<div id=\"" + cfg.targetID + "_AX_" + objID + "_AX_expandBox\" class=\"" + cfg.bindTwinDateExpandBoxClassName + "\" style=\"z-index:5100;\">");
		po.push("	<div>");
		po.push("		<table cellpadding=\"0\" cellspacing=\"0\">");
		po.push("			<tbody>");
		po.push("				<tr>");
		po.push("					<td style=\"padding-right:3px;\">");
		po.push("					<div class=\"dateTypeName\">START</div>");
		po.push("					<div class=\"dateControlBox\">");
		po.push("						<a " + obj.config.href + " class=\"yearbutton\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_controlYear1\">" + myYear1 + "년</a>");
		po.push("						<a " + obj.config.href + " class=\"monthbutton\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_controlMonth1\">" + myMonth1 + "월</a>");
		po.push("						<a " + obj.config.href + " class=\"prevbutton\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_expandPrev1\">P</a>");
		po.push("						<a " + obj.config.href + " class=\"nextbutton\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_expandNext1\">N</a>");
		po.push("					</div>");
		po.push("					<div class=\"dateDisplayBox\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_displayBox1\"></div>");
		if (obj.config.expandTime) { //시간 선택 기능 확장시
			po.push("					<div class=\"timeDisplayBox\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_displayTimeBox1\"></div>");
		}
		po.push("					</td>");
		po.push("					<td style=\"padding-left:3px;\">");
		po.push("					<div class=\"dateTypeName\">END</div>");
		po.push("					<div class=\"dateControlBox\">");
		po.push("						<a " + obj.config.href + " class=\"yearbutton\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_controlYear2\">" + myYear2 + "년</a>");
		po.push("						<a " + obj.config.href + " class=\"monthbutton\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_controlMonth2\">" + myMonth2 + "월</a>");
		po.push("						<a " + obj.config.href + " class=\"prevbutton\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_expandPrev2\">P</a>");
		po.push("						<a " + obj.config.href + " class=\"nextbutton\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_expandNext2\">N</a>");
		po.push("					</div>");
		po.push("					<div class=\"dateDisplayBox\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_displayBox2\"></div>");
		if (obj.config.expandTime) { //시간 선택 기능 확장시
			po.push("					<div class=\"timeDisplayBox\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_displayTimeBox2\"></div>");
		}
		po.push("					</td>");
		po.push("				</tr>");
		po.push("			</tbody>");
		po.push("		</table>");
		po.push("	</div>");
		po.push("	<div style=\"padding-top:5px;\" align=\"center\">");
		po.push("		<input type=\"button\" value=\"" + buttonText + "\" class=\"AXButton Classic W70\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_closeButton\">");
		po.push("	</div>");
		po.push("</div>");
		axdom(document.body).append(po.join('')); // bindDateExpandBox append
		//axdom("#"+cfg.targetID + "_AX_" + objID+"_AX_Handle").addClass("on");

		// AXCalendar display
		obj.nDate1 = myDate1;
		obj.mycalendar1 = new AXCalendar();
		obj.mycalendar1.setConfig({
			targetID: cfg.targetID + "_AX_" + objID + "_AX_displayBox1",
			basicDate: myDate1,
            minDate: obj.config.minDate,
            maxDate: obj.config.maxDate,
            onBeforeShowDay: obj.config.onBeforeShowDay
		});

		obj.nDate2 = myDate2;
		obj.mycalendar2 = new AXCalendar();
		obj.mycalendar2.setConfig({
			targetID: cfg.targetID + "_AX_" + objID + "_AX_displayBox2",
			basicDate: myDate2,
            minDate: obj.config.minDate,
            maxDate: obj.config.maxDate,
            onBeforeShowDay: obj.config.onBeforeShowDay
		});

		if (obj.config.expandTime) { //시간 선택 기능 확장시
			obj.nDate1 = myDate1;
			var mycalendartimeChange1 = this.bindTwinDateTimeChange.bind(this);
			obj.mycalendartimeChange1 = function (myTime) {
				mycalendartimeChange1(objID, objSeq, myTime, 1);
			};
			obj.mycalendartime1 = new AXCalendar();
			obj.mycalendartime1.setConfig({
				targetID: cfg.targetID + "_AX_" + objID + "_AX_displayTimeBox1",
				onChange: obj.mycalendartimeChange1
			});
			var apm = "AM";
			var myTimes = myDate1.print("hh:mi").split(":");
			var myHH = myTimes[0].number();
			var myMI = myTimes[1];
			if (myHH > 12) {
				apm = "PM";
				myHH -= 12;
			}
			obj.mycalendartime1.printTimePage(myHH.setDigit(2) + ":" + myMI.setDigit(2) + " " + apm);

			obj.nDate2 = myDate2;
			var mycalendartimeChange2 = this.bindTwinDateTimeChange.bind(this);
			obj.mycalendartimeChange2 = function (myTime) {
				mycalendartimeChange2(objID, objSeq, myTime, 2);
			};
			obj.mycalendartime2 = new AXCalendar();
			obj.mycalendartime2.setConfig({
				targetID: cfg.targetID + "_AX_" + objID + "_AX_displayTimeBox2",
				onChange: obj.mycalendartimeChange2
			});
			var apm = "AM";
			var myTimes = myDate2.print("hh:mi").split(":");
			var myHH = myTimes[0].number();
			var myMI = myTimes[1];
			if (myHH > 12) {
				apm = "PM";
				myHH -= 12;
			}
			obj.mycalendartime2.printTimePage(myHH.setDigit(2) + ":" + myMI.setDigit(2) + " " + apm);
		}

		var printDate1 = "";
		var printDate2 = "";
		if (obj.config.selectType == "y") {
			obj.mycalendarPageType = "y";
			obj.mycalendar1.printYearPage(myDate1.print("yyyy"));
			obj.mycalendar2.printYearPage(myDate2.print("yyyy"));
			printDate1 = myDate1.print("yyyy");
			printDate2 = myDate2.print("yyyy");
			axdom("#" + obj.config.startTargetID).val(printDate1);
			axdom("#" + objID).val(printDate2);
		} else if (obj.config.selectType == "m") {
			obj.mycalendarPageType = "m";
			obj.mycalendar1.printMonthPage(myDate1);
			obj.mycalendar2.printMonthPage(myDate2);
			printDate1 = myDate1.print("yyyy" + separator + "mm");
			printDate2 = myDate2.print("yyyy" + separator + "mm");
			axdom("#" + obj.config.startTargetID).val(printDate1);
			axdom("#" + objID).val(printDate2);
		} else {
			obj.mycalendarPageType = "d";
			obj.mycalendar1.printDayPage(myDate1);
			obj.mycalendar2.printDayPage(myDate2);
			printDate1 = myDate1.print("yyyy" + separator + "mm" + separator + "dd");
			printDate2 = myDate2.print("yyyy" + separator + "mm" + separator + "dd");
			if (obj.config.expandTime) {
				printDate1 += " " + myDate1.print("hh:mi");
				printDate2 += " " + myDate2.print("hh:mi");
			}
			axdom("#" + obj.config.startTargetID).val(printDate1);
			axdom("#" + objID).val(printDate2);
		}
		// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AXCalendar display

		// expandBox set Position ~~~~~~~~~~~~~~~~~~~~~~~~~
		var expandBox = axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox");
		var expBoxWidth = expandBox.outerWidth();
		var expBoxHeight = expandBox.outerHeight();
		var offset = axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_dateHandle").offset();
		var handleWidth = axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_dateHandle").width();
		var handleHeight = axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_dateHandle").height();



		var css = {};
		if (obj.config.align == "left") {
			css.left = offset.left.number() - expBoxWidth;
		} else if (obj.config.align == "center") {
			css.left = offset.left.number() - expBoxWidth / 2 + handleWidth;
		} else if (obj.config.align == "right") {
			css.left = offset.left.number() + handleWidth;
		} else {
			css.left = offset.left.number() + handleWidth;
		}
		if (obj.config.valign == "top") {
			css.top = offset.top;
		} else if (obj.config.valign == "middle") {
			css.top = offset.top.number() - expBoxHeight / 2 + handleWidth / 2;
		} else if (obj.config.valign == "bottom") {
			css.top = offset.top.number() - expBoxHeight + handleWidth;
		} else {
			css.top = offset.top;
		}

        if (obj.config.customPos != undefined) {
            css.top = css.top + obj.config.customPos.top;
            css.left = css.left + obj.config.customPos.left;
        }

		var pElement = expandBox.offsetParent();
		var pBox = { width: pElement.width(), height: pElement.height() };

		var clientHeight = (AXUtil.docTD == "Q") ? document.body.scrollHeight : document.documentElement.scrollHeight;
		var clienWidth = (AXUtil.docTD == "Q") ? document.body.scrollWidth : document.documentElement.scrollWidth;
		if (clienWidth > pBox.width) pBox.width = clienWidth;
		if (clientHeight > pBox.height) pBox.height = clientHeight;
		var _box = { width: expandBox.outerWidth() + 10, height: expandBox.outerHeight() + 10 };

		if ((_box.height.number() + css.top.number()) > pBox.height) {
			css.top = css.top - ((_box.height.number() + css.top.number()) - pBox.height);
		}
		if (css.top < 0) {
			css.top = 0;
		}

		if ((_box.width.number() + css.left.number()) > pBox.width) {
			css.left = css.left - ((_box.width.number() + css.left.number()) - pBox.width);
		}
		if (css.left < 0) {
			css.left = 0;
		}

		expandBox.css(css);
		obj.expandBox_axdom = expandBox;

		// ~~~~~~~~~~~~~~~~~~~~~~~~~ expandBox set Position ~~~~~~~~~~~~~~~~~~~~~~~~~

		var bindTwinDateExpandBoxClick = this.bindTwinDateExpandBoxClick.bind(this);
		obj.documentclickEvent = function (event) {
			bindTwinDateExpandBoxClick(objID, objSeq, event);
		}
		var bindTwinDateKeyup = this.bindTwinDateKeyup.bind(this);
		obj.inputKeyup = function (event) {
			bindTwinDateKeyup(objID, objSeq, event);
		}

		if (obj.config.selectType == "y") {
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_controlYear1").css({ left: "70px" });
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_controlMonth1").hide();
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_controlYear2").css({ left: "70px" });
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_controlMonth2").hide();
		}

		axdom(document).unbind("click.AXInput").bind("click.AXInput", obj.documentclickEvent);
		axdom("#" + objID).unbind("keydown.AXInput").bind("keydown.AXInput", obj.inputKeyup);
		var bindTwinDateExpandClose = this.bindTwinDateExpandClose.bind(this);
		axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_closeButton").unbind("click.AXInput").bind("click.AXInput", function (event) {
			bindTwinDateExpandClose(objID, objSeq, event);
		});
	},
	bindTwinDateTimeChange: function (objID, objSeq, myTime, seq) {
		var obj = this.objects[objSeq];
		var cfg = this.config;
		if (seq == 1) {
			var separator = (obj.config.separator) ? obj.config.separator : "-";
			var printDate = obj.nDate1.print("yyyy" + separator + "mm" + separator + "dd");
			if (obj.config.expandTime) {
				printDate += " " + obj.mycalendartime1.getTime();
			}
			axdom("#" + obj.config.startTargetID).val(printDate);
		} else {
			var separator = (obj.config.separator) ? obj.config.separator : "-";
			var printDate = obj.nDate2.print("yyyy" + separator + "mm" + separator + "dd");
			if (obj.config.expandTime) {
				printDate += " " + obj.mycalendartime2.getTime();
			}
			axdom("#" + objID).val(printDate);
		}
	},
	bindTwinDateExpandClose: function (objID, objSeq, event) {
		var obj = this.objects[objSeq];
		var cfg = this.config;
		//trace("bindTwinDateExpandClose");
		if (AXgetId(cfg.targetID + "_AX_" + objID + "_AX_expandBox")) {

			//axdom("#"+cfg.targetID+"_AX_"+objID+"_AX_Handle").removeClass("on");
			//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
			var objVal1 = axdom("#" + obj.config.startTargetID).val();
			var objVal2 = axdom("#" + objID).val();
			var separator = (obj.config.separator) ? obj.config.separator : "-";

			if (obj.config.selectType == "y") {
				if (objVal1.length < 4) axdom("#" + obj.config.startTargetID).val(obj.nDate1.print("yyyy"));
				else {
					objVal1 = objVal1.left(4);
					axdom("#" + obj.config.startTargetID).val(objVal1);
				}
				if (objVal2.length < 4) axdom("#" + objID).val(obj.nDate2.print("yyyy"));
				else {
					objVal2 = objVal2.left(4);
					axdom("#" + objID).val(objVal2);
				}
			} else if (obj.config.selectType == "m") {
				axdom("#" + obj.config.startTargetID).val(obj.nDate1.print("yyyy" + separator + "mm"));
				axdom("#" + objID).val(obj.nDate2.print("yyyy" + separator + "mm"));
			} else {
				printDate1 = obj.nDate1.print("yyyy" + separator + "mm" + separator + "dd");
				printDate2 = obj.nDate2.print("yyyy" + separator + "mm" + separator + "dd");
				if (obj.config.expandTime) {
					printDate1 += " " + obj.mycalendartime1.getTime();
					printDate2 += " " + obj.mycalendartime2.getTime();
				}
				axdom("#" + obj.config.startTargetID).val(printDate1);
				axdom("#" + objID).val(printDate2);
			}

			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox").remove(); // 개체 삭제 처리

			if (!obj.config.onChange) obj.config.onChange = obj.config.onchange;
			if (obj.config.onChange) {
				obj.config.onChange.call({
					ST_objID: obj.config.startTargetID,
					ED_objID: objID,
					ST_value: axdom("#" + obj.config.startTargetID).val(),
					ED_value: axdom("#" + objID).val()
				});
			}
			if(!obj.bindTarget) obj.bindTarget = axdom("#" + objID);
			obj.bindTarget.change();

			obj.expandBox_axdom = null;
			//비활성 처리후 메소드 종료
			axdom(document).unbind("click.AXInput");
			axdom("#" + objID).unbind("keydown.AXInput");

			event.stopPropagation(); // disableevent
			return;
		}
	},
	bindTwinDateExpandBoxClick: function (objID, objSeq, event) {
		var obj = this.objects[objSeq];
		var cfg = this.config;
		var isDateClick = false;

		var eventTarget = event.target;
		var myTarget = this.getEventTarget({
			evt: eventTarget,
			until: function (evt, evtIDs) {
				return (evt.parentNode.tagName == "body") ? true : false;
			},
			find: function (evt, evtIDs) {
				if (evt.id == "" || evt.id == null || evt.id == undefined) return false;
				if (evt.id == objID || evt.id == obj.config.startTargetID || (evt.id.substr(0, cfg.targetID.length) == cfg.targetID && (evt.id.search(objID) != -1 || evt.id.search(obj.config.startTargetID) != -1))) {
					return true;
				} else {
					return false;
				}
			}
		});

		isDateClick = (myTarget) ? true : false;
		if (!isDateClick) {
			this.bindTwinDateExpandClose(objID, objSeq, event);
		} else {
            if (axdom(myTarget).hasClass("disabled")) { return; } // disabled 대상은 선택 불가

			var ids = myTarget.id.split(/_AX_/g);
			var ename = ids.last();
			var boxType = ids[ids.length - 3];
			var nDate1 = obj.nDate1;
			var nDate2 = obj.nDate2;
			var separator = (obj.config.separator) ? obj.config.separator : "-";
			if (ename == "expandPrev1") {
				if (obj.mycalendarPageType == "d") {
					this.bindTwinDateChangePage(objID, objSeq, 1, nDate1.add(-1, "m"), "d");
				} else if (obj.mycalendarPageType == "m") {
					this.bindTwinDateChangePage(objID, objSeq, 1, nDate1.add(-1, "y"), "m");
				} else if (obj.mycalendarPageType == "y") {
					this.bindTwinDateChangePage(objID, objSeq, 1, nDate1.add(-12, "y"), "y");
				}
			} else if (ename == "expandPrev2") {
				if (obj.mycalendarPageType == "d") {
					this.bindTwinDateChangePage(objID, objSeq, 2, nDate2.add(-1, "m"), "d");
				} else if (obj.mycalendarPageType == "m") {
					this.bindTwinDateChangePage(objID, objSeq, 2, nDate2.add(-1, "y"), "m");
				} else if (obj.mycalendarPageType == "y") {
					this.bindTwinDateChangePage(objID, objSeq, 2, nDate2.add(-12, "y"), "y");
				}
			} else if (ename == "expandNext1") {
				if (obj.mycalendarPageType == "d") {
					this.bindTwinDateChangePage(objID, objSeq, 1, nDate1.add(1, "m"), "d");
				} else if (obj.mycalendarPageType == "m") {
					this.bindTwinDateChangePage(objID, objSeq, 1, nDate1.add(1, "y"), "m");
				} else if (obj.mycalendarPageType == "y") {
					this.bindTwinDateChangePage(objID, objSeq, 1, nDate1.add(12, "y"), "y");
				}
			} else if (ename == "expandNext2") {
				if (obj.mycalendarPageType == "d") {
					this.bindTwinDateChangePage(objID, objSeq, 2, nDate2.add(1, "m"), "d");
				} else if (obj.mycalendarPageType == "m") {
					this.bindTwinDateChangePage(objID, objSeq, 2, nDate2.add(1, "y"), "m");
				} else if (obj.mycalendarPageType == "y") {
					this.bindTwinDateChangePage(objID, objSeq, 2, nDate2.add(12, "y"), "y");
				}
			} else if (ename == "controlYear1") {
				this.bindTwinDateChangePage(objID, objSeq, 1, nDate1, "y");
			} else if (ename == "controlYear2") {
				this.bindTwinDateChangePage(objID, objSeq, 2, nDate2, "y");
			} else if (ename == "controlMonth1") {
				if (obj.config.selectType != "y") {
					this.bindTwinDateChangePage(objID, objSeq, 1, nDate1, "m");
				}
			} else if (ename == "controlMonth2") {
				if (obj.config.selectType != "y") {
					this.bindTwinDateChangePage(objID, objSeq, 2, nDate2, "m");
				}
			} else if (ename == "date") {
				if (boxType == "displayBox1") {
					obj.nDate1 = ids[ids.length - 2].date();
					var printDate = obj.nDate1.print("yyyy" + separator + "mm" + separator + "dd");
					if (obj.config.expandTime) {
						printDate += " " + obj.mycalendartime1.getTime();
					}
					axdom("#" + obj.config.startTargetID).val(printDate);
					obj.mycalendar1.dayPageSetDay(obj.nDate1);
				} else {
					obj.nDate2 = ids[ids.length - 2].date();
					var printDate = obj.nDate2.print("yyyy" + separator + "mm" + separator + "dd");
					if (obj.config.expandTime) {
						printDate += " " + obj.mycalendartime2.getTime();
					}
					axdom("#" + objID).val(printDate);
					obj.mycalendar2.dayPageSetDay(obj.nDate2);
				}

				if (obj.nDate1.diff(obj.nDate2) < 0) {
					if (boxType == "displayBox1") {
						obj.nDate2 = obj.nDate1;
						var printDate = obj.nDate2.print("yyyy" + separator + "mm" + separator + "dd");
						if (obj.config.expandTime) {
							printDate += " " + obj.mycalendartime2.getTime();
						}
						axdom("#" + objID).val(printDate);
						obj.mycalendar2.dayPageSetDay(obj.nDate2);
					} else {
						obj.nDate1 = obj.nDate2;
						var printDate = obj.nDate1.print("yyyy" + separator + "mm" + separator + "dd");
						if (obj.config.expandTime) {
							printDate += " " + obj.mycalendartime1.getTime();
						}
						axdom("#" + obj.config.startTargetID).val(printDate);
						obj.mycalendar1.dayPageSetDay(obj.nDate1);
					}
				}

			} else if (ename == "month") {
				var myMonth = ids[ids.length - 2].number() - 1;
				if (boxType == "displayBox1") {
					if (obj.config.selectType == "m") {
						var yy = nDate1.getFullYear();
						var dd = nDate1.getDate();
						obj.nDate1 = new Date(Date.UTC(yy, myMonth, dd));
						var printDate = obj.nDate1.print("yyyy" + separator + "mm");
						axdom("#" + obj.config.startTargetID).val(printDate);
						//this.bindTwinDateExpandClose(objID, objSeq, event);
						obj.mycalendar1.monthPageSetMonth(obj.nDate1);
					} else {
						var yy = nDate1.getFullYear();
						var dd = nDate1.getDate();
						obj.nDate1 = new Date(Date.UTC(yy, myMonth, dd));
						//trace("start ----");
						this.bindTwinDateChangePage(objID, objSeq, 1, obj.nDate1, "d");
					}
				} else {
					if (obj.config.selectType == "m") {
						var yy = nDate2.getFullYear();
						var dd = nDate2.getDate();
						obj.nDate2 = new Date(Date.UTC(yy, myMonth, dd));
						var printDate = obj.nDate2.print("yyyy" + separator + "mm");
						axdom("#" + objID).val(printDate);
						obj.mycalendar2.monthPageSetMonth(obj.nDate2);
					} else {
						var yy = nDate2.getFullYear();
						var dd = nDate2.getDate();
						obj.nDate2 = new Date(Date.UTC(yy, myMonth, dd));
						this.bindTwinDateChangePage(objID, objSeq, 2, obj.nDate2, "d");
					}
				}

				if (obj.config.selectType == "m") {
					if (obj.nDate1.diff(obj.nDate2) < 0) {
						obj.nDate2 = obj.nDate1;
						var printDate = obj.nDate2.print("yyyy" + separator + "mm");
						axdom("#" + objID).val(printDate);
						axdom("#" + obj.config.startTargetID).val(printDate);
						obj.mycalendar2.monthPageSetMonth(obj.nDate2);
					}
				}


			} else if (ename == "year") {
				var myYear = ids[ids.length - 2];
				if (boxType == "displayBox1") {
					if (obj.config.selectType == "y") {
						var mm = nDate1.getMonth();
						var dd = nDate1.getDate();
						obj.nDate1 = new Date(Date.UTC(myYear, mm, dd));
						var printDate = obj.nDate1.print("yyyy");
						axdom("#" + obj.config.startTargetID).val(printDate);
						//this.bindTwinDateExpandClose(objID, objSeq, event);
						obj.mycalendar1.yearPageSetYear(obj.nDate1);
					} else {
						var mm = nDate1.getMonth();
						var dd = nDate1.getDate();
						obj.nDate1 = new Date(Date.UTC(myYear, mm, dd));
						this.bindTwinDateChangePage(objID, objSeq, 1, obj.nDate1, "m");
					}
				} else {
					if (obj.config.selectType == "y") {
						var mm = nDate2.getMonth();
						var dd = nDate2.getDate();
						obj.nDate2 = new Date(Date.UTC(myYear, mm, dd));
						var printDate = obj.nDate2.print("yyyy");
						axdom("#" + objID).val(printDate);
						//this.bindTwinDateExpandClose(objID, objSeq, event);
						obj.mycalendar2.yearPageSetYear(obj.nDate2);
					} else {
						var mm = nDate2.getMonth();
						var dd = nDate2.getDate();
						obj.nDate2 = new Date(Date.UTC(myYear, mm, dd));
						this.bindTwinDateChangePage(objID, objSeq, 2, obj.nDate2, "m");
					}
				}

				if (obj.config.selectType == "y") {
					if (obj.nDate1.print("yyyy").number() > obj.nDate2.print("yyyy").number()) {
						obj.nDate2 = obj.nDate1;
						var printDate = obj.nDate2.print("yyyy");
						axdom("#" + obj.config.startTargetID).val(printDate);
						axdom("#" + objID).val(printDate);
						obj.mycalendar2.yearPageSetYear(obj.nDate2);
					}
				}
			}
		}
	},
	bindTwinDateKeyup: function (objID, objSeq, event) {
		//trace(event.keyCode);
		if (obj.config.selectType == "y") {

		} else if (obj.config.selectType == "m") {

		} else {

		}
	},
	bindTwinDateChangePage: function (objID, objSeq, objType, setDate, pageType) {
		var obj = this.objects[objSeq];
		var cfg = this.config;
		var separator = (obj.config.separator) ? obj.config.separator : "-";

		if (pageType == "m") {
			if (objType == 1) {
				//obj.mycalendarPageType = "m";
				obj.nDate1 = setDate;
				obj.mycalendar1.printMonthPage(setDate);
				var myYear = setDate.getFullYear();
				axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_controlYear1").html(myYear + "년");
			} else {
				//obj.mycalendarPageType = "m";
				obj.nDate2 = setDate;
				obj.mycalendar2.printMonthPage(setDate);
				var myYear = setDate.getFullYear();
				axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_controlYear2").html(myYear + "년");
			}
		} else if (pageType == "y") {
			if (objType == 1) {
				//obj.mycalendarPageType = "y";
				obj.nDate1 = setDate;
				obj.mycalendar1.printYearPage(setDate.getFullYear());
				var myYear = setDate.getFullYear();
				axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_controlYear1").html(myYear + "년");
			} else {
				//obj.mycalendarPageType = "y";
				obj.nDate2 = setDate;
				obj.mycalendar2.printYearPage(setDate.getFullYear());
				var myYear = setDate.getFullYear();
				axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_controlYear2").html(myYear + "년");
			}
		} else {
			//obj.mycalendarPageType = "d";

			//trace({objID:objID, objSeq:objSeq, objType:objType, setDate:setDate, pageType:pageType});

			if (objType == 1) {
				obj.nDate1 = setDate;
				obj.mycalendar1.printDayPage(setDate);
				var myYear = setDate.getFullYear();
				var myMonth = (setDate.getMonth() + 1).setDigit(2);
				axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_controlYear1").html(myYear + "년");
				axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_controlMonth1").html(myMonth + "월");
			} else {
				obj.nDate2 = setDate;
				obj.mycalendar2.printDayPage(setDate);
				var myYear = setDate.getFullYear();
				var myMonth = (setDate.getMonth() + 1).setDigit(2);
				axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_controlYear2").html(myYear + "년");
				axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_controlMonth2").html(myMonth + "월");
			}
		}

		if (objType == 1) {
			if (obj.config.selectType == "y") {
				axdom("#" + obj.config.startTargetID).val(obj.nDate1.print("yyyy"));
			} else if (obj.config.selectType == "m") {
				axdom("#" + obj.config.startTargetID).val(obj.nDate1.print("yyyy" + separator + "mm"));
			} else {
				var printDate = obj.nDate1.print("yyyy" + separator + "mm" + separator + "dd");
				if (obj.config.expandTime) {
					printDate += " " + obj.mycalendartime1.getTime();
				}
				axdom("#" + obj.config.startTargetID).val(printDate);
			}
		} else {
			if (obj.config.selectType == "y") {
				axdom("#" + objID).val(obj.nDate2.print("yyyy"));
			} else if (obj.config.selectType == "m") {
				axdom("#" + objID).val(obj.nDate2.print("yyyy" + separator + "mm"));
			} else {
				var printDate = obj.nDate2.print("yyyy" + separator + "mm" + separator + "dd");
				if (obj.config.expandTime) {
					printDate += " " + obj.mycalendartime2.getTime();
				}
				axdom("#" + objID).val(printDate);
			}
		}
	},
	bindTwinDateInputBlur: function (objID, objSeq, event, seq) {
		var obj = this.objects[objSeq];
		var cfg = this.config;
		var objVal, targetObjID;
		if (seq == 1) {
			targetObjID = obj.config.startTargetID;
			objVal = axdom("#" + obj.config.startTargetID).val();
		} else {
			targetObjID = objID;
			objVal = axdom("#" + objID).val();
		}

		if (objVal == "") {

		}
		else
		{
			var clearDate = false;
			var nDate = (obj["nDate" + seq] || new Date());
			var va = axdom("#" + targetObjID).val().replace(/\D/gi, ""); //숫자 이외의 문자를 제거 합니다.
			if (va.search(/\d+/g) == -1) {
				clearDate = true;
			}

			if (clearDate) {
				axdom("#" + targetObjID).val("");
			} else {
				var separator = (obj.config.separator) ? obj.config.separator : "-";
				if (obj.config.selectType == "y") {

					var yy = va.left(4).number();
					if (yy == 0) yy = nDate.getFullYear();
					if (yy < 1000) yy += 2000;
					var mm = nDate.getMonth();
					var dd = nDate.getDate();
					obj["nDate" + seq] = new Date(Date.UTC(yy, mm, dd, 12));

					axdom("#" + targetObjID).val(obj["nDate" + seq].print("yyyy"));

				}
				else
				if (obj.config.selectType == "m")
				{

					if (va.length > 5) {
						var yy = va.left(4).number();
						var mm = va.substr(4, 2).number() - 1;
						var dd = 1;
					} else {
						var yy = va.left(4).number();
						var mm = 0;
						var dd = 1;
					}
					if (yy == 0) yy = nDate.getFullYear();
					if (yy < 1000) yy += 2000;
					obj["nDate" + seq] = new Date(Date.UTC(yy, mm, dd, 12));

					axdom("#" + targetObjID).val(obj["nDate" + seq].print("yyyy" + separator + "mm"));

				}
				else
				{
					var needAlert = false;
					var yy, mm, dd, hh, mi;
					if (va.length > 7) {
						yy = va.left(4).number();
						mm = va.substr(4, 2).number() - 1;
						dd = va.substr(6, 2).number();
					} else if (va.length > 4) {
						yy = "20" + va.substr(0, 2);
						mm = va.substr(2, 2).number() - 1;
						dd = va.substr(4, 2).number();
					} else if (va.length > 2) {
						yy = nDate.getFullYear();
						mm = va.substr(0, 2).number() - 1;
						dd = va.substr(2, 2).number();
					} else {
						yy = nDate.getFullYear(); //va.left(4).number();
						mm = nDate.getMonth();
						dd = va.substr(0, 2).number();
					}

					if (va.length >= 9){
						hh = va.substr(8, 2).number();
						mi = va.substr(10, 2).number();
					}else{
						hh = "00";
						mi = "00";
					}

					if (yy == 0) needAlert = true;
					if (yy == 0) yy = nDate.getFullYear();
					if (yy < 1000) yy += 2000;
					obj["nDate" + seq] = new Date(Date.UTC(yy, mm, dd, 12));

					if (obj["nDate" + seq].getFullYear() != yy.number()
						|| obj["nDate" + seq].getMonth() != mm.number()
						|| obj["nDate" + seq].getDate() != dd.number()) {
						needAlert = true;
						obj["nDate" + seq] = new Date();
					}

					printDate = obj["nDate" + seq].print("yyyy" + separator + "mm" + separator + "dd");
					if (obj.config.expandTime) {
						printDate += " " + hh.setDigit(2) + ":" + mi.setDigit(2);
					}

					if (needAlert) {
						this.msgAlert("날짜 형식이 올바르지 않습니다.");
					}
					axdom("#" + targetObjID).val(printDate);

					if (obj.nDate1 == undefined) {
						var va = axdom("#" + obj.config.startTargetID).val().replace(/\D/gi, ""); //숫자 이외의 문자를 제거 합니다.
						if (va.search(/\d+/g) != -1) {
							if (va.length > 7) {
								var yy = va.left(4).number();
								var mm = va.substr(4, 2).number() - 1;
								var dd = va.substr(6, 2).number();
							} else if (va.length > 5) {
								var yy = va.left(4).number();
								var mm = va.substr(4, 2).number() - 1;
								var dd = 1;
							} else {
								var yy = va.left(4).number();
								var mm = nDate.getMonth();
								var dd = nDate.getDate();
							}
							if (yy == 0) needAlert = true;
							if (yy == 0) yy = nDate.getFullYear();
							if (yy < 1000) yy += 2000;
							obj.nDate1 = new Date(Date.UTC(yy, mm, dd, 12));
						}
					}
					if (obj.nDate2 == undefined) {
						obj.nDate2 = obj.nDate1;
						printDate = obj["nDate" + 2].print("yyyy" + separator + "mm" + separator + "dd");
						if (obj.config.expandTime) {
							if(obj["mycalendartime" + 2]) printDate += " " + obj["mycalendartime" + 2].getTime();
						}
						axdom("#" + objID).val(printDate);
					}

					if (obj.nDate1.diff(obj.nDate2) < 0) {
						if (seq == 1) {
							obj.nDate2 = obj.nDate1;
							printDate = obj["nDate" + 2].print("yyyy" + separator + "mm" + separator + "dd");
							if (obj.config.expandTime) {
								if(obj["mycalendartime" + 2]) printDate += " " + obj["mycalendartime" + 2].getTime();
							}
							axdom("#" + objID).val(printDate);
						} else {
							obj.nDate1 = obj.nDate2;
							printDate = obj["nDate" + 1].print("yyyy" + separator + "mm" + separator + "dd");
							if (obj.config.expandTime) {
								if(obj["mycalendartime" + 1]) printDate += " " + obj["mycalendartime" + 1].getTime();
							}
							axdom("#" + obj.config.startTargetID).val(printDate);
						}
					}
				}
			}
		}

		if (!obj.config.onChange) obj.config.onChange = obj.config.onchange;
		if (obj.config.onChange) {
			obj.config.onChange.call({
				event: event,
				ST_objID: obj.config.startTargetID,
				ED_objID: objID,
				ST_value: axdom("#" + obj.config.startTargetID).val(),
				ED_value: axdom("#" + objID).val()
			});
		}
		if(!obj.bindTarget) obj.bindTarget = axdom("#" + objID);
		obj.bindTarget.change();
		/* ie10 버그 픽스
		 axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox").remove(); // 개체 삭제 처리

		 //비활성 처리후 메소드 종료
		 axdom(document).unbind("click.AXInput");
		 axdom("#" + objID).unbind("keydown.AXInput");
		 */
		event.stopPropagation(); // disableevent
		return;
	},

	// checked
	bindChecked: function (objID, objSeq){
		var cfg = this.config, _this = this;
		var obj = this.objects[objSeq];

		if(!obj.bindAnchorTarget) obj.bindAnchorTarget = axdom("#" + cfg.targetID + "_AX_" + objID);
		if(!obj.bindTarget) obj.bindTarget = axdom("#" + objID);
		//var tagName = obj.bindTarget.get(0).tagName.ucase();
		obj.bindTarget.css({opacity:0});
		
		var h = obj.bindAnchorTarget.data("height"),
			marginWidth = obj.bindTarget.css("margin-left").number() + obj.bindTarget.css("margin-right").number(),
			marginHeight = obj.bindTarget.css("margin-top").number() + obj.bindTarget.css("margin-bottom").number(),
			chk_size = Math.max((h+marginWidth), (h + marginHeight)) - 1,
			left = (obj.bindTarget.css("margin-left").number() - obj.bindTarget.css("margin-right").number()).abs(),
			anchorHandle, linked_items = [];
		
		var onchange = function(e){
			if(obj.bindTarget.get(0).checked){
				anchorHandle.addClass("checked");
			}else{
				anchorHandle.removeClass("checked");
			}
			if(linked_items.length > 0){
				for(var li=0;li<linked_items.length;li++){
					var aHandle = jQuery(linked_items[li]).next().find("." + cfg.anchorCheckedContainerClassName+"_radio");
					if(linked_items[li].checked){
						aHandle.addClass("checked");
					}else{
						aHandle.removeClass("checked");
					}
				}
			}
		};
		
		var po = [];
		po.push('<div id="' + cfg.targetID + '_AX_' + objID + '_AX_HandleContainer"');
		if(obj.bindTarget.attr("type") == "radio"){
			po.push(' class="' + cfg.anchorCheckedContainerClassName + '_radio" ');
		}else{
			po.push(' class="' + cfg.anchorCheckedContainerClassName + '" ');
		}

		po.push(' style="left:'+left+'px;top:0px;width:' + chk_size + 'px;height:' + chk_size + 'px;"');
		po.push(' onselectstart="return false;">');
		po.push('<a class="checked-icon"></a>')
		po.push('</div>');
		obj.bindAnchorTarget.append(po.join(''));
		obj.bindAnchorTarget.show();
		if(obj.bindTarget.attr("type") == "radio") {
			anchorHandle = obj.bindAnchorTarget.find("." + cfg.anchorCheckedContainerClassName+"_radio");
		}else{
			anchorHandle = obj.bindAnchorTarget.find("." + cfg.anchorCheckedContainerClassName);
		}
		
		obj.bindTarget.unbind("change.AXInput").bind("change.AXInput", onchange);
		anchorHandle.bind("click", function(e){
			obj.bindTarget.get(0).checked = !obj.bindTarget.get(0).checked;
			obj.bindTarget.trigger("change");
			_this.stopEvent(e);
		});
		if(obj.bindTarget.attr("type") == "radio") {
			// 이름이 같은 라디오 아이템을 수집하여 링크 합니다.
			var nm = obj.bindTarget.attr("name");
			//trace(nm, objID);
			jQuery("input[name="+nm+"]").each(function(){
				if(objID != this.id){
					linked_items.push(this);
				}
			});
		}
		onchange();
	}
});

var AXInput = new AXInputConverter();
AXInput.setConfig({ targetID: "inputBasic" });

/**
 * @method jQueryExtends.unbindInput
 * @param {JSObject} configs
 * @returns {jQueryObject}
 * @description input text 엘리먼트에 바인딩된 컨트롤을 제거합니다.
 * @example
```js
axdom("#AXInputNumber").unbindInput();
```
**/
axdom.fn.unbindInput = function (config) {
	axf.each(this, function () {
		if (config == undefined) config = {};
		config.id = this.id;
		AXInput.unbind(config);
	});
	return this;
};

/**
 * @method jQueryExtends.bindSearch
 * @param {JSObject} configs
 * @returns {jQueryObject}
 * @description input text 엘리먼트에  검색 컨트롤을 바인딩 합니다. IE9 이하에서도 placeholder를 지원합니다.
 * @example
```js
axdom(".AXInputSearch").bindSearch();
```
**/
axdom.fn.bindSearch = function (config) {
	axf.each(this, function () {
		if (config == undefined) config = {};
		config.id = this.id;
		config.bindType = "search";
		AXInput.bind(config);
	});
	return this;
};

/**
 * @method jQueryExtends.bindNumber
 * @param {JSObject} configs
 * @returns {jQueryObject}
 * @description input text 엘리먼트에 숫자 컨트롤을 바인딩 합니다.
 * @example
```js
var config = {
    min: 1,   // {Number} [min=Number.MIN_VALUE] - 최소값 (optional)
    max: 100, // {Number} [max=Number.MAX_VALUE] - 최대값 (optional)
    onchange: function(){ // {Function} - 값이 변경되었을 때 이벤트 콜백함수 (optional)
        trace(this);
    }
};
axdom("#AXInputNumber").bindNumber(config);
```
**/
axdom.fn.bindNumber = function (config) {
	axf.each(this, function () {
		config = config || {}; config.id = this.id;
		config.bindType = "number";
		AXInput.bind(config);
	});
	return this;
};

/**
 * @method jQueryExtends.bindMoney
 * @param {JSObject} configs
 * @returns {jQueryObject}
 * @description input text 엘리먼트에 통화단위가 입력 되도록 합니다.
 * @example
```js
var config = {
    min: 1,  // {Number} [min=Number.MIN_VALUE] - 최소값 (optional)
    max: 100 // {Number} [max=Number.MAX_VALUE] - 최대값 (optional)
};
axdom("#AXInputMoney").bindMoney(config);
```
**/
axdom.fn.bindMoney = function (config) {
	axf.each(this, function () {
		config = config || {}; config.id = this.id;
		config.bindType = "money";
		AXInput.bind(config);
	});
	return this;
};

/**
 * @method jQueryExtends.bindSelector
 * @param {JSObject} configs
 * @returns {jQueryObject}
 * @description input text 엘리먼트에 selector 컨트롤을 바인딩 합니다.
 * @example
```js
var config = {
    appendable   : ( true || false ),                      // {Boolean}  - options 에 정해진 값 외의 입력 가능 여부 true 이면 입력이 가능합니다. (optional)
    options      : [{optionValue:"1", optionText:"AXISJ"}] // {Array}    - [{optionValue:"값", optionText:"라벨"}]
    ajaxUrl      : "./data.json",                          // {String}   - AJAX 데이터 호출 URL (optional)
    ajaxPars     : "param1=val1&param2=val2",              // {String}   - AJAX 데이터 호출 URL 파라미터 (optional)
    positionFixed: ( true || false ),                      // {Boolean}  - expandBox position CSS 를 fixed 할지 여부. selector 가 fixed 된 엘리먼트 위에 위치하는 경우 사용하세요 (optional)
    direction    : "bottom",                               // {String}   - expandBox의 위/아래 열리는 방향을 지정합니다. 기본값은 ""이며 "bottom"을 사용하는 경우 expandBox의 방향이 밑에서 위로 열리게 됩니다. (optional)
    onchange     : function() {                            // {Function} - 값 변경 이벤트 콜백함수 (optional)
        trace(this);
    },
    onsearch     : function(objID, objVal, callBack) {               // {Function} - 값 변경시 options 변경 구현 함수(optional) ※ 주의: ajaxUrl과 중복 사용할 수 없습니다. 만약 두 옵션이 같이 선언되면 onsearch가 적용되고 ajaxUrl은 무시됩니다.
        // this = { id: objID, value: objVal }
        // 아래와 같은 형식으로 options 값을 반환해야 합니다.
        return {
            options:[
                {optionValue:1, optionText:"Seoul", desc:"부가설명글"},
                ...
            ]
        }
        // 또는 callBack 함수를 호출합니다.
    }
    finder: {
        onclick: function() { // {Function} - 파인더 버튼 클릭 이벤트 콜백함수 (optional)
            trace(this);
        }
    },
    maxHeight   : {Number} [150] - selector panel height
};

// 서버에서 리턴하는 JSON 구문 예시
// 아래 형식을 만족 시켜야 합니다.
// desc 또는 optionDesc 값을 지정하면 option 라벨 뒤에 부가설명글로 표시됩니다.
{
    result:"ok",
    options:[
        {optionValue:1, optionText:"Seoul", desc:"부가설명글"},
        {optionValue:2, optionText:"대구"},
        {optionValue:3, optionText:"대전", optionDesc:"부가설명글"},
        {optionValue:8, optionText:"전주"},
        {optionValue:9, optionText:"Gwangju"}
    ]
}
	
axdom("#AXInputSelector").bindSelector(config);
```
**/
axdom.fn.bindSelector = function (config) {
	axf.each(this, function () {
		config = config || {}; config.id = this.id;
		config.bindType = "selector";
		AXInput.bind(config);
	});
	return this;
};

/**
 * @method jQueryExtends.bindSelectorBlur
 * @param {JSObject} configs
 * @returns {jQueryObject}
 * @description 옵션 목록이 열려있으면 닫습니다.
 * @example
```js
axdom("#AXInputSelector").bindSelectorBlur();
```
**/
axdom.fn.bindSelectorBlur = function (config) {
	axf.each(this, function () {
		AXInput.bindSelectorBlur(this.id);
	});
	return this;
};

/**
 * @method jQueryExtends.bindSlider
 * @param {JSObject} configs
 * @returns {jQueryObject}
 * @description input text 엘리먼트에 slider 컨트롤을 바인딩 합니다.
 * @example
```js
var config = {
    min: 0,    // {Number} [min=Number.MIN_VALUE] - 최소값 (optional)
    max: 100,  // {Number} [min=Number.MAX_VALUE] - 최대값 (optional)
    snap: 100, // {Number} [snap=1] -
    unit: "%", // {String} [unit=""] - 값 뒤에 붙여 표현하는 단위 (optional)
    onchange: function() { // {Function} - 값 변경 이벤트 콜백함수 (optional)
        trace(this);
    }
};
axdom("#AXInputSlider").bindSlider(config);
```
**/
axdom.fn.bindSlider = function (config) {
	axf.each(this, function () {
		config = config || {}; config.id = this.id;
		config.bindType = "slider";
		AXInput.bind(config);
	});
	return this;
};

/**
 * @method jQueryExtends.bindTwinSlider
 * @param {JSObject} configs
 * @returns {jQueryObject}
 * @description input text 엘리먼트에 번위 선택이 가능한 slider 컨트롤을 바인딩 합니다.
 * @example
```js
var config = {
    min: 0,         // {Number} [min=Number.MIN_VALUE] - 최소값 (optional)
    max: 100,       // {Number} [max=Number.MAX_VALUE] - 최대값 (optional)
    separator: "~", // {String} [separator="~"] -두개의 값 사이를 구분 지을 문자열
    snap: 100,      // {Number} [snap=1] -
    unit: "%",      // {String} [unit=""] 값 뒤에 붙여 표현하는 단위 (optional)
    onchange: function() { // {Function} - 값 변경 이벤트 콜백함수 (optional)
        trace(this);
    }
};
axdom("#AXInputTwinSlider").bindTwinSlider(config);
```
**/
axdom.fn.bindTwinSlider = function (config) {
	axf.each(this, function () {
		config = config || {}; config.id = this.id;
		config.bindType = "twinSlider";
		AXInput.bind(config);
	});
	return this;
};

/**
 * @method jQueryExtends.bindSwitch
 * @param {JSObject} configs
 * @returns {jQueryObject}
 * @description input text 엘리먼트에 스위치 컨트롤을 적용합니다.
 * @example
```js
var config = {
    off: "AM", // {String} switch off value
    on : "PM", // {String} switch on vlaue
    onchange:function(){
        trace(this);
    }
};
axdom("#AXInputSwitch").bindSwitch(config);
```
**/
axdom.fn.bindSwitch = function (config) {
	axf.each(this, function () {
		config = config || {}; config.id = this.id;
		config.bindType = "switch";
		AXInput.bind(config);
		return this;
	});
};

/**
 * @method jQueryExtends.bindSegment
 * @param {JSObject} configs
 * @returns {jQueryObject}
 * @description input text 엘리먼트에 segment 컨트롤을 바인딩 합니다.
 * @example
```js
var config = {
    theme:"AXSegmentTest", // {String} CSS 클래스
    options : [            // {String} {optionValue:"옵션의값", optionText:"옵션라벨", addClass:"옵션아이템에 추가될 CSS 클래스"}
        {optionValue:0, optionText:"왼쪽", addClass:"type1"},
        {optionValue:1, optionText:"가운데", addClass:"type2"},
        {optionValue:2, optionText:"오른쪽", addClass:"type3"}
    ],
    onchange:function(){  // {Function} 값이 변경되었을 때 발생하는 이벤트 콜백함수
        //this.targetID, this.options, this.selectedIndex, this.selectedOption
        trace(this);
    }
};
axdom("#AXInputSegment").bindSegment(config);
```
**/
axdom.fn.bindSegment = function (config) {
	axf.each(this, function () {
		config = config || {}; config.id = this.id;
		config.bindType = "segment";
		AXInput.bind(config);
	});
	return this;
};

/**
 * @method jQueryExtends.bindDate
 * @param {JSObject} configs
 * @returns {jQueryObject}
 * @description input text 엘리먼트에 날짜 컨트롤을 바인딩 합니다.
 * @example
```js
var config = {
    align            :"right", // {String} ("left"|"center"|"right") 달력에서 input text 의 위치
    valign           :"top",   // {String} ("top"|"middle"|"bottom") 달력에서 input text 의 위치
    separator        : "-",    // {String} 날짜형식 표시 구분 문자열
    selectType       : "d",    // {String} ("y"|"m"|"d") 날짜선택범위 y 를 지정하면 년도만 선택됩니다.
    defaultSelectType: "d",    // {String} ("y"|"m"|"d") 달력컨트롤의 년월일 선택도구 중에 먼저 보이는 도구타입
    defaultDate      : "",     // {String} ("yyyy[separator]mm[separator]dd") 날짜 형식의 문자열로 빈값의 달력 기준일을 설정합니다. 지정하지 않으면 시스템달력의 오늘을 기준으로 합니다.
    minDate          : "",     // {String} ("yyyy[separator]mm[separator]dd") 날짜 형식의 문자열로 선택할 수 있는 최소일을 설정합니다.
    maxDate          : "",     // {String} ("yyyy[separator]mm[separator]dd") 날짜 형식의 문자열로 선택할 수 있는 최대일을 설정합니다.
    onBeforeShowDay  : {}      // {Function} 날짜를 보여주기 전에 호출하는 함수. date를 파라미터로 받으며 다음과 같은 형식의 Object를 반환해야 한다. { enable: true|false, title:'성탄절', class: 'holyday', style: 'color:red' }
    onchange: function(){      // {Function} 값이 변경되었을 때 발생하는 이벤트 콜백함수
        trace(this);
    }
};
axdom("#AXInputDate").bindDate(config);
```
**/
axdom.fn.bindDate = function (config) {
	axf.each(this, function () {
		config = config || {}; config.id = this.id;
		config.bindType = "date";
		AXInput.bind(config);
	});
	return this;
};

/**
 * @method jQueryExtends.unbindDate
 * @param {JSObject} configs
 * @returns {jQueryObject}
 * @description input text 엘리먼트에 바인딩된 날짜 컨트롤을 제거합니다.
 * @example
```js
axdom("#AXInputDate").unbindDate();
```
**/
axdom.fn.unbindDate = function (config) {
	axf.each(this, function () {
		config = config || {}; config.id = this.id;
		AXInput.unbindDate(config);
	});
	return this;
};

/**
 * @method jQueryExtends.bindDateTime
 * @param {JSObject} configs
 * @returns {jQueryObject}
 * @description input text 엘리먼트에 날짜와 시간 컨트롤을 바인딩 합니다.
 * @example
```js
var config = {
    align            : "right",// {String} ("left"|"center"|"right") 달력에서 input text 의 위치
    valign           : "top",  // {String} ("top"|"middle"|"bottom") 달력에서 input text 의 위치
    separator        : "-",    // {String} 날짜형식 표시 구분 문자열
    selectType       : "d",    // {String} ("y"|"m"|"d") 날짜선택범위 y 를 지정하면 년도만 선택됩니다.
    defaultSelectType: "d",    // {String} ("y"|"m"|"d") 달력컨트롤의 년월일 선택도구 중에 먼저 보이는 도구타입
    defaultDate      : "",     // {String} ("yyyy[separator]mm[separator]dd") 날짜 형식의 문자열로 빈값의 달력 기준일을 설정합니다. 지정하지 않으면 시스템달력의 오늘을 기준으로 합니다.
    minDate          : "",     // {String} ("yyyy[separator]mm[separator]dd") 날짜 형식의 문자열로 선택할 수 있는 최소일을 설정합니다.
    maxDate          : "",     // {String} ("yyyy[separator]mm[separator]dd") 날짜 형식의 문자열로 선택할 수 있는 최대일을 설정합니다.
    onBeforeShowDay  : {}      // {Function} 날짜를 보여주기 전에 호출하는 함수. date를 파라미터로 받으며 다음과 같은 형식의 Object를 반환해야 한다. { enable: true|false, title:'성탄절', class: 'holyday', style: 'color:red' }
    onchange: function(){      // {Function} 값이 변경되었을 때 발생하는 이벤트 콜백함수
        trace(this);
    }
};
axdom("#AXInputDate").bindDateTime(config);
```
**/
axdom.fn.bindDateTime = function (config) {
	axf.each(this, function () {
		config = config || {}; config.id = this.id;
		config.bindType = "date";
		config.expandTime = true;
		AXInput.bind(config);
	});
	return this;
};

/**
 * @method jQueryExtends.bindTwinDate
 * @param {JSObject} configs
 * @returns {jQueryObject}
 * @description input text 엘리먼트에 날짜(start ~ end) 컨트롤을 바인딩 합니다.
 * @example
```js
var config = {
    startTargetID    : "AXInputDateST", // {String}시작일 input text 아이디
    align            : "right",// {String} ("left"|"center"|"right") 달력에서 input text 의 위치
    valign           : "top",  // {String} ("top"|"middle"|"bottom") 달력에서 input text 의 위치
    separator        : "-",    // {String} 날짜형식 표시 구분 문자열
    selectType       : "d",    // {String} ("y"|"m"|"d") 날짜선택범위 y 를 지정하면 년도만 선택됩니다.
    defaultSelectType: "d",    // {String} ("y"|"m"|"d") 달력컨트롤의 년월일 선택도구 중에 먼저 보이는 도구타입
    defaultDate      : "",     // {String} ("yyyy[separator]mm[separator]dd") 날짜 형식의 문자열로 빈값의 달력 기준일을 설정합니다. 지정하지 않으면 시스템달력의 오늘을 기준으로 합니다.
    minDate          : "",     // {String} ("yyyy[separator]mm[separator]dd") 날짜 형식의 문자열로 선택할 수 있는 최소일을 설정합니다.
    maxDate          : "",     // {String} ("yyyy[separator]mm[separator]dd") 날짜 형식의 문자열로 선택할 수 있는 최대일을 설정합니다.
    buttonText       : "OK"    // {String} ["OK"] - 선택 버튼 텍스트 설정
    onBeforeShowDay  : {}      // {Function} 날짜를 보여주기 전에 호출하는 함수. date를 파라미터로 받으며 다음과 같은 형식의 Object를 반환해야 한다. { enable: true|false, title:'성탄절', class: 'holyday', style: 'color:red' }
    onchange: function(){      // {Function} 값이 변경되었을 때 발생하는 이벤트 콜백함수
        trace(this);
    }
};
axdom("#AXInputDateED").bindTwinDate(config);
```
**/
axdom.fn.bindTwinDate = function (config) {
	axf.each(this, function () {
		config = config || {}; config.id = this.id;
		config.bindType = "twinDate";
		AXInput.bind(config);
	});
	return this;
};

/**
 * @method jQueryExtends.bindTwinDateTime
 * @param {JSObject} configs
 * @returns {jQueryObject}
 * @description input text 엘리먼트에 날짜와 시간(start ~ end) 컨트롤을 바인딩 합니다.
 * @example
```js
var config = {
    startTargetID    : "AXInputDateST", // {String}시작일 input text 아이디
    align            : "right",// {String} ("left"|"center"|"right") 달력에서 input text 의 위치
    valign           : "top",  // {String} ("top"|"middle"|"bottom") 달력에서 input text 의 위치
    separator        : "-",    // {String} 날짜형식 표시 구분 문자열
    selectType       : "d",    // {String} ("y"|"m"|"d") 날짜선택범위 y 를 지정하면 년도만 선택됩니다.
    defaultSelectType: "d",    // {String} ("y"|"m"|"d") 달력컨트롤의 년월일 선택도구 중에 먼저 보이는 도구타입
    defaultDate      : "",     // {String} ("yyyy[separator]mm[separator]dd") 날짜 형식의 문자열로 빈값의 달력 기준일을 설정합니다. 지정하지 않으면 시스템달력의 오늘을 기준으로 합니다.
    minDate          : "",     // {String} ("yyyy[separator]mm[separator]dd") 날짜 형식의 문자열로 선택할 수 있는 최소일을 설정합니다.
    maxDate          : "",     // {String} ("yyyy[separator]mm[separator]dd") 날짜 형식의 문자열로 선택할 수 있는 최대일을 설정합니다.
    buttonText       : "OK"    // {String} ["OK"] - 선택 버튼 텍스트 설정
    onBeforeShowDay  : {}      // {Function} 날짜를 보여주기 전에 호출하는 함수. date를 파라미터로 받으며 다음과 같은 형식의 Object를 반환해야 한다. { enable: true|false, title:'성탄절', class: 'holyday', style: 'color:red' }
    onchange: function(){      // {Function} 값이 변경되었을 때 발생하는 이벤트 콜백함수
        trace(this);
    }
};
axdom("#AXInputDateED").bindTwinDateTime(config);
```
**/
axdom.fn.bindTwinDateTime = function (config) {
	axf.each(this, function () {
		config = config || {}; config.id = this.id;
		config.bindType = "twinDateTime";
		config.expandTime = true;
		AXInput.bind(config);
	});
	return this;
};

/**
 * @method jQueryExtends.bindPlaceHolder
 * @param {JSObject} configs
 * @returns {jQueryObject}
 * @description IE9 이하에서도 input text 엘리먼트에 placeholder를 지원합니다. placeholder를 지원하는 브라우저에서는 브라우저의 native code가 사용됩니다.
 * @example
```js
axdom(".AXInputPlaceholder").bindPlaceHolder();
```
**/
axdom.fn.bindPlaceHolder = function (config) {
	axf.each(this, function () {
		config = config || {}; config.id = this.id;
		config.bindType = "placeHolder";
		AXInput.bind(config);
	});
	return this;
};

/**
 * @method jQueryExtends.bindChecked
 * @param {Object} configs
 * @returns {jQueryObject}
 * @description input text 엘리먼트에 체크 컨트롤을 바인딩 합니다.(구현중)
 * @example
```js
axdom(".AXInputChecked").bindChecked();
```
**/
axdom.fn.bindChecked = function (config) {
	axf.each(this, function () {
		config = config || {}; config.id = (this.id||(this.id="axchecked-"+axf.getUniqueId()));
		config.bindType = "checked";
		AXInput.bind(config);
	});
	return this;
};

/**
 * @method jQueryExtends.setConfigInput
 * @param {Object} configs
 * @returns {jQueryObject}
 * @description input text 엘리먼트에 config를 할당합니다.
 * @example
```js
axdom(".AXInput").setConfigInput( 100 );
```
**/
axdom.fn.setConfigInput = function (config) {
	axf.each(this, function () {
		AXInput.bindSetConfig(this.id, config);
	});
	return this;
};

/**
 * @method jQueryExtends.setValueInput
 * @param {Object} value - 할당할 값
 * @returns {jQueryObject}
 * @description input text 엘리먼트에 바인딩된 컨트롤에 값을 할당합니다.(아직 search, number, money, date, twinDate 컨트롤은 구현되지 않았습니다.)
 * @example
```js
axdom(".AXInput").setValueInput( 100 );
```
**/
axdom.fn.setValueInput = function (value) {
	axf.each(this, function () {
		AXInput.bindSetValue(this.id, value);
	});
	return this;
};

/**
 * @method jQueryExtends.bindInputDisabled
 * @param {Boolean} [Disabled=true] - 컨트롤을 disabled | enabled 합니다.
 * @returns {jQueryObject}
 * @description input text 엘리먼트에 바인딩된 컨트롤을 비활성화 하거나 활성화 합니다.
 * @example
```js
axdom(".AXInput").bindInputDisabled( true | false );
```
**/
jQuery.fn.bindInputDisabled = function (Disabled) {
	axf.each(this, function () {
		AXInput.bindInputDisabled(this.id, Disabled);
	});
	return this;
};
/* ---------------------------- */
var AXInputConverterPro = Class.create(AXJ, {
	initialize: function (AXJ_super) {
		AXJ_super();
		this.objects = [];
		this.inputTypes = [
			{ type: "pattern", type: "tagSelector" }
		];
		this.config.anchorClassName = "AXanchor";
		this.config.anchorSelectorExpandBoxClassName = "AXanchorSelectorExpandBox";
		this.config.anchorSelectorExpandScrollClassName = "AXanchorSelectorExpandScroll"

		/* 모바일 반응 너비 */
		this.config.responsiveMobile = AXConfig.mobile.responsiveWidth;
	},
	init: function () {
		axdom(window).resize(this.alignAllAnchor.bind(this));

		// 예약어 초기화
		this.config.reserveKeys = {
			options: (AXConfig.AXInput && AXConfig.AXInput.keyOptions) || "options",
			optionValue: (AXConfig.AXInput && AXConfig.AXInput.keyOptionValue) || "optionValue",
			optionText: (AXConfig.AXInput && AXConfig.AXInput.keyOptionText) || "optionText"
		};
	},
	windowResize: function () {
		// 사용안함
		var windowResizeApply = this.windowResizeApply.bind(this);
		if (this.windowResizeObserver) clearTimeout(this.windowResizeObserver);
		this.windowResizeObserver = setTimeout(function () {
			windowResizeApply();
		}, 10);
	},
	windowResizeApply: function(){
		// 사용안함
		if (this.windowResizeObserver) clearTimeout(this.windowResizeObserver);
		this.alignAllAnchor();
	},
	alignAllAnchor: function () {
		for(var i=0;i<this.objects.length;i++){
			this.alignAnchor(this.objects[i].id, i);
		}
	},
	bindSetConfig: function (objID, configs) {
		var findIndex = null;
		axf.each(this.objects, function (index, O) {
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
			axf.each(configs, function (k, v) {
				_self.config[k] = v;
			});
		}
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
		for(var index = 0 ; index < this.objects.length ; index++){
			if(this.objects[index].id == objID){ objSeq = index; break;}
		}

		if (obj.href == undefined) obj.href = cfg.href;

		if (objSeq == null) {
			objSeq = this.objects.length;
			this.objects.push({ id: objID, anchorID: cfg.targetID + "_AX_" + objID, config: obj, bindType: obj.bindType });
		} else {
			this.objects[objSeq].isDel = undefined;
			this.objects[objSeq].config = obj;
		}

		if (obj.bindType != "checked") {
			this.appendAnchor(objID, objSeq, obj.bindType);
		}
		// bind checked 는 anchor연결 안함.

		if (obj.bindType == "null") {

		} else if (obj.bindType == "pattern") {
			this.bindPattern(objID, objSeq);
		} else if (obj.bindType == "tagSelector") {
			this.bindTagSelector(objID, objSeq);
		}
	},
	unbind: function (obj) {
		var cfg = this.config;
		var removeAnchorId;
		var removeIdx;
		axf.each(this.objects, function (idx, O) {
			if (O.id != obj.id) {
				// collect.push(this);
			} else {
				if (O.isDel != true) {
					removeAnchorId = this.anchorID;
					removeIdx = idx;
				}
			}
		});

		if (removeAnchorId) {
			this.objects[removeIdx].isDel = true;
			axdom("#" + obj.id).removeAttr("data-axbind");
			axdom("#" + removeAnchorId).remove();
			var objID = obj.id;
			var obj = this.objects[removeIdx];
			if (obj.documentclickEvent) axdom(document).unbind("click.AXInput", obj.documentclickEvent);
			axdom("#" + objID).unbind("keydown.AXInput");
			axdom("#" + objID).unbind("keydown.AXInputCheck");

			axdom("#" + objID).unbind("change.AXInput");

			if (obj.bindSliderMouseMove) axdom(document.body).unbind("mousemove.AXInput", obj.bindSliderMouseMove);
			if (obj.bindSliderMouseUp) axdom(document.body).unbind("mouseup.AXInput", obj.bindSliderMouseUp);
			if (obj.bindSliderTouchMove) document.removeEventListener("touchmove.AXInput", obj.bindSliderTouchMove, false);
			if (obj.bindSliderTouchEnd) document.removeEventListener("touchend.AXInput", obj.bindSliderTouchEnd, false);
			if (obj.bindTwinSliderMouseMove) axdom(document.body).unbind("mousemove.AXInput", obj.bindTwinSliderMouseMove);
			if (obj.bindTwinSliderMouseUp) axdom(document.body).unbind("mouseup.AXInput", obj.bindTwinSliderMouseUp);

			if (AXgetId(cfg.targetID + "_AX_" + objID + "_AX_expandBox")) {
				axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox").remove(); // 개체 삭제 처리
				axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_Handle").removeClass("on");
			}
		}
	},
	appendAnchor: function (objID, objSeq, bindType) {
		var cfg = this.config;
		var obj = this.objects[objSeq];
		//trace("appendAnchor");
		axdom("#" + cfg.targetID + "_AX_" + objID).remove();
		var anchorNode = axdom("<div id=\"" + cfg.targetID + "_AX_" + objID + "\" class=\"" + cfg.anchorClassName + "\" style=\"display:none;\"></div>");
		var iobj = axdom("#" + objID);
		iobj.attr("data-axbind", bindType);
		iobj.after(anchorNode);

		obj.bindAnchorTarget = axdom("#" + cfg.targetID + "_AX_" + objID);
		obj.bindTarget = iobj;

		//var offSetParent = iobj.offsetParent();
		var iobjPosition = iobj.position();
		var l = iobjPosition.left, t = iobjPosition.top, w = 0, h = 0;

		var borderW = iobj.css("border-left-width").number();
		var borderH = iobj.css("border-top-width").number();
		var marginW = iobj.css("margin-left").number();
		var marginH = iobj.css("margin-top").number();
		l = l + marginW;
		/*t = t;*/
		w = iobj.outerWidth();
		h = iobj.outerHeight();

		var css = { left: l, top: t, width: w, height: 0 };
		//trace(css);
		obj.bindAnchorTarget.css(css);
		obj.bindAnchorTarget.data("height", h);

		var _this = this;
		setTimeout(function () {
			_this.alignAnchor(objID, objSeq);
		}, 10);
	},
	alignAnchor: function (objID, objSeq) {
		var cfg = this.config;
		var obj = this.objects[objSeq];

		if (!AXgetId(objID)) return; /* 엘리먼트 존재 여부 확인 */

		var iobjPosition = obj.bindTarget.position();
		var l = iobjPosition.left, t = iobjPosition.top;
		var w = obj.bindTarget.outerWidth();
		var h = obj.bindTarget.outerHeight();
		if (obj.bindTarget.css("display") == "none") {
			h = obj.bindAnchorTarget.data("height");
			var css = { width: w };
		} else {
			var css = { left: l, top: t, width: w, height: 0 };
		}
		//trace(css);
		obj.bindAnchorTarget.css(css);
		obj.bindAnchorTarget.data("height", h);

		if (obj.bindType == "null") {

		} else if (obj.bindType == "pattern") {

		}
	},

	// TODO : pattern명 정의
	/*
	money, moneyint, date, datetime, bizno, phone, "USER String", [Function]
	*/
	// pattern
	bindPattern: function(objID, objSeq){
		var obj = this.objects[objSeq], cfg = this.config, _this = this;
		if(!obj.bindAnchorTarget) obj.bindAnchorTarget = axdom("#" + cfg.targetID + "_AX_" + objID);
		if(!obj.bindTarget) obj.bindTarget = axdom("#" + objID);

		// TODO : 키 입력 제어 구문 시작점 (방법1)
		if(obj.config.pattern == "_custom"){ // 커버 개체를 삽입하는 방식.. 실패..

			var h = obj.bindAnchorTarget.data("height");
			obj.bindAnchorTarget.css({"height":h});
			var po = [];
			var inputCoverClass = obj.bindTarget.attr("class");
			//trace();
			var inputCoverFont = obj.bindTarget.css("font-family");
			po.push("<div id=\"" + cfg.targetID + "_AX_" + objID + "_AX_inputCover\" "+
					"class=\"" + inputCoverClass + "\" "+
					"style=\"background:transparent;cursor:text;font-family:"+ inputCoverFont +";white-space:nowrap;\""+
					"></div>");

			obj.bindAnchorTarget.append(po.join(''));
			obj.bindAnchorTarget.show();
			obj.bindTarget.css({color:obj.bindTarget.css("background-color")});

			obj.bindTargetCover = obj.bindAnchorTarget.find("#"+ cfg.targetID + "_AX_" + objID + "_AX_inputCover");

			obj.bindTargetCover.bind("click", function(){
				obj.bindTarget.focus();
			});

			var val = obj.bindTarget.val().trim();
			if (val != "") {
				val = this.bindPatternGetValue(objID, objSeq, obj.bindTarget.val());
			}
			obj.bindTarget.val(val);

			obj.bindTarget.attr("onselectstart", "return false");
			obj.bindTarget.unbind("keypress.AXInput").bind("keypress.AXInput", function (event) {
				//obj.bindTargetCover.text(event.target.value);
			});
			obj.bindTarget.unbind("keyup.AXInput").bind("keyup.AXInput", function (event) {
				obj.bindTargetCover.html( _this.bindPatternGetValue(objID, objSeq, event.target.value) + "<div class='edit-input-cursor'>|</div>");
				//obj.bindTargetCover.val( _this.bindPatternGetValue(objID, objSeq, event.target.value) );
			});
			obj.bindTarget.unbind("focus.AXInput").bind("focus.AXInput", function (event) {
				obj.bindTargetCover.html( _this.bindPatternGetValue(objID, objSeq, event.target.value) + "<div class='edit-input-cursor'>|</div>");
				//obj.bindTargetCover.val( _this.bindPatternGetValue(objID, objSeq, event.target.value) );
			});
			obj.bindTarget.unbind("blur.AXInput").bind("blur.AXInput", function (event) {
				obj.bindTargetCover.find(".edit-input-cursor").remove();
			});

			return;
		}

		// TODO : 키 입력 제어 구문 시작점 (방법2)
		if(obj.config.pattern == "_custom") {

			// KEY_BACKSPACE: 8, KEY_TAB: 9, KEY_RETURN: 13, KEY_ESC: 27, KEY_LEFT: 37, KEY_UP: 38, KEY_RIGHT: 39, KEY_DOWN: 40, KEY_DELETE: 46, KEY_HOME: 36, KEY_END: 35, KEY_PAGEUP: 33, KEY_PAGEDOWN: 34,
			// KEY_INSERT: 45, KEY_SPACE: 32

			obj.bindTarget.unbind("keypress.AXInput").bind("keypress.AXInput", function (event) {
				var elem = event.target;
				var elemFocusPosition, elemFocusEndPosition;
				if ('selectionStart' in elem) {
					// Standard-compliant browsers
					elemFocusPosition = elem.selectionStart;
					elemFocusEndPosition = elem.selectionEnd;
				} else if (document.selection) {
					// IE
					//elem.focus();
					var sel = document.selection.createRange();
					var selLen = document.selection.createRange().text.length;
					sel.moveStart('character', -elem.value.length);
					elemFocusPosition = sel.text.length - selLen;
					elemFocusEndPosition = elemFocusPosition + selLen;
				}
				obj.DSP = elemFocusPosition;
				obj.DEP = elemFocusEndPosition;

				//키 입력전 입력문자열;
				if(elem.value == ""){
					obj.originalValue = ""; // 오리지널 밸류 초기화
				}
				obj.prevValue = event.target.value;

				//trace("D" + obj.DEP);
			});


			obj.bindTarget.unbind("keyup.AXInput").bind("keyup.AXInput", function (event) {
				var elem = event.target;
				var elemFocusPosition;
				if ('selectionStart' in elem) {
					// Standard-compliant browsers
					elemFocusPosition = elem.selectionStart;
					elemFocusEndPosition = elem.selectionEnd;
				} else if (document.selection) {
					// IE
					//elem.focus();
					var sel = document.selection.createRange();
					var selLen = document.selection.createRange().text.length;
					sel.moveStart('character', -elem.value.length);
					elemFocusPosition = sel.text.length - selLen;
					elemFocusEndPosition = elemFocusPosition + selLen;
				}
				obj.USP = elemFocusPosition;
				obj.UEP = elemFocusEndPosition;

				var v1 = elem.value, v2 = obj.prevValue;
				var editText = v2.substring(obj.DSP, obj.DEP), editedText = v1.substring(obj.DEP, obj.UEP);
				//trace("U" + obj.UEP);

				// case 1 : 한글자씩 타이핑 하는 경우

				if(v1 != v2 && v1.length > v2.length){
					// 추가입력
					if( obj.DSP == obj.DEP && obj.USP == obj.UEP && obj.DSP+1 == obj.USP ) {
						if(obj.USP == v1.length){
							//trace("끝에서 한글자 타이핑");
							obj.originalValue += editedText;
						}else if(obj.USP < v1.length){
							//trace("중간에서 한글자 타이핑");
							//var _v1 = obj.originalValue.split("");
							//var _v2 = editedText.split("");
							var _v2 = "";
							obj.originalValue = obj.originalValue.substring(0, obj.DEP) + editedText + obj.originalValue.substr(obj.DEP);
						}
						// 입력된 문자열의 위치에 패턴을 처리 합니다.

					}else {
						if(obj.USP == v1.length){
							//trace("끝에서 다중문자 타이핑");
							obj.originalValue += editedText;
						}else if(obj.USP < v1.length){
							trace("중간에서 다중문자 타이핑");
						}
					}

					trace({
						nvalue: v1,
						prevValue: v2,
						nowText: editText,
						editedText: editedText,
						originalValue: obj.originalValue,
						eD:[obj.DSP, obj.DEP],
						eU:[obj.USP, obj.UEP]
					});

				}else if(v1 != v2 && v1.length < v2.length){
					// 삭제 obj.originalValue의 삭제된 문자열 위치를 찾아 제거 합니다.

					if( obj.DSP == obj.DEP && obj.USP == obj.UEP && obj.DSP-1 == obj.USP) {
						if(obj.USP == v1.length) {
							trace("끝에서 한글자 삭제");
						}else if(obj.USP < v1.length){
							trace("중간에서 한글자 삭제");
						}
					}else{
						if(obj.USP == v1.length){
							trace("끝에서 다중문자 삭제");
						}else if(obj.USP < v1.length){
							trace("중간에서 다중문자 삭제");
						}
					}
				}else{
					// 커서이동
					if(obj.DSP == obj.DEP && obj.USP == obj.UEP && obj.DSP+1 == obj.USP){
						trace("커서 우로 이동");
					}else if(obj.DSP == obj.DEP && obj.USP == obj.UEP && obj.DSP == obj.USP+1){
						trace("커서 좌로 이동");
					}else if(obj.DSP == obj.DEP && obj.USP == obj.UEP && obj.DSP == obj.USP){
						trace("제자리");
					}
				}
			});
			return;
		}
		// TODO : 키 입력 제어 구문 끝점 (방법2)

		var eventStop = function(event){
			// 이벤트 중지 구문
			if (event.preventDefault) event.preventDefault();
			if (event.stopPropagation) event.stopPropagation();
			event.cancelBubble = true;
			return false;
			// 이벤트 중지 구문 끝
		};
		// 약속된 패턴 형식 구문
		var bindPatternCheck = this.bindPatternCheck.bind(this);
		var val = obj.bindTarget.val().trim();

		// 패턴 적용 값 구하기 함수를 통해 얻어진 val을 input value로 재 설정 합니다.
		if (val != "") {
			val = this.bindPatternGetValue(objID, objSeq, obj.bindTarget.val(), "blur");
		}
		// 패턴 구문에 따라 달라져야 하는 부분 ------------------------------

		obj.bindTarget.val(val);

		obj.bindTarget.unbind("focus.AXInput").bind("focus.AXInput", function (event) {
			if(obj.config.pattern == "custom"){
				if(typeof obj.originalValue === "undefined") obj.originalValue = event.target.value;
				event.target.value = _this.bindPatternGetValue(objID, objSeq, (obj.originalValue), "keyup");
			}
		});


		obj.bindTarget.unbind("keydown.AXInput").bind("keydown.AXInput", function (event) {
			if (
					event.which &&
					(
						event.which > 47 && event.which < 58  ||
						event.which > 36 && event.which < 41  ||
						event.which > 95 && event.which < 106 ||
						event.which == axf.Event.KEY_BACKSPACE   ||
						event.which == axf.Event.KEY_TAB         ||
						event.which == axf.Event.KEY_RETURN      ||
						event.which == axf.Event.KEY_DELETE      ||
						event.which == axf.Event.NUMPAD_SUBTRACT ||
						event.which == axf.Event.NUMPAD_DECIMAL  ||
						event.which == axf.Event.KEY_MINUS       ||
						event.which == axf.Event.KEY_EQUAL       ||
						event.which == axf.Event.KEY_PERIOD      ||
						event.which == axf.Event.KEY_HOME        ||
						event.which == axf.Event.KEY_END
					)
				) {

				// 패턴에 따라 제어 소수점 허용안되는 경우 블락
				var isStop = false;

				if (event.which == 190 && (obj.config.pattern == "moneyint" || obj.config.pattern == "numberint")) {
					// 소수점 입력 막기
					isStop = true;
				}
				else if (event.which == axf.Event.KEY_MINUS || event.which == axf.Event.KEY_EQUAL || event.which == axf.Event.KEY_PERIOD){
					if(
						(
							obj.config.pattern == "money" ||
							obj.config.pattern == "moneyint" ||
							obj.config.pattern == "number" ||
							obj.config.pattern == "numberint"
						) &&
						obj.config.allow_minus
					){

					}else{
						isStop = true;
					}
				}
				else if (
					event.which == axf.Event.KEY_BACKSPACE ||
					event.which == axf.Event.KEY_TAB       ||
					event.which == axf.Event.KEY_RETURN    ||
					event.which == axf.Event.KEY_LEFT      ||
					event.which == axf.Event.KEY_RIGHT     ||
					event.which == axf.Event.KEY_DELETE    ||
					event.which == axf.Event.KEY_HOME      ||
					event.which == axf.Event.KEY_END) { // 백스페이스, 탭, 리턴, 좌, 우, delete

					if(event.which == 13){
						obj.bindTarget.trigger("blur");
					}
				}
				else {

					if (obj.config.pattern.left(8) == "datetime") {
						if (event.target.value.replace(/\D/g, "").length == 12) {
							isStop = true;
						}
					}else if (obj.config.pattern.left(4) == "date") {
						if (event.target.value.replace(/\D/g, "").length == 8) {
							isStop = true;
						}
					}else if (obj.config.pattern == "bizno") {
						if (event.target.value.replace(/\D/g, "").length == 10) {
							isStop = true;
						}
					}else if (
						obj.config.pattern == "money" ||
						obj.config.pattern == "moneyint" ||
						obj.config.pattern == "number" ||
						obj.config.pattern == "numberint"
					) {
						// TODO : 숫자형 패턴에서 문자열의 길이 및, 소수점 자리수 제한 구현
						if (Object.isNumber(obj.config.max_length)){

							if (event.target.value.replace(/\D/g, "").length >= obj.config.max_length) {
								isStop = true;
							}
						}
						if (!isStop && Object.isNumber(obj.config.max_round)){
							var dotIndex = 0;
							if((dotIndex = event.target.value.indexOf(".")) > -1){
								if(event.target.value.substr(dotIndex+1).length >= obj.config.max_round){
									isStop = true;
								}
							}
						}
					}else if (Object.isNumber(obj.config.max_length)){
						if (event.target.value.replace(/[^A-Za-z0-9]/g, "").length == obj.config.max_length.number()) {
							isStop = true;
						}
					}
				}

				if(isStop) eventStop(event);

			} else {
				if ( (event.ctrlKey || event.metaKey) ) {
					obj.bindTarget.data("ctrlKey", "T");
				}else {
					obj.bindTarget.data("ctrlKey", "F");

					//trace('block', event.which);
					eventStop(event);
				}
			}
		});
		obj.bindTarget.unbind("keyup.AXInput").bind("keyup.AXInput", function (event) {
			var elem = obj.bindTarget.get(0);
			var elemFocusPosition;
			if ('selectionStart' in elem) {
				// Standard-compliant browsers
				elemFocusPosition = elem.selectionStart;
			} else if (document.selection) {
				// IE
				//elem.focus();
				var sel = document.selection.createRange();
				var selLen = document.selection.createRange().text.length;
				sel.moveStart('character', -elem.value.length);
				elemFocusPosition = sel.text.length - selLen;
			}
			//trace(obj.bindTarget.val());

			// 계산된 포커스 위치
			obj.bindTarget.data("focusPosition", elemFocusPosition);
			obj.bindTarget.data("prevLen", elem.value.length);

			var event = window.event || event;
			// ignore tab & shift key 스킵 & ctrl
			if (!event.keyCode || event.keyCode ==axf.Event.KEY_TAB|| event.keyCode == 16 || event.keyCode == 17||
				event.which == axf.Event.KEY_HOME ||
				event.which == axf.Event.KEY_END) return;

			if ((obj.bindTarget.data("ctrlKey") == "T") && (event.keyCode == 65 || event.keyCode == 91)) return;
			if (event.keyCode != AXUtil.Event.KEY_DELETE && event.keyCode != AXUtil.Event.KEY_BACKSPACE && event.keyCode != AXUtil.Event.KEY_LEFT && event.keyCode != AXUtil.Event.KEY_RIGHT) {
				bindPatternCheck(objID, objSeq, "keyup");
			} else if (event.keyCode == AXUtil.Event.KEY_DELETE || event.keyCode == AXUtil.Event.KEY_BACKSPACE) {
				bindPatternCheck(objID, objSeq, "keyup");
			}
		});
		obj.bindTarget.unbind("change.AXInput").bind("change.AXInput", function (event) {
			//bindPatternCheck(objID, objSeq, "change");
		});
		obj.bindTarget.unbind("blur.AXInput").bind("blur.AXInput", function (event) {
			bindPatternCheck(objID, objSeq, "blur");
		});
	},
	bindPatternCheck: function(objID, objSeq, eventType){
		var obj = this.objects[objSeq];
		var val, nval;
		// callback 함수 대소문자 지원
		if (!obj.config.onBlur) obj.config.onBlur = obj.config.onBlur;
		if (!obj.config.onChange) obj.config.onChange = obj.config.onchange;

		if(eventType == "blur"){

			val = obj.bindTarget.val();
			//trace(val);
			nval = this.bindPatternGetValue(objID, objSeq, val, eventType);
			// 패턴 적용
			obj.bindTarget.val(nval);

			if (Object.isFunction(obj.config.onBlur)) {
				obj.config.onBlur.call({ objID: objID, objSeq: objSeq, value: nval });
			}

		}else{

			val = obj.bindTarget.val();
			nval = this.bindPatternGetValue(objID, objSeq, val, eventType);
			// 패턴 적용
			obj.bindTarget.val(nval);

			if( !axf.isEmpty( obj.bindTarget.data("focusPosition") ) ){
				obj.bindTarget.setCaret(
					obj.bindTarget.data("focusPosition").number() + ( obj.bindTarget.val().length - obj.bindTarget.data("prevLen") )
				);
			}
			if (Object.isFunction(obj.config.onChange)) {
				obj.config.onChange.call({ objID: objID, objSeq: objSeq, value: nval });
			}

		}
	},
	bindPatternGetValue: function(objID, objSeq, val, eventType){
		var obj = this.objects[objSeq];
		var regExpPattern, returnValue = "";

		var getFormatterDate = function(_val, _pattern, ynm, mnd, dnt, tnt){
			var returnValue = "";
			if(_val == ""){

			}else if(eventType == "blur") { // 타이핑 완료
				var nDate = new Date(), needAlert = false;
				if (_val.length > 7) {
					var yy = _val.left(4).number();
					var mm = _val.substr(4, 2).number() - 1;
					var dd = _val.substr(6, 2).number();
				} else if (_val.length > 4) {
					var yy = "20" + _val.substr(0, 2);
					var mm = _val.substr(2, 2).number() - 1;
					var dd = _val.substr(4, 2).number();
				} else if (_val.length > 2) {
					var yy = nDate.getFullYear();
					var mm = _val.substr(0, 2).number() - 1;
					var dd = _val.substr(2, 2).number();
				} else {
					var yy = nDate.getFullYear(); //va.left(4).number();
					var mm = nDate.getMonth();
					var dd = _val.substr(0, 2).number();
				}
				if (yy == 0) needAlert = true;
				if (yy == 0) yy = nDate.getFullYear();
				if (yy < 1000) yy += 2000;
				nDate = new Date(yy, mm, dd, 12);

				if (nDate.getFullYear() != yy.number()
					|| nDate.getMonth() != mm.number()
					|| nDate.getDate() != dd.number()) {
					needAlert = true;
					nDate = new Date();
				}

				printDate = nDate.print("yyyy" + ynm + "mm" + mnd + "dd");

				if(dnt != " "){
					printDate += dnt;
				}

				if(_pattern.left(8) == "datetime") {
					if(dnt == " ") printDate += dnt;
					var hh, mm;
					if (_val.length > 11) { // hh,mm
						hh = _val.substr(8, 2).number().setDigit(2);
						mm = _val.substr(10, 2).number().setDigit(2);
					} else if (_val.length > 8) {
						hh = _val.substr(8, 2).number().setDigit(2);
						mm = "00";
					} else {
						hh = "12";
						mm = "00";
					}
					printDate += hh + tnt + mm;
				}

				if (needAlert) {
					//alert("날짜 형식이 올바르지 않습니다.");
				}
				returnValue = printDate;

			}else{ // 타이핑 중
				if(_val.length < 5){
					returnValue = _val;
				}else if(_val.length < 7){
					returnValue = _val.substr(0, 4) + ynm + _val.substr(4);
				}else if(_val.length < 9){
					returnValue = _val.substr(0, 4) + ynm + _val.substr(4, 2) + mnd + _val.substr(6, 2);
					if(dnt != " "){
						returnValue += dnt;
					}
				}else if(_val.length < 11 && _pattern.left(8) == "datetime"){
					returnValue = _val.substr(0, 4) + ynm + _val.substr(4, 2) + mnd + _val.substr(6, 2) + dnt + _val.substr(8, 2);
				}else{
					if(_pattern.left(8) == "datetime") returnValue = _val.substr(0, 4) + ynm + _val.substr(4, 2) + mnd + _val.substr(6, 2) + dnt + _val.substr(8, 2) + tnt + _val.substr(10, 2);
					else returnValue = _val.substr(0, 4) + ynm + _val.substr(4, 2) + mnd + _val.substr(6, 2);
				}
			}
			return returnValue;
		};
		var getNumberApplyConfig = function(_val, valType){
			if(valType == "float"){
				if (Object.isNumber(obj.config.max_round)) {
					var dotIndex = 0;
					if((dotIndex = _val.indexOf(".")) > -1){
						_val = _val.substring(0, dotIndex+1) +
							_val.substr(dotIndex+1).replace(/\D/g, "").left(obj.config.max_round);
					}
				}
			}
			var __val = _val.replace(/\D/g, "");
			if (Object.isNumber(obj.config.max_length)) {
				if (__val.length > obj.config.max_length) {
					if(obj.config.allow_minus && val.left(1) == "-"){
						_val = "-" + __val.left(obj.config.max_length);
					}
					else{
						_val = __val.left(obj.config.max_length);
					}
				}
			}
			__val = null;
			return _val;
		};

		if(
			obj.config.pattern == "money" ||
			obj.config.pattern == "moneyint" ||
			obj.config.pattern == "number" ||
			obj.config.pattern == "numberint"
		){

			if(obj.config.pattern == "moneyint") { // 소수점 포함안함
				//val = val.replace(/[\D,]/g, "");
				val = val.replace(/[^0-9^\-]/g, "");

				if(eventType == "blur") {
					val = getNumberApplyConfig(val, "int");
				}

				if(val == ""){
					returnValue = "";
				}else{
					returnValue = Math.ceil(val).money();
				}
			}
			else if(obj.config.pattern == "money") { // 소수점 포함
				//val = val.replace(/[^0-9^\.]/g, "");
				val = val.replace(/[^0-9^\.^\-]/g, "");

				if(eventType == "blur") {
					val = getNumberApplyConfig(val, "float");
				}

				regExpPattern = new RegExp('([0-9])([0-9][0-9][0-9][,.])');

				var arrNumber = val.split('.');
				arrNumber[0] += '.';

				do {
					arrNumber[0] = arrNumber[0].replace(regExpPattern, '$1,$2');
				} while (regExpPattern.test(arrNumber[0]));
				if (arrNumber.length > 1) {
					if(Object.isNumber(obj.config.max_round)){
						returnValue = arrNumber[0] + arrNumber[1].left(obj.config.max_round);
					}else{
						returnValue = arrNumber.join('');
					}
				} else {
					returnValue = arrNumber[0].split('.')[0];
				}
				if (eventType == "blur") {
					if (returnValue.right(1) == ".") returnValue = returnValue.replace(/\./g, "");
				}
			}
			else if(obj.config.pattern == "numberint") { // 통화표시 없이 숫자 형태로 입력
				//val = val.replace(/[\D]/g, "");
				val = val.replace(/[^0-9^\-]/g, "");

				if(eventType == "blur") {
					val = getNumberApplyConfig(val, "int");
				}

				if (val == "") {
					returnValue = "";
				} else {
					returnValue = Math.ceil(val);
				}
			}
			else if(obj.config.pattern == "number"){ // 통화표시 없이 숫자 형태로 입력
				//val = val.replace(/[^0-9^\.]/g, "");
				val = val.replace(/[^0-9^\.^\-]/g, "");

				if(eventType == "blur") {
					val = getNumberApplyConfig(val, "float");
				}

				var arrNumber = val.split('.');
				arrNumber[0] += '.';
				if (arrNumber.length > 1) {
					if(Object.isNumber(obj.config.max_round)){
						returnValue = arrNumber[0] + arrNumber[1].left(obj.config.max_round);
					}else{
						returnValue = arrNumber.join('');
					}
				} else {
					returnValue = arrNumber[0].split('.')[0];
				}
				if (eventType == "blur") {
					if (returnValue.right(1) == ".") returnValue = returnValue.replace(/\./g, "");
				}
			}
			if(obj.config.allow_minus){
				// 첫번째 문자열을 제외하고
				returnValue = returnValue.toString().substring(0, 1) + returnValue.toString().substr(1).replace(/\-/g, "");
			}else{
				returnValue = returnValue.toString().replace(/\-/g, "");
			}
		}
		else if( obj.config.pattern == "bizno" ){
			val = val.replace(/\D/g, "");
			regExpPattern = /^([0-9]{3})\-?([0-9]{1,2})?\-?([0-9]{1,5})?.*$/;
			returnValue = val.replace(regExpPattern, function(a, b){
				var nval = [arguments[1]];
				if(arguments[2]) nval.push(arguments[2]);
				if(arguments[3]) nval.push(arguments[3]);
				return nval.join("-");
			});
		}
		else if(obj.config.pattern == "phone"){

			val = val.replace(/\D/g, "");
			regExpPattern = /^(010|011|016|017|018|019)(\d+)*$/;
			var regExpPattern2 = /^(070|080|060|050|02|031|032|033|041|042|043|051|052|053|054|055|061|062|063|064)(\d+)*$/;

			if( regExpPattern.test(val) ){ // 휴대전화일 경우
				returnValue = val.replace(regExpPattern, function(a, b){
					var nval = [arguments[1]];
					if(arguments[2]) {
						if(arguments[2].length < 4) {
							nval.push( arguments[2] );
						}else if(arguments[2].length < 8){
							nval.push( arguments[2].substring(0, 3) + "-" + arguments[2].substr(3) );
						}else if(arguments[2].length > 8){
							nval.push( arguments[2].substring(0, 4) + "-" + arguments[2].substr(4, 4) + ", " + arguments[2].substr(8) );
						}else{
							nval.push( arguments[2].substring(0, 4) + "-" + arguments[2].substr(4, 4) );
						}
					}
					return nval.join("-");
				});
			} else if ( regExpPattern2.test(val) ) { // 일반전화일 경우
				returnValue = val.replace(regExpPattern2, function(a, b){
					var nval = [arguments[1]];
					if(arguments[2]) {
						if(arguments[2].length < 4) {
							nval.push( arguments[2] );
						}else if(arguments[2].length < 8) {
							nval.push(arguments[2].substring(0, 3) + "-" + arguments[2].substr(3));
						}else if(arguments[2].length > 8){
							nval.push( arguments[2].substring(0, 4) + "-" + arguments[2].substr(4, 4) + ", " + arguments[2].substr(8) );
						}else{
							nval.push( arguments[2].substring(0, 4) + "-" + arguments[2].substr(4, 4) );
						}
					}
					return nval.join("-");
				});
			} else { // 확인안됨.
				var regExpPattern3 = /^([0-9]{3})\-?([0-9]{1,4})?\-?([0-9]{1,4})?\-?([0-9]{1,4})?\-?([0-9]{1,4})?/;
				returnValue = val.replace(regExpPattern3, function(a, b){
					var nval = [arguments[1]];
					if(arguments[2]) nval.push(arguments[2]);
					if(arguments[3]) nval.push(arguments[3]);
					if(arguments[4]) nval.push(arguments[4]);
					if(arguments[5]) nval.push(arguments[5]);
					return nval.join("-");
				});
			}

		}
		else if( obj.config.pattern == "date" ){
			val = val.replace(/\D/g, "");
			returnValue = getFormatterDate(val, obj.config.pattern, "-", "-", " ", ":");
		}
		else if( obj.config.pattern == "date(/)" ){
			val = val.replace(/\D/g, "");
			returnValue = getFormatterDate(val, obj.config.pattern, "/", "/", " ", ":");
		}
		else if( obj.config.pattern == "date(년월일)" ){
			val = val.replace(/\D/g, "");
			returnValue = getFormatterDate(val, obj.config.pattern, "년", "월", "일", ":");
		}
		else if( obj.config.pattern == "datetime" ){
			val = val.replace(/\D/g, "");
			returnValue = getFormatterDate(val, obj.config.pattern, "-", "-", " ", ":");
		}
		else if( obj.config.pattern == "datetime(/)" ){
			val = val.replace(/\D/g, "");
			returnValue = getFormatterDate(val, obj.config.pattern, "/", "/", " ", ":");
		}
		else if( obj.config.pattern == "datetime(년월일)" ){
			val = val.replace(/\D/g, "");
			returnValue = getFormatterDate(val, obj.config.pattern, "년", "월", "일", "시");
		}
		else if( obj.config.pattern == "custom" ){
			// Z, 9, X
			val = val.replace(/[^0-9^a-z^A-Z]/g, "");
			var ess = val.split("");
			//trace(ess);
			var pss = obj.config.patternString.split("");

			if(eventType == "blur") {
				obj.originalValue = val; // 암호화 되기 전 문자열 저장
				//trace(val);
			}

			var newText = "";
			// TODO : 패턴 문자열의 인덱스와 원본 문자열 인덱스 분리
			// TODO : 포커스 되면 암호화된 문자열 원래 문자열로 변환, 블러되면 문자열 암호화 하고 originalValue 에 저장 -> 나중에 getText 에 이용
			var eidx = 0, pidx = 0;
			while(ess[eidx]){
				if(pss[pidx] == "9"){
					newText += ess[eidx].number();
					pidx++;
					eidx++;
				}else if(pss[pidx] == "Z") {
					if(ess[eidx] > 0){
						newText += ess[eidx];
					}else{
						newText += "1";
					}
					pidx++;
					eidx++;
				}else if(pss[pidx] == "X") {
					if(eventType == "blur") {
						newText += "*";
					}else{
						newText += ess[eidx];
					}
					pidx++;
					eidx++;
				}else if(typeof pss[pidx] != "undefined"){
					newText += pss[pidx];
					pidx++;
				}else{
					newText += ess[eidx];
					eidx++;
				}
			}
			/*
			for(var eidx = 0;eidx<ess.length;eidx++){

			}
			*/
			return newText;


		}
		else if(Object.isFunction(obj.config.pattern)){
			returnValue = obj.config.pattern.call({val:val, objID: objID, config:obj.config}, val);
		}
		else{
			returnValue = val;
		}

		return returnValue;
	},
	bindPatternGetText: function(objID, objSeq){

		if(!Object.isNumber(objSeq)) {
			/*
			axf.each(this.objects, function (index, O) {
				if (O.id == objID) {
					objSeq = index;
					return false;
				}
			});
			*/
			for(var index = 0 ; index < this.objects.length ; index++){
				if(this.objects[index].id == objID){ objSeq = index; break;}
			}
		}
		if(!Object.isNumber(objSeq)) return;
		var obj = this.objects[objSeq], val = obj.bindTarget.val();

		var regExpPattern, returnValue = "";
		if(obj.config.pattern == "moneyint") { // 소수점 포함안함
			returnValue = val.replace(/[\D]/g, "");
		}else if(obj.config.pattern == "money"){ // 소수점 포함
			returnValue = (val == "") ? "" : val.number();
		}else if(obj.config.pattern == "bizno"){
			returnValue = val.replace(/\D/g, "");
		}else if(obj.config.pattern == "phone"){
			returnValue = val.replace(/\D/g, "");
		}else if(obj.config.pattern == "date" || obj.config.pattern == "date(/)" || obj.config.pattern == "date(년월일)"){
			returnValue = val.replace(/\D/g, "");
		}else if(obj.config.pattern == "datetime" || obj.config.pattern == "datetime(/)" || obj.config.pattern == "datetime(년월일)"){
			returnValue = val.replace(/\D/g, "");
		}else if( obj.config.pattern == "custom" ){
			returnValue = obj.originalValue;
		}else if(Object.isFunction(obj.config.depattern)){
			returnValue = obj.config.depattern.call({val:val, objID: objID, config:obj.config}, val);
		}else{
			returnValue = val;
		}

		return returnValue;
	},
	bindPatternGetDisplayText: function(objID, objSeq){

		if(!Object.isNumber(objSeq)) {
			/*
			axf.each(this.objects, function (index, O) {
				if (O.id == objID) {
					objSeq = index;
					return false;
				}
			});
			*/
			for(var index = 0 ; index < this.objects.length ; index++){
				if(this.objects[index].id == objID){ objSeq = index; break; }
			}
		}
		if(!Object.isNumber(objSeq)) return;
		var obj = this.objects[objSeq], val = obj.bindTarget.val();

		var regExpPattern, returnValue = "";
		if(Object.isFunction(obj.config.depattern)){
			returnValue = obj.config.depattern.call({val:val, objID: objID, config:obj.config}, val);
		}else{
			returnValue = val;
		}

		return returnValue;
	},
	bindPatternSetText: function(objID, objSeq, val){
		if(!Object.isNumber(objSeq)) {
			/*
			axf.each(this.objects, function (index, O) {
				if (O.id == objID) {
					objSeq = index;
					return false;
				}
			});
			*/
			for(var index = 0 ; index < this.objects.length ; index++){
				if(this.objects[index].id == objID){ objSeq = index; break;}
			}
		}
		if(!Object.isNumber(objSeq)) return;
		var obj = this.objects[objSeq];
		obj.bindTarget.val( this.bindPatternGetValue(objID, objSeq, val, "blur") );
	},

	/**
	 * bindTagSelector
	 */
	bindTagSelector: function(objID, objSeq){
		var _this = this, cfg = this.config,
			obj = this.objects[objSeq], po, h;

		if (!obj.config.onchange) obj.config.onchange = obj.config.onChange;
		if(!obj.bindAnchorTarget) obj.bindAnchorTarget = axdom("#" + cfg.targetID + "_AX_" + objID);
		if(!obj.bindTarget) obj.bindTarget = axdom("#" + objID);

		if(!obj.bindTarget_paddingTop) obj.bindTarget_paddingTop = obj.bindTarget.css("padding-top");

		// 저장된 태그 리스트
		obj.tagList = [];

		obj.bindAnchorTarget.show();
		h = obj.bindAnchorTarget.data("height") - 2;

		po = [];
		po.push('<div id="'+ cfg.targetID + '_AX_' + objID + '_AX_tagContainer" class="AXTag-selector-tagcontainer">');
		po.push('</div>');
		obj.bindAnchorTarget.html(po.join(''));
		obj.tagContainer = obj.bindAnchorTarget.find('#' + cfg.targetID + '_AX_' + objID +'_AX_tagContainer');

		// 태그 컨테이너 클릭 이벤트 연결

		obj.tagContainer.bind("click", (function(e){
			var event_type = "";
			e = e || window.event;
			var target = axf.get_event_target(e.target, function(el){
				if(axdom(el).hasClass("AXTag-selector-tagitem-remove")){
					event_type = "remove";
					return true;
				}
				else
				if(axdom(el).hasClass("AXTag-selector-tagitem")){
					event_type = "item";
					return true;
				}
			});

			if(target && event_type == "remove") {
				this.bindTagSelector_removeItem(objID, objSeq, axdom(target).attr("data-tag-index"));
			}
			else
			if(!target) obj.bindTarget.focus();

		}).bind(this));

		// 옵션 박스 패널
		obj.tagExpandBoxId = cfg.targetID + "_AX_" + objID + "_AX_expandBox";

		obj.bindTarget.unbind("focus.AXTagSelector").bind("focus.AXTagSelector", function(event) {
			if(obj.keydownTimer) clearTimeout(obj.keydownTimer);
			obj.keydownTimer = setTimeout((function(event){
				_this.bindTagSelector_onkeydown(event, objID, objSeq);
			}).bind(_this, event), 100);
		});
		obj.bindTarget.unbind("keydown.AXTagSelector").bind("keydown.AXTagSelector", function(event){
			if(obj.bindAnchorTarget.attr("disable") == "disable" || obj.bindTarget.attr("disable") == "disable") return false;

			if(obj.keydownTimer) clearTimeout(obj.keydownTimer);
			obj.keydownTimer = setTimeout((function(event){
				_this.bindTagSelector_onkeydown(event, objID, objSeq);
			}).bind(_this, event), 100);
		});

	},
	bindTagSelector_onkeydown: function(e, objID, objSeq){
		var _this = this, cfg = this.config,
			obj = this.objects[objSeq], po,
			anchorWidth, anchorHeight, styles, focusedIndex;

		if(e.type == "keydown"){
			if(e.keyCode == axf.Event.KEY_BACKSPACE){
				if(obj.tagList.length > 0) {
					if(obj.ready_backspace){
						this.bindTagSelector_removeItem(objID, objSeq, obj.tagList.length - 1);
						this.bindTagSelector_close(objID, objSeq);
						obj.config.focusedIndex = undefined;
						delete obj.ready_backspace;
					}else{
						obj.ready_backspace = true;
					}
				}
				return this;
			}else{
				delete obj.ready_backspace;
			}

			if(
				e.keyCode == axf.Event.KEY_RETURN ||
				e.keyCode == axf.Event.KEY_DOWN ||
				e.keyCode == axf.Event.KEY_UP
			) {
				if (!AXgetId(obj.tagExpandBoxId)) return this;
				if(e.keyCode == axf.Event.KEY_RETURN) {
					if(typeof obj.config.focusedIndex !== "undefined"){
						this.bindTagSelector_addItem(objID, objSeq, obj.config.focusedIndex);
						this.bindTagSelector_close(objID, objSeq);
						obj.config.focusedIndex = undefined;
					}
				}
				else
				if(e.keyCode == axf.Event.KEY_DOWN) {
					focusedIndex = 0;
					if (typeof obj.config.focusedIndex !== "undefined") {
						axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_" + obj.config.focusedIndex + "_AX_option").removeClass("on");
						focusedIndex = Number(obj.config.focusedIndex) + 1;
						if(obj.config.options.length <= focusedIndex) focusedIndex = obj.config.options.length-1;
					}
					axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_" + focusedIndex + "_AX_option").addClass("on");
					obj.config.focusedIndex = focusedIndex;
					obj.myUIScroll.focusElement(cfg.targetID + "_AX_" + objID + "_AX_" + focusedIndex + "_AX_option"); //focus
				}
				else
				if(e.keyCode == axf.Event.KEY_UP) {
					focusedIndex = 0;
					if (typeof obj.config.focusedIndex !== "undefined") {
						axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_" + obj.config.focusedIndex + "_AX_option").removeClass("on");
						focusedIndex = Number(obj.config.focusedIndex) - 1;
						if(0 > focusedIndex) focusedIndex = 0;
					}
					axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_" + focusedIndex + "_AX_option").addClass("on");
					obj.config.focusedIndex = focusedIndex;
					obj.myUIScroll.focusElement(cfg.targetID + "_AX_" + objID + "_AX_" + focusedIndex + "_AX_option"); //focus
				}
				return this;
			}
		}

		//console.log(e);
		if (!AXgetId(obj.tagExpandBoxId)) {
			//Expand Box 생성 구문 작성
			anchorWidth = obj.bindAnchorTarget.width() - 2; // anchor width
			anchorHeight = obj.bindAnchorTarget.data("height") - 1;
			styles = [];

			styles.push("top:" + anchorHeight + "px");
			styles.push("width:" + (obj.config.selectorWidth || anchorWidth) + "px");
			styles.push("z-index:10000");

			po = [];
			po.push("<div id=\"" + obj.tagExpandBoxId + "\" class=\"bindSelectorNodes " + cfg.anchorSelectorExpandBoxClassName + "\" style=\"" + styles.join(";") + "\">");
			po.push("<div id=\"" + cfg.targetID + "_AX_" + objID + "_AX_expandScroll\" class=\"bindSelectorNodes " + cfg.anchorSelectorExpandScrollClassName + "\">");
			po.push("	<div class=\"AXLoadingSmall bindSelectorNodes\"></div>");
			po.push("</div>");
			po.push("</div>");
			axdom(document.body).append(po.join(''));

			obj.tagExpandBox = axdom("#" + obj.tagExpandBoxId);
			obj.tagExpandBoxScroll = obj.tagExpandBox.find("#" + cfg.targetID + "_AX_" + objID + "_AX_expandScroll");
			if (obj.config.positionFixed) {
				obj.tagExpandBox.css({ "position": "fixed" });
			}
			var expBoxHeight = obj.tagExpandBox.outerHeight();
			var offset = (obj.config.positionFixed) ? obj.bindAnchorTarget.position() : obj.bindAnchorTarget.offset();
			if (obj.config.position) {
				offset = obj.bindAnchorTarget.offset();
				if (obj.config.position.top != undefined) {
					offset.top = obj.config.position.top;
				}
			}
			var css = {};
			css.top = offset.top + anchorHeight;
			if (obj.config.direction == "bottom") {
				css.top -= obj.tagExpandBox.outerHeight();
			}

			css.left = offset.left;
			obj.tagExpandBox.css(css);

			// 다른 영역을 클릭했는가?
			axdom(document.body).unbind("click.AXTagSelector").bind("click.AXTagSelector", (function(e){
				if(obj.blurTimer) clearTimeout(obj.blurTimer);
				obj.blurTimer = setTimeout(function(){
					_this.bindTagSelector_onclick(e||window.event, objID, objSeq);
				}, 100);
			}).bind(this));
			obj.bindTarget.unbind("blur.AXTagSelector").bind("blur.AXTagSelector", (function(e) {
				if(obj.blurTimer) clearTimeout(obj.blurTimer);
				obj.blurTimer = setTimeout(function(){
					_this.bindTagSelector_onclick(e||window.event, objID, objSeq);
				}, 700);
			}).bind(this));
		}
		this.bindTagSelector_setOptions(objID, objSeq, obj.bindTarget.val());
	},
	bindTagSelector_setOptions: function(objID, objSeq, kword){
		var _this = this, cfg = this.config,
			obj = this.objects[objSeq], po,
			maxHeight = obj.config.maxHeight || 130,
			next_fn;

		next_fn = function() {
			if (po.length == 0) {
				var selectorOptionEmpty = "";
				if (AXConfig.AXInput) selectorOptionEmpty = (AXConfig.AXInput.selectorOptionEmpty || "empty options");
				po.push("<div class=\"empty\">" + selectorOptionEmpty + "</div>");
			}
			obj.tagExpandBoxScroll.html(po.join(''));

			var expandScrollHeight = obj.tagExpandBoxScroll.outerHeight();
			if (expandScrollHeight > maxHeight) expandScrollHeight = maxHeight;
			obj.tagExpandBox.css({height: expandScrollHeight + "px"});

			if (obj.myUIScroll) obj.myUIScroll.unbind();
			obj.myUIScroll = new AXScroll();
			obj.myUIScroll.setConfig({
				CT_className  : "AXScrollSmall",
				targetID      : cfg.targetID + "_AX_" + objID + "_AX_expandBox",
				scrollID      : cfg.targetID + "_AX_" + objID + "_AX_expandScroll",
				touchDirection: false
			});
			obj.myUIScroll.scrollTop(0);

			if (obj.config.selectedIndex != undefined) {
				axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_" + obj.config.selectedIndex + "_AX_option").addClass("on");
				obj.myUIScroll.focusElement(cfg.targetID + "_AX_" + objID + "_AX_" + obj.config.selectedIndex + "_AX_option"); //focus
				obj.config.focusedIndex = obj.config.selectedIndex;
			}

			if (obj.config.direction == "bottom") {
				var offset = (obj.config.positionFixed) ? obj.bindAnchorTarget.position() : obj.bindAnchorTarget.offset();
				if (obj.config.position) {
					offset = obj.bindAnchorTarget.offset();
					if (obj.config.position.top != undefined) {
						offset.top = obj.config.position.top;
					}
				}
				obj.tagExpandBox.css({top: offset.top - obj.tagExpandBox.outerHeight()});
			}

			// focus item
			if (typeof kword !== "undefined" && kword != "") {
				kword = kword.replace(/\//g, "\\\/");
				var sw = axf.consonantKR((kword || "").dec());
				var reAt = new RegExp("^" + sw + ".*", "i");

				var ix = null;
				for (var i = 0, l = obj.config.options.length; i < l; i++) {
					if (reAt.test((obj.config.options[i][cfg.reserveKeys.optionText] || ""))) {
						ix = i;
						break;
					}
				}
				if (ix != null) {
					if (typeof obj.config.focusedIndex !== "undefined") {
						axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_" + obj.config.focusedIndex + "_AX_option").removeClass("on");
					}
					axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_" + ix + "_AX_option").addClass("on");
					obj.config.focusedIndex = ix;
					obj.myUIScroll.focusElement(cfg.targetID + "_AX_" + objID + "_AX_" + ix + "_AX_option"); //focus
				}
			} else {
				if (obj.config.focusedIndex != undefined) {
					axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_" + obj.config.focusedIndex + "_AX_option").removeClass("on");
				}
			}
		}

		var get_options = function(options){
			var npo = [];
			for(var i=0,l=options.length;i<l;i++){
				var O =options[i];
				// options의 optionText, optionDesc의 참조값을 디코딩해서 디코딩은 한 번만 사용하도록 변경
				O[cfg.reserveKeys.optionText] = (O[cfg.reserveKeys.optionText] ? O[cfg.reserveKeys.optionText].dec() : "");
				O.desc = (O.desc ? O.desc.dec() : "");
				O.optionDesc = (O.optionDesc ? O.optionDesc.dec() : "");

				var descStr = O.desc || O.optionDesc, styles;
				if (descStr != "") descStr = "<span>" + descStr + "</span>";

				styles = "";
				for(var ti=0,tl=obj.tagList.length, tag;ti<tl;ti++) {
					tag = obj.tagList[ti];
					//trace(tag[cfg.reserveKeys.optionValue] == O[cfg.reserveKeys.optionValue]);
					if(tag[cfg.reserveKeys.optionValue] == O[cfg.reserveKeys.optionValue]){
						styles = ' style="text-decoration: line-through;"';
					}
				}
				npo.push("<a " + obj.config.href + " id=\"" + cfg.targetID + "_AX_" + objID + "_AX_" + i + "_AX_option\" class=\"bindSelectorNodes\" "+ styles +">"
				+ O[cfg.reserveKeys.optionText] + descStr + "</a>");
			}
			return npo;
		}

		if(obj.config.ajaxUrl){

			obj.inProgress = true; //진행중 상태 변경
			var url = obj.config.ajaxUrl;
			var pars = obj.config.ajaxPars || {};
			var _method = "post";
			var _headers = {};
			var _contentType = AXConfig.AXReq.contentType;
			var _responseType = AXConfig.AXReq.responseType;
			var _dataType = AXConfig.AXReq.dataType;
			var _async = AXConfig.AXReq.async;

			// ajax 옵션 확장
			if (obj.config.method) _method = obj.config.method;
			if (obj.config.headers) _headers = obj.config.headers;
			if (obj.config.contentType) _contentType = obj.config.contentType;
			if (obj.config.responseType) _responseType = obj.config.responseType;
			if (obj.config.dataType) _dataType = obj.config.dataType;
			if (obj.config.ajaxAsync) _async = obj.config.ajaxAsync;

			var selectorName = obj.config.selectorName || obj.bindTarget.attr("name");
			if (pars == "") {
				pars = selectorName + "=" + (kword||"").enc();
			} else if ((typeof pars).toLowerCase() == "string") {
				pars += "&" + selectorName + "=" + kword.enc();
			} else if ((typeof pars).toLowerCase() == "object") {
				pars[selectorName] = kword.enc();
			}

			new AXReq(url, {
				type: _method,
				headers: _headers,
				contentType: _contentType,
				responseType: _responseType,
				dataType: _dataType,
				async: _async,
				debug: ((typeof obj.config.debug !== "undefined") ? obj.config.debug : false),
				pars: pars,
				onsucc: function (res) {
					if (!res.error) {

						obj.config.options = (res[cfg.reserveKeys.options] || []);
						obj.config.focusedIndex = undefined;
						po = get_options(obj.config.options);
						next_fn.call(_this);

					} else {
						axf.alert(res.error);
					}
					obj.inProgress = false;
				}
			});


		}
		else
		{
			//var optionPrintLength = obj.config.optionPrintLength || 100;
			if (!obj.config.options){
				console.log("config.options is not defined");
				return this;
			}

			po = get_options(obj.config.options);

			//  옵션리스트 구성완료 후 처리
			next_fn.call(this);
		}
	},
	bindTagSelector_onclick: function(e, objID, objSeq){
		var _this = this, cfg = this.config,
			obj = this.objects[objSeq];

		if(e.type == "blur"){
			this.bindTagSelector_close(objID, objSeq);
		}
		else
		if(e.type == "click"){
			var click_type = "";
			var target = axf.get_event_target(e.target, function(el){
				if(axdom(el).hasClass("bindSelectorNodes")){
					click_type = "option";
					return true;
				}
				else
				if(el.id == objID){
					click_type = "input";
					return true;
				}
			});

			if(target){
				//console.log(target, click_type);
				if(click_type == "option") {
					// get option index
					var ids = target.id.split(/_AX_/g);
					var optionIndex = ids[ids.length-2];
					this.bindTagSelector_addItem(objID, objSeq, optionIndex);
					this.bindTagSelector_close(objID, objSeq);
				}
				else
				if(click_type == "input") {
					// 입풋을 누르다니..
				}
			}
			else
			{
				this.bindTagSelector_close(objID, objSeq);
			}
		}
		//trace(e.type);
		//trace(objID, objSeq);
	},
	bindTagSelector_close: function(objID, objSeq){
		var _this = this, cfg = this.config,
			obj = this.objects[objSeq];

		obj.tagExpandBox.remove();
		axdom(document.body).unbind("click.AXTagSelector");
		obj.bindTarget.unbind("blur.AXTagSelector");
	},
	bindTagSelector_addItem: function(objID, objSeq, optionIndex){
		var _this = this, cfg = this.config,
			obj = this.objects[objSeq], objName, po, addOption, pass_add;

		if(isNaN(Number(optionIndex))) {
			console.log("optionIndex is NaN");
			return this;
		}

		//obj.tagList 태그저장리스트
		addOption = obj.config.options[optionIndex];
		pass_add = true; // 등록 허용
		for(var i=0,l=obj.tagList.length, tag;i<l;i++){
			tag = obj.tagList[i];
			if(tag[cfg.reserveKeys.optionValue] == addOption[cfg.reserveKeys.optionValue]){
				pass_add = false; // 이미 등록된 값이 존재함.
				break;
			}
		}
		if(pass_add){
			objName = obj.bindTarget.attr("name");
			po = [];
			if(!obj.config.optionValue_inputName) obj.config.optionValue_inputName = objName;
			po.push('<span class="AXTag-selector-tagitem" data-option-value="' + addOption[cfg.reserveKeys.optionValue] + '">');
				if(obj.config.optionValue_inputName) po.push('<input type="hidden" name="' + obj.config.optionValue_inputName + '" value="' + addOption[cfg.reserveKeys.optionValue] + '" />');
				if(obj.config.optionText_inputName) po.push('<input type="hidden" name="' + obj.config.optionText_inputName + '" value="' + addOption[cfg.reserveKeys.optionText] + '" />');
				po.push( addOption[cfg.reserveKeys.optionText] );
				po.push('<span class="AXTag-selector-tagitem-remove" data-tag-index="'+ obj.tagList.length +'"></span>');
			po.push('</span>');
			obj.tagContainer.append( po.join('') );
			obj.tagList.push(addOption);
			//
			obj.bindTarget.css({"padding-top":obj.tagContainer.height()}).val('');
			obj.bindAnchorTarget.data("height", obj.bindTarget.outerHeight());
			axdom(window).resize();
		}
	},
	bindTagSelector_removeItem: function(objID, objSeq, tagIndex){
		var _this = this, cfg = this.config,
			obj = this.objects[objSeq], po, objName = obj.bindTarget.attr("name");;

		if(typeof tagIndex !== "undefined") {
			obj.tagContainer.find('[data-tag-index="' + tagIndex + '"]').remove();
			obj.tagList.splice(tagIndex, 1);
		}

		po = [];
		for(var i=0,l=obj.tagList.length, tag;i<l;i++) {
			tag = obj.tagList[i];
			po.push('<span class="AXTag-selector-tagitem" data-option-value="' + tag[cfg.reserveKeys.optionValue] + '">');
			po.push('<input type="hidden" name="' + objName + '" value="' + tag[cfg.reserveKeys.optionValue] + '" />');
			po.push( tag[cfg.reserveKeys.optionText] );
			po.push('<span class="AXTag-selector-tagitem-remove" data-tag-index="'+ i +'"></span>');
			po.push('</span>');
		}
		obj.tagContainer.html( po.join('') );

		if(obj.tagList.length == 0){
			obj.bindTarget.css({"padding-top": obj.bindTarget_paddingTop}).val('');
		}
		else
		{
			obj.bindTarget.css({"padding-top": obj.tagContainer.height()}).val('');
		}

		obj.bindAnchorTarget.data("height", obj.bindTarget.outerHeight());
		axdom(window).resize();
	},
	bindTagSelector_setItem: function(objID, tags){
		var cfg = this.config,
			objSeq = null, obj;
		for(var i=0, l=this.objects.length;i<l;i++){
			if(this.objects[i].id === objID) {objSeq = i;break;}
		}
		obj = this.objects[objSeq];

		if(Object.isArray(tags)){
			obj.tagList = [];
			for(var i=0, l=tags.length, tag;i<l;i++){
				var tag = tags[i];
				if(typeof tag[cfg.reserveKeys.optionValue] === "undefined") tag[cfg.reserveKeys.optionValue] = tag.toString();
				if(typeof tag[cfg.reserveKeys.optionText] === "undefined") tag[cfg.reserveKeys.optionText] = tag.toString();
				obj.tagList.push(tag);
			}
			this.bindTagSelector_removeItem(objID, objSeq);
		}
		return this;
	}
});

var AXInputPro = new AXInputConverterPro();
AXInputPro.setConfig({ targetID: "inputBasic" });


/**
 * @method jQueryFns.bindPattern
 * @param config {JSObject} bindConfig
 * @returns jQueryObject
 * @description
 * @example
```
$("#id").bindPattern({
	pattern:"money|bizno|{function}"
});

//sample
$("#ax-bind-pattern-custom-target").bindPattern({
    pattern: function(val){
        //trace(this); //전달된 this를 확인 할 수 있습니다.
        return val.ucase();
    }
});
```
 */
axdom.fn.bindPattern = function(config){
	axf.each(this, function () {
		config = config || {}; config.id = this.id;
		config.bindType = "pattern";
		AXInputPro.bind(config);
	});
	return this;
};

/**
 * @method jQueryFns.bindPatternSetConfig
 * @param config {JSObject} bindPattern config
 * @returns jQueryObject
 * @description
 * @example
```
 $("#id").bindPatternSetConfig({
    allow_minus: true,
	max_length: 5
 });
```
 */
axdom.fn.bindPatternSetConfig = function(config){
	axf.each(this, function () {
		AXInputPro.bindSetConfig(this.id, config);
	});
	return this;
};

/**
 * @method jQueryFns.bindPatternGetText
 * @param
 * @returns returnVals {String|Array}
 * @description
 * @example
 ```
 var text = $("#id").bindPatternGetText();
 ```
 */
axdom.fn.bindPatternGetText = function(){
	var returnVals = "";
	axf.each(this, function () {
		var getVal = AXInputPro.bindPatternGetText(this.id);
		if(returnVals == ""){
			returnVals = getVal;
		}else{
			if(Object.isString(returnVals)){
				returnVals = [returnVals]; // 형변환
				returnVals.push(getVal);
			}else if(Object.isArray(returnVals)){
				returnVals.push(getVal);
			}
		}
	});
	return returnVals;
};

/**
 * @method jQueryFns.bindPatternSetText
 * @param val {String}
 * @returns jQueryObject
 * @description
 * @example
 ```
 $("#id").bindPatternSetText("12345.123");
 ```
 */
axdom.fn.bindPatternSetText = function(val){
	axf.each(this, function () {
		AXInputPro.bindPatternSetText(this.id, null,  val);
	});
	return this;
};

/**
 * @method jQueryFns.bindPatternGetDisplayText
 * @param null
 * @returns String
 * @description 표시된 값 가져오는 함수
 * @example
```
 $("#id").bindPatternGetDisplayText();
```
 */

axdom.fn.bindPatternGetDisplayText = function(){
	var returnVals = "";
	axf.each(this, function () {
		var getVal = AXInputPro.bindPatternGetDisplayText(this.id);
		if(returnVals == ""){
			returnVals = getVal;
		}else{
			if(Object.isString(returnVals)){
				returnVals = [returnVals]; // 형변환
				returnVals.push(getVal);
			}else if(Object.isArray(returnVals)){
				returnVals.push(getVal);
			}
		}

	});
	return returnVals;
};




/**
 * @method jQueryFns.bindTagSelector
 * @param config {JSObject} bindConfig
 * @returns jQueryObject
 * @description
 * @example
 * ```js
 * //sample
 * $("#ax-bind-pattern-custom-target").bindTagSelector({
 *
 * });
 * ```
 */
axdom.fn.bindTagSelector = function(config){
	axf.each(this, function () {
		config = config || {}; config.id = this.id;
		config.bindType = "tagSelector";
		AXInputPro.bind(config);
	});
	return this;
};

/**
 * @method jQueryFns.bindTagSelector_setItem
 * @param config {JSObject} bindConfig
 * @returns jQueryObject
 * @description
 * @example
 * ```js
 * //sample
 * $("#ax-bind-pattern-custom-target").bindTagSelector_setItem([
 *  {optionValue:1, optionText:"Seoul"},
 *  {optionValue:2, optionText:"대구"}
 * ]);
 * ```
 */
axdom.fn.bindTagSelector_setItem = function(list){
	axf.each(this, function () {
		AXInputPro.bindTagSelector_setItem(this.id, list);
	});
	return this;
};


/* ---------------------------- */
var AXSelectConverter = Class.create(AXJ, {
	initialize: function (AXJ_super) {
		AXJ_super();
		this.objects = [];
		this.config.anchorClassName = "AXanchor";
		this.config.anchorSelectClassName = "AXanchorSelect";
	},
	init: function () {
		var browser = AXUtil.browser;
		this.isMobile = browser.mobile;
		//axdom(window).resize(this.windowResize.bind(this));
		axdom(window).resize(this.alignAllAnchor.bind(this));
		
		this.config.reserveKeys = {
			options: (AXConfig.AXSelect && AXConfig.AXSelect.keyOptions) || "options",
			optionValue: (AXConfig.AXSelect && AXConfig.AXSelect.keyOptionValue) || "optionValue",
			optionText: (AXConfig.AXSelect && AXConfig.AXSelect.keyOptionText) || "optionText",
			optionData: (AXConfig.AXSelect && AXConfig.AXSelect.keyOptionData) || "optionData"
		};
	},
	windowResize: function () {
		// 사용안함
		var windowResizeApply = this.windowResizeApply.bind(this);
		if (this.windowResizeObserver) clearTimeout(this.windowResizeObserver);
		this.windowResizeObserver = setTimeout(function () {
			windowResizeApply();
		}, 10);
	},
	windowResizeApply: function(){
		// 사용안함
		if (this.windowResizeObserver) clearTimeout(this.windowResizeObserver);
		this.alignAllAnchor();
	},
	alignAllAnchor: function () {
		for(var i=0;i<this.objects.length;i++){
			this.alignAnchor(this.objects[i].id, i);
		}
	},
	bindSetConfig: function (objID, configs) {
		var findIndex = null;
		for (var O, index = 0; (index < this.objects.length && (O = this.objects[index])); index++) {
			if (O.id == objID && O.isDel != true) {
				findIndex = index;
				break;
			}
		}
		if (findIndex == null) {
			//trace("바인드 된 오브젝트를 찾을 수 없습니다.");
		} else {
			var _self = this.objects[findIndex];
            axdom.each(configs, function (k, v) {
				_self.config[k] = v;
			});
		}
	},
	unbind: function (obj) {
		//var collect = [];
		var removeAnchorId;
		var removeIdx;
		//trace(this.objects);
		for (var O, index = 0; (index < this.objects.length && (O = this.objects[index])); index++) {
			if (O.id != obj.id) {
				// collect.push(this);

			} else {
				if (O.isDel != true) {
					removeAnchorId = O.anchorID;
					removeIdx = index;
				}
			}
		}
		//this.objects = collect;

		if (removeAnchorId) {
			var objDom = axdom("#" + obj.id), objAnchorDom = axdom("#" + removeAnchorId);
			this.objects[removeIdx].isDel = true;
			objDom.removeAttr("data-axbind");
			objDom.css({visibility:"visible"});

			if (this.isMobile) {
				objAnchorDom.before(axdom("#" + obj.id));
				objAnchorDom.remove();
			} else {
				objAnchorDom.remove();
				objDom.show();
			}
		}
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

		var objID = obj.id, objSeq = null, objConfig = {}, reserveKeys = jQuery.extend({}, cfg.reserveKeys);
		objConfig = jQuery.extend(objConfig, obj, true);
		if(typeof objConfig.reserveKeys == "undefined") objConfig.reserveKeys = {};
		objConfig.reserveKeys = jQuery.extend(reserveKeys, objConfig.reserveKeys, true);
		
		for (var O, index = 0; (index < this.objects.length && (O = this.objects[index])); index++) {
			if (O.id == objID && O.isDel != true) {
				objSeq = index;
				break;
			}
		}

		if (typeof objConfig.href == "undefined") objConfig.href = cfg.href;

		if (objSeq == null) {
			objSeq = this.objects.length;
			this.objects.push({ id: objID, anchorID: cfg.targetID + "_AX_" + objID, config: objConfig });
		} else {
			this.objects[objSeq].isDel = undefined;
			this.objects[objSeq].config = objConfig;
		}

		this.appendAnchor(objID, objSeq);
		this.bindSelect(objID, objSeq);
		this.windowResize();
	},
	appendAnchor: function (objID, objSeq) {
		var cfg = this.config, _this = this;
		var obj = this.objects[objSeq];

		if (AXgetId(cfg.targetID + "_AX_" + objID)) {
            axdom("#" + cfg.targetID + "_AX_" + objID).remove();
		}
		var anchorNode = axdom("<div id=\"" + cfg.targetID + "_AX_" + objID + "\" class=\"" + cfg.anchorClassName + "\" style=\"display:none;\"></div>");
		var iobj = axdom("#" + objID);
		iobj.attr("data-axbind", "select");
		if(this.isMobile) iobj.before(anchorNode);
		else iobj.after(anchorNode);

		var iobjPosition = iobj.position();
		var l = iobjPosition.left, t = iobjPosition.top, w = 0, h = 0;

		w = iobj.outerWidth();
		h = iobj.outerHeight();

		var css = { left: l, top: t, width: w, height: h }, objDom = axdom("#" + cfg.targetID + "_AX_" + objID);
		objDom.css(css);
		objDom.data("height", h);

		obj.iobj = iobj;
		obj.objDom = objDom;
		// TODO : obj에 iobj, objDom 연결
	},
	alignAnchor: function (objID, objSeq){
		var cfg = this.config, _this = this;
		var obj = this.objects[objSeq];

		var iobj = obj.iobj;
		var iobjPosition = iobj.position();
		var l = iobjPosition.left, t = iobjPosition.top, w = 0, h = 0;

		var borderW = iobj.css("border-left-width").number();
		var borderT = iobj.css("border-top-width").number();
		var borderB = iobj.css("border-bottom-width").number();
		var marginW = iobj.css("margin-left").number();
		var marginH = iobj.css("margin-top").number();
		l = l + marginW;

		//t = t;
		w = iobj.outerWidth();
		h = iobj.outerHeight();

		var css = { left: l, top: t, width: w, height: h };
		obj.objDom.css(css);
		obj.objDom.data("height", h);

		obj.objDom.find("#" + cfg.targetID + "_AX_" + objID + "_AX_SelectBox").css({width:w, height:h});
		obj.objDom.find("#" + cfg.targetID + "_AX_" + objID + "_AX_SelectTextBox").css({height:(h-(borderT+borderB))+"px"});

		obj.objDom.find("#" + cfg.targetID + "_AX_" + objID + "_AX_SelectText").css({"line-height":(h-(borderT+borderB))+"px"});
		obj.objDom.find("#" + cfg.targetID + "_AX_" + objID + "_AX_SelectBoxArrow").css({height:h});
	},
	bindSelect: function (objID, objSeq) {
		var cfg = this.config, _this = this;
		var obj = this.objects[objSeq], options, sendObj;

		var iobj = obj.iobj;
		var objDom = obj.objDom;
		
		if(!obj.config.onChange) obj.config.onChange = obj.config.onchange;
		if(!obj.config.onLoad) obj.config.onLoad = obj.config.onload;

		var w = objDom.width();
		var h = objDom.data("height");
		var borderT = iobj.css("border-top-width").number();
		var borderB = iobj.css("border-bottom-width").number();
		//trace(obj.config);

		var fontSize = iobj.css("font-size").number();
		var tabIndex = iobj.attr("tabindex");

		var po = [];
		po.push("<div id=\"" + cfg.targetID + "_AX_" + objID + "_AX_SelectBox\" class=\"" + cfg.anchorSelectClassName + "\" style=\"width:" + w + "px;height:" + h + "px;\">");
		po.push("<a " + obj.config.href + " class=\"selectedTextBox\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_SelectTextBox\" style=\"height:" + (h - (borderT+borderB)) + "px;\"");
		if(tabIndex != undefined) po.push(" tabindex=\""+tabIndex+"\"");
		po.push(">");
		po.push("	<div class=\"selectedText\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_SelectText\" style=\"line-height:" + (h - (borderT+borderB)) + "px;padding:0px 4px;font-size:" + fontSize + "px;\"></div>");
		po.push("	<div class=\"selectBoxArrow\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_SelectBoxArrow\" style=\"height:" + h + "px;\"></div>");
		po.push("</a>");
		po.push("</div>");

		//append to anchor
		objDom.empty();
		objDom.append(po.join(''));
		objDom.show();

		var objDom_selectTextBox = objDom.find("#" + cfg.targetID + "_AX_" + objID + "_AX_SelectTextBox");

		obj.selectedIndex = AXgetId(objID).options.selectedIndex;
		var options = [];
		for (var oi = 0; oi < AXgetId(objID).options.length; oi++) {
			options.push({ optionValue: AXgetId(objID).options[oi].value, optionText: AXgetId(objID).options[oi].text.enc() });
		}
		obj.options = AXUtil.copyObject(options);

		if (this.isMobile) {

			// mobile 브라우저인 경우
			iobj.css({opacity:0});
			var bindSelectChange = this.bindSelectChange.bind(this);
			obj.objOnChange = function () {
				bindSelectChange(objID, objSeq);

				if (obj.config.onChange) {
					obj.selectedIndex = AXgetId(objID).options.selectedIndex;
					AXgetId(objID).options[obj.selectedIndex].selected = true;
					obj.config.selectedObject = obj.options[obj.selectedIndex];

					options = AXgetId(objID).options[obj.selectedIndex];
					sendObj = {
						optionIndex:obj.selectedIndex, optionValue:options.value, optionText:options.text,
						value:options.value, text:options.text
					};
					obj.config.onChange.call(sendObj, sendObj);
				}

			};
			objDom_selectTextBox.unbind("click.AXSelect").bind("click.AXSelect", function (event) {
				axdom("#" + objID).click();
			});

			iobj.addClass("rootSelectBox");
			iobj.bind("change.AXSelect", obj.objOnChange);

		}
		else 
		{
			//AXUtil.alert(obj.options);

			// PC 브라우저인 경우
			iobj.css({visibility:"hidden"});
			var bindSelectExpand = this.bindSelectExpand.bind(this);
			var bindSelectClose = this.bindSelectClose.bind(this);

			objDom_selectTextBox.bind("click.AXSelect", function (event) {
				axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SelectTextBox").focus();
				bindSelectExpand(objID, objSeq, true, event);
			});

			objDom_selectTextBox.bind("keydown.AXSelect", function (event) {
				if(event.keyCode == AXUtil.Event.KEY_SPACE) bindSelectExpand(objID, objSeq, true, event);
				if(event.keyCode == AXUtil.Event.KEY_TAB || event.keyCode == AXUtil.Event.KEY_RETURN) return;
				//trace(String.fromCharCode(event.keyCode));

				if(_this.selectTextBox_onkeydown_obj){
					clearTimeout(_this.selectTextBox_onkeydown_obj);
					_this.selectTextBox_onkeydown_data += String.fromCharCode(event.keyCode);
				}else{
					_this.selectTextBox_onkeydown_data = String.fromCharCode(event.keyCode);
				}

				_this.selectTextBox_onkeydown_obj = setTimeout(function(){
					_this.selectTextBox_onkeydown(objID, objSeq, event);
				}, 300);
			});
		}

		if (obj.config.ajaxUrl) {

			var bindSelectChangeBind = this.bindSelectChange.bind(this);
			var bindSelectChange = function () {
				bindSelectChangeBind(objID, objSeq, "load");
			};

			var url = obj.config.ajaxUrl;
			var pars = obj.config.ajaxPars;
			var _method = "post";
			var _headers = {};
			var _contentType = AXConfig.AXReq.contentType;
			var _responseType = AXConfig.AXReq.responseType;
			var _dataType = AXConfig.AXReq.dataType;
			var _async = AXConfig.AXReq.async; 
				
			// ajax 옵션 확장
			if (obj.config.method) _method = obj.config.method;
			if (obj.config.headers) _headers = obj.config.headers;
			if (obj.config.contentType) _contentType = obj.config.contentType;
			if (obj.config.responseType) _responseType = obj.config.responseType;
			if (obj.config.dataType) _dataType = obj.config.dataType;
			if (obj.config.ajaxAsync) _async = obj.config.ajaxAsync;
			
			obj.selectedIndex = null;

			iobj.html("<option></option>");

			obj.inProgress = true; //진행중 상태 변경

			
			new AXReq(url, {
				type: _method,
				headers: _headers,
				contentType: _contentType,
				responseType: _responseType,
				dataType: _dataType,
				async: _async,
				debug: ((typeof obj.config.debug !== "undefined") ? obj.config.debug : false),
				pars: pars, 
				onsucc: function (res) {
					if ((res.result && res.result == AXConfig.AXReq.okCode) || (res.result == undefined && !res.error)) {

						var po = [], adj = 0;
						//obj.config.options = res.options;
						obj.config.options = res[obj.config.reserveKeys.options];
						
						if (obj.config.isspace) {
							po.push("<option value='"+(obj.config.isspaceValue||"")+"'");
							if (obj.selectedIndex == 0) po.push(" selected=\"selected\"");
							po.push(">" + (obj.config.isspaceTitle||"&nbsp;") + "</option>");
							adj =-1;
						}
						for (var opts, oidx = 0; (oidx < res[obj.config.reserveKeys.options].length && (opts = res[obj.config.reserveKeys.options][oidx])); oidx++) {
							//trace(opts);
							po.push("<option value=\"" + opts[obj.config.reserveKeys.optionValue] + "\" data-option=\"" + opts[obj.config.reserveKeys.optionData] + "\" ");
							if (obj.config.setValue == opts[obj.config.reserveKeys.optionValue] || opts.selected || (obj.selectedIndex||0).number()+adj == oidx) po.push(" selected=\"selected\"");
							po.push(">" + opts[obj.config.reserveKeys.optionText].dec() + "</option>");
						}
						axdom("#" + objID).html(po.join(''));

						var options = [];
						for (var oi = 0; oi < AXgetId(objID).options.length; oi++) {
							options.push({ optionValue: AXgetId(objID).options[oi].value, optionText: AXgetId(objID).options[oi].text.enc(), optionData:AXgetId(objID).options[oi].getAttribute("data-option") });
						}
						obj.options = AXUtil.copyObject(options);
						obj.selectedIndex = AXgetId(objID).options.selectedIndex;

						if (obj.config.onChange && obj.config.alwaysOnChange) {
							obj.config.focusedIndex = obj.selectedIndex;
							obj.config.selectedObject = obj.options[obj.selectedIndex];
							sendObj = {
								optionIndex: obj.selectedIndex,
								optionValue: obj.options[obj.selectedIndex].optionValue,
								optionText : obj.options[obj.selectedIndex].optionText,
								optionData : obj.options[obj.selectedIndex].optionData,
								value      : obj.options[obj.selectedIndex].optionValue,
								text       : obj.options[obj.selectedIndex].optionText,
								data       : obj.options[obj.selectedIndex].optionData
							};
							obj.config.onChange.call(sendObj, sendObj, "isPostBack");
						}
						bindSelectChange();

						if (obj.config.onLoad) {
							sendObj = {
								selectedIndex: obj.selectedIndex,
								selectedObject: obj.options[obj.selectedIndex],
								options: obj.options,
								response: res
							};
							obj.config.onLoad.call(sendObj, sendObj);
						}
						_this.alignAnchor(objID, objSeq);
					} else {
						//trace(res);
					}
					obj.inProgress = false;
				}
			});
		}
		else
		if (obj.config.options) {

			iobj.html("<option></option>");

			var po = [], adj = 0;
			if (obj.config.isspace) {
				po.push("<option value='"+(obj.config.isspaceValue||"")+"'");
				if (obj.selectedIndex == 0) po.push(" selected=\"selected\"");
				po.push(">" + (obj.config.isspaceTitle||"&nbsp;") + "</option>");
				adj = -1;
			}

			for (var opts, oidx = 0; (oidx < obj.config.options.length && (opts = obj.config.options[oidx])); oidx++) {
				//[obj.config.reserveKeys.optionValue]
				//[obj.config.reserveKeys.optionText]
				var optionText = (opts[obj.config.reserveKeys.optionText]||"").dec();
				po.push("<option value=\"" + opts[obj.config.reserveKeys.optionValue] + "\"");
				if (obj.config.setValue == opts[obj.config.reserveKeys.optionValue] || opts.selected || obj.selectedIndex.number()+adj == oidx) po.push(" selected=\"selected\"");
				po.push(">" + optionText + "</option>");
			}
			iobj.html(po.join(''));

			var options = [];
			for (var oi = 0; oi < AXgetId(objID).options.length; oi++) {
				options.push({ optionValue: AXgetId(objID).options[oi].value, optionText: AXgetId(objID).options[oi].text.enc() });
			}
			obj.options = AXUtil.copyObject(options);
			obj.selectedIndex = AXgetId(objID).options.selectedIndex;

			this.bindSelectChange(objID, objSeq, "load");

			if (obj.config.onChange && obj.config.alwaysOnChange) {
				obj.config.focusedIndex = obj.selectedIndex;
				obj.config.selectedObject = obj.options[obj.selectedIndex];

				options = AXgetId(objID).options[obj.selectedIndex];
				if(!options) {
					options = {value: "", text: ""};
				}
				sendObj = {
					optionIndex:obj.selectedIndex, optionValue:options.value, optionText:options.text,
					value:options.value, text:options.text
				};
				obj.config.onChange.call(sendObj, sendObj, "isPostBack");
			}

			if (obj.config.onLoad) {
				var selectedOption = this.getSelectedOption(objID, objSeq);
				obj.config.onLoad.call({selectedIndex:obj.selectedIndex, selectedObject:{optionValue:selectedOption.value, optionText:selectedOption.text}});
			}
			this.alignAnchor(objID, objSeq);
		}
		else
		{
			this.bindSelectChange(objID, objSeq, "load");
			if (obj.config.onChange && obj.config.alwaysOnChange) {
				var selectedOption = this.getSelectedOption(objID, objSeq);
				if (selectedOption) {
					sendObj = {
						optionIndex:selectedOption.index, 
						optionValue:selectedOption.value, 
						optionText:selectedOption.text,
						value:selectedOption.value, 
						text:selectedOption.text
					};
					obj.config.onChange.call(sendObj, sendObj, "isPostBack");
				}
			}
			if (obj.config.onLoad) {
				var selectedOption = this.getSelectedOption(objID, objSeq);
				obj.config.onLoad.call({selectedIndex:obj.selectedIndex, selectedObject:{optionValue:selectedOption.value, optionText:selectedOption.text}});
			}
			this.alignAnchor(objID, objSeq);
		}
	},
	selectTextBox_onkeydown: function(objID, objSeq, event){
		var cfg = this.config, _this = this;
		var obj = this.objects[objSeq];

		var bindSelectClose = this.bindSelectClose.bind(this);
		var chkVal = (_this.selectTextBox_onkeydown_data || ""), chkIndex = null;

		for (var O, index = 0; (index < obj.options.length && (O = obj.options[index])); index++) {
			if(O.optionValue.left(chkVal.length).lcase() == chkVal.lcase() || O.optionText.left(chkVal.length).lcase() == chkVal.lcase()){
				chkIndex = index;
				break;
			}
		};
		if(chkIndex != null){
			obj.selectedIndex = chkIndex;
			obj.config.focusedIndex = chkIndex;
			obj.config.selectedObject = obj.options[chkIndex];
			obj.config.isChangedSelect = true;
			bindSelectClose(objID, objSeq, event); // 값 전달 후 닫기
		}
		_this.selectTextBox_onkeydown_data = "";
	},
	getSelectedOption: function (objID, objSeq) {
		var cfg = this.config;
		var obj = this.objects[objSeq];

		if(AXgetId(objID) && AXgetId(objID).options.selectedIndex > -1){
			try{
				if(obj.selectedIndex != AXgetId(objID).options.selectedIndex) obj.selectedIndex = AXgetId(objID).options.selectedIndex;
			}catch(e){
			}
			var options = AXgetId(objID).options[AXgetId(objID).options.selectedIndex];
			return {
				value:options.value, text:options.text, data:options.getAttribute("data-option"), index:AXgetId(objID).options.selectedIndex
			}
		}else{
			obj.selectedIndex = 0;
			var options = AXgetId(objID).options[0];
			options = (options) ? {value:options.value,text:options.text, data:options.getAttribute("data-option")} : {value:"",text:"", data:""};
			return {
				value:options.value, text:options.text, data:options.data, index:0
			}
		}

	},
	bindSelectChange: function (objID, objSeq, isLoad) {
		var cfg = this.config;
		var obj = this.objects[objSeq];
		var selectedOption = this.getSelectedOption(objID, objSeq);
		if (selectedOption) {
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SelectText").html(selectedOption.text);
		}
		if(obj && !this.isMobile){
			if(!obj.iobj) obj.iobj = axdom("#" + objID);
			if(isLoad != "load") obj.iobj.trigger( "change" ); // change 이벤트 발생
		}
	},
	bindSelectExpand: function (objID, objSeq, isToggle, event) {
		var cfg = this.config;
		var obj = this.objects[objSeq];
		var jqueryTargetObjID = axdom("#"+ cfg.targetID + "_AX_" + objID);
		//Selector Option box Expand

		if(jqueryTargetObjID.data("disabled")) return;

		if (isToggle) { // 활성화 여부가 토글 이면
			if (AXgetId(cfg.targetID + "_AX_" + objID + "_AX_expandBox")) {
				if (obj.config.isChangedSelect) {
					this.bindSelectClose(objID, objSeq, event); // 닫기
				} else {
					axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox").remove(); // 개체 삭제 처리
					axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SelectBoxArrow").removeClass("on");
					//비활성 처리후 메소드 종료
					axdom(document).unbind("click.AXSelect");
					axdom(document).unbind("keydown.AXSelect");
				}
				return;
			}
		}
		axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox").remove(); // 활성화 전에 개체 삭제 처리
		axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SelectBoxArrow").removeClass("on");

		//Expand Box 생성 구문 작성
		var anchorWidth = axdom("#" + cfg.targetID + "_AX_" + objID).width() - 2; // anchor width
		var anchorHeight = axdom("#" + cfg.targetID + "_AX_" + objID).data("height") - 1;
		var styles = [];
		//styles.push("top:"+anchorHeight+"px");
		styles.push("width:" + anchorWidth + "px");

		var po = [];
		po.push("<div id=\"" + cfg.targetID + "_AX_" + objID + "_AX_expandBox\" class=\"AXselectExpandBox\" style=\"" + styles.join(";") + "\">");
		po.push("<div id=\"" + cfg.targetID + "_AX_" + objID + "_AX_expandScroll\" class=\"AXselectExpandScroll\">");
		po.push("	<div class=\"AXLoadingSmall\"></div>");
		po.push("</div>");
		po.push("</div>");
		axdom(document.body).append(po.join(''));
		axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SelectBoxArrow").addClass("on");

		var expandBox = axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox");
		if(obj.config.positionFixed){
			expandBox.css({"position":"fixed"});
		}
		var expBoxHeight = expandBox.outerHeight();
		var offset = (obj.config.positionFixed) ? jqueryTargetObjID.position() : jqueryTargetObjID.offset();

		if(obj.config.position){
			offset = jqueryTargetObjID.offset();
			if(obj.config.position.top != undefined){
				offset.top = obj.config.position.top;
			}
		}
		var css = {};
		css.top = offset.top + anchorHeight;
		//css.top = offset.top;
		css.left = offset.left;

		var bodyHeight;
		(AXUtil.docTD == "Q") ? bodyHeight = document.body.scrollHeight : bodyHeight = document.documentElement.scrollHeight;
		//trace({bodyHeight:bodyHeight, top:css.top});

		if(!obj.config.positionFixed){
			if (bodyHeight < css.top.number() + expBoxHeight) {
				css = {
					top: offset.top - expBoxHeight,
					left: offset.left
				}
			}
		}

		expandBox.css(css);

		this.bindSelectSetOptions(objID, objSeq);
	},
	bindSelectClose: function (objID, objSeq, event) {
		var obj = this.objects[objSeq], options, sendObj;
		//trace("bindSelectorClose");
		var cfg = this.config;
		if (AXgetId(cfg.targetID + "_AX_" + objID + "_AX_expandBox")) {
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox").remove(); // 개체 삭제 처리
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SelectBoxArrow").removeClass("on");

			//비활성 처리후 메소드 종료
			axdom(document).unbind("click", obj.documentclickEvent);
			axdom(document).unbind("keydown", obj.documentKeyup);

			if (obj.config.isChangedSelect) {
				AXgetId(objID).options[obj.selectedIndex].selected = true;
				if (obj.config.onChange) {
					options = AXgetId(objID).options[obj.selectedIndex];
					sendObj = {
						optionIndex:obj.selectedIndex, optionValue:options.value, optionText:options.text, optionData: options.getAttribute("data-option"),
						value: options.value, text: options.text, data: options.data
					};
					obj.config.onChange.call(sendObj, sendObj);
				}
				obj.config.isChangedSelect = false;
				this.bindSelectChange(objID, objSeq);
			}

			if(event) event.stopPropagation(); // disableevent
			return;
		}else{
			if (obj.config.isChangedSelect) {
				AXgetId(objID).options[obj.selectedIndex].selected = true;
				if (obj.config.onChange) {
					options = AXgetId(objID).options[obj.selectedIndex];
					sendObj = {
						optionIndex:obj.selectedIndex, optionValue:options.value, optionText:options.text, optionData: options.getAttribute("data-option"),
						value: options.value, text: options.text, data: options.data
					};
					obj.config.onChange.call(sendObj, sendObj);
				}
				obj.config.isChangedSelect = false;

				this.bindSelectChange(objID, objSeq);

			}
		}
	},
	bindSelectSetOptions: function (objID, objSeq) {
		var obj = this.objects[objSeq];
		var cfg = this.config;
		var jqueryTargetObjID = axdom("#" + cfg.targetID + "_AX_" + objID);
		var maxHeight = obj.config.maxHeight || 200;

		if (!obj.options) return;
		if (obj.options.length == 0) {
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox").hide();
		}

		var po = [];
		for (var O, index = 0; (index < obj.options.length && (O = obj.options[index])); index++) {
			po.push("<a " + obj.config.href + " id=\"" + cfg.targetID + "_AX_" + objID + "_AX_" + index + "_AX_option\">" + O.optionText.dec() + "</a>");
		}
		axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_expandScroll").html(po.join(''));

		var expandScrollHeight = axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_expandScroll").height();
		if (expandScrollHeight > maxHeight) expandScrollHeight = maxHeight;
		axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox").css({ height: expandScrollHeight + "px" });

		var bindSelectOptionsClick = this.bindSelectOptionsClick.bind(this);
		obj.documentclickEvent = function (event) {
			bindSelectOptionsClick(objID, objSeq, event);
		};
		var bindSelectKeyup = this.bindSelectKeyup.bind(this);
		obj.documentKeyup = function (event) {
			bindSelectKeyup(objID, objSeq, event);
		};
		axdom(document).bind("click.AXSelect", obj.documentclickEvent);
		axdom(document).bind("keydown.AXSelect", obj.documentKeyup);

		if (obj.myUIScroll) obj.myUIScroll.unbind();
		obj.myUIScroll = new AXScroll();
		obj.myUIScroll.setConfig({
			CT_className: "AXScrollSmall",
			targetID: cfg.targetID + "_AX_" + objID + "_AX_expandBox",
			scrollID: cfg.targetID + "_AX_" + objID + "_AX_expandScroll",
			touchDirection: false
		});

		if (obj.selectedIndex != undefined) {
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_" + obj.selectedIndex + "_AX_option").addClass("on");
			obj.myUIScroll.focusElement(cfg.targetID + "_AX_" + objID + "_AX_" + obj.selectedIndex + "_AX_option"); //focus
			obj.config.focusedIndex = obj.selectedIndex;
		}

		// 위치 재 정의 필요하면 정의 할 것 ----------------------------------
		var bodyHeight;
		(AXUtil.docTD == "Q") ? bodyHeight = document.body.clientHeight : bodyHeight = document.documentElement.clientHeight;
		//trace({bodyHeight:bodyHeight, top:css.top});

		var anchorHeight = jqueryTargetObjID.data("height") - 1;
		var expandBox = axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox");
		var expBoxHeight = expandBox.outerHeight();

		var offset = (obj.config.positionFixed) ? jqueryTargetObjID.position() : jqueryTargetObjID.offset();

		if(obj.config.position){
			offset = jqueryTargetObjID.offset();
			if(obj.config.position.top != undefined){
				offset.top = obj.config.position.top;
			}
		}

		var css = {};
		css.top = offset.top + anchorHeight;
		if(!obj.config.positionFixed){
			if (bodyHeight < css.top.number() + expBoxHeight) {
				css = {
					top: offset.top - expBoxHeight,
					left: offset.left
				}
				expandBox.css(css);
			}
		}
		// 위치 재 정의 필요하면 정의 할 것 ----------------------------------

	},
	bindSelectOptionsClick: function (objID, objSeq, event) {
		var obj = this.objects[objSeq];
		var cfg = this.config;
		var isSelectorClick = false;
		var eid = event.target.id.split(/_AX_/g);
		var tgid = event.target.id;

		if (event.target.id == "") isSelectorClick = false;
		else {
			if (event.target.id == objID || (eid[0] == cfg.targetID && tgid.substr(eid[0].length + 4, objID.length) == objID)) {
				isSelectorClick = true;
			}
		}

		if (!isSelectorClick) {
			this.bindSelectClose(objID, objSeq, event); // 셀럭터 외의 영역이 므로 닫기
		} else {
			if (eid.last() == "option") {
				var selectedIndex = eid[eid.length - 2];
				obj.selectedIndex = selectedIndex;
				obj.config.focusedIndex = selectedIndex;
				obj.config.selectedObject = obj.options[selectedIndex];

				obj.config.isChangedSelect = true;
				this.bindSelectClose(objID, objSeq, event); // 값 전달 후 닫기
			}
		}
	},
	bindSelectKeyup: function (objID, objSeq, event) {
		var obj = this.objects[objSeq];
		var cfg = this.config;
		if (event.keyCode == AXUtil.Event.KEY_TAB || event.keyCode == AXUtil.Event.KEY_ESC) {
			this.bindSelectClose(objID, objSeq, event); // 닫기
			return;
		} else if (event.keyCode == AXUtil.Event.KEY_UP) {
			if (!obj.options) return;
			if (obj.options.length == 0) return;
			var focusIndex = obj.options.length - 1;
			if (obj.config.focusedIndex == undefined || obj.config.focusedIndex == 0) {

			} else {
				focusIndex = (obj.config.focusedIndex) - 1;
			}
			this.bindSelectorSelect(objID, objSeq, focusIndex);
		} else if (event.keyCode == AXUtil.Event.KEY_DOWN) {
			if (!obj.options) return;
			if (obj.options.length == 0) return;
			var focusIndex = 0;
			if (obj.config.focusedIndex == undefined || obj.config.focusedIndex == obj.options.length - 1) {

			} else {
				focusIndex = (obj.config.focusedIndex).number() + 1;
			}
			this.bindSelectorSelect(objID, objSeq, focusIndex);
		} else if (event.keyCode == AXUtil.Event.KEY_RETURN) {
			//alert("RETURN");
			/*
			 axdom(document).unbind("click", obj.documentclickEvent);
			 axdom(document).unbind("keydown", obj.documentKeyup);
			 */
			/*
			 var selectedIndex = eid[eid.length - 2];
			 obj.selectedIndex = selectedIndex;
			 obj.config.focusedIndex = selectedIndex;
			 obj.config.selectedObject = obj.options[selectedIndex];

			 obj.config.isChangedSelect = true;
			 this.bindSelectClose(objID, objSeq, event); // 값 전달 후 닫기
			 */

		}
	},
	/* ~~~~~~~~~~~~~ */

	bindSelectorSelect: function (objID, objSeq, index, changeValue) {
		var obj = this.objects[objSeq];
		var cfg = this.config;
		if (obj.config.focusedIndex != undefined) {
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_" + obj.config.focusedIndex + "_AX_option").removeClass("on");
		}
		axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_" + index + "_AX_option").addClass("on");
		obj.config.focusedIndex = index;
		obj.selectedIndex = index;
		obj.config.selectedObject = obj.options[index];
		obj.config.isChangedSelect = true;
		obj.myUIScroll.focusElement(cfg.targetID + "_AX_" + objID + "_AX_" + index + "_AX_option"); //focus
	},
	bindSelectorSelectClear: function (objID, objSeq) {

		var obj = this.objects[objSeq];
		var cfg = this.config;
		if (obj.selectedIndex != undefined) {
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_" + obj.selectedIndex + "_AX_option").removeClass("on");
		}
		obj.selectedIndex = null;
		obj.config.focusedIndex = null;
		obj.config.selectedObject = null;
		obj.config.isChangedSelect = true;
	},

	/* ~~~~~~~~~~~~~ */
	bindSelectChangeValue: function (objID, value, onEnd) {
		var findIndex = null;

		for (var O, index = 0; (index < this.objects.length && (O = this.objects[index])); index++) {
			if (O.id == objID && O.isDel != true) {
				findIndex = index;
				break;
			}
		};

		if (findIndex == null) {
			//trace("바인드 된 오브젝트를 찾을 수 없습니다.");
			return;
		} else {

			var obj = this.objects[findIndex], options, sendObj;
			var cfg = this.config;

			if (this.isMobile) {
				for (var oi = 0; oi < AXgetId(objID).options.length; oi++) {
					if (AXgetId(objID).options[oi].value == value) {
						var selectedIndex = oi;
						AXgetId(objID).options[oi].selected = true;
						obj.config.selectedObject = { optionIndex: oi, optionValue: AXgetId(objID).options[oi].value, optionText: AXgetId(objID).options[oi].text.enc() };
						this.bindSelectChange(objID, findIndex);
						if (obj.config.onChange) {
							options = AXgetId(objID).options[oi];
							sendObj = {
								optionIndex:oi, optionValue:options.value, optionText:options.text,
								value: options.value, text: options.text
							};
							obj.config.onChange.call(sendObj, sendObj);
						}
						break;
					}
				}
			} else {

				var selectedIndex = null;
				for (var O, oidx = 0; (oidx < obj.options.length && (O = obj.options[oidx])); oidx++) {
					if ((O.optionValue || O.value || "") == value) {
						selectedIndex = oidx;
						break;
					}
				};

				if (selectedIndex != null) {

					obj.selectedIndex = selectedIndex;
					obj.config.focusedIndex = selectedIndex;

					AXgetId(objID).options[obj.selectedIndex].selected = true;
					obj.config.selectedObject = obj.options[selectedIndex];
					this.bindSelectChange(objID, findIndex);

					if (obj.config.onChange) {
						options = AXgetId(objID).options[selectedIndex];
						sendObj = {
							optionIndex:selectedIndex, optionValue:options.value, optionText:options.text,
							value: options.value, text: options.text
						};
						obj.config.onChange.call(sendObj, sendObj);
					}

				} else {
					//trace("일치하는 값을 찾을 수 없습니다.");
				}
			}
		}
	},
	bindSelectDisabled: function(objID, _disabled){
		var findIndex = null;
		for (var O, index = 0; (index < this.objects.length && (O = this.objects[index])); index++) {
			if (O.id == objID && O.isDel != true) {
				findIndex = index;
				break;
			}
		};

		if (findIndex == null) {
			//trace("바인드 된 오브젝트를 찾을 수 없습니다.");
			return;
		} else {
			var obj = this.objects[findIndex];
			var cfg = this.config;

			if(typeof _disabled == "boolean"){
				axf.getId(objID).disabled = _disabled;
			}else{
				axf.getId(objID).disabled = !AXgetId(objID).disabled;
			}

			if (this.isMobile) {

			} else {

				var bindTarget = axdom("#"+ cfg.targetID + "_AX_" + objID);
				bindTarget.data("disabled", axf.getId(objID).disabled);

				if(axf.getId(objID).disabled){
					bindTarget.find(".AXanchorSelect").addClass("disable");
				}else{
					bindTarget.find(".AXanchorSelect").removeClass("disable");

				}
			}
		}
	},
	bindSelectUpdate: function(objID){
		var findIndex = null;
		for (var O, index = 0; (index < this.objects.length && (O = this.objects[index])); index++) {
			if (O.id == objID && O.isDel != true) {
				findIndex = index;
				break;
			}
		}

		if(findIndex != null){
			var obj = this.objects[findIndex], selectedIndex, options, sendObj;
			if (obj.config.onChange) {
				selectedIndex = AXgetId(objID).options.selectedIndex;
				options = AXgetId(objID).options[selectedIndex];
				sendObj = {
					optionIndex:selectedIndex,
					optionValue:options.value, optionText:options.text,
					value: options.value,
					text: options.text
				};
				obj.config.onChange.call(sendObj, sendObj);
			}
			this.bindSelectChange(objID, findIndex);
		}
	},
	bindSelectFocus: function(objID){
		var cfg = this.config;
		var findIndex = null;
		for (var O, index = 0; (index < this.objects.length && (O = this.objects[index])); index++) {
			if (O.id == objID && O.isDel != true) {
				findIndex = index;
				break;
			}
		};
		if(findIndex != null){
			AXgetId(cfg.targetID + "_AX_" + objID + "_AX_SelectTextBox").focus();
		}
	},
	bindSelectBlur: function(objID){
		var cfg = this.config;
		var findIndex = null;
		for (var O, index = 0; (index < this.objects.length && (O = this.objects[index])); index++) {
			if (O.id == objID && O.isDel != true) {
				findIndex = index;
				break;
			}
		};
		if(findIndex != null){
			this.bindSelectClose(objID, findIndex);
		}
	},
	bindSelectGetAnchorObject: function(objID){
		var cfg = this.config;
		var findIndex = null;
		for (var O, index = 0; (index < this.objects.length && (O = this.objects[index])); index++) {
			if (O.id == objID && O.isDel != true) {
				findIndex = index;
				break;
			}
		};
		if(findIndex != null){
			return axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SelectTextBox");
		}
	},
	bindSelectGetValue: function(objID, onEnd){
		var findIndex = null;
		for (var O, index = 0; (index < this.objects.length && (O = this.objects[index])); index++) {
			if (O.id == objID && O.isDel != true) {
				findIndex = index;
				break;
			}
		};

		if (findIndex == null) {
			return { optionValue: null, optionText: null, error:"바인드 된 오브젝트를 찾을 수 없습니다." };
		} else {
			var obj = this.objects[findIndex];
			var cfg = this.config;

			if (obj.selectedIndex != undefined) {
				return { optionValue: AXgetId(objID).options[ obj.selectedIndex ].value, optionText: AXgetId(objID).options[ obj.selectedIndex ].text };
			}else{
				return { optionValue: null, optionText: null };
			}
		}
	},

/**
 * @method AXSelectConverter.bindSelectAddOptions
 * @param {String} objID - element select id
 * @param {Array} options - 추가하려는 옵션 배열
 * @returns {Array} options
 * @description 설명
 * @example
 ```
mySelect.bindSelectAddOptions("objID", [{optionValue:"1", optionText:"액시스제이"}]);
 ```
 */
	bindSelectAddOptions: function(objID, options){
		var cfg = this.config, _this = this;
		var objSeq = null;
		for (var O, index = 0; (index < this.objects.length && (O = this.objects[index])); index++) {
			if (O.id == objID && O.isDel != true) {
				objSeq = index;
				break;
			}
		}
		if(objSeq == null) {
			trace("not found element id");
			return;
		}
		var obj = this.objects[objSeq];
		var iobj = obj.iobj;

		if(!Object.isArray(options)){
			trace("options 아규먼트가 없습니다.");
			return;
		}

		var newOptions = obj.options;
		for(var i = 0; i < options.length; i++){
			var hasValue = false;
			for(var oi = 0; oi < obj.options.length; oi++) {
				if( obj.options[oi].optionValue == options[i].optionValue ){
					hasValue = true;
				}
			}
			if(!hasValue){
				newOptions.push({optionText:options[i].optionText.enc(), optionValue:options[i].optionValue});
			}
		}
		obj.options = newOptions;

		iobj.css({opacity:100});
		//trace(obj.options);
		var po = [];
		for (var opts, oidx = 0; (oidx < obj.options.length && (opts = obj.options[oidx])); oidx++) {
			var optionText = (opts.optionText||"").dec();
			po.push("<option value=\"" + opts.optionValue + "\"");
			if (obj.selectedIndex == oidx) po.push(" selected=\"selected\"");
			po.push(">" + optionText + "</option>");
		}
		iobj.empty();
		iobj.append(po.join(''));

		//this.bindSelectChangeValue(objID, obj.config.setValue);
		this.alignAnchor(objID, objSeq);

		return obj.options;
	},

/**
 * @method AXSelectConverter.bindSelectRemoveOptions
 * @param objID {String} element select id
 * @param options {Array} 추가하려는 옵션 배열
 * @returns {Array} options
 * @description 설명
 * @example
 ```
mySelect.bindSelectRemoveOptions("objID", [{optionValue:"1", optionText:"액시스제이"}]);
 ```
 */
	bindSelectRemoveOptions: function(objID, options){
		var cfg = this.config, _this = this;
		var objSeq = null;
		for (var O, index = 0; (index < this.objects.length && (O = this.objects[index])); index++) {
			if (O.id == objID && O.isDel != true) {
				objSeq = index;
				break;
			}
		}
		if(objSeq == null) {
			trace("not found element id");
			return;
		}
		var obj = this.objects[objSeq];
		var iobj = obj.iobj;

		if(!Object.isArray(options)){
			trace("options 아규먼트가 없습니다.");
			return;
		}

		var newOptions = [];

		for(var oi = 0; oi < obj.options.length; oi++) {
			var hasValue = false;
			for(var i = 0; i < options.length; i++) {
				if( obj.options[oi].optionValue == options[i].optionValue ){
					hasValue = true;
				}
			}
			if(!hasValue){
				newOptions.push({optionText:obj.options[oi].optionText, optionValue:obj.options[oi].optionValue});
			}
		}
		obj.options = newOptions;

		//trace(obj.options);
		iobj.css({opacity:100});
		var po = [];
		for (var opts, oidx = 0; (oidx < obj.options.length && (opts = obj.options[oidx])); oidx++) {
			var optionText = (opts.optionText||"").dec();
			po.push("<option value=\"" + opts.optionValue + "\"");
			if (obj.selectedIndex == oidx) po.push(" selected=\"selected\"");
			po.push(">" + optionText + "</option>");
		}
		iobj.empty();
		iobj.append(po.join(''));

		this.alignAnchor(objID, objSeq);

		return obj.options;
	},


	/**
	 * @method AXSelectConverter.bindSelectUpdateOptions
	 * @param {String} objID - element select id
	 * @param {Array|Object} options - 옵션 배열
	 * @param {Number} optionIndex - 변경하려는 옵션 인덱스
	 * @returns {AXSelectConverter}
	 * @description 설명
	 * @example
 ```
 jQuery("#AXSelect1").bindSelectUpdateOptions([
	 {optionValue:1, optionText:"abc-1 : ABCDEFG"},
	 {optionValue:2, optionText:"abc-2 : 09123123"},
	 {optionValue:3, optionText:"abc-3 : 1222"},
	 {optionValue:4, optionText:"abc-4 : AXISJ"},
	 {optionValue:5, optionText:"abc-5 : 액시스 제이"}
 ]);

 jQuery("#AXSelect1").bindSelectUpdateOptions({optionValue:3, optionText:"특별한 값으로 변경"}, 3);
 ```
	 */
	bindSelectUpdateOptions: function(objID, options, optionIndex){
		var cfg = this.config, _this = this;
		var objSeq = null;
		for (var O, index = 0; (index < this.objects.length && (O = this.objects[index])); index++) {
			if (O.id == objID && O.isDel != true) {
				objSeq = index;
				break;
			}
		}
		if(objSeq == null) {
			trace("not found element id");
			return;
		}
		var obj = this.objects[objSeq];
		var iobj = obj.iobj;

		if(typeof optionIndex === "undefined" && !Object.isArray(options)){
			trace("options 아규먼트가 없습니다.");
			return;
		}

		var newOptions = [];
		if(typeof optionIndex === "undefined"){
			for(var i = 0; i < options.length; i++){
				newOptions.push(jQuery.extend({optionText:options[i].optionText.enc(), optionValue:options[i].optionValue}, options[i]));
			}
			obj.selectedIndex = 0;
		}else{
			var _adj = 0;
			if (obj.config.isspace) _adj = 1;
			for (var i = 0; i < obj.config.options.length; i++) {
				if(i+_adj == optionIndex){
					newOptions.push(jQuery.extend({optionText:options.optionText.enc(), optionValue:options.optionValue}, options));
				}else{
					newOptions.push(obj.config.options[i]);
				}
			}
		}

		obj.config.options = newOptions;
		iobj.css({opacity:100});
		iobj.html("<option></option>");

		var po = [], adj = 0;
		if (obj.config.isspace) {
			po.push("<option value='"+(obj.config.isspaceValue||"")+"'");
			if (obj.selectedIndex == 0) po.push(" selected=\"selected\"");
			po.push(">" + (obj.config.isspaceTitle||"&nbsp;") + "</option>");
			adj = -1;
		}

		for (var opts, oidx = 0; (oidx < obj.config.options.length && (opts = obj.config.options[oidx])); oidx++) {
			var optionText = (opts.optionText||"").dec();
			po.push("<option value=\"" + opts.optionValue + "\"");
			if (obj.config.setValue == opts.optionValue || opts.selected || (obj.selectedIndex||0).number()+adj == oidx) po.push(" selected=\"selected\"");
			po.push(">" + optionText + "</option>");
		}

		iobj.html(po.join(''));

		var options = [];
		for (var oi = 0; oi < AXgetId(objID).options.length; oi++) {
			options.push({ optionValue: AXgetId(objID).options[oi].value, optionText: AXgetId(objID).options[oi].text.enc() });
		}
		obj.options = AXUtil.copyObject(options);
		obj.selectedIndex = AXgetId(objID).options.selectedIndex;

		this.bindSelectChange(objID, objSeq, "load");

		if (obj.config.onChange && obj.config.alwaysOnChange) {
			obj.config.focusedIndex = obj.selectedIndex;
			obj.config.selectedObject = obj.options[obj.selectedIndex];

			options = AXgetId(objID).options[obj.selectedIndex];
			sendObj = {
				optionIndex:obj.selectedIndex, optionValue:options.value, optionText:options.text,
				value:options.value, text:options.text
			};
			obj.config.onChange.call(sendObj, sendObj, "isPostBack");
		}

		this.alignAnchor(objID, objSeq);
		iobj.css({opacity:0});

		return this;
	}
});

var AXSelect = new AXSelectConverter();
AXSelect.setConfig({ targetID: "AXselect" });

/**
 * @method jQueryExtends.unbindSelect
 * @param {JSObject} configs
 * @returns {jQueryObject}
 * @description select 엘리먼트에 select 콘트롤을 언바인드(제거) 합니다.
 * @example
 ```js
 axdom("Selector").unbindSelect();
 ```
 **/
axdom.fn.unbindSelect = function (config) {
	axdom.each(this, function () {
		if (config == undefined) config = {};
		config.id = this.id;
		AXSelect.unbind(config);
	});
	return this;
};

/**
 * @method jQueryExtends.bindSelect
 * @param {JSObject} configs
 * @returns {jQueryObject}
 * @description
 * select 엘리먼트에 select 콘트롤을 바인드 합니다.
 * @example
 ```
axdom("Selector").bindSelect(configs);
 ```
 */
axdom.fn.bindSelect = function (config) {
	axdom.each(this, function () {
		if (config == undefined) config = {};
		config.id = this.id;
		AXSelect.bind(config);
	});
	return this;
};
/**
 * @method jQueryExtends.setConfigSelect
 * @param {jsObject} config - select 설정
 * @returns {jQueryObject}
 * @description
 * select 콘트롤에 설정을 변경합니다.
 * @example
 ```
axdom("Selector").bindSelect(configs);
 ```
 */
axdom.fn.setConfigSelect = function (config) {
	axdom.each(this, function () {
		AXSelect.bindSetConfig(this.id, config);
	});
	return this;
};

/**
 * @method jQueryExtends.bindSelectSetValue
 * @param {String} value
 * @param {fn} [onEnd] - 끝나고 실행될 함수 / 예정
 * @returns {jQueryObject}
 * @description
 * 해당 셀렉트 컨트롤에 값을 입력하고 onEnd 함수가 있는 경우 실행합니다.
 * @example
 ```
axdom("Selector").bindSelectSetValue('test');
 ```
 */

axdom.fn.bindSelectSetValue = function (value, onEnd) {
	axdom.each(this, function () {
		AXSelect.bindSelectChangeValue(this.id, value, onEnd);
	});
	return this;
};

axdom.fn.bindSelectGetValue = function (onEnd) {
	return AXSelect.bindSelectGetValue(this[0].id, onEnd);
};

//SetText

//getText
/**
 * @method jQueryExtends.setValueSelect
 * @param {String} value
 * @param {fn} [onEnd] - 끝나고 실행될 함수 / 예정
 * @returns {jQueryObject}
 * @description
 * 해당 셀렉트 컨트롤에 값을 입력하고 onEnd 함수가 있는 경우 실행합니다.
 * @example
 ```
axdom("Selector").setValueSelect('test');
 ```
 */

axdom.fn.setValueSelect = function (value, onEnd) {
	axdom.each(this, function () {
		AXSelect.bindSelectChangeValue(this.id, value, onEnd);
	});
	return this;
};

/**
 * @method jQueryExtends.bindSelectDisabled
 * @param {Boolean} Disabled
 * @returns {jQueryObject}
 * @description
 * 해당 셀렉트 컨트롤의 Disabled 속성을 컨트롤 합니다.
 * @example
 ```
 axdom("Selector").bindSelectDisabled(true);
 ```
 */
axdom.fn.bindSelectDisabled = function (Disabled) {
	axdom.each(this, function () {
		AXSelect.bindSelectDisabled(this.id, Disabled);
	});
	return this;
};

/**
 * @method jQueryExtends.bindSelectUpdate
 * @returns {jQueryObject}
 * @description
 * 해당 셀렉트 컨트롤의 view 를 value 기준으로 변경합니다.
 * @example
 ```
axdom("Selector").bindSelectUpdate();
 ```
 */
axdom.fn.bindSelectUpdate = function () {
	axdom.each(this, function () {
		AXSelect.bindSelectUpdate(this.id);
	});
	return this;
};

/**
 * @method jQueryExtends.bindSelectFocus
 * @returns {jQueryObject}
 * @description
 * 해당 셀렉트 컨트롤에 focus를 줍니다.
 * @example
 ```
 axdom("Selector").bindSelectFocus();
 ```
 */
axdom.fn.bindSelectFocus = function () {
	axdom.each(this, function () {
		AXSelect.bindSelectFocus(this.id);
	});
	return this;
};

/**
 * @method jQueryExtends.bindSelectBlur
 * @returns {jQueryObject}
 * @description
 * 해당 셀렉트 컨트롤을 blur 상태로 변경합니다.(비활성 처리후 메소드 종료)
 * @example
 ```
 axdom("Selector").bindSelectBlur();
 ```
 */
axdom.fn.bindSelectBlur = function () {
	axdom.each(this, function () {
		AXSelect.bindSelectBlur(this.id);
	});
	return this;
};

/**
 * @method jQueryExtends.bindSelectGetAnchorObject
 * @returns {jQueryObject}
 * @description
 * 해당 셀렉트 컨트롤의 view html element를 반환합니다.
 * @example
 ```
axdom("Selector").bindSelectGetAnchorObject();
 ```
 */

axdom.fn.bindSelectGetAnchorObject = function(){
	var returnObj;
	axdom.each(this, function () {
		returnObj = AXSelect.bindSelectGetAnchorObject(this.id);
	});
	return returnObj;
};

/**
 * @method jQueryExtends.bindSelectAddOptions
 * @param {Array} options - 추가하려는 옵션 배열
 * @description 배열로 지정한 객체를 해당 셀렉트의 option 에 추가합니다.
 * @example
 ```
$("#mySelect").bindSelectAddOptions([
    {optionValue:"1", optionText:"액시스제이"}
]);
 ```
 */
axdom.fn.bindSelectAddOptions = function (options) {
	var returnObj;
	axdom.each(this, function () {
		returnObj = AXSelect.bindSelectAddOptions(this.id, options);
	});
	return returnObj;
};

/**
 * @method jQueryExtends.bindSelectRemoveOptions
 * @param {Array} options - 삭제하려는 옵션 배열
 * @description 배열로 지정한 객체를 해당 셀렉트의 option 에서 제거합니다.
 * @example
 ```

 ```
 */
axdom.fn.bindSelectRemoveOptions = function (options) {
	var returnObj;
	axdom.each(this, function () {
		returnObj = AXSelect.bindSelectRemoveOptions(this.id, options);
	});
	return returnObj;
};


/**
 * @method jQueryExtends.bindSelectUpdateOptions
 * @param {Array} options - 삭제하려는 옵션 배열
 * @description 배열로 지정한 객체를 해당 셀렉트의 option 에서 제거합니다.
 * @example
 ```
 jQuery("#AXSelect1").bindSelectUpdateOptions([
	 {optionValue:1, optionText:"abc-1 : ABCDEFG"},
	 {optionValue:2, optionText:"abc-2 : 09123123"},
	 {optionValue:3, optionText:"abc-3 : 1222"},
	 {optionValue:4, optionText:"abc-4 : AXISJ"},
	 {optionValue:5, optionText:"abc-5 : 액시스 제이"}
 ]);

 jQuery("#AXSelect1").bindSelectUpdateOptions({optionValue:3, optionText:"특별한 값으로 변경"}, 3);
 ```
 */
axdom.fn.bindSelectUpdateOptions = function (options, oidx) {
	var returnObj;
	axdom.each(this, function () {
		returnObj = AXSelect.bindSelectUpdateOptions(this.id, options, oidx);
	});
	return returnObj;
};
/* ---------------------------- */
var AXMobileMenu = Class.create(AXJ, {
    initialize: function(AXJ_super) {
		AXJ_super();
		
		this.moveSens = 0;
		this.config.moveSens = 1;
		this.touchMode;
		this.selectedPoi = null;
		this.config.width = 300;
		this.config.height = 388;
		this.config.reserveKeys = {
			labelKey:"label",
			urlKey:"url",
			targetKey:"target",
			addClassKey:"addClass",
			subMenuKey:"cn"
		};
    },
/**
 * 선언된 클래스를 사용하기 위해 속성을 정의합니다.
 * @method AXMobileMenu.setConfig
 * @param {Object} Config of Object
 * @example
```js
var myMobileMenu = new AXMobileMenu();
myMobileMenu.setConfig({
	// 사용자 키 정의
	reserveKeys:{
		primaryKey:"menuID",
		labelKey:"label",
		urlKey:"url",
		targetKey:"target",
		addClassKey:"ac",
		subMenuKey:"cn"
	},

	// ac : 메뉴 아이템에 추가하고 싶은 클래스 네임 addClass의 약자
	menu:[
		{menuID:"1", label:"menu 1", ac:"Dashboard", url:"http://www.axisj.com"},
		{menuID:"4", label:"menu 4", ac:"Cashiering", url:"http://www.axisj.com"},
		{menuID:"5", label:"menu 5", ac:"Housekeeping", url:"http://www.axisj.com"},
		{menuID:"6", label:"menu 6", ac:"Management", url:"http://www.axisj.com"},
		{menuID:"2", label:"menu 2", ac:"Reservation", cn:[
			{menuID:"2-1", label:"menu 2-1", url:"http://www.axisj.com"},
			{menuID:"2-2", label:"menu 2-2", cn:[
				{menuID:"2-2-1", label:"menu 2-2-1", url:"http://www.axisj.com"},
				{menuID:"2-2-2", label:"menu 2-2-2", url:"http://www.axisj.com"},
				{menuID:"2-2-3", label:"menu 2-2-3", url:"http://www.axisj.com"}
			]},
			{menuID:"2-3", label:"menu 2-3", url:"http://www.axisj.com"},
			{menuID:"2-4", label:"menu 2-4", url:"http://www.axisj.com"},
			{menuID:"2-5", label:"menu 2-5", url:"http://www.axisj.com"},
			{menuID:"2-6", label:"menu 2-6", url:"http://www.axisj.com"},
			{menuID:"2-7", label:"menu 2-7", url:"http://www.axisj.com"},
			{menuID:"2-8", label:"menu 2-8", url:"http://www.axisj.com"},
			{menuID:"2-9", label:"menu 2-9", url:"http://www.axisj.com"},
			{menuID:"2-10", label:"menu 2-10", url:"http://www.axisj.com"},
			{menuID:"2-11", label:"menu 2-11", url:"http://www.axisj.com"},
			{menuID:"2-12", label:"menu 2-12", url:"http://www.axisj.com"},
			{menuID:"2-13", label:"menu 2-13", url:"http://www.axisj.com"}
		]},
		{menuID:"7", label:"menu 7", ac:"Management", url:"http://www.axisj.com"},
		{menuID:"8", label:"menu 8", ac:"Management", url:"http://www.axisj.com"},
		{menuID:"9", label:"menu 9", ac:"Management", url:"http://www.axisj.com"},
		{menuID:"10", label:"menu 10", ac:"Management", url:"http://www.axisj.com"},
		{menuID:"11", label:"menu 11", ac:"Management", url:"http://www.axisj.com"},
		{menuID:"12", label:"menu 12", ac:"Management", url:"http://www.axisj.com"},
		{menuID:"13", label:"menu 13", ac:"Management", url:"http://www.axisj.com"},
		{menuID:"14", label:"menu 14", ac:"Management", url:"http://www.axisj.com"},
		{menuID:"15", label:"menu 15", ac:"Management", url:"http://www.axisj.com"},
		{menuID:"16", label:"menu 16", ac:"Management", url:"http://www.axisj.com"},
		{menuID:"17", label:"menu 17", ac:"Management", url:"http://www.axisj.com"},
		{menuID:"18", label:"menu 18", ac:"Management", url:"http://www.axisj.com"},
		{menuID:"19", label:"menu 19", ac:"Management", url:"http://www.axisj.com"},
		{menuID:"20", label:"menu 20", ac:"Management", url:"http://www.axisj.com"},
		{menuID:"21", label:"menu 21", ac:"Management", url:"http://www.axisj.com"},
		{menuID:"22", label:"menu 22", ac:"Management", url:"http://www.axisj.com"},
		{menuID:"23", label:"menu 23", ac:"Management", url:"http://www.axisj.com"},
		{menuID:"3", label:"menu 3", ac:"Guest", cn:[
			{menuID:"3-1", label:"menu 3-1", url:"http://www.axisj.com"},
			{menuID:"3-2", label:"menu 3-2", cn:[
				{menuID:"3-2-1", label:"menu 3-2-1", url:"http://www.axisj.com"},
				{menuID:"3-2-2", label:"menu 3-2-2", url:"http://www.axisj.com"},
				{menuID:"3-2-3", label:"menu 3-2-3", url:"http://www.axisj.com"}
			]},
			{menuID:"3-3", label:"menu 3-3", url:"http://www.axisj.com"},
			{menuID:"3-4", label:"menu 3-4", url:"http://www.axisj.com"},
			{menuID:"3-5", label:"menu 3-5", url:"http://www.axisj.com"}
		]},
		{menuID:"24", label:"menu 24", ac:"Configuration", url:"http://www.axisj.com"}
	],
	onclick: function(){ // 메뉴 클릭 이벤트
		myMobileMenu.close();
		//location.href = this.url;
	}
});
```
 */
    init: function() {
		var cfg = this.config;
		
		/* 이벤트 대소문자 확장 */
		if(!cfg.onclick) cfg.onclick = cfg.onClick;


	    if(cfg.menuBoxID){
		    // 메뉴데이터 태그로 부터 가져오기
		    cfg.menu = this.collectMenuItem(cfg.menuBoxID);
	    }

		//var close = this.close.bind(this);
		this.modal = new AXMobileModal();
		this.modal.setConfig({
			addClass:"AXMobileMenu",
			height: cfg.height,
			width: cfg.width,
			head:{
				close:{
					onclick:function(){
						
					}
				}
			},
			onclose: function(){
				//close();
			}
		});
		
    },
/**
 * 모바일 메뉴를 오픈합니다.
 * @method AXMobileMenu.open
 * @returns {AXMobileMenu}
 * @example
```js
 <button class="AXButton" onclick="myMobileMenu.open();">Open the mobile menu</button>
```
 */
    open: function(){
    	var cfg = this.config;
    	/*
    	var obj = this.modal.open();
    	this.initMenu(obj);
    	*/
    	var onLoad = this.initMenu.bind(this);
    	this.modal.open(null, onLoad);
		return this;
    },
    initMenu: function(obj){
    	var cfg = this.config;
    	this.modalObj = obj;
    	this.modalID = obj.jQueryModal.get(0).id;
    	
    	if(this.selectedPoi){
    		var lpoi = this.selectedPoi.last();
    		var apoi = this.selectedPoi.concat();
    		apoi.pop();
    		var menu = cfg.menu;
			axf.each(apoi, function(idx, P){
				if(idx == 0){
					menu = menu[P];
				}else{
					menu = menu[cfg.reserveKeys.subMenuKey][P];
				}
			});
			
			if(menu[cfg.reserveKeys.subMenuKey] && menu[cfg.reserveKeys.subMenuKey][lpoi][cfg.reserveKeys.subMenuKey] && menu[cfg.reserveKeys.subMenuKey][lpoi][cfg.reserveKeys.subMenuKey].length > 0){
				apoi.push(lpoi);
				var tpl = this.getMenu(this.modalID, menu[cfg.reserveKeys.subMenuKey][lpoi], apoi);
			}else{
				var tpl = this.getMenu(this.modalID, menu, apoi);
			}			
    	}else{
    		var tpl = this.getMenu(this.modalID, cfg.menu);
    	}
    	
		if(AXUtil.browser.mobile){
			//obj.modalBody.unbind("touchstart.AXMobileMenu").bind("touchstart.AXMobileMenu", this.touchstart.bind(this));
			var modalBodyID = obj.modalBody.get(0).id;
			var touchstart = this.touchstart.bind(this);
			this.touchstartBind = function () {
				touchstart();
			};
			if (document.addEventListener) {
				AXgetId(modalBodyID).addEventListener("touchstart", this.touchstartBind, false);
			}
		}else{
			obj.modalBody.unbind("mousedown.AXMobileMenu").bind("mousedown.AXMobileMenu", this.touchstart.bind(this));
		}

		obj.modalBody.attr("onselectstart", "return false");
		//obj.modalBody.addClass("AXUserSelectNone");
		obj.modalBody.bind("click.AXMobileMenu", this.onclickModalBody.bind(this));
		
    	/* drag cancle */
    	//obj.modalBody.unbind("dragstart.AXMobileMenu").bind("dragstart.AXMobileMenu", this.cancelEvent.bind(this));
    	this.printMenu(tpl);
    },
    printMenu: function(tpl){
    	var obj = this.modalObj;
    	
    	obj.modalHead.empty();
    	obj.modalHead.append(tpl.headPo);
    	obj.modalBody.empty();
    	obj.modalBody.append(tpl.bodyPo);
    	obj.modalFoot.empty();
    	obj.modalFoot.append(tpl.pagePo);
    	
    	/*
    	obj.modalBody.hide();
    	obj.modalBody.fadeIn("300");
    	*/
    	obj.modalHead.find(".mobileMenuHome").bind("click", this.onclickHome.bind(this));
    	obj.modalHead.find(".mobileMenuPrev").bind("click", this.onclickPrev.bind(this));
    	
		this.menuPageWidth = obj.modalBody.find(".mobileMenuBodyPage").width() + 9;
    	this.mobileMenuBodyScroll = obj.modalBody.find(".mobileMenuBodyScroll");
    	obj.modalBody.find(".mobileMenuBodyScroll").css({width:tpl.pageNum * this.menuPageWidth});
    },
    getMenu: function(modalID, _menu, poi){
    	var cfg = this.config;
    	var countPerBlock = 9;
    	var menu = _menu;
    	var menuTitle = "";
    	if(poi == undefined || poi.length == 0) poi = [];
    	else{
    		menuTitle = menu[cfg.reserveKeys.labelKey];
    		menu = menu[cfg.reserveKeys.subMenuKey];
    	}

    	var headPo = [];
    	/* 현재 선택된 메뉴 선택 하는 기능구현 필요 */
    	headPo.push('<a ' + cfg.href + ' class="mobileMenuHome">home</a>');
    	if(menuTitle != ""){
    		headPo.push('<a ' + cfg.href + ' class="mobileMenuPrev" id="', modalID ,'_AX_menuTitle_AX_', poi.join("_"),'">', menuTitle,'</a>');
    	}
		
    	var bodyPo = [];
    	bodyPo.push('<div class="mobileMenuBody">');
    	bodyPo.push('	<div class="mobileMenuBodyScroll" id="', modalID ,'_AX_bodyScroll">');
    	bodyPo.push('		<div class="mobileMenuBodyPage">');
    	
    	var ppoi = poi.join("_");
    	if(ppoi != "") ppoi += "_";
    	
    	var selectedPoi = "";
    	if(this.selectedPoi){
    		selectedPoi = this.selectedPoi.join("_");
    	}
    	
    	axf.each(menu, function(midx, M){
    		if(midx % countPerBlock == 0 && midx > 0){
    			bodyPo.push('	</div>');
    			bodyPo.push('	<div class="mobileMenuBodyPage">');
    		}
    		var addClass = [];
    		if(this[cfg.reserveKeys.addClassKey]){
    			addClass.push(this[cfg.reserveKeys.addClassKey]);
    		}
    		if(selectedPoi == (ppoi + midx)){
    			addClass.push("selected");
    		}
    		bodyPo.push('<a ' + cfg.href + ' class="mobileMenuItem ' + addClass.join(" ") + '" id="', modalID,'_AX_', ppoi, midx,'">');
    		bodyPo.push(this[cfg.reserveKeys.labelKey]);
    		if(this[cfg.reserveKeys.subMenuKey] && this[cfg.reserveKeys.subMenuKey].length > 0){
    			bodyPo.push('<span class="hasSubMenu"></span>');
    		}
    		bodyPo.push('</a>');
    	});
    	bodyPo.push('		</div>');
    	bodyPo.push('	</div>');
    	bodyPo.push('</div>');

		var pageNum = (menu.length / (countPerBlock)).ceil();
		this.pageNo = 0;
		this.pageNum = pageNum;

    	var pagePo = [];
    	pagePo.push('<div class="mobileMenuFoot">');
    	axf.each(pageNum.rangeFrom(1), function(pidx, p){
    		if(pidx == 0) pagePo.push('<div class="pageNav on" ');
    		else pagePo.push('<div class="pageNav" ');
    		pagePo.push(' id="', modalID ,'_AX_pageNav_AX_', pidx ,'"></div>');
    	});
    	pagePo.push('</div>');

    	return {
    		headPo : headPo.join(''),
    		bodyPo : bodyPo.join(''),
    		pagePo : pagePo.join(''),
    		pageNum : ( pageNum )
    	};
    },
/**
 * 모바일 메뉴를 닫습니다.
 * @method AXMobileMenu.close
 * @returns {AXMobileMenu}
 * @example
 ```js
 myMobileMenu.close();
 ```
 */
    close: function(){
    	var cfg = this.config;
    	this.modal.close();
		return this;
    },
/**
 * 모바일 메뉴 트리 인덱스에 해당하는 메뉴를 선택된 상태로 표시합니다. '-' 는 하위 뎁스표현
 * @method AXMobileMenu.setHighLight
 * @param {String} menuID
 * @returns {AXMobileMenu}
 * @example
```js
 myMobileMenu.setHighLight("2-2");
```
 */
    setHighLight: function(menuID){
    	var cfg = this.config;
		
		var menu = cfg.menu;
		var pois = "";
		
		var treeFn = function(subTree, parentPoi){
			axf.each(subTree, function(idx, M){
				if(M[cfg.reserveKeys.primaryKey] == menuID){
					pois = parentPoi + "_" + idx;
					return false;
				}else{
					if(M[cfg.reserveKeys.subMenuKey] && M[cfg.reserveKeys.subMenuKey].length > 0) treeFn(M[cfg.reserveKeys.subMenuKey], parentPoi + "_" + idx);
				}
			});
		};
		
		axf.each(menu, function(idx, M){
			if(M[cfg.reserveKeys.primaryKey] == menuID){
				pois = idx + "";
				return false;
			}else{
				if(M[cfg.reserveKeys.subMenuKey] && M[cfg.reserveKeys.subMenuKey].length > 0) treeFn(M[cfg.reserveKeys.subMenuKey], idx);
			}
		});

		var poi;
		if(pois != "") poi = pois.split(/_/g);
		this.selectedPoi = poi;
		return this;
    },
/**
 * 모바일 메뉴 트리 인덱스에 해당하는 메뉴를 선택된 상태로 표시합니다. '-' 는 하위 뎁스표현
 * @method AXMobileMenu.setHighLightMenu
 * @param {String} menuID
 * @returns {AXMobileMenu}
 * @example
 ```js
 myMobileMenu.setHighLightMenu("2-2");
 ```
 */
    setHighLightMenu: function(menuID){
    	return this.setHighLight(menuID);
    },
/**
 * 모바일 메뉴 데이터에 사용자가 정의한 id에 해당하는 메뉴를 선택된 상태로 표시합니다.
 * @method AXMobileMenu.setHighLightOriginID
 * @param {String} menuID
 * @returns {AXMobileMenu}
 * @example
 ```js
 mxMenu.setHighLightOriginID("ID1245");
 ```
 */
	setHighLightOriginID: function(menuID){
		var cfg = this.config;

		var menu = cfg.menu;
		var pois = "";

		var treeFn = function(subTree, parentPoi){
			axf.each(subTree, function(idx, M){
				if(M._id == menuID){
					pois = parentPoi + "_" + idx;
					return false;
				}else{
					if(M[cfg.reserveKeys.subMenuKey] && M[cfg.reserveKeys.subMenuKey].length > 0) treeFn(M[cfg.reserveKeys.subMenuKey], parentPoi + "_" + idx);
				}
			});
		};

		axf.each(menu, function(idx, M){
			if(M._id == menuID){
				pois = idx + "";
				return false;
			}else{
				if(M[cfg.reserveKeys.subMenuKey] && M[cfg.reserveKeys.subMenuKey].length > 0) treeFn(M[cfg.reserveKeys.subMenuKey], idx);
			}
		});

		var poi;

		//trace(pois);

		if(pois != "") poi = pois.split(/_/g);
		this.selectedPoi = poi;
	},
    onclickModalBody: function(event){
    	var cfg = this.config;
		var eid = event.target.id.split(/_AX_/g);
		var eventTarget = event.target;
		var myTarget = this.getEventTarget({
			evt : eventTarget, evtIDs : eid,
			until:function(evt, evtIDs){ return (axdom(evt.parentNode).hasClass("mobileMenuBodyScroll")) ? true:false; },
			find:function(evt, evtIDs){ return (axdom(evt).hasClass("mobileMenuItem")) ? true : false; }
		});
		
		if(myTarget){
			//something
			//trace(myTarget.id);
			var poi = myTarget.id.split(/_AX_/g).last();
			var menu = cfg.menu;
			var apoi = poi.split(/_/g);
			axf.each(apoi, function(idx, P){
				if(idx == 0){
					menu = menu[P];
				}else{
					menu = menu[cfg.reserveKeys.subMenuKey][P];
				}
			});
			
			if(menu[cfg.reserveKeys.subMenuKey] && menu[cfg.reserveKeys.subMenuKey].length > 0){
				/* animated menu */
				var menuItem = this.modalObj.modalBody.find("#"+myTarget.id);
				menuItem.css({opacity:0});
				var menuItemPos = menuItem.position();

				var mobileMenuBody = this.modalObj.modalBody.find(".mobileMenuBodyScroll");
				var bodyPos = mobileMenuBody.position();
				var cloneMenuItem = axdom("<div class='mobileMenuItemGhost' id='"+this.modalID+"_AX_cloneMenuItem'>" + menuItem.html() + "</div>");
				mobileMenuBody.append(cloneMenuItem);
				cloneMenuItem.css({
					position:"absolute",
					left:menuItemPos.left,
					top:menuItemPos.top
				});

				var getMenuBind = this.getMenu.bind(this);
				var printMenuBind = this.printMenu.bind(this);
				var modalID = this.modalID;
				cloneMenuItem.animate({left:9 - bodyPos.left, top:0, width:270, height:270}, 300, "backInOut").animate({opacity:0}, 100, "expoOut", function () {
					var tpl = getMenuBind(modalID, menu, apoi);
					printMenuBind(tpl);
				});
				
				return;
			}else{
				if(cfg.onclick){
					cfg.onclick.call(menu, menu);
				}
			}
		}
    },
    onclickHome: function(event){
    	var cfg = this.config;
    	var tpl = this.getMenu(this.modalID, cfg.menu);
    	this.printMenu(tpl);
    },
    onclickPrev: function(event){
    	var cfg = this.config;
    	var poi = event.target.id.split(/_AX_/g).last();
		var menu = cfg.menu;
		var apoi = poi.split(/_/g);
		apoi.pop();
		
		axf.each(apoi, function(idx, P){
			if(idx == 0){
				menu = menu[P];
			}else{
				menu = menu[cfg.reserveKeys.subMenuKey][P];
			}
		});
    	
    	var tpl = this.getMenu(this.modalID, menu, apoi);
    	this.printMenu(tpl);
    },
/**
 * 모바일 메뉴 데이터를 설정합니다.
 * @method AXMobileMenu.setTree
 * @param {Object} tree
 * @returns {AXMobileMenu}
 * @example
```js
 var menuStr = '[{"label":"test", "link":"/index.php?mid=page_XhGM56", "target":"_self", "url":"page_XhGM56", "selected":1, "expand":"N", "isShow":true, "parent_srl":"0", "k":"66", "cn":null}, {"label":"We are...", "link":"#", "target":"_self", "url":"#", "selected":0, "expand":"N", "isShow":true, "parent_srl":"0", "k":"104", "cn":[{"label":"Jowrney & Stacey", "link":"#", "target":"_self", "url":"#", "selected":0, "expand":"N", "isShow":true, "parent_srl":"104", "k":"105", "cn":[{"label":"aaa", "link":"#", "target":"_self", "url":"#", "selected":0, "expand":"N", "isShow":true, "parent_srl":"105", "k":"140", "cn":[{"label":"ddd", "link":"#", "target":"_self", "url":"#", "selected":0, "expand":"N", "isShow":true, "parent_srl":"140", "k":"143", "cn":[{"label":"fff", "link":"#", "target":"_self", "url":"#", "selected":0, "expand":"N", "isShow":true, "parent_srl":"143", "k":"145", "cn":null}], "addClass":"hasSubMenu"}, {"label":"eee", "link":"#", "target":"_self", "url":"#", "selected":0, "expand":"N", "isShow":true, "parent_srl":"140", "k":"144", "cn":null}], "addClass":"hasSubMenu"}, {"label":"bbb", "link":"#", "target":"_self", "url":"#", "selected":0, "expand":"N", "isShow":true, "parent_srl":"105", "k":"141", "cn":null}, {"label":"ccc", "link":"#", "target":"_self", "url":"#", "selected":0, "expand":"N", "isShow":true, "parent_srl":"105", "k":"142", "cn":null}], "addClass":"hasSubMenu"}, {"label":"Bike", "link":"#", "target":"_self", "url":"#", "selected":0, "expand":"N", "isShow":true, "parent_srl":"104", "k":"106", "cn":null}, {"label":"Gear & Stuff", "link":"#", "target":"_self", "url":"#", "selected":0, "expand":"N", "isShow":true, "parent_srl":"104", "k":"107", "cn":null}, {"label":"Media outlet", "link":"#", "target":"_self", "url":"#", "selected":0, "expand":"N", "isShow":true, "parent_srl":"104", "k":"108", "cn":null}, {"label":"Sponsor", "link":"#", "target":"_self", "url":"#", "selected":0, "expand":"N", "isShow":true, "parent_srl":"104", "k":"109", "cn":null}, {"label":"World adventure proposal", "link":"#", "target":"_self", "url":"#", "selected":0, "expand":"N", "isShow":true, "parent_srl":"104", "k":"110", "cn":null}, {"label":"iBooks", "link":"#", "target":"_self", "url":"#", "selected":0, "expand":"N", "isShow":true, "parent_srl":"104", "k":"111", "cn":null}, {"label":"Rewards", "link":"#", "target":"_self", "url":"#", "selected":0, "expand":"N", "isShow":true, "parent_srl":"104", "k":"112", "cn":null}, {"label":"Rancho", "link":"#", "target":"_self", "url":"#", "selected":0, "expand":"N", "isShow":true, "parent_srl":"104", "k":"113", "cn":null}], "addClass":"hasSubMenu"}, {"label":"Route", "link":"#", "target":"_self", "url":"#", "selected":0, "expand":"N", "isShow":true, "parent_srl":"0", "k":"114", "cn":[{"label":"Where we go", "link":"#", "target":"_self", "url":"#", "selected":0, "expand":"N", "isShow":true, "parent_srl":"114", "k":"115", "cn":null}, {"label":"Trace of flybasket", "link":"#", "target":"_self", "url":"#", "selected":0, "expand":"N", "isShow":true, "parent_srl":"114", "k":"116", "cn":null}, {"label":"Cost", "link":"#", "target":"_self", "url":"#", "selected":0, "expand":"N", "isShow":true, "parent_srl":"114", "k":"117", "cn":null}], "addClass":"hasSubMenu"}, {"label":"Travels", "link":"#", "target":"_self", "url":"#", "selected":0, "expand":"N", "isShow":true, "parent_srl":"0", "k":"118", "cn":[{"label":"World Adventure", "link":"#", "target":"_self", "url":"#", "selected":0, "expand":"N", "isShow":true, "parent_srl":"118", "k":"119", "cn":null}, {"label":"2013 Dokdo, Aroound the Ulleun island", "link":"#", "target":"_self", "url":"#", "selected":0, "expand":"N", "isShow":true, "parent_srl":"118", "k":"120", "cn":null}, {"label":"2012 Cross country, along the river", "link":"#", "target":"_self", "url":"#", "selected":0, "expand":"N", "isShow":true, "parent_srl":"118", "k":"121", "cn":null}, {"label":"2011 Around the Jeju island", "link":"#", "target":"_self", "url":"#", "selected":0, "expand":"N", "isShow":true, "parent_srl":"118", "k":"122", "cn":null}, {"label":"2010 Jumujin, Go to the East sea", "link":"#", "target":"_self", "url":"#", "selected":0, "expand":"N", "isShow":true, "parent_srl":"118", "k":"123", "cn":null}, {"label":"2009 We rode the japan honeymoon", "link":"#", "target":"_self", "url":"#", "selected":0, "expand":"N", "isShow":true, "parent_srl":"118", "k":"124", "cn":null}, {"label":"2008 Haenam, the end of the Korea", "link":"#", "target":"_self", "url":"#", "selected":0, "expand":"N", "isShow":true, "parent_srl":"118", "k":"125", "cn":null}], "addClass":"hasSubMenu"}, {"label":"Blog", "link":"#", "target":"_self", "url":"#", "selected":0, "expand":"N", "isShow":true, "parent_srl":"0", "k":"126", "cn":null}, {"label":"Project", "link":"#", "target":"_self", "url":"#", "selected":0, "expand":"N", "isShow":true, "parent_srl":"0", "k":"127", "cn":[{"label":"Experience farm in the world", "link":"#", "target":"_self", "url":"#", "selected":0, "expand":"N", "isShow":true, "parent_srl":"127", "k":"128", "cn":null}, {"label":"Click the shutter for the world", "link":"#", "target":"_self", "url":"#", "selected":0, "expand":"N", "isShow":true, "parent_srl":"127", "k":"129", "cn":null}, {"label":"10 thousands hours playing the violins", "link":"#", "target":"_self", "url":"#", "selected":0, "expand":"N", "isShow":true, "parent_srl":"127", "k":"130", "cn":null}, {"label":"Go to 30,000 km by bike", "link":"#", "target":"_self", "url":"#", "selected":0, "expand":"N", "isShow":true, "parent_srl":"127", "k":"131", "cn":null}, {"label":"On around the earth", "link":"#", "target":"_self", "url":"#", "selected":0, "expand":"N", "isShow":true, "parent_srl":"127", "k":"132", "cn":null}, {"label":"Create UI set by countries", "link":"#", "target":"_self", "url":"#", "selected":0, "expand":"N", "isShow":true, "parent_srl":"127", "k":"133", "cn":null}], "addClass":"hasSubMenu"}, {"label":"Friends", "link":"#", "target":"_self", "url":"#", "selected":0, "expand":"N", "isShow":true, "parent_srl":"0", "k":"134", "cn":null}, {"label":"Guestbook", "link":"#", "target":"_self", "url":"#", "selected":0, "expand":"N", "isShow":true, "parent_srl":"0", "k":"135", "cn":null}, {"label":"Donation", "link":"#", "target":"_self", "url":"#", "selected":0, "expand":"N", "isShow":true, "parent_srl":"0", "k":"136", "cn":null}] ';
 myMobileMenu.setTree( menuStr.object() );
```
 */
    setTree: function(tree){
    	this.config.menu = tree;
		return this;
    },
	collectMenuItem: function(targetID){
		var cfg = this.config;
		var menuBox = axdom("#"+targetID)
		var tree = [];

		//{menuID:"1", label:"menu 1", ac:"Dashboard", url:"http://www.axisj.com"}
		var initChilds = function(EL, cid, _tree){
			var childDiv = jQuery(EL).children("."+cfg.childsMenu.className).get(0);
			if(childDiv) {
				var childDivID = cid.replace("PMA", "PMC");
				if(!childDiv.id) childDiv.id = childDivID;
				else childDivID = childDiv.id;

				jQuery("#"+childDivID+">ul>li").each(function(ci, EL) {
					var citem = {}, c_domEL = axdom(EL);
					if(c_domEL.children("A").attr("data-axmenuid")){
						citem._id = c_domEL.children("A").attr("data-axmenuid");
					}else if(c_domEL.children("A").get(0).id) {
						citem._id = c_domEL.children("A").get(0).id;
					}else {
						c_domEL.children("A").get(0).id = (citem._id = cid + "_" + ci);
					}

					citem[cfg.reserveKeys.primaryKey] = cid + "_" + ci;
					citem[cfg.reserveKeys.labelKey] = c_domEL.children("A").text();
					citem[cfg.reserveKeys.urlKey] = c_domEL.children("A").attr("href");
					citem[cfg.reserveKeys.targetKey] = c_domEL.children("A").attr("target") || "_self";
					citem[cfg.reserveKeys.addClassKey] = c_domEL.children("A").attr("class") || "";
					citem[cfg.reserveKeys.subMenuKey] = [];
					_tree[cfg.reserveKeys.subMenuKey].push(citem);

					//trace(pi,  ci);
					initChilds(EL, citem[cfg.reserveKeys.primaryKey], _tree[cfg.reserveKeys.subMenuKey][ci]);
				});
			}
		};

		menuBox.find("." + cfg.parentMenu.className).each(function(pi, EL){
			if(!EL.id) EL.id = cfg.menuBoxID + "_PM_" + pi;
			var item = {}, domEL = axdom(EL), nid = "";
			if(domEL.children("A").attr("data-axmenuid")){
				item._id = domEL.children("A").attr("data-axmenuid");
			}else if(domEL.children("A").get(0).id) {
				item._id = domEL.children("A").get(0).id;
			}else {
				domEL.children("A").get(0).id = (item._id = cfg.menuBoxID + "_PMA_" + pi);
			}

			if(domEL.children("A").get(0).id) {
				nid = domEL.children("A").get(0).id;
			}else {
				nid = cfg.menuBoxID + "_PMA_" + pi;
			}

			item._child_id = nid.replace("PMA", "PMC");
			item[cfg.reserveKeys.primaryKey] = targetID + "_PM_" + pi;
			item[cfg.reserveKeys.labelKey] = domEL.children("A").text();
			item[cfg.reserveKeys.urlKey] = domEL.children("A").attr("href");
			item[cfg.reserveKeys.targetKey] = domEL.children("A").attr("target") || "_self";
			item[cfg.reserveKeys.addClassKey] = domEL.children("A").attr("class") || "";
			item[cfg.reserveKeys.subMenuKey] = [];
			tree.push(item);

			var child = domEL.children("."+cfg.childMenu.className).get(0);
			if(child){
				if(!child.id) child.id = item._child_id;
				jQuery("#"+item._child_id+">ul>li").each(function(ci, EL) {
					var citem = {}, c_domEL = axdom(EL);

					if(c_domEL.children("A").attr("data-axmenuid")){
						citem._id = c_domEL.children("A").attr("data-axmenuid");
					}else if(c_domEL.children("A").get(0).id) {
						citem._id = c_domEL.children("A").get(0).id;
					}else {
						c_domEL.children("A").get(0).id = (citem._id = item._child_id.replace("PMC", "PMA") + "_" + ci);
					}

					citem[cfg.reserveKeys.primaryKey] = item._child_id.replace("PMC", "PMA") + "_" + ci;
					citem[cfg.reserveKeys.labelKey] = c_domEL.children("A").text();
					citem[cfg.reserveKeys.urlKey] = c_domEL.children("A").attr("href");
					citem[cfg.reserveKeys.targetKey] = c_domEL.children("A").attr("target") || "_self";
					citem[cfg.reserveKeys.addClassKey] = c_domEL.children("A").attr("class") || "";
					citem[cfg.reserveKeys.subMenuKey] = [];
					tree[pi][cfg.reserveKeys.subMenuKey].push(citem);

					//trace(pi,  ci);
					initChilds(EL, citem[cfg.reserveKeys.primaryKey], tree[pi][cfg.reserveKeys.subMenuKey][ci]);
				});
			}else{

			}
		});

		return tree;
	},
    /* 메뉴 터치 이동관련 함수 - s */
	touchstart: function (e) {
		var cfg = this.config;

		var touch;
		var event = window.event;
		if (AXUtil.browser.mobile){
			touch = event.touches[0];
			if (!touch.pageX) return;
		}else{
			var event = e;
			touch = {
				pageX : e.pageX, 
				pageY : e.pageY
			};
		}
		
		this.touchStartXY = {
			sTime: ((new Date()).getTime() / 1000),
			sLeft:  this.mobileMenuBodyScroll.position().left,
			x: touch.pageX,
			y: touch.pageY
		};

		if(AXUtil.browser.mobile){
			var event = window.event;
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
		}else{
			axdom(document.body).bind("mouseup.AXMobileMenu", this.touchEnd.bind(this));
			axdom(document.body).bind("mousemove.AXMobileMenu", this.touchMove.bind(this));
		}
		
		this.mobileMenuBodyScroll.stop();
	},
	touchMove: function (e) {
		if (this.touhEndObserver) clearTimeout(this.touhEndObserver); //닫기 명령 제거
		var cfg = this.config;
		
		var touch;
		var event = window.event;
		if (AXUtil.browser.mobile){
			touch = event.touches[0];
			if (!touch.pageX) return;
		}else{
			var event = e;
			touch = {
				pageX : e.pageX, 
				pageY : e.pageY
			};
		}
		
		if ((this.touchStartXY.x - touch.pageX).abs() < (this.touchStartXY.y - touch.pageY).abs()) {
			//this.touchMode = ((this.touchStartXY.y - touch.pageY) <= 0) ? "up" : "dn"; /* 위아래 이동 */
		} else if ((this.touchStartXY.x - touch.pageX).abs() > (this.touchStartXY.y - touch.pageY).abs()) {
			//this.touchMode = ((this.touchStartXY.x - touch.pageX) <= 0) ? "lt" : "rt"; /* 좌우 이동 */
			
			this.moveBlock(touch.pageX - this.touchStartXY.x);
			if (event.preventDefault) event.preventDefault();
			else return false;
			
		}
		if (((this.touchStartXY.x - touch.pageX).abs() - (this.touchStartXY.y - touch.pageY).abs()).abs() < 5) {
			//this.touchSelecting = true;
		}
	},
	touchEnd: function (e) {
		var cfg = this.config;
		var event = window.event || e;
		//this.moveSens = 0;
		//this.touchMode = false;
		
		if(AXUtil.browser.mobile){
			if (document.removeEventListener) {
				document.removeEventListener("touchend", this.touchEndBind, false);
				document.removeEventListener("touchmove", this.touchMoveBind, false);
			}
		}else{
			axdom(document.body).unbind("mouseup.AXMobileMenu");
			axdom(document.body).unbind("mousemove.AXMobileMenu");
		}
		
		var moveEndBlock = this.moveEndBlock.bind(this);
		this.touhEndObserver = setTimeout(function () {
			moveEndBlock();
		}, 10);
	},
	moveBlock: function(moveX){
		//trace(this.mobileMenuBodyScroll.width());
		var cfg = this.config;
		var newLeft = (this.touchStartXY.sLeft + (moveX * 1));
		if(newLeft > this.menuPageWidth*0.5){
			newLeft = this.menuPageWidth*0.5;
		}else if(newLeft < ( - this.mobileMenuBodyScroll.width()) * 1.5){
			newLeft = ( - this.mobileMenuBodyScroll.width()) * 1.5;
		}
		this.mobileMenuBodyScroll.css({left: newLeft});
	},
	moveEndBlock: function(){
		/* 관성발동여부 체크 */
		if(!this.touchStartXY) return;
		var sTime = this.touchStartXY.sTime;
		var eTime = ((new Date()).getTime() / 1000);
		var dTime = eTime - sTime;
		var eLeft = this.mobileMenuBodyScroll.position().left;
		var dLeft = eLeft - this.touchStartXY.sLeft;
		var velocity = Math.ceil((dLeft/dTime)/10); // 속력= 거리/시간
		var endLeft = Math.ceil(eLeft + velocity); //스크롤할때 목적지
		/*trace({eLeft: eLeft, velocity:velocity, endLeft:endLeft});*/
		if(endLeft > 0){
			endLeft = 0;
		}		
		var calLeft = (endLeft.abs() % this.menuPageWidth);
		var absPage = (endLeft.abs() / this.menuPageWidth).floor();
		var newLeft = 0;
		if(calLeft < this.menuPageWidth/2){
		}else{
			absPage += 1;
		}
		if(absPage > this.pageNum-1) absPage = this.pageNum - 1;
		newLeft = this.menuPageWidth * absPage;
		
		//trace(absPage);
		this.touchStartXY.sLeft = -newLeft;

		this.mobileMenuBodyScroll.animate({left: -newLeft}, (this.mobileMenuBodyScroll.position().left + newLeft).abs(), "cubicOut", function () {});
		this.modalObj.modalFoot.find('#' + this.modalID + '_AX_pageNav_AX_' + this.pageNo).removeClass("on");
		this.modalObj.modalFoot.find('#' + this.modalID + '_AX_pageNav_AX_' + absPage).addClass("on");
		
		this.pageNo = absPage;
		
		this.touchStartXY = null;
	},
	/* 메뉴 터치 이동관련 함수 - e */
	
	cancelEvent: function (event) {
		event.stopPropagation(); // disable  event
		return false;
	}
});
/* ---------------------------- */
var AXTopDownMenu = Class.create(AXJ, {
	initialize: function(AXJ_super){
		AXJ_super();

		this.tree = [];
		this.poi = "";
		this.config.easing = {
			open:{duraing:200, easing:"expoOut"},
			close:{duration:200, easing:"expoOut"}
		};
		//this.config.menuBoxID = "menuBox";
		this.config.parentMenu = {
								className:"parentMenu"
							};
		this.config.childMenu = {
								className:"childMenu",
								arrowClassName:"varrow",
								align:"center",
								valign:"top",
								margin:{top:10, left:0, bottom:0},
								arrowMargin:{top:10, left:0, bottom:0}
							};
		this.config.childsMenu = {
								className:"childsMenu",
								arrowClassName:"harrow",
								align:"left",
								valign:"top",
								margin:{top:10, left:0, bottom:0},
								arrowMargin:{top:10, left:0, bottom:0}
							};
		this.config.parentOutResetChild = true;
		this.config.childOutClose = true;
		this.config.childOutCloseTime = 700;
	},
	init: function(){
		var cfg = this.config;
		
		if(cfg.menuBoxID){
			this.menuBox = axdom("#"+cfg.menuBoxID);

			//서브 메뉴를 숨김 처리 합니다.
			this.menuBox.find("."+cfg.childMenu.className).hide();
			this.menuBox.find("."+cfg.childsMenu.className).hide();

			this.initParents();
			this.initChild();
			if(cfg.onComplete) cfg.onComplete.call(this);
		}else if(cfg.targetID){

		}
		axdom(window).bind("resize", this.windowResize.bind(this));
	},
	windowResizeApply: function(){
		var cfg = this.config, menuBoxWidth = 0;
		axf.each(this.tree, function(){
			this.width = axdom("#" + this.id).outerWidth();
			this.height = axdom("#" + this.id).outerHeight();
			menuBoxWidth += axdom("#" + this.id).parent().outerWidth().number() + 2;
		});
		//trace(menuBoxWidth);
		//this.menuBox.css({width:menuBoxWidth});
	},
/**
 * @method AXTopDownMenu.setTree
 * @param {jsObject} obj - example code 참고
 * @description
 * 메뉴타겟 엘리먼트 아이디 안에 메뉴 대상 HTML 엘리먼트가 있는 경우 자동으로 메뉴를 구성합니다. setTree 메소드는 타겟을 빈 노드로 선언하고 setTree 메소드를 통해 동적으로 메뉴를 구성하는 메소드입니다.
 * @example
 ```
var sampleTreeItem = {
    label: "Bottom Menu",			//{string} - 메뉴의 라벨
    url: "http://www.axisj.com", 	//{string} - 연결URL
    addClass: "myMenuClass", 		//{string} - 메뉴아이템에 추가할 CSS 클래스
    cn: [sampleTreeItem, ...., sampleTreeItem]	//[array] - 자식 메뉴 Array
};

var myMenu = new AXTopDownMenu();

var tree = [
    {label:"Bottom Menu", url:"http://www.axisj.com", cn:[
        {label:"valign - bottom", url:"http://www.axisj.com"},
        {label:"margin - bootom", url:"http://www.axisj.com"},
        {label:"margin - top X", url:"http://www.axisj.com"}
    ]},
    {label:"Script Control Way", url:"http://www.axisj.com", cn:[
         {label:"Script Way Use setTree", url:"abhttp://www.axisj.comc"},
         {label:"setHighLightMenu", url:"http://www.axisj.com", cn:[
             {label:"first : String", url:"http://www.axisj.com"},
             {label:"second : Array", url:"http://www.axisj.com"},
             {label:"third : setHighLightOriginID", url:"http://www.axisj.com"}
         ]},
        {label:"myMenu2", url:"http://www.axisj.com"}
    ]},
     {label:"no Expand Menu", url:"http://www.axisj.combc"},
     {label:"no Expand Menu", url:"http://www.axisj.com"},
     {label:"no Expand Menu", url:"http://www.axisj.com"}
];
myMenu.setTree(Tree);

 ```
 */
	setTree: function(tree){
		var cfg = this.config;
		cfg.menuBoxID = cfg.targetID, _this = this;

		if(!this.menuBox) this.menuBox = axdom("#"+cfg.menuBoxID);

		var po = [];
		
		var treeFn = function(subTree){
			axdom.each(subTree, function(pi, T){
				po.push("<li>");
				var addClass = (T.cn && T.cn.length > 0 ) ? " class = \"" + cfg.childsMenu.hasChildClassName + "\"" : "";
				po.push("<a href=\"" + (T.url||cfg.href) + "\""+addClass+" id=\""+ (T._id||"") +"\">"+ (T.label||"").dec() + "</a>");
				if(T.cn && T.cn.length > 0 ){
					po.push("<div class=\""+cfg.childsMenu.className+"\">");
					po.push("	<ul>");
					po.push(treeFn(T.cn));
					po.push("	</ul>");
					po.push("</div>");
				}
				po.push("</li>");
			});
		};
		
		po.push("<ul>");
		axdom.each(tree, function(pi, T){
			var addClass = [];
			if(T.addClass){
				addClass.push(T.addClass);
			}
			po.push("<li>");
			po.push("	<div class=\"" + cfg.parentMenu.className + " " + addClass.join(" ") + "\">");
				var addClass = (T.cn) ? " class = \"" + cfg.childMenu.hasChildClassName + "\"" : "";
				po.push("<a href=\"" + (T.url||cfg.href) + "\""+addClass+" id=\""+ (T._id||"") +"\">"+ (T.label||"").dec() + "</a>");
				if(T.cn){
					po.push("<div class=\""+cfg.childMenu.className+"\">");
					po.push("	<ul>");
					po.push(treeFn(T.cn));
					po.push("	</ul>");
					po.push("</div>");
				}
			po.push("	</div>");
			po.push("</li>");
		});
		po.push("</ul>");
		po.push("<div class=\"clear\"></div>");

		this.menuBox.empty();
		this.menuBox.append(po.join(''));
		
		//서브 메뉴를 숨김 처리 합니다.
		this.menuBox.find("."+cfg.childMenu.className).hide();
		this.menuBox.find("."+cfg.childsMenu.className).hide();

        setTimeout(function(){
            _this.initParents();
            _this.initChild();
	        if(cfg.onComplete) cfg.onComplete.call(this);
        }, 300);
	},
	initParents: function(){
		var cfg = this.config;
		var parents = [], menuBoxWidth = 0;
		this.menuBox.find("." + cfg.parentMenu.className).each(function(pi, EL){
			EL.id = cfg.menuBoxID + "_PM_" + pi;
			var _id = "";

			var ELA = axdom(EL).children("A");

			if(ELA.get(0).id) _id = axdom(EL).children("A").get(0).id;
			ELA.get(0).id = cfg.menuBoxID + "_PMA_" + pi;
			ELA.attr("data-axmenuid", _id);

			parents.push({
				_id:_id,
				id:EL.id,
				width:axdom(EL).outerWidth(),
				height:axdom(EL).outerHeight(),
				cn:[],
				coi:""
			});
			menuBoxWidth += axdom(EL).parent().outerWidth().number() + 2;
		});
		this.tree = parents;
		//this.menuBox.css({width:menuBoxWidth});

		//trace(this.menuBox.find("." + cfg.parentMenu.className + ">a"));
		this.menuBox.find("." + cfg.parentMenu.className + ">a").bind("mouseover", this.onoverParent.bind(this));
		this.menuBox.find("." + cfg.parentMenu.className + ">a").bind("focus", this.onoverParent.bind(this));
		this.menuBox.find("." + cfg.parentMenu.className + ">a").bind("click", this.onclickParent.bind(this));
		
		if(cfg.childOutClose){
			var onoutChild = this.onoutChild.bind(this);
			this.menuBox.find("." + cfg.parentMenu.className + ">a").bind("mouseout", onoutChild);
		}
	},
	onoverParent: function(event){
		if (this.childObserver) clearTimeout(this.childObserver); //닫기 명령 제거
		var cfg = this.config;
		
		var target = axf.get_event_target(event.target, {tagname:"a"});
		var poi = target.id.split(/\_/g).last();
		if(this.poi != "" && this.poi != poi){
			axdom("#" + cfg.menuBoxID + "_PMA_" + this.poi).removeClass("on");
			axdom("#" + cfg.menuBoxID + "_PMC_" + this.poi).slideUp(
				{
					duration:cfg.easing.close.duration,
					easing:cfg.easing.close.easing,
					complete:function(){
						
					}
		    	}
		    );
		    if(cfg.parentOutResetChild) this.closeSubMenu(this.tree[this.poi]);
		}

		//slideDown check
		if(this.dfPoi != undefined) axdom("#" + cfg.menuBoxID + "_PMA_" + this.dfPoi).removeClass("on");
		axdom("#" + cfg.menuBoxID + "_PMA_" + poi).addClass("on");
		//trace("#" + cfg.menuBoxID + "_PMC_" + poi);
		
		var tgDiv = axdom("#" + cfg.menuBoxID + "_PMC_" + poi);
		if(this.tree[poi] && !this.tree[poi].divDim){
			tgDiv.show();
			this.tree[poi].divDim = {width:tgDiv.outerWidth(), height:tgDiv.outerHeight()};
			if(this.tree[poi].height == null){
				for(var index = 0;index < this.tree.length;index++){
					this.tree[index].height = axdom("#" + this.tree[index].id).outerHeight();
				}
				//trace(poi, this.tree[poi]);
			}
			var topDim = {width:this.tree[poi].width, height:this.tree[poi].height};

			/* subMenu positioning */
			if(cfg.childMenu.align == "center"){
				var posLeft = topDim.width / 2 - this.tree[poi].divDim.width / 2 + cfg.childMenu.margin.left;
			}else if(cfg.childMenu.align == "left"){
				var posLeft = 0 + cfg.childMenu.margin.left;
			}else if(cfg.childMenu.align == "right"){
				var posLeft = topDim.width - this.tree[poi].divDim.width + cfg.childMenu.margin.left;
			}
			if(cfg.childMenu.valign == "top"){
				var posTop = topDim.height + cfg.childMenu.margin.top;
				if(cfg.childMenu.float){
					tgDiv.css({top:posTop, left:posLeft});
				}else{
					tgDiv.css({top:posTop, left:posLeft, width:this.tree[poi].divDim.width});
				}
			}else if(cfg.childMenu.valign == "bottom"){
				var posTop = topDim.height + cfg.childMenu.margin.bottom;
				if(cfg.childMenu.float){
					tgDiv.css({top:posTop, left:posLeft});
				}else{
					tgDiv.css({top:"auto", bottom:posTop, left:posLeft, width:this.tree[poi].divDim.width});
				}
			}
			/* -------------------- */

			/* subMenu Arrow positioning */
			if(cfg.childMenu.arrowClassName){
				var arrow = tgDiv.find("."+cfg.childMenu.arrowClassName);
				if(cfg.childMenu.align == "center"){
					var aLeft = tgDiv.outerWidth() / 2 - arrow.outerWidth() / 2 + cfg.childMenu.arrowMargin.left;
				}else if(cfg.childMenu.align == "left"){
					var aLeft = 0 + cfg.childMenu.arrowMargin.left;
				}else if(cfg.childMenu.align == "right"){
					var aLeft = tgDiv.outerWidth() - arrow.outerWidth() + cfg.childMenu.arrowMargin.left;
				}
				if(cfg.childMenu.valign == "top"){
					var aTop = -arrow.outerHeight() + cfg.childMenu.arrowMargin.top;
					arrow.css({top:aTop, left:aLeft});
				}else if(cfg.childMenu.valign == "bottom"){
					var aTop = -arrow.outerHeight() + cfg.childMenu.arrowMargin.bottom;
					arrow.css({bottom:aTop, left:aLeft});
				}
			}
			/* -------------------- */

			tgDiv.hide();
			topDim = null;
			posTop = null;
			posLeft = null;
		}

		tgDiv.fadeIn(
			{
				duration:cfg.easing.open.duration,
				easing:cfg.easing.open.easing,
				complete:function(){
				}
	    	}
	    );

		this.poi = poi;
	},
	onclickParent: function(event){
		var cfg = this.config;
		var poi = event.target.id.split(/\_/g).last();

		//trace(this.tree[poi]);
	},
	initChild: function(){
		var cfg = this.config;
		var initChilds = this.initChilds.bind(this);
		var tree = this.tree;
		this.menuBox.find("." + cfg.parentMenu.className).each(function(pi, EL){
			var child = axdom(EL).children("."+cfg.childMenu.className).get(0);
			if(child){
				child.id = cfg.menuBoxID + "_PMC_" + pi;
				if(cfg.childMenu.arrowClassName){
					var arrow = axdom("<div class=\""+cfg.childMenu.arrowClassName+"\"></div>");
					axdom(child).prepend(arrow);
				}
				initChilds(child.id, tree[pi]);
			}else{
				
			}
		});
	},
	initChilds: function(cid, rTree){
		var initChilds = this.initChilds.bind(this);
		var cfg = this.config;
		var tree = rTree.cn;

		var onoverChild = this.onoverChild.bind(this);
		var onoutChild = this.onoutChild.bind(this);
		//trace(cid);
		axdom("#"+cid+">ul>li").each(function(pi, EL){
			var linkA = axdom(EL).children("A");
			var _id = "";
			if(linkA.get(0).id) _id = linkA.get(0).id;
			linkA.get(0).id = cid.replace("PMC", "PMA") + "_" + pi;
			linkA.attr("data-axmenuid", _id);
			linkA.bind("mouseover", onoverChild);
			if(cfg.childOutClose){
				linkA.bind("mouseout", onoutChild);
			}

			//axdom(EL).children("A").html(cid.replace("PMC", "PMA") + "_" + pi);
			var childDiv = axdom(EL).children("."+cfg.childsMenu.className).get(0);
			if(childDiv){
				childDiv.id = cid+"_"+pi;

				if(cfg.childsMenu.arrowClassName){
					var arrow = axdom("<div class=\""+cfg.childsMenu.arrowClassName+"\"></div>");
					axdom(childDiv).prepend(arrow);
				}

				tree.push({
					_id:_id,
					id:	cid+"_"+pi,
					cn:[],
					coi:""
				});
				initChilds(cid+"_"+pi, tree[pi]);
			}else{
				tree.push({
					_id:_id,
					id:	cid+"_"+pi,
					cn:[],
					coi:""
				});
			}
		});
	},
	closeSubMenu: function(pitem){
		if(!pitem) return;
		if(pitem.coi == "") return;
		var cfg = this.config;
		axdom("#" + pitem.coi).slideUp(
			{
				duration:cfg.easing.close.duration,
				easing:cfg.easing.close.easing,
				complete:function(){
				}
	    	}
	    );
	    pitem.coi = "";
	    //하위 자식들의 poi 모두 닫기

		var closeAllSubMenu = function(stree){
			axdom.each(stree, function(){
				if(this.coi != ""){
					axdom("#" + this.coi).hide();
				}
				closeAllSubMenu(this.cn);
			});
		};
	    closeAllSubMenu(pitem.cn);
	},
	onoverChild: function(event){
		if (this.childObserver) clearTimeout(this.childObserver); //닫기 명령 제거
		var cfg = this.config;
		var target = axf.get_event_target(event.target, {tagname:"a"});
		var eid = target.id;
		var ids = target.id.split(/\_/g);
		var tree = this.tree;
		var item = {};
		var pitem = {};
		for(var a=2;a<ids.length;a++){
			if(a == ids.length-2){
				pitem = tree[ids[a]];
			}
			if(tree[ids[a]]){
				if(tree[ids[a]].cn){
					item = tree[ids[a]];
					tree = tree[ids[a]].cn;
				}
			}
		}
		
		if(pitem){
			if(pitem.coi != "" && pitem.coi != item.id){
				this.closeSubMenu(pitem);
			}
		}

		if(item){
			if(item.id){

				var tgDiv = axdom("#" + item.id);

				//slideDown check
				if(!item.divDim){
					axdom("#" + item.id).show();
					item.divDim = {width:tgDiv.outerWidth(), height:tgDiv.outerHeight()};
					var pDim = {width:axdom("#"+eid).outerWidth(), height:axdom("#"+eid).outerHeight(), pos:axdom("#"+eid).position()};

					if(cfg.childsMenu.align == "left"){
						var posLeft = pDim.width + cfg.childsMenu.margin.left;
					}else{
						var posLeft = -item.divDim.width + cfg.childsMenu.margin.left;
					}

					if(cfg.childsMenu.valign == "top"){
						var posTop = pDim.pos.top + cfg.childsMenu.margin.top;
						tgDiv.css({top:posTop, left:posLeft, width:item.divDim.width});
					}else{
						var posTop = (pitem.divDim.height - pDim.pos.top) - pDim.height + cfg.childsMenu.margin.bottom;
						tgDiv.css({bottom:posTop, left:posLeft, width:item.divDim.width});
					}

					/* subMenu Arrow positioning */
					if(cfg.childsMenu.arrowClassName){

						var arrow = tgDiv.find("."+cfg.childsMenu.arrowClassName);
						if(cfg.childsMenu.align == "left"){
							var aLeft =  - arrow.outerWidth() + cfg.childsMenu.arrowMargin.left;
						}else{
							var aLeft = tgDiv.outerWidth() - arrow.outerWidth() + cfg.childsMenu.arrowMargin.left;
						}
						if(cfg.childsMenu.valign == "top"){
							var aTop = 0 + cfg.childsMenu.arrowMargin.top;
							arrow.css({top:aTop, left:aLeft});
						}else if(cfg.childsMenu.valign == "bottom"){
							var aTop = 0 + cfg.childsMenu.arrowMargin.bottom;
							arrow.css({bottom:aTop, left:aLeft});
						}
					}
					/* -------------------- */

					tgDiv.hide();
					pDim = null;
					posTop = null;
					posLeft = null;
				}


				tgDiv.fadeIn(
					{
						duration:cfg.easing.open.duration,
						easing:cfg.easing.open.easing,
						complete:function(){
						}
			    	}
			    );
			    if(pitem) pitem.coi = item.id.replace("PMA", "PMC");
			}

		}

	},
	onoutChild: function(event){
		var cfg = this.config;
		var outChild = this.outChild.bind(this);
		this.childObserver = setTimeout(function() {
	       outChild();
	    }, cfg.childOutCloseTime);
	},
	outChild: function(){
		var cfg = this.config;
		this.closeSubMenu(this.tree[this.poi]);

		axdom("#" + cfg.menuBoxID + "_PMA_" + this.poi).removeClass("on");
		if(this.dfPoi != undefined) axdom("#" + cfg.menuBoxID + "_PMA_" + this.dfPoi).addClass("on");
		axdom("#" + cfg.menuBoxID + "_PMC_" + this.poi).slideUp(
			{
				duration:cfg.easing.close.duration,
				easing:cfg.easing.close.easing,
				complete:function(){
				}
	    	}
	    );
	},
	setHighLightMenu: function(poi){
		var cfg = this.config;
		this.menuBox.find(".parentMenu").removeClass("on");
		this.menuBox.find(".parentMenu a").removeClass("on");
		this.menuBox.find(".childMenu a").removeClass("on");

		if(axdom.isArray(poi)){
			this.poi = this.dfPoi = poi;
			var tree = this.tree;
			axdom.each(poi, function(idx, T){
				if(idx == 0) tree = tree[T.number()];
				else  tree = tree.cn[T.number()];
				if(tree){
					if(idx == 0){
						axdom("#" + tree.id).addClass("on");
						axdom("#" + tree.id).children("A").addClass("on");
					}else{
						axdom("#" + tree.id.replace("_PMC_", "_PMA_")).addClass("on");
					}
				}
			});
		}else{
			this.poi = this.dfPoi = poi;
			axdom("#" + cfg.menuBoxID + "_PMA_" + this.dfPoi).addClass("on");
		}
	},
/**
 * @method AXTopDownMenu.setHighLightOriginID
 * @param {string} - 메뉴 엘리먼트에 사용자가 정의한 ID
 * @description
 * 타겟 엘리먼트안에 Html 엘리먼트로 메뉴를 정의한 경우 엘리먼트 안에 사용자가 정의해 둔 아이디로 메뉴의 하이라이트를 처리해줍니다.
 * @example
 ```
 myMenu.setHighLightOriginID("ID1245");
 ```
 */

	setHighLightOriginID: function(_id){
		var cfg = this.config;
		var tree = this.tree;
		var findedID = "";

		var treeFn = function(subTree){
			axdom.each(subTree, function(idx, T){
				if(T._id == _id){
					findedID = T.id;
					return false;
				}else{
					if(T.cn) treeFn(T.cn);
				}
			});
		};

		axdom.each(this.tree, function(idx, T){
			if(T._id == _id){
				findedID = T.id;
				return false;
			}else{
				if(T.cn) treeFn(T.cn);
			}
		});

		if(findedID){
			this.findedID = findedID;
			var pos = findedID.split(/_PM[C]?_/g).last();
			var selectedMenus = pos.split(/_/g);
			this.setHighLightMenu(selectedMenus);
			return selectedMenus;
		}

	},

/**
 * @method AXTopDownMenu.setHighLightID
 * @param {array} - [0, 1] 와 같이 각 뎁스의 순번을 전달합니다.
 * @description
 * 메뉴의 포지션 값으로 포지션에 해당하는 메뉴를 하이라이트 처리해 줍니다.
 * @example
 ```
 myMenu.setHighLightMenu([2, 1]); // 3번째 아이템(1depth)의 2번째 아이템(2depth)을 하이라이트 처리합니다.
 ```
 */
    setHighLightID: function(_id){
		var cfg = this.config;
		var tree = this.tree;
		var findedID = "";

		var treeFn = function(subTree){
			axdom.each(subTree, function(idx, T){
				if(T.id == _id){
					findedID = T.id;
					return false;
				}else{
					if(T.cn) treeFn(T.cn);
				}
			});
		};
		axdom.each(tree, function(idx, T){
			if(T.id == _id){
				findedID = T.id;
				return false;
			}else{
				if(T.cn) treeFn(T.cn);
			}
		});

		if(findedID){
			this.findedID = findedID;
			var pos = findedID.split(/_PM[C]?_/g).last();
			var selectedMenus = pos.split(/_/g);
			this.setHighLightMenu(selectedMenus);
			return selectedMenus;
		}
	}
});
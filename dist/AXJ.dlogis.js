/*! 
axisj - v1.1.12 - 2017-06-07 
*/
/*! 
axisj - v1.1.12 - 2017-06-07 
*/

if(!window.AXConfig){
/**
 * AXISJ UI 등에 기본값으로 사용되는 설정 변수
 * @namespace {Object} AXConfig
 * @example
 ```json
 AXConfig.weekDays = [{label:""},..];
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
		anchorHref: "href=\"javascript:;\"",
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
			fitToWidthRightMargin: 11,
			fitToWidth: false,
			pageSize: 10,
			pageHeight: 400,
			headTdHeight: 30,
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
		},
	/**
	 * AXValidator default config
	 * @memberof AXConfig
	 * @example
	 * ```json
	 * AXValidator: {
	 *	validateErrMessage: {
	 *		required: "[{label}](은)는 필수입력 사항입니다.",
	 *		requiredstring: "반드시 {required}(으)로 입력하셔야 하는 사항입니다.",
	 *		match: "[{label}](은)는 입력된 내용이 일치하지 않습니다.",
	 *		invalid: "[{label}](은)는 입력된 내용이 올바르지 않습니다.",
	 *		min: "[{label}](은)는 {min} 이상의 값을 입력해주세요.",
	 *		max: "[{label}](은)는 {max} 이하의 값을 입력해주세요.",
	 *		minbyte: "[{label}]의 입력된 내용의 길이가 {minbyte}Byte 이상이어야 합니다.",
	 *		maxbyte: "[{label}]의 입력된 내용의 길이가 {maxbyte}Byte를 초과할 수 없습니다.",
	 *		minlength: "[{label}]의 입력된 내용의 length가 {minlength} 이상이어야 합니다.",
	 *		maxlength: "[{label}]의 입력된 내용의 length가 {maxlength}을 초과할 수 없습니다.",
	 *
	 *		number: "숫자로만 입력하셔야 합니다.",
	 *		email: "이메일 형식이 올바르지 않습니다.",
	 *		hangul: "한글로만 입력하셔야 합니다.",
	 *		engonly: "영문으로만 입력하셔야 합니다.",
	 *		residentno: "주민등록번호 형식이 올바르지 않습니다.",
	 *		foreignerno: "외국인등록번호 형식이 올바르지 않습니다.",
	 *		bizno: "사업자등록번호 형식이 올바르지 않습니다.",
	 *		phone: "전화번호 형식이 올바르지 않습니다.",
	 *		isdate: "날짜 형식이 올바르지 않습니다.",
	 *		zip: "우편번호 형식이 올바르지 않습니다.",
	 *		money: "화폐형식으로만 입력하셔야 합니다.",
	 *		earlierThan: "[{label}] 보다 빠른 날짜를 입력해야 합니다.",
	 *		laterThan: "[{label}] 보다 느린 날짜를 입력해야 합니다.",
	 *
	 *		exception: "not found errmessage"
	 *	}
	 *}
	 * ```
 	 */
		AXValidator: {
			validateErrMessage: {
				/* for element */
				required: "[{label}](은)는 필수입력 사항입니다.",
				requiredstring: "반드시 {required}(으)로 입력하셔야 하는 사항입니다.",
				match: "[{label}](은)는 입력된 내용이 일치하지 않습니다.",
				invalid: "[{label}](은)는 입력된 내용이 올바르지 않습니다.",
				min: "[{label}](은)는 {min} 이상의 값을 입력해주세요.",
				max: "[{label}](은)는 {max} 이하의 값을 입력해주세요.",
				minbyte: "[{label}]의 입력된 내용의 길이가 {minbyte}Byte 이상이어야 합니다.",
				maxbyte: "[{label}]의 입력된 내용의 길이가 {maxbyte}Byte를 초과할 수 없습니다.",
				minlength: "[{label}]의 입력된 내용의 length가 {minlength} 이상이어야 합니다.",
				maxlength: "[{label}]의 입력된 내용의 length가 {maxlength}을 초과할 수 없습니다.",

				/* for format */
				number: "숫자로만 입력하셔야 합니다.",
				email: "이메일 형식이 올바르지 않습니다.",
				hangul: "한글로만 입력하셔야 합니다.",
				engonly: "영문으로만 입력하셔야 합니다.",
				residentno: "주민등록번호 형식이 올바르지 않습니다.",
				foreignerno: "외국인등록번호 형식이 올바르지 않습니다.",
				bizno: "사업자등록번호 형식이 올바르지 않습니다.",
				phone: "전화번호 형식이 올바르지 않습니다.",
				isdate: "날짜 형식이 올바르지 않습니다.",
				zip: "우편번호 형식이 올바르지 않습니다.",
				money: "화폐형식으로만 입력하셔야 합니다.",
				earlierThan: "[{label}] 보다 빠른 날짜를 입력해야 합니다.",
				laterThan: "[{label}] 보다 느린 날짜를 입력해야 합니다.",

				exception: "not found errmessage"
			}
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
     * ```js
     * trace( axf.getUniqueId() );
     * ```
     */
    getUniqueId: function () {
        return (axf.uniqueSeq += 1);
    },

    /**
     * document.getElementById(id) 와 같습니다. 아이디가 같은 엘리먼트를 반환합니다.
     * @method axf.getId
     * @param {String} id
     * @returns {HtmlElement}
     * @example
     * ```js
     * if(axf.getId("myele_id")){
	 *    $("#myele_id").css({...});
	 * }
     * ```
     */
    getId: function (id) {
        return document.getElementById(id);
    },

    /**
     * @method axf.each
     * @param {Array|Object} obj
     * @param {Function} callback
     * @description Array 또는 Object의 아이템만큰 callback 함수를 call합니다.
     * @example
     * ```js
     * var new_array = [];
     * axf.each([0, 1, 2], function(){
	 * 	new_array.push(this*2);
	 * });
     * var new_object = {};
     * axf.each({a:1, b:2, c:3}, function(k, v){
	 * 	new_object[k] = v*2;
	 * });
     * ```
     */
    each: function (obj, callback) {
        if (obj) {
            var name, i = 0, length = obj.length,
                isObj = length === undefined || Object.isFunction(obj);
            if (isObj) {
                for (name in obj) {
                    if (callback.call(obj[name], name, obj[name]) === false) {
                        break;
                    }
                }
            }
            else {
                for (; i < length;) {
                    if (callback.call(obj[i], i, obj[i++]) === false) {
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
     * ```js
     *{
     *	name: {String} - bowserName (ie|chrome|webkit|oprea),
     *	version: {Number} - browserVersion,
     *	mobile: {Boolean}
     *}
     * ```
     */
    browser: (function () {
        var ua = navigator.userAgent.toLowerCase();
        var mobile = (ua.search(/mobile/g) != -1);
        if (ua.search(/iphone/g) != -1) {
            return {name: "iphone", version: 0, mobile: true}
        }
        else if (ua.search(/ipad/g) != -1) {
            return {name: "ipad", version: 0, mobile: true}
        }
        else if (ua.search(/android/g) != -1) {
            var match = /(android)[ \/]([\w.]+)/.exec(ua) || [];
            var browserVersion = (match[2] || "0");
            return {name: "android", version: browserVersion, mobile: mobile}
        }
        else {
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
                "msie": "ie",
                "trident": "ie",
                "opr": "opera"
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
     * ```js
     * axf.docTD = (Q|S)
     * ```
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
     * ```js
     * trace(axf.timeKey()); // A004222760
     * ```
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
     * ```js
     * axf.overwriteObject({a:1}, {b:1});
     * // {a:1, b:1}
     * axf.overwriteObject({a:1}, {a:2}, true);
     * // {a:2}
     * // rewirte : false 이면 {a:1} 로 유지 됩니다. 대상오브젝트에 키가 없는 경우에만 덮어쓰기 합니다.
     * ```
     */
    overwriteObject: function (tg, obj, rewrite) {
        if (rewrite == undefined) rewrite = true;
        //trace(tg[k]);
        if (obj) AXUtil.each(obj, function (k, v) {
            if (rewrite) {
                tg[k] = v;
            }
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
     * ```js
     * axf.copyObject({a:1});
     * // 내부코드가 Object.toJSON(obj).object(); 이므로 상황에 맞게 사용해야 합니다.
     * ```
     */
    copyObject: function (obj) {
        //return Object.clone(obj);
        return Object.toJSON(obj).object();
    },
    consonantKR: function (cword) {
        var cons = [
            {c: "ㄱ", re: "[가-깋]"}, {c: "ㄲ", re: "[까-낗]"}, {c: "ㄴ", re: "[나-닣]"}, {c: "ㄷ", re: "[다-딯]"}, {c: "ㄸ", re: "[따-띻]"}, {c: "ㄹ", re: "[라-맇]"},
            {c: "ㅁ", re: "[마-밓]"}, {c: "ㅂ", re: "[바-빟]"}, {c: "ㅃ", re: "[빠-삫]"}, {c: "ㅅ", re: "[사-싷]"}, {c: "ㅆ", re: "[싸-앃]"}, {c: "ㅇ", re: "[아-잏]"}, {c: "ㅈ", re: "[자-짛]"},
            {c: "ㅉ", re: "[짜-찧]"}, {c: "ㅊ", re: "[차-칳]"}, {c: "ㅋ", re: "[카-킿]"}, {c: "ㅌ", re: "[타-팋]"}, {c: "ㅍ", re: "[파-핗]"}, {c: "ㅎ", re: "[하-힣]"},
            {c: "(", re: "\\("}, {c: ")", re: "\\)"}, {c: "[", re: "\\["}, {c: "]", re: "\\]"}
        ];
        var rword = "";
        var cwords = cword.split("");
        for (var i = 0, l = cwords.length; i < l; i++) {
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
     * ```js
     * axf.setCookie("myname", "tomas", 10, {
	 *     path  : "/",             // {String} [현재 페이지의 path]
	 *     domain: "www.axisj.com", // {String} [현재 사이트의 domain]
	 *     secure: true             // {Boolean} [false]
	 * });
     * ```
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
            expireDate ? "; expires=" + expireDate.toUTCString() : "", // use expires attribute, max-age is not supported by IE
            options.path ? "; path=" + options.path : "",
            options.domain ? "; domain=" + options.domain : "",
            options.secure ? "; secure" : ""
        ].join(""));
    },
    /**
     * @method axf.getCookie
     * @param {String} name
     * @description 쿠키에서 값을 읽어들입니다
     * @example
     * ```js
     * trace( axf.getCookie("myname") );
     * // tomas
     * ```
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
     * ```js
     * trace( axf.dayLen(2013, 1) );
     * // 28
     * // 주의 Data.getMonth() 의 반환값을 그대로 사용 하므로 1월은 0 으로 전달 해야 합니다. 0~11 까지의 값을 사용할 수 있습니다.
     * ```
     */
    dayLen: function (y, m) {
        if ([3, 5, 8, 10].has(function () {
                return this.item == m;
            })) {
            return 30;
        }
        else if (m == 1) {
            return (((y % 4 == 0) && (y % 100 != 0)) || (y % 400 == 0)) ? 29 : 28;
        }
        else {
            return 31;
        }
    },
    /**
     * @method  axf.clientHeight
     * @returns {Number} clientHeight
     * @description 브라우저 clientHeight 반환합니다. window 창 높이와 같습니다.
     * @example
     * ```js
     * axf.clientHeight();
     * ```
     */
    clientHeight: function () {
        return (AXUtil.docTD == "Q") ? document.body.clientHeight : document.documentElement.clientHeight;
    },
    /**
     * @method  axf.scrollHeight
     * @returns {Number} scrollHeight
     * @description HTML scrollHeight 반환합니다.
     * @example
     * ```js
     * axf.scrollHeight();
     * ```
     */
    scrollHeight: function () {
        return (AXUtil.docTD == "Q") ? document.body.scrollHeight : document.documentElement.scrollHeight;
    },
    /**
     * @method  axf.clientWidth
     * @returns {Number} clientWidth
     * @description 브라우저 clientWidth 반환합니다. window 창 너비와 같습니다.
     * @example
     * ```js
     * axf.clientWidth();
     * ```
     */
    clientWidth: function () {
        return (AXUtil.docTD == "Q") ? document.body.clientWidth : document.documentElement.clientWidth;
    },
    /**
     * @method  axf.scrollWidth
     * @returns {Number} scrollWidth
     * @description HTML scrollWidth 반환합니다.
     * @example
     * ```js
     * axf.scrollWidth();
     * ```
     */
    scrollWidth: function () {
        return (AXUtil.docTD == "Q") ? document.body.scrollWidth : document.documentElement.scrollWidth;
    },
    scrollTop: function () {
        return (document.documentElement && document.documentElement.scrollTop) ||
            document.body.scrollTop;
    },
    scrollLeft: function () {
        return (document.documentElement && document.documentElement.scrollLeft) ||
            document.body.scrollLeft;
    },
    /**
     * @member {Object} axf.Event
     * @description Event.keyCode 모음 ref => https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
     * @example
     * ```js
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
     * ```
     */
    Event: {
        KEY_BACKSPACE: 8,
        KEY_TAB: 9,
        KEY_RETURN: 13,
        KEY_SHIFT: 16,
        KEY_CONTROL: 17,
        KEY_ALT: 18,
        KEY_ESC: 27,
        KEY_SPACE: 32,
        KEY_PAGEUP: 33,
        KEY_PAGEDOWN: 34,
        KEY_END: 35,
        KEY_HOME: 36,
        KEY_LEFT: 37,
        KEY_UP: 38,
        KEY_RIGHT: 39,
        KEY_DOWN: 40,
        KEY_INSERT: 45,
        KEY_DELETE: 46,
        KEY_WINDOW: 91,
        KEY_EQUAL: 187,
        KEY_MINUS: 189,
        KEY_PERIOD: 190,
        NUMPAD_EQUAL: 12,
        NUMPAD_MULTIPLY: 106,
        NUMPAD_ADD: 107,
        NUMPAD_SUBTRACT: 109,
        NUMPAD_DECIMAL: 110,
        NUMPAD_DIVIDE: 111,
        NUMPAD_COMMA: 194,
        cache: {}
    },
    /**
     * @method axf.console
     * @param {String|Object|Array} obj
     * @description 브라우저 console 에 메세지를 출력하여 줍니다. trace 와 같습니다.
     * @example
     * ```js
     * axf.console("AXISJ");
     * // AXISJ
     *
     * axf.console(1234);
     * // 1234
     *
     * var myObj = {name:"AXISJ", url:"http://www.axisj.com"};
     * axf.console(myObj);
     * // {"name":"AXISJ", "url":"http://www.axisj.com"}
     * ```
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
                }
                else if (type == "boolean" || type == "number" || type == "string") {
                    objStr = obji;
                }
                else if (type == "object") {
                    objStr = Object.toJSON(obji);
                }
                if (po != "") po += ", ";
                po += "arg[" + i + "] : " + objStr;
            }
        }
        else {
            var type = (typeof obj).toLowerCase();
            if (type == "undefined" || type == "function") {
                po = type;
            }
            else if (type == "boolean" || type == "number" || type == "string") {
                po = obj;
            }
            else if (type == "object") {
                po = Object.toJSON(obj);
            }
        }

        if (axf.mobileConsole) {
            axf.mobileConsole.prepend("<div>" + po + "</div>");
        }
        else {
            if (window.console == undefined) {
            }
            else {
                try {
                    console.log(po);
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
     * ```js
     * axf.alert("AXISJ");
     * // AXISJ
     *
     * axf.alert(1234);
     * // 1234
     *
     * var myObj = {name:"AXISJ", url:"http://www.axisj.com"};
     * axf.alert(myObj);
     * // {"name":"AXISJ", "url":"http://www.axisj.com"}
     * ```
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
                }
                else if (type == "boolean" || type == "number" || type == "string") {
                    objStr = obji;
                }
                else if (type == "object") {
                    objStr = Object.toJSON(obji);
                }
                if (po != "") po += ", ";
                po += "arguments[" + i + "] : " + objStr;
            }
        }
        else {
            var type = (typeof obj).toLowerCase();
            if (type == "undefined" || type == "function") {
                po = type;
            }
            else if (type == "boolean" || type == "number" || type == "string") {
                po = obj;
            }
            else if (type == "object") {
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
     * ```js
     * axf.confirm("AXISJ");
     * // AXISJ
     *
     * axf.confirm(1234);
     * // 1234
     *
     * var myObj = {name:"AXISJ", url:"http://www.axisj.com"};
     * axf.confirm(myObj);
     * // {"name":"AXISJ", "url":"http://www.axisj.com"}
     * ```
     */
    confirm: function (obj) {
        var po = "";
        var type = (typeof obj).toLowerCase();
        if (type == "undefined" || type == "function") {
            po = type;
        }
        else if (type == "boolean" || type == "number" || type == "string") {
            po = obj;
        }
        else if (type == "object") {
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
     * ```js
     * trace( axf.isEmpty("AXISJ") );
     * // false
     * trace( axf.isEmpty("") );
     * // true
     * trace( axf.isEmpty(undefined) );
     * // true
     * ```
     */
    isEmpty: function (obj) {
        return (obj === "" || obj === null || obj === undefined);
    },
    /**
     * @method axf.getUrlInfo
     * @returns {Object} urlInfo
     * @description 브라우저 각종 속성을 반환합니다.
     * @example
     * ```js
     * trace( axf.getUrlInfo() );
     * {
	 * 	"url":"http://127.0.0.1:2013/samples/AXcore/test.html",
	 * 	"param":"",
	 * 	"anchorData":"127.0.0.1:2013/samples/AXcore/test.html",
	 * 	"urlParam":"http://127.0.0.1:2013/samples/AXcore/test.html",
	 * 	"referUrl":"",
	 * 	"pathName":"/samples/AXcore/test.html",
	 * 	"protocol":"http:",
	 * 	"hostName":"127.0.0.1"
	 * }
     * ```
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
            url: url,
            param: param,
            anchorData: AXparam,
            urlParam: url_param,
            referUrl: referUrl,
            pathName: pathName,
            protocol: pageProtocol,
            hostName: pageHostName
        };
    },
    /**
     * @method axf.encParam
     * @param {String} str - parameter
     * @returns {String} parameter
     * @description 파라미터에 value를 URLEncode해 줍니다.
     * @example
     * ```js
     * axf.encParam("name=장기영&sex=남");
     * //"name=%EC%9E%A5%EA%B8%B0%EC%98%81&sex=%EB%82%A8"
     * ```
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
    readyMobileConsole: function () {
        AXUtil.mobileConsole = axdom("<div class=\"AXMobileConsole\"></div>");
        axdom(document.body).append(AXUtil.mobileConsole);
    },
    parsingTable: function (elemObj, returnType) {
        var head = {}, body = [];
        elemObj.find("thead tr td").each(function () {
            var elem = axdom(this);
            var attrs = {
                key: elem.attr("name"),
                label: (elem.html() || ""),
                width: (elem.attr("width") || "*"),
                align: (elem.attr("align") || "")
            };
            head[attrs.key] = attrs;
        });

        elemObj.find("tbody tr").each(function () {
            var item = {};
            axdom(this).find("td").each(function () {
                var elem = axdom(this);
                item[elem.attr("name")] = elem.html();
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
     * ```js
     * console.log(axf.get_event_target(e.target, {tagname:"a", clazz:"findclass", etc:"attribute"}));
     * ```
     */
    get_event_target: function (target, cond) {
        var _target = target;
        if (_target) {
            while ((function () {
                var result = true;
                if (Object.isFunction(cond)) {
                    result = cond(_target);
                }
                else if (Object.isObject(cond)) {
                    for (var k in cond) {
                        if (k === "tagname") {
                            if (_target.tagName.lcase() != cond[k]) {
                                result = false;
                                break;
                            }
                        }
                        else if (k === "clazz") {
                            var klasss = _target.className.split(/ /g);
                            var hasClass = false;
                            for (var a = 0; a < klasss.length; a++) {
                                if (klasss[a] == cond[k]) {
                                    hasClass = true;
                                    break;
                                }
                            }
                            result = hasClass;
                        }
                        else { // 그외 속성값들.
                            if (_target.getAttribute) {
                                if (_target.getAttribute(k) != cond[k]) {
                                    result = false;
                                    break;
                                }
                            }
                            else {
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
                }
                else {
                    _target = false;
                    break;
                }
            }
        }
        return _target;
    }
};
var axdom;
if (window.jQuery) axdom = jQuery;
if (window.axdomConverter) axdom = axdomConverter;

// extend implement block

/**
 * AXISJ Class 지원 오브젝트
 * @namespace {Object} Class
 */
var Class = (function () {
    function subclass() {
    }

    /**
     * @method Class.create
     * @param {Object} [superClass] - 부모 클래스 오브젝트
     * @param {Object} Class Body
     * @description 클래스를 만들어 줍니다.
     * @example
     * ```js
     * var AXJ = Class.create({
 *	initialize: function () {
 *		this.config = {
 *			debugMode: false,
 *			hashSpliter: "_",
 *			href: "href=\"javascript:;\""
 *		};
 *	},
 *	init: function () {
 *		trace(Object.toJSON(this.config));
 *	}
 * });
     * ```
     */
    function create() {
        var parent = null, properties = AX_A(arguments);
        if (Object.isFunction(properties[0])) parent = properties.shift();
        function klass() {
            this.initialize.apply(this, arguments);
        }

        Object.extend(klass, Class.Methods);
        klass.superclass = parent;
        klass.subclasses = [];
        if (parent) {
            subclass.prototype = parent.prototype;
            klass.prototype = new subclass;
            parent.subclasses.push(klass);
        }
        for (var i = 0; i < properties.length; i++) klass.addMethods(properties[i]);
        if (!klass.prototype.initialize) klass.prototype.initialize = Prototype.emptyFunction;
        klass.prototype.constructor = klass;
        return klass;
    }

    function addMethods(source) {
        var ancestor = this.superclass && this.superclass.prototype;
        var properties = Object.keys(source);
        if (!Object.keys({toString: true}).length) {
            if (source.toString != Object.prototype.toString) properties.push("toString");
            if (source.valueOf != Object.prototype.valueOf) properties.push("valueOf");
        }
        for (var i = 0, length = properties.length; i < length; i++) {
            var property = properties[i], value = source[property];
            if (ancestor && Object.isFunction(value) && value.argumentNames().first() == "AXJ_super") {
                var method = value;
                value = (function (m) {
                    return function () {
                        return ancestor[m].apply(this, arguments);
                    };
                })(property).wrap(method);
                value.valueOf = method.valueOf.bind(method);
                value.toString = method.toString.bind(method);
            }
            this.prototype[property] = value;
        }
        return this;
    }

    return {create: create, Methods: {addMethods: addMethods}};
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
     * ```js
     * Object.extend({a:1}, {a:2});
     * // Object {a: 1}
     * Object.extend({a:1}, {b:2});
     * // Object {a: 1, b: 2}
     * Object.extend({a:1}, {a:2}, true);
     * // Object {a: 2}
     * ```
     */
    function extend() {
        var target = arguments[0] || {}, items = arguments[1], overwrite = arguments[2] || false;
        if (typeof target !== "object" && typeof target !== "function") {
            target = {};
        }
        if (typeof items === "string") {
            target = items;
        }
        else {
            if (overwrite === true) {
                for (var k in items) target[k] = items[k];
            }
            else if (overwrite === false) {
                for (var k in items) {
                    if (typeof target[k] === "undefined") target[k] = items[k];
                }
            }
        }
        return target;
    }

    function inspect(obj) {
        try {
            if (isUndefined(obj)) return 'undefined';
            if (obj === null) return 'null';
            return obj.inspect ? obj.inspect() : String(obj);
        } catch (e) {
            if (e instanceof RangeError) return '...';
            throw e;
        }
    }

    /**
     * @method Object.toJSON
     * @param {Object} object
     * @param {Boolean} [qoute=true] - 따옴표 표시 여부
     * @returns {String} JSON String
     * @description Object JSON String 으로 반환합니다. Function은 제외합니다.
     * @example
     * ```js
     * Object.toJSON({a:1, b:2});
     * // "{"a":1, "b":2}"
     * Object.toJSON({a:1, b:2}, false);
     * // "{a:1, b:2}"
     * ```
     */

    var toJSON = (function () {
        var r = /["]/g, f;
        return f = function (vContent, isqoute) {
            var result, i, j;
            switch (result = typeof vContent) {
                case'string':
                    return '"' + vContent.replace(r, '\\"') + '"';
                case'number':
                    return vContent;
                case'boolean':
                    return vContent.toString();
                case'undefined':
                    return 'undefined';
                case'function':
                    return '""';
                case'object':
                    if (_toString.call(vContent) == "[object Number]") {
                        return vContent;
                    }
                    if (_toString.call(vContent) == "[object String]") {
                        return '"' + vContent.replace(r, '\\"') + '"';
                    }
                    if (!vContent) return 'null';
                    result = '';
                    if (vContent.splice) {
                        for (i = 0, j = vContent.length; i < j; i++) result += ',' + f(vContent[i]);
                        return '[' + result.substr(1) + ']';
                    }
                    else {
                        for (i in vContent) if (vContent.hasOwnProperty(i) && vContent[i] !== undefined && typeof vContent[i] != 'function') result += ',"' + i + '":' + f(vContent[i]);
                        return '{' + result.substr(1) + '}';
                    }
            }
        };
    })();

    /*
     function toJSON(vContent, qoute) {
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
     */

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
            case 'undefined':
                return "undefined";
            case 'function':
                try {
                    return toJSONfn(object(), isqoute);
                } catch (e) {
                    return;
                }
            case 'unknown':
                return "unknown";
            case 'boolean':
                return object.toString();
            case 'number':
                return object.toString();
            case 'string':
                return object.axtoJSON(true);
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
            case 'function':
                return;
            case 'unknown':
                return;
            case 'boolean':
                return "\"" + object.toString() + "\"";
            case 'number':
                return "\"" + object.toString() + "\"";
            case 'string':
                return object.axtoJSON(true);
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
    function keys(obj) {
        var results = [];
        for (var property in obj) results.push(property);
        return results;
    }

    /**
     * 오브젝트의 value를 배열로 반환합니다.
     * @method Object.values
     * @param {Object} object
     * @returns {Array}
     */
    function values(obj) {
        var results = [];
        for (var property in obj) results.push(obj[property]);
        return results;
    }

    /**
     * 오브젝트의 새로운 참조를 생성합니다.
     * @method Object.clone
     * @param {Object} object
     * @returns {Object}
     */
    function clone(obj) {
        return extend({}, obj);
    }

    /**
     * 오브젝트가 HTML 엘리먼트여부인지 판단합니다.
     * @method Object.isElement
     * @param {Object} object
     * @returns {Boolean}
     */
    function isElement(obj) {
        return !!(obj && obj.nodeType == 1);
    }

    /**
     * 오브젝트가 Object인지 판단합니다.
     * @method Object.isObject
     * @param {Object} object
     * @returns {Boolean}
     */
    function isObject(obj) {
        return _toString.call(obj) == "[object Object]";
    }

    /**
     * 오브젝트가 Array인지 판단합니다.
     * @method Object.isArray
     * @param {Object} object
     * @returns {Boolean}
     */
    function isArray(obj) {
        return _toString.call(obj) == "[object Array]";
    }

    /**
     * 오브젝트가 Hash인지 판단합니다.
     * @method Object.isHash
     * @param {Object} object
     * @returns {Boolean}
     */
    function isHash(obj) {
        return obj instanceof Hash;
    }

    /**
     * 오브젝트가 Function인지 판단합니다.
     * @method Object.isFunction
     * @param {Object} object
     * @returns {Boolean}
     */
    function isFunction(obj) {
        return typeof obj === "function";
    }

    /**
     * 오브젝트가 String인지 판단합니다.
     * @method Object.isString
     * @param {Object} object
     * @returns {Boolean}
     */
    function isString(obj) {
        return _toString.call(obj) == "[object String]";
    }

    /**
     * 오브젝트가 Number인지 판단합니다.
     * @method Object.isNumber
     * @param {Object} object
     * @returns {Boolean}
     */
    function isNumber(obj) {
        return _toString.call(obj) == "[object Number]";
    }

    /**
     * 오브젝트가 undefined인지 판단합니다.
     * @method Object.isUndefined
     * @param {Object} object
     * @returns {Boolean}
     */
    function isUndefined(obj) {
        return typeof obj === "undefined";
    }

    extend(Object, {
        extend: extend,
        inspect: inspect,
        toJSON: toJSON,
        toJSONfn: toJSONfn,
        toJSONforMobile: toJSONforMobile,
        keys: keys,
        values: values,
        clone: clone,
        isElement: isElement,
        isObject: isObject,
        isArray: isArray,
        isHash: isHash,
        isFunction: isFunction,
        isString: isString,
        isNumber: isNumber,
        isUndefined: isUndefined
    });
})();

/**
 * Function.prototype
 * @namespace {Function} Function
 */
Object.extend(Function.prototype, (function () {
    var slice = Array.prototype.slice;

    function update(array, args) {
        var arrayLength = array.length, length = args.length;
        while (length--) array[arrayLength + length] = args[length];
        return array;
    }

    function merge(array, args) {
        array = slice.call(array, 0);
        return update(array, args);
    }

    /**
     * @method Function.argumentNames
     * @returns {Array} arguments
     * @description 함수의 아규먼트를 배열로 반환합니다.
     * @example
     * ```js
     * var myFn = function(a, b, c){
	 *     return a;
	 * };
     *
     * trace(myFn.argumentNames());
     * //  ["a", "b", "c"]
     * // prototypejs 를 참조하여 제작되었습니다.
     * ```
     */
    function argumentNames() {
        var names = this.toString().match(/^[\s\(]*function[^(]*\(([^)]*)\)/)[1].replace(/\/\/.*?[\r\n]|\/\*(?:.|[\r\n])*?\*\//g, '').replace(/\s+/g, '').split(',');
        return names.length == 1 && !names[0] ? [] : names;
    }

    /**
     * @method Function.bind
     * @param {Object} bindTarget
     * @param {Object} [Argument]
     * @description 함수의 위치를 bind 대상에 연결하여 줍니다.
     * @example
     * ```js
     * var AlertClass = Class.create({
	 *     initialize: function(msg) {
	 *        this.msg = msg;
	 *    },
	 *    handleClick: function(event) {
	 *        alert(this.msg);
	 *    }
	 * });
     * var myalert = new AlertClass("AXJ Clicked");
     *
     * $("#link1").click(myalert.handleClick);
     * //undefined
     * $("#link2").click(myalert.handleClick.bind(myalert));
     * //AXJ Clicked
     *
     * // ---------------------
     * var AlertClass = Class.create({
	 *    initialize: function(msg) {
	 *        this.msg = msg;
	 *    },
	 *    handleClick: function(a, b, c, event) {
	 *        trace({a:a, b:b, c:c, event:event.type});
	 *        // {"a":"A", "b":"X", "c":"J", "event":"click"}
	 *        alert(this.msg);
	 *    }
	 * });
     * var myalert = new AlertClass("AXJ Clicked");
     *
     * $("#link1").click(myalert.handleClick);
     * $("#link2").click(myalert.handleClick.bind(myalert, "A", "X", "J"));
     * ```
     */
    function bind(context) {
        if (arguments.length < 2 && Object.isUndefined(arguments[0])) return this;
        var __method = this, args = slice.call(arguments, 1);
        return function () {
            var a = merge(args, arguments);
            return __method.apply(context, a);
        }
    }

    function curry() {
        if (!arguments.length) return this;
        var __method = this, args = slice.call(arguments, 0);
        return function () {
            var a = merge(args, arguments);
            return __method.apply(this, a);
        }
    }

    /**
     * @method Function.delay
     * @param {Number} timeout - second
     * @description 함수의 실행을 지정된 시간 후에 실행되게 합니다.
     * @example
     * ```js
     * var showMsg = function(a, b){
	 *     alert(a+"/"+b);
	 * };
     * showMsg.delay(2, "AX", "ISJ");
     * // 2초 후에 alert 구문이 실행됩니다.
     * // 내부네서 this.apply 를 호출합니다. 간단한 함수 호출에는 사용을 권장하지만 복잡한 형태의 함수 구현에는 권장하지 않습니다.
     * ```
     */
    function delay(timeout) {
        var __method = this, args = slice.call(arguments, 1);
        timeout = timeout * 1000;
        return window.setTimeout(function () {
            return __method.apply(__method, args);
        }, timeout);
    }

    function defer() {
        var args = update([0.01], arguments);
        return this.delay.apply(this, args);
    }

    function wrap(wrapper) {
        var __method = this;
        return function () {
            var a = update([__method.bind(this)], arguments);
            return wrapper.apply(this, a);
        }
    }

    function methodize() {
        if (this._methodized) return this._methodized;
        var __method = this;
        return this._methodized = function () {
            var a = update([this], arguments);
            return __method.apply(null, a);
        };
    }

    function addPrototype(fns) {
        var name, i = 0, length = fns.length, isObj = length === undefined || Object.isFunction(fns);
        if (isObj) {
            for (name in fns) {
                this.prototype[name] = fns[name];
            }
        }
    }

    return {argumentNames: argumentNames, bind: bind, curry: curry, delay: delay, defer: defer, wrap: wrap, methodize: methodize, addPrototype: addPrototype}
})());

/**
 * String.prototype
 * @namespace {String} String
 */
Object.extend(String.prototype, (function () {
    function password() {
        return Math.tan(45).toString().substr(7)
    }

    /**
     * 문자열 시작부터 지정한 글자수 만큼 반환합니다.
     * @method String.left
     * @param {Number} strLen
     * @returns {String}
     * @example
     * ```js
     * "AXJ_String".left(3); -> "AXJ"
     * toast.push('left(3) : ' + "AXJ_String".left(3));
     * ```
     */
    function left(strLen) {
        return this.toString().substr(0, strLen);
    }

    /**
     * 문자열 끝부터 지정한 글자수 만큼 반환합니다.
     * @method String.right
     * @param {Number} strLen
     * @returns {String}
     * @example
     * ```js
     * "AXJ_String".right(3); -> "ing"
     * toast.push('right(3) : '+$('#AXJrightTest').val().left(3));
     * ```
     */
    function right(strLen) {
        return this.substring(this.length - strLen, this.length);
    }

    /**
     * URLencode된 문자열을 디코드 합니다.
     * @method String.dec
     * @returns {String}
     * @example
     * ```js
     * "AXJ_String%2C%EC%97%91%EC%8B%9C%EC%8A%A4%EC%A0%9C%EC%9D%B4".dec(); -> "AXJ_String,엑시스제이"
     * ```
     */
    function dec() {
        try {
            return decodeURIComponent(this);
        }
        catch (e) {
            return unescape(this);
        }
    }

    /**
     * URLencode된 문자열로 인코드 합니다.
     * @method String.enc
     * @returns {String}
     * @example
     * ```js
     * "AXJ_String,엑시스제이".enc(); -> "AXJ_String%2C%EC%97%91%EC%8B%9C%EC%8A%A4%EC%A0%9C%EC%9D%B4"
     * ```
     */
    function enc() {
        return (this) ? encodeURIComponent(this).replace(/[!'()*]/g, function (c) {
            return '%' + c.charCodeAt(0).toString(16);
        }) : this;
    }

    /**
     * JSONString이면 Object로 변환합니다.
     * @method String.object
     * @returns {Object}
     * @example
     * ```js
     * var myObj = "{a:1, b:2, name:'AXJ'}".object();
     * trace(myObj);
     * // {"a":1, "b":2, "name":"AXJ"}
     *
     * var myObjError = "{1, b:2, name:'AXJ'}".object();
     * trace(myObjError);
     * // {"error":"syntaxerr", "result":"syntaxerr", "msg":"JSON syntax error.{1, b:2, name:'AXJ'}", "body":"{1, b:2, name:'AXJ'}"}
     * ```
     */
    function object() {
        try {
            var res = this.evalJSON();
        } catch (e) {
            res = {error: "syntaxerr", result: "syntaxerr", msg: "to object error, " + e.print() + ", " + this};
            try {
                mask.close();
            } catch (e) {
            }
        }
        return res;
    }

    /**
     * 콤마가 포함된 문자열을 Array로 변환합니다.
     * @method String.array
     * @returns {Array}
     * @example
     * ```js
     * var myObj = "a,b,c".array();
     * trace(myObj);
     * // ["a", "b", "c"]
     * ```
     */
    function array() {
        try {
            var res = this.split(/,/g);
        } catch (e) {
            res = {error: "syntaxerr", result: "syntaxerr", msg: "to object error, " + e.print() + ", " + this};
        }
        return res;
    }

    /**
     * 문자열을 date 형식에 맞추어 날짜 포멧으로 리턴합니다.
     * @method String.date
     * @param {String} [separator=-] 날짜구분자
     * @returns {Date}
     * @example
     * ```js
     * trace("20121119".date());
     * // "2012-11-19T03:00:00Z"
     *
     * trace("2012-11-19".date());
     * // "2012-11-19T03:00:00Z"
     *
     * trace("2012/11/19".date("/"));
     * // "2012-11-19T03:00:00Z"
     * ```
     */
    function toDate(separator, defaultDate) {
        function local_date(yy, mm, dd, hh, mi, ss) {
            var utc_d, local_d;
            local_d = new Date();
            if (typeof hh === "undefined") hh = 11;
            if (typeof mi === "undefined") mi = 59;
            utc_d = new Date(Date.UTC(yy, mm, dd || 1, hh, mi, ss || 0));

            if (mm == 0 && dd == 1 && utc_d.getUTCHours() + (utc_d.getTimezoneOffset() / 60) < 0) {
                utc_d.setUTCHours(0);
            }
            else {
                utc_d.setUTCHours(utc_d.getUTCHours() + (utc_d.getTimezoneOffset() / 60));
            }
            return utc_d;
        }

        if (this.length == 0) {
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
            aTime = aDateTime[1] || "11:59";
            aTimes = aTime.left(5).split(":");
            hh = parseFloat(aTimes[0]);
            mi = parseFloat(aTimes[1]);
            if (aTime.right(2) === "AM" || aTime.right(2) === "PM") hh += 12;
            return local_date(yy, mm - 1, dd, hh, mi);
        }
        else if (this.length == 14) {
            var va = this.replace(/\D/g, "");
            return local_date(va.substr(0, 4), va.substr(4, 2).number() - 1, va.substr(6, 2).number(), va.substr(8, 2).number(), va.substr(10, 2).number(), va.substr(12, 2).number());
        }
        else if (this.length > 7) {
            var va = this.replace(/\D/g, "");
            return local_date(va.substr(0, 4), va.substr(4, 2).number() - 1, va.substr(6, 2).number());
        }
        else if (this.length > 4) {
            var va = this.replace(/\D/g, "");
            return local_date(va.substr(0, 4), va.substr(4, 2).number() - 1, 1);
        }
        else if (this.length > 2) {
            var va = this.replace(/\D/g, "");
            return local_date(va.substr(0, 4), va.substr(4, 2).number() - 1, 1);
        }
        else {
            return defaultDate || new Date();
        }
    }

    /**
     * 문자열을 Number로 변환해 줍니다.
     * @method String.number
     * @returns {Number}
     * @example
     * ```js
     * var str = "1234";
     * trace(typeof str);
     * // string
     *
     * str = str.number();
     * trace(typeof str);
     * // number
     *
     * "1,234".number(); -> 1234
     * "1,234.1".number(); -> 1234.1
     * ```
     */
    function toNum() {
        var pair = this.replace(/,/g, "").split(".");
        var isMinus = false;
        if (parseFloat(pair[0]) < 0) isMinus = true;
        if (pair[0] == "-0") isMinus = true;
        var returnValue = 0.0;
        pair[0] = pair[0].replace(/[-|+]?[\D]/gi, "");
        if (pair[1]) {
            pair[1] = pair[1].replace(/\D/gi, "");
            returnValue = parseFloat(pair[0] + "." + pair[1]) || 0;
        }
        else {
            returnValue = parseFloat(pair[0]) || 0;
        }
        return (isMinus) ? -returnValue : returnValue;
    }

    function parseF() {
        return parseFloat(this);
    }

    /**
     * 문자열의 앞뒤 공백을 제거하여 줍니다.
     * @method String.trim
     * @returns {String}
     * @example
     * ```js
     * " AXJ ".trim(); ->  "AXJ"
     * ```
     */
    function strip() {
        return this.replace(/^\s+/, '').replace(/\s+$/, '');
    }

    /**
     * 문자열에서 HTML 태그를 제거하여 반환합니다.
     * @method String.delHtml
     * @returns {String}
     * @example
     * ```js
     * "<div>AXJ</div>".delHtml(); ->  "AXJ"
     * ```
     */
    function stripTags() {
        return this.replace(/<\w+(\s+("[^"]*"|'[^']*'|[^>])+)?>|<\/\w+>/gi, '');
    }

    /**
     * 문자열에서 Script 태그를 제거하여 반환합니다.
     * @method String.delScript
     * @returns {String}
     * @example
     * ```js
     * "<script src="scriptname"></script>AXJ".delScript(); ->  "AXJ"
     * ```
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
     * ```js
     * "AXJ".times(3); ->  "AXJAXJAXJ"
     * ```
     */
    function times(count) {
        return count < 1 ? '' : new Array(count + 1).join(this);
    }

    function inspect(useDoubleQuotes) {
        var escapedString = this.replace(
            /[\x00-\x1f\\]/g,
            function (character) {
                try {
                    if (character in String.specialChar) return String.specialChar[character];
                } catch (e) {
                }
                if (character.charCodeAt() == 13) return "\\r";
                if (character.charCodeAt() == 10) return "\\n";
                return '\\u00' + character.charCodeAt()
            }
        );
        if (useDoubleQuotes) return '"' + escapedString.replace(/"/g, '\\"') + '"';
        return "" + escapedString.replace(/'/g, '\\\'') + "";
    }

    function axtoJSON(TF) {
        return this.inspect(TF || false);
    }

    function blank() {
        return /^\s*$/.test(this);
    }

    function isJSON() {
        var str = this;
        if (str.isBlank()) return false;
        str = this.replace(/\\./g, '@').replace(/"[^"\\\n\r]*"/g, '');
        return (/^[,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]*$/).test(str);
    } //"
    function unfilterJSON(filter) {
        return this.replace(filter || AXUtil.JSONFilter, '$1');
    }

    function evalJSON(sanitize) {
        var json = this.unfilterJSON();
        try {
            var _evl = eval;
            if (!sanitize || json.isJSON()) return _evl("(" + json + ")");
            else return {error: "syntaxerr", result: "syntaxerr", msg: "JSON syntax error. fail to convert Object\n" + this};
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
     * ```js
     * var myObject = "a=1&b=1".queryToObject();
     * trace(myObject);
     * // {"a":"1", "b":"1"}
     * ```
     */
    function queryToObject(separator) {
        var match = this.trim().match(/([^?#]*)(#.*)?$/);
        if (!match) return {};
        var rs = match[1].split(separator || '&');
        var returnObj = {};
        var i = 0;
        while (i < rs.length) {
            var pair = rs[i].split("=");
            var k = pair[0], v = pair[1];
            if (returnObj[k] != undefined) {
                if (!Object.isArray(returnObj[k])) returnObj[k] = [returnObj[k]];
                returnObj[k].push(v);
            }
            else {
                returnObj[k] = v;
            }
            i++;
        }
        return returnObj;
    }

    /**
     * queryString 형식의 문자열을 json object로 변환하여 줍니다. (파라미터 값은 URLDecode 합니다.)
     * @method String.queryToObjectDec
     * @param {String} [separator=&]
     * @returns {Object}
     * @example
     * ```js
     * var myObject = "a=1&b=1".queryToObject();
     * trace(myObject);
     * // {"a":"1", "b":"1"}
     * ```
     */
    function queryToObjectDec(separator) {
        var match = this.trim().match(/([^?#]*)(#.*)?$/);
        if (!match) return {};
        var rs = match[1].split(separator || '&');
        var returnObj = {};
        var i = 0;
        while (i < rs.length) {
            var pair = rs[i].split("=");
            var k = pair[0], v = pair[1];
            if (returnObj[k] != undefined) {
                if (!Object.isArray(returnObj[k])) returnObj[k] = [returnObj[k]];
                returnObj[k].push(v.dec());
            }
            else {
                returnObj[k] = v.dec();
            }
            i++;
        }
        return returnObj;
    }

    /**
     * 줄넘김 문자열 '\n'을 &gt;br/> 태그로 변환하여 줍니다.
     * @method String.crlf
     * @param {Regexp} [replaceTarget=/\n/g]
     * @param {String} [replacer=&gt;br/>]
     * @returns {String}
     * @example
     * ```js
     * "123
     * 123".crlf(); ->  "123<br/>123"
     * ```
     */
    function crlf(replaceTarget, replacer) {
        return this.replace((replaceTarget || /\n/g), (replacer || "<br/>"));
    }

    /**
     * 줄넘김 문자열 '%0A'을 &gt;br/> 태그로 변환하여 줍니다.
     * @method String.ecrlf
     * @param {Regexp} [replaceTarget=/%0A/g]
     * @param {String} [replacer=&gt;br/>]
     * @returns {String}
     * @example
     * ```js
     * "123%0A123".crlf(); ->  "123<br/>123"
     * ```
     */
    function ecrlf(replaceTarget, replacer) {
        return this.replace((replaceTarget || /%0A/g), (replacer || "<br/>"));
    }

    /**
     * 문자열 자리수를 맞추어 줍니다.
     * @method String.setDigit
     * @param {Number} length
     * @param {String} [padder=0]
     * @returns {String}
     * @example
     * ```js
     * "A".setDigit(3); ->  "00A"
     * "A".setDigit(3, '!'); ->  "!!A"
     * ```
     */
    function formatDigit(length, padder) {
        var string = this;
        return (padder || '0').times(length - string.length) + string;
    }

    /**
     * 파일경로에서 파일명을 반환합니다.
     * @method String.getFileName
     * @returns {String}
     * @example
     * ```js
     *"C://Works/AXISJ_project/css/myfile.zip".getFileName(); ->  "myfile.zip"
     * ```
     */
    function getFileName() {
        var sToMatch = this;
        var reAt = /[\/\\]?([^\/\\]?\.?[^\/\\]+)$/;
        var reArr = sToMatch.match(reAt);
        return RegExp.$1;
    }

    /**
     * Mozila 브라우저 등에서 사용하는 색상정보 값을 표준색상코드로 변환합니다. 표준색상코드를 입력하여도 표준색상코드 값을 얻을 수 있습니다.
     * @method String.toColor
     * @param {String} [prefix]
     * @returns {String}
     * @example
     * ```js
     * "rgb(243, 243, 243)".toColor(); ->  "f3f3f3"
     * "rgb(243, 243, 243)".toColor('#'); ->  "#f3f3f3"
     * "#f3f3f3".toColor(); ->  "f3f3f3"
     * "f3f3f3".toColor(); ->  "f3f3f3"
     * "f3f3f3".toColor('#'); ->  "#f3f3f3"
     * ```
     */
    function toColor(sharp) {
        var colorValue = "";
        if (this.left(3) == "rgb") {
            var val = this;
            var reAt = /rgb\((.+)\)/;
            val.match(reAt);
            var vals = RegExp.$1.split(", ");
            for (var a = 0; a < vals.length; a++) {
                vals[a] = vals[a].number().setDigit(2, '0', 16);
            }
            colorValue = vals.join("");
        }
        else {
            colorValue = this.replace("#", "");
        }
        var preFix = (sharp) ? "#" : "";
        return preFix + colorValue;
    }

    /**
     * 숫자형 문자열에 콤마를 삽입하여 통화단위로 반환합니다.
     * @method String.money
     * @returns {String}
     * @example
     * ```js
     * "1000000".money()
     * // "1,000,000"
     * ```
     */
    function toMoney() {
        return this.number().money();
    }

    function toByte() {
        return this.number().byte();
    }

    /**
     * 문자열을 소문자로 반환합니다.
     * @method String.lcase
     * @returns {String}
     * @example
     * ```js
     * "AXISJ".lcase() -> "axisj"
     * ```
     */
    function lcase() {
        return this.toLowerCase();
    }

    /**
     * 문자열을 대문자로 반환합니다.
     * @method String.ucase
     * @returns {String}
     * @example
     * ```
     * "axisj".ucase() -> "AXISJ"
     * ```
     */
    function ucase() {
        return this.toUpperCase();
    }

    /**
     * 문자열의 바이트 값을 계산하여 줍니다.
     * @method String.getByte
     * @returns {Number}
     * @example
     * ```
     * trace("장".getByte());
     * // 2
     * trace("a".getByte());
     * // 1
     * ```
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
     * ```js
     * trace("장".phone());
     * // 02
     * trace("a".phone());
     * // 02
     * trace("88819123".phone());
     * // 02-8881-9123
     * trace("01088819123".phone());
     * // 010-8881-9137
     * ```
     */
    function toPhoneString() {
        if (this == "") return this;
        var _this = this.replace(/\D+/g, "");
        var myLocalNums = "";
        var num1 = "", num2 = "";
        var localNum = "031/032/033/041/042/043/051/052/053/054/055/061/062/063/064/010/011/016/017/019/070/080/060";
        if (_this.left(2) == "02") {
            myLocalNums = "02";
        }
        else {
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
            }
            else {
                num1 = _this.substr(0, 3);
                num2 = _this.substr(3);
            }
        }
        else {
            try {
                var snum = myLocalNums.length;
                if ((_this.length - snum) > 7) {
                    num1 = _this.substr(snum, 4);
                    num2 = _this.substr(snum + 4);
                }
                else {
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
     * ```js
     * "http://jdoc.axisj.com/#{id:\"/API/Prototype/String/phone\"}".getAnchorData();
     * "{id:"/API/Prototype/String/phone"}"
     * ```
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
     * ```js
     * (1234).left(3); -> "123"
     * ```
     */
    function left(strLen) {
        return this.toString().substr(0, strLen);
    }

    /**
     * 숫자를 문자열로 변환하고 마지막부터 지정한 글자수 만큼 반환합니다.
     * @method Number.right
     * @param {Number} strLen
     * @returns {String}
     * @example
     * ```js
     * 1234.right(3); -> 234
     * ```
     */
    function right(strLen) {
        return this.toString().substring(this.toString().length - strLen, this.toString().length);
    }

    /**
     * 통화표현 단위로 변환된 문자열을 반환합니다.
     * @method Number.money
     * @returns {String}
     * @example
     * ```js
     * trace((1234.9).money());
     * //1,234.9
     * trace((1234.1).money());
     * //1,234.1
     * trace((-1234.9).money());
     * //-1,234.9
     * trace((-1234.1).money());
     * //-1,234.1
     *
     * (12345678).money(); -> "12,345,678"
     * "12345678".money(); -> "12,345,678"
     * // String 에서도 money 메소드를 직접 사용 할 수 있습니다.
     * ```
     */
    function toMoney() {
        var txtNumber = '' + this;
        if (isNaN(txtNumber) || txtNumber == "") {
            return "";
        }
        else {
            var rxSplit = new RegExp('([0-9])([0-9][0-9][0-9][,.])');
            var arrNumber = txtNumber.split('.');
            arrNumber[0] += '.';
            do {
                arrNumber[0] = arrNumber[0].replace(rxSplit, '$1,$2');
            } while (rxSplit.test(arrNumber[0]));
            if (arrNumber.length > 1) {
                return arrNumber.join('');
            }
            else {
                return arrNumber[0].split('.')[0];
            }
        }
    }

    /**
     * 숫자값을 Byte로 인식하여 값에 크기에 따르 KB, MB, GB 의 형식으로 반환합니다.
     * @method Number.byte
     * @returns {String}
     * @example
     * ```js
     * trace((1234567890).byte());
     * // 1.1GB
     * trace((12345678).byte());
     * // 11.8MB
     * trace((123456).byte());
     * // 120.6KB
     * trace((123).byte());
     * // 0.1KB
     * ```
     */
    function toByte() {
        var n_unit = "KB";
        var myByte = this / 1024;
        if (myByte / 1024 > 1) {
            n_unit = "MB";
            myByte = myByte / 1024;
        }
        if (myByte / 1024 > 1) {
            n_unit = "GB";
            myByte = myByte / 1024;
        }
        return myByte.round(1) + n_unit;
    }

    /**
     * 자신을 반환합니다.
     * @method Number.number
     * @returns {Number}
     */
    function toNum() {
        return this;
    }

    /**
     * 원하는 횟수 만큼 자릿수 맞춤 문자열을 포함한 문자열을 반환합니다.
     * @method Number.setDigit
     * @param {Number} length - 자릿수
     * @param {String} padder - 자릿수 맞춤 문자열
     * @param {Number} radix - 진수
     * @returns {String}
     * @example
     * ```js
     * trace( (11).setDigit(3) );
     * //011
     * trace( (11).setDigit(3, '!') );
     * //!11
     * trace( (11).setDigit(3, 0, 16) );
     * //00b
     * trace( (25).setDigit(5, "X", 8) );
     * //XXX31
     * ```
     */
    function formatDigit(length, padder, radix) {
        var string = this.toString(radix || 10);
        return (padder || '0').times(length - string.length) + string;
    }

    /**
     * 인자값부터 원본까지 정수 단위로 이어진 배열을 리턴합니다.
     * @method Number.rangeFrom
     * @param {Number} start - 배열시작위치
     * @returns {Array}
     * @example
     * ```js
     * (3).rangeFrom(0);
     * [0, 1, 2, 3]
     * ```
     */
    function range(start) {
        var ra = [];
        for (var a = (start || 0); a < this + 1; a++) ra.push(a);
        return ra;
    }

    function axtoJSON() {
        return this;
    }

    /**
     * 절대값을 반환합니다.
     * @method Number.abs
     * @returns {Number}
     * @example
     * ```js
     * trace((1234).abs());
     * // 1234
     * trace((-1234).abs());
     * // 1234
     * trace((1234.123).abs());
     * // 1234.123
     * trace((-1234.123).abs());
     * // 1234.123
     * ```
     */
    function abs() {
        return Math.abs(this);
    }

    /**
     * 반올림 위치에서부터 반올림 한 값을 반환합니다.
     * @method Number.round
     * @param {Number} digit
     * @returns {Number}
     * @example
     * ```js
     * trace((1234.5678).round());
     * //1235
     * trace((1234.5678).round(1));
     * //1234.6
     * trace((1234.5678).round(2));
     * //1234.57
     * ```
     */
    function round(digit) {
        return (typeof digit == "undefined") ? Math.round(this) :
            (this.toString().search('e-')) ? this.toFixed(digit) : +(Math.round(this + "e+" + digit) + "e-" + digit);
    }

    /**
     * Math.ceil
     * @method Number.ceil
     * @returns {Number}
     */
    function ceil() {
        return Math.ceil(this);
    }

    /**
     * Math.floor
     * @method Number.floor
     * @returns {Number}
     */
    function floor() {
        return Math.floor(this);
    }

    /**
     * 숫자를 time값으로 이용하여 Date를 반환합니다.
     * @method Number.date
     * @returns {Date}
     * @example
     * ```js
     * var ndate = new Date();
     * ndate.getTime();
     * // 1417253161813
     * (1417253161813).date();
     * // Sat Nov 29 2014 18:26:01 GMT+0900 (KST)
     * ```
     */
    function date() {
        return new Date(this);
    }

    /**
     * 나누기 연산 결과를 반환합니다. divisor 가 0인 경우 연산 결과는 오류 없이 0을 반환합니다.
     * @method Number.div
     * @param {Number} divisor - 나눔수
     * @returns {Number}
     * @example
     * ```js
     * trace( (10).div(2); );
     * // 5
     * trace( (10).div(0); );
     * // 0
     * ```
     */
    function div(divisor) {
        if (divisor != 0) {
            return this / divisor;
        }
        else {
            return 0;
        }
    }

    function none() {
        return this;
    }

    function times(count) {
        return count < 1 ? '' : new Array(count + 1).join(this.toString());
    }

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
     * ```js
     * var myDate = new Date();
     * trace(myDate.add(1));
     * // 내일값이 나옵니다.
     *
     * trace("2013-05-05".date().add(3));
     * // "2013-05-08T03:00:00Z"
     * trace("2013-05-05".date().add(2, 'm'));
     * //  "2013-07-05T03:00:00Z"
     * trace("2013-05-05".date().add(2, 'y'));
     * //  "2015-05-05T03:00:00Z"
     * ```
     */
    function dateAdd(daynum, interval) {
        interval = interval || "d";
        var interval = interval.toLowerCase();
        var DyMilli = ((1000 * 60) * 60) * 24;
        var aDate = new Date(this.getFullYear(), this.getMonth(), this.getDate(), 12);

        if (interval == "d") {
            //trace(aDate.getTime(), (daynum) , (DyMilli));
            aDate.setTime(aDate.getTime() + (daynum * DyMilli));
        }
        else if (interval == "m") {
            var yy = aDate.getFullYear();
            var mm = aDate.getMonth();
            var dd = aDate.getDate();
            /*if (mm == 0 && dd == 1) yy += 1;*/
            yy = yy + parseInt(daynum / 12);
            mm += daynum % 12;
            var mxdd = AXUtil.dayLen(yy, mm);
            if (mxdd < dd) dd = mxdd;
            aDate = new Date(yy, mm, dd, 12);
        }
        else if (interval == "y") {
            aDate.setTime(aDate.getTime() + ((daynum * 365) * DyMilli));
        }
        else {
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
     * ```js
     * trace( "2013-05-05".date().diff("2013-05-08") );
     * // 3
     * trace( "2013-05-05".date().diff("2013-05-08".date()) );
     * // 3
     * ```
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
            }
            else if (tp == "H") {
                DyMilli = ((1000 * 60) * 60);
            }
            else if (tp == "mm") {
                DyMilli = (1000 * 60);
            }
            else {
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
     * ```js
     * "2013-05-05".date().print(); -> "2013-05-05"
     * "2013-05-05".date().print('yyyy년 mm월 dd일'); -> "2013년 05월 05일"
     * "2013-05-05".date().print('yyyy년 mm월 dd일 (dw)'); -> "2013년 05월 05일 (일)"
     * ```
     */
    function toString(format) {
        if (format == undefined) {
            var sSeper = "-";
            return this.getFullYear() + sSeper + (this.getMonth() + 1).setDigit(2) + sSeper + this.getDate().setDigit(2);
        }
        else {
            var fStr = format;
            var nY, nM, nD, nH, nMM, nS, nDW;
            nY = this.getFullYear();
            nM = (this.getMonth() + 1).setDigit(2);
            nD = this.getDate().setDigit(2);
            nH = this.getHours().setDigit(2);
            nMM = this.getMinutes().setDigit(2);
            nS = this.getSeconds().setDigit(2);
            nDW = this.getDay();

            var yre = /[^y]*(yyyy)[^y]*/gi;
            yre.exec(fStr);
            var regY = RegExp.$1;
            var mre = /[^m]*(mm)[^m]*/gi;
            mre.exec(fStr);
            var regM = RegExp.$1;
            var dre = /[^d]*(dd)[^d]*/gi;
            dre.exec(fStr);
            var regD = RegExp.$1;
            var hre = /[^h]*(hh)[^h]*/gi;
            hre.exec(fStr);
            var regH = RegExp.$1;
            var mire = /[^m]*(mi)[^i]*/gi;
            mire.exec(fStr);
            var regMI = RegExp.$1;
            var sre = /[^s]*(ss)[^s]*/gi;
            sre.exec(fStr);
            var regS = RegExp.$1;
            var dwre = /[^d]*(dw)[^w]*/gi;
            dwre.exec(fStr);
            var regDW = RegExp.$1;

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
     * ```js
     * var pDate = new Date();
     * pDate.setTime(pDate.getTime()-1000*60);
     * trace( pDate.getTimeAgo() );
     * // 1분 전
     *
     * pDate.setTime(pDate.getTime()-1000*60*5);
     * trace( pDate.getTimeAgo() );
     * //  6분 전
     *
     * pDate.setTime(pDate.getTime()-1000*60*60);
     * trace( pDate.getTimeAgo() );
     * //  1시간 6분 전
     *
     * pDate.setTime(pDate.getTime()-1000*60*60*24);
     * trace( pDate.getTimeAgo() );
     * //  2013년 11월 19일 화
     * ```
     */
    function getTimeAgo() {

        var rtnStr = "";
        var nMinute = Math.abs((new Date()).diff(this, "mm"));

        var wknames = [];
        wknames.push("일", "월", "화", "수", "목", "금", "토");

        if (isNaN(nMinute)) {
            rtnStr = "알수없음";
        }
        else {
            if (parseInt(nMinute / 60 / 24) >= 1) {
                rtnStr = this.print("yyyy년 mm월 dd일") + " " + wknames[this.getDay()];
            }
            else {
                rtnStr = nMinute;

                if ((nMinute / 60) > 1) {
                    rtnStr = parseInt(nMinute / 60) + "시간 " + (nMinute % 60) + "분 전";
                }
                else {
                    rtnStr = nMinute + "분 전";
                }
            }
        }
        return rtnStr;
    }

    function date() {
        return this;
    }

    function axtoJSON() {
        return '"' + this.getUTCFullYear() + '-' + (this.getUTCMonth() + 1).setDigit(2) + '-' + this.getUTCDate().setDigit(2) + 'T' + this.getUTCHours().setDigit(2) + ':' + this.getUTCMinutes().setDigit(2) + ':' + this.getUTCSeconds().setDigit(2) + 'Z"';
    }

    /**
     * @method  Date.axGetDay
     * @param {Number} [dayOfStart=0]
     * @returns {Number}
     * @description 요일의 시작인덱스를 변경한 요일인덱스를 반환합니다.
     */
    function axGetDay(dayOfStart) {
        if (dayOfStart == undefined) dayOfStart = 0;
        var myDay = this.getDay() - dayOfStart;
        if (myDay < 0) myDay = 7 + myDay;
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
     * ```js
     * var a = [1,2,3];
     * trace(a);
     * // [1, 2, 3]
     * trace(a.clear());
     * // []
     * trace(a);
     * // []
     * ```
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
     * ```js
     * var a = [1,2,3];
     * trace(a.first());
     * // 1
     *
     * var b = [{a:"액시스제이"}, 2, 3];
     * trace(b.first());
     * // {"a":"액시스제이"}
     *
     * var c = [[1,2,3], 2, 3];
     * trace(c.first());
     * // [1, 2, 3]
     * ```
     */
    function first() {
        return this[0];
    }

    /**
     * @method Array.last
     * @returns {Object}
     * @description Array의 마지막 아이템을 반환합니다.
     * @example
     * ```js
     * var a = [1,2,3];
     * trace(a.last());
     * // 1
     *
     * var b = [1, 2, {a:"액시스제이"}];
     * trace(b.last());
     * // {"a":"액시스제이"}
     *
     * var c = [1, 2, [1,2,3]];
     * trace(c.last());
     * // [1, 2, 3]
     * ```
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
     * ```js
     * var a = [1,2,3];
     * trace(a.getToSeq(1));
     * // 2
     *
     * var a = [1,{a:2},3];
     * trace(a.getToSeq(1));
     * // {"a":2}
     * ```
     */
    function getToSeq(seq) {
        if (seq > (this.length - 1)) {
            return null;
        }
        else {
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
     * ```js
     * var a = [1,2,3,4];
     * trace(a);
     * // [1, 2, 3, 4]
     * a = a.remove(function(idx, item){
	 *     return (item == 3);
	 * });
     * trace(a);
     * // [1, 2, 4]
     *  * var b = [1,2,3,4];
     * trace(b);
     * // [1, 2, 3, 4]
     * b = b.remove(function(){
	 *     return (this.item == 3 || this.index == 0);
	 * });
     * trace(b);
     * // [2, 4]
     * ```
     */
    function remove(callBack) {
        var _self = this;
        var collect = [];
        AXUtil.each(this, function (index, O) {
            if (!callBack.call({index: index, item: O}, index, O)) collect.push(O);
        });
        return collect;
    }

    /**
     * 사용자가 정의한 조건에 맞는 아이템 갯수를 반환합니다.
     * @method Array.search
     * @param {Function} callBack
     * @returns {Number}
     * @example
     * ```js
     * var a = [1,2,3,4];
     * trace(a);
     * // [1, 2, 3, 4]
     * trace(a.search(function(idx, item){
	 *     return (item < 3);
	 * }));
     * // 2
     * ```
     */
    function search(callBack) {
        var _self = this;
        var collect = [];
        AXUtil.each(this, function (index, O) {
            if (callBack.call({index: index, item: O}, index, O)) collect.push(O);
        });
        return collect.length;
    }

    /**
     * 사용자가 정의한 조건에 맞는 아이템을 모두 반환합니다.
     * @method Array.searchObject
     * @param {Function} callBack
     * @returns {Array}
     * @example
     * ```js
     * var a = [1,2,3,4];
     * trace(a);
     * // [1, 2, 3, 4]
     * trace(a.searchObject(function(idx, item){
	 *     return (item < 3);
	 * }));
     * // [1, 2]
     *
     * var b = [1,2,3,4];
     * trace(b);
     * // [1, 2, 3, 4]
     * trace(b.searchObject(function(idx, item){
	 *     return (this.item < 3);
	 * }));
     * // [1, 2]
     * ```
     */
    function getObject(callBack) {
        var _self = this;
        var collect = [];
        AXUtil.each(this, function (index, O) {
            if (callBack.call({index: index, item: O}, index, O)) collect.push(O);
        });
        return collect;
    }

    /**
     * 사용자가 정의한 조건에 맞는 아이템을 한 개만 반환합니다.
     * @method Array.hasObject
     * @param {Function} callBack
     * @returns {Object}
     * @example
     * ```js
     * var a = [1,2,3,4];
     * trace(a);
     * // [1, 2, 3, 4]
     * trace(a.has(function(idx, item){
	 *     return (item == 3);
	 * }));
     * // 3
     *
     * var b = [1,2,3,4];
     * trace(b);
     * // [1, 2, 3, 4]
     * trace(b.has(function(idx, item){
	 *     return (this.item == 3);
	 * }));
     * // 3
     * ```
     */
    function hasObject(callBack) {
        var _self = this;
        var collect = null;
        AXUtil.each(this, function (index, O) {
            if (callBack.call({index: index, item: O}, index, O)) {
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
     * ```js
     * var myArray = [{a:99},{a:2},{a:1}];
     * myArray.getMinObject("a");
     * // Object {a: 1}
     * ```
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
     * ```js
     * var myArray = [{a:2},{a:99},{a:1}];
     * myArray.getMaxObject("a");
     * // Object {a: 99}
     * ```
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
        context = context || function (x) {
                return x;
            };
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
        context = context || function (x) {
                return x;
            };
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
        context = context || function (x) {
                return false;
            };
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
            context = function (x) {
                return (x == findObj);
            }
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
        return {obj: myselect, index: myindex};
    }

    function m_findAll(context) {
        context = context || function (x) {
                return false;
            };
        var myselect = [];
        ;
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
     * ```js
     * var a = [
     *     {pno:0, no:1, name:"장기영"},
     *     {pno:1, no:2, name:"장기영"},
     *     {pno:1, no:3, name:"장기영"},
     *     {pno:3, no:4, name:"장기영"},
     *     {pno:3, no:5, name:"장기영"},
     *     {pno:5, no:6, name:"장기영"},
     *     {pno:5, no:7, name:"장기영"}
     * ];
     *
     * var myTree = a.convertTree("pno", "no");
     * trace(myTree);
     * //[{"pno":0, "no":1, "name":"장기영", "subTree":[{"pno":1, "no":2, "name":"장기영", "__subTreeLength":0, "subTree":[], "pHash":"000_000", "hash":"000_000_000"}, {"pno":1, "no":3, "name":"장기영", "__subTreeLength":2, "subTree":[{"pno":3, "no":4, "name":"장기영", "__subTreeLength":0, "subTree":[], "pHash":"000_000_001", "hash":"000_000_001_000"}, {"pno":3, "no":5, "name":"장기영", "__subTreeLength":2, "subTree":[{"pno":5, "no":6, "name":"장기영", "__subTreeLength":0, "subTree":[], "pHash":"000_000_001_001", "hash":"000_000_001_001_000"}, {"pno":5, "no":7, "name":"장기영", "__subTreeLength":0, "subTree":[], "pHash":"000_000_001_001", "hash":"000_000_001_001_001"}], "pHash":"000_000_001", "hash":"000_000_001_001"}], "pHash":"000_000", "hash":"000_000_001"}], "__subTreeLength":2, "pHash":"000", "hash":"000_000"}]
     * ```
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
                }
                else {
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
     * ```js
     * var b = [1,2,3,4];
     * trace(b);
     * // [1, 2, 3, 4]
     * trace(b.getIndex(function(idx, item){
	 *     return (this.item >= 3);
	 * }));
     * //  {"item":3, "index":2}
     * ```
     */
    function getIndex(context) {
        if (!Object.isFunction(context)) {
            findObj = context;
            context = function (x) {
                return (x == findObj);
            }
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
        return {item: findObject, index: findIndex};
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
function AXgetId(id) {
    return document.getElementById(id);
}
function AX_A(iterable) {
    if (!iterable) return [];
    if ('toArray' in Object(iterable)) return iterable.toArray();
    var length = iterable.length || 0, results = new Array(length);
    while (length--) results[length] = iterable[length];
    return results;
}

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
            href: ((typeof AXConfig.anchorHref === "undefined") ? "href=\"javascript:;\"" : AXConfig.anchorHref)
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
        if (configs) {
            for (k in configs) {
                if (configs.hasOwnProperty(k)) this.config[k] = configs[k];
            }
        }
        // configs에 targetID가 없고 target만 지정한 경우 targetID 자동생성
        if (this.config.target) if (this.config.target.id === undefined || this.config.target.id == "") axdom(this.config.target).attr("id", this.config.target.id = this.config.targetID = "AXJUnique_" + axf.getUniqueId());
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
        if (configs) {
            for (k in configs) {
                if (configs.hasOwnProperty(k)) this.config[k] = configs[k];
            }
        }
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
                if (!eventTarget.parentNode) {
                    eventTarget = null;
                    break;
                }
                if (args.until) {
                    if (args.until(eventTarget, eid)) {
                        eventTarget = null;
                        break;
                    }
                }
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
        } catch (e) {

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

        if (config.debug) trace({url: myQue.url, pars: myQue.configs.pars});

        var ajaxOption = {}, pars;
        axf.each(config, function (k, v) { // update to {this.config}
            ajaxOption[k] = v;
        });
        ajaxOption.url = myQue.url;
        pars = myQue.configs.pars;
        if (dataSendMethod != "DTO" && AXConfig.AXReq.pars) {
            if (typeof pars == "object") {
                if (typeof AXConfig.AXReq.pars == "object") {
                    pars = jQuery.extend(pars, AXConfig.AXReq.pars);
                } else if (typeof AXConfig.AXReq.pars == "string") {
                    pars = jQuery.extend(pars, AXConfig.AXReq.pars.queryToObject());
                }
            } else if (typeof pars == "string") {
                if (typeof AXConfig.AXReq.pars == "object") {
                    pars += "&" + jQuery.param(AXConfig.AXReq.pars);
                } else if (typeof AXConfig.AXReq.pars == "string") {
                    pars += "&" + AXConfig.AXReq.pars;
                }
            }
        }

        if (dataSendMethod == "json") {
            ajaxOption["data"] = Object.toJSON(((typeof pars == "string") ? pars.queryToObject() : pars ));
        } else if (dataSendMethod == "query-json") {
            ajaxOption["data"] = "{queryString:\"" + pars + "\"}";
        } else {
            ajaxOption["data"] = pars;
        }

        ajaxOption.success = onsucc;
        ajaxOption.error = onerr;
        ajaxOption.timeout = ontimeout;

        if (myQue.configs.onbeforesend) {
            if (!myQue.configs.onbeforesend.call(ajaxOption)) {
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
        } catch (e) {
        }
    },
    ontimeout: function (req) {
        trace("onTimeout:" + req.responseText);
        this.que.shift();
        this.busy = false;
        try {
            mask.close();
        } catch (e) {
        }
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
    abort: function () {
        try {
            this.que[0]._jQueryAjax.abort();
        } catch (e) {

        }
        return this;
    }
});
var myAXreqQue = new AXReqQue();
var AXReqAbort = function () {
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
        myAXreqQue.add({url: url, configs: configs});
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
        if (this.maskDelay) clearTimeout(this.maskDelay);
        if (axdom(document.body).data("masked") != "true") {
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
        var target = axdom("#" + targetID);
        if (target.css("position") == "static") {
            target.css("position", "relative")
        }
        target.append(this.mask.css({'position': 'absolute', 'top': 0, 'left': 0}));

        if (configs) {
            if (!configs.onclick) configs.onclick = configs.onClick;
            if (configs.onclick) {
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
            if (this.maskDelay) clearTimeout(this.maskDelay);
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
        this.blinkTrack = [{css: {opacity: 0.1}, time: 1000}, {css: {opacity: 0.8}, time: 1000}];
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
    setContent: function (content) {
        var po = [];
        if (Object.isString(content)) {
            po.push(content);
        } else {
            var po = [];
            po.push("<div style='width: " + content.width + "px;height:" + content.height + "px;position: absolute;left:50%;top:50%;text-align: center;margin-left: -" + (content.width / 2) + "px;margin-top:-" + (content.height / 2) + "px;'>");
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
        this.config.easing = {open: {duration: 300, easing: "expoOut"}, close: {duration: 500, easing: "expoOut"}};
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
            if (Object.isString(obj)) {
                po.push(obj.crlf());
            } else {
                po.push(obj);
            }
            po.push("				</td>");
            po.push("			</tr>");
            po.push("		</tbody>");
            po.push("	</table>");

            if (config.type == "dialog") {
                po.push("	<div class=\"AXNotificationButtons\">");
                po.push("	<input type=\"button\" value=\"" + config.confirmStr + "\" class=\"AXButton Red\" data-bread-id=\"" + breadID + "\" id=\"bread_AX_" + breadID + "_AX_confirm\" />");
                po.push("	</div>");
            }

            po.push("</div>");
            po.push("</div>");

        } 
        else {
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
            if (Object.isString(obj.body)) {
                po.push(obj.body.crlf());
            } else {
                po.push(obj.body);
            }
            po.push("				</td>");
            if (obj.type == "Caution" && config.type != "dialog") {
                if (!obj.buttons) {
                    po.push("				<td class=\"AXNotificationButton\" align=\"right\">");
                    po.push("				<input type=\"button\" value=\"" + config.confirmStr + "\" class=\"AXButton Red\" data-bread-id=\"" + breadID + "\" id=\"bread_AX_" + breadID + "_AX_confirm\" />");
                    po.push("				</td>");
                }
            }
            po.push("			</tr>");
            po.push("		</tbody>");
            po.push("	</table>");
            if (obj.buttons) {
                po.push("	<div class=\"AXNotificationButtons\">");
                AXUtil.each(obj.buttons, function (index, B) {
                    po.push("	<input type=\"button\" value=\"" + this.buttonValue + "\" class=\"AXButton " + (this.buttonClass || "") + "\" data-bread-id=\"" + breadID + "\" id=\"bread_AX_" + breadID + "_AX_buttons_AX_" + index + "\" />");
                });
                po.push("	</div>");
            } else if (config.type == "dialog") {
                po.push("	<div class=\"AXNotificationButtons\">");
                po.push("	<input type=\"button\" value=\"" + config.confirmStr + "\" class=\"AXButton Red\" data-bread-id=\"" + breadID + "\" id=\"bread_AX_" + breadID + "_AX_confirm\" />");
                po.push("	</div>");
            }
            po.push("</div>");
            po.push("</div>");

        }

        if (config.type == "toast") {
            
            if (!AXgetId(config.targetID)) axdom(document.body).append(this.toastTray);
            this.bread.push({breadID: breadID, type: obj.type, html: po.join('').enc()});
            this.insertBread(obj);
            
        }
        else if (config.type == "dialog") {
            
            if (!AXgetId(config.targetID)) axdom(document.body).append(this.dialogTray);
            this.dialogTray.prepend(po.join(''));

            var bodyWidth = (AXUtil.docTD == "Q") ? document.body.clientWidth : document.documentElement.clientWidth;
            //var l = bodyWidth / 2 - this.dialogTray.width() / 2;
            if (obj.top != undefined) {
                this.dialogTray.css({paddingTop: obj.top});
            } else {
                this.dialogTray.css({paddingTop: 50});
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

            axdom(document.body).unbind("keyup." + breadID).bind("keyup." + breadID, function (event) {
                if (event.keyCode == AXUtil.Event.KEY_ESC) {
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
        var _this = this;
        var config = this.config;
        if (this.bread.length == 0) {
            return;
        }
        if (this.busy) return;
        this.busy = true;

        var nextBread = this.nextBread.bind(this);
        var endCheck = this.endCheck.bind(this);

        var myQue = this.bread[0];
        axdom("#" + config.targetID).prepend(myQue.html.decode());

        axdom("#bread_AX_" + myQue.breadID + "_AX_confirm").bind("click", function (e) {
            if (obj.onConfirm) obj.onConfirm(obj.data);
            var breadBox = axdom("#bread_AX_" + myQue.breadID);
            breadBox.find("button, input").hide();
            breadBox.fadeOut({
                duration: config.easing.close.duration, easing: config.easing.close.easing, complete: function () {
                    breadBox.remove();
                    endCheck();
                }
            });
        });

        var $bread = axdom("#bread_AX_" + myQue.breadID);
        $bread.slideDown({
            duration: config.easing.open.duration, easing: config.easing.open.easing, complete: function () {
                nextBread();
                if (myQue.type != "Caution") {
                    setTimeout(function () {
                        $bread.fadeOut({
                            duration: config.easing.close.duration, easing: config.easing.close.easing, complete: function () {
                                $bread.remove();
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
                this.dialogTray.remove();
                if (breadID) {
                    axdom(document.body).unbind("keyup." + breadID);
                    if (obj && obj.onclose) obj.onclose.call(obj, obj);
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
toast.setConfig({targetID: "basicToast", type: "toast"});

var dialog = new AXNotification();
dialog.setConfig({targetID: "basicDialog", type: "dialog"});
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
 *```js
 * var myUIScroll = new AXScroll(); // 스크롤 인스턴스 선언
 * myUIScroll.setConfig({
 *     targetID:"UIScrollContainer",
 *     scrollID:"UIScrollTarget"
 * });
 *```
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

        this.minHeightSB = {TF: false, h: 0};
        this.minWidthSB = {TF: false, w: 0};
    },
    /**
     * @method AXScroll.setConfig
     * @param {Object} configs - 스크롤 속성 오브젝트
     * @description 스크롤 대상과 스크롤 컨테이너를 지정하여 스크롤UI를 구현합니다.
     * @example
     *```js
     * myUIScroll.setConfig({
     *     targetID:"UIScrollContainer",
     *     scrollID:"UIScrollTarget",
     *     bounces:true
     * });
     *```
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
     * ```js
     * myUIScroll.updateScroll();
     * myUIScroll.resizeScroll(); // updateScroll과 동일한 기능
     * ```
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
                this.scrollTargetID.css({height: this.scrollScrollID.outerHeight()});
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
                this.scrollTargetID.css({height: this.scrollScrollID.outerHeight()});
            }
        }

        var CTheight = this.scrollTargetID.innerHeight();
        var CTwidth = this.scrollTargetID.innerWidth();

        if (cfg.yscroll) {
            this.scrollTrack.css({height: CTheight - (cfg.scrollBarMargin * 2)});
        }
        if (cfg.xscroll) {
            this.xscrollTrack.css({width: CTwidth - (cfg.scrollBarMargin * 2)});
        } else {
            this.scrollScrollID.css({width: CTwidth});
        }

        var Cheight = this.scrollScrollID.outerHeight();
        var Cwidth = this.scrollScrollID.outerWidth();

        if (cfg.yscroll) {
            var SBheight = CTheight * (CTheight - (cfg.scrollBarMargin * 2)) / Cheight;
            if (SBheight < 30) SBheight = 30;
            this.scrollBar.css({height: Math.ceil(SBheight)});
            /*
             if (SBheight < 30) {
             this.minHeightSB.TF = true;
             this.minHeightSB.h = SBheight;
             }
             */
            if (CTheight == Cheight || CTheight > Cheight) {
                this.scrollTrack.hide();
                this.scrollBar.hide();
                this.scrollScrollID.css({top: 0});
            } else {
                this.scrollTrack.show();
                this.scrollBar.show();
            }
        }
        if (cfg.xscroll) {
            var SBwidth = CTwidth * (CTwidth - (cfg.scrollBarMargin * 2)) / Cwidth;
            if (SBwidth < 30) SBwidth = 30;
            this.xscrollBar.css({width: Math.ceil(SBwidth)});
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
            if (AXgetId(cfg.targetID)) {
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
        var pos = (this.scrollTrack) ? this.scrollTrack.offset() : {left: 0, top: 0};
        var posx = (this.xscrollTrack) ? this.xscrollTrack.offset() : {left: 0, top: 0};

        var x = (event.pageX - posx.left);
        var y = (event.pageY - pos.top);
        return {x: x, y: y};
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
        return {x: x, y: y};
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
        var maxLeft = -(this.touchStartXY.scrollWidth - this.touchStartXY.targetWidth);
        var minTop = 0;
        var maxTop = -(this.touchStartXY.scrollHeight - this.touchStartXY.targetHeight);
        var scrollPosition = this.scrollScrollID.position();

        if ((scrollPosition.left < minLeft && scrollPosition.left > maxLeft) || (scrollPosition.top < minTop && scrollPosition.top > maxTop)) {
            this.scrollScrollID.stop();
            if (cfg.yscroll) this.scrollBar.stop();
            if (cfg.xscroll) this.xscrollBar.stop();
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
                var touchDirection = ((this.touchStartXY.y - touch.pageY) <= 0) ? "T" : "B";
                /* 위아래 이동 */

                if (touchDirection != this.touchDirection) {
                    this.touchMoveAfter(touch);
                }

                this.touchDirection = touchDirection;
                if (this.moveBlock({top: touch.pageY - this.touchStartXY.y})) {
                    if (event.preventDefault) event.preventDefault();
                    else return false;
                }
            }
        } else if ((this.touchStartXY.x - touch.pageX).abs() > (this.touchStartXY.y - touch.pageY).abs()) {
            if (cfg.xscroll && this.touchStartXY.scrollWidth > this.touchStartXY.targetWidth) {
                this.touchMode = "we";
                var touchDirection = ((this.touchStartXY.x - touch.pageX) <= 0) ? "L" : "R";
                /* 좌우 이동 */

                if (touchDirection != this.touchDirection) {
                    this.touchMoveAfter(touch);
                }

                this.touchDirection = touchDirection;
                if (this.moveBlock({left: touch.pageX - this.touchStartXY.x})) {
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
    touchMoveAfter: function (touch) {
        try {
            this.touchStartXY.sTime = ((new Date()).getTime() / 1000);
            this.touchStartXY.sTop = this.scrollScrollID.position().top;
            this.touchStartXY.sLeft = this.scrollScrollID.position().left;
            this.touchStartXY.x = touch.pageX;
            this.touchStartXY.y = touch.pageY;
        } catch (e) {
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
        if (this.touchStartXY) {
            this.touhEndObserver = setTimeout(function () {
                moveEndBlock();
            }, 10);
        }
    },
    moveBlock: function (moveXY) {
        var cfg = this.config;
        var returnTF = true;
        if (moveXY.left != undefined) {
            var newLeft = (this.touchStartXY.sLeft + (moveXY.left));
            var minLeft = 0;
            var maxLeft = -(this.touchStartXY.scrollWidth - this.touchStartXY.targetWidth);
            if (cfg.bounces) {
                minLeft = this.touchStartXY.targetWidth * 0.4;
                maxLeft = -((this.touchStartXY.scrollWidth - this.touchStartXY.targetWidth) * 1.2);
            }
            if (newLeft > minLeft) {
                newLeft = minLeft;
                returnTF = false;
            } else if (newLeft < maxLeft) {
                newLeft = maxLeft;
                returnTF = false;
            }
            this.scrollScrollID.css({left: newLeft});
            this.setScrollbarPositionForWheel("left");
        } else if (moveXY.top != undefined) {
            var newTop = (this.touchStartXY.sTop + (moveXY.top));
            var minTop = 0;
            var maxTop = -(this.touchStartXY.scrollHeight - this.touchStartXY.targetHeight);
            if (cfg.bounces) {
                minTop = this.touchStartXY.targetHeight * 0.4;
                maxTop = -((this.touchStartXY.scrollHeight - this.touchStartXY.targetHeight) * 1.2);
            }
            if (newTop > minTop) {
                newTop = minTop;
                returnTF = false;
            } else if (newTop < maxTop) {
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
    moveEndBlock: function () {
        var cfg = this.config;
        /* 관성발동여부 체크 */
        if (!this.touchStartXY) return;
        var sTime = this.touchStartXY.sTime;
        var eTime = ((new Date()).getTime() / 1000);
        var dTime = eTime - sTime;
        //var setScrollbarPositionForWheel = this.setScrollbarPositionForWheel.bind(this);
        var tractInActive = this.tractInActive.bind(this);

        if (this.touchMode == "we") { /* 좌우 */
            if (this.touchStartXY.scrollWidth <= this.touchStartXY.targetWidth) return;
            var eLeft = this.scrollScrollID.position().left;
            var dLeft = eLeft - this.touchStartXY.sLeft;
            var velocityLeft = Math.ceil((dLeft / dTime) / 1); // 속력= 거리/시간
            var endLeft = Math.ceil(eLeft + velocityLeft); //스크롤할때 목적지
            if (endLeft > 0) endLeft = 0;
            else if (endLeft < -(this.touchStartXY.scrollWidth - this.touchStartXY.targetWidth)) {
                endLeft = -(this.touchStartXY.scrollWidth - this.touchStartXY.targetWidth);
            }
            var newLeft = endLeft.abs();
            this.touchStartXY.sLeft = -newLeft;
            this.scrollScrollID.animate({left: -newLeft}, (eLeft + newLeft).abs(), "circOut", function () {
                tractInActive();
            });
            this.setScrollbarPositionForWheel("left", (eLeft + newLeft).abs(), "circOut", {left: -newLeft});

            if (cfg.yscroll) {
                var eTop = this.scrollScrollID.position().top;
                var topChange = false;
                if (eTop > 0) {
                    eTop = 0;
                    topChange = true;
                } else if (eTop < -(this.touchStartXY.scrollHeight - this.touchStartXY.targetHeight)) {
                    eTop = (this.touchStartXY.scrollHeight - this.touchStartXY.targetHeight);
                    topChange = true;
                }
                if (topChange) this.scrollScrollID.css({top: -eTop});
            }

        } else { /* 위아래 */
            if (this.touchStartXY.scrollHeight <= this.touchStartXY.targetHeight) return;
            var eTop = this.scrollScrollID.position().top;
            var dTop = eTop - this.touchStartXY.sTop;
            var velocityTop = Math.ceil((dTop / dTime) / 1); // 속력= 거리/시간
            var endTop = Math.ceil(eTop + velocityTop); //스크롤할때 목적지
            if (endTop > 0) endTop = 0;
            else if (endTop < -(this.touchStartXY.scrollHeight - this.touchStartXY.targetHeight)) {
                endTop = -(this.touchStartXY.scrollHeight - this.touchStartXY.targetHeight);
            }

            var newTop = endTop.abs();
            this.touchStartXY.sTop = -newTop;
            this.scrollScrollID.animate({top: -newTop}, (eTop + newTop).abs(), "circOut", function () {
                tractInActive();
            });
            this.setScrollbarPositionForWheel("top", (eTop + newTop).abs(), "circOut", {top: -newTop});

            if (cfg.xscroll) {
                var eLeft = this.scrollScrollID.position().left;
                var leftChange = false;
                if (eLeft > 0) {
                    eLeft = 0;
                    leftChange = true;
                } else if (eLeft < -(this.touchStartXY.scrollWidth - this.touchStartXY.targetWidth)) {
                    eLeft = (this.touchStartXY.scrollWidth - this.touchStartXY.targetWidth);
                    leftChange = true;
                }
                if (leftChange) this.scrollScrollID.css({left: -eLeft});
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

        this.scrollBarAttr = {x: (SBpos.left - pos.x).number(), y: (SBpos.top - pos.y).number(), h: SBh.number(), sth: STh};
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
            this.scrollBar.css({top: SBy});
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

        this.scrollBarAttr = {x: (SBpos.left - pos.x).number(), w: SBw.number(), stw: STw};

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

            this.xscrollBar.css({left: SBx});
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
        this.scrollScrollID.css({top: Sy});

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
            } else {
                // scrollContent height update
                this.contentScrollXAttr.scrollWidth = this.scrollScrollID.width();
                this.contentScrollXAttr.scrollTrackXWidth = this.xscrollTrack.width();
                this.contentScrollXAttr.scrollXHandleWidth = this.xscrollBar.width();
            }

            var SBx = this.xscrollBar.position().left - config.scrollBarMargin;
            var L = (this.contentScrollXAttr.scrollWidth * (SBx) / this.contentScrollXAttr.scrollTrackXWidth).round(0);
            this.scrollScrollID.css({left: -L});

        } else {

            if (!this.contentScrollYAttr) {
                this.contentScrollYAttr = {
                    bodyHeight: this.scrollTargetID.height(),
                    scrollHeight: this.scrollScrollID.height(),
                    scrollTrackYHeight: this.scrollTrack.height(),
                    scrollYHandleHeight: this.scrollBar.height()
                };
            } else {
                // scrollContent height update
                this.contentScrollYAttr.scrollHeight = this.scrollScrollID.height();
                this.contentScrollYAttr.scrollTrackYHeight = this.scrollTrack.height();
                this.contentScrollYAttr.scrollYHandleHeight = this.scrollBar.height();
            }

            var SBy = this.scrollBar.position().top - config.scrollBarMargin;
            var T = (this.contentScrollYAttr.scrollHeight - this.contentScrollYAttr.bodyHeight) * ( (SBy) / (this.contentScrollYAttr.scrollTrackYHeight - this.contentScrollYAttr.scrollYHandleHeight) ).number();
            this.scrollScrollID.css({top: -T});
        }

    },

    setScrollbarPositionForWheel: function (direction, duration, easing, position) {
        //scrollbar top position handle for wheel
        var config = this.config;

        if (direction == "left") {

            if (!this.contentScrollXAttr) {
                this.contentScrollXAttr = {
                    bodyWidth: this.scrollTargetID.width(),
                    scrollWidth: this.scrollScrollID.width(),
                    scrollTrackXWidth: this.xscrollTrack.width(),
                    scrollXHandleWidth: this.scrollBar.outerWidth()
                };
            } else {
                // scrollContent height update
                this.contentScrollXAttr.scrollWidth = this.scrollScrollID.width();
                this.contentScrollXAttr.scrollTrackXWidth = this.xscrollTrack.width();
                this.contentScrollXAttr.scrollXHandleWidth = this.xscrollBar.outerWidth();
            }

            var Sy = (position) ? position.left : this.scrollScrollID.position().left;
            var L = (this.contentScrollXAttr.scrollTrackXWidth - this.contentScrollXAttr.scrollXHandleWidth) * ((Sy) / (this.contentScrollXAttr.scrollWidth - this.contentScrollXAttr.bodyWidth));
            L -= config.scrollBarMargin;
            if (easing) {
                this.xscrollBar.animate({
                    left: -L
                    //,width: Math.ceil(this.scrollTargetID.outerWidth() * (this.scrollTargetID.outerWidth() - 4) / (this.scrollScrollID.outerWidth() + addY))
                }, duration, easing, function () {
                });
            } else {
                this.xscrollBar.css({
                    left: -L
                    //,width: Math.ceil(this.scrollTargetID.outerWidth() * (this.scrollTargetID.outerWidth() - 4) / (this.scrollScrollID.outerWidth() + addY))
                });
            }
        } else {

            if (!config.yscroll) return false;
            //wheel control event is not jquery event !

            if (!this.contentScrollYAttr) {
                this.contentScrollYAttr = {
                    bodyHeight: this.scrollTargetID.height(),
                    scrollHeight: this.scrollScrollID.height(),
                    scrollTrackYHeight: this.scrollTrack.height(),
                    scrollYHandleHeight: this.scrollBar.outerHeight()
                };
            } else {
                // scrollContent height update
                this.contentScrollYAttr.scrollHeight = this.scrollScrollID.height();
                this.contentScrollYAttr.scrollTrackYHeight = this.scrollTrack.height();
                this.contentScrollYAttr.scrollYHandleHeight = this.scrollBar.outerHeight();
            }

            var Sy = (position) ? position.top : this.scrollScrollID.position().top;
            var T = (this.contentScrollYAttr.scrollTrackYHeight - this.contentScrollYAttr.scrollYHandleHeight) * ((Sy) / (this.contentScrollYAttr.scrollHeight - this.contentScrollYAttr.bodyHeight));
            T -= config.scrollBarMargin;
            if (easing) {
                //trace({ top: SBy }, duration, easing);

                this.scrollBar.animate({
                    top: -T
                    //,height: Math.ceil(this.scrollTargetID.outerHeight() * (this.scrollTargetID.outerHeight() - 4) / (this.scrollScrollID.outerHeight() + addY))
                }, duration, easing, function () {
                });
            } else {
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
            this.scrollBar.css({top: SBtop});
        } catch (e) {

        }
    },
    /**
     * @method AXScroll.focusElement
     * @param {String} id - 포커스 할 대상 엘리먼트 아이디
     * @returns {AXScroll}
     * @description 스크롤 오브젝트 안에 엘리먼트를 포커스 합니다.
     * @example
     *```js
     * myUIScroll.focusElement("resizer01");
     *```
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
            this.scrollScrollID.css({top: -myNewTop});
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
     *```js
     * myUIScroll.scrollTop(0);
     *```
     */
    scrollTop: function (top) {
        var myNewTop = top;
        var CTheight = this.scrollTargetID.innerHeight();
        var Cheight = this.scrollScrollID.outerHeight();
        if ((Cheight - myNewTop) < CTheight) {
            myNewTop = Cheight - CTheight;
        }
        if (myNewTop < 0) myNewTop = 0;
        this.scrollScrollID.css({top: -myNewTop});
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
     *```js
     * myUIScroll.moveTo();
     *```
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
            this.scrollBar.css({top: css.top});
        }
        if (cfg.xscroll && !AXUtil.isEmpty(css.left)) {
            this.xscrollBar.css({left: css.left});
        }
        return this;
    },
    /**
     * @method AXScroll.unbind
     * @returns {AXScroll}
     * @description 스크롤을 UI를 제거합니다.
     * @example
     * ```js
     * myUIScroll.unbind();
     * ```
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
     *```js
     * {
     *     CT_className : {String},
     *     weeks : {
     *        { name: "SUN" },
     *        { name: "MON" },
     *        { name: "TUE" },
     *        { name: "WED" },
     *        { name: "THU" },
     *        { name: "FRI" },
     *        { name: "SAT" }
     *     },
     *     printFormat : "dd",
     *     titleFormat : "yyyy/mm/dd",
     *     valueFormat : "yyyy-mm-dd"
     * }
     *```
     */
    initialize: function (AXJ_super) {
        AXJ_super();
        this.config.CT_className = "AXCalendar";
        this.Observer = null;
        this.config.weeks = [
            {name: "SUN"},
            {name: "MON"},
            {name: "TUE"},
            {name: "WED"},
            {name: "THU"},
            {name: "FRI"},
            {name: "SAT"}
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
     *```js
     * mycalendar.setConfig(config);
     *
     * var config = {
     *     CT_className : {String},
     *     weeks : {Object} [{ { name: "SUN" }, { name: "MON" }, { name: "TUE" }, { name: "WED" }, { name: "THU" }, { name: "FRI" }, { name: "SAT" } }],
     *     printFormat : {String} [dd],
     *     titleFormat : {String} [yyyy/mm/dd],
     *     valueFormat : {String} [yyyy-mm-dd]
     * };
     *```
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
        return {calendarStartDate: calendarStartDate, monthStartDate: monthStartDate};
    },
    /**
     * @method AXCalendar.printDayPage
     * @param {String} [toDay]
     * @returns {AXCalendar}
     * @description 일자 캘린더를 targetID 안에 출력합니다
     * @example
     *```js
     * mycalendar.printDayPage("2014-11-01");
     *```
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
        if (cfg.minDate) {
            minTime = cfg.minDate.date().getTime();
        }
        if (cfg.maxDate) {
            maxTime = cfg.maxDate.date().getTime();
        }
        if (cfg.onBeforeShowDay) {
            onBeforeShowDay = cfg.onBeforeShowDay.bind(this);
        }
        var i = 0;
        while (i < 6) {
            po.push("<tr>");
            var k = 0;
            while (k < 7) {
                //console.log(roopDate);
                var roopTime = roopDate.getTime();
                var dayValue = roopDate.print(this.config.printFormat);
                var addClass = [];
                var addStyle = "";
                var tdClass = [];
                var printTitle = roopDate.print(this.config.titleFormat);
                var isEnable = true;
                if (onBeforeShowDay) {
                    var addData = onBeforeShowDay(roopDate); // addData -> { isEnable: true|false, title:'성탄절', className: 'holyday', style: 'color:red' }
                    if (addData) {
                        if (addData.className) {
                            addClass.push(addData.className);
                        } // ie7 이하에서 class 예약어라 사용안됨
                        if (addData.style) {
                            addStyle = addData.style;
                        }
                        if (addData.title) {
                            printTitle = addData.title;
                        }
                        if (addData.isEnable === false) {
                            isEnable = false;
                        }
                    }
                }
                if (isEnable && minTime > -1) {
                    isEnable = !(roopTime < minTime);
                }
                if (isEnable && maxTime > -1) {
                    isEnable = !(roopTime > maxTime);
                }
                if (roopDate.getMonth() != monthStartDate.getMonth()) addClass.push("notThisMonth");
                if (setDate.diff(roopDate, "D") == 0) tdClass.push("setDate");
                if (!isEnable) {
                    addClass.push("disabled");
                }
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
     *```js
     * var myDate = new Date();
     * // var myDate = "2014-11-01".date();
     * mycalendar.dayPageSetDay(myDate);
     *```
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
     *```js
     * mycalendar.printMonthPage("2014-11-01");
     *```
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
        var i = 0;
        while (i < 4) {
            po.push("<tr>");
            var k = 0;
            while (k < 3) {
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
     *```js
     * var myDate = new Date();
     * // var myDate = "2014-11-01".date();
     * mycalendar.monthPageSetMonth(myDate);
     *```
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
     *```js
     * mycalendar.printYearPage("2014");
     * mycalendar.printYearPage(2014);
     *```
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
        var i = 0;
        while (i < 4) {
            po.push("<tr>");
            var k = 0;
            while (k < 3) {
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
     *```js
     * var myDate = new Date();
     * // var myDate = "2014-11-01".date();
     * mycalendar.yearPageSetYear(myDate);
     *```
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
     *```js
     * mycalendar.printTimePage("06:36 AM");
     *```
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
        if (apm == "PM") {
            //hh += 12;
            if (hh > 12) {
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
     *```js
     * myCalendar.getTime();
     * // 09:20
     *```
     */
    getTime: function () {
        var cfg = this.config;
        var hh = (axdom("#" + cfg.targetID + "_AX_hour").val() || 0).number();
        var mi = (axdom("#" + cfg.targetID + "_AX_minute").val() || 0).number();
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
 *```js
 * var multiSelector = new AXMultiSelect();
 * multiSelector.setConfig({
 *     selectStage       : "selectStageBox", // 컨테이너 타겟 아이디
 *     selectClassName   : "readyselect", // 셀렉트 대상
 *     beselectClassName : "beSelected", // 셀렉트 되었을 때.
 *     selectingClassName: "AX_selecting" // 셀렉트중일 때
 * });
 *```
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
     *```js
     * var config = {
     *     selectStage: {String} - Element ID of select item container,
     *     selectClassName: {String} [readySelect] - CSS Class Name of select item,
     *     beselectClassName: {String} [beSelected] - CSS Class Name of selected item,
     *     selectingClassName: {String} [AX_selecting] - CSS Class Name of selecting item,
     *     moveSens: {Number} [5] - mouse position move of detect select,
     *     useHelper: {Boolean} [true] - use mouse select box
     * }
     * multiSelector.setConfig(config);
     *```
     */
    init: function () {

        var mouseClick = this.onmouseClick.bind(this);
        this._selectStage = axdom("#" + this.config.selectStage);
        this._selectStage.css({"position": "relative"});

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
        if (this.helperAppened) {
            return this;
        }
        var cfg = this.config;
        var eid = event.target.id.split(/_AX_/g);
        var eventTarget = event.target;
        var myTarget = this.getEventTarget({
            evt: eventTarget, evtIDs: eid,
            until: function (evt, evtIDs) {
                return (AXgetId(evt.parentNode) == AXgetId(cfg.selectStage)) ? true : false;
            },
            find: function (evt, evtIDs) {
                return (axdom(evt).hasClass(cfg.selectClassName)) ? true : false;
            }
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
     *```js
     * multiSelector.collect();
     * // 컨테이너안에 아이템의 변화가 생긴 경우 호출합니다.
     *```
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
            setTimeout(function () {
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
            if (x1 > x2) {
                tmp = x2;
                x2 = x1;
                x1 = tmp;
            }
            if (y1 > y2) {
                tmp = y2;
                y2 = y1;
                y1 = tmp;
            }
            this.helper.css({left: x1, top: y1, width: x2 - x1, height: y2 - y1});

            this._selectTargets.each(function () {

                var selectTarget = axdom.data(this, "selectableItem"), hit = false;
                /*trace({sl:selectTarget.left, sr:selectTarget.right, st:selectTarget.top, sb:selectTarget.bottom, x1:x1, x2:x2, y1:y1, y2:y2}); */
                if (!selectTarget) return;

                var stL = selectTarget.left.number(), stR = selectTarget.right.number(), stT = selectTarget.top.number(), stB = selectTarget.bottom.number();
                stL = stL + _helperPos.stageX - _helperPos.scrollLeft - _helperPos.bodyLeft;
                stR = stR + _helperPos.stageX - _helperPos.scrollLeft - _helperPos.bodyLeft;
                stT = stT + _helperPos.stageY - _helperPos.scrollTop - _helperPos.bodyTop;
                stB = stB + _helperPos.stageY - _helperPos.scrollTop - _helperPos.bodyTop;

                hit = (!(stL > x2 || stR < x1 || stT > y2 || stB < y1));
                /* touch */
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

            var css = {left: (event.pageX - axdom(document.body).offset().left), top: (event.pageY - axdom(document.body).offset().top), width: 0, height: 0};
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
            this.touchStartXY = {x: touch.pageX, y: touch.pageY, scrollTop: this._selectStage.scrollTop()};
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
            if (x1 > x2) {
                tmp = x2;
                x2 = x1;
                x1 = tmp;
            }
            if (y1 > y2) {
                tmp = y2;
                y2 = y1;
                y1 = tmp;
            }
            this.helper.css({left: x1, top: y1, width: x2 - x1, height: y2 - y1});

            this._selectTargets.each(function () {

                var selectTarget = axdom.data(this, "selectableItem"), hit = false;
                /*trace({sl:selectTarget.left, sr:selectTarget.right, st:selectTarget.top, sb:selectTarget.bottom, x1:x1, x2:x2, y1:y1, y2:y2}); */
                if (!selectTarget) return;

                var stL = selectTarget.left.number(), stR = selectTarget.right.number(), stT = selectTarget.top.number(), stB = selectTarget.bottom.number();
                stL = stL + _helperPos.stageX - _helperPos.scrollLeft - _helperPos.bodyLeft;
                stR = stR + _helperPos.stageX - _helperPos.scrollLeft - _helperPos.bodyLeft;
                stT = stT + _helperPos.stageY - _helperPos.scrollTop - _helperPos.bodyTop;
                stB = stB + _helperPos.stageY - _helperPos.scrollTop - _helperPos.bodyTop;

                hit = (!(stL > x2 || stR < x1 || stT > y2 || stB < y1));
                /* touch */
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

            var css = {left: (touch.pageX - axdom(document.body).offset().left), top: (touch.pageY - axdom(document.body).offset().top), width: 0, height: 0};
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
     *```js
     * multiSelector.getSelects();
     *```
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
                    {width: newWidth - paddingW, height: newHeight - paddingH},
                    (obj.config.animate.duration || 300), (obj.config.animate.easing || "liner"),
                    function () {
                        if (obj.config.onChange) {
                            obj.config.onChange.call(obj, obj);
                        }
                    }
                );
            } else {
                obj.jQueryElement.css({width: newWidth - paddingW, height: newHeight - paddingH});
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
            this.helper.css({width: myWidth, height: myHeight});

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
AXResizableBinder.setConfig({targetID: "defaultResizable"});

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
        config = config || {};
        config.id = this.id;
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
        this.config.responsiveMobile = 0;
        /* 모바일 반응 너비 */
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

        if (!obj.reserveKeys) {
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
                if (obj.checkbox) {
                    if (menu.checked) checked = " on";
                    po.push("<div class='tool-checkbox" + checked + "' id=\"" + subMenuID + "_tool_AX_" + depth + "_AX_" + idx + "\"></div>");
                }

                po.push("<span class='label'>" + menu.label + "</span>");

                if (menu.shotCut) po.push("<span class='shot-cut'>" + menu.shotCut + "</span>");

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
        if (axf.clientWidth() < cfg.responsiveMobile) {
            this.mobileOpen(myobj, position);
        } else {
            this.deskTopOpen(myobj, position);
        }
        return this;
    },
    mobileOpen: function (myobj, position) {
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
            addClass: "",
            height: 388,
            width: 300,
            head: {
                //title:(myobj.title||AXConfig.AXContextMenu.title),
                close: {
                    onclick: function () {
                    }
                }
            },
            onclose: function () {
            }
        });

        var initMobileModalBind = this.initMobileModal.bind(this);
        var onLoad = function (modalObj) {
            initMobileModalBind(objID, objSeq, myobj, modalObj);
        };
        this.modal.open(null, onLoad);
        this.mobileMode = true;
    },
    initMobileModal: function (objID, objSeq, myobj, modalObj) { // 현재 선택된 모바일 메뉴를 오픈합니다.
        var cfg = this.config, _this = this;
        var obj = this.objects[objSeq];
        this.mobileModalObj = {
            myobj: myobj,
            modalObj: modalObj
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

        modalObj.modalHead.find(".AXContextMenuHome").bind("click", function () {
            _this.initMobileModal(objID, objSeq, myobj, modalObj);
        });

        var styles = [];
        styles.push("height:339px;");
        var menuList = obj.menu;
        var po = [];
        po.push("<div id=\"" + objID + "_AX_containerBox\" class=\"AXContextMenuContainer\" style=\"" + styles.join(";") + "\">");
        po.push("<div id=\"" + objID + "_AX_scroll\" class=\"AXContextMenuScroll\">");

        if (typeof obj.reserveKeys == "undefined") {
            obj.reserveKeys = cfg.reserveKeys;
        }

        axf.each(menuList, function (idx, menu) {
            if (menu && filter(objSeq, objID, myobj, menu)) {
                //if (menu.upperLine) po.push("<div class=\"hline\"></div>");
                var className = (menu.className) ? " " + menu.className : "";
                var hasSubMenu = (menu[obj.reserveKeys.subMenu]) ? " hasSubMenu" : "";
                po.push("<a " + href + " class=\"contextMenuItem" + className + hasSubMenu + "\" id=\"" + objID + "_AX_contextMenu_AX_" + 0 + "_AX_" + idx + "\">");

                var checked = "";
                if (obj.checkbox) {
                    if (menu.checked) checked = " on";
                    po.push("<div class='tool-checkbox" + checked + "' id=\"" + objID + "_AX_contextMenuToolCheck_AX_" + 0 + "_AX_" + idx + "\"></div>");
                }

                po.push("<span class='label'>" + menu.label + "</label>");

                if (menu.shotCut) po.push("<span class='shot-cut'>" + menu.shotCut + "</span>");

                po.push("<div class='tool-rightGroup'>");
                if (menu[obj.reserveKeys.subMenu] && menu[obj.reserveKeys.subMenu].length > 0) po.push("<div class=\"contextSubMenuIcon\"></div>");
                if (obj.sortbox) {
                    var sortdirect = "";
                    if (menu.sort) {
                        sortdirect = " " + menu.sort.toString().lcase();
                    }
                    po.push("<div class=\"tool-sort" + sortdirect + "\" id=\"" + objID + "_AX_contextMenuToolSort_AX_" + 0 + "_AX_" + idx + "\"></div>");
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
        axdom("#" + objID + "_AX_mobileMenuPrevBox").html('<a class="AXContextMenuPrev" id="' + objID + '_AX_prev_AX_' + poi.join("_") + '">' + pMenu.label + '</a>');

        axdom("#" + objID + '_AX_prev_AX_' + poi.join("_")).bind("click", function () {
            if (pdepth == 0) {
                _this.initMobileModal(objID, objSeq, myobj, modalObj);
            } else {
                var poi = pMenu.__axdomId.split(/_AX_/g);
                var _depth = poi[poi.length - 2].number();
                var hashs = [];

                var mystrPosition = poi.length - 1;
                for (var r = 0; r < depth + 1; r++) {
                    if (!isNaN(poi[mystrPosition])) hashs.push(poi[mystrPosition]);
                    mystrPosition -= 3;
                }
                hashs = hashs.reverse();
                hashs.pop();
                var menu = obj.menu;
                for (var hash, idx = 0, __arr = hashs; (idx < __arr.length && (hash = __arr[idx])); idx++) {
                    if (idx == 0) menu = menu[hash];
                    else menu = menu[obj.reserveKeys.subMenu][hash];
                }
                _this.mobileModalSubMenu(menu.__axdomId, objSeq, objID, _this.mobileModalObj.myobj, _this.mobileModalObj.modalObj, menu, (depth - 1));
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
                if (obj.checkbox) {
                    if (menu.checked) checked = " on";
                    po.push("<div class='tool-checkbox" + checked + "' id=\"" + subMenuID + "_AX_contextMenuToolCheck_AX_" + depth + "_AX_" + idx + "\"></div>");
                }

                po.push("<span class='label'>" + menu.label + "</label>");

                if (menu.shotCut) po.push("<span class='shot-cut'>" + menu.shotCut + "</span>");

                po.push("<div class='tool-rightGroup'>");
                if (menu[obj.reserveKeys.subMenu] && menu[obj.reserveKeys.subMenu].length > 0) po.push("<div class=\"contextSubMenuIcon\"></div>");
                if (obj.sortbox) {
                    var sortdirect = "";
                    if (menu.sort) {
                        sortdirect = " " + menu.sort.toString().lcase();
                    }
                    po.push("<div class=\"tool-sort" + sortdirect + "\" id=\"" + subMenuID + "_AX_contextMenuToolSort_AX_" + depth + "_AX_" + idx + "\"></div>");
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

    closeMobileModal: function () {
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
                if (obj.checkbox) {
                    if (menu.checked) checked = " on";
                    po.push("<div class='tool-checkbox" + checked + "' id=\"" + objID + "_AX_contextMenuTool_AX_0_AX_" + idx + "\"></div>");
                }

                po.push("<span class='label'>" + menu.label + "</span>");

                if (menu.shotCut) po.push("<span class='shot-cut'>" + menu.shotCut + "</span>");

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

        if (displayMenuCount == 0) {
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
        var pBox = {width: pElement.width(), height: pElement.height()};
        var clientHeight = (AXUtil.docTD == "Q") ? document.body.scrollHeight : document.documentElement.scrollHeight;
        var clienWidth = (AXUtil.docTD == "Q") ? document.body.scrollWidth : document.documentElement.scrollWidth;
        if (clienWidth > pBox.width) pBox.width = clienWidth;
        if (clientHeight > pBox.height) pBox.height = clientHeight;
        var _box = {width: axdom("#" + objID).outerWidth(), height: axdom("#" + objID).outerHeight()};
        // -- 부모박스 정보와 박스 정보

        if ((_box.height.number() + css.top.number()) > pBox.height) {
            css.top -= ((_box.height.number() + css.top.number()) - pBox.height) + 25;
            this.openTB = "up";
            if (css.top < 0) css.top = 0;
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
            try {
                axdom(window[this.name].document).bind("mousedown.AXContenxtMenu", contextMenuItemDownBind);
                axdom(window[this.name].document).bind("keydown.AXContenxtMenu", contextMenuItemDownBind);
            } catch (e) {

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
            that = {id: obj.id, event_type: "event"};

        if (this.mobileMode) {
            this.closeMobileModal();
        } else {
            axdom("#" + objID).fadeOut("fast", function () {
                axdom("#" + objID).remove();
            });
        }

        axdom(document).unbind("keydown.AXContenxtMenu");
        axdom(document).unbind("mousedown.AXContenxtMenu");

        axdom(document).find("iframe").each(function () {
            if (window[this.name]) {
                axdom(window[this.name].document).unbind("mousedown.AXContenxtMenu");
                axdom(window[this.name].document).unbind("keydown.AXContenxtMenu");
            }
        });

        this.showedItem = {}; // 초기화
        this.openTB = "";
        this.openLR = "";

        if (obj.onclose) {
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
            that = {id: obj.id, event_type: "script"};

        if (this.mobileMode) {
            this.closeMobileModal();
        } else {
            axdom("#" + objID).fadeOut("fast", function () {
                axdom("#" + objID).remove();
            });
        }

        axdom(document).unbind("keydown", this.contextMenuItemDownBind);
        axdom(document).unbind("mousedown", this.contextMenuItemDownBind);

        this.showedItem = {}; // 초기화
        this.openTB = "";
        this.openLR = "";

        if (obj.onclose) {

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
            find: function (evt, evtIDs) {
                return (axdom(evt).hasClass("contextMenuItem")) ? true : false;
            }
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
                var pBox = {width: pElement.width(), height: pElement.height()};
                var clientHeight = (AXUtil.docTD == "Q") ? document.body.scrollHeight : document.documentElement.scrollHeight;
                var clienWidth = (AXUtil.docTD == "Q") ? document.body.scrollWidth : document.documentElement.scrollWidth;
                if (clienWidth > pBox.width) pBox.width = clienWidth;
                if (clientHeight > pBox.height) pBox.height = clientHeight;
                var _box = {width: axdom("#" + myTarget.id + "_AX_subMenu").outerWidth(), height: axdom("#" + myTarget.id + "_AX_subMenu").outerHeight()};
                // -- 부모박스 정보와 박스 정보

                var subMenuTop = axdom("#" + myTarget.id).position().top;

                var css;
                if (this.openTB == "up") {
                    var ph = axdom("#" + myTarget.id).offsetParent().height();
                    var h = axdom("#" + myTarget.id).height();
                    var bottom = ph - subMenuTop - h;
                    css = {top: "auto", bottom: bottom};
                } else {
                    css = {top: subMenuTop};
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
            find: function (evt, evtIDs) {
                return (axdom(evt).hasClass("contextMenuItem")) ? true : false;
            }
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
            find: function (evt, evtIDs) {
                return (axdom(evt).hasClass("contextMenuItem") || axdom(evt).hasClass("tool-checkbox") || axdom(evt).hasClass("tool-sort")) ? true : false;
            }
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
            for (var hash, idx = 0, __arr = hashs; (idx < __arr.length && (hash = __arr[idx])); idx++) {
                if (idx == 0) menu = menu[hash];
                else menu = menu[obj.reserveKeys.subMenu][hash];
            }

            if (menu[obj.reserveKeys.subMenu] && menu[obj.reserveKeys.subMenu].length > 0 && this.mobileMode) {
                //this.initMobileModal(objID, objSeq, this.mobileModalObj.myobj, this.mobileModalObj.modalObj, (depth+1), menu.subMenu);
                this.mobileModalSubMenu(myTarget.id, objSeq, objID, this.mobileModalObj.myobj, this.mobileModalObj.modalObj, menu, (depth + 1));
                return false;
            }

            if (axdom(myTarget).hasClass("tool-checkbox")) {
                menu.checked = !menu.checked;
                axdom("#" + menu.__axdomId).find(".tool-checkbox").toggleClass("on");

                if (obj.onchange) {
                    obj.onchange.call({menu: obj.menu, clickMenu: menu, sendObj: obj.sendObj}, objID);
                }
                return true;
            }

            if (axdom(myTarget).hasClass("tool-sort")) {

                // 다른 메뉴들은 모두 정렬 헤제
                for (var M, midx = 0, __arr = obj.menu; (midx < __arr.length && (M = __arr[midx])); midx++) {
                    if (menu != M) {
                        M.sort = undefined;
                        axdom("#" + M.__axdomId).find(".tool-sort").removeClass("asc").removeClass("desc");
                    }
                }


                if (menu.sort == undefined) menu.sort = "";
                if (menu.sort.toString().lcase() == "asc") {
                    axdom("#" + menu.__axdomId).find(".tool-sort").removeClass("asc").addClass("desc");
                    menu.sort = "desc";
                } else if (menu.sort.toString().lcase() == "desc") {
                    axdom("#" + menu.__axdomId).find(".tool-sort").removeClass("desc").addClass("asc");
                    menu.sort = "asc";
                } else {
                    axdom("#" + menu.__axdomId).find(".tool-sort").addClass("desc");
                    menu.sort = "desc";
                }

                if (obj.onsort) {
                    if (obj.onsort.call({menu: obj.menu, sortMenu: menu, sendObj: obj.sendObj}, objID) != true) {
                        this._close(objSeq, objID, event);
                    }
                }
                return true;
            }

            if (menu.onclick) {
                if (menu.onclick.call({menu: menu, sendObj: obj.sendObj}, objID) != true) {
                    this._close(objSeq, objID, event);
                }
                return true;
            } else if (obj.onchange) { // 라벨 선택 할 때. 정렬항목도 없는 경우만 체크 모드로 연결
                menu.checked = !menu.checked;
                axdom("#" + menu.__axdomId).find(".tool-checkbox").toggleClass("on");

                if (obj.onchange) {
                    if (obj.onchange.call({menu: obj.menu, clickMenu: menu, sendObj: obj.sendObj}, objID) != true) {
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
        var pBox = {width: pElement.width(), height: pElement.height()};
        var clientHeight = (AXUtil.docTD == "Q") ? document.body.scrollHeight : document.documentElement.scrollHeight;
        var clienWidth = (AXUtil.docTD == "Q") ? document.body.scrollWidth : document.documentElement.scrollWidth;
        if (clienWidth > pBox.width) pBox.width = clienWidth;
        if (clientHeight > pBox.height) pBox.height = clientHeight;
        var _box = {width: axdom("#" + objID).outerWidth(), height: axdom("#" + objID).outerHeight()};
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
                    axdom("#" + objID).find(".arrowTop").css({"background-position": (moveLeft + 5) + "px 0px;"});
                } else {
                    axdom("#" + objID).find(".arrowBottom").css({"background-position": (moveLeft + 5) + "px 0px;"});
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
            find: function (evt, evtIDs) {
                return (axdom(evt).hasClass("contextMenuItem")) ? true : false;
            }
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
                    css = {top: "auto", bottom: bottom};
                } else {
                    css = {top: subMenuTop};
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
AXPopOver.setConfig({theme: "AXPopOver"});

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
            AXPopOver.open({id: this.id + "_AX_tooltipobj", sendObj: {}}, {left: pos.left, top: posTop, handleHeight: (axdom(this).outerHeight().number() + 3)}); // event 직접 연결 방식
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
        po.push('	<div  id="', modalId, '_AX_modal" class="AXMobileModalPanel" style="height:50px;width:50px;left:', (AXUtil.clientWidth() - 50) / 2, 'px;top:', (AXUtil.clientHeight() - 50) / 2, 'px;">');
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
            width: width, height: height, margin: margin, align: align, valign: valign
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
            left: (axf.clientWidth() - (modalWidth * 0.8)) / 2,
            top: (axf.clientHeight() - (modalHeight * 0.8)) / 2,
            width: (modalWidth * 0.8),
            height: (modalHeight * 0.8)
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

        if (AXUtil.browser.name == "android") {
            //alert(AXUtil.browser.version);
            this.modalPanel.css(cssStyles);
            if (onLoad) {
                onLoad.call(returnObj, returnObj);
            }
        } else {
            this.modalPanel.animate(cssStyles, 300, "expoOut", function () {
                if (onLoad) {
                    onLoad.call(returnObj, returnObj);
                }
            });
        }
    },
    modalClick: function (event) {
        var cfg = this.config;
        if (event.target.id == this.modalId) {
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
            left: (AXUtil.clientWidth() - (modalWidth * 0.8)) / 2,
            top: (AXUtil.clientHeight() - (modalHeight * 0.8)) / 2,
            width: (modalWidth * 0.8),
            height: (modalHeight * 0.8),
            opacity: 0
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
    reposition: function () {
        var cfg = this.config;

        var clientWidth = AXUtil.clientWidth();
        var clientHeight = AXUtil.clientHeight();
        this.jQueryModal.css({width: clientWidth, height: clientHeight});

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
        backIn: function (p, n, f, d) {
            var c = f + d;
            var s = 1.70158;
            return c * (p /= 1) * p * ((s + 1) * p - s) + f;
        },
        backOut: function (p, n, f, d) {
            var c = f + d;
            var s = 1.70158;
            return c * ((p = p / 1 - 1) * p * ((s + 1) * p + s) + 1) + f;
        },
        backInOut: function (p, n, f, d) {
            var c = f + d;
            var s = 1.70158;
            if ((p /= 0.5) < 1) return c / 2 * (p * p * (((s *= (1.525)) + 1) * p - s)) + f; else return c / 2 * ((p -= 2) * p * (((s *= (1.525)) + 1) * p + s) + 2) + f;
        },
        bounceIn: function (p, n, f, d) {
            var c = f + d;
            var inv = this.bounceOut(1 - p, 1, 0, d);
            return c - inv + f;
        },
        bounceOut: function (p, n, f, d) {
            var c = f + d;
            if (p < (1 / 2.75)) return c * (7.5625 * p * p) + f; else if (p < (2 / 2.75)) return c * (7.5625 * (p -= (1.5 / 2.75)) * p + .75) + f; else if (p < (2.5 / 2.75)) return c * (7.5625 * (p -= (2.25 / 2.75)) * p + .9375) + f; else return c * (7.5625 * (p -= (2.625 / 2.75)) * p + .984375) + f;
        },
        circIn: function (p, n, f, d) {
            var c = f + d;
            return -c * (Math.sqrt(1 - (p /= 1) * p) - 1) + f;
        },
        circOut: function (p, n, f, d) {
            var c = f + d;
            return c * Math.sqrt(1 - (p = p / 1 - 1) * p) + f;
        },
        circInOut: function (p, n, f, d) {
            var c = f + d;
            if ((p /= 0.5) < 1) return -c / 2 * (Math.sqrt(1 - p * p) - 1) + f; else return c / 2 * (Math.sqrt(1 - (p -= 2) * p) + 1) + f;
        },
        cubicIn: function (p, n, f, d) {
            var c = f + d;
            return c * (p /= 1) * p * p + f;
        },
        cubicOut: function (p, n, f, d) {
            var c = f + d;
            return c * ((p = p / 1 - 1) * p * p + 1) + f;
        },
        cubicInOut: function (p, n, f, d) {
            var c = f + d;
            if ((p /= 0.5) < 1) return c / 2 * p * p * p + f; else return c / 2 * ((p -= 2) * p * p + 2) + f;
        },
        elasticIn: function (p, n, f, d) {
            var c = f + d;
            if (p == 0) return f;
            if (p == 1) return c;
            var peroid = 0.25;
            var s;
            var amplitude = c;
            if (amplitude < Math.abs(c)) {
                amplitude = c;
                s = peroid / 4;
            } else {
                s = peroid / (2 * Math.PI) * Math.asin(c / amplitude);
            }
            return -(amplitude * Math.pow(2, 10 * (p -= 1)) * Math.sin((p * 1 - s) * (2 * Math.PI) / peroid)) + f;
        },
        elasticOut: function (p, n, f, d) {
            var c = f + d;
            if (p == 0) return f;
            if (p == 1) return c;
            var peroid = 0.25;
            var s;
            var amplitude = c;
            if (amplitude < Math.abs(c)) {
                amplitude = c;
                s = peroid / 4;
            } else {
                s = peroid / (2 * Math.PI) * Math.asin(c / amplitude);
            }
            return -(amplitude * Math.pow(2, -10 * p) * Math.sin((p * 1 - s) * (2 * Math.PI) / peroid)) + c;
        },
        expoIn: function (p, n, f, d) {
            var c = f + d;
            return (p == 0) ? f : c * Math.pow(2, 10 * (p - 1)) + f - c * 0.001;
        },
        expoOut: function (p, n, f, d) {
            var c = f + d;
            return (p == 1) ? c : d * 1.001 * (-Math.pow(2, -10 * p) + 1) + f;
        },
        expoInOut: function (p, n, f, d) {
            var c = f + d;
            if (p == 0) return f;
            if (p == 1) return c;
            if ((p /= 0.5) < 1) return c / 2 * Math.pow(2, 10 * (p - 1)) + f - c * 0.0005; else return c / 2 * 1.0005 * (-Math.pow(2, -10 * --p) + 2) + f;
        },
        quadIn: function (p, n, f, d) {
            var c = f + d;
            return c * (p /= 1) * p + f;
        },
        quadOut: function (p, n, f, d) {
            var c = f + d;
            return -c * (p /= 1) * (p - 2) + f;
        },
        quadInOut: function (p, n, f, d) {
            var c = f + d;
            if ((p /= 0.5) < 1) return c / 2 * p * p + f; else return -c / 2 * ((--p) * (p - 2) - 1) + f;
        },
        quartIn: function (p, n, f, d) {
            var c = f + d;
            return c * (p /= 1) * p * p * p + f;
        },
        quartOut: function (p, n, f, d) {
            var c = f + d;
            return -c * ((p = p / 1 - 1) * p * p * p - 1) + f;
        },
        quartInOut: function (p, n, f, d) {
            var c = f + d;
            if ((p /= 0.5) < 1) return c / 2 * p * p * p * p + f; else return -c / 2 * ((p -= 2) * p * p * p - 2) + f;
        },
        quintIn: function (p, n, f, d) {
            var c = f + d;
            return c * (p /= 1) * p * p * p * p + f;
        },
        quintOut: function (p, n, f, d) {
            var c = f + d;
            return c * ((p = p / 1 - 1) * p * p * p * p + 1) + f;
        },
        quintInOut: function (p, n, f, d) {
            var c = f + d;
            if ((p /= 0.5) < 1) return c / 2 * p * p * p * p * p + f; else return c / 2 * ((p -= 2) * p * p * p * p + 2) + f;
        },
        sineIn: function (p, n, f, d) {
            var c = f + d;
            return -c * Math.cos(p * (Math.PI / 2)) + c + f;
        },
        sineOut: function (p, n, f, d) {
            var c = f + d;
            return c * Math.sin(p * (Math.PI / 2)) + f;
        },
        sineInOut: function (p, n, f, d) {
            var c = f + d;
            return -c / 2 * (Math.cos(Math.PI * p) - 1) + f;
        }
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
        if (fn == null) {
            fn = data;
            data = null;
        }
        return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
    };
    if (rkeyEvent.test(name)) {
        axdom.event.fixHooks[name] = axdom.event.keyHooks;
    }
    if (rmouseEvent.test(name)) {
        axdom.event.fixHooks[name] = axdom.event.mouseHooks;
    }
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

            if (val == null) {
                if (this.nodeName.lcase() == "select") val = "";
            }

            return val == null ?
                null :
                axdom.isArray(val) ?
                    axdom.map(val, function (val, i) {
                        return {id: elem.id, name: elem.name, type: elem.type, value: val.replace(__rCRLF, "\r\n"), label: label};
                    }) :
                {id: elem.id, name: elem.name, type: elem.type, value: val.replace(__rCRLF, "\r\n"), label: label};

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
    if (typeof pos == "undefined") {
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
    } else if (input.selectionStart) {
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
axdom.fn.onwheel = function (handler, callBackFn) {
    axf.each(this, function () {
        if (typeof axf._customerEvents == "undefined") axf._customerEvents = {};
        axf._customerEvents[this.id + "_AX_" + handler] = callBackFn;
        if (document.attachEvent) {
            this.attachEvent("on" + axf.mousewheelevt, axf._customerEvents[this.id + "_AX_" + handler]);
        } else if (document.addEventListener) {
            this.addEventListener(axf.mousewheelevt, axf._customerEvents[this.id + "_AX_" + handler], false);
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
axdom.fn.offwheel = function (handler) {
    axf.each(this, function () {
        if (document.attachEvent) {
            this.detachEvent("on" + axf.mousewheelevt, axf._customerEvents[this.id + "_AX_" + handler]);
        } else if (document.addEventListener) {
            this.removeEventListener(axf.mousewheelevt, axf._customerEvents[this.id + "_AX_" + handler], false);
        }
    });
    return this;
};

/*
 input type=text, textarea가 일부 브라우저에서 포커스 되지 않는 현상해결 해주는 구문
 */
axdom(document.body).ready(function () {
    axdom("input[type=text]").bind("mousedown", function () {
        this.focus();
    });
    axdom("textarea").bind("mousedown", function () {
        this.focus();
    });
});
/* ---------------------------- */
var AXInputConverter = Class.create(AXJ, {
    initialize: function (AXJ_super) {
        AXJ_super();
        this.objects = [];
        this.inputTypes = [
            {type: "search"}, {type: "number"}, {type: "money"}, {type: "slider"}, {type: "twinSlider"},
            {type: "selector"}, {type: "switch"}, {type: "segment"},
            {type: "date"}, {type: "dateTime"}, {type: "twinDate"}, {type: "twinDateTime"},
            {type: "checked"}, {type: "pattern"}
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
            optionData: (AXConfig.AXSelect && AXConfig.AXSelect.keyOptionData) || "optionData",
            optionDesc: (AXConfig.AXSelect && AXConfig.AXSelect.keyOptionDesc) || "optionDesc"
        };
    },
    init: function () {
        axdom(window).resize(this.alignAllAnchor.bind(this));

        // 예약어 초기화
        this.config.reserveKeys = {
            options: (AXConfig.AXInput && AXConfig.AXInput.keyOptions) || "options",
            optionValue: (AXConfig.AXInput && AXConfig.AXInput.keyOptionValue) || "optionValue",
            optionText: (AXConfig.AXInput && AXConfig.AXInput.keyOptionText) || "optionText",
            optionDesc: (AXConfig.AXSelect && AXConfig.AXSelect.keyOptionDesc) || "optionDesc"
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
    windowResizeApply: function () {
        // 사용안함
        if (this.windowResizeObserver) clearTimeout(this.windowResizeObserver);
        this.alignAllAnchor();
    },
    alignAllAnchor: function () {
        for (var i = 0; i < this.objects.length; i++) {
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
        }
        else {
            var _self = this.objects[findIndex];
            axf.each(configs, function (k, v) {
                _self.config[k] = v;
            });
        }
    },
    bind: function (obj) {
        var cfg = this.config;
        if (!AXgetId(obj.id)) {
            trace("bind 대상이 없어 bind 처리할 수 없습니다.");
            return;
        }

        if (obj.reserveKeys) cfg.reserveKeys = jQuery.extend(cfg.reserveKeys, obj.reserveKeys, true);
        var objID = obj.id;
        var objSeq = null;

        axf.each(this.objects, function (idx, O) {
            //if (this.id == objID && this.isDel == true) objSeq = idx;
            if (this.id == objID) {
                objSeq = idx;
                return false;
            }
        });

        if (typeof obj.href === "undefined") obj.href = cfg.href;

        if (objSeq == null) {
            objSeq = this.objects.length;
            this.objects.push({
                id: objID,
                anchorID: cfg.targetID + "_AX_" + objID,
                config: obj,
                bindType: obj.bindType
            });
        }
        else {
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
        }
        else if (obj.bindType == "search") {
            this.bindSearch(objID, objSeq);
        }
        else if (obj.bindType == "number") {
            this.bindNumber(objID, objSeq);
        }
        else if (obj.bindType == "money") {
            this.bindMoney(objID, objSeq);
        }
        else if (obj.bindType == "selector") {
            this.bindSelector(objID, objSeq);
        }
        else if (obj.bindType == "slider") {
            this.bindSlider(objID, objSeq);
        }
        else if (obj.bindType == "twinSlider") {
            this.bindTwinSlider(objID, objSeq);
        }
        else if (obj.bindType == "switch") {
            this.bindSwitch(objID, objSeq);
        }
        else if (obj.bindType == "segment") {
            this.bindSegment(objID, objSeq);
        }
        else if (obj.bindType == "date") {
            this.bindDate(objID, objSeq);
        }
        else if (obj.bindType == "twinDate") {
            this.bindTwinDate(objID, objSeq);
        }
        else if (obj.bindType == "twinDateTime") {
            this.bindTwinDate(objID, objSeq, "time");
        }
        else if (obj.bindType == "checked") {
            this.bindChecked(objID, objSeq);
        }
        else if (obj.bindType == "pattern") {
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
            }
            else {
                if (O.isDel != true) {
                    removeAnchorId = this.anchorID;
                    removeIdx = idx;
                }
            }
        });

        var objID = obj.id;
        var obj = this.objects[removeIdx];
        if (obj) {
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
    bindInputDisabled: function (objID, _disabled) {
        var findIndex = null;
        for (var O, index = 0; (index < this.objects.length && (O = this.objects[index])); index++) {
            if (O.id == objID && O.isDel != true) {
                findIndex = index;
                break;
            }
        }
        ;

        if (findIndex == null) {
            //trace("바인드 된 오브젝트를 찾을 수 없습니다.");
            return;
        }
        else {
            var obj = this.objects[findIndex];
            var cfg = this.config;

            var elDisabled = !axf.getId(objID).disabled;
            axf.getId(objID).disabled = (typeof _disabled == "boolean") ? _disabled : elDisabled;
            if (obj.bindType == "twinDate") {
                axf.getId(obj.config.startTargetID).disabled = (typeof _disabled == "boolean") ? _disabled : elDisabled;
            }

            obj.bindAnchorTarget.data("disabled", axf.getId(objID).disabled);
            if (axf.getId(objID).disabled) {
                obj.bindAnchorTarget.addClass("disable");
                obj.bindAnchorTarget.attr("disable", "disable");
                obj.bindAnchorTarget.find("a").bind("mousedown.AXInputDisabled", function (e) {
                    //alert("block");
                    var event = window.event || e;
                    if (event.preventDefault) event.preventDefault();
                    if (event.stopPropagation) event.stopPropagation();
                    event.cancelBubble = true;
                    return false;
                });

            }
            else {
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
        h = (iobj.css("box-sizing") == "content-box") ? iobj.outerHeight() : iobj.height();

        var css = {left: l, top: t, width: w, height: 0};

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

        if (typeof objSeq == "undefined") {
            for (var i = 0; i < this.objects.length; i++) {
                if (this.objects[i].id == objID && !this.objects[i].isDel) {
                    objSeq = i;
                    break;
                }
            }
        }

        var obj = this.objects[objSeq];

        if (!AXgetId(objID)) return;
        /* 엘리먼트 존재 여부 확인 */

        if (!obj.bindTarget) {
            obj.bindTarget = axdom("#" + objID);
            obj.bindAnchorTarget = axdom("#" + cfg.targetID + "_AX_" + objID);
        }

        var iobjPosition = obj.bindTarget.position();
        var l = iobjPosition.left, t = iobjPosition.top;
        var w = obj.bindTarget.outerWidth();
        var h = obj.bindTarget.outerHeight();
        if (obj.bindTarget.css("display") == "none") {
            h = obj.bindAnchorTarget.data("height");
            var css = {width: w};
        }
        else {
            var css = {left: l, top: t, width: w, height: 0};
        }
        //trace(css);
        if (!obj.bindAnchorTarget) {
            obj.bindAnchorTarget = axdom("#" + cfg.targetID + "_AX_" + objID);
            obj.bindTarget = axdom("#" + objID);
        }
        if (obj.bindAnchorTarget) {
            obj.bindAnchorTarget.css(css);
            obj.bindAnchorTarget.data("height", h);
        }

        if (obj.bindType == "placeHolder") {

        }
        else if (obj.bindType == "search") {

        }
        else if (obj.bindType == "number") {
            var UPh = parseInt((h - 2) / 2) - 1;
            var DNh = parseInt((h - 2) / 2) - 2;
            var handleWidth = h - 2;
            if (handleWidth > 20) handleWidth = 20;
            axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_HandleContainer").css({width: handleWidth, height: h - 2});
            axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_increase").css({width: handleWidth, height: UPh});
            axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_decrease").css({
                top: (UPh + 1),
                width: handleWidth,
                height: DNh
            });
            //trace({top:(UPh+1), width:h, height:DNh});
        }
        else if (obj.bindType == "money") {

        }
        else if (obj.bindType == "selector") {
            h -= 2;
            axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_HandleContainer").css({width: h, height: h});
            axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_Handle").css({width: h, height: h});

            if (obj.config.finder) {
                axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_FinderContainer").css({right: h, width: h, height: h});
                axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_Finder").css({width: h, height: h});
            }
        }
        else if (obj.bindType == "slider") {

        }
        else if (obj.bindType == "twinSlider") {

        }
        else if (obj.bindType == "switch") {
            axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SwitchBox").css({width: w, height: h});
            axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SwitchDisplay").css({height: h, "line-height": h + "px"});
            axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SwitchHandle").css({height: h});
            obj.bindAnchorTarget.css({height: h});
        }
        else if (obj.bindType == "segment") {
            obj.bindAnchorTarget.css({
                height: h + "px",
                "position": "relative",
                display: "inline-block",
                left: "auto",
                top: "auto"
            });
            var borderTop = obj.bindAnchorTarget.find(".AXanchorSegmentHandle").css("border-top-width").number();
            var borderBot = obj.bindAnchorTarget.find(".AXanchorSegmentHandle").css("border-bottom-width").number();
            obj.bindAnchorTarget.find(".AXanchorSegmentHandle").css({
                height: (obj.bindAnchorTarget.innerHeight() - borderTop - borderBot) + "px",
                "line-height": (obj.bindAnchorTarget.innerHeight() - borderTop - borderBot) + "px"
            });
        }
        else if (obj.bindType == "date") {
            var handleWidth = h - 2;
            if (handleWidth > 20) handleWidth = 20;
            axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_dateHandle").css({width: h, height: h});
        }
        else if (obj.bindType == "twinDate") {
            var handleWidth = h - 2;
            if (handleWidth > 20) handleWidth = 20;
            axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_dateHandle").css({width: h, height: h});
        }
        else if (obj.bindType == "twinDateTime") {
            var handleWidth = h - 2;
            if (handleWidth > 20) handleWidth = 20;
            axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_dateHandle").css({width: h, height: h});
        }
        else if (obj.bindType == "checked") {

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
        }
        else {
            var obj = this.objects[objSeq];

            if (obj.bindType == "search") {
                //	this.bindSearch(objID, objSeq);
            }
            else if (obj.bindType == "number") {
                //	this.bindNumber(objID, objSeq);
            }
            else if (obj.bindType == "money") {
                //	this.bindMoney(objID, objSeq);
            }
            else if (obj.bindType == "selector") {
                this.bindSelectorSetValue(objID, objSeq, value);
            }
            else if (obj.bindType == "slider") {
                this.bindSliderSetValue(objID, objSeq, value);
            }
            else if (obj.bindType == "twinSlider") {
                this.bindTwinSliderSetValue(objID, objSeq, value);
            }
            else if (obj.bindType == "switch") {
                this.bindSwitchSetValue(objID, objSeq, value);
            }
            else if (obj.bindType == "segment") {
                this.bindSegmentSetValue(objID, objSeq, value);
            }
            else if (obj.bindType == "date") {
                //	this.bindDate(objID, objSeq);
            }
            else if (obj.bindType == "twinDate") {
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
        }
        else {
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
        }
        else {
            //if(AXgetId(cfg.targetID+"_AX_"+objID).style.display == "none") axdom("#"+cfg.targetID+"_AX_"+objID).fadeIn();
            axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_Search").show();
            axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_PlaceHolder").hide();
        }
    },

    // number
    bindNumber: function (objID, objSeq) {
        var cfg = this.config;
        var obj = this.objects[objSeq];

        if (!obj.bindAnchorTarget) obj.bindAnchorTarget = axdom("#" + cfg.targetID + "_AX_" + objID);
        if (!obj.bindTarget) obj.bindTarget = axdom("#" + objID);

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
        obj.bindTarget.unbind("blur.AXInput").bind("blur.AXInput", function (event) {
            bindNumberCheck(objID, objSeq, event);
        });
    },
    bindNumberAdd: function (objID, adder, objSeq) {
        var obj = this.objects[objSeq];
        if (obj.bindAnchorTarget.attr("disable") == "disable" || obj.bindTarget.attr("disable") == "disable") {
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
        }
        else {
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
        if (obj.bindAnchorTarget.attr("disable") == "disable" || obj.bindTarget.attr("disable") == "disable") {
            return false;
        }
        if (this.numbercheck_obs) clearTimeout(this.numbercheck_obs);
        this.numbercheck_obs = setTimeout(function () {
            var maxval = obj.config.max;
            var minval = obj.config.min;
            var nval;
            if (obj.bindTarget.val() == "") {
                if (minval != undefined && minval != null) {
                    nval = minval;
                }
                else {
                    nval = obj.bindTarget.val().number();
                }
            }
            else {
                nval = obj.bindTarget.val().number();
            }

            if (maxval != undefined && maxval != null) {
                if ((nval) > maxval) {
                    obj.bindTarget.val("");
                    try {
                        this.msgAlert("설정된 최대값을 넘어서는 입력입니다.");
                    } catch (e) {
                    }
                }
                else {
                    if (minval != undefined && minval != null) {
                        if ((nval) < minval) {
                            obj.bindTarget.val("");
                            try {
                                this.msgAlert("설정된 최소값보다 작은 입력입니다.");
                            } catch (e) {
                            }
                        }
                        else {
                            obj.bindTarget.val(nval);
                        }
                    }
                }
            }
            else {
                if (minval != undefined && minval != null) {
                    if ((nval) < minval) {
                        obj.bindTarget.val("");
                        try {
                            this.msgAlert("설정된 최소값보다 작은 입력입니다.");
                        } catch (e) {
                        }
                    }
                }
                else {
                    obj.bindTarget.val(nval);
                }
            }
            obj.bindTarget.trigger("change");

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
        obj.bindTarget.css({"text-align": "right"});
        var bindMoneyCheck = this.bindMoneyCheck.bind(this);
        var val = obj.bindTarget.val().trim();
        if (val != "") val = obj.bindTarget.val().number().money();
        obj.bindTarget.val(val);

        obj.bindTarget.unbind("keydown.AXInput").bind("keydown.AXInput", function (event) {
            if ((event.ctrlKey || event.metaKey)) {
                obj.bindTarget.data("ctrlKey", "T");
            }
            else {
                obj.bindTarget.data("ctrlKey", "F");
            }
        });
        obj.bindTarget.unbind("keyup.AXInput").bind("keyup.AXInput", function (event) {
            var elem = obj.bindTarget.get(0);

            if (elem.type != "number") {
                event = window.event || event;

                // ignore tab & shift key 스킵 & ctrl
                if (
                    (!event.keyCode || event.keyCode == 9 || event.keyCode == 16 || event.keyCode == 17) ||
                    ((obj.bindTarget.data("ctrlKey") == "T") && (event.keyCode == 65 || event.keyCode == 91))
                ) {
                    jQuery.removeData(obj.bindTarget.get(0), "focusPosition");
                }
                else {
                    var elemFocusPosition;
                    if ('selectionStart' in elem) {
                        // Standard-compliant browsers
                        elemFocusPosition = elem.selectionStart;
                    }
                    else if (document.selection) {
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
                    }
                    else if (event.keyCode == AXUtil.Event.KEY_DELETE || event.keyCode == AXUtil.Event.KEY_BACKSPACE) {
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
        if (obj.bindAnchorTarget.attr("disable") == "disable" || obj.bindTarget.attr("disable") == "disable") {
            return false;
        }
        if (!obj.config.onChange) obj.config.onChange = obj.config.onchange;

        if (obj.bindTarget.val() == "") {
            if (minval != undefined && minval != null) {
                nval = minval;
            }
            else {
                nval = "";
            }
        }
        else {
            if (obj.bindTarget.val() != "-") {
                nval = obj.bindTarget.val().number();
            }
            else {
                nval = "";
            }
        }
        if (maxval != undefined && maxval != null) {
            if ((nval) > maxval) {
                obj.bindTarget.val(maxval.money());
                try {
                    if (eventType == "change") this.msgAlert("설정된 최대값{" + maxval.number().money() + "} 을 넘어서는 입력입니다.");
                } catch (e) {
                }
            }
            else {
                if (minval != undefined && minval != null) {
                    if ((nval) < minval) {
                        obj.bindTarget.val(minval.money());
                        try {
                            if (eventType == "change") this.msgAlert("설정된 최소값{" + minval.number().money() + "}보다 작은 입력입니다.");
                        } catch (e) {
                        }
                    }
                    else {
                        obj.bindTarget.val(nval.money());
                    }
                }
                else {
                    obj.bindTarget.val(nval.money());
                }
            }
        }
        else {
            if (minval != undefined && minval != null) {
                if ((nval) < minval) {
                    obj.bindTarget.val(minval.money());
                    try {
                        if (eventType == "change") this.msgAlert("설정된 최소값{" + minval.number().money() + "}보다 작은 입력입니다.");
                    } catch (e) {
                    }
                }
                else {
                    if (nval != "" && nval != "-") obj.bindTarget.val(nval.money());
                }
            }
            else {
                if (nval != "" && nval != "-") obj.bindTarget.val(nval.money());
            }
        }
        obj.bindTarget.trigger("change");

        if (!axf.isEmpty(obj.bindTarget.data("focusPosition"))) {
            obj.bindTarget.setCaret(obj.bindTarget.data("focusPosition").number() + ( obj.bindTarget.val().length - obj.bindTarget.data("prevLen") ));
        }

        if (obj.config.onChange) {
            obj.config.onChange.call({objID: objID, objSeq: objSeq, value: obj.bindTarget.val().number()});
        }

        if (eventType == "change") {
            if (obj.bindTarget.val() == "-") obj.bindTarget.val('');
        }
    },

    // selector
    bindSelector: function (objID, objSeq) {
        var _this = this;
        var cfg = this.config;
        var obj = this.objects[objSeq];

        if (!obj.config.onChange) obj.config.onChange = obj.config.onchange;

        if (!obj.bindAnchorTarget) obj.bindAnchorTarget = axdom("#" + cfg.targetID + "_AX_" + objID);
        if (!obj.bindTarget) obj.bindTarget = axdom("#" + objID);

        obj.bindTarget.data("val", obj.bindTarget.val());

        var reserveKeys = jQuery.extend({}, cfg.reserveKeys);
        if (typeof obj.config.reserveKeys == "undefined") obj.config.reserveKeys = {};
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
                //axdom("#" + objID).focus();
                bindSelectorExpand(objID, objSeq, true, event);
            }
            else {
                bindSelectorClose(objID, objSeq, event);
            }
        });
        obj.bindTarget.unbind("focus.AXInput").bind("focus.AXInput", function (event) {
            if (obj.bindAnchorTarget.attr("disable") == "disable" || obj.bindTarget.attr("disable") == "disable") {
                return false;
            }
            try {
                this.select();
            } catch (e) {
            }
            if (!AXgetId(cfg.targetID + "_AX_" + objID + "_AX_expandBox")) {
                //bindSelectorExpand(objID, objSeq, false, event);
            }
        });

        obj.bindTarget.unbind("keydown.AXInputCheck").bind("keydown.AXInputCheck", function (event) {
            if (obj.bindAnchorTarget.attr("disable") == "disable" || obj.bindTarget.attr("disable") == "disable") {
                return false;
            }

            if (event.which == axf.Event.KEY_UP || event.which == axf.Event.KEY_DOWN) {
                if (!AXgetId(cfg.targetID + "_AX_" + objID + "_AX_expandBox")) {
                    bindSelectorExpand(objID, objSeq, false, event);
                }
                _this.stopEvent(event);
                return false;
            }
            else if (event.which == axf.Event.KEY_RETURN || event.which == axf.Event.KEY_TAB) {

            }
            else {
                if (!AXgetId(cfg.targetID + "_AX_" + objID + "_AX_expandBox")) {
                    bindSelectorExpand(objID, objSeq, false, event);
                }
            }
        });

        if (obj.config.finder) {
            if (obj.config.finder.onclick) {
                axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_Finder").unbind("click.AXInput").bind("click.AXInput", function (event) {
                    if (obj.bindAnchorTarget.attr("disable") == "disable" || obj.bindTarget.attr("disable") == "disable") {
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
        if (obj.bindAnchorTarget.attr("disable") == "disable" || obj.bindTarget.attr("disable") == "disable") {
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
            expandBox.css({"position": "fixed"});
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

        this.opendExpandBox = {objID: objID, objSeq: objSeq};

        //_AX_expandBox set options
        //trace(obj.config.ajaxUrl);
        if (obj.config.onsearch) {
            this.bindSelectorKeyupChargingUp(objID, objSeq, event);
        }
        else if (obj.config.ajaxUrl) {
            // AJAX호출
            this.bindSelectorKeyupChargingUp(objID, objSeq, event);
        }
        else {
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
        if (!obj.bindTarget) obj.bindTarget = axdom("#" + objID);

        if (obj.inProgress) AXReqAbort(); // AJAX 호출 중지 하기

        if (obj.bindAnchorTarget.attr("disable") == "disable" || obj.bindTarget.attr("disable") == "disable") {
            return false;
        }

        if (AXgetId(cfg.targetID + "_AX_" + objID + "_AX_expandBox")) {

            axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox").remove(); // 개체 삭제 처리
            axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_Handle").removeClass("on");

            //비활성 처리후 메소드 종료

            axdom(document).unbind("click.AXInput");
            obj.bindTarget.unbind("keydown.AXInput");
            obj.bindTarget.unbind("change.AXInput");

            if (obj.bindTarget.data("val") == obj.bindTarget.val().enc() && !obj.config.isSelectorClick) {
                //return obj.bindTarget.val();
            }

            if (obj.config.isChangedSelect) {

                var myVal = "";
                if (obj.config.selectedObject) {
                    myVal = obj.config.selectedObject[reserveKeys.optionText];
                }

                if (obj.config.appendable) {
                    //trace(myVal);
                    if (myVal != "") axdom("#" + objID).val(myVal);
                }
                else {
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
                if (originChangeCall) obj.bindTarget.change();
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
            O.optionDesc = (O[reserveKeys.optionDesc] ? O[reserveKeys.optionDesc].dec() : "");

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
        expandBox.css({height: expandScrollHeight + "px"});

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
            expandBox.css({top: offset.top - expandBox.outerHeight()});
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
                }
                else {
                    return false;
                }
            }
        });
        var isSelectorClick = (myTarget) ? true : false;
        if (!isSelectorClick) {
            this.bindSelectorClose(objID, objSeq, event); // 셀럭터 외의 영역이 므로 닫기
        }
        else {
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
            this.stopEvent(event);
            return;
        }

        if (event.keyCode == AXUtil.Event.KEY_UP) {
            if (!obj.config.options) return;
            if (obj.config.options.length == 0) return;
            var focusIndex = obj.config.options.length - 1;
            if (obj.config.focusedIndex == undefined || obj.config.focusedIndex == 0) {
                //trace(obj.config.selectedIndex+"//"+focusIndex);
            }
            else {
                focusIndex = (obj.config.focusedIndex) - 1;
                //trace(obj.config.selectedIndex+"//"+focusIndex);
            }
            this.bindSelectorSelect(objID, objSeq, focusIndex);
            this.stopEvent(event);
        }
        else if (event.keyCode == AXUtil.Event.KEY_DOWN) {
            if (!obj.config.options) return;
            if (obj.config.options.length == 0) return;
            var focusIndex = 0;
            if (obj.config.focusedIndex == undefined || obj.config.focusedIndex == obj.config.options.length - 1) {
                //trace(obj.config.selectedIndex+"//"+focusIndex);
            }
            else {
                focusIndex = (obj.config.focusedIndex).number() + 1;
                //trace(obj.config.selectedIndex+"//"+focusIndex);
            }
            this.bindSelectorSelect(objID, objSeq, focusIndex);
            this.stopEvent(event);
        }
        else if (event.keyCode == AXUtil.Event.KEY_RETURN) {

            if (obj.config.focusedIndex == null) {
                /*axdom("#" + objID).blur();*/
                _this.bindSelectorClose(objID, objSeq, event); // 닫기
            }
            else {
                //trace(obj.config.focusedIndex);
                obj.config.selectedObject = obj.config.options[obj.config.focusedIndex];
                obj.config.selectedIndex = obj.config.focusedIndex;
                obj.config.isChangedSelect = true;
                axdom("#" + objID).val(obj.config.selectedObject[reserveKeys.optionText]);
                /*axdom("#" + objID).blur();*/
                _this.bindSelectorClose(objID, objSeq, event, "bindTarget_onchange"); // 닫기
            }
            this.stopEvent(event);
        }
        else {
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
        https://github.com/axisj/axisj/issues/781
            if (obj.config.onsearch) {

                var res = obj.config.onsearch.call(
                    {
                        id: objID,
                        value: objVal
                    },
                    objID,
                    objVal,
                    (function (res) {
                        obj.config.options = res.options;
                        obj.config.focusedIndex = null;
                        this.bindSelectorSetOptions(objID, objSeq);
                        this.bindSelectorSearch(objID, objSeq, objVal);
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
                    this.bindSelectorSearch(objID, objSeq, objVal);
                }

            }
            else if (obj.config.ajaxUrl) {
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

                var selectorName = obj.config.selectorName || axdom("#" + objID).attr("name");
                if (pars == "") {
                    pars = selectorName + "=" + (objVal || "").enc();
                }
                else if ((typeof pars).toLowerCase() == "string") {
                    pars += "&" + selectorName + "=" + objVal.enc();
                }
                else if ((typeof pars).toLowerCase() == "object") {
                    pars[selectorName] = objVal.enc();
                }

                var msgAlert = this.msgAlert.bind(this);
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

                            //obj.config.options = (res.options || []);
                            obj.config.options = (res[reserveKeys.options] || []);
                            obj.config.focusedIndex = null;

                            bindSelectorSetOptions(objID, objSeq);
                            bindSelectorSearch(objID, objSeq, objVal);

                            if (obj.inProgressReACT) {
                                bindSelectorKeyupChargingUp(objID, objSeq, event);
                            }
                        }
                        else {
                            msgAlert(res);
                        }
                        obj.inProgress = false;
                        obj.inProgressReACT = false;
                    }
                });
            }
            else {
                // 입력어로 bindSelectorSearch 실행하기

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
        }
        else {
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

        if (!obj.bindAnchorTarget) obj.bindAnchorTarget = axdom("#" + cfg.targetID + "_AX_" + objID);
        if (!obj.bindTarget) obj.bindTarget = axdom("#" + objID);

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
        po.push("		<a " + obj.config.href + " id=\"" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandle\" class=\"AXanchorSliderHandle\">&nbsp;</a>");
        po.push("	</div>");
        po.push("	<div class=\"AXanchorSliderMaxTitle\">" + obj.config.max.number().money() + obj.config.unit + "</div>");
        po.push("</div>");

        //append to anchor
        obj.bindAnchorTarget.append(po.join(''));
        //obj.bindAnchorTarget.css({ height: h + "px", "position": "relative", display: "inline-block", left: "auto", top: "auto" });
        obj.bindAnchorTarget.css({
            height: h + "px",
            "position": "relative",
            display: "inline-block",
            left: "auto",
            top: "auto"
        });
        //, background:"#eee"

        var maxTitleWidth = axdom("#" + cfg.targetID + "_AX_" + objID).find(".AXanchorSliderMaxTitle").outerWidth().number() + 10;
        var minTitleWidth = axdom("#" + cfg.targetID + "_AX_" + objID).find(".AXanchorSliderMinTitle").outerWidth().number() + 10;
        if (maxTitleWidth < 30) maxTitleWidth = 30;
        if (minTitleWidth < 30) minTitleWidth = 30;
        axdom("#" + cfg.targetID + "_AX_" + objID).find(".AXanchorSliderMinTitle").css({width: minTitleWidth + "px"});
        axdom("#" + cfg.targetID + "_AX_" + objID).find(".AXanchorSliderMaxTitle").css({width: maxTitleWidth + "px"});
        var sliderBarWidth = w - minTitleWidth - maxTitleWidth;
        obj.bindAnchorTarget.find(".AXanchorSliderBar").css({
            width: sliderBarWidth + "px",
            left: minTitleWidth + "px",
            top: h / 2 + 2
        });
        //------------------------------------
        axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleTitle").css({width: maxTitleWidth});
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
            obj.bindSliderTouchStart = function (event) {
                ontouchstart(objID, objSeq);
            }

            AXgetId(cfg.targetID + "_AX_" + objID + "_AX_SliderHandle").addEventListener("touchstart", obj.bindSliderTouchStart, false);
        }

        obj.bindAnchorTarget.show();
        obj.bindTarget.hide();

    },
    bindSliderMouseDown: function (objID, objSeq) {
        var cfg = this.config;
        var obj = this.objects[objSeq];
        if (obj.bindAnchorTarget.attr("disable") == "disable" || obj.bindTarget.attr("disable") == "disable") {
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
        }
        else {
            objVal = (objVal.number() + obj.config.min.number()).round((snap.toString().length - 2));
            objVal = (parseFloat(objVal / (snap)) * (snap)).round((snap.toString().length - 2));
        }

        var rX = ((objVal - obj.config.min) * pixelWidth) / valueWidth;

        if (objVal < obj.config.min) {
            objVal = obj.config.min;
            rX = 0;
        }
        else if (objVal > obj.config.max) {
            objVal = obj.config.max;
            rX = pixelWidth;
        }
        if (rX > pixelWidth) rX = pixelWidth;

        var sX = rX - (obj.config._handleWidth / 2);
        var stX = rX - (obj.config._maxTitleWidth / 2);

        //trace({rX:rX, pixelWidth:pixelWidth, objVal:objVal, valueWidth:valueWidth});
        axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandle").css({left: sX});
        axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderInside").css({width: rX});
        axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleTitle").css({left: stX});
        axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleTitle").text(objVal.number().money() + obj.config.unit);
        axdom("#" + objID).val(objVal);
    },
    bindSliderMouseUp: function (objID, objSeq, event) {
        var cfg = this.config;
        var obj = this.objects[objSeq];
        var objVal = axdom("#" + objID).val();
        if (obj.config.onChange || obj.config.onchange) {
            var onchange = obj.config.onChange || obj.config.onchange;
            onchange.call({id: objID, value: objVal}, objID, objVal);
        }

        if (!obj.bindTarget) obj.bindTarget = axdom("#" + objID);
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
        }
        else {
            var objVal = axdom("#" + objID).val();
        }

        if (objVal.number() < obj.config.min.number()) objVal = obj.config.min;
        else if (objVal.number() > obj.config.max.number()) objVal = obj.config.max;
        var valueWidth = obj.config.max.number() - obj.config.min.number();
        var pixelWidth = obj.config._trackWidth;
        var pixelLeft = ((objVal - obj.config.min) * pixelWidth) / valueWidth;

        axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandle").css({left: pixelLeft - (obj.config._handleWidth / 2)});
        axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderInside").css({width: pixelLeft});
        axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleTitle").css({left: pixelLeft - (obj.config._maxTitleWidth / 2)});
        axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleTitle").text(objVal.number().money() + obj.config.unit);

        axdom("#" + objID).val(objVal);
    },
    sliderTouchStart: function (objID, objSeq) {
        //alert(objID+"_"+ objSeq);
        var cfg = this.config;
        var obj = this.objects[objSeq];
        if (obj.bindAnchorTarget.attr("disable") == "disable" || obj.bindTarget.attr("disable") == "disable") {
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
        }
        else if (objVal > obj.config.max) {
            objVal = obj.config.max;
            rX = pixelWidth;
        }
        if (rX > pixelWidth) rX = pixelWidth;

        var sX = rX - (obj.config._handleWidth / 2);
        var stX = rX - (obj.config._maxTitleWidth / 2);

        //trace({rX:rX, pixelWidth:pixelWidth, objVal:objVal, valueWidth:valueWidth});
        axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandle").css({left: sX});
        axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderInside").css({width: rX});
        axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleTitle").css({left: stX});
        axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleTitle").text(objVal.number().money() + obj.config.unit);
        axdom("#" + objID).val(objVal);
        if (obj.config.onChange) obj.config.onChange(objID, objVal);
        else if (obj.config.onchange) obj.config.onchange(objID, objVal);

        if (!obj.bindTarget) obj.bindTarget = axdom("#" + objID);
        obj.bindTarget.change();
    },
    sliderTouchEnd: function (objID, objSeq, event) {
        var cfg = this.config;
        var obj = this.objects[objSeq];
        var objVal = axdom("#" + objID).val();

        if (obj.config.onChange || obj.config.onchange) {
            var onchange = obj.config.onChange || obj.config.onchange;
            onchange.call({id: objID, value: objVal}, objID, objVal);
        }
        if (!obj.bindTarget) obj.bindTarget = axdom("#" + objID);
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
        var objVal = {min: 0, max: 0};
        if (objVals.length < 2) {
            objVal = {min: objVals[0], max: objVals[0]};
        }
        else {
            objVal = {min: objVals[0], max: objVals[1]};
        }
        return objVal;
    },
    bindTwinSlider: function (objID, objSeq) {
        var cfg = this.config;
        var obj = this.objects[objSeq];

        if (!obj.bindAnchorTarget) obj.bindAnchorTarget = axdom("#" + cfg.targetID + "_AX_" + objID);
        if (!obj.bindTarget) obj.bindTarget = axdom("#" + objID);

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
        po.push("		<a " + obj.config.href + " id=\"" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMin\" class=\"AXanchorSliderHandleMin\">&nbsp;</a>");
        po.push("		<a " + obj.config.href + " id=\"" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMax\" class=\"AXanchorSliderHandleMax\">&nbsp;</a>");
        po.push("	</div>");
        po.push("</div>");

        //append to anchor
        obj.bindAnchorTarget.append(po.join(''));
        obj.bindAnchorTarget.css({
            height: h + "px",
            "position": "relative",
            display: "inline-block",
            left: "auto",
            top: "auto"
        });
        //, background:"#eee"
        obj.bindAnchorTarget.show();
        obj.bindTarget.hide();

        var maxTitleWidth = obj.bindAnchorTarget.find(".AXanchorSliderMaxTitle").outerWidth().number() + 10;
        var minTitleWidth = obj.bindAnchorTarget.find(".AXanchorSliderMinTitle").outerWidth().number() + 10;
        obj.bindAnchorTarget.find(".AXanchorSliderMinTitle").css({width: minTitleWidth + "px"});
        obj.bindAnchorTarget.find(".AXanchorSliderMaxTitle").css({width: maxTitleWidth + "px"});
        var sliderBarWidth = w - minTitleWidth - maxTitleWidth;
        obj.bindAnchorTarget.find(".AXanchorSliderBar").css({
            width: sliderBarWidth + "px",
            left: minTitleWidth + "px",
            top: h / 2 + 2
        });
        //------------------------------------
        axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMinTitle").css({width: maxTitleWidth});
        axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMaxTitle").css({width: maxTitleWidth});
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
            obj.bindTwinSliderTouchStartMin = function (event) {
                ontouchstart(objID, objSeq, "min");
            }
            obj.bindTwinSliderTouchStartMax = function (event) {
                ontouchstart(objID, objSeq, "max");
            }

            AXgetId(cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMin").addEventListener("touchstart", obj.bindTwinSliderTouchStartMin, false);
            AXgetId(cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMax").addEventListener("touchstart", obj.bindTwinSliderTouchStartMax, false);
        }

    },
    bindTwinSliderMouseDown: function (objID, objSeq, handleName) {
        var cfg = this.config;
        var obj = this.objects[objSeq];
        if (obj.bindAnchorTarget.attr("disable") == "disable" || obj.bindTarget.attr("disable") == "disable") {
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
        }
        else if (objVal > obj.config.max) {
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
            axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMin").css({left: sX});
            axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMinTitle").css({left: stX});
            axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMinTitle").text(objVal.number().money() + obj.config.unit);
            axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderInside").css({width: rX});
            axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderInside").css({
                left: obj.handleMinLeft,
                width: obj.handleMaxLeft - obj.handleMinLeft
            });
            //axdom("#"+objID).val(objVal);
            obj.vals.min = objVal;
        }
        else {
            if (objVal < obj.vals.min) {
                objVal = obj.vals.min;
                rX = obj.handleMinLeft;
            }
            var sX = rX;
            var stX = rX;
            obj.handleMaxLeft = rX;
            axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMax").css({left: sX});
            axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMaxTitle").css({left: stX});
            axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMaxTitle").text(objVal.number().money() + obj.config.unit);
            axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderInside").css({
                left: obj.handleMinLeft,
                width: obj.handleMaxLeft - obj.handleMinLeft
            });
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
            onchange.call({id: objID, value: objVal}, objID, objVal);
        }
        if (!obj.bindTarget) obj.bindTarget = axdom("#" + objID);
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
        }
        else {
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

        axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMin").css({left: pixelMinLeft - (obj.config._handleWidth)});
        axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMinTitle").css({left: pixelMinLeft - (obj.config._maxTitleWidth)});
        axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMinTitle").text(objVal.min.number().money() + obj.config.unit);

        axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMax").css({left: pixelMaxLeft});
        axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMaxTitle").css({left: pixelMaxLeft});
        axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMaxTitle").text(objVal.max.number().money() + obj.config.unit);

        obj.handleMinLeft = pixelMinLeft;
        obj.handleMaxLeft = pixelMaxLeft;
        axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderInside").css({
            left: pixelMinLeft,
            width: pixelMaxLeft - pixelMinLeft
        });

        axdom("#" + objID).val(obj.vals.min + separator + obj.vals.max);
    },
    // -- add touch event
    twinSliderTouchStart: function (objID, objSeq, handleName) {
        var cfg = this.config;
        var obj = this.objects[objSeq];
        if (obj.bindAnchorTarget.attr("disable") == "disable" || obj.bindTarget.attr("disable") == "disable") {
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
        }
        else if (objVal > obj.config.max) {
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
            axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMin").css({left: sX});
            axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMinTitle").css({left: stX});
            axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMinTitle").text(objVal.number().money() + obj.config.unit);
            axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderInside").css({width: rX});
            axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderInside").css({
                left: obj.handleMinLeft,
                width: obj.handleMaxLeft - obj.handleMinLeft
            });
            //axdom("#"+objID).val(objVal);
            obj.vals.min = objVal;
        }
        else {
            if (objVal < obj.vals.min) {
                objVal = obj.vals.min;
                rX = obj.handleMinLeft;
            }
            var sX = rX;
            var stX = rX;
            obj.handleMaxLeft = rX;
            axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMax").css({left: sX});
            axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMaxTitle").css({left: stX});
            axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMaxTitle").text(objVal.number().money() + obj.config.unit);
            axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderInside").css({
                left: obj.handleMinLeft,
                width: obj.handleMaxLeft - obj.handleMinLeft
            });
            //axdom("#"+objID).val(objVal);
            obj.vals.max = objVal;
        }
        var separator = obj.config.separator || "~";
        axdom("#" + objID).val(obj.vals.min + separator + obj.vals.max);
        if (obj.config.onChange) obj.config.onChange(objID, obj.vals.min + separator + obj.vals.max);
        else if (obj.config.onchange) obj.config.onchange(objID, obj.vals.min + separator + obj.vals.max);
        if (!obj.bindTarget) obj.bindTarget = axdom("#" + objID);
        obj.bindTarget.change();
    },
    twinSliderTouchEnd: function (objID, objSeq, event) {
        var cfg = this.config;
        var obj = this.objects[objSeq];

        var objVal = axdom("#" + objID).val();
        if (obj.config.onChange || obj.config.onchange) {
            var onchange = obj.config.onChange || obj.config.onchange;
            onchange.call({id: objID, value: objVal}, objID, objVal);
        }
        if (!obj.bindTarget) obj.bindTarget = axdom("#" + objID);
        obj.bindTarget.change();
        document.removeEventListener("touchmove", obj.bindTwinSliderTouchMove, false);
        document.removeEventListener("touchend", obj.bindTwinSliderTouchEnd, false);

        obj.config.isMoving = false;
    },

    // switch
    bindSwitch: function (objID, objSeq) {
        var cfg = this.config;
        var obj = this.objects[objSeq];

        if (!obj.bindAnchorTarget) obj.bindAnchorTarget = axdom("#" + cfg.targetID + "_AX_" + objID);
        if (!obj.bindTarget) obj.bindTarget = axdom("#" + objID);

        var w = obj.bindAnchorTarget.width();
        var h = obj.bindAnchorTarget.data("height");
        var objVal = obj.bindTarget.val();
        var switchValue = obj.config.on;
        if (objVal == switchValue) {
            obj.switchValue = "on";
        }
        else {
            switchValue = obj.config.off;
            obj.switchValue = "off";
        }
        obj.bindTarget.val(switchValue);

        var po = [];
        po.push("<div id=\"" + cfg.targetID + "_AX_" + objID + "_AX_SwitchBox\" class=\"" + cfg.anchorSwitchBoxClassName + "\" style=\"left:0px;top:0px;width:" + w + "px;height:" + h + "px;\">");
        po.push("<div id=\"" + cfg.targetID + "_AX_" + objID + "_AX_SwitchDisplay\" class=\"AXanchorSwitchDisplay\" style=\"height:" + h + "px;line-height:" + h + "px;\">" + switchValue + "</div>");
        po.push("<a " + obj.config.href + " id=\"" + cfg.targetID + "_AX_" + objID + "_AX_SwitchHandle\" class=\"AXanchorSwitchHandle\" style=\"height:" + h + "px;\">&nbsp;</a>");
        po.push("</div>");

        //append to anchor
        obj.bindAnchorTarget.append(po.join(''));
        obj.bindAnchorTarget.css({
            height: h + "px",
            "position": "relative",
            display: "inline-block",
            left: "auto",
            top: "auto"
        });

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

        if (obj.bindAnchorTarget.attr("disable") == "disable" || obj.bindTarget.attr("disable") == "disable") {
            return false;
        }

        if (obj.switchValue == "on") {
            axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SwitchBox").removeClass("on");
            obj.switchValue = "off";
            axdom("#" + objID).val(obj.config.off);
            axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SwitchDisplay").html(obj.config.off);
        }
        else {
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
        if (!obj.bindTarget) obj.bindTarget = axdom("#" + objID);
        obj.bindTarget.change();
    },
    bindSwitchSetValue: function (objID, objSeq, value) {
        var cfg = this.config;
        var obj = this.objects[objSeq];

        var objVal = value;
        var switchValue = obj.config.on;
        if (objVal == switchValue) {
            obj.switchValue = "on";
        }
        else {
            switchValue = obj.config.off;
            obj.switchValue = "off";
        }
        axdom("#" + objID).val(switchValue);

        if (obj.switchValue == "off") {
            axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SwitchBox").removeClass("on");
            obj.switchValue = "off";
            axdom("#" + objID).val(obj.config.off);
            axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SwitchDisplay").html(obj.config.off);
        }
        else {
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
        if (!obj.bindTarget) obj.bindTarget = axdom("#" + objID);
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

        if (!obj.bindAnchorTarget) obj.bindAnchorTarget = axdom("#" + cfg.targetID + "_AX_" + objID);
        if (!obj.bindTarget) obj.bindTarget = axdom("#" + objID);

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
        obj.bindAnchorTarget.css({
            height: h + "px",
            "position": "relative",
            display: "inline-block",
            left: "auto",
            top: "auto"
        });
        var borderTop = obj.bindAnchorTarget.find(".AXanchorSegmentHandle").css("border-top-width").number();
        var borderBot = obj.bindAnchorTarget.find(".AXanchorSegmentHandle").css("border-bottom-width").number();
        obj.bindAnchorTarget.find(".AXanchorSegmentHandle").css({
            height: (obj.bindAnchorTarget.innerHeight() - borderTop - borderBot) + "px",
            "line-height": (obj.bindAnchorTarget.innerHeight() - borderTop - borderBot) + "px"
        });

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

        if (obj.bindAnchorTarget.attr("disable") == "disable" || obj.bindTarget.attr("disable") == "disable") {
            return false;
        }

        var segmentOptions = obj.config.options;

        var myTarget = axf.get_event_target(event.target, {tagname: "a", clazz: "AXanchorSegmentHandle"});
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
            if (!obj.bindTarget) obj.bindTarget = axdom("#" + objID);
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
        if (!obj.bindTarget) obj.bindTarget = axdom("#" + objID);
        obj.bindTarget.change();
    },

    // date
    bindDate: function (objID, objSeq) {
        var cfg = this.config;
        var obj = this.objects[objSeq];

        if (!obj.bindAnchorTarget) obj.bindAnchorTarget = axdom("#" + cfg.targetID + "_AX_" + objID);
        if (!obj.bindTarget) obj.bindTarget = axdom("#" + objID);

        var h = obj.bindAnchorTarget.data("height");
        var po = [];
        po.push("<a " + obj.config.href + " id=\"" + cfg.targetID + "_AX_" + objID + "_AX_dateHandle\" class=\"" + cfg.anchorDateHandleClassName + "\"" +
            " style=\"right:0px;top:0px;width:" + h + "px;height:" + h + "px;\">&nbsp;</a>");
        obj.bindAnchorTarget.append(po.join(''));
        obj.bindAnchorTarget.show();

        var bindDateExpand = this.bindDateExpand.bind(this);
        var bindDateExpandClose = this.bindDateExpandClose.bind(this);
        axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_dateHandle").unbind("click.AXInput").bind("click.AXInput", function (event) {
            if (AXgetId(cfg.targetID + "_AX_" + objID + "_AX_expandBox")) {
                bindDateExpandClose(objID, objSeq, event);
            }
            else {
                var isReadOnly = obj.bindTarget.attr("readonly");
                var isDisabled = obj.bindTarget.attr("disabled");
                if (isReadOnly) isReadOnly = (isReadOnly.lcase() == "true") || (isReadOnly.lcase() == "readonly");
                if (isDisabled) isDisabled = (isDisabled.lcase() == "true") || (isDisabled.lcase() == "disabled");
                if (!isReadOnly && !isDisabled) bindDateExpand(objID, objSeq, true, event);
            }
        });
        obj.bindTarget.unbind("focus.AXInput").bind("focus.AXInput", function (event) {
            setTimeout(function () {
                obj.bindTarget.select();
            }, 1);
        });

        var separator = obj.config.separator || AXConfig.AXInput.dateSeparator || "-";

        obj.bindTarget.unbind("keydown.AXInput").bind("keydown.AXInput", function (event) {
            var _this = this;
            setTimeout(function () {
                if (event.keyCode == axf.Event.KEY_RETURN) {
                    //bindDateInputBlur(objID, objSeq, event);
                    _this.blur();
                }
                else if (event.keyCode != AXUtil.Event.KEY_BACKSPACE && event.keyCode != AXUtil.Event.KEY_DELETE && event.keyCode != AXUtil.Event.KEY_LEFT && event.keyCode != AXUtil.Event.KEY_RIGHT) {
                    var va = _this.value.replace(/\D/gi, ""); //숫자 이외의 문자를 제거 합니다.
                    if (obj.config.selectType == "y") {
                        if (va.length > 4) _this.value = va.left(4);
                    }
                    else if (obj.config.selectType == "m") {
                        if (va.length == 4) {
                            va = va + separator;
                            _this.value = va;
                        }
                        else if (va.length > 4) {
                            va = va.substr(0, 4) + separator + va.substr(4, 2);
                            _this.value = va;
                        }
                    }
                    else {
                        if (va.length < 4) {
                            _this.value = va;
                        }
                        else if (va.length == 4) {
                            va = va + separator;
                            _this.value = va;
                        }
                        else if (va.length <= 6) {
                            va = va.substr(0, 4) + separator + va.substr(4, 2) + separator;
                            _this.value = va;
                        }
                        else if (va.length <= 8) {
                            va = va.substr(0, 4) + separator + va.substr(4, 2) + separator + va.substr(6, 2);
                            if (obj.config.expandTime) va += " ";
                            _this.value = va;
                        }
                        else {
                            if (obj.config.expandTime) {
                                if (va.length <= 10) {
                                    va = va.substr(0, 4) + separator + va.substr(4, 2) + separator + va.substr(6, 2) + " " + va.substr(8, 2) + ":";
                                    _this.value = va;
                                }
                                else if (va.length > 12) {
                                    va = va.substr(0, 4) + separator + va.substr(4, 2) + separator + va.substr(6, 2) + " " + va.substr(8, 2) + ":" + va.substr(10, 2);
                                    _this.value = va;
                                }
                            }
                            else {
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
        if (obj.config.expand === true) {
            bindDateExpand(objID, objSeq, true, event);
            setTimeout(function () {
                obj.bindTarget.focus();
            }, 100);
        }
    },
    bindDateExpand: function (objID, objSeq, isToggle, event) {
        var cfg = this.config;
        var obj = this.objects[objSeq];

        if (obj.bindAnchorTarget.attr("disable") == "disable" || obj.bindTarget.attr("disable") == "disable") {
            return false;
        }

        for (var OO, oidx = 0, __arr = this.objects; (oidx < __arr.length && (OO = __arr[oidx])); oidx++) {
            if (OO.expandBox_axdom) {
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
        var separator = obj.config.separator || AXConfig.AXInput.dateSeparator || "-";

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
        }
        else if (obj.config.selectType == "m") {
            if (objVal != "") {
                objVal = objVal + separator + "02";
            }
        }

        var dfDate = (obj.config.defaultDate || "").date();
        var myDate = objVal.date(separator, dfDate);
        var myYear = myDate.getFullYear();
        var myMonth = (myDate.getMonth() + 1).setDigit(2);

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

            if (myHH == 12 && myMI > 0) {
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
        }
        else if (obj.config.selectType == "m") {
            obj.mycalendarPageType = "m";
            obj.mycalendar.printMonthPage(myDate);
            printDate = myDate.print("yyyy" + separator + "mm");
        }
        else {
            if (obj.config.defaultSelectType) {
                if (obj.config.defaultSelectType == "y") {
                    obj.mycalendarPageType = "y";
                    obj.mycalendar.printYearPage(myDate.print("yyyy"));
                }
                else if (obj.config.defaultSelectType == "m") {
                    obj.mycalendarPageType = "m";
                    obj.mycalendar.printMonthPage(myDate);
                }
                else {
                    obj.mycalendarPageType = "d";
                    obj.mycalendar.printDayPage(myDate);
                }
                printDate = myDate.print("yyyy" + separator + "mm" + separator + "dd");
                if (obj.config.expandTime) {
                    printDate += " " + myDate.print("hh:mi");
                }
            }
            else {
                obj.mycalendarPageType = "d";
                obj.mycalendar.printDayPage(myDate);
                printDate = myDate.print("yyyy" + separator + "mm" + separator + "dd");
                if (obj.config.expandTime) {
                    printDate += " " + myDate.print("hh:mi");
                }
            }
        }
        if (obj.config.expandSetValue) {
            axdom("#" + objID).val(printDate);
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
        }
        else if (obj.config.align == "center") {
            css.left = offset.left.number() - expBoxWidth / 2 + handleWidth;
        }
        else if (obj.config.align == "right") {
            css.left = offset.left.number() + handleWidth;
        }
        else {
            css.left = offset.left.number() + handleWidth;
        }
        if (obj.config.valign == "top") {
            css.top = offset.top;
        }
        else if (obj.config.valign == "middle") {
            css.top = offset.top.number() - expBoxHeight / 2 + handleWidth / 2;
        }
        else if (obj.config.valign == "bottom") {
            css.top = offset.top.number() - expBoxHeight + handleWidth;
        }
        else {
            css.top = offset.top;
        }

        if (obj.config.customPos != undefined) {
            css.top = css.top + obj.config.customPos.top;
            css.left = css.left + obj.config.customPos.left;
        }

        var pElement = expandBox.offsetParent();
        var pBox = {width: pElement.width(), height: pElement.height()};

        var clientHeight = (AXUtil.docTD == "Q") ? document.body.scrollHeight : document.documentElement.scrollHeight;
        var clienWidth = (AXUtil.docTD == "Q") ? document.body.scrollWidth : document.documentElement.scrollWidth;
        if (clienWidth > pBox.width) pBox.width = clienWidth;
        if (clientHeight > pBox.height) pBox.height = clientHeight;
        var _box = {width: expandBox.outerWidth() + 10, height: expandBox.outerHeight() + 10};

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
            axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_controlYear").css({left: "70px"});
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

        if (obj.bindAnchorTarget.attr("disable") == "disable" || obj.bindTarget.attr("disable") == "disable") {
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
            onclose: function () {
            }
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
        var separator = obj.config.separator || AXConfig.AXInput.dateSeparator || "-";

        //Expand Box 생성 구문 작성
        var objVal = axdom("#" + objID).val();
        if (obj.config.expandTime) obj.config.selectType == "d"; //시간 확장 시 selectType : d 로 고정			

        var today = new Date();
        if (obj.config.selectType == "y") {
            if (objVal != "") {
                objVal = objVal.left(4) + separator + "01" + separator + "01";
            }
        }
        else if (obj.config.selectType == "m") {
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

            if (myHH == 12 && myMI > 0) {
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
        }
        else if (obj.config.selectType == "m") {
            obj.mycalendarPageType = "m";
            obj.mycalendar.printMonthPage(myDate);
            printDate = myDate.print("yyyy" + separator + "mm");
            axdom("#" + objID).val(printDate);
        }
        else {
            if (obj.config.defaultSelectType) {
                if (obj.config.defaultSelectType == "y") {
                    obj.mycalendarPageType = "y";
                    obj.mycalendar.printYearPage(myDate.print("yyyy"));
                }
                else if (obj.config.defaultSelectType == "m") {
                    obj.mycalendarPageType = "m";
                    obj.mycalendar.printMonthPage(myDate);
                }
                else {
                    obj.mycalendarPageType = "d";
                    obj.mycalendar.printDayPage(myDate);
                }
                printDate = myDate.print("yyyy" + separator + "mm" + separator + "dd");
                if (obj.config.expandTime) {
                    printDate += " " + myDate.print("hh:mi");
                }
                axdom("#" + objID).val(printDate);

            }
            else {
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
            until: function (evt, evtIDs) {
                return (axdom(evt.parentNode).hasClass("AXDateControlBox")) ? true : false;
            },
            find: function (evt, evtIDs) {
                return (axdom(evt).hasClass("AXDateControl")) ? true : false;
            }
        });
        if (myTarget) {
            var act = myTarget.id.split(/_AX_/g).last();
            var nDate = obj.nDate;

            if (act == "controlYear") {
                this.bindDateChangePage(objID, objSeq, nDate, "y");
            }
            else if (act == "controlMonth") {
                if (obj.config.selectType != "y") {
                    this.bindDateChangePage(objID, objSeq, nDate, "m");
                }
            }
            else if (act == "expandPrev") {
                if (obj.mycalendarPageType == "d") {
                    this.bindDateChangePage(objID, objSeq, nDate.add(-1, "m"), "d");
                }
                else if (obj.mycalendarPageType == "m") {
                    this.bindDateChangePage(objID, objSeq, nDate.add(-1, "y"), "m");
                }
                else if (obj.mycalendarPageType == "y") {
                    this.bindDateChangePage(objID, objSeq, nDate.add(-12, "y"), "y");
                }
            }
            else if (act == "expandNext") {
                if (obj.mycalendarPageType == "d") {
                    this.bindDateChangePage(objID, objSeq, nDate.add(1, "m"), "d");
                }
                else if (obj.mycalendarPageType == "m") {
                    this.bindDateChangePage(objID, objSeq, nDate.add(1, "y"), "m");
                }
                else if (obj.mycalendarPageType == "y") {
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
            until: function (evt, evtIDs) {
                return (axdom(evt.parentNode).hasClass("AXDateContainer")) ? true : false;
            },
            find: function (evt, evtIDs) {
                return (axdom(evt).hasClass("calendarDate") || axdom(evt).hasClass("calendarMonth")) ? true : false;
            }
        });
        if (myTarget) {
            var ids = myTarget.id.split(/_AX_/g);
            var act = ids.last();
            var nDate = obj.nDate;
            var separator = obj.config.separator || AXConfig.AXInput.dateSeparator || "-";
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
            }
            else if (act == "month") {
                var myMonth = ids[ids.length - 2].number() - 1;
                if (obj.config.selectType == "m") {
                    var yy = nDate.getFullYear();
                    var dd = 1;
                    obj.nDate = new Date(Date.UTC(yy, myMonth, dd));
                    //obj.modal.close();
                    this.bindDateExpandClose(objID, objSeq, event);
                }
                else {
                    var yy = nDate.getFullYear();
                    var dd = 1;
                    obj.nDate = new Date(Date.UTC(yy, myMonth, dd));
                    this.bindDateChangePage(objID, objSeq, obj.nDate, "d");
                }
            }
            else if (act == "year") {
                var myYear = ids[ids.length - 2];
                if (obj.config.selectType == "y") {
                    var mm = 0;
                    var dd = 1;
                    obj.nDate = new Date(Date.UTC(myYear, mm, dd));
                    //obj.modal.close();
                    this.bindDateExpandClose(objID, objSeq, event);
                }
                else {
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
            until: function (evt, evtIDs) {
                return (axdom(evt.parentNode).hasClass("AXDateButtonBox")) ? true : false;
            },
            find: function (evt, evtIDs) {
                return (axdom(evt).hasClass("AXBindDateConfirm")) ? true : false;
            }
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

        if (!obj) {
            //비활성 처리후 메소드 종료
            axdom(document).unbind("click.AXInput");
            //axdom("#" + objID).unbind("keydown.AXInput");
            return;
        }

        if (obj.modal && obj.modal.opened) { /* mobile modal close */
            var objVal = axdom("#" + objID).val();
            if (objVal == "") {

            }
            else {
                var separator = obj.config.separator || AXConfig.AXInput.dateSeparator || "-";
                if (obj.config.selectType == "y") {
                    axdom("#" + objID).val(obj.nDate.print("yyyy"));
                }
                else if (obj.config.selectType == "m") {
                    axdom("#" + objID).val(obj.nDate.print("yyyy" + separator + "mm"));
                }
                else {
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
                }
                else {
                    var st_date, ed_date;
                    if (obj.config.onChange.earlierThan) {
                        st_date = axdom("#" + objID).val();
                        ed_date = axdom("#" + obj.config.onChange.earlierThan).val();
                    }
                    else if (obj.config.onChange.laterThan) {
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

            if (!obj.bindTarget) obj.bindTarget = axdom("#" + objID);
            obj.bindTarget.trigger("change");

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

            }
            else {
                var separator = obj.config.separator || AXConfig.AXInput.dateSeparator || "-";
                if (obj.config.selectType == "y") {
                    axdom("#" + objID).val(obj.nDate.print("yyyy"));
                }
                else if (obj.config.selectType == "m") {
                    axdom("#" + objID).val(obj.nDate.print("yyyy" + separator + "mm"));
                }
                else {
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
                }
                else {
                    var st_date, ed_date;
                    if (obj.config.onChange.earlierThan) {
                        st_date = axdom("#" + objID).val();
                        ed_date = axdom("#" + obj.config.onChange.earlierThan).val();
                    }
                    else if (obj.config.onChange.laterThan) {
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
                    }
                    else if (obj.config.onChange.onchange) {
                        obj.config.onChange.onchange.call({
                            objID: objID,
                            value: axdom("#" + objID).val()
                        });
                    }
                }
            }
            if (!obj.bindTarget) obj.bindTarget = axdom("#" + objID);
            obj.bindTarget.trigger("change");

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
        else {
            var clearDate = false;
            var nDate = (obj.nDate || new Date());
            var va = axdom("#" + objID).val().replace(/\D/gi, ""); //숫자 이외의 문자를 제거 합니다.
            if (va.search(/\d+/g) == -1) {
                clearDate = true;
            }

            if (clearDate) {
                axdom("#" + objID).val("");
            }
            else {
                var separator = obj.config.separator || AXConfig.AXInput.dateSeparator || "-";
                if (obj.config.selectType == "y") {

                    var yy = va.left(4).number();
                    if (yy == 0) yy = nDate.getFullYear();
                    if (yy < 1000) yy += 2000;
                    var mm = nDate.getMonth();
                    var dd = nDate.getDate();
                    obj.nDate = new Date(Date.UTC(yy, mm, dd, 12));

                    axdom("#" + objID).val(obj.nDate.print("yyyy"));

                }
                else if (obj.config.selectType == "m") {

                    if (va.length > 4) {
                        var yy = va.left(4).number();
                        var mm = va.substr(4, 2).number() - 1;
                        var dd = 1;
                    }
                    else {
                        var yy = va.left(4).number();
                        var mm = 0;
                        var dd = 1;
                    }
                    if (yy == 0) yy = nDate.getFullYear();
                    if (yy < 1000) yy += 2000;
                    obj.nDate = new Date(Date.UTC(yy, mm, dd, 12));

                    axdom("#" + objID).val(obj.nDate.print("yyyy" + separator + "mm"));

                }
                else {
                    var needAlert = false;
                    if (va.length > 5) {
                        var yy = va.left(4).number();
                        var mm = va.substr(4, 2).number();
                        var dd = va.substr(6, 2).number();
                    }
                    else if (va.length > 3) {
                        var yy = "20" + va.substr(0, 2);
                        var mm = va.substr(2, 2).number();
                        var dd = va.substr(4, 2).number();
                    }
                    else if (va.length > 2) {
                        var yy = nDate.getFullYear();
                        var mm = va.substr(0, 2).number();
                        var dd = va.substr(2, 2).number();
                    }
                    else {
                        var yy = nDate.getFullYear(); //va.left(4).number();
                        var mm = nDate.getMonth() + 1;
                        var dd = va.substr(0, 2).number();
                    }
                    if (yy == 0) needAlert = true;
                    if (yy == 0) yy = nDate.getFullYear();
                    if (yy < 1000) yy += 2000;

                    obj.nDate = (yy + "-" + mm.setDigit(2) + "-" + dd.setDigit(2)).date();

                    //trace(obj.nDate.getFullYear(), yy.number());
                    //trace(obj.nDate.getMonth()+1, mm.number());
                    //trace(obj.nDate.getDate(), dd.number());

                    if (obj.nDate.getFullYear() != yy.number()
                        || obj.nDate.getMonth()+1 != mm.number()
                        || obj.nDate.getDate() != dd.number()) {
                        needAlert = true;
                        obj.nDate = new Date();
                    }

                    printDate = obj.nDate.print("yyyy" + separator + "mm" + separator + "dd");

                    if (obj.config.expandTime) {
                        var hh, mi;
                        try {
                            printDate += " " + obj.mycalendartime.getTime();
                        } catch (e) {
                            if (va.length > 11) { // hh,mm
                                hh = va.substr(8, 2).number();
                                mi = va.substr(10, 2).number();
                            }
                            else if (va.length > 9) {
                                hh = va.substr(8, 2).number();
                                mi = "00";
                            }
                            else {
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
                }
                else {
                    var st_date, ed_date;
                    if (obj.config.onChange.earlierThan) {
                        st_date = axdom("#" + objID).val();
                        ed_date = axdom("#" + obj.config.onChange.earlierThan).val();
                    }
                    else if (obj.config.onChange.laterThan) {
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

        /*
         if (!obj.bindTarget) obj.bindTarget = axdom("#" + objID);
         obj.bindTarget.trigger("change");
         */

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
        var separator = obj.config.separator || AXConfig.AXInput.dateSeparator || "-";
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
                }
                else {
                    return false;
                }
            }
        });

        isDateClick = (myTarget) ? true : false;
        if (!isDateClick) {
            this.bindDateExpandClose(objID, objSeq, event);
        }
        else {
            if (axdom(myTarget).hasClass("disabled")) {
                return;
            } // disabled 대상은 선택 불가

            var ids = myTarget.id.split(/_AX_/g);
            var ename = ids.last();

            var nDate = obj.nDate;
            var separator = obj.config.separator || AXConfig.AXInput.dateSeparator || "-";
            if (ename == "expandPrev") {
                if (obj.mycalendarPageType == "d") {
                    this.bindDateChangePage(objID, objSeq, nDate.add(-1, "m"), "d");
                }
                else if (obj.mycalendarPageType == "m") {
                    this.bindDateChangePage(objID, objSeq, nDate.add(-1, "y"), "m");
                }
                else if (obj.mycalendarPageType == "y") {
                    this.bindDateChangePage(objID, objSeq, nDate.add(-12, "y"), "y");
                }
            }
            else if (ename == "expandNext") {
                if (obj.mycalendarPageType == "d") {
                    this.bindDateChangePage(objID, objSeq, nDate.add(1, "m"), "d");
                }
                else if (obj.mycalendarPageType == "m") {
                    this.bindDateChangePage(objID, objSeq, nDate.add(1, "y"), "m");
                }
                else if (obj.mycalendarPageType == "y") {
                    this.bindDateChangePage(objID, objSeq, nDate.add(12, "y"), "y");
                }
            }
            else if (ename == "controlYear") {
                this.bindDateChangePage(objID, objSeq, nDate, "y");
            }
            else if (ename == "controlMonth") {
                if (obj.config.selectType != "y") {
                    this.bindDateChangePage(objID, objSeq, nDate, "m");
                }
            }
            else if (ename == "date") {

                obj.nDate = ids[ids.length - 2].date();

                //trace(ids[ids.length-2] + "///" + obj.nDate);

                var printDate = obj.nDate.print("yyyy" + separator + "mm" + separator + "dd");
                if (obj.config.expandTime) {
                    printDate += " " + obj.mycalendartime.getTime();
                }
                axdom("#" + objID).val(printDate);
                this.bindDateExpandClose(objID, objSeq, event);
            }
            else if (ename == "month") {
                var myMonth = ids[ids.length - 2].number() - 1;
                if (obj.config.selectType == "m") {
                    var yy = nDate.getFullYear();
                    var dd = 1;
                    obj.nDate = new Date(Date.UTC(yy, myMonth, dd, 12));
                    axdom("#" + objID).val(obj.nDate.print("yyyy" + separator + "mm"));
                    this.bindDateExpandClose(objID, objSeq, event);
                }
                else {
                    var yy = nDate.getFullYear();
                    var dd = 1;
                    obj.nDate = new Date(Date.UTC(yy, myMonth, dd, 12));
                    this.bindDateChangePage(objID, objSeq, obj.nDate, "d");
                }
            }
            else if (ename == "year") {
                var myYear = ids[ids.length - 2];
                if (obj.config.selectType == "y") {
                    var mm = 0;
                    var dd = 1;
                    obj.nDate = new Date(Date.UTC(myYear, mm, dd, 12));
                    axdom("#" + objID).val(obj.nDate.print("yyyy"));
                    this.bindDateExpandClose(objID, objSeq, event);
                }
                else {
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

        }
        else if (obj.config.selectType == "m") {

        }
        else {

        }
    },
    bindDateChangePage: function (objID, objSeq, setDate, pageType) {
        var obj = this.objects[objSeq];
        var cfg = this.config;
        var separator = obj.config.separator || AXConfig.AXInput.dateSeparator || "-";

        if (pageType == "m") {
            //alert(setDate);
            obj.mycalendarPageType = "m";
            obj.nDate = setDate;
            obj.mycalendar.printMonthPage(setDate);
            var myYear = setDate.getFullYear();
            axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_controlYear").html(myYear + "년");
        }
        else if (pageType == "y") {
            obj.mycalendarPageType = "y";
            obj.nDate = setDate;
            obj.mycalendar.printYearPage(setDate.getFullYear());
            var myYear = setDate.getFullYear();
            axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_controlYear").html(myYear + "년");
        }
        else {
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
        }
        else if (obj.config.selectType == "m") {
            axdom("#" + objID).val(obj.nDate.print("yyyy" + separator + "mm"));
        }
        else {
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

        if (!obj.bindAnchorTarget) obj.bindAnchorTarget = axdom("#" + cfg.targetID + "_AX_" + objID);
        if (!obj.bindTarget) obj.bindTarget = axdom("#" + objID);
        obj.bindTargetStart = axdom("#" + obj.config.startTargetID);

        var h = obj.bindAnchorTarget.data("height");
        var po = [];
        var handleLeft = 0;
        if (obj.config) handleLeft = (obj.config.handleLeft || 0).number();

        po.push("<a " + obj.config.href + " id=\"" + cfg.targetID + "_AX_" + objID + "_AX_dateHandle\" class=\"" + cfg.anchorDateHandleClassName + "\" style=\"right:" + (0 - handleLeft) + "px;top:0px;width:" + h + "px;height:" + h + "px;\">&nbsp;</a>");
        obj.bindAnchorTarget.append(po.join(''));
        obj.bindAnchorTarget.show();

        var bindDateExpand = this.bindTwinDateExpand.bind(this);
        var bindTwinDateExpandClose = this.bindTwinDateExpandClose.bind(this);

        axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_dateHandle").unbind("click.AXInput").bind("click.AXInput", function (event) {
            if (AXgetId(cfg.targetID + "_AX_" + objID + "_AX_expandBox")) {
                bindTwinDateExpandClose(objID, objSeq, event);
            }
            else {
                var isReadOnly = obj.bindTarget.attr("readonly");
                var isDisabled = obj.bindTarget.attr("disabled");
                if (isReadOnly) isReadOnly = (isReadOnly.lcase() == "true") || (isReadOnly.lcase() == "readonly");
                if (isDisabled) isDisabled = (isDisabled.lcase() == "true") || (isDisabled.lcase() == "disabled");
                if (!isReadOnly && !isDisabled) bindDateExpand(objID, objSeq, true, event);
            }
        });
        obj.bindTarget.unbind("focus.AXInput").bind("focus.AXInput", function (event) {
            setTimeout(function () {
                //obj.bindTarget.select();
            }, 1);
            /*
             if(!AXgetId(cfg.targetID + "_AX_"+objID+"_AX_expandBox")){
             bindDateExpand(objID, objSeq, false, event);
             }
             */
        });
        obj.bindTargetStart.unbind("focus.AXInput").bind("focus.AXInput", function (event) {
            setTimeout(function () {
                //obj.bindTargetStart.select();
            }, 1);
            /*
             if(!AXgetId(cfg.targetID + "_AX_"+objID+"_AX_expandBox")){
             bindDateExpand(objID, objSeq, false, event);
             }
             */
        });

        var separator = obj.config.separator || AXConfig.AXInput.dateSeparator || "-";
        axdom("#" + objID + ", #" + obj.config.startTargetID).unbind("keyup.AXInput").bind("keyup.AXInput", function (event) {
            //alert(this.value);
            if (event.keyCode != AXUtil.Event.KEY_BACKSPACE && event.keyCode != AXUtil.Event.KEY_DELETE && event.keyCode != AXUtil.Event.KEY_LEFT && event.keyCode != AXUtil.Event.KEY_RIGHT) {
                var va = this.value.replace(/\D/gi, ""); //숫자 이외의 문자를 제거 합니다.
                var _this = this;

                if (obj.config.selectType == "y") {
                    if (va.length > 4) _this.value = va.left(4);
                }
                else if (obj.config.selectType == "m") {
                    if (va.length == 4) {
                        va = va + separator;
                        _this.value = va;
                    }
                    else if (va.length > 4) {
                        va = va.substr(0, 4) + separator + va.substr(4, 2);
                        _this.value = va;
                    }
                }
                else {
                    if (va.length < 4) {
                        _this.value = va;
                    }
                    else if (va.length <= 6) {
                        va = va.substr(0, 4) + separator + va.substr(4, 2);
                        _this.value = va;
                    }
                    else if (va.length <= 8) {
                        va = va.substr(0, 4) + separator + va.substr(4, 2) + separator + va.substr(6, 2);
                        _this.value = va;
                    }
                    else if (va.length <= 10) {
                        if (obj.config.expandTime) {
                            va = va.substr(0, 4) + separator + va.substr(4, 2) + separator + va.substr(6, 2) + " " + va.substr(8, 2);
                            _this.value = va;
                        }
                        else {
                            va = va.substr(0, 4) + separator + va.substr(4, 2) + separator + va.substr(6, 2);
                            _this.value = va;
                        }
                    }
                    else if (va.length > 10) {
                        if (obj.config.expandTime) {
                            va = va.substr(0, 4) + separator + va.substr(4, 2) + separator + va.substr(6, 2) + " " + va.substr(8, 2) + ":" + va.substr(10, 2);
                            _this.value = va;
                        }
                        else {
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
            if (OO.expandBox_axdom) {
                OO.expandBox_axdom.remove();
                OO.expandBox_axdom = null;
            }
        }

        var obj = this.objects[objSeq];

        if (obj.bindAnchorTarget.attr("disable") == "disable" || obj.bindTarget.attr("disable") == "disable") {
            return false;
        }

        var separator = obj.config.separator || AXConfig.AXInput.dateSeparator || "-";

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
        var objVal1 = axdom("#" + obj.config.startTargetID).val();
        var objVal2 = axdom("#" + objID).val();

        if (obj.config.expandTime) obj.config.selectType == "d"; //시간 확장 시 selectType : d 로 고정

        var today = new Date();
        var objVal1Empty = false;
        if (obj.config.selectType == "y") {
            if (objVal1 != "") {
                objVal1 = objVal1.left(4) + separator + "01" + separator + "02";
            }
            else {
                objVal1Empty = true;
            }
            if (objVal2 != "") {
                objVal2 = objVal2.left(4) + separator + "01" + separator + "02";
            }
        }
        else if (obj.config.selectType == "m") {
            if (objVal1 != "") {
                objVal1 = objVal1 + separator + "02";
            }
            else {
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
        }
        else if (obj.config.selectType == "m") {
            obj.mycalendarPageType = "m";
            obj.mycalendar1.printMonthPage(myDate1);
            obj.mycalendar2.printMonthPage(myDate2);
            printDate1 = myDate1.print("yyyy" + separator + "mm");
            printDate2 = myDate2.print("yyyy" + separator + "mm");
        }
        else {
            obj.mycalendarPageType = "d";
            obj.mycalendar1.printDayPage(myDate1);
            obj.mycalendar2.printDayPage(myDate2);
            printDate1 = myDate1.print("yyyy" + separator + "mm" + separator + "dd");
            printDate2 = myDate2.print("yyyy" + separator + "mm" + separator + "dd");
            if (obj.config.expandTime) {
                printDate1 += " " + myDate1.print("hh:mi");
                printDate2 += " " + myDate2.print("hh:mi");
            }
        }
        if (obj.config.expandSetValue) {
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
        }
        else if (obj.config.align == "center") {
            css.left = offset.left.number() - expBoxWidth / 2 + handleWidth;
        }
        else if (obj.config.align == "right") {
            css.left = offset.left.number() + handleWidth;
        }
        else {
            css.left = offset.left.number() + handleWidth;
        }
        if (obj.config.valign == "top") {
            css.top = offset.top;
        }
        else if (obj.config.valign == "middle") {
            css.top = offset.top.number() - expBoxHeight / 2 + handleWidth / 2;
        }
        else if (obj.config.valign == "bottom") {
            css.top = offset.top.number() - expBoxHeight + handleWidth;
        }
        else {
            css.top = offset.top;
        }

        if (obj.config.customPos != undefined) {
            css.top = css.top + obj.config.customPos.top;
            css.left = css.left + obj.config.customPos.left;
        }

        var pElement = expandBox.offsetParent();
        var pBox = {width: pElement.width(), height: pElement.height()};

        var clientHeight = (AXUtil.docTD == "Q") ? document.body.scrollHeight : document.documentElement.scrollHeight;
        var clienWidth = (AXUtil.docTD == "Q") ? document.body.scrollWidth : document.documentElement.scrollWidth;
        if (clienWidth > pBox.width) pBox.width = clienWidth;
        if (clientHeight > pBox.height) pBox.height = clientHeight;
        var _box = {width: expandBox.outerWidth() + 10, height: expandBox.outerHeight() + 10};

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
            axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_controlYear1").css({left: "70px"});
            axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_controlMonth1").hide();
            axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_controlYear2").css({left: "70px"});
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
            var separator = obj.config.separator || AXConfig.AXInput.dateSeparator || "-";
            var printDate = obj.nDate1.print("yyyy" + separator + "mm" + separator + "dd");
            if (obj.config.expandTime) {
                printDate += " " + obj.mycalendartime1.getTime();
            }
            axdom("#" + obj.config.startTargetID).val(printDate);
        }
        else {
            var separator = obj.config.separator || AXConfig.AXInput.dateSeparator || "-";
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
            var separator = obj.config.separator || AXConfig.AXInput.dateSeparator || "-";

            if (objVal1 != "" || objVal2 != "") {
                if (obj.config.selectType == "y") {
                    if (objVal1.length < 4) axdom("#" + obj.config.startTargetID).val(obj.nDate1.print("yyyy"));
                    else {
                        objVal1 = objVal1.left(4);
                        axdom("#" + obj.config.startTargetID).val(objVal1);
                        axdom("#" + obj.config.startTargetID).trigger("change");
                    }
                    if (objVal2.length < 4) axdom("#" + objID).val(obj.nDate2.print("yyyy"));
                    else {
                        objVal2 = objVal2.left(4);
                        axdom("#" + objID).val(objVal2);
                        axdom("#" + objID).trigger("change");
                    }
                }
                else if (obj.config.selectType == "m") {
                    axdom("#" + obj.config.startTargetID).val(obj.nDate1.print("yyyy" + separator + "mm"));
                    axdom("#" + obj.config.startTargetID).trigger("change");
                    axdom("#" + objID).val(obj.nDate2.print("yyyy" + separator + "mm"));
                    axdom("#" + objID).trigger("change");
                }
                else {
                    printDate1 = obj.nDate1.print("yyyy" + separator + "mm" + separator + "dd");
                    printDate2 = obj.nDate2.print("yyyy" + separator + "mm" + separator + "dd");
                    if (obj.config.expandTime) {
                        printDate1 += " " + obj.mycalendartime1.getTime();
                        printDate2 += " " + obj.mycalendartime2.getTime();
                    }
                    axdom("#" + obj.config.startTargetID).val(printDate1);
                    axdom("#" + objID).val(printDate2);
                    axdom("#" + obj.config.startTargetID).trigger("change");
                    axdom("#" + objID).trigger("change");
                }

                if (!obj.config.onChange) obj.config.onChange = obj.config.onchange;
                if (obj.config.onChange) {
                    obj.config.onChange.call({
                        ST_objID: obj.config.startTargetID,
                        ED_objID: objID,
                        ST_value: axdom("#" + obj.config.startTargetID).val(),
                        ED_value: axdom("#" + objID).val()
                    });
                }
                if (!obj.bindTarget) obj.bindTarget = axdom("#" + objID);
                obj.bindTarget.trigger("change");
            }

            axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox").remove(); // 개체 삭제 처리

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
                }
                else {
                    return false;
                }
            }
        });

        isDateClick = (myTarget) ? true : false;
        if (!isDateClick) {
            this.bindTwinDateExpandClose(objID, objSeq, event);
        }
        else {

            if (axdom(myTarget).hasClass("disabled")) {
                return;
            } // disabled 대상은 선택 불가

            var ids = myTarget.id.split(/_AX_/g);
            var ename = ids.last();
            var boxType = ids[ids.length - 3];
            var nDate1 = obj.nDate1;
            var nDate2 = obj.nDate2;
            var separator = obj.config.separator || AXConfig.AXInput.dateSeparator || "-";

            if (ename == "expandPrev1") {
                if (obj.mycalendarPageType == "d") {
                    this.bindTwinDateChangePage(objID, objSeq, 1, nDate1.add(-1, "m"), "d");
                }
                else if (obj.mycalendarPageType == "m") {
                    this.bindTwinDateChangePage(objID, objSeq, 1, nDate1.add(-1, "y"), "m");
                }
                else if (obj.mycalendarPageType == "y") {
                    this.bindTwinDateChangePage(objID, objSeq, 1, nDate1.add(-12, "y"), "y");
                }
            }
            else if (ename == "expandPrev2") {
                if (obj.mycalendarPageType == "d") {
                    this.bindTwinDateChangePage(objID, objSeq, 2, nDate2.add(-1, "m"), "d");
                }
                else if (obj.mycalendarPageType == "m") {
                    this.bindTwinDateChangePage(objID, objSeq, 2, nDate2.add(-1, "y"), "m");
                }
                else if (obj.mycalendarPageType == "y") {
                    this.bindTwinDateChangePage(objID, objSeq, 2, nDate2.add(-12, "y"), "y");
                }
            }
            else if (ename == "expandNext1") {
                if (obj.mycalendarPageType == "d") {
                    this.bindTwinDateChangePage(objID, objSeq, 1, nDate1.add(1, "m"), "d");
                }
                else if (obj.mycalendarPageType == "m") {
                    this.bindTwinDateChangePage(objID, objSeq, 1, nDate1.add(1, "y"), "m");
                }
                else if (obj.mycalendarPageType == "y") {
                    this.bindTwinDateChangePage(objID, objSeq, 1, nDate1.add(12, "y"), "y");
                }
            }
            else if (ename == "expandNext2") {
                if (obj.mycalendarPageType == "d") {
                    this.bindTwinDateChangePage(objID, objSeq, 2, nDate2.add(1, "m"), "d");
                }
                else if (obj.mycalendarPageType == "m") {
                    this.bindTwinDateChangePage(objID, objSeq, 2, nDate2.add(1, "y"), "m");
                }
                else if (obj.mycalendarPageType == "y") {
                    this.bindTwinDateChangePage(objID, objSeq, 2, nDate2.add(12, "y"), "y");
                }
            }
            else if (ename == "controlYear1") {
                this.bindTwinDateChangePage(objID, objSeq, 1, nDate1, "y");
            }
            else if (ename == "controlYear2") {
                this.bindTwinDateChangePage(objID, objSeq, 2, nDate2, "y");
            }
            else if (ename == "controlMonth1") {
                if (obj.config.selectType != "y") {
                    this.bindTwinDateChangePage(objID, objSeq, 1, nDate1, "m");
                }
            }
            else if (ename == "controlMonth2") {
                if (obj.config.selectType != "y") {
                    this.bindTwinDateChangePage(objID, objSeq, 2, nDate2, "m");
                }
            }
            else if (ename == "date") {
                if (boxType == "displayBox1") {
                    obj.nDate1 = ids[ids.length - 2].date();
                    var printDate = obj.nDate1.print("yyyy" + separator + "mm" + separator + "dd");
                    if (obj.config.expandTime) {
                        printDate += " " + obj.mycalendartime1.getTime();
                    }

                    axdom("#" + obj.config.startTargetID).val(printDate);
                    obj.mycalendar1.dayPageSetDay(obj.nDate1);
                }
                else {
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
                        obj.mycalendar2.printDayPage(obj.nDate2);
                        this.bindTwinDateChangePage(objID, objSeq, 2, obj.nDate2, "d");
                    }
                    else {
                        obj.nDate1 = obj.nDate2;
                        var printDate = obj.nDate1.print("yyyy" + separator + "mm" + separator + "dd");
                        if (obj.config.expandTime) {
                            printDate += " " + obj.mycalendartime1.getTime();
                        }
                        axdom("#" + obj.config.startTargetID).val(printDate);
                        obj.mycalendar1.printDayPage(obj.nDate1);
                        this.bindTwinDateChangePage(objID, objSeq, 1, obj.nDate1, "d");
                    }
                }

            }
            else if (ename == "month") {
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
                    }
                    else {
                        var yy = nDate1.getFullYear();
                        var dd = nDate1.getDate();
                        obj.nDate1 = new Date(Date.UTC(yy, myMonth, dd));
                        //trace("start ----");
                        this.bindTwinDateChangePage(objID, objSeq, 1, obj.nDate1, "d");
                    }
                }
                else {
                    if (obj.config.selectType == "m") {
                        var yy = nDate2.getFullYear();
                        var dd = nDate2.getDate();
                        obj.nDate2 = new Date(Date.UTC(yy, myMonth, dd));
                        var printDate = obj.nDate2.print("yyyy" + separator + "mm");
                        axdom("#" + objID).val(printDate);
                        obj.mycalendar2.monthPageSetMonth(obj.nDate2);
                    }
                    else {
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

            }
            else if (ename == "year") {
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
                    }
                    else {
                        var mm = nDate1.getMonth();
                        var dd = nDate1.getDate();
                        obj.nDate1 = new Date(Date.UTC(myYear, mm, dd));
                        this.bindTwinDateChangePage(objID, objSeq, 1, obj.nDate1, "m");
                    }
                }
                else {
                    if (obj.config.selectType == "y") {
                        var mm = nDate2.getMonth();
                        var dd = nDate2.getDate();
                        obj.nDate2 = new Date(Date.UTC(myYear, mm, dd));
                        var printDate = obj.nDate2.print("yyyy");
                        axdom("#" + objID).val(printDate);
                        //this.bindTwinDateExpandClose(objID, objSeq, event);
                        obj.mycalendar2.yearPageSetYear(obj.nDate2);
                    }
                    else {
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

        }
        else if (obj.config.selectType == "m") {

        }
        else {

        }
    },
    bindTwinDateChangePage: function (objID, objSeq, objType, setDate, pageType) {
        var obj = this.objects[objSeq];
        var cfg = this.config;
        var separator = obj.config.separator || AXConfig.AXInput.dateSeparator || "-";

        if (pageType == "m") {
            if (objType == 1) {
                //obj.mycalendarPageType = "m";
                obj.nDate1 = setDate;
                obj.mycalendar1.printMonthPage(setDate);
                var myYear = setDate.getFullYear();
                axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_controlYear1").html(myYear + "년");
            }
            else {
                //obj.mycalendarPageType = "m";
                obj.nDate2 = setDate;
                obj.mycalendar2.printMonthPage(setDate);
                var myYear = setDate.getFullYear();
                axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_controlYear2").html(myYear + "년");
            }
        }
        else if (pageType == "y") {
            if (objType == 1) {
                //obj.mycalendarPageType = "y";
                obj.nDate1 = setDate;
                obj.mycalendar1.printYearPage(setDate.getFullYear());
                var myYear = setDate.getFullYear();
                axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_controlYear1").html(myYear + "년");
            }
            else {
                //obj.mycalendarPageType = "y";
                obj.nDate2 = setDate;
                obj.mycalendar2.printYearPage(setDate.getFullYear());
                var myYear = setDate.getFullYear();
                axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_controlYear2").html(myYear + "년");
            }
        }
        else {
            //obj.mycalendarPageType = "d";

            //trace({objID:objID, objSeq:objSeq, objType:objType, setDate:setDate, pageType:pageType});

            if (objType == 1) {
                obj.nDate1 = setDate;
                obj.mycalendar1.printDayPage(setDate);
                var myYear = setDate.getFullYear();
                var myMonth = (setDate.getMonth() + 1).setDigit(2);
                axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_controlYear1").html(myYear + "년");
                axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_controlMonth1").html(myMonth + "월");
            }
            else {
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
            }
            else if (obj.config.selectType == "m") {
                axdom("#" + obj.config.startTargetID).val(obj.nDate1.print("yyyy" + separator + "mm"));
            }
            else {
                var printDate = obj.nDate1.print("yyyy" + separator + "mm" + separator + "dd");
                if (obj.config.expandTime) {
                    printDate += " " + obj.mycalendartime1.getTime();
                }
                axdom("#" + obj.config.startTargetID).val(printDate);
            }
        }
        else {
            if (obj.config.selectType == "y") {
                axdom("#" + objID).val(obj.nDate2.print("yyyy"));
            }
            else if (obj.config.selectType == "m") {
                axdom("#" + objID).val(obj.nDate2.print("yyyy" + separator + "mm"));
            }
            else {
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
        }
        else {
            targetObjID = objID;
            objVal = axdom("#" + objID).val();
        }

        if (objVal == "") {

        }
        else {
            var clearDate = false;
            var nDate = (obj["nDate" + seq] || new Date());
            var va = axdom("#" + targetObjID).val().replace(/\D/gi, ""); //숫자 이외의 문자를 제거 합니다.
            if (va.search(/\d+/g) == -1) {
                clearDate = true;
            }

            if (clearDate) {
                axdom("#" + targetObjID).val("");
            }
            else {
                var separator = obj.config.separator || AXConfig.AXInput.dateSeparator || "-";
                if (obj.config.selectType == "y") {

                    var yy = va.left(4).number();
                    if (yy == 0) yy = nDate.getFullYear();
                    if (yy < 1000) yy += 2000;
                    var mm = nDate.getMonth();
                    var dd = nDate.getDate();
                    obj["nDate" + seq] = new Date(Date.UTC(yy, mm, dd, 12));

                    axdom("#" + targetObjID).val(obj["nDate" + seq].print("yyyy"));

                }
                else if (obj.config.selectType == "m") {

                    if (va.length > 5) {
                        var yy = va.left(4).number();
                        var mm = va.substr(4, 2).number() - 1;
                        var dd = 1;
                    }
                    else {
                        var yy = va.left(4).number();
                        var mm = 0;
                        var dd = 1;
                    }
                    if (yy == 0) yy = nDate.getFullYear();
                    if (yy < 1000) yy += 2000;
                    obj["nDate" + seq] = new Date(Date.UTC(yy, mm, dd, 12));

                    axdom("#" + targetObjID).val(obj["nDate" + seq].print("yyyy" + separator + "mm"));

                }
                else {
                    var needAlert = false;
                    var yy, mm, dd, hh, mi;
                    if (va.length > 7) {
                        yy = va.left(4).number();
                        mm = va.substr(4, 2).number();
                        dd = va.substr(6, 2).number();
                    }
                    else if (va.length > 4) {
                        yy = "20" + va.substr(0, 2);
                        mm = va.substr(2, 2).number();
                        dd = va.substr(4, 2).number();
                    }
                    else if (va.length > 2) {
                        yy = nDate.getFullYear();
                        mm = va.substr(0, 2).number();
                        dd = va.substr(2, 2).number();
                    }
                    else {
                        yy = nDate.getFullYear(); //va.left(4).number();
                        mm = nDate.getMonth() + 1;
                        dd = va.substr(0, 2).number();
                    }

                    if (va.length >= 9) {
                        hh = va.substr(8, 2).number();
                        mi = va.substr(10, 2).number();
                    }
                    else {
                        hh = "00";
                        mi = "00";
                    }

                    if (yy == 0) needAlert = true;
                    if (yy == 0) yy = nDate.getFullYear();
                    if (yy < 1000) yy += 2000;

                    obj["nDate" + seq] = (yy + "-" + mm.setDigit(2) + "-" + dd.setDigit(2)).date();

                    if (obj["nDate" + seq].getFullYear() != yy.number()
                        || obj["nDate" + seq].getMonth()+1 != mm.number()
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
                                var mm = va.substr(4, 2).number();
                                var dd = va.substr(6, 2).number();
                            }
                            else if (va.length > 5) {
                                var yy = va.left(4).number();
                                var mm = va.substr(4, 2).number();
                                var dd = 1;
                            }
                            else {
                                var yy = va.left(4).number();
                                var mm = nDate.getMonth() + 1;
                                var dd = nDate.getDate();
                            }
                            if (yy == 0) needAlert = true;
                            if (yy == 0) yy = nDate.getFullYear();
                            if (yy < 1000) yy += 2000;
                            obj.nDate1 = (yy + "-" + mm.setDigit(2) + "-" + dd.setDigit(2)).date();
                        }
                    }
                    if (obj.nDate2 == undefined) {
                        obj.nDate2 = obj.nDate1;
                        printDate = obj["nDate" + 2].print("yyyy" + separator + "mm" + separator + "dd");
                        if (obj.config.expandTime) {
                            if (obj["mycalendartime" + 2]) printDate += " " + obj["mycalendartime" + 2].getTime();
                        }
                        axdom("#" + objID).val(printDate);
                    }

                    if (obj.nDate1.diff(obj.nDate2) < 0) {
                        if (seq == 1) {
                            obj.nDate2 = obj.nDate1;
                            printDate = obj["nDate" + 2].print("yyyy" + separator + "mm" + separator + "dd");
                            if (obj.config.expandTime) {
                                if (obj["mycalendartime" + 2]) printDate += " " + obj["mycalendartime" + 2].getTime();
                            }
                            axdom("#" + objID).val(printDate);
                        }
                        else {
                            obj.nDate1 = obj.nDate2;
                            printDate = obj["nDate" + 1].print("yyyy" + separator + "mm" + separator + "dd");
                            if (obj.config.expandTime) {
                                if (obj["mycalendartime" + 1]) printDate += " " + obj["mycalendartime" + 1].getTime();
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
        /*
         if (!obj.bindTarget) obj.bindTarget = axdom("#" + objID);
         obj.bindTarget.trigger("change");
         */

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
    bindChecked: function (objID, objSeq) {
        var cfg = this.config, _this = this;
        var obj = this.objects[objSeq];

        if (!obj.bindAnchorTarget) obj.bindAnchorTarget = axdom("#" + cfg.targetID + "_AX_" + objID);
        if (!obj.bindTarget) obj.bindTarget = axdom("#" + objID);
        //var tagName = obj.bindTarget.get(0).tagName.ucase();
        obj.bindTarget.css({opacity: 0});

        var h = obj.bindAnchorTarget.data("height"),
            marginWidth = obj.bindTarget.css("margin-left").number() + obj.bindTarget.css("margin-right").number(),
            marginHeight = obj.bindTarget.css("margin-top").number() + obj.bindTarget.css("margin-bottom").number(),
            chk_size = Math.max((h + marginWidth), (h + marginHeight)) - 1,
            left = (obj.bindTarget.css("margin-left").number() - obj.bindTarget.css("margin-right").number()).abs(),
            anchorHandle, linked_items = [];

        var onchange = function (e) {
            if (obj.bindTarget.get(0).checked) {
                anchorHandle.addClass("checked");
            }
            else {
                anchorHandle.removeClass("checked");
            }
            if (linked_items.length > 0) {
                for (var li = 0; li < linked_items.length; li++) {
                    var aHandle = jQuery(linked_items[li]).next().find("." + cfg.anchorCheckedContainerClassName + "_radio");
                    if (linked_items[li].checked) {
                        aHandle.addClass("checked");
                    }
                    else {
                        aHandle.removeClass("checked");
                    }
                }
            }
        };

        var po = [];
        po.push('<div id="' + cfg.targetID + '_AX_' + objID + '_AX_HandleContainer"');
        if (obj.bindTarget.attr("type") == "radio") {
            po.push(' class="' + cfg.anchorCheckedContainerClassName + '_radio" ');
        }
        else {
            po.push(' class="' + cfg.anchorCheckedContainerClassName + '" ');
        }

        po.push(' style="left:' + left + 'px;top:0px;width:' + chk_size + 'px;height:' + chk_size + 'px;"');
        po.push(' onselectstart="return false;">');
        po.push('<a class="checked-icon"></a>')
        po.push('</div>');
        obj.bindAnchorTarget.append(po.join(''));
        obj.bindAnchorTarget.show();
        if (obj.bindTarget.attr("type") == "radio") {
            anchorHandle = obj.bindAnchorTarget.find("." + cfg.anchorCheckedContainerClassName + "_radio");
        }
        else {
            anchorHandle = obj.bindAnchorTarget.find("." + cfg.anchorCheckedContainerClassName);
        }

        obj.bindTarget.unbind("change.AXInput").bind("change.AXInput", onchange);
        anchorHandle.bind("click", function (e) {
            obj.bindTarget.get(0).checked = !obj.bindTarget.get(0).checked;
            obj.bindTarget.trigger("change");
            _this.stopEvent(e);
        });
        if (obj.bindTarget.attr("type") == "radio") {
            // 이름이 같은 라디오 아이템을 수집하여 링크 합니다.
            var nm = obj.bindTarget.attr("name");
            //trace(nm, objID);
            jQuery("input[name=" + nm + "]").each(function () {
                if (objID != this.id) {
                    linked_items.push(this);
                }
            });
        }
        onchange();
    }
});

var AXInput = new AXInputConverter();
AXInput.setConfig({targetID: "inputBasic", href: AXConfig.anchorHref});

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
        if (!this.id) this.id = "AXInput-" + axf.getUniqueId();
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
        if (!this.id) this.id = "AXInput-" + axf.getUniqueId();
        config = config || {};
        config.id = this.id;
        config.bindType = "number";
        config.href = AXConfig.anchorHref;
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
        if (!this.id) this.id = "AXInput-" + axf.getUniqueId();
        config = config || {};
        config.id = this.id;
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
        if (!this.id) this.id = "AXInput-" + axf.getUniqueId();
        config = config || {};
        config.id = this.id;
        config.bindType = "selector";
        config.href = AXConfig.anchorHref;
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
        if (!this.id) this.id = "AXInput-" + axf.getUniqueId();
        config = config || {};
        config.id = this.id;
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
        if (!this.id) this.id = "AXInput-" + axf.getUniqueId();
        config = config || {};
        config.id = this.id;
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
        if (!this.id) this.id = "AXInput-" + axf.getUniqueId();
        config = config || {};
        config.id = this.id;
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
        if (!this.id) this.id = "AXInput-" + axf.getUniqueId();
        config = config || {};
        config.id = this.id;
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
    onBeforeShowDay  : {}      // {Function} 날짜를 보여주기 전에 호출하는 함수. date를 파라미터로 받으며 다음과 같은 형식의 Object를 반환해야 한다. { isEnable: true|false, title:'성탄절', className: 'holyday', style: 'color:red' }
    onchange: function(){      // {Function} 값이 변경되었을 때 발생하는 이벤트 콜백함수
        trace(this);
    }
};
 axdom("#AXInputDate").bindDate(config);
 ```
 **/
axdom.fn.bindDate = function (config) {
    axf.each(this, function () {
        if (!this.id) this.id = "AXInput-" + axf.getUniqueId();
        config = config || {};
        config.id = this.id;
        config.bindType = "date";
        config.href = AXConfig.anchorHref;
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
        config = config || {};
        config.id = this.id;
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
        if (!this.id) this.id = "AXInput-" + axf.getUniqueId();
        config = config || {};
        config.id = this.id;
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
        if (!this.id) this.id = "AXInput-" + axf.getUniqueId();
        config = config || {};
        config.id = this.id;
        config.bindType = "twinDate";
        config.href = AXConfig.anchorHref;
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
        if (!this.id) this.id = "AXInput-" + axf.getUniqueId();
        config = config || {};
        config.id = this.id;
        config.bindType = "twinDateTime";
        config.expandTime = true;
        config.href = AXConfig.anchorHref;
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
        if (!this.id) this.id = "AXInput-" + axf.getUniqueId();
        config = config || {};
        config.id = this.id;
        config.bindType = "placeHolder";
        config.href = AXConfig.anchorHref;
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
        config = config || {};
        config.id = (this.id || (this.id = "axchecked-" + axf.getUniqueId()));
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
	initialize: function(AXJ_super) {
		AXJ_super();
		this.objects = [];
		this.inputTypes = [
			{type: "pattern", type: "tagSelector"}
		];
		this.config.anchorClassName = "AXanchor";
		this.config.anchorSelectorExpandBoxClassName = "AXanchorSelectorExpandBox";
		this.config.anchorSelectorExpandScrollClassName = "AXanchorSelectorExpandScroll"

		/* 모바일 반응 너비 */
		this.config.responsiveMobile = AXConfig.mobile.responsiveWidth;
	},
	init: function() {
		axdom(window).resize(this.alignAllAnchor.bind(this));

		// 예약어 초기화
		this.config.reserveKeys = {
			options: (AXConfig.AXInput && AXConfig.AXInput.keyOptions) || "options",
			optionValue: (AXConfig.AXInput && AXConfig.AXInput.keyOptionValue) || "optionValue",
			optionText: (AXConfig.AXInput && AXConfig.AXInput.keyOptionText) || "optionText"
		};
	},
	windowResize: function() {
		// 사용안함
		var windowResizeApply = this.windowResizeApply.bind(this);
		if (this.windowResizeObserver) clearTimeout(this.windowResizeObserver);
		this.windowResizeObserver = setTimeout(function() {
			windowResizeApply();
		}, 10);
	},
	windowResizeApply: function() {
		// 사용안함
		if (this.windowResizeObserver) clearTimeout(this.windowResizeObserver);
		this.alignAllAnchor();
	},
	alignAllAnchor: function() {
		for (var i = 0; i < this.objects.length; i++) {
			this.alignAnchor(this.objects[i].id, i);
		}
	},
	bindSetConfig: function(objID, configs) {
		var findIndex = null;
		axf.each(this.objects, function(index, O) {
			if (O.id == objID) {
				findIndex = index;
				return false;
			}
		});
		if (findIndex == null) {
			//trace("바인드 된 오브젝트를 찾을 수 없습니다.");
			return;
		}
		else {
			var _self = this.objects[findIndex];
			axf.each(configs, function(k, v) {
				_self.config[k] = v;
			});
		}
	},
	bind: function(obj) {
		var cfg = this.config;
		if (!AXgetId(obj.id)) {
			trace("bind 대상이 없어 bind 처리할 수 없습니다.");
			return;
		}

		var objID = obj.id;
		var objSeq = null;
		for (var index = 0; index < this.objects.length; index++) {
			if (this.objects[index].id == objID) {
				objSeq = index;
				break;
			}
		}

		if (obj.href == undefined) obj.href = cfg.href;

		if (objSeq == null) {
			objSeq = this.objects.length;
			this.objects.push({
				id: objID,
				anchorID: cfg.targetID + "_AX_" + objID,
				config: obj,
				bindType: obj.bindType
			});
		}
		else {
			this.objects[objSeq].isDel = undefined;
			this.objects[objSeq].config = obj;
		}

		if (obj.bindType != "checked") {
			this.appendAnchor(objID, objSeq, obj.bindType);
		}
		// bind checked 는 anchor연결 안함.

		if (obj.bindType == "null") {

		}
		else if (obj.bindType == "pattern") {
			this.bindPattern(objID, objSeq);
		}
		else if (obj.bindType == "tagSelector") {
			if (!this.objects[objSeq].config.reserveKeys) {
				this.objects[objSeq].config.reserveKeys = axdom.extend({}, this.config.reserveKeys);
			}
			this.bindTagSelector(objID, objSeq);
		}
	},
	unbind: function(obj) {
		var cfg = this.config;
		var removeAnchorId;
		var removeIdx;
		axf.each(this.objects, function(idx, O) {
			if (O.id != obj.id) {
				// collect.push(this);
			}
			else {
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
	appendAnchor: function(objID, objSeq, bindType) {
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

		var css = {left: l, top: t, width: w, height: 0};
		//trace(css);
		obj.bindAnchorTarget.css(css);
		obj.bindAnchorTarget.data("height", h);

		var _this = this;
		setTimeout(function() {
			_this.alignAnchor(objID, objSeq);
		}, 10);
	},
	alignAnchor: function(objID, objSeq) {
		var cfg = this.config;
		var obj = this.objects[objSeq];

		if (!AXgetId(objID)) return;
		/* 엘리먼트 존재 여부 확인 */

		if (obj.bindType == "tagSelector") {
			if (obj.tagList.length > 0) obj.bindTarget.css({"padding-top": obj.tagContainer.height()});
		}
		else {
			var iobjPosition = obj.bindTarget.position();
			var l = iobjPosition.left, t = iobjPosition.top;
			var w = obj.bindTarget.outerWidth();
			var h = obj.bindTarget.outerHeight();
			if (obj.bindTarget.css("display") == "none") {
				h = obj.bindAnchorTarget.data("height");
				var css = {width: w};
			}
			else {
				var css = {left: l, top: t, width: w, height: 0};
			}
			//trace(css);
			obj.bindAnchorTarget.css(css);
			obj.bindAnchorTarget.data("height", h);

			if (obj.bindType == "null") {

			}
			else if (obj.bindType == "pattern") {

			}
		}
	},

	// TODO : pattern명 정의
	/*
	 money, moneyint, date, datetime, bizno, phone, "USER String", [Function]
	 */
	// pattern
	bindPattern: function(objID, objSeq) {
		var obj = this.objects[objSeq], cfg = this.config, _this = this;
		if (!obj.bindAnchorTarget) obj.bindAnchorTarget = axdom("#" + cfg.targetID + "_AX_" + objID);
		if (!obj.bindTarget) obj.bindTarget = axdom("#" + objID);

		// TODO : 키 입력 제어 구문 시작점 (방법1)
		if (obj.config.pattern == "_custom") { // 커버 개체를 삽입하는 방식.. 실패..

			var h = obj.bindAnchorTarget.data("height");
			obj.bindAnchorTarget.css({"height": h});
			var po = [];
			var inputCoverClass = obj.bindTarget.attr("class");
			//trace();
			var inputCoverFont = obj.bindTarget.css("font-family");
			po.push("<div id=\"" + cfg.targetID + "_AX_" + objID + "_AX_inputCover\" " +
				"class=\"" + inputCoverClass + "\" " +
				"style=\"background:transparent;cursor:text;font-family:" + inputCoverFont + ";white-space:nowrap;\"" +
				"></div>");

			obj.bindAnchorTarget.append(po.join(''));
			obj.bindAnchorTarget.show();
			obj.bindTarget.css({color: obj.bindTarget.css("background-color")});

			obj.bindTargetCover = obj.bindAnchorTarget.find("#" + cfg.targetID + "_AX_" + objID + "_AX_inputCover");

			obj.bindTargetCover.bind("click", function() {
				obj.bindTarget.focus();
			});

			var val = obj.bindTarget.val().trim();
			if (val != "") {
				val = this.bindPatternGetValue(objID, objSeq, obj.bindTarget.val());
			}
			obj.bindTarget.val(val);

			obj.bindTarget.attr("onselectstart", "return false");
			obj.bindTarget.unbind("keypress.AXInput").bind("keypress.AXInput", function(event) {
				//obj.bindTargetCover.text(event.target.value);
			});
			obj.bindTarget.unbind("keyup.AXInput").bind("keyup.AXInput", function(event) {
				obj.bindTargetCover.html(_this.bindPatternGetValue(objID, objSeq, event.target.value) + "<div class='edit-input-cursor'>|</div>");
				//obj.bindTargetCover.val( _this.bindPatternGetValue(objID, objSeq, event.target.value) );
			});
			obj.bindTarget.unbind("focus.AXInput").bind("focus.AXInput", function(event) {
				obj.bindTargetCover.html(_this.bindPatternGetValue(objID, objSeq, event.target.value) + "<div class='edit-input-cursor'>|</div>");
				//obj.bindTargetCover.val( _this.bindPatternGetValue(objID, objSeq, event.target.value) );
			});
			obj.bindTarget.unbind("blur.AXInput").bind("blur.AXInput", function(event) {
				obj.bindTargetCover.find(".edit-input-cursor").remove();
			});

			return;
		}

		// TODO : 키 입력 제어 구문 시작점 (방법2)
		if (obj.config.pattern == "_custom") {

			// KEY_BACKSPACE: 8, KEY_TAB: 9, KEY_RETURN: 13, KEY_ESC: 27, KEY_LEFT: 37, KEY_UP: 38, KEY_RIGHT: 39, KEY_DOWN: 40, KEY_DELETE: 46, KEY_HOME: 36, KEY_END: 35, KEY_PAGEUP: 33, KEY_PAGEDOWN: 34,
			// KEY_INSERT: 45, KEY_SPACE: 32

			obj.bindTarget.unbind("keypress.AXInput").bind("keypress.AXInput", function(event) {
				var elem = event.target;
				var elemFocusPosition, elemFocusEndPosition;
				if ('selectionStart' in elem) {
					// Standard-compliant browsers
					elemFocusPosition = elem.selectionStart;
					elemFocusEndPosition = elem.selectionEnd;
				}
				else if (document.selection) {
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
				if (elem.value == "") {
					obj.originalValue = ""; // 오리지널 밸류 초기화
				}
				obj.prevValue = event.target.value;

				//trace("D" + obj.DEP);
			});

			obj.bindTarget.unbind("keyup.AXInput").bind("keyup.AXInput", function(event) {
				var elem = event.target;
				var elemFocusPosition;
				if ('selectionStart' in elem) {
					// Standard-compliant browsers
					elemFocusPosition = elem.selectionStart;
					elemFocusEndPosition = elem.selectionEnd;
				}
				else if (document.selection) {
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

				if (v1 != v2 && v1.length > v2.length) {
					// 추가입력
					if (obj.DSP == obj.DEP && obj.USP == obj.UEP && obj.DSP + 1 == obj.USP) {
						if (obj.USP == v1.length) {
							//trace("끝에서 한글자 타이핑");
							obj.originalValue += editedText;
						}
						else if (obj.USP < v1.length) {
							//trace("중간에서 한글자 타이핑");
							//var _v1 = obj.originalValue.split("");
							//var _v2 = editedText.split("");
							var _v2 = "";
							obj.originalValue = obj.originalValue.substring(0, obj.DEP) + editedText + obj.originalValue.substr(obj.DEP);
						}
						// 입력된 문자열의 위치에 패턴을 처리 합니다.

					}
					else {
						if (obj.USP == v1.length) {
							//trace("끝에서 다중문자 타이핑");
							obj.originalValue += editedText;
						}
						else if (obj.USP < v1.length) {
							trace("중간에서 다중문자 타이핑");
						}
					}
					/*
					 trace({
					 nvalue: v1,
					 prevValue: v2,
					 nowText: editText,
					 editedText: editedText,
					 originalValue: obj.originalValue,
					 eD:[obj.DSP, obj.DEP],
					 eU:[obj.USP, obj.UEP]
					 });
					 */
				}
				else if (v1 != v2 && v1.length < v2.length) {
					// 삭제 obj.originalValue의 삭제된 문자열 위치를 찾아 제거 합니다.

					if (obj.DSP == obj.DEP && obj.USP == obj.UEP && obj.DSP - 1 == obj.USP) {
						if (obj.USP == v1.length) {
							trace("끝에서 한글자 삭제");
						}
						else if (obj.USP < v1.length) {
							trace("중간에서 한글자 삭제");
						}
					}
					else {
						if (obj.USP == v1.length) {
							trace("끝에서 다중문자 삭제");
						}
						else if (obj.USP < v1.length) {
							trace("중간에서 다중문자 삭제");
						}
					}
				}
				else {
					// 커서이동
					if (obj.DSP == obj.DEP && obj.USP == obj.UEP && obj.DSP + 1 == obj.USP) {
						trace("커서 우로 이동");
					}
					else if (obj.DSP == obj.DEP && obj.USP == obj.UEP && obj.DSP == obj.USP + 1) {
						trace("커서 좌로 이동");
					}
					else if (obj.DSP == obj.DEP && obj.USP == obj.UEP && obj.DSP == obj.USP) {
						trace("제자리");
					}
				}
			});
			return;
		}
		// TODO : 키 입력 제어 구문 끝점 (방법2)

		var eventStop = function(event) {
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

		obj.bindTarget.unbind("focus.AXInput").bind("focus.AXInput", function(event) {
			if (obj.config.pattern == "custom") {
				if (typeof obj.originalValue === "undefined") obj.originalValue = event.target.value;
				event.target.value = _this.bindPatternGetValue(objID, objSeq, (obj.originalValue), "keyup");
			}
		});
		obj.bindTarget.unbind("keydown.AXInput").bind("keydown.AXInput", function(event) {
			if (
				event.which &&
				(
					event.which > 47 && event.which < 58 ||
					event.which > 36 && event.which < 41 ||
					event.which > 95 && event.which < 106 ||
					event.which == axf.Event.KEY_BACKSPACE ||
					event.which == axf.Event.KEY_TAB ||
					event.which == axf.Event.KEY_RETURN ||
					event.which == axf.Event.KEY_DELETE ||
					event.which == axf.Event.NUMPAD_SUBTRACT ||
					event.which == axf.Event.NUMPAD_DECIMAL ||
					event.which == axf.Event.KEY_MINUS ||
					event.which == axf.Event.KEY_EQUAL ||
					event.which == axf.Event.KEY_PERIOD ||
					event.which == axf.Event.KEY_HOME ||
					event.which == axf.Event.KEY_END
				)
			)
			{

				// 패턴에 따라 제어 소수점 허용안되는 경우 블락
				var isStop = false;

				if (event.which == 190 && (obj.config.pattern == "moneyint" || obj.config.pattern == "numberint")) {
					// 소수점 입력 막기
					isStop = true;
				}
				else if (event.which == axf.Event.KEY_MINUS || event.which == axf.Event.KEY_EQUAL || event.which == axf.Event.KEY_PERIOD) {
					if (
						(
							obj.config.pattern == "money" ||
							obj.config.pattern == "moneyint" ||
							obj.config.pattern == "number" ||
							obj.config.pattern == "numberint"
						) &&
						obj.config.allow_minus
					)
					{

					}
					else {
						isStop = true;
					}
				}
				else if (
					event.which == axf.Event.KEY_BACKSPACE ||
					event.which == axf.Event.KEY_TAB ||
					event.which == axf.Event.KEY_RETURN ||
					event.which == axf.Event.KEY_LEFT ||
					event.which == axf.Event.KEY_RIGHT ||
					event.which == axf.Event.KEY_DELETE ||
					event.which == axf.Event.KEY_HOME ||
					event.which == axf.Event.KEY_END)
				{ // 백스페이스, 탭, 리턴, 좌, 우, delete

					if (event.which == 13) {
						obj.bindTarget.trigger("blur");
					}
				}
				else {

					if (obj.config.pattern.left(8) == "datetime") {
						if (event.target.value.replace(/\D/g, "").length == 14) { // 초까지 입력되게 확장
							isStop = true;
						}
					}
					else if (obj.config.pattern.left(4) == "date") {
						if (event.target.value.replace(/\D/g, "").length == 8) {
							isStop = true;
						}
					}
					else if (obj.config.pattern == "bizno") {
						if (event.target.value.replace(/\D/g, "").length == 10) {
							isStop = true;
						}
					}
					else if (
						obj.config.pattern == "money" ||
						obj.config.pattern == "moneyint" ||
						obj.config.pattern == "number" ||
						obj.config.pattern == "numberint"
					)
					{
						// TODO : 숫자형 패턴에서 문자열의 길이 및, 소수점 자리수 제한 구현
						if (Object.isNumber(obj.config.max_length)) {

							if (event.target.value.replace(/\D/g, "").length >= obj.config.max_length) {
								isStop = true;
							}
						}
						if (!isStop && Object.isNumber(obj.config.max_round)) {
							var dotIndex = 0;
							if ((dotIndex = event.target.value.indexOf(".")) > -1) {
								if (event.target.value.substr(dotIndex + 1).length >= obj.config.max_round) {
									isStop = true;
								}
							}
						}
					}
					else if (Object.isNumber(obj.config.max_length)) {
						if (event.target.value.replace(/[^A-Za-z0-9]/g, "").length == obj.config.max_length.number()) {
							isStop = true;
						}
					}
				}

				if (isStop) eventStop(event);

			}
			else {
				if ((event.ctrlKey || event.metaKey)) {
					obj.bindTarget.data("ctrlKey", "T");
				}
				else {
					obj.bindTarget.data("ctrlKey", "F");

					//trace('block', event.which);
					eventStop(event);
				}
			}
		});
		obj.bindTarget.unbind("keyup.AXInput").bind("keyup.AXInput", function(event) {
			var elem = obj.bindTarget.get(0);
			var elemFocusPosition;
			if ('selectionStart' in elem) {
				// Standard-compliant browsers
				elemFocusPosition = elem.selectionStart;
			}
			else if (document.selection) {
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
			if (!event.keyCode || event.keyCode == axf.Event.KEY_TAB || event.keyCode == 16 || event.keyCode == 17 ||
				event.which == axf.Event.KEY_HOME ||
				event.which == axf.Event.KEY_END) return;

			if ((obj.bindTarget.data("ctrlKey") == "T") && (event.keyCode == 65 || event.keyCode == 91)) return;
			if (event.keyCode != AXUtil.Event.KEY_DELETE && event.keyCode != AXUtil.Event.KEY_BACKSPACE && event.keyCode != AXUtil.Event.KEY_LEFT && event.keyCode != AXUtil.Event.KEY_RIGHT) {
				bindPatternCheck(objID, objSeq, "keyup");
			}
			else if (event.keyCode == AXUtil.Event.KEY_DELETE || event.keyCode == AXUtil.Event.KEY_BACKSPACE) {
				bindPatternCheck(objID, objSeq, "keyup");
			}
		});
		obj.bindTarget.unbind("change.AXInput").bind("change.AXInput", function(event) {
			//bindPatternCheck(objID, objSeq, "change");
		});
		obj.bindTarget.unbind("blur.AXInput").bind("blur.AXInput", function(event) {
			bindPatternCheck(objID, objSeq, "blur");
		});
	},
	bindPatternCheck: function(objID, objSeq, eventType) {
		var obj = this.objects[objSeq];
		var val, nval;
		// callback 함수 대소문자 지원
		if (!obj.config.onBlur) obj.config.onBlur = obj.config.onBlur;
		if (!obj.config.onChange) obj.config.onChange = obj.config.onchange;

		if (eventType == "blur") {

			val = obj.bindTarget.val();
			//trace(val);
			nval = this.bindPatternGetValue(objID, objSeq, val, eventType);
			// 패턴 적용
			obj.bindTarget.val(nval);
			if (val != nval) obj.bindTarget.trigger("change");

			if (Object.isFunction(obj.config.onBlur)) {
				obj.config.onBlur.call({objID: objID, objSeq: objSeq, value: nval});
			}

		}
		else {

			val = obj.bindTarget.val();
			nval = this.bindPatternGetValue(objID, objSeq, val, eventType);
			// 패턴 적용
			obj.bindTarget.val(nval);
			if (val != nval) obj.bindTarget.trigger("change");

			if (!axf.isEmpty(obj.bindTarget.data("focusPosition"))) {
				obj.bindTarget.setCaret(
					obj.bindTarget.data("focusPosition").number() + ( obj.bindTarget.val().length - obj.bindTarget.data("prevLen") )
				);
			}
			if (Object.isFunction(obj.config.onChange)) {
				obj.config.onChange.call({objID: objID, objSeq: objSeq, value: nval});
			}

		}
	},
	bindPatternGetValue: function(objID, objSeq, val, eventType) {
		var obj = this.objects[objSeq];
		var regExpPattern, returnValue = "";

		var getFormatterDate = function(_val, _pattern, ynm, mnd, dnt, tnt) {
			var returnValue = "";
			if (_val == "") {

			}
			else if (eventType == "blur") { // 타이핑 완료
				var nDate = new Date(), needAlert = false;
				if (_val.length > 7) {
					var yy = _val.left(4).number();
					var mm = _val.substr(4, 2).number() - 1;
					var dd = _val.substr(6, 2).number();
				}
				else if (_val.length > 4) {
					var yy = "20" + _val.substr(0, 2);
					var mm = _val.substr(2, 2).number() - 1;
					var dd = _val.substr(4, 2).number();
				}
				else if (_val.length > 2) {
					var yy = nDate.getFullYear();
					var mm = _val.substr(0, 2).number() - 1;
					var dd = _val.substr(2, 2).number();
				}
				else {
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
					|| nDate.getDate() != dd.number())
				{
					needAlert = true;
					nDate = new Date();
				}

				printDate = nDate.print("yyyy" + ynm + "mm" + mnd + "dd");

				if (dnt != " ") {
					printDate += dnt;
				}

				if (_pattern.left(8) == "datetime") {
					if (dnt == " ") printDate += dnt;
					var hh, mm, ss = null;
					if (_val.length > 11) { // hh,mm
						hh = _val.substr(8, 2).number().setDigit(2);
						mm = _val.substr(10, 2).number().setDigit(2);
						ss = _val.substr(12, 2).number().setDigit(2);
					}
					else if (_val.length > 8) {
						hh = _val.substr(8, 2).number().setDigit(2);
						mm = "00";
					}
					else {
						hh = "12";
						mm = "00";
					}
					printDate += hh + tnt + mm + (function() {
							if (ss != null) {
								return tnt + ss;
							}
						})();
				}

				if (needAlert) {
					//alert("날짜 형식이 올바르지 않습니다.");
				}
				returnValue = printDate;

			}
			else { // 타이핑 중
				if (_val.length < 5) {
					returnValue = _val;
				}
				else if (_val.length < 7) {
					returnValue = _val.substr(0, 4) + ynm + _val.substr(4);
				}
				else if (_val.length < 9) {
					returnValue = _val.substr(0, 4) + ynm + _val.substr(4, 2) + mnd + _val.substr(6, 2);
					if (dnt != " ") {
						returnValue += dnt;
					}
				}
				else if (_val.length < 11 && _pattern.left(8) == "datetime") {
					returnValue = _val.substr(0, 4) + ynm + _val.substr(4, 2) + mnd + _val.substr(6, 2) + dnt + _val.substr(8, 2);
				}
				else {
					if (_pattern.left(8) == "datetime") {
						returnValue = _val.substr(0, 4) + ynm + _val.substr(4, 2) + mnd + _val.substr(6, 2) + dnt + _val.substr(8, 2) + tnt + _val.substr(10, 2) + (function() {
								if (_val.substr(12, 2) != "") {
									return tnt + _val.substr(12, 2);
								}
								else {
									return "";
								}
							})();
					}
					else {
						returnValue = _val.substr(0, 4) + ynm + _val.substr(4, 2) + mnd + _val.substr(6, 2);
					}
				}
			}
			return returnValue;
		};
		var getNumberApplyConfig = function(_val, valType) {
			if (valType == "float") {
				if (Object.isNumber(obj.config.max_round)) {
					var dotIndex = 0;
					if ((dotIndex = _val.indexOf(".")) > -1) {
						_val = _val.substring(0, dotIndex + 1) +
							_val.substr(dotIndex + 1).replace(/\D/g, "").left(obj.config.max_round);
					}
				}
			}
			var __val = _val.replace(/\D/g, "");
			if (Object.isNumber(obj.config.max_length)) {
				if (__val.length > obj.config.max_length) {
					if (obj.config.allow_minus && val.left(1) == "-") {
						_val = "-" + __val.left(obj.config.max_length);
					}
					else {
						_val = __val.left(obj.config.max_length);
					}
				}
			}
			__val = null;
			return _val;
		};
		var getFormatterTime = function(_val, _pattern, tnt) {
			var returnValue = "";
			if (_val == "") {

			}
			else if (eventType == "blur") { // 타이핑 완료
				var nDate = new Date(), needAlert = false;
				if (_val.length > 2) {
					var hh = _val.substr(0, 2).number();
					var mi = _val.substr(2, 2).number();
				}
				else if (_val.length > 0) {
					var hh = _val.substr(0, 2).number();
					var mi = 0;
				}
				else {
					var hh = 0;
					var mi = 0;
				}

				if (hh > 23) hh = 23;
				if (mi > 59) mi = 59;

				returnValue = hh.setDigit(2) + tnt + mi.setDigit(2);
			}
			else { // 타이핑 중
				if (_val.length < 3) {
					returnValue = _val;
				}
				else {
					returnValue = _val.substr(0, 2) + tnt + _val.substr(2, 2);
				}
			}
			return returnValue;
		};

		if (
			obj.config.pattern == "money" ||
			obj.config.pattern == "moneyint" ||
			obj.config.pattern == "number" ||
			obj.config.pattern == "numberint"
		)
		{

			if (obj.config.pattern == "moneyint") { // 소수점 포함안함
				//val = val.replace(/[\D,]/g, "");
				val = val.replace(/[^0-9^\-]/g, "");

				if (eventType == "blur") {
					val = getNumberApplyConfig(val, "int");
				}

				if (val == "") {
					returnValue = "";
				}
				else {
					returnValue = Math.ceil(val).money();
				}
			}
			else if (obj.config.pattern == "money") { // 소수점 포함
				//val = val.replace(/[^0-9^\.]/g, "");
				val = val.replace(/[^0-9^\.^\-]/g, "");

				if (eventType == "blur") {
					val = getNumberApplyConfig(val, "float");
				}

				regExpPattern = new RegExp('([0-9])([0-9][0-9][0-9][,.])');

				var arrNumber = val.split('.');
				arrNumber[0] += '.';

				do {
					arrNumber[0] = arrNumber[0].replace(regExpPattern, '$1,$2');
				} while (regExpPattern.test(arrNumber[0]));
				if (arrNumber.length > 1) {
					if (Object.isNumber(obj.config.max_round)) {
						returnValue = arrNumber[0] + arrNumber[1].left(obj.config.max_round);
					}
					else {
						returnValue = arrNumber.join('');
					}
				}
				else {
					returnValue = arrNumber[0].split('.')[0];
				}
				if (eventType == "blur") {
					if (returnValue.right(1) == ".") returnValue = returnValue.replace(/\./g, "");
				}
			}
			else if (obj.config.pattern == "numberint") { // 통화표시 없이 숫자 형태로 입력
				//val = val.replace(/[\D]/g, "");
				val = val.replace(/[^0-9^\-]/g, "");

				if (eventType == "blur") {
					val = getNumberApplyConfig(val, "int");
				}

				if (val == "") {
					returnValue = "";
				}
				else {
					returnValue = Math.ceil(val);
				}
			}
			else if (obj.config.pattern == "number") { // 통화표시 없이 숫자 형태로 입력
				//val = val.replace(/[^0-9^\.]/g, "");
				val = val.replace(/[^0-9^\.^\-]/g, "");

				if (eventType == "blur") {
					val = getNumberApplyConfig(val, "float");
				}

				var arrNumber = val.split('.');
				arrNumber[0] += '.';
				if (arrNumber.length > 1) {
					if (Object.isNumber(obj.config.max_round)) {
						returnValue = arrNumber[0] + arrNumber[1].left(obj.config.max_round);
					}
					else {
						returnValue = arrNumber.join('');
					}
				}
				else {
					returnValue = arrNumber[0].split('.')[0];
				}
				if (eventType == "blur") {
					if (returnValue.right(1) == ".") returnValue = returnValue.replace(/\./g, "");
				}
			}
			if (obj.config.allow_minus) {
				// 첫번째 문자열을 제외하고
				returnValue = returnValue.toString().substring(0, 1) + returnValue.toString().substr(1).replace(/\-/g, "");
			}
			else {
				returnValue = returnValue.toString().replace(/\-/g, "");
			}
		}
		else if (obj.config.pattern == "bizno") {
			val = val.replace(/\D/g, "");
			regExpPattern = /^([0-9]{3})\-?([0-9]{1,2})?\-?([0-9]{1,5})?.*$/;
			returnValue = val.replace(regExpPattern, function(a, b) {
				var nval = [arguments[1]];
				if (arguments[2]) nval.push(arguments[2]);
				if (arguments[3]) nval.push(arguments[3]);
				return nval.join("-");
			});
		}
		else if (obj.config.pattern == "phone") {

			val = val.replace(/\D/g, "");
			regExpPattern = /^(010|011|016|017|018|019)(\d+)*$/;
			var regExpPattern2 = /^(070|080|060|050|02|031|032|033|041|042|043|051|052|053|054|055|061|062|063|064)(\d+)*$/;

			if (regExpPattern.test(val)) { // 휴대전화일 경우
				returnValue = val.replace(regExpPattern, function(a, b) {
					var nval = [arguments[1]];
					if (arguments[2]) {
						if (arguments[2].length < 4) {
							nval.push(arguments[2]);
						}
						else if (arguments[2].length < 8) {
							nval.push(arguments[2].substring(0, 3) + "-" + arguments[2].substr(3));
						}
						else if (arguments[2].length > 8) {
							nval.push(arguments[2].substring(0, 4) + "-" + arguments[2].substr(4, 4) + ", " + arguments[2].substr(8));
						}
						else {
							nval.push(arguments[2].substring(0, 4) + "-" + arguments[2].substr(4, 4));
						}
					}
					return nval.join("-");
				});
			}
			else if (regExpPattern2.test(val)) { // 일반전화일 경우
				returnValue = val.replace(regExpPattern2, function(a, b) {
					var nval = [arguments[1]];
					if (arguments[2]) {
						if (arguments[2].length < 4) {
							nval.push(arguments[2]);
						}
						else if (arguments[2].length < 8) {
							nval.push(arguments[2].substring(0, 3) + "-" + arguments[2].substr(3));
						}
						else if (arguments[2].length > 8) {
							nval.push(arguments[2].substring(0, 4) + "-" + arguments[2].substr(4, 4) + ", " + arguments[2].substr(8));
						}
						else {
							nval.push(arguments[2].substring(0, 4) + "-" + arguments[2].substr(4, 4));
						}
					}
					return nval.join("-");
				});
			}
			else { // 확인안됨.
				var regExpPattern3 = /^([0-9]{3})\-?([0-9]{1,4})?\-?([0-9]{1,4})?\-?([0-9]{1,4})?\-?([0-9]{1,4})?/;
				returnValue = val.replace(regExpPattern3, function(a, b) {
					var nval = [arguments[1]];
					if (arguments[2]) nval.push(arguments[2]);
					if (arguments[3]) nval.push(arguments[3]);
					if (arguments[4]) nval.push(arguments[4]);
					if (arguments[5]) nval.push(arguments[5]);
					return nval.join("-");
				});
			}

		}
		else if (obj.config.pattern == "date") {
			val = val.replace(/\D/g, "");
			returnValue = getFormatterDate(val, obj.config.pattern, "-", "-", " ", ":");
		}
		else if (obj.config.pattern == "date(/)") {
			val = val.replace(/\D/g, "");
			returnValue = getFormatterDate(val, obj.config.pattern, "/", "/", " ", ":");
		}
		else if (obj.config.pattern == "date(년월일)") {
			val = val.replace(/\D/g, "");
			returnValue = getFormatterDate(val, obj.config.pattern, "년", "월", "일", ":");
		}
		else if (obj.config.pattern == "datetime") {
			val = val.replace(/\D/g, "");
			returnValue = getFormatterDate(val, obj.config.pattern, "-", "-", " ", ":");
		}
		else if (obj.config.pattern == "datetime(/)") {
			val = val.replace(/\D/g, "");
			returnValue = getFormatterDate(val, obj.config.pattern, "/", "/", " ", ":");
		}
		else if (obj.config.pattern == "datetime(년월일)") {
			val = val.replace(/\D/g, "");
			returnValue = getFormatterDate(val, obj.config.pattern, "년", "월", "일", "시");
		}
		else if (obj.config.pattern == "time") {
			val = val.replace(/\D/g, "");
			returnValue = getFormatterTime(val, obj.config.pattern, ":");
		}
		else if (obj.config.pattern == "custom") {
			// Z, 9, X
			val = val.replace(/[^0-9^a-z^A-Z]/g, "");
			var ess = val.split("");
			//trace(ess);
			var pss = obj.config.patternString.split("");

			if (eventType == "blur") {
				obj.originalValue = val; // 암호화 되기 전 문자열 저장
				//trace(val);
			}

			var newText = "";
			// TODO : 패턴 문자열의 인덱스와 원본 문자열 인덱스 분리
			// TODO : 포커스 되면 암호화된 문자열 원래 문자열로 변환, 블러되면 문자열 암호화 하고 originalValue 에 저장 -> 나중에 getText 에 이용
			var eidx = 0, pidx = 0;
			while (ess[eidx]) {
				if (pss[pidx] == "9") {
					newText += ess[eidx].number();
					pidx++;
					eidx++;
				}
				else if (pss[pidx] == "Z") {
					if (ess[eidx] > 0) {
						newText += ess[eidx];
					}
					else {
						newText += "1";
					}
					pidx++;
					eidx++;
				}
				else if (pss[pidx] == "X") {
					if (eventType == "blur") {
						newText += "*";
					}
					else {
						newText += ess[eidx];
					}
					pidx++;
					eidx++;
				}
				else if (typeof pss[pidx] != "undefined") {
					newText += pss[pidx];
					pidx++;
				}
				else {
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
		else if (Object.isFunction(obj.config.pattern)) {
			returnValue = obj.config.pattern.call({val: val, objID: objID, config: obj.config}, val);
		}
		else {
			returnValue = val;
		}

		return returnValue;
	},
	bindPatternGetText: function(objID, objSeq) {

		if (!Object.isNumber(objSeq)) {
			/*
			 axf.each(this.objects, function (index, O) {
			 if (O.id == objID) {
			 objSeq = index;
			 return false;
			 }
			 });
			 */
			for (var index = 0; index < this.objects.length; index++) {
				if (this.objects[index].id == objID) {
					objSeq = index;
					break;
				}
			}
		}
		if (!Object.isNumber(objSeq)) return;
		var obj = this.objects[objSeq], val = obj.bindTarget.val();

		var regExpPattern, returnValue = "";
		if (obj.config.pattern == "moneyint") { // 소수점 포함안함
			returnValue = val.replace(/[\D]/g, "");
		}
		else if (obj.config.pattern == "money") { // 소수점 포함
			returnValue = (val == "") ? "" : val.number();
		}
		else if (obj.config.pattern == "bizno") {
			returnValue = val.replace(/\D/g, "");
		}
		else if (obj.config.pattern == "phone") {
			returnValue = val.replace(/\D/g, "");
		}
		else if (obj.config.pattern == "date" || obj.config.pattern == "date(/)" || obj.config.pattern == "date(년월일)") {
			returnValue = val.replace(/\D/g, "");
		}
		else if (obj.config.pattern == "datetime" || obj.config.pattern == "datetime(/)" || obj.config.pattern == "datetime(년월일)") {
			returnValue = val.replace(/\D/g, "");
		}
		else if (obj.config.pattern == "time") {
			returnValue = val.replace(/\D/g, "");
		}
		else if (obj.config.pattern == "custom") {
			returnValue = obj.originalValue;
		}
		else if (Object.isFunction(obj.config.depattern)) {
			returnValue = obj.config.depattern.call({val: val, objID: objID, config: obj.config}, val);
		}
		else {
			returnValue = val;
		}

		return returnValue;
	},
	bindPatternGetDisplayText: function(objID, objSeq) {

		if (!Object.isNumber(objSeq)) {
			/*
			 axf.each(this.objects, function (index, O) {
			 if (O.id == objID) {
			 objSeq = index;
			 return false;
			 }
			 });
			 */
			for (var index = 0; index < this.objects.length; index++) {
				if (this.objects[index].id == objID) {
					objSeq = index;
					break;
				}
			}
		}
		if (!Object.isNumber(objSeq)) return;
		var obj = this.objects[objSeq], val = obj.bindTarget.val();

		var regExpPattern, returnValue = "";
		if (Object.isFunction(obj.config.depattern)) {
			returnValue = obj.config.depattern.call({val: val, objID: objID, config: obj.config}, val);
		}
		else {
			returnValue = val;
		}

		return returnValue;
	},
	bindPatternSetText: function(objID, objSeq, val) {
		if (!Object.isNumber(objSeq)) {
			/*
			 axf.each(this.objects, function (index, O) {
			 if (O.id == objID) {
			 objSeq = index;
			 return false;
			 }
			 });
			 */
			for (var index = 0; index < this.objects.length; index++) {
				if (this.objects[index].id == objID) {
					objSeq = index;
					break;
				}
			}
		}
		if (!Object.isNumber(objSeq)) return;
		var obj = this.objects[objSeq];
		obj.bindTarget.val(this.bindPatternGetValue(objID, objSeq, val, "blur"));
		obj.bindTarget.trigger("change");
	},

	/**
	 * bindTagSelector
	 */
	bindTagSelector: function(objID, objSeq) {
		var _this = this, cfg = this.config,
			obj = this.objects[objSeq], po, h;

		if (!obj.config.onchange) obj.config.onchange = obj.config.onChange;
		if (!obj.bindAnchorTarget) obj.bindAnchorTarget = axdom("#" + cfg.targetID + "_AX_" + objID);
		if (!obj.bindTarget) obj.bindTarget = axdom("#" + objID);
		if (!obj.bindTarget_paddingTop) obj.bindTarget_paddingTop = obj.bindTarget.css("padding-top");

		obj.bindTarget.css({"box-sizing": "content-box", "padding": obj.bindTarget_paddingTop});

		// 저장된 태그 리스트
		obj.tagList = [];
		obj.deletedTagList = [];

		obj.bindAnchorTarget.show();
		h = obj.bindAnchorTarget.data("height") - 2;

		po = [];
		po.push('<div id="' + cfg.targetID + '_AX_' + objID + '_AX_tagContainer" class="AXTag-selector-tagcontainer">');
		po.push('</div>');
		obj.bindAnchorTarget.html(po.join(''));
		obj.tagContainer = obj.bindAnchorTarget.find('#' + cfg.targetID + '_AX_' + objID + '_AX_tagContainer');

		// 태그 컨테이너 클릭 이벤트 연결

		obj.tagContainer.bind("click", (function(e) {
			var event_type = "";
			e = e || window.event;
			var target = axf.get_event_target(e.target, function(el) {
				if (axdom(el).hasClass("AXTag-selector-tagitem-remove")) {
					event_type = "remove";
					return true;
				}
				else if (axdom(el).hasClass("AXTag-selector-tagitem")) {
					event_type = "item";
					return true;
				}
			});

			if (target && event_type == "remove") {
				this.bindTagSelector_removeItem(objID, objSeq, axdom(target).attr("data-tag-index"));
			}
			else if (!target) obj.bindTarget.focus();

		}).bind(this));

		// 옵션 박스 패널
		obj.tagExpandBoxId = cfg.targetID + "_AX_" + objID + "_AX_expandBox";

		obj.bindTarget.unbind("focus.AXTagSelector").bind("focus.AXTagSelector", function(event) {
			if (obj.keydownTimer) clearTimeout(obj.keydownTimer);
			obj.keydownTimer = setTimeout((function(event) {
				if (event.target.value != "") _this.bindTagSelector_onkeydown(event, objID, objSeq);
			}).bind(_this, event), 100);
		});
		obj.bindTarget.unbind("keydown.AXTagSelector").bind("keydown.AXTagSelector", function(event) {
			if (obj.bindAnchorTarget.attr("disable") == "disable" || obj.bindTarget.attr("disable") == "disable") return false;

			if (obj.keydownTimer) clearTimeout(obj.keydownTimer);
			obj.keydownTimer = setTimeout((function(event) {
				_this.bindTagSelector_onkeydown(event, objID, objSeq);
			}).bind(_this, event), 100);
		});
	},
	bindTagSelector_onkeydown: function(e, objID, objSeq) {
		var _this = this, cfg = this.config,
			obj = this.objects[objSeq], po,
			anchorWidth, anchorHeight, styles, focusedIndex;

		if (e.type == "keydown") {
			if (e.target.value == "" && e.keyCode == axf.Event.KEY_BACKSPACE) {
				if (obj.tagList.length > 0) {
					if (obj.ready_backspace) {
						this.bindTagSelector_removeItem(objID, objSeq, obj.tagList.length - 1);
						this.bindTagSelector_close(objID, objSeq);
						obj.config.focusedIndex = undefined;
						delete obj.ready_backspace;
					}
					else {
						obj.ready_backspace = true;
					}
				}
				return this;
			}
			else {
				delete obj.ready_backspace;
			}

			if (
				e.keyCode == axf.Event.KEY_RETURN ||
				e.keyCode == axf.Event.KEY_DOWN ||
				e.keyCode == axf.Event.KEY_UP
			)
			{
				if (!AXgetId(obj.tagExpandBoxId)) return this;
				if (e.keyCode == axf.Event.KEY_RETURN) {
					if (typeof obj.config.focusedIndex !== "undefined") {
						this.bindTagSelector_addItem(objID, objSeq, obj.config.focusedIndex);
						this.bindTagSelector_close(objID, objSeq);
						obj.config.focusedIndex = undefined;
					}
				}
				else if (e.keyCode == axf.Event.KEY_DOWN) {
					focusedIndex = 0;
					if (typeof obj.config.focusedIndex !== "undefined") {
						axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_" + obj.config.focusedIndex + "_AX_option").removeClass("on");
						focusedIndex = Number(obj.config.focusedIndex) + 1;
						if (obj.config.options.length <= focusedIndex) focusedIndex = obj.config.options.length - 1;
					}
					axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_" + focusedIndex + "_AX_option").addClass("on");
					obj.config.focusedIndex = focusedIndex;
					obj.myUIScroll.focusElement(cfg.targetID + "_AX_" + objID + "_AX_" + focusedIndex + "_AX_option"); //focus
				}
				else if (e.keyCode == axf.Event.KEY_UP) {
					focusedIndex = 0;
					if (typeof obj.config.focusedIndex !== "undefined") {
						axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_" + obj.config.focusedIndex + "_AX_option").removeClass("on");
						focusedIndex = Number(obj.config.focusedIndex) - 1;
						if (0 > focusedIndex) focusedIndex = 0;
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
				obj.tagExpandBox.css({"position": "fixed"});
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
			axdom(document.body).unbind("click.AXTagSelector").bind("click.AXTagSelector", (function(e) {
				if (obj.blurTimer) clearTimeout(obj.blurTimer);
				obj.blurTimer = setTimeout(function() {
					_this.bindTagSelector_onclick(e || window.event, objID, objSeq);
				}, 100);
			}).bind(this));
			obj.bindTarget.unbind("blur.AXTagSelector").bind("blur.AXTagSelector", (function(e) {
				if (obj.blurTimer) clearTimeout(obj.blurTimer);
				obj.blurTimer = setTimeout(function() {
					_this.bindTagSelector_onclick(e || window.event, objID, objSeq);
				}, 700);
			}).bind(this));
		}
		this.bindTagSelector_setOptions(objID, objSeq, obj.bindTarget.val());
	},
	bindTagSelector_setOptions: function(objID, objSeq, kword) {
		var _this = this, cfg = this.config,
			obj = this.objects[objSeq], po,
			maxHeight = obj.config.maxHeight || 130,
			next_fn;

		obj.deletedTagList = [];
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
					if (reAt.test((obj.config.options[i][obj.config.reserveKeys.optionText] || ""))) {
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
			}
			else {
				if (obj.config.focusedIndex != undefined) {
					axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_" + obj.config.focusedIndex + "_AX_option").removeClass("on");
				}
			}
		};

		var get_options = function(options) {
			var npo = [];
			for (var i = 0, l = options.length; i < l; i++) {
				var O = options[i];
				// options의 optionText, optionDesc의 참조값을 디코딩해서 디코딩은 한 번만 사용하도록 변경
				O[obj.config.reserveKeys.optionText] = (O[obj.config.reserveKeys.optionText] ? O[obj.config.reserveKeys.optionText].dec() : "");
				O.desc = (O.desc ? O.desc.dec() : "");
				O.optionDesc = (O.optionDesc ? O.optionDesc.dec() : "");

				var descStr = O.desc || O.optionDesc, styles;
				if (descStr != "") descStr = "<span>" + descStr + "</span>";

				styles = "";
				for (var ti = 0, tl = obj.tagList.length, tag; ti < tl; ti++) {
					tag = obj.tagList[ti];
					//trace(tag[obj.config.reserveKeys.optionValue] == O[obj.config.reserveKeys.optionValue]);
					if (tag[obj.config.reserveKeys.optionValue] == O[obj.config.reserveKeys.optionValue]) {
						styles = ' style="text-decoration: line-through;"';
					}
				}
				npo.push("<a " + obj.config.href + " id=\"" + cfg.targetID + "_AX_" + objID + "_AX_" + i + "_AX_option\" class=\"bindSelectorNodes\" " + styles + ">"
					+ O[obj.config.reserveKeys.optionText] + descStr + "</a>");
			}
			return npo;
		};

		if (obj.config.ajaxUrl && kword != "") {

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
				pars = selectorName + "=" + (kword || "").enc();
			}
			else if ((typeof pars).toLowerCase() == "string") {
				pars += "&" + selectorName + "=" + kword.enc();
			}
			else if ((typeof pars).toLowerCase() == "object") {
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
				onsucc: function(res) {

					if (!res.error) {

						obj.config.options = (res[obj.config.reserveKeys.options] || []);
						obj.config.focusedIndex = undefined;
						po = get_options(obj.config.options);
						next_fn.call(_this);

					}
					else {
						axf.alert(res.error);
					}
					obj.inProgress = false;
				}
			});

		}
		else if (obj.config.onsearch) {
			var res = obj.config.onsearch.call(
				{
					id: objID,
					value: kword
				},
				objID,
				kword,
				(function(res) {
					obj.config.options = res;
					obj.config.focusedIndex = undefined;
					po = get_options(obj.config.options);
					next_fn.call(_this);
				}).bind(this)
			);
		}
		else {
			//var optionPrintLength = obj.config.optionPrintLength || 100;
			if (!obj.config.options) {
				console.log("config.options is not defined");
				return this;
			}

			po = get_options(obj.config.options);

			//  옵션리스트 구성완료 후 처리
			next_fn.call(this);
		}
	},
	bindTagSelector_onclick: function(e, objID, objSeq) {
		var _this = this, cfg = this.config,
			obj = this.objects[objSeq];

		if (e.type == "blur") {
			this.bindTagSelector_close(objID, objSeq);
		}
		else if (e.type == "click") {
			var click_type = "";
			var target = axf.get_event_target(e.target, function(el) {
				if (axdom(el).hasClass("bindSelectorNodes")) {
					click_type = "option";
					return true;
				}
				else if (el.id == objID) {
					click_type = "input";
					return true;
				}
			});

			if (target) {
				//console.log(target, click_type);
				if (click_type == "option") {
					// get option index
					var ids = target.id.split(/_AX_/g);
					var optionIndex = ids[ids.length - 2];
					this.bindTagSelector_addItem(objID, objSeq, optionIndex);
					this.bindTagSelector_close(objID, objSeq);
				}
				else if (click_type == "input") {
					// 입풋을 누르다니..
				}
			}
			else {
				this.bindTagSelector_close(objID, objSeq);
			}
		}
		//trace(e.type);
		//trace(objID, objSeq);
	},
	bindTagSelector_close: function(objID, objSeq) {
		var _this = this, cfg = this.config,
			obj = this.objects[objSeq];

		if (obj.tagExpandBox) obj.tagExpandBox.remove();
		axdom(document.body).unbind("click.AXTagSelector");
		obj.bindTarget.unbind("blur.AXTagSelector");
	},
	bindTagSelector_addItem: function(objID, objSeq, optionIndex) {
		var _this = this, cfg = this.config,
			obj = this.objects[objSeq], objName, po, addOption, pass_add;

		if (isNaN(Number(optionIndex))) {
			console.log("optionIndex is NaN");
			return this;
		}

		//obj.tagList 태그저장리스트
		addOption = obj.config.options[optionIndex];
		pass_add = true; // 등록 허용
		for (var i = 0, l = obj.tagList.length, tag; i < l; i++) {
			tag = obj.tagList[i];
			if (tag[obj.config.reserveKeys.optionValue] == addOption[obj.config.reserveKeys.optionValue]) {
				pass_add = false; // 이미 등록된 값이 존재함.
				break;
			}
		}
		if (pass_add) {
			objName = obj.bindTarget.attr("name");
			po = [];
			if (!obj.config.optionValue_inputName) obj.config.optionValue_inputName = objName;
			po.push('<span class="AXTag-selector-tagitem" data-option-value="' + addOption[obj.config.reserveKeys.optionValue] + '">');
			if (obj.config.optionValue_inputName) po.push('<input type="hidden" name="' + obj.config.optionValue_inputName + '" value="' + addOption[obj.config.reserveKeys.optionValue] + '" />');
			if (obj.config.optionText_inputName) po.push('<input type="hidden" name="' + obj.config.optionText_inputName + '" value="' + addOption[obj.config.reserveKeys.optionText] + '" />');

			po.push(addOption[obj.config.reserveKeys.optionText]);
			po.push('<span class="AXTag-selector-tagitem-remove" data-tag-index="' + obj.tagList.length + '"></span>');
			po.push('</span>');
			obj.tagContainer.append(po.join(''));
			obj.tagList.push(addOption);
			//
			obj.bindTarget.css({"padding-top": obj.tagContainer.height()}).val('');
			obj.bindAnchorTarget.data("height", obj.bindTarget.outerHeight());
			axdom(window).resize();
		}
	},
	bindTagSelector_removeItem: function(objID, objSeq, tagIndex) {
		var _this = this, cfg = this.config,
			obj = this.objects[objSeq], po, objName = obj.bindTarget.attr("name");
		;

		if (typeof tagIndex !== "undefined") {
			obj.tagContainer.find('[data-tag-index="' + tagIndex + '"]').remove();
			obj.deletedTagList.push(obj.tagList[tagIndex]);
			obj.tagList.splice(tagIndex, 1);
		}

		po = [];
		for (var i = 0, l = obj.tagList.length, tag; i < l; i++) {
			tag = obj.tagList[i];
			po.push('<span class="AXTag-selector-tagitem" data-option-value="' + tag[obj.config.reserveKeys.optionValue] + '">');
			po.push('<input type="hidden" name="' + objName + '" value="' + tag[obj.config.reserveKeys.optionValue] + '" />');
			po.push(tag[obj.config.reserveKeys.optionText]);
			po.push('<span class="AXTag-selector-tagitem-remove" data-tag-index="' + i + '"></span>');
			po.push('</span>');
		}
		obj.tagContainer.html(po.join(''));

		if (obj.tagList.length == 0) {
			obj.bindTarget.css({"padding-top": obj.bindTarget_paddingTop}).val('');
		}
		else {
			obj.bindTarget.css({"padding-top": obj.tagContainer.height()}).val('');
		}

		obj.bindAnchorTarget.data("height", obj.bindTarget.outerHeight());
		axdom(window).resize();
	},
	bindTagSelector_setItem: function(objID, tags) {
		var cfg = this.config,
			objSeq = null, obj;
		for (var i = 0, l = this.objects.length; i < l; i++) {
			if (this.objects[i].id === objID) {
				objSeq = i;
				break;
			}
		}
		obj = this.objects[objSeq];
		obj.deletedTagList = [];

		if (Object.isArray(tags)) {
			obj.tagList = [];
			for (var i = 0, l = tags.length, tag; i < l; i++) {
				var tag = tags[i];
				if (typeof tag[obj.config.reserveKeys.optionValue] === "undefined") tag[obj.config.reserveKeys.optionValue] = tag.toString();
				if (typeof tag[obj.config.reserveKeys.optionText] === "undefined") tag[obj.config.reserveKeys.optionText] = tag.toString();
				obj.tagList.push(tag);
			}
			this.bindTagSelector_removeItem(objID, objSeq);
		}
		return this;
	},
	bindTagSelector_getItem: function(objID) {
		var cfg = this.config,
			objSeq = null, obj;
		for (var i = 0, l = this.objects.length; i < l; i++) {
			if (this.objects[i].id === objID) {
				objSeq = i;
				break;
			}
		}
		obj = this.objects[objSeq];
		return {list: obj.tagList, deletedList: obj.deletedTagList};
	}
});

var AXInputPro = new AXInputConverterPro();
AXInputPro.setConfig({targetID: "inputBasic"});

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
axdom.fn.bindPattern = function(config) {
	axf.each(this, function() {
		if (!this.id) this.id = "AXInputPro-" + axf.getUniqueId();
		config = config || {};
		config.id = this.id;
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
axdom.fn.bindPatternSetConfig = function(config) {
	axf.each(this, function() {
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
axdom.fn.bindPatternGetText = function() {
	var returnVals = "";
	axf.each(this, function() {
		var getVal = AXInputPro.bindPatternGetText(this.id);
		if (returnVals == "") {
			returnVals = getVal;
		}
		else {
			if (Object.isString(returnVals)) {
				returnVals = [returnVals]; // 형변환
				returnVals.push(getVal);
			}
			else if (Object.isArray(returnVals)) {
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
axdom.fn.bindPatternSetText = function(val) {
	axf.each(this, function() {
		AXInputPro.bindPatternSetText(this.id, null, val);
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

axdom.fn.bindPatternGetDisplayText = function() {
	var returnVals = "";
	axf.each(this, function() {
		var getVal = AXInputPro.bindPatternGetDisplayText(this.id);
		if (returnVals == "") {
			returnVals = getVal;
		}
		else {
			if (Object.isString(returnVals)) {
				returnVals = [returnVals]; // 형변환
				returnVals.push(getVal);
			}
			else if (Object.isArray(returnVals)) {
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
axdom.fn.bindTagSelector = function(config) {
	axf.each(this, function() {
		if (!this.id) this.id = "AXInputPro-" + axf.getUniqueId();
		config = config || {};
		config.id = this.id;
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
axdom.fn.bindTagSelector_setItem = function(list) {
	axf.each(this, function() {
		AXInputPro.bindTagSelector_setItem(this.id, list);
	});
	return this;
};

/**
 * @method jQueryFns.bindTagSelector_getItem
 * @returns Object
 * @description
 * @example
 * ```js
 * //sample
 * $("#ax-bind-pattern-custom-target").bindTagSelector_getItem();
 * ```
 */
axdom.fn.bindTagSelector_getItem = function() {
	if (this[0])
		return AXInputPro.bindTagSelector_getItem(this[0].id);
}


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
    windowResizeApply: function () {
        // 사용안함
        if (this.windowResizeObserver) clearTimeout(this.windowResizeObserver);
        this.alignAllAnchor();
    },
    alignAllAnchor: function () {
        for (var i = 0; i < this.objects.length; i++) {
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
            objDom.css({visibility: "visible"});

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
        if (!AXgetId(obj.id)) {
            obj.id = "AXSelect-" + axf.getUniqueId();
        }

        var objID = obj.id, objSeq = null, objConfig = {}, reserveKeys = jQuery.extend({}, cfg.reserveKeys);
        objConfig = jQuery.extend(objConfig, obj, true);
        if (typeof objConfig.reserveKeys == "undefined") objConfig.reserveKeys = {};
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
            this.objects.push({id: objID, anchorID: cfg.targetID + "_AX_" + objID, config: objConfig});
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
        if (this.isMobile) iobj.before(anchorNode);
        else iobj.after(anchorNode);

        var iobjPosition = iobj.position();
        var l = iobjPosition.left, t = iobjPosition.top, w = 0, h = 0;

        w = iobj.outerWidth();
        h = iobj.outerHeight();

        var css = {left: l, top: t, width: w, height: h}, objDom = axdom("#" + cfg.targetID + "_AX_" + objID);
        objDom.css(css);
        objDom.data("height", h);

        obj.iobj = iobj;
        obj.objDom = objDom;
        // TODO : obj에 iobj, objDom 연결
    },
    alignAnchor: function (objID, objSeq) {
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

        var css = {left: l, top: t, width: w, height: h};
        obj.objDom.css(css);
        obj.objDom.data("height", h);

        obj.objDom.find("#" + cfg.targetID + "_AX_" + objID + "_AX_SelectBox").css({width: w, height: h});
        obj.objDom.find("#" + cfg.targetID + "_AX_" + objID + "_AX_SelectTextBox").css({height: (h - (borderT + borderB)) + "px"});

        obj.objDom.find("#" + cfg.targetID + "_AX_" + objID + "_AX_SelectText").css({"line-height": (h - (borderT + borderB)) + "px"});
        obj.objDom.find("#" + cfg.targetID + "_AX_" + objID + "_AX_SelectBoxArrow").css({height: h});
    },
    bindSelect: function (objID, objSeq) {
        var cfg = this.config, _this = this;
        var obj = this.objects[objSeq], options, sendObj;

        var iobj = obj.iobj;
        var objDom = obj.objDom;

        if (!obj.config.onChange) obj.config.onChange = obj.config.onchange;
        if (!obj.config.onLoad) obj.config.onLoad = obj.config.onload;

        var w = objDom.width();
        var h = objDom.data("height");
        var borderT = iobj.css("border-top-width").number();
        var borderB = iobj.css("border-bottom-width").number();
        //trace(obj.config);

        var fontSize = iobj.css("font-size").number();
        var tabIndex = iobj.attr("tabindex");

        var po = [];
        po.push("<div id=\"" + cfg.targetID + "_AX_" + objID + "_AX_SelectBox\" class=\"" + cfg.anchorSelectClassName + "\" style=\"width:" + w + "px;height:" + h + "px;\">");
        po.push("<a " + obj.config.href + " class=\"selectedTextBox\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_SelectTextBox\" style=\"height:" + (h - (borderT + borderB)) + "px;\"");
        po.push(" data-ax-anchor=\"axselect\" ");
        if (iobj.attr("data-return-tab-next-focus-id")) po.push(" data-return-tab-next-focus-id = \"" + iobj.attr("data-return-tab-next-focus-id") + "\"");
        if (iobj.attr("data-return-tab-prev-focus-id")) po.push(" data-return-tab-prev-focus-id = \"" + iobj.attr("data-return-tab-prev-focus-id") + "\"");
        if (tabIndex != undefined) po.push(" tabindex=\"" + tabIndex + "\"");
        po.push(">");
        po.push("	<div class=\"selectedText\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_SelectText\" style=\"line-height:" + (h - (borderT + borderB)) + "px;padding:0px 4px;font-size:" + fontSize + "px;\"></div>");
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
            options.push({optionValue: AXgetId(objID).options[oi].value, optionText: AXgetId(objID).options[oi].text.enc()});
        }
        obj.options = AXUtil.copyObject(options);

        if (this.isMobile) {

            // mobile 브라우저인 경우
            iobj.css({opacity: 0});
            var bindSelectChange = this.bindSelectChange.bind(this);
            obj.objOnChange = function () {
                bindSelectChange(objID, objSeq);

                if (obj.config.onChange) {
                    obj.selectedIndex = AXgetId(objID).options.selectedIndex;
                    AXgetId(objID).options[obj.selectedIndex].selected = true;
                    obj.config.selectedObject = obj.options[obj.selectedIndex];

                    options = AXgetId(objID).options[obj.selectedIndex];
                    sendObj = {
                        optionIndex: obj.selectedIndex, optionValue: options.value, optionText: options.text,
                        value: options.value, text: options.text
                    };
                    obj.config.onChange.call(sendObj, sendObj);
                }

            };
            objDom_selectTextBox.unbind("click.AXSelect").bind("click.AXSelect", function (event) {
                axdom("#" + objID).click();
            });

            iobj.addClass("rootSelectBox");
            iobj.bind("change.AXSelect", obj.objOnChange);

        } else {
            //AXUtil.alert(obj.options);

            // PC 브라우저인 경우
            iobj
                .css({visibility: "hidden"});

            var bindSelectExpand = this.bindSelectExpand.bind(this);
            var bindSelectClose = this.bindSelectClose.bind(this);
            var bindSelectFocus = this.bindSelectFocus.bind(this);
            var bindSelectBlur = this.bindSelectBlur.bind(this);

            objDom_selectTextBox.bind("click.AXSelect", function (event) {
                axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SelectTextBox").focus();
                bindSelectExpand(objID, objSeq, true, event);
            });

            objDom_selectTextBox.bind("keydown.AXSelect", function (event) {
                if (event.keyCode == AXUtil.Event.KEY_SPACE) {
                    bindSelectExpand(objID, objSeq, true, event);
                    _this.stopEvent(event);
                }
                if (event.keyCode == AXUtil.Event.KEY_TAB || event.keyCode == AXUtil.Event.KEY_RETURN) return;
                //trace(String.fromCharCode(event.keyCode));

                if (_this.selectTextBox_onkeydown_obj) {
                    clearTimeout(_this.selectTextBox_onkeydown_obj);
                    _this.selectTextBox_onkeydown_data += String.fromCharCode(event.keyCode);
                } else {
                    _this.selectTextBox_onkeydown_data = String.fromCharCode(event.keyCode);
                }

                _this.selectTextBox_onkeydown_obj = setTimeout(function () {
                    _this.selectTextBox_onkeydown(objID, objSeq, event);
                }, 300);
            });

            objDom_selectTextBox.bind("focus.AXSelect", function (event) {
                bindSelectFocus(objID);
            });

            objDom_selectTextBox.bind("blur.AXSelect", function (event) {
                bindSelectBlur(objID);
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
                            po.push("<option value='" + (obj.config.isspaceValue || "") + "'");
                            if (obj.selectedIndex == 0) po.push(" selected=\"selected\"");
                            po.push(">" + (obj.config.isspaceTitle || "&nbsp;") + "</option>");
                            adj = -1;
                        }
                        for (var opts, oidx = 0; (oidx < res[obj.config.reserveKeys.options].length && (opts = res[obj.config.reserveKeys.options][oidx])); oidx++) {
                            //trace(opts);
                            po.push("<option value=\"" + opts[obj.config.reserveKeys.optionValue] + "\" data-option=\"" + opts[obj.config.reserveKeys.optionData] + "\" ");
                            if (obj.config.setValue == opts[obj.config.reserveKeys.optionValue] || opts.selected || (obj.selectedIndex || 0).number() + adj == oidx) po.push(" selected=\"selected\"");
                            po.push(">" + opts[obj.config.reserveKeys.optionText].dec() + "</option>");
                        }
                        axdom("#" + objID).html(po.join(''));

                        var options = [];
                        for (var oi = 0; oi < AXgetId(objID).options.length; oi++) {
                            options.push({
                                optionValue: AXgetId(objID).options[oi].value,
                                optionText: AXgetId(objID).options[oi].text.enc(),
                                optionData: AXgetId(objID).options[oi].getAttribute("data-option")
                            });
                        }
                        obj.options = AXUtil.copyObject(options);
                        obj.selectedIndex = AXgetId(objID).options.selectedIndex;

                        if (obj.config.onChange && obj.config.alwaysOnChange) {
                            obj.config.focusedIndex = obj.selectedIndex;
                            obj.config.selectedObject = obj.options[obj.selectedIndex];
                            sendObj = {
                                optionIndex: obj.selectedIndex,
                                optionValue: obj.options[obj.selectedIndex].optionValue,
                                optionText: obj.options[obj.selectedIndex].optionText,
                                optionData: obj.options[obj.selectedIndex].optionData,
                                value: obj.options[obj.selectedIndex].optionValue,
                                text: obj.options[obj.selectedIndex].optionText,
                                data: obj.options[obj.selectedIndex].optionData
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
        else if (obj.config.options) {

            iobj.html("<option></option>");

            var po = [], adj = 0;
            if (obj.config.isspace) {
                po.push("<option value='" + (obj.config.isspaceValue || "") + "'");
                if (obj.selectedIndex == 0) po.push(" selected=\"selected\"");
                po.push(">" + (obj.config.isspaceTitle || "&nbsp;") + "</option>");
                adj = -1;
            }

            for (var opts, oidx = 0; (oidx < obj.config.options.length && (opts = obj.config.options[oidx])); oidx++) {
                //[obj.config.reserveKeys.optionValue]
                //[obj.config.reserveKeys.optionText]
                var optionText = (opts[obj.config.reserveKeys.optionText] || "").dec();
                po.push("<option value=\"" + opts[obj.config.reserveKeys.optionValue] + "\"");
                if (obj.config.setValue == opts[obj.config.reserveKeys.optionValue] || opts.selected || obj.selectedIndex.number() + adj == oidx) po.push(" selected=\"selected\"");
                po.push(">" + optionText + "</option>");
            }
            iobj.html(po.join(''));

            var options = [];
            for (var oi = 0; oi < AXgetId(objID).options.length; oi++) {
                options.push({optionValue: AXgetId(objID).options[oi].value, optionText: AXgetId(objID).options[oi].text.enc()});
            }
            obj.options = AXUtil.copyObject(options);
            obj.selectedIndex = AXgetId(objID).options.selectedIndex;

            this.bindSelectChange(objID, objSeq, "load");

            if (obj.config.onChange && obj.config.alwaysOnChange) {
                obj.config.focusedIndex = obj.selectedIndex;
                obj.config.selectedObject = obj.options[obj.selectedIndex];

                options = AXgetId(objID).options[obj.selectedIndex];
                if (!options) {
                    options = {value: "", text: ""};
                }
                sendObj = {
                    optionIndex: obj.selectedIndex, optionValue: options.value, optionText: options.text,
                    value: options.value, text: options.text
                };
                obj.config.onChange.call(sendObj, sendObj, "isPostBack");
            }

            if (obj.config.onLoad) {
                var selectedOption = this.getSelectedOption(objID, objSeq);
                obj.config.onLoad.call({selectedIndex: obj.selectedIndex, selectedObject: {optionValue: selectedOption.value, optionText: selectedOption.text}});
            }
            this.alignAnchor(objID, objSeq);
        }
        else {
            this.bindSelectChange(objID, objSeq, "load");
            if (obj.config.onChange && obj.config.alwaysOnChange) {
                var selectedOption = this.getSelectedOption(objID, objSeq);
                if (selectedOption) {
                    sendObj = {
                        optionIndex: selectedOption.index,
                        optionValue: selectedOption.value,
                        optionText: selectedOption.text,
                        value: selectedOption.value,
                        text: selectedOption.text
                    };
                    obj.config.onChange.call(sendObj, sendObj, "isPostBack");
                }
            }
            if (obj.config.onLoad) {
                var selectedOption = this.getSelectedOption(objID, objSeq);
                obj.config.onLoad.call({selectedIndex: obj.selectedIndex, selectedObject: {optionValue: selectedOption.value, optionText: selectedOption.text}});
            }
            this.alignAnchor(objID, objSeq);
        }
    },
    selectTextBox_onkeydown: function (objID, objSeq, event) {
        var cfg = this.config, _this = this;
        var obj = this.objects[objSeq];

        var bindSelectClose = this.bindSelectClose.bind(this);
        var chkVal = (_this.selectTextBox_onkeydown_data || ""), chkIndex = null;

        for (var O, index = 0; (index < obj.options.length && (O = obj.options[index])); index++) {
            if (O.optionValue.left(chkVal.length).lcase() == chkVal.lcase() || O.optionText.left(chkVal.length).lcase() == chkVal.lcase()) {
                chkIndex = index;
                break;
            }
        }
        ;
        if (chkIndex != null) {
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

        if (AXgetId(objID) && AXgetId(objID).options.selectedIndex > -1) {
            try {
                if (obj.selectedIndex != AXgetId(objID).options.selectedIndex) obj.selectedIndex = AXgetId(objID).options.selectedIndex;
            } catch (e) {
            }
            var options = AXgetId(objID).options[AXgetId(objID).options.selectedIndex];
            return {
                value: options.value, text: options.text, data: options.getAttribute("data-option"), index: AXgetId(objID).options.selectedIndex
            }
        } else {
            obj.selectedIndex = 0;
            var options = AXgetId(objID).options[0];
            options = (options) ? {value: options.value, text: options.text, data: options.getAttribute("data-option")} : {value: "", text: "", data: ""};
            return {
                value: options.value, text: options.text, data: options.data, index: 0
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
        if (obj && !this.isMobile) {
            if (!obj.iobj) obj.iobj = axdom("#" + objID);
            if (isLoad != "load") obj.iobj.trigger("change"); // change 이벤트 발생
        }
    },
    bindSelectExpand: function (objID, objSeq, isToggle, event) {
        var _this = this;
        var cfg = this.config;
        var obj = this.objects[objSeq];
        var jqueryTargetObjID = axdom("#" + cfg.targetID + "_AX_" + objID);
        //Selector Option box Expand

        if (jqueryTargetObjID.data("disabled")) return;


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

        if (obj.config.positionFixed) {
            expandBox.css({"position": "fixed"});
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
        //css.top = offset.top;
        css.left = offset.left;

        var bodyHeight;
        (AXUtil.docTD == "Q") ? bodyHeight = document.body.scrollHeight : bodyHeight = document.documentElement.scrollHeight;
        //trace({bodyHeight:bodyHeight, top:css.top});

        if (!obj.config.positionFixed) {
            if (bodyHeight < css.top.number() + expBoxHeight) {
                css = {
                    top: offset.top - expBoxHeight,
                    left: offset.left
                }
            }
        }

        expandBox.css(css);

        // onexpand 함수가 존재 한다면
        if (obj.config.onexpand) {
            obj.config.onexpand.call({
                obj: obj,
                objID: objID,
                objSeq: objSeq
            }, function (args) {
                if (typeof args != "undefined") {
                    obj.options = obj.config.options = axf.copyObject(args.options);

                    var po = [], adj = 0;
                    if (obj.config.isspace) {
                        po.push("<option value='" + (obj.config.isspaceValue || "") + "'");
                        if (obj.selectedIndex == 0) po.push(" selected=\"selected\"");
                        po.push(">" + (obj.config.isspaceTitle || "&nbsp;") + "</option>");
                        adj = -1;
                    }
                    for (var opts, oidx = 0; oidx < obj.options.length; oidx++) {
                        var opts = obj.options[oidx];
                        po.push("<option value=\"" + opts[obj.config.reserveKeys.optionValue] + "\" data-option=\"" + opts[obj.config.reserveKeys.optionData] + "\" ");
                        if (obj.config.setValue == opts[obj.config.reserveKeys.optionValue] || opts.selected || (obj.selectedIndex || 0).number() + adj == oidx) po.push(" selected=\"selected\"");
                        po.push(">" + opts[obj.config.reserveKeys.optionText].dec() + "</option>");
                    }
                    axdom("#" + objID).html(po.join(''));

                    _this.bindSelectSetOptions(objID, objSeq);
                    _this.alignAnchor(objID, objSeq);
                }
            });
        } else {
            this.bindSelectSetOptions(objID, objSeq);
        }
    },
    bindSelectClose: function (objID, objSeq, event) {
        var obj = this.objects[objSeq], options, sendObj;
        //trace("bindSelectorClose");

        var cfg = this.config;
        if (AXgetId(cfg.targetID + "_AX_" + objID + "_AX_expandBox")) {
            axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox").remove(); // 개체 삭제 처리
            axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SelectBoxArrow").removeClass("on");

            //비활성 처리후 메소드 종료
            axdom(document).unbind("click.AXSelect");
            //axdom(document.body).unbind("focus.AXSelect", obj.documentclickEvent);
            axdom(document).unbind("keydown.AXSelect");
            axdom(document.body).off("focus.AXSelect", "input,select,button,a,textarea");

            if (obj.config.isChangedSelect) {
                AXgetId(objID).options[obj.selectedIndex].selected = true;
                if (obj.config.onChange) {
                    options = AXgetId(objID).options[obj.selectedIndex];
                    sendObj = {
                        optionIndex: obj.selectedIndex, optionValue: options.value, optionText: options.text, optionData: options.getAttribute("data-option"),
                        value: options.value, text: options.text, data: options.data
                    };
                    obj.config.onChange.call(sendObj, sendObj);
                }
                obj.config.isChangedSelect = false;
                this.bindSelectChange(objID, objSeq);
            }

            if (event) event.stopPropagation(); // disableevent
            return;
        } else {
            if (obj.config.isChangedSelect) {
                AXgetId(objID).options[obj.selectedIndex].selected = true;
                if (obj.config.onChange) {
                    options = AXgetId(objID).options[obj.selectedIndex];
                    sendObj = {
                        optionIndex: obj.selectedIndex, optionValue: options.value, optionText: options.text, optionData: options.getAttribute("data-option"),
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
        axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox").css({height: expandScrollHeight + "px"});

        var bindSelectOptionsClick = this.bindSelectOptionsClick.bind(this);
        obj.documentclickEvent = function (event) {
            bindSelectOptionsClick(objID, objSeq, event);
        };
        var bindSelectKeyup = this.bindSelectKeyup.bind(this);
        obj.documentKeyup = function (event) {
            bindSelectKeyup(objID, objSeq, event);
        };
        axdom(document).unbind("click.AXSelect").bind("click.AXSelect", obj.documentclickEvent);
        /*
        axdom(document.body).bind("focus.AXSelect", function(e){
            console.log(e);
        });
        */
        axdom(document).unbind("keydown.AXSelect").bind("keydown.AXSelect", obj.documentKeyup);
        axdom(document.body).off("focus.AXSelect").on("focus.AXSelect", "input,select,button,a,textarea", obj.documentclickEvent);

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

        var anchorHeight = jqueryTargetObjID.data("height") - 1;
        var expandBox = axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox");
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
        if (!obj.config.positionFixed) {
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

            this.stopEvent(event);
        } else if (event.keyCode == AXUtil.Event.KEY_DOWN) {
            if (!obj.options) return;
            if (obj.options.length == 0) return;
            var focusIndex = 0;
            if (obj.config.focusedIndex == undefined || obj.config.focusedIndex == obj.options.length - 1) {

            } else {
                focusIndex = (obj.config.focusedIndex).number() + 1;
            }
            this.bindSelectorSelect(objID, objSeq, focusIndex);

            this.stopEvent(event);
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
        }
        ;

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
                        obj.config.selectedObject = {optionIndex: oi, optionValue: AXgetId(objID).options[oi].value, optionText: AXgetId(objID).options[oi].text.enc()};
                        this.bindSelectChange(objID, findIndex);
                        if (obj.config.onChange) {
                            options = AXgetId(objID).options[oi];
                            sendObj = {
                                optionIndex: oi, optionValue: options.value, optionText: options.text,
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
                }
                ;

                if (selectedIndex != null) {

                    obj.selectedIndex = selectedIndex;
                    obj.config.focusedIndex = selectedIndex;

                    AXgetId(objID).options[obj.selectedIndex].selected = true;
                    obj.config.selectedObject = obj.options[selectedIndex];
                    this.bindSelectChange(objID, findIndex);

                    if (obj.config.onChange) {
                        options = AXgetId(objID).options[selectedIndex];
                        sendObj = {
                            optionIndex: selectedIndex, optionValue: options.value, optionText: options.text,
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
    bindSelectDisabled: function (objID, _disabled) {
        var findIndex = null;
        for (var O, index = 0; (index < this.objects.length && (O = this.objects[index])); index++) {
            if (O.id == objID && O.isDel != true) {
                findIndex = index;
                break;
            }
        }
        ;

        if (findIndex == null) {
            //trace("바인드 된 오브젝트를 찾을 수 없습니다.");
            return;
        } else {
            var obj = this.objects[findIndex];
            var cfg = this.config;

            if (typeof _disabled == "boolean") {
                axf.getId(objID).disabled = _disabled;
            } else {
                axf.getId(objID).disabled = !AXgetId(objID).disabled;
            }

            if (this.isMobile) {

            } else {

                var bindTarget = axdom("#" + cfg.targetID + "_AX_" + objID);
                bindTarget.data("disabled", axf.getId(objID).disabled);

                if (axf.getId(objID).disabled) {
                    bindTarget.find(".AXanchorSelect").addClass("disable");
                } else {
                    bindTarget.find(".AXanchorSelect").removeClass("disable");

                }
            }
        }
    },
    bindSelectUpdate: function (objID) {
        var findIndex = null;
        for (var O, index = 0; (index < this.objects.length && (O = this.objects[index])); index++) {
            if (O.id == objID && O.isDel != true) {
                findIndex = index;
                break;
            }
        }

        if (findIndex != null) {
            var obj = this.objects[findIndex], selectedIndex, options, sendObj;
            if (obj.config.onChange) {
                selectedIndex = AXgetId(objID).options.selectedIndex;
                options = AXgetId(objID).options[selectedIndex];
                sendObj = {
                    optionIndex: selectedIndex,
                    optionValue: options.value, optionText: options.text,
                    value: options.value,
                    text: options.text
                };
                obj.config.onChange.call(sendObj, sendObj);
            }
            this.bindSelectChange(objID, findIndex);
        }
    },
    bindSelectFocus: function (objID, elFocus) {
        var cfg = this.config;
        var findIndex = null;
        for (var O, index = 0; (index < this.objects.length && (O = this.objects[index])); index++) {
            if (O.id == objID && O.isDel != true) {
                findIndex = index;
                break;
            }
        }
        if (findIndex != null) {
            axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SelectTextBox").addClass("focus");
            if(elFocus) axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SelectTextBox").focus();
        }
    },
    bindSelectBlur: function (objID) {
        var cfg = this.config;
        var findIndex = null;
        var _this = this;
        for (var O, index = 0; (index < this.objects.length && (O = this.objects[index])); index++) {
            if (O.id == objID && O.isDel != true) {
                findIndex = index;
                break;
            }
        }

        if (findIndex != null) {
            axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SelectTextBox").removeClass("focus");
        }
    },
    bindSelectGetAnchorObject: function (objID) {
        var cfg = this.config;
        var findIndex = null;
        for (var O, index = 0; (index < this.objects.length && (O = this.objects[index])); index++) {
            if (O.id == objID && O.isDel != true) {
                findIndex = index;
                break;
            }
        }
        ;
        if (findIndex != null) {
            return axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SelectTextBox");
        }
    },
    bindSelectGetValue: function (objID, onEnd) {
        var findIndex = null;
        for (var O, index = 0; (index < this.objects.length && (O = this.objects[index])); index++) {
            if (O.id == objID && O.isDel != true) {
                findIndex = index;
                break;
            }
        }
        ;

        if (findIndex == null) {
            return {optionValue: null, optionText: null, error: "바인드 된 오브젝트를 찾을 수 없습니다."};
        } else {
            var obj = this.objects[findIndex];
            var cfg = this.config;

            if (obj.selectedIndex != undefined) {
                var options = AXgetId(objID).options[obj.selectedIndex];
                return {optionValue: options.value, optionText: options.text, optionData: options.getAttribute("data-option")};
            } else {
                return {optionValue: null, optionText: null};
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
    bindSelectAddOptions: function (objID, options) {
        var cfg = this.config, _this = this;
        var objSeq = null;
        for (var O, index = 0; (index < this.objects.length && (O = this.objects[index])); index++) {
            if (O.id == objID && O.isDel != true) {
                objSeq = index;
                break;
            }
        }
        if (objSeq == null) {
            trace("not found element id");
            return;
        }
        var obj = this.objects[objSeq];
        var iobj = obj.iobj;

        if (!Object.isArray(options)) {
            trace("options 아규먼트가 없습니다.");
            return;
        }

        var newOptions = obj.options;
        for (var i = 0; i < options.length; i++) {
            var hasValue = false;
            for (var oi = 0; oi < obj.options.length; oi++) {
                if (obj.options[oi].optionValue == options[i].optionValue) {
                    hasValue = true;
                }
            }
            if (!hasValue) {
                newOptions.push({optionText: options[i].optionText.enc(), optionValue: options[i].optionValue});
            }
        }
        obj.options = newOptions;

        iobj.css({opacity: 100});
        //trace(obj.options);
        var po = [];
        for (var opts, oidx = 0; (oidx < obj.options.length && (opts = obj.options[oidx])); oidx++) {
            var optionText = (opts.optionText || "").dec();
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
    bindSelectRemoveOptions: function (objID, options) {
        var cfg = this.config, _this = this;
        var objSeq = null;
        for (var O, index = 0; (index < this.objects.length && (O = this.objects[index])); index++) {
            if (O.id == objID && O.isDel != true) {
                objSeq = index;
                break;
            }
        }
        if (objSeq == null) {
            trace("not found element id");
            return;
        }
        var obj = this.objects[objSeq];
        var iobj = obj.iobj;

        if (!Object.isArray(options)) {
            trace("options 아규먼트가 없습니다.");
            return;
        }

        var newOptions = [];

        for (var oi = 0; oi < obj.options.length; oi++) {
            var hasValue = false;
            for (var i = 0; i < options.length; i++) {
                if (obj.options[oi].optionValue == options[i].optionValue) {
                    hasValue = true;
                }
            }
            if (!hasValue) {
                newOptions.push({optionText: obj.options[oi].optionText, optionValue: obj.options[oi].optionValue});
            }
        }
        obj.options = newOptions;

        //trace(obj.options);
        iobj.css({opacity: 100});
        var po = [];
        for (var opts, oidx = 0; (oidx < obj.options.length && (opts = obj.options[oidx])); oidx++) {
            var optionText = (opts.optionText || "").dec();
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
    bindSelectUpdateOptions: function (objID, options, optionIndex) {
        var cfg = this.config, _this = this;
        var objSeq = null;
        for (var O, index = 0; (index < this.objects.length && (O = this.objects[index])); index++) {
            if (O.id == objID && O.isDel != true) {
                objSeq = index;
                break;
            }
        }
        if (objSeq == null) {
            trace("not found element id");
            return;
        }
        var obj = this.objects[objSeq];
        var iobj = obj.iobj;

        if (typeof optionIndex === "undefined" && !Object.isArray(options)) {
            trace("options 아규먼트가 없습니다.");
            return;
        }

        var newOptions = [];
        if (typeof optionIndex === "undefined") {
            for (var i = 0; i < options.length; i++) {
                newOptions.push(jQuery.extend({optionText: options[i].optionText.enc(), optionValue: options[i].optionValue}, options[i]));
            }
            obj.selectedIndex = 0;
        } else {
            var _adj = 0;
            if (obj.config.isspace) _adj = 1;
            for (var i = 0; i < obj.config.options.length; i++) {
                if (i + _adj == optionIndex) {
                    newOptions.push(jQuery.extend({optionText: options.optionText.enc(), optionValue: options.optionValue}, options));
                } else {
                    newOptions.push(obj.config.options[i]);
                }
            }
        }

        obj.config.options = newOptions;
        iobj.css({opacity: 100});
        iobj.html("<option></option>");

        var po = [], adj = 0;
        if (obj.config.isspace) {
            po.push("<option value='" + (obj.config.isspaceValue || "") + "'");
            if (obj.selectedIndex == 0) po.push(" selected=\"selected\"");
            po.push(">" + (obj.config.isspaceTitle || "&nbsp;") + "</option>");
            adj = -1;
        }

        for (var opts, oidx = 0; (oidx < obj.config.options.length && (opts = obj.config.options[oidx])); oidx++) {
            var optionText = (opts.optionText || "").dec();
            po.push("<option value=\"" + opts.optionValue + "\"");
            if (obj.config.setValue == opts.optionValue || opts.selected || (obj.selectedIndex || 0).number() + adj == oidx) po.push(" selected=\"selected\"");
            po.push(">" + optionText + "</option>");
        }

        iobj.html(po.join(''));

        var options = [];
        for (var oi = 0; oi < AXgetId(objID).options.length; oi++) {
            options.push({optionValue: AXgetId(objID).options[oi].value, optionText: AXgetId(objID).options[oi].text.enc()});
        }
        obj.options = AXUtil.copyObject(options);
        obj.selectedIndex = AXgetId(objID).options.selectedIndex;

        this.bindSelectChange(objID, objSeq, "load");

        if (obj.config.onChange && obj.config.alwaysOnChange) {
            obj.config.focusedIndex = obj.selectedIndex;
            obj.config.selectedObject = obj.options[obj.selectedIndex];

            options = AXgetId(objID).options[obj.selectedIndex];
            sendObj = {
                optionIndex: obj.selectedIndex, optionValue: options.value, optionText: options.text,
                value: options.value, text: options.text
            };
            obj.config.onChange.call(sendObj, sendObj, "isPostBack");
        }

        this.alignAnchor(objID, objSeq);
        iobj.css({opacity: 0});

        return this;
    }
});

var AXSelect = new AXSelectConverter();
AXSelect.setConfig({targetID: "AXselect"});

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
        if (!this.id) this.id = "AXInput-" + axf.getUniqueId();
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

        AXSelect.bindSelectFocus(this.id, true);
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

axdom.fn.bindSelectGetAnchorObject = function () {
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
    initialize: function (AXJ_super) {
        AXJ_super();

        this.tree = [];
        this.poi = "";
        this.config.openType = "over";
        this.config.easing = {
            open: {duraing: 200, easing: "expoOut"},
            close: {duration: 200, easing: "expoOut"}
        };
        //this.config.menuBoxID = "menuBox";
        this.config.parentMenu = {
            className: "parentMenu"
        };
        this.config.childMenu = {
            className: "childMenu",
            arrowClassName: "varrow",
            align: "center",
            valign: "top",
            margin: {top: 10, left: 0, bottom: 0},
            arrowMargin: {top: 10, left: 0, bottom: 0}
        };
        this.config.childsMenu = {
            className: "childsMenu",
            arrowClassName: "harrow",
            align: "left",
            valign: "top",
            margin: {top: 10, left: 0, bottom: 0},
            arrowMargin: {top: 10, left: 0, bottom: 0}
        };
        this.config.parentOutResetChild = true;
        this.config.childOutClose = true;
        this.config.childOutCloseTime = 700;
    },
    init: function () {
        var cfg = this.config;

        if (cfg.menuBoxID) {
            this.menuBox = axdom("#" + cfg.menuBoxID);

            //서브 메뉴를 숨김 처리 합니다.
            this.menuBox.find("." + cfg.childMenu.className).hide();
            this.menuBox.find("." + cfg.childsMenu.className).hide();

            this.initParents();
            this.initChild();
            if (cfg.onComplete) cfg.onComplete.call(this);
        }
        else if (cfg.targetID) {

        }
        axdom(window).bind("resize", this.windowResize.bind(this));
    },
    windowResizeApply: function () {
        var cfg = this.config, menuBoxWidth = 0;
        axf.each(this.tree, function () {
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
    setTree: function (tree) {
        var cfg = this.config;
        cfg.menuBoxID = cfg.targetID, _this = this;

        if (!this.menuBox) this.menuBox = axdom("#" + cfg.menuBoxID);

        var po = [];

        var treeFn = function (subTree) {
            axdom.each(subTree, function (pi, T) {
                po.push("<li>");
                var addClass = (T.cn && T.cn.length > 0 ) ? " class = \"" + cfg.childsMenu.hasChildClassName + "\"" : "";
                if (cfg.onclick) {
                    po.push("<a data-href=\"" + (T.url || cfg.href) + "\"" + addClass + " data-id=\"" + (T._id || "") + "\" id=\"" + (T._id || "") + "\" data-label=\"" + (T.label || "").dec().delHtml() + "\">" + (T.label || "").dec() + "</a>");
                }
                else {
                    po.push("<a href=\"" + (T.url || cfg.href) + "\"" + addClass + " id=\"" + (T._id || "") + "\">" + (T.label || "").dec() + "</a>");
                }
                if (T.cn && T.cn.length > 0) {
                    po.push("<div class=\"" + cfg.childsMenu.className + "\">");
                    po.push("	<ul>");
                    po.push(treeFn(T.cn));
                    po.push("	</ul>");
                    po.push("</div>");
                }
                po.push("</li>");
            });
        };

        po.push("<ul>");
        axdom.each(tree, function (pi, T) {
            var addClass = [];
            if (T.addClass) {
                addClass.push(T.addClass);
            }
            po.push("<li>");
            po.push("	<div class=\"" + cfg.parentMenu.className + " " + addClass.join(" ") + "\">");
            var addClass = (T.cn) ? " class = \"" + cfg.childMenu.hasChildClassName + "\"" : "";

            if (cfg.onclick) {
                po.push("<a data-href=\"" + (T.url || cfg.href) + "\"" + addClass + " data-is-top='true' data-id=\"" + (T._id || "") + "\" id=\"" + (T._id || "") + "\" data-label=\"" + (T.label || "").dec().delHtml() + "\">" + (T.label || "").dec() + "</a>");
            }
            else {
                po.push("<a href=\"" + (T.url || cfg.href) + "\"" + addClass + " id=\"" + (T._id || "") + "\">" + (T.label || "").dec() + "</a>");
            }

            if (T.cn && T.cn.length > 0) {
                po.push("<div class=\"" + cfg.childMenu.className + "\">");
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

        if (cfg.onclick) {
            this.menuBox.find('[data-href]').bind("click", function () {
                cfg.onclick({
                    id: this.getAttribute("data-id"),
                    href: this.getAttribute("data-href"),
                    label: this.getAttribute("data-label"),
                    isTop : this.getAttribute("data-is-top")
                });

                if (this.getAttribute("data-href") != "#") {
                    _this.outChild();
                }
            });
        }

        //서브 메뉴를 숨김 처리 합니다.
        this.menuBox.find("." + cfg.childMenu.className).hide();
        this.menuBox.find("." + cfg.childsMenu.className).hide();

        setTimeout(function () {
            _this.initParents();
            _this.initChild();
            if (cfg.onComplete) cfg.onComplete.call(this);
        }, 300);
    },
    initParents: function () {
        var cfg = this.config;
        var parents = [], menuBoxWidth = 0;
        this.menuBox.find("." + cfg.parentMenu.className).each(function (pi, EL) {
            EL.id = cfg.menuBoxID + "_PM_" + pi;
            var _id = "";

            var ELA = axdom(EL).children("A");

            if (ELA.get(0).id) _id = axdom(EL).children("A").get(0).id;
            ELA.get(0).id = cfg.menuBoxID + "_PMA_" + pi;
            ELA.attr("data-axmenuid", _id);

            parents.push({
                _id: _id,
                id: EL.id,
                width: axdom(EL).outerWidth(),
                height: axdom(EL).outerHeight(),
                cn: [],
                coi: ""
            });
            menuBoxWidth += axdom(EL).parent().outerWidth().number() + 2;
        });
        this.tree = parents;
        //this.menuBox.css({width:menuBoxWidth});

        if (cfg.openType == "over") {
            this.menuBox.find("." + cfg.parentMenu.className + ">a").bind("mouseover", this.onoverParent.bind(this));
            this.menuBox.find("." + cfg.parentMenu.className + ">a").bind("focus", this.onoverParent.bind(this));
            this.menuBox.find("." + cfg.parentMenu.className + ">a").bind("click", this.onclickParent.bind(this));

            if (cfg.childOutClose) {
                var onoutChild = this.onoutChild.bind(this);
                this.menuBox.find("." + cfg.parentMenu.className + ">a").bind("mouseout", onoutChild);
            }
        }
        else if (cfg.openType == "click") {
            this.menuBox.find("." + cfg.parentMenu.className + ">a").bind("mouseover", this.onoverParent.bind(this));
            this.menuBox.find("." + cfg.parentMenu.className + ">a").bind("click", this.onclickParent.bind(this));
        }
    },
    onoverParent: function (event) {
        if (!this.active && this.config.openType == "click") return this;

        if (this.childObserver) clearTimeout(this.childObserver); //닫기 명령 제거
        var _this = this, cfg = this.config;

        var target = axf.get_event_target(event.target, {tagname: "a"});
        var poi = target.id.split(/\_/g).last();
        if (this.poi != "" && this.poi != poi) {
            axdom("#" + cfg.menuBoxID + "_PMA_" + this.poi).removeClass("on");
            axdom("#" + cfg.menuBoxID + "_PMC_" + this.poi).hide();
            if (cfg.parentOutResetChild) this.closeSubMenu(this.tree[this.poi]);
        }

        //slideDown check
        if (this.dfPoi != undefined) axdom("#" + cfg.menuBoxID + "_PMA_" + this.dfPoi).removeClass("on");
        axdom("#" + cfg.menuBoxID + "_PMA_" + poi).addClass("on");
        //trace("#" + cfg.menuBoxID + "_PMC_" + poi);

        var tgDiv = axdom("#" + cfg.menuBoxID + "_PMC_" + poi);
        if (this.tree[poi] && !this.tree[poi].divDim) {
            tgDiv.show();
            this.tree[poi].divDim = {width: tgDiv.outerWidth(), height: tgDiv.outerHeight()};
            if (this.tree[poi].height == null) {
                for (var index = 0; index < this.tree.length; index++) {
                    this.tree[index].height = axdom("#" + this.tree[index].id).outerHeight();
                }
                //trace(poi, this.tree[poi]);
            }
            var topDim = {width: this.tree[poi].width, height: this.tree[poi].height};

            /* subMenu positioning */
            if (cfg.childMenu.align == "center") {
                var posLeft = topDim.width / 2 - this.tree[poi].divDim.width / 2 + cfg.childMenu.margin.left;
            }
            else if (cfg.childMenu.align == "left") {
                var posLeft = 0 + cfg.childMenu.margin.left;
            }
            else if (cfg.childMenu.align == "right") {
                var posLeft = topDim.width - this.tree[poi].divDim.width + cfg.childMenu.margin.left;
            }
            if (cfg.childMenu.valign == "top") {
                var posTop = topDim.height + cfg.childMenu.margin.top;
                if (cfg.childMenu.float) {
                    tgDiv.css({top: posTop, left: posLeft});
                }
                else {
                    tgDiv.css({top: posTop, left: posLeft, width: this.tree[poi].divDim.width});
                }
            }
            else if (cfg.childMenu.valign == "bottom") {
                var posTop = topDim.height + cfg.childMenu.margin.bottom;
                if (cfg.childMenu.float) {
                    tgDiv.css({top: posTop, left: posLeft});
                }
                else {
                    tgDiv.css({top: "auto", bottom: posTop, left: posLeft, width: this.tree[poi].divDim.width});
                }
            }
            /* -------------------- */

            /* subMenu Arrow positioning */
            if (cfg.childMenu.arrowClassName) {
                var arrow = tgDiv.find("." + cfg.childMenu.arrowClassName);
                if (cfg.childMenu.align == "center") {
                    var aLeft = tgDiv.outerWidth() / 2 - arrow.outerWidth() / 2 + cfg.childMenu.arrowMargin.left;
                }
                else if (cfg.childMenu.align == "left") {
                    var aLeft = 0 + cfg.childMenu.arrowMargin.left;
                }
                else if (cfg.childMenu.align == "right") {
                    var aLeft = tgDiv.outerWidth() - arrow.outerWidth() + cfg.childMenu.arrowMargin.left;
                }
                if (cfg.childMenu.valign == "top") {
                    var aTop = -arrow.outerHeight() + cfg.childMenu.arrowMargin.top;
                    arrow.css({top: aTop, left: aLeft});
                }
                else if (cfg.childMenu.valign == "bottom") {
                    var aTop = -arrow.outerHeight() + cfg.childMenu.arrowMargin.bottom;
                    arrow.css({bottom: aTop, left: aLeft});
                }
            }
            /* -------------------- */

            tgDiv.hide();
            topDim = null;
            posTop = null;
            posLeft = null;
        }

        _this.overParentAnimate = true;
        tgDiv.show();
        /*
         tgDiv.fadeIn(
         {
         duration: cfg.easing.open.duration,
         easing: cfg.easing.open.easing,
         complete: function() {
         _this.overParentAnimate = false;
         }
         }
         );
         */

        this.poi = poi;
    },
    onclickParent: function (event) {
        var cfg = this.config;
        var target = axf.get_event_target(event.target, {tagname: "a"});
        var poi = target.id.split(/\_/g).last();

        if (!this.active) {

            this.active = true;
            this.activePoi = poi;
            this.onoverParent(event);

        } else {
            if (poi != this.activePoi) {
                this.active = true;
                this.activePoi = poi;
                this.onoverParent(event);
                return this;
            }

            this.active = false;
            axdom("#" + cfg.menuBoxID + "_PMA_" + this.poi).removeClass("on");
            axdom("#" + cfg.menuBoxID + "_PMC_" + this.poi).hide();

        }

    },
    initChild: function () {
        var cfg = this.config;
        var initChilds = this.initChilds.bind(this);
        var tree = this.tree;
        this.menuBox.find("." + cfg.parentMenu.className).each(function (pi, EL) {
            var child = axdom(EL).children("." + cfg.childMenu.className).get(0);
            if (child) {
                child.id = cfg.menuBoxID + "_PMC_" + pi;
                if (cfg.childMenu.arrowClassName) {
                    var arrow = axdom("<div class=\"" + cfg.childMenu.arrowClassName + "\"></div>");
                    axdom(child).prepend(arrow);
                }
                initChilds(child.id, tree[pi]);
            }
            else {

            }
        });
    },
    initChilds: function (cid, rTree) {
        var initChilds = this.initChilds.bind(this);
        var cfg = this.config;
        var tree = rTree.cn;

        var onoverChild = this.onoverChild.bind(this);
        var onoutChild = this.onoutChild.bind(this);
        //trace(cid);
        axdom("#" + cid + ">ul>li").each(function (pi, EL) {
            var linkA = axdom(EL).children("A");
            var _id = "";
            if (linkA.get(0).id) _id = linkA.get(0).id;
            linkA.get(0).id = cid.replace("PMC", "PMA") + "_" + pi;
            linkA.attr("data-axmenuid", _id);
            linkA.bind("mouseover", onoverChild);
            if (cfg.childOutClose && cfg.openType == "over") {
                linkA.bind("mouseout", onoutChild);
            }

            //axdom(EL).children("A").html(cid.replace("PMC", "PMA") + "_" + pi);
            var childDiv = axdom(EL).children("." + cfg.childsMenu.className).get(0);
            if (childDiv) {
                childDiv.id = cid + "_" + pi;

                if (cfg.childsMenu.arrowClassName) {
                    var arrow = axdom("<div class=\"" + cfg.childsMenu.arrowClassName + "\"></div>");
                    axdom(childDiv).prepend(arrow);
                }

                tree.push({
                    _id: _id,
                    id: cid + "_" + pi,
                    cn: [],
                    coi: ""
                });
                initChilds(cid + "_" + pi, tree[pi]);
            }
            else {
                tree.push({
                    _id: _id,
                    id: cid + "_" + pi,
                    cn: [],
                    coi: ""
                });
            }
        });
    },
    closeSubMenu: function (pitem) {
        if (!pitem) return;
        if (pitem.coi == "") return;
        var cfg = this.config;
        axdom("#" + pitem.coi).slideUp(
            {
                duration: cfg.easing.close.duration,
                easing: cfg.easing.close.easing,
                complete: function () {
                }
            }
        );
        pitem.coi = "";
        //하위 자식들의 poi 모두 닫기

        var closeAllSubMenu = function (stree) {
            axdom.each(stree, function () {
                if (this.coi != "") {
                    axdom("#" + this.coi).hide();
                }
                closeAllSubMenu(this.cn);
            });
        };
        closeAllSubMenu(pitem.cn);
    },
    onoverChild: function (event) {
        if (this.childObserver) clearTimeout(this.childObserver); //닫기 명령 제거
        var cfg = this.config;
        var target = axf.get_event_target(event.target, {tagname: "a"});
        var eid = target.id;
        var ids = target.id.split(/\_/g);
        var tree = this.tree;
        var item = {};
        var pitem = {};
        for (var a = 2; a < ids.length; a++) {
            if (a == ids.length - 2) {
                pitem = tree[ids[a]];
            }
            if (tree[ids[a]]) {
                if (tree[ids[a]].cn) {
                    item = tree[ids[a]];
                    tree = tree[ids[a]].cn;
                }
            }
        }

        if (pitem) {
            if (pitem.coi != "" && pitem.coi != item.id) {
                this.closeSubMenu(pitem);
            }
        }

        if (item) {
            if (item.id) {

                var tgDiv = axdom("#" + item.id);

                //slideDown check
                if (!item.divDim) {
                    axdom("#" + item.id).show();
                    item.divDim = {width: tgDiv.outerWidth(), height: tgDiv.outerHeight()};
                    var pDim = {
                        width: axdom("#" + eid).outerWidth(),
                        height: axdom("#" + eid).outerHeight(),
                        pos: axdom("#" + eid).position()
                    };

                    if (cfg.childsMenu.align == "left") {
                        var posLeft = pDim.width + cfg.childsMenu.margin.left;
                    }
                    else {
                        var posLeft = -item.divDim.width + cfg.childsMenu.margin.left;
                    }

                    if (cfg.childsMenu.valign == "top") {
                        var posTop = pDim.pos.top + cfg.childsMenu.margin.top;
                        tgDiv.css({top: posTop, left: posLeft, width: item.divDim.width});
                    }
                    else {
                        var posTop = (pitem.divDim.height - pDim.pos.top) - pDim.height + cfg.childsMenu.margin.bottom;
                        tgDiv.css({bottom: posTop, left: posLeft, width: item.divDim.width});
                    }

                    /* subMenu Arrow positioning */
                    if (cfg.childsMenu.arrowClassName) {

                        var arrow = tgDiv.find("." + cfg.childsMenu.arrowClassName);
                        if (cfg.childsMenu.align == "left") {
                            var aLeft = -arrow.outerWidth() + cfg.childsMenu.arrowMargin.left;
                        }
                        else {
                            var aLeft = tgDiv.outerWidth() - arrow.outerWidth() + cfg.childsMenu.arrowMargin.left;
                        }
                        if (cfg.childsMenu.valign == "top") {
                            var aTop = 0 + cfg.childsMenu.arrowMargin.top;
                            arrow.css({top: aTop, left: aLeft});
                        }
                        else if (cfg.childsMenu.valign == "bottom") {
                            var aTop = 0 + cfg.childsMenu.arrowMargin.bottom;
                            arrow.css({bottom: aTop, left: aLeft});
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
                        duration: cfg.easing.open.duration,
                        easing: cfg.easing.open.easing,
                        complete: function () {
                        }
                    }
                );
                if (pitem) pitem.coi = item.id.replace("PMA", "PMC");
            }

        }

    },
    onoutChild: function (event) {
        var cfg = this.config;
        var outChild = this.outChild.bind(this);
        this.childObserver = setTimeout(function () {
            outChild();
        }, cfg.childOutCloseTime);
    },
    outChild: function () {
        this.active = false;
        var cfg = this.config;
        this.closeSubMenu(this.tree[this.poi]);

        axdom("#" + cfg.menuBoxID + "_PMA_" + this.poi).removeClass("on");
        if (this.dfPoi != undefined) axdom("#" + cfg.menuBoxID + "_PMA_" + this.dfPoi).addClass("on");
        axdom("#" + cfg.menuBoxID + "_PMC_" + this.poi).slideUp(
            {
                duration: cfg.easing.close.duration,
                easing: cfg.easing.close.easing,
                complete: function () {
                }
            }
        );
    },
    setHighLightMenu: function (poi) {
        var cfg = this.config;
        this.menuBox.find(".parentMenu").removeClass("on");
        this.menuBox.find(".parentMenu a").removeClass("on");
        this.menuBox.find(".childMenu a").removeClass("on");

        if (axdom.isArray(poi)) {
            this.poi = this.dfPoi = poi;
            var tree = this.tree;
            axdom.each(poi, function (idx, T) {
                if (idx == 0) tree = tree[T.number()];
                else  tree = tree.cn[T.number()];
                if (tree) {
                    if (idx == 0) {
                        axdom("#" + tree.id).addClass("on");
                        axdom("#" + tree.id).children("A").addClass("on");
                    }
                    else {
                        axdom("#" + tree.id.replace("_PMC_", "_PMA_")).addClass("on");
                    }
                }
            });
        }
        else {
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

    setHighLightOriginID: function (_id) {
        var cfg = this.config;
        var tree = this.tree;
        var findedID = "";

        var treeFn = function (subTree) {
            axdom.each(subTree, function (idx, T) {
                if (T._id == _id) {
                    findedID = T.id;
                    return false;
                }
                else {
                    if (T.cn) treeFn(T.cn);
                }
            });
        };

        axdom.each(this.tree, function (idx, T) {
            if (T._id == _id) {
                findedID = T.id;
                return false;
            }
            else {
                if (T.cn) treeFn(T.cn);
            }
        });

        if (findedID) {
            this.findedID = findedID;
            var pos = findedID.split(/_PM[C]?_/g).last();
            var selectedMenus = pos.split(/_/g);
            this.setHighLightMenu(selectedMenus);
            return selectedMenus;
        } else {
            this.menuBox.find(".parentMenu").removeClass("on");
            this.menuBox.find(".parentMenu a").removeClass("on");
            this.menuBox.find(".childMenu a").removeClass("on");
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
    setHighLightID: function (_id) {
        var cfg = this.config;
        var tree = this.tree;
        var findedID = "";

        var treeFn = function (subTree) {
            axdom.each(subTree, function (idx, T) {
                if (T.id == _id) {
                    findedID = T.id;
                    return false;
                }
                else {
                    if (T.cn) treeFn(T.cn);
                }
            });
        };
        axdom.each(tree, function (idx, T) {
            if (T.id == _id) {
                findedID = T.id;
                return false;
            }
            else {
                if (T.cn) treeFn(T.cn);
            }
        });

        if (findedID) {
            this.findedID = findedID;
            var pos = findedID.split(/_PM[C]?_/g).last();
            var selectedMenus = pos.split(/_/g);
            this.setHighLightMenu(selectedMenus);
            return selectedMenus;
        }
    }
});
/* ---------------------------- */
/* http://www.axisj.com, license : http://www.axisj.com/license */


/**
 * @class AXModal
 * @classdesc 모달창을 생성하고 제어 합니다. 모달창은 window, iframe, div 세 가지로 생성할 수 있습니다.
 * @extends AXJ
 * @version v1.40
 * @author tom@axisj.com
 * @logs
 "2013-02-13 오전 10:39:17 - axmods 에서 컨버트 : tom ",
 "2013-04-08 오전 12:15:17 - resize 메소스 추가 및 버그 픽스 : tom ",
 "2013-06-20 오후 5:21:24 - open 메소드 속성에 width 조건 추가 : tom ",
 "2013-07-09 오후 4:41:48 - animateDuration 속성 추가  : tom ",
 "2013-08-21 오후 4:46:51 - openNew 버그 픽스 : tom ",
 "2013-08-22 오전 10:56:20 - resize 버그 픽스 : tom ",
 "2013-08-24 - openNew 메소드 기능 확장 : tom ",
 "2013-10-14 오전 6:54:40 - resize 기능 보강 : tom ",
 "2013-11-15 오후 4:01:29 - tom : openDiv scroll 버그 패치",
 "2013-11-18 오후 5:16:02 - tom resize 버그 패치",
 "2014-05-21 - tom : AXModal mediaQuery 속성 추가"
 "2014-06-09 tom : mediaQuery bugfix"
 "2014-08-04 tom : fix resize error"
 "2014-09-17 tom : 'add Config' scrollLock"
 "2014-11-16 tom : openDiv 메소드에 verticalAlign 속성 확장"
 "2015-03-25 root : 각 open 메소드에 closeButton 속성 확장"
 "2015-04-22 root : axdom 독립 우회 코드 변경"
 "2015-05-08 tom : loaded 메소드 추가"

 */
var AXModal = Class.create(AXJ, {
    initialize: function (AXJ_super) {
        AXJ_super();
        this.config.maskCss = "AXMask";
        this.config.windowBoxCss = "AXModalBox";
        this.config.padding = "0";
        this.config.defaultTop = 10;
        this.config.animateDuration = 300;
        this.config.autoHide = false;
        this.config.windowID = "AXModal" + AXUtil.timekey();
        this.config.contentDivClass = (AXConfig.AXModal) ? AXConfig.AXModal.contentDivClass : "bodyHeightDiv";
        this.config.displayLoading = true;
        this.config.viewMode = "dx";
        this.config.opendModalID = "";
        this.config.scrollLock = false;
        this.config.closeButton = true;
    },
    /**
     * 모달의 기본 환경설정값을 셋팅합니다.
     * @method AXModal.setConfig
     * @param {Object} modalConfig
     * @example
     * ```js
     * var myModal = new AXModal();
     * var modalConfig = {
     *     animateDuration: {Number} [300],
     *     contentDivClass: {String} ["bodyHeightDiv"] - iframe 모달의 창이 오픈된 경우 iframe 의 높이를 정확히 제어하기 위해 컨텐츠 전체를 감싸는 대상에 지정한 className 값,
     *     defaultTop: {Number} [10] - 모달창 포지션 top,
     *     displayLoading: {Boolean} [true] - 모달이 오픈될 때 로딩 표시 여부,
     *     maskCss: "AXMask" - 배경 mask div의 css,
     *     opendModalID: {String} - 모달 ID,
     *     padding: {(String|Number)} ["0"] - 모달 padding 값,
     *     viewMode: {String} ["dx"],
     *     width: {(String|Number)} - 모달의 기본 너비,
     *     windowBoxCss: {String} ["AXModalBox"] - 모달을 감싸는 제일 바깥쪽 div의 css,
     *     windowID: {String} ["AXModal" + timekey] - 모달 식별 아이디,
     *     onclose: {Function} - 모달창이 닫힐 때 이벤트,
     *     closeButton: {Boolean} [true] - 모달창 닫기버튼의 노출 여부
     * };
     * myModal.setConfig(modalConfig);
     * ```
     */
    init: function () {
        var cfg = this.config;
        this.mask = axdom("<div class=\"" + cfg.maskCss + "\"></div>");
        if (cfg.mediaQuery) {
            var _viewMode = "", clientWidth = axf.clientWidth();
            axf.each(cfg.mediaQuery, function (k, v) {
                if (Object.isObject(v)) {

                    if (v.min != undefined && v.max != undefined) {
                        if (v.min <= clientWidth && clientWidth <= v.max) {
                            _viewMode = (k == "dx") ? "dx" : "mx";
                            return false;
                        }
                    } else {
                        if (v.min <= clientWidth) {
                            _viewMode = (k == "dx") ? "dx" : "mx";
                            return false;
                        }
                    }
                }
            });
            if (_viewMode != "") {
                cfg.viewMode = _viewMode;
            }
        }

    },
    /**
     * @method AXModal.setWidth
     * @param {(String|Number)} - 모달의 기본 너비 pixel({Number}) or percent({String})
     * @description 모달의 기본 너비 속성을 변경하고 창이 열려있는 상태이면 동적으로 창의 크기도 변경합니다. (단, openDIV 로 모달이 오픈된 경우는 해당사항 없음)
     * @example
     * ```js
     * myModal.setWidth(800);
     * myModal.setWidth("80%");
     * ```
     */
    setWidth: function (width) {
        var cfg = this.config;
        if (width) {
            cfg.width = width;
            this.config.fixedWidth = true;
        } else {
            cfg.width = undefined;
            this.config.fixedWidth = false;
        }

        axdom("#" + cfg.windowID).css({width: width});
        var maskWidth = axdom("#" + cfg.windowID).outerWidth();
        var maskLeft = (axdom(document.body).width() / 2) - (maskWidth / 2);
        if (maskLeft < 0) maskLeft = 0;
        axdom("#" + cfg.windowID).css({left: maskLeft});
    },
    /**
     * @method AXModal.open
     * @param {Object} - configs
     * @description iframe 을 내장하는 모달 창을 오픈합니다.
     * @example
     * ```js
     * var configs = {
     *     url: {String} - 모달창의 URL,
     *     pars: {(Object|Array)} - 모달창 URL 에 전달 될 파라미터,
     *     method: {String} ["post"] -파라미터 전달방식,
     *     top: {Number} [scrollTop + 100] - 모달창 포지션 top,
     *     width: {(String|Number)} - 모달창 너비,
     *     closeByEscKey: {Boolean} [false] - 모달창 닫기를 esc 키로 닫을 지 여부,
     *     closeButton: {Boolean} [true] - 모달창 닫기버튼의 노출 여부
     * }
     * myModal.open(configs);
     * ```
     */
    open: function (http) {
        var cfg = this.config;

        if (this._windowOpend) return;

        mask.open();
        this.winID = "mdw" + AXUtil.timekey();
        this.frmID = "frm" + AXUtil.timekey();

        var maskWidth, maskLeft;
        if (this.config.width) {
            maskWidth = this.config.width;
            maskLeft = (axdom(document.body).width() / 2) - (this.config.width / 2);
            this.config.fixedWidth = true;
        } else {
            maskWidth = axdom(document.body).width() - 50;
            maskLeft = 10;
            this.config.fixedWidth = false;
        }

        if (http.width) {
            maskWidth = http.width;
            maskLeft = (axdom(document.body).width() / 2) - (http.width / 2);
            this.config.fixedWidth = true;
        }

        var maskTop = this.config.defaultTop;
        if (http.top != undefined) {
            maskTop = http.top;
        } else {
            maskTop = axdom(window).scrollTop() + 100;
        }
        if (maskLeft < 0) maskLeft = 0;

        var po = [];
        po.push("<div id='" + this.config.windowID + "' class='" + this.config.windowBoxCss + "' style='top:" + maskTop + "px;left:" + maskLeft + "px;width:" + maskWidth + "px;'>");
        po.push("	<div class='windowbox' id='" + this.winID + "_box' style='padding:" + this.config.padding + "px'>");
        if (cfg.displayLoading) {
            po.push("		<div id='" + this.config.windowID + "_loading' style='position:absolute;left:0px;top:0px;width:100%;padding:50px 0px 0px 0px;' align='center'>");
            po.push("		<div class=\"AXLoading\"></div>");
            po.push("		<br/><br><span class='blue'>페이지를 로딩 중입니다. 잠시만 기다려 주세요.</span></div>");
        }


        var closeButton = (http.closeButton == undefined) ? cfg.closeButton : http.closeButton;
        if (closeButton) {
            po.push("		<a id='" + this.config.windowID + "_close' class='closeBtn'>닫기</a>");
        }

        po.push("		<form name='" + this.frmID + "' method='" + (http.method || "post") + "' target='" + this.winID + "' action='" + http.url + "'>");
        po.push("		<input type='hidden' name='winID' value='" + this.winID + "' />");

        if (isNaN(http.pars.length)) {
            axdom.each(http.pars, function (key, val) {
                po.push("		<input type='hidden' name='" + key + "' value='" + val + "' />");
            });
        } else {
            axdom.each(http.pars, function () {
                axdom.each(this, function (key, val) {
                    po.push("		<input type='hidden' name='" + key + "' value='" + val + "' />");
                });
            });
        }

        if (AXConfig.AXModal.pars) {
            var appendPars = {};
            if (Object.isString(AXConfig.AXModal.pars)) {
                appendPars = AXConfig.AXModal.pars.queryToObject();
            }
            axdom.each(appendPars, function (key, val) {
                po.push("<input type='hidden' name='" + key + "' value='" + val + "' />");
            });
        }

        po.push("		</form>");
        po.push("		<iframe src='' name='" + this.winID + "' id='" + this.winID + "' frameborder='0' class='windowboxFrame' style='width:100%;overflow:-y:hidden;' scrolling='no'></iframe>");
        po.push("	</div>");
        po.push("</div>");

        if (this.config.appendTargetID) {
            axdom("#" + this.config.appendTargetID).append(po.join(''));
        } else {
            axdom(document.body).append(po.join(''));
        }

        axdom("#" + cfg.windowID).data("width", maskWidth);
        axdom("#" + cfg.windowID).data("top", maskTop);

        if (cfg.viewMode == "mx") {
            axdom("#" + cfg.windowID).css({left: 0, top: axdom(window).scrollTop(), width: "100%"});
        }

        var loadingID = this.config.windowID + "_loading";
        var _winID = this.winID;
        var _frmID = this.frmID;

        document[_frmID].submit();
        var keydown = this.keydown.bind(this);

        axdom("#" + this.winID).bind("load", function () {
            var myIframe = window[_winID];

            var bodyHeight = axdom(myIframe.document).innerHeight();
            if (axdom(myIframe.document.body).find("." + cfg.contentDivClass).get(0)) {
                bodyHeight = axdom(myIframe.document.body).find("." + cfg.contentDivClass).outerHeight();
            }
            axdom(this).css({height: (bodyHeight)}, cfg.animateDuration, "cubicInOut");
            axdom("#" + _winID + "_box").css({height: (bodyHeight)}, cfg.animateDuration, "cubicInOut");
            if (cfg.displayLoading) axdom("#" + loadingID).fadeOut("slow");
            axdom("#" + _winID).addClass("loaded");

            if (http.closeByEscKey) {
                axdom(myIframe.document.body).bind("keydown.AXModal", keydown);
            }
        });

        axdom("#" + this.config.windowID + "_close").bind("click", this.close.bind(this));

        if (http.closeByEscKey) {
            axdom(document.body).bind("keydown.AXModal", keydown);
        }

        this._windowOpend = true;

        axdom(window).unbind("resize.AXModal");
        axdom(window).bind("resize.AXModal", this.onDocResize.bind(this));

        if (cfg.scrollLock == true) {
            axdom(document.body).css({'overflow': 'hidden'});
        }
    },
    /**
     * @deprecated AXModal.openI
     * @see AXModal.open
     */
    openI: function (http) {
        var cfg = this.config;

        if (this._windowOpend) return;

        mask.open();
        this.winID = "mdw" + AXUtil.timekey();
        this.frmID = "frm" + AXUtil.timekey();

        var maskWidth, maskLeft;
        if (this.config.width) {
            maskWidth = this.config.width;
            maskLeft = (axdom(document.body).width() / 2) - (this.config.width / 2);
            this.config.fixedWidth = true;
        } else {
            maskWidth = axdom(document.body).width() - 50;
            maskLeft = 10;
            this.config.fixedWidth = false;
        }

        if (http.width) {
            maskWidth = http.width;
            maskLeft = (axdom(document.body).width() / 2) - (http.width / 2);
            this.config.fixedWidth = true;
        }

        var maskTop = this.config.defaultTop;
        if (http.top != undefined) {
            maskTop = http.top;
        } else {
            maskTop = axdom(window).scrollTop() + 100;
        }

        if (maskLeft < 0) maskLeft = 0;

        var po = [];
        po.push("<div id='" + this.config.windowID + "' class='" + this.config.windowBoxCss + "' style='top:" + maskTop + "px;left:" + maskLeft + "px;width:" + maskWidth + "px;'>");
        po.push("	<div class='windowbox' id='" + this.winID + "_box' style='padding:" + this.config.padding + "px'>");
        po.push("		<div id='" + this.config.windowID + "_loading' style='position:absolute;left:0px;top:0px;width:" + maskWidth + "px;padding:50px 0px 0px 0px;' align='center'>");
        po.push("		<div class=\"AXLoading\"></div>");
        po.push("		<br/><br><span class='blue'>페이지를 로딩 중입니다. 잠시만 기다려 주세요.</span></div>");

        var closeButton = (http.closeButton == undefined) ? cfg.closeButton : http.closeButton;
        if (closeButton) {
            po.push("		<a href='#modsExecption' id='" + this.config.windowID + "_close' class='closeBtn'>닫기</a>");
        }

        po.push("		<form name='" + this.frmID + "' method='post' target='" + this.winID + "' action='" + http.url + "'>");
        po.push("		<input type='hidden' name='winID' value='" + this.winID + "' />");

        if (isNaN(http.pars.length)) {
            axdom.each(http.pars, function (key, val) {
                po.push("		<input type='hidden' name='" + key + "' value='" + val + "' />");
            });
        } else {
            axdom.each(http.pars, function () {
                axdom.each(this, function (key, val) {
                    po.push("		<input type='hidden' name='" + key + "' value='" + val + "' />");
                });
            });
        }

        if (AXConfig.AXModal.pars) {
            var appendPars = {};
            if (Object.isString(AXConfig.AXModal.pars)) {
                appendPars = AXConfig.AXModal.pars.queryToObject();
            }
            axdom.each(appendPars, function (key, val) {
                po.push("<input type='hidden' name='" + key + "' value='" + val + "' />");
            });
        }

        po.push("		</form>");

        if (http.maxHeight) {
            po.push("		<iframe src='' name='" + this.winID + "' id='" + this.winID + "' frameborder='0' class='windowboxFrame' style='width:100%;overflow:-y:hidden;' scrolling='auto'></iframe>");
        } else {
            po.push("		<iframe src='' name='" + this.winID + "' id='" + this.winID + "' frameborder='0' class='windowboxFrame' style='width:100%;overflow:-y:hidden;' scrolling='no'></iframe>");
        }

        po.push("	</div>");
        po.push("</div>");


        if (this.config.appendTargetID) {
            axdom("#" + this.config.appendTargetID).append(po.join(''));
        } else {
            axdom(document.body).append(po.join(''));
        }

        var loadingID = this.config.windowID + "_loading";
        var _winID = this.winID;
        var _frmID = this.frmID;

        document[_frmID].submit();

        axdom("#" + this.winID).bind("load", function () {
            var myIframe = window[_winID];

            var bodyHeight = axdom(myIframe.document).innerHeight();
            if (axdom(myIframe.document.body).find("." + cfg.contentDivClass).get(0)) {
                bodyHeight = axdom(myIframe.document.body).find("." + cfg.contentDivClass).outerHeight();
            }
            if (http.maxHeight) {
                if (http.maxHeight < (bodyHeight.number() + maskTop.number() + 10)) {
                    bodyHeight = http.maxHeight - maskTop.number() - 10;
                }
            }

            axdom(this).css({height: (bodyHeight)}, cfg.animateDuration, "cubicInOut");
            axdom("#" + _winID + "_box").css({height: (bodyHeight)}, cfg.animateDuration, "cubicInOut");
            axdom("#" + loadingID).fadeOut("slow");
            axdom("#" + _winID).addClass("loaded");
        });
        axdom("#" + this.config.windowID + "_close").bind("click", this.close.bind(this));

        /*
         if (this.mask) {
         if (this.config.autoHide) this.mask.bind("click", this.close.bind(this));
         }
         */
        //window.scroll(0, 0);
        this._windowOpend = true;

        axdom(window).unbind("resize.AXModal");
        axdom(window).bind("resize.AXModal", this.onDocResize.bind(this));

        if (cfg.scrollLock == true) {
            axdom(document.body).css({'overflow': 'hidden'});
        }
    },
    windowResizeApply: function () {
        this.onDocResize();
    },
    /**
     * @method AXModal.openDiv
     * @param {Object} - configs
     * @description div 모달 창을 오픈합니다.
     * @example
     * ```js
     * var configs = {
     *     modalID: {String} - 모달창의 식별자,
     *     targetID: {String} - 모달창 타켓 엘리먼트 아이디,
     *     top: {Number} [scrollTop + 100] - 모달창 포지션 top,
     *     width: {(String|Number)} - 모달창 너비,
     *     closeByEscKey: {Boolean} [false] - 모달창 닫기를 esc 키로 닫을 지 여부,
     *     verticalAlign: {Boolean} [false] - 모달창 가운데 표시 여부,
     *     closeButton: {Boolean} [true] - 모달창 닫기버튼의 노출 여부
     * }
     * myModal.openDiv(configs);
     * ```
     */
    openDiv: function (args) {
        var cfg = this.config;
        mask.open();

        var modalID = cfg.opendModalID = args.modalID;

        if (AXgetId(modalID)) {
            var modalTarget = $("#" + modalID);
            modalTarget.show();

            var maskTop = this.config.defaultTop;
            if (args.top != undefined) {
                maskTop = axdom(window).scrollTop() + args.top;
            } else {
                maskTop = axdom(window).scrollTop() + 50;
            }

            if (cfg.viewMode == "mx") {
                maskTop = axdom(window).scrollTop();
            }

            if (args.verticalAlign) {
                modalTarget.css({top: axf.clientHeight() / 2 - modalTarget.height() / 2 + axdom(window).scrollTop()})
            } else {
                modalTarget.css({"top": maskTop});
            }

            if (args.closeByEscKey) {
                var keydown = this.keydown.bind(this);
                var keydownBind = function () {
                    keydown(event, modalID);
                };
                axdom(document.body).bind("keydown.AXModal", keydownBind);
            }
            return;
        }

        var maskWidth, maskLeft;
        if (this.config.width) {
            maskWidth = this.config.width;
            maskLeft = (axdom(document.body).width() / 2) - (this.config.width / 2);
            this.config.fixedWidth = true;
        } else {
            maskWidth = axdom(document.body).width() - 50;
            maskLeft = 10;
            this.config.fixedWidth = false;
        }

        if (args.width) {
            maskWidth = args.width;
            maskLeft = (axdom(document.body).width() / 2) - (args.width / 2);
            this.config.fixedWidth = true;
        }

        var maskTop = this.config.defaultTop;
        if (args.top != undefined) {
            maskTop = axdom(window).scrollTop() + args.top;
        } else {
            maskTop = axdom(window).scrollTop() + 50;
        }

        if (maskLeft < 0) maskLeft = 0;

        var po = [];
        po.push("<div id='" + modalID + "' class='" + this.config.windowBoxCss + "' style='top:" + maskTop + "px;left:" + maskLeft + "px;width:" + maskWidth + "px;'>");
        po.push("	<div class='windowbox' style='padding:" + this.config.padding + "px'>");

        var closeButton = (args.closeButton == undefined) ? cfg.closeButton : args.closeButton;
        if (closeButton) {
            po.push("		<a href='#modsExecption' id='" + modalID + "_close' class='closeBtn'>닫기</a>");
        }

        po.push("		<div id='" + modalID + "_content'></div>");
        po.push("	</div>");
        po.push("</div>");

        axdom(document.body).append(po.join(''));

        axdom("#" + modalID + "_content").append(axdom("#" + args.targetID));

        axdom("#" + cfg.opendModalID).data("width", maskWidth);
        axdom("#" + cfg.opendModalID).data("top", maskTop);

        if (cfg.viewMode == "mx") {
            axdom("#" + cfg.opendModalID).css({left: 0, top: axdom(window).scrollTop(), width: "100%"});
        }

        var loadingID = modalID + "_loading";

        var closeBind = this.close.bind(this);
        var closeModal = function (event) {
            closeBind(event, modalID);
        };
        axdom("#" + modalID + "_close").bind("click", closeModal);

        if (args.closeByEscKey) {
            var keydown = this.keydown.bind(this);
            var keydownBind = function () {
                keydown(event, modalID);
            };
            axdom(document.body).bind("keydown.AXModal", keydownBind);
        }

        /*
         if (this.mask) {
         if (this.config.autoHide) this.mask.bind("click", close);
         }
         */

        axdom(window).unbind("resize.AXModal");
        axdom(window).bind("resize.AXModal", this.onDocResize.bind(this));

        if (cfg.scrollLock == true) {
            axdom(document.body).css({'overflow': 'hidden'});
        }

        if (args.verticalAlign) {
            var modalTarget = $("#" + modalID);
            $("#" + modalID).css({top: axf.clientHeight() / 2 - modalTarget.height() / 2 + axdom(window).scrollTop()})
        }
    },
    /**
     * @method AXModal.openNew
     * @param {Object} - configs
     * @description 새로운 창으로 모달 창을 오픈 합니다.
     * @example
     * ```js
     * var configs = {
     *     url: {String} - 새창 오픈 URL,
     *     pars: {(Object|Array)} - 새창 오픈 URL 전달 파라미터,
     *     name: {String} ["mdw" + timekey]- 새창이름,
     *     options: {String} - 새창 오픈 옵션 window.open 속성과 동일합니다.
     * }
     * myModal.openNew(configs);
     * ```
     */
    openNew: function (http) {
        this.winID = "mdw" + AXUtil.timekey();
        this.frmID = "frm" + AXUtil.timekey();

        if (this.openWindow) {
            //top.mask.close();
            this.openWindow.close();
        }

        this.openWindow = window.open("", (http.name || this.winID), http.options);
        this.openWindow.focus();

        if (http.title != undefined) {
            this.openWindow.document.title = http.title;
        }

        if (AXgetId(this.config.windowID)) axdom("#" + this.config.windowID).remove();

        var po = [];
        po.push("<div id='" + this.config.windowID + "'>");
        po.push("		<form name='" + this.frmID + "' method='" + (http.method || "post") + "' target='" + (http.name || this.winID) + "' action='" + http.url + "'>");
        po.push("		<input type='hidden' name='winID' value='" + this.winID + "' />");

        if (isNaN(http.pars.length)) {
            axdom.each(http.pars, function (key, val) {
                po.push("		<input type='hidden' name='" + key + "' value='" + val + "' />");
            });
        } else {
            axdom.each(http.pars, function () {
                axdom.each(this, function (key, val) {
                    po.push("		<input type='hidden' name='" + key + "' value='" + val + "' />");
                });
            });
        }
        po.push("		</form>");
        po.push("</div>");
        axdom(document.body).append(po.join(''));
        document[this.frmID].submit();

        axdom("#" + this.config.windowID).remove();
    },
    keydown: function (event, modalID) {
        if (event.keyCode == AXUtil.Event.KEY_ESC) {
            this.close(event, modalID);
        }
    },
    /**
     * @method AXModal.close
     * @param {String} - modalID
     * @description 오픈된 모달 창을 닫습니다.
     * @example
     * ```js
     * myModal.close("modalDiv01");
     * parent.myModal.close(); // iframe 모달창을 오픈한 경우 열려진 iframe 안에서 호출 합니다.
     * ```
     */
    close: function (event, modalID) {
        var cfg = this.config;
        if (this.openWindow) {
            this.openWindow.close();
        }

        if (event) {
            if (event.type == undefined) {
                modalID = event;
            }
        }

        if (modalID) {
            axdom("#" + modalID).hide();
            this.config.opendModalID = "";
            mask.close();
        } else {
            if (window[this.winID]) {
                window[this.winID].location.href = "about:blank";
                var windowID = this.config.windowID;

                setTimeout(function () {
                    axdom("#" + windowID).remove();
                }, 1);

                mask.close();
                this._windowOpend = false;
            }
        }

        axdom(document.body).unbind("keydown.AXModal");

        if (this.config.onclose) {
            this.config.onclose.call(
                {
                    winID: this.winID,
                    windowID: this.config.windowID,
                    modalID: modalID
                }
            );
        }

        if (cfg.scrollLock == true) {
            axdom(document.body).css({'overflow': 'auto'});
        }
    },
    /**
     * @method AXModal.remove
     * @description 오픈된 모달 창을 제거합니다.
     * @example
     * ```js
     * myModal.remove();
     * parent.myModal.remove(); //iframe 모달창을 오픈한 경우 열려진 iframe 안에서 호출 합니다.
     * ```
     */
    remove: function (event) {
        var windowID = this.config.windowID;
        setTimeout(function () {
            axdom("#" + windowID).remove();
        }, 1);
        mask.close();
        axdom(document.body).css({'overflow': 'auto'});
        this._windowOpend = false;
        /*
         try {
         this.mask.remove();
         } catch (e) { }
         */
    },
    /**
     * @method AXModal.resize
     * @description 열려진 iframe modal 의 높이를 iframe 창의 높이 만큼 리사이즈 합니다. contentDivClass 가 정의된 경우 contentDivClass 높이값으로 resize 합니다.
     * @example
     * ```js
     * myModal.resize();
     * parent.myModal.resize(); //iframe 모달창을 오픈한 경우 열려진 iframe 안에서 호출 합니다.
     * ```
     */
    resize: function (event) {
        var cfg = this.config;
        var _winID = this.winID;
        setTimeout(function () {

            try {
                var myIframe = window[_winID];
                var doc = (myIframe.contentDocument) ? myIframe.contentDocument : myIframe.contentWindow.document;
                var bodyHeight = axdom(doc).innerHeight();
                if (doc.body && axdom(doc.body).find("." + cfg.contentDivClass).get(0)) {
                    bodyHeight = axdom(doc.body).find("." + cfg.contentDivClass).outerHeight();
                }
                axdom("#" + _winID).css({height: (bodyHeight)}, cfg.animateDuration, "cubicInOut");
                axdom("#" + _winID + "_box").css({height: (bodyHeight)}, cfg.animateDuration, "cubicInOut");
            } catch (e) {

            }

            try {
                parent.fcObj.contentResetHeight();
            } catch (e) {
                //trace(e);
            }

            try {
                parent.fnObj.contentResetHeight(null, bodyHeight + 100);
            } catch (e) {
                //trace(e);
            }
        }, 50);
    },
    onDocResize: function () {
        var cfg = this.config;

        if (cfg.mediaQuery) {
            var _viewMode = "", clientWidth = axf.clientWidth();

            axf.each(cfg.mediaQuery, function (k, v) {
                if (Object.isObject(v)) {

                    if (v.min != undefined && v.max != undefined) {
                        if (v.min <= clientWidth && clientWidth <= v.max) {
                            _viewMode = (k == "dx") ? "dx" : "mx";
                            return false;
                        }
                    } else {
                        if (v.min <= clientWidth) {
                            _viewMode = (k == "dx") ? "dx" : "mx";
                            return false;
                        }
                    }
                }
            });
            if (_viewMode != "") {
                cfg.viewMode = _viewMode;
            }
        }

        if (cfg.viewMode == "dx") {
            try {
                if (cfg.fixedWidth) {
                    var maskWidth, maskLeft;
                    if (cfg.opendModalID != "") {
                        maskWidth = axdom("#" + cfg.opendModalID).outerWidth();
                        if (maskWidth != axdom("#" + cfg.opendModalID).data("width")) {
                            axdom("#" + cfg.opendModalID).css({
                                top: axdom("#" + cfg.opendModalID).data("top"),
                                width: axdom("#" + cfg.opendModalID).data("width")
                            });
                        }
                        maskLeft = (axdom(document.body).width() / 2) - (maskWidth / 2);
                        if (maskLeft < 0) maskLeft = 0;
                        axdom("#" + cfg.opendModalID).css({left: maskLeft});
                    } else {
                        maskWidth = axdom("#" + cfg.windowID).outerWidth();
                        if (maskWidth != axdom("#" + cfg.windowID).data("width")) {
                            axdom("#" + cfg.windowID).css({
                                top: axdom("#" + cfg.windowID).data("top"),
                                width: axdom("#" + cfg.windowID).data("width")
                            });
                        }
                        maskLeft = (axdom(document.body).width() / 2) - (maskWidth / 2);
                        if (maskLeft < 0) maskLeft = 0;
                        axdom("#" + cfg.windowID).css({left: maskLeft});
                    }
                } else {
                    if (cfg.opendModalID != "") {
                        maskWidth = axdom(".container").width() - 50;
                        axdom("#" + cfg.opendModalID).css({width: maskWidth});
                    } else {
                        maskWidth = axdom(".container").width() - 50;
                        axdom("#" + cfg.windowID).css({width: maskWidth});
                    }
                }
            } catch (e) {

            }
        } else if (cfg.viewMode == "mx") {
            if (cfg.opendModalID != "") {
                axdom("#" + cfg.opendModalID).css({left: 0, top: axdom(window).scrollTop(), width: "100%"});
            } else {
                axdom("#" + cfg.windowID).css({left: 0, top: axdom(window).scrollTop(), width: "100%"});
            }
        }

    },
    /**
     * @method AXModal.loaded
     * @description 모달의 로딩중 상태를 강제로 로드 완료 처리 합니다.
     * @example
     * ```js
     * myModal.loaded();
     * parent.myModal.loaded(); //iframe 모달창을 오픈한 경우 열려진 iframe 안에서 호출 합니다.
     * ```
     */
    loaded: function () {
        var cfg = this.config, _winID = this.winID;
        var loadingID = this.config.windowID + "_loading";
        var myIframe = window[this.winID];
        var doc = (myIframe.contentDocument) ? myIframe.contentDocument : myIframe.contentWindow.document;
        var bodyHeight = axdom(doc).innerHeight();
        if (doc.body && axdom(doc.body).find("." + cfg.contentDivClass).get(0)) {
            bodyHeight = axdom(doc.body).find("." + cfg.contentDivClass).outerHeight();
        }
        axdom(this).css({height: (bodyHeight)}, cfg.animateDuration, "cubicInOut");
        axdom("#" + _winID + "_box").css({height: (bodyHeight)}, cfg.animateDuration, "cubicInOut");
        if (cfg.displayLoading) axdom("#" + loadingID).fadeOut("slow");
        axdom("#" + _winID).addClass("loaded");
    }
});
/* ---------------------------- */
/**
 * @method AXSearch.setConfig
 * @param {Object} config - searchConfig
 * @description
 * 선언된 클래스를 사용하기 위해 속성을 정의합니다.
 * @example
 * ```js
 * var mySearch = new AXSearch();
 * mySearch.setConfig({
 *     targetID:"AXSearchTarget",  //{string} - AXSearch 클래스 코딩이 처리될 HTML 엘리먼트 타겟아이디
 *     theme : "AXSearch",         //[string = "AXSearch"] - AXSearch 에 적용될 CSS Class 이름
 *     onsubmit: function(){       //[fn] - Function AXSearch 가 onsubmit 이벤트 발생되었을 때 연결되는 콜백함수
 *         fnObj.search1(); // 버튼이 선언되지 않았거나 submit 개체가 있는 경우 발동 합니다.
 *     },
 *     rows:[  //AXSearch 의 각 row는 배열로 정의합니다.
 *         {
 *             display:true,       //[boolean=true] - 해당 줄의 노출 여부. 숨겨진 row의 경우 사용자의 선택으로 활성화 처리할 수 있습니다.
 *             addClass:"gray",    //[string] - row에 추가될 CSS 클래스
 *             style:"",           //[string] - row에 추가될 CSS style
 *             list:[
 *                 {
 *                     label:"공개설정",   //[string] - 아이템 라벨
 *                     labelWidth:"100",   //[number] - 라벨너비
 *                     type:"link",        //[string] - 아이템 타입 ( link | checkBox | radioBox | selectBox | inputText | button | submit )
 *                     width:"",           //[number] - 아이템 너비
 *                     key:"openType",     //[string] - 아이템 유니크 키
 *                     addClass:"",        //[string] - 아이템 엘리먼트에 추가될 CSS 클래스
 *                     valueBoxStyle:"",   //[string] - 아이템 엘리먼트에 추가될 CSS style
 *                     value:"open",       //[string] - 아이템 value ( options 가 정의되는 아이템 link | checkBox | radioBox | selectBox 에는 정의할 수 없습니다 )
 *                     options:[       //select options
 *                         {optionValue:"all", optionText:"전체보기"},
 *                         {optionValue:"open", optionText:"공개"},
 *                         {optionValue:"close", optionText:"비공개"},
 *                         {optionValue:"close2", optionText:"비공개2", display:false},
 *                         {optionValue:"close3", optionText:"비공개3", display:false},
 *                         {optionValue:"close4", optionText:"비공개4", display:false}
 *                     ],
 *                     onChange: function(selectedObject, value){  //[fn] - onchange 이벤트 바인드
 *                     },
 *                     onClcik: function(selectedObject, value){  //[fn] - onclick 이벤트 바인드
 *                     }
 *                 }
 *             ]
 *         }
 *     ]
 * });
 * ```
 */

var AXSearch = Class.create(AXJ, {
    initialize: function(AXJ_super) {
        AXJ_super();
        this.formbindMethod = "script";
        this.config.theme = "AXSearch";
        this.config.viewMode = "dx";
    },
    init: function() {
        var cfg = this.config;
        if(Object.isUndefined(cfg.targetID)){
            trace("need targetID - setConfig({targetID:''})");
            return;
        }

        if (cfg.mediaQuery) {
            var _viewMode = "", clientWidth = axf.clientWidth();
            axf.each(cfg.mediaQuery, function (k, v) {
                if (Object.isObject(v)) {

                    if(v.min != undefined && v.max != undefined){
                        if (v.min <= clientWidth && clientWidth <= v.max) {
                            _viewMode = (k == "dx") ? "dx" : "mx";
                            return false;
                        }
                    }else{
                        if (v.min <= clientWidth) {
                            _viewMode = (k == "dx") ? "dx" : "mx";
                            return false;
                        }
                    }
                }
            });
            if (_viewMode != "") {
                cfg.viewMode = _viewMode;
            }
        }

        this.target = axdom("#"+cfg.targetID);

        // 스크립트 바인드 방식
        if(cfg.rows)
        {
            this.formbindMethod = "script";
            this.setBody();
            axdom(window).bind("resize", this.windowResize.bind(this));
        }

        // tagBind 방식
        else
        if(this.target.get(0).tagName.lcase() == "form")
        {
            this.formbindMethod = "tag";
            this.target.bind("submit", function(event){
                cfg.onsubmit();
                return false;
            });

            if(cfg.onkeydown) {
                if(cfg.keydown_check_classname){
                    this.target.find("."+cfg.keydown_check_classname).bind("keydown.axsearch", function (event) {
                        cfg.onkeydown(event);
                    });
                }
                else
                {
                    this.target.bind("keydown", function (event) {
                        cfg.onkeydown(event);
                    });
                }
            }
            if(cfg.onkeyup) {
                if(cfg.keyup_check_classname){
                    this.target.find("."+cfg.keyup_check_classname).bind("keyup.axsearch", function (event) {
                        cfg.onkeyup(event);
                    });
                }
                else
                {
                    this.target.bind("keyup", function (event) {
                        cfg.onkeyup(event);
                    });
                }
            }
            if(cfg.onreturn) {
                if(cfg.return_check_classname){
                    this.target.find("."+cfg.return_check_classname).bind("keydown.axsearch", function (event) {
                        if(event.keyCode == axf.Event.KEY_RETURN) cfg.onreturn(event);
                    });
                }
                else
                {
                    this.target.bind("keydown", function (event) {
                        if(event.keyCode == axf.Event.KEY_RETURN) cfg.onreturn(event);
                    });
                }
            }
            // onchange 연결
            if(cfg.onchange){
                if(cfg.change_check_classname){
                    this.target.find("."+cfg.change_check_classname).bind("change.axsearch", function (event) {
                        cfg.onchange(event);
                    });
                }
                else
                {
                    this.target.find("input, select, textarea").bind("change.axsearch", function(event){
                        cfg.onchange(event);
                    });
                }
            }
            // onfocus 연결
            if(cfg.onfocus){
                if(cfg.focus_check_classname){
                    this.target.find("."+cfg.focus_check_classname).bind("focus.axsearch", function (event) {
                        cfg.onfocus(event);
                    });
                }
                else
                {
                    this.target.find("input, select, textarea").bind("focus.axsearch", function(event){
                        cfg.onfocus(event);
                    });
                }
            }
        }
    },
    windowResizeApply: function () {
        var cfg = this.config;

        if (cfg.mediaQuery) {
            var _viewMode = "", clientWidth = axf.clientWidth();
            axf.each(cfg.mediaQuery, function (k, v) {
                if (Object.isObject(v)) {

                    if(v.min != undefined && v.max != undefined){
                        if (v.min <= clientWidth && clientWidth <= v.max) {
                            _viewMode = (k == "dx") ? "dx" : "mx";
                            return false;
                        }
                    }else{
                        if (v.min <= clientWidth) {
                            _viewMode = (k == "dx") ? "dx" : "mx";
                            return false;
                        }
                    }
                }
            });
            if (_viewMode != "") {
                cfg.viewMode = _viewMode;
            }
        }
        this.target.find("."+cfg.theme).removeClass("dx");
        this.target.find("."+cfg.theme).removeClass("mx");
        this.target.find("."+cfg.theme).addClass(cfg.viewMode);
    },
    getItemHtml: function(gr, itemIndex, item){
        var cfg = this.config;
        var po = [];
        var itemAddClass = [];
        var itemAddStyles = [];
        var poAttr = [];
        if(item.addClass) itemAddClass.push(item.addClass);
        if(item.style) itemAddStyles.push(item.style);
        if(item.addAttr){
            axdom.each(item.addAttr, function(idx, attr){
                poAttr.push(attr.attrKey + "=" + attr.attrValue);
            });
        }
        if(item.type == "label"){

            po.push("<div class=\"searchItem searchLabel ", itemAddClass.join(" "),"\" style=\"width:", (item.width||""),"px;text-align:", (item.align||"center"),";", itemAddStyles.join(''),"\">");
            po.push(item.value);
            po.push("</div>");

        }
        else
        if(item.type == "link"){

            po.push("<div class=\"searchItem searchLink ", itemAddClass.join(" "),"\" style=\"width:", (item.width||""),"px;text-align:", (item.align||"center"),";", itemAddStyles.join(''),"\">");
            po.push("<input type=\"hidden\" name=\"", item.key,"\" id=\"", cfg.targetID + "_AX_" + gr + "_AX_" + itemIndex + "_AX_" + item.key, "\" value=\"", item.value,"\" />");
            po.push("<label class=\"itemTable\">");
            if(item.label) {
                po.push("<span class=\"th\" style=\"min-width:", (item.labelWidth || 100), "px;\">");
                po.push(item.label);
                po.push("</span>");
            }else{
                //po.push("<span class=\"th none\">&nbsp;</span>");
            }
            po.push("<span class=\"td\" style=\"",(item.valueBoxStyle||""),"\" title=\"", (item.title||""),"\">");
            axdom.each(item.options, function(idx, Opt){
                if(idx > 0) po.push(" | ");
                var classOn = "";
                if(item.value == Opt.optionValue){
                    classOn = " on";
                    item.selectedIndex = idx;
                }
                po.push("<a href=\"#Axexec\" class=\"searchLinkItem", classOn, "\" id=\"", cfg.targetID + "_AX_" + gr + "_AX_" + itemIndex + "_AX_" + item.key + "_AX_" + idx, "\" title=\"", (Opt.title||""),"\">", Opt.optionText,"</a>");
            });
            po.push("</span>");
            po.push("</label>");
            po.push("</div>");

        }
        else
        if(item.type == "checkBox"){

            po.push("<div class=\"searchItem searchCheckbox ", itemAddClass.join(" "),"\" style=\"width:", (item.width||""),"px;text-align:", (item.align||"center"),";", itemAddStyles.join(''),"\">");
            po.push("<span class=\"itemTable\">");
            if(item.label) {
                po.push("<span class=\"th\" style=\"min-width:", (item.labelWidth || 100), "px;\">");
                po.push(item.label);
                po.push("</span>");
            }else{
                //po.push("<span class=\"th none\">&nbsp;</span>");
            }
            po.push("<span class=\"td\" style=\"",(item.valueBoxStyle||""),"\" title=\"", (item.title||""),"\">");

            var values = item.value.split(/,/g);
            axdom.each(item.options, function(idx, Opt){
                var isCheck = false;
                axdom.each(values, function(){
                    if(this == Opt.optionValue){
                        isCheck = true;
                        return false;
                    }
                });
                po.push("<input type=\"checkbox\" class=\"searchCheckboxItem ", itemAddClass.join(" "),"\" name=\"", item.key,"\" id=\"", cfg.targetID + "_AX_" + gr + "_AX_" + itemIndex + "_AX_" + item.key,"_AX_", idx, "\" title=\"", (Opt.title||""),"\" value=\"", Opt.optionValue,"\" ");
                if(isCheck) po.push(" checked=\"checked\" ");
                po.push(">");
                po.push("<label for=\"", cfg.targetID + "_AX_" + gr + "_AX_" + itemIndex + "_AX_" + item.key,"_AX_", idx, "\">", Opt.optionText," </label>");
            });

            po.push("</span>");
            po.push("</span>");
            po.push("</div>");

        }
        else
        if(item.type == "radioBox"){

            po.push("<div class=\"searchItem searchCheckbox ", itemAddClass.join(" "),"\" style=\"width:", (item.width||""),"px;text-align:", (item.align||"center"),";", itemAddStyles.join(''),"\">");
            po.push("<label class=\"itemTable\">");
            if(item.label) {
                po.push("<span class=\"th\" style=\"min-width:", (item.labelWidth || 100), "px;\">");
                po.push(item.label);
                po.push("</span>");
            }else{
                //po.push("<span class=\"th none\">&nbsp;</span>");
            }
            po.push("<span class=\"td\" style=\"",(item.valueBoxStyle||""),"\" title=\"", (item.title||""),"\">");

            var values = item.value.split(/,/g);
            axdom.each(item.options, function(idx, Opt){
                var isCheck = false;
                axdom.each(values, function(){
                    if(this == Opt.optionValue){
                        isCheck = true;
                        return false;
                    }
                });
                po.push("<input type=\"radio\" class=\"searchCheckboxItem ", itemAddClass.join(" "),"\" name=\"", item.key,"\" id=\"", cfg.targetID + "_AX_" + gr + "_AX_" + itemIndex + "_AX_" + item.key,"_AX_", idx,"\" title=\"", (item.title||""),"\" value=\"", Opt.optionValue,"\" ");
                if(isCheck) po.push(" checked=\"checked\" ");
                po.push(">");
                po.push("<label for=\"", cfg.targetID + "_AX_" + gr + "_AX_" + itemIndex + "_AX_" + item.key,"_AX_", idx,"\">", Opt.optionText," </label>");
            });

            po.push("</span>");
            po.push("</label>");
            po.push("</div>");

        }else if(item.type == "selectBox"){

            po.push("<div class=\"searchItem searchSelectbox ", itemAddClass.join(" "),"\" style=\"text-align:", (item.align||"center"),";", itemAddStyles.join(''),"\">");
            po.push("<label class=\"itemTable\">");
            if(item.label) {
                po.push("<span class=\"th\" style=\"min-width:", (item.labelWidth || 100), "px;\">");
                po.push(item.label);
                po.push("</span>");
            }else{
                //po.push("<span class=\"th none\">&nbsp;</span>");
            }
            po.push("<span class=\"td selectBox\" style=\"",(item.valueBoxStyle||""),"\" title=\"", (item.title||""),"\">");
            var selectWidth = (item.width) ? item.width+"px" : "auto";
            po.push("	<select name=\"", item.key,"\" id=\"", cfg.targetID + "_AX_" + gr + "_AX_" + itemIndex + "_AX_" + item.key, "\" title=\"", (item.title||""),"\" class=\"AXSelect searchSelectboxItem ", itemAddClass.join(" "),"\" style=\"width:", selectWidth,";\" "+poAttr.join(' ')+" >");

            var values = item.value.split(/,/g);
            axdom.each(item.options, function(idx, Opt){
                var isCheck = false;
                axdom.each(values, function(){
                    if(this == Opt.optionValue){
                        isCheck = true;
                        return false;
                    }
                });

                po.push("<option value=\"", Opt.optionValue,"\"");
                if(isCheck) po.push(" selected=\"selected\"");
                po.push(">", Opt.optionText, "</option>");
            });
            po.push("	</select>");
            po.push("</span>");
            po.push("</label>");
            po.push("</div>");

        }else if(item.type == "inputText"){

            po.push("<div class=\"searchItem ", itemAddClass.join(" "),"\" style=\"text-align:", (item.align||"center"),";", itemAddStyles.join(''),"\">");
            po.push("<label class=\"itemTable\">");
            if(item.label) {
                po.push("<span class=\"th\" style=\"min-width:", (item.labelWidth || 100), "px;\">");
                po.push(item.label);
                po.push("</span>");
            }else{
                //po.push("<span class=\"th none\">&nbsp;</span>");
            }
            po.push("<span class=\"td inputText\" style=\"",(item.valueBoxStyle||""),"\" title=\"", (item.title||""),"\">");
            var inputWidth = (item.width||100).number();
            po.push("				<input type=\"text\" name=\"", item.key,"\" id=\"", cfg.targetID + "_AX_" + gr + "_AX_" + itemIndex + "_AX_" + item.key, "\" title=\"", (item.title||""),"\" placeholder=\""+ (item.placeholder||"") +"\" value=\"", item.value,"\" class=\"AXInput searchInputTextItem ", itemAddClass.join(" "),"\" style=\"width:", inputWidth,"px;\" "+poAttr.join(' ')+" />");
            po.push("</span>");
            po.push("</label>");
            po.push("</div>");

        }else if(item.type == "hidden"){
            po.push("<input type=\"hidden\" name=\"", item.key,"\" id=\"", cfg.targetID + "_AX_" + gr + "_AX_" + itemIndex + "_AX_" + item.key, "\" value=\"", item.value,"\" />");
        }else if(item.type == "button" || item.type == "submit"){
            po.push("<div class=\"searchItem ", itemAddClass.join(" "),"\" style=\"text-align:", (item.align||"center"),";", itemAddStyles.join(''),"\">");
            po.push("<label class=\"itemTable\">");
            if(item.label) {
                po.push("<span class=\"th\" style=\"min-width:", (item.labelWidth || 100), "px;\">");
                po.push(item.label);
                po.push("</span>");
            }else{
                //po.push("<span class=\"th none\">&nbsp;</span>");
            }
            po.push("<span class=\"td button\" style=\"",(item.valueBoxStyle||""),"\" title=\"", (item.title||""),"\">");
            var inputWidth = (item.width||100).number();
            po.push("<button type=\""+ item.type +"\" id=\"", cfg.targetID + "_AX_" + gr + "_AX_" + itemIndex + "_AX_" + item.key, "\" title=\"", (item.title||""),"\" placeholder=\"", (item.placeholder||""),"\" style=\"width:", inputWidth,"px;\" class=\"AXButton searchButtonItem ", itemAddClass.join(" "),"\">", item.value,"</button>");
            po.push("</span>");
            po.push("</label>");
            po.push("</div>");
        }
        return po.join('');
    },
    setBody: function(){
        var cfg = this.config;
        var getItemHtml = this.getItemHtml.bind(this);
        var po = [];
        var AXBinds = [];

        po.push("<div class=\"" + cfg.theme + " " + cfg.viewMode + "\">");
        po.push("<form name=\"", cfg.targetID+"_AX_form", "\" onsubmit=\"return false;\">");
        var gr = 0;
        var hasHide = false;
        for(;gr<cfg.rows.length;){
            var styles = [];
            var classs = [];
            if(!cfg.rows[gr].display){
                styles.push("display:none;");
                classs.push("expandGroup");
                hasHide = true;
            }
            if(cfg.rows[gr].addClass) classs.push(cfg.rows[gr].addClass);
            po.push("<div class=\"searchGroup ", classs.join(" "),"\" style=\"", styles.join(";"),"\">");
            axdom.each(cfg.rows[gr].list, function(itemIndex, item){
                po.push(getItemHtml(gr, itemIndex, item));
                if(item.AXBind){
                    AXBinds.push({display:cfg.rows[gr].display, gr:gr, itemIndex:itemIndex, item:item});
                }
                po.push("<div class=\"itemClear\"></div>");
            });
            po.push("<div class=\"groupClear\"></div>");
            po.push("</div>");
            gr++;
        }
        if(hasHide){
            po.push("<a href=\"#axexec\" class=\"expandHandle\" id=\"",cfg.targetID,"_AX_expandHandle\">");
            po.push("상세검색");
            po.push("</a>");
        }
        po.push("</form>");
        po.push("</div>");

        this.target.html(po.join(''));

        if(cfg.onsubmit){
            document[cfg.targetID+"_AX_form"].onsubmit = function(){
                cfg.onsubmit();
                return false;
            };
        }

        axdom("#"+cfg.targetID+"_AX_expandHandle").bind("click", this.expandToggle.bind(this));
        this.target.find(".searchLinkItem").bind("click", this.onclickLinkItem.bind(this));
        this.target.find(".searchCheckboxItem").bind("click", this.onclickCheckboxItem.bind(this));
        this.target.find(".searchSelectboxItem").bind("change", this.onChangeSelect.bind(this));
        this.target.find(".searchInputTextItem").bind("change", this.onChangeInput.bind(this));
        this.target.find(".searchButtonItem").bind("click", this.onclickButton.bind(this));

        this.target.find(".searchInputTextItem").bind("focus", this.onFocusInput.bind(this));
	    this.target.find(".searchInputTextItem").bind("keydown", this.onKeyDownInput.bind(this));
	    this.target.find(".searchInputTextItem").bind("keyup", this.onKeyUpInput.bind(this));

        this.AXBinds = AXBinds;

        var _this = this;
        setTimeout(function(){
            _this.AXBindItems();
        }, 10);
    },
    AXBindItems: function(){
        var cfg = this.config;
        axdom.each(this.AXBinds, function(){
            var gr = this.gr, itemIndex = this.itemIndex, item = this.item;
            var display = this.display;
            var itemID = cfg.targetID + "_AX_" + gr + "_AX_" + itemIndex + "_AX_" + item.key;

            if(display){
                if(item.AXBind.type == "selector"){
                    axdom("#"+itemID).bindSelector(item.AXBind.config);
                }else if(item.AXBind.type == "select"){
                    try{
                        axdom("#"+itemID).bindSelect(item.AXBind.config);
                    }catch(e){
                    }
                }else if(item.AXBind.type == "date"){
                    axdom("#"+itemID).bindDate(item.AXBind.config);
                }else if(item.AXBind.type == "twinDate"){
                    var startTargetID = item.AXBind.config.startTargetID;
                    var findItemID = "";
                    axdom.each(cfg.rows, function(gidx, G){
                        axdom.each(this.list, function(itemIndex, item){
                            if(item.key == startTargetID){
                                findItemID = cfg.targetID + "_AX_" + gidx + "_AX_" + itemIndex + "_AX_" + item.key;
                            }
                        });
                    });
                    item.AXBind.config.startTargetID = findItemID;
                    axdom("#"+itemID).bindTwinDate(item.AXBind.config);
                }
            }
        });
    },
    expandToggle: function(){
        var cfg = this.config;
        if(this.expanded){
            axdom("#"+cfg.targetID+"_AX_expandHandle").html("상세검색");
            this.target.find(".expandGroup").hide();
            this.expanded = false;
        }else{
            axdom("#"+cfg.targetID+"_AX_expandHandle").html("상세검색창 닫기");
            this.target.find(".expandGroup").show();
            this.expanded = true;

            axdom.each(this.AXBinds, function(){
                var gr = this.gr, itemIndex = this.itemIndex, item = this.item;
                var display = this.display;
                var itemID = cfg.targetID + "_AX_" + gr + "_AX_" + itemIndex + "_AX_" + item.key;
                if(!display){
                    if(item.AXBind.type == "selector"){
                        axdom("#"+itemID).bindSelector(item.AXBind.config);
                    }else if(item.AXBind.type == "select"){
                        axdom("#"+itemID).bindSelect(item.AXBind.config);
                    }else if(item.AXBind.type == "date"){
                        axdom("#"+itemID).bindDate(item.AXBind.config);
                    }else if(item.AXBind.type == "twinDate"){

                        var startTargetID = item.AXBind.config.startTargetID.split(/_AX_/g).last();
                        var findItemID = "";
                        axdom.each(cfg.rows, function(gidx, G){
                            axdom.each(this.list, function(itemIndex, item){
                                if(item.key == startTargetID){
                                    findItemID = cfg.targetID + "_AX_" + gidx + "_AX_" + itemIndex + "_AX_" + item.key;
                                }
                            });
                        });

                        item.AXBind.config.startTargetID = findItemID;
                        axdom("#"+itemID).bindTwinDate(item.AXBind.config);

                    }
                }
            });

        }
    },
    onclickLinkItem: function(event){
        var cfg = this.config;
        var ids = (event.target.id).split(/_AX_/g);
        var index = ids.pop();
        var gr = ids[ids.length-3];
        var itemIndex = ids[ids.length-2];
        var item = cfg.rows[gr].list[itemIndex];
        //trace({itemIndex:itemIndex, item:item});

        var targetID = "";
        axdom.each(ids, function(ii, io){
            if(ii > 0) targetID += "_AX_";
            targetID += this;
        });
        //trace(item.options[index].optionValue);

        if(item.selectedIndex != undefined){
            axdom("#"+targetID+"_AX_"+item.selectedIndex).removeClass("on");
        }

        item.selectedIndex = index;
        item.value = item.options[index].optionValue;
        axdom("#"+targetID+"_AX_"+index).addClass("on");
        axdom("#"+targetID).val(item.options[index].optionValue);

        if(item.onChange){
            item.onChange.call(item, item.options[index], item.options[index].optionValue);
        }
    },
    onclickCheckboxItem: function(event){
        var cfg = this.config;
        var ids = (event.target.id).split(/_AX_/g);
        var index = ids.pop();
        var gr = ids[ids.length-3];
        var itemIndex = ids[ids.length-2];
        var item = cfg.rows[gr].list[itemIndex];

        var frm = document[cfg.targetID+"_AX_form"];
        var selectedIndex = 0;
        var selectedValue = "";

        if(isNaN(frm[item.key].length)){
            if(frm[item.key].checked){
                selectedValue = frm[item.key].value;
            }
        }else{
            for(var i=0;i<frm[item.key].length;i++){
                if(frm[item.key][i].checked){
                    selectedValue += (selectedValue == "") ? frm[item.key][i].value : "," + frm[item.key][i].value;
                }
            }
        }

        item.selectedIndex = index;
        item.value = selectedValue;

        if(item.onChange){
            item.onChange.call(item, item.options[index], selectedValue);
        }
    },
    onChangeSelect: function(event){
        var cfg = this.config;
        var ids = (event.target.id).split(/_AX_/g);
        var gr = ids[ids.length-3];
        var itemIndex = ids[ids.length-2];
        var item = cfg.rows[gr].list[itemIndex];

        var frm = document[cfg.targetID+"_AX_form"];
        var selectedIndex = frm[item.key].selectedIndex;
        var selectedValue = frm[item.key].options[selectedIndex].value;

        if(item.onChange){
            item.onChange.call(item, item.options[selectedIndex], selectedValue);
        }
    },
    onChangeInput: function(event){
        var cfg = this.config;
        var ids = (event.target.id).split(/_AX_/g);
        var gr = ids[ids.length-3];
        var itemIndex = ids[ids.length-2];
        var item = cfg.rows[gr].list[itemIndex];

        var frm = document[cfg.targetID+"_AX_form"];
        var changeValue = frm[item.key].value;

        if(item.onChange){
            item.onChange.call(item, changeValue);
        }
    },
    onFocusInput: function(event){
        var cfg = this.config;
        var ids = (event.target.id).split(/_AX_/g);
        var gr = ids[ids.length-3];
        var itemIndex = ids[ids.length-2];
        var item = cfg.rows[gr].list[itemIndex];

        var frm = document[cfg.targetID+"_AX_form"];
        var focusValue = frm[item.key].value;

        if(item.onFocus){
            item.onFocus.call(item, focusValue, frm[item.key]);
        }
    },
    onclickButton: function(event){
        var cfg = this.config;
        var target = axf.get_event_target(event.target, function(el){
            if((el.tagName||"").ucase() == "BUTTON"){
                return true;
            }
        });
        if(target){
            var ids = (target.id).split(/_AX_/g);
            var gr = ids[ids.length-3];
            var itemIndex = ids[ids.length-2];
            var item = cfg.rows[gr].list[itemIndex];

            if(item.onclick){
                item.onclick.call(item);
            }
        }
    },
	onKeyDownInput: function(event){
		var cfg = this.config;
		var ids = (event.target.id).split(/_AX_/g);
		var gr = ids[ids.length-3];
		var itemIndex = ids[ids.length-2];
		var item = cfg.rows[gr].list[itemIndex];

		var frm = document[cfg.targetID+"_AX_form"];
		var changeValue = frm[item.key].value;

		if(item.onkeydown){
			item.onkeydown.call(item, event, changeValue);
		}
	},
	onKeyUpInput: function(event){
		var cfg = this.config;
		var ids = (event.target.id).split(/_AX_/g);
		var gr = ids[ids.length-3];
		var itemIndex = ids[ids.length-2];
		var item = cfg.rows[gr].list[itemIndex];

		var frm = document[cfg.targetID+"_AX_form"];
		var changeValue = frm[item.key].value;

		if(item.onkeyup){
			item.onkeyup.call(item, event, changeValue);
		}
	},
    /**
     * @method AXSearch.getParam
     * @returns {string}
     * @description 파라미터 형태로 값을 반환합니다.
     * @example
     * ```js
     * var pars = mySearch.getParam();
     * trace(pars);
     * // a=11&b=22&c=33
     * ```
     */
    getParam: function(){
        var cfg = this.config;
        var frm = (this.formbindMethod == "script") ? document[cfg.targetID+"_AX_form"] : this.target;
        return axdom(frm).serialize();
    },
    /**
     * @method AXSearch.reset
     * @returns {AXSearch}
     * @description search폼 입력 정보를 리셋합니다.
     * @example
     * ```js
     * mySearch.reset();
     * ```
     */
    reset: function(){
        var cfg = this.config;
        var frm = (this.formbindMethod == "script") ? document[cfg.targetID+"_AX_form"] : this.target;
        axdom(frm).get(0).reset();

        axdom(frm).find("[data-axbind=select]").bindSelectUpdate();
        //.trigger("change");

        return this;
    },

    /**
     * @method AXSearch.getItemId
     * @param {String} key - item key name
     * @description AXSearch내 엘리먼트 id를 반환합니다.
     * @example
     * ```js
     * mySearch.getItemId("type");
     * // element id;
     * ```
     */
    getItemId: function(key, value){
        var cfg = this.config;
        var gr = 0;
        var itemID;
        for(;gr<cfg.rows.length;){
            axdom.each(cfg.rows[gr].list, function(itemIndex, item){
                if(item.key == key){
                    if(item.type == "checkBox" || item.type == "radioBox"){
                        itemID = [];
                        axdom.each(item.options, function(idx, Opt){
                            itemID.push(cfg.targetID + "_AX_" + gr + "_AX_" + itemIndex + "_AX_" + item.key + "_AX_" + idx);
                        });
                    }else{
                        itemID = cfg.targetID + "_AX_" + gr + "_AX_" + itemIndex + "_AX_" + item.key;
                        return false;
                    }
                }
            });
            gr++;
        }
        return itemID;
    },
    /**
     * @method AXSearch.setItemValue
     * @param {String} key - item key name
     * @param {String|Array} value - item key name
     * @description 단일 속성인 대상에는 String, 다중 속성인 대상에는 Array 로 값을 지정할 수 있습니다. value 가 지정되지 않은 경우 빈 값으로 처리합니다.
     * @example
     * ```js
     * mySearch.setItemValue("checkbox", ["all","open"]);
     * mySearch.setItemValue("radiobox");
     * mySearch.setItemValue("inputText2"); // 빈값을 입력함으로써 입력된 값을 지울 수 있습니다.
     * ```
     */
    setItemValue: function(key, value){
        var cfg = this.config;
        var gr = 0;
        for(;gr<cfg.rows.length;){
            axdom.each(cfg.rows[gr].list, function(itemIndex, item){
                if(item.key == key){
                    if(item.type == "checkBox" || item.type == "radioBox"){
                        var values = [];
                        if(Object.isArray(value)){
                            values = value;
                        }else if(value == ""){

                        }else{
                            values.push(value);
                        }
                        axdom.each(item.options, function(idx, Opt){
                            var itemID = cfg.targetID + "_AX_" + gr + "_AX_" + itemIndex + "_AX_" + item.key + "_AX_" + idx;
                            var isCheck = false;
                            axdom.each(values, function(){ if(this == Opt.optionValue){ isCheck = true; return false; } });
                            AXgetId(itemID).checked = isCheck;
                            itemID = null;
                        });
                    }
                    else
                    if(item.type == "selectBox"){
                        var itemID = cfg.targetID + "_AX_" + gr + "_AX_" + itemIndex + "_AX_" + item.key;
                        var item_dom = axdom("#"+itemID);
                        if(item_dom.attr("data-axbind")){
                            item_dom.bindSelectSetValue((value||""));
                        }else{
                            item_dom.val((value||""));
                        }
                    }
                    else
                    {
                        var itemID = cfg.targetID + "_AX_" + gr + "_AX_" + itemIndex + "_AX_" + item.key;
                        axdom("#"+itemID).val((value||""));
                        itemID = null;
                    }
                }
            });
            gr++;
        }
    },

	/**
	 * @method AXSearch.submit
	 */
	submit: function(){
		var cfg = this.config;
		if(cfg.onsubmit) cfg.onsubmit();
		return this;
	}
});
/* ---------------------------- */
var AXTabClass = Class.create(AXJ, {
    initialize: function(AXJ_super) {
        AXJ_super();
        this.objects = [];
        this.config.handleWidth = 22;
        this.config.responsiveMobile = AXConfig.mobile.responsiveWidth;
        this.config.bounces = true;
        this.config.closable = ( (AXConfig && AXConfig.AXTab && AXConfig.AXTab.closable) ? AXConfig.AXTab.closable : false );
    },
    init: function(){
        axdom(window).bind("resize", this.windowResize.bind(this));
    },
    windowResize: function () {
        var windowResizeApply = this.windowResizeApply.bind(this);
        if (this.windowResizeObserver) clearTimeout(this.windowResizeObserver);
        this.windowResizeObserver = setTimeout(function () {
            windowResizeApply();
        }, 500);
    },
    windowResizeApply: function(){
        this.resizeCheck();
    },
    /**
     * @method AXTabClass.bind
     * @param {Object} obj - config
     * @description 대상에 탭 속성을 부여 합니다.
     * @returns {AXTab}
     * @example
     * ```js
     * $("#myTab01").bindTab({
     *     theme : "AXTabs",
     *     value:"2",
     *     closable: false,
     *     options:[
     *         {optionValue:"1", optionText:"1살", closable: true},
     *         {optionValue:"2", optionText:"2살", closable: true},
     *         {optionValue:"3", optionText:"3살", addClass:"Red"},
     *         {optionValue:"4", optionText:"4살", addClass:"Blue"},
     *         {optionValue:"5", optionText:"5살", addClass:"Green"},
     *         {optionValue:"6", optionText:"6살", addClass:"Classic"},
     *         {optionValue:"7", optionText:"7살"}
     *     ],
     *     onchange: function(selectedObject, value){
     *         //toast.push(Object.toJSON(this));
     *         //toast.push(Object.toJSON(selectedObject));
     *         toast.push(Object.toJSON(value));
     *     },
     *     onclose: function(selectedObject, value) {
     *         //toast.push(Object.toJSON(this));
     *         //toast.push(Object.toJSON(selectedObject));
     *         toast.push(Object.toJSON(value));
     *     }
     * });
     * ```
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

		obj.theme = (obj.theme || "AXTabs");
		obj.overflow = (obj.overflow || "visible");
		obj.scrollAmount = (obj.scrollAmount || 5);
		obj.options = (obj.options || [{optionValue:"null", optionText:"빈 탭"}]);

        axdom.each(this.objects, function (idx, O) {
            if (this.id == objID){
            	objSeq = idx;
            	return false;
            }
        });
		if (objSeq == null) {
			objSeq = this.objects.length;
			this.objects.push({ id: objID, config: obj});
		}else{
			this.objects[objSeq].isDel = undefined;
			this.objects[objSeq].config = obj;
		}

		if(objSeq != null){
			this.initTab(objID, objSeq);
		}else{
			trace("object find error");
		}
    },
    /**
     * @method AXTabClass.initTab
     * @param {String} objID - 탭 대상 ID
	 * @param {Number} objSeq - 대상 순서 seq
     * @description 탭을 초기화 합니다.
     * @returns {AXTab}
	 */
    initTab: function(objID, objSeq){
    	//trace({objID:objID, objSeq:objSeq});
    	var cfg = this.config, _this = this;
    	var obj = this.objects[objSeq];

		var po = [];
	    var subOptions = [];
		po.push("<div class=\"" + obj.config.theme + "\" id=\"" + objID + "_AX_tabContainer\">");
			po.push("<div class=\"AXTabsTray\" id=\"" + objID + "_AX_tabTray\">");
				if(obj.config.overflow != "visible"){
				po.push("	<div class=\"trayScroll\" id=\"" + objID + "_AX_tabScroll\">");
				}
				po.push("	<div class=\"clear\"></div>");
			if(obj.config.overflow != "visible"){
			po.push("	</div>");
			po.push("	<div class=\"leftArrowHandleBox\" style=\"display:none;\"><a href=\"javascript:;\" class=\"tabArrow\" id=\"" + objID + "_AX_Arrow_AX_Left\">arrow</a></div>");
			po.push("	<div class=\"rightArrowHandleBox\" style=\"display:none;\"><a href=\"javascript:;\" class=\"tabArrow\" id=\"" + objID + "_AX_Arrow_AX_Right\">arrow</a></div>");
			po.push("	<div class=\"rightArrowMoreBox\" style=\"display:none;\"><a href=\"javascript:;\" class=\"tabArrow\" id=\"" + objID + "_AX_Arrow_AX_More\">arrow</a></div>");
			}
			po.push("</div>");

			if(subOptions.length > 0){
				// subOptions :
			}
		po.push("</div>");

		obj.jQueryObjID = axdom("#"+objID);
		obj.jQueryObjID.html(po.join(''));
		obj.jQueryObjID.data("objSeq", objSeq); /* memory objSeq */

		obj.tabTray = axdom("#" + objID + "_AX_tabTray");
		obj.tabScroll = axdom("#" + objID + "_AX_tabScroll");
		obj.tabContainer = axdom("#" + objID + "_AX_tabContainer");

		AXContextMenu.bind({
			id:objID + "_AX_tabMore",
			theme:"AXContextMenu", // 선택항목
			width:"200", // 선택항목
			menu:[]
		});

		this.addTabs(objID, obj.config.options);

		var bindTabMove = this.bindTabMove.bind(this);
		var bindTabMoveClick = this.bindTabMoveClick.bind(this);
		var bindTabMoreClick = this.bindTabMoreClick.bind(this);

		axdom("#" + objID + "_AX_Arrow_AX_Left").bind("mouseover", function(event){
			bindTabMove(objID, objSeq, "left", event);
		});
		axdom("#" + objID + "_AX_Arrow_AX_Right").bind("mouseover", function(event){
			bindTabMove(objID, objSeq, "right", event);
		});
		axdom("#" + objID + "_AX_Arrow_AX_Left, #" + objID + "_AX_Arrow_AX_Right").bind("mouseout", function(event){
			if(obj.moveobj) clearTimeout(obj.moveobj);
		});
		axdom("#" + objID + "_AX_Arrow_AX_Left").bind("mousedown", function(event){
			bindTabMoveClick(objID, objSeq, "left", event);
		});
		axdom("#" + objID + "_AX_Arrow_AX_Right").bind("mousedown", function(event){
			bindTabMoveClick(objID, objSeq, "right", event);
		});
		axdom("#" + objID + "_AX_Arrow_AX_More").bind("click", function(event){
			bindTabMoreClick(objID, objSeq, "right", event);
		});

		if(obj.overflow != "visible"){
			setTimeout(function(){
				var tabsWidth = (axf.clientWidth() < cfg.responsiveMobile) ? 40 : 30;
				var tabsMargin = (axf.clientWidth() < cfg.responsiveMobile) ? 5 : 5;
				obj.tabContainer.find(".AXTab").each(function(){
					tabsWidth += (axdom(this).outerWidth().number() + axdom(this).css("marginLeft").number() + axdom(this).css("marginRight").number() + tabsMargin);
				});

				obj.tabScroll.css({width:tabsWidth, left:cfg.handleWidth});
				obj.tabTray.css({height:obj.tabScroll.outerHeight()});

				var trayWidth = obj.tabTray.outerWidth();
				var scrollWidth = obj.tabScroll.outerWidth();

				if(trayWidth > scrollWidth){
					obj.tabContainer.find(".leftArrowHandleBox").hide();
					obj.tabContainer.find(".rightArrowHandleBox").hide();
					obj.tabContainer.find(".rightArrowMoreBox").hide();
					obj.tabScroll.css({left:0});
				}else if(obj.config.selectedIndex != null){
					obj.tabContainer.find(".leftArrowHandleBox").show();
					obj.tabContainer.find(".rightArrowHandleBox").show();
					obj.tabContainer.find(".rightArrowMoreBox").show();
					_this.focusingItem(objID, objSeq, obj.config.selectedIndex);
				}

				if(trayWidth < scrollWidth && AXUtil.clientWidth() < cfg.responsiveMobile){
					obj.tabContainer.find(".leftArrowHandleBox").hide();
					obj.tabContainer.find(".rightArrowHandleBox").hide();
					obj.tabScroll.css({left:0});
				}else{

				}

				/* touch event */
				var touchstart = _this.touchstart.bind(_this);
				if(AXUtil.browser.mobile){
					var touchBodyID = obj.tabTray.get(0).id;
					_this.touchstartBind = function () { touchstart(objID, objSeq); };
					if (document.addEventListener) AXgetId(touchBodyID).addEventListener("touchstart", _this.touchstartBind, false);
				}else{
					_this.touchstartBind = function (event) { touchstart(objID, objSeq, event); };
					obj.tabTray.unbind("mousedown.AXMobileTouch").bind("mousedown.AXMobileTouch", _this.touchstartBind);
				}
				obj.tabTray.attr("onselectstart", "return false");
				obj.tabTray.addClass("AXUserSelectNone");

				obj.tabTray.unbind("dragstart.AXMobileTouch").bind("dragstart.AXMobileTouch", _this.cancelEvent.bind(_this));
				/* touch event */
			}, 50);
		}
	},
	/**
	 * @method AXTabClass.addTabs
	 * @param {String} objID - 탭 대상 ID
	 * @param {Array} options - 대상 순서 seq
	 * @description 탭을 추가 합니다.
	 * @returns {AXTab}
	 * @example
	 * ```js
	 * $("#myTab01").addTabs([
	 *     {optionValue:"1", optionText:"1살", closable: true},
	 *     {optionValue:"2", optionText:"2살", closable: true},
	 *     {optionValue:"3", optionText:"3살", addClass:"Red"},
	 *     {optionValue:"4", optionText:"4살", addClass:"Blue"},
	 *     {optionValue:"5", optionText:"5살", addClass:"Green"},
	 *     {optionValue:"6", optionText:"6살", addClass:"Classic"},
	 *     {optionValue:"7", optionText:"7살"}
	 * ]);
	 * ```
	 */
	addTabs: function(objID, options){
		var cfg = this.config;
		var objSeq = axdom("#" + objID).data("objSeq");
		var obj = this.objects[objSeq];
		var po = [];
		var target;
		if(obj.config.overflow == "visible"){
			target = axdom("#" + objID + "_AX_tabTray div.clear");
		}else{
			target = axdom("#" + objID + "_AX_tabScroll div.clear");
		}

		var tabsCnt = obj.tabContainer.find(".AXTab").length;
		var selectedIndex = null;
		axdom.each(options, function(oidx, O){
			var closable = O.closable || obj.config.closable || cfg.closable;
			oidx += tabsCnt;

			po.push("<a href=\"javascript:;\" id=\"" + objID + "_AX_Tabs_AX_"+oidx+"\" class=\"AXTab " + (O.addClass || ""));
			if(closable){
				po.push(" closable");
			}
			if(O.optionValue == obj.config.value){
				selectedIndex = oidx;
				po.push(" on");
			}
			po.push("\">");
			po.push(O.optionText.dec());
			if(closable){
				po.push("<span class=\"AXTabClose\"></span>");
			}
			po.push("</a>");
			//if(AXUtil.browser.mobile){
				po.push("<span class='AXTabSplit'></span>");
			//}
		});

		if(selectedIndex != null){
			obj.config.selectedIndex = selectedIndex;
		}
		target.before(po.join(""));

		var tabsWidth = (axf.clientWidth() < cfg.responsiveMobile) ? 40 : 30;
		var tabsMargin = (axf.clientWidth() < cfg.responsiveMobile) ? 5 : 5;
		obj.tabContainer.find(".AXTab").each(function(){
			tabsWidth += (axdom(this).outerWidth().number() + axdom(this).css("marginLeft").number() + axdom(this).css("marginRight").number() + tabsMargin);
		});
		obj.tabScroll.css({width:tabsWidth});

		var setValueTab = this.setValueTab.bind(this);
		var myMenu = [];
		axdom.each(obj.config.options, function(oidx, O){
			myMenu.push({label:O.optionText, value:O.optionValue, className:"", onclick:function(){
				//trace(this);
				setValueTab(objID, this.menu.value);
			}});
		});

		var tabMoreID = objID + "_AX_tabMore";
		axdom.each(AXContextMenu.objects, function(oidx, O){
			if(O.id == tabMoreID){
				O.menu = myMenu;
				return false; // break;
			}
		});

		var bindTabClick = this.bindTabClick.bind(this);
		obj.tabContainer.find(".AXTab").unbind("click").bind("click", function(event){
			bindTabClick(objID, objSeq, event);
		});

		var closeTab = this.closeTab.bind(this);
		obj.tabContainer.find(".AXTabClose").unbind("click").bind("click", function(event){
			var tabIndex = obj.tabContainer.find(".AXTab").index(axdom(event.target).parent());
			if (tabIndex === -1) { return; }
			closeTab(objID, tabIndex, event);
		});

    this.resizeCheck();
	},
	/**
	 * @method AXTabClass.closeTab
	 * @param {String} objID - 탭 대상 ID
	 * @param {Number|String} [tabIndex or options] - 탭 인덱스(Number) or optionValue(String)
	 * @description 탭을 닫습니다.
	 * @returns {AXTab}
	 * @example
 	 * ```js
 	 * $("#myTab01").closeTab(2);
 	 * $("#myTab01").closeTab("optionValue");
 	 * ```
	 */
	closeTab: function(objID, tabIndex, event) {
		var objSeq = axdom("#" + objID).data("objSeq");
		var obj    = this.objects[objSeq];

        if (!obj.config.options) { return; }

        tabIndex = (tabIndex === undefined ? (obj.config.options.length - 1) : tabIndex);
        // find tabIndex by optionValue
        if (typeof(tabIndex) != "number") {
            axdom.each(obj.config.options, function(oidx, O){
                if (O.optionValue === tabIndex) {
                    tabIndex = oidx;
                    return false;
                }
            });
        }

        var removeTargetOption = obj.config.options.splice(tabIndex, 1)[0]; // remove and store target optoin

        // selected tab update
        if(obj.config.selectedIndex == tabIndex){
            var selectedIndex = tabIndex - 1;
            if (selectedIndex > -1) {
                this.setValueTab(objID, obj.config.options[selectedIndex].optionValue);
            } else {
                this.setValueTab(objID, obj.config.options[0].optionValue);
            }
        }else if(obj.config.selectedIndex > tabIndex){
            var selectedIndex = obj.config.selectedIndex - 1;
            if (selectedIndex > -1) {
                obj.config.selectedIndex = selectedIndex;
            }
        }

        // reinit tabs
		this.initTab(objID, objSeq);

        // fire onclose event
        if (axdom.isFunction(obj.config.onclose)) {
            obj.config.onclose.call({
                options:obj.config.options,
                item:removeTargetOption,
                index:tabIndex
            }, removeTargetOption, removeTargetOption.optionValue);
        }
	},
    /**
     * @method AXTabClass.bindTabClick
     * @param {String} objID - 탭 대상 ID
	 * @param {Number} objSeq - 대상 순서 seq
	 * @param {Event} event - Click event
     * @description 탭을 클릭 할때 처리를 합니다.
     * @returns {AXTab}
	 */
    bindTabClick: function(objID, objSeq, event){
    	//trace({objID:objID, objSeq:objSeq, e:event.target.id});
    	var cfg = this.config;
    	var obj = this.objects[objSeq];

		// event target search -
		var eid = event.target.id.split(/_AX_/g);
		var eventTarget = event.target;
		var myTarget = this.getEventTarget({
			evt: eventTarget, evtIDs: eid,
			until: function (evt, evtIDs) { return (axdom(evt.parentNode).hasClass("AXTabsTray")) ? true : false; },
			find: function (evt, evtIDs) { return (axdom(evt).hasClass("AXTab")) ? true : false; }
		});
		// event target search ------------------------


	    if (myTarget) {
		    //colHeadTool ready
		    var targetID = myTarget.id;
		    var itemIndex = targetID.split(/_AX_/g).last();

		    //trace(obj.config.options[itemIndex]);

		    var selectedObject = obj.config.options[itemIndex];
		    if(selectedObject && obj.config.value != selectedObject.optionValue){

			    axdom("#" + objID + "_AX_Tabs_AX_"+obj.config.selectedIndex).removeClass("on");
			    axdom("#" + objID + "_AX_Tabs_AX_"+itemIndex).addClass("on");

			    obj.config.value = selectedObject.optionValue;
			    obj.config.selectedIndex = itemIndex;

			    this.focusingItem(objID, objSeq, obj.config.selectedIndex);
			    if(obj.config.onclick){
				    obj.config.onclick.call({
					    options:obj.config.options,
					    item:obj.config.options[itemIndex],
					    index:itemIndex
				    }, obj.config.options[itemIndex], obj.config.options[itemIndex].optionValue);
			    }

			    if(obj.config.onchange){
				    obj.config.onchange.call({
					    options:obj.config.options,
					    item:obj.config.options[itemIndex],
					    index:itemIndex
				    }, obj.config.options[itemIndex], obj.config.options[itemIndex].optionValue);
			    }
		    }else{
			    if(obj.config.onclick){
				    obj.config.onclick.call({
					    options:obj.config.options,
					    item:obj.config.options[itemIndex],
					    index:itemIndex
				    }, obj.config.options[itemIndex], obj.config.options[itemIndex].optionValue);
			    }
		    }

	    }
    },
    /**
     * @method AXTabClass.setValueTab
     * @param {String} objID - 탭 대상 ID
     * @param {String} value - 값
     * @description 탭의 선택값을 변경 합니다.
     * @returns {AXTab}
     * @example
     * ```js
     * AXTab.setValueTab('myTab01','F');
     * ```
     */
    setValueTab: function(objID, value){
    	//trace({objID:objID, value:value});
		var cfg = this.config;
		var objSeq = null;
		axdom.each(this.objects, function(index, O){
			if(O.id == objID){
				objSeq = index;
				return false;
			}
		});
		if(objSeq == null){
			//trace("바인드 된 오브젝트를 찾을 수 없습니다.");
			return;
		}else{

			var obj = this.objects[objSeq];

			var itemIndex = null;
			axdom.each(obj.config.options, function(oidx, O){
				if(O.optionValue == value){
					itemIndex = oidx;
					return false;
				}
			});

			if(itemIndex == null) return;

			var selectedObject = obj.config.options[itemIndex];
			if(obj.config.value != selectedObject.optionValue){

				var tabs = obj.tabContainer.find(".AXTab");
				tabs.eq(obj.config.selectedIndex).removeClass("on");
				tabs.eq(itemIndex).addClass("on");
				/*  */
				this.focusingItem(objID, objSeq, itemIndex);

				obj.config.value = selectedObject.optionValue;
				obj.config.selectedIndex = itemIndex;

				if(obj.config.onchange){
					obj.config.onchange.call({
						options:obj.config.options,
						item:obj.config.options[itemIndex],
						index:itemIndex
					}, obj.config.options[itemIndex], obj.config.options[itemIndex].optionValue);
				}
			}

		}
    },
    /**
     * @method AXTabClass.bindTabMove
     * @param {String} objID - 탭 대상 ID
	 * @param {Number} objSeq - 대상 순서 seq
 	 * @param {String} direction - "left"||"right"
	 * @param {Event} event - "mouseover"
     * @description 탭의 양이 많아질때 생성되는 좌우 이동 화살표의 mouseover 이벤트를 처리 합니다.
     * @returns {AXTab}
	 */
    bindTabMove: function(objID, objSeq, direction, event){
    	//trace({objID:objID, objSeq:objSeq});
    	var cfg = this.config;
    	var obj = this.objects[objSeq];

		var trayWidth = obj.tabTray.outerWidth();
    	if(AXUtil.clientWidth() < cfg.responsiveMobile){
    		var rightMargin = 40;
    	}else{
    		var rightMargin = 29 + cfg.handleWidth;
    	}
    	trayWidth -= rightMargin;
		var scrollWidth = obj.tabScroll.outerWidth();
		var scrollLeft = obj.tabScroll.position().left;

		//trace({trayWidth:trayWidth, scrollWidth:scrollWidth, scrollLeft:scrollLeft});

		var animateStyles = {};
		if(direction == "left"){
			if(scrollLeft < cfg.handleWidth){
				scrollLeft += obj.config.scrollAmount;
				animateStyles = {left:scrollLeft};
			}else{
				return;
			}
			if(scrollLeft > cfg.handleWidth){
				//trace({trayWidth:(trayWidth - cfg.handleWidth), scrollWidth:scrollWidth, scrollLeft:scrollLeft});
				scrollLeft = cfg.handleWidth;
				animateStyles = {left:scrollLeft};
			}
		}else{
			if(trayWidth < (scrollWidth + scrollLeft)){
				scrollLeft -= obj.config.scrollAmount;
				animateStyles = {left:scrollLeft};
			}else{

			}

			if((trayWidth) > (scrollWidth + scrollLeft)){
				/*trace({trayWidth:(trayWidth - cfg.handleWidth), scrollWidth:scrollWidth, scrollLeft:scrollLeft}); */
				scrollLeft = trayWidth - scrollWidth - cfg.handleWidth;
				animateStyles = {left:scrollLeft};
			}else{
				//return;
			}

		}

		obj.tabScroll.css(animateStyles);

		var bindTabMove = this.bindTabMove.bind(this);

		if(obj.moveobj) clearTimeout(obj.moveobj);

		//trace("move");

		obj.moveobj = setTimeout(function(){
			bindTabMove(objID, objSeq, direction, event);
		}, 20);


		/*
		obj.tabScroll.animate(
			animateStyles,
			500,
			"sineInOut",
			function(){
			}
		);
		*/

    },
    /**
     * @method AXTabClass.bindTabMove
     * @param {String} objID - 탭 대상 ID
	 * @param {Number} objSeq - 대상 순서 seq
 	 * @param {String} direction - "left"||"right"
	 * @param {Event} event - "mousedown"
     * @description 탭의 양이 많아질때 생성되는 좌우 이동 화살표의 mousedown 이벤트를 처리 합니다.
     * @returns {AXTab}
	 */
	bindTabMoveClick: function(objID, objSeq, direction, event){
    	var cfg = this.config;
    	var obj = this.objects[objSeq];

    	if(obj.moveobj) clearTimeout(obj.moveobj);

		var scrollAmount = 500;

		var trayWidth = obj.tabTray.outerWidth();
    	if(AXUtil.clientWidth() < cfg.responsiveMobile){
    		var rightMargin = 40;
    	}else{
    		var rightMargin = 29 + cfg.handleWidth;
    	}
    	trayWidth -= rightMargin;
		var scrollWidth = obj.tabScroll.outerWidth();
		var scrollLeft = obj.tabScroll.position().left;

		//trace({trayWidth:trayWidth, scrollWidth:scrollWidth, scrollLeft:scrollLeft});

		var animateStyles = {};
		if(direction == "left"){
			if(scrollLeft < cfg.handleWidth){
				scrollLeft += scrollAmount;
				animateStyles = {left:scrollLeft};
			}else{
				return;
			}
			if(scrollLeft > cfg.handleWidth){
				scrollLeft = cfg.handleWidth;
				animateStyles = {left:scrollLeft};
			}
		}else{
			if(trayWidth < (scrollWidth + scrollLeft)){
				scrollLeft -= scrollAmount;
				animateStyles = {left:scrollLeft};
			}else{

			}

			if((trayWidth-cfg.handleWidth) > (scrollWidth + scrollLeft)){
				//trace({trayWidth:(trayWidth - cfg.handleWidth), scrollWidth:scrollWidth, scrollLeft:scrollLeft});
				scrollLeft = trayWidth - scrollWidth - cfg.handleWidth;
				animateStyles = {left:scrollLeft};
			}else{
				//return;
			}

		}

		obj.tabScroll.stop();
		obj.tabScroll.animate(
			animateStyles,
			500,
			"sineInOut",
			function(){
			}
		);

		if (event.preventDefault) event.preventDefault();
		if (event.stopPropagation) event.stopPropagation();
		event.cancelBubble = true;
		return false;
    },
    /**
     * @method AXTabClass.bindTabMoreClick
     * @param {String} objID - 탭 대상 ID
	 * @param {Number} objSeq - 대상 순서 seq
 	 * @param {String} direction - "left"||"right"
	 * @param {Event} event - "click"
     * @description 탭의 양이 많아질때 생성되는 탭 리스트 툴 화살표에 대한 "click" 이벤트를 처리 합니다.
     * @returns {AXContextMenu}
	 */
    bindTabMoreClick: function(objID, objSeq, direction, event){
    	var cfg = this.config;
    	var obj = this.objects[objSeq];
        if(axf.clientWidth() < cfg.responsiveMobile) {
            AXContextMenu.setConfig({responsiveMobile: 640});
            /* mobile 너비 지정 */
        }
    	AXContextMenu.open({id:objID + "_AX_tabMore", title:AXConfig.AXContextMenu.title}, event);
    },
    /**
     * @method AXTabClass.resizeCheck
     * @description 윈도우 창 크기가 변경 되었을때를 감지하여 처리 합니다.
     * @returns {AXTab}
	 */
    resizeCheck: function(){
    	var cfg = this.config;
    	var focusingItem = this.focusingItem.bind(this);

    	axdom.each(this.objects, function(objSeq, O){
    		var objID = this.id;
    		var obj = this;
			var trayWidth = obj.tabTray.outerWidth();
			var scrollWidth = obj.tabScroll.outerWidth();
			if(trayWidth > scrollWidth){
				obj.tabContainer.find(".leftArrowHandleBox").hide();
				obj.tabContainer.find(".rightArrowHandleBox").hide();
				obj.tabContainer.find(".rightArrowMoreBox").hide();
				obj.tabScroll.css({left:0});
			}else{
				if(AXUtil.clientWidth() < cfg.responsiveMobile){
					obj.tabContainer.find(".leftArrowHandleBox").hide();
					obj.tabContainer.find(".rightArrowHandleBox").hide();
				}else{
					obj.tabContainer.find(".leftArrowHandleBox").show();
					obj.tabContainer.find(".rightArrowHandleBox").show();
				}
				obj.tabContainer.find(".rightArrowMoreBox").show();
				if(!AXUtil.isEmpty(obj.config.selectedIndex)) focusingItem(objID, objSeq, obj.config.selectedIndex);
			}
			obj.tabTray.css({height:obj.tabScroll.outerHeight()});
    	});
    },
	/**
	 * @method AXTabClass.focusingItem
	 * @param {String} objID - 탭 대상 ID
	 * @param {Number} objSeq - 대상 순서 seq
	 * @param {Number} optionIndex - 탭 아이템 index
	 * @description 대상의 해당 index에 해당하는 탭에 focus를 줍니다.
	 * @returns {AXTab}
	 */
	focusingItem: function(objID, objSeq, optionIndex){
		var cfg = this.config;
		var obj = this.objects[objSeq];

		if(!obj.tabScroll.position()) return;

		if(obj.tabTray.outerWidth() > obj.tabScroll.outerWidth()){
			return;
		}

		var tabs = obj.tabContainer.find(".AXTab");
		var targetTab = tabs.eq(optionIndex);
		if(AXUtil.clientWidth() < cfg.responsiveMobile){
			var scrollLeft = (targetTab.position().left);
			var itemWidth = (targetTab.outerWidth());
			var handleWidth = 0;
			var rightMargin = 40;
		}else{
			var scrollLeft = (targetTab.position().left - cfg.handleWidth);
			var itemWidth = (targetTab.outerWidth());
			var handleWidth = cfg.handleWidth;
			var rightMargin = 29 + cfg.handleWidth;
		}

		/*trace({scrollLeft:scrollLeft, tsLeft:obj.tabScroll.position().left.abs(), trayWidth:obj.tabTray.outerWidth(), itemWidth:itemWidth, tt:(obj.tabScroll.position().left.abs() + obj.tabTray.outerWidth() - rightMargin - handleWidth	)});*/
		if(scrollLeft > (obj.tabScroll.position().left).abs() && (scrollLeft + itemWidth) <= (obj.tabScroll.position().left.abs() + obj.tabTray.outerWidth() - rightMargin - handleWidth)){
			//trace(11);
		}else{
			//trace(obj.tabTray.outerWidth(), handleWidth, obj.tabScroll.outerWidth(), scrollLeft);
			if(obj.tabTray.outerWidth() - handleWidth > (obj.tabScroll.outerWidth() - scrollLeft)){
				//trace(scrollLeft);
				scrollLeft = (obj.tabScroll.outerWidth() - obj.tabTray.outerWidth()) + rightMargin;
			}
			//trace({left:-scrollLeft});
			setTimeout(function(){
				obj.tabScroll.css({left:-scrollLeft});
			}, 10);
		}
    },

    /* 터치 이동관련 함수 - s */
	touchstart: function (objID, objSeq, e) {
		if (this.touhEndObserver) clearTimeout(this.touhEndObserver);
		if (this.touhMoveObserver) clearTimeout(this.touhMoveObserver);

		var cfg = this.config;
		var obj = this.objects[objSeq];

		var trayWidth = obj.tabTray.outerWidth();
		var scrollWidth = obj.tabScroll.outerWidth();

		if(trayWidth > scrollWidth){
			return;
		}

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
			sLeft:  obj.tabScroll.position().left,
			x: touch.pageX,
			y: touch.pageY
		};

		var touchEnd = this.touchEnd.bind(this);
		var touchMove = this.touchMove.bind(this);

		if(AXUtil.browser.mobile){
			var event = window.event;
			this.touchEndBind = function () {
				touchEnd(objID, objSeq);
			};
			this.touchMoveBind = function () {
				touchMove(objID, objSeq);
			};
			if (document.addEventListener) {
				document.addEventListener("touchend", this.touchEndBind, false);
				document.addEventListener("touchmove", this.touchMoveBind, false);
			}
		}else{

			this.touchEndBind = function (event) {
				touchEnd(objID, objSeq, event);
			};
			this.touchMoveBind = function (event) {
				touchMove(objID, objSeq, event);
			};

			axdom(document.body).bind("mouseup.AXMobileTouch", this.touchEndBind);
			axdom(document.body).bind("mousemove.AXMobileTouch", this.touchMoveBind);
		}

		var minLeft = 0;
		var maxLeft = - (this.touchStartXY.scrollWidth - this.touchStartXY.targetWidth);
		var scrollPosition = obj.tabScroll.position();

		if(scrollPosition.left < minLeft && scrollPosition.left > maxLeft){
			obj.tabScroll.stop();
		}
	},
	touchMove: function (objID, objSeq, e) {
		if (this.touhEndObserver) clearTimeout(this.touhEndObserver);
		if (this.touhMoveObserver) clearTimeout(this.touhMoveObserver);

		var cfg = this.config;
		var obj = this.objects[objSeq];

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
			this.moveBlock(objID, objSeq, touch.pageX - this.touchStartXY.x);
			if (event.preventDefault) event.preventDefault();
			else return false;
		}
		if (((this.touchStartXY.x - touch.pageX).abs() - (this.touchStartXY.y - touch.pageY).abs()).abs() < 5) {
			//this.touchSelecting = true;
		}

		var touchMoveAfter = this.touchMoveAfter.bind(this);
		this.touhMoveObserver = setTimeout(function () {
			touchMoveAfter(touch, objID, objSeq);
		}, 50);
	},
	touchMoveAfter: function(touch, objID, objSeq){
		var cfg = this.config;
		var obj = this.objects[objSeq];
		try{
			this.touchStartXY.sTime = ((new Date()).getTime() / 1000);
			this.touchStartXY.sLeft = obj.tabScroll.position().left;
			this.touchStartXY.x = touch.pageX;
			this.touchStartXY.y = touch.pageY;
		}catch(e){
			//trace(e);
		}
	},
	touchEnd: function (objID, objSeq, e) {
		var cfg = this.config;
		var obj = this.objects[objSeq];
		var event = window.event || e;

		if(AXUtil.browser.mobile){
			if (document.removeEventListener) {
				document.removeEventListener("touchend", this.touchEndBind, false);
				document.removeEventListener("touchmove", this.touchMoveBind, false);
			}
		}else{
			axdom(document.body).unbind("mouseup.AXMobileTouch");
			axdom(document.body).unbind("mousemove.AXMobileTouch");
		}

		var moveEndBlock = this.moveEndBlock.bind(this);
		this.touhEndObserver = setTimeout(function () {
			moveEndBlock(objID, objSeq);
		}, 10);
	},
	/* 터치 이동관련 함수 - e */

	moveBlock: function(objID, objSeq, moveX){
		var cfg = this.config;
		var obj = this.objects[objSeq];

		var newLeft = (this.touchStartXY.sLeft + (moveX));
		/*
			obj.tabTray
			obj.tabScroll
		*/
		//trace(newLeft);

		var newLeft = (this.touchStartXY.sLeft + (moveX));
		var minLeft = 0;
		var maxLeft = - (this.touchStartXY.scrollWidth - this.touchStartXY.targetWidth);
		if(cfg.bounces){
			minLeft = this.touchStartXY.targetWidth * 0.4;
			maxLeft = -((this.touchStartXY.scrollWidth - this.touchStartXY.targetWidth) * 1.2);
		}

		if(newLeft > minLeft){
			newLeft = minLeft;
		}else if(newLeft < maxLeft){
			newLeft = maxLeft;
		}
		obj.tabScroll.css({left: newLeft});
	},
	moveEndBlock: function(objID, objSeq){
		var cfg = this.config;
		var obj = this.objects[objSeq];

		/* 관성발동여부 체크 */
		if(!this.touchStartXY) return;
		var sTime = this.touchStartXY.sTime;
		var eTime = ((new Date()).getTime() / 1000);
		var dTime = eTime - sTime;
		var eLeft = obj.tabScroll.position().left;
		var dLeft = eLeft - this.touchStartXY.sLeft;

		var velocity = Math.ceil((dLeft/dTime)/5); // 속력= 거리/시간
		var endLeft = Math.ceil(eLeft + velocity); //스크롤할때 목적지
		/*trace({eLeft: eLeft, velocity:velocity, endLeft:endLeft});*/
		if(endLeft > 0) endLeft = 0;
		var newLeft = endLeft.abs();
   		if(AXUtil.clientWidth() < cfg.responsiveMobile){
    		var handleWidth = 0;
    		var rightMargin = 40;
    	}else{
    		var handleWidth = cfg.handleWidth;
    		var rightMargin = 29 + cfg.handleWidth;
    	}
		if(obj.tabTray.outerWidth() - handleWidth > (obj.tabScroll.outerWidth() - newLeft)){
			newLeft = (obj.tabScroll.outerWidth() - obj.tabTray.outerWidth()) + rightMargin;
		}

		//trace(absPage);
		this.touchStartXY.sLeft = -newLeft;
		obj.tabScroll.animate({left: -newLeft}, (obj.tabScroll.position().left + newLeft).abs(), "cubicOut", function () {});
		//trace({left: -newLeft});

		this.touchStartXY = null;
	},
	cancelEvent: function (event) {
		event.stopPropagation(); // disable  event
		return false;
	},
	/**
	 * @method AXTabClass.updateTabOption
	 * @description 입력된 value값과 같은 optionValue를 가진탭의 option 을 입력된 option으로 대체합니다.
	 * @param {String} objID - 탭 대상 ID
	 * @param {String} value - 대상 탭 값
	 * @param {String} option  - 변경될 option
	 * @returns {AXTab}
	 * @example
	 * ```js
	 * AXTab.updateTabOption('myTab01','F',{optionText:"신여성",addClass:"Classic"});
	 * ```
	 */
	updateTabOption: function(objID, value, option){
    	//trace({objID:objID, value:value});
		var cfg = this.config;
		var objSeq = null;
		axdom.each(this.objects, function(index, O){
			if(O.id == objID){
				objSeq = index;
				return false;
			}
		});
		if(objSeq == null){
			//trace("바인드 된 오브젝트를 찾을 수 없습니다.");
			return;
		}else{

			var obj = this.objects[objSeq];

			var itemIndex = null;
			axdom.each(obj.config.options, function(oidx, O){
				if(O.optionValue == value){
					itemIndex = oidx;
					return false;
				}
			});

			if(itemIndex == null) return;

			var OriginalOption = obj.config.options[itemIndex];

			for(var idx in option){
				OriginalOption[idx]=option[idx];
			}

			this.initTab(objID, objSeq);

		}
    }
});

var AXTab = new AXTabClass();
AXTab.setConfig({});

/**
 * @method jQueryExtends.unbindTab
 * @param {Object} [configs]
 * @returns {jQueryObject}
 * @description 탭을 언바인드 합니다.
 * @example
 * ```js
 * axdom("#myTab01").unbindTab();
 * ```
 **/
axdom.fn.unbindTab = function (config) {
    axdom.each(this, function () {
        if (config == undefined) config = {};
        config.id = this.id;
        AXTab.unbind(config);
    });
	return this;
};

/**
 * @method jQueryExtends.bindTab
 * @param {Object} configs
 * @returns {jQueryObject}
 * @description 탭을 바인드 합니다.
 * @example
 * ```js
 * $("#myTab01").bindTab({
 *    theme : "AXTabs",
 *    value:"",
 *    overflow:"scroll", // "visible"
 *    options:[
 *        {optionValue:"M", optionText:"남성", closable:true},
 *        {optionValue:"F", optionText:"여성", closable:true},
 *        {optionValue:"N", optionText:"선택안함"},
 *        {optionValue:"", optionText:"모두"}
 *    ],
 *    onchange: function(selectedObject, value){
 *        //toast.push(Object.toJSON(this));
 *        //toast.push(Object.toJSON(selectedObject));
 *        toast.push("onchange: "+Object.toJSON(value));
 *    },
 *    onclose: function(selectedObject, value){
 *        //toast.push(Object.toJSON(this));
 *        //toast.push(Object.toJSON(selectedObject));
 *        toast.push("onclose: "+Object.toJSON(value));
 *    }
 * });
 * ```
 **/
axdom.fn.bindTab = function (config) {
    axdom.each(this, function () {
        if (config == undefined) config = {};
        config.id = this.id;
        AXTab.bind(config);
    });
	return this;
};

/**
 * @method jQueryExtends.setValueTab
 * @param {String|Number} value
 * @returns {jQueryObject}
 * @description 탭의 value를 지정하고 지정된 value로 탭을 선택합니다.
 * @example
 * ```js
 * $("#"+tabID).setValueTab(tabValue);
 * ```
 **/
axdom.fn.setValueTab = function (value) {
    axdom.each(this, function () {
        AXTab.setValueTab(this.id, value);
    });
	return this;
};

/**
 * @method jQueryExtends.addTabs
 * @param {Array} options
 * @returns {jQueryObject}
 * @description 탭 아이템을 추가합니다.
 * @example
 * ```js
 * var options = [];
 * var index;
 * for(var i = 0; i < addCount; i++){
 *     index = "0" + (i + 1);
 *     options.push({optionText: "add " + index, optionValue: index, closable:true});
 * }
 * $("#" + tabID).addTabs(options);
 * ```
 **/
axdom.fn.addTabs = function (options) {
	axdom.each(this, function () {
		var objSeq = axdom("#" + this.id).data("objSeq");
		if(objSeq == null){
			return;
		}

		var obj = AXTab.objects[objSeq];
		obj.config.options = obj.config.options.concat(options);

		AXTab.addTabs(this.id, options);
	});
	return this;
};

/**
 * @method jQueryExtends.closeTab
 * @param {Number} tabIndex
 * @returns {jQueryObject}
 * @description 탭 아이템을 제거합니다.
 * @example
 * ```js
 * $("#" + tabID).closeTab(tabValue);
 * ```
 **/
axdom.fn.closeTab = function(tabValue) {
	axdom.each(this, function () {
		AXTab.closeTab(this.id, tabValue);
	});
	return this;
};

/**
 * @method jQueryExtends.updateTabs
 * @param {Array} options
 * @returns {jQueryObject}
 * @description 탭 아이템을 재설정합니다.
 * @example
 * ```js
 * var options = [];
 * var index;
 * for(var i = 0; i < addCount; i++){
 *     index = "0" + (i + 1);
 *     options.push({optionText: "O " + index, optionValue: index, closable:true});
 * }
 * $("#" + tabID).updateTabs(options);
 * ```
 **/
axdom.fn.updateTabs = function (options) {
	axdom.each(this, function () {
		var objSeq = axdom("#" + this.id).data("objSeq");
		if(objSeq == null){
			return;
		}

		var obj = AXTab.objects[objSeq];
		//obj.config.options = obj.config.options.concat(options);
		obj.config.options = options;
		obj.config.value = options[0].optionValue;
		AXTab.initTab(this.id, objSeq);
	});
	return this;
};

axdom.fn.updateTabOption = function (value,option) {
	axdom.each(this, function () {
		AXTab.updateTabOption(this.id, value, option);
	});
	return this;
};

/**
 * @method AXTabClass.getOptions
 * @param {String} objID - 탭 대상 ID
 * @returns {AXTab.options}
 * @example
 * ```js
 * AXTab.getOptions('myTab01');
 * ```
 */
axdom.fn.getOptions = function (){
	var returnValue = null;
	axdom.each(this, function(){
		var objSeq = axdom("#" + this.id).data("objSeq");
		if(objSeq == null){
			return;
		}

		var obj = AXTab.objects[objSeq];
		//obj.config.options = obj.config.options.concat(options);
		returnValue = obj.config.options;
	})
	return returnValue;
};

/* ---------------------------- */
/* http://www.axisj.com, license : http://www.axisj.com/license */
 

var AXMultiSelector = Class.create(AXJ, {
    version: "AXMultiSelector v1.21",
    author: "tom@axisj.com",
    logs: [
		"2013-08-01 오후 3:08:07",
		"2014-03-21 오후 2:19:52 : tom multiselect 기본값 설정 함수 추가"
	],
    initialize: function (AXJ_super) {
        AXJ_super();

    },
    init: function () {
    	var cfg = this.config;
    	axdom("#"+cfg.targetID).bind("click", this.expandOptionBox.bind(this));
    },
    expandOptionBox: function(){
    	var cfg = this.config;
    	
    	axdom.each(cfg.optionGroup, function (gidx, G) {
    		if (G.getOptionValue) {
    			axdom.each(cfg.optionGroup[gidx].options, function (oidx, O) {
    				cfg.optionGroup[gidx].options[oidx].selected = false;
    			});
    		}
    	});

		var po = [];
		po.push("<div id=\""+cfg.targetID + "_AX_expandBox\" class=\"AXMultiSelector_expandBox\">");
		var boxWidth = 0;
		axdom.each(cfg.optionGroup, function(gidx, G){
			po.push("<div id=\""+cfg.targetID + "_AX_expandScrollBox_AX_"+gidx+"\" class=\"AXMultiSelector_scrollBox\" style=\"width:"+this.width+"px;\">");
			po.push("	<div id=\""+cfg.targetID + "_AX_expandScroll_AX_"+gidx+"\" class=\"AXMultiSelector_scroll\">");
			axdom.each(this.options, function(index, O){
				var selectedClass = (O.selected) ? " on" : "";
				po.push("<a href=\"#AXexec\" id=\""+cfg.targetID + "_AX_"+gidx+"_AX_option_AX_"+index+"\" class=\"bindSelectorNodes "+selectedClass+"\">"+ O.optionText +"</a>");
			});
			po.push("	</div>");
			po.push("</div>");
			boxWidth += (this.width + 2);
		});
		po.push("<div style=\"clear:both\"></div>");
		po.push("<div align=\"center\" style=\"padding-top:5px;\">");
		po.push("	<input type=\"button\" value=\"확인\" class=\"AXButton\" id=\""+cfg.targetID + "_AX_expandScrollBox_AX_confirm\" />");
		po.push("	<input type=\"button\" value=\"취소\" class=\"AXButton\" id=\""+cfg.targetID + "_AX_expandScrollBox_AX_cancel\" />");
		po.push("</div>");
		po.push("</div>");
		axdom(document.body).append(po.join(''));
		
		boxWidth = boxWidth + (cfg.optionGroup.length * 5) + 5;
		axdom("#"+cfg.targetID + "_AX_expandBox").css({width:boxWidth});
		
    	var css = {};
    	var offset = axdom("#"+cfg.targetID).offset();
    	css.top = offset.top;
    	//css.left = offset.left - boxWidth + axdom("#"+cfg.targetID).outerWidth();
    	css.left = offset.left;
    	axdom("#"+cfg.targetID + "_AX_expandBox").css(css);


		axdom.each(cfg.optionGroup, function(gidx, G){
			G.myUIScroll = new AXScroll();
			G.myUIScroll.setConfig({
				CT_className:"AXScrollSmall",
				targetID:cfg.targetID + "_AX_expandScrollBox_AX_"+gidx,
				scrollID:cfg.targetID + "_AX_expandScroll_AX_"+gidx,
				touchDirection:false
			});
			
			var selectedValue = "";
			if (G.getOptionValue) selectedValue = G.getOptionValue.call(G);

			axdom.each(cfg.optionGroup[gidx].options, function (oidx, O) {
				if (G.getOptionValue) {
					if (O.optionValue == selectedValue) {
						O.selected = true;
						axdom("#" + cfg.targetID + "_AX_" + gidx + "_AX_option_AX_" + oidx).addClass("on");
						G.myUIScroll.focusElement(cfg.targetID + "_AX_" + gidx + "_AX_option_AX_" + oidx); //focus
					}
				}else if(O.selected){
					O.selected = true;
					axdom("#" + cfg.targetID + "_AX_" + gidx + "_AX_option_AX_" + oidx).addClass("on");
					G.myUIScroll.focusElement(cfg.targetID + "_AX_" + gidx + "_AX_option_AX_" + oidx); //focus
				} else {
					cfg.optionGroup[gidx].options[oidx].selected = false;
				}
			});
			
		});
		
		axdom("#"+cfg.targetID + "_AX_expandScrollBox_AX_confirm").bind("click", function(){
			if(cfg.onChange){
				var selectObj = {};
				axdom.each(cfg.optionGroup, function(gidx, G){
					selectObj[G.name] = {};
					axdom.each(cfg.optionGroup[gidx].options, function(oidx, O){
						if(O.selected){
							selectObj[G.name] = O;
						}
					});
				});
				cfg.onChange.call(selectObj);
			}
			axdom("#"+cfg.targetID + "_AX_expandBox").remove(); // 개체 삭제 처리
		});
		axdom("#"+cfg.targetID + "_AX_expandScrollBox_AX_cancel").bind("click", function(){
			axdom("#"+cfg.targetID + "_AX_expandBox").remove(); // 개체 삭제 처리
		});
		
		axdom("#"+cfg.targetID + "_AX_expandBox").find(".bindSelectorNodes").bind("click", function(event){
			var idx = event.target.id.split(/_AX_/g);
			var gidx = idx[idx.length-3];
			var index = idx[idx.length-1];
			
			axdom("#"+cfg.targetID + "_AX_"+gidx+"_AX_option_AX_"+index).addClass("on");
			
			axdom.each(cfg.optionGroup[gidx].options, function(oidx, O){
				if(O.selected){
					axdom("#"+cfg.targetID + "_AX_"+gidx+"_AX_option_AX_"+oidx).removeClass("on");
					delete O.selected;
				}
			});
			cfg.optionGroup[gidx].options[index].selected = true;
			
		});
    },
    setValue: function(obj){
    	var cfg = this.config;
    	axdom.each(cfg.optionGroup, function(gidx, G){
    		axdom.each(obj, function(k, v){
    			if(G.name == k){
    				axdom.each(G.options, function(){
    					if(this.optionValue+"" == v+""){
    						this.selected = true;
    					}else{
    						delete this.selected;
    					}
    				});
    				
    			}
    		});
    	});
    	
    }
});
/* ---------------------------- */
/* http://www.axisj.com, license : http://www.axisj.com/license */
/**
 * AXProgress
 * @class AXProgress
 * @extends AXJ
 * @version v1.1
 * @author tom@axisj.com
 * @logs
 "2012-12-19 오후 5:47:58",
 "2014-02-03 오후 9:29:34 : tom count 표시문제 해결"
 "2014-10-15 groovedk : 주석추가"
 */

var AXProgress = Class.create(AXJ, {
/**
 * @method AXProgress.initialize
 * @param {fn} -
 * @param {jsObject} [options] - config.options 에 할당 / 추가
 * @description
 * 프로그래스바를 시작합니다. options 를 지정하지 않으면 setConfig에 지정한 속성을 이용하여 프로그래스바를 시작합니다.
 * @example
 ```
var myProgress = new AXProgress();

myProgress.setConfig({
	theme:"AXlineProgress", //[String = "AXlineProgress"] - 프로그래스 CSS Class 이름 AXlineProgress, AXCircleProgress 클래스가 기본 제공됩니다.
	totalCount:100,         //{number} - 프로그래스 전체 카운트 수
	width:400,              //{number} - 프로그래스바 너비
	top:100,                //{number} - 프로그래스바 표시 위치
	title:"AXProgress BAR", //{String} - 프로그래스바 제목
	duration:50             //{number = 50} - 프로그래스바의 애니메이션 속도 값 입니다.
});

 ```
 */
	initialize: function(AXJ_super) {
		AXJ_super();
		this.Observer = null;
		//this.config.easing = {duration:10, easing:""};
		this.config.duration = 50;
		this.config.theme = "AXlineProgress";
	},
	init: function(){
		
	},

/**
 * @method AXProgress.start
 * @param {fn} - callBack function
 * @param {jsObject} [options] - config.options 에 할당 / 추가
 * @description
 * 프로그래스바를 시작합니다. options 를 지정하지 않으면 setConfig에 지정한 속성을 이용하여 프로그래스바를 시작합니다.
 * @example
 ```
var myProgress = new AXProgress();

myProgress.start(function(){
	trace(this);
	if(this.isEnd){
		myProgress.close();
		mask.close();
		toast.push("progress end");
	}else{
		// 무언가 처리를 해줍니다.	대부분 비동기 AJAX 통신 처리 구문을 수행합니다.
		myProgress.update(); // 프로그레스의 다음 카운트를 시작합니다.
	}
});

// options 지정방식
mask.open();
myProgress.start(function(){
    if(this.isEnd){
		myProgress.close();
		mask.close();
		toast.push("progress end");
	}else{
		// 무언가 처리를 해줍니다.	대부분 비동기 AJAX 통신 처리 구문을 수행합니다.
		myProgress.update(); // 프로그레스의 다음 카운트를 시작합니다.
	}},
    {
        totalCount:10,
        width:500,
        top:200,
        title:"Set Options Type Progress"
    }
);

 ```
 */
	start: function(callBack, options){
		var config = this.config;
		config.callBack = callBack;
		
		config.options = options;
		
		var totalCount = config.totalCount || 100;
		this.loadedCount = 0;
		var loadedCount = this.loadedCount;
		var loadedRate = (loadedCount / totalCount * 100).round(1);
		var progressWidth = config.width || 200;
		var progressTitle = config.title || "";
		var progressTop = config.top || 0;
		this.progressID = "progress_AX_"+AXUtil.timekey();
		var progressID = this.progressID;
		this.progressStop = false;
		var theme = config.theme;
		
		var hasCancel = false;
		
		if(config.options){
			if(config.options.totalCount) totalCount = config.options.totalCount;
			if(config.options.width) progressWidth = config.options.width;
			if(config.options.top) progressTop = config.options.top;
			if(config.options.title) progressTitle = config.options.title;
			if(config.options.cancel) hasCancel = config.options.cancel;
			if(config.options.theme) theme = config.options.theme;
		}

		var po = [];
		po.push("<div class=\"AXprogressTray "+theme+"\" id=\""+progressID+"_AX_tray\" align=\"center\" style=\"top:"+progressTop+"px;\">");
		if(progressTitle != ""){
			po.push("	<div class=\"AXprogressTitle\" id=\""+progressID+"_AX_title\" style=\"width:"+progressWidth+"px;\" align=\"left\">"+progressTitle+"</div>");
		}
		po.push("<div class=\"AXprogress\" id=\""+progressID+"\" style=\"width:"+progressWidth+"px;\">");
		po.push("	<div class=\"AXprogressContainer\" id=\""+progressID+"_AX_container\" align=\"left\" style=\"overflow:hidden;\">");
		if(theme == "AXlineProgress") po.push("		<div class=\"AXprogressBar\" id=\""+progressID+"_AX_bar\" style=\"width:"+loadedRate+"%;\"></div>");
		else  po.push("		<div class=\"AXprogressBar\" id=\""+progressID+"_AX_bar\"></div>");

		po.push("	</div>");

        po.push("    <div class=\"AXprogressLoadedText\" id=\""+progressID+"_AX_loadedText\">"+loadedRate+"%</div>");

		if(hasCancel){
			po.push(" <a href=\"#axexec\" id=\""+progressID+"_AX_cancel\" class=\"AXprogressCancel\">Cancel</a>");
		}

		po.push("</div>");
				
		po.push("</div>");
		this.progress = axdom(po.join(''));
		axdom(document.body).append(this.progress);
		
		axdom("#"+progressID+"_AX_cancel").bind("click", this.cancel.bind(this));
        this.loadedCount = 1;
		this.update();
	},

/**
 * @method AXProgress.update
 * @description - 프로그레스바 진행 상태를 업데이트 합니다.
 * @example
 ```
myProgress.update();
 ```
 */
	update: function(){
		var config = this.config;
		var theme = config.theme;
		
		if(this.progressStop) return;

		var totalCount = config.totalCount || 100;

		if(config.options){
			if(config.options.totalCount) totalCount = config.options.totalCount;
			if(config.options.theme) theme = config.options.theme;
		}
		
		var loadedCount = this.loadedCount;
		
		var progressID = this.progressID;
		var loadedRate = ((loadedCount-1) / (totalCount.number()) * 100).round(1);
		if(loadedRate > 100) loadedRate = 100;
		axdom("#"+progressID+"_AX_loadedText").html(loadedRate+"%<span>"+(loadedCount-1).money()+"/"+totalCount.money()+"</span>");
		
		if(theme == "AXlineProgress"){
			axdom("#"+progressID+"_AX_bar").animate(
				{width:loadedRate+"%"},
				config.duration, "", 
				function(){
					if(config.callBack){
						config.callBack.call({
							totalCount:totalCount,
							loadedCount:loadedCount,
							loadedRate:(loadedCount / (totalCount.number()+1) * 100).round(1),
							isEnd:((loadedCount-1) == totalCount)
						});
					}
				}
			);
		}else{
			//circle
			setTimeout(function(){
				axdom("#"+progressID+"_AX_bar").addClass("percent"+((loadedCount / (totalCount.number()) * 100).round(0) / 5).round() * 5);
				if(config.callBack){
					config.callBack.call({
						totalCount:totalCount,
						loadedCount:loadedCount-1,
						loadedRate:(loadedCount / (totalCount.number()+1) * 100).round(1),
						isEnd:((loadedCount-1) == totalCount)
					});
				}				
			}, config.duration);
		}
		this.loadedCount++;
	},

/**
 * @method AXProgress.cancel
 * @description - 프로그래스바 진행을 중지합니다.
 * @example
 ```
myProgress.cancel();
 ```
 */
	cancel: function(){
		var config = this.config;
		var progressID = this.progressID;
		var cancelMSg = AXConfig.AXProgress.cancelMsg;
		if(config.options){
			var cancel = config.options.cancel;
			if(cancel.confirmMsg) cancelMSg = cancel.confirmMsg;
			if(confirm(cancelMSg)){
				this.progressStop = true;
				var totalCount = config.totalCount || 100;
				var loadedCount = this.loadedCount;
				cancel.oncancel.call({
					totalCount:totalCount,
					loadedCount:loadedCount,
					loadedRate:(loadedCount / totalCount * 100).round(1),
					isEnd:(loadedCount == totalCount)
				});
			}else{
				
			}
		}
	},

/**
 * @method AXProgress.restart
 * @description - 중지된 프로그레스바 진행상태를 재시작 합니다.
 * @example
 ```
myProgress.restart();
 ```
 */
	restart: function(){
		this.progressStop = false;
		this.update();
    },

/**
 * @method AXProgress.close
 * @description - 프로그레스바 창을 닫습니다.
 * @example
 ```
myProgress.close();
 ```
 */
	close: function(){
		var config = this.config;
		var progressID = this.progressID;
		axdom("#"+progressID+"_AX_tray").remove();
	}
});
/* ---------------------------- */
/* http://www.axisj.com, license : http://www.axisj.com/license */

/**
 * SWFUpload: http://www.swfupload.org, http://swfupload.googlecode.com
 *
 * mmSWFUpload 1.0: Flash upload dialog - http://profandesign.se/swfupload/,  http://www.vinterwebb.se/
 *
 * SWFUpload is (c) 2006-2007 Lars Huring, Olov Nilz? and Mammon Media and is released under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * SWFUpload 2 is (c) 2007-2008 Jake Roberts and is released under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * SWFObject v2.2 <http://code.google.com/p/swfobject/>
 *    is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
 */

/* ******************* */
/* Constructor & Init  */
/* ******************* */

var SWFUpload;
var swfobject;

(function () {
    if (SWFUpload == undefined) {
        SWFUpload = function (settings) {
            this.initSWFUpload(settings);
        };
    }

    SWFUpload.prototype.initSWFUpload = function (userSettings) {
        try {
            this.customSettings = {};	// A container where developers can place their own settings associated with this instance.
            this.settings = {};
            this.eventQueue = [];
            this.movieName = "SWFUpload_" + SWFUpload.movieCount++;
            this.movieElement = null;


            // Setup global control tracking
            SWFUpload.instances[this.movieName] = this;

            // Load the settings.  Load the Flash movie.
            this.initSettings(userSettings);
            this.loadSupport();
            if (this.swfuploadPreload()) {
                this.loadFlash();
            }

            this.displayDebugInfo();
        } catch (ex) {
            delete SWFUpload.instances[this.movieName];
            throw ex;
        }
    };

    /* *************** */
    /* Static Members  */
    /* *************** */
    SWFUpload.instances = {};
    SWFUpload.movieCount = 0;
    SWFUpload.version = "2.5.0 2010-01-15 Beta 2";
    SWFUpload.QUEUE_ERROR = {
        QUEUE_LIMIT_EXCEEDED: -100,
        FILE_EXCEEDS_SIZE_LIMIT: -110,
        ZERO_BYTE_FILE: -120,
        INVALID_FILETYPE: -130
    };
    SWFUpload.UPLOAD_ERROR = {
        HTTP_ERROR: -200,
        MISSING_UPLOAD_URL: -210,
        IO_ERROR: -220,
        SECURITY_ERROR: -230,
        UPLOAD_LIMIT_EXCEEDED: -240,
        UPLOAD_FAILED: -250,
        SPECIFIED_FILE_ID_NOT_FOUND: -260,
        FILE_VALIDATION_FAILED: -270,
        FILE_CANCELLED: -280,
        UPLOAD_STOPPED: -290,
        RESIZE: -300
    };
    SWFUpload.FILE_STATUS = {
        QUEUED: -1,
        IN_PROGRESS: -2,
        ERROR: -3,
        COMPLETE: -4,
        CANCELLED: -5
    };
    SWFUpload.UPLOAD_TYPE = {
        NORMAL: -1,
        RESIZED: -2
    };

    SWFUpload.BUTTON_ACTION = {
        SELECT_FILE: -100,
        SELECT_FILES: -110,
        START_UPLOAD: -120,
        JAVASCRIPT: -130,	// DEPRECATED
        NONE: -130
    };
    SWFUpload.CURSOR = {
        ARROW: -1,
        HAND: -2
    };
    SWFUpload.WINDOW_MODE = {
        WINDOW: "transparent",
        TRANSPARENT: "transparent",
        OPAQUE: "opaque"
    };

    SWFUpload.RESIZE_ENCODING = {
        JPEG: -1,
        PNG: -2
    };

    // Private: takes a URL, determines if it is relative and converts to an absolute URL
    // using the current site. Only processes the URL if it can, otherwise returns the URL untouched
    SWFUpload.completeURL = function (url) {
        try {
            var path = "", indexSlash = -1;
            if (typeof(url) !== "string" || url.match(/^https?:\/\//i) || url.match(/^\//) || url === "") {
                return url;
            }

            indexSlash = window.location.pathname.lastIndexOf("/");
            if (indexSlash <= 0) {
                path = "/";
            } else {
                path = window.location.pathname.substr(0, indexSlash) + "/";
            }

            return path + url;
        } catch (ex) {
            return url;
        }
    };

    // Public: assign a new function to onload to use swfobject's domLoad functionality
    SWFUpload.onload = function () {
    };


    /* ******************** */
    /* Instance Members  */
    /* ******************** */

    // Private: initSettings ensures that all the
    // settings are set, getting a default value if one was not assigned.
    SWFUpload.prototype.initSettings = function (userSettings) {

        this.ensureDefault = function (settingName, defaultValue) {
            var setting = userSettings[settingName];
            if (setting != undefined) {
                this.settings[settingName] = setting;
            } else {
                this.settings[settingName] = defaultValue;
            }
        };

        // Upload backend settings
        this.ensureDefault("upload_url", "");
        this.ensureDefault("preserve_relative_urls", false);
        this.ensureDefault("file_post_name", userSettings.uploadFileName);
        this.ensureDefault("post_params", {});
        this.ensureDefault("use_query_string", false);
        this.ensureDefault("requeue_on_error", false);
        this.ensureDefault("http_success", []);
        this.ensureDefault("assume_success_timeout", 0);

        // File Settings
        this.ensureDefault("file_types", userSettings.file_types);
        this.ensureDefault("file_types_description", "All Files");
        this.ensureDefault("file_size_limit", 0);	// Default zero means "unlimited"
        this.ensureDefault("file_upload_limit", 0);
        this.ensureDefault("file_queue_limit", 0);

        // Flash Settings
        this.ensureDefault("flash_url", "swfupload.swf");
        this.ensureDefault("flash9_url", "swfupload_fp9.swf");
        this.ensureDefault("prevent_swf_caching", true);

        // Button Settings
        this.ensureDefault("button_image_url", "");
        this.ensureDefault("button_width", 1);
        this.ensureDefault("button_height", 1);
        this.ensureDefault("button_text", "");
        this.ensureDefault("button_text_style", "color: #000000; font-size: 16pt;");
        this.ensureDefault("button_text_top_padding", 0);
        this.ensureDefault("button_text_left_padding", 0);
        this.ensureDefault("button_action", SWFUpload.BUTTON_ACTION.SELECT_FILES);
        this.ensureDefault("button_disabled", false);
        this.ensureDefault("button_placeholder_id", "");
        this.ensureDefault("button_placeholder", null);
        this.ensureDefault("button_cursor", SWFUpload.CURSOR.ARROW);
        this.ensureDefault("button_window_mode", SWFUpload.WINDOW_MODE.WINDOW);

        // Debug Settings
        this.ensureDefault("debug", false);
        this.settings.debug_enabled = this.settings.debug;	// Here to maintain v2 API

        // Option Setting
        this.ensureDefault("fileSelectAutoUpload", userSettings.fileSelectAutoUpload);

        // Event Handlers
        this.settings.return_upload_start_handler = this.returnUploadStart;
        this.ensureDefault("swfupload_preload_handler", null);
        this.ensureDefault("swfupload_load_failed_handler", null);
        this.ensureDefault("swfupload_loaded_handler", null);
        this.ensureDefault("file_dialog_start_handler", null);
        this.ensureDefault("file_queued_handler", null);
        this.ensureDefault("file_queue_error_handler", null);
        this.ensureDefault("file_dialog_complete_handler", null);

        this.ensureDefault("upload_resize_start_handler", null);
        this.ensureDefault("upload_start_handler", null);
        this.ensureDefault("upload_progress_handler", null);
        this.ensureDefault("upload_error_handler", null);
        this.ensureDefault("upload_success_handler", null);
        this.ensureDefault("upload_complete_handler", null);

        this.ensureDefault("mouse_click_handler", null);
        this.ensureDefault("mouse_out_handler", null);
        this.ensureDefault("mouse_over_handler", null);

        this.ensureDefault("debug_handler", this.debugMessage);

        this.ensureDefault("custom_settings", {});

        // Other settings
        this.customSettings = this.settings.custom_settings;

        // Update the flash url if needed
        if (!!this.settings.prevent_swf_caching) {
            this.settings.flash_url = this.settings.flash_url + (this.settings.flash_url.indexOf("?") < 0 ? "?" : "&") + "preventswfcaching=" + new Date().getTime();
            this.settings.flash9_url = this.settings.flash9_url + (this.settings.flash9_url.indexOf("?") < 0 ? "?" : "&") + "preventswfcaching=" + new Date().getTime();
        }

        if (!this.settings.preserve_relative_urls) {
            this.settings.upload_url = SWFUpload.completeURL(this.settings.upload_url);
            this.settings.button_image_url = SWFUpload.completeURL(this.settings.button_image_url);
        }

        delete this.ensureDefault;
    };

    // Initializes the supported functionality based the Flash Player version, state, and event that occur during initialization
    SWFUpload.prototype.loadSupport = function () {
        this.support = {
            loading: swfobject.hasFlashPlayerVersion("9.0.28"),
            imageResize: swfobject.hasFlashPlayerVersion("10.0.0")
        };

    };

    // Private: loadFlash replaces the button_placeholder element with the flash movie.
    SWFUpload.prototype.loadFlash = function () {
        var targetElement, tempParent, wrapperType, flashHTML, els;

        if (!this.support.loading) {
            this.queueEvent("swfupload_load_failed_handler", ["Flash Player doesn't support SWFUpload"]);
            return;
        }

        // Make sure an element with the ID we are going to use doesn't already exist
        if (document.getElementById(this.movieName) !== null) {
            this.support.loading = false;
            this.queueEvent("swfupload_load_failed_handler", ["Element ID already in use"]);
            return;
        }

        // Get the element where we will be placing the flash movie
        targetElement = document.getElementById(this.settings.button_placeholder_id) || this.settings.button_placeholder;

        if (targetElement == undefined) {
            this.support.loading = false;
            this.queueEvent("swfupload_load_failed_handler", ["button place holder not found"]);
            return;
        }

        wrapperType = (targetElement.currentStyle && targetElement.currentStyle["display"] || window.getComputedStyle && document.defaultView.getComputedStyle(targetElement, null).getPropertyValue("display")) !== "block" ? "span" : "div";

        // Append the container and load the flash
        tempParent = document.createElement(wrapperType);

        flashHTML = this.getFlashHTML();

        try {
            tempParent.innerHTML = flashHTML;	// Using innerHTML is non-standard but the only sensible way to dynamically add Flash in IE (and maybe other browsers)
        } catch (ex) {
            this.support.loading = false;
            this.queueEvent("swfupload_load_failed_handler", ["Exception loading Flash HTML into placeholder"]);
            return;
        }

        // Try to get the movie element immediately
        els = tempParent.getElementsByTagName("object");
        if (!els || els.length > 1 || els.length === 0) {
            this.support.loading = false;
            this.queueEvent("swfupload_load_failed_handler", ["Unable to find movie after adding to DOM"]);
            return;
        } else if (els.length === 1) {
            this.movieElement = els[0];
        }

        targetElement.parentNode.replaceChild(tempParent.firstChild, targetElement);

        // Fix IE Flash/Form bug
        if (window[this.movieName] == undefined) {
            window[this.movieName] = this.getMovieElement();
        }
    };

    // Private: getFlashHTML generates the object tag needed to embed the flash in to the document
    SWFUpload.prototype.getFlashHTML = function (flashVersion) {
        // Flash Satay object syntax: http://www.alistapart.com/articles/flashsatay
        return ['<object id="', this.movieName, '" type="application/x-shockwave-flash" data="', (this.support.imageResize ? this.settings.flash_url : this.settings.flash9_url), '" width="', this.settings.button_width, '" height="', this.settings.button_height, '" class="swfupload">',
            '<param name="wmode" value="', this.settings.button_window_mode, '" />',
            '<param name="movie" value="', (this.support.imageResize ? this.settings.flash_url : this.settings.flash9_url), '" />',
            '<param name="quality" value="high" />',
            '<param name="allowScriptAccess" value="always" />',
            '<param name="flashvars" value="' + this.getFlashVars() + '" />',
            '</object>'].join("");
    };

    // Private: getFlashVars builds the parameter string that will be passed
    // to flash in the flashvars param.
    SWFUpload.prototype.getFlashVars = function () {
        // Build a string from the post param object
        var httpSuccessString, paramString;

        paramString = this.buildParamString();
        httpSuccessString = this.settings.http_success.join(",");

        // Build the parameter string
        return ["movieName=", encodeURIComponent(this.movieName),
            "&amp;uploadURL=", encodeURIComponent(this.settings.upload_url),
            "&amp;useQueryString=", encodeURIComponent(this.settings.use_query_string),
            "&amp;requeueOnError=", encodeURIComponent(this.settings.requeue_on_error),
            "&amp;httpSuccess=", encodeURIComponent(httpSuccessString),
            "&amp;assumeSuccessTimeout=", encodeURIComponent(this.settings.assume_success_timeout),
            "&amp;params=", encodeURIComponent(paramString),
            "&amp;filePostName=", encodeURIComponent(this.settings.file_post_name),
            "&amp;fileTypes=", encodeURIComponent(this.settings.file_types),
            "&amp;fileTypesDescription=", encodeURIComponent(this.settings.file_types_description),
            "&amp;fileSizeLimit=", encodeURIComponent(this.settings.file_size_limit),
            "&amp;fileUploadLimit=", encodeURIComponent(this.settings.file_upload_limit),
            "&amp;fileQueueLimit=", encodeURIComponent(this.settings.file_queue_limit),
            "&amp;debugEnabled=", encodeURIComponent(this.settings.debug_enabled),
            "&amp;buttonImageURL=", encodeURIComponent(this.settings.button_image_url),
            "&amp;buttonWidth=", encodeURIComponent(this.settings.button_width),
            "&amp;buttonHeight=", encodeURIComponent(this.settings.button_height),
            "&amp;buttonText=", encodeURIComponent(this.settings.button_text),
            "&amp;buttonTextTopPadding=", encodeURIComponent(this.settings.button_text_top_padding),
            "&amp;buttonTextLeftPadding=", encodeURIComponent(this.settings.button_text_left_padding),
            "&amp;buttonTextStyle=", encodeURIComponent(this.settings.button_text_style),
            "&amp;buttonAction=", encodeURIComponent(this.settings.button_action),
            "&amp;buttonDisabled=", encodeURIComponent(this.settings.button_disabled),
            "&amp;buttonCursor=", encodeURIComponent(this.settings.button_cursor)
        ].join("");
    };

    // Public: get retrieves the DOM reference to the Flash element added by SWFUpload
    // The element is cached after the first lookup
    SWFUpload.prototype.getMovieElement = function () {
        if (this.movieElement == undefined) {
            this.movieElement = document.getElementById(this.movieName);
        }

        if (this.movieElement === null) {
            throw "Could not find Flash element";
        }

        return this.movieElement;
    };

    // Private: buildParamString takes the name/value pairs in the post_params setting object
    // and joins them up in to a string formatted "name=value&amp;name=value"
    SWFUpload.prototype.buildParamString = function () {
        var name, postParams, paramStringPairs = [];

        postParams = this.settings.post_params;

        if (typeof(postParams) === "object") {
            for (name in postParams) {
                if (postParams.hasOwnProperty(name)) {
                    paramStringPairs.push(encodeURIComponent(name.toString()) + "=" + encodeURIComponent(postParams[name].toString()));
                }
            }
        }

        return paramStringPairs.join("&amp;");
    };

    // Public: Used to remove a SWFUpload instance from the page. This method strives to remove
    // all references to the SWF, and other objects so memory is properly freed.
    // Returns true if everything was destroyed. Returns a false if a failure occurs leaving SWFUpload in an inconsistant state.
    // Credits: Major improvements provided by steffen
    SWFUpload.prototype.destroy = function () {
        var movieElement;

        try {
            // Make sure Flash is done before we try to remove it
            this.cancelUpload(null, false);

            movieElement = this.cleanUp();

            // Remove the SWFUpload DOM nodes
            if (movieElement) {
                // Remove the Movie Element from the page
                try {
                    movieElement.parentNode.removeChild(movieElement);
                } catch (ex) {
                }
            }

            // Remove IE form fix reference
            window[this.movieName] = null;

            // Destroy other references
            SWFUpload.instances[this.movieName] = null;
            delete SWFUpload.instances[this.movieName];

            this.movieElement = null;
            this.settings = null;
            this.customSettings = null;
            this.eventQueue = null;
            this.movieName = null;


            return true;
        } catch (ex2) {
            return false;
        }
    };


    // Public: displayDebugInfo prints out settings and configuration
    // information about this SWFUpload instance.
    // This function (and any references to it) can be deleted when placing
    // SWFUpload in production.
    SWFUpload.prototype.displayDebugInfo = function () {
        this.debug(
            [
                "---SWFUpload Instance Info---\n",
                "Version: ", SWFUpload.version, "\n",
                "Movie Name: ", this.movieName, "\n",
                "Settings:\n",
                "\t", "upload_url:               ", this.settings.upload_url, "\n",
                "\t", "flash_url:                ", this.settings.flash_url, "\n",
                "\t", "flash9_url:                ", this.settings.flash9_url, "\n",
                "\t", "use_query_string:         ", this.settings.use_query_string.toString(), "\n",
                "\t", "requeue_on_error:         ", this.settings.requeue_on_error.toString(), "\n",
                "\t", "http_success:             ", this.settings.http_success.join(", "), "\n",
                "\t", "assume_success_timeout:   ", this.settings.assume_success_timeout, "\n",
                "\t", "file_post_name:           ", this.settings.file_post_name, "\n",
                "\t", "post_params:              ", this.settings.post_params.toString(), "\n",
                "\t", "file_types:               ", this.settings.file_types, "\n",
                "\t", "file_types_description:   ", this.settings.file_types_description, "\n",
                "\t", "file_size_limit:          ", this.settings.file_size_limit, "\n",
                "\t", "file_upload_limit:        ", this.settings.file_upload_limit, "\n",
                "\t", "file_queue_limit:         ", this.settings.file_queue_limit, "\n",
                "\t", "debug:                    ", this.settings.debug.toString(), "\n",

                "\t", "prevent_swf_caching:      ", this.settings.prevent_swf_caching.toString(), "\n",

                "\t", "button_placeholder_id:    ", this.settings.button_placeholder_id.toString(), "\n",
                "\t", "button_placeholder:       ", (this.settings.button_placeholder ? "Set" : "Not Set"), "\n",
                "\t", "button_image_url:         ", this.settings.button_image_url.toString(), "\n",
                "\t", "button_width:             ", this.settings.button_width.toString(), "\n",
                "\t", "button_height:            ", this.settings.button_height.toString(), "\n",
                "\t", "button_text:              ", this.settings.button_text.toString(), "\n",
                "\t", "button_text_style:        ", this.settings.button_text_style.toString(), "\n",
                "\t", "button_text_top_padding:  ", this.settings.button_text_top_padding.toString(), "\n",
                "\t", "button_text_left_padding: ", this.settings.button_text_left_padding.toString(), "\n",
                "\t", "button_action:            ", this.settings.button_action.toString(), "\n",
                "\t", "button_cursor:            ", this.settings.button_cursor.toString(), "\n",
                "\t", "button_disabled:          ", this.settings.button_disabled.toString(), "\n",

                "\t", "custom_settings:          ", this.settings.custom_settings.toString(), "\n",
                "Event Handlers:\n",
                "\t", "swfupload_preload_handler assigned:  ", (typeof this.settings.swfupload_preload_handler === "function").toString(), "\n",
                "\t", "swfupload_load_failed_handler assigned:  ", (typeof this.settings.swfupload_load_failed_handler === "function").toString(), "\n",
                "\t", "swfupload_loaded_handler assigned:  ", (typeof this.settings.swfupload_loaded_handler === "function").toString(), "\n",
                "\t", "mouse_click_handler assigned:       ", (typeof this.settings.mouse_click_handler === "function").toString(), "\n",
                "\t", "mouse_over_handler assigned:        ", (typeof this.settings.mouse_over_handler === "function").toString(), "\n",
                "\t", "mouse_out_handler assigned:         ", (typeof this.settings.mouse_out_handler === "function").toString(), "\n",
                "\t", "file_dialog_start_handler assigned: ", (typeof this.settings.file_dialog_start_handler === "function").toString(), "\n",
                "\t", "file_queued_handler assigned:       ", (typeof this.settings.file_queued_handler === "function").toString(), "\n",
                "\t", "file_queue_error_handler assigned:  ", (typeof this.settings.file_queue_error_handler === "function").toString(), "\n",
                "\t", "upload_resize_start_handler assigned:      ", (typeof this.settings.upload_resize_start_handler === "function").toString(), "\n",
                "\t", "upload_start_handler assigned:      ", (typeof this.settings.upload_start_handler === "function").toString(), "\n",
                "\t", "upload_progress_handler assigned:   ", (typeof this.settings.upload_progress_handler === "function").toString(), "\n",
                "\t", "upload_error_handler assigned:      ", (typeof this.settings.upload_error_handler === "function").toString(), "\n",
                "\t", "upload_success_handler assigned:    ", (typeof this.settings.upload_success_handler === "function").toString(), "\n",
                "\t", "upload_complete_handler assigned:   ", (typeof this.settings.upload_complete_handler === "function").toString(), "\n",
                "\t", "debug_handler assigned:             ", (typeof this.settings.debug_handler === "function").toString(), "\n",

                "Support:\n",
                "\t", "Load:                     ", (this.support.loading ? "Yes" : "No"), "\n",
                "\t", "Image Resize:             ", (this.support.imageResize ? "Yes" : "No"), "\n"

            ].join("")
        );
    };

    /* Note: addSetting and getSetting are no longer used by SWFUpload but are included
     the maintain v2 API compatibility
     */
    // Public: (Deprecated) addSetting adds a setting value. If the value given is undefined or null then the default_value is used.
    SWFUpload.prototype.addSetting = function (name, value, default_value) {
        if (value == undefined) {
            return (this.settings[name] = default_value);
        } else {
            return (this.settings[name] = value);
        }
    };

    // Public: (Deprecated) getSetting gets a setting. Returns an empty string if the setting was not found.
    SWFUpload.prototype.getSetting = function (name) {
        if (this.settings[name] != undefined) {
            return this.settings[name];
        }

        return "";
    };


    // Private: callFlash handles function calls made to the Flash element.
    // Calls are made with a setTimeout for some functions to work around
    // bugs in the ExternalInterface library.
    SWFUpload.prototype.callFlash = function (functionName, argumentArray) {
        var movieElement, returnValue, returnString;

        argumentArray = argumentArray || [];
        movieElement = this.getMovieElement();

        // Flash's method if calling ExternalInterface methods (code adapted from MooTools).
        try {
            if (movieElement != undefined) {
                returnString = movieElement.CallFunction('<invoke name="' + functionName + '" returntype="javascript">' + __flash__argumentsToXML(argumentArray, 0) + '</invoke>');
                returnValue = eval(returnString);
            } else {
                this.debug("Can't call flash because the movie wasn't found.");
            }
        } catch (ex) {
            this.debug("Exception calling flash function '" + functionName + "': " + ex.message);
        }

        // Unescape file post param values
        if (returnValue != undefined && typeof returnValue.post === "object") {
            returnValue = this.unescapeFilePostParams(returnValue);
        }

        return returnValue;
    };

    /* *****************************
     -- Flash control methods --
     Your UI should use these
     to operate SWFUpload
     ***************************** */

    // WARNING: this function does not work in Flash Player 10
    // Public: selectFile causes a File Selection Dialog window to appear.  This
    // dialog only allows 1 file to be selected.
    SWFUpload.prototype.selectFile = function () {
        this.callFlash("SelectFile");
    };

    // WARNING: this function does not work in Flash Player 10
    // Public: selectFiles causes a File Selection Dialog window to appear/ This
    // dialog allows the user to select any number of files
    // Flash Bug Warning: Flash limits the number of selectable files based on the combined length of the file names.
    // If the selection name length is too long the dialog will fail in an unpredictable manner.  There is no work-around
    // for this bug.
    SWFUpload.prototype.selectFiles = function () {
        this.callFlash("SelectFiles");
    };


    // Public: startUpload starts uploading the first file in the queue unless
    // the optional parameter 'fileID' specifies the ID
    SWFUpload.prototype.startUpload = function (fileID) {
        //trace(this.settings.fileSelectAutoUpload);
        //trace(this.allowUpload);
        if (this.settings.fileSelectAutoUpload || this.settings.allowUpload == true) {
            this.callFlash("StartUpload", [fileID]);
        }
    };

    // Public: startUpload starts uploading the first file in the queue unless
    // the optional parameter 'fileID' specifies the ID
    SWFUpload.prototype.startResizedUpload = function (fileID, width, height, encoding, quality, allowEnlarging) {
        this.callFlash("StartUpload", [fileID, {"width": width, "height": height, "encoding": encoding, "quality": quality, "allowEnlarging": allowEnlarging}]);
    };

    // Public: cancelUpload cancels any queued file.  The fileID parameter may be the file ID or index.
    // If you do not specify a fileID the current uploading file or first file in the queue is cancelled.
    // If you do not want the uploadError event to trigger you can specify false for the triggerErrorEvent parameter.
    SWFUpload.prototype.cancelUpload = function (fileID, triggerErrorEvent) {
        if (triggerErrorEvent !== false) {
            triggerErrorEvent = true;
        }
        this.callFlash("CancelUpload", [fileID, triggerErrorEvent]);
    };

    // Public: stopUpload stops the current upload and requeues the file at the beginning of the queue.
    // If nothing is currently uploading then nothing happens.
    SWFUpload.prototype.stopUpload = function () {
        this.callFlash("StopUpload");
    };


    // Public: requeueUpload requeues any file. If the file is requeued or already queued true is returned.
    // If the file is not found or is currently uploading false is returned.  Requeuing a file bypasses the
    // file size, queue size, upload limit and other queue checks.  Certain files can't be requeued (e.g, invalid or zero bytes files).
    SWFUpload.prototype.requeueUpload = function (indexOrFileID) {
        return this.callFlash("RequeueUpload", [indexOrFileID]);
    };


    /* ************************
     * Settings methods
     *   These methods change the SWFUpload settings.
     *   SWFUpload settings should not be changed directly on the settings object
     *   since many of the settings need to be passed to Flash in order to take
     *   effect.
     * *********************** */

    // Public: getStats gets the file statistics object.
    SWFUpload.prototype.getStats = function () {
        return this.callFlash("GetStats");
    };

    // Public: setStats changes the SWFUpload statistics.  You shouldn't need to
    // change the statistics but you can.  Changing the statistics does not
    // affect SWFUpload accept for the successful_uploads count which is used
    // by the upload_limit setting to determine how many files the user may upload.
    SWFUpload.prototype.setStats = function (statsObject) {
        this.callFlash("SetStats", [statsObject]);
    };

    // Public: getFile retrieves a File object by ID or Index.  If the file is
    // not found then 'null' is returned.
    SWFUpload.prototype.getFile = function (fileID) {
        if (typeof(fileID) === "number") {
            return this.callFlash("GetFileByIndex", [fileID]);
        } else {
            return this.callFlash("GetFile", [fileID]);
        }
    };

    // Public: getFileFromQueue retrieves a File object by ID or Index.  If the file is
    // not found then 'null' is returned.
    SWFUpload.prototype.getQueueFile = function (fileID) {
        if (typeof(fileID) === "number") {
            return this.callFlash("GetFileByQueueIndex", [fileID]);
        } else {
            return this.callFlash("GetFile", [fileID]);
        }
    };


    // Public: addFileParam sets a name/value pair that will be posted with the
    // file specified by the Files ID.  If the name already exists then the
    // exiting value will be overwritten.
    SWFUpload.prototype.addFileParam = function (fileID, name, value) {
        return this.callFlash("AddFileParam", [fileID, name, value]);
    };

    // Public: removeFileParam removes a previously set (by addFileParam) name/value
    // pair from the specified file.
    SWFUpload.prototype.removeFileParam = function (fileID, name) {
        this.callFlash("RemoveFileParam", [fileID, name]);
    };

    // Public: setUploadUrl changes the upload_url setting.
    SWFUpload.prototype.setUploadURL = function (url) {
        this.settings.upload_url = url.toString();
        this.callFlash("SetUploadURL", [url]);
    };

    // Public: setPostParams changes the post_params setting
    SWFUpload.prototype.setPostParams = function (paramsObject) {
        this.settings.post_params = paramsObject;
        this.callFlash("SetPostParams", [paramsObject]);
    };

    // Public: addPostParam adds post name/value pair.  Each name can have only one value.
    SWFUpload.prototype.addPostParam = function (name, value) {
        this.settings.post_params[name] = value;
        this.callFlash("SetPostParams", [this.settings.post_params]);
    };

    // Public: removePostParam deletes post name/value pair.
    SWFUpload.prototype.removePostParam = function (name) {
        delete this.settings.post_params[name];
        this.callFlash("SetPostParams", [this.settings.post_params]);
    };

    // Public: setFileTypes changes the file_types setting and the file_types_description setting
    SWFUpload.prototype.setFileTypes = function (types, description) {
        this.settings.file_types = types;
        this.settings.file_types_description = description;
        this.callFlash("SetFileTypes", [types, description]);
    };

    // Public: setFileSizeLimit changes the file_size_limit setting
    SWFUpload.prototype.setFileSizeLimit = function (fileSizeLimit) {
        this.settings.file_size_limit = fileSizeLimit;
        this.callFlash("SetFileSizeLimit", [fileSizeLimit]);
    };

    // Public: setFileUploadLimit changes the file_upload_limit setting
    SWFUpload.prototype.setFileUploadLimit = function (fileUploadLimit) {
        this.settings.file_upload_limit = fileUploadLimit;
        this.callFlash("SetFileUploadLimit", [fileUploadLimit]);
    };

    // Public: setFileQueueLimit changes the file_queue_limit setting
    SWFUpload.prototype.setFileQueueLimit = function (fileQueueLimit) {
        this.settings.file_queue_limit = fileQueueLimit;
        this.callFlash("SetFileQueueLimit", [fileQueueLimit]);
    };

    // Public: setFilePostName changes the file_post_name setting
    SWFUpload.prototype.setFilePostName = function (filePostName) {
        this.settings.file_post_name = filePostName;
        this.callFlash("SetFilePostName", [filePostName]);
    };

    // Public: setUseQueryString changes the use_query_string setting
    SWFUpload.prototype.setUseQueryString = function (useQueryString) {
        this.settings.use_query_string = useQueryString;
        this.callFlash("SetUseQueryString", [useQueryString]);
    };

    // Public: setRequeueOnError changes the requeue_on_error setting
    SWFUpload.prototype.setRequeueOnError = function (requeueOnError) {
        this.settings.requeue_on_error = requeueOnError;
        this.callFlash("SetRequeueOnError", [requeueOnError]);
    };

    // Public: setHTTPSuccess changes the http_success setting
    SWFUpload.prototype.setHTTPSuccess = function (http_status_codes) {
        if (typeof http_status_codes === "string") {
            http_status_codes = http_status_codes.replace(" ", "").split(",");
        }

        this.settings.http_success = http_status_codes;
        this.callFlash("SetHTTPSuccess", [http_status_codes]);
    };

    // Public: setHTTPSuccess changes the http_success setting
    SWFUpload.prototype.setAssumeSuccessTimeout = function (timeout_seconds) {
        this.settings.assume_success_timeout = timeout_seconds;
        this.callFlash("SetAssumeSuccessTimeout", [timeout_seconds]);
    };

    // Public: setDebugEnabled changes the debug_enabled setting
    SWFUpload.prototype.setDebugEnabled = function (debugEnabled) {
        this.settings.debug_enabled = debugEnabled;
        this.callFlash("SetDebugEnabled", [debugEnabled]);
    };

    // Public: setButtonImageURL loads a button image sprite
    SWFUpload.prototype.setButtonImageURL = function (buttonImageURL) {
        if (buttonImageURL == undefined) {
            buttonImageURL = "";
        }

        this.settings.button_image_url = buttonImageURL;
        this.callFlash("SetButtonImageURL", [buttonImageURL]);
    };

    // Public: setButtonDimensions resizes the Flash Movie and button
    SWFUpload.prototype.setButtonDimensions = function (width, height) {
        this.settings.button_width = width;
        this.settings.button_height = height;

        var movie = this.getMovieElement();
        if (movie != undefined) {
            movie.style.width = width + "px";
            movie.style.height = height + "px";
        }

        this.callFlash("SetButtonDimensions", [width, height]);
    };
    // Public: setButtonText Changes the text overlaid on the button
    SWFUpload.prototype.setButtonText = function (html) {
        this.settings.button_text = html;
        this.callFlash("SetButtonText", [html]);
    };
    // Public: setButtonTextPadding changes the top and left padding of the text overlay
    SWFUpload.prototype.setButtonTextPadding = function (left, top) {
        this.settings.button_text_top_padding = top;
        this.settings.button_text_left_padding = left;
        this.callFlash("SetButtonTextPadding", [left, top]);
    };

    // Public: setButtonTextStyle changes the CSS used to style the HTML/Text overlaid on the button
    SWFUpload.prototype.setButtonTextStyle = function (css) {
        this.settings.button_text_style = css;
        this.callFlash("SetButtonTextStyle", [css]);
    };
    // Public: setButtonDisabled disables/enables the button
    SWFUpload.prototype.setButtonDisabled = function (isDisabled) {
        this.settings.button_disabled = isDisabled;
        this.callFlash("SetButtonDisabled", [isDisabled]);
    };
    // Public: setButtonAction sets the action that occurs when the button is clicked
    SWFUpload.prototype.setButtonAction = function (buttonAction) {
        this.settings.button_action = buttonAction;
        this.callFlash("SetButtonAction", [buttonAction]);
    };

    // Public: setButtonCursor changes the mouse cursor displayed when hovering over the button
    SWFUpload.prototype.setButtonCursor = function (cursor) {
        this.settings.button_cursor = cursor;
        this.callFlash("SetButtonCursor", [cursor]);
    };

    /* *******************************
     Flash Event Interfaces
     These functions are used by Flash to trigger the various
     events.

     All these functions a Private.

     Because the ExternalInterface library is buggy the event calls
     are added to a queue and the queue then executed by a setTimeout.
     This ensures that events are executed in a determinate order and that
     the ExternalInterface bugs are avoided.
     ******************************* */

    SWFUpload.prototype.queueEvent = function (handlerName, argumentArray) {
        // Warning: Don't call this.debug inside here or you'll create an infinite loop
        var self = this;

        if (argumentArray == undefined) {
            argumentArray = [];
        } else if (!(argumentArray instanceof Array)) {
            argumentArray = [argumentArray];
        }

        if (typeof this.settings[handlerName] === "function") {
            // Queue the event
            this.eventQueue.push(function () {
                this.settings[handlerName].apply(this, argumentArray);
            });

            // Execute the next queued event
            setTimeout(function () {
                self.executeNextEvent();
            }, 0);

        } else if (this.settings[handlerName] !== null) {
            throw "Event handler " + handlerName + " is unknown or is not a function";
        }
    };

    // Private: Causes the next event in the queue to be executed.  Since events are queued using a setTimeout
    // we must queue them in order to garentee that they are executed in order.
    SWFUpload.prototype.executeNextEvent = function () {
        // Warning: Don't call this.debug inside here or you'll create an infinite loop

        var f = this.eventQueue ? this.eventQueue.shift() : null;
        if (typeof(f) === "function") {
            f.apply(this);
        }

    };

    // Private: unescapeFileParams is part of a workaround for a flash bug where objects passed through ExternalInterface cannot have
    // properties that contain characters that are not valid for JavaScript identifiers. To work around this
    // the Flash Component escapes the parameter names and we must unescape again before passing them along.
    SWFUpload.prototype.unescapeFilePostParams = function (file) {
        var reg = /[$]([0-9a-f]{4})/i, unescapedPost = {}, uk, k, match;

        if (file != undefined) {
            for (k in file.post) {
                if (file.post.hasOwnProperty(k)) {
                    uk = k;
                    while ((match = reg.exec(uk)) !== null) {
                        uk = uk.replace(match[0], String.fromCharCode(parseInt("0x" + match[1], 16)));
                    }
                    unescapedPost[uk] = file.post[k];
                }
            }

            file.post = unescapedPost;
        }

        return file;
    };

    // Private: This event is called by SWFUpload Init after we've determined what the user's Flash Player supports.
    // Use the swfupload_preload_handler event setting to execute custom code when SWFUpload has loaded.
    // Return false to prevent SWFUpload from loading and allow your script to do something else if your required feature is
    // not supported
    SWFUpload.prototype.swfuploadPreload = function () {
        var returnValue;
        if (typeof this.settings.swfupload_preload_handler === "function") {
            returnValue = this.settings.swfupload_preload_handler.call(this);
        } else if (this.settings.swfupload_preload_handler != undefined) {
            throw "upload_start_handler must be a function";
        }

        // Convert undefined to true so if nothing is returned from the upload_start_handler it is
        // interpretted as 'true'.
        if (returnValue === undefined) {
            returnValue = true;
        }

        return !!returnValue;
    }

    // Private: This event is called by Flash when it has finished loading. Don't modify this.
    // Use the swfupload_loaded_handler event setting to execute custom code when SWFUpload has loaded.
    SWFUpload.prototype.flashReady = function () {
        // Check that the movie element is loaded correctly with its ExternalInterface methods defined
        var movieElement = this.cleanUp();

        if (!movieElement) {
            this.debug("Flash called back ready but the flash movie can't be found.");
            return;
        }

        this.queueEvent("swfupload_loaded_handler");
    };

    // Private: removes Flash added fuctions to the DOM node to prevent memory leaks in IE.
    // This function is called by Flash each time the ExternalInterface functions are created.
    SWFUpload.prototype.cleanUp = function () {
        var key, movieElement = this.getMovieElement();

        // Pro-actively unhook all the Flash functions
        try {
            if (movieElement && typeof(movieElement.CallFunction) === "unknown") { // We only want to do this in IE
                this.debug("Removing Flash functions hooks (this should only run in IE and should prevent memory leaks)");
                for (key in movieElement) {
                    try {
                        if (typeof(movieElement[key]) === "function") {
                            movieElement[key] = null;
                        }
                    } catch (ex) {
                    }
                }
            }
        } catch (ex1) {

        }

        // Fix Flashes own cleanup code so if the SWF Movie was removed from the page
        // it doesn't display errors.
        window["__flash__removeCallback"] = function (instance, name) {
            try {
                if (instance) {
                    instance[name] = null;
                }
            } catch (flashEx) {

            }
        };

        return movieElement;
    };

    /* When the button_action is set to None this event gets fired and executes the mouse_click_handler */
    SWFUpload.prototype.mouseClick = function () {
        this.queueEvent("mouse_click_handler");
    };
    SWFUpload.prototype.mouseOver = function () {
        this.queueEvent("mouse_over_handler");
    };
    SWFUpload.prototype.mouseOut = function () {
        this.queueEvent("mouse_out_handler");
    };

    /* This is a chance to do something before the browse window opens */
    SWFUpload.prototype.fileDialogStart = function () {
        this.queueEvent("file_dialog_start_handler");
    };


    /* Called when a file is successfully added to the queue. */
    SWFUpload.prototype.fileQueued = function (file) {
        file = this.unescapeFilePostParams(file);
        this.queueEvent("file_queued_handler", file);
    };


    /* Handle errors that occur when an attempt to queue a file fails. */
    SWFUpload.prototype.fileQueueError = function (file, errorCode, message) {
        file = this.unescapeFilePostParams(file);
        this.queueEvent("file_queue_error_handler", [file, errorCode, message]);
    };

    /* Called after the file dialog has closed and the selected files have been queued.
     You could call startUpload here if you want the queued files to begin uploading immediately. */
    SWFUpload.prototype.fileDialogComplete = function (numFilesSelected, numFilesQueued, numFilesInQueue) {
        this.queueEvent("file_dialog_complete_handler", [numFilesSelected, numFilesQueued, numFilesInQueue]);
    };

    SWFUpload.prototype.uploadResizeStart = function (file, resizeSettings) {
        file = this.unescapeFilePostParams(file);
        this.queueEvent("upload_resize_start_handler", [file, resizeSettings.width, resizeSettings.height, resizeSettings.encoding, resizeSettings.quality]);
    };

    SWFUpload.prototype.uploadStart = function (file) {
        file = this.unescapeFilePostParams(file);
        this.queueEvent("return_upload_start_handler", file);
    };

    SWFUpload.prototype.returnUploadStart = function (file) {
        var returnValue;
        if (typeof this.settings.upload_start_handler === "function") {
            file = this.unescapeFilePostParams(file);
            returnValue = this.settings.upload_start_handler.call(this, file);
        } else if (this.settings.upload_start_handler != undefined) {
            throw "upload_start_handler must be a function";
        }

        // Convert undefined to true so if nothing is returned from the upload_start_handler it is
        // interpretted as 'true'.
        if (returnValue === undefined) {
            returnValue = true;
        }

        returnValue = !!returnValue;

        this.callFlash("ReturnUploadStart", [returnValue]);
    };


    SWFUpload.prototype.uploadProgress = function (file, bytesComplete, bytesTotal) {
        file = this.unescapeFilePostParams(file);
        this.queueEvent("upload_progress_handler", [file, bytesComplete, bytesTotal]);
    };

    SWFUpload.prototype.uploadError = function (file, errorCode, message) {
        file = this.unescapeFilePostParams(file);
        this.queueEvent("upload_error_handler", [file, errorCode, message]);
    };

    SWFUpload.prototype.uploadSuccess = function (file, serverData, responseReceived) {
        file = this.unescapeFilePostParams(file);
        this.queueEvent("upload_success_handler", [file, serverData, responseReceived]);
    };

    SWFUpload.prototype.uploadComplete = function (file) {
        file = this.unescapeFilePostParams(file);
        this.queueEvent("upload_complete_handler", file);
    };

    /* Called by SWFUpload JavaScript and Flash functions when debug is enabled. By default it writes messages to the
     internal debug console.  You can override this event and have messages written where you want. */
    SWFUpload.prototype.debug = function (message) {
        this.queueEvent("debug_handler", message);
    };


    /* **********************************
     Debug Console
     The debug console is a self contained, in page location
     for debug message to be sent.  The Debug Console adds
     itself to the body if necessary.

     The console is automatically scrolled as messages appear.

     If you are using your own debug handler or when you deploy to production and
     have debug disabled you can remove these functions to reduce the file size
     and complexity.
     ********************************** */

    // Private: debugMessage is the default debug_handler.  If you want to print debug messages
    // call the debug() function.  When overriding the function your own function should
    // check to see if the debug setting is true before outputting debug information.
    SWFUpload.prototype.debugMessage = function (message) {
        var exceptionMessage, exceptionValues, key;

        if (this.settings.debug) {
            exceptionValues = [];

            // Check for an exception object and print it nicely
            if (typeof message === "object" && typeof message.name === "string" && typeof message.message === "string") {
                for (key in message) {
                    if (message.hasOwnProperty(key)) {
                        exceptionValues.push(key + ": " + message[key]);
                    }
                }
                exceptionMessage = exceptionValues.join("\n") || "";
                exceptionValues = exceptionMessage.split("\n");
                exceptionMessage = "EXCEPTION: " + exceptionValues.join("\nEXCEPTION: ");
                SWFUpload.Console.writeLine(exceptionMessage);
            } else {
                SWFUpload.Console.writeLine(message);
            }
        }
    };

    SWFUpload.Console = {};
    SWFUpload.Console.writeLine = function (message) {
        var console, documentForm;

        try {
            console = document.getElementById("SWFUpload_Console");

            if (!console) {
                documentForm = document.createElement("form");
                document.getElementsByTagName("body")[0].appendChild(documentForm);

                console = document.createElement("textarea");
                console.id = "SWFUpload_Console";
                console.style.fontFamily = "monospace";
                console.setAttribute("wrap", "off");
                console.wrap = "off";
                console.style.overflow = "auto";
                console.style.width = "700px";
                console.style.height = "350px";
                console.style.margin = "5px";
                documentForm.appendChild(console);
            }

            console.value += message + "\n";

            console.scrollTop = console.scrollHeight - console.clientHeight;
        } catch (ex) {
            alert("Exception: " + ex.name + " Message: " + ex.message);
        }
    };


    /*	SWFObject v2.2 <http://code.google.com/p/swfobject/>
     is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
     */
    swfobject = function () {
        var D = "undefined", r = "object", S = "Shockwave Flash", W = "ShockwaveFlash.ShockwaveFlash", q = "application/x-shockwave-flash", R = "SWFObjectExprInst", x = "onreadystatechange", O = window, j = document, t = navigator, T = false, U = [h], o = [], N = [], I = [], l, Q, E, B, J = false, a = false, n, G, m = true, M = function () {
            var aa = typeof j.getElementById != D && typeof j.getElementsByTagName != D && typeof j.createElement != D, ah = t.userAgent.toLowerCase(), Y = t.platform.toLowerCase(), ae = Y ? /win/.test(Y) : /win/.test(ah), ac = Y ? /mac/.test(Y) : /mac/.test(ah), af = /webkit/.test(ah) ? parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false, X = !+"\v1", ag = [0, 0, 0], ab = null;
            if (typeof t.plugins != D && typeof t.plugins[S] == r) {
                ab = t.plugins[S].description;
                if (ab && !(typeof t.mimeTypes != D && t.mimeTypes[q] && !t.mimeTypes[q].enabledPlugin)) {
                    T = true;
                    X = false;
                    ab = ab.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                    ag[0] = parseInt(ab.replace(/^(.*)\..*$/, "$1"), 10);
                    ag[1] = parseInt(ab.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                    ag[2] = /[a-zA-Z]/.test(ab) ? parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
                }
            } else {
                if (typeof O.ActiveXObject != D) {
                    try {
                        var ad = new ActiveXObject(W);
                        if (ad) {
                            ab = ad.GetVariable("$version");
                            if (ab) {
                                X = true;
                                ab = ab.split(" ")[1].split(",");
                                ag = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                            }
                        }
                    } catch (Z) {
                    }
                }
            }
            return {w3: aa, pv: ag, wk: af, ie: X, win: ae, mac: ac}
        }(), k = function () {
            if (!M.w3) {
                return
            }
            if ((typeof j.readyState != D && j.readyState == "complete") || (typeof j.readyState == D && (j.getElementsByTagName("body")[0] || j.body))) {
                f()
            }
            if (!J) {
                if (typeof j.addEventListener != D) {
                    j.addEventListener("DOMContentLoaded", f, false)
                }
                if (M.ie && M.win) {
                    j.attachEvent(x, function () {
                        if (j.readyState == "complete") {
                            j.detachEvent(x, arguments.callee);
                            f()
                        }
                    });
                    if (O == top) {
                        (function () {
                            if (J) {
                                return
                            }
                            try {
                                j.documentElement.doScroll("left")
                            } catch (X) {
                                setTimeout(arguments.callee, 0);
                                return
                            }
                            f()
                        })()
                    }
                }
                if (M.wk) {
                    (function () {
                        if (J) {
                            return
                        }
                        if (!/loaded|complete/.test(j.readyState)) {
                            setTimeout(arguments.callee, 0);
                            return
                        }
                        f()
                    })()
                }
                s(f)
            }
        }();

        function f() {
            if (J) {
                return
            }
            try {
                var Z = j.getElementsByTagName("body")[0].appendChild(C("span"));
                Z.parentNode.removeChild(Z)
            } catch (aa) {
                return
            }
            J = true;
            var X = U.length;
            for (var Y = 0; Y < X; Y++) {
                U[Y]()
            }
        }

        function K(X) {
            if (J) {
                X()
            } else {
                U[U.length] = X
            }
        }

        function s(Y) {
            if (typeof O.addEventListener != D) {
                O.addEventListener("load", Y, false)
            } else {
                if (typeof j.addEventListener != D) {
                    j.addEventListener("load", Y, false)
                } else {
                    if (typeof O.attachEvent != D) {
                        i(O, "onload", Y)
                    } else {
                        if (typeof O.onload == "function") {
                            var X = O.onload;
                            O.onload = function () {
                                X();
                                Y()
                            }
                        } else {
                            O.onload = Y
                        }
                    }
                }
            }
        }

        function h() {
            if (T) {
                V()
            } else {
                H()
            }
        }

        function V() {
            var X = j.getElementsByTagName("body")[0];
            var aa = C(r);
            aa.setAttribute("type", q);
            var Z = X.appendChild(aa);
            if (Z) {
                var Y = 0;
                (function () {
                    if (typeof Z.GetVariable != D) {
                        var ab = Z.GetVariable("$version");
                        if (ab) {
                            ab = ab.split(" ")[1].split(",");
                            M.pv = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                        }
                    } else {
                        if (Y < 10) {
                            Y++;
                            setTimeout(arguments.callee, 10);
                            return
                        }
                    }
                    X.removeChild(aa);
                    Z = null;
                    H()
                })()
            } else {
                H()
            }
        }

        function H() {
            var ag = o.length;
            if (ag > 0) {
                for (var af = 0; af < ag; af++) {
                    var Y = o[af].id;
                    var ab = o[af].callbackFn;
                    var aa = {success: false, id: Y};
                    if (M.pv[0] > 0) {
                        var ae = c(Y);
                        if (ae) {
                            if (F(o[af].swfVersion) && !(M.wk && M.wk < 312)) {
                                w(Y, true);
                                if (ab) {
                                    aa.success = true;
                                    aa.ref = z(Y);
                                    ab(aa)
                                }
                            } else {
                                if (o[af].expressInstall && A()) {
                                    var ai = {};
                                    ai.data = o[af].expressInstall;
                                    ai.width = ae.getAttribute("width") || "0";
                                    ai.height = ae.getAttribute("height") || "0";
                                    if (ae.getAttribute("class")) {
                                        ai.styleclass = ae.getAttribute("class")
                                    }
                                    if (ae.getAttribute("align")) {
                                        ai.align = ae.getAttribute("align")
                                    }
                                    var ah = {};
                                    var X = ae.getElementsByTagName("param");
                                    var ac = X.length;
                                    for (var ad = 0; ad < ac; ad++) {
                                        if (X[ad].getAttribute("name").toLowerCase() != "movie") {
                                            ah[X[ad].getAttribute("name")] = X[ad].getAttribute("value")
                                        }
                                    }
                                    P(ai, ah, Y, ab)
                                } else {
                                    p(ae);
                                    if (ab) {
                                        ab(aa)
                                    }
                                }
                            }
                        }
                    } else {
                        w(Y, true);
                        if (ab) {
                            var Z = z(Y);
                            if (Z && typeof Z.SetVariable != D) {
                                aa.success = true;
                                aa.ref = Z
                            }
                            ab(aa)
                        }
                    }
                }
            }
        }

        function z(aa) {
            var X = null;
            var Y = c(aa);
            if (Y && Y.nodeName == "OBJECT") {
                if (typeof Y.SetVariable != D) {
                    X = Y
                } else {
                    var Z = Y.getElementsByTagName(r)[0];
                    if (Z) {
                        X = Z
                    }
                }
            }
            return X
        }

        function A() {
            return !a && F("6.0.65") && (M.win || M.mac) && !(M.wk && M.wk < 312)
        }

        function P(aa, ab, X, Z) {
            a = true;
            E = Z || null;
            B = {success: false, id: X};
            var ae = c(X);
            if (ae) {
                if (ae.nodeName == "OBJECT") {
                    l = g(ae);
                    Q = null
                } else {
                    l = ae;
                    Q = X
                }
                aa.id = R;
                if (typeof aa.width == D || (!/%$/.test(aa.width) && parseInt(aa.width, 10) < 310)) {
                    aa.width = "310"
                }
                if (typeof aa.height == D || (!/%$/.test(aa.height) && parseInt(aa.height, 10) < 137)) {
                    aa.height = "137"
                }
                j.title = j.title.slice(0, 47) + " - Flash Player Installation";
                var ad = M.ie && M.win ? "ActiveX" : "PlugIn", ac = "MMredirectURL=" + O.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + ad + "&MMdoctitle=" + j.title;
                if (typeof ab.flashvars != D) {
                    ab.flashvars += "&" + ac
                } else {
                    ab.flashvars = ac
                }
                if (M.ie && M.win && ae.readyState != 4) {
                    var Y = C("div");
                    X += "SWFObjectNew";
                    Y.setAttribute("id", X);
                    ae.parentNode.insertBefore(Y, ae);
                    ae.style.display = "none";
                    (function () {
                        if (ae.readyState == 4) {
                            ae.parentNode.removeChild(ae)
                        } else {
                            setTimeout(arguments.callee, 10)
                        }
                    })()
                }
                u(aa, ab, X)
            }
        }

        function p(Y) {
            if (M.ie && M.win && Y.readyState != 4) {
                var X = C("div");
                Y.parentNode.insertBefore(X, Y);
                X.parentNode.replaceChild(g(Y), X);
                Y.style.display = "none";
                (function () {
                    if (Y.readyState == 4) {
                        Y.parentNode.removeChild(Y)
                    } else {
                        setTimeout(arguments.callee, 10)
                    }
                })()
            } else {
                Y.parentNode.replaceChild(g(Y), Y)
            }
        }

        function g(ab) {
            var aa = C("div");
            if (M.win && M.ie) {
                aa.innerHTML = ab.innerHTML
            } else {
                var Y = ab.getElementsByTagName(r)[0];
                if (Y) {
                    var ad = Y.childNodes;
                    if (ad) {
                        var X = ad.length;
                        for (var Z = 0; Z < X; Z++) {
                            if (!(ad[Z].nodeType == 1 && ad[Z].nodeName == "PARAM") && !(ad[Z].nodeType == 8)) {
                                aa.appendChild(ad[Z].cloneNode(true))
                            }
                        }
                    }
                }
            }
            return aa
        }

        function u(ai, ag, Y) {
            var X, aa = c(Y);
            if (M.wk && M.wk < 312) {
                return X
            }
            if (aa) {
                if (typeof ai.id == D) {
                    ai.id = Y
                }
                if (M.ie && M.win) {
                    var ah = "";
                    for (var ae in ai) {
                        if (ai[ae] != Object.prototype[ae]) {
                            if (ae.toLowerCase() == "data") {
                                ag.movie = ai[ae]
                            } else {
                                if (ae.toLowerCase() == "styleclass") {
                                    ah += ' class="' + ai[ae] + '"'
                                } else {
                                    if (ae.toLowerCase() != "classid") {
                                        ah += " " + ae + '="' + ai[ae] + '"'
                                    }
                                }
                            }
                        }
                    }
                    var af = "";
                    for (var ad in ag) {
                        if (ag[ad] != Object.prototype[ad]) {
                            af += '<param name="' + ad + '" value="' + ag[ad] + '" />'
                        }
                    }
                    aa.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + ah + ">" + af + "</object>";
                    N[N.length] = ai.id;
                    X = c(ai.id)
                } else {
                    var Z = C(r);
                    Z.setAttribute("type", q);
                    for (var ac in ai) {
                        if (ai[ac] != Object.prototype[ac]) {
                            if (ac.toLowerCase() == "styleclass") {
                                Z.setAttribute("class", ai[ac])
                            } else {
                                if (ac.toLowerCase() != "classid") {
                                    Z.setAttribute(ac, ai[ac])
                                }
                            }
                        }
                    }
                    for (var ab in ag) {
                        if (ag[ab] != Object.prototype[ab] && ab.toLowerCase() != "movie") {
                            e(Z, ab, ag[ab])
                        }
                    }
                    aa.parentNode.replaceChild(Z, aa);
                    X = Z
                }
            }
            return X
        }

        function e(Z, X, Y) {
            var aa = C("param");
            aa.setAttribute("name", X);
            aa.setAttribute("value", Y);
            Z.appendChild(aa)
        }

        function y(Y) {
            var X = c(Y);
            if (X && X.nodeName == "OBJECT") {
                if (M.ie && M.win) {
                    X.style.display = "none";
                    (function () {
                        if (X.readyState == 4) {
                            b(Y)
                        } else {
                            setTimeout(arguments.callee, 10)
                        }
                    })()
                } else {
                    X.parentNode.removeChild(X)
                }
            }
        }

        function b(Z) {
            var Y = c(Z);
            if (Y) {
                for (var X in Y) {
                    if (typeof Y[X] == "function") {
                        Y[X] = null
                    }
                }
                Y.parentNode.removeChild(Y)
            }
        }

        function c(Z) {
            var X = null;
            try {
                X = j.getElementById(Z)
            } catch (Y) {
            }
            return X
        }

        function C(X) {
            return j.createElement(X)
        }

        function i(Z, X, Y) {
            Z.attachEvent(X, Y);
            I[I.length] = [Z, X, Y]
        }

        function F(Z) {
            var Y = M.pv, X = Z.split(".");
            X[0] = parseInt(X[0], 10);
            X[1] = parseInt(X[1], 10) || 0;
            X[2] = parseInt(X[2], 10) || 0;
            return (Y[0] > X[0] || (Y[0] == X[0] && Y[1] > X[1]) || (Y[0] == X[0] && Y[1] == X[1] && Y[2] >= X[2])) ? true : false
        }

        function v(ac, Y, ad, ab) {
            if (M.ie && M.mac) {
                return
            }
            var aa = j.getElementsByTagName("head")[0];
            if (!aa) {
                return
            }
            var X = (ad && typeof ad == "string") ? ad : "screen";
            if (ab) {
                n = null;
                G = null
            }
            if (!n || G != X) {
                var Z = C("style");
                Z.setAttribute("type", "text/css");
                Z.setAttribute("media", X);
                n = aa.appendChild(Z);
                if (M.ie && M.win && typeof j.styleSheets != D && j.styleSheets.length > 0) {
                    n = j.styleSheets[j.styleSheets.length - 1]
                }
                G = X
            }
            if (M.ie && M.win) {
                if (n && typeof n.addRule == r) {
                    n.addRule(ac, Y)
                }
            } else {
                if (n && typeof j.createTextNode != D) {
                    n.appendChild(j.createTextNode(ac + " {" + Y + "}"))
                }
            }
        }

        function w(Z, X) {
            if (!m) {
                return
            }
            var Y = X ? "visible" : "hidden";
            if (J && c(Z)) {
                c(Z).style.visibility = Y
            } else {
                v("#" + Z, "visibility:" + Y)
            }
        }

        function L(Y) {
            var Z = /[\\\"<>\.;]/;
            var X = Z.exec(Y) != null;
            return X && typeof encodeURIComponent != D ? encodeURIComponent(Y) : Y
        }

        var d = function () {
            if (M.ie && M.win) {
                window.attachEvent("onunload", function () {
                    var ac = I.length;
                    for (var ab = 0; ab < ac; ab++) {
                        I[ab][0].detachEvent(I[ab][1], I[ab][2])
                    }
                    var Z = N.length;
                    for (var aa = 0; aa < Z; aa++) {
                        y(N[aa])
                    }
                    for (var Y in M) {
                        M[Y] = null
                    }
                    M = null;
                    for (var X in swfobject) {
                        swfobject[X] = null
                    }
                    swfobject = null
                })
            }
        }();
        return {
            registerObject: function (ab, X, aa, Z) {
                if (M.w3 && ab && X) {
                    var Y = {};
                    Y.id = ab;
                    Y.swfVersion = X;
                    Y.expressInstall = aa;
                    Y.callbackFn = Z;
                    o[o.length] = Y;
                    w(ab, false)
                } else {
                    if (Z) {
                        Z({success: false, id: ab})
                    }
                }
            }, getObjectById: function (X) {
                if (M.w3) {
                    return z(X)
                }
            }, embedSWF: function (ab, ah, ae, ag, Y, aa, Z, ad, af, ac) {
                var X = {success: false, id: ah};
                if (M.w3 && !(M.wk && M.wk < 312) && ab && ah && ae && ag && Y) {
                    w(ah, false);
                    K(function () {
                        ae += "";
                        ag += "";
                        var aj = {};
                        if (af && typeof af === r) {
                            for (var al in af) {
                                aj[al] = af[al]
                            }
                        }
                        aj.data = ab;
                        aj.width = ae;
                        aj.height = ag;
                        var am = {};
                        if (ad && typeof ad === r) {
                            for (var ak in ad) {
                                am[ak] = ad[ak]
                            }
                        }
                        if (Z && typeof Z === r) {
                            for (var ai in Z) {
                                if (typeof am.flashvars != D) {
                                    am.flashvars += "&" + ai + "=" + Z[ai]
                                } else {
                                    am.flashvars = ai + "=" + Z[ai]
                                }
                            }
                        }
                        if (F(Y)) {
                            var an = u(aj, am, ah);
                            if (aj.id == ah) {
                                w(ah, true)
                            }
                            X.success = true;
                            X.ref = an
                        } else {
                            if (aa && A()) {
                                aj.data = aa;
                                P(aj, am, ah, ac);
                                return
                            } else {
                                w(ah, true)
                            }
                        }
                        if (ac) {
                            ac(X)
                        }
                    })
                } else {
                    if (ac) {
                        ac(X)
                    }
                }
            }, switchOffAutoHideShow: function () {
                m = false
            }, ua: M, getFlashPlayerVersion: function () {
                return {major: M.pv[0], minor: M.pv[1], release: M.pv[2]}
            }, hasFlashPlayerVersion: F, createSWF: function (Z, Y, X) {
                if (M.w3) {
                    return u(Z, Y, X)
                } else {
                    return undefined
                }
            }, showExpressInstall: function (Z, aa, X, Y) {
                if (M.w3 && A()) {
                    P(Z, aa, X, Y)
                }
            }, removeSWF: function (X) {
                if (M.w3) {
                    y(X)
                }
            }, createCSS: function (aa, Z, Y, X) {
                if (M.w3) {
                    v(aa, Z, Y, X)
                }
            }, addDomLoadEvent: K, addLoadEvent: s, getQueryParamValue: function (aa) {
                var Z = j.location.search || j.location.hash;
                if (Z) {
                    if (/\?/.test(Z)) {
                        Z = Z.split("?")[1]
                    }
                    if (aa == null) {
                        return L(Z)
                    }
                    var Y = Z.split("&");
                    for (var X = 0; X < Y.length; X++) {
                        if (Y[X].substring(0, Y[X].indexOf("=")) == aa) {
                            return L(Y[X].substring((Y[X].indexOf("=") + 1)))
                        }
                    }
                }
                return ""
            }, expressInstallCallback: function () {
                if (a) {
                    var X = c(R);
                    if (X && l) {
                        X.parentNode.replaceChild(l, X);
                        if (Q) {
                            w(Q, true);
                            if (M.ie && M.win) {
                                l.style.display = "block"
                            }
                        }
                        if (E) {
                            E(B)
                        }
                    }
                    a = false
                }
            }
        }
    }();
    swfobject.addDomLoadEvent(function () {
        if (typeof(SWFUpload.onload) === "function") {
            SWFUpload.onload.call(window);
        }
    });
})();

// ---------------------------------------------------------------------------------------- swfobject end

/**
 * AXUpload5
 * @class AXUpload5
 * @extends AXJ
 * @version v1.4.6
 * @author tom@axisj.com
 * @logs
 "2013-10-02 오후 2:19:36 - 시작 tom",
 "2013-10-12 오전 11:13:06 - 업로드 서버오류 예외 처리 tom",
 "2013-10-29 오후 3:26:33 - 최지연 : 기타 버그 패치",
 "2013-10-30 오후 3:38:05 - config.uploadPars, config.deletePars 초기 설정값 패치 by tom",
 "2013-12-11 오후 5:15:51 - tom&root setUploadedList, setUpoadeFile 버그패치",
 "2013-12-17 오전 11:24:38 - tom : AXUploadPreview css 적용",
 "2014-02-11 오후 3:29:51 - tom : deleteFile 개선, 서버 JSON에 error 가 없으면 정상 처리 되도록 변경",
 "2014-02-23 오후 7:39:11 - tom : this.uploadedList 초기화 버그 픽스",
 "2014-02-23 오후 8:44:07 - <base> attr 인식 처리 구문 추가",
 "2014-04-10 - tom : 설정에 선언된 파일타입 체크하여 파일 셀렉트와 드랍 방지 처리 구문 추가",
 "2014-04-10 - tom : fileSelectAutoUpload 옵션 flash 모드에서 작동 하도록 픽스",
 "2014-05-15 - tom : 파일선택 갯수 선택오류 버그 픽스 / fileSelectAutoUpload 버그 픽스",
 "2014-05-23 - tom : file mimeType 이 없는 경우 업로드 지원 구문 추가"
 "2014-06-04 tom : in single upload, reupload bugfix"
 "2014-06-14 tom : extend config option flash_file_types, flash_file_types_description"
 "2014-06-17 tom : [bugfix] file_types undefined"
 "2014-06-26 tom : [bugfix] http error exception when delete runs "
 "2014-12-22 tom : [bugfix] manual 업로드 갯수제한 버그 픽스 "
 "2015-01-04 tom : thumbUrl 값이 없을 때 썸네일 배경 예외 처리 "
 "2015-01-05 tom : queuebox class 가 listType일 때 progressbar 위치 조정"
 "2015-01-09 tom : onFileDrop uploadedCount 증가구문 수정 https://github.com/axisj-com/axisj/issues/385"
 "2015-01-16 tom : setUploadedList bug fix"
 "2015-02-06 John : getItemTag : openMode (view 모드 추가) list 모드 css 적용"
 "2015-02-07 tom : single 모드에서 fileDisplayHide: true 속성 추가"
 "2015-03-28 tom : https://github.com/axisj-com/axisj/issues/501 삭제후 리스트가 비었을 때 onDeleteAll 호출"
 "2015-04-01 tom : fileKeys 에 id 값 정의 기능 추가"
 "2015-04-06 tom : fileKeys 기본 맵핑방식 수정"
 "2015-05-14 HJ.Park : SWFUpload 모드에서 파일 사이즈 초과시 onError 메서드 호출하도록 수정 https://github.com/axisj-com/axisj/issues/559"
 "2015-05-21 tom : singleUpload setUploadedList 버그픽스 https://github.com/axisj-com/axisj/issues/580"
 "2015-08-02 tom : 업로드 버튼 태그 수정 / 업로드 완료시에 엘리먼트 초기화 기능 보류"
 "2015-08-03 tom : setUploadedList queue box clear"
 "2015-08-07 tom : 내부 키 id > _id_ 로 교체"
 "2015-11-24 tom : queueBoxAppendType:"prepend" 버그 픽스
 "drag & drop 버그 픽스 quebox.empty를 해서 dropZone 이 사라진 문제.
 "2016-08-10 tom : upload후 같은 파일 업로드 안되는 문제 해결
 * @description
 *
 ```js
 var myUpload = new AXUpload5();
 myUpload.setConfig(classConfig:JSObject);
 ```
 *
 */

/**
 * @method initialize.setConig
 * @param {Object} config - gridConfig
 * @description
 * 선언된 클래스를 사용하기 위해 속성을 정의합니다.
 * @example
 ```js
 var myUpload = new AXUPload5();
 myUpload.setConfig({
	targetID:"AXUpload5",               //{String} - 업로드 버튼 엘리먼트 아이디
	openMode: "view",                   //{String} - 업로드된 파일 삭제 아이콘 숨김
	buttonTxt:"파일올리기",              //[String] - 업로드 버튼 문구. 사용자가 지정하지 않으면 AXConfig 에서 정의한 값을 사용합니다.
	targetButtonClass:"Green",          //[String] - 업로드 버튼에 추가될 CSS 클래스
	uploadFileName:"files[]",           //{String} - 서버에 전송될 파일 파라미터 키이름
	file_types:"*.*",                   //{String} - upload 할 파일타입( *.* | audio/* | video/* | image/* | MIME_type (accept) )
	dropBoxID:"uploadQueueBox",         //{String} - 드래그 드랍 타겟 엘리먼트 아이디
	queueBoxID:"uploadQueueBox",        //{String} - 업로드된 파일 목록을 보여주는 업로드 큐박스 엘리먼트 아이디
	flash_url : "../../_AXJ/lib/swfupload.swf",         //[String] - html 5를 지원하지 않는 브라우저를 위한 swf upload 설정 원치 않는 경우엔 선언 하지 않아도 됩니다.
	flash9_url : "../../_AXJ/lib/swfupload_fp9.swf",    //[String] - html 5를 지원하지 않는 브라우저를 위한 swf upload 설정 원치 않는 경우엔 선언 하지 않아도 됩니다.
	onClickUploadedItem: function(){    //[fn] 업로드된 목록을 클릭했을 때 이벤트 콜백함수
		window.open(this.uploadedPath.dec() + this.saveName.dec(), "_blank", "width=500,height=500");
	},
	uploadMaxFileSize:(10*1024*1024),   //{Number} - 업로드 될 개별 파일 사이즈(클라이언트에서 제한하는 사이즈이며, 서버에서 설정되는 값이 아닙니다.)
	uploadMaxFileCount:3,               //{Number} - 업로드될 파일갯수 제한 0 은 무제한
	uploadUrl:"uploadFile.asp",         //{String} - 서버전송 URL
	uploadPars:{userID:"tom", userName:"액시스"},  //[JSObject] - 서버전송 URL 파라미터
	deleteUrl:"deleteFile.asp",         //{String} - 서버전송 URL
	deletePars:{userID:"tom", userName:"액시스"},  //[JSObject] - 서버전송 URL 파라미터
	fileKeys:{                          //[JSObject] - 서버에서 리턴하는 json key 정의 (id는 예약어 사용할 수 없음)
		id:"id",
		name:"name",
		type:"type",
		saveName:"saveName",
		fileSize:"fileSize",
		uploadedPath:"uploadedPath",
		thumbPath:"thumbUrl"            // 서버에서 키값을 다르게 설정 할 수 있다는 것을 확인 하기 위해 이름을 다르게 처리한 예제 입니다.
	},
	onbeforeFileSelect: function(){     //[fn] - 드랍되거나 파일이 선택되기 전에 이벤트 return true; 리턴하지 않으면 진행을 중지 합니다.
		trace(this);
		return true;
	},
	onUpload: function(){               //[fn] - 업로드가 완료되는 이벤트 콜백함수
		trace(this);
		//trace("onUpload");
	},
	onComplete: function(){             //[fn] - 업로드가 모두 완료되는 이벤트 콜백함수
		//trace(this);
		//trace("onComplete");
		$("#uploadCancelBtn").get(0).disabled = true; // 전송중지 버튼 제어
	},
	onStart: function(){                //[fn] - 업로드가 시작되는 이벤트 콜백함수
		//trace(this);
		//trace("onStart");
		$("#uploadCancelBtn").get(0).disabled = false; // 전송중지 버튼 제어
	},
	onDelete: function(){               //[fn] - 파일 삭제 완료되는 이벤트 콜백함수
		//trace(this);
		//trace("onDelete");
	},
	onError: function(errorType, extData){  //[fn] - 에러가 발생되었을 때 이벤트 콜백함수 [errorType, extData] 인자 사용
		if(errorType == "html5Support"){
			//dialog.push("The File APIs are not fully supported in this browser.");
		}else if(errorType == "fileSize"){
			trace(extData);
			alert("파일사이즈가 초과된 파일을 업로드 할 수 없습니다. 업로드 목록에서 제외 합니다.("+extData.name+" : "+extData.size.byte()+")");
		}else if(errorType == "fileCount"){
			alert("업로드 갯수 초과 초과된 아이템은 업로드 되지 않습니다.");
		}
	}
});

 ```
 */

var AXUpload5 = Class.create(AXJ, {
    initialize: function (AXJ_super) {
        AXJ_super();
        this.uploadedList = [];
        this.uploadingObj = null;
        this.queue = [];
        this.queueLive = false;
        this.isSingleUpload = false;
        this.config.uploadFileName = "fileData";
        this.config.file_types = "*.*";
        this.config.fileSelectAutoUpload = true;
        this.supportHtml5 = false;
        if (window.File && window.FileReader && window.FileList && window.Blob) this.supportHtml5 = true;
        if (!AXConfig.AXUpload5) {
            AXConfig.AXUpload5 = {buttonTxt: "Upload files"};
        }
        this.config.buttonTxt = AXConfig.AXUpload5.buttonTxt;
        this.fileKeys = { // 서버에서 리턴하는 json key 정의 (id 는 예약어 입니다.)
            _id_: "_id_",
            name: "name",
            type: "type",
            saveName: "saveName",
            fileSize: "fileSize",
            uploadedPath: "uploadedPath",
            thumbPath: "thumbPath"
        };
        this.config.flash_url = "/_AXJ/lib/swfupload.swf";
        this.config.flash9_url = "/_AXJ/lib/swfupload_fp9.swf";
        this.config.uploadPars = {};
        this.config.deletePars = {};
        this.config.queueBoxAppendType = "append";
    },
    init: function (reset) {
        var cfg = this.config;
        // 파일키 덮어쓰기 빠진 키 초기값으로 정의
        for (k in this.fileKeys) {
            if (typeof this.config.fileKeys === "undefined" || typeof this.config.fileKeys[k] === "undefined") this.config.fileKeys[k] = this.fileKeys[k];
        }
        if (reset == undefined) {
            if (!this.supportHtml5) {
                if (cfg.onError) cfg.onError("html5Support");
                this.swfinit(reset);
                return;
            }
        } else {
            if (!this.supportHtml5) {
                return;
            }
        }

        var baseUrl = axdom("base").attr("href");
        if (axf.isEmpty(baseUrl)) baseUrl = "";
        if (cfg.uploadUrl.left(1) == "/") {
            cfg.uploadUrl = baseUrl + cfg.uploadUrl;
        }
        if (cfg.deleteUrl.left(1) == "/") {
            cfg.deleteUrl = baseUrl + cfg.deleteUrl;
        }
        /* dropBoxID, queueBoxID 자동 생성 */
        if (cfg.dropBoxTarget) {
            if (cfg.dropBoxTarget.id === undefined || cfg.dropBoxTarget.id == "") {
                axdom(cfg.dropBoxTarget).attr("id", cfg.dropBoxTarget.id = cfg.dropBoxID = "AXJUnique_dropBox_" + axf.getUniqueId());
            } else if (axf.isEmpty(cfg.dropBoxID)) {
                cfg.dropBoxID = cfg.dropBoxTarget.id;
            }
        }
        if (cfg.queueBoxTarget) {
            if (cfg.queueBoxTarget.id === undefined || cfg.queueBoxTarget.id == "") {
                axdom(cfg.queueBoxTarget).attr("id", cfg.queueBoxTarget.id = cfg.queueBoxID = "AXJUnique_queueBox_" + axf.getUniqueId());
                alert(cfg.queueBoxID);
            } else if (axf.isEmpty(cfg.queueBoxID)) {
                cfg.queueBoxID = cfg.queueBoxTarget.id;
            }
        }

        this.target = axdom("#" + cfg.targetID);
        if (reset == undefined) {
            this.target.empty();
            this.uploadedList = [];
        }

        var inputFileMultiple = 'multiple="multiple"';
        var inputFileAccept = cfg.file_types;
        if (cfg.isSingleUpload) {
            inputFileMultiple = '';
        }
        if (!this.supportHtml5) {
            inputFileMultiple = '';
        }

        var po = [];
        /*
         po.push('<div style="position:relative;">');
         po.push('	<table style=""><tbody><tr><td id="'+cfg.targetID+'_AX_selectorTD">');
         po.push('	<input type="file" id="'+cfg.targetID+'_AX_files" '+inputFileMultiple+' accept="'+inputFileAccept+'" style="position:absolute;left:0px;top:0px;margin:0px;padding:0px;-moz-opacity: 0.0;opacity:.00;filter: alpha(opacity=0);" />');
         po.push('	<button type="button" class="AXButton '+cfg.targetButtonClass+'" id="'+cfg.targetID+'_AX_selector"><span class="AXFileSelector">'+(cfg.buttonTxt)+'</span></button>');
         po.push('	</td>');

         if(cfg.isSingleUpload && cfg.fileDisplayHide != true){
         po.push('<td>');
         po.push('<div class="AXFileDisplay" id="'+cfg.targetID+'_AX_display">'+AXConfig.AXUpload5.uploadSelectTxt+'</div>');
         po.push('</td>');
         }

         po.push('	</tr></tbody></table>');
         */

        po.push('<div style="position:relative;">');

        po.push('   <div style="float:left;">');
        po.push('	    <input type="file" id="' + cfg.targetID + '_AX_files" ' + inputFileMultiple + ' accept="' + inputFileAccept + '" style="position:absolute;left:0px;top:0px;margin:0px;padding:0px;-moz-opacity: 0.0;opacity:.00;filter: alpha(opacity=0);" />');
        po.push('	    <button type="button" class="AXButton ' + cfg.targetButtonClass + '" id="' + cfg.targetID + '_AX_selector"><span class="AXFileSelector">' + (cfg.buttonTxt) + '</span></button>');
        po.push('   </div>');

        if (cfg.isSingleUpload && cfg.fileDisplayHide != true) {
            po.push('   <div style="float:left;">');
            po.push('       <div class="AXFileDisplay" style="padding:3px; 5px;" id="' + cfg.targetID + '_AX_display">' + AXConfig.AXUpload5.uploadSelectTxt + '</div>');
            po.push('   </div>');
        }
        po.push('   <div style="clear:both;"></div>');

        po.push('</div>');
        this.target.empty();
        this.target.append(po.join(''));

        axdom('#' + cfg.targetID + '_AX_selectorTD').css({width: axdom('#' + cfg.targetID + '_AX_selector').outerWidth() + 5});
        axdom('#' + cfg.targetID + '_AX_files').css({width: axdom('#' + cfg.targetID + '_AX_selector').outerWidth(), height: axdom('#' + cfg.targetID + '_AX_selector').outerHeight()});

        var pauseQueue = this.pauseQueue.bind(this);
        var _this = this;

        axdom('#' + cfg.targetID + '_AX_selector').click(function (event) {

            if (cfg.onbeforeFileSelect) {
                if (!cfg.onbeforeFileSelect.call({
                        uploadedList: _this.uploadedList,
                        uploadMaxFileSize: cfg.uploadMaxFileSize,
                        uploadMaxFileCount: cfg.uploadMaxFileCount
                    })) {
                    return false;
                }
            }

            if (!cfg.isSingleUpload && cfg.uploadMaxFileCount != 0) {
                if (_this.uploadedList.length >= cfg.uploadMaxFileCount) {
                    cfg.onError("fileCount");
                    return false;
                }
            }

            pauseQueue();
            axdom('#' + cfg.targetID + '_AX_files').click();
        });

        var onFileSelect = this.onFileSelect.bind(this);
        var fileSelector = document.getElementById(cfg.targetID + '_AX_files');
        if (axf.browser.name == "ie" && axf.browser.version < 9) {

        } else {
            fileSelector.addEventListener('change', onFileSelect, false);
        }

        if (reset == undefined) {


            if (cfg.dropBoxID && this.supportHtml5) {

                axdom("#" + cfg.dropBoxID)
                    .addClass("allowDrop")
                    .html('<div class="dropZoneBox" id="' + cfg.dropBoxID + '_dropZoneBox" style="border:3px dashed #d7d7d7;display:none;"></div>');

                // ---------------- 옵션사항 s
                /*
                 axdom("#"+cfg.dropBoxID+"_dropZoneBox").show();
                 axdom("#"+cfg.dropBoxID+"_dropZoneBox").css({height:axdom("#"+cfg.dropBoxID).innerHeight()-6, width:axdom("#"+cfg.dropBoxID).innerWidth()-6});
                 setTimeout(function(){
                 axdom("#"+cfg.dropBoxID+"_dropZoneBox").fadeOut();
                 }, 2000);
                 */
                // ---------------- 옵션사항 e

                var onFileDragOver = this.onFileDragOver.bind(this);
                var onFileDrop = this.onFileDrop.bind(this);
                var dragZone = document.getElementById(cfg.dropBoxID);
                dragZone.addEventListener('dragover', function (evt) {
                    onFileDragOver(evt)
                }, false);

                var dropZone = document.getElementById(cfg.dropBoxID + "_dropZoneBox");
                dropZone.addEventListener('drop', function (evt) {

                    if (cfg.onbeforeFileSelect) {
                        if (!cfg.onbeforeFileSelect.call({
                                uploadedList: _this.uploadedList,
                                uploadMaxFileSize: cfg.uploadMaxFileSize,
                                uploadMaxFileCount: cfg.uploadMaxFileCount
                            })) {
                            evt.stopPropagation();
                            evt.preventDefault();
                            axdom("#" + cfg.dropBoxID).removeClass("onDrop");
                            axdom("#" + cfg.dropBoxID + "_dropZoneBox").hide();
                            return false;
                        }
                    }

                    if (!cfg.isSingleUpload && cfg.uploadMaxFileCount != 0) {
                        if (_this.uploadedList.length >= cfg.uploadMaxFileCount) {
                            evt.stopPropagation();
                            evt.preventDefault();
                            axdom("#" + cfg.dropBoxID).removeClass("onDrop");
                            axdom("#" + cfg.dropBoxID + "_dropZoneBox").hide();
                            cfg.onError("fileCount");
                            return false;
                        }
                    }

                    onFileDrop(evt)
                }, false);
            }

            if (cfg.queueBoxID) {
                this.multiSelector = new AXMultiSelect();
                this.multiSelector.setConfig({
                    selectStage: cfg.queueBoxID,
                    selectClassName: "readyselect",
                    beselectClassName: "beSelected",
                    selectingClassName: "AX_selecting"
                });
            }
        }
    },
    swfinit: function (reset) {
        var cfg = this.config;
        this.target = axdom("#" + cfg.targetID);

        var po = [];
        po.push('<div style="position:relative;">');
        po.push('	<table style="table-layout:fixed;width:100%;"><tbody><tr><td id="' + cfg.targetID + '_AX_selectorTD">');
        po.push('	<button type="button" class="AXButton ' + cfg.targetButtonClass + '" id="' + cfg.targetID + '_AX_selector"><span class="AXFileSelector">' + (cfg.buttonTxt) + '</span></button>');
        po.push('	<span id="spanButtonPlaceholder" class="AXUpload5flashUploadButton"></span>');
        po.push('	</td>');

        if (cfg.isSingleUpload) {
            po.push('<td>');
            po.push('<div class="AXFileDisplay" id="' + cfg.targetID + '_AX_display">' + AXConfig.AXUpload5.uploadSelectTxt + '</div>');
            po.push('</td>');
        }

        po.push('	<tr></tbody></table>');
        po.push('</div>');
        this.target.empty();
        this.target.append(po.join(''));

        axdom('#' + cfg.targetID + '_AX_selectorTD').css({width: axdom('#' + cfg.targetID + '_AX_selector').outerWidth() + 5});

        var btnW = axdom('#' + cfg.targetID + '_AX_selector').outerWidth();
        var btnH = axdom('#' + cfg.targetID + '_AX_selector').outerHeight();

        // functions --------------------------------------------------------------- s
        var uploadSuccess = this.uploadSuccess.bind(this);
        var onClickDeleteButton = this.onClickDeleteButton.bind(this);
        var onClickFileTitle = this.onClickFileTitle.bind(this);

        var file_dialog_complete_handler = function (numFilesSelected, numFilesQueued) {
            if (numFilesSelected > 0) {
                if (this.swfu.getStats().files_queued > 0) {
                    //if(this.settings.onStartUpload) this.settings.onStartUpload();
                    if (cfg.onStart) cfg.onStart.call(this.queue);
                }
            }
            this.swfu.startUpload();
        };
        var file_dialog_complete_handler_bind = file_dialog_complete_handler.bind(this);
        //--
        var file_queued_handler = function (file) {
            if (cfg.isSingleUpload) {
                var myFile = this.uploadedList.first();
                if (myFile) {
                    if (!confirm(AXConfig.AXUpload5.deleteConfirm)) {
                        this.cancelUpload();
                    }
                    ;
                    var uploadFn = function () {
                        var itemID = 'AX_' + file[cfg.fileKeys._id_];
                        this.queue.push({_id_: itemID, file: file});
                        axdom("#" + cfg.targetID + '_AX_display').empty();
                        axdom("#" + cfg.targetID + '_AX_display').append(this.getItemTag(itemID, file));
                    };
                    this.deleteFile(myFile, uploadFn.bind(this));
                    return;
                } else {
                    var itemID = 'AX_' + file[cfg.fileKeys._id_];
                    this.queue.push({_id_: itemID, file: file});
                    axdom("#" + cfg.targetID + '_AX_display').empty();
                    axdom("#" + cfg.targetID + '_AX_display').append(this.getItemTag(itemID, file));
                }
            } else {
                //cfg.uploadMaxFileCount
                if (cfg.uploadMaxFileCount != 0) {
                    if (this.uploadedList.length >= cfg.uploadMaxFileCount) {
                        cfg.onError("fileCount");
                        this.cancelUpload();
                        return;
                    }
                }

                //trace(file);
                //{"filestatus":-1, "name":"20130708175735_1.jpg", "type":".jpg", "id":"SWFUpload_0_0", "index":0, "modificationdate":"2013-10-04T08:51:27Z", "uploadtype":0, "post":{}, "size":891324, "creationdate":"2013-10-04T08:52:02Z"}
                var itemID = 'AX_' + file[cfg.fileKeys._id_];
                this.queue.push({_id_: itemID, file: file});
                //큐박스에 아이템 추가
                if (cfg.queueBoxAppendType == "prepend") axdom("#" + cfg.queueBoxID).prepend(this.getItemTag(itemID, file));
                else axdom("#" + cfg.queueBoxID).append(this.getItemTag(itemID, file));
                axdom("#" + cfg.queueBoxID).find("#" + itemID).fadeIn();
            }
        };
        var file_queued_handler_bind = file_queued_handler.bind(this);
        //--
        var file_queue_error_handler = function (file, errorCode, message) {
            try {
                if (errorCode === SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED) {
                    alert("You have attempted to queue too many files.\n" + (message === 0 ? "You have reached the upload limit." : "You may select " + (message > 1 ? "up to " + message + " files." : "one file.")));
                    return;
                }
                this.cancelUpload();
                if (cfg.onComplete) cfg.onComplete.call(this.uploadedList, this.uploadedList);

                switch (errorCode) {
                    case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:
                        this.showMSG("File is too big.");
                        this.swfu.debug("Error Code: File too big, File name: " + file.name + ", File size: " + file.size + ", Message: " + message);
                        break;
                    case SWFUpload.QUEUE_ERROR.ZERO_BYTE_FILE:
                        this.showMSG("Cannot upload Zero Byte files.");
                        this.swfu.debug("Error Code: Zero byte file, File name: " + file.name + ", File size: " + file.size + ", Message: " + message);
                        break;
                    case SWFUpload.QUEUE_ERROR.INVALID_FILETYPE:
                        this.showMSG("Invalid File Type.");
                        this.swfu.debug("Error Code: Invalid File Type, File name: " + file.name + ", File size: " + file.size + ", Message: " + message);
                        break;
                    default:
                        if (file !== null) {
                            this.showMSG("Unhandled Error");
                        }
                        this.swfu.debug("Error Code: " + errorCode + ", File name: " + file.name + ", File size: " + file.size + ", Message: " + message);
                        break;
                }
            } catch (ex) {
                this.debug(ex);
            }
        };
        var file_queue_error_handler_bind = file_queue_error_handler.bind(this);
        //--
        var upload_start_handler = function () {
            if (this.isSingleUpload) {

            } else {
                if (cfg.uploadMaxFileCount != 0) {
                    if (cfg.uploadMaxFileCount <= this.uploadedList.length) {
                        this.cancelUpload();
                    }
                }
            }
        };
        var upload_start_handler_bind = upload_start_handler.bind(this);
        //--
        var upload_progress_handler = function (file, bytesLoaded, bytesTotal) {
            var itemID = 'AX_' + file[cfg.fileKeys._id_];
            if (cfg.isSingleUpload) {
                axdom("#" + itemID).find(".AXUploadProcessBar").width(((bytesLoaded / bytesTotal) * 100).round(2) + "%");
            } else {
                axdom("#" + cfg.queueBoxID).find("#" + itemID + " .AXUploadProcessBar").width(((bytesLoaded / bytesTotal) * 100).round(2) + "%");
            }
        };
        var upload_progress_handler_bind = upload_progress_handler.bind(this);
        //--
        var upload_error_handler = function (file, errorCode, message) {
            if (cfg.onError) {
                if (errorCode == SWFUpload.UPLOAD_ERROR.HTTP_ERROR && message == 413) {
                    errorCode = "fileSize";
                }

                cfg.onError(errorCode, file);
            }
        };
        var upload_error_handler_bind = upload_error_handler.bind(this);
        //--
        var upload_success_handler = function (file, res) {
            var itemID = 'AX_' + file[cfg.fileKeys._id_];

            try {
                if (typeof res == "string") res = res.object();
            } catch (e) {
                trace(e);
            }
            if (cfg.isSingleUpload) {

                axdom("#" + itemID + " .AXUploadBtns").show();
                axdom("#" + itemID + " .AXUploadLabel").show();
                axdom("#" + itemID + " .AXUploadTit").show();

                axdom("#" + itemID + " .AXUploadProcess").hide();

                uploadSuccess(file, itemID, res);
                // --------------------- s
                axdom("#" + itemID + " .AXUploadBtnsA").bind("click", function () {
                    onClickDeleteButton(itemID);
                });
                if (cfg.onClickUploadedItem) {
                    axdom("#" + itemID + " .AXUploadDownload").bind("click", function () {
                        onClickFileTitle(itemID);
                    });
                }

            } else {

                axdom("#" + cfg.queueBoxID).find("#" + itemID + " .AXUploadBtns").show();
                axdom("#" + cfg.queueBoxID).find("#" + itemID + " .AXUploadLabel").show();
                axdom("#" + cfg.queueBoxID).find("#" + itemID + " .AXUploadProcess").hide();

                if (res[cfg.fileKeys.thumbPath]) {
                    axdom("#" + cfg.queueBoxID).find("#" + itemID + " .AXUploadIcon").css({
                        "background-image": "url('" + (res[cfg.fileKeys.thumbPath] || "").dec() + "')"
                    }).addClass("AXUploadPreview").find("img.preview").remove();
                } else {
                    axdom("#" + cfg.queueBoxID).find("#" + itemID + " .AXUploadIcon").css({"background-image": "url()"});
                    axdom("#" + cfg.queueBoxID).find("#" + itemID + " .AXUploadIcon").html((res[cfg.fileKeys.type] || "").dec().replace(".", ""));
                }

                uploadSuccess(file, itemID, res);
                // --------------------- s
                axdom("#" + cfg.queueBoxID).find("#" + itemID + " .AXUploadBtnsA").bind("click", function () {
                    onClickDeleteButton(itemID);
                });
                if (cfg.onClickUploadedItem) {
                    axdom("#" + cfg.queueBoxID).find("#" + itemID + " .AXUploadDownload").bind("click", function () {
                        onClickFileTitle(itemID);
                    });
                }
            }

            //큐에서 제거
            var updateQueue = [];
            axdom.each(this.queue, function () {
                if (this.id != itemID) updateQueue.push(this);
            });
            this.queue = updateQueue;
        };
        var upload_success_handler_bind = upload_success_handler.bind(this);
        //--
        var upload_complete_handler = function () {
            if (this.isSingleUpload) {
                this.uploadComplete();
            } else {
                if (this.swfu.getStats().files_queued === 0) {
                    this.uploadComplete();
                    this.swfu.settings.allowUpload = false;
                } else {
                    this.swfu.startUpload();
                }
            }
        };
        var upload_complete_handler_bind = upload_complete_handler.bind(this);
        //--
        var queue_complete_handler = function () {
            //alert("end");
        };
        var queue_complete_handler_bind = queue_complete_handler.bind(this);
        // functions --------------------------------------------------------------- e

        var settings = {
            flash_url: cfg.flash_url,
            flash9_url: cfg.flash9_url,
            upload_url: cfg.uploadUrl,
            file_post_name: cfg.uploadFileName,
            post_params: cfg.uploadPars,
            file_size_limit: cfg.uploadMaxFileSize,
            fileSelectAutoUpload: cfg.fileSelectAutoUpload,
            file_types: cfg.flash_file_types || "*.*",
            file_types_description: cfg.flash_file_types_description || "all",
            file_upload_limit: 0, //cfg.uploadMaxFileCount,
            file_queue_limit: 0,
            debug: false,

            // Button Settings
            button_image_url: "null",
            button_placeholder_id: "spanButtonPlaceholder",
            button_width: btnW,
            button_height: btnH,

            // The event handler functions are defined in handlers.js
            swfupload_preload_handler: function () {
            },
            swfupload_load_failed_handler: function () {
            },
            swfupload_loaded_handler: function () {
            },
            file_queued_handler: file_queued_handler_bind,
            file_queue_error_handler: file_queue_error_handler_bind,
            file_dialog_complete_handler: file_dialog_complete_handler_bind,
            upload_start_handler: upload_start_handler_bind,
            upload_progress_handler: upload_progress_handler_bind,
            upload_error_handler: upload_error_handler_bind,
            upload_success_handler: upload_success_handler_bind,
            upload_complete_handler: upload_complete_handler_bind,
            queue_complete_handler: queue_complete_handler_bind	// Queue plugin event
        };
        this.swfu = new SWFUpload(settings);

        if (cfg.queueBoxID) {
            this.multiSelector = new AXMultiSelect();
            this.multiSelector.setConfig({
                selectStage: cfg.queueBoxID,
                selectClassName: "readyselect",
                beselectClassName: "beSelected"
            });
        }
    },
    getItemTag: function (itemID, f) {
        var cfg = this.config;
        var po = [];

        if (cfg.isSingleUpload) {
            po.push('<div class="AXUploadItem ' + (cfg.openMode || "") + '" id="' + itemID + '">');
            po.push('	<div class="AXUploadBtns" style="display:none;">');
            po.push('		<a href="#AXExecption" class="AXUploadBtnsA" id="' + itemID + '_AXUploadBtns_deleteFile">del</a>');
            po.push('	</div>');
            po.push('	<div class="AXUploadLabel ' + (cfg.openMode || "") + '" style="display:none;">');
            if (cfg.openMode != "view") po.push('		<a href="#AXExecption" id="' + itemID + '_AXUploadLabel_download" class="AXUploadDownload">download</a>');
            po.push('	</div>');
            po.push('	<div class="AXUploadProcess">');
            po.push('		<div class="AXUploadProcessBar"></div>');
            po.push('	</div>');
            po.push('	<div class="AXUploadTit" title="' + f.name.dec() + '" style="display:none;">' + f.name.dec() + '</div>');
            po.push('</div>');
        } else {
            po.push('<div class="AXUploadItem ' + cfg.openMode + '" id="' + itemID + '" style=\"display:none;\">');
            po.push('	<div class="AXUploadIcon">');
            po.push('		<img id="' + itemID + '_preview" class="preview" src="" />');
            po.push('	</div>');
            po.push('	<div class="AXUploadType"><span class="AXUploadSize">' + f.size.number().byte() + '</span></div>');
            //view 모드인경우 파일명을 클릭하면 다운로드 이벤트를 발생시킨다
            if (cfg.openMode == "view") {
                po.push('    <a href="#AXExecption" id="' + itemID + '_AXUploadLabel_download" class="AXUploadDownload">');
                po.push('    <div class="AXUploadTit" title="' + f.name.dec() + '">' + f.name.dec());
                po.push('    </div>');
                po.push('    </a>');
            }
            else {
                po.push('	<div class="AXUploadTit" title="' + f.name.dec() + '">' + f.name.dec() + '</div>');
            }
            po.push('	<div class="AXUploadProcess">');
            po.push('		<div class="AXUploadProcessBar"></div>');
            po.push('	</div>');
            po.push('	<div class="AXUploadBtns" style="display:none;">');
            if (cfg.openMode != "view") po.push('		<a href="#AXExecption" class="AXUploadBtnsA" id="' + itemID + '_AXUploadBtns_deleteFile">del</a>');
            po.push('	</div>');
            po.push('	<div class="AXUploadLabel ' + cfg.openMode + '" style="display:none;">');

            if (cfg.formatter) {
                var uf = {};
                //uf.id =  (f.id) ? f.id : itemID;
                uf.id = itemID;
                uf.name = f.name;
                uf.type = f.type;
                uf.size = f.size;

                var returnStr = cfg.formatter.call(uf, uf);
                if (returnStr) po.push(returnStr);
            }
            po.push('		<a href="#AXExecption" id="' + itemID + '_AXUploadLabel_download" class="AXUploadDownload">download</a>');
            po.push('	</div>');
        }
        return po.join('');
    },
    onFileSelect: function (evt) {
        var cfg = this.config, _this = this;
        if (this.supportHtml5) {
            var files = evt.target.files; // FileList object
            if(files && files.length > 0) {
                if (cfg.isSingleUpload) {

                    var myFile = this.uploadedList.first();
                    if (myFile) {
                        this.__tempFiles = files[0];
                        if (!confirm(AXConfig.AXUpload5.deleteConfirm)) return;
                        var uploadFn = function () {
                            var itemID = 'AX' + AXUtil.timekey() + '_AX_0';
                            this.queue.push({_id_: itemID, file: _this.__tempFiles});
                            axdom("#" + cfg.targetID + '_AX_display').empty();
                            axdom("#" + cfg.targetID + '_AX_display').append(_this.getItemTag(itemID, _this.__tempFiles));

                            _this.queueLive = true;
                            if (cfg.onStart) cfg.onStart.call(_this.queue, _this.queue);
                            _this.uploadQueue();
                            itemID = null;
                            _this.__tempFiles = null;
                        };
                        this.deleteFile(myFile, uploadFn.bind(this));
                        return;
                    } else {
                        var i = 0;
                        var f = files[i];
                        var itemID = 'AX' + AXUtil.timekey() + '_AX_' + i;
                        this.queue.push({_id_: itemID, file: f});
                        axdom("#" + cfg.targetID + '_AX_display').empty();
                        axdom("#" + cfg.targetID + '_AX_display').append(this.getItemTag(itemID, f));
                    }

                }
                else {
                    var hasSizeOverFile = false;
                    var sizeOverFile;
                    if (!cfg.file_types) cfg.file_types = ".";
                    if (cfg.file_types == "*.*") cfg.file_types = "*/*";

                    for (var i = 0; i < files.length; i++) {
                        var f = files[i];
                        if (f.size > cfg.uploadMaxFileSize) {
                            hasSizeOverFile = true;
                            sizeOverFile = f;
                            break;
                        }
                    }
                    if (hasSizeOverFile) cfg.onError("fileSize", {name: sizeOverFile.name, size: sizeOverFile.size});

                    //todo : 업로드 갯수 제한 확인 1
                    var uploadedCount = this.uploadedList.length;
                    var queueCount = this.queue.length;
                    //trace(uploadedCount, queueCount, (uploadedCount-1+queueCount));
                    for (var i = 0; i < files.length; i++) {
                        var f = files[i];
                        if (f.size <= cfg.uploadMaxFileSize && ( (new RegExp(cfg.file_types.replace(/\*/g, "[a-z]"), "ig")).test(f.type.toString()) || (cfg.file_types == "*/*" && f.type == "") )) {
                            if ((uploadedCount + queueCount) < cfg.uploadMaxFileCount || cfg.uploadMaxFileCount == 0) {
                                var itemID = 'AX' + AXUtil.timekey() + '_AX_' + i;
                                this.queue.push({_id_: itemID, file: f});
                                //큐박스에 아이템 추가

                                if (cfg.queueBoxAppendType == "prepend") axdom("#" + cfg.queueBoxID).prepend(this.getItemTag(itemID, f));
                                else axdom("#" + cfg.queueBoxID).append(this.getItemTag(itemID, f));

                                this.setLocalPreview(itemID, f);

                                axdom("#" + cfg.queueBoxID).find("#" + itemID).fadeIn();

                                uploadedCount++;

                                //trace(uploadedCount, this.queue.length);

                            } else {
                                cfg.onError("fileCount");
                                break;
                            }
                        }
                    }
                    ;
                }
            }
        } else {
            alert("not support HTML5");
        }
        this.queueLive = true;
        if (cfg.onStart) cfg.onStart.call(this.queue, this.queue);
        this.uploadQueue();
    },
    onFileDragOver: function (evt) {
        var cfg = this.config;
        axdom("#" + cfg.dropBoxID).addClass("onDrop");
        axdom("#" + cfg.dropBoxID + "_dropZoneBox").show();
        /*axdom("#"+cfg.dropBoxID+"_dropZoneBox").css({height:axdom("#"+cfg.dropBoxID).innerHeight()-6, width:axdom("#"+cfg.dropBoxID).innerWidth()-6}); 라르게덴 2013-10-29 오후 3:21:45 */
        axdom("#" + cfg.dropBoxID + "_dropZoneBox").css({height: axdom("#" + cfg.dropBoxID).prop("scrollHeight") - 6, width: axdom("#" + cfg.dropBoxID).innerWidth() - 6});

        var dropZone = document.getElementById(cfg.dropBoxID + "_dropZoneBox");
        dropZone.addEventListener('dragleave', function (evt) {
            axdom("#" + cfg.dropBoxID).removeClass("onDrop");
            axdom("#" + cfg.dropBoxID + "_dropZoneBox").hide();
        }, false);

        evt.stopPropagation();
        evt.preventDefault();
        evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
    },
    onFileDrop: function (evt) {
        var cfg = this.config, quebox = axdom("#" + cfg.queueBoxID);
        evt.stopPropagation();
        evt.preventDefault();
        axdom("#" + cfg.dropBoxID).removeClass("onDrop");
        axdom("#" + cfg.dropBoxID + "_dropZoneBox").hide()

        var files = evt.dataTransfer.files; // FileList object.

        var hasSizeOverFile = false;
        var sizeOverFile;
        for (var i = 0, f; f = files[i]; i++) {
            if (f.size > cfg.uploadMaxFileSize) {
                hasSizeOverFile = true;
                sizeOverFile = f;
                break;
            }
        }
        if (hasSizeOverFile) cfg.onError("fileSize", {name: sizeOverFile.name, size: sizeOverFile.size});
        if (!cfg.file_types) cfg.file_types = ".";
        if (cfg.file_types == "*.*") cfg.file_types = "*/*";
        var fileTypeRe = new RegExp(cfg.file_types.replace(/\*/g, "[a-z]"), "ig");
        // todo : 업로드 갯수 제한 확인
        var uploadedCount = this.uploadedList.length;
        var queueCount = this.queue.length;
        for (var i = 0, f; f = files[i]; i++) {
            if (f.size <= cfg.uploadMaxFileSize && ( (new RegExp(cfg.file_types.replace(/\*/g, "[a-z]"), "ig")).test(f.type.toString()) || (cfg.file_types == "*/*" && f.type == "") )) {
                if ((uploadedCount + queueCount) < cfg.uploadMaxFileCount || cfg.uploadMaxFileCount == 0) {
                    uploadedCount++;
                    var itemID = 'AX' + AXUtil.timekey() + '_AX_' + i;
                    this.queue.push({_id_: itemID, file: f});
                    //큐박스에 아이템 추가
                    if (cfg.queueBoxAppendType == "prepend") quebox.prepend(this.getItemTag(itemID, f));
                    else quebox.append(this.getItemTag(itemID, f));

                    this.setLocalPreview(itemID, f);

                    quebox.find("#" + itemID).fadeIn();
                } else {
                    cfg.onError("fileCount");
                    break;
                }
            }
        }
        ;

        this.queueLive = true;
        if (cfg.onStart) cfg.onStart.call(this.queue);
        this.uploadQueue();
    },
    pauseQueue: function () {
        this.queueLive = false;
    },
    uploadQueue: function (fileUpload) {
        var cfg = this.config;

        if (cfg.fileSelectAutoUpload == false && fileUpload == undefined) {
            return;
        }

        if (cfg.fileSelectAutoUpload == false && fileUpload != undefined && this.swfu) {
            this.swfu.settings.allowUpload = true;
            this.swfu.startUpload();
        }

        if (!this.queueLive) return;
        if (this.queue.length == 0) {
            //trace("uploadEnd");
            this.uploadComplete();
            return;
        }

        var uploadQueue = this.uploadQueue.bind(this);
        var cancelUpload = this.cancelUpload.bind(this);
        var uploadSuccess = this.uploadSuccess.bind(this);
        var onClickDeleteButton = this.onClickDeleteButton.bind(this);
        var onClickFileTitle = this.onClickFileTitle.bind(this);

        var obj = this.queue.shift();
        this.uploadingObj = obj;
        var formData = new FormData();
        //서버로 전송해야 할 추가 파라미터 정보 설정
        axdom.each(cfg.uploadPars, function (k, v) {
            formData.append(k, v);
        });
        //formData.append(obj.file.name, obj.file);
        formData.append(cfg.uploadFileName, obj.file);

        //obj.id
        var itemID = obj._id_, quebox = axdom("#" + cfg.queueBoxID), itembox = axdom("#" + itemID);

        this.xhr = new XMLHttpRequest();
        this.xhr.open('POST', cfg.uploadUrl, true);
        this.xhr.onload = function (e) {
            var res = e.target.response;
            try {
                if (typeof res == "string") res = res.object();
            } catch (e) {
                trace(e);
                cancelUpload();
                return;
            }

            if (res.result == "err" || res.error) {
                alert("파일전송에 실패 하였습니다. 서버에서 에러가 리턴되었습니다. 콘솔창을 확인 하세요.");
                trace(res);
                axdom("#" + itemID).fadeOut("slow");
                cancelUpload();
                return;
            }

            if (cfg.isSingleUpload) {

                itembox.find(".AXUploadBtns").show();
                itembox.find(".AXUploadLabel").show();
                itembox.find(".AXUploadTit").show();

                itembox.find(".AXUploadProcess").hide();

                uploadSuccess(obj.file, itemID, res);
                // --------------------- s
                itembox.find(".AXUploadBtnsA").bind("click", function () {
                    onClickDeleteButton(itemID);
                });
                if (cfg.onClickUploadedItem) {
                    itembox.find(".AXUploadDownload").bind("click", function () {
                        onClickFileTitle(itemID);
                    });
                }

            }
            else {

                itembox.find(".AXUploadBtns").show();
                itembox.find(".AXUploadLabel").show();
                itembox.find(".AXUploadProcess").hide();

                var _res = (Object.isArray(res)) ? res[0] : res;
                /* Array 타입 예외처리 */

                if (_res[cfg.fileKeys.thumbPath]) {
                    itembox.find(".AXUploadIcon").css({
                        "background-image": "url('" + (_res[cfg.fileKeys.thumbPath] || "").dec() + "')"
                    }).addClass("AXUploadPreview").find("img.preview").remove();
                } else {
                    itembox.find(".AXUploadIcon").css({"background-image": "url()"});
                    itembox.find(".AXUploadIcon").html((_res[cfg.fileKeys.type] || "").dec().replace(".", ""));
                }

                uploadSuccess(obj.file, itemID, _res);

                // --------------------- s
                itembox.find(".AXUploadBtnsA").bind("click", function () {
                    onClickDeleteButton(itemID);
                });
                if (cfg.onClickUploadedItem) {
                    itembox.find(".AXUploadDownload").bind("click", function () {
                        onClickFileTitle(itemID);
                    });
                }
            }

            // --------------------- e
            uploadQueue(fileUpload);
        };
        var setUploadingObj = function () {
            this.uploadingObj = null;
        };
        var setUploadingObjBind = setUploadingObj.bind(this);
        this.xhr.upload.onprogress = function (e) {
            if (cfg.isSingleUpload) {
                if (e.lengthComputable) {
                    itembox.find(".AXUploadProcessBar").width(((e.loaded / e.total) * 100).round(2) + "%");
                }
            } else {
                if (e.lengthComputable) {
                    itembox.find(".AXUploadProcessBar").width(((e.loaded / e.total) * 100).round(2) + "%");
                }
            }
            if (e.lengthComputable) {
                if (e.loaded > e.total * 0.9) {
                    setUploadingObjBind();
                }
            }
        };
        this.xhr.send(formData);  // multipart/form-data
    },
    uploadSuccess: function (file, itemID, res) { // 업로드 아이템별 이벤트
        var cfg = this.config;
        var uploadedItem = {};
        uploadedItem[cfg.fileKeys._id_] = itemID;

        var _res = (Object.isArray(res)) ? res[0] : res;
        /* Array 타입 예외처리 */
        axdom.each(_res, function (k, v) {
            uploadedItem[k] = v;
        });
        if (cfg.queueBoxAppendType == "prepend") {
            //this.uploadedList.push(uploadedItem);
            this.uploadedList.splice(0, 0, uploadedItem);
        }
        else {
            this.uploadedList.push(uploadedItem);
            /*
             var uploadedList = [];
             uploadedList.push(uploadedItem);
             axdom.each(this.uploadedList, function(){
             uploadedList.push(this);
             });
             */
            //this.uploadedList = this.uploadedList.concat(uploadedItem);
        }
        axdom("#" + itemID).addClass("readyselect");
        if (cfg.onUpload) cfg.onUpload.call(uploadedItem, uploadedItem);
    },
    clearQueue: function () {
        //큐제거
        axdom.each(this.queue, function () {
            axdom("#" + this.id).hide(function () {
                axdom(this).remove();
            });
        });
        this.queue = [];
    },
    uploadComplete: function () {
        var cfg = this.config;
        //trace("uploadComplete");
        if (AXgetId(cfg.targetID + '_AX_files')) { // 2015-08-02 업로드 완료 방식 변경 체크중

            document.getElementById(cfg.targetID + '_AX_files').value = "";

            /*
             axdom('#'+cfg.targetID+'_AX_files').remove();

             var inputFileMultiple = 'multiple="multiple"';
             var inputFileAccept = cfg.file_types;
             if(cfg.isSingleUpload){
             inputFileMultiple = '';
             }
             if(!this.supportHtml5){
             inputFileMultiple = '';
             }

             var  po = ['	<input type="file" id="'+cfg.targetID+'_AX_files" '+inputFileMultiple+' accept="'+inputFileAccept+'" style="position:absolute;left:0px;top:0px;margin:0px;padding:0px;-moz-opacity: 0.0;opacity:.00;filter: alpha(opacity=0);" />'];
             axdom("#"+cfg.targetID+"_AX_selectorTD").prepend(po.join(''));
             axdom('#'+cfg.targetID+'_AX_files').css({width:axdom('#'+cfg.targetID+'_AX_selector').outerWidth(),height:axdom('#'+cfg.targetID+'_AX_selector').outerHeight()});

             var onFileSelect = this.onFileSelect.bind(this);

             setTimeout(function(){
             var fileSelector = document.getElementById(cfg.targetID+'_AX_files');
             if(AXUtil.browser.name == "ie" && AXUtil.browser.version < 9){

             }else{
             fileSelector.addEventListener('change', onFileSelect, false);
             }
             }, 100);
             */
        }
        if (cfg.queueBoxID) {
            this.multiSelector.collect();
        }
        if (cfg.onComplete) cfg.onComplete.call(this.uploadedList, this.uploadedList);
    },
    cancelUpload: function () {
        var cfg = this.config;
        if (this.swfu) {
            this.swfu.stopUpload();
            var stats = this.swfu.getStats();
            while (stats.files_queued > 0) {
                this.swfu.cancelUpload();
                stats = this.swfu.getStats();
            }
            stats = null;
            this.pauseQueue();
            this.clearQueue();
        } else {
            if (this.uploadingObj) {
                this.xhr.abort();
                axdom("#" + this.uploadingObj.id).remove();
                this.uploadingObj = null;
            }
            this.pauseQueue();
            this.clearQueue();
        }
        if (cfg.onComplete) cfg.onComplete.call(this.uploadedList, this.uploadedList);
    },
    onClickDeleteButton: function (itemID) {
        var cfg = this.config;
        if (cfg.isSingleUpload) {
            var myFile;
            axdom.each(this.uploadedList, function () {
                if (this[cfg.fileKeys._id_] == itemID) {
                    myFile = this;
                    return false;
                }
            });
            if (myFile) {
                if(this.deleteFile(myFile) != false){
                    this.init("reset");
                }
            }
            myFile = null;
        } else {
            var myFile;
            axdom.each(this.uploadedList, function () {
                if (this[cfg.fileKeys._id_] == itemID) {
                    myFile = this;
                    return false;
                }
            });
            if (myFile) {
                this.deleteFile(myFile);
                if (cfg.queueBoxID) {
                    this.multiSelector.clearSelects();
                }
            }
            myFile = null;
        }

    },
    onClickFileTitle: function (itemID) {
        var cfg = this.config;
        //trace(itemID);
        if (cfg.onClickUploadedItem) {
            var myFile;
            axdom.each(this.uploadedList, function () {
                if (this[cfg.fileKeys._id_] == itemID) {
                    myFile = this;
                    return false;
                }
            });
            cfg.onClickUploadedItem.call(myFile, myFile);
        }
    },
    deleteFile: function (file, onEnd, withOutServer) {
        var cfg = this.config;
        if (!onEnd) if (!confirm(AXConfig.AXUpload5.deleteConfirm)) return false;
        var removeUploadedList = this.removeUploadedList.bind(this);

        //trace(file);
        //{"id":"AXA220125984_AX_0", "name":"38540011%2EJPG", "type":"%2EJPG", "saveName":"0DA0316011A0001%2EJPG", "fileSize":"3172720", "uploadedPath":"%2F%5Ffile%2F1%2F", "thumbPath":"%2F%5Ffile%2F1%2FT%5F0DA0316011A0001%2EJPG"}
        if (file != undefined) {

            if (withOutServer == "withOutServer") {
                if (cfg.isSingleUpload) {
                    axdom('#' + cfg.targetID + '_AX_display').html(AXConfig.AXUpload5.uploadSelectTxt);
                } else {
                    axdom("#" + file[cfg.fileKeys._id_]).hide(function () {
                        axdom(this).remove();
                    });
                }
                removeUploadedList(file[cfg.fileKeys._id_]);
                if (cfg.onDelete) cfg.onDelete.call({file: file, response: withOutServer}, file);
                if (onEnd) onEnd();
                return;
            }

            var pars = [];
            var sendPars = "";
            axdom.each(file, function (k, v) {
                if (k != "downloadPath") pars.push(k + '=' + v);
            });

            if (typeof(cfg.deletePars) === "object") {
                axdom.each(cfg.deletePars, function (k, v) {
                    pars.push(k + '=' + v);
                });
                sendPars = pars.join("&");
            } else {
                sendPars = pars.join("&") + "&" + cfg.deletePars;
            }

            if (cfg.isSingleUpload) {
                axdom("#" + file[cfg.fileKeys._id_] + " .AXUploadBtns").hide();
            } else {
                axdom("#" + cfg.queueBoxID).find("#" + file[cfg.fileKeys._id_] + " .AXUploadBtns").hide();
            }

            new AXReq(cfg.deleteUrl, {
                method: (cfg.deleteMethod || "POST"),
                debug: false,
                pars: sendPars,
                onsucc: function (res) {
                    if ((res.result && res.result == AXConfig.AXReq.okCode) || (res.result == undefined && !res.error)) {

                        if (onEnd) setTimeout(onEnd, 1);



                        if (cfg.isSingleUpload) {
                            axdom('#' + cfg.targetID + '_AX_display').html(AXConfig.AXUpload5.uploadSelectTxt);
                        } else {
                            axdom("#" + file[cfg.fileKeys._id_]).hide(function () {
                                axdom(this).remove();
                            });
                        }
                        if (cfg.onDelete) cfg.onDelete.call({file: file, response: res}, file);
                        removeUploadedList(file[cfg.fileKeys._id_]);

                    } else {
                        if (cfg.isSingleUpload) {
                            axdom("#" + file[cfg.fileKeys._id_] + " .AXUploadBtns").show();
                        } else {
                            axdom("#" + cfg.queueBoxID).find("#" + file[cfg.fileKeys._id_] + " .AXUploadBtns").show();
                        }
                    }
                },
                onerr: function () {
                    if (cfg.isSingleUpload) {
                        axdom("#" + file[cfg.fileKeys._id_] + " .AXUploadBtns").show();
                    } else {
                        axdom("#" + cfg.queueBoxID).find("#" + file[cfg.fileKeys._id_] + " .AXUploadBtns").show();
                    }
                }
            });

        } else {
            trace("file undefined");
        }
    },
    deleteSelect: function (arg, withOutServer) {
        var cfg = this.config;
        if (arg == "all") {
            var deleteQueue = [];
            axdom.each(this.uploadedList, function () {
                deleteQueue.push(this[cfg.fileKeys._id_]);
            });
            this.ccDelete(deleteQueue, 0, withOutServer);
            deleteQueue = null;
        } else {
            if (!this.multiSelector) return;
            var selectObj = this.multiSelector.getSelects();
            if (selectObj.length > 0) {
                var deleteQueue = [];
                axdom.each(selectObj, function () {
                    deleteQueue.push(this.id);
                });
                this.ccDelete(deleteQueue, 0, withOutServer);
                deleteQueue = null;
            } else {
                alert("삭제하실 파일을 선택해 주세요");
            }
        }
    },
    ccDelete: function (deleteQueue, index, withOutServer) {
        var cfg = this.config;
        if (deleteQueue.length > index) {
            var myFile;
            axdom.each(this.uploadedList, function () {
                if (this[cfg.fileKeys._id_] == deleteQueue[index]) {
                    myFile = this;
                    return false;
                }
            });
            var ccDelete = this.ccDelete.bind(this);
            this.deleteFile(myFile, function () {
                ccDelete(deleteQueue, (index + 1), withOutServer);
            }, withOutServer);
        }
    },
    removeUploadedList: function (fid) {
        var cfg = this.config;
        var newUploadedList = [];
        axdom.each(this.uploadedList, function () {
            if (this[cfg.fileKeys._id_] != fid) newUploadedList.push(this);
        });
        this.uploadedList = newUploadedList;
        newUploadedList = null;
        if (this.config.onDeleteAll && this.uploadedList.length < 1)  this.config.onDeleteAll.call();

        this.multiSelector.collect();
    },
    showMSG: function (msg) {
        dialog.push(msg);
    },

    /**
     * @method AXUpload5.setUploadedList
     * @param {Array} files - example code 참고
     * @returns {type} name
     * @description
     * 업로드된 목록을 지정합니다.
     * @example
     ```
     ex1)
     var myFileList = [];
     var fileItem = {
    name		: 'fileName', //{string} - setConfig.fileKeys 에서 정의한 json key
    type		: 'fileType', //{string} - setConfig.fileKeys 에서 정의한 json key
    saveName	: 'saveName', //{string} - setConfig.fileKeys 에서 정의한 json key
    fileSize	: 'fileSize', //{string} - setConfig.fileKeys 에서 정의한 json key
    uploadedPath: 'filePath', //{string} - setConfig.fileKeys 에서 정의한 json key
    thumbPath	: 'thumbPath' //{string} - setConfig.fileKeys 에서 정의한 json key
};
     myFileList.push(fileItem);
     myUpload.setUploadedList(myFileList);

     ex2)
     var url = "loadFileList";               //해당 url 에서 예제1의 myFileList 구조에 맞는 json을 내려 줍니다.
     var pars = "dummy="+AXUtil.timekey();
     new AXReq(url, {pars:pars, onsucc:function(res){
	if(res.result == "ok"){
		myUpload.setUploadedList(res.ds);
	}else{
		alert(res.msg.dec());
	}
}});
     ```
     */
    setUploadedList: function (files) {
        var cfg = this.config;

        var getItemTag = this.getItemTag.bind(this);
        var onClickDeleteButton = this.onClickDeleteButton.bind(this);
        var onClickFileTitle = this.onClickFileTitle.bind(this);

        if (cfg.isSingleUpload) {
            this.uploadedList = [];
            var f;
            if (axdom.isArray(files)) {
                if (Object.isObject(files[0])) {
                    f = files[0];
                }
            } else {
                if (Object.isObject(files)) {
                    f = files;
                }
            }
            if (!f) return;
            if (!f[cfg.fileKeys._id_]) {
                if (f["id"]) {
                    f[cfg.fileKeys._id_] = f["id"];
                } else {
                    return;
                }
            }

            this.uploadedList.push(f);

            var itemID = (f[cfg.fileKeys._id_] || f["id"]), itembox;

            var uf = {
                id: itemID,
                name: f[cfg.fileKeys.name],
                size: f[cfg.fileKeys.fileSize]
            };

            itembox = axdom("#" + cfg.targetID + '_AX_display');
            if (cfg.queueBoxAppendType == "prepend") itembox.empty().prepend(this.getItemTag(itemID, uf));
            else itembox.empty().append(this.getItemTag(itemID, uf));


            itembox.find(".AXUploadBtns").show();
            itembox.find(".AXUploadLabel").show();
            itembox.find(".AXUploadTit").show();
            itembox.find(".AXUploadProcess").hide();

            itembox.find(".AXUploadBtnsA").bind("click", function () {
                onClickDeleteButton(itemID);
            });
            if (cfg.onClickUploadedItem) {
                itembox.find(".AXUploadDownload").bind("click", function () {
                    onClickFileTitle(itemID);
                });
            }

        }
        else {

            //this.uploadedList = files;
            this.uploadedList = [];
            var uploadedList = [];

            axf.each(files, function () {
                if (this) uploadedList.push(this);
            });
            this.uploadedList = uploadedList;

            if (cfg.queueBoxID) {
                var quebox = axdom("#" + cfg.queueBoxID);
                quebox.find('.dropZoneBox').empty();
                // @panic910
                quebox.remove('.AXUploadItem');
                axdom.each(this.uploadedList, function (fidx, f) {
                    if (f[cfg.fileKeys._id_] == undefined) {
                        if (f["id"]) {
                            f[cfg.fileKeys._id_] = f["id"];
                        } else {
                            trace([cfg.fileKeys._id_] + " key는 필수 항목 입니다.");
                            return false;
                        }
                    }
                    var itemID = f[cfg.fileKeys._id_], itembox;
                    var uf = {
                        id: itemID,
                        name: f[cfg.fileKeys.name],
                        size: f[cfg.fileKeys.fileSize]
                    };

                    if (cfg.queueBoxAppendType == "prepend") quebox.prepend(getItemTag(itemID, uf));
                    else quebox.append(getItemTag(itemID, uf));


                    itembox = axdom("#" + itemID);
                    itembox.fadeIn();

                    // --------------------- s
                    itembox.find(".AXUploadBtns").show();
                    itembox.find(".AXUploadLabel").show();
                    itembox.find(".AXUploadProcess").hide();

                    if (f[cfg.fileKeys.thumbPath]) {
                        itembox.find(".AXUploadIcon").css({
                            "background-image": "url('" + (f[cfg.fileKeys.thumbPath] || "").dec() + "')"
                        }).addClass("AXUploadPreview").find("img.preview").remove();
                    } else {
                        itembox.find(".AXUploadIcon").css({"background-image": "none"});
                        itembox.find(".AXUploadIcon").html((f[cfg.fileKeys.type] || "").dec().replace(".", ""));
                    }

                    itembox.find(".AXUploadBtnsA").bind("click", function () {
                        onClickDeleteButton(itemID);
                    });
                    if (cfg.onClickUploadedItem) {
                        itembox.find(".AXUploadDownload").bind("click", function () {
                            onClickFileTitle(itemID);
                        });
                    }
                    if (f['mainImage']) {
                        $("#" + f['id'] + "_AXUploadLabel_mainImageFile").show();
                    }
                    // --------------------- e

                    itembox.addClass("readyselect");
                });
                this.multiSelector.collect();
            }
        }
    },

    /**
     * @method AXUpload5.getUploadedList
     * @param {string} arg - ("param"|"json") 옵션에 따라 파라미터 타입 또는 JSObject 형태로 리턴 타입을 지정합니다.
     * @returns {String | JSObject}
     * @description
     * 업로드된 파일목록을 반환합니다.
     * @example
     ```
     var list = myUpload.getUploadedList("json");
     trace(list);
     toast.push(Object.toJSON(list));
     ```
     */
    getUploadedList: function (arg) {
        var cfg = this.config;

        if (cfg.uploadedListSort) {
            this.uploadedList = cfg.uploadedListSort.call(this, this.uploadedList);
        }

        if (arg == "param") {
            try {
                var pars = [];
                if (this.uploadedList) {
                    axdom.each(this.uploadedList, function () {
                        if (this != "") pars.push(axdom.param(this));
                    });
                }
                return pars.join("&");
                pars = null;
            } catch (e) {
                trace(e);
            }
        } else {
            return this.uploadedList;
        }
    },

    /**
     * @method AXUpload5.getSelectUploadedList
     * @param {string} arg - ("param"|"json") 옵션에 따라 파라미터 타입 또는 JSObject 형태로 리턴 타입을 지정합니다.
     * @returns {String | JSObject}
     * @description
     * 업로드된 파일 목록 중에서 선택된 아이템을 반환합니다.
     * @example
     ```
     var list = myUpload.getSelectUploadedList("json");
     trace(list);
     toast.push(Object.toJSON(list));
     ```
     */
    getSelectUploadedList: function (arg) {
        if (!this.multiSelector) return;
        var selectObj = this.multiSelector.getSelects();
        if (arg == "param") {
            var pars = [];
            axdom.each(this.uploadedList, function () {
                for (var a = 0; a < selectObj.length; a++) {
                    if (this.id == selectObj[a].id) pars.push(axdom.param(this));
                }
            });
            return pars.join("&");
            pars = null;
        } else {
            var pars = [];
            axdom.each(this.uploadedList, function () {
                for (var a = 0; a < selectObj.length; a++) {
                    if (this.id == selectObj[a].id) pars.push(this);
                }
            });
            return pars;
            pars = null;
        }
    },
    setUploadedFile: function (file) {

        if (!file) return;
        if (!file[this.config.fileKeys.id]) return;

        this.uploadedList = [];
        this.uploadedList.push(file);
        fileNameMaxLen = this.settings.fileNameMaxLen;
        var po = [];

        var dfileicon = this.settings.dfileicon;

        var UploadDisplay_id = this.settings.UploadDisplay_id;
        var onClickButton = this.onClickButton.bind(this);
        var AXfile = this.uploadedList.first();

        var po = [];
        po.push("<div class='AXFileTitleBlock'>");
        po.push("<a href='#AXexec' class='AXFileTitle'>" + AXfile.ti.dec() + "</a>");
        po.push("<a href='#AXexec' class='AXFileDelete'>X</a>");
        po.push("</div>");
        axdom("#" + UploadDisplay_id).html(po.join(''));
        axdom("#" + UploadDisplay_id).find(".AXFileDelete").bind("click", onClickButton);

        if (this.settings.onclick) {
            var onclick = this.settings.onclick.bind(this);
            axdom("#" + UploadDisplay_id).find(".AXFileTitle").bind("click", function () {
                onclick(AXfile);
            });
        }

        po = null;
        fileNameMaxLen = null;
    },
    getUploadedFile: function () {
        return this.uploadedList.first();
    },

    addKeyInUploadedListItem: function (objID, obj) {
        var uploadedList = this.uploadedList;

        axdom.each(uploadedList, function (idx, o) {
            if (o.id == objID) {
                axdom.each(obj, function (k, v) {
                    o[k] = v;
                });
            } else {
                axdom.each(obj, function (k, v) {
                    o[k] = '';
                });
            }
        });
    },

    setLocalPreview: function (itemID, file) {
        if (!this.supportHtml5 || this.config.isSingleUpload) {
            return;
        }
        if (!this.supportHtml5 || this.config.isSingleUpload) {
            return;
        }

        try {
            var previewId = itemID + "_preview";
            var preview = axf.getId(previewId);
            var reader = new FileReader(previewId);

            reader.onloadend = function () {
                try {
                    preview.src = reader.result;
                } catch (ex) {
                    trace(ex);
                }
            };

            if (file) {
                reader.readAsDataURL(file);
            }
        } catch (e) {
            trace(e);
        }
    },

    nothing: function () {

    }
});

// axdom extend
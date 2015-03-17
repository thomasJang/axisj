
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
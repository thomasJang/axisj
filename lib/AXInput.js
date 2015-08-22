/**
 * input element에 "search", "number", "money", "slider", "twinSlider", "selector", "switch", "segment", "date", "dateTime", "twinDate", "twinDateTime", "checked"등을 바인드 할 수 있도록 지원하는 클랙스 입니다.
 * @class AXInputConverter
 * @extends AXJ
 * @version v1.73
 * @author tom@axisj.com
 * @example
 ```
 "2012-11-05 오후 1:23:24",
 "2013-02-21 오후 5:47:22 슬라이드에 터치 이벤트 추가 - root",
 "2013-06-09 오후 10:31:34 bindNumber - onchange ",
 "2013-06-10 오후 1:37:41 unbinddate 메서드 추가",
 "2013-06-13 오후 7:26:49 bindDate - config 에 defaultDate 속성 확장",
 "2013-06-20 오전 12:49:06 twinbindDate - 아이디 체크 버그 픽스",
 "2013-08-28 오후 4:16:01 bindMoney - 성능개선",
 "2013-09-29 오전 12:39:49 bindSlider 연속호출 버그 패치 - tom",
 "2013-11-06 오후 1:13:46 bindMoney min, max, onChange 속성 구현 및 기타 버그 패치 - tom",
 "2013-11-28 오전 10:51:22 : tom - onsearch 옵션 추가 및 CSS 수정",
 "2013-12-09 오후 8:06:17 : tom - bindSelectorOptionsClick 버그픽스",
 "2013-12-16 오후 4:46:14 : tom - bindMoneyCheck",
 "2013-12-25 오후 3:26:54 : tom - bindTwinDate 기본값 초기화 버그픽스",
 "2013-12-27 오후 12:09:20 : tom - obj.inProgressReACT 기능 추가",
 "2014-01-02 오후 12:59:17 : tom - bindSelector AJAX 호출 중지 기능 추가",
 "2014-01-10 오후 5:07:44 : tom - event bind modify, fix",
 "2014-01-14 오후 3:43:06 : tom - bindSelector expandBox close 버그픽스",
 "2014-01-20 오후 4:16:56 : tom - bindDateTime 시간이 선택 해제되는 문제 해결",
 "2014-02-05 오후 4:32:34 : tom - bindSelector blur 이벤트 값 제거 문제 해결 / bindDate 문자열 자동완성 버그 픽스",
 "2014-02-06 오후 7:59:54 tom : jQuery 독립 우회 코드 변경",
 "2014-02-13 오후 5:39:21 tom : bindDate 월 이동 버그 픽스",
 "2014-02-14 오후 1:29:01 tom : bindSelector enter키 입력 후 blur 제거",
 "2014-02-17 오후 7:38:59 tom : bindDate 월선택 도구에서 1월 선택 버그 픽스",
 "2014-02-21 오후 4:52:24 tom : bindMoney 포커스 유지 기능 추가",
 "2014-02-25 오후 9:05:04 tom : earlierThan/ laterThan 설정 버그픽스",
 "2014-03-18 오후 1:58:57 tom : bindSelector 텍스트 변경 안 되었을 때 이벤트 처리 안하기",
 "2014-03-18 오후 9:44:57 tom : 날짜 입력 시 4자리 입력 후 포커스 아웃 시 당해년도 4자리 자동 포함, 날짜 입력 시 6자리 입력 후 포커스 아웃 시 당해년도 앞 2자리 자동 포함",
 "2014-04-03 오후 3:49:21 tom : bindDate ie 10 blur 버그 픽스",
 "2014-04-14 tom : 모바일 너비 지정 방식 변경",
 "2014-04-21 tom : bindDate 다중 오픈 되었을 때 닫기 버그 픽스",
 "2014-04-24 오후 7:33:25 tom : bindDate  개체에 리턴입력시  onBlur 연결",
 "2014-05-21 tom : resize event 상속"
 "2014-06-02 tom : change ajax data protocol check result or error key in data"
 "2014-07-14 tom : direct align when window resize "
 "2014-07-25 tom : support chaining 'method bind..'"
 "2014-08-05 improve : change action when onblur bindDate"
 "2014-08-06 bindMoney onkeyUp display pattern "
 "2014-08-07 add 'method' bindPattern "
 "2014-08-20 bindSelctor 속성에 direction : 'bottom' 추가"
 "2014-09-02 unbindInput 호출하면 이벤트 제거 구문 강화"
 "2014-09-10 bindInputDisabled 메소드 추가"
 "2014-09-15 alignAnchor bindTarget찾지 못하는 버그 픽스"
 "2014-09-19 tom : bindSelector enter입력을 타이핑하자마다 할 때 버그 픽스"
 "2014-10-13 tom : alignAnchor objID만 있어도 작동 하도록 수정"
 "2014-10-20 tom : bindTwinDateTime blure 이벤트 버그 픽스"
 "2014-10-30 tom : bindNumber, bindMoney 이벤트처리 변경"
 "2014-11-19 tom : bindMoney - 입력가능하게 패치"
 "2014-12-04 tom : bindDate input 포커스시 select 타이밍 변경"
 "2015-01-08 tom : bindDate expand:true 옵션추가 하면 bindDate와 동시에 달력 캘린더 표시되는 에디터모드 추가, bindDate key 입력 타이밍 개선"
 "2015-01-16 tom : bindMoney, bindNumber blur 이벤트 시 이상 작동 버그 픽스"
 "2015-01-26 tom : bindNumberCheck focus 추가 수정"
 "2015-02-21 tom : bindChecked 지원 - theme 파일 업데이트 필요"
 "2015-02-26 HJ.Park : bindSelector 옵션 ajaxPars 기본값 추가. 사용자가 ajaxPars 옵션을 선언하지 않아도 ajax로 selectorName 파라미터가 전송되도록 개선"
 "2015-03-05 tom : bindSegment 링크안에 사용자 태그 오류 해결"
 "2015-03-16 tom : bindSelector reserveKeys 설정 추가"
 "2015-03-17 tom : time입력 00:00 처리 가능 하도록 패치 (단 1월 1일 00:00은 예외)"
 "2015-04-13 tom : time입력 12:34와 같이 AM/PM경계값에 대한 패치"
 "2015-05-07 root : twindate customPos 속성 추가, align 후 위치조절 customPos : {top:10, left: 10}"
 "2015-05-09 HJ.Park : bindTwinDate 1월 1일을 선택하고 다시 1월 1일을 선택하면 이전 연도로 바뀌는 버그 수정 https://github.com/axisj-com/axisj/issues/557"
 "2015-05-17 HJ.Park : AXCalendar 기능 추가(buttonText, onBeforeShowDay, minDate, maxDate) https://github.com/axisj-com/axisj/issues/569"
 "2015-05-19 tom : bindSelector onsearch callBack함수 기능 추가와 reserveKeys 설정 기능 추가"
 "2015-05-21 root : bindDate customPos 속성 추가, align 후 위치조절 customPos : {top:10, left: 10}"
 "2015-05-30 tom : bindSelector AJAX옵션 확장"
 "2015-08-03 tom : date separator 기본값 오류 패치"
 "2015-08-20 tom : onsearch option focus 버그 픽스 "
 ```
 */

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
				} else {
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
		obj.bindTarget.trigger("change");

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
				pars = selectorName + "=" + (objVal||"").enc();
			} else if ((typeof pars).toLowerCase() == "string") {
				pars += "&" + selectorName + "=" + objVal.enc();
			} else if ((typeof pars).toLowerCase() == "object") {
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

		var separator = obj.config.separator || AXConfig.AXInput.dateSeparator || "-";

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
		var separator = obj.config.separator || AXConfig.AXInput.dateSeparator || "-";

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
				var separator = obj.config.separator || AXConfig.AXInput.dateSeparator || "-";
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
				var separator = obj.config.separator || AXConfig.AXInput.dateSeparator || "-";
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
				var separator = obj.config.separator || AXConfig.AXInput.dateSeparator || "-";
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
			var separator = obj.config.separator || AXConfig.AXInput.dateSeparator || "-";
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
		var separator = obj.config.separator || AXConfig.AXInput.dateSeparator || "-";

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


		var separator = obj.config.separator || AXConfig.AXInput.dateSeparator || "-";
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
			var separator = obj.config.separator || AXConfig.AXInput.dateSeparator || "-";
			var printDate = obj.nDate1.print("yyyy" + separator + "mm" + separator + "dd");
			if (obj.config.expandTime) {
				printDate += " " + obj.mycalendartime1.getTime();
			}
			axdom("#" + obj.config.startTargetID).val(printDate);
		} else {
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
			} else if (obj.config.selectType == "m") {
				axdom("#" + obj.config.startTargetID).val(obj.nDate1.print("yyyy" + separator + "mm"));
				axdom("#" + obj.config.startTargetID).trigger("change");
				axdom("#" + objID).val(obj.nDate2.print("yyyy" + separator + "mm"));
				axdom("#" + objID).trigger("change");
			} else {
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
			var separator = obj.config.separator || AXConfig.AXInput.dateSeparator || "-";
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
		var separator = obj.config.separator || AXConfig.AXInput.dateSeparator || "-";

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
		if(!this.id) this.id = "AXInput-" + axf.getUniqueId();
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
		if(!this.id) this.id = "AXInput-" + axf.getUniqueId();
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
		if(!this.id) this.id = "AXInput-" + axf.getUniqueId();
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
		if(!this.id) this.id = "AXInput-" + axf.getUniqueId();
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
		if(!this.id) this.id = "AXInput-" + axf.getUniqueId();
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
		if(!this.id) this.id = "AXInput-" + axf.getUniqueId();
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
		if(!this.id) this.id = "AXInput-" + axf.getUniqueId();
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
		if(!this.id) this.id = "AXInput-" + axf.getUniqueId();
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
		if(!this.id) this.id = "AXInput-" + axf.getUniqueId();
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
		if(!this.id) this.id = "AXInput-" + axf.getUniqueId();
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
		if(!this.id) this.id = "AXInput-" + axf.getUniqueId();
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
		if(!this.id) this.id = "AXInput-" + axf.getUniqueId();
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
		if(!this.id) this.id = "AXInput-" + axf.getUniqueId();
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
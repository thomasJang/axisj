/**
 * AXInputConverterPro
 * @class AXInputConverterPro
 * @extends AXJ
 * @version v1.4.7
 * @author tom@axisj.com
 * @logs
 2015-02-28 tom 공식 포함
 2015-05-01 tom bindPattern custom onfocus 에러픽스
 2015-05-06 tom bindTagSelector 탄생
 2015-05-08 tom bindTagSelector_setItem 메소드 추가
 2015-05-14 tom bintPattern phone 업데이트
 2015-05-27 tom time 패턴추가 https://github.com/axisj-com/axisj/issues/582
 2015-08-03 tom AXTagSelector focus 될 때 값이 없으면 검색안하도록 설정
 2015-08-03 tom reserveKeys 설정버그 픽스
 2015-08-06 tom obj.tagExpandBox.remove 버그 픽스
 2015-08-10 tom bindTagSelector.onsearch 확장
 2015-08-18 tom bindPattern onchange 이벤트 실행
 2015-08-29 tom alignAnchor 에서 tagSelector 사이즈 조정 기능 추가
 2015-11-04 tom datetime pattern hh:mm:ss 까지 입력되도록 확장
 *
 */

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


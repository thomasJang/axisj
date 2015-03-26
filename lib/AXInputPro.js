/**
 * AXInputConverterPro
 * @class AXInputConverterPro
 * @extends AXJ
 * @version v1.1
 * @author tom@axisj.com
 * @logs
 2015-02-28 tom 공식 포함
 *
 */

var AXInputConverterPro = Class.create(AXJ, {
	initialize: function (AXJ_super) {
		AXJ_super();
		this.objects = [];
		this.inputTypes = [
			{ type: "pattern" }
		];
		this.config.anchorClassName = "AXanchor";
		/* 모바일 반응 너비 */
		this.config.responsiveMobile = AXConfig.mobile.responsiveWidth;
	},
	init: function () {
		axdom(window).resize(this.alignAllAnchor.bind(this));
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
		}, 500);
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
				event.target.value = _this.bindPatternGetValue(objID, objSeq, (obj.originalValue || ""), "keyup");

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
						}else if(arguments[2].length < 9) {
							nval.push(arguments[2].substring(0, 3) + "-" + arguments[2].substr(3));
						}else if(arguments[2].length > 9){
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
/*!
 * axisJ Javascript Library Version 1.0
 * http://axisJ.com
 * 
 * 아래 소스의 라이선스는 axisJ.com 에서 확인 하실 수 있습니다.
 * http://axisJ.com/license
 * axisJ를 사용하시려면 라이선스 페이지를 확인 및 숙지 후 사용 하시기 바람니다. 무단 사용시 예상치 못한 피해가 발생 하실 수 있습니다.
 */

var AXInputConverter = Class.create(AXJ, {
	version: "AXInputConverter v1.22",
	author: "tom@axisj.com",
	logs: [
		"2012-11-05 오후 1:23:24",
		"2013-02-21 오후 5:47:22 슬라이드에 터치 이벤트 추가 - root",
		"2013-06-09 오후 10:31:34 bindNumber - onchange ",
		"2013-06-10 오후 1:37:41 unbinddate 메서드 추가",
		"2013-06-13 오후 7:26:49 bindDate - config 에 defaultDate 속성 확장",
		"2013-06-20 오전 12:49:06 twinbindDate - 아이디 체크 버그 픽스",
		"2013-08-28 오후 4:16:01 bindMoney - 성능개선"
	],
	initialize: function ($super) {
		$super();
		this.objects = [];
		this.inputTypes = [
			{ type: "search" }, { type: "number" }, { type: "money" }, { type: "slider" }, { type: "twinSlider" },
			{ type: "selector" }, { type: "switch" }, { type: "segment" },
			{ type: "date" }, { type: "dateTime" }, { type: "twinDate" }, { type: "twinDateTime" }
		];
		this.config.anchorClassName = "AXanchor";
		this.config.anchorPlaceHolderClassName = "AXanchorPlaceHolder";
		this.config.anchorSearchClassName = "AXanchorSearch";
		this.config.anchorNumberContainerClassName = "AXanchorNumberContainer";
		this.config.anchorIncreaseClassName = "AXanchorIncrease";
		this.config.anchorDecreaseClassName = "AXanchorDecrease";
		this.config.anchorSelectorHandleContainerClassName = "AXanchorSelectorHandleContainer";
		this.config.anchorSelectorHandleClassName = "AXanchorSelectorHandle";
		this.config.anchorSelectorExpandBoxClassName = "AXanchorSelectorExpandBox";
		this.config.anchorSelectorExpandScrollClassName = "AXanchorSelectorExpandScroll"
		this.config.anchorSliderBoxClassName = "AXanchorSliderBox";
		this.config.anchorSwitchBoxClassName = "AXanchorSwitchBox";
		this.config.anchorSegmentBoxClassName = "AXanchorSegmentBox";
		this.config.anchorDateHandleClassName = "AXanchorDateHandle";
		this.config.bindDateExpandBoxClassName = "AXbindDateExpandBox";
		this.config.bindTwinDateExpandBoxClassName = "AXbindTwinDateExpandBox";
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
			trace("bind 대상 ID가 없어 bind 처리할 수 없습니다.");
			return;
		}
		if (!$M(obj.id)) {
			trace("bind 대상이 없어 bind 처리할 수 없습니다.");
			return;
		}

		var objID = obj.id;
		var objSeq = null;

		$.each(this.objects, function (idx, O) {
			if (this.id == objID && this.isDel == true) objSeq = idx;
		});
		if (objSeq == null) {
			objSeq = this.objects.length;
			this.objects.push({ id: objID, anchorID: cfg.targetID + "_AX_" + objID, config: obj, bindType: obj.bindType });
		} else {
			this.objects[objSeq].isDel = undefined;
			this.objects[objSeq].config = obj;
		}

		this.appendAnchor(objID);

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
		}
	},
	unbind: function (obj) {
		var cfg = this.config;
		var removeAnchorId;
		var removeIdx;
		$.each(this.objects, function (idx, O) {
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
			$("#" + removeAnchorId).remove();
			//$("#" + obj.id).show();
			var objID = obj.id;
			var obj = this.objects[removeIdx];
			if (obj.documentclickEvent) $(document).unbind("click", obj.documentclickEvent);
			if (obj.inputKeyup) $("#" + objID).unbind("keydown", obj.inputKeyup);
			if (obj.inputChange) $("#" + objID).unbind("change", obj.inputChange);
			if (obj.bindSliderMouseMove) $(document.body).unbind("mousemove", obj.bindSliderMouseMove);
			if (obj.bindSliderMouseUp) $(document.body).unbind("mouseup", obj.bindSliderMouseUp);
			if (obj.bindSliderTouchMove) document.removeEventListener("touchmove", obj.bindSliderTouchMove, false);
			if (obj.bindSliderTouchEnd) document.removeEventListener("touchend", obj.bindSliderTouchEnd, false);
			if (obj.bindTwinSliderMouseMove) $(document.body).unbind("mousemove", obj.bindTwinSliderMouseMove);
			if (obj.bindTwinSliderMouseUp) $(document.body).unbind("mouseup", obj.bindTwinSliderMouseUp);

			if ($M(cfg.targetID + "_AX_" + objID + "_AX_expandBox")) {
				$("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox").remove(); // 개체 삭제 처리
				$("#" + cfg.targetID + "_AX_" + objID + "_AX_Handle").removeClass("on");
			}
		}
	},
	appendAnchor: function (objID) {
		var cfg = this.config;
		//trace("appendAnchor");
		var anchorNode = $("<div id=\"" + cfg.targetID + "_AX_" + objID + "\" class=\"" + cfg.anchorClassName + "\" style=\"display:none;\"></div>");
		var iobj = $("#" + objID);
		iobj.after(anchorNode);
		//var offSetParent = iobj.offsetParent();
		var iobjPosition = iobj.position();
		var l = iobjPosition.left, t = iobjPosition.top, w = 0, h = 0;

		var borderW = iobj.css("border-left-width").number();
		var borderH = iobj.css("border-top-width").number();
		var marginW = iobj.css("margin-left").number();
		var marginH = iobj.css("margin-top").number();
		l = l + marginW;
		//t = t;
		w = iobj.outerWidth();
		h = iobj.outerHeight();

		var css = { left: l, top: t, width: w, height: 0 };
		//AXUtil.alert(css);
		$("#" + cfg.targetID + "_AX_" + objID).css(css);
		$("#" + cfg.targetID + "_AX_" + objID).data("height", h);
	},
	alignAnchor: function (objID) {
		var cfg = this.config;
		var iobj = $("#" + objID);
		w = iobj.outerWidth();
		h = iobj.outerHeight();
		var css = { width: w, height: 0 };
		$("#" + cfg.targetID + "_AX_" + objID).css(css);
		$("#" + cfg.targetID + "_AX_" + objID).data("height", h);
	},
	bindSetValue: function (objID, value) {
		var cfg = this.config;
		var objSeq = null;
		$.each(this.objects, function (index, O) {
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
				//	this.bindSlider(objID, objSeq);
			} else if (obj.bindType == "twinSlider") {
				//	this.bindTwinSlider(objID, objSeq);
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

	/* onlyHolder ~~~~~~~~~~~~~~~ */
	bindPlaceHolder: function (objID, objSeq) {
		var cfg = this.config;

		// 브라우저 체크
		if (AXUtil.browser.name != "ie") return;
		if (AXUtil.browser.name == "ie" && AXUtil.browser.version > 9) return;

		var w = $("#" + cfg.targetID + "_AX_" + objID).width();
		var h = $("#" + cfg.targetID + "_AX_" + objID).data("height");

		var placeholder = $("#" + objID).attr("placeholder");
		if(placeholder == "undefined") placeholder = "";
		
		var po = ["<a href=\"#AXscript\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_PlaceHolder\" class=\"" + cfg.anchorPlaceHolderClassName + "\" style=\"left:0px;top:0px;width:" + w + "px;height:" + h + "px;line-height:" + h + "px;\">" + placeholder + "</a>"];
		//append to anchor
		$("#" + cfg.targetID + "_AX_" + objID).append(po.join(''));
		//bind handle
		var bindPlaceHolderKeyup = this.bindPlaceHolderSyncAnchor.bind(this);
		$("#" + objID).bind("keyup", function () {
			bindPlaceHolderKeyup(objID, objSeq);
		});
		bindPlaceHolderKeyup(objID, objSeq);
		$("#" + cfg.targetID + "_AX_" + objID + "_AX_PlaceHolder").bind("click", function () {
			//$("#"+objID).val("");
			$("#" + objID).focus();
			bindPlaceHolderKeyup(objID, objSeq);
		});
		//------------------------------------
	},
	bindPlaceHolderSyncAnchor: function (objID, objSeq) {
		var cfg = this.config;
		if ($("#" + objID).val().trim() == "") {
			//if($M(cfg.targetID+"_AX_"+objID).style.display == "none") 
			$("#" + cfg.targetID + "_AX_" + objID).show();
		} else {
			//if($M(cfg.targetID+"_AX_"+objID).style.display != "none") 
			$("#" + cfg.targetID + "_AX_" + objID).hide();
		}
	},
	/* onlyHolder ~~~~~~~~~~~~~~~ */

	/* search ~~~~~~~~~~~~~~~ */
	bindSearch: function (objID, objSeq) {
		var cfg = this.config;
		var w = $("#" + cfg.targetID + "_AX_" + objID).width();
		var h = $("#" + cfg.targetID + "_AX_" + objID).data("height");
		var placeholder = $("#" + objID).attr("placeholder");
		if(placeholder == undefined) placeholder = "";
		var po = [];

		if (AXUtil.browser.name == "ie" && AXUtil.browser.version < 10 && placeholder != "") {
			po.push("<a href=\"#AXscript\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_PlaceHolder\" class=\"" + cfg.anchorPlaceHolderClassName + "\" ");
			po.push(" style=\"left:0px;top:0px;width:" + w + "px;height:" + h + "px;line-height:" + h + "px;\">" + placeholder + "</a>");
		}
		po.push("<a href=\"#AXscript\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_Search\" class=\"" + cfg.anchorSearchClassName + "\" ");
		po.push(" style=\"right:0px;top:0px;width:" + h + "px;height:" + h + "px;\">Search</a>");
		//append to anchor
		$("#" + cfg.targetID + "_AX_" + objID).append(po.join(''));
		//bind handle
		var bindSearchKeyup = this.bindSearchSyncAnchor.bind(this);
		$("#" + objID).bind("keydown", function () {
			bindSearchKeyup(objID, objSeq);
		});
		bindSearchKeyup(objID, objSeq);
		$("#" + cfg.targetID + "_AX_" + objID + "_AX_Search").bind("click", function () {
			$("#" + objID).val("");
			$("#" + objID).focus();
			bindSearchKeyup(objID, objSeq);
		});
		//------------------------------------
	},
	bindSearchSyncAnchor: function (objID, objSeq) {
		var cfg = this.config;
		$("#" + cfg.targetID + "_AX_" + objID).show();

		if ($("#" + objID).val() == "") {
			//if($M(cfg.targetID+"_AX_"+objID).style.display != "none") $("#"+cfg.targetID+"_AX_"+objID).hide();
			$("#" + cfg.targetID + "_AX_" + objID + "_AX_Search").hide();
			$("#" + cfg.targetID + "_AX_" + objID + "_AX_PlaceHolder").show();
		} else {
			//if($M(cfg.targetID+"_AX_"+objID).style.display == "none") $("#"+cfg.targetID+"_AX_"+objID).fadeIn();
			$("#" + cfg.targetID + "_AX_" + objID + "_AX_Search").show();
			$("#" + cfg.targetID + "_AX_" + objID + "_AX_PlaceHolder").hide();
		}
	},
	/* number ~~~~~~~~~~~~~~~ */
	bindNumber: function (objID, objSeq) {
		var cfg = this.config;
		var h = $("#" + cfg.targetID + "_AX_" + objID).data("height");
		//trace(objID+"//"+h);
		var po = [];
		var UPh = parseInt((h - 2) / 2) - 1;
		var DNh = parseInt((h - 2) / 2) - 2;
		//trace(UPh+"//"+DNh);
		po.push("<div class=\"" + cfg.anchorNumberContainerClassName + "\" style=\"right:0px;top:0px;width:" + (h - 2) + "px;height:" + (h - 2) + "px;\">");
		po.push("	<a href=\"#AXscript\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_increase\" class=\"" + cfg.anchorIncreaseClassName + "\" style=\"right:0px;top:0px;width:" + h + "px;height:" + UPh + "px;\">increase</a>");
		po.push("	<a href=\"#AXscript\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_decrease\" class=\"" + cfg.anchorDecreaseClassName + "\" style=\"right:0px;top:" + (UPh + 1) + "px;width:" + h + "px;height:" + DNh + "px;\">decrease</a>");
		po.push("</div>");
		$("#" + cfg.targetID + "_AX_" + objID).append(po.join(''));
		$("#" + cfg.targetID + "_AX_" + objID).show();
		//alert("show");

		var bindNumberAdd = this.bindNumberAdd.bind(this);
		var bindNumberCheck = this.bindNumberCheck.bind(this);
		$("#" + cfg.targetID + "_AX_" + objID + "_AX_increase").bind("mousedown", function () {
			bindNumberAdd(objID, 1, objSeq);
			bindNumberCheck(objID, objSeq);
		});
		$("#" + cfg.targetID + "_AX_" + objID + "_AX_decrease").bind("mousedown", function () {
			bindNumberAdd(objID, -1, objSeq);
			bindNumberCheck(objID, objSeq);
		});
		$("#" + objID).bind("change", function () {
			bindNumberCheck(objID, objSeq);
		});
		$("#" + objID).bind("keydown", function (event) {
			if (event.keyCode == AXUtil.Event.KEY_UP) bindNumberAdd(objID, 1, objSeq);
			else if (event.keyCode == AXUtil.Event.KEY_DOWN) bindNumberAdd(objID, -1, objSeq);
		});
		$("#" + objID).bind("keyup", function (event) {
			bindNumberCheck(objID, objSeq);
		});
	},
	bindNumberAdd: function (objID, adder, objSeq) {
		var obj = this.objects[objSeq];
		var maxval = obj.config.max;
		var minval = obj.config.min;
		var nval = $("#" + objID).val().number();
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
		$("#" + objID).val(nval + adder);
	},
	bindNumberCheck: function (objID, objSeq) {
		var obj = this.objects[objSeq];
		var maxval = obj.config.max;
		var minval = obj.config.min;
		var nval;
		if ($("#" + objID).val() == "") {
			if (minval != undefined && minval != null) {
				nval = minval;
			} else {
				nval = $("#" + objID).val().number();
			}
		} else {
			nval = $("#" + objID).val().number();
		}

		if (maxval != undefined && maxval != null) {
			if ((nval) > maxval) {
				$("#" + objID).val("");
				try {
					toast.push("설정된 최대값을 넘어서는 입력입니다.");
				} catch (e) { }
			} else {
				if (minval != undefined && minval != null) {
					if ((nval) < minval) {
						$("#" + objID).val("");
						try {
							toast.push("설정된 최소값보다 작은 입력입니다.");
						} catch (e) { }
					} else {
						$("#" + objID).val(nval);
					}
				}
			}
		} else {
			if (minval != undefined && minval != null) {
				if ((nval) < minval) {
					$("#" + objID).val("");
					try {
						toast.push("설정된 최소값보다 작은 입력입니다.");
					} catch (e) { }
				}
			} else {
				$("#" + objID).val(nval);
			}
		}
		if (obj.config.onChange) {
			obj.config.onChange.call({ objID: objID, objSeq: objSeq, value: $("#" + objID).val() });
		}
	},
	/* money ~~~~~~~~~~~~~~~ */
	bindMoney: function (objID, objSeq) {
		$("#" + objID).css({ "text-align": "right" });
		
		var val = $("#" + objID).val().trim();
		if(val != "") val = $("#" + objID).val().number().money()
		$("#" + objID).val( val );
		$("#" + objID).bind("keyup", function (event) {
			var event = window.event || e;
		    // ignore tab & shift key 스킵 & ctrl
		    if (!event.keyCode || event.keyCode == 9 || event.keyCode == 16 || event.keyCode == 17) return;
			if (event.ctrlKey && event.keyCode == 65) return;
			if (event.keyCode != AXUtil.Event.KEY_DELETE && event.keyCode != AXUtil.Event.KEY_BACKSPACE && event.keyCode != AXUtil.Event.KEY_LEFT && event.keyCode != AXUtil.Event.KEY_RIGHT){
				var val = this.value.trim();
				if(val != "") val = this.value.number().money()
				this.value = val;
			}
		});
		$("#" + objID).bind("change", function (event) {
			var val = $("#" + objID).val().trim();
			if(val != "") val = $("#" + objID).val().number().money()
			this.value = val;
		});
	},
	/* selector ~~~~~~~~~~~~~~~ */
	bindSelector: function (objID, objSeq) {
		var cfg = this.config;
		var obj = this.objects[objSeq];
		var h = $("#" + cfg.targetID + "_AX_" + objID).data("height") - 2;
		var po = [];
		po.push("<div id=\"" + cfg.targetID + "_AX_" + objID + "_AX_HandleContainer\" class=\"bindSelectorNodes " + cfg.anchorSelectorHandleContainerClassName + "\" style=\"right:0px;top:0px;width:" + h + "px;height:" + h + "px;\">");
		po.push("	<a href=\"#AXscript\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_Handle\" class=\"bindSelectorNodes " + cfg.anchorSelectorHandleClassName + "\" style=\"right:0px;top:0px;width:" + h + "px;height:" + h + "px;\">expand</a>");
		po.push("</div>");
		$("#" + cfg.targetID + "_AX_" + objID).append(po.join(''));
		$("#" + cfg.targetID + "_AX_" + objID).show();

		var bindSelectorExpand = this.bindSelectorExpand.bind(this);
		var bindSelectorClose = this.bindSelectorClose.bind(this);

		$("#" + cfg.targetID + "_AX_" + objID + "_AX_Handle").bind("click", function (event) {
			//trace("click event");
			//bindSelectorExpand(objID, objSeq, true, event);
			if (!$M(cfg.targetID + "_AX_" + objID + "_AX_expandBox")) {
				$("#" + objID).focus();
			} else {
				bindSelectorExpand(objID, objSeq, true, event);
			}
		});
		$("#" + objID).bind("focus", function (event) {
			//trace("focus event");
			if (!$M(cfg.targetID + "_AX_" + objID + "_AX_expandBox")) {
				bindSelectorExpand(objID, objSeq, false, event);
			}
		});

		/*
		var bindSelectorInputChange = this.bindSelectorInputChange.bind(this);
		obj.inputChange = function(event){
			bindSelectorInputChange(objID, objSeq, event);
		}
		$("#"+objID).bind("change", obj.inputChange);
		*/
	},
	bindSelectorExpand: function (objID, objSeq, isToggle, event) {
		var cfg = this.config;
		var obj = this.objects[objSeq];

		//trace({objID:objID, objSeq:objSeq});

		if ($("#" + cfg.targetID + "_AX_" + objID).data("blurEvent")) {
			//blur event 발생 상태 메소드 작동 중지
			return;
		}

		//Selector Option box Expand
		if (isToggle) { // 활성화 여부가 토글 이면
			if ($M(cfg.targetID + "_AX_" + objID + "_AX_expandBox")) {
				$("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox").remove(); // 개체 삭제 처리
				$("#" + cfg.targetID + "_AX_" + objID + "_AX_Handle").removeClass("on");
				//비활성 처리후 메소드 종료
				return;
			}
		}
		$("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox").remove(); // 활성화 전에 개체 삭제 처리
		$("#" + cfg.targetID + "_AX_" + objID + "_AX_Handle").removeClass("on");
		//Expand Box 생성 구문 작성
		var anchorWidth = $("#" + cfg.targetID + "_AX_" + objID).width() - 2; // anchor width
		var anchorHeight = $("#" + cfg.targetID + "_AX_" + objID).data("height") - 1;
		var styles = [];
		styles.push("top:" + anchorHeight + "px");
		styles.push("width:" + anchorWidth + "px");
		styles.push("z-index:5100");

		var po = [];
		po.push("<div id=\"" + cfg.targetID + "_AX_" + objID + "_AX_expandBox\" class=\"bindSelectorNodes " + cfg.anchorSelectorExpandBoxClassName + "\" style=\"" + styles.join(";") + "\">");
		po.push("<div id=\"" + cfg.targetID + "_AX_" + objID + "_AX_expandScroll\" class=\"bindSelectorNodes " + cfg.anchorSelectorExpandScrollClassName + "\">");
		po.push("	<div class=\"AXLoadingSmall bindSelectorNodes\"></div>");
		po.push("</div>");
		po.push("</div>");
		$(document.body).append(po.join(''));
		$("#" + cfg.targetID + "_AX_" + objID + "_AX_Handle").addClass("on");

		var expandBox = $("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox");
		var expBoxHeight = expandBox.outerHeight();
		var offset = $("#" + cfg.targetID + "_AX_" + objID).offset();
		var css = {};
		css.top = offset.top + anchorHeight;
		css.left = offset.left;
		expandBox.css(css);

		//_AX_expandBox set options
		//trace(obj.config.ajaxUrl);
		if (obj.config.ajaxUrl) {
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
	},
	bindSelectorClose: function (objID, objSeq, event) {
		var obj = this.objects[objSeq];
		//trace("bindSelectorClose");
		var cfg = this.config;
		if ($M(cfg.targetID + "_AX_" + objID + "_AX_expandBox")) {
			$("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox").remove(); // 개체 삭제 처리
			$("#" + cfg.targetID + "_AX_" + objID + "_AX_Handle").removeClass("on");

			//비활성 처리후 메소드 종료

			$(document).unbind("click", obj.documentclickEvent);
			$("#" + objID).unbind("keydown", obj.inputKeyup);
			$("#" + objID).unbind("change", obj.inputChange);


			if (obj.config.isChangedSelect) {
				var myVal = "";
				if (obj.config.selectedObject) {
					myVal = obj.config.selectedObject.optionText.dec();
				}

				if (obj.config.appendable) {
					//trace(myVal);
					if (myVal != "") $("#" + objID).val(myVal);
				} else {
					$("#" + objID).val(myVal);
				}

				if (obj.config.onChange) {
					var sendObj = {
						targetID: objID,
						options: obj.config.options,
						selectedIndex: obj.config.selectedIndex,
						selectedOption: obj.config.selectedObject
					}
					obj.config.onChange.call(sendObj);
				}
				obj.config.isChangedSelect = false;
			}

			if (obj.config.selectedObject) this.bindSelectorInputChange(objID, objSeq);
			else {
				if (!obj.config.appendable) if (!obj.config.selectedObject) $("#" + objID).val("");
			}

			event.stopPropagation(); // disableevent
			return;
		}
	},
	bindSelectorSetOptions: function (objID, objSeq) {
		var obj = this.objects[objSeq];
		var cfg = this.config;
		var maxHeight = obj.config.maxHeight || 130;
		var optionPrintLength = obj.config.optionPrintLength || 100;
		if (!obj.config.options) return;

		var po = [];
		$.each(obj.config.options, function (index, O) {
			if (optionPrintLength != "") {
				if (index > optionPrintLength - 1) return false;
			}
			var descStr = (O.desc || O.optionDesc || "").dec();
			if (descStr != "") descStr = " - " + descStr;
			po.push("<a href=\"#AXexec\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_" + index + "_AX_option\" class=\"bindSelectorNodes\">" + O.optionText.dec() + descStr + "</a>");
		});
		$("#" + cfg.targetID + "_AX_" + objID + "_AX_expandScroll").html(po.join(''));

		var expandScrollHeight = $("#" + cfg.targetID + "_AX_" + objID + "_AX_expandScroll").height();
		if (expandScrollHeight > maxHeight) expandScrollHeight = maxHeight;
		$("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox").css({ height: expandScrollHeight + "px" });

		var bindSelectorOptionsClick = this.bindSelectorOptionsClick.bind(this);
		obj.documentclickEvent = function (event) {
			bindSelectorOptionsClick(objID, objSeq, event);
		}
		var bindSelectorKeyup = this.bindSelectorKeyup.bind(this);
		obj.inputKeyup = function (event) {
			bindSelectorKeyup(objID, objSeq, event);
		}
		$(document).unbind("click.AXInputSelector");
		$(document).bind("click.AXInputSelector", obj.documentclickEvent);
		$("#" + objID).unbind("keydown.AXInputSelector");
		$("#" + objID).bind("keydown.AXInputSelector", obj.inputKeyup);

		if (obj.myUIScroll) obj.myUIScroll.unbind();
		obj.myUIScroll = new AXScroll();
		obj.myUIScroll.setConfig({
			CT_className: "AXScrollSmall",
			targetID: cfg.targetID + "_AX_" + objID + "_AX_expandBox",
			scrollID: cfg.targetID + "_AX_" + objID + "_AX_expandScroll",
			touchDirection: false
		});

		if (obj.config.selectedIndex != undefined) {
			$("#" + cfg.targetID + "_AX_" + objID + "_AX_" + obj.config.selectedIndex + "_AX_option").addClass("on");
			obj.myUIScroll.focusElement(cfg.targetID + "_AX_" + objID + "_AX_" + obj.config.selectedIndex + "_AX_option"); //focus
			obj.config.focusedIndex = obj.config.selectedIndex;
		}

	},
	bindSelectorOptionsClick: function (objID, objSeq, event) {
		var obj = this.objects[objSeq];
		var cfg = this.config;

		/*
		var isSelectorClick = false;
		var eid = event.target.id.split(/_AX_/g);
		//trace(event.target.id);
		if(event.target.id == "") isSelectorClick = false;
		else{

			//if($(event.target).hasClass("bindSelectorNodes") || cfg.targetID == event.target.id) isSelectorClick = true;
			if(event.target.id == objID || (eid[0] == cfg.targetID && eid[1] == objID)){
				isSelectorClick = true;
			}
		}
		*/

		var eid = event.target.id.split(/_AX_/g);
		var eventTarget = event.target;
		var myTarget = this.getEventTarget({
			evt: eventTarget,
			until: function (evt, evtIDs) {
				return (evt.parentNode.tagName == "body") ? true : false;
			},
			find: function (evt, evtIDs) {
				if (evt.id == "") return false;
				if (evt.id == objID || $(evt).hasClass("bindSelectorNodes")) {
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
			if (eid.last() == "option") {
				var selectedIndex = eid[eid.length - 2];
				obj.config.selectedIndex = selectedIndex;
				obj.config.focusedIndex = selectedIndex;
				obj.config.selectedObject = obj.config.options[selectedIndex];

				obj.config.isChangedSelect = true;
				this.bindSelectorClose(objID, objSeq, event); // 값 전달 후 닫기
			}
		}
	},
	bindSelectorKeyup: function (objID, objSeq, event) {
		var obj = this.objects[objSeq];
		var cfg = this.config;

		if (obj.inProgress) return;

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
				$("#" + objID).blur();
				this.bindSelectorClose(objID, objSeq, event); // 닫기
				return;
			} else {
				//trace(obj.config.focusedIndex);
				obj.config.selectedObject = obj.config.options[obj.config.focusedIndex];
				obj.config.selectedIndex = obj.config.focusedIndex;
				obj.config.isChangedSelect = true;
				$("#" + objID).val(obj.config.selectedObject.optionText.dec());
				$("#" + objID).blur();
				this.bindSelectorClose(objID, objSeq, event); // 닫기
				return;
			}
		} else {
			//1. 반복입력 제	어 하기
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

		var objVal = $("#" + objID).val();
		var bindSelectorSearch = this.bindSelectorSearch.bind(this);

		if (obj.config.ajaxUrl) {
			// AJAX호출
			// 2. AJAX request
			// 3. AJAX 결과로 bindSelectorSetOptions 처리하기
			//this.bindSelectorSetOptions(objID, objSeq);
			// 4. 입력어로 bindSelectorSearch 실행하기
			obj.inProgress = true; //진행중 상태 변경
			var bindSelectorSetOptions = this.bindSelectorSetOptions.bind(this);
			var url = obj.config.ajaxUrl;
			var pars = obj.config.ajaxPars;
			var selectorName = obj.config.selectorName || $("#" + objID).attr("name");
			if (pars == "") {
				pars = selectorName + "=" + objVal.enc();
			} else if ((typeof pars).toLowerCase() == "string") {
				pars += "&" + selectorName + "=" + objVal.enc();
			} else if ((typeof pars).toLowerCase() == "object") {
				pars[selectorName] = objVal.enc();
			}

			new AXReq(url, {
				debug: false, pars: pars, onsucc: function (res) {
					if (res.result == AXUtil.ajaxOkCode) {
						obj.config.options = res.options;
						obj.config.selectedIndex = null;
						obj.config.focusedIndex = null;
						obj.config.selectedObject = null;
						obj.config.isChangedSelect = true;
						bindSelectorSetOptions(objID, objSeq);
						bindSelectorSearch(objID, objSeq, objVal);
					} else {
						AXUtil.alert(res);
					}
					obj.inProgress = false;
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
		if ($("#" + objID).val() != obj.config.selectedObject.optionText.dec()) {
			if (!obj.config.appendable) $("#" + objID).val("");
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

		if (!obj.config.options) return;
		trace(obj.config.options);

		var selectedIndex = null;
		$.each(obj.config.options, function (oidx, opt) {
			if (opt.optionValue == value) selectedIndex = oidx;
		});

		if (selectedIndex != null) {
			obj.config.focusedIndex = selectedIndex;
			obj.config.selectedObject = obj.config.options[selectedIndex];
			obj.config.isChangedSelect = true;
			$("#" + objID).val(obj.config.selectedObject.optionText.dec());

			if (obj.config.onChange) {
				var sendObj = {
					targetID: objID,
					options: obj.config.options,
					selectedIndex: obj.config.selectedIndex,
					selectedOption: obj.config.selectedObject
				}
				obj.config.onChange.call(sendObj);
			}
		}
	},
	bindSelectorSearch: function (objID, objSeq, kword) { // 입력된 값으로 검색 하기
		var obj = this.objects[objSeq];
		var cfg = this.config;
		if (kword == "") {
			this.bindSelectorSelectClear(objID, objSeq);
			return;
		}
		kword = kword.replace(/\//g, "\\\/");
		var sw = AXUtil.consonantKR((kword || "").dec());
		//trace(sw);
		eval("var reAt= /^" + sw + ".*/i");
		var ix = null;
		for (var a = 0; a < obj.config.options.length; a++) {
			if (reAt.test((obj.config.options[a].optionText || "").dec())) {
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
		if (obj.config.focusedIndex != undefined) {
			$("#" + cfg.targetID + "_AX_" + objID + "_AX_" + obj.config.focusedIndex + "_AX_option").removeClass("on");
		}
		$("#" + cfg.targetID + "_AX_" + objID + "_AX_" + index + "_AX_option").addClass("on");
		obj.config.focusedIndex = index;
		//obj.config.selectedObject = obj.config.options[index];
		//obj.config.isChangedSelect = true;
		//if(!changeValue) $("#"+objID).val(obj.config.selectedObject.optionText.dec());
		obj.myUIScroll.focusElement(cfg.targetID + "_AX_" + objID + "_AX_" + index + "_AX_option"); //focus
	},
	bindSelectorSelectClear: function (objID, objSeq) {
		var obj = this.objects[objSeq];
		var cfg = this.config;
		if (obj.config.selectedIndex != undefined) {
			$("#" + cfg.targetID + "_AX_" + objID + "_AX_" + obj.config.selectedIndex + "_AX_option").removeClass("on");
		}
		obj.config.selectedIndex = null;
		obj.config.focusedIndex = null;
		obj.config.selectedObject = null;
		obj.config.isChangedSelect = true;
	},
	/* slider ~~~~~~~~~~~~~~~ */
	bindSlider: function (objID, objSeq) {
		var cfg = this.config;
		var obj = this.objects[objSeq];
		var w = $("#" + cfg.targetID + "_AX_" + objID).width();
		var h = $("#" + cfg.targetID + "_AX_" + objID).data("height");
		var objVal = $("#" + objID).val().number().money();
		if (objVal.number() < obj.config.min.number()) objVal = obj.config.min;
		else if (objVal.number() > obj.config.max.number()) objVal = obj.config.max;

		if (!obj.config.unit) obj.config.unit = "";

		var po = [];
		po.push("<div id=\"" + cfg.targetID + "_AX_" + objID + "_AX_SliderBox\" class=\"" + cfg.anchorSliderBoxClassName + "\" style=\"left:0px;width:" + w + "px;height:" + h + "px;\">");
		po.push("	<a href=\"#AXexec\" class=\"AXanchorSliderMinTitle\">" + obj.config.min.number().money() + obj.config.unit + "</a>");
		po.push("	<div id=\"" + cfg.targetID + "_AX_" + objID + "_AX_SliderBar\" class=\"AXanchorSliderBar\">");
		po.push("		<div id=\"" + cfg.targetID + "_AX_" + objID + "_AX_SliderInside\" class=\"AXanchorSliderBarInside\"><div id=\"" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleTitle\" class=\"AXanchorSliderHandleTitle\">" + objVal.number().money() + obj.config.unit + "</div></div>");
		po.push("		<a href=\"#AXexec\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandle\" class=\"AXanchorSliderHandle\">handle</a>");
		po.push("	</div>");
		po.push("	<a href=\"#AXexec\" class=\"AXanchorSliderMaxTitle\">" + obj.config.max.number().money() + obj.config.unit + "</a>");
		po.push("</div>");

		//append to anchor
		$("#" + cfg.targetID + "_AX_" + objID).append(po.join(''));
		$("#" + cfg.targetID + "_AX_" + objID).css({ height: h + "px", "position": "relative", display: "inline-block", left: "auto", top: "auto" });
		//, background:"#eee"
		$("#" + cfg.targetID + "_AX_" + objID).show();
		$("#" + objID).hide();

		var maxTitleWidth = $("#" + cfg.targetID + "_AX_" + objID).find(".AXanchorSliderMaxTitle").outerWidth().number() + 10;
		var minTitleWidth = $("#" + cfg.targetID + "_AX_" + objID).find(".AXanchorSliderMinTitle").outerWidth().number() + 10;
		$("#" + cfg.targetID + "_AX_" + objID).find(".AXanchorSliderMinTitle").css({ width: minTitleWidth + "px" });
		$("#" + cfg.targetID + "_AX_" + objID).find(".AXanchorSliderMaxTitle").css({ width: maxTitleWidth + "px" });
		var sliderBarWidth = w - minTitleWidth - maxTitleWidth;
		$("#" + cfg.targetID + "_AX_" + objID).find(".AXanchorSliderBar").css({ width: sliderBarWidth + "px", left: minTitleWidth + "px", top: h / 2 + 2 });
		//------------------------------------
		$("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleTitle").css({ width: maxTitleWidth });
		obj.config._maxTitleWidth = maxTitleWidth;
		obj.config._handleWidth = $("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandle").width();
		obj.config._trackWidth = sliderBarWidth;
		this.bindSliderSetValue(objID, objSeq);

		var onmousedown = this.bindSliderMouseDown.bind(this);
		$("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandle").bind("mousedown", function () {
			onmousedown(objID, objSeq);
		});
		$("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandle").bind("dragstart", function (event) {
			event.stopPropagation(); // disable  event
			return false;
		});

		//add touch event
		if (document.addEventListener) {
			var ontouchstart = this.sliderTouchStart.bind(this);
			obj.bindSliderTouchStart = function (event) { ontouchstart(objID, objSeq); }

			$M(cfg.targetID + "_AX_" + objID + "_AX_SliderHandle").addEventListener("touchstart", obj.bindSliderTouchStart, false);
		}

	},
	bindSliderMouseDown: function (objID, objSeq) {
		var cfg = this.config;
		var obj = this.objects[objSeq];

		if (!obj.config.isMoving) {
			var bindSliderMouseMove = this.bindSliderMouseMove.bind(this);
			obj.bindSliderMouseMove = function (event) {
				bindSliderMouseMove(objID, objSeq, event);
			};
			var bindSliderMouseUp = this.bindSliderMouseUp.bind(this);
			obj.bindSliderMouseUp = function (event) {
				bindSliderMouseUp(objID, objSeq, event);
			};
			$(document.body).bind("mousemove", obj.bindSliderMouseMove);
			$(document.body).bind("mouseup", obj.bindSliderMouseUp);
			obj.config.isMoving = true;
		}

	},
	bindSliderMouseMove: function (objID, objSeq, event) {
		var cfg = this.config;
		var obj = this.objects[objSeq];

		var eX = event.pageX;
		var cX = $("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderBar").offset().left;

		var rX = eX - cX;

		var valueWidth = obj.config.max.number() - obj.config.min.number();
		var pixelWidth = obj.config._trackWidth;
		var objVal = (rX * valueWidth) / pixelWidth;
		var snap = obj.config.snap;
		if (!snap) snap = 1;

		if (snap >= 1) {
			objVal = (objVal.number() + obj.config.min.number()).round();
			objVal = (parseInt(objVal / (snap)) * (snap));
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
		$("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandle").css({ left: sX });
		$("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderInside").css({ width: rX });
		$("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleTitle").css({ left: stX });
		$("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleTitle").text(objVal.number().money() + obj.config.unit);
		$("#" + objID).val(objVal);
		if (obj.config.onChange) {
			obj.config.onChange(objID, objVal);
		}
	},
	bindSliderMouseUp: function (objID, objSeq, event) {
		var cfg = this.config;
		var obj = this.objects[objSeq];

		$(document.body).unbind("mousemove", obj.bindSliderMouseMove);
		$(document.body).unbind("mouseup", obj.bindSliderMouseUp);
		obj.config.isMoving = false;
	},
	bindSliderSetValue: function (objID, objSeq) {
		var cfg = this.config;
		var obj = this.objects[objSeq];
		var objVal = $("#" + objID).val();
		if (objVal.number() < obj.config.min.number()) objVal = obj.config.min;
		else if (objVal.number() > obj.config.max.number()) objVal = obj.config.max;
		var valueWidth = obj.config.max.number() - obj.config.min.number();
		var pixelWidth = obj.config._trackWidth;
		var pixelLeft = ((objVal - obj.config.min) * pixelWidth) / valueWidth;

		$("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandle").css({ left: pixelLeft - (obj.config._handleWidth / 2) });
		$("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderInside").css({ width: pixelLeft });
		$("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleTitle").css({ left: pixelLeft - (obj.config._maxTitleWidth / 2) });

		$("#" + objID).val(objVal);
	},

	sliderTouchStart: function (objID, objSeq) {
		//alert(objID+"_"+ objSeq);
		var cfg = this.config;
		var obj = this.objects[objSeq];

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
		var cX = $("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderBar").offset().left;
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
		$("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandle").css({ left: sX });
		$("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderInside").css({ width: rX });
		$("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleTitle").css({ left: stX });
		$("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleTitle").text(objVal.number().money() + obj.config.unit);
		$("#" + objID).val(objVal);
		if (obj.config.onChange) {
			obj.config.onChange(objID, objVal);
		}
	},
	sliderTouchEnd: function (objID, objSeq, event) {
		var cfg = this.config;
		var obj = this.objects[objSeq];

		if (document.addEventListener) {
			//$(document.body).unbind("touchmove", obj.bindSliderTouchMove);
			//$(document.body).unbind("touchend", obj.bindSliderTouchEnd);

			document.removeEventListener("touchmove", obj.bindSliderTouchMove, false);
			document.removeEventListener("touchend", obj.bindSliderTouchEnd, false);
		}
		obj.config.isMoving = false;
	},


	/* twinSlider ~~~~~~~~~~~~~~~ */
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
		var w = $("#" + cfg.targetID + "_AX_" + objID).width();
		var h = $("#" + cfg.targetID + "_AX_" + objID).data("height");
		var objValString = $("#" + objID).val();
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
		po.push("	<a href=\"#AXexec\" class=\"AXanchorSliderMinTitle\">" + obj.config.min.number().money() + obj.config.unit + "</a>");
		po.push("	<a href=\"#AXexec\" class=\"AXanchorSliderMaxTitle\">" + obj.config.max.number().money() + obj.config.unit + "</a>");
		po.push("	<div id=\"" + cfg.targetID + "_AX_" + objID + "_AX_SliderBar\" class=\"AXanchorSliderBar\">");
		po.push("		<div id=\"" + cfg.targetID + "_AX_" + objID + "_AX_SliderInside\" class=\"AXanchorSliderBarInside\"></div>");
		po.push("		<div id=\"" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMinTitle\" class=\"AXanchorSliderHandleMinTitle\">" + objVal.min.number().money() + obj.config.unit + "</div>");
		po.push("		<div id=\"" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMaxTitle\" class=\"AXanchorSliderHandleMaxTitle\">" + objVal.max.number().money() + obj.config.unit + "</div>");
		po.push("		<a href=\"#AXexec\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMin\" class=\"AXanchorSliderHandleMin\">handleMin</a>");
		po.push("		<a href=\"#AXexec\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMax\" class=\"AXanchorSliderHandleMax\">handleMax</a>");
		po.push("	</div>");
		po.push("</div>");

		//append to anchor
		$("#" + cfg.targetID + "_AX_" + objID).append(po.join(''));
		$("#" + cfg.targetID + "_AX_" + objID).css({ height: h + "px", "position": "relative", display: "inline-block", left: "auto", top: "auto" });
		//, background:"#eee"
		$("#" + cfg.targetID + "_AX_" + objID).show();
		$("#" + objID).hide();

		var maxTitleWidth = $("#" + cfg.targetID + "_AX_" + objID).find(".AXanchorSliderMaxTitle").outerWidth().number() + 10;
		var minTitleWidth = $("#" + cfg.targetID + "_AX_" + objID).find(".AXanchorSliderMinTitle").outerWidth().number() + 10;
		$("#" + cfg.targetID + "_AX_" + objID).find(".AXanchorSliderMinTitle").css({ width: minTitleWidth + "px" });
		$("#" + cfg.targetID + "_AX_" + objID).find(".AXanchorSliderMaxTitle").css({ width: maxTitleWidth + "px" });
		var sliderBarWidth = w - minTitleWidth - maxTitleWidth;
		$("#" + cfg.targetID + "_AX_" + objID).find(".AXanchorSliderBar").css({ width: sliderBarWidth + "px", left: minTitleWidth + "px", top: h / 2 + 2 });
		//------------------------------------
		$("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMinTitle").css({ width: maxTitleWidth });
		$("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMaxTitle").css({ width: maxTitleWidth });
		obj.config._maxTitleWidth = maxTitleWidth;
		obj.config._handleWidth = $("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMin").width();
		obj.config._trackWidth = sliderBarWidth;
		this.bindTwinSliderSetValue(objID, objSeq);

		var onmousedown = this.bindTwinSliderMouseDown.bind(this);
		$("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMin").bind("mousedown", function () {
			onmousedown(objID, objSeq, "min");
		});
		$("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMax").bind("mousedown", function () {
			onmousedown(objID, objSeq, "max");
		});

		$("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMin").bind("dragstart", function (event) {
			event.stopPropagation(); // disable  event
			return false;
		});
		$("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMax").bind("dragstart", function (event) {
			event.stopPropagation(); // disable  event
			return false;
		});

		//add touch event
		if (document.addEventListener) {
			var ontouchstart = this.twinSliderTouchStart.bind(this);
			obj.bindTwinSliderTouchStartMin = function (event) { ontouchstart(objID, objSeq, "min"); }
			obj.bindTwinSliderTouchStartMax = function (event) { ontouchstart(objID, objSeq, "max"); }

			$M(cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMin").addEventListener("touchstart", obj.bindTwinSliderTouchStartMin, false);
			$M(cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMax").addEventListener("touchstart", obj.bindTwinSliderTouchStartMax, false);
		}

	},
	bindTwinSliderMouseDown: function (objID, objSeq, handleName) {
		var cfg = this.config;
		var obj = this.objects[objSeq];

		if (!obj.config.isMoving) {
			var bindTwinSliderMouseMove = this.bindTwinSliderMouseMove.bind(this);
			obj.bindTwinSliderMouseMove = function (event) {
				bindTwinSliderMouseMove(objID, objSeq, event, handleName);
			};
			var bindTwinSliderMouseUp = this.bindTwinSliderMouseUp.bind(this);
			obj.bindTwinSliderMouseUp = function (event) {
				bindTwinSliderMouseUp(objID, objSeq, event, handleName);
			};
			$(document.body).bind("mousemove", obj.bindTwinSliderMouseMove);
			$(document.body).bind("mouseup", obj.bindTwinSliderMouseUp);
			obj.config.isMoving = true;
		}

	},
	bindTwinSliderMouseMove: function (objID, objSeq, event, handleName) {
		var cfg = this.config;
		var obj = this.objects[objSeq];

		var eX = event.pageX;
		var cX = $("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderBar").offset().left;

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
			$("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMin").css({ left: sX });
			$("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMinTitle").css({ left: stX });
			$("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMinTitle").text(objVal.number().money() + obj.config.unit);
			$("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderInside").css({ width: rX });
			$("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderInside").css({ left: obj.handleMinLeft, width: obj.handleMaxLeft - obj.handleMinLeft });
			//$("#"+objID).val(objVal);
			obj.vals.min = objVal;
		} else {
			if (objVal < obj.vals.min) {
				objVal = obj.vals.min;
				rX = obj.handleMinLeft;
			}
			var sX = rX;
			var stX = rX;
			obj.handleMaxLeft = rX;
			$("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMax").css({ left: sX });
			$("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMaxTitle").css({ left: stX });
			$("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMaxTitle").text(objVal.number().money() + obj.config.unit);
			$("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderInside").css({ left: obj.handleMinLeft, width: obj.handleMaxLeft - obj.handleMinLeft });
			//$("#"+objID).val(objVal);
			obj.vals.max = objVal;
		}
		var separator = obj.config.separator || "~";
		$("#" + objID).val(obj.vals.min + separator + obj.vals.max);
		if (obj.config.onChange) {
			obj.config.onChange(objID, obj.vals.min + separator + obj.vals.max);
		}
	},
	bindTwinSliderMouseUp: function (objID, objSeq, event) {
		var cfg = this.config;
		var obj = this.objects[objSeq];

		$(document.body).unbind("mousemove", obj.bindTwinSliderMouseMove);
		$(document.body).unbind("mouseup", obj.bindTwinSliderMouseUp);
		obj.config.isMoving = false;
	},
	bindTwinSliderSetValue: function (objID, objSeq) {
		var cfg = this.config;
		var obj = this.objects[objSeq];
		var objValString = $("#" + objID).val();
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

		$("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMin").css({ left: pixelMinLeft - (obj.config._handleWidth) });
		$("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMinTitle").css({ left: pixelMinLeft - (obj.config._maxTitleWidth) });

		$("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMax").css({ left: pixelMaxLeft });
		$("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMaxTitle").css({ left: pixelMaxLeft });

		obj.handleMinLeft = pixelMinLeft;
		obj.handleMaxLeft = pixelMaxLeft;
		$("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderInside").css({ left: pixelMinLeft, width: pixelMaxLeft - pixelMinLeft });

		$("#" + objID).val(obj.vals.min + separator + obj.vals.max);
	},

	//add touch event
	twinSliderTouchStart: function (objID, objSeq, handleName) {
		var cfg = this.config;
		var obj = this.objects[objSeq];

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
		var cX = $("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderBar").offset().left;
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
			$("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMin").css({ left: sX });
			$("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMinTitle").css({ left: stX });
			$("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMinTitle").text(objVal.number().money() + obj.config.unit);
			$("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderInside").css({ width: rX });
			$("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderInside").css({ left: obj.handleMinLeft, width: obj.handleMaxLeft - obj.handleMinLeft });
			//$("#"+objID).val(objVal);
			obj.vals.min = objVal;
		} else {
			if (objVal < obj.vals.min) {
				objVal = obj.vals.min;
				rX = obj.handleMinLeft;
			}
			var sX = rX;
			var stX = rX;
			obj.handleMaxLeft = rX;
			$("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMax").css({ left: sX });
			$("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMaxTitle").css({ left: stX });
			$("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderHandleMaxTitle").text(objVal.number().money() + obj.config.unit);
			$("#" + cfg.targetID + "_AX_" + objID + "_AX_SliderInside").css({ left: obj.handleMinLeft, width: obj.handleMaxLeft - obj.handleMinLeft });
			//$("#"+objID).val(objVal);
			obj.vals.max = objVal;
		}
		var separator = obj.config.separator || "~";
		$("#" + objID).val(obj.vals.min + separator + obj.vals.max);
		if (obj.config.onChange) {
			obj.config.onChange(objID, obj.vals.min + separator + obj.vals.max);
		}
	},
	twinSliderTouchEnd: function (objID, objSeq, event) {
		var cfg = this.config;
		var obj = this.objects[objSeq];

		document.removeEventListener("touchmove", obj.bindTwinSliderTouchMove, false);
		document.removeEventListener("touchend", obj.bindTwinSliderTouchEnd, false);

		obj.config.isMoving = false;
	},

	/* switch ~~~~~~~~~~~~~~~ */
	bindSwitch: function (objID, objSeq) {
		var cfg = this.config;
		var obj = this.objects[objSeq];
		var w = $("#" + cfg.targetID + "_AX_" + objID).width();
		var h = $("#" + cfg.targetID + "_AX_" + objID).data("height");
		var objVal = $("#" + objID).val();
		var switchValue = obj.config.on;
		if (objVal == switchValue) {
			obj.switchValue = "on";
		} else {
			switchValue = obj.config.off;
			obj.switchValue = "off";
		}
		$("#" + objID).val(switchValue);

		var po = [];
		po.push("<div id=\"" + cfg.targetID + "_AX_" + objID + "_AX_SwitchBox\" class=\"" + cfg.anchorSwitchBoxClassName + "\" style=\"left:0px;top:0px;width:" + w + "px;\">");
		po.push("<div id=\"" + cfg.targetID + "_AX_" + objID + "_AX_SwitchDisplay\" class=\"AXanchorSwitchDisplay\">" + switchValue + "</div>");
		po.push("<a href=\"#AXexec\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_SwitchHandle\" class=\"AXanchorSwitchHandle\">handle</a>");
		po.push("</div>");

		//append to anchor
		$("#" + cfg.targetID + "_AX_" + objID).append(po.join(''));
		$("#" + cfg.targetID + "_AX_" + objID).css({ height: h + "px", "position": "relative", display: "inline-block", left: "auto", top: "auto" });
		if (obj.switchValue == "on") {
			$("#" + cfg.targetID + "_AX_" + objID + "_AX_SwitchBox").addClass("on");
		}
		//, background:"#eee"
		$("#" + cfg.targetID + "_AX_" + objID).show();
		$("#" + objID).hide();

		var bindSwitchClick = this.bindSwitchClick.bind(this);
		obj.bindSwitchClick = function (event) {
			bindSwitchClick(objID, objSeq, event);
		};
		$("#" + cfg.targetID + "_AX_" + objID + "_AX_SwitchBox").bind("click", obj.bindSwitchClick);
		//$("#"+cfg.targetID + "_AX_"+objID+"_AX_SwitchHandle").bind("mousedown", obj.bindSwitchClick);
	},
	bindSwitchClick: function (objID, objSeq, event) {
		var cfg = this.config;
		var obj = this.objects[objSeq];
		if (obj.switchValue == "on") {
			$("#" + cfg.targetID + "_AX_" + objID + "_AX_SwitchBox").removeClass("on");
			obj.switchValue = "off";
			$("#" + objID).val(obj.config.off);
			$("#" + cfg.targetID + "_AX_" + objID + "_AX_SwitchDisplay").html(obj.config.off);

		} else {
			$("#" + cfg.targetID + "_AX_" + objID + "_AX_SwitchBox").addClass("on");
			obj.switchValue = "on";
			$("#" + objID).val(obj.config.on);
			$("#" + cfg.targetID + "_AX_" + objID + "_AX_SwitchDisplay").html(obj.config.on);
		}
		if (obj.config.onChange) {
			var sendObj = {
				targetID: objID,
				on: obj.config.on,
				off: obj.config.off,
				value: $("#" + objID).val()
			}
			obj.config.onChange.call(sendObj);
		}
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
		$("#" + objID).val(switchValue);

		if (obj.switchValue == "off") {
			$("#" + cfg.targetID + "_AX_" + objID + "_AX_SwitchBox").removeClass("on");
			obj.switchValue = "off";
			$("#" + objID).val(obj.config.off);
			$("#" + cfg.targetID + "_AX_" + objID + "_AX_SwitchDisplay").html(obj.config.off);
		} else {
			$("#" + cfg.targetID + "_AX_" + objID + "_AX_SwitchBox").addClass("on");
			obj.switchValue = "on";
			$("#" + objID).val(obj.config.on);
			$("#" + cfg.targetID + "_AX_" + objID + "_AX_SwitchDisplay").html(obj.config.on);
		}
		if (obj.config.onChange) {
			var sendObj = {
				targetID: objID,
				on: obj.config.on,
				off: obj.config.off,
				value: $("#" + objID).val()
			}
			obj.config.onChange.call(sendObj);
		}
	},
	/* segment ~~~~~~~~~~~~~~~ */
	bindSegment: function (objID, objSeq) {
		var cfg = this.config;
		var obj = this.objects[objSeq];
		var w = $("#" + cfg.targetID + "_AX_" + objID).width();
		var h = $("#" + cfg.targetID + "_AX_" + objID).data("height");
		var objVal = $("#" + objID).val();
		var segmentOptions = obj.config.options;
		obj.selectedSegmentIndex = null;
		$.each(segmentOptions, function (idx, seg) {
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
		$("#" + objID).val(obj.selectedSegment.optionValue);

		var handleWidth = (w / segmentOptions.length).round() - 2;
		var po = [];
		var theme = obj.config.theme || cfg.anchorSegmentBoxClassName;
		po.push("<div id=\"" + cfg.targetID + "_AX_" + objID + "_AX_SegmentBox\" class=\"" + theme + "\" style=\"left:0px;top:0px;width:" + w + "px;\">");
		$.each(segmentOptions, function (idx, seg) {
			var addClass = "";
			if (idx == 0) addClass = " segmentLeft";
			else if (idx == segmentOptions.length - 1) addClass = " segmentRight";
			if (obj.selectedSegmentIndex == idx) addClass += " on";
			if(seg.addClass) addClass += " " + seg.addClass;
			po.push("<a href=\"#AXexec\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_SegmentHandle_AX_" + idx + "\" class=\"AXanchorSegmentHandle" + addClass + "\" style=\"width:" + handleWidth + "px;\">" + seg.optionText + "</a>");
		});
		po.push("</div>");

		//append to anchor
		$("#" + cfg.targetID + "_AX_" + objID).append(po.join(''));
		$("#" + cfg.targetID + "_AX_" + objID).css({ height: h + "px", "position": "relative", display: "inline-block", left: "auto", top: "auto" });
		//$("#" + cfg.targetID + "_AX_" + objID).find(".AXanchorSegmentHandle").css({ height: (h - 2) + "px", "line-height": (h - 2) + "px" });
		//, background:"#eee"
		$("#" + cfg.targetID + "_AX_" + objID).show();
		$("#" + objID).hide();

		var bindSegmentClick = this.bindSegmentClick.bind(this);
		obj.bindSegmentClick = function (event) {
			bindSegmentClick(objID, objSeq, event);
		};

		$("#" + cfg.targetID + "_AX_" + objID + "_AX_SegmentBox").find(".AXanchorSegmentHandle").bind("click", obj.bindSegmentClick);
	},
	bindSegmentClick: function (objID, objSeq, event) {
		var cfg = this.config;
		var obj = this.objects[objSeq];
		var segmentOptions = obj.config.options;

		var eid = event.target.id.split(/_AX_/g);
		var eventTarget = event.target;
		var myTarget = this.getEventTarget({
			evt: eventTarget, evtIDs: eid,
			find: function (evt, evtIDs) { return ($(evt).hasClass("AXanchorSegmentHandle")) ? true : false; }
		});

		if (myTarget) {

			var seq = myTarget.id.split(/_AX_/g).last();
			if (obj.selectedSegmentIndex != seq) {
				$("#" + cfg.targetID + "_AX_" + objID + "_AX_SegmentHandle_AX_" + obj.selectedSegmentIndex).removeClass("on");
				$("#" + cfg.targetID + "_AX_" + objID + "_AX_SegmentHandle_AX_" + seq).addClass("on");
				obj.selectedSegmentIndex = seq;
				obj.selectedSegment = segmentOptions[seq];
			}
			//strace(obj.selectedSegment.optionValue);
			$("#" + objID).val(obj.selectedSegment.optionValue);
			//trace($("#"+objID).val());
			if (obj.config.onChange) {
				var sendObj = {
					targetID: objID,
					options: segmentOptions,
					selectedIndex: obj.selectedSegmentIndex,
					selectedOption: obj.selectedSegment
				};
				obj.config.onChange.call(sendObj);
			}

		}
	},
	bindSegmentSetValue: function (objID, objSeq, value) {
		var cfg = this.config;
		var obj = this.objects[objSeq];

		var selectedSegmentIndex = obj.selectedSegmentIndex;

		var objVal = value;
		var segmentOptions = obj.config.options;
		obj.selectedSegmentIndex = null;
		$.each(segmentOptions, function (idx, seg) {
			if (this.optionValue == objVal) {
				obj.selectedSegmentIndex = idx;
				obj.selectedSegment = seg;
			}
		});
		if (obj.selectedSegmentIndex == null) {
			obj.selectedSegmentIndex = 0;
			obj.selectedSegment = segmentOptions[0];
		}
		$("#" + objID).val(obj.selectedSegment.optionValue);

		if (selectedSegmentIndex != obj.selectedSegmentIndex) {
			$("#" + cfg.targetID + "_AX_" + objID + "_AX_SegmentHandle_AX_" + selectedSegmentIndex).removeClass("on");
			$("#" + cfg.targetID + "_AX_" + objID + "_AX_SegmentHandle_AX_" + obj.selectedSegmentIndex).addClass("on");
		}

		if (obj.config.onChange) {
			var sendObj = {
				targetID: objID,
				options: segmentOptions,
				selectedIndex: obj.selectedSegmentIndex,
				selectedOption: obj.selectedSegment
			};
			obj.config.onChange.call(sendObj);
		}

	},
	/* date ~~~~~~~~~~~~~~~~~ */
	bindDate: function (objID, objSeq) {
		var cfg = this.config;
		var obj = this.objects[objSeq];
		var h = $("#" + cfg.targetID + "_AX_" + objID).data("height");
		var po = [];
		po.push("<a href=\"#AXscript\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_dateHandle\" class=\"" + cfg.anchorDateHandleClassName + "\" style=\"right:0px;top:0px;width:" + h + "px;height:" + h + "px;\">handle</a>");
		$("#" + cfg.targetID + "_AX_" + objID).append(po.join(''));
		$("#" + cfg.targetID + "_AX_" + objID).show();

		var bindDateExpand = this.bindDateExpand.bind(this);
		$("#" + cfg.targetID + "_AX_" + objID + "_AX_dateHandle").bind("click", function (event) {
			bindDateExpand(objID, objSeq, true, event);
		});
		$("#" + objID).bind("focus", function (event) {
			$("#" + objID).select();
			/* 포거스 되었을 때 달력 도구 오픈 처리 방식 변경 2013-07-10 오전 11:09:40
			if(!$M(cfg.targetID + "_AX_"+objID+"_AX_expandBox")){
				bindDateExpand(objID, objSeq, false, event);
			}
			*/

		});

		var separator = (obj.config.separator) ? obj.config.separator : "-";
		$("#" + objID).bind("keyup", function (event) {

			if (event.keyCode != AXUtil.Event.KEY_BACKSPACE && event.keyCode != AXUtil.Event.KEY_DELETE && event.keyCode != AXUtil.Event.KEY_LEFT && event.keyCode != AXUtil.Event.KEY_RIGHT) {

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
					if (va.length == 4) {
						va = va + separator;
						_this.value = va;
					} else if (va.length == 6) {
						va = va.substr(0, 4) + separator + va.substr(4, 2) + separator;
						_this.value = va;
					} else if (va.length == 8) {
						va = va.substr(0, 4) + separator + va.substr(4, 2) + separator + va.substr(6, 2) + " ";
						_this.value = va;
					} else if (va.length == 10) {
						va = va.substr(0, 4) + separator + va.substr(4, 2) + separator + va.substr(6, 2) + " " + va.substr(8, 2) + ":";
						_this.value = va;
					} else if (va.length > 12) {
						va = va.substr(0, 4) + separator + va.substr(4, 2) + separator + va.substr(6, 2) + " " + va.substr(8, 2) + ":" + va.substr(10, 2);
						_this.value = va;
					}
				}
			}
		});

		var bindDateInputBlur = this.bindDateInputBlur.bind(this);
		$("#" + objID).bind("blur", function (event) {
			bindDateInputBlur(objID, objSeq, event);
		});
	},
	bindDateExpand: function (objID, objSeq, isToggle, event) {
		var cfg = this.config;
		var obj = this.objects[objSeq];
		var separator = (obj.config.separator) ? obj.config.separator : "-";

		//Selector Option box Expand
		if (isToggle) { // 활성화 여부가 토글 이면
			if ($M(cfg.targetID + "_AX_" + objID + "_AX_expandBox")) {
				$("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox").remove(); // 개체 삭제 처리
				$("#" + cfg.targetID + "_AX_" + objID + "_AX_Handle").removeClass("on");
				//비활성 처리후 메소드 종료
				return;
			}
		}
		$("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox").remove(); // 활성화 전에 개체 삭제 처리

		//Expand Box 생성 구문 작성
		var objVal = $("#" + objID).val();
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
		var po = [];
		po.push("<div id=\"" + cfg.targetID + "_AX_" + objID + "_AX_expandBox\" class=\"" + cfg.bindDateExpandBoxClassName + "\" style=\"z-index:5100;\">");
		po.push("	<div>");
		po.push("		<div class=\"dateControlBox\">");
		po.push("			<a href=\"#axexec\" class=\"yearbutton\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_controlYear\">" + myYear + "년</a>");
		po.push("			<a href=\"#axexec\" class=\"monthbutton\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_controlMonth\">" + myMonth + "월</a>");
		po.push("			<a href=\"#axexec\" class=\"prevbutton\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_expandPrev\">P</a>");
		po.push("			<a href=\"#axexec\" class=\"nextbutton\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_expandNext\">N</a>");
		po.push("		</div>");
		po.push("		<div class=\"dateDisplayBox\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_displayBox\"></div>");
		if (obj.config.expandTime) { //시간 선택 기능 확장시
			po.push("		<div class=\"timeDisplayBox\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_displayTimeBox\"></div>");
		}
		po.push("	</div>");
		po.push("</div>");

		$(document.body).append(po.join('')); // bindDateExpandBox append
		//$("#"+cfg.targetID + "_AX_" + objID+"_AX_Handle").addClass("on");

		// AXCalendar display
		obj.nDate = myDate;
		obj.mycalendar = new AXCalendar();
		obj.mycalendar.setConfig({
			targetID: cfg.targetID + "_AX_" + objID + "_AX_displayBox",
			basicDate: myDate
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
			if (myHH > 12) {
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
			$("#" + objID).val(printDate);
		} else if (obj.config.selectType == "m") {
			obj.mycalendarPageType = "m";
			obj.mycalendar.printMonthPage(myDate);
			printDate = myDate.print("yyyy" + separator + "mm");
			$("#" + objID).val(printDate);
		} else {
			obj.mycalendarPageType = "d";
			obj.mycalendar.printDayPage(myDate);
			printDate = myDate.print("yyyy" + separator + "mm" + separator + "dd");
			if (obj.config.expandTime) {
				printDate += " " + myDate.print("hh:mi");
			}
			$("#" + objID).val(printDate);
		}
		// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AXCalendar display

		// expandBox set Position ~~~~~~~~~~~~~~~~~~~~~~~~~
		var expandBox = $("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox");
		var expBoxWidth = expandBox.outerWidth();
		var expBoxHeight = expandBox.outerHeight();
		var offset = $("#" + cfg.targetID + "_AX_" + objID + "_AX_dateHandle").offset();
		var handleWidth = $("#" + cfg.targetID + "_AX_" + objID + "_AX_dateHandle").width();
		var handleHeight = $("#" + cfg.targetID + "_AX_" + objID + "_AX_dateHandle").height();

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
		var pBox = {width: pElement.width(), height: pElement.height()};
		
		var clientHeight = (AXUtil.docTD == "Q") ? document.body.scrollHeight : document.documentElement.scrollHeight;
		var clienWidth = (AXUtil.docTD == "Q") ? document.body.scrollWidth : document.documentElement.scrollWidth;
		if(clienWidth > pBox.width) pBox.width = clienWidth;
		if(clientHeight > pBox.height) pBox.height = clientHeight;
		var _box = {width:expandBox.outerWidth() + 10, height:expandBox.outerHeight() + 10};

		if((_box.height.number() + css.top.number()) > pBox.height){
			css.top = css.top - ((_box.height.number() + css.top.number()) - pBox.height);	
		}
		if(css.top < 0){
			css.top = 0;
		}

		if((_box.width.number() + css.left.number()) > pBox.width){
			css.left = css.left - ((_box.width.number() + css.left.number()) - pBox.width);	
		}
		if(css.left < 0){
			css.left = 0;
		}
		
		expandBox.css(css);

		// ~~~~~~~~~~~~~~~~~~~~~~~~~ expandBox set Position ~~~~~~~~~~~~~~~~~~~~~~~~~

		var bindDateExpandBoxClick = this.bindDateExpandBoxClick.bind(this);
		obj.documentclickEvent = function (event) {
			bindDateExpandBoxClick(objID, objSeq, event);
		}
		var bindDateKeyup = this.bindDateKeyup.bind(this);
		obj.inputKeyup = function (event) {
			bindDateKeyup(objID, objSeq, event);
		}
		if (obj.config.selectType == "y") {
			$("#" + cfg.targetID + "_AX_" + objID + "_AX_controlYear").css({ left: "70px" });
			$("#" + cfg.targetID + "_AX_" + objID + "_AX_controlMonth").hide();
		}
		$(document).bind("click", obj.documentclickEvent);
		$("#" + objID).bind("keydown", obj.inputKeyup);
	},
	bindDateExpandClose: function (objID, objSeq, event) {
		var obj = this.objects[objSeq];
		var cfg = this.config;

		if ($M(cfg.targetID + "_AX_" + objID + "_AX_expandBox")) {
			//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
			var objVal = $("#" + objID).val();

			if (objVal == "") {

			} else {
				var separator = (obj.config.separator) ? obj.config.separator : "-";
				if (obj.config.selectType == "y") {
					$("#" + objID).val(obj.nDate.print("yyyy"));
				} else if (obj.config.selectType == "m") {
					$("#" + objID).val(obj.nDate.print("yyyy" + separator + "mm"));
				} else {
					//$("#"+objID).val(obj.nDate.print("yyyy"+separator+"mm"+separator+"dd"));
					printDate = obj.nDate.print("yyyy" + separator + "mm" + separator + "dd");
					if (obj.config.expandTime) {
						printDate += " " + obj.mycalendartime.getTime();
					}
					$("#" + objID).val(printDate);
				}
			}

			if (obj.config.onChange) {
				obj.config.onChange.call({
					objID: objID,
					value: $("#" + objID).val()
				});
			}

			$("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox").remove(); // 개체 삭제 처리

			//비활성 처리후 메소드 종료
			$(document).unbind("click", obj.documentclickEvent);
			$("#" + objID).unbind("keydown", obj.inputKeyup);

			event.stopPropagation(); // disableevent
			return;
		}
	},
	bindDateInputBlur: function (objID, objSeq, event) {
		var obj = this.objects[objSeq];
		var cfg = this.config;
		var objVal = $("#" + objID).val();

		if (objVal == "") {

		} else {
			var clearDate = false;
			var nDate = (obj.nDate || new Date());
			var va = $("#" + objID).val().replace(/\D/gi, ""); //숫자 이외의 문자를 제거 합니다.
			if (va.search(/\d+/g) == -1) {
				clearDate = true;
			}

			if (clearDate) {
				$("#" + objID).val("");
			} else {
				var separator = (obj.config.separator) ? obj.config.separator : "-";
				if (obj.config.selectType == "y") {

					var yy = va.left(4).number();
					if (yy == 0) yy = nDate.getFullYear();
					if (yy < 1000) yy += 2000;
					var mm = nDate.getMonth();
					var dd = nDate.getDate();
					obj.nDate = new Date(yy, mm, dd, 12);

					$("#" + objID).val(obj.nDate.print("yyyy"));

				} else if (obj.config.selectType == "m") {

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
					obj.nDate = new Date(yy, mm, dd, 12);

					$("#" + objID).val(obj.nDate.print("yyyy" + separator + "mm"));

				} else {
					var needAlert = false;
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
					obj.nDate = new Date(yy, mm, dd, 12);
					/*
		            trace(obj.nDate.getFullYear() != yy.number());
		            trace(obj.nDate.getMonth() != mm.number());
		            trace(obj.nDate.getDate() != dd.number());
		            */
					if (obj.nDate.getFullYear() != yy.number()
		            || obj.nDate.getMonth() != mm.number()
		            || obj.nDate.getDate() != dd.number()) {
						needAlert = true;
						obj.nDate = new Date();
					}

					printDate = obj.nDate.print("yyyy" + separator + "mm" + separator + "dd");
					if (obj.config.expandTime) {
						try {
							printDate += " " + obj.mycalendartime.getTime();
						} catch (e) {
							if (va.length > 11) { // hh,mm
								var hh = va.substr(8, 2).number();
								var mm = va.substr(10, 2).number();
							} else if (va.length > 9) {
								var hh = va.substr(8, 2).number();
								var mm = "00";
							} else {
								var hh = "12";
								var mm = "00";
							}
							printDate += " " + hh + ":" + mm;
						}
					}

					if (needAlert) {
						AXUtil.alert("날짜 형식이 올바르지 않습니다.");
					}
					$("#" + objID).val(printDate);
				}
			}
		}

		if (obj.config.onChange) {
			obj.config.onChange.call({
				objID: objID,
				value: $("#" + objID).val()
			});
		}

		$("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox").remove(); // 개체 삭제 처리

		//비활성 처리후 메소드 종료
		$(document).unbind("click", obj.documentclickEvent);
		$("#" + objID).unbind("keydown", obj.inputKeyup);

		event.stopPropagation(); // disableevent
		return;

	},
	unbindDate: function (obj) {
		var cfg = this.config;
		var objID = obj.id;
		var objSeq = null;

		$.each(this.objects, function (oidx, O) {
			if (this.id == objID) {
				objSeq = oidx;
				return false;
			}
		});

		if (objSeq != null) {
			var obj = this.objects[objSeq];

			$("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox").remove(); // 개체 삭제 처리

			//비활성 처리후 메소드 종료
			$(document).unbind("click", obj.documentclickEvent);
			$("#" + objID).unbind("keydown", obj.inputKeyup);
		}

		var collect = [];
		var removeAnchorId;
		$.each(this.objects, function () {
			if (this.id != obj.id) collect.push(this);
			else {
				removeAnchorId = this.anchorID;
			}
		});
		this.objects = collect;

		$("#" + removeAnchorId).remove();

	},
	bindDateTimeChange: function (objID, objSeq, myTime) {
		var obj = this.objects[objSeq];
		var cfg = this.config;
		//alert(myTime);
		var separator = (obj.config.separator) ? obj.config.separator : "-";
		var printDate = obj.nDate.print("yyyy" + separator + "mm" + separator + "dd");
		if (obj.config.expandTime) {
			printDate += " " + obj.mycalendartime.getTime();
		}
		$("#" + objID).val(printDate);
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
				$("#" + objID).val(obj.nDate.print("yyyy" + separator + "mm" + separator + "dd"));
				this.bindDateExpandClose(objID, objSeq, event);
			} else if (ename == "month") {
				//trace(ename);
				//trace(ids[ids.length-2]);
				var myMonth = ids[ids.length - 2].number() - 1;
				if (obj.config.selectType == "m") {
					var yy = nDate.getFullYear();
					var dd = nDate.getDate();
					obj.nDate = new Date(yy, myMonth, dd);
					//$("#"+objID).val(obj.nDate.print("yyyy"+separator+"mm"));
					this.bindDateExpandClose(objID, objSeq, event);
				} else {
					var yy = nDate.getFullYear();
					var dd = nDate.getDate();
					obj.nDate = new Date(yy, myMonth, dd);
					this.bindDateChangePage(objID, objSeq, obj.nDate, "d");
				}
			} else if (ename == "year") {
				//trace(ename);
				//trace(ids[ids.length-2]);
				var myYear = ids[ids.length - 2];
				if (obj.config.selectType == "y") {
					var mm = nDate.getMonth();
					var dd = nDate.getDate();
					obj.nDate = new Date(myYear, mm, dd);
					//$("#"+objID).val(obj.nDate.print("yyyy"));
					this.bindDateExpandClose(objID, objSeq, event);
				} else {
					var mm = nDate.getMonth();
					var dd = nDate.getDate();
					obj.nDate = new Date(myYear, mm, dd);
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
			$("#" + cfg.targetID + "_AX_" + objID + "_AX_controlYear").html(myYear + "년");
		} else if (pageType == "y") {
			obj.mycalendarPageType = "y";
			obj.nDate = setDate;
			obj.mycalendar.printYearPage(setDate.getFullYear());
			var myYear = setDate.getFullYear();
			$("#" + cfg.targetID + "_AX_" + objID + "_AX_controlYear").html(myYear + "년");
		} else {
			obj.mycalendarPageType = "d";
			obj.nDate = setDate;
			obj.mycalendar.printDayPage(setDate);
			var myYear = setDate.getFullYear();
			var myMonth = (setDate.getMonth() + 1).setDigit(2);
			$("#" + cfg.targetID + "_AX_" + objID + "_AX_controlYear").html(myYear + "년");
			$("#" + cfg.targetID + "_AX_" + objID + "_AX_controlMonth").html(myMonth + "월");
		}

		if (obj.config.selectType == "y") {
			$("#" + objID).val(obj.nDate.print("yyyy"));
		} else if (obj.config.selectType == "m") {
			$("#" + objID).val(obj.nDate.print("yyyy" + separator + "mm"));
		} else {
			//$("#"+objID).val(obj.nDate.print("yyyy"+separator+"mm"+separator+"dd"));
			var printDate = obj.nDate.print("yyyy" + separator + "mm" + separator + "dd");
			if (obj.config.expandTime) {
				printDate += " " + obj.mycalendartime.getTime();
			}
			$("#" + objID).val(printDate);
		}
	},
	/* twinDate ~~~~~~~~~~~~~~~~~ */
	bindTwinDate: function (objID, objSeq, option) {
		var cfg = this.config;
		var obj = this.objects[objSeq];
		var h = $("#" + cfg.targetID + "_AX_" + objID).data("height");
		var po = [];
		po.push("<a href=\"#AXscript\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_dateHandle\" class=\"" + cfg.anchorDateHandleClassName + "\" style=\"right:0px;top:0px;width:" + h + "px;height:" + h + "px;\">handle</a>");
		$("#" + cfg.targetID + "_AX_" + objID).append(po.join(''));
		$("#" + cfg.targetID + "_AX_" + objID).show();

		var bindDateExpand = this.bindTwinDateExpand.bind(this);

		$("#" + cfg.targetID + "_AX_" + objID + "_AX_dateHandle").bind("click", function (event) {
			bindDateExpand(objID, objSeq, true, event);
		});
		$("#" + objID).bind("focus", function (event) {
			$("#" + objID).select();
			/*
			if(!$M(cfg.targetID + "_AX_"+objID+"_AX_expandBox")){
				bindDateExpand(objID, objSeq, false, event);
			}
			*/
		});
		$("#" + obj.config.startTargetID).bind("focus", function (event) {
			$("#" + obj.config.startTargetID).select();
			/*
			if(!$M(cfg.targetID + "_AX_"+objID+"_AX_expandBox")){
				bindDateExpand(objID, objSeq, false, event);
			}
			*/
		});


		var separator = (obj.config.separator) ? obj.config.separator : "-";
		$("#" + objID + ", #" + obj.config.startTargetID).bind("keyup", function (event) {
			//alert(this.value);
			if (event.keyCode != AXUtil.Event.KEY_BACKSPACE && event.keyCode != AXUtil.Event.KEY_DELETE && event.keyCode != AXUtil.Event.KEY_LEFT && event.keyCode != AXUtil.Event.KEY_RIGHT) {

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
					if (va.length == 4) {
						va = va + separator;
						_this.value = va;
					} else if (va.length == 6) {
						va = va.substr(0, 4) + separator + va.substr(4, 2) + separator;
						_this.value = va;
					} else if (va.length == 8) {
						va = va.substr(0, 4) + separator + va.substr(4, 2) + separator + va.substr(6, 2) + " ";
						_this.value = va;
					} else if (va.length == 10) {
						va = va.substr(0, 4) + separator + va.substr(4, 2) + separator + va.substr(6, 2) + " " + va.substr(8, 2) + ":";
						_this.value = va;
					} else if (va.length > 12) {
						va = va.substr(0, 4) + separator + va.substr(4, 2) + separator + va.substr(6, 2) + " " + va.substr(8, 2) + ":" + va.substr(10, 2);
						_this.value = va;
					}
				}
			}
		});


		var bindTwinDateInputBlur = this.bindTwinDateInputBlur.bind(this);
		$("#" + objID).bind("blur", function (event) {
			bindTwinDateInputBlur(objID, objSeq, event, 2);
		});
		$("#" + obj.config.startTargetID).bind("blur", function (event) {
			bindTwinDateInputBlur(objID, objSeq, event, 1);
		});
	},
	bindTwinDateExpand: function (objID, objSeq, isToggle, event) {
		var cfg = this.config;
		var obj = this.objects[objSeq];
		var separator = (obj.config.separator) ? obj.config.separator : "-";

		//Selector Option box Expand
		if (isToggle) { // 활성화 여부가 토글 이면
			if ($M(cfg.targetID + "_AX_" + objID + "_AX_expandBox")) {
				$("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox").remove(); // 개체 삭제 처리
				$("#" + cfg.targetID + "_AX_" + objID + "_AX_Handle").removeClass("on");
				//비활성 처리후 메소드 종료
				return;
			}
		}
		$("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox").remove(); // 활성화 전에 개체 삭제 처리
		//$("#"+cfg.targetID + "_AX_" + objID+"_AX_Handle").removeClass("on");

		//Expand Box 생성 구문 작성
		var objVal1 = $("#" + obj.config.startTargetID).val();
		var objVal2 = $("#" + objID).val();

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
				objVal1 = objVal1 + separator + "01";
			} else {
				objVal1Empty = true;
			}
			if (objVal2 != "") {
				objVal2 = objVal2 + separator + "01";
			}
		}
		if (AXUtil.isEmpty(objVal1)) {
			objVal1 = "";
			objVal1Empty = true;
		}

		var myDate1 = (objVal1Empty) ? objVal1.date(separator).add(-1, "m") : objVal1.date(separator);
		var myDate2 = objVal2.date(separator);
		var myYear1 = myDate1.getFullYear();
		var myYear2 = myDate2.getFullYear();
		var myMonth1 = (myDate1.getMonth() + 1).setDigit(2);
		var myMonth2 = (myDate2.getMonth() + 1).setDigit(2);
		var po = [];
		po.push("<div id=\"" + cfg.targetID + "_AX_" + objID + "_AX_expandBox\" class=\"" + cfg.bindTwinDateExpandBoxClassName + "\" style=\"z-index:5100;\">");
		po.push("	<div>");
		po.push("		<table cellpadding=\"0\" cellspacing=\"0\">");
		po.push("			<tbody>");
		po.push("				<tr>");
		po.push("					<td style=\"padding-right:3px;\">");
		po.push("					<div class=\"dateTypeName\">START</div>");
		po.push("					<div class=\"dateControlBox\">");
		po.push("						<a href=\"#axexec\" class=\"yearbutton\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_controlYear1\">" + myYear1 + "년</a>");
		po.push("						<a href=\"#axexec\" class=\"monthbutton\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_controlMonth1\">" + myMonth1 + "월</a>");
		po.push("						<a href=\"#axexec\" class=\"prevbutton\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_expandPrev1\">P</a>");
		po.push("						<a href=\"#axexec\" class=\"nextbutton\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_expandNext1\">N</a>");
		po.push("					</div>");
		po.push("					<div class=\"dateDisplayBox\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_displayBox1\"></div>");
		if (obj.config.expandTime) { //시간 선택 기능 확장시
			po.push("					<div class=\"timeDisplayBox\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_displayTimeBox1\"></div>");
		}
		po.push("					</td>");
		po.push("					<td style=\"padding-left:3px;\">");
		po.push("					<div class=\"dateTypeName\">END</div>");
		po.push("					<div class=\"dateControlBox\">");
		po.push("						<a href=\"#axexec\" class=\"yearbutton\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_controlYear2\">" + myYear2 + "년</a>");
		po.push("						<a href=\"#axexec\" class=\"monthbutton\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_controlMonth2\">" + myMonth2 + "월</a>");
		po.push("						<a href=\"#axexec\" class=\"prevbutton\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_expandPrev2\">P</a>");
		po.push("						<a href=\"#axexec\" class=\"nextbutton\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_expandNext2\">N</a>");
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
		po.push("		<input type=\"button\" value=\"OK\" class=\"AXButton Classic W70\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_closeButton\">");
		po.push("	</div>");
		po.push("</div>");
		$(document.body).append(po.join('')); // bindDateExpandBox append
		//$("#"+cfg.targetID + "_AX_" + objID+"_AX_Handle").addClass("on");

		// AXCalendar display
		obj.nDate1 = myDate1;
		obj.mycalendar1 = new AXCalendar();
		obj.mycalendar1.setConfig({
			targetID: cfg.targetID + "_AX_" + objID + "_AX_displayBox1",
			basicDate: myDate1
		});

		obj.nDate2 = myDate2;
		obj.mycalendar2 = new AXCalendar();
		obj.mycalendar2.setConfig({
			targetID: cfg.targetID + "_AX_" + objID + "_AX_displayBox2",
			basicDate: myDate2
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
			$("#" + obj.config.startTargetID).val(printDate1);
			$("#" + objID).val(printDate2);
		} else if (obj.config.selectType == "m") {
			obj.mycalendarPageType = "m";
			obj.mycalendar1.printMonthPage(myDate1);
			obj.mycalendar2.printMonthPage(myDate2);
			printDate1 = myDate1.print("yyyy" + separator + "mm");
			printDate2 = myDate2.print("yyyy" + separator + "mm");
			$("#" + obj.config.startTargetID).val(printDate1);
			$("#" + objID).val(printDate2);
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
			$("#" + obj.config.startTargetID).val(printDate1);
			$("#" + objID).val(printDate2);
		}
		// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AXCalendar display

		// expandBox set Position ~~~~~~~~~~~~~~~~~~~~~~~~~
		var expandBox = $("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox");
		var expBoxWidth = expandBox.outerWidth();
		var expBoxHeight = expandBox.outerHeight();
		var offset = $("#" + cfg.targetID + "_AX_" + objID + "_AX_dateHandle").offset();
		var handleWidth = $("#" + cfg.targetID + "_AX_" + objID + "_AX_dateHandle").width();
		var handleHeight = $("#" + cfg.targetID + "_AX_" + objID + "_AX_dateHandle").height();



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
		var pBox = {width: pElement.width(), height: pElement.height()};

		var clientHeight = (AXUtil.docTD == "Q") ? document.body.scrollHeight : document.documentElement.scrollHeight;
		var clienWidth = (AXUtil.docTD == "Q") ? document.body.scrollWidth : document.documentElement.scrollWidth;
		if(clienWidth > pBox.width) pBox.width = clienWidth;
		if(clientHeight > pBox.height) pBox.height = clientHeight;
		var _box = {width:expandBox.outerWidth() + 10, height:expandBox.outerHeight() + 10};

		if((_box.height.number() + css.top.number()) > pBox.height){
			css.top = css.top - ((_box.height.number() + css.top.number()) - pBox.height);	
		}
		if(css.top < 0){
			css.top = 0;
		}

		if((_box.width.number() + css.left.number()) > pBox.width){
			css.left = css.left - ((_box.width.number() + css.left.number()) - pBox.width);	
		}
		if(css.left < 0){
			css.left = 0;
		}
		
		expandBox.css(css);

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
			$("#" + cfg.targetID + "_AX_" + objID + "_AX_controlYear1").css({ left: "70px" });
			$("#" + cfg.targetID + "_AX_" + objID + "_AX_controlMonth1").hide();
			$("#" + cfg.targetID + "_AX_" + objID + "_AX_controlYear2").css({ left: "70px" });
			$("#" + cfg.targetID + "_AX_" + objID + "_AX_controlMonth2").hide();
		}

		$(document).bind("click", obj.documentclickEvent);
		$("#" + objID).bind("keydown", obj.inputKeyup);
		var bindTwinDateExpandClose = this.bindTwinDateExpandClose.bind(this);
		$("#" + cfg.targetID + "_AX_" + objID + "_AX_closeButton").bind("click", function (event) {
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
			$("#" + obj.config.startTargetID).val(printDate);
		} else {
			var separator = (obj.config.separator) ? obj.config.separator : "-";
			var printDate = obj.nDate2.print("yyyy" + separator + "mm" + separator + "dd");
			if (obj.config.expandTime) {
				printDate += " " + obj.mycalendartime2.getTime();
			}
			$("#" + objID).val(printDate);
		}
	},
	bindTwinDateExpandClose: function (objID, objSeq, event) {
		var obj = this.objects[objSeq];
		var cfg = this.config;
		//trace("bindTwinDateExpandClose");
		if ($M(cfg.targetID + "_AX_" + objID + "_AX_expandBox")) {

			//$("#"+cfg.targetID+"_AX_"+objID+"_AX_Handle").removeClass("on");
			//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
			var objVal1 = $("#" + obj.config.startTargetID).val();
			var objVal2 = $("#" + objID).val();
			var separator = (obj.config.separator) ? obj.config.separator : "-";

			if (obj.config.selectType == "y") {
				if (objVal1.length < 4) $("#" + obj.config.startTargetID).val(obj.nDate1.print("yyyy"));
				else {
					objVal1 = objVal1.left(4);
					$("#" + obj.config.startTargetID).val(objVal1);
				}
				if (objVal2.length < 4) $("#" + objID).val(obj.nDate2.print("yyyy"));
				else {
					objVal2 = objVal2.left(4);
					$("#" + objID).val(objVal2);
				}
			} else if (obj.config.selectType == "m") {
				$("#" + obj.config.startTargetID).val(obj.nDate1.print("yyyy" + separator + "mm"));
				$("#" + objID).val(obj.nDate2.print("yyyy" + separator + "mm"));
			} else {
				printDate1 = obj.nDate1.print("yyyy" + separator + "mm" + separator + "dd");
				printDate2 = obj.nDate2.print("yyyy" + separator + "mm" + separator + "dd");
				if (obj.config.expandTime) {
					printDate1 += " " + obj.mycalendartime1.getTime();
					printDate2 += " " + obj.mycalendartime2.getTime();
				}
				$("#" + obj.config.startTargetID).val(printDate1);
				$("#" + objID).val(printDate2);
			}

			$("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox").remove(); // 개체 삭제 처리

			if (obj.config.onChange) {
				obj.config.onChange.call({
					ST_objID: obj.config.startTargetID,
					ED_objID: objID,
					ST_value: $("#" + obj.config.startTargetID).val(),
					ED_value: $("#" + objID).val()
				});
			}

			//비활성 처리후 메소드 종료
			$(document).unbind("click", obj.documentclickEvent);
			$("#" + objID).unbind("keydown", obj.inputKeyup);

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
					$("#" + obj.config.startTargetID).val(printDate);
					obj.mycalendar1.dayPageSetDay(obj.nDate1);
				} else {
					obj.nDate2 = ids[ids.length - 2].date();
					var printDate = obj.nDate2.print("yyyy" + separator + "mm" + separator + "dd");
					if (obj.config.expandTime) {
						printDate += " " + obj.mycalendartime2.getTime();
					}
					$("#" + objID).val(printDate);
					obj.mycalendar2.dayPageSetDay(obj.nDate2);
				}

				if (obj.nDate1.diff(obj.nDate2) < 0) {
					if (boxType == "displayBox1") {
						obj.nDate2 = obj.nDate1;
						var printDate = obj.nDate2.print("yyyy" + separator + "mm" + separator + "dd");
						if (obj.config.expandTime) {
							printDate += " " + obj.mycalendartime2.getTime();
						}
						$("#" + objID).val(printDate);
						obj.mycalendar2.dayPageSetDay(obj.nDate2);
					} else {
						obj.nDate1 = obj.nDate2;
						var printDate = obj.nDate1.print("yyyy" + separator + "mm" + separator + "dd");
						if (obj.config.expandTime) {
							printDate += " " + obj.mycalendartime1.getTime();
						}
						$("#" + obj.config.startTargetID).val(printDate);
						obj.mycalendar1.dayPageSetDay(obj.nDate1);
					}
				}

			} else if (ename == "month") {
				var myMonth = ids[ids.length - 2].number() - 1;
				if (boxType == "displayBox1") {
					if (obj.config.selectType == "m") {
						var yy = nDate1.getFullYear();
						var dd = nDate1.getDate();
						obj.nDate1 = new Date(yy, myMonth, dd);
						var printDate = obj.nDate1.print("yyyy" + separator + "mm");
						$("#" + obj.config.startTargetID).val(printDate);
						//this.bindTwinDateExpandClose(objID, objSeq, event);
						obj.mycalendar1.monthPageSetMonth(obj.nDate1);
					} else {
						var yy = nDate1.getFullYear();
						var dd = nDate1.getDate();
						obj.nDate1 = new Date(yy, myMonth, dd);
						//trace("start ----");
						this.bindTwinDateChangePage(objID, objSeq, 1, obj.nDate1, "d");
					}
				} else {
					if (obj.config.selectType == "m") {
						var yy = nDate2.getFullYear();
						var dd = nDate2.getDate();
						obj.nDate2 = new Date(yy, myMonth, dd);
						var printDate = obj.nDate2.print("yyyy" + separator + "mm");
						$("#" + objID).val(printDate);
						obj.mycalendar2.monthPageSetMonth(obj.nDate2);
					} else {
						var yy = nDate2.getFullYear();
						var dd = nDate2.getDate();
						obj.nDate2 = new Date(yy, myMonth, dd);
						this.bindTwinDateChangePage(objID, objSeq, 2, obj.nDate2, "d");
					}
				}

				if (obj.config.selectType == "m") {
					if (obj.nDate1.diff(obj.nDate2) < 0) {
						obj.nDate2 = obj.nDate1;
						var printDate = obj.nDate2.print("yyyy" + separator + "mm");
						$("#" + objID).val(printDate);
						$("#" + obj.config.startTargetID).val(printDate);
						obj.mycalendar2.monthPageSetMonth(obj.nDate2);
					}
				}


			} else if (ename == "year") {
				var myYear = ids[ids.length - 2];
				if (boxType == "displayBox1") {
					if (obj.config.selectType == "y") {
						var mm = nDate1.getMonth();
						var dd = nDate1.getDate();
						obj.nDate1 = new Date(myYear, mm, dd);
						var printDate = obj.nDate1.print("yyyy");
						$("#" + obj.config.startTargetID).val(printDate);
						//this.bindTwinDateExpandClose(objID, objSeq, event);
						obj.mycalendar1.yearPageSetYear(obj.nDate1);
					} else {
						var mm = nDate1.getMonth();
						var dd = nDate1.getDate();
						obj.nDate1 = new Date(myYear, mm, dd);
						this.bindTwinDateChangePage(objID, objSeq, 1, obj.nDate1, "m");
					}
				} else {
					if (obj.config.selectType == "y") {
						var mm = nDate2.getMonth();
						var dd = nDate2.getDate();
						obj.nDate2 = new Date(myYear, mm, dd);
						var printDate = obj.nDate2.print("yyyy");
						$("#" + objID).val(printDate);
						//this.bindTwinDateExpandClose(objID, objSeq, event);
						obj.mycalendar2.yearPageSetYear(obj.nDate2);
					} else {
						var mm = nDate2.getMonth();
						var dd = nDate2.getDate();
						obj.nDate2 = new Date(myYear, mm, dd);
						this.bindTwinDateChangePage(objID, objSeq, 2, obj.nDate2, "m");
					}
				}

				if (obj.config.selectType == "y") {
					if (obj.nDate1.print("yyyy").number() > obj.nDate2.print("yyyy").number()) {
						obj.nDate2 = obj.nDate1;
						var printDate = obj.nDate2.print("yyyy");
						$("#" + obj.config.startTargetID).val(printDate);
						$("#" + objID).val(printDate);
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
				$("#" + cfg.targetID + "_AX_" + objID + "_AX_controlYear1").html(myYear + "년");
			} else {
				//obj.mycalendarPageType = "m";
				obj.nDate2 = setDate;
				obj.mycalendar2.printMonthPage(setDate);
				var myYear = setDate.getFullYear();
				$("#" + cfg.targetID + "_AX_" + objID + "_AX_controlYear2").html(myYear + "년");
			}
		} else if (pageType == "y") {
			if (objType == 1) {
				//obj.mycalendarPageType = "y";
				obj.nDate1 = setDate;
				obj.mycalendar1.printYearPage(setDate.getFullYear());
				var myYear = setDate.getFullYear();
				$("#" + cfg.targetID + "_AX_" + objID + "_AX_controlYear1").html(myYear + "년");
			} else {
				//obj.mycalendarPageType = "y";
				obj.nDate2 = setDate;
				obj.mycalendar2.printYearPage(setDate.getFullYear());
				var myYear = setDate.getFullYear();
				$("#" + cfg.targetID + "_AX_" + objID + "_AX_controlYear2").html(myYear + "년");
			}
		} else {
			//obj.mycalendarPageType = "d";

			//trace({objID:objID, objSeq:objSeq, objType:objType, setDate:setDate, pageType:pageType});

			if (objType == 1) {
				obj.nDate1 = setDate;
				obj.mycalendar1.printDayPage(setDate);
				var myYear = setDate.getFullYear();
				var myMonth = (setDate.getMonth() + 1).setDigit(2);
				$("#" + cfg.targetID + "_AX_" + objID + "_AX_controlYear1").html(myYear + "년");
				$("#" + cfg.targetID + "_AX_" + objID + "_AX_controlMonth1").html(myMonth + "월");
			} else {
				obj.nDate2 = setDate;
				obj.mycalendar2.printDayPage(setDate);
				var myYear = setDate.getFullYear();
				var myMonth = (setDate.getMonth() + 1).setDigit(2);
				$("#" + cfg.targetID + "_AX_" + objID + "_AX_controlYear2").html(myYear + "년");
				$("#" + cfg.targetID + "_AX_" + objID + "_AX_controlMonth2").html(myMonth + "월");
			}
		}

		if (objType == 1) {
			if (obj.config.selectType == "y") {
				$("#" + obj.config.startTargetID).val(obj.nDate1.print("yyyy"));
			} else if (obj.config.selectType == "m") {
				$("#" + obj.config.startTargetID).val(obj.nDate1.print("yyyy" + separator + "mm"));
			} else {
				var printDate = obj.nDate1.print("yyyy" + separator + "mm" + separator + "dd");
				if (obj.config.expandTime) {
					printDate += " " + obj.mycalendartime1.getTime();
				}
				$("#" + obj.config.startTargetID).val(printDate);
			}
		} else {
			if (obj.config.selectType == "y") {
				$("#" + objID).val(obj.nDate2.print("yyyy"));
			} else if (obj.config.selectType == "m") {
				$("#" + objID).val(obj.nDate2.print("yyyy" + separator + "mm"));
			} else {
				var printDate = obj.nDate2.print("yyyy" + separator + "mm" + separator + "dd");
				if (obj.config.expandTime) {
					printDate += " " + obj.mycalendartime2.getTime();
				}
				$("#" + objID).val(printDate);
			}
		}
	},
	bindTwinDateInputBlur: function (objID, objSeq, event, seq) {
		var obj = this.objects[objSeq];
		var cfg = this.config;
		var objVal, targetObjID;
		if (seq == 1) {
			targetObjID = obj.config.startTargetID;
			objVal = $("#" + obj.config.startTargetID).val();
		} else {
			targetObjID = objID;
			objVal = $("#" + objID).val();
		}

		if (objVal == "") {

		} else {
			var clearDate = false;
			var nDate = (obj["nDate" + seq] || new Date());
			var va = $("#" + targetObjID).val().replace(/\D/gi, ""); //숫자 이외의 문자를 제거 합니다.
			if (va.search(/\d+/g) == -1) {
				clearDate = true;
			}

			if (clearDate) {
				$("#" + targetObjID).val("");
			} else {
				var separator = (obj.config.separator) ? obj.config.separator : "-";
				if (obj.config.selectType == "y") {

					var yy = va.left(4).number();
					if (yy == 0) yy = nDate.getFullYear();
					if (yy < 1000) yy += 2000;
					var mm = nDate.getMonth();
					var dd = nDate.getDate();
					obj["nDate" + seq] = new Date(yy, mm, dd, 12);

					$("#" + targetObjID).val(obj["nDate" + seq].print("yyyy"));

				} else if (obj.config.selectType == "m") {

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
					obj["nDate" + seq] = new Date(yy, mm, dd, 12);

					$("#" + targetObjID).val(obj["nDate" + seq].print("yyyy" + separator + "mm"));

				} else {
					var needAlert = false;
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
					obj["nDate" + seq] = new Date(yy, mm, dd, 12);

					if (obj["nDate" + seq].getFullYear() != yy.number()
		            || obj["nDate" + seq].getMonth() != mm.number()
		            || obj["nDate" + seq].getDate() != dd.number()) {
						needAlert = true;
						obj["nDate" + seq] = new Date();
					}

					printDate = obj["nDate" + seq].print("yyyy" + separator + "mm" + separator + "dd");
					if (obj.config.expandTime) {
						printDate += " " + obj["mycalendartime" + seq].getTime();
					}

					if (needAlert) {
						AXUtil.alert("날짜 형식이 올바르지 않습니다.");
					}
					$("#" + targetObjID).val(printDate);

					if (obj.nDate1 == undefined) {
						var va = $("#" + obj.config.startTargetID).val().replace(/\D/gi, ""); //숫자 이외의 문자를 제거 합니다.
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
							obj.nDate1 = new Date(yy, mm, dd, 12);
						}
					}
					if (obj.nDate2 == undefined) {
						obj.nDate2 = obj.nDate1;
						printDate = obj["nDate" + 2].print("yyyy" + separator + "mm" + separator + "dd");
						if (obj.config.expandTime) {
							printDate += " " + obj["mycalendartime" + 2].getTime();
						}
						$("#" + objID).val(printDate);
					}

					if (obj.nDate1.diff(obj.nDate2) < 0) {
						if (seq == 1) {
							obj.nDate2 = obj.nDate1;
							printDate = obj["nDate" + 2].print("yyyy" + separator + "mm" + separator + "dd");
							if (obj.config.expandTime) {
								printDate += " " + obj["mycalendartime" + 2].getTime();
							}
							$("#" + objID).val(printDate);
						} else {
							obj.nDate1 = obj.nDate2;
							printDate = obj["nDate" + 1].print("yyyy" + separator + "mm" + separator + "dd");
							if (obj.config.expandTime) {
								printDate += " " + obj["mycalendartime" + 1].getTime();
							}
							$("#" + obj.config.startTargetID).val(printDate);
						}
					}
				}
			}
		}

		$("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox").remove(); // 개체 삭제 처리

		if (obj.config.onChange) {
			obj.config.onChange.call({
				ST_objID: obj.config.startTargetID,
				ED_objID: objID,
				ST_value: $("#" + obj.config.startTargetID).val(),
				ED_value: $("#" + objID).val()
			});
		}

		//비활성 처리후 메소드 종료
		$(document).unbind("click", obj.documentclickEvent);
		$("#" + objID).unbind("keydown", obj.inputKeyup);

		event.stopPropagation(); // disableevent
		return;
	}
});

var AXInput = new AXInputConverter();
AXInput.setConfig({ targetID: "inputBasic" });

jQuery.fn.unbindInput = function (config) {
	$.each(this, function () {
		if (config == undefined) config = {};
		config.id = this.id;
		AXInput.unbind(config);
		return this;
	});
};

jQuery.fn.bindSearch = function (config) {
	$.each(this, function () {
		if (config == undefined) config = {};
		config.id = this.id;
		config.bindType = "search";
		AXInput.bind(config);
		return this;
	});
};

jQuery.fn.bindNumber = function (config) {
	$.each(this, function () {
		config = config || {}; config.id = this.id;
		config.bindType = "number";
		AXInput.bind(config);
		return this;
	});
};

jQuery.fn.bindMoney = function (config) {
	$.each(this, function () {
		config = config || {}; config.id = this.id;
		config.bindType = "money";
		AXInput.bind(config);
		return this;
	});
};

jQuery.fn.bindSelector = function (config) {
	$.each(this, function () {
		config = config || {}; config.id = this.id;
		config.bindType = "selector";
		AXInput.bind(config);
		return this;
	});
};

jQuery.fn.bindSlider = function (config) {
	$.each(this, function () {
		config = config || {}; config.id = this.id;
		config.bindType = "slider";
		AXInput.bind(config);
		return this;
	});
};

jQuery.fn.bindTwinSlider = function (config) {
	$.each(this, function () {
		config = config || {}; config.id = this.id;
		config.bindType = "twinSlider";
		AXInput.bind(config);
		return this;
	});
};

jQuery.fn.bindSwitch = function (config) {
	$.each(this, function () {
		config = config || {}; config.id = this.id;
		config.bindType = "switch";
		AXInput.bind(config);
		return this;
	});
};

jQuery.fn.bindSegment = function (config) {
	$.each(this, function () {
		config = config || {}; config.id = this.id;
		config.bindType = "segment";
		AXInput.bind(config);
		return this;
	});
};

jQuery.fn.bindDate = function (config) {
	$.each(this, function () {
		config = config || {}; config.id = this.id;
		config.bindType = "date";
		AXInput.bind(config);
		return this;
	});
};

jQuery.fn.unbindDate = function (config) {
	$.each(this, function () {
		config = config || {}; config.id = this.id;
		AXInput.unbindDate(config);
		return this;
	});
};

jQuery.fn.bindDateTime = function (config) {
	$.each(this, function () {
		config = config || {}; config.id = this.id;
		config.bindType = "date";
		config.expandTime = true;
		AXInput.bind(config);
		return this;
	});
};

jQuery.fn.bindTwinDate = function (config) {
	$.each(this, function () {
		config = config || {}; config.id = this.id;
		config.bindType = "twinDate";
		AXInput.bind(config);
		return this;
	});
};

jQuery.fn.bindTwinDateTime = function (config) {
	$.each(this, function () {
		config = config || {}; config.id = this.id;
		config.bindType = "twinDateTime";
		config.expandTime = true;
		AXInput.bind(config);
		return this;
	});
};

jQuery.fn.bindPlaceHolder = function (config) {
	$.each(this, function () {
		config = config || {}; config.id = this.id;
		config.bindType = "placeHolder";
		AXInput.bind(config);
		return this;
	});
};

jQuery.fn.setConfigInput = function (config) {
	$.each(this, function () {
		AXInput.bindSetConfig(this.id, config);
		return this;
	});
};

jQuery.fn.setValueInput = function (value) {
	$.each(this, function () {
		AXInput.bindSetValue(this.id, value);
		return this;
	});
};

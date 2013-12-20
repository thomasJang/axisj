/*!
 * axisJ Javascript Library Version 1.0
 * http://axisJ.com
 * 
 * 아래 소스의 라이선스는 axisJ.com 에서 확인 하실 수 있습니다.
 * http://axisJ.com/license
 * axisJ를 사용하시려면 라이선스 페이지를 확인 및 숙지 후 사용 하시기 바람니다. 무단 사용시 예상치 못한 피해가 발생 하실 수 있습니다.
 */

var AXSelectConverter = Class.create(AXJ, {
	version: "AXSelectConverter v2.0",
	author: "tom@axisj.com",
	logs: [
		"2012-12-19 오후 12:00:43",
		"2013-04-24 오후 5:45:44 - value change bug fix",
		"2013-06-04 오전 11:00:42 - bind 메소드 업그레이드",
		"2013-07-26 오후 1:14:16 - bind, unbind, bindSetConfig 픽스",
		"2013-08-21 오후 4:45:02 - 연속 appendAnchor 버그픽스",
		"2013-08-23 오후 8:14:22 - expandBox 포지션 가변 처리",
		"2013-09-06 오전 10:08:28 - bindSelect % 버그픽스",
		"2013-09-27 오후 1:29:14 - onLoad 추가 : tom",
		"2013-10-02 오후 6:15:38 - bindSelectDisabled 기능 추가 : tom",
		"2013-10-24 오후 5:54:05 - resizeAnchor 기능 추가 : tom",
		"2013-11-06 오후 12:47:53 - tabindex 속성 가져오기 기능 추가 : tom",
		"2013-11-27 오후 8:03:57 - tom : positionFixed 기능 추가",
		"2013-12-09 오후 7:03:57 - tom : bindSelectUpdate 기능추가"
		
	],
	initialize: function (AXJ_super) {
		AXJ_super();
		this.objects = [];
		this.config.anchorClassName = "AXanchor";
		this.config.anchorSelectClassName = "AXanchorSelect";
	},
	init: function () {
		var browser = AXUtil.browser;
		//AXUtil.alert(browser);
		this.isMobile = false;
		if (browser.mobile) {
			this.isMobile = true;
		}
	},
	bindSetConfig: function (objID, configs) {
		var findIndex = null;
		jQuery.each(this.objects, function (index, O) {
			if (O.id == objID && O.isDel != true) {
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
	unbind: function (obj) {
		//var collect = [];
		var removeAnchorId;
		var removeIdx;
		//trace(this.objects);
		jQuery.each(this.objects, function (idx, O) {
			if (O.id != obj.id) {
				// collect.push(this);

			} else {
				if (O.isDel != true) {
					removeAnchorId = this.anchorID;
					removeIdx = idx;
				}
			}
		});

		//this.objects = collect;

		if (removeAnchorId) {

			this.objects[removeIdx].isDel = true;

			if (this.isMobile) {
				jQuery("#" + removeAnchorId).before(jQuery("#" + obj.id));
				jQuery("#" + removeAnchorId).remove();
			} else {
				jQuery("#" + removeAnchorId).remove();
				jQuery("#" + obj.id).show();
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

		var objID = obj.id;
		var objSeq = null;

		jQuery.each(this.objects, function (idx, O) {
			if (this.id == objID && this.isDel != true) {
				objSeq = idx;
				return false;
			}
		});

		if (obj.href == undefined) obj.href = cfg.href;

		if (objSeq == null) {
			objSeq = this.objects.length;
			this.objects.push({ id: objID, anchorID: cfg.targetID + "_AX_" + objID, config: obj });
			this.appendAnchor(objID);
			this.bindSelect(objID, objSeq);
		} else {
			this.objects[objSeq] = { id: objID, anchorID: cfg.targetID + "_AX_" + objID, config: obj };
			this.resizeAnchor(objID);
			this.bindSelect(objID, objSeq);
		}
	},
	appendAnchor: function (objID) {
		var cfg = this.config;
		/*trace("appendAnchor");*/
		if (AXgetId(cfg.targetID + "_AX_" + objID)) {
			jQuery("#" + cfg.targetID + "_AX_" + objID).remove();
			var anchorNode = jQuery("<div id=\"" + cfg.targetID + "_AX_" + objID + "\" class=\"" + cfg.anchorClassName + "\" style=\"display:none;\"></div>");
			var iobj = jQuery("#" + objID);
			iobj.after(anchorNode);
		} else {
			var anchorNode = jQuery("<div id=\"" + cfg.targetID + "_AX_" + objID + "\" class=\"" + cfg.anchorClassName + "\" style=\"display:none;\"></div>");
			var iobj = jQuery("#" + objID);
			iobj.after(anchorNode);
		}

		/*var offSetParent = iobj.offsetParent();*/
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
		jQuery("#" + cfg.targetID + "_AX_" + objID).css(css);
		jQuery("#" + cfg.targetID + "_AX_" + objID).data("height", h);
	},
	resizeAnchor: function (objID){
		var cfg = this.config;
		var iobj = jQuery("#" + objID);
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
		jQuery("#" + cfg.targetID + "_AX_" + objID).css(css);
		jQuery("#" + cfg.targetID + "_AX_" + objID).data("height", h);
	},
	bindSelect: function (objID, objSeq) {
		var cfg = this.config;
		var obj = this.objects[objSeq];
		if(!obj.config.onChange) obj.config.onChange = obj.config.onchange;
		
		var w = jQuery("#" + cfg.targetID + "_AX_" + objID).width();
		var h = jQuery("#" + cfg.targetID + "_AX_" + objID).data("height");

		//trace(obj.config);

		var fontSize = jQuery("#" + objID).css("font-size").number();
		var tabIndex = jQuery("#" + objID).attr("tabindex");

		var po = [];
		po.push("<div id=\"" + cfg.targetID + "_AX_" + objID + "_AX_SelectBox\" class=\"" + cfg.anchorSelectClassName + "\" style=\"width:" + w + "px;height:" + h + "px;\">");
		po.push("<a " + obj.config.href + " class=\"selectedTextBox\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_SelectTextBox\" style=\"height:" + (h - 2) + "px;\"");
		if(tabIndex != undefined) po.push(" tabindex=\""+tabIndex+"\"");
		po.push(">");
		po.push("	<span class=\"selectedText\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_SelectText\" style=\"line-height:" + (h - 2) + "px;padding:0px 4px;font-size:" + fontSize + "px;\"></span>");
		po.push("	<span class=\"selectBoxArrow\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_SelectBoxArrow\" style=\"height:" + h + "px;\"></span>");
		po.push("</a>");
		po.push("</div>");

		//append to anchor
		jQuery("#" + cfg.targetID + "_AX_" + objID).empty();
		jQuery("#" + cfg.targetID + "_AX_" + objID).append(po.join(''));
		jQuery("#" + cfg.targetID + "_AX_" + objID).css({ height: h + "px", "position": "relative", display: "inline-block", left: "auto", top: "auto", verticalAlign: "middle" });

		jQuery("#" + cfg.targetID + "_AX_" + objID).show();

		if (!obj.config.options) {
			//alert(AXgetId(objID).options.selectedIndex);
			obj.config.selectedIndex = AXgetId(objID).options.selectedIndex;
			var options = [];
			for (var oi = 0; oi < AXgetId(objID).options.length; oi++) {
				options.push({ optionValue: AXgetId(objID).options[oi].value, optionText: AXgetId(objID).options[oi].text.enc() });
			}
			//trace(options);
			obj.config.options = options;
		}

		if (this.isMobile) {

			// mobile 브라우저인 경우
			var bindSelectChange = this.bindSelectChange.bind(this);
			obj.objOnChange = function () {
				bindSelectChange(objID, objSeq);
			}
			jQuery("#" + cfg.targetID + "_AX_" + objID + "_AX_SelectBox").append(jQuery("#" + objID));
			jQuery("#" + objID).addClass("rootSelectBox");
			jQuery("#" + objID).bind("change", obj.objOnChange);

		} else {
			//AXUtil.alert(obj.config.options);

			// PC 브라우저인 경우
			jQuery("#" + objID).hide();
			var bindSelectExpand = this.bindSelectExpand.bind(this);
			jQuery("#" + cfg.targetID + "_AX_" + objID + "_AX_SelectTextBox").bind("click", function (event) {
				bindSelectExpand(objID, objSeq, true, event);
			});
		}

		if (obj.config.ajaxUrl) {

			var bindSelectChangeBind = this.bindSelectChange.bind(this);
			var bindSelectChange = function () {
				bindSelectChangeBind(objID, objSeq);
			};

			var url = obj.config.ajaxUrl;
			var pars = obj.config.ajaxPars;
			obj.config.selectedIndex = null;

			jQuery("#" + objID).empty();

			obj.inProgress = true; //진행중 상태 변경

			var async = (obj.config.ajaxAsync == undefined) ? true : obj.config.ajaxAsync;
			new AXReq(url, {
				debug: false, async: async, pars: pars, onsucc: function (res) {
					if (res.result == AXUtil.ajaxOkCode) {

						//trace(res);
						var po = [];
						if (obj.config.isspace) {
							po.push("<option value=\"\">" + obj.config.isspaceTitle + "</option>");
						}
						jQuery.each(res.options, function (oidx, opts) {
							po.push("<option value=\"" + this.optionValue + "\"");
							//if(obj.config.selectedIndex == oidx) po.push(" selected=\"selected\"");
							if (obj.config.setValue == this.optionValue || this.selected) po.push(" selected=\"selected\"");
							po.push(">" + this.optionText.dec() + "</option>");
						});
						jQuery("#" + objID).html(po.join(''));

						var options = [];
						for (var oi = 0; oi < AXgetId(objID).options.length; oi++) {
							options.push({ optionValue: AXgetId(objID).options[oi].value, optionText: AXgetId(objID).options[oi].text.enc() });
						}
						obj.config.options = options;
						obj.config.selectedIndex = AXgetId(objID).options.selectedIndex;

						if (obj.config.onChange && obj.config.setValue != undefined) {
							obj.config.focusedIndex = obj.config.selectedIndex;
							obj.config.selectedObject = obj.config.options[obj.config.selectedIndex];
							obj.config.onChange.call(obj.config.selectedObject, obj.config.selectedObject);
						}

						bindSelectChange();

						if (obj.config.onLoad) {
							obj.config.onLoad.call(res);
						}

					} else {
						//trace(res);
					}
					obj.inProgress = false;
				}
			});

		} else if (obj.config.options) {

			var po = [];
			if (obj.config.isspace) {
				po.push("<option value=\"\">" + obj.config.isspaceTitle + "</option>");
			}

			jQuery.each(obj.config.options, function (oidx, opts) {
				var optionText = (this.optionText||"").dec();
				po.push("<option value=\"" + this.optionValue + "\"");
				if (obj.config.selectedIndex == oidx) po.push(" selected=\"selected\"");
				po.push(">" + optionText + "</option>");
			});
			jQuery("#" + objID).html(po.join(''));

			var options = [];
			for (var oi = 0; oi < AXgetId(objID).options.length; oi++) {
				options.push({ optionValue: AXgetId(objID).options[oi].value, optionText: AXgetId(objID).options[oi].text.enc() });
			}
			obj.config.options = options;
			obj.config.selectedIndex = AXgetId(objID).options.selectedIndex;
			
			this.bindSelectChange(objID, objSeq);

		} else {
			this.bindSelectChange(objID, objSeq);
		}
	},
	getSelectedOption: function (objID, objSeq) {
		var cfg = this.config;
		var obj = this.objects[objSeq];
		if(AXgetId(objID).options.selectedIndex > -1){
			try{
				if(obj.config.selectedIndex != AXgetId(objID).options.selectedIndex) obj.config.selectedIndex = AXgetId(objID).options.selectedIndex;
			}catch(e){
				
			}
			return AXgetId(objID).options[AXgetId(objID).options.selectedIndex];
		}else{
			return AXgetId(objID).options[0];
		}
	},
	bindSelectChange: function (objID, objSeq) {
		var cfg = this.config;
		var obj = this.objects[objSeq];
		var selectedOption = this.getSelectedOption(objID, objSeq);
		if (selectedOption) {
			jQuery("#" + cfg.targetID + "_AX_" + objID + "_AX_SelectText").html(selectedOption.text);
		}
	},
	bindSelectExpand: function (objID, objSeq, isToggle, event) {
		var cfg = this.config;
		var obj = this.objects[objSeq];
		var jqueryTargetObjID = jQuery("#"+ cfg.targetID + "_AX_" + objID);
		//Selector Option box Expand
		
		if(jqueryTargetObjID.data("disabled")) return;
		
		if (isToggle) { // 활성화 여부가 토글 이면
			if (AXgetId(cfg.targetID + "_AX_" + objID + "_AX_expandBox")) {
				if (obj.config.isChangedSelect) {
					this.bindSelectClose(objID, objSeq, event); // 닫기
				} else {
					jQuery("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox").remove(); // 개체 삭제 처리
					jQuery("#" + cfg.targetID + "_AX_" + objID + "_AX_SelectBoxArrow").removeClass("on");
					//비활성 처리후 메소드 종료
					jQuery(document).unbind("click", obj.documentclickEvent);
					jQuery(document).unbind("keydown", obj.documentKeyup);
				}
				return;
			}
		}
		jQuery("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox").remove(); // 활성화 전에 개체 삭제 처리
		jQuery("#" + cfg.targetID + "_AX_" + objID + "_AX_SelectBoxArrow").removeClass("on");

		//Expand Box 생성 구문 작성
		var anchorWidth = jQuery("#" + cfg.targetID + "_AX_" + objID).width() - 2; // anchor width
		var anchorHeight = jQuery("#" + cfg.targetID + "_AX_" + objID).data("height") - 1;
		var styles = [];
		//styles.push("top:"+anchorHeight+"px");
		styles.push("width:" + anchorWidth + "px");

		var po = [];
		po.push("<div id=\"" + cfg.targetID + "_AX_" + objID + "_AX_expandBox\" class=\"AXselectExpandBox\" style=\"" + styles.join(";") + "\">");
		po.push("<div id=\"" + cfg.targetID + "_AX_" + objID + "_AX_expandScroll\" class=\"AXselectExpandScroll\">");
		po.push("	<div class=\"AXLoadingSmall\"></div>");
		po.push("</div>");
		po.push("</div>");
		jQuery(document.body).append(po.join(''));
		jQuery("#" + cfg.targetID + "_AX_" + objID + "_AX_SelectBoxArrow").addClass("on");

		var expandBox = jQuery("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox");
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
		var obj = this.objects[objSeq];
		//trace("bindSelectorClose");
		var cfg = this.config;
		if (AXgetId(cfg.targetID + "_AX_" + objID + "_AX_expandBox")) {
			jQuery("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox").remove(); // 개체 삭제 처리
			jQuery("#" + cfg.targetID + "_AX_" + objID + "_AX_SelectBoxArrow").removeClass("on");

			//비활성 처리후 메소드 종료
			jQuery(document).unbind("click", obj.documentclickEvent);
			jQuery(document).unbind("keydown", obj.documentKeyup);

			if (obj.config.isChangedSelect) {

				AXgetId(objID).options[obj.config.selectedIndex].selected = true;
				if (obj.config.onChange) {
					obj.config.onChange.call(obj.config.selectedObject, obj.config.selectedObject);
				}
				obj.config.isChangedSelect = false;

				this.bindSelectChange(objID, objSeq);

			}

			event.stopPropagation(); // disableevent
			return;
		}
	},
	bindSelectSetOptions: function (objID, objSeq) {
		var obj = this.objects[objSeq];
		var cfg = this.config;
		var jqueryTargetObjID = jQuery("#" + cfg.targetID + "_AX_" + objID);
		var maxHeight = obj.config.maxHeight || 200;

		if (!obj.config.options) return;
		if (obj.config.options.length == 0) {
			jQuery("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox").hide();
		}
		var po = [];

		jQuery.each(obj.config.options, function (index, O) {
			po.push("<a " + obj.config.href + " id=\"" + cfg.targetID + "_AX_" + objID + "_AX_" + index + "_AX_option\">" + O.optionText.dec() + "</a>");
		});
		jQuery("#" + cfg.targetID + "_AX_" + objID + "_AX_expandScroll").html(po.join(''));

		var expandScrollHeight = jQuery("#" + cfg.targetID + "_AX_" + objID + "_AX_expandScroll").height();
		if (expandScrollHeight > maxHeight) expandScrollHeight = maxHeight;
		jQuery("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox").css({ height: expandScrollHeight + "px" });

		var bindSelectOptionsClick = this.bindSelectOptionsClick.bind(this);
		obj.documentclickEvent = function (event) {
			bindSelectOptionsClick(objID, objSeq, event);
		}
		var bindSelectKeyup = this.bindSelectKeyup.bind(this);
		obj.documentKeyup = function (event) {
			bindSelectKeyup(objID, objSeq, event);
		}
		jQuery(document).bind("click", obj.documentclickEvent);
		jQuery(document).bind("keydown", obj.documentKeyup);

		if (obj.myUIScroll) obj.myUIScroll.unbind();
		obj.myUIScroll = new AXScroll();
		obj.myUIScroll.setConfig({
			CT_className: "AXScrollSmall",
			targetID: cfg.targetID + "_AX_" + objID + "_AX_expandBox",
			scrollID: cfg.targetID + "_AX_" + objID + "_AX_expandScroll",
			touchDirection: false
		});

		if (obj.config.selectedIndex != undefined) {
			jQuery("#" + cfg.targetID + "_AX_" + objID + "_AX_" + obj.config.selectedIndex + "_AX_option").addClass("on");
			obj.myUIScroll.focusElement(cfg.targetID + "_AX_" + objID + "_AX_" + obj.config.selectedIndex + "_AX_option"); //focus
			obj.config.focusedIndex = obj.config.selectedIndex;
		}

		// 위치 재 정의 필요하면 정의 할 것 ----------------------------------
		var bodyHeight;
		(AXUtil.docTD == "Q") ? bodyHeight = document.body.clientHeight : bodyHeight = document.documentElement.clientHeight;
		//trace({bodyHeight:bodyHeight, top:css.top});

		var anchorHeight = jqueryTargetObjID.data("height") - 1;
		var expandBox = jQuery("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox");
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
		//trace(tgid.substr(eid[0].length, objID.length)+"///"+objID);
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
				obj.config.selectedIndex = selectedIndex;
				obj.config.focusedIndex = selectedIndex;
				obj.config.selectedObject = obj.config.options[selectedIndex];

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
			if (!obj.config.options) return;
			if (obj.config.options.length == 0) return;
			var focusIndex = obj.config.options.length - 1;
			if (obj.config.focusedIndex == undefined || obj.config.focusedIndex == 0) {

			} else {
				focusIndex = (obj.config.focusedIndex) - 1;
			}
			this.bindSelectorSelect(objID, objSeq, focusIndex);
		} else if (event.keyCode == AXUtil.Event.KEY_DOWN) {
			if (!obj.config.options) return;
			if (obj.config.options.length == 0) return;
			var focusIndex = 0;
			if (obj.config.focusedIndex == undefined || obj.config.focusedIndex == obj.config.options.length - 1) {

			} else {
				focusIndex = (obj.config.focusedIndex).number() + 1;
			}
			this.bindSelectorSelect(objID, objSeq, focusIndex);
		} else if (event.keyCode == AXUtil.Event.KEY_RETURN) {
			//alert("RETURN");
			/*
						jQuery(document).unbind("click", obj.documentclickEvent);
						jQuery(document).unbind("keydown", obj.documentKeyup);
			*/
			/*
						var selectedIndex = eid[eid.length - 2];
						obj.config.selectedIndex = selectedIndex;
						obj.config.focusedIndex = selectedIndex;
						obj.config.selectedObject = obj.config.options[selectedIndex];
			
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
			jQuery("#" + cfg.targetID + "_AX_" + objID + "_AX_" + obj.config.focusedIndex + "_AX_option").removeClass("on");
		}
		jQuery("#" + cfg.targetID + "_AX_" + objID + "_AX_" + index + "_AX_option").addClass("on");
		obj.config.focusedIndex = index;
		obj.config.selectedIndex = index;
		obj.config.selectedObject = obj.config.options[index];
		obj.config.isChangedSelect = true;
		obj.myUIScroll.focusElement(cfg.targetID + "_AX_" + objID + "_AX_" + index + "_AX_option"); //focus		
	},
	bindSelectorSelectClear: function (objID, objSeq) {

		var obj = this.objects[objSeq];
		var cfg = this.config;
		if (obj.config.selectedIndex != undefined) {
			jQuery("#" + cfg.targetID + "_AX_" + objID + "_AX_" + obj.config.selectedIndex + "_AX_option").removeClass("on");
		}
		obj.config.selectedIndex = null;
		obj.config.focusedIndex = null;
		obj.config.selectedObject = null;
		obj.config.isChangedSelect = true;
	},

	/* ~~~~~~~~~~~~~ */
	bindSelectChangeValue: function (objID, value, onEnd) {
		var findIndex = null;
		jQuery.each(this.objects, function (index, O) {
			if (O.id == objID && O.isDel != true) {
				findIndex = index;
				return false;
			}
		});

		if (findIndex == null) {
			//trace("바인드 된 오브젝트를 찾을 수 없습니다.");
			return;
		} else {
			var obj = this.objects[findIndex];
			var cfg = this.config;

			if (this.isMobile) {
				for (var oi = 0; oi < AXgetId(objID).options.length; oi++) {
					if (AXgetId(objID).options[oi].value == value) {
						var selectedIndex = oi;
						AXgetId(objID).options[oi].selected = true;
						obj.config.selectedObject = { optionValue: AXgetId(objID).options[oi].value, optionText: AXgetId(objID).options[oi].text.enc() };
						this.bindSelectChange(objID, findIndex);
						if (obj.config.onChange) {
							obj.config.onChange.call(obj.config.selectedObject, obj.config.selectedObject);
						}
						break;
					}
				}
			} else {
				var selectedIndex = null;
				jQuery.each(obj.config.options, function (oidx, O) {
					if ((O.optionValue || O.value || "") == value) {
						selectedIndex = oidx;
					}
				});

				if (selectedIndex != null) {
					
					obj.config.selectedIndex = selectedIndex;
					obj.config.focusedIndex = selectedIndex;

					AXgetId(objID).options[obj.config.selectedIndex].selected = true;
					obj.config.selectedObject = obj.config.options[selectedIndex];
					this.bindSelectChange(objID, selectedIndex);

					if (obj.config.onChange) {
						obj.config.onChange.call(obj.config.selectedObject, obj.config.selectedObject);
					}

				} else {
					//trace("일치하는 값을 찾을 수 없습니다.");
				}
			}
		}
	},
	bindSelectDisabled: function(objID, disabled){
		var findIndex = null;
		jQuery.each(this.objects, function (index, O) {
			if (O.id == objID && O.isDel != true) {
				findIndex = index;
				return false;
			}
		});

		if (findIndex == null) {
			//trace("바인드 된 오브젝트를 찾을 수 없습니다.");
			return;
		} else {
			var obj = this.objects[findIndex];
			var cfg = this.config;

			if (this.isMobile) {
				AXgetId(objID).disabled = disabled;
			} else {
				AXgetId(objID).disabled = disabled;
				if(AXgetId(objID).disabled){
					jQuery("#"+ cfg.targetID + "_AX_" + objID).find(".AXanchorSelect").addClass("disabled");
					jQuery("#"+ cfg.targetID + "_AX_" + objID).data("disabled", AXgetId(objID).disabled);
				}else{
					jQuery("#"+ cfg.targetID + "_AX_" + objID).find(".AXanchorSelect").removeClass("disabled");
					jQuery("#"+ cfg.targetID + "_AX_" + objID).data("disabled", AXgetId(objID).disabled);
				}
				
			}
		}
	},
	bindSelectUpdate: function(objID){
		var findIndex = null;
		jQuery.each(this.objects, function (index, O) {
			if (O.id == objID && O.isDel != true) {
				findIndex = index;
				return false;
			}
		});
		if(findIndex != null){
			this.bindSelectChange(objID, findIndex);
		}
	}
});

var AXSelect = new AXSelectConverter();
AXSelect.setConfig({ targetID: "inputBasic" });

jQuery.fn.unbindSelect = function (config) {
	jQuery.each(this, function () {
		if (config == undefined) config = {};
		config.id = this.id;
		AXSelect.unbind(config);
		return this;
	});
};

jQuery.fn.bindSelect = function (config) {
	jQuery.each(this, function () {
		if (config == undefined) config = {};
		config.id = this.id;
		AXSelect.bind(config);
		return this;
	});
};

jQuery.fn.setConfigSelect = function (config) {
	jQuery.each(this, function () {
		AXSelect.bindSetConfig(this.id, config);
		return this;
	});
};

jQuery.fn.bindSelectSetValue = function (value, onEnd) {
	jQuery.each(this, function () {
		AXSelect.bindSelectChangeValue(this.id, value, onEnd);
		return this;
	});
};

//SetText
//getText

jQuery.fn.setValueSelect = function (value, onEnd) {
	jQuery.each(this, function () {
		AXSelect.bindSelectChangeValue(this.id, value, onEnd);
		return this;
	});
};

jQuery.fn.bindSelectDisabled = function (Disabled) {
	jQuery.each(this, function () {
		AXSelect.bindSelectDisabled(this.id, Disabled);
		return this;
	});
};

jQuery.fn.bindSelectUpdate = function () {
	jQuery.each(this, function () {
		AXSelect.bindSelectUpdate(this.id);
		return this;
	});
};
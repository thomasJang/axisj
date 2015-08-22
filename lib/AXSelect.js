/**
 * AXSelectConverter
 * @class AXSelectConverter
 * @extends AXJ
 * @version v1.9.8
 * @author tom@axisj.com
 * @logs
 "2012-12-19 오후 12:00:43",
 "2013-04-24 오후 5:45:44 - value change bug fix",
 "2013-06-04 오전 11:00:42 - bind 메소드 업그레이드",
 "2013-07-26 오후 1:14:16 - bind, unbind, bindSetConfig 픽스",
 "2013-08-21 오후 4:45:02 - 연속 appendAnchor 버그픽스",
 "2013-08-23 오후 8:14:22 - expandBox 포지션 가변 처리",
 "2013-09-06 오전 10:08:28 - bindSelect % 버그픽스",
 "2013-09-27 오후 1:29:14 - onLoad 추가 : tom",bin
 "2013-10-24 오후 5:54:05 - resizeAnchor 기능 추가 : tom",
 "2013-11-06 오후 12:47:53 - tabindex 속성 가져오기 기능 추가 : tom",
 "2013-11-27 오후 8:03:57 - tom : positionFixed 기능 추가",
 "2013-12-09 오후 7:03:57 - tom : bindSelectUpdate 기능추가",
 "2014-01-10 오후 5:08:59 - tom : event modify & bugFix",
 "2014-03-11 오전 11:08:54 - tom : add bindSelectGetValue ",
 "2014-03-18 오후 10:09:21 - tom : select 포커스 후 키입력 하면 optionValue를 비교하여 선택처리 기능 구현 - 2차버전에 한글 포커스 밑 optionText 비교 처리 구문 추가",
 "2014-03-27 오후 3:38:25 - tom : onchange 함수가 setValue 속성을 부여해야만 작동하던 것을 무조건 작동 하도록 변경",
 "2014-03-31 오후 4:41:18 - tom : 셀렉트 포커스 된 상태에서 키 입력하면 입력된 값으로 select 처리 하기 (현재 영문만)",
 "2014-04-10 오후 6:09:44 - tom : appendAnchor, alignAnchor 방식 변경 및 크기 버그 픽스 & select element hide 에서 투명으로 변경",
 "2014-04-18 - tom : mobile 브라우저 버그 픽스"
 "2014-05-21 tom : resize event 상속"
 "2014-06-02 tom : change ajax data protocol check result or error key in data"
 "2014-07-02 tom : bindSelect for Array support setValue attribute"
 "2014-07-09 tom : bindSelect for AJAX then serialObject not working"
 "2014-07-14 tom : direct align when window resize and add method 'bindSelectAddOptions', 'bindSelectRemoveOptions'"
 "2014-07-25 tom : support chaining 'method bind..'"
 "2014-08-06 tom : active onLoad event when script mode "
 "2014-08-08 tom : select option value 최적화, option change 하면 원본 onchange 이벤트 trigger"
 "2014-08-08 tom : bindSelectSetValue bug fix"
 "2014-08-19 tom : mobile에서 onnchange 버그 픽스"
 "2014-08-28 tom : bindSelectDisabled(true|false) 지원"
 "2014-10-21 tom : change 이벤트 load 타임에서 실행 안 되도록 변경"
 "2015-01-14 tom : onchange 이벤트에서 전달되는 내용 확장  {"optionIndex":[Number], "optionValue":"", "optionText":"", "value":"", "text":""}
 "2015-01-19 tom : onload 이벤트 인자 수정 selectedIndex,selectedObject,options,response "
 "2015-01-19 tom : options가 없을때 바인드 오류 수정/ 너비재계산 오류 수정 "
 "2015-01-19 tom : isspace 일때 기본값 선택 오류 수정 "
 "2015-01-21 tom : bindSelectUpdateOptions 메소드 추가"
 "2015-01-22 tom : https://github.com/axisj-com/axisj/issues/394 이슈 해결 isspaceValue 속성 추가"
 "2015-02-02 tom : options가 없을 때 onchange 속성 오류 픽스, AJAX방식에서 select 너비 처리 오류"
 "2015-03-16 tom : bindSelect reserveKeys 설정 추가"
 "2015-03-22 tom : ajax 통신 옵션 설정 가능 하도록 수정 https://github.com/axisj-com/axisj/issues/469"
 "2015-03-24 tom : select optionsData 키 추가"
 "2015-03-27 tom : modile 에서 bindSelectUpdateOptions 호출 후 버그 픽스"
 "2015-03-28 tom : bindSelectUpdate 실행될 때 onchange 호출 되도록 수정"
 "2015-04-17 HJ.Park : [ IE8 ] select 태그가 클릭되서 select의 option이 보이는 버그 수정, AXSelect 텍스트와 화살표 사이 빈 공간을 클릭해도 클릭이벤트가 일어나지 않는 버그 수정"
 "2015-04-20 tom : bindSelectOptionsClick id 길이에 따른 버그 픽스 "
 "2015-05-04 tom : bindSelect options 매치할 때 사용자 키 정의 기능추가"
 "2015-05-17 tom : unbindSelect 시 visibility 버그 픽스"
 "2015-06-02 tom : onexpand 설정 추가"
 "2015-06-26 HJ.Park : focus되는 경우 스타일 추가 https://github.com/axisj/axisj/issues/613"
 *
 */

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
		if (!AXgetId(obj.id)) {
			obj.id = "AXSelect-" + axf.getUniqueId();
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

		} else {
			//AXUtil.alert(obj.options);

			// PC 브라우저인 경우
			iobj.css({visibility:"hidden"});
			var bindSelectExpand = this.bindSelectExpand.bind(this);
			var bindSelectClose = this.bindSelectClose.bind(this);
			var bindSelectFocus = this.bindSelectFocus.bind(this);
			var bindSelectBlur = this.bindSelectBlur.bind(this);

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
		var _this = this;
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

		// onexpand 함수가 존재 한다면
		if(obj.config.onexpand){
			obj.config.onexpand.call({
				obj: obj,
				objID: objID,
				objSeq: objSeq
			}, function(args){
				if(typeof args != "undefined") {
					obj.options = obj.config.options = axf.copyObject(args.options);

					var po = [], adj = 0;
					if (obj.config.isspace) {
						po.push("<option value='"+(obj.config.isspaceValue||"")+"'");
						if (obj.selectedIndex == 0) po.push(" selected=\"selected\"");
						po.push(">" + (obj.config.isspaceTitle||"&nbsp;") + "</option>");
						adj =-1;
					}
					for (var opts, oidx = 0; oidx < obj.options.length; oidx++) {
						var opts = obj.options[oidx];
						po.push("<option value=\"" + opts[obj.config.reserveKeys.optionValue] + "\" data-option=\"" + opts[obj.config.reserveKeys.optionData] + "\" ");
						if (obj.config.setValue == opts[obj.config.reserveKeys.optionValue] || opts.selected || (obj.selectedIndex||0).number()+adj == oidx) po.push(" selected=\"selected\"");
						po.push(">" + opts[obj.config.reserveKeys.optionText].dec() + "</option>");
					}
					axdom("#" + objID).html( po.join('') );

					_this.bindSelectSetOptions(objID, objSeq);
					_this.alignAnchor(objID, objSeq);
				}
			});
		}else{
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
		}
		if(findIndex != null){
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SelectTextBox").addClass("focus");
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
		}
		if(findIndex != null){
			axdom("#" + cfg.targetID + "_AX_" + objID + "_AX_SelectTextBox").removeClass("focus");
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
		if(!this.id) this.id = "AXInput-" + axf.getUniqueId();
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
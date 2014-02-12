/*!
 * axisJ Javascript Library Version 1.0
 * http://axisJ.com
 * 
 * 아래 소스의 라이선스는 axisJ.com 에서 확인 하실 수 있습니다.
 * http://axisJ.com/license
 * axisJ를 사용하시려면 라이선스 페이지를 확인 및 숙지 후 사용 하시기 바람니다. 무단 사용시 예상치 못한 피해가 발생 하실 수 있습니다.
 */

var AXSelectConverter = Class.create(AXJ, {
    version: "AXSelectConverter v1.5",
    author: "tom@axisj.com",
    logs: [
		"2012-12-19 오후 12:00:43",
		"2013-04-24 오후 5:45:44 - value change bug fix",
		"2013-06-04 오전 11:00:42 - bind 메소드 업그레이드",
		"2013-07-26 오후 1:14:16 - bind, unbind, bindSetConfig 픽스",
		"2013-08-21 오후 4:45:02 - 연속 appendAnchor 버그픽스",
		"2013-08-23 오후 8:14:22 - expandBox 포지션 가변 처리",
		"2013-09-06 오전 10:08:28 - bindSelect % 버그픽스"
	],
    initialize: function ($super) {
        $super();
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
        $.each(this.objects, function (index, O) {
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
        $.each(this.objects, function (idx, O) {
            if (O.id != obj.id) {
                // collect.push(this);

            } else {
            	if(O.isDel != true){
	                removeAnchorId = this.anchorID;
	                removeIdx = idx;
	            }
            }
        });

        //this.objects = collect;

        if (removeAnchorId) {

            this.objects[removeIdx].isDel = true;

            if (this.isMobile) {
                $("#" + removeAnchorId).before($("#" + obj.id));
                $("#" + removeAnchorId).remove();
            } else {
                $("#" + removeAnchorId).remove();
                $("#" + obj.id).show();
            }
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
			if (this.id == objID && this.isDel != true) {
				objSeq = idx;
				return false;
			}
		});
		
		
        if (objSeq == null) {
	        objSeq = this.objects.length;
	        this.objects.push({ id: objID, anchorID: cfg.targetID + "_AX_" + objID, config: obj });	
	        this.appendAnchor(objID);
	        this.bindSelect(objID, objSeq);
        }else{
        	this.objects[objSeq] = { id: objID, anchorID: cfg.targetID + "_AX_" + objID, config: obj };
	        //this.appendAnchor(objID);
	        this.bindSelect(objID, objSeq);
        }
    },
    appendAnchor: function (objID) {
        var cfg = this.config;
        //trace("appendAnchor");
        if($M(cfg.targetID + "_AX_" + objID)){
        	$("#"+cfg.targetID + "_AX_" + objID).remove();
        	var anchorNode = $("<div id=\"" + cfg.targetID + "_AX_" + objID + "\" class=\"" + cfg.anchorClassName + "\" style=\"display:none;\"></div>");
	        var iobj = $("#" + objID);
	        iobj.after(anchorNode);	
        }else{
	        var anchorNode = $("<div id=\"" + cfg.targetID + "_AX_" + objID + "\" class=\"" + cfg.anchorClassName + "\" style=\"display:none;\"></div>");
	        var iobj = $("#" + objID);
	        iobj.after(anchorNode);	
        }

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
    bindSelect: function (objID, objSeq) {
        var cfg = this.config;
        var obj = this.objects[objSeq];
        var w = $("#" + cfg.targetID + "_AX_" + objID).width();
        var h = $("#" + cfg.targetID + "_AX_" + objID).data("height");

        //trace(obj.config);

        var fontSize = $("#" + objID).css("font-size").number();

        var po = [];
        po.push("<div id=\"" + cfg.targetID + "_AX_" + objID + "_AX_SelectBox\" class=\"" + cfg.anchorSelectClassName + "\" style=\"width:" + w + "px;height:" + h + "px;\">");
        po.push("<a href=\"#AXexec\" class=\"selectedTextBox\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_SelectTextBox\" style=\"height:" + (h - 2) + "px;\">");
        po.push("	<span class=\"selectedText\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_SelectText\" style=\"line-height:" + (h - 2) + "px;padding:0px 4px;font-size:" + fontSize + "px;\"></span>");
        po.push("	<span class=\"selectBoxArrow\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_SelectBoxArrow\" style=\"height:" + h + "px;\"></span>");
        po.push("</a>");
        po.push("</div>");

        //append to anchor
        $("#" + cfg.targetID + "_AX_" + objID).empty();
        $("#" + cfg.targetID + "_AX_" + objID).append(po.join(''));
        $("#" + cfg.targetID + "_AX_" + objID).css({ height: h + "px", "position": "relative", display: "inline-block", left: "auto", top: "auto", verticalAlign: "middle" });

        $("#" + cfg.targetID + "_AX_" + objID).show();

        if (!obj.config.options) {
        	//alert($M(objID).options.selectedIndex);
        	obj.config.selectedIndex = $M(objID).options.selectedIndex;
            var options = [];
            for (var oi = 0; oi < $M(objID).options.length; oi++) {
                options.push({ optionValue: $M(objID).options[oi].value, optionText: $M(objID).options[oi].text.enc() });
            }
            obj.config.options = options;   
        }

        if (this.isMobile) {
        	
            // mobile 브라우저인 경우
            var bindSelectChange = this.bindSelectChange.bind(this);
            obj.objOnChange = function () {
                bindSelectChange(objID, objSeq);
            }
            $("#" + cfg.targetID + "_AX_" + objID + "_AX_SelectBox").append($("#" + objID));
            $("#" + objID).addClass("rootSelectBox");
            $("#" + objID).bind("change", obj.objOnChange);
            
        } else {
            //AXUtil.alert(obj.config.options);

            // PC 브라우저인 경우
            $("#" + objID).hide();
            var bindSelectExpand = this.bindSelectExpand.bind(this);
            $("#" + cfg.targetID + "_AX_" + objID + "_AX_SelectTextBox").bind("click", function (event) {
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
	            
	            $("#"+objID).empty();
	            
	            obj.inProgress = true; //진행중 상태 변경
	            
	            var async = (obj.config.ajaxAsync == undefined) ? true : obj.config.ajaxAsync;
	            new AXReq(url, { debug: false, async:async, pars: pars, onsucc: function (res) {
	                if (res.result == AXUtil.ajaxOkCode) {
	
	                    //trace(res);
	                    var po = [];
	                    if (obj.config.isspace) {
	                        po.push("<option value=\"\">" + obj.config.isspaceTitle + "</option>");
	                    }
	                    $.each(res.options, function (oidx, opts) {
			            	po.push("<option value=\"" + this.optionValue + "\"");
			            	//if(obj.config.selectedIndex == oidx) po.push(" selected=\"selected\"");
			            	if(obj.config.setValue == this.optionValue)  po.push(" selected=\"selected\"");
							po.push(">" + this.optionText.dec() + "</option>");
	                    });
	                    $("#" + objID).html(po.join(''));
	
	                    var options = [];
	                    for (var oi = 0; oi < $M(objID).options.length; oi++) {
	                        options.push({ optionValue: $M(objID).options[oi].value, optionText: $M(objID).options[oi].text.enc() });
	                    }
	                    obj.config.options = options;
	                    obj.config.selectedIndex = $M(objID).options.selectedIndex;
	                    
	             		if (obj.config.onChange && obj.config.setValue != undefined) {
	             			
                			obj.config.focusedIndex = obj.config.selectedIndex;
                			obj.config.selectedObject = obj.config.options[obj.config.selectedIndex];
	             			
                    		obj.config.onChange.call(obj.config.selectedObject, obj.config.selectedObject);
                		}
	                    
	                    bindSelectChange();
	
	                } else {
	                    trace(res);
	                }
	                obj.inProgress = false;
	            }
	            });
	            
        }else if(obj.config.options){
	
            var po = [];
            if (obj.config.isspace) {
                po.push("<option value=\"\">" + obj.config.isspaceTitle + "</option>");
            }
            //trace(obj.config.options);
            $.each(obj.config.options, function (oidx, opts) {
            	po.push("<option value=\"" + this.optionValue + "\"");
            	if(obj.config.selectedIndex == oidx) po.push(" selected=\"selected\"");
				po.push(">" + this.optionText.dec() + "</option>");
            });
            $("#" + objID).html(po.join(''));

            var options = [];
            for (var oi = 0; oi < $M(objID).options.length; oi++) {
                options.push({ optionValue: $M(objID).options[oi].value, optionText: $M(objID).options[oi].text });
            }
            obj.config.options = options;
            obj.config.selectedIndex = $M(objID).options.selectedIndex;
            this.bindSelectChange(objID, objSeq);
        	
        } else {
            this.bindSelectChange(objID, objSeq);
        }
    },
    getSelectedOption: function (objID, objSeq) {
        var cfg = this.config;
        var obj = this.objects[objSeq];
        //alert($M(objID).options.selectedIndex);
        return $M(objID).options[$M(objID).options.selectedIndex];
    },
    bindSelectChange: function (objID, objSeq) {
        var cfg = this.config;
        var obj = this.objects[objSeq];
        var selectedOption = this.getSelectedOption(objID, objSeq);

        if (selectedOption){
            $("#" + cfg.targetID + "_AX_" + objID + "_AX_SelectText").html(selectedOption.text.dec());
            //trace("value have");
        }
    },
    bindSelectExpand: function (objID, objSeq, isToggle, event) {
        var cfg = this.config;
        var obj = this.objects[objSeq];
        //Selector Option box Expand
        if (isToggle) { // 활성화 여부가 토글 이면
            if ($M(cfg.targetID + "_AX_" + objID + "_AX_expandBox")) {
            	if(obj.config.isChangedSelect){
            		this.bindSelectClose(objID, objSeq, event); // 닫기
            	}else{
	                $("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox").remove(); // 개체 삭제 처리
	                $("#" + cfg.targetID + "_AX_" + objID + "_AX_SelectBoxArrow").removeClass("on");
		            //비활성 처리후 메소드 종료
		            $(document).unbind("click", obj.documentclickEvent);
		            $(document).unbind("keydown", obj.documentKeyup);
            	}
                return;
            }
        }
        $("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox").remove(); // 활성화 전에 개체 삭제 처리
        $("#" + cfg.targetID + "_AX_" + objID + "_AX_SelectBoxArrow").removeClass("on");

        //Expand Box 생성 구문 작성
        var anchorWidth = $("#" + cfg.targetID + "_AX_" + objID).width() - 2; // anchor width
        var anchorHeight = $("#" + cfg.targetID + "_AX_" + objID).data("height") - 1;
        var styles = [];
        //styles.push("top:"+anchorHeight+"px");
        styles.push("width:" + anchorWidth + "px");

        var po = [];
        po.push("<div id=\"" + cfg.targetID + "_AX_" + objID + "_AX_expandBox\" class=\"AXselectExpandBox\" style=\"" + styles.join(";") + "\">");
        po.push("<div id=\"" + cfg.targetID + "_AX_" + objID + "_AX_expandScroll\" class=\"AXselectExpandScroll\">");
        po.push("	<div class=\"AXLoadingSmall\"></div>");
        po.push("</div>");
        po.push("</div>");
        $(document.body).append(po.join(''));
        $("#" + cfg.targetID + "_AX_" + objID + "_AX_SelectBoxArrow").addClass("on");

        var expandBox = $("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox");
        var expBoxHeight = expandBox.outerHeight();
        var offset = $("#" + cfg.targetID + "_AX_" + objID).offset();
        var css = {};
        css.top = offset.top + anchorHeight;
        //css.top = offset.top;
        css.left = offset.left;
		
		var bodyHeight;
		(AXUtil.docTD == "Q") ? bodyHeight = document.body.scrollHeight : bodyHeight = document.documentElement.scrollHeight;
		//trace({bodyHeight:bodyHeight, top:css.top});
		
		if(bodyHeight < css.top.number()+expBoxHeight){
			css = {
				top:offset.top - expBoxHeight,
				left:offset.left	
			}
		}
		//trace(css);
        expandBox.css(css);

        this.bindSelectSetOptions(objID, objSeq);
    },
    bindSelectClose: function (objID, objSeq, event) {
        var obj = this.objects[objSeq];
        //trace("bindSelectorClose");
        var cfg = this.config;
        if ($M(cfg.targetID + "_AX_" + objID + "_AX_expandBox")) {
            $("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox").remove(); // 개체 삭제 처리
            $("#" + cfg.targetID + "_AX_" + objID + "_AX_SelectBoxArrow").removeClass("on");

            //비활성 처리후 메소드 종료
            $(document).unbind("click", obj.documentclickEvent);
            $(document).unbind("keydown", obj.documentKeyup);

            if (obj.config.isChangedSelect) {

                $M(objID).options[obj.config.selectedIndex].selected = true;
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
        var maxHeight = obj.config.maxHeight || 200;

        if (!obj.config.options) return;
		if (obj.config.options.length == 0) {
			$("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox").hide();
		}
        var po = [];

        $.each(obj.config.options, function (index, O) {
            po.push("<a href=\"#AXexec\" id=\"" + cfg.targetID + "_AX_" + objID + "_AX_" + index + "_AX_option\">" + O.optionText.dec() + "</a>");
        });
        $("#" + cfg.targetID + "_AX_" + objID + "_AX_expandScroll").html(po.join(''));
		
        var expandScrollHeight = $("#" + cfg.targetID + "_AX_" + objID + "_AX_expandScroll").height();
        if (expandScrollHeight > maxHeight) expandScrollHeight = maxHeight;
        $("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox").css({ height: expandScrollHeight + "px" });

        var bindSelectOptionsClick = this.bindSelectOptionsClick.bind(this);
        obj.documentclickEvent = function (event) {
            bindSelectOptionsClick(objID, objSeq, event);
        }
        var bindSelectKeyup = this.bindSelectKeyup.bind(this);
        obj.documentKeyup = function (event) {
            bindSelectKeyup(objID, objSeq, event);
        }
        $(document).bind("click", obj.documentclickEvent);
        $(document).bind("keydown", obj.documentKeyup);

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
        
		// 위치 재 정의 필요하면 정의 할 것 ----------------------------------
		var bodyHeight;
		(AXUtil.docTD == "Q") ? bodyHeight = document.body.clientHeight : bodyHeight = document.documentElement.clientHeight;
		//trace({bodyHeight:bodyHeight, top:css.top});

		var anchorHeight = $("#" + cfg.targetID + "_AX_" + objID).data("height") - 1;
        var expandBox = $("#" + cfg.targetID + "_AX_" + objID + "_AX_expandBox");
        var expBoxHeight = expandBox.outerHeight();
        var offset = $("#" + cfg.targetID + "_AX_" + objID).offset();
        var css = {};
        css.top = offset.top + anchorHeight;
		if(bodyHeight < css.top.number()+expBoxHeight){
			css = {
				top:offset.top - expBoxHeight,
				left:offset.left	
			}
			expandBox.css(css);
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
        }else if(event.keyCode == AXUtil.Event.KEY_UP){
			if(!obj.config.options) return;
			if(obj.config.options.length == 0) return;
			var focusIndex = obj.config.options.length - 1;
			if(obj.config.focusedIndex == undefined || obj.config.focusedIndex == 0){
				
			}else{
				focusIndex = (obj.config.focusedIndex) - 1;
			}
			this.bindSelectorSelect(objID, objSeq, focusIndex);        	
        }else if(event.keyCode == AXUtil.Event.KEY_DOWN){
			if(!obj.config.options) return;
			if(obj.config.options.length == 0) return;
			var focusIndex = 0;
			if(obj.config.focusedIndex == undefined || obj.config.focusedIndex == obj.config.options.length-1){
				
			}else{
				focusIndex = (obj.config.focusedIndex).number() + 1;
			}
			this.bindSelectorSelect(objID, objSeq, focusIndex);
        }else if(event.keyCode == AXUtil.Event.KEY_RETURN){
        	//alert("RETURN");
/*
	        $(document).unbind("click", obj.documentclickEvent);
	        $(document).unbind("keydown", obj.documentKeyup);
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

	bindSelectorSelect: function(objID, objSeq, index, changeValue){
		var obj = this.objects[objSeq];
		var cfg = this.config;
		if(obj.config.focusedIndex != undefined){
			$("#"+cfg.targetID + "_AX_"+objID+"_AX_"+obj.config.focusedIndex+"_AX_option").removeClass("on");
		}
		$("#"+cfg.targetID + "_AX_"+objID+"_AX_"+index+"_AX_option").addClass("on");
		obj.config.focusedIndex = index;
		obj.config.selectedIndex = index;
		obj.config.selectedObject = obj.config.options[index];
		obj.config.isChangedSelect = true;
		obj.myUIScroll.focusElement(cfg.targetID + "_AX_"+objID+"_AX_"+index+"_AX_option"); //focus		
	},
	bindSelectorSelectClear: function(objID, objSeq){
		
		var obj = this.objects[objSeq];
		var cfg = this.config;
		if(obj.config.selectedIndex != undefined){
			$("#"+cfg.targetID + "_AX_"+objID+"_AX_"+obj.config.selectedIndex+"_AX_option").removeClass("on");
		}
		obj.config.selectedIndex = null;
		obj.config.focusedIndex = null;
		obj.config.selectedObject = null;
		obj.config.isChangedSelect = true;
	},

/* ~~~~~~~~~~~~~ */
    bindSelectChangeValue: function (objID, value, onEnd) {
        var findIndex = null;
        $.each(this.objects, function (index, O) {
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
				
            	//alert($M(objID).options.selectedIndex);
            	//obj.config.selectedIndex = $M(objID).options.selectedIndex;
                for (var oi = 0; oi < $M(objID).options.length; oi++) {
                    //options.push({ optionValue: $M(objID).options[oi].value, optionText: $M(objID).options[oi].text });
                    if ($M(objID).options[oi].value == value){
                    	var selectedIndex = oi;
                    	$M(objID).options[oi].selected = true;
                    	obj.config.selectedObject = { optionValue: $M(objID).options[oi].value, optionText: $M(objID).options[oi].text.enc() };
                    	this.bindSelectChange(objID, findIndex);
		            	if (obj.config.onChange) {
		            		obj.config.onChange.call(obj.config.selectedObject, obj.config.selectedObject);
		            	}
						break;  	
                    }
                }
                
			}else{
				
					var selectedIndex = null;
					$.each(obj.config.options, function (oidx, O) {
						trace({optionValue:O.optionValue, value:value});
						if ((O.optionValue||O.value||"") == value){
							selectedIndex = oidx;
						}
					});
	
	            if (selectedIndex != null) {
	            	
	            	obj.config.selectedIndex = selectedIndex;
	            	obj.config.focusedIndex = selectedIndex;
	
	            	$M(objID).options[obj.config.selectedIndex].selected = true;
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
    }
});

var AXSelect = new AXSelectConverter();
AXSelect.setConfig({ targetID: "inputBasic" });

jQuery.fn.unbindSelect = function (config) {
    $.each(this, function () {
        if (config == undefined) config = {};
        config.id = this.id;
        AXSelect.unbind(config);
        return this;
    });
};

jQuery.fn.bindSelect = function (config) {
    $.each(this, function () {
        if (config == undefined) config = {};
        config.id = this.id;
        AXSelect.bind(config);
        return this;
    });
};

jQuery.fn.setConfigSelect = function(config){
	$.each(this, function(){
		AXSelect.bindSetConfig(this.id, config);
		return this;
	});
};

jQuery.fn.bindSelectSetValue = function (value, onEnd) {
    $.each(this, function () {
        AXSelect.bindSelectChangeValue(this.id, value, onEnd);
        return this;
    });
};

//SetText
//getText

jQuery.fn.setValueSelect = function (value, onEnd) {
    $.each(this, function () {
        AXSelect.bindSelectChangeValue(this.id, value, onEnd);
        return this;
    });
};


/*!
 * axisJ Javascript Library Version 1.0
 * http://axisJ.com
 * 
 * 아래 소스의 라이선스는 axisJ.com 에서 확인 하실 수 있습니다.
 * http://axisJ.com/license
 * axisJ를 사용하시려면 라이선스 페이지를 확인 및 숙지 후 사용 하시기 바람니다. 무단 사용시 예상치 못한 피해가 발생 하실 수 있습니다.
 */

var AXTabClass = Class.create(AXJ, {
    version: "AXTabClass V0.1",
    author: "tom@axisj.com",
    logs: [
		"2013-07-05 오후 1:16:16"
    ],
    initialize: function(AXJ_super) {
        AXJ_super();
        this.objects = [];
        this.config.handleWidth = 22;
        this.config.responsiveWidth = AXConfig.mobile.responsiveWidth;
    },
    init: function(){
    	
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
		
		obj.theme = (obj.theme || "AXTabs");
		obj.overflow = (obj.overflow || "visible");
		obj.scrollAmount = (obj.scrollAmount || 5);
		obj.options = (obj.options || [{optionValue:"null", optionText:"빈 탭"}]);
		
        jQuery.each(this.objects, function (idx, O) {
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
    initTab: function(objID, objSeq){
    	//trace({objID:objID, objSeq:objSeq});
    	var cfg = this.config;
    	var obj = this.objects[objSeq];

		var po = [];
		po.push("<div class=\"" + obj.config.theme + "\" id=\"" + objID + "_AX_tabContainer\">");
			
			po.push("	<div class=\"AXTabsTray\" id=\"" + objID + "_AX_tabTray\">");
				if(obj.config.overflow != "visible"){
				po.push("	<div class=\"trayScroll\" id=\"" + objID + "_AX_tabScroll\">");
				}

				var selectedIndex = null;
				jQuery.each(obj.config.options, function(oidx, O){
					po.push("<a href=\"javascript:;\" id=\"" + objID + "_AX_Tabs_AX_"+oidx+"\" class=\"AXTab " + (O.addClass || ""));
					if(O.optionValue == obj.config.value){
						selectedIndex = oidx;
						po.push(" on");	
					}
					po.push("\">");
					po.push(O.optionText.dec() + "</a>");
					//if(AXUtil.browser.mobile){
						po.push("<span class='AXTabSplit'></span>");
					//}
				});
				
				obj.config.selectedIndex = selectedIndex;			
				po.push("	<div class=\"clear\"></div>");
			if(obj.config.overflow != "visible"){
			po.push("	</div>");
			po.push("	<div class=\"leftArrowHandleBox\"><a href=\"javascript:;\" class=\"tabArrow\" id=\"" + objID + "_AX_Arrow_AX_Left\">arrow</a></div>");
			po.push("	<div class=\"rightArrowHandleBox\"><a href=\"javascript:;\" class=\"tabArrow\" id=\"" + objID + "_AX_Arrow_AX_Right\">arrow</a></div>");
			po.push("	<div class=\"rightArrowMoreBox\"><a href=\"javascript:;\" class=\"tabArrow\" id=\"" + objID + "_AX_Arrow_AX_More\">arrow</a></div>");
			}
		po.push("	</div>");
		po.push("</div>");
		
		obj.jQueryObjID = jQuery("#"+objID);
		obj.jQueryObjID.html(po.join(''));
		obj.jQueryObjID.data("objSeq", objSeq); /* memory objSeq */
		
	    obj.tabTray = jQuery("#" + objID + "_AX_tabTray");
	    obj.tabScroll = jQuery("#" + objID + "_AX_tabScroll");
	    obj.tabContainer = jQuery("#" + objID + "_AX_tabContainer");
    	
    	var setValueTab = this.setValueTab.bind(this);
    	var myMenu = [];
    	jQuery.each(obj.config.options, function(oidx, O){
    		myMenu.push({label:O.optionText, value:O.optionValue, className:"", onclick:function(){
    			//trace(this);
    			setValueTab(objID, this.menu.value);
    		}});
    	});
    	
		AXContextMenu.bind({
			id:objID + "_AX_tabMore", 
			theme:"AXContextMenu", // 선택항목
			width:"200", // 선택항목
			menu:myMenu
		});

    	var bindTabClick = this.bindTabClick.bind(this);
    	obj.tabContainer.find(".AXTab").bind("click", function(event){
    		bindTabClick(objID, objSeq, event);
    	});
    	var bindTabMove = this.bindTabMove.bind(this);
    	var bindTabMoveClick = this.bindTabMoveClick.bind(this);
    	var bindTabMoreClick = this.bindTabMoreClick.bind(this);
    	
    	jQuery("#" + objID + "_AX_Arrow_AX_Left").bind("mouseover", function(event){
    		bindTabMove(objID, objSeq, "left", event);
    	});
    	jQuery("#" + objID + "_AX_Arrow_AX_Right").bind("mouseover", function(event){
    		bindTabMove(objID, objSeq, "right", event);
    	});
    	jQuery("#" + objID + "_AX_Arrow_AX_Left, #" + objID + "_AX_Arrow_AX_Right").bind("mouseout", function(event){
    		if(obj.moveobj) clearTimeout(obj.moveobj);
    	});
    	jQuery("#" + objID + "_AX_Arrow_AX_Left").bind("mousedown", function(event){
    		bindTabMoveClick(objID, objSeq, "left", event);
    	});
    	jQuery("#" + objID + "_AX_Arrow_AX_Right").bind("mousedown", function(event){
    		bindTabMoveClick(objID, objSeq, "right", event);
    	});
    	jQuery("#" + objID + "_AX_Arrow_AX_More").bind("click", function(event){
    		bindTabMoreClick(objID, objSeq, "right", event);
    	});
    	
    	if(obj.overflow != "visible"){
	    	var tabsWidth = (AXUtil.clientWidth() < cfg.responsiveWidth) ? 40 : 30;
	    	var tabsMargin = (AXUtil.clientWidth() < cfg.responsiveWidth) ? 1 : 0;
	    	obj.tabContainer.find(".AXTab").each(function(){
	    		tabsWidth += (jQuery(this).outerWidth().number() + jQuery(this).css("marginLeft").number() + jQuery(this).css("marginRight").number() + tabsMargin);
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
				this.focusingItem(objID, objSeq, obj.config.selectedIndex);
			}
			
			if(trayWidth < scrollWidth && AXUtil.clientWidth() < cfg.responsiveWidth){
				obj.tabContainer.find(".leftArrowHandleBox").hide();
				obj.tabContainer.find(".rightArrowHandleBox").hide();
				obj.tabScroll.css({left:0});
			}
			
			/* touch event */
			var touchstart = this.touchstart.bind(this);
			if(AXUtil.browser.mobile){
				var touchBodyID = obj.tabTray.get(0).id;
				this.touchstartBind = function () { touchstart(objID, objSeq); };
				if (document.addEventListener) AXgetId(touchBodyID).addEventListener("touchstart", this.touchstartBind, false);
			}else{
				this.touchstartBind = function (event) { touchstart(objID, objSeq, event); };
				obj.tabTray.unbind("mousedown.AXMobileTouch").bind("mousedown.AXMobileTouch", this.touchstartBind);
			}
			obj.tabTray.attr("onselectstart", "return false");
			obj.tabTray.addClass("AXUserSelectNone");
			
			obj.tabTray.unbind("dragstart.AXMobileTouch").bind("dragstart.AXMobileTouch", this.cancelEvent.bind(this));
			/* touch event */
			
	    }
    },
    bindTabClick: function(objID, objSeq, event){
    	//trace({objID:objID, objSeq:objSeq, e:event.target.id});
    	var cfg = this.config;
    	var obj = this.objects[objSeq];
    	
		// event target search -
		var eid = event.target.id.split(/_AX_/g);
		var eventTarget = event.target;
		var myTarget = this.getEventTarget({
			evt: eventTarget, evtIDs: eid,
			until: function (evt, evtIDs) { return (jQuery(evt.parentNode).hasClass("AXTabsTray")) ? true : false; },
			find: function (evt, evtIDs) { return (jQuery(evt).hasClass("AXTab")) ? true : false; }
		});
		// event target search ------------------------    	
    	
    	if (myTarget) {
			//colHeadTool ready
			var targetID = myTarget.id;
			var itemIndex = targetID.split(/_AX_/g).last();
			
			//trace(obj.config.options[itemIndex]);
			
			var selectedObject = obj.config.options[itemIndex];
			if(obj.config.value != selectedObject.optionValue){
				
				jQuery("#" + objID + "_AX_Tabs_AX_"+obj.config.selectedIndex).removeClass("on");
				jQuery("#" + objID + "_AX_Tabs_AX_"+itemIndex).addClass("on");
				
				obj.config.value = selectedObject.optionValue;
				obj.config.selectedIndex = itemIndex;
				
				this.focusingItem(objID, objSeq, obj.config.selectedIndex);
				
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
    setValueTab: function(objID, value){
    	//trace({objID:objID, value:value});
		var cfg = this.config;
		var objSeq = null;
		jQuery.each(this.objects, function(index, O){
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
			jQuery.each(obj.config.options, function(oidx, O){
				if(O.optionValue == value){
					itemIndex = oidx;
					return false;
				}
			});

			if(itemIndex == null) return;

			var selectedObject = obj.config.options[itemIndex];
			if(obj.config.value != selectedObject.optionValue){
				
				jQuery("#" + objID + "_AX_Tabs_AX_"+obj.config.selectedIndex).removeClass("on");
				jQuery("#" + objID + "_AX_Tabs_AX_"+itemIndex).addClass("on");
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
    bindTabMove: function(objID, objSeq, direction, event){
    	//trace({objID:objID, objSeq:objSeq});
    	var cfg = this.config;
    	var obj = this.objects[objSeq];

		var trayWidth = obj.tabTray.outerWidth();
    	if(AXUtil.clientWidth() < cfg.responsiveWidth){
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
		
		trace("move");
		
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
	bindTabMoveClick: function(objID, objSeq, direction, event){
    	var cfg = this.config;
    	var obj = this.objects[objSeq];
    	
    	if(obj.moveobj) clearTimeout(obj.moveobj);
    	
		var scrollAmount = 500;
		
		var trayWidth = obj.tabTray.outerWidth();
    	if(AXUtil.clientWidth() < cfg.responsiveWidth){
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
    bindTabMoreClick: function(objID, objSeq, direction, event){
    	var cfg = this.config;
    	var obj = this.objects[objSeq];
    	
    	AXContextMenu.open({id:objID + "_AX_tabMore", title:AXConfig.AXContextMenu.title}, event);
    },
    resizeCheck: function(){
    	var cfg = this.config;
    	var focusingItem = this.focusingItem.bind(this);
    	
    	jQuery.each(this.objects, function(objSeq, O){
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
				if(AXUtil.clientWidth() < cfg.responsiveWidth){
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
    focusingItem: function(objID, objSeq, optionIndex){
    	var cfg = this.config;
    	var obj = this.objects[objSeq];
    	
    	if(obj.tabTray.outerWidth() > obj.tabScroll.outerWidth()){
    		return;
    	}
    	
    	if(AXUtil.clientWidth() < cfg.responsiveWidth){
    		var scrollLeft = (jQuery("#" + objID + "_AX_Tabs_AX_" + optionIndex).position().left);
    		var itemWidth = (jQuery("#" + objID + "_AX_Tabs_AX_" + optionIndex).outerWidth());
    		var handleWidth = 0;
    		var rightMargin = 40;
    	}else{
    		var scrollLeft = (jQuery("#" + objID + "_AX_Tabs_AX_" + optionIndex).position().left - cfg.handleWidth);
    		var itemWidth = (jQuery("#" + objID + "_AX_Tabs_AX_" + optionIndex).outerWidth());
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
			
			jQuery(document.body).bind("mouseup.AXMobileTouch", this.touchEndBind);
			jQuery(document.body).bind("mousemove.AXMobileTouch", this.touchMoveBind);
		}
		
		obj.tabScroll.stop();
	},
	touchMove: function (objID, objSeq, e) {
		if (this.touhEndObserver) clearTimeout(this.touhEndObserver); //닫기 명령 제거
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
			jQuery(document.body).unbind("mouseup.AXMobileTouch");
			jQuery(document.body).unbind("mousemove.AXMobileTouch");
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
		if(newLeft > obj.tabTray.width() * 0.5){
			newLeft = obj.tabTray.width() * 0.5;
		}else if(newLeft < -(obj.tabScroll.width() - obj.tabTray.width() * 0.5)){
			newLeft = -(obj.tabScroll.width() - obj.tabTray.width() * 0.5);
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
		if(endLeft > 0){
			endLeft = 0;
		}
		var newLeft = endLeft.abs();
   		if(AXUtil.clientWidth() < cfg.responsiveWidth){
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
	}
});

var AXTab = new AXTabClass();
AXTab.setConfig({});
jQuery(window).bind("resize", function(){
	AXTab.resizeCheck();
});

jQuery.fn.unbindTab = function (config) {
    jQuery.each(this, function () {
        if (config == undefined) config = {};
        config.id = this.id;
        AXTab.unbind(config);
        return this;
    });
};

jQuery.fn.bindTab = function (config) {
    jQuery.each(this, function () {
        if (config == undefined) config = {};
        config.id = this.id;
        AXTab.bind(config);
        return this;
    });
};

jQuery.fn.setValueTab = function (value) {
    jQuery.each(this, function () {
        AXTab.setValueTab(this.id, value);
        return this;
    });
};
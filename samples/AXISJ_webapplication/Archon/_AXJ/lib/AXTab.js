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
    initialize: function($super) {
        $super();
        this.objects = [];
        this.config.handleWidth = 29;
    },
    init: function(){
    	
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
		
		obj.theme = (obj.theme || "AXTabs");
		obj.overflow = (obj.overflow || "visible");
		obj.scrollAmount = (obj.scrollAmount || 200);
		obj.options = (obj.options || [{optionValue:"null", optionText:"빈 탭"}]);
		
        $.each(this.objects, function (idx, O) {
            if (this.id == objID) objSeq = idx;
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
				$.each(obj.config.options, function(oidx, O){
					po.push("<a href=\"#axexec\" id=\"" + objID + "_AX_Tabs_AX_"+oidx+"\" class=\"AXTab " + (O.addClass || ""));
					if(O.optionValue == obj.config.value){
						selectedIndex = oidx;
						po.push(" on");	
					}
					po.push("\">");
					po.push(O.optionText.dec() + "</a>");
				});
				
				obj.config.selectedIndex = selectedIndex;			
				po.push("	<div class=\"clear\"></div>");
			if(obj.config.overflow != "visible"){
			po.push("	</div>");
			po.push("	<div class=\"leftArrowHandleBox\"><a href=\"#axexec\" class=\"tabArrow\" id=\"" + objID + "_AX_Arrow_AX_Left\">arrow</a></div>");
			po.push("	<div class=\"rightArrowHandleBox\"><a href=\"#axexec\" class=\"tabArrow\" id=\"" + objID + "_AX_Arrow_AX_Right\">arrow</a></div>");
			}
		po.push("	</div>");
		po.push("</div>");
		
		$("#"+objID).html(po.join(''));
    	
    	var bindTabClick = this.bindTabClick.bind(this);
    	$("#" + objID + "_AX_tabContainer").find(".AXTab").bind("click", function(event){
    		bindTabClick(objID, objSeq, event);
    	});	
    	
    	var bindTabMove = this.bindTabMove.bind(this);
    	var bindTabMoveClick = this.bindTabMoveClick.bind(this);
    	
    	$("#" + objID + "_AX_Arrow_AX_Left").bind("mouseover", function(event){
    		bindTabMove(objID, objSeq, "left", event);
    	});
    	$("#" + objID + "_AX_Arrow_AX_Right").bind("mouseover", function(event){
    		bindTabMove(objID, objSeq, "right", event);
    	});	
    	$("#" + objID + "_AX_Arrow_AX_Left, #" + objID + "_AX_Arrow_AX_Right").bind("mouseout", function(event){
    		if(obj.moveobj) clearTimeout(obj.moveobj);
    	});
    	
    	$("#" + objID + "_AX_Arrow_AX_Left").bind("mousedown", function(event){
    		bindTabMoveClick(objID, objSeq, "left", event);
    	});
    	$("#" + objID + "_AX_Arrow_AX_Right").bind("mousedown", function(event){
    		bindTabMoveClick(objID, objSeq, "right", event);
    	});	
    	
    	if(obj.overflow != "visible"){
	    	var tabsWidth = 10;
	    	$("#" + objID + "_AX_tabContainer").find(".AXTab").each(function(){
	    		tabsWidth += ($(this).outerWidth().number() + $(this).css("marginLeft").number() + $(this).css("marginRight").number());
	    	});
	    	
	    	$("#" + objID + "_AX_tabScroll").css({width:tabsWidth, left:cfg.handleWidth});
	    	$("#" + objID + "_AX_tabTray").css({height:$("#" + objID + "_AX_tabScroll").outerHeight()});
	    	
			var trayWidth = $("#" + objID + "_AX_tabTray").outerWidth();
			var scrollWidth = $("#" + objID + "_AX_tabScroll").outerWidth();
			
			if(trayWidth > scrollWidth){
				$("#" + objID + "_AX_tabContainer").find(".leftArrowHandleBox").hide();
				$("#" + objID + "_AX_tabContainer").find(".rightArrowHandleBox").hide();
				$("#" + objID + "_AX_tabScroll").css({left:0});
			}
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
			until: function (evt, evtIDs) { return ($(evt.parentNode).hasClass("AXTabsTray")) ? true : false; },
			find: function (evt, evtIDs) { return ($(evt).hasClass("AXTab")) ? true : false; }
		});
		// event target search ------------------------    	
    	
    	if (myTarget) {
			//colHeadTool ready
			var targetID = myTarget.id;
			var itemIndex = targetID.split(/_AX_/g).last();
			
			//trace(obj.config.options[itemIndex]);
			
			var selectedObject = obj.config.options[itemIndex];
			
			if(obj.config.value != selectedObject.optionValue){
				
				$("#" + objID + "_AX_Tabs_AX_"+obj.config.selectedIndex).removeClass("on");
				$("#" + objID + "_AX_Tabs_AX_"+itemIndex).addClass("on");
				
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
    setValueTab: function(objID, value){
    	//trace({objID:objID, value:value});
		var cfg = this.config;
		var objSeq = null;
		$.each(this.objects, function(index, O){
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
			$.each(obj.config.options, function(oidx, O){
				if(O.optionValue == value){
					itemIndex = oidx;
					return false;
				}
			});

			if(itemIndex == null) return;

			var selectedObject = obj.config.options[itemIndex];
			if(obj.config.value != selectedObject.optionValue){
				
				$("#" + objID + "_AX_Tabs_AX_"+obj.config.selectedIndex).removeClass("on");
				$("#" + objID + "_AX_Tabs_AX_"+itemIndex).addClass("on");
				
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

		var trayWidth = $("#" + objID + "_AX_tabTray").outerWidth();
		var scrollWidth = $("#" + objID + "_AX_tabScroll").outerWidth();
		var scrollLeft = $("#" + objID + "_AX_tabScroll").position().left;
		
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
				//trace({trayWidth:(trayWidth - cfg.handleWidth), scrollWidth:scrollWidth, scrollLeft:scrollLeft});
				scrollLeft = trayWidth - scrollWidth - cfg.handleWidth;
				animateStyles = {left:scrollLeft};
			}else{
				//return;
			}			

		}
		
		//$("#" + objID + "_AX_tabScroll").stop();
		
		$("#" + objID + "_AX_tabScroll").css(animateStyles);
		
		var bindTabMove = this.bindTabMove.bind(this);
		
		if(obj.moveobj) clearTimeout(obj.moveobj);
		
		obj.moveobj = setTimeout(function(){
			bindTabMove(objID, objSeq, direction, event);
		}, 20);
		
		
		/*
		$("#" + objID + "_AX_tabScroll").animate(
			animateStyles,
			500,
			"sineInOut",
			function(){
			}
		);
		*/
		
    },
	bindTabMoveClick: function(objID, objSeq, direction, event){
		
    	//trace({objID:objID, objSeq:objSeq});
    	var cfg = this.config;
    	var obj = this.objects[objSeq];
    	
    	if(obj.moveobj) clearTimeout(obj.moveobj);
    	
		cfg.scrollAmount = 500;
		
		var trayWidth = $("#" + objID + "_AX_tabTray").outerWidth();
		var scrollWidth = $("#" + objID + "_AX_tabScroll").outerWidth();
		var scrollLeft = $("#" + objID + "_AX_tabScroll").position().left;
		
		//trace({trayWidth:trayWidth, scrollWidth:scrollWidth, scrollLeft:scrollLeft});
		
		var animateStyles = {};
		if(direction == "left"){
			if(scrollLeft < cfg.handleWidth){
				scrollLeft += cfg.scrollAmount;
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
				scrollLeft -= cfg.scrollAmount;
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
		
		$("#" + objID + "_AX_tabScroll").stop();
		$("#" + objID + "_AX_tabScroll").animate(
			animateStyles,
			500,
			"sineInOut",
			function(){
			}
		);		
    },
    resizeCheck: function(){
    	var cfg = this.config;
    	$.each(this.objects, function(){
    		var objID = this.id;
			var trayWidth = $("#" + objID + "_AX_tabTray").outerWidth();
			var scrollWidth = $("#" + objID + "_AX_tabScroll").outerWidth();
			if(trayWidth > scrollWidth){
				$("#" + objID + "_AX_tabContainer").find(".leftArrowHandleBox").hide();
				$("#" + objID + "_AX_tabContainer").find(".rightArrowHandleBox").hide();
				$("#" + objID + "_AX_tabScroll").css({left:0});
			}else{
				$("#" + objID + "_AX_tabContainer").find(".leftArrowHandleBox").show();
				$("#" + objID + "_AX_tabContainer").find(".rightArrowHandleBox").show();
				$("#" + objID + "_AX_tabScroll").css({left:cfg.handleWidth});	
			}
    	});
    }
});

var AXTab = new AXTabClass();
AXTab.setConfig({});
$(window).bind("resize", function(){
	AXTab.resizeCheck();
});

jQuery.fn.unbindTab = function (config) {
    $.each(this, function () {
        if (config == undefined) config = {};
        config.id = this.id;
        AXTab.unbind(config);
        return this;
    });
};

jQuery.fn.bindTab = function (config) {
    $.each(this, function () {
        if (config == undefined) config = {};
        config.id = this.id;
        AXTab.bind(config);
        return this;
    });
};

jQuery.fn.setValueTab = function (value) {
    $.each(this, function () {
        AXTab.setValueTab(this.id, value);
        return this;
    });
};
/**
 * @class AXTabClass
 * @classdesc 탭 클래스
 * @extends AXJ
 * @version V0.9.2
 * @author tom@axisj.com
 * @logs
 "2013-07-05 오후 1:16:16",
 "2014-04-14 : tom 모바일 반응 너비 지정 방식 변경 & ff 타이밍 버그 픽스 ",
 "2014-11-27 : HJ.Park addTabs, removeTab 메서드 추가 ",
 "2014-11-28 : HJ.Park removeTab -> closeTab 메서드 명칭 변경, closable 속성 구현, onlcose 이벤트 추가 "
 "2014-12-18 : tom add method [onclick]
 "2015-02-04 : updateTabs 추가
 "2015-05-13 : tom removeTab 중간탭이 삭제될 때 발생되는 인덱스 문제 해결"
 "2015-06-03 : HJ.Park closeTab 이벤트가 발생되지 않는 버그 수정 -> https://github.com/axisj/axisj/issues/593"
 "2015-06-05 : HJ.Park jQueryExtends.closeTab 버그 수정"
 * @example
 * ```js
 * $("#myTab01").bindTab({
 *    theme : "AXTabs",
 *    value:"",
 *    overflow:"scroll", // "visible"
 *    options:[
 *        {optionValue:"M", optionText:"남성", closable:true},
 *        {optionValue:"F", optionText:"여성", closable:true},
 *        {optionValue:"N", optionText:"선택안함"},
 *        {optionValue:"", optionText:"모두"}
 *    ],
 *    onchange: function(selectedObject, value){
 *        //toast.push(Object.toJSON(this));
 *        //toast.push(Object.toJSON(selectedObject));
 *        toast.push("onchange: "+Object.toJSON(value));
 *    },
 *    onclose: function(selectedObject, value){
 *        //toast.push(Object.toJSON(this));
 *        //toast.push(Object.toJSON(selectedObject));
 *        toast.push("onclose: "+Object.toJSON(value));
 *    },
 *    onclick: function(selectedObject, value){
 *
 *    }
 * });
 * ```
 */
var AXTabClass = Class.create(AXJ, {
    initialize: function(AXJ_super) {
        AXJ_super();
        this.objects = [];
        this.config.handleWidth = 22;
        this.config.responsiveMobile = AXConfig.mobile.responsiveWidth;
        this.config.bounces = true;
        this.config.closable = ( (AXConfig && AXConfig.AXTab && AXConfig.AXTab.closable) ? AXConfig.AXTab.closable : false );
    },
    init: function(){
        axdom(window).bind("resize", this.windowResize.bind(this));
    },
    windowResize: function () {
        var windowResizeApply = this.windowResizeApply.bind(this);
        if (this.windowResizeObserver) clearTimeout(this.windowResizeObserver);
        this.windowResizeObserver = setTimeout(function () {
            windowResizeApply();
        }, 500);
    },
    windowResizeApply: function(){
        this.resizeCheck();
    },
    /**
     * @method AXTabClass.bind
     * @param {Object} obj - config
     * @description 대상에 탭 속성을 부여 합니다.
     * @returns {AXTab}
     * @example
     * ```js
     * $("#myTab01").bindTab({
     *     theme : "AXTabs",
     *     value:"2",
     *     closable: false,
     *     options:[
     *         {optionValue:"1", optionText:"1살", closable: true},
     *         {optionValue:"2", optionText:"2살", closable: true},
     *         {optionValue:"3", optionText:"3살", addClass:"Red"},
     *         {optionValue:"4", optionText:"4살", addClass:"Blue"},
     *         {optionValue:"5", optionText:"5살", addClass:"Green"},
     *         {optionValue:"6", optionText:"6살", addClass:"Classic"},
     *         {optionValue:"7", optionText:"7살"}
     *     ],
     *     onchange: function(selectedObject, value){
     *         //toast.push(Object.toJSON(this));
     *         //toast.push(Object.toJSON(selectedObject));
     *         toast.push(Object.toJSON(value));
     *     },
     *     onclose: function(selectedObject, value) {
     *         //toast.push(Object.toJSON(this));
     *         //toast.push(Object.toJSON(selectedObject));
     *         toast.push(Object.toJSON(value));
     *     }
     * });
     * ```
     */
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

        axdom.each(this.objects, function (idx, O) {
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
    /**
     * @method AXTabClass.initTab
     * @param {String} objID - 탭 대상 ID
	 * @param {Number} objSeq - 대상 순서 seq
     * @description 탭을 초기화 합니다.
     * @returns {AXTab}
	 */
    initTab: function(objID, objSeq){
    	//trace({objID:objID, objSeq:objSeq});
    	var cfg = this.config, _this = this;
    	var obj = this.objects[objSeq];

		var po = [];
	    var subOptions = [];
		po.push("<div class=\"" + obj.config.theme + "\" id=\"" + objID + "_AX_tabContainer\">");
			po.push("<div class=\"AXTabsTray\" id=\"" + objID + "_AX_tabTray\">");
				if(obj.config.overflow != "visible"){
				po.push("	<div class=\"trayScroll\" id=\"" + objID + "_AX_tabScroll\">");
				}
				po.push("	<div class=\"clear\"></div>");
			if(obj.config.overflow != "visible"){
			po.push("	</div>");
			po.push("	<div class=\"leftArrowHandleBox\" style=\"display:none;\"><a href=\"javascript:;\" class=\"tabArrow\" id=\"" + objID + "_AX_Arrow_AX_Left\">arrow</a></div>");
			po.push("	<div class=\"rightArrowHandleBox\" style=\"display:none;\"><a href=\"javascript:;\" class=\"tabArrow\" id=\"" + objID + "_AX_Arrow_AX_Right\">arrow</a></div>");
			po.push("	<div class=\"rightArrowMoreBox\" style=\"display:none;\"><a href=\"javascript:;\" class=\"tabArrow\" id=\"" + objID + "_AX_Arrow_AX_More\">arrow</a></div>");
			}
			po.push("</div>");

			if(subOptions.length > 0){
				// subOptions :
			}
		po.push("</div>");

		obj.jQueryObjID = axdom("#"+objID);
		obj.jQueryObjID.html(po.join(''));
		obj.jQueryObjID.data("objSeq", objSeq); /* memory objSeq */

		obj.tabTray = axdom("#" + objID + "_AX_tabTray");
		obj.tabScroll = axdom("#" + objID + "_AX_tabScroll");
		obj.tabContainer = axdom("#" + objID + "_AX_tabContainer");

		AXContextMenu.bind({
			id:objID + "_AX_tabMore",
			theme:"AXContextMenu", // 선택항목
			width:"200", // 선택항목
			menu:[]
		});

		this.addTabs(objID, obj.config.options);

		var bindTabMove = this.bindTabMove.bind(this);
		var bindTabMoveClick = this.bindTabMoveClick.bind(this);
		var bindTabMoreClick = this.bindTabMoreClick.bind(this);

		axdom("#" + objID + "_AX_Arrow_AX_Left").bind("mouseover", function(event){
			bindTabMove(objID, objSeq, "left", event);
		});
		axdom("#" + objID + "_AX_Arrow_AX_Right").bind("mouseover", function(event){
			bindTabMove(objID, objSeq, "right", event);
		});
		axdom("#" + objID + "_AX_Arrow_AX_Left, #" + objID + "_AX_Arrow_AX_Right").bind("mouseout", function(event){
			if(obj.moveobj) clearTimeout(obj.moveobj);
		});
		axdom("#" + objID + "_AX_Arrow_AX_Left").bind("mousedown", function(event){
			bindTabMoveClick(objID, objSeq, "left", event);
		});
		axdom("#" + objID + "_AX_Arrow_AX_Right").bind("mousedown", function(event){
			bindTabMoveClick(objID, objSeq, "right", event);
		});
		axdom("#" + objID + "_AX_Arrow_AX_More").bind("click", function(event){
			bindTabMoreClick(objID, objSeq, "right", event);
		});

		if(obj.overflow != "visible"){
			setTimeout(function(){
				var tabsWidth = (axf.clientWidth() < cfg.responsiveMobile) ? 40 : 30;
				var tabsMargin = (axf.clientWidth() < cfg.responsiveMobile) ? 5 : 5;
				obj.tabContainer.find(".AXTab").each(function(){
					tabsWidth += (axdom(this).outerWidth().number() + axdom(this).css("marginLeft").number() + axdom(this).css("marginRight").number() + tabsMargin);
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
					obj.tabContainer.find(".leftArrowHandleBox").show();
					obj.tabContainer.find(".rightArrowHandleBox").show();
					obj.tabContainer.find(".rightArrowMoreBox").show();
					_this.focusingItem(objID, objSeq, obj.config.selectedIndex);
				}

				if(trayWidth < scrollWidth && AXUtil.clientWidth() < cfg.responsiveMobile){
					obj.tabContainer.find(".leftArrowHandleBox").hide();
					obj.tabContainer.find(".rightArrowHandleBox").hide();
					obj.tabScroll.css({left:0});
				}else{

				}

				/* touch event */
				var touchstart = _this.touchstart.bind(_this);
				if(AXUtil.browser.mobile){
					var touchBodyID = obj.tabTray.get(0).id;
					_this.touchstartBind = function () { touchstart(objID, objSeq); };
					if (document.addEventListener) AXgetId(touchBodyID).addEventListener("touchstart", _this.touchstartBind, false);
				}else{
					_this.touchstartBind = function (event) { touchstart(objID, objSeq, event); };
					obj.tabTray.unbind("mousedown.AXMobileTouch").bind("mousedown.AXMobileTouch", _this.touchstartBind);
				}
				obj.tabTray.attr("onselectstart", "return false");
				obj.tabTray.addClass("AXUserSelectNone");

				obj.tabTray.unbind("dragstart.AXMobileTouch").bind("dragstart.AXMobileTouch", _this.cancelEvent.bind(_this));
				/* touch event */
			}, 50);
		}
	},
	/**
	 * @method AXTabClass.addTabs
	 * @param {String} objID - 탭 대상 ID
	 * @param {Array} options - 대상 순서 seq
	 * @description 탭을 추가 합니다.
	 * @returns {AXTab}
	 * @example
	 * ```js
	 * $("#myTab01").addTabs([
	 *     {optionValue:"1", optionText:"1살", closable: true},
	 *     {optionValue:"2", optionText:"2살", closable: true},
	 *     {optionValue:"3", optionText:"3살", addClass:"Red"},
	 *     {optionValue:"4", optionText:"4살", addClass:"Blue"},
	 *     {optionValue:"5", optionText:"5살", addClass:"Green"},
	 *     {optionValue:"6", optionText:"6살", addClass:"Classic"},
	 *     {optionValue:"7", optionText:"7살"}
	 * ]);
	 * ```
	 */
	addTabs: function(objID, options){
		var cfg = this.config;
		var objSeq = axdom("#" + objID).data("objSeq");
		var obj = this.objects[objSeq];
		var po = [];
		var target;
		if(obj.config.overflow == "visible"){
			target = axdom("#" + objID + "_AX_tabTray div.clear");
		}else{
			target = axdom("#" + objID + "_AX_tabScroll div.clear");
		}

		var tabsCnt = obj.tabContainer.find(".AXTab").length;
		var selectedIndex = null;
		axdom.each(options, function(oidx, O){
			var closable = O.closable || obj.config.closable || cfg.closable;
			oidx += tabsCnt;

			po.push("<a href=\"javascript:;\" id=\"" + objID + "_AX_Tabs_AX_"+oidx+"\" class=\"AXTab " + (O.addClass || ""));
			if(closable){
				po.push(" closable");
			}
			if(O.optionValue == obj.config.value){
				selectedIndex = oidx;
				po.push(" on");
			}
			po.push("\">");
			po.push(O.optionText.dec());
			if(closable){
				po.push("<span class=\"AXTabClose\"></span>");
			}
			po.push("</a>");
			//if(AXUtil.browser.mobile){
				po.push("<span class='AXTabSplit'></span>");
			//}
		});

		if(selectedIndex != null){
			obj.config.selectedIndex = selectedIndex;
		}
		target.before(po.join(""));

		var tabsWidth = (axf.clientWidth() < cfg.responsiveMobile) ? 40 : 30;
		var tabsMargin = (axf.clientWidth() < cfg.responsiveMobile) ? 5 : 5;
		obj.tabContainer.find(".AXTab").each(function(){
			tabsWidth += (axdom(this).outerWidth().number() + axdom(this).css("marginLeft").number() + axdom(this).css("marginRight").number() + tabsMargin);
		});
		obj.tabScroll.css({width:tabsWidth});

		var setValueTab = this.setValueTab.bind(this);
		var myMenu = [];
		axdom.each(obj.config.options, function(oidx, O){
			myMenu.push({label:O.optionText, value:O.optionValue, className:"", onclick:function(){
				//trace(this);
				setValueTab(objID, this.menu.value);
			}});
		});

		var tabMoreID = objID + "_AX_tabMore";
		axdom.each(AXContextMenu.objects, function(oidx, O){
			if(O.id == tabMoreID){
				O.menu = myMenu;
				return false; // break;
			}
		});

		var bindTabClick = this.bindTabClick.bind(this);
		obj.tabContainer.find(".AXTab").unbind("click").bind("click", function(event){
			bindTabClick(objID, objSeq, event);
		});

		var closeTab = this.closeTab.bind(this);
		obj.tabContainer.find(".AXTabClose").unbind("click").bind("click", function(event){
			var tabIndex = obj.tabContainer.find(".AXTab").index(axdom(event.target).parent());
			if (tabIndex === -1) { return; }
			closeTab(objID, tabIndex, event);
		});
	},
	/**
	 * @method AXTabClass.closeTab
	 * @param {String} objID - 탭 대상 ID
	 * @param {Number|String} [tabIndex or options] - 탭 인덱스(Number) or optionValue(String)
	 * @description 탭을 닫습니다.
	 * @returns {AXTab}
	 * @example
 	 * ```js
 	 * $("#myTab01").closeTab(2);
 	 * $("#myTab01").closeTab("optionValue");
 	 * ```
	 */
	closeTab: function(objID, tabIndex, event) {
		var objSeq = axdom("#" + objID).data("objSeq");
		var obj    = this.objects[objSeq];

        if (!obj.config.options) { return; }

        tabIndex = (tabIndex === undefined ? (obj.config.options.length - 1) : tabIndex);
        // find tabIndex by optionValue
        if (typeof(tabIndex) != "number") {
            axdom.each(obj.config.options, function(oidx, O){
                if (O.optionValue === tabIndex) {
                    tabIndex = oidx;
                    return false;
                }
            });
        }

        var removeTargetOption = obj.config.options.splice(tabIndex, 1)[0]; // remove and store target optoin

        // selected tab update
        if(obj.config.selectedIndex == tabIndex){
            var selectedIndex = tabIndex - 1;
            if (selectedIndex > -1) {
                this.setValueTab(objID, obj.config.options[selectedIndex].optionValue);
            } else {
                this.setValueTab(objID, obj.config.options[0].optionValue);
            }
        }else if(obj.config.selectedIndex > tabIndex){
            var selectedIndex = obj.config.selectedIndex - 1;
            if (selectedIndex > -1) {
                obj.config.selectedIndex = selectedIndex;
            }
        }

        // reinit tabs
		this.initTab(objID, objSeq);

        // fire onclose event
        if (axdom.isFunction(obj.config.onclose)) {
            obj.config.onclose.call({
                options:obj.config.options,
                item:removeTargetOption,
                index:tabIndex
            }, removeTargetOption, removeTargetOption.optionValue);
        }
	},
    /**
     * @method AXTabClass.bindTabClick
     * @param {String} objID - 탭 대상 ID
	 * @param {Number} objSeq - 대상 순서 seq
	 * @param {Event} event - Click event
     * @description 탭을 클릭 할때 처리를 합니다.
     * @returns {AXTab}
	 */
    bindTabClick: function(objID, objSeq, event){
    	//trace({objID:objID, objSeq:objSeq, e:event.target.id});
    	var cfg = this.config;
    	var obj = this.objects[objSeq];

		// event target search -
		var eid = event.target.id.split(/_AX_/g);
		var eventTarget = event.target;
		var myTarget = this.getEventTarget({
			evt: eventTarget, evtIDs: eid,
			until: function (evt, evtIDs) { return (axdom(evt.parentNode).hasClass("AXTabsTray")) ? true : false; },
			find: function (evt, evtIDs) { return (axdom(evt).hasClass("AXTab")) ? true : false; }
		});
		// event target search ------------------------


	    if (myTarget) {
		    //colHeadTool ready
		    var targetID = myTarget.id;
		    var itemIndex = targetID.split(/_AX_/g).last();

		    //trace(obj.config.options[itemIndex]);

		    var selectedObject = obj.config.options[itemIndex];
		    if(selectedObject && obj.config.value != selectedObject.optionValue){

			    axdom("#" + objID + "_AX_Tabs_AX_"+obj.config.selectedIndex).removeClass("on");
			    axdom("#" + objID + "_AX_Tabs_AX_"+itemIndex).addClass("on");

			    obj.config.value = selectedObject.optionValue;
			    obj.config.selectedIndex = itemIndex;

			    this.focusingItem(objID, objSeq, obj.config.selectedIndex);
			    if(obj.config.onclick){
				    obj.config.onclick.call({
					    options:obj.config.options,
					    item:obj.config.options[itemIndex],
					    index:itemIndex
				    }, obj.config.options[itemIndex], obj.config.options[itemIndex].optionValue);
			    }

			    if(obj.config.onchange){
				    obj.config.onchange.call({
					    options:obj.config.options,
					    item:obj.config.options[itemIndex],
					    index:itemIndex
				    }, obj.config.options[itemIndex], obj.config.options[itemIndex].optionValue);
			    }
		    }else{
			    if(obj.config.onclick){
				    obj.config.onclick.call({
					    options:obj.config.options,
					    item:obj.config.options[itemIndex],
					    index:itemIndex
				    }, obj.config.options[itemIndex], obj.config.options[itemIndex].optionValue);
			    }
		    }

	    }
    },
    /**
     * @method AXTabClass.setValueTab
     * @param {String} objID - 탭 대상 ID
     * @param {String} value - 값
     * @description 탭의 선택값을 변경 합니다.
     * @returns {AXTab}
     * @example
     * ```js
     * AXTab.setValueTab('myTab01','F');
     * ```
     */
    setValueTab: function(objID, value){
    	//trace({objID:objID, value:value});
		var cfg = this.config;
		var objSeq = null;
		axdom.each(this.objects, function(index, O){
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
			axdom.each(obj.config.options, function(oidx, O){
				if(O.optionValue == value){
					itemIndex = oidx;
					return false;
				}
			});

			if(itemIndex == null) return;

			var selectedObject = obj.config.options[itemIndex];
			if(obj.config.value != selectedObject.optionValue){

				var tabs = obj.tabContainer.find(".AXTab");
				tabs.eq(obj.config.selectedIndex).removeClass("on");
				tabs.eq(itemIndex).addClass("on");
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
    /**
     * @method AXTabClass.bindTabMove
     * @param {String} objID - 탭 대상 ID
	 * @param {Number} objSeq - 대상 순서 seq
 	 * @param {String} direction - "left"||"right"
	 * @param {Event} event - "mouseover"
     * @description 탭의 양이 많아질때 생성되는 좌우 이동 화살표의 mouseover 이벤트를 처리 합니다.
     * @returns {AXTab}
	 */
    bindTabMove: function(objID, objSeq, direction, event){
    	//trace({objID:objID, objSeq:objSeq});
    	var cfg = this.config;
    	var obj = this.objects[objSeq];

		var trayWidth = obj.tabTray.outerWidth();
    	if(AXUtil.clientWidth() < cfg.responsiveMobile){
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

		//trace("move");

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
    /**
     * @method AXTabClass.bindTabMove
     * @param {String} objID - 탭 대상 ID
	 * @param {Number} objSeq - 대상 순서 seq
 	 * @param {String} direction - "left"||"right"
	 * @param {Event} event - "mousedown"
     * @description 탭의 양이 많아질때 생성되는 좌우 이동 화살표의 mousedown 이벤트를 처리 합니다.
     * @returns {AXTab}
	 */
	bindTabMoveClick: function(objID, objSeq, direction, event){
    	var cfg = this.config;
    	var obj = this.objects[objSeq];

    	if(obj.moveobj) clearTimeout(obj.moveobj);

		var scrollAmount = 500;

		var trayWidth = obj.tabTray.outerWidth();
    	if(AXUtil.clientWidth() < cfg.responsiveMobile){
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
    /**
     * @method AXTabClass.bindTabMoreClick
     * @param {String} objID - 탭 대상 ID
	 * @param {Number} objSeq - 대상 순서 seq
 	 * @param {String} direction - "left"||"right"
	 * @param {Event} event - "click"
     * @description 탭의 양이 많아질때 생성되는 탭 리스트 툴 화살표에 대한 "click" 이벤트를 처리 합니다.
     * @returns {AXContextMenu}
	 */
    bindTabMoreClick: function(objID, objSeq, direction, event){
    	var cfg = this.config;
    	var obj = this.objects[objSeq];
        if(axf.clientWidth() < cfg.responsiveMobile) {
            AXContextMenu.setConfig({responsiveMobile: 640});
            /* mobile 너비 지정 */
        }
    	AXContextMenu.open({id:objID + "_AX_tabMore", title:AXConfig.AXContextMenu.title}, event);
    },
    /**
     * @method AXTabClass.resizeCheck
     * @description 윈도우 창 크기가 변경 되었을때를 감지하여 처리 합니다.
     * @returns {AXTab}
	 */
    resizeCheck: function(){
    	var cfg = this.config;
    	var focusingItem = this.focusingItem.bind(this);

    	axdom.each(this.objects, function(objSeq, O){
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
				if(AXUtil.clientWidth() < cfg.responsiveMobile){
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
	/**
	 * @method AXTabClass.focusingItem
	 * @param {String} objID - 탭 대상 ID
	 * @param {Number} objSeq - 대상 순서 seq
	 * @param {Number} optionIndex - 탭 아이템 index
	 * @description 대상의 해당 index에 해당하는 탭에 focus를 줍니다.
	 * @returns {AXTab}
	 */
	focusingItem: function(objID, objSeq, optionIndex){
		var cfg = this.config;
		var obj = this.objects[objSeq];

		if(!obj.tabScroll.position()) return;

		if(obj.tabTray.outerWidth() > obj.tabScroll.outerWidth()){
			return;
		}

		var tabs = obj.tabContainer.find(".AXTab");
		var targetTab = tabs.eq(optionIndex);
		if(AXUtil.clientWidth() < cfg.responsiveMobile){
			var scrollLeft = (targetTab.position().left);
			var itemWidth = (targetTab.outerWidth());
			var handleWidth = 0;
			var rightMargin = 40;
		}else{
			var scrollLeft = (targetTab.position().left - cfg.handleWidth);
			var itemWidth = (targetTab.outerWidth());
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
		if (this.touhEndObserver) clearTimeout(this.touhEndObserver);
		if (this.touhMoveObserver) clearTimeout(this.touhMoveObserver);

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

			axdom(document.body).bind("mouseup.AXMobileTouch", this.touchEndBind);
			axdom(document.body).bind("mousemove.AXMobileTouch", this.touchMoveBind);
		}

		var minLeft = 0;
		var maxLeft = - (this.touchStartXY.scrollWidth - this.touchStartXY.targetWidth);
		var scrollPosition = obj.tabScroll.position();

		if(scrollPosition.left < minLeft && scrollPosition.left > maxLeft){
			obj.tabScroll.stop();
		}
	},
	touchMove: function (objID, objSeq, e) {
		if (this.touhEndObserver) clearTimeout(this.touhEndObserver);
		if (this.touhMoveObserver) clearTimeout(this.touhMoveObserver);

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

		var touchMoveAfter = this.touchMoveAfter.bind(this);
		this.touhMoveObserver = setTimeout(function () {
			touchMoveAfter(touch, objID, objSeq);
		}, 50);
	},
	touchMoveAfter: function(touch, objID, objSeq){
		var cfg = this.config;
		var obj = this.objects[objSeq];
		try{
			this.touchStartXY.sTime = ((new Date()).getTime() / 1000);
			this.touchStartXY.sLeft = obj.tabScroll.position().left;
			this.touchStartXY.x = touch.pageX;
			this.touchStartXY.y = touch.pageY;
		}catch(e){
			//trace(e);
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
			axdom(document.body).unbind("mouseup.AXMobileTouch");
			axdom(document.body).unbind("mousemove.AXMobileTouch");
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

		var newLeft = (this.touchStartXY.sLeft + (moveX));
		var minLeft = 0;
		var maxLeft = - (this.touchStartXY.scrollWidth - this.touchStartXY.targetWidth);
		if(cfg.bounces){
			minLeft = this.touchStartXY.targetWidth * 0.4;
			maxLeft = -((this.touchStartXY.scrollWidth - this.touchStartXY.targetWidth) * 1.2);
		}

		if(newLeft > minLeft){
			newLeft = minLeft;
		}else if(newLeft < maxLeft){
			newLeft = maxLeft;
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
		if(endLeft > 0) endLeft = 0;
		var newLeft = endLeft.abs();
   		if(AXUtil.clientWidth() < cfg.responsiveMobile){
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
	},
	/**
	 * @method AXTabClass.updateTabOption
	 * @description 입력된 value값과 같은 optionValue를 가진탭의 option 을 입력된 option으로 대체합니다. 
	 * @param {String} objID - 탭 대상 ID
	 * @param {String} value - 대상 탭 값
	 * @param {String} option  - 변경될 option 
	 * @returns {AXTab}
	 * @example
	 * ```js
	 * AXTab.updateTabOption('myTab01','F',{optionText:"신여성",addClass:"Classic"});
	 * ```
	 */
	updateTabOption: function(objID, value, option){
    	//trace({objID:objID, value:value});
		var cfg = this.config;
		var objSeq = null;
		axdom.each(this.objects, function(index, O){
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
			axdom.each(obj.config.options, function(oidx, O){
				if(O.optionValue == value){
					itemIndex = oidx;
					return false;
				}
			});

			if(itemIndex == null) return;

			var OriginalOption = obj.config.options[itemIndex];
			
			for(var idx in option){
				OriginalOption[idx]=option[idx];
			}
			
			this.initTab(objID, objSeq);
						
		}
    }
});

var AXTab = new AXTabClass();
AXTab.setConfig({});

/**
 * @method jQueryExtends.unbindTab
 * @param {Object} [configs]
 * @returns {jQueryObject}
 * @description 탭을 언바인드 합니다.
 * @example
 * ```js
 * axdom("#myTab01").unbindTab();
 * ```
 **/
axdom.fn.unbindTab = function (config) {
    axdom.each(this, function () {
        if (config == undefined) config = {};
        config.id = this.id;
        AXTab.unbind(config);
    });
	return this;
};

/**
 * @method jQueryExtends.bindTab
 * @param {Object} configs
 * @returns {jQueryObject}
 * @description 탭을 바인드 합니다.
 * @example
 * ```js
 * $("#myTab01").bindTab({
 *    theme : "AXTabs",
 *    value:"",
 *    overflow:"scroll", // "visible"
 *    options:[
 *        {optionValue:"M", optionText:"남성", closable:true},
 *        {optionValue:"F", optionText:"여성", closable:true},
 *        {optionValue:"N", optionText:"선택안함"},
 *        {optionValue:"", optionText:"모두"}
 *    ],
 *    onchange: function(selectedObject, value){
 *        //toast.push(Object.toJSON(this));
 *        //toast.push(Object.toJSON(selectedObject));
 *        toast.push("onchange: "+Object.toJSON(value));
 *    },
 *    onclose: function(selectedObject, value){
 *        //toast.push(Object.toJSON(this));
 *        //toast.push(Object.toJSON(selectedObject));
 *        toast.push("onclose: "+Object.toJSON(value));
 *    }
 * });
 * ```
 **/
axdom.fn.bindTab = function (config) {
    axdom.each(this, function () {
        if (config == undefined) config = {};
        config.id = this.id;
        AXTab.bind(config);
    });
	return this;
};

/**
 * @method jQueryExtends.setValueTab
 * @param {String|Number} value
 * @returns {jQueryObject}
 * @description 탭의 value를 지정하고 지정된 value로 탭을 선택합니다.
 * @example
 * ```js
 * $("#"+tabID).setValueTab(tabValue);
 * ```
 **/
axdom.fn.setValueTab = function (value) {
    axdom.each(this, function () {
        AXTab.setValueTab(this.id, value);
    });
	return this;
};

/**
 * @method jQueryExtends.addTabs
 * @param {Array} options
 * @returns {jQueryObject}
 * @description 탭 아이템을 추가합니다.
 * @example
 * ```js
 * var options = [];
 * var index;
 * for(var i = 0; i < addCount; i++){
 *     index = "0" + (i + 1);
 *     options.push({optionText: "add " + index, optionValue: index, closable:true});
 * }
 * $("#" + tabID).addTabs(options);
 * ```
 **/
axdom.fn.addTabs = function (options) {
	axdom.each(this, function () {
		var objSeq = axdom("#" + this.id).data("objSeq");
		if(objSeq == null){
			return;
		}

		var obj = AXTab.objects[objSeq];
		obj.config.options = obj.config.options.concat(options);

		AXTab.addTabs(this.id, options);
	});
	return this;
};

/**
 * @method jQueryExtends.closeTab
 * @param {Number} tabIndex
 * @returns {jQueryObject}
 * @description 탭 아이템을 제거합니다.
 * @example
 * ```js
 * $("#" + tabID).closeTab(tabValue);
 * ```
 **/
axdom.fn.closeTab = function(tabValue) {
	axdom.each(this, function () {
		AXTab.closeTab(this.id, tabValue);
	});
	return this;
};

/**
 * @method jQueryExtends.updateTabs
 * @param {Array} options
 * @returns {jQueryObject}
 * @description 탭 아이템을 재설정합니다.
 * @example
 * ```js
 * var options = [];
 * var index;
 * for(var i = 0; i < addCount; i++){
 *     index = "0" + (i + 1);
 *     options.push({optionText: "O " + index, optionValue: index, closable:true});
 * }
 * $("#" + tabID).updateTabs(options);
 * ```
 **/
axdom.fn.updateTabs = function (options) {
	axdom.each(this, function () {
		var objSeq = axdom("#" + this.id).data("objSeq");
		if(objSeq == null){
			return;
		}

		var obj = AXTab.objects[objSeq];
		//obj.config.options = obj.config.options.concat(options);
		obj.config.options = options;
		obj.config.value = options[0].optionValue;
		AXTab.initTab(this.id, objSeq);
	});
	return this;
};

axdom.fn.updateTabOption = function (value,option) {
	axdom.each(this, function () {
		AXTab.updateTabOption(this.id, value, option);
	});
	return this;
};

/**
 * @method AXTabClass.getOptions
 * @param {String} objID - 탭 대상 ID
 * @returns {AXTab.options}
 * @example
 * ```js
 * AXTab.getOptions('myTab01');
 * ```
 */
axdom.fn.getOptions = function (){
	var returnValue = null;
	axdom.each(this, function(){
		var objSeq = axdom("#" + this.id).data("objSeq");
		if(objSeq == null){
			return;
		}

		var obj = AXTab.objects[objSeq];
		//obj.config.options = obj.config.options.concat(options);
		returnValue = obj.config.options;
	})
	return returnValue;
};
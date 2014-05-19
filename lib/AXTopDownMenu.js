/**
 * AXTopDownMenu
 * @class AXTopDownMenu
 * @extends AXJ
 * @version v1.21
 * @author tom@axisj.com
 * @logs
 "2013-03-12 오후 8:21:23",
 "2013-11-22 오후 6:03:35 - tom : parent item Addclass 추가",
 "2013-12-31 오후 2:06:06 - root : setTree 시 child node count check 추가",
 "2014-04-14 - tom : setTree 메소드 엘리먼트 준비전에 박스모델 가져오는 문제 딜레이로 해결",
 "2014-05-19 - tom : childMenu 오픈 위치 버그 픽스"
 * @description
 *
 ```js
 var myMenu = new AXTopDownMenu();
 AXTopDownMenu.setConfig(classConfig:JSObject);
 ```
 *
 */
 
var AXTopDownMenu = Class.create(AXJ, {
	initialize: function(AXJ_super){
		AXJ_super();

		this.tree = [];
		this.poi = "";
		this.config.easing = {
			open:{duraing:200, easing:"expoOut"},
			close:{duration:200, easing:"expoOut"}
		};
		//this.config.menuBoxID = "menuBox";
		this.config.parentMenu = {
								className:"parentMenu"
							};
		this.config.childMenu = {
								className:"childMenu",
								arrowClassName:"varrow",
								align:"center",
								valign:"top",
								margin:{top:10, left:0, bottom:0},
								arrowMargin:{top:10, left:0, bottom:0}
							};
		this.config.childsMenu = {
								className:"childsMenu",
								arrowClassName:"harrow",
								align:"left",
								valign:"top",
								margin:{top:10, left:0, bottom:0},
								arrowMargin:{top:10, left:0, bottom:0}
							};
		this.config.parentOutResetChild = true;
		this.config.childOutClose = true;
		this.config.childOutCloseTime = 700;
	},
	init: function(){
		var cfg = this.config;
		
		if(cfg.menuBoxID){
			//서브 메뉴를 숨김 처리 합니다.
			jQuery("#"+cfg.menuBoxID).find("."+cfg.childMenu.className).hide();
			jQuery("#"+cfg.menuBoxID).find("."+cfg.childsMenu.className).hide();
	
			this.initParents();
			this.initChild();
		}else if(cfg.targetID){

		}

		axdom(window).bind("resize", this.windowResize.bind(this));
	},
	windowResizeApply: function(){
		var cfg = this.config;
		axf.each(this.tree, function(){
			this.height = axdom("#" + this.id).outerHeight();
		});
	},
	setTree: function(tree){
		var cfg = this.config;
		cfg.menuBoxID = cfg.targetID, _this = this;
		
		var po = [];
		
		var treeFn = function(subTree){
			jQuery.each(subTree, function(pi, T){
				po.push("<li>");
				var addClass = (T.cn && T.cn.length > 0 ) ? " class = \"" + cfg.childsMenu.hasChildClassName + "\"" : "";
				po.push("<a href=\"" + T.url + "\""+addClass+">"+ T.label + "</a>");
				if(T.cn && T.cn.length > 0 ){
					po.push("<div class=\""+cfg.childsMenu.className+"\">");
					po.push("	<ul>");
					po.push(treeFn(T.cn));
					po.push("	</ul>");
					po.push("</div>");
				}
				po.push("</li>");
			});
		};
		
		po.push("<ul>");
		jQuery.each(tree, function(pi, T){
			var addClass = [];
			if(T.addClass){
				addClass.push(T.addClass);
			}
			po.push("<li>");
			po.push("	<div class=\"" + cfg.parentMenu.className + " " + addClass.join(" ") + "\">");
				var addClass = (T.cn) ? " class = \"" + cfg.childMenu.hasChildClassName + "\"" : "";
				po.push("<a href=\"" + T.url + "\""+addClass+">"+ T.label + "</a>");
				if(T.cn){
					po.push("<div class=\""+cfg.childMenu.className+"\">");
					po.push("	<ul>");
					po.push(treeFn(T.cn));
					po.push("	</ul>");
					po.push("</div>");
				}
			po.push("	</div>");
			po.push("</li>");
		});
		po.push("</ul>");
		po.push("<div class=\"clear\"></div>");
		
		jQuery("#"+cfg.menuBoxID).empty();
		jQuery("#"+cfg.menuBoxID).append(po.join(''));
		
		//서브 메뉴를 숨김 처리 합니다.
		jQuery("#"+cfg.menuBoxID).find("."+cfg.childMenu.className).hide();
		jQuery("#"+cfg.menuBoxID).find("."+cfg.childsMenu.className).hide();

        setTimeout(function(){
            _this.initParents();
            _this.initChild();
        }, 300);
	},
	initParents: function(){
		var cfg = this.config;
		var parents = [];
		jQuery("#"+cfg.menuBoxID).find("." + cfg.parentMenu.className).each(function(pi, EL){
			EL.id = cfg.menuBoxID + "_PM_" + pi;
			var _id = "";
			if(jQuery(EL).children("A").get(0).id) _id = jQuery(EL).children("A").get(0).id;
			jQuery(EL).children("A").get(0).id = cfg.menuBoxID + "_PMA_" + pi;
			parents.push({
				_id:_id,
				id:EL.id,
				width:axdom(EL).outerWidth(),
				height:axdom(EL).outerHeight(),
				cn:[],
				coi:""
			});
		});
		this.tree = parents;
		
		//trace(jQuery("#"+cfg.menuBoxID).find("." + cfg.parentMenu.className + ">a"));
		jQuery("#"+cfg.menuBoxID).find("." + cfg.parentMenu.className + ">a").bind("mouseover", this.onoverParent.bind(this));
		jQuery("#"+cfg.menuBoxID).find("." + cfg.parentMenu.className + ">a").bind("focus", this.onoverParent.bind(this));
		
		if(cfg.childOutClose){
			var onoutChild = this.onoutChild.bind(this);
			jQuery("#"+cfg.menuBoxID).find("." + cfg.parentMenu.className + ">a").bind("mouseout", onoutChild);
		}
	},
	onoverParent: function(event){
		if (this.childObserver) clearTimeout(this.childObserver); //닫기 명령 제거
		var cfg = this.config;
		var poi = event.target.id.split(/\_/g).last();
		if(this.poi != "" && this.poi != poi){
			jQuery("#" + cfg.menuBoxID + "_PMA_" + this.poi).removeClass("on");
			jQuery("#" + cfg.menuBoxID + "_PMC_" + this.poi).slideUp(
				{
					duration:cfg.easing.close.duration,
					easing:cfg.easing.close.easing,
					complete:function(){
						
					}
		    	}
		    );
		    if(cfg.parentOutResetChild) this.closeSubMenu(this.tree[this.poi]);
		}

		//slideDown check
		if(this.dfPoi != undefined) jQuery("#" + cfg.menuBoxID + "_PMA_" + this.dfPoi).removeClass("on");
		jQuery("#" + cfg.menuBoxID + "_PMA_" + poi).addClass("on");
		//trace("#" + cfg.menuBoxID + "_PMC_" + poi);
		
		var tgDiv = jQuery("#" + cfg.menuBoxID + "_PMC_" + poi);
		if(!this.tree[poi].divDim){
			tgDiv.show();
			this.tree[poi].divDim = {width:tgDiv.outerWidth(), height:tgDiv.outerHeight()};
			if(this.tree[poi].height == null){
				for(var index = 0;index < this.tree.length;index++){
					this.tree[index].height = axdom("#" + this.tree[index].id).outerHeight();
				}
				//trace(poi, this.tree[poi]);
			}
			var topDim = {width:this.tree[poi].width, height:this.tree[poi].height};

			/* subMenu positioning */
			if(cfg.childMenu.align == "center"){
				var posLeft = topDim.width / 2 - this.tree[poi].divDim.width / 2 + cfg.childMenu.margin.left;
			}else if(cfg.childMenu.align == "left"){
				var posLeft = 0 + cfg.childMenu.margin.left;
			}else if(cfg.childMenu.align == "right"){
				var posLeft = topDim.width - this.tree[poi].divDim.width + cfg.childMenu.margin.left;
			}
			if(cfg.childMenu.valign == "top"){
				var posTop = topDim.height + cfg.childMenu.margin.top;
				if(cfg.childMenu.float){
					tgDiv.css({top:posTop, left:posLeft});
				}else{
					tgDiv.css({top:posTop, left:posLeft, width:this.tree[poi].divDim.width});
				}
			}else if(cfg.childMenu.valign == "bottom"){
				var posTop = topDim.height + cfg.childMenu.margin.bottom;
				if(cfg.childMenu.float){
					tgDiv.css({top:posTop, left:posLeft});
				}else{
					tgDiv.css({top:"auto", bottom:posTop, left:posLeft, width:this.tree[poi].divDim.width});
				}
			}
			/* -------------------- */

			/* subMenu Arrow positioning */
			if(cfg.childMenu.arrowClassName){
				var arrow = tgDiv.find("."+cfg.childMenu.arrowClassName);
				if(cfg.childMenu.align == "center"){
					var aLeft = tgDiv.outerWidth() / 2 - arrow.outerWidth() / 2 + cfg.childMenu.arrowMargin.left;
				}else if(cfg.childMenu.align == "left"){
					var aLeft = 0 + cfg.childMenu.arrowMargin.left;
				}else if(cfg.childMenu.align == "right"){
					var aLeft = tgDiv.outerWidth() - arrow.outerWidth() + cfg.childMenu.arrowMargin.left;
				}
				if(cfg.childMenu.valign == "top"){
					var aTop = -arrow.outerHeight() + cfg.childMenu.arrowMargin.top;
					arrow.css({top:aTop, left:aLeft});
				}else if(cfg.childMenu.valign == "bottom"){
					var aTop = -arrow.outerHeight() + cfg.childMenu.arrowMargin.bottom;
					arrow.css({bottom:aTop, left:aLeft});
				}
			}
			/* -------------------- */

			tgDiv.hide();
			topDim = null;
			posTop = null;
			posLeft = null;
		}

		tgDiv.fadeIn(
			{
				duration:cfg.easing.open.duration,
				easing:cfg.easing.open.easing,
				complete:function(){
				}
	    	}
	    );

		this.poi = poi;
	},
	initChild: function(){
		var cfg = this.config;
		var initChilds = this.initChilds.bind(this);
		var tree = this.tree;
		jQuery("#"+cfg.menuBoxID).find("." + cfg.parentMenu.className).each(function(pi, EL){
			var child = jQuery(EL).children("."+cfg.childMenu.className).get(0);
			if(child){
				child.id = cfg.menuBoxID + "_PMC_" + pi;
				if(cfg.childMenu.arrowClassName){
					var arrow = jQuery("<div class=\""+cfg.childMenu.arrowClassName+"\"></div>");
					jQuery(child).prepend(arrow);
				}
				initChilds(child.id, tree[pi]);
			}else{
				
			}
		});
	},
	initChilds: function(cid, rTree){
		var initChilds = this.initChilds.bind(this);
		var cfg = this.config;
		var tree = rTree.cn;

		var onoverChild = this.onoverChild.bind(this);
		var onoutChild = this.onoutChild.bind(this);
		//trace(cid);
		jQuery("#"+cid+">ul>li").each(function(pi, EL){
			var linkA = jQuery(EL).children("A");
			var _id = "";
			if(linkA.get(0).id) _id = linkA.get(0).id;
			linkA.get(0).id = cid.replace("PMC", "PMA") + "_" + pi;
			linkA.bind("mouseover", onoverChild);
			if(cfg.childOutClose){
				linkA.bind("mouseout", onoutChild);
			}

			//jQuery(EL).children("A").html(cid.replace("PMC", "PMA") + "_" + pi);
			var childDiv = jQuery(EL).children("."+cfg.childsMenu.className).get(0);
			if(childDiv){
				childDiv.id = cid+"_"+pi;

				if(cfg.childsMenu.arrowClassName){
					var arrow = jQuery("<div class=\""+cfg.childsMenu.arrowClassName+"\"></div>");
					jQuery(childDiv).prepend(arrow);
				}

				tree.push({
					_id:_id,
					id:	cid+"_"+pi,
					cn:[],
					coi:""
				});
				initChilds(cid+"_"+pi, tree[pi]);
			}else{
				tree.push({
					_id:_id,
					id:	cid+"_"+pi,
					cn:[],
					coi:""
				});
			}
		});
	},
	closeSubMenu: function(pitem){
		if(!pitem) return;
		if(pitem.coi == "") return;
		var cfg = this.config;
		jQuery("#" + pitem.coi).slideUp(
			{
				duration:cfg.easing.close.duration,
				easing:cfg.easing.close.easing,
				complete:function(){
				}
	    	}
	    );
	    pitem.coi = "";
	    //하위 자식들의 poi 모두 닫기

		var closeAllSubMenu = function(stree){
			jQuery.each(stree, function(){
				if(this.coi != ""){
					jQuery("#" + this.coi).hide();
				}
				closeAllSubMenu(this.cn);
			});
		};
	    closeAllSubMenu(pitem.cn);
	},
	onoverChild: function(event){
		if (this.childObserver) clearTimeout(this.childObserver); //닫기 명령 제거
		var cfg = this.config;
		var eid = event.target.id;
		var ids = event.target.id.split(/\_/g);
		var tree = this.tree;
		var item = {};
		var pitem = {};
		for(var a=2;a<ids.length;a++){
			if(a == ids.length-2){
				pitem = tree[ids[a]];
			}
			if(tree[ids[a]]){
				if(tree[ids[a]].cn){
					item = tree[ids[a]];
					tree = tree[ids[a]].cn;
				}
			}
		}
		
		if(pitem){
			if(pitem.coi != "" && pitem.coi != item.id){
				this.closeSubMenu(pitem);
			}
		}

		if(item){
			if(item.id){

				var tgDiv = jQuery("#" + item.id);

				//slideDown check
				if(!item.divDim){
					jQuery("#" + item.id).show();
					item.divDim = {width:tgDiv.outerWidth(), height:tgDiv.outerHeight()};
					var pDim = {width:jQuery("#"+eid).outerWidth(), height:jQuery("#"+eid).outerHeight(), pos:jQuery("#"+eid).position()};

					if(cfg.childsMenu.align == "left"){
						var posLeft = pDim.width + cfg.childsMenu.margin.left;
					}else{
						var posLeft = -item.divDim.width + cfg.childsMenu.margin.left;
					}

					if(cfg.childsMenu.valign == "top"){
						var posTop = pDim.pos.top + cfg.childsMenu.margin.top;
						tgDiv.css({top:posTop, left:posLeft, width:item.divDim.width});
					}else{
						var posTop = (pitem.divDim.height - pDim.pos.top) - pDim.height + cfg.childsMenu.margin.bottom;
						tgDiv.css({bottom:posTop, left:posLeft, width:item.divDim.width});
					}

					/* subMenu Arrow positioning */
					if(cfg.childsMenu.arrowClassName){

						var arrow = tgDiv.find("."+cfg.childsMenu.arrowClassName);
						if(cfg.childsMenu.align == "left"){
							var aLeft =  - arrow.outerWidth() + cfg.childsMenu.arrowMargin.left;
						}else{
							var aLeft = tgDiv.outerWidth() - arrow.outerWidth() + cfg.childsMenu.arrowMargin.left;
						}
						if(cfg.childsMenu.valign == "top"){
							var aTop = 0 + cfg.childsMenu.arrowMargin.top;
							arrow.css({top:aTop, left:aLeft});
						}else if(cfg.childsMenu.valign == "bottom"){
							var aTop = 0 + cfg.childsMenu.arrowMargin.bottom;
							arrow.css({bottom:aTop, left:aLeft});
						}
					}
					/* -------------------- */

					tgDiv.hide();
					pDim = null;
					posTop = null;
					posLeft = null;
				}


				tgDiv.fadeIn(
					{
						duration:cfg.easing.open.duration,
						easing:cfg.easing.open.easing,
						complete:function(){
						}
			    	}
			    );
			    if(pitem) pitem.coi = item.id.replace("PMA", "PMC");
			}

		}

	},
	onoutChild: function(event){
		var cfg = this.config;
		var outChild = this.outChild.bind(this);
		this.childObserver = setTimeout(function() {
	       outChild();
	    }, cfg.childOutCloseTime);
	},
	outChild: function(){
		var cfg = this.config;
		this.closeSubMenu(this.tree[this.poi]);

		jQuery("#" + cfg.menuBoxID + "_PMA_" + this.poi).removeClass("on");
		if(this.dfPoi != undefined) jQuery("#" + cfg.menuBoxID + "_PMA_" + this.dfPoi).addClass("on");
		jQuery("#" + cfg.menuBoxID + "_PMC_" + this.poi).slideUp(
			{
				duration:cfg.easing.close.duration,
				easing:cfg.easing.close.easing,
				complete:function(){
				}
	    	}
	    );
	},
	setHighLightMenu: function(poi){
		var cfg = this.config;
		
		if(jQuery.isArray(poi)){
			
			this.dfPoi = poi;
			
			var tree = this.tree;
			jQuery.each(poi, function(idx, T){
				if(idx == 0) tree = tree[T.number()];
				else  tree = tree.cn[T.number()];
				if(tree){
					if(idx == 0){
						jQuery("#" + tree.id).addClass("on");
						jQuery("#" + tree.id).children("A").addClass("on");
					}else{
						jQuery("#" + tree.id.replace("_PMC_", "_PMA_")).addClass("on");
					}
				}
			});
			
		}else{
			
			this.dfPoi = poi;
			jQuery("#" + cfg.menuBoxID + "_PMA_" + this.dfPoi).addClass("on");
			
		}
	},
	setHighLightOriginID: function(_id){
		var cfg = this.config;
		var tree = this.tree;
		var findedID = "";

		var treeFn = function(subTree){
			jQuery.each(subTree, function(idx, T){
				if(T._id == _id){
					findedID = T.id;
					return false;
				}else{
					if(T.cn) treeFn(T.cn);
				}
			});
		};
		jQuery.each(tree, function(idx, T){
			if(T._id == _id){
				findedID = T.id;
				return false;
			}else{
				if(T.cn) treeFn(T.cn);
			}
		});

		if(findedID){
			this.findedID = findedID;
			var pos = findedID.split(/_PM[C]?_/g).last();
			var selectedMenus = pos.split(/_/g);
			this.setHighLightMenu(selectedMenus);
			return selectedMenus;
		}
	}
});

var AXMobileMenu = Class.create(AXJ, {
    version: "AXMobileMenu V0.4",
    author: "tom@axisj.com",
    logs: [
        "2013-12-13 오전 10:53:43",
        "2014-02-26 오전 11:42:23 tom : 각종 버그 픽스",
        "2014-02-26 오후 4:35:05 tom : hasSubMenu 분리"
    ],
    initialize: function(AXJ_super) {
        AXJ_super();

        this.moveSens = 0;
        this.config.moveSens = 1;
        this.touchMode;
        this.selectedPoi = null;
        this.config.width = 300;
        this.config.height = 388;
        this.config.reserveKeys = {
            labelKey:"label",
            urlKey:"url",
            targetKey:"target",
            addClassKey:"addClass",
            subMenuKey:"cn"
        };
    },
    init: function() {
        var cfg = this.config;

        /* 이벤트 대소문자 확장 */
        if(!cfg.onclick) cfg.onclick = cfg.onClick;

        //var close = this.close.bind(this);
        this.modal = new AXMobileModal();
        this.modal.setConfig({
            addClass:"AXMobileMenu",
            height: cfg.height,
            width: cfg.width,
            head:{
                close:{
                    onclick:function(){

                    }
                }
            },
            onclose: function(){
                //close();
            }
        });

    },
    open: function(){
        var cfg = this.config;
        /*
         var obj = this.modal.open();
         this.initMenu(obj);
         */
        var onLoad = this.initMenu.bind(this);
        this.modal.open(null, onLoad);
    },
    initMenu: function(obj){
        var cfg = this.config;
        this.modalObj = obj;
        this.modalID = obj.jQueryModal.get(0).id;

        if(this.selectedPoi){
            var lpoi = this.selectedPoi.last();
            var apoi = this.selectedPoi.concat();
            apoi.pop();
            var menu = cfg.menu;
            axf.each(apoi, function(idx, P){
                if(idx == 0){
                    menu = menu[P];
                }else{
                    menu = menu[cfg.reserveKeys.subMenuKey][P];
                }
            });

            if(menu[cfg.reserveKeys.subMenuKey] && menu[cfg.reserveKeys.subMenuKey][lpoi][cfg.reserveKeys.subMenuKey] && menu[cfg.reserveKeys.subMenuKey][lpoi][cfg.reserveKeys.subMenuKey].length > 0){
                apoi.push(lpoi);
                var tpl = this.getMenu(this.modalID, menu[cfg.reserveKeys.subMenuKey][lpoi], apoi);
            }else{
                var tpl = this.getMenu(this.modalID, menu, apoi);
            }
        }else{
            var tpl = this.getMenu(this.modalID, cfg.menu);
        }

        if(AXUtil.browser.mobile){
            //obj.modalBody.unbind("touchstart.AXMobileMenu").bind("touchstart.AXMobileMenu", this.touchstart.bind(this));
            var modalBodyID = obj.modalBody.get(0).id;
            var touchstart = this.touchstart.bind(this);
            this.touchstartBind = function () {
                touchstart();
            };
            if (document.addEventListener) {
                AXgetId(modalBodyID).addEventListener("touchstart", this.touchstartBind, false);
            }
        }else{
            obj.modalBody.unbind("mousedown.AXMobileMenu").bind("mousedown.AXMobileMenu", this.touchstart.bind(this));
        }

        obj.modalBody.attr("onselectstart", "return false");
        obj.modalBody.addClass("AXUserSelectNone");
        obj.modalBody.bind("click.AXMobileMenu", this.onclickModalBody.bind(this));

        /* drag cancle */
        //obj.modalBody.unbind("dragstart.AXMobileMenu").bind("dragstart.AXMobileMenu", this.cancelEvent.bind(this));
        this.printMenu(tpl);
    },
    printMenu: function(tpl){
        var obj = this.modalObj;

        obj.modalHead.empty();
        obj.modalHead.append(tpl.headPo);
        obj.modalBody.empty();
        obj.modalBody.append(tpl.bodyPo);
        obj.modalFoot.empty();
        obj.modalFoot.append(tpl.pagePo);

        /*
         obj.modalBody.hide();
         obj.modalBody.fadeIn("300");
         */
        obj.modalHead.find(".mobileMenuHome").bind("click", this.onclickHome.bind(this));
        obj.modalHead.find(".mobileMenuPrev").bind("click", this.onclickPrev.bind(this));

        this.menuPageWidth = obj.modalBody.find(".mobileMenuBodyPage").width() + 9;
        this.mobileMenuBodyScroll = obj.modalBody.find(".mobileMenuBodyScroll");
        obj.modalBody.find(".mobileMenuBodyScroll").css({width:tpl.pageNum * this.menuPageWidth});
    },
    getMenu: function(modalID, _menu, poi){
        var cfg = this.config;
        var countPerBlock = 9;
        var menu = _menu;
        var menuTitle = "";
        if(poi == undefined || poi.length == 0) poi = [];
        else{
            menuTitle = menu[cfg.reserveKeys.labelKey];
            menu = menu[cfg.reserveKeys.subMenuKey];
        }

        var headPo = [];
        /* 현재 선택된 메뉴 선택 하는 기능구현 필요 */
        headPo.push('<a ' + cfg.href + ' class="mobileMenuHome">home</a>');
        if(menuTitle != ""){
            headPo.push('<a ' + cfg.href + ' class="mobileMenuPrev" id="', modalID ,'_AX_menuTitle_AX_', poi.join("_"),'">', menuTitle,'</a>');
        }

        var bodyPo = [];
        bodyPo.push('<div class="mobileMenuBody">');
        bodyPo.push('	<div class="mobileMenuBodyScroll" id="', modalID ,'_AX_bodyScroll">');
        bodyPo.push('		<div class="mobileMenuBodyPage">');

        var ppoi = poi.join("_");
        if(ppoi != "") ppoi += "_";

        var selectedPoi = "";
        if(this.selectedPoi){
            selectedPoi = this.selectedPoi.join("_");
        }

        axf.each(menu, function(midx, M){
            if(midx % countPerBlock == 0 && midx > 0){
                bodyPo.push('	</div>');
                bodyPo.push('	<div class="mobileMenuBodyPage">');
            }
            var addClass = [];
            if(this[cfg.reserveKeys.addClassKey]){
                addClass.push(this[cfg.reserveKeys.addClassKey]);
            }
            if(selectedPoi == (ppoi + midx)){
                addClass.push("selected");
            }
            bodyPo.push('<a ' + cfg.href + ' class="mobileMenuItem ' + addClass.join(" ") + '" id="', modalID,'_AX_', ppoi, midx,'">');
            bodyPo.push(this[cfg.reserveKeys.labelKey]);
            if(this[cfg.reserveKeys.subMenuKey] && this[cfg.reserveKeys.subMenuKey].length > 0){
                bodyPo.push('<span class="hasSubMenu"></span>');
            }
            bodyPo.push('</a>');
        });
        bodyPo.push('		</div>');
        bodyPo.push('	</div>');
        bodyPo.push('</div>');

        var pageNum = (menu.length / (countPerBlock)).ceil();
        this.pageNo = 0;
        this.pageNum = pageNum;

        var pagePo = [];
        pagePo.push('<div class="mobileMenuFoot">');
        axf.each(pageNum.rangeFrom(1), function(pidx, p){
            if(pidx == 0) pagePo.push('<div class="pageNav on" ');
            else pagePo.push('<div class="pageNav" ');
            pagePo.push(' id="', modalID ,'_AX_pageNav_AX_', pidx ,'"></div>');
        });
        pagePo.push('</div>');

        return {
            headPo : headPo.join(''),
            bodyPo : bodyPo.join(''),
            pagePo : pagePo.join(''),
            pageNum : ( pageNum )
        };
    },
    close: function(){
        var cfg = this.config;
        this.modal.close();
    },
    setHighLight: function(menuID){
        var cfg = this.config;

        var menu = cfg.menu;
        var pois = "";

        var treeFn = function(subTree, parentPoi){
            axf.each(subTree, function(idx, M){
                if(M[cfg.reserveKeys.primaryKey] == menuID){
                    pois = parentPoi + "_" + idx;
                    return false;
                }else{
                    if(M[cfg.reserveKeys.subMenuKey] && M[cfg.reserveKeys.subMenuKey].length > 0) treeFn(M[cfg.reserveKeys.subMenuKey], parentPoi + "_" + idx);
                }
            });
        };

        axf.each(menu, function(idx, M){
            if(M[cfg.reserveKeys.primaryKey] == menuID){
                pois = idx + "";
                return false;
            }else{
                if(M[cfg.reserveKeys.subMenuKey] && M[cfg.reserveKeys.subMenuKey].length > 0) treeFn(M[cfg.reserveKeys.subMenuKey], idx);
            }
        });

        var poi;
        if(pois != "") poi = pois.split(/_/g);
        this.selectedPoi = poi;
    },
    setHighLightMenu: function(menuID){
        this.setHighLight(menuID);
    },
    onclickModalBody: function(event){
        var cfg = this.config;
        var eid = event.target.id.split(/_AX_/g);
        var eventTarget = event.target;
        var myTarget = this.getEventTarget({
            evt : eventTarget, evtIDs : eid,
            until:function(evt, evtIDs){ return (axdom(evt.parentNode).hasClass("mobileMenuBodyScroll")) ? true:false; },
            find:function(evt, evtIDs){ return (axdom(evt).hasClass("mobileMenuItem")) ? true : false; }
        });

        if(myTarget){
            //something
            //trace(myTarget.id);
            var poi = myTarget.id.split(/_AX_/g).last();
            var menu = cfg.menu;
            var apoi = poi.split(/_/g);
            axf.each(apoi, function(idx, P){
                if(idx == 0){
                    menu = menu[P];
                }else{
                    menu = menu[cfg.reserveKeys.subMenuKey][P];
                }
            });

            if(menu[cfg.reserveKeys.subMenuKey] && menu[cfg.reserveKeys.subMenuKey].length > 0){
                /* animated menu */
                var menuItem = this.modalObj.modalBody.find("#"+myTarget.id);
                menuItem.css({opacity:0});
                var menuItemPos = menuItem.position();

                var mobileMenuBody = this.modalObj.modalBody.find(".mobileMenuBodyScroll");
                var bodyPos = mobileMenuBody.position();
                var cloneMenuItem = axdom("<div class='mobileMenuItemGhost' id='"+this.modalID+"_AX_cloneMenuItem'>" + menuItem.html() + "</div>");
                mobileMenuBody.append(cloneMenuItem);
                cloneMenuItem.css({
                    position:"absolute",
                    left:menuItemPos.left,
                    top:menuItemPos.top
                });

                var getMenuBind = this.getMenu.bind(this);
                var printMenuBind = this.printMenu.bind(this);
                var modalID = this.modalID;
                cloneMenuItem.animate({left:9 - bodyPos.left, top:0, width:270, height:270}, 300, "backInOut").animate({opacity:0}, 100, "expoOut", function () {
                    var tpl = getMenuBind(modalID, menu, apoi);
                    printMenuBind(tpl);
                });

                return;
            }else{
                if(cfg.onclick){
                    cfg.onclick.call(menu, menu);
                }
            }
        }
    },
    onclickHome: function(event){
        var cfg = this.config;
        var tpl = this.getMenu(this.modalID, cfg.menu);
        this.printMenu(tpl);
    },
    onclickPrev: function(event){
        var cfg = this.config;
        var poi = event.target.id.split(/_AX_/g).last();
        var menu = cfg.menu;
        var apoi = poi.split(/_/g);
        apoi.pop();

        axf.each(apoi, function(idx, P){
            if(idx == 0){
                menu = menu[P];
            }else{
                menu = menu[cfg.reserveKeys.subMenuKey][P];
            }
        });

        var tpl = this.getMenu(this.modalID, menu, apoi);
        this.printMenu(tpl);
    },
    setTree: function(tree){
        this.config.menu = tree;
    },
    /* 메뉴 터치 이동관련 함수 - s */
    touchstart: function (e) {
        var cfg = this.config;

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
            sLeft:  this.mobileMenuBodyScroll.position().left,
            x: touch.pageX,
            y: touch.pageY
        };

        if(AXUtil.browser.mobile){
            var event = window.event;
            var touchEnd = this.touchEnd.bind(this);
            this.touchEndBind = function () {
                touchEnd(event);
            };
            var touchMove = this.touchMove.bind(this);
            this.touchMoveBind = function () {
                touchMove(event);
            };
            if (document.addEventListener) {
                document.addEventListener("touchend", this.touchEndBind, false);
                document.addEventListener("touchmove", this.touchMoveBind, false);
            }
        }else{
            axdom(document.body).bind("mouseup.AXMobileMenu", this.touchEnd.bind(this));
            axdom(document.body).bind("mousemove.AXMobileMenu", this.touchMove.bind(this));
        }

        this.mobileMenuBodyScroll.stop();
    },
    touchMove: function (e) {
        if (this.touhEndObserver) clearTimeout(this.touhEndObserver); //닫기 명령 제거
        var cfg = this.config;

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

            this.moveBlock(touch.pageX - this.touchStartXY.x);
            if (event.preventDefault) event.preventDefault();
            else return false;

        }
        if (((this.touchStartXY.x - touch.pageX).abs() - (this.touchStartXY.y - touch.pageY).abs()).abs() < 5) {
            //this.touchSelecting = true;
        }
    },
    touchEnd: function (e) {
        var cfg = this.config;
        var event = window.event || e;
        //this.moveSens = 0;
        //this.touchMode = false;

        if(AXUtil.browser.mobile){
            if (document.removeEventListener) {
                document.removeEventListener("touchend", this.touchEndBind, false);
                document.removeEventListener("touchmove", this.touchMoveBind, false);
            }
        }else{
            axdom(document.body).unbind("mouseup.AXMobileMenu");
            axdom(document.body).unbind("mousemove.AXMobileMenu");
        }

        var moveEndBlock = this.moveEndBlock.bind(this);
        this.touhEndObserver = setTimeout(function () {
            moveEndBlock();
        }, 10);
    },
    moveBlock: function(moveX){
        trace(this.mobileMenuBodyScroll.width());
        var cfg = this.config;
        var newLeft = (this.touchStartXY.sLeft + (moveX * 1));
        if(newLeft > this.menuPageWidth*0.5){
            newLeft = this.menuPageWidth*0.5;
        }else if(newLeft < ( - this.mobileMenuBodyScroll.width()) * 1.5){
            newLeft = ( - this.mobileMenuBodyScroll.width()) * 1.5;
        }
        this.mobileMenuBodyScroll.css({left: newLeft});
    },
    moveEndBlock: function(){
        /* 관성발동여부 체크 */
        if(!this.touchStartXY) return;
        var sTime = this.touchStartXY.sTime;
        var eTime = ((new Date()).getTime() / 1000);
        var dTime = eTime - sTime;
        var eLeft = this.mobileMenuBodyScroll.position().left;
        var dLeft = eLeft - this.touchStartXY.sLeft;
        var velocity = Math.ceil((dLeft/dTime)/10); // 속력= 거리/시간
        var endLeft = Math.ceil(eLeft + velocity); //스크롤할때 목적지
        /*trace({eLeft: eLeft, velocity:velocity, endLeft:endLeft});*/
        if(endLeft > 0){
            endLeft = 0;
        }
        var calLeft = (endLeft.abs() % this.menuPageWidth);
        var absPage = (endLeft.abs() / this.menuPageWidth).floor();
        var newLeft = 0;
        if(calLeft < this.menuPageWidth/2){
        }else{
            absPage += 1;
        }
        if(absPage > this.pageNum-1) absPage = this.pageNum - 1;
        newLeft = this.menuPageWidth * absPage;

        //trace(absPage);
        this.touchStartXY.sLeft = -newLeft;

        this.mobileMenuBodyScroll.animate({left: -newLeft}, (this.mobileMenuBodyScroll.position().left + newLeft).abs(), "cubicOut", function () {});
        this.modalObj.modalFoot.find('#' + this.modalID + '_AX_pageNav_AX_' + this.pageNo).removeClass("on");
        this.modalObj.modalFoot.find('#' + this.modalID + '_AX_pageNav_AX_' + absPage).addClass("on");

        this.pageNo = absPage;

        this.touchStartXY = null;
    },
    /* 메뉴 터치 이동관련 함수 - e */

    cancelEvent: function (event) {
        event.stopPropagation(); // disable  event
        return false;
    }
});

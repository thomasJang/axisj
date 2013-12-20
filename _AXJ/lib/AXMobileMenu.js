/*!
 * axisJ Javascript Library Version 1.0
 * http://axisJ.com
 * 
 * 아래 소스의 라이선스는 axisJ.com 에서 확인 하실 수 있습니다.
 * http://axisJ.com/license
 * axisJ를 사용하시려면 라이선스 페이지를 확인 및 숙지 후 사용 하시기 바람니다. 무단 사용시 예상치 못한 피해가 발생 하실 수 있습니다.
 */

var AXMobileMenu = Class.create(AXJ, {
    version: "AXMobileMenu V0.1",
    author: "tom@axisj.com",
	logs: [
		"2013-12-13 오전 10:53:43"
	],
    initialize: function(AXJ_super) {
		AXJ_super();
		
		this.moveSens = 0;
		this.config.moveSens = 1;
		this.touchMode;
		this.selectPosition = [];
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
		
		var close = this.close.bind(this);
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
				close();
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
    	this.modalObj = obj;
    	this.modalID = obj.jQueryModal.get(0).id;
    	var menu = this.getMenu(this.modalID);
	
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
    	
    	/*
    	obj.jQueryModal
    	modalPanel
    	modalHead
    	modalBody
    	modalFoot
    	*/
    	obj.modalHead.html(menu.headPo);
    	obj.modalBody.html(menu.bodyPo);
			obj.modalBody.attr("onselectstart", "return false");
			obj.modalBody.addClass("AXUserSelectNone");
    	obj.modalFoot.html(menu.pagePo);
		
		this.menuPageWidth = obj.modalBody.find(".mobileMenuBodyPage").width() + 9;
    	obj.modalBody.find(".mobileMenuBodyScroll").css({width:menu.pageNum * this.menuPageWidth});
    	this.mobileMenuBodyScroll = obj.modalBody.find(".mobileMenuBodyScroll");

    	/* drag cancle */
    	obj.modalBody.unbind("dragstart.AXMobileMenu").bind("dragstart.AXMobileMenu", this.cancelEvent.bind(this));
    },
    getMenu: function(modalID){
    	var cfg = this.config;
    	var countPerBlock = 9;
    	var headPo = [];
    	/* 현재 선택된 메뉴 선택 하는 기능구현 필요 */
    	headPo.push('<a ' + cfg.href + ' class="mobileMenuHome">home</a>');
    	if(this.selectPosition.length > 1){
    		headPo.push('<a ' + cfg.href + ' class="mobileMenuPrev">No titles</a>');
    	}
    	
    	var menu = cfg.menu;
    	/* 현재 선택된 메뉴 선택 하는 기능구현 필요 */
    	
    	if(!this.bodyPo){
	    	var bodyPo = [];
	    	bodyPo.push('<div class="mobileMenuBody">');
	    	bodyPo.push('	<div class="mobileMenuBodyScroll" id="', modalID ,'_AX_bodyScroll">');
	    	bodyPo.push('		<div class="mobileMenuBodyPage">');
	    	jQuery.each(menu, function(midx, M){
	    		if(midx % countPerBlock == 0 && midx > 0){
	    			bodyPo.push('	</div>');
	    			bodyPo.push('	<div class="mobileMenuBodyPage">');
	    		}
	    		bodyPo.push('<div ' + cfg.href + ' class="mobileMenuItem">');
	    		bodyPo.push(this[cfg.reserveKeys.labelKey]);
	    		bodyPo.push('</div>');
	    	});
	    	bodyPo.push('		</div>');
	    	bodyPo.push('	</div>');
	    	bodyPo.push('</div>');
	    	
	    	this.bodyPo = bodyPo;
	    }

		var pageNum = (menu.length / countPerBlock).floor();
		this.pageNo = 0;
		this.pageNum = pageNum;
    	var pagePo = [];
    	pagePo.push('<div class="mobileMenuFoot">');
    	jQuery.each(pageNum.rangeFrom(), function(pidx, p){
    		if(pidx == 0) pagePo.push('<div class="pageNav on" ');
    		else pagePo.push('<div class="pageNav" ');
    		pagePo.push(' id="', modalID ,'_AX_pageNav_AX_', pidx ,'"></div>');
    	});
    	pagePo.push('</div>');
    	
    	return {
    		headPo : headPo.join(''),
    		bodyPo : this.bodyPo.join(''),
    		pagePo : pagePo.join(''),
    		pageNum : (pageNum+1)
    	};
    },    
    close: function(){
    	var cfg = this.config;
    	//trace("close mobile menu");
    },
    setHighLightMenu: function(){
    	
    },
    navDir: function(){
    	
    },
	touchstart: function (e) {
		var cfg = this.config;

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
			jQuery(document.body).bind("mouseup.AXMobileMenu", this.touchEnd.bind(this));
			jQuery(document.body).bind("mousemove.AXMobileMenu", this.touchMove.bind(this));
		}
		
		this.mobileMenuBodyScroll.stop();
	},
	touchMove: function (e) {
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
		
		try{
			if (this.moveSens == 0) {
				this.touchStartXY = {
					x: touch.pageX,
					y: touch.pageY
				};
				this.mobileMenuBodyScrollLeft = this.mobileMenuBodyScroll.position().left;
			}
			
			
			if (this.config.moveSens > this.moveSens) this.moveSens++;
			if (this.moveSens == this.config.moveSens) {
	
				if (this.touchMode == "st") {
					//toast.push("st");
					this.moveBlock(touch.pageX - this.touchStartXY.x);
					if (event.preventDefault) event.preventDefault();
					else return false;
				} else if (this.touchMode == "up" || this.touchMode == "dn") {
					//toast.push("위아래");
				} else if (this.touchMode == "lt" || this.touchMode == "rt") {
					//toast.push("좌우");
					this.moveBlock(touch.pageX - this.touchStartXY.x);
					if (event.preventDefault) event.preventDefault();
					else return false;
				} else {
					/* this.touchMode 정해지기 전 touch 이동 방향을 가지고 터치모드를 판단합니다. */
					if (((this.touchStartXY.x - touch.pageX).abs() - (this.touchStartXY.y - touch.pageY).abs()).abs() < 5) {
						this.touchMode = "st" /* 선택모드 */
					} else if ((this.touchStartXY.x - touch.pageX).abs() < (this.touchStartXY.y - touch.pageY).abs()) {
						this.touchMode = ((this.touchStartXY.y - touch.pageY) <= 0) ? "up" : "dn"; /* 위아래 이동 */
					} else if ((this.touchStartXY.x - touch.pageX).abs() > (this.touchStartXY.y - touch.pageY).abs()) {
						this.touchMode = ((this.touchStartXY.x - touch.pageX) <= 0) ? "lt" : "rt"; /* 좌우 이동 */
					}
					if (event.preventDefault) event.preventDefault();
					else return false;
				}			
			}
		}catch(e){
			toast.push(Object.toJSON(e));	
		}
	},
	touchEnd: function (e) {
		var cfg = this.config;
		var event = window.event || e;
		this.moveSens = 0;

		this.touchMode = false;
		
		if(AXUtil.browser.mobile){
			if (document.removeEventListener) {
				document.removeEventListener("touchend", this.touchEndBind, false);
				document.removeEventListener("touchmove", this.touchMoveBind, false);
			}
		}else{
			jQuery(document.body).unbind("mouseup.AXMobileMenu");
			jQuery(document.body).unbind("mousemove.AXMobileMenu");
		}
		this.moveEndBlock();
	},
	
	moveBlock: function(moveX){
		var cfg = this.config;
		var newLeft = (this.mobileMenuBodyScrollLeft + moveX);
		if(newLeft > this.menuPageWidth*0.5){
			newLeft = this.menuPageWidth*0.5;
		}else if(newLeft < ( - this.mobileMenuBodyScroll.width()) * 0.8){
			newLeft = ( - this.mobileMenuBodyScroll.width()) * 0.8;
		}
		this.mobileMenuBodyScroll.css({left: newLeft});
	},
	moveEndBlock: function(){
		var endLeft = this.mobileMenuBodyScroll.position().left;
		
		if(endLeft > 0){
			endLeft = 0;
		}
		
		var calLeft = (endLeft.abs() % this.menuPageWidth);
		var absPage = (endLeft.abs() / this.menuPageWidth).floor();
		var newLeft = 0;
		if(calLeft < this.menuPageWidth/2.5){
		}else{
			absPage += 1;
		}
		if(absPage > this.pageNum) absPage = this.pageNum;
		newLeft = this.menuPageWidth * absPage;
		
		//absPage += 1;
		
		//trace(absPage);
		this.mobileMenuBodyScrollLeft = -newLeft;

		this.mobileMenuBodyScroll.animate({left: -newLeft}, (this.mobileMenuBodyScroll.position().left + newLeft).abs(), "expoOut", function () {});
		this.modalObj.modalFoot.find('#' + this.modalID + '_AX_pageNav_AX_' + this.pageNo).removeClass("on");
		this.modalObj.modalFoot.find('#' + this.modalID + '_AX_pageNav_AX_' + absPage).addClass("on");
		
		this.pageNo = absPage;
		
	},
	
	cancelEvent: function (event) {
		event.stopPropagation(); // disable  event
		return false;
	}
});
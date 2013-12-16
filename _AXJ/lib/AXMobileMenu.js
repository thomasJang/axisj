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
		this.selectPosition = [];
		this.config.height = 338;
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
    	var obj = this.modal.open();
    	var menu = this.getMenu(obj.jQueryModal.get(0).id);
    	/*
    	obj.jQueryModal
    	modalPanel
    	modalHead
    	modalBody
    	modalFoot
    	*/
    	
    	obj.modalHead.html(menu.headPo);
    },
    getMenu: function(modalID){
    	var cfg = this.config;

    	var headPo = [];
    	headPo.push('<a href="javascript:;" class="mobileMenuHome">home</a>');
    	if(this.selectPosition.length > 1){
    		headPo.push('<a href="javascript:;" class="mobileMenuPrev">prev</a>');
    	}
    	
    	headPo.push('<a href="javascript:;" class="mobileMenuPrev">제목입니다.</a>');
    	
    	var menu = cfg.menu;
    	var bodyPo = [];
    	jQuery.each(menu, function(){
    		bodyPo.push('<a href="javascript:;" class="mobileMenuItem">');
    		bodyPo.push(this[cfg.reserveKeys.labelKey]);
    		bodyPo.push('</a>');
    	});
    	
    	var pageNum = (menu.length / 9).floor();
    	
    	var pagePo = [];
    	jQuery.each(pageNum.rangeFrom(), function(pidx, p){
    		pagePo.push('<div class="pageNav" id="', modalID ,'_AX_pageNav_AX_', pidx ,'"></div>');
    	});
    	
    	return {
    		headPo : headPo.join(''),
    		bodyPo : bodyPo.join(''),
    		pagePo : pagePo.join('')	
    	};    	
    },    
    close: function(){
    	var cfg = this.config;
    	trace("close mobile menu");
    },
    setHighLightMenu: function(){
    	
    },
    navDir: function(){
    	
    }
});
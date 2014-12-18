/**
 * AXToolBar
 * @class AXToolBar
 * @extends AXJ
 * @version v0.1
 * @author tom@axisj.com
 * @logs
 * 2014-12-18 시작~
 * @example
 */

var AXToolBar = Class.create(AXJ, {
	initialize: function (AXJ_super) {
		AXJ_super();
		this.config.theme = "AXToolBar";
		this.opened = false; // expand submenu 상태 값
		this.open_midx = null;
	},
/**
 * 툴바의 환경을 설정합니다
 * @method AXToolBar.setConfig
 * @param {Object} config of toolbar
 * @example
```js

```
 */
	init: function(){
		var cfg = this.config;
		if (Object.isUndefined(cfg.targetID)) {
			trace("need targetID - setConfig({targetID:''})");
			return;
		}
		this.target = jQuery("#" + cfg.targetID);
		this.setBody();
	},
	setBody: function(){
		var cfg = this.config, _this = this, po = [];

		po.push('<div class="',cfg.theme,'">');
		$.each(cfg.menu, function (midx, M) {
			var addClass = [];
			addClass.push(this.addClass);
			if (!this.menu) {
				addClass.push("noexpand");
			}

			po.push('<div class="ax-root-menu-item" data-item-idx="', midx,'">');
				po.push('<a href="#axexec" class="ax-menu-item ', addClass.join(" ") ,'" data-item-idx="', midx,'">' , this.label , '</a>');
			if (this.menu) {
				po.push('<a href="#axexec" class="ax-menu-handel" data-item-idx="', midx,'"></a>');
			}
			po.push('</div>');
		});
		po.push('<div class="clear"></div>');
		po.push('</div>');

		this.target.html(po.join(''));

		this.target.find(".ax-menu-item").bind("click", function(e){
			var target = axf.get_event_target(e.target, {tagname:"a", clazz:"ax-menu-item"});
			var midx = target.getAttribute("data-item-idx");
			_this.exec(midx, cfg.menu[midx], event);
		});
		this.target.find(".ax-root-menu-item").bind("mouseover", function(e){
			var target = axf.get_event_target(e.target, {tagname:"div", clazz:"ax-root-menu-item"});
			var midx = target.getAttribute("data-item-idx");
			_this.overitem(midx, cfg.menu[midx], event);
		});
		this.target.find(".ax-root-menu-item").bind("mouseout", function(e){
			//var target = axf.get_event_target(e.target, {tagname:"div", clazz:"ax-root-menu-item"});
			//var midx = target.getAttribute("data-item-idx");
			_this.outitem();
		});
		this.target.find(".ax-menu-handel").bind("click", function(e){
			var target = axf.get_event_target(e.target, {tagname:"a", clazz:"ax-menu-handel"});
			var midx = target.getAttribute("data-item-idx");
			//console.log(cfg.menu[midx]);
			_this.expand(midx, cfg.menu[midx], event);
		});
	},
	exec: function(midx, menu, event){
		var cfg = this.config,
			that = menu;

		that.targetID = cfg.targetID;
		menu.onclick.call(that, menu, event);
	},
	overitem: function(midx, menu, event){
		var cfg = this.config, _target = this.target.find("[data-item-idx='"+midx+"']");
		this.target.find(".ax-root-menu-item").removeClass("hover");
		_target.addClass("hover");
		if(this.opened){
			this.expand(midx, menu, event);
		}
	},
	outitem: function(){
		if(this.opened) return;
		var cfg = this.config;
		this.target.find(".ax-root-menu-item").removeClass("hover");
	},
	expand: function(midx, menu, event){
		var cfg = this.config, _this = this,
			that = menu, offset, _target = this.target.find("[data-item-idx='"+midx+"']");

		if(this.open_midx != midx){
			AXContextMenu.close({id: cfg.targetID + "_AX_expand_AX_" + this.open_midx});
		}
		this.open_midx = midx;

		if(menu.menu) {

			if (!menu.context_menu) {
				menu.context_menu = AXContextMenu.bind({
					id         : cfg.targetID + "_AX_expand_AX_" + midx,
					theme      : "AXContextMenu", // 선택항목
					width      : "150", // 선택항목
					reserveKeys: cfg.reserveKeys,
					menu       : menu.menu,
					onclose    : function () {
						//trace(this);
						_this.expand_end(this);
					}
				});
			}

			offset = _target.offset();
			AXContextMenu.open({id: cfg.targetID + "_AX_expand_AX_" + midx}, {
				left: offset.left,
				top : offset.top + _target.outerHeight()
			});
			this.opened = true;
		}else{
			this.opened = false;
		}

	},
	expand_end: function(){
		trace("close");
		this.opened = false;
		this.open_midx = null;
		this.outitem();
	}
});
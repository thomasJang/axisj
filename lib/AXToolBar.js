/**
 * AXToolBar
 * @class AXToolBar
 * @extends AXJ
 * @version v0.6
 * @author tom@axisj.com
 * @logs
 * 2014-12-18 시작~
 * 2014-12-22 expand 버그 픽스
 * 2015-01-14 tom : menu width 설정 가능
 * 2015-01-22 tom : menu filter 옵션 추가
 * 2015-01-26 tom : menu filter 예외처리 추가
 * 2015-03-21 tom : rootmenu item onclick 없으면 타이틀 클릭해도 서브메뉴 펼쳐지도록 수정 https://github.com/axisj-com/axisj/issues/470
 * @example
 */

var AXToolBar = Class.create(AXJ, {
	initialize: function (AXJ_super) {
		AXJ_super();
		this.config.theme = "AXToolBar";
		this.config.reserveKeys = { "subMenu": "subMenu" };
		this.opened = false; // expand submenu 상태 값
		this.open_midx = null;
	},
/**
 * 툴바의 환경을 설정합니다
 * @method AXToolBar.setConfig
 * @param {Object} config of toolbar
 * @example
```js
 <div class="toolBar" id="tool-bar" style="border-bottom: 1px solid #d6d6d6;border-top: 1px solid #d6d6d6;"></div>
 <script>
 var menu = [
 {
	label   : "<i class='axi axi-axisj'></i> 액시스제이", addClass: "",
	onclick : function (menu, event) {
		//trace("1", menu);
	},
	menu    : [
		{
			label: "<i class=\"axi axi-box\"></i>  Common", onclick: function (event) {},
			menu    : [
				{
					label: "<i class=\"axi axi-box\"></i> AXCore", onclick: function (event) {}
				},
				{
					label: "<i class=\"axi axi-box\"></i> AXValidator", onclick: function () {}
				},
				{
					label: "<i class=\"axi axi-box\"></i> AXAddress", onclick: function () {}
				},
				{
					label: "<i class=\"axi axi-box\"></i> Table CSS Guide", onclick: function () {}
				}
			]
		},
		{
			label: "<i class=\"axi axi-box\"></i>  UI-Unique", onclick: function () {},
			menu    : [
				{
					label: "<i class=\"axi axi-box\"></i> AXButton", onclick: function (event) {}
				},
				{
					label: "<i class=\"axi axi-box\"></i> AXInput", onclick: function () {}
				},
				{
					label: "<i class=\"axi axi-box\"></i> AXSelect", onclick: function () {}
				},
				{
					label: "<i class=\"axi axi-box\"></i> AXNotification", onclick: function () {}
				},
				{
					label: "<i class=\"axi axi-box\"></i> AXProgress", onclick: function () {}
				},
				{
					label: "<i class=\"axi axi-box\"></i> AXScroll", onclick: function () {}
				},
				{
					label: "<i class=\"axi axi-box\"></i> AXTabs", onclick: function () {}
				},
				{
					label: "<i class=\"axi axi-box\"></i> AXToolBar", onclick: function () {}
				}
			]
		},
		{
			label: "<i class=\"axi axi-box\"></i>  UI-Complex", onclick: function () {},
			underLine: true
		},
		{
			label: "<i class='axi axi-accessibility'></i> Material Design Icons", onclick: function () {}
		},
		{
			label: "<i class=\"axi axi-glass\"></i> FontAwesome", onclick: function () {}
		},
		{
			label: "<i class=\"axi axi-axicon-o\"></i> AXIcon", onclick: function (event) {}
		},
		{
			label: "<i class='axi axi-accessibility'></i> Material Design Icons", onclick: function () {}
		},
		{
			label: "<i class=\"axi axi-glass\"></i> FontAwesome", onclick: function () {}
		}
	]
 },
 {
	label   : "<i class='axi axi-axu'></i> 악수", addClass: "",
	onclick : function (event) {

	},
	menu    : [
		{
			label: "<i class=\"axi axi-box\"></i> Archon", onclick: function (event) {}
		},
		{
			label: "<i class=\"axi axi-box\"></i> Barracks", onclick: function () {}
		},
		{
			label: "<i class=\"axi axi-box\"></i> Barracks-2", onclick: function () {}
		}
	]
 },
 {
	label   : "<i class='axi axi-axicon'></i> 액시콘", addClass: "",
	onclick : function (event) {

	},
	menu    : [
		{
			label: "<i class=\"axi axi-axicon-o\"></i> AXIcon", onclick: function (event) {}
		},
		{
			label: "<i class='axi axi-accessibility'></i> Material Design Icons", onclick: function () {}
		},
		{
			label: "<i class=\"axi axi-glass\"></i> FontAwesome", onclick: function () {}
		},
		{
			label: "<i class=\"axi axi-axicon-o\"></i> AXIcon", onclick: function (event) {},
			underLine: true
		},
		{
			label: "<i class='axi axi-accessibility'></i> Material Design Icons", onclick: function () {}
		},
		{
			label: "<i class=\"axi axi-glass\"></i> FontAwesome", onclick: function () {}
		},
		{
			label: "<i class=\"axi axi-axicon-o\"></i> AXIcon", onclick: function (event) {}
		},
		{
			label: "<i class='axi axi-accessibility'></i> Material Design Icons", onclick: function () {}
		},
		{
			label: "<i class=\"axi axi-glass\"></i> FontAwesome", onclick: function () {}
		}
	]
 },
 {
	label   : "<i class='axi axi-jsongum'></i> 제이슨껌", addClass: "",
	onclick : function (event) {

	},
	menu    : [
		{
			label: "<i class=\"axi axi-box\"></i> $4.99", onclick: function (event) {}
		},
		{
			label: "껌팔이 앱인데 하나도 안팔리고..", onclick: function () {
				alert(this.menu.label);
			}
		},
		{
			label: "그래도 액시스제이는 포기하지 않아~ 열심히 돈을 벌어서 오픈소스를", onclick: function () {
				alert(this.menu.label);
			}
		}
	]
 }
 ];
 var myToolbar = new AXToolBar();
 myToolbar.setConfig({
    targetID: "tool-bar",
    theme   : "AXToolBar",
    menu    : menu,
    reserveKeys: {
        subMenu: "menu"
    }
 });
 </script>
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
	filter: function (menu) {
		var cfg = this.config, that;
		if (cfg.filter) {
			that = menu;
			return cfg.filter.call(that,  that);
		} else {
			return true;
		}
	},
	setBody: function(){
		var cfg = this.config, _this = this, po = [];

		po.push('<div class="',cfg.theme,'">');
		$.each(cfg.menu, function (midx, M) {
			if(M && _this.filter(M) ) {
				var addClass = [];
				addClass.push(this.addClass);
				if (!this[cfg.reserveKeys.subMenu]) {
					addClass.push("noexpand");
				}

				po.push('<div class="ax-root-menu-item" data-item-idx="', midx, '">');
				po.push('<a href="#axexec" class="ax-menu-item ', addClass.join(" "), '" data-item-idx="', midx, '">', this.label, '</a>');
				if (this[cfg.reserveKeys.subMenu]) {
					po.push('<a href="#axexec" class="ax-menu-handel" data-item-idx="', midx, '"></a>');
				}
				po.push('</div>');
			}
		});
		po.push('<div class="clear"></div>');
		po.push('</div>');

		this.target.html(po.join(''));

		this.target.find(".ax-menu-item").bind("click", function(e){
			var target = axf.get_event_target(e.target, {tagname:"a", clazz:"ax-menu-item"});
			var midx = target.getAttribute("data-item-idx");
			if(cfg.menu[midx].onclick) _this.exec(midx, cfg.menu[midx], e);
			else _this.expand(midx, cfg.menu[midx], e);
		});
		this.target.find(".ax-root-menu-item").bind("mouseover", function(e){
			var target = axf.get_event_target(e.target, {tagname:"div", clazz:"ax-root-menu-item"});
			var midx = target.getAttribute("data-item-idx");
			_this.overitem(midx, cfg.menu[midx], e);
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
			_this.expand(midx, cfg.menu[midx], e);
		});
	},
	reset: function(){
		this.setBody();
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
			this.expand(midx, menu);
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

		if(this.closing){
			AXContextMenu.close({id: cfg.targetID + "_AX_expand_AX_" + this.open_midx});
			this.expand_end();
			return;
		}
		else
		if(this.open_midx != midx){
			AXContextMenu.close({id: cfg.targetID + "_AX_expand_AX_" + this.open_midx});
		}

		this.open_midx = midx;
		if(menu[cfg.reserveKeys.subMenu]) {
			if (!menu.context_menu) {

				if(typeof menu.width == "undefined") menu.width = 150;
				menu.context_menu = AXContextMenu.bind({
					id         : cfg.targetID + "_AX_expand_AX_" + midx,
					theme      : "AXContextMenu", // 선택항목
					width      : menu.width, // 선택항목
					reserveKeys: cfg.reserveKeys,
					menu       : menu[cfg.reserveKeys.subMenu],
					onclose    : function () {
						//trace(event.type);
						_this.expand_end(this);
					}
				});
			}
			offset = _target.offset();
			AXContextMenu.open({id: cfg.targetID + "_AX_expand_AX_" + midx, filter:menu.filter}, {
				left: offset.left,
				top : offset.top + _target.outerHeight()
			});
			this.opened = true;
		}else{
			this.opened = false;
		}
	},
	expand_end: function(){
		var _this = this;
		this.opened = false;
		this.open_midx = null;
		this.closing = true;
		this.outitem();
		setTimeout(function(){
			_this.closing = false;
		}, 100);
	}
});
/**
 * AXDivSlider
 * @class AXDivSlider
 * @extends AXJ
 * @version v1.0.1
 * @author tom@axisj.com
 * @logs
 "2014-08-27 tom: start",
 "2014-08-28 tom: autoSlide bug fix",
 *
 */

var AXDivSlider = Class.create(AXJ, {
	initialize: function(AXJ_super) {
		AXJ_super();

		this.config.effect = "";
		this.config.autoSlide = false;
		this.config.slideSpeed = 300;
		this.config.touchMove = false;

		this.config.targetHeightRatio = 0;

		var _parent = this, cfg = this.config;
		this.touchUpdater = {
			firstTouch:{}, firstBoxModel:{}, moveType:"", item:{}, lastTouch:{},
			watch: function(){
				var _this = this;

				if(axf.browser.mobile){
					axdom(document.body).bind("touchmove.axdivslider", function(){
						_this.update(window.event);
					});
					axdom(document.body).bind("touchend.axdivslider", function(){
						_this.watchEnd(window.event);
					});
				}else{
					axdom(document.body).bind("mousemove.axdivslider", function(event){
						_this.update(event);
					});
					axdom(document.body).bind("mouseup.axdivslider", function(event){
						_this.watchEnd(event);
					});
					axdom(document.body).bind("mouseleave.axdivslider", function(event){
						_this.watchEnd(event);
					});
				}
				_parent.touchReady();
			},
			update: function(event){
				var touch = {};

				if(axf.browser.mobile){
					touch.pageX1 = event.touches[0].pageX - this.item._boxModel.dL;
					touch.pageY1 = event.touches[0].pageY - this.item._boxModel.dT;

					if(event.touches.length == 2){
						touch.pageX2 = event.touches[1].pageX - this.item._boxModel.dL;
						touch.pageY2 = event.touches[1].pageY - this.item._boxModel.dT;
						touch.centerX = (touch.pageX2 + touch.pageX1) / 2;
						touch.centerY = (touch.pageY2 + touch.pageY1) / 2;
					}else{
						touch.centerX = touch.pageX1;
						touch.centerY = touch.pageY1;
					}


					this.lastTouch = touch;
					_parent.touchUpdate( {firstTouch:this.firstTouch, firstBoxModel:this.firstBoxModel, touch:touch, moveType:this.moveType, item:this.item}, event );

					if( (this.firstTouch.centerY - touch.centerY).round() < 6 ){
						if (event.stopPropagation) event.stopPropagation();
						if (event.preventDefault) event.preventDefault();
						return false;
					}

				}else{
					touch.pageX1 = event.pageX - this.item._boxModel.dL;
					touch.pageY1 = event.pageY - this.item._boxModel.dT;
					touch.centerX = touch.pageX1;
					touch.centerY = touch.pageY1;

					this.lastTouch = touch;
					_parent.touchUpdate( {firstTouch:this.firstTouch, firstBoxModel:this.firstBoxModel, touch:touch, moveType:this.moveType, item:this.item}, event );

				}

			},
			watchEnd: function(event){
				if(axf.browser.mobile){
					axdom(document.body).unbind("touchmove.axdivslider");
					axdom(document.body).unbind("touchend.axdivslider");
				}else{
					axdom(document.body).unbind("mousemove.axdivslider");
					axdom(document.body).unbind("mouseup.axdivslider");
					axdom(document.body).unbind("mouseleave.axdivslider");
				}
				//관성 적용 법칙...
				_parent.touchEnd( {firstTouch:this.firstTouch, firstBoxModel:this.firstBoxModel, moveType:this.moveType, item:this.item}, event );
			}
		};

	},
	init: function(){
		var cfg = this.config, _this = this;

		this.handles = [];
		this._handles = axdom("#"+cfg.handleTargetID).find("."+cfg.handleClassName);
		this._handles.each(function(idx, d){
			var dom = axdom(this);
			if(dom.hasClass(cfg.selectedClassName)){
				_this.selectedIndex = idx;
			}
			dom.attr("data-axdiv-slider-index", idx);
			_this.handles.push( dom );
		});

		this.targets = [];
		this.target = axdom("#"+cfg.targetID);
		this._targets = this.target.find("."+cfg.targetClassName);
		this.target.css({
			position:"relative",
			overflow:"visible"
		});

		if(cfg.targetHeightRatio > 0){
			this.target.css({
				height: (this.target.width() * cfg.targetHeightRatio).ceil()
			});
		}

		if(cfg.effect == "fade" || cfg.effect == "fade-in-out"){
			this._targets.each(function(idx, d){
				var dom = axdom(this);
				dom.attr("data-axdiv-slider-index", idx);
				if( idx != _this.selectedIndex ) dom.hide();
				_this.targets.push(dom);
			});
			this._handles.bind("mouseover.axdivslider", function(event){
				var eid = [];
				var eventTarget = event.target;
				var myTarget = _this.getEventTarget({
					evt : eventTarget, evtIDs : eid,
					until:function(evt, evtIDs){ return (evt.parentNode.tagName == "body") ? true:false; },
					find:function(evt, evtIDs){ return (axdom(evt).attr("data-axdiv-slider-index") != undefined) ? true : false; }
				});

				if(myTarget){
					//trace( axdom(myTarget).attr("data-axdiv-slider-index") )
					_this.playFade( axdom(myTarget).attr("data-axdiv-slider-index") );
				}
			});
		}
		else
		if(cfg.effect == "slideup"){
			this._targets.each(function(idx, d){
				var dom = axdom(this);
				dom.attr("data-axdiv-slider-index", idx);
				if( idx != _this.selectedIndex ) dom.hide();
				_this.targets.push(dom);
			});
			this._handles.bind("mouseover.axdivslider", function(event){
				var eid = [];
				var eventTarget = event.target;
				var myTarget = _this.getEventTarget({
					evt : eventTarget, evtIDs : eid,
					until:function(evt, evtIDs){ return (evt.parentNode.tagName == "body") ? true:false; },
					find:function(evt, evtIDs){ return (axdom(evt).attr("data-axdiv-slider-index") != undefined) ? true : false; }
				});

				if(myTarget){
					//trace( axdom(myTarget).attr("data-axdiv-slider-index") )
					_this.playSlideUp( axdom(myTarget).attr("data-axdiv-slider-index") );
				}
			});
		}
		else
		if(cfg.effect == "slide"){

			if(true) {
				this.target.css({overflow: "hidden"});
				this.targetBox = {
					width : this.target.innerWidth(),
					height: this.target.innerHeight()
				}
				this._targets.css({
					position: "absolute",
					left    : 0, top: 0, width: this.targetBox.width, height: this.targetBox.height
				});

				this._targets.each(function (idx, d) {
					var dom = axdom(this);
					dom.attr("data-axdiv-slider-index", idx);
					if (idx < _this.selectedIndex) {
						dom.css({left: -_this.targetBox.width});
					} else if (idx > _this.selectedIndex) {
						dom.css({left: _this.targetBox.width});
					}
					_this.targets.push(dom);
				});
				this._handles.bind("mouseover.axdivslider", function (event) {
					var eid = [];
					var eventTarget = event.target;
					var myTarget = _this.getEventTarget({
						evt  : eventTarget, evtIDs: eid,
						until: function (evt, evtIDs) {
							return (evt.parentNode.tagName == "body") ? true : false;
						},
						find : function (evt, evtIDs) {
							return (axdom(evt).attr("data-axdiv-slider-index") != undefined) ? true : false;
						}
					});
					if (myTarget) {
						_this.playSlide(axdom(myTarget).attr("data-axdiv-slider-index"));
					}
				});

				//handle event bind
				axdom("#" + cfg.moveLeftHandleID).on("click", function () {
					var newidx = _this.selectedIndex.number() - 1;
					if (newidx < 0) newidx = _this.targets.length - 1;
					_this.playSlide(newidx);
				});
				axdom("#" + cfg.moveRightHandleID).on("click", function () {
					var newidx = _this.selectedIndex.number() + 1;
					if (newidx > _this.targets.length - 1) newidx = 0;
					_this.playSlide(newidx);
				});
			}

			if(cfg.touchMove){

				if(axf.browser.mobile){

					var eventBodyID = cfg.targetID;
					if (document.addEventListener) { // 터치 이벤트 시작
						AXgetId(eventBodyID).addEventListener("touchstart", function(event){
							if(_this.processing) return;

							var touch = {};
							var item = {
								_boxModel: {dL: _this.target.offset().left, dT: _this.target.offset().top}
							};

							if (_this.touhEndObserver) clearTimeout(_this.touhEndObserver);
							_this.velocityDX = 0;
							_this.velocityDY = 0;
							touch.pageX1 = event.touches[0].pageX - item._boxModel.dL;
							touch.pageY1 = event.touches[0].pageY - item._boxModel.dT;
							if(event.touches.length == 2){
								touch.pageX2 = event.touches[1].pageX - item._boxModel.dL;
								touch.pageY2 = event.touches[1].pageY - item._boxModel.dT;
								touch.centerX = (touch.pageX2 + touch.pageX1) / 2;
								touch.centerY = (touch.pageY2 + touch.pageY1) / 2;
								_this.touchUpdater.moveType = "zoom";
							}else{
								touch.centerX = touch.pageX1;
								touch.centerY = touch.pageY1;
								_this.touchUpdater.moveType = "move";
							}
							_this.touchUpdater.firstTouch = touch;
							_this.touchUpdater.firstBoxModel = axf.copyObject(item._boxModel);
							_this.touchUpdater.item = item;
							_this.touchUpdater.watch();
						}, false);
					}

				}
				else{ // deskTop

					var eventBodyID = cfg.targetID;
					axdom("#" +eventBodyID).bind("mousedown.axdivslider", function(event){
						if(_this.processing) return;

						//핸들은 터치 하시말자
						if(event.target.id == cfg.moveLeftHandleID || event.target.id == cfg.moveRightHandleID){
							return;
						}

						var touch = {};
						var item = {
							_boxModel: {dL: _this.target.offset().left, dT: _this.target.offset().top}
						};

						if (_this.touhEndObserver) clearTimeout(_this.touhEndObserver);
						_this.velocityDX = 0;
						_this.velocityDY = 0;
						touch.pageX1 = event.pageX - item._boxModel.dL;
						touch.pageY1 = event.pageY - item._boxModel.dT;

						touch.centerX = touch.pageX1;
						touch.centerY = touch.pageY1;

						_this.touchUpdater.moveType = "move";

						_this.touchUpdater.firstTouch = touch;
						_this.touchUpdater.firstBoxModel = axf.copyObject(item._boxModel);
						_this.touchUpdater.item = item;
						_this.touchUpdater.watch();
					});
				}
			}
		}
		axdom(window).bind("resize.axdivslider", this.windowResizeApply.bind(this));


		if(cfg.autoSlide){

			_this.switchAutoSlide(true);

			this.target.on("mouseover", function(){
				_this.switchAutoSlide(false);
			});
			this.target.on("mouseleave", function(){
				_this.switchAutoSlide(true);
			});

			this._handles.on("mouseover", function(){
				_this.switchAutoSlide(false);
			});
			this._handles.on("mouseleave", function(){
				_this.switchAutoSlide(true);
			});

		}
	},

	switchAutoSlide: function(onoff){
		var cfg = this.config, _this = this;
		var autoSlideFn = function(){
			var newidx = _this.selectedIndex.number() + 1;
			if (newidx > _this.targets.length - 1) newidx = 0;

			if(cfg.effect == "fade") {
				_this.playFade( newidx );
			}
			else
			if(cfg.effect == "slideup"){
				_this.playSlideUp( newidx );
			}
			else
			if(cfg.effect == "slide"){
				_this.playSlide( newidx );
			}
		};
		if(onoff){
			if(this.autoSlideInterval) clearInterval(this.autoSlideInterval);
			this.autoSlideInterval = setInterval(autoSlideFn, cfg.autoSlideDelayTime);
		}else{
			if(this.autoSlideInterval) clearInterval(this.autoSlideInterval);
		}
	},

	windowResizeApply: function(){
		var cfg = this.config, _this = this;
		if(cfg.effect == "slide") {

			if(cfg.targetHeightRatio > 0){
				this.target.css({
					height: (this.target.width() * cfg.targetHeightRatio).ceil()
				});
			}

			this.targetBox = {
				width: this.target.innerWidth(),
				height: this.target.innerHeight()
			}
			this._targets.css({
				position:"absolute",
				left: 0, top: 0, width: this.targetBox.width, height: this.targetBox.height
			});
			this._targets.each(function(idx, d){
				var dom = axdom(this);
				dom.attr("data-axdiv-slider-index", idx);
				if( idx < _this.selectedIndex ) {
					dom.css({left:-_this.targetBox.width});
				}else
				if( idx > _this.selectedIndex){
					dom.css({left:_this.targetBox.width});
				}
			});
		}
	},
	playFade: function(index){
		var cfg = this.config, _this = this;

		var endPlay = function(){
			axf.each(_this.targets, function(idx, dom){
				if( idx != _this.selectedIndex ) dom.hide();
			});
		};

		if (this.fadeObserver) clearTimeout(this.fadeObserver);
		this.fadeObserver = setTimeout(function () {

			if(_this.selectedIndex != index) {

				if (typeof _this.selectedIndex != "undefined") {
					_this.handles[_this.selectedIndex].removeClass(cfg.selectedClassName);
					_this.targets[_this.selectedIndex].removeClass(cfg.selectedClassName);
					_this.targets[_this.selectedIndex].fadeOut(cfg.slideSpeed, function () {
						_this.selectedIndex = index;
						_this.handles[_this.selectedIndex].addClass(cfg.selectedClassName);
						_this.targets[_this.selectedIndex].fadeIn(cfg.slideSpeed);
						endPlay();
					});
				}else {
					_this.selectedIndex = index;
					_this.handles[_this.selectedIndex].addClass(cfg.selectedClassName);
					_this.targets[_this.selectedIndex].fadeIn(cfg.slideSpeed);
					endPlay();
				}
			}
		}, 300);
	},
	playSlideUp: function(index){
		var cfg = this.config, _this = this;
		var endPlay = function(){
			axf.each(_this.targets, function(idx, dom){
				if( idx != _this.selectedIndex ) dom.hide();
			});
		};

		if (this.fadeObserver) clearTimeout(this.fadeObserver);
		this.fadeObserver = setTimeout(function () {

			if(_this.selectedIndex != index) {

				if (typeof _this.selectedIndex != "undefined") {
					_this.handles[_this.selectedIndex].removeClass(cfg.selectedClassName);
					_this.targets[_this.selectedIndex].removeClass(cfg.selectedClassName);
					_this.targets[_this.selectedIndex].slideUp(cfg.slideSpeed, function () {
						endPlay();
					});
				}
				_this.selectedIndex = index;
				_this.handles[_this.selectedIndex].addClass(cfg.selectedClassName);
				_this.targets[_this.selectedIndex].slideDown(cfg.slideSpeed);

			}
		}, 300);
	},
	playSlide: function(index){
		var cfg = this.config, _this = this;
		var endPlay = function(){
			_this.selectedIndex = index;
//			trace(_this.selectedIndex);
		};

		if (this.fadeObserver) clearTimeout(this.fadeObserver);
		this.fadeObserver = setTimeout(function () {
			if(_this.processing) return;
			if(_this.selectedIndex != index) {
				var outLeft = -_this.targetBox.width, readyLeft = _this.targetBox.width;
				if(_this.selectedIndex > index){
					outLeft = _this.targetBox.width;
					readyLeft = -_this.targetBox.width;
				}else{
					outLeft = -_this.targetBox.width;
					readyLeft = _this.targetBox.width;
				}

				if (typeof _this.selectedIndex != "undefined") {
					_this.targets[_this.selectedIndex].animate({left:outLeft}, cfg.slideSpeed, function () {
						_this.handles[_this.selectedIndex].removeClass(cfg.selectedClassName);
						_this.targets[_this.selectedIndex].removeClass(cfg.selectedClassName);
						endPlay();
					});
				}
				_this.targets[index].css( {left:readyLeft} );
				_this.targets[index].animate({left:0}, cfg.slideSpeed, function(){
					_this.handles[index].addClass(cfg.selectedClassName);
				});

			}
		}, 300);
	},
	touchReady: function(args){
		var cfg = this.config, _this = this;
		_this.switchAutoSlide(false); // 슬라이드 이벤트 중지

		this.touchItem = {
			l_item: {},
			item: {},
			r_item: {}
		};
		if(_this.selectedIndex == 0) {
			this.touchItem.l_item.dom = _this.targets[ _this.targets.length-1 ].css( {left:-_this.targetBox.width} );
			this.touchItem.l_item.left = -_this.targetBox.width;
			this.touchItem.l_item.index = _this.targets.length-1;
			this.touchItem.r_item.dom = _this.targets[ 1 ].css( {left:_this.targetBox.width} );
			this.touchItem.r_item.left = _this.targetBox.width;
			this.touchItem.r_item.index = 1;
		}
		else
		if(_this.selectedIndex == _this.targets.length-1){
			this.touchItem.l_item.dom = _this.targets[ _this.selectedIndex-1 ].css( {left:-_this.targetBox.width} );
			this.touchItem.l_item.left = -_this.targetBox.width;
			this.touchItem.l_item.index = _this.selectedIndex-1;
			this.touchItem.r_item.dom = _this.targets[ 0 ].css( {left:_this.targetBox.width} );
			this.touchItem.r_item.left = _this.targetBox.width;
			this.touchItem.r_item.index = 0;
		}
		else{
			this.touchItem.l_item.dom = _this.targets[ _this.selectedIndex-1 ].css( {left:-_this.targetBox.width} );
			this.touchItem.l_item.left = -_this.targetBox.width;
			this.touchItem.l_item.index = _this.selectedIndex-1;
			this.touchItem.r_item.dom = _this.targets[ _this.selectedIndex+1 ].css( {left:_this.targetBox.width} );
			this.touchItem.r_item.left = _this.targetBox.width;
			this.touchItem.r_item.index = _this.selectedIndex+1;
		}

		this.touchItem.item.dom = _this.targets[ _this.selectedIndex ].css({left:0});
		this.touchItem.item.left = 0;

		this.processing = true;
	},
	touchUpdate: function(args){
		var cfg = this.config;
		this.touchAndMoved = true;
		if (this.touhEndObserver) clearTimeout(this.touhEndObserver);
		if(args.moveType == "zoom"){

		}else{

			var mx, my, newL, newT;
			mx = (args.firstTouch.centerX - args.touch.centerX).round();
			my = (args.firstTouch.centerY - args.touch.centerY).round();

			if(this._mx == null){
				this.velocityDX = 0;
				this.velocityDY = 0;
			}else{
				this.velocityDX = this._mx - mx;
				this.velocityDY = this._my - my;
			}

			this._mx = mx;
			this._my = my;

			//newL = args.firstBoxModel.dL - mx;
			//newT = args.firstBoxModel.dT - my;

			newL = -mx;

			this.touchItem.l_item.dom.css({ left:this.touchItem.l_item.left + newL });
			this.touchItem.item.dom.css({ left:this.touchItem.item.left + newL });
			this.touchItem.r_item.dom.css({ left:this.touchItem.r_item.left + newL });

		}
	},
	touchEnd: function(args, event){
		var cfg = this.config, _this = this;
		_this.switchAutoSlide(true); // 슬라이드 이벤트 중지

		if( this.touchItem.item.dom.position().left.abs() > this.targetBox.width/4 ){

			if(this.touchItem.item.dom.position().left < 0){
				//오른쪽으로
				this.touchItem.l_item.dom.animate({ left:this.touchItem.l_item.left - this.targetBox.width }, cfg.slideSpeed, "expoOut");
				this.touchItem.item.dom.animate({ left:this.touchItem.item.left - this.targetBox.width }, cfg.slideSpeed, "expoOut");
				this.touchItem.r_item.dom.animate({ left:this.touchItem.r_item.left - this.targetBox.width }, cfg.slideSpeed, "expoOut", function(){
					_this.processing = false;
					//trace(_this.processing);
				});

				_this.handles[_this.selectedIndex].removeClass(cfg.selectedClassName);
				_this.targets[_this.selectedIndex].removeClass(cfg.selectedClassName);
				_this.selectedIndex = this.touchItem.r_item.index;
				_this.handles[_this.selectedIndex].addClass(cfg.selectedClassName);
				_this.targets[_this.selectedIndex].addClass(cfg.selectedClassName);
			}else{
				//왼쪽으로
				this.touchItem.l_item.dom.animate({ left:this.touchItem.l_item.left + this.targetBox.width }, cfg.slideSpeed, "expoOut");
				this.touchItem.item.dom.animate({ left:this.touchItem.item.left + this.targetBox.width  }, cfg.slideSpeed, "expoOut");
				this.touchItem.r_item.dom.animate({ left:this.touchItem.r_item.left + this.targetBox.width }, cfg.slideSpeed, "expoOut", function(){
					_this.processing = false;
					//trace(_this.processing);
				});

				_this.handles[_this.selectedIndex].removeClass(cfg.selectedClassName);
				_this.targets[_this.selectedIndex].removeClass(cfg.selectedClassName);
				_this.selectedIndex = this.touchItem.l_item.index;
				_this.handles[_this.selectedIndex].addClass(cfg.selectedClassName);
				_this.targets[_this.selectedIndex].addClass(cfg.selectedClassName);
			}

		}else{

			//제자리로
			this.touchItem.l_item.dom.animate({ left:this.touchItem.l_item.left }, cfg.slideSpeed, "expoOut");
			this.touchItem.item.dom.animate({ left:this.touchItem.item.left }, cfg.slideSpeed, "expoOut");
			this.touchItem.r_item.dom.animate({ left:this.touchItem.r_item.left }, cfg.slideSpeed, "expoOut", function(){
				_this.processing = false;
				trace(_this.processing);
			});

		}
	}
});
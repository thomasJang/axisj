/**
 * AXSplit
 * @class AXSplit
 * @extends AXJ
 * @version v0.2.1
 * @author tom@axisj.com
 * @logs
 * "2015-05-24 HJ.Park : data-min-width, data-max-width, data-min-height, data-max-height 속성 추가. % 단위 지원 추가"
 * "2015-06-13 HJ.Park : 성능 문제로 resizeInstances 메서드를 resizeend에만 실행하도록 수정"
 *
 */
var AXSplit = Class.create(AXJ, {
	initialize: function(AXJ_super) {
		AXJ_super();

	},
	init: function() {
		var cfg = this.config;

		if(!cfg.onwindowresize) cfg.onwindowresize = cfg.onWindowResize;
		if(!cfg.onready) cfg.onready = cfg.onReady;
		if(!cfg.onsplitresize) cfg.onsplitresize = cfg.onSplitResize;
		if(!cfg.onsplitresizeend) cfg.onsplitresizeend = cfg.onSplitResizeEnd;

        $("html, body").css("overflow", "hidden"); // resize 이벤트 발생시 스크롤이 순간적으로 발생하는 현상을 막기위해 필수!


		this.target = axdom("#"+cfg.targetID);
		this.target.attr("ondragstart", "return false");

        if (typeof cfg.setTargetHeight === "function") {
            var targetHeight = cfg.setTargetHeight.call(this);
            this.target.height(targetHeight);
        }

		this.initChild(this.target);
		this.initEvent();
		axdom(window).resize(this.windowResize.bind(this));

		if(cfg.onready){
			cfg.onready.call({});
		}

        this.resizeInstances();
	},
	windowResize: function () {
		this.windowResizeApply();

		/*
		var windowResizeApply = this.windowResizeApply.bind(this);
		if (this.windowResizeObserver) clearTimeout(this.windowResizeObserver);
		this.windowResizeObserver = setTimeout(function () {
			windowResizeApply();
		}, 1);
		*/
	},
	windowResizeApply: function(){
		var cfg = this.config;
		if (this.windowResizeObserver) clearTimeout(this.windowResizeObserver);
		this.initChild(this.target);
		//axdom(window).resize();
		if(cfg.onwindowresize){
			cfg.onwindowresize.call({});
		}
	},
	initChild: function(parent){
		var cfg = this.config;
		var parentWidth = parent.innerWidth();
		var parentHeight = parent.innerHeight();

		var calcWidth = 0, calcHeight = 0, uncolCount = 0, unrowCount = 0, colindex = 1, rowindex = 1;
		var moreFindTarget = [];
        var getPixelValueBind = this.getPixelValue.bind(this);

        // data-width, data-height 속성이 선언된 element 길이 설정
		parent.children().each(function(){
			var dom_this = axdom(this);
			if(dom_this.hasClass("AXSplit-cols")){
				if(dom_this.attr("data-width")) {
                    var width = getPixelValueBind(dom_this.attr("data-width"), parentWidth);
					calcWidth += width;
                    dom_this.css("width", width);
				}else{
					uncolCount++;
				}
				if(!dom_this.attr("data-axsplit-colindex")) dom_this.attr("data-axsplit-colindex", colindex);
				colindex++;
			}else if(dom_this.hasClass("AXSplit-col-handle")){
				calcWidth += dom_this.width().number();
				if(!dom_this.attr("data-axsplit-colindex")) dom_this.attr("data-axsplit-colindex", colindex);
				colindex++;
			}else if(dom_this.hasClass("AXSplit-rows")){
				if(dom_this.attr("data-height")){
                    var height = getPixelValueBind(dom_this.attr("data-height"), parentHeight);
					calcHeight += height;
                    dom_this.css("height", height);
				}else{
					unrowCount++;
				}
				if(!dom_this.attr("data-axsplit-rowindex")) dom_this.attr("data-axsplit-rowindex", rowindex);
				rowindex++;
			}else if(dom_this.hasClass("AXSplit-row-handle")) {
				calcHeight += dom_this.height().number();
				if(!dom_this.attr("data-axsplit-rowindex")) dom_this.attr("data-axsplit-rowindex", rowindex);
				rowindex++;
			}
		});

        /**
         * min/max, width/height 설정
         * @param dom
         * @param type "width"|"height"
         */
        function setMinMaxLength(dom, type) {
            var min = dom.attr("data-min-" + type);
            var max = dom.attr("data-max-" + type);
            var parentLength = (type == "height" ? parentHeight : parentWidth);
            if(min) {
                var minValue = getPixelValueBind(min, parentLength);
                dom.css("min-" + type, minValue);
            }
            if (max) {
                var maxValue = getPixelValueBind(max, parentLength);
                dom.css("max-" + type, maxValue);
            }
        }

        // data-width, data-height 속성이 없는 element 길이 설정
        parent.children().each(function(){
			var dom_this = axdom(this);
			if(dom_this.hasClass("AXSplit-cols")){
				if(!dom_this.attr("data-width")){
					dom_this.css({width: (parentWidth - calcWidth) / uncolCount});
				}
                setMinMaxLength(dom_this, "width");
			}else if(dom_this.hasClass("AXSplit-rows")){
                if(!dom_this.attr("data-height")){
                    dom_this.css({height: (parentHeight - calcHeight) / unrowCount});
                }
                setMinMaxLength(dom_this, "height");
            }

			if( dom_this.find(".AXSplit-rows, .AXSplit-cols").length > 0 ){
				moreFindTarget.push(dom_this);
			}
		});

        // inner split을 처리하기 위한 재귀호출
		for(var i=0;i<moreFindTarget.length;i++){
			this.initChild(moreFindTarget[i]);
		}
    },
	initEvent: function(){
		var cfg = this.config, _this = this;
		this.target.find(".AXSplit-col-handle, .AXSplit-row-handle").bind("mousedown", function(event){
			_this.readyResize(axdom(this), event);
		});
	},
	readyResize: function(handleDom, event){
		var cfg = this.config, _this = this;
		this.resizeHandle_data = {
			parentDom: handleDom.parent(),
			dom: handleDom,
			isRowHandle: handleDom.hasClass("AXSplit-row-handle")
		};
		this.resizeHandle_data.dom.addClass("on");

		if(this.resizeHandle_data.isRowHandle){
			//rows
			this.resizeHandle_data.top = event.pageY;
			this.resizeHandle_data.hindex = this.resizeHandle_data.dom.attr("data-axsplit-rowindex").number();
			this.resizeHandle_data.pitem_dom = this.resizeHandle_data.parentDom.find(".AXSplit-rows[data-axsplit-rowindex="+ (this.resizeHandle_data.hindex-1) +"]");
			this.resizeHandle_data.nitem_dom = this.resizeHandle_data.parentDom.find(".AXSplit-rows[data-axsplit-rowindex="+ (this.resizeHandle_data.hindex+1) +"]");
			this.resizeHandle_data.pitem_dom_height = this.resizeHandle_data.pitem_dom.height().number();
			this.resizeHandle_data.pitem_dom_min_height = this.resizeHandle_data.pitem_dom.css("min-height").number();
			this.resizeHandle_data.pitem_dom_max_height = this.resizeHandle_data.pitem_dom.css("max-height").number();
			this.resizeHandle_data.nitem_dom_height = this.resizeHandle_data.nitem_dom.height().number();
			this.resizeHandle_data.nitem_dom_min_height = this.resizeHandle_data.nitem_dom.css("min-height").number();
			this.resizeHandle_data.nitem_dom_max_height = this.resizeHandle_data.nitem_dom.css("max-height").number();
		}else{
			//cols
			this.resizeHandle_data.left = event.pageX;
			this.resizeHandle_data.hindex = this.resizeHandle_data.dom.attr("data-axsplit-colindex").number();
			this.resizeHandle_data.pitem_dom = this.resizeHandle_data.parentDom.find(".AXSplit-cols[data-axsplit-colindex="+ (this.resizeHandle_data.hindex-1) +"]");
			this.resizeHandle_data.nitem_dom = this.resizeHandle_data.parentDom.find(".AXSplit-cols[data-axsplit-colindex="+ (this.resizeHandle_data.hindex+1) +"]");
			this.resizeHandle_data.pitem_dom_width = this.resizeHandle_data.pitem_dom.width().number();
			this.resizeHandle_data.pitem_dom_min_width = this.resizeHandle_data.pitem_dom.css("min-width").number();
			this.resizeHandle_data.pitem_dom_max_width = this.resizeHandle_data.pitem_dom.css("max-width").number();
			this.resizeHandle_data.nitem_dom_width = this.resizeHandle_data.nitem_dom.width().number();
			this.resizeHandle_data.nitem_dom_min_width = this.resizeHandle_data.nitem_dom.css("min-width").number();
			this.resizeHandle_data.nitem_dom_max_width = this.resizeHandle_data.nitem_dom.css("max-width").number();
		}

		axdom(document.body).bind("mousemove.axsplit", this.splitResize.bind(this));
		axdom(document.body).bind("mouseup.axsplit", this.splitResizeEnd.bind(this));
	},
	splitResize: function(event){
		var cfg = this.config, _this = this;
		var rdata = this.resizeHandle_data;

		if(rdata.isRowHandle){
			var dy = event.pageY - rdata.top;

			var pitem_dom_height = rdata.pitem_dom_height + dy;

            if (rdata.pitem_dom_min_height > 0 && rdata.pitem_dom_min_height > pitem_dom_height) { return; }
            if (rdata.pitem_dom_max_height > 0 && rdata.pitem_dom_max_height < pitem_dom_height) { return; }

			rdata.pitem_dom.css({height:pitem_dom_height});
			if(rdata.pitem_dom.attr("data-height")){
				rdata.pitem_dom.attr("data-height", pitem_dom_height);
			}

			var nitem_dom_height = rdata.nitem_dom_height - dy;

            if (rdata.nitem_dom_min_height > 0 && rdata.nitem_dom_min_height > nitem_dom_height) { return; }
            if (rdata.nitem_dom_max_height > 0 && rdata.nitem_dom_max_height < nitem_dom_height) { return; }

            rdata.nitem_dom.css({height:nitem_dom_height});
			if(rdata.nitem_dom.attr("data-height")){
				rdata.nitem_dom.attr("data-height", nitem_dom_height);
			}
		}else{
			var dx = event.pageX - rdata.left;

			var pitem_dom_width = rdata.pitem_dom_width + dx;

            if (rdata.pitem_dom_min_width > 0 && rdata.pitem_dom_min_width > pitem_dom_width) { return; }
            if (rdata.pitem_dom_max_width > 0 && rdata.pitem_dom_max_width < pitem_dom_width) { return; }

			rdata.pitem_dom.css({width:pitem_dom_width});
			if(rdata.pitem_dom.attr("data-width")){
				rdata.pitem_dom.attr("data-width", pitem_dom_width);
			}

			var nitem_dom_width = rdata.nitem_dom_width - dx;

            if (rdata.nitem_dom_min_width > 0 && rdata.nitem_dom_min_width > nitem_dom_width) { return; }
            if (rdata.nitem_dom_max_width > 0 && rdata.nitem_dom_max_width < nitem_dom_width) { return; }

			rdata.nitem_dom.css({width:nitem_dom_width});
			if(rdata.nitem_dom.attr("data-width")){
				rdata.nitem_dom.attr("data-width", nitem_dom_width);
			}
		}

        // 브라우저 부하로 인해 리사이즈 액션이 끊기는 문제가 있어서 일단 주석 처리함
        //this.resizeInstances();

        if(cfg.onsplitresize){
            cfg.onsplitresize.call(this.resizeHandle_data);
        }
	},
	splitResizeEnd: function(){
		var cfg = this.config, _this = this;
		this.resizeHandle_data.dom.removeClass("on");
		axdom(document.body).unbind("mousemove.axsplit");
		axdom(document.body).unbind("mouseup.axsplit");

		if(cfg.onsplitresizeend){
			cfg.onsplitresizeend.call({});
		}

        this.resizeInstances();
	},
    /**
     * '10%', '20px', '30' 등의 길이 표현을 픽셀단위의 number 값으로 변환한다.
     * @param value {String} - '10%', '20px', '30' 등의 길이 표현
     */
    getPixelValue: function(value, parentLength){
        if (typeof value !== "string" || value === "") { return 0; }

        if (value.indexOf("%") > -1) {
            var percent = value.number();
            var pixelValue = parentLength * (percent / 100);

            return pixelValue;
        } else {
            return value.number();
        }
    },
    /**
     * AXGrid_instances, AXTree_instances 중에 fill: true 설정된 인스턴스를 컨테이너에 꽉차게 만든다.
     */
    resizeInstances: function(){
        var axGrids = window.AXGrid_instances;
        if (axGrids && typeof axGrids.length === "number") {
            axf.each(axGrids, function(gi, grid) {
                if (grid.config.fill === true) {
                    grid.scrollBody.css("border", "none");

                    var ph = grid.target.parent().innerHeight();
                    var siblingsHeight = 0;
                    grid.target.siblings().each(function(si, sibling){
                        var s = $(sibling);
                        if (s.height() === 0) { return; }

                        siblingsHeight += s.outerHeight(true);
                    });

                    grid.setHeight(ph - siblingsHeight + 2/*border none size*/);
                }
            });
        }

        var axTree = window.AXTree_instances;
        if (axTree && typeof axTree.length === "number") {
            axf.each(axTree, function(ti, tree){
                if (tree.config.fill === true) {
                    tree.scrollBody.css("border", "none");

                    var ph = tree.target.parent().innerHeight();
                    var siblingsHeight = 0;
                    tree.target.siblings().each(function(si, sibling){
                        var s = $(sibling);
                        if (s.height() === 0) { return; }

                        siblingsHeight += s.outerHeight(true);
                    });

                    tree.target.height(ph - siblingsHeight);
                    tree.resetHeight();
                }
            });
        }
    }
});
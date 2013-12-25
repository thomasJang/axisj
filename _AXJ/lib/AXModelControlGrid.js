/*!
 * axisJ Javascript Library Version 1.0
 * http://axisJ.com
 * 
 * 아래 소스의 라이선스는 axisJ.com 에서 확인 하실 수 있습니다.
 * http://axisJ.com/license
 * axisJ를 사용하시려면 라이선스 페이지를 확인 및 숙지 후 사용 하시기 바람니다. 무단 사용시 예상치 못한 피해가 발생 하실 수 있습니다.
 */

var AXModelControlGrid = Class.create(AXJ, {
    version: "AXModelControlGrid V1.0",
    author: "tom@axisj.com",
	logs: [
		"2013-12-03 오후 5:27:18",
		"2013-12-12 오전 10:25:03"
	],
    initialize: function(AXJ_super) {
        AXJ_super();
        this.config.theme = "AXModelControlGrid";
    },
    init: function() {
		var cfg = this.config;
		if(Object.isUndefined(cfg.targetID)){
			trace("need targetID - setConfig({targetID:''})");
			return;
		}
		this.target = jQuery("#"+cfg.targetID);
		
		var theme = cfg.theme;
		/* grid 뼈대 그리기 ----------------------------------------------------------------------------------------------------- */
		var ol = [];
		ol.push("<div class=\"" + theme + "\" id=\"" + cfg.targetID + "_AX_grid\" style=\"\">");
		ol.push("	<div class=\"AXgridScrollBody\" id=\"" + cfg.targetID + "_AX_gridScrollBody\" style=\"z-index:2;\">");
		ol.push("		<div class=\"AXGridColHead AXUserSelectNone\" id=\"" + cfg.targetID + "_AX_gridColHead\" onselectstart=\"return false;\"></div>");
		ol.push("		<div class=\"AXGridBody\" id=\"" + cfg.targetID + "_AX_gridBody\"></div>");
		//ol.push("		<div style=\"height:13px;\"></div>");
		ol.push("	</div>");
		this.target.empty();
		this.target.append(ol.join(''));
		/* grid 뼈대 그리기 ----------------------------------------------------------------------------------------------------- */
		
		this.gridBody = jQuery("#" + cfg.targetID + "_AX_grid");
		this.scrollBody = jQuery("#" + cfg.targetID + "_AX_gridScrollBody");
		this.colHead = jQuery("#" + cfg.targetID + "_AX_gridColHead");
		this.body = jQuery("#" + cfg.targetID + "_AX_gridBody");
				
		/*colHead setting */
		this.setColHead();
		//this.scrollBody.css({height:this.scrollBody.outerHeight()+13});
		
		this.myUIScroll = new AXScroll(); // 스크롤 인스턴스 선언
		this.myUIScroll.setConfig({
			targetID : cfg.targetID + "_AX_grid",
			scrollID : cfg.targetID + "_AX_gridScrollBody",
			touchDirection : false,
			yscroll:false,
			xscroll:true
		});
		
		jQuery(window).bind("resize", this.windowResize.bind(this));
    },
	windowResizeApply: function () {
    	var cfg = this.config;
    	var bodyWidth = this.gridBody.width() - 2;
    	var colWidth = 0;
    	var astricCount = 0;
    	
		jQuery.each(cfg.colGroup, function (cidx, CG) {
			if(CG.widthAstric){
				CG.width = 0;
				CG._owidth = CG.width;
				astricCount++;
			}
			colWidth += (CG._owidth||0).number();
		});
    	this.colWidth = colWidth;
		
		var newColWidth = 0;
		/* width * 예외처리 구문 ------------ s */
		if ((bodyWidth) > (colWidth + 100 * astricCount)) {
			var remainsWidth = (bodyWidth) - colWidth;
			jQuery.each(cfg.colGroup, function (cidx, CG) {
				if (CG.widthAstric) {
					CG._owidth = remainsWidth / astricCount;
					CG.width = CG._owidth;
					colWidth += (CG._owidth||0).number();
				}
				newColWidth += CG.width.number();
			});
		}else{
			jQuery.each(cfg.colGroup, function (cidx, CG) {
				if (CG.widthAstric) {
					CG._owidth = 200;
					CG.width = 200;
					colWidth += (CG._owidth||0).number();
				}
				newColWidth += CG.width.number();
			});
		}
    	this.colWidth = newColWidth;
    	
    	jQuery.each(cfg.colGroup, function (cidx, CG) {
    		$("#" + cfg.targetID + "_AX_col_AX_" + cidx + "_AX_head").attr("width", this.width);
    		$("#" + cfg.targetID + "_AX_col_AX_" + cidx + "_AX_body").attr("width", this.width);
    	});
    	
		this.scrollBody.css({width:this.colWidth});
		
		this.colHead.find("table").css({width:this.colWidth});
		this.body.find("table").css({width:this.colWidth});
		this.myUIScroll.resizeScroll();
		this.myUIScroll.moveTo(0);
	},
	getColGroup: function (subfix) {
		var cfg = this.config;
		var po = [];
		po.push("<colgroup>");
		jQuery.each(cfg.colGroup, function (cidx, CG) {
			po.push("<col width=\"" + CG.width + "\" style=\"\" id=\"" + cfg.targetID + "_AX_col_AX_" + cidx + "_AX_" + subfix + "\" />");
		});
		po.push("</colgroup>");
		return po.join('');
	},
	getHeadItem: function (arg) {

		var cfg = this.config;
		var po = [];
		po.push("<td class=\"colHeadTd\">");
		po.push("	<div class=\"tdRelBlock\" style=\"text-align:" + (arg.align||"left") + ";\">");
		
		if(arg.html){
			var html = arg.html.call({
				rowIndex: arg.rowIndex, 
				colIndex: arg.colIndex, 
				data: arg.data
			});
			po.push(html);
		}else{
			po.push(arg.label);
		}
		
		po.push("	</div>");
		po.push("</td>");

		return po.join('');
	},
    setColHead: function(rewrite){
    	var cfg = this.config;
    	var bodyWidth = this.gridBody.width()-2;
    	var colWidth = 0;
    	var astricCount = 0;
    	
		jQuery.each(cfg.colGroup, function (cidx, CG) {
			if (!rewrite){
				if(CG.width == "*"){
					CG.width = 0;
					CG.widthAstric = true;
					astricCount++;
				}
				CG._owidth = CG.width; /* 최초의 너비값 기억 하기 */
			}else{
				if(CG.widthAstric){
					CG.width = 0;
					CG._owidth = CG.width;
					astricCount++;
				}
			}
			colWidth += (CG._owidth||0).number();
		});
    	this.colWidth = colWidth;
		
		var newColWidth = 0;
		/* width * 예외처리 구문 ------------ s */
		if ((bodyWidth) > (colWidth + 100 * astricCount)) {
			var remainsWidth = (bodyWidth) - colWidth;
			jQuery.each(cfg.colGroup, function (cidx, CG) {
				if (CG.widthAstric) {
					CG._owidth = remainsWidth / astricCount;
					CG.width = CG._owidth;
					colWidth += (CG._owidth||0).number();
				}
				newColWidth += CG.width.number();
			});
		}else{
			jQuery.each(cfg.colGroup, function (cidx, CG) {
				if (CG.widthAstric) {
					CG._owidth = 200;
					CG.width = 200;
					colWidth += (CG._owidth||0).number();
				}
				newColWidth += CG.width.number();
			});
		}
    	
    	this.colWidth = newColWidth;
		this.scrollBody.css({width:this.colWidth});
		
		var getHeadItem = this.getHeadItem.bind(this);
		
		var po = [];
		po.push("<table class=\"colHeadTable\" style=\"width:" + this.colWidth + "px;\">");
		po.push(this.getColGroup("head")); /*colGroup 삽입 */
		po.push("<tbody>");
		po.push("<tr>");
		var colCount = 0;
		jQuery.each(cfg.colGroup, function (CHidx, CH) {
			po.push(getHeadItem({
				rowIndex:0, colIndex:CHidx, 
				align: CH.align,
				label:CH.label, html:CH.html, data:CH.data
			}));
			colCount += CH.colspan;
		});
		po.push("</tr>");
		po.push("</tbody>");
		po.push("</table>");
		
		this.colHead.empty();
		this.colHead.append(po.join(''));
		
    },
    setList: function(list){
    	var cfg = this.config;
		this.list = list;
		this.printList();
		//this.scrollBody.css({height:this.scrollBody.outerHeight()+13});
		
		this.myUIScroll.resizeScroll();
    },
    appendList: function(item){
    	var cfg = this.config;
    	this.list.push(item);

    	var lidx = this.list.length-1;
    	this.printItem(lidx, this.list[lidx]);
    	this.printFootItem();
    	
    	this.myUIScroll.resizeScroll();
    },
    getItem: function(arg){
    	var cfg = this.config;
		var po = [];
		po.push("<td class=\"bodyTd\">");
		po.push("	<div class=\"tdRelBlock\" style=\"text-align:" + (arg.align||"left") + ";\">");
		
		if(arg.html){
			var html = arg.html.call({
				rowIndex: arg.rowIndex, 
				colIndex: arg.colIndex, 
				data: arg.data,
				item:this.list[arg.rowIndex], list:this.list
			});
			po.push(html);
		}else{
			po.push("&nbsp;");
		}
		
		po.push("	</div>");;
		po.push("</td>");

		return po.join('');
    },
    printList: function(){
    	var cfg = this.config;
    	var printItem = this.printItem.bind(this);
    	
		var po = [];
		po.push("<table class=\"gridBodyTable\" style=\"width:" + this.colWidth + "px;\">");
		po.push(this.getColGroup("body")); /*colGroup 삽입 */
		po.push("<tbody>");
		po.push("</tbody>");
		po.push("<tfoot>");
		po.push("</tfoot>");
		po.push("</table>");
		
		this.body.empty();
		this.body.append(po.join(''));

		jQuery.each(this.list, function(lidx, L){
			printItem(lidx, L);
		});

		this.printFootItem();
    },
    printItem: function(lidx, L, update){
    	var cfg = this.config;
    	var getItem = this.getItem.bind(this);
    	var AXbindOnchange = this.AXbindOnchange.bind(this);
    	var _body = this.body.find("tbody");
    	
		var tr = [];
		if(update == undefined) tr.push("<tr class='modelControlTR' id='" + cfg.targetID + "_tbodyTR_" + lidx + "'>");
		
		jQuery.each(cfg.body.form, function (fidx, form) {
			tr.push(getItem({
				rowIndex:lidx, colIndex:fidx, 
				align:form.align,
				html:form.html, data:form.data
			}));
		});
		if(update == undefined) tr.push("</tr>");
		if(update == undefined){
			_body.append(tr.join());
		}else{
			_body.find("#" + cfg.targetID + "_tbodyTR_" + lidx).html(tr.join(''));
		}
		
		jQuery.each(cfg.body.form, function(fidx, form) {
			if(form.AXBind){
				var bindID = form.AXBind.id.replace(/@rowIndex/g, lidx);
				var myConfig = AXUtil.copyObject(form.AXBind.config);
				jQuery.each(myConfig, function(k, v){
					if(Object.isString(v)) myConfig[k] = v.replace(/@rowIndex/g, lidx);
				});

				myConfig.onchange = function(){
					AXbindOnchange(lidx, fidx, this);
				};
				
				if(form.AXBind.type == "TwinDate"){
					jQuery("#"+bindID).bindTwinDate(myConfig);
				}else if(form.AXBind.type == "Date"){
					jQuery("#"+bindID).bindDate(myConfig);
				}else if(form.AXBind.type == "Select"){
					jQuery("#"+bindID).unbindSelect();
					jQuery("#"+bindID).bindSelect(myConfig);
				}else if(form.AXBind.type == "Selector"){
					jQuery("#"+bindID).bindSelector(myConfig);
				}else if(form.AXBind.type == "Money"){
					jQuery("#"+bindID).bindMoney(myConfig);					
				}
			}
		});
		
		var printFootItem = this.printFootItem.bind(this);
		var _this = this;
		_body.find("#" + cfg.targetID + "_tbodyTR_" + lidx).find("input[type=text],input[type=checkbox],input[type=radio],select,textarea").unbind("change.AXModelControlGrid").bind("change.AXModelControlGrid", function(){
			_this.list[lidx][this.name] = $(this).val();
			printFootItem();
		});
		//_body.find("#" + cfg.targetID + "_tbodyTR_" + lidx).find("input[type=checkbox],input[type=radio]")
		
    	if(update == "update"){
			//printFootItem();
    	}
    },
    AXbindOnchange: function(lidx, fidx, AXBindThis){
    	var cfg = this.config;
    	if(cfg.body.form[fidx].AXBind.onchange){
    		
    		var sendObj = {
				rowIndex: lidx, 
				colIndex: fidx,
				data: cfg.body.form[fidx].data,
				item:this.list[lidx], list:this.list
    		};
    		
    		$.each(AXBindThis, function(k, v){
    			sendObj[k] = v;
    		});
    		
    		cfg.body.form[fidx].AXBind.onchange.call(sendObj);
    	}
    },
    
    /* foot */
    printFootItem: function(){
    	var cfg = this.config;
	
		if(!cfg.foot) return;
		if(!cfg.foot.form) return;
    	
    	var _body = this.body.find("tfoot");
    	var _list = this.list;
    	var foot = [];
		foot.push("<tr class='modelControlTR' id='" + cfg.targetID + "_tbodyTR_foot'>");
		
		jQuery.each(cfg.foot.form, function(fidx, arg){
			foot.push("<td class=\"bodyTd\" colspan=\"" + (arg.colspan || 1) + "\">");
			foot.push("	<div class=\"tdRelBlock\" style=\"text-align:" + (arg.align||"left") + ";\">");
			
			if(arg.html){
				var html = arg.html.call({
					rowIndex: 0, 
					colIndex: fidx, 
					data: arg.data,
					list:_list
				});
				foot.push(html);
			}else{
				foot.push("&nbsp;");
			}
			
			foot.push("	</div>");
			foot.push("</td>");
		});
		
		foot.push("</tr>");
		
		_body.empty();
		_body.append(foot.join(''));
		
    },
    updateItem: function(lidx, item, onlyDataChane){
    	var cfg = this.config;
    	
    	this.list[lidx] = AXUtil.overwriteObject(this.list[lidx], item, true);
    	if(!onlyDataChane) this.printItem(lidx, this.list[lidx], "update");
    	
    	this.printFootItem();
    },
    removeItem: function(collectIdx){
    	var cfg = this.config;

    	var newList = [];
    	$.each(this.list, function(lidx, L){
	    	if(Object.isArray(collectIdx)){
	    		var isOk = true;
	    		$.each(collectIdx, function(){
	    			if(this == lidx) isOk = false;
	    		});
	    		if(isOk) newList.push(L);
	    	}else{
	    		if(collectIdx != lidx) newList.push(L);
	    	}    		
    	});

		this.setList(newList);
    },
    getValue: function(name){
    	var cfg = this.config;
    	var returnValues = [];
    	this.body.find("input[type=checkbox][name="+name+"]").each(function(){
    		returnValues.push(this.value);
    	});
    	return returnValues;
    },	
    getCheckedValue: function(name){
    	var cfg = this.config;
    	var returnValues = [];
    	this.body.find("input[type=checkbox][name="+name+"]:checked").each(function(){
    		returnValues.push(this.value);
    	});
    	return returnValues;
    },
    getList: function(){
    	var cfg = this.config;
    	
    	var _body = this.body.find("tbody");
    	$.each(this.list, function(lidx, L){
    		
    		var item = {};
    		_body.find("#" + cfg.targetID + "_tbodyTR_" + lidx).find("input[type=text],select,textarea").each(function(){
    			item[this.name] = $(this).val();
    		});
    		
    		var checkNames = {};
    		_body.find("#" + cfg.targetID + "_tbodyTR_" + lidx).find("input[type=checkbox],input[type=radio]").each(function(){
    			if(this.type == "checkbox"){
    				if(checkNames[this.name]){
    					checkNames[this.name].count += 1;
    				}else{
    					checkNames[this.name] = {name:this.name, count:1};
    					item[this.name] = "";
    				}
    			}
    			if(this.checked){
    				if(this.type == "checkbox"){
		    			if(item[this.name]){
		    				item[this.name].push(this.value);
		    			}else{
		    				item[this.name] = [this.value];
		    			}
		    		}else{
		    			item[this.name] = this.value;
		    		}
	    		}
    		});

    		jQuery.each(checkNames, function(k, v){
    			if(v.count == 1){
    				if(Object.isArray(item[v.name])){
    					item[v.name] = item[v.name].join(",");
    				}
    			}
    		});
    		
    		L = AXUtil.overwriteObject(L, item, true);
    	});
    	
    	return this.list;
    	
    	/*
    	this.body.find("tr.modelControlTR").each(function(trIndex, TR){
    		trace(trIndex);
    	});
    	*/
    }
});


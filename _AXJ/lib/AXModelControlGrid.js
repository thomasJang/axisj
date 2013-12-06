/*!
 * axisJ Javascript Library Version 1.0
 * http://axisJ.com
 * 
 * 아래 소스의 라이선스는 axisJ.com 에서 확인 하실 수 있습니다.
 * http://axisJ.com/license
 * axisJ를 사용하시려면 라이선스 페이지를 확인 및 숙지 후 사용 하시기 바람니다. 무단 사용시 예상치 못한 피해가 발생 하실 수 있습니다.
 */

var AXModelControlGrid = Class.create(AXJ, {
    version: "AXModelControlGrid V0.1",
    author: "tom@axisj.com",
	logs: [
		"2013-12-03 오후 5:27:18"
	],
    initialize: function(AXJ_super) {
        AXJ_super();
        this.config.theme = "modelControlGrid";
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
		
		this.scrollBody.css({height:this.scrollBody.outerHeight()+13});
		
		this.myUIScroll = new AXScroll(); // 스크롤 인스턴스 선언
		this.myUIScroll.setConfig({
			targetID : cfg.targetID + "_AX_grid",
			scrollID : cfg.targetID + "_AX_gridScrollBody",
			touchDirection : false,
			yscroll:false,
			xscroll:true
		});
    },
    
	getHeadItem: function (arg) {
		var cfg = this.config;
		var po = [];
		
		po.push("<td class=\"colHeadTd\">");
		po.push("	<div class=\"tdRelBlock\">");
		po.push("	<div class=\"colHeadNode\" align=\"" + (arg.align|"") + "\">");
		
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
		
		po.push("	</div>");;
		po.push("</td>");

		return po.join('');
	},
    
    setColHead: function(rewrite){
    	var cfg = this.config;
    	var bodyWidth = this.body.width();
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
		this.scrollBody.css({width:this.colWidth});
		
		var getHeadItem = this.getHeadItem.bind(this);
		
		var po = [];
		po.push("<table class=\"colHeadTable\" style=\"width:" + this.colWidth + "px;\">");
		po.push("<tbody>");
		po.push("<tr>");
		var colCount = 0;
		jQuery.each(cfg.colGroup, function (CHidx, CH) {

			po.push(getHeadItem({
				rowIndex:0, colIndex:CHidx, label:CH.label, html:CH.html, data:CH.data
			}));

			colCount += CH.colspan;
		});
		po.push("</tr>");
		po.push("</tbody>");
		po.push("</table>");
		
		this.colHead.empty();
		this.colHead.append(po.join(''));
		
    },
    setList: function(){
    	var cfg = this.config;
		
    }
});


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
        this.config.theme = "ModelControlGrid";
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
		
		/*colHead setting */
		this.setColHead();
		
    },
    setColHead: function(){
    	
    },
    setList: function(){
    	var cfg = this.config;
    	
    }
});
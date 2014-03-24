/* AXISJ Javascript UI Framework */
/* http://www.axisj.com, license : http://www.axisj.com/license */

var AXSlideViewer = Class.create(AXJ, {
    version: "AXSlideViewer V1.0",
    author: "tom@axisj.com",
	logs: [
		"2014-03-23 오후 3:33:35 - tom: start"
	],
    initialize: function(AXJ_super) {
        AXJ_super();
		this.config.theme = "AXSlideViewer";
    },
    init: function() {
		var cfg = this.config;
		
    },
    open: function(jsObject){ // jsArray, jsObject
     	var cfg = this.config;
     	var po = [];
     	po.push("<div class=\"" + cfg.theme + "\">");
     		po.push("<div class=\"backgroundPanel\"></div>");
     		po.push("<div class=\"slideItem\"></div>");
     		po.push("<div class=\"slideItem\"></div>");
     		po.push("<div class=\"slideItem\"></div>");
     		po.push("<div class=\"controller\"></div>");
     	po.push("</div>");

    }
});
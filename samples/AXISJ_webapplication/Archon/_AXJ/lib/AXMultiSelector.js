/*!
 * axisJ Javascript Library Version 1.0
 * http://axisJ.com
 * 
 * 아래 소스의 라이선스는 axisJ.com 에서 확인 하실 수 있습니다.
 * http://axisJ.com/license
 * axisJ를 사용하시려면 라이선스 페이지를 확인 및 숙지 후 사용 하시기 바람니다. 무단 사용시 예상치 못한 피해가 발생 하실 수 있습니다.
 */

var AXMultiSelector = Class.create(AXJ, {
    version: "AXMultiSelector v1.2",
    author: "tom@axisj.com",
    logs: [
		"2013-08-01 오후 3:08:07"
	],
    initialize: function ($super) {
        $super();

    },
    init: function () {
    	var cfg = this.config;
    	$("#"+cfg.targetID).bind("click", this.expandOptionBox.bind(this));
    },
    expandOptionBox: function(){
    	
    	var cfg = this.config;
    	
		var po = [];
		po.push("<div id=\""+cfg.targetID + "_AX_expandBox\" class=\"AXMultiSelector_expandBox\">");
		var boxWidth = 0;
		$.each(cfg.optionGroup, function(gidx, G){
			po.push("<div id=\""+cfg.targetID + "_AX_expandScrollBox_AX_"+gidx+"\" class=\"AXMultiSelector_scrollBox\" style=\"width:"+this.width+"px;\">");
			po.push("	<div id=\""+cfg.targetID + "_AX_expandScroll_AX_"+gidx+"\" class=\"AXMultiSelector_scroll\">");
			$.each(this.options, function(index, O){
				var selectedClass = (O.selected) ? " on" : "";
				po.push("<a href=\"#AXexec\" id=\""+cfg.targetID + "_AX_"+gidx+"_AX_option_AX_"+index+"\" class=\"bindSelectorNodes "+selectedClass+"\">"+ O.optionText +"</a>");
			});
			po.push("	</div>");
			po.push("</div>");
			boxWidth += (this.width + 2);
		});
		po.push("<div style=\"clear:both\"></div>");
		po.push("<div align=\"center\" style=\"padding-top:5px;\">");
		po.push("	<input type=\"button\" value=\"확인\" class=\"AXButton\" id=\""+cfg.targetID + "_AX_expandScrollBox_AX_confirm\" />");
		po.push("	<input type=\"button\" value=\"취소\" class=\"AXButton\" id=\""+cfg.targetID + "_AX_expandScrollBox_AX_cancel\" />");
		po.push("</div>");
		po.push("</div>");
		$(document.body).append(po.join(''));
		
		boxWidth = boxWidth + (cfg.optionGroup.length * 5) + 5;
		$("#"+cfg.targetID + "_AX_expandBox").css({width:boxWidth});
		
    	var css = {};
    	var offset = $("#"+cfg.targetID).offset();
    	css.top = offset.top;
    	//css.left = offset.left - boxWidth + $("#"+cfg.targetID).outerWidth();
    	css.left = offset.left;
    	$("#"+cfg.targetID + "_AX_expandBox").css(css);

		$.each(cfg.optionGroup, function(gidx, G){
			G.myUIScroll = new AXScroll();
			G.myUIScroll.setConfig({
				CT_className:"AXScrollSmall",
				targetID:cfg.targetID + "_AX_expandScrollBox_AX_"+gidx,
				scrollID:cfg.targetID + "_AX_expandScroll_AX_"+gidx,
				touchDirection:false
			});
			
			$.each(cfg.optionGroup[gidx].options, function(oidx, O){
				if(O.selected) G.myUIScroll.focusElement(cfg.targetID + "_AX_"+gidx+"_AX_option_AX_"+oidx); //focus
			});
			
		});
		
		$("#"+cfg.targetID + "_AX_expandScrollBox_AX_confirm").bind("click", function(){
			if(cfg.onChange){
				var selectObj = {};
				$.each(cfg.optionGroup, function(gidx, G){
					selectObj[G.name] = {};
					$.each(cfg.optionGroup[gidx].options, function(oidx, O){
						if(O.selected){
							selectObj[G.name] = O;
						}
					});
				});
				cfg.onChange.call(selectObj);
			}
			
			
			
			
			$("#"+cfg.targetID + "_AX_expandBox").remove(); // 개체 삭제 처리
		});
		$("#"+cfg.targetID + "_AX_expandScrollBox_AX_cancel").bind("click", function(){
			$("#"+cfg.targetID + "_AX_expandBox").remove(); // 개체 삭제 처리
		});
		
		$("#"+cfg.targetID + "_AX_expandBox").find(".bindSelectorNodes").bind("click", function(event){
			var idx = event.target.id.split(/_AX_/g);
			var gidx = idx[idx.length-3];
			var index = idx[idx.length-1];
			
			$("#"+cfg.targetID + "_AX_"+gidx+"_AX_option_AX_"+index).addClass("on");
			
			$.each(cfg.optionGroup[gidx].options, function(oidx, O){
				if(O.selected){
					$("#"+cfg.targetID + "_AX_"+gidx+"_AX_option_AX_"+oidx).removeClass("on");	
					delete O.selected;
				}
			});
			cfg.optionGroup[gidx].options[index].selected = true;
			
		});
    },
    setValue: function(obj){
    	var cfg = this.config;
    	$.each(cfg.optionGroup, function(gidx, G){
    		$.each(obj, function(k, v){
    			if(G.name == k){
    				$.each(G.options, function(){
    					if(this.optionValue+"" == v+""){
    						this.selected = true;
    					}else{
    						delete this.selected;
    					}
    				});
    				
    			}
    		});
    	});
    	
    }
});
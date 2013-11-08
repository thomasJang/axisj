/*!
 * axisJ Javascript Library Version 1.0
 * http://axisJ.com
 * 
 * 아래 소스의 라이선스는 axisJ.com 에서 확인 하실 수 있습니다.
 * http://axisJ.com/license
 * axisJ를 사용하시려면 라이선스 페이지를 확인 및 숙지 후 사용 하시기 바람니다. 무단 사용시 예상치 못한 피해가 발생 하실 수 있습니다.
 */

var AXCodeArea = Class.create(AXJ, {
	version: "AXCodeArea v1.0",
	author: "tom@axisj.com",
	logs: [
		"2012-11-05 오후 1:23:24"
	],
	initialize: function(AXJ_super) {
		AXJ_super();
		this.objects = [];
		this.config.anchorClassName = "AXanchor";
		this.config.lineNumberClassName = "AXscriptSourceLineNumber";
	},
	init: function(){
		//jQuery(window).resize(this.windowResize.bind(this));
	},
	bind: function(obj){
		
		var cfg = this.config;
		if(!obj.id){
			trace("bind 대상 ID가 없어 bind 처리할 수 없습니다.");
			return;
		}
		if(!AXgetId(obj.id)){
			trace("bind 대상이 없어 bind 처리할 수 없습니다.");
			return;
		}
		
		
		var mlen = this.objects.search(
			function(index, O){
				return (O.id == obj.id); 
			}
		);
		if(mlen > 0){
			//이미 바인딩된 개체 아이디 입니다.
			return;
		}
	
		var textarea = jQuery("#" + obj.id).find(".fieldsetBody");
		//trace(textarea.height());
		var rows = textarea.val().split(/\n/g);
		if(rows.length < 20){
			textarea.css({height:rows.length*16});
		}else{
			textarea.css({height:320});
		}
		//trace({rows:rows.length});
		return;
		
		this.objects.push({id:obj.id, anchorID:cfg.targetID+"_AX_"+obj.id});
		this.appendAnchor(obj.id);
		this.bindSourceCode(obj.id);
		
		/*
		var bindSourceCode = this.bindSourceCode.bind(this);
		setTimeout(function(){
			bindSourceCode(obj.id);
		}, 1);
		*/
	},
	appendAnchor: function(objID){
		var cfg = this.config;
		//trace("appendAnchor");
		var anchorNode = jQuery("<div id=\"" + cfg.targetID + "_AX_"+objID+"\" class=\"" + cfg.anchorClassName + "\"></div>");
		var iobj = jQuery("#" + objID).find(".fieldsetBody");
		iobj.after(anchorNode);
		//var offSetParent = iobj.offsetParent();
		var iobjPosition = iobj.position();
		var l = iobjPosition.left, t = iobjPosition.top, w = 0, h = 0;
		
		var borderW = iobj.css("border-left-width").number();
		var borderH = iobj.css("border-top-width").number();
		var marginW = iobj.css("margin-left").number();
		var marginH = iobj.css("margin-top").number();
		l = l + marginW;
		//t = t;
		//w = iobj.outerWidth();
		w = 1;
		h = iobj.outerHeight();
		//AXUtil.alert(marginW);
		var css = {left:l, top:t, width:w, height:1};
		//AXUtil.alert(css);
		jQuery("#"+cfg.targetID + "_AX_"+objID).css(css);
		jQuery("#"+cfg.targetID + "_AX_"+objID).data("height", h);
	},
	bindSourceCode: function(objID){
		var cfg = this.config;
		var textarea = jQuery("#" + objID).find(".fieldsetBody");
		textarea.hide();
		jQuery("#" + objID +"_AX_fieldsetBodyMirror").remove();
		
		var strs = textarea.val();
		strs = strs.replace(/\</g, "&lt;");
		strs = strs.replace(/\>/g, "&gt;");

		var mirror = jQuery("<div id='"+objID +"_AX_fieldsetBodyMirror' class='fieldsetBodyMirror'><pre>"+strs+"</pre></div>");
		textarea.before(mirror);
		
		/*
		var textarea = jQuery("#" + objID).find(".fieldsetBody").get(0);
		textarea.style.lineHeight = "16px";
		
		var lineNumber = [];
		lineNumber.push("<div id=\"" + cfg.targetID + "_AX_"+objID+"_AX_lineNumber\" class=\"" + cfg.lineNumberClassName + "\" style=\"height:"+textarea.scrollHeight+"px;line-height:16px;\">");
		for(var a=1;a<parseInt(textarea.scrollHeight/16)+1;a++){
			lineNumber.push(a+"<br/>");
		}
		lineNumber.push("</div>");
		jQuery("#"+cfg.targetID + "_AX_"+objID).append(lineNumber.join(''));
		
		textarea.style.height = textarea.scrollHeight + "px";
		*/
	},
	windowResize: function(){
		for(var a=0;a<this.objects.length;a++){
			//this.bindSourceCode(this.objects[a].id);
		}
	}
});

var AXCode = new AXCodeArea();
AXCode.setConfig({targetID:"codeBasic"});

jQuery.fn.bindCode = function(config){
	jQuery.each(this, function(){
		if (config == undefined) config = {};
		config.id = this.id;
		AXCode.bind(config);
		return this;
	});
};
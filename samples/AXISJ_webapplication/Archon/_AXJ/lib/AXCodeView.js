/*!
 * axisJ Javascript Library Version 1.0
 * http://axisJ.com
 * 
 * 아래 소스의 라이선스는 axisJ.com 에서 확인 하실 수 있습니다.
 * http://axisJ.com/license
 * axisJ를 사용하시려면 라이선스 페이지를 확인 및 숙지 후 사용 하시기 바람니다. 무단 사용시 예상치 못한 피해가 발생 하실 수 있습니다.
 */

var AXCodeView = Class.create(AXJ, {
	version: "AXCodeView v1.0",
	author: "tom@axisj.com",
	logs: [
		"2012-11-05 오후 1:23:24"
	],
	initialize: function($super) {
		$super();
	},
	init: function(){

	},
	bind: function(obj){
		this.mySource = "";
		if(document.documentElement.outerHTML){
			this.mySource = document.documentElement.outerHTML;
		}else{
			this.mySource = document.getElementsByTagName('html')[0].innerHTML;
		}

		var po = [];
		po.push("<div class='AXCodeViewer' id='AXCodeViewerContainer'>");
		po.push("<input type='button' value='Menu' class='AXButton Classic' id='AXCodeViewerMenu'>&nbsp;");
		po.push("<input type='button' value='소스보기' class='AXButton Classic' id='AXCodeViewerButton'>");
		po.push("</div>");
		$(document.body).append(po.join(''));
		
		$("#AXCodeViewerButton").bind("click", this.viewCode.bind(this));
		$("#AXCodeViewerMenu").bind("click", this.viewMenu.bind(this));
	},
	viewCode: function(){
		var mySource = this.mySource;
		var clientHeight = (AXUtil.docTD == "Q") ? document.body.clientHeight : document.documentElement.clientHeight;
		var clienWidth = (AXUtil.docTD == "Q") ? document.body.clientWidth : document.documentElement.clientWidth;
		clientHeight -= 35;
		clienWidth -= 30;
		var po = [];
		po.push("<div id='AXCodeViewerTextbox' class='Textbox' style='width:", clienWidth, "px;height:", clientHeight,"px;'>");
		po.push("	<div class='AXTextarea'>");
		po.push("	<textarea id='AXCodeViewerMySource' style='display:none;width:100%;height:", (clientHeight-10),"px;border:0px;padding:0px;'></textarea>");
		po.push("	</div>");
		po.push("	<a href='#modsExecption' id='AXCodeViewer_close' class='closeBtn'>닫기</a>");
		po.push("</div>");
		
		mask.open();
		$("#AXCodeViewerContainer").append(po.join(''));
		$("#AXCodeViewerTextbox").show(500, "backInOut", function(){
			$("#AXCodeViewerMySource").fadeIn();
			$("#AXCodeViewerMySource").val(mySource);	
		});

		$("#AXCodeViewer_close").bind("click", this.viewCodeClose.bind(this));
		//var mywin = window.open("", "_blank", "width=800,height=600");
		//mywin.document.write(mySource.replace(/\</g, "&lt;"));
	},
	viewCodeClose: function(){
		$("#AXCodeViewerTextbox").remove();
		mask.close();
	},
	viewMenu: function(){
		var clientHeight = (AXUtil.docTD == "Q") ? document.body.clientHeight : document.documentElement.clientHeight;
		var clienWidth = (AXUtil.docTD == "Q") ? document.body.clientWidth : document.documentElement.clientWidth;
		clientHeight -= 35;
		clienWidth -= 30;
		
		var po = [];
		po.push("<div id='AXCodeViewerMenuBox' class='Textbox' style='width:", 320, "px;height:", clientHeight,"px;'>");
		po.push("	<div class='AXTextarea'>");
		po.push("	<iframe id='AXCodeViewerMyMenu' src='../../index.html' style='display:none;width:100%;height:", (clientHeight-10),"px;border:0px;padding:0px;'></iframe>");
		po.push("	</div>");
		po.push("	<a href='#modsExecption' id='AXCodeViewerMenu_close' class='closeBtn'>닫기</a>");
		po.push("</div>");
		
		mask.open();
		$("#AXCodeViewerContainer").append(po.join(''));
		$("#AXCodeViewerMenuBox").show(100, "backInOut", function(){
			$("#AXCodeViewerMyMenu").fadeIn();
			//$("#AXCodeViewerMySource").val(mySource);
		});

		$("#AXCodeViewerMenu_close").bind("click", this.viewMenuClose.bind(this));
		
	},
	viewMenuClose: function(){
		$("#AXCodeViewerMenuBox").remove();
		mask.close();
	}
});

var AXCode = new AXCodeView();
AXCode.setConfig({targetID:"codeBasic"});
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
	initialize: function(AXJ_super) {
		AXJ_super();
	},
	init: function(){

	},
	bind: function(obj){
		try{
			var AXISTHEME = AXUtil.getCookie("AXISTHEME");
			
			this.mySource = "";
			if(document.documentElement.outerHTML){
				this.mySource = document.documentElement.outerHTML;
			}else{
				this.mySource = document.getElementsByTagName('html')[0].innerHTML;
			}
	
			var po = [];
			po.push("<div class='AXCodeViewer' id='AXCodeViewerContainer'>");
			po.push("<a href='http://www.axisj.com' target='_blank' style='font-size:12px;font-family:Consolas;text-shadow:0px 0px 5px #444;'>AXISJ.com</a>&nbsp;&nbsp;&nbsp;");
			po.push('<select name="myTheme" id="myThemeSelector" class="AXSelect"><option value="default">default</option><option value="Bulldog">Bulldog</option></select>&nbsp;');
			po.push("<input type='button' value='Menu' class='AXButton Classic' id='AXCodeViewerMenu'>&nbsp;");
			
			po.push("<input type='button' value='소스보기' class='AXButton Classic' id='AXCodeViewerButton'>");
			po.push("</div>");
			jQuery(document.body).append(po.join(''));
			
			jQuery("#AXCodeViewerButton").bind("click", this.viewCode.bind(this));
			jQuery("#AXCodeViewerMenu").bind("click", this.viewMenu.bind(this));
			jQuery("#myThemeSelector").bind("change", this.changeTheme.bind(this));
			
			if(AXISTHEME != "" && AXISTHEME != "null"){
				if(AXISTHEME != "default"){
					mask.open();
					var changeTheme = this.changeTheme.bind(this);
					setTimeout(function(){
						mask.close();
						jQuery("#myThemeSelector").val(AXISTHEME);
						changeTheme();
					}, 100);
					
				}
			}
		}catch(e){
			
		}
		
		if(window.location.hostname != "localhost" && window.location.hostname != ""){
			/* 구글 코드 삽입 */
			
			
			  var _gaq = _gaq || [];
			  _gaq.push(['_setAccount', 'UA-38119279-1']);
			  _gaq.push(['_setDomainName', 'axisj.com']);
			  _gaq.push(['_trackPageview']);
			
			  (function() {
			    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
			    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
			    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
			  })();
	
		}
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
		jQuery("#AXCodeViewerContainer").append(po.join(''));
		jQuery("#AXCodeViewerTextbox").show(500, "backInOut", function(){
			jQuery("#AXCodeViewerMySource").fadeIn();
			jQuery("#AXCodeViewerMySource").val(mySource);	
		});

		jQuery("#AXCodeViewer_close").bind("click", this.viewCodeClose.bind(this));
		//var mywin = window.open("", "_blank", "width=800,height=600");
		//mywin.document.write(mySource.replace(/\</g, "&lt;"));
	},
	viewCodeClose: function(){
		jQuery("#AXCodeViewerTextbox").remove();
		mask.close();
	},
	viewMenu: function(){
		
		location.href = "../../index.html";
		return;
		
		var clientHeight = (AXUtil.docTD == "Q") ? document.body.clientHeight : document.documentElement.clientHeight;
		var clienWidth = (AXUtil.docTD == "Q") ? document.body.clientWidth : document.documentElement.clientWidth;
		clientHeight -= 35;
		clienWidth -= 30;
		
		var po = [];
		po.push("<div id='AXCodeViewerMenuBox' class='Textbox' style='width:", 280, "px;height:", clientHeight,"px;'>");
		po.push("	<div class='AXTextarea'>");
		po.push("	<iframe id='AXCodeViewerMyMenu' name='AXCodeViewerMyMenu' src='../../index.html' style='display:none;width:100%;height:", (clientHeight-10),"px;border:0px;padding:0px;'></iframe>");
		po.push("	</div>");
		po.push("	<a href='#modsExecption' id='AXCodeViewerMenu_close' class='closeBtn'>닫기</a>");
		po.push("</div>");
		mask.open();
		jQuery("#AXCodeViewerContainer").append(po.join(''));
		if(AXUtil.browser.mobile) jQuery("#AXCodeViewerContainer").css({position:"absolute"});
		
		jQuery("#AXCodeViewerMenuBox").show();
		jQuery("#AXCodeViewerMyMenu").show();

		jQuery("#AXCodeViewerMenu_close").bind("click", this.viewMenuClose.bind(this));
		
		if(AXUtil.browser.mobile){
			jQuery("#AXCodeViewerMyMenu").bind("load", function () {
				var myIframe = window["AXCodeViewerMyMenu"];
				var bodyHeight = jQuery(myIframe.document).innerHeight();
				jQuery(this).css({ height: (bodyHeight) });
				jQuery("#AXCodeViewerMenuBox").css({ height: (bodyHeight+10) });
			});
		}
		
	},
	viewMenuClose: function(){
		jQuery("#AXCodeViewerMenuBox").remove();
		if(AXUtil.browser.mobile) jQuery("#AXCodeViewerContainer").css({position:"fixed"});
		mask.close();
	},
	changeTheme: function(){
		var newTheme = jQuery("#myThemeSelector").val();
		AXUtil.setCookie("AXISTHEME", newTheme);
		toast.push(newTheme+"가 적용 되었습니다.");
		
		jQuery("link").each(function(){
			
			var re_common = new RegExp("/css/(.*)_","ig"); //정규식 패턴입니다.
			var re = new RegExp("/_AXJ/ui/(.*)/","ig"); //정규식 패턴입니다.
			var str = this.href;             //검색할 문자열입니다.
			var arr = re.exec(str);               
			var myTheme = RegExp.$1;
			if(myTheme){
				this.href = str.replace("/"+myTheme+"/", "/"+newTheme+"/");
			}else{
				arr = re_common.exec(str); 	
				myTheme = RegExp.$1;
				if(myTheme){
					this.href = str.replace("/"+myTheme+"_", "/"+newTheme+"_");	
				}
			}
		});	
	}
});

var AXCode = new AXCodeView();
AXCode.setConfig({targetID:"codeBasic"});
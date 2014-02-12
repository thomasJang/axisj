/*!
 * axisJ Javascript Library Version 1.0
 * http://axisJ.com
 * 
 * 아래 소스의 라이선스는 axisJ.com 에서 확인 하실 수 있습니다.
 * http://axisJ.com/license
 * axisJ를 사용하시려면 라이선스 페이지를 확인 및 숙지 후 사용 하시기 바람니다. 무단 사용시 예상치 못한 피해가 발생 하실 수 있습니다.
 */

var AXModal = Class.create(AXJ, {
	version: "AXModal V1.31",
	author: "tom@axisj.com",
	logs: [
		"2013-02-13 오전 10:39:17 - axmods 에서 컨버트",
		"2013-04-08 오전 12:15:17 - resize 메소스 추가 및 버그 픽스",
		"2013-06-20 오후 5:21:24 - open 메소드 속성에 width 조건 추가",
		"2013-07-09 오후 4:41:48 - animateDuration 속성 추가 ",
		"2013-08-21 오후 4:46:51 - openNew 버그 픽스",
		"2013-08-22 오전 10:56:20 - resize 버그 픽스",
		"2013-08-24 - openNew 메소드 기능 확장"
	],
	initialize: function ($super) {
		$super();
		this.config.maskCss = "AXMask";
		this.config.windowBoxCss = "AXModalBox";
		this.config.padding = "0";
		this.config.defaultTop = 10;
		this.config.animateDuration = 300;
		this.config.autoHide = false;
		this.config.windowID = "AXModal" + AXUtil.timekey();
	},
	init: function () {
		var cfg = this.config;
		this.mask = jQuery("<div class=\"" + cfg.maskCss + "\"></div>");
		if (this.config.width) {
		} else {
			$(window).bind("resize", this.onDocResize.bind(this));
		}
	},
	setWidth: function (width) {
		if (width) {
			this.config.width = width;
		} else {
			this.config.width = undefined;
		}
	},
	open: function (http) {
		var cfg = this.config;

		if (this._windowOpend) return;

		mask.open();
		this.winID = "mdw" + AXUtil.timekey();
		this.frmID = "frm" + AXUtil.timekey();

		if (this.config.width) {
			var maskWidth = this.config.width;
			var maskLeft = (jQuery(document.body).width() / 2) - (this.config.width / 2);
		} else {
			var maskWidth = jQuery(document.body).width() - 50;
			var maskLeft = 10;
		}

		if (http.width) {
			maskWidth = http.width;
			maskLeft = (jQuery(document.body).width() / 2) - (http.width / 2);
		}

		var maskTop = this.config.defaultTop;
		if (http.top != undefined) {
			maskTop = http.top;
		} else {
			maskTop = $(window).scrollTop() + 100;
		}

		if (maskLeft < 0) maskLeft = 0;

		var po = [];
		po.push("<div id='" + this.config.windowID + "' class='" + this.config.windowBoxCss + "' style='top:" + maskTop + "px;left:" + maskLeft + "px;width:" + maskWidth + "px;'>");
		po.push("	<div class='windowbox' id='" + this.winID + "_box' style='padding:" + this.config.padding + "px'>");
		po.push("		<div id='" + this.config.windowID + "_loading' style='position:absolute;left:0px;top:0px;width:" + maskWidth + "px;padding:50px 0px 0px 0px;' align='center'>");
		po.push("		<div class=\"AXLoading\"></div>");
		po.push("		<br/><br><font class='blue'>페이지를 로딩 중입니다. 잠시만 기다려 주세요.</font></div>");
		po.push("		<a href='#modsExecption' id='" + this.config.windowID + "_close' class='closeBtn'>닫기</a>");

		po.push("		<form name='" + this.frmID + "' method='"+ (http.method||"post") +"' target='" + this.winID + "' action='" + http.url + "'>");
		po.push("		<input type='hidden' name='winID' value='" + this.winID + "' />");

		if (isNaN(http.pars.length)) {
			$.each(http.pars, function (key, val) {
				po.push("		<input type='hidden' name='" + key + "' value='" + val + "' />");
			});
		} else {
			$.each(http.pars, function () {
				$.each(this, function (key, val) {
					po.push("		<input type='hidden' name='" + key + "' value='" + val + "' />");
				});
			});
		}
		po.push("		</form>");

		po.push("		<iframe src='' name='" + this.winID + "' id='" + this.winID + "' frameborder='0' class='windowboxFrame' style='width:100%;overflow:-y:hidden;' scrolling='no'></iframe>");

		po.push("	</div>");
		po.push("</div>");


		if (this.config.appendTargetID) {
			jQuery("#" + this.config.appendTargetID).append(po.join(''));
		} else {
			jQuery(document.body).append(po.join(''));
		}

		var loadingID = this.config.windowID + "_loading";
		var _winID = this.winID;
		var _frmID = this.frmID;

		document[_frmID].submit();

		$("#" + this.winID).bind("load", function () {
			var myIframe = window[_winID];

			var bodyHeight = $(myIframe.document).innerHeight();
			if ($(myIframe.document.body).find(".bodyHeightDiv").get(0)) {
				bodyHeight = $(myIframe.document.body).find(".bodyHeightDiv").outerHeight();
			}
			$(this).animate({ height: (bodyHeight) }, cfg.animateDuration, "cubicInOut");
			//$(this).css({ height: (bodyHeight) });
			$("#" + _winID + "_box").animate({ height: (bodyHeight) }, cfg.animateDuration, "cubicInOut");
			//$("#"+_winID+"_box").css({ height: (bodyHeight) });
			$("#" + loadingID).fadeOut("slow");
			$("#" + _winID).addClass("loaded");
		});
		$("#" + this.config.windowID + "_close").bind("click", this.close.bind(this));

		/*
        if (this.mask) {
            if (this.config.autoHide) this.mask.bind("click", this.close.bind(this));
        }
        */
		//window.scroll(0, 0);
		this._windowOpend = true;
	},
	openI: function (http) {
		var cfg = this.config;

		if (this._windowOpend) return;

		mask.open();
		this.winID = "mdw" + AXUtil.timekey();
		this.frmID = "frm" + AXUtil.timekey();

		if (this.config.width) {
			var maskWidth = this.config.width;
			var maskLeft = (jQuery(document.body).width() / 2) - (this.config.width / 2);
		} else {
			var maskWidth = jQuery(document.body).width() - 50;
			var maskLeft = 10;
		}

		if (http.width) {
			maskWidth = http.width;
			maskLeft = (jQuery(document.body).width() / 2) - (http.width / 2);
		}

		var maskTop = this.config.defaultTop;
		if (http.top != undefined) {
			maskTop = http.top;
		} else {
			maskTop = $(window).scrollTop() + 100;
		}

		if (maskLeft < 0) maskLeft = 0;

		var po = [];
		po.push("<div id='" + this.config.windowID + "' class='" + this.config.windowBoxCss + "' style='top:" + maskTop + "px;left:" + maskLeft + "px;width:" + maskWidth + "px;'>");
		po.push("	<div class='windowbox' id='" + this.winID + "_box' style='padding:" + this.config.padding + "px'>");
		po.push("		<div id='" + this.config.windowID + "_loading' style='position:absolute;left:0px;top:0px;width:" + maskWidth + "px;padding:50px 0px 0px 0px;' align='center'>");
		po.push("		<div class=\"AXLoading\"></div>");
		po.push("		<br/><br><font class='blue'>페이지를 로딩 중입니다. 잠시만 기다려 주세요.</font></div>");
		po.push("		<a href='#modsExecption' id='" + this.config.windowID + "_close' class='closeBtn'>닫기</a>");

		po.push("		<form name='" + this.frmID + "' method='post' target='" + this.winID + "' action='" + http.url + "'>");
		po.push("		<input type='hidden' name='winID' value='" + this.winID + "' />");

		if (isNaN(http.pars.length)) {
			$.each(http.pars, function (key, val) {
				po.push("		<input type='hidden' name='" + key + "' value='" + val + "' />");
			});
		} else {
			$.each(http.pars, function () {
				$.each(this, function (key, val) {
					po.push("		<input type='hidden' name='" + key + "' value='" + val + "' />");
				});
			});
		}
		po.push("		</form>");

		po.push("		<iframe src='' name='" + this.winID + "' id='" + this.winID + "' frameborder='0' class='windowboxFrame' style='width:100%;overflow:-y:hidden;' scrolling='no'></iframe>");

		po.push("	</div>");
		po.push("</div>");


		if (this.config.appendTargetID) {
			jQuery("#" + this.config.appendTargetID).append(po.join(''));
		} else {
			jQuery(document.body).append(po.join(''));
		}

		var loadingID = this.config.windowID + "_loading";
		var _winID = this.winID;
		var _frmID = this.frmID;

		document[_frmID].submit();

		$("#" + this.winID).bind("load", function () {
			var myIframe = window[_winID];

			var bodyHeight = $(myIframe.document).innerHeight();
			if ($(myIframe.document.body).find(".bodyHeightDiv").get(0)) {
				bodyHeight = $(myIframe.document.body).find(".bodyHeightDiv").outerHeight();
			}
			$(this).animate({ height: (bodyHeight) }, cfg.animateDuration, "cubicInOut");
			//$(this).css({ height: (bodyHeight) });
			$("#" + _winID + "_box").animate({ height: (bodyHeight) }, cfg.animateDuration, "cubicInOut");
			//$("#"+_winID+"_box").css({ height: (bodyHeight) });
			$("#" + loadingID).fadeOut("slow");
			$("#" + _winID).addClass("loaded");
		});
		$("#" + this.config.windowID + "_close").bind("click", this.close.bind(this));

		/*
        if (this.mask) {
            if (this.config.autoHide) this.mask.bind("click", this.close.bind(this));
        }
        */
		//window.scroll(0, 0);
		this._windowOpend = true;
	},
	openDiv: function (args) {
		//this.mask = jQuery("<div id=\"\" class=\"" + this.config.maskCss + "\"></div>");
		//jQuery(document.body).append(this.mask);

		mask.open();

		var modalID = args.modalID;

		if ($M(modalID)) {
			$("#" + modalID).show();
			return;
		}

		var maskWidth, maskLeft;
		if (this.config.width) {
			maskWidth = this.config.width;
			maskLeft = (jQuery(document.body).width() / 2) - (this.config.width / 2);
		} else {
			maskWidth = jQuery(document.body).width() - 50;
			maskLeft = 10;
		}

		if (args.width) {
			maskWidth = args.width;
			maskLeft = (jQuery(document.body).width() / 2) - (args.width / 2);
		}

		var maskTop = this.config.defaultTop;
		if (args.top != undefined) {
			maskTop = args.top;
		}

		if (maskLeft < 0) maskLeft = 0;

		var po = [];
		po.push("<div id='" + modalID + "' class='" + this.config.windowBoxCss + "' style='top:" + maskTop + "px;left:" + maskLeft + "px;width:" + maskWidth + "px;'>");
		po.push("	<div class='windowbox' style='padding:" + this.config.padding + "px'>");
		//po.push("		<div id='" + modalID + "_loading' style='position:absolute;left:0px;top:0px;width:" + maskWidth + "px;padding:50px 0px;' align='center'>");
		//po.push("		<div class=\"AXLoading\"></div>");
		//po.push("		<br/><br><font class='blue'>페이지를 로딩 중입니다. 잠시만 기다려 주세요.</font></div>");
		po.push("		<a href='#modsExecption' id='" + modalID + "_close' class='closeBtn'>닫기</a>");
		po.push("		<div id='" + modalID + "_content'></div>");
		po.push("	</div>");
		po.push("</div>");

		jQuery(document.body).append(po.join(''));

		$("#" + modalID + "_content").append($("#" + args.targetID));

		var loadingID = modalID + "_loading";

		var closeBind = this.close.bind(this);
		var closeModal = function (event) {
			closeBind(event, modalID);
		};
		$("#" + modalID + "_close").bind("click", closeModal);

		/*
        if (this.mask) {
            if (this.config.autoHide) this.mask.bind("click", close);
        }
        */
	},
	openNew: function (http) {
		this.winID = "mdw" + AXUtil.timekey();
		this.frmID = "frm" + AXUtil.timekey();


		if (this.openWindow) {
			//top.mask.close();
			this.openWindow.close();
		}

		this.openWindow = window.open("", (http.name||this.winID), http.options);

		if ($M(this.config.windowID)) $("#" + this.config.windowID).remove();

		var po = [];
		po.push("<div id='" + this.config.windowID + "'>");
		po.push("		<form name='" + this.frmID + "' method='" + (http.method || "post") + "' target='" + (http.name||this.winID) + "' action='" + http.url + "'>");
		po.push("		<input type='hidden' name='winID' value='" + this.winID + "' />");

		if (isNaN(http.pars.length)) {
			$.each(http.pars, function (key, val) {
				po.push("		<input type='hidden' name='" + key + "' value='" + val + "' />");
			});
		} else {
			$.each(http.pars, function () {
				$.each(this, function (key, val) {
					po.push("		<input type='hidden' name='" + key + "' value='" + val + "' />");
				});
			});
		}
		po.push("		</form>");
		po.push("</div>");
		jQuery(document.body).append(po.join(''));
		document[this.frmID].submit();
		$("#" + this.config.windowID).remove();
	},
	close: function (event, modalID) {
		if (this.openWindow) {
			this.openWindow.close();
		}

		if (event) {
			if (event.type == undefined) {
				modalID = event;
			}
		}

		if (modalID) {
			$("#" + modalID).hide();
			mask.close();
		} else {
			
			
			if(window[this.winID]){
				window[this.winID].location.href = "about:blank";
				var windowID = this.config.windowID;
				$("#" + windowID).remove();
				/*
				setTimeout(function () {
					//$("#" + windowID).remove();
				}, 10);
				*/
				mask.close();
				this._windowOpend = false;
			}
		}

		try {
			parent.fcObj.contentResetHeight();
		} catch (e) {

		}

		try {
			parent.fns.contentResetHeight();
		} catch (e) {

		}
	},
	remove: function (event) {
		var windowID = this.config.windowID;
		setTimeout(function () {
			$("#" + windowID).remove();
		}, 100);
		mask.close();
		this._windowOpend = false;
		/*
        try {
            this.mask.remove();
        } catch (e) { }
        */
	},
	resize: function (event) {
		var cfg = this.config;
		var _winID = this.winID;
		setTimeout(function () {
			var myIframe = window[_winID];
			var bodyHeight = $(myIframe.document).innerHeight();
			if ($(myIframe.document.body).find(".bodyHeightDiv").get(0)) {
				bodyHeight = $(myIframe.document.body).find(".bodyHeightDiv").outerHeight();
			}
			$("#" + _winID).animate({ height: (bodyHeight) }, cfg.animateDuration, "cubicInOut");
			$("#" + _winID + "_box").animate({ height: (bodyHeight) }, cfg.animateDuration, "cubicInOut");

			trace({ h: $(myIframe.document.body).find(".bodyHeightDiv").height() });
			//trace(bodyHeight);
			try {
				parent.fcObj.contentResetHeight();
			} catch (e) {
				//trace(e);	
			}

			try {
				parent.fnObj.contentResetHeight(null, bodyHeight + 100);
			} catch (e) {
				//trace(e);	
			}
		}, 50);
	},
	onDocResize: function () {
		var config = this.config;
		var maskWidth = jQuery(document.body).find(".container").width() - 50;
		$("#" + this.config.windowID).css({ width: maskWidth });
	}
});
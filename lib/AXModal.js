/* AXISJ Javascript UI Framework */
/* http://www.axisj.com, license : http://www.axisj.com/license */


/**
 * @class AXModal
 * @classdesc 모달창을 생성하고 제어 합니다. 모달창은 window, iframe, div 세 가지로 생성할 수 있습니다.
 * @extends AXJ
 * @version v1.40
 * @author tom@axisj.com
 * @logs
 "2013-02-13 오전 10:39:17 - axmods 에서 컨버트 : tom ",
 "2013-04-08 오전 12:15:17 - resize 메소스 추가 및 버그 픽스 : tom ",
 "2013-06-20 오후 5:21:24 - open 메소드 속성에 width 조건 추가 : tom ",
 "2013-07-09 오후 4:41:48 - animateDuration 속성 추가  : tom ",
 "2013-08-21 오후 4:46:51 - openNew 버그 픽스 : tom ",
 "2013-08-22 오전 10:56:20 - resize 버그 픽스 : tom ",
 "2013-08-24 - openNew 메소드 기능 확장 : tom ",
 "2013-10-14 오전 6:54:40 - resize 기능 보강 : tom ",
 "2013-11-15 오후 4:01:29 - tom : openDiv scroll 버그 패치",
 "2013-11-18 오후 5:16:02 - tom resize 버그 패치",
 "2014-05-21 - tom : AXModal mediaQuery 속성 추가"
 "2014-06-09 tom : mediaQuery bugfix"
 "2014-08-04 tom : fix resize error"
 "2014-09-17 tom : 'add Config' scrollLock"
 "2014-11-16 tom : openDiv 메소드에 verticalAlign 속성 확장"
 "2015-03-25 root : 각 open 메소드에 closeButton 속성 확장"
 "2015-04-22 root : axdom 독립 우회 코드 변경"
 "2015-05-08 tom : loaded 메소드 추가"

 */
var AXModal = Class.create(AXJ, {
    initialize: function (AXJ_super) {
        AXJ_super();
        this.config.maskCss = "AXMask";
        this.config.windowBoxCss = "AXModalBox";
        this.config.padding = "0";
        this.config.defaultTop = 10;
        this.config.animateDuration = 300;
        this.config.autoHide = false;
        this.config.windowID = "AXModal" + AXUtil.timekey();
        this.config.contentDivClass = (AXConfig.AXModal) ? AXConfig.AXModal.contentDivClass : "bodyHeightDiv";
        this.config.displayLoading = true;
        this.config.viewMode = "dx";
        this.config.opendModalID = "";
        this.config.scrollLock = false;
        this.config.closeButton = true;
    },
    /**
     * 모달의 기본 환경설정값을 셋팅합니다.
     * @method AXModal.setConfig
     * @param {Object} modalConfig
     * @example
     * ```js
     * var myModal = new AXModal();
     * var modalConfig = {
     *     animateDuration: {Number} [300],
     *     contentDivClass: {String} ["bodyHeightDiv"] - iframe 모달의 창이 오픈된 경우 iframe 의 높이를 정확히 제어하기 위해 컨텐츠 전체를 감싸는 대상에 지정한 className 값,
     *     defaultTop: {Number} [10] - 모달창 포지션 top,
     *     displayLoading: {Boolean} [true] - 모달이 오픈될 때 로딩 표시 여부,
     *     maskCss: "AXMask" - 배경 mask div의 css,
     *     opendModalID: {String} - 모달 ID,
     *     padding: {(String|Number)} ["0"] - 모달 padding 값,
     *     viewMode: {String} ["dx"],
     *     width: {(String|Number)} - 모달의 기본 너비,
     *     windowBoxCss: {String} ["AXModalBox"] - 모달을 감싸는 제일 바깥쪽 div의 css,
     *     windowID: {String} ["AXModal" + timekey] - 모달 식별 아이디,
     *     onclose: {Function} - 모달창이 닫힐 때 이벤트,
     *     closeButton: {Boolean} [true] - 모달창 닫기버튼의 노출 여부
     * };
     * myModal.setConfig(modalConfig);
     * ```
     */
    init: function () {
        var cfg = this.config;
        this.mask = axdom("<div class=\"" + cfg.maskCss + "\"></div>");
        if (cfg.mediaQuery) {
            var _viewMode = "", clientWidth = axf.clientWidth();
            axf.each(cfg.mediaQuery, function (k, v) {
                if (Object.isObject(v)) {

                    if(v.min != undefined && v.max != undefined){
                        if (v.min <= clientWidth && clientWidth <= v.max) {
                            _viewMode = (k == "dx") ? "dx" : "mx";
                            return false;
                        }
                    }else{
                        if (v.min <= clientWidth) {
                            _viewMode = (k == "dx") ? "dx" : "mx";
                            return false;
                        }
                    }
                }
            });
            if (_viewMode != "") {
                cfg.viewMode = _viewMode;
            }
        }

    },
    /**
     * @method AXModal.setWidth
     * @param {(String|Number)} - 모달의 기본 너비 pixel({Number}) or percent({String})
     * @description 모달의 기본 너비 속성을 변경하고 창이 열려있는 상태이면 동적으로 창의 크기도 변경합니다. (단, openDIV 로 모달이 오픈된 경우는 해당사항 없음)
     * @example
     * ```js
     * myModal.setWidth(800);
     * myModal.setWidth("80%");
     * ```
     */
    setWidth: function (width) {
        var cfg = this.config;
        if (width) {
            cfg.width = width;
            this.config.fixedWidth = true;
        } else {
            cfg.width = undefined;
            this.config.fixedWidth = false;
        }

        axdom("#" + cfg.windowID).css({ width: width });
        var maskWidth = axdom("#" + cfg.windowID).outerWidth();
        var maskLeft = (axdom(document.body).width() / 2) - (maskWidth / 2);
        if (maskLeft < 0) maskLeft = 0;
        axdom("#" + cfg.windowID).css({ left: maskLeft });
    },
    /**
     * @method AXModal.open
     * @param {Object} - configs
     * @description iframe 을 내장하는 모달 창을 오픈합니다.
     * @example
     * ```js
     * var configs = {
     *     url: {String} - 모달창의 URL,
     *     pars: {(Object|Array)} - 모달창 URL 에 전달 될 파라미터,
     *     method: {String} ["post"] -파라미터 전달방식,
     *     top: {Number} [scrollTop + 100] - 모달창 포지션 top,
     *     width: {(String|Number)} - 모달창 너비,
     *     closeByEscKey: {Boolean} [false] - 모달창 닫기를 esc 키로 닫을 지 여부,
     *     closeButton: {Boolean} [true] - 모달창 닫기버튼의 노출 여부
     * }
     * myModal.open(configs);
     * ```
     */
    open: function (http) {
        var cfg = this.config;

        if (this._windowOpend) return;

        mask.open();
        this.winID = "mdw" + AXUtil.timekey();
        this.frmID = "frm" + AXUtil.timekey();

        var maskWidth, maskLeft;
        if (this.config.width) {
            maskWidth = this.config.width;
            maskLeft = (axdom(document.body).width() / 2) - (this.config.width / 2);
            this.config.fixedWidth = true;
        } else {
            maskWidth = axdom(document.body).width() - 50;
            maskLeft = 10;
            this.config.fixedWidth = false;
        }

        if (http.width) {
            maskWidth = http.width;
            maskLeft = (axdom(document.body).width() / 2) - (http.width / 2);
            this.config.fixedWidth = true;
        }

        var maskTop = this.config.defaultTop;
        if (http.top != undefined) {
            maskTop = http.top;
        } else {
            maskTop = axdom(window).scrollTop() + 100;
        }
        if (maskLeft < 0) maskLeft = 0;

        var po = [];
        po.push("<div id='" + this.config.windowID + "' class='" + this.config.windowBoxCss + "' style='top:" + maskTop + "px;left:" + maskLeft + "px;width:" + maskWidth + "px;'>");
        po.push("	<div class='windowbox' id='" + this.winID + "_box' style='padding:" + this.config.padding + "px'>");
        if (cfg.displayLoading) {
            po.push("		<div id='" + this.config.windowID + "_loading' style='position:absolute;left:0px;top:0px;width:100%;padding:50px 0px 0px 0px;' align='center'>");
            po.push("		<div class=\"AXLoading\"></div>");
            po.push("		<br/><br><span class='blue'>페이지를 로딩 중입니다. 잠시만 기다려 주세요.</span></div>");
        }


        var closeButton = (http.closeButton == undefined) ? cfg.closeButton : http.closeButton;
        if (closeButton){
            po.push("		<a id='" + this.config.windowID + "_close' class='closeBtn'>닫기</a>");
        }

        po.push("		<form name='" + this.frmID + "' method='" + (http.method || "post") + "' target='" + this.winID + "' action='" + http.url + "'>");
        po.push("		<input type='hidden' name='winID' value='" + this.winID + "' />");

        if (isNaN(http.pars.length)) {
            axdom.each(http.pars, function (key, val) {
                po.push("		<input type='hidden' name='" + key + "' value='" + val + "' />");
            });
        } else {
            axdom.each(http.pars, function () {
                axdom.each(this, function (key, val) {
                    po.push("		<input type='hidden' name='" + key + "' value='" + val + "' />");
                });
            });
        }

        if(AXConfig.AXModal.pars){
            var appendPars = {};
            if(Object.isString(AXConfig.AXModal.pars)){
                appendPars = AXConfig.AXModal.pars.queryToObject();
            }
            axdom.each(appendPars, function (key, val) {
                po.push("<input type='hidden' name='" + key + "' value='" + val + "' />");
            });
        }

        po.push("		</form>");
        po.push("		<iframe src='' name='" + this.winID + "' id='" + this.winID + "' frameborder='0' class='windowboxFrame' style='width:100%;overflow:-y:hidden;' scrolling='no'></iframe>");
        po.push("	</div>");
        po.push("</div>");

        if (this.config.appendTargetID) {
            axdom("#" + this.config.appendTargetID).append(po.join(''));
        } else {
            axdom(document.body).append(po.join(''));
        }

        axdom("#" + cfg.windowID).data("width", maskWidth);
        axdom("#" + cfg.windowID).data("top", maskTop);

        if(cfg.viewMode == "mx"){
            axdom("#" + cfg.windowID).css({ left: 0, top:axdom(window).scrollTop(), width:"100%" });
        }

        var loadingID = this.config.windowID + "_loading";
        var _winID = this.winID;
        var _frmID = this.frmID;

        document[_frmID].submit();
        var keydown = this.keydown.bind(this);

        axdom("#" + this.winID).bind("load", function () {
            var myIframe = window[_winID];

            var bodyHeight = axdom(myIframe.document).innerHeight();
            if (axdom(myIframe.document.body).find("." + cfg.contentDivClass).get(0)) {
                bodyHeight = axdom(myIframe.document.body).find("." + cfg.contentDivClass).outerHeight();
            }
            axdom(this).css({ height: (bodyHeight) }, cfg.animateDuration, "cubicInOut");
            axdom("#" + _winID + "_box").css({ height: (bodyHeight) }, cfg.animateDuration, "cubicInOut");
            if (cfg.displayLoading) axdom("#" + loadingID).fadeOut("slow");
            axdom("#" + _winID).addClass("loaded");

            if (http.closeByEscKey) {
                axdom(myIframe.document.body).bind("keydown.AXModal", keydown);
            }
        });

        axdom("#" + this.config.windowID + "_close").bind("click", this.close.bind(this));

        if (http.closeByEscKey) {
            axdom(document.body).bind("keydown.AXModal", keydown);
        }

        this._windowOpend = true;

        axdom(window).unbind("resize.AXModal");
        axdom(window).bind("resize.AXModal", this.onDocResize.bind(this));

        if (cfg.scrollLock == true) {
            axdom(document.body).css({'overflow':'hidden'});
        }
    },
    /**
     * @deprecated AXModal.openI
     * @see AXModal.open
     */
    openI: function (http) {
        var cfg = this.config;

        if (this._windowOpend) return;

        mask.open();
        this.winID = "mdw" + AXUtil.timekey();
        this.frmID = "frm" + AXUtil.timekey();

        var maskWidth, maskLeft;
        if (this.config.width) {
            maskWidth = this.config.width;
            maskLeft = (axdom(document.body).width() / 2) - (this.config.width / 2);
            this.config.fixedWidth = true;
        } else {
            maskWidth = axdom(document.body).width() - 50;
            maskLeft = 10;
            this.config.fixedWidth = false;
        }

        if (http.width) {
            maskWidth = http.width;
            maskLeft = (axdom(document.body).width() / 2) - (http.width / 2);
            this.config.fixedWidth = true;
        }

        var maskTop = this.config.defaultTop;
        if (http.top != undefined) {
            maskTop = http.top;
        } else {
            maskTop = axdom(window).scrollTop() + 100;
        }

        if (maskLeft < 0) maskLeft = 0;

        var po = [];
        po.push("<div id='" + this.config.windowID + "' class='" + this.config.windowBoxCss + "' style='top:" + maskTop + "px;left:" + maskLeft + "px;width:" + maskWidth + "px;'>");
        po.push("	<div class='windowbox' id='" + this.winID + "_box' style='padding:" + this.config.padding + "px'>");
        po.push("		<div id='" + this.config.windowID + "_loading' style='position:absolute;left:0px;top:0px;width:" + maskWidth + "px;padding:50px 0px 0px 0px;' align='center'>");
        po.push("		<div class=\"AXLoading\"></div>");
        po.push("		<br/><br><span class='blue'>페이지를 로딩 중입니다. 잠시만 기다려 주세요.</span></div>");

        var closeButton = (http.closeButton == undefined) ? cfg.closeButton : http.closeButton;
        if (closeButton){
            po.push("		<a href='#modsExecption' id='" + this.config.windowID + "_close' class='closeBtn'>닫기</a>");
        }

        po.push("		<form name='" + this.frmID + "' method='post' target='" + this.winID + "' action='" + http.url + "'>");
        po.push("		<input type='hidden' name='winID' value='" + this.winID + "' />");

        if (isNaN(http.pars.length)) {
            axdom.each(http.pars, function (key, val) {
                po.push("		<input type='hidden' name='" + key + "' value='" + val + "' />");
            });
        } else {
            axdom.each(http.pars, function () {
                axdom.each(this, function (key, val) {
                    po.push("		<input type='hidden' name='" + key + "' value='" + val + "' />");
                });
            });
        }

        if(AXConfig.AXModal.pars){
            var appendPars = {};
            if(Object.isString(AXConfig.AXModal.pars)){
                appendPars = AXConfig.AXModal.pars.queryToObject();
            }
            axdom.each(appendPars, function (key, val) {
                po.push("<input type='hidden' name='" + key + "' value='" + val + "' />");
            });
        }

        po.push("		</form>");

        if (http.maxHeight) {
            po.push("		<iframe src='' name='" + this.winID + "' id='" + this.winID + "' frameborder='0' class='windowboxFrame' style='width:100%;overflow:-y:hidden;' scrolling='auto'></iframe>");
        } else {
            po.push("		<iframe src='' name='" + this.winID + "' id='" + this.winID + "' frameborder='0' class='windowboxFrame' style='width:100%;overflow:-y:hidden;' scrolling='no'></iframe>");
        }

        po.push("	</div>");
        po.push("</div>");


        if (this.config.appendTargetID) {
            axdom("#" + this.config.appendTargetID).append(po.join(''));
        } else {
            axdom(document.body).append(po.join(''));
        }

        var loadingID = this.config.windowID + "_loading";
        var _winID = this.winID;
        var _frmID = this.frmID;

        document[_frmID].submit();

        axdom("#" + this.winID).bind("load", function () {
            var myIframe = window[_winID];

            var bodyHeight = axdom(myIframe.document).innerHeight();
            if (axdom(myIframe.document.body).find("." + cfg.contentDivClass).get(0)) {
                bodyHeight = axdom(myIframe.document.body).find("." + cfg.contentDivClass).outerHeight();
            }
            if (http.maxHeight) {
                if (http.maxHeight < (bodyHeight.number() + maskTop.number() + 10)) {
                    bodyHeight = http.maxHeight - maskTop.number() - 10;
                }
            }

            axdom(this).css({ height: (bodyHeight) }, cfg.animateDuration, "cubicInOut");
            axdom("#" + _winID + "_box").css({ height: (bodyHeight) }, cfg.animateDuration, "cubicInOut");
            axdom("#" + loadingID).fadeOut("slow");
            axdom("#" + _winID).addClass("loaded");
        });
        axdom("#" + this.config.windowID + "_close").bind("click", this.close.bind(this));

        /*
         if (this.mask) {
         if (this.config.autoHide) this.mask.bind("click", this.close.bind(this));
         }
         */
        //window.scroll(0, 0);
        this._windowOpend = true;

        axdom(window).unbind("resize.AXModal");
        axdom(window).bind("resize.AXModal", this.onDocResize.bind(this));

        if (cfg.scrollLock == true) {
            axdom(document.body).css({'overflow':'hidden'});
        }
    },
    windowResizeApply: function(){
        this.onDocResize();
    },
    /**
     * @method AXModal.openDiv
     * @param {Object} - configs
     * @description div 모달 창을 오픈합니다.
     * @example
     * ```js
     * var configs = {
     *     modalID: {String} - 모달창의 식별자,
     *     targetID: {String} - 모달창 타켓 엘리먼트 아이디,
     *     top: {Number} [scrollTop + 100] - 모달창 포지션 top,
     *     width: {(String|Number)} - 모달창 너비,
     *     closeByEscKey: {Boolean} [false] - 모달창 닫기를 esc 키로 닫을 지 여부,
     *     verticalAlign: {Boolean} [false] - 모달창 가운데 표시 여부,
     *     closeButton: {Boolean} [true] - 모달창 닫기버튼의 노출 여부
     * }
     * myModal.openDiv(configs);
     * ```
     */
    openDiv: function (args) {
        var cfg = this.config;
        mask.open();

        var modalID = cfg.opendModalID = args.modalID;

        if (AXgetId(modalID)) {
            var modalTarget = $("#" + modalID);
            modalTarget.show();

            var maskTop = this.config.defaultTop;
            if (args.top != undefined) {
                maskTop = axdom(window).scrollTop() + args.top;
            } else {
                maskTop = axdom(window).scrollTop() + 50;
            }

            if(cfg.viewMode == "mx"){
                maskTop = axdom(window).scrollTop();
            }

            if( args.verticalAlign ){
                modalTarget.css({top: axf.clientHeight() / 2 - modalTarget.height()/2 + axdom(window).scrollTop() })
            }else{
                modalTarget.css({ "top": maskTop });
            }

            if (args.closeByEscKey) {
                var keydown = this.keydown.bind(this);
                var keydownBind = function () {
                    keydown(event, modalID);
                };
                axdom(document.body).bind("keydown.AXModal", keydownBind);
            }
            return;
        }

        var maskWidth, maskLeft;
        if (this.config.width) {
            maskWidth = this.config.width;
            maskLeft = (axdom(document.body).width() / 2) - (this.config.width / 2);
            this.config.fixedWidth = true;
        } else {
            maskWidth = axdom(document.body).width() - 50;
            maskLeft = 10;
            this.config.fixedWidth = false;
        }

        if (args.width) {
            maskWidth = args.width;
            maskLeft = (axdom(document.body).width() / 2) - (args.width / 2);
            this.config.fixedWidth = true;
        }

        var maskTop = this.config.defaultTop;
        if (args.top != undefined) {
            maskTop = axdom(window).scrollTop() + args.top;
        } else {
            maskTop = axdom(window).scrollTop() + 50;
        }

        if (maskLeft < 0) maskLeft = 0;

        var po = [];
        po.push("<div id='" + modalID + "' class='" + this.config.windowBoxCss + "' style='top:" + maskTop + "px;left:" + maskLeft + "px;width:" + maskWidth + "px;'>");
        po.push("	<div class='windowbox' style='padding:" + this.config.padding + "px'>");

        var closeButton = (args.closeButton == undefined) ? cfg.closeButton : args.closeButton;
        if (closeButton){
            po.push("		<a href='#modsExecption' id='" + modalID + "_close' class='closeBtn'>닫기</a>");
        }

        po.push("		<div id='" + modalID + "_content'></div>");
        po.push("	</div>");
        po.push("</div>");

        axdom(document.body).append(po.join(''));

        axdom("#" + modalID + "_content").append(axdom("#" + args.targetID));

        axdom("#" + cfg.opendModalID).data("width", maskWidth);
        axdom("#" + cfg.opendModalID).data("top", maskTop);

        if(cfg.viewMode == "mx"){
            axdom("#" + cfg.opendModalID).css({ left: 0, top:axdom(window).scrollTop(), width:"100%" });
        }

        var loadingID = modalID + "_loading";

        var closeBind = this.close.bind(this);
        var closeModal = function (event) {
            closeBind(event, modalID);
        };
        axdom("#" + modalID + "_close").bind("click", closeModal);

        if (args.closeByEscKey) {
            var keydown = this.keydown.bind(this);
            var keydownBind = function () {
                keydown(event, modalID);
            };
            axdom(document.body).bind("keydown.AXModal", keydownBind);
        }

        /*
         if (this.mask) {
         if (this.config.autoHide) this.mask.bind("click", close);
         }
         */

        axdom(window).unbind("resize.AXModal");
        axdom(window).bind("resize.AXModal", this.onDocResize.bind(this));

        if (cfg.scrollLock == true) {
            axdom(document.body).css({'overflow':'hidden'});
        }

        if( args.verticalAlign ){
            var modalTarget = $("#" + modalID);
            $("#" + modalID).css({top: axf.clientHeight() / 2 - modalTarget.height()/2 + axdom(window).scrollTop() })
        }
    },
    /**
     * @method AXModal.openNew
     * @param {Object} - configs
     * @description 새로운 창으로 모달 창을 오픈 합니다.
     * @example
     * ```js
     * var configs = {
     *     url: {String} - 새창 오픈 URL,
     *     pars: {(Object|Array)} - 새창 오픈 URL 전달 파라미터,
     *     name: {String} ["mdw" + timekey]- 새창이름,
     *     options: {String} - 새창 오픈 옵션 window.open 속성과 동일합니다.
     * }
     * myModal.openNew(configs);
     * ```
     */
    openNew: function (http) {
        this.winID = "mdw" + AXUtil.timekey();
        this.frmID = "frm" + AXUtil.timekey();

        if (this.openWindow) {
            //top.mask.close();
            this.openWindow.close();
        }

        this.openWindow = window.open("", (http.name || this.winID), http.options);
        this.openWindow.focus();

        if (http.title != undefined){
            this.openWindow.document.title = http.title;
        }

        if (AXgetId(this.config.windowID)) axdom("#" + this.config.windowID).remove();

        var po = [];
        po.push("<div id='" + this.config.windowID + "'>");
        po.push("		<form name='" + this.frmID + "' method='" + (http.method || "post") + "' target='" + (http.name || this.winID) + "' action='" + http.url + "'>");
        po.push("		<input type='hidden' name='winID' value='" + this.winID + "' />");

        if (isNaN(http.pars.length)) {
            axdom.each(http.pars, function (key, val) {
                po.push("		<input type='hidden' name='" + key + "' value='" + val + "' />");
            });
        } else {
            axdom.each(http.pars, function () {
                axdom.each(this, function (key, val) {
                    po.push("		<input type='hidden' name='" + key + "' value='" + val + "' />");
                });
            });
        }
        po.push("		</form>");
        po.push("</div>");
        axdom(document.body).append(po.join(''));
        document[this.frmID].submit();
        axdom("#" + this.config.windowID).remove();
    },
    keydown: function (event, modalID) {
        if (event.keyCode == AXUtil.Event.KEY_ESC) {
            this.close(event, modalID);
        }
    },
    /**
     * @method AXModal.close
     * @param {String} - modalID
     * @description 오픈된 모달 창을 닫습니다.
     * @example
     * ```js
     * myModal.close("modalDiv01");
     * parent.myModal.close(); // iframe 모달창을 오픈한 경우 열려진 iframe 안에서 호출 합니다.
     * ```
     */
    close: function (event, modalID) {
        var cfg = this.config;
        if (this.openWindow) {
            this.openWindow.close();
        }

        if (event) {
            if (event.type == undefined) {
                modalID = event;
            }
        }

        if (modalID) {
            axdom("#" + modalID).hide();
            this.config.opendModalID = "";
            mask.close();
        } else {
            if (window[this.winID]) {
                window[this.winID].location.href = "about:blank";
                var windowID = this.config.windowID;

                setTimeout(function () {
                    axdom("#" + windowID).remove();
                }, 1);

                mask.close();
                this._windowOpend = false;
            }
        }

        axdom(document.body).unbind("keydown.AXModal");

        if(this.config.onclose){
            this.config.onclose.call(
                {
                    winID: this.winID,
                    windowID: this.config.windowID,
                    modalID: modalID
                }
            );
        }

        if (cfg.scrollLock == true) {
            axdom(document.body).css({'overflow':'auto'});
        }
    },
    /**
     * @method AXModal.remove
     * @description 오픈된 모달 창을 제거합니다.
     * @example
     * ```js
     * myModal.remove();
     * parent.myModal.remove(); //iframe 모달창을 오픈한 경우 열려진 iframe 안에서 호출 합니다.
     * ```
     */
    remove: function (event) {
        var windowID = this.config.windowID;
        setTimeout(function () {
            axdom("#" + windowID).remove();
        }, 1);
        mask.close();
        axdom(document.body).css({'overflow':'auto'});
        this._windowOpend = false;
        /*
         try {
         this.mask.remove();
         } catch (e) { }
         */
    },
    /**
     * @method AXModal.resize
     * @description 열려진 iframe modal 의 높이를 iframe 창의 높이 만큼 리사이즈 합니다. contentDivClass 가 정의된 경우 contentDivClass 높이값으로 resize 합니다.
     * @example
     * ```js
     * myModal.resize();
     * parent.myModal.resize(); //iframe 모달창을 오픈한 경우 열려진 iframe 안에서 호출 합니다.
     * ```
     */
    resize: function (event) {
        var cfg = this.config;
        var _winID = this.winID;
        setTimeout(function () {

            try {
                var myIframe = window[_winID];
                var bodyHeight = axdom(myIframe.document).innerHeight();
                if (axdom(myIframe.document.body).find("." + cfg.contentDivClass).get(0)) {
                    bodyHeight = axdom(myIframe.document.body).find("." + cfg.contentDivClass).outerHeight();
                }
                axdom("#" + _winID).css({ height: (bodyHeight) }, cfg.animateDuration, "cubicInOut");
                axdom("#" + _winID + "_box").css({ height: (bodyHeight) }, cfg.animateDuration, "cubicInOut");
            }catch(e){

            }

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
        var cfg = this.config;

        if (cfg.mediaQuery) {
            var _viewMode = "", clientWidth = axf.clientWidth();

            axf.each(cfg.mediaQuery, function (k, v) {
                if (Object.isObject(v)) {

                    if(v.min != undefined && v.max != undefined){
                        if (v.min <= clientWidth && clientWidth <= v.max) {
                            _viewMode = (k == "dx") ? "dx" : "mx";
                            return false;
                        }
                    }else{
                        if (v.min <= clientWidth) {
                            _viewMode = (k == "dx") ? "dx" : "mx";
                            return false;
                        }
                    }
                }
            });
            if (_viewMode != "") {
                cfg.viewMode = _viewMode;
            }
        }

        if(cfg.viewMode == "dx"){
            try {
                if (cfg.fixedWidth) {
                    var maskWidth, maskLeft;
                    if(cfg.opendModalID != ""){
                        maskWidth = axdom("#" + cfg.opendModalID).outerWidth();
                        if(maskWidth != axdom("#" + cfg.opendModalID).data("width")) {
                            axdom("#" + cfg.opendModalID).css({
                                top: axdom("#" + cfg.opendModalID).data("top"),
                                width: axdom("#" + cfg.opendModalID).data("width")
                            });
                        }
                        maskLeft = (axdom(document.body).width() / 2) - (maskWidth / 2);
                        if (maskLeft < 0) maskLeft = 0;
                        axdom("#" + cfg.opendModalID).css({ left: maskLeft });
                    }else{
                        maskWidth = axdom("#" + cfg.windowID).outerWidth();
                        if(maskWidth != axdom("#" + cfg.windowID).data("width")) {
                            axdom("#" + cfg.windowID).css({
                                top: axdom("#" + cfg.windowID).data("top"),
                                width: axdom("#" + cfg.windowID).data("width")
                            });
                        }
                        maskLeft = (axdom(document.body).width() / 2) - (maskWidth / 2);
                        if (maskLeft < 0) maskLeft = 0;
                        axdom("#" + cfg.windowID).css({ left: maskLeft });
                    }
                } else {
                    if(cfg.opendModalID != "") {
                        maskWidth = axdom(".container").width() - 50;
                        axdom("#" + cfg.opendModalID).css({ width: maskWidth });
                    }else{
                        maskWidth = axdom(".container").width() - 50;
                        axdom("#" + cfg.windowID).css({ width: maskWidth });
                    }
                }
            } catch (e) {

            }
        }else if(cfg.viewMode == "mx"){
            if(cfg.opendModalID != "") {
                axdom("#" + cfg.opendModalID).css({ left: 0, top: axdom(window).scrollTop(), width: "100%" });
            }else {
                axdom("#" + cfg.windowID).css({ left: 0, top: axdom(window).scrollTop(), width: "100%" });
            }
        }

    },
    /**
     * @method AXModal.loaded
     * @description 모달의 로딩중 상태를 강제로 로드 완료 처리 합니다.
     * @example
     * ```js
     * myModal.loaded();
     * parent.myModal.loaded(); //iframe 모달창을 오픈한 경우 열려진 iframe 안에서 호출 합니다.
     * ```
     */
    loaded: function () {
        var cfg = this.config, _winID = this.winID;
        var loadingID = this.config.windowID + "_loading";
        var myIframe = window[this.winID];

        var bodyHeight = axdom(myIframe.document).innerHeight();
        if (axdom(myIframe.document.body).find("." + cfg.contentDivClass).get(0)) {
            bodyHeight = axdom(myIframe.document.body).find("." + cfg.contentDivClass).outerHeight();
        }
        axdom(this).css({ height: (bodyHeight) }, cfg.animateDuration, "cubicInOut");
        axdom("#" + _winID + "_box").css({ height: (bodyHeight) }, cfg.animateDuration, "cubicInOut");
        if (cfg.displayLoading) axdom("#" + loadingID).fadeOut("slow");
        axdom("#" + _winID).addClass("loaded");
    }
});
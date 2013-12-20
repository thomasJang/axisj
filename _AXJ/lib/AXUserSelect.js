/*!
 * axisJ Javascript Library Version 1.0
 * http://axisJ.com
 * 
 * 아래 소스의 라이선스는 axisJ.com 에서 확인 하실 수 있습니다.
 * http://axisJ.com/license
 * axisJ를 사용하시려면 라이선스 페이지를 확인 및 숙지 후 사용 하시기 바람니다. 무단 사용시 예상치 못한 피해가 발생 하실 수 있습니다.
 */

var AXUserSelect = Class.create(AXJ, {
    version: "AXUserSelect V1.0",
	author: "tom@axisj.com",
	logs: [
		"2013-08-21 오후 11:47:11 - modsAX 변환"
	],
    initialize: function(AXJ_super) {
        AXJ_super();
        this.config.className = "";
        this.ds = [];
    },
    init: function() {
        var config = this.config;
        this.myDrag = new AXDrag();
        
        if (!config.containerID || !jQuery("#" + config.containerID).get(0)) {
            alert("컨테이너 아이디가 지정되지 않아 modsTab 초기화에 실패 하였습니다.");
            return;
        }

        this.CT = jQuery("#" + config.containerID);

        var po = [];
        po.push("<div class=\"" + config.className + " readyDrop\" id=\"" + config.containerID + "_UserSelectBox\" style='height:100%;'>");
        po.push("</div>");
        this.CT.html(po.join(''));


        var onSort = this.onSort.bind(this);
        var onDrop = this.onDrop.bind(this);

        this.myDrag.setConfig({
            dragStage: config.containerID + "_UserSelectBox",
            dragBoxClassName: "modsDragBox",
            bedragClassName: "bedraged",
            bedropClassName: "bedroped",
            dragClassName: "readyDrag",
            dropClassName: "readyDrop",
            //onDrag: fnObj.portlet.onDrag,
            onDrop: onDrop,
            onSort: onSort,
            multiSelector: {
                selectStage: config.containerID + "_UserSelectBox",
                selectClassName: "readyDrag",
                beselectClassName: "beSelected"
            },
            sort: {
                sorter: "<div class=\"modsSortGhost\"></div>"
            }
        });
        // 3 : 활성화
        this.myDrag.active();

    },
    push: function(ds) {
        var config = this.config;
        var myds = this.ds;
        var po = [];
        jQuery.each(ds, function(i, D) {
            var addOk = 1;
            jQuery.each(myds, function() {
                if (this.id == D.id) {
                    addOk = 0;
                    return false;
                }
            });
            if (addOk == 1) {
                po.push("<div class=\"readyDrag\" id=\"" + config.containerID + "userSelectItem_" + this.id + "\">");
                po.push("	<div class=\"userSelectItemBody\">");
                po.push("	<input type=\"hidden\" name=\"id\" id=\"" + config.containerID + "userSelectItemID_" + this.id + "\" value=\"" + this.id + "\" /> ");
                po.push("	<input type=\"hidden\" name=\"nm\" id=\"" + config.containerID + "userSelectItemNM_" + this.id + "\" value=\"" + this.nm + "\" /> ");
                po.push("	<input type=\"hidden\" name=\"desc\" id=\"" + config.containerID + "userSelectItemDESC_" + this.id + "\" value=\"" + this.desc + "\" /> ");
                po.push("	" + this.nm.dec() + " ");
                po.push("	" + this.desc.dec() + " ");
                //po.push("	<a href=\"#modsExec\" class=\"del\">삭제</a>");
                po.push("	</div>");
                po.push("</div>");
                myds.push(this);
            }
        });

        jQuery("#" + config.containerID + "_UserSelectBox").append(po.join(''));


        this.dragCollect();
    },
    del: function(select) {
        var config = this.config;
        var myDS = [];
        jQuery.each(this.ds, function() {
            var delOK = 0;
            for (var a = 0; a < select.length; a++) {
                if (select[a].id.split(/\_/g).last() == this.id) {
                    delOK = 1;
                }
            }
            if (delOK == 1) {
                jQuery("#" + config.containerID + "userSelectItem_" + this.id).remove();
            } else {
                myDS.push(this);
            }
        });
        this.ds = myDS;
        this.dragCollect();
    },
    _del: function(select) {
        var config = this.config;
        var myDS = [];
        $.each(this.ds, function() {
            var delOK = 0;
            for (var a = 0; a < select.length; a++) {
                if (select[a] == this.id) {
                    delOK = 1;
                }
            }
            if (delOK == 1) {
                $("#" + config.containerID + "userSelectItem_" + this.id).remove();
            } else {
                myDS.push(this);
            }
        });
        this.ds = myDS;
        this.dragCollect();
    },    
    dragCollect: function() {
        this.myDrag.collectItem();
    },
    onSort: function(res) {
        var dragCollect = this.dragCollect.bind(this);
        if ($(res.dragItem).html() == $(res.sortItem).html()) return;
        if (res.dragItem == res.sortItem) return;
        $(res.dragItem).fadeOut("fast", function() {
            $(res.sortItem).before(this);
            $(this).show("fast");
            dragCollect();
        });

    },
    onDrop: function(res) {
        var config = this.config;
        var dragCollect = this.dragCollect.bind(this);
        $(res.dragItem).fadeOut("fast", function() {
            jQuery("#" + config.containerID + "_UserSelectBox").append(this); //예외 경우
            jQuery(this).show("fast");
            dragCollect();
        });

    },
    moveup: function() {
        var select = this.getSelect();

        $.each(select, function() {
            var prev = $(this).prev();
            prev.before($(this));
        });
    },
    movedown: function() {
        var select = this.getSelect();

        $.each(select, function() {
            var next = $(this).next();
            next.after($(this));
        });
    },    
    getSelect: function() {
        return this.myDrag.mselector.getSelects();
    },
    empty: function() {
        var config = this.config;
        jQuery("#" + config.containerID + "_UserSelectBox").empty();
        this.ds = [];
        this.dragCollect();
    },
    getDS: function() {
        var config = this.config;
        var myDS = [];
        jQuery("#" + config.containerID + "_UserSelectBox").find(".readyDrag").each(function() {
            var id = this.id.split(/\_/g).last();
            var nm = jQuery("#" + config.containerID + "userSelectItemNM_" + id).val();
            var desc = jQuery("#" + config.containerID + "userSelectItemDESC_" + id).val();
            myDS.push({id:id, nm:nm, desc:desc});
        });
        return myDS;
    }
});
/**
 * @class AXScheduleCalendar
 * @extends AXJ
 * @version v0.1
 * @author tom@axisj.com
 * @logs
 *
 */


var AXScheduleCalendar = Class.create(AXJ, {
	initialize: function (AXJ_super) {
		AXJ_super();
		this.config.toDay = (new Date()).print();
		this.config.viewMode = "M";
		this.config.theme = "AXScheduleCalendar";
		this.config.weeks = [
			{ name: "SUN", style: "color:#c78b82;" },
			{ name: "MON", style: "color:#7b7b7b;" },
			{ name: "TUE", style: "color:#7b7b7b;" },
			{ name: "WED", style: "color:#7b7b7b;" },
			{ name: "THU", style: "color:#7b7b7b;" },
			{ name: "FRI", style: "color:#7b7b7b;" },
			{ name: "SAT", style: "color:#627d9b;" }
		];
		this.config.printFormat = "dd";
		this.config.titleFormat = "yyyy/mm/dd";
		this.config.valueFormat = "yyyy-mm-dd";

		this.list = [];
		this.cstdate = null;
		this.ceddate = null;
		this.datePointer = {};
	},
	/* 공통 영역 */
	init: function () {
		var cfg = this.config;

		if (Object.isUndefined(cfg.targetID)) {
			tracd("undefined targetID");
			return;
		}
		this.printCalendar(cfg.toDay);
		$(window).bind("resize", this.windowResize.bind(this));
	},
	windowResize: function () {
		var windowResizeApply = this.windowResizeApply.bind(this);
		if (this.windowResizeObserver) clearTimeout(this.windowResizeObserver);
		this.windowResizeObserver = setTimeout(function () {
			windowResizeApply();
		}, 100);
	},
	windowResizeApply: function () {
		//this.datePointer = {};
		var datePointer = this.datePointer;
		$.each(datePointer, function (k, v) {
			datePointer[k] = {};
		});
		this.datePointer = datePointer;

		this.printList();
	},
	goToday: function(){
		var cfg = this.config;
		if(cfg.viewMode == "M"){
			var newDate = new Date().print().date();
			cfg.basicDate = newDate;
			this.printMonthPage(newDate);
		}else if(cfg.viewMode == "W"){
			var newDate = new Date().print().date();
			cfg.basicDate = newDate;
			this.printWeekPage(newDate);
		}else if(cfg.viewMode == "D"){
			var newDate = new Date().print().date();
			cfg.basicDate = newDate;
			this.printDayPage(newDate);
		}
	},
	moveDate: function(direction){
		var cfg = this.config;

		this.datePointer = {};
		this.list = [];

		var basicDate = this.getBasicDate();
		if(cfg.viewMode == "M"){
			var newDate = basicDate.add(direction, "M");
			cfg.basicDate = newDate;
			this.printMonthPage(newDate);
		}else if(cfg.viewMode == "W"){
			var newDate = basicDate.add(direction*7);
			cfg.basicDate = newDate;
			this.printWeekPage(newDate);
		}else if(cfg.viewMode == "D"){
			var newDate = basicDate.add(direction);
			cfg.basicDate = newDate;
			this.printDayPage(newDate);
		}
	},
	onclickday: function(date){
		var cfg = this.config;
		cfg.viewMode = "D";
		cfg.basicDate = date;

		alert("day");

		this.printDayPage(date);
		if (cfg.onChangeView) {
			cfg.onChangeView.call({viewMode:"D"});
		}
	},
	setViewMode: function(viewMode){
		var cfg = this.config;
		cfg.viewMode = viewMode;
		this.printCalendar();
	},
	getBasicDate: function () {
		var cfg = this.config;
		if (cfg.basicDate != undefined) {
			return cfg.basicDate.date();
		} else {
			return (new Date()).print().date();
		}
	},
	getCalendarStartDate: function (date) {
		var cfg = this.config;
		var calendarStartDate, monthStartDate, basicDate;
		basicDate = (date) ? date.date() : this.getBasicDate();
		monthStartDate = new Date(basicDate.getFullYear(), basicDate.getMonth(), 1, 12);
		var calendarStartDateDay = monthStartDate.getDay();
		if (calendarStartDateDay == 0) calendarStartDateDay = 7;
		calendarStartDate = monthStartDate.add(-calendarStartDateDay);
		
		var weekStartDate = basicDate.add(-basicDate.getDay());
		return { calendarStartDate: calendarStartDate, monthStartDate: monthStartDate, weekStartDate:weekStartDate };
	},
	printCalendar: function(toDay){
		var cfg = this.config;
		if(cfg.viewMode == "M"){
			this.printMonthPage(toDay);
		}else if(cfg.viewMode == "W"){
			this.printWeekPage(toDay);
		}else if(cfg.viewMode == "D"){
			this.printDayPage(toDay);
		}
		
	},
	printMonthPage: function (date) {
		var cfg = this.config;
		var basicDate = this.getBasicDate();
		if(date == undefined){
			date = basicDate;
		}		
		var calendarDate = this.getCalendarStartDate(date);
		var calendarStartDate = calendarDate.calendarStartDate;
		var monthStartDate = calendarDate.monthStartDate;
		var onclickday = this.onclickday.bind(this);
		
		var toDay = (new Date()).print().date();
		var setDate = (date) ? date.date() : (new Date()).print().date();
		
		$("#"+cfg.displayID).html( setDate.print("yyyy년 mm월") );
		
		this.datePointer = {};

		//
		var po = [];
		po.push("<div id=\"" + cfg.targetID + "_AX_box\" class=\"" + cfg.theme + "\">");
		po.push("<table cellspacing=\"0\" cellpadding=\"0\" class=\"calendarPage\">");
		po.push("<thead>");
		po.push("<tr>");
		$.each(cfg.weeks, function (wi, ww) {
			po.push("<td class=\"head_" + wi + "\" style=\"" + ww.style + "\">" + ww.name + "</td>");
		});
		po.push("</tr>");
		po.push("</thead>");
		po.push("<tbody>");
		var roopDate = calendarStartDate;


		this.cstdate = roopDate;

		var i = 0; while (i < 6) {
			po.push("<tr>");
			var k = 0; while (k < 7) {
				this.datePointer["D" + roopDate.print("yyyymmdd")] = {};
				var dayValue = roopDate.print(this.config.printFormat);
				var addClass = [];
				var tdClass = [];
				if (roopDate.getMonth() != monthStartDate.getMonth()) addClass.push("notThisMonth");
				if (setDate.diff(roopDate) == 0) tdClass.push("setDate");
				if (toDay.diff(roopDate) == 0) tdClass.push("toDay");
				po.push("<td class=\"datePanelblock bodyCol_" + k + " bodyRow_" + i + " " + tdClass.join(" ") + "\" style=\"\" id=\"" + cfg.targetID + "_AX_D_AX_" + roopDate.print("yyyymmdd") + "\">");
				po.push("<a href=\"#axexec\" class=\"calendarDate " + addClass.join(" ") + "\" id=\"" + cfg.targetID + "_AX_" + roopDate.print(this.config.valueFormat) + "_AX_date\" title=\"" + roopDate.print(this.config.titleFormat) + "\">");
				po.push(dayValue);
				po.push("<span class=\"label\"></span>");
				po.push("</a>");
				po.push("</td>");
				k++;
				roopDate = roopDate.add(1);
			}
			po.push("</tr>");
			i++;
		}

		this.ceddate = roopDate.add(-1);

		po.push("</tbody>");
		po.push("</table>");
		po.push("<div id=\"" + cfg.targetID + "_editSpace\"></div>");
		po.push("</div>");
		$("#" + cfg.targetID).html(po.join(''));

		$("#" + cfg.targetID).find(".calendarDate").click(function () {
			var ids = this.id.split(/_AX_/g);
			var myDate = ids[(ids.length - 2)];
			onclickday(myDate);
		});
		
		var targetHeight = $("#" + cfg.targetID).innerHeight();
		targetHeight = targetHeight - 32;
		$("#" + cfg.targetID + "_AX_box").find("tbody tr td").css({height:(targetHeight/6-1)});
		
		this.printList();

		if(cfg.onChangeDate){
			cfg.onChangeDate.call({
				viewMode:cfg.viewMode,
				date:setDate
			});
		}		
	},
	printWeekPage: function (date) {
		var cfg = this.config;
		var basicDate = this.getBasicDate();
		if(date == undefined){
			date = basicDate;
		}		
		var calendarDate = this.getCalendarStartDate(date);
		var calendarStartDate = calendarDate.weekStartDate;
		//var weekStartDate = calendarDate.weekStartDate;
		var onclickday = this.onclickday.bind(this);

		var toDay = (new Date()).print().date();
		var setDate = (date) ? date.date() : (new Date()).print().date();
		
		$("#" + cfg.displayID).html(calendarStartDate.print("YYYY년 MM월 DD일") + " ~ " + calendarStartDate.add(6).print("YYYY년 MM월 DD일"));

		this.datePointer = {};
		
		//
		var po = [];
		po.push("<div id=\"" + cfg.targetID + "_AX_box\" class=\"" + cfg.theme + "\">");
		po.push("<table cellspacing=\"0\" cellpadding=\"0\" class=\"calendarPage\">");
		po.push("<thead>");
		po.push("<tr>");
		$.each(cfg.weeks, function (wi, ww) {
			po.push("<td class=\"head_" + wi + "\" style=\"" + ww.style + "\">" + ww.name + "</td>");
		});
		po.push("</tr>");
		po.push("</thead>");
		po.push("<tbody>");
		var roopDate = calendarStartDate;

		this.cstdate = roopDate;

		var i = 0; while (i < 1) {
			po.push("<tr>");
			var k = 0; while (k < 7) {
				this.datePointer["D" + roopDate.print("yyyymmdd")] = {};
				var dayValue = roopDate.print(this.config.printFormat);
				var addClass = [];
				var tdClass = [];
				//if (roopDate.getMonth() != monthStartDate.getMonth()) addClass.push("notThisMonth");
				if (setDate.diff(roopDate) == 0) tdClass.push("setDate");
				if (toDay.diff(roopDate) == 0) tdClass.push("toDay");
				po.push("<td class=\"datePanelblock bodyCol_" + k + " bodyRow_" + i + " " + tdClass.join(" ") + "\" style=\"\" id=\"" + cfg.targetID + "_AX_D_AX_" + roopDate.print("yyyymmdd") + "\">");
				po.push("<a href=\"#axexec\" class=\"calendarDate " + addClass.join(" ") + "\" id=\"" + cfg.targetID + "_AX_" + roopDate.print(this.config.valueFormat) + "_AX_date\" title=\"" + roopDate.print(this.config.titleFormat) + "\">");
				po.push(dayValue);
				po.push("<span class=\"label\"></span>");
				po.push("</a>");
				po.push("</td>");
				k++;
				roopDate = roopDate.add(1);
			}
			po.push("</tr>");
			i++;
		}
		this.ceddate = roopDate.add(-1);

		po.push("</tbody>");
		po.push("</table>");
		po.push("<div id=\"" + cfg.targetID + "_editSpace\"></div>");
		po.push("</div>");
		$("#" + cfg.targetID).html(po.join(''));
		
		$("#" + cfg.targetID).find(".calendarDate").click(function () {
			var ids = this.id.split(/_AX_/g);
			var myDate = ids[(ids.length - 2)];
			onclickday(myDate);
		});
		
		var targetHeight = $("#" + cfg.targetID).innerHeight();
		targetHeight = targetHeight - 32;
		$("#" + cfg.targetID + "_AX_box").find("tbody tr td").css({height:(targetHeight-1)});

		this.printList();

		if(cfg.onChangeDate){
			cfg.onChangeDate.call({
				viewMode:cfg.viewMode,
				date:setDate
			});
		}		
	},
	printDayPage: function (date) {
		var cfg = this.config;
		var basicDate = this.getBasicDate();
		if(date == undefined){
			date = basicDate;
		}		
		var calendarDate = this.getCalendarStartDate(date);
		var calendarStartDate = basicDate;
		//var weekStartDate = calendarDate.weekStartDate;
		
		var toDay = (new Date()).print().date();
		var setDate = (date) ? date.date() : (new Date()).print().date();
		
		$("#" + cfg.displayID).html(calendarStartDate.print("YYYY년 MM월 DD일"));
		this.datePointer = {};
		
		//
		var po = [];
		po.push("<div id=\"" + cfg.targetID + "_AX_box\" class=\"" + cfg.theme + "\">");
		po.push("<table cellspacing=\"0\" cellpadding=\"0\" class=\"calendarPage\">");
		po.push("<thead>");
		po.push("<tr>");
		var wi = calendarStartDate.getDay();
		var ww = cfg.weeks[wi];
		po.push("<td class=\"head_" + wi + "\" style=\"" + ww.style + "\">" + ww.name + "</td>");
		po.push("</tr>");
		po.push("</thead>");
		po.push("<tbody>");
		var roopDate = calendarStartDate;

		this.cstdate = roopDate;
		this.ceddate = roopDate;

		var i = 0; while (i < 1) {
			po.push("<tr>");
			var k = 6; while (k < 7) {
				this.datePointer["D" + roopDate.print("yyyymmdd")] = {};
				var dayValue = roopDate.print(this.config.printFormat);
				var addClass = [];
				var tdClass = [];
				//if (roopDate.getMonth() != monthStartDate.getMonth()) addClass.push("notThisMonth");
				//if (setDate.diff(roopDate) == 0) tdClass.push("setDate");
				if (toDay.diff(roopDate) == 0) tdClass.push("toDay");
				po.push("<td class=\"datePanelblock bodyCol_" + k + " bodyRow_" + i + " " + tdClass.join(" ") + "\" style=\"\" id=\"" + cfg.targetID + "_AX_D_AX_" + roopDate.print("yyyymmdd") + "\">");
					po.push("<a href=\"#axexec\" class=\"calendarDate " + addClass.join(" ") + "\" id=\"" + cfg.targetID + "_AX_" + roopDate.print(this.config.valueFormat) + "_AX_date\" title=\"" + roopDate.print(this.config.titleFormat) + "\">");
					po.push(dayValue);
					po.push("<span class=\"label\"></span>");
					po.push("</a>");
				po.push("</td>");
				k++;
				roopDate = roopDate.add(1);
			}
			po.push("</tr>");
			i++;
		}
		po.push("</tbody>");
		po.push("</table>");
		po.push("<div id=\"" + cfg.targetID + "_editSpace\"></div>");
		po.push("</div>");
		$("#" + cfg.targetID).html(po.join(''));
		
		
		var targetHeight = $("#" + cfg.targetID).innerHeight();
		targetHeight = targetHeight - 32;
		$("#" + cfg.targetID + "_AX_box").find("tbody tr td").css({height:(targetHeight-1)});

		this.printList();

		if(cfg.onChangeDate){
			cfg.onChangeDate.call({
				viewMode:cfg.viewMode,
				date:setDate
			});
		}		
	},
	setList: function(list){
		var cfg = this.config;
		this.list = list;

		$.each(this.list, function (lindex, L) {
			this.duration = this.sdate.date().diff(this.edate) + 1;
		});

		this.list = this.list.sort(function (pItem, nItem) {
			var v1 = pItem.duration;
			var v2 = nItem.duration;
			if (v1 < v2) return 1;
			else if (v1 > v2) return -1;
			else if (v1 == v2) return 0;
		});

		this.printList();
	},
	printList: function(){
		var cfg = this.config;

		if (cfg.viewMode == "D") {
			this.printDayList();
			return;
		}

		var dayPanelHeight = $("#" + cfg.targetID).find(".datePanelblock").height() - 25;
		var printItemCount = (dayPanelHeight / 21).floor();
		var addedDotPosition = 0;
		var datePointer = this.datePointer;

		$("#" + cfg.targetID + "_editSpace").empty();


		$.each(this.list, function (lindex, L) {

			var roopDate = this.sdate.date();
			var roopEndDate = null;
			var maxWidthForDayEnd = 7 - roopDate.getDay();

			if (maxWidthForDayEnd >= this.duration) {

				if (datePointer["D" + roopDate.print("yyyymmdd")]) {

					var itemID = roopDate.print("yyyymmdd");
					var pos = $("#" + cfg.targetID + "_AX_D_AX_" + itemID).position();
					var boxCss = { left: pos.left.number(), top: (pos.top.number() + 25) };

					var dotPosition = 0;
					while (datePointer["D" + roopDate.print("yyyymmdd")][dotPosition] != undefined) {
						dotPosition++;
					}

					//trace(itemID);
					//trace(datePointer["D" + roopDate.print("yyyymmdd")]);

					boxCss.top += dotPosition * 21;


					for (var d = 0; d < this.duration; d++) {
						var dateID = roopDate.print("yyyymmdd");
						if (datePointer["D" + dateID]) {
							datePointer["D" + dateID][dotPosition] = L;
							if (dotPosition >= printItemCount) {
								$("#" + cfg.targetID + "_AX_" + roopDate.print(cfg.valueFormat) + "_AX_date").find(".label").html("+" + (dotPosition - printItemCount + 1));
							}
							roopEndDate = roopDate;
						}
						roopDate = roopDate.add(1);
					}

					var endpos = $("#" + cfg.targetID + "_AX_D_AX_" + roopEndDate.print("yyyymmdd")).position();
					var boxWidth = $("#" + cfg.targetID + "_AX_D_AX_" + itemID).width().round();

					//boxCss.width = (boxWidth) * this.duration - (7 - this.duration) + 3;
					boxCss.width = (endpos.left + boxWidth) - boxCss.left - 2;

					var po = [];
					po.push('<div id="SCH_AX_' + lindex + '_AX_0" class="schduleItem dotPosition_' + dotPosition + ' schduleItem_' + lindex + '" style="left:' + boxCss.left + 'px;top:' + boxCss.top + 'px;width:' + boxCss.width + 'px;">');
					po.push(L.schedulename);
					po.push('</div>');

					$("#" + cfg.targetID + "_editSpace").append(po.join(''));

					if (addedDotPosition < dotPosition) addedDotPosition = dotPosition;
				}

			} else {

				var remainDuration = this.duration - maxWidthForDayEnd;
				var itemID, pos, boxCss, dotPosition = null;

				if (datePointer["D" + roopDate.print("yyyymmdd")]) {

					itemID = roopDate.print("yyyymmdd");
					pos = $("#" + cfg.targetID + "_AX_D_AX_" + itemID).position();
					boxCss = { left: pos.left.number(), top: (pos.top.number() + 25) };

					dotPosition = 0;
					while (datePointer["D" + roopDate.print("yyyymmdd")][dotPosition] != undefined) {
						dotPosition++;
					}
					boxCss.top += dotPosition * 21;

					var _duration = maxWidthForDayEnd;
					for (var d = 0; d < _duration; d++) {
						var dateID = roopDate.print("yyyymmdd");
						if (datePointer["D" + dateID]) {
							datePointer["D" + dateID][dotPosition] = L;
							if (dotPosition >= printItemCount) {
								$("#" + cfg.targetID + "_AX_" + roopDate.print(cfg.valueFormat) + "_AX_date").find(".label").html("+" + (dotPosition - printItemCount + 1));
							}
							roopEndDate = roopDate;
						}
						roopDate = roopDate.add(1);
					}

					var endpos = $("#" + cfg.targetID + "_AX_D_AX_" + roopEndDate.print("yyyymmdd")).position();
					var boxWidth = $("#" + cfg.targetID + "_AX_D_AX_" + itemID).width();

					//boxCss.width = (boxWidth) * _duration - (7 - _duration) + 3;
					boxCss.width = (endpos.left + boxWidth) - boxCss.left - 2;


					//boxCss.width -= 7;

					var po = [];
					po.push('<div id="SCH_AX_' + lindex + '_AX_0" class="schduleItem dotPosition_' + dotPosition + ' schduleItem_' + lindex + '" style="left:' + boxCss.left + 'px;top:' + boxCss.top + 'px;width:' + boxCss.width + 'px;">');
					po.push(L.schedulename);
					po.push('</div>');

					$("#" + cfg.targetID + "_editSpace").append(po.join(''));

					if (addedDotPosition < dotPosition) addedDotPosition = dotPosition;

				} else {
					var _duration = maxWidthForDayEnd;
					for (var d = 0; d < _duration; d++) {
						roopDate = roopDate.add(1);
					}
				}


				//for(var a=0;a<remainDuration;a+=7){
				var subIndex = 1;
				while(remainDuration > 0){

					if (remainDuration > 7) {
						var _duration = 7;
					} else {
						var _duration = remainDuration;
					}
						
					if (datePointer["D" + roopDate.print("yyyymmdd")]) {

						itemID = roopDate.print("yyyymmdd");
						pos = $("#" + cfg.targetID + "_AX_D_AX_" + itemID).position();
						boxCss = { left: pos.left.number(), top: (pos.top.number() + 25) };

						if (dotPosition == null) {
							dotPosition = 0;
							while (datePointer["D" + roopDate.print("yyyymmdd")][dotPosition] != undefined) {
								dotPosition++;
							}
							boxCss.top += dotPosition * 21;
						}


						if (datePointer["D" + itemID]) {

							pos = $("#" + cfg.targetID + "_AX_D_AX_" + itemID).position();
							boxCss = { left: pos.left.number(), top: (pos.top.number() + 25) };
							boxCss.top += dotPosition * 21;

							for (var d = 0; d < _duration; d++) {
								var dateID = roopDate.print("yyyymmdd");
								if (datePointer["D" + dateID]) {
									datePointer["D" + dateID][dotPosition] = L;
									if (dotPosition >= printItemCount) {
										$("#" + cfg.targetID + "_AX_" + roopDate.print(cfg.valueFormat) + "_AX_date").find(".label").html("+" + (dotPosition - printItemCount + 1));
									}
									roopEndDate = roopDate;
								}
								roopDate = roopDate.add(1);
							}

							var endpos = $("#" + cfg.targetID + "_AX_D_AX_" + roopEndDate.print("yyyymmdd")).position();
							var boxWidth = $("#" + cfg.targetID + "_AX_D_AX_" + itemID).width();

							//boxCss.width = (boxWidth) * _duration - (7 - _duration) + 3;
							boxCss.width = (endpos.left + boxWidth) - boxCss.left - 2;


							//boxCss.width -= 7;

							var po = [];
							po.push('<div id="SCH_AX_' + lindex + '_AX_' + subIndex + '" class="schduleItem dotPosition_' + dotPosition + ' schduleItem_' + lindex + '" style="left:' + boxCss.left + 'px;top:' + boxCss.top + 'px;width:' + boxCss.width + 'px;">');
							po.push(L.schedulename);
							po.push('</div>');

							$("#" + cfg.targetID + "_editSpace").append(po.join(''));

							if (addedDotPosition < dotPosition) addedDotPosition = dotPosition;

						}

					} else {
						for (var d = 0; d < _duration; d++) {
							roopDate = roopDate.add(1);
						}
					}

					remainDuration -= 7;
					subIndex++;

				}
			}

		});

		
		$("#" + cfg.targetID + "_editSpace").find(".schduleItem").bind("mouseover", function () {
			var ids = this.id.split(/_AX_/g);
			var lindex = ids[ids.length - 2];
			$("#" + cfg.targetID + "_editSpace").find(".schduleItem_" + lindex).addClass("hover");
		});
		$("#" + cfg.targetID + "_editSpace").find(".schduleItem").bind("mouseout", function () {
			var ids = this.id.split(/_AX_/g);
			var lindex = ids[ids.length - 2];
			$("#" + cfg.targetID + "_editSpace").find(".schduleItem_" + lindex).removeClass("hover");
		});

		var _list = this.list;
		$("#" + cfg.targetID + "_editSpace").find(".schduleItem").bind("click", function () {
			var ids = this.id.split(/_AX_/g);
			var lindex = ids[ids.length - 2];
			if (cfg.onclick) {
				var sendObj = {
					index: lindex,
					item: _list[lindex]
				};
				cfg.onclick.call(sendObj, lindex, _list[lindex]);
			}
		});

		for (var a = printItemCount; a < addedDotPosition+1; a++) {
			$("#" + cfg.targetID + "_editSpace").find(".dotPosition_" + a).hide();
		}


	},
	printDayList: function(){
		var cfg = this.config;
		var basicDate = this.getBasicDate();

		var dayPanelHeight = $("#" + cfg.targetID).find(".datePanelblock").height() - 25;
		var printItemCount = (dayPanelHeight / 21).floor();
		var addedDotPosition = 0;
		var datePointer = this.datePointer;

		$("#" + cfg.targetID + "_editSpace").empty();


		var roopDate = basicDate;
		var itemID = roopDate.print("yyyymmdd");
		var pos = endpos = $("#" + cfg.targetID + "_AX_D_AX_" + itemID).position();
		var boxCss = { left: pos.left.number(), top: (pos.top.number() + 25) };
		var boxWidth = $("#" + cfg.targetID + "_AX_D_AX_" + itemID).width().round();

		var dotPosition = 0;
		$.each(this.list, function (lindex, L) {
			if (basicDate.diff(this.sdate) <= 0 && basicDate.diff(this.edate) >= 0) {
				
				var myTop = boxCss.top + dotPosition * 21;
				boxCss.width = (endpos.left + boxWidth) - boxCss.left - 2;

				if (dotPosition >= printItemCount) {
					$("#" + cfg.targetID + "_AX_" + roopDate.print(cfg.valueFormat) + "_AX_date").find(".label").html("+" + (dotPosition - printItemCount + 1));
				}

				var po = [];
				po.push('<div id="SCH_AX_' + lindex + '_AX_0" class="schduleItem dotPosition_' + dotPosition + ' schduleItem_' + lindex + '" style="left:' + boxCss.left + 'px;top:' + myTop + 'px;width:' + boxCss.width + 'px;">');
				po.push(L.schedulename);
				po.push('</div>');

				$("#" + cfg.targetID + "_editSpace").append(po.join(''));

				dotPosition++;

			}
		});


		$("#" + cfg.targetID + "_editSpace").find(".schduleItem").bind("mouseover", function () {
			var ids = this.id.split(/_AX_/g);
			var lindex = ids[ids.length - 2];
			$("#" + cfg.targetID + "_editSpace").find(".schduleItem_" + lindex).addClass("hover");
		});
		$("#" + cfg.targetID + "_editSpace").find(".schduleItem").bind("mouseout", function () {
			var ids = this.id.split(/_AX_/g);
			var lindex = ids[ids.length - 2];
			$("#" + cfg.targetID + "_editSpace").find(".schduleItem_" + lindex).removeClass("hover");
		});

		var _list = this.list;
		$("#" + cfg.targetID + "_editSpace").find(".schduleItem").bind("click", function () {
			var ids = this.id.split(/_AX_/g);
			var lindex = ids[ids.length - 2];
			if (cfg.onclick) {
				var sendObj = {
					index: lindex,
					item: _list[lindex]
				};
				cfg.onclick.call(sendObj, lindex, _list[lindex]);
			}
		});


		for (var a = printItemCount; a < addedDotPosition + 1; a++) {
			$("#" + cfg.targetID + "_editSpace").find(".dotPosition_" + a).hide();
		}


		return;

		var po = [];
		po.push('<div id="SCH_AX_' + lindex + '_AX_0" class="schduleItem dotPosition_' + dotPosition + ' schduleItem_' + lindex + '" style="left:' + boxCss.left + 'px;top:' + boxCss.top + 'px;width:' + boxCss.width + 'px;">');
		po.push(L.schedulename);
		po.push('</div>');

		$("#" + cfg.targetID + "_editSpace").append(po.join(''));


	},
	nothing: function () { }
});
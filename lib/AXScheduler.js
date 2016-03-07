/*!
 * AXISJ Javascript UI Library
 * http://axisj.com
 *
 * 아래 소스의 라이선스는 axisj.com 에서 확인 하실 수 있습니다.
 * http://axisj.com/license
 * axisj를 사용하시려면 라이선스 페이지를 확인 및 숙지 후 사용 하시기 바람니다. 무단 사용시 예상치 못한 피해가 발생 하실 수 있습니다.
 */

var AXScheduler = Class.create( AXJ, {
	initialize: function( AXJ_super ) {
		AXJ_super();
		this.config.toDay = (new Date()).print();
		this.config.viewType = "M";
		this.config.modeType = "plan";
		this.config.viewWeekEnd = false;
		this.config.theme = "AXScheduleCalendar";
		this.config.weeks = [
			{ name: "월", style: "color:#7b7b7b;" },
			{ name: "화", style: "color:#7b7b7b;" },
			{ name: "수", style: "color:#7b7b7b;" },
			{ name: "목", style: "color:#7b7b7b;" },
			{ name: "금", style: "color:#7b7b7b;" },
			{ name: "토", style: "color:#3E9EFF;" },
			{ name: "일", style: "color:#c78b82;" }
		];
		this.config.timeset = [
			{hour:"00:00", display:"새벽 00:00"},
			{hour:"00:30", display:"00:30"},
			{hour:"01:00", display:"01:00"},
			{hour:"01:30", display:"01:30"},
			{hour:"02:00", display:"02:00"},
			{hour:"02:30", display:"02:30"},
			{hour:"03:00", display:"03:00"},
			{hour:"03:30", display:"03:30"},
			{hour:"04:00", display:"04:00"},
			{hour:"04:30", display:"04:30"},
			{hour:"05:00", display:"05:00"},
			{hour:"05:30", display:"05:30"},
			{hour:"06:00", display:"오전 06:00"},
			{hour:"06:30", display:"06:30"},
			{hour:"07:00", display:"07:00"},
			{hour:"07:30", display:"07:30"},
			{hour:"08:00", display:"08:00"},
			{hour:"08:30", display:"08:30"},
			{hour:"09:00", display:"09:00"},
			{hour:"09:30", display:"09:30"},
			{hour:"10:00", display:"10:00"},
			{hour:"10:30", display:"10:30"},
			{hour:"11:00", display:"11:00"},
			{hour:"11:30", display:"11:30"},
			{hour:"12:00", display:"12:00"},
			{hour:"12:30", display:"12:30"},
			{hour:"13:00", display:"오후 01:00"},
			{hour:"13:30", display:"01:30"},
			{hour:"14:00", display:"02:00"},
			{hour:"14:30", display:"02:30"},
			{hour:"15:00", display:"03:00"},
			{hour:"15:30", display:"03:30"},
			{hour:"16:00", display:"04:00"},
			{hour:"16:30", display:"04:30"},
			{hour:"17:00", display:"05:00"},
			{hour:"17:30", display:"05:30"},
			{hour:"18:00", display:"06:00"},
			{hour:"18:30", display:"06:30"},
			{hour:"19:00", display:"저녁 07:00"},
			{hour:"19:30", display:"07:30"},
			{hour:"20:00", display:"08:00"},
			{hour:"20:30", display:"08:30"},
			{hour:"21:00", display:"09:00"},
			{hour:"21:30", display:"09:30"},
			{hour:"22:00", display:"10:00"},
			{hour:"22:30", display:"10:30"},
			{hour:"23:00", display:"11:00"},
			{ hour: "23:30", display: "11:30" },
			{ hour: "23:59", display: "11:59" }
		];
		this.config.printFullFormat = "mm월 dd일(dw)";
		this.config.printFormat = "dd";
		this.config.titleFormat = "yyyy/mm/dd";
		this.config.valueFormat = "yyyy-mm-dd";
		this.config.viewTypeChange = true;
		this.config.datePicker = false;
		this.config.datePickerID = "";
		this.config.itemHeight = 36;
		this.config.itemHeight2 = 21;
		this.config.editable = true;

		this.list = [];
		this.weekList = [];
		this.plantimeList = [];
		this.acttimeList = [];
		this.cstdate = null;
		this.ceddate = null;
		this.datePointer = {};
		
		var _parent = this, cfg = this.config;
		this.monthPageUpdater = {
			firstDateTime:null, startDateTime: null, endDateTime: null,
			watch: function(){
				
				this.startDateTime = null;
				this.endDateTime = null;
				
				var _this = this;
				$(document.body).bind("mousemove.axscheduler", function(event){
					//trace(event.target.id);
					var eid = event.target.id.split(/_AX_/g);
					var eventTarget = event.target;
					
					var myTarget = _parent.getEventTarget({
						evt: eventTarget,
						until: function (evt, evtIDs) {
							return (evt.parentNode.tagName == "body") ? true : false;
						},
						find: function (evt, evtIDs) {
							if (evt.id == "") return false;
							if ( axdom(evt).hasClass("datePanelblock") ) {
								return true;
							} else {
								return false;
							}
						}
					});
					
					if(myTarget){
						var touchDate = myTarget.id.split(/_AX_/g).last();
						_this.update( touchDate.date().getTime() );
					}
					
					
				});
				$(document.body).bind("mouseup.axscheduler", function(){
					_this.watchEnd();
				});
			},
			watchEnd: function(){
				$(document.body).unbind("mousemove.axscheduler");
				$(document.body).unbind("mouseup.axscheduler");
				
				_parent.onselectMonthPage(this.startDateTime, this.endDateTime);
			},
			update: function(updateDateTime){
				if( this.startDateTime == null && this.endDateTime == null ){
					this.startDateTime = updateDateTime;
					this.endDateTime = updateDateTime;
				}else{
					if(this.firstDateTime < updateDateTime){
						this.endDateTime = updateDateTime;
					}else if(this.firstDateTime > updateDateTime){
						this.startDateTime = updateDateTime;
					}else if(this.firstDateTime == updateDateTime){
						this.startDateTime = updateDateTime;
						this.endDateTime = updateDateTime;
					}
				}
				_parent.selectingMonthPage(this.startDateTime, this.endDateTime);
			}
		};
		this.timePageUpdater = {
			firstTime:null, selectDate: null, selectDateType: null, startTime: null, endTime: null,
			watch: function(){
				
				this.startTime = null;
				this.endTime = null;
				
				var _this = this;
				$(document.body).bind("mousemove.axscheduler", function(event){
					//trace(event.target.id);
					var eid = event.target.id.split(/_AX_/g);
					var eventTarget = event.target;
					
					var pos = {
						y1 : cfg.calendarTimePanel.offset().top,
						y2 : cfg.calendarTimePanelScroller.position().top,
						y3 : event.pageY
					};
					var realY = (( (pos.y3 - pos.y1) - pos.y2 ) / 20).floor();
					_this.update( realY );
					
				});
				$(document.body).bind("mouseup.axscheduler", function(){
					_this.watchEnd();
				});
			},
			watchEnd: function(){
				$(document.body).unbind("mousemove.axscheduler");
				$(document.body).unbind("mouseup.axscheduler");
				_parent.onselectTimePage(this.selectDateType, this.selectDate, this.startTime, this.endTime);
			},
			update: function(updateTime){
				if( this.startTime == null && this.endTime == null ){
					this.startTime = updateTime;
					this.endTime = updateTime;
				}else{
					if(this.firstTime < updateTime){
						this.endTime = updateTime;
					}else if(this.firstTime > updateTime){
						this.startTime = updateTime;
					}else if(this.firstTime == updateTime){
						this.startTime = updateTime;
						this.endTime = updateTime;
					}
				}
				_parent.selectingTimePage(this.startTime, this.endTime);
			}
		};
		this.timeItemUpdater = {
			firstTime:null, itemID:null, updateType: null, startTime: null, endTime: null, _startTime: null, _endTime: null,
			isInit: false,
			init: function(stime, etime){
				if(!this.isInit){
					var _stime, _etime;
					for(var tt = 0;tt < cfg.timeset.length;tt++){
						if(cfg.timeset[tt].hour == stime) _stime = tt;
						if(cfg.timeset[tt].hour == etime) _etime = tt;
					}
					this.startTime = this._startTime = _stime;
					this.endTime = this._endTime = _etime;
					
					this.isInit = true;
				}
			},
			watch: function(){
				var _this = this;
				$(document.body).bind("mousemove.axscheduler", function(event){
					//trace(event.target.id);
					var eid = event.target.id.split(/_AX_/g);
					var eventTarget = event.target;
					
					var pos = {
						y1 : cfg.calendarTimePanel.offset().top,
						y2 : cfg.calendarTimePanelScroller.position().top,
						y3 : event.pageY
					};
					var realY = (( (pos.y3 - pos.y1) - pos.y2 ) / 20).floor();
					_this.update( realY );
				});
				$(document.body).bind("mouseup.axscheduler", function(){
					_this.watchEnd();
				});
			},
			watchEnd: function(){
				$(document.body).unbind("mousemove.axscheduler");
				$(document.body).unbind("mouseup.axscheduler");
				if(this._startTime >= this._endTime){
					if(this.updateType == "stime"){
						this._startTime = this._endTime.number()-1;
					}else if(this.updateType == "etime"){	
						this._endTime = this._startTime.number()+1;
					}
				}
				this.startTime = this._startTime;
				this.endTime = this._endTime;
				
				_parent.updateTimeItem(this.itemID, this.startTime, this.endTime, this.updateType);
				this.isInit = false;
			},
			update: function( realY ){
				if(this.updateType == "stime"){
					var moveY = this.firstTime - realY;
					this._startTime = this.startTime - moveY;
					this._endTime = this.endTime;
					if(this._startTime >= this._endTime) return;
					_parent.onupdateTimeItem(this.itemID, this._startTime, this._endTime);
				}else if(this.updateType == "etime"){
					var moveY = this.firstTime - realY;
					this._startTime = this.startTime;
					this._endTime = this.endTime - moveY;
					if(this._startTime >= this._endTime) return;
					_parent.onupdateTimeItem(this.itemID, this._startTime, this._endTime);
				}else if(this.updateType == "move"){
					var moveY = this.firstTime - realY;
					this._startTime = this.startTime - moveY;
					this._endTime = this.endTime - moveY;
					_parent.onupdateTimeItem(this.itemID, this._startTime, this._endTime);
				}
				
				//////////////
				/*
				if( this.startTime == null && this.endTime == null ){
					this.startTime = updateTime;
					this.endTime = updateTime;
				}else{
					if(this.firstTime < updateTime){
						this.endTime = updateTime;
					}else if(this.firstTime > updateTime){
						this.startTime = updateTime;
					}else if(this.firstTime == updateTime){
						this.startTime = updateTime;
						this.endTime = updateTime;
					}
				}
				_parent.onupdateTimeItem(this.itemID, this.startTime, this.endTime);
				*/
			}
		}
	},
	init: function(){
		var cfg = this.config;
		// setConfig 가 실행 된 후 구현
		cfg.target = $("#"+cfg.targetID);
		cfg.datePanel = $("#"+cfg.datePanelID);
		
		var reserveKeys = {
			schduleid: "schduleid",
			schedulename: "schedulename",
			sdate: "sdate",
			edate: "edate",
			color: "color"
		};

		if (cfg.reserveKeys) {
			axf.overwriteObject(reserveKeys, cfg.reserveKeys, true);
			cfg.reserveKeys = reserveKeys;
		} else {
			cfg.reserveKeys = reserveKeys;
		}
		
		this.setSizeTarget();
		this.printCalendar(cfg.toDay);

		axdom(window).bind("resize", this.windowResize.bind(this));
	},
	windowResizeApply: function () {
		
		var _this = this;

		var datePointer = _this.datePointer;
		axf.each(datePointer, function (k, v) {
			datePointer[k] = {};
		});
		_this.datePointer = datePointer;
		_this.setSizeTarget();
		_this.printList();			
	},
	setSizeTarget: function(){
		var cfg = this.config;
		var parent = cfg.target.parent();
		/*
		var padding = cfg.target.css("padding-top").number();
		padding += cfg.target.css("padding-bottom").number();
		//trace(parent.innerHeight(), padding);
		cfg.target.css( {height:parent.innerHeight()-padding} );
		*/
		var setSizeMixPage = function(){
			/*
			var panelHeight = (cfg.target.height() * 0.3).ceil();
			cfg.calendarPanel.css({height:panelHeight});
			var panelTheadHeight = cfg.calendarPanel.find("thead tr td").height() + 2;
			cfg.calendarPanel.find("tbody tr td").css({height:panelHeight - panelTheadHeight});
			*/
		};

		if(cfg.viewType == "M"){

		}else if(cfg.viewType == "1week"){
			setSizeMixPage();
		}else if(cfg.viewType == "3day"){
			setSizeMixPage();
		}else if(cfg.viewType == "List"){
			//this.printListPage();
		}

	},
	goToday: function(){
		var cfg = this.config;
		if(cfg.viewType == "M"){
			var newDate = new Date().print().date();
			cfg.basicDate = newDate;
			this.printMonthPage(newDate);
		}else if(cfg.viewType == "1week"){
			var newDate = new Date().print().date();
			cfg.basicDate = newDate;
			this.printMixPage(newDate, 7);
		}else if(cfg.viewType == "3day"){
			var newDate = new Date().print().date();
			cfg.basicDate = newDate;
			this.printMixPage(newDate, 3);
		}
	},
	moveDate: function(direction){
		var cfg = this.config;

		this.datePointer = {};
		//this.list = [];

		var basicDate = this.getBasicDate();
		if(cfg.viewType == "M"){
			var newDate = basicDate.add(direction, "M");
			cfg.basicDate = newDate;
			this.printMonthPage(newDate);
		}else if(cfg.viewType == "1week"){
			var newDate = basicDate.add(direction*7);
			cfg.basicDate = newDate;
			this.printMixPage(newDate, 7);
		}else if(cfg.viewType == "3day"){
			var newDate = basicDate.add(direction);
			cfg.basicDate = newDate;
			this.printMixPage(newDate, 3);
		}
	},
	onclickday: function(date){
		var cfg = this.config;

		if(cfg.onclickDate){
			cfg.onclickDate.call(date, date);
			return;
		}

		cfg.basicDate = date;
		cfg.viewType = "1week";
		cfg.onchangeType.call({}, "View", "1week");
	},
	setViewType: function(viewType){
		var cfg = this.config;
		cfg.viewType = viewType;
		if (cfg.viewType != "1week") {
			cfg.modeType = "plan";
			cfg.onchangeType.call({}, "Mode", "plan");
            $(".viewWeekEndPanel").hide();
		} else {
			this.printCalendar();
            $(".viewWeekEndPanel").show();
		}
	},
	setModeType: function(modeType){
		var cfg = this.config, toDay;
		cfg.modeType = modeType;
		
		if(cfg.modeType == "act"){
			cfg.viewType = "1week";
			cfg.onchangeType.call({}, "View", "1week");
		}else{
			this.printCalendar();
		}
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
		var calendarStartDateDay = monthStartDate.getDay() - 1;
		if (calendarStartDateDay == -1) calendarStartDateDay = 6;
		calendarStartDate = monthStartDate.add(-calendarStartDateDay);

		var weekStartDateDay = basicDate.getDay() - 1;
		if (weekStartDateDay == -1) weekStartDateDay = 6;

		var weekStartDate = basicDate.add(-weekStartDateDay);
		return { calendarStartDate: calendarStartDate, monthStartDate: monthStartDate, weekStartDate:weekStartDate };
	},
	printCalendar: function (toDay) {
		var cfg = this.config;
		if(cfg.viewType == "M"){
			this.printMonthPage(toDay);
		}else if(cfg.viewType == "1week"){
			this.printMixPage(toDay, 7);
		}else if(cfg.viewType == "3day"){
			this.printMixPage(toDay, 3);
		}else if(cfg.viewType == "List"){
			this.printListPage();
		}
	},
	reloadPrintCalendar: function(){
		var cfg = this.config;
		if (cfg.viewType == "M") {
			this.printMonthPage(null, false);
		} else if (cfg.viewType == "1week") {
			this.printMixPage(null, 7, false);
		} else if (cfg.viewType == "3day") {
			this.printMixPage(null, 3, false);
		} else if (cfg.viewType == "List") {
			this.printListPage(null, false);
		}
	},
	printMonthPage: function (date, callNext) {
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

		cfg.datePanel.html( setDate.print("yyyy년 mm월") );
		this.datePointer = {};

		var po = [], wi = 0;
		po.push("<div id=\"" + cfg.targetID + "_AX_box\" class=\"" + cfg.theme + "\" onselectstart=\"return false;\">");
			po.push("<div id=\"", cfg.targetID + "_AX_calendarPanel", "\">");
				po.push("<table cellspacing=\"0\" cellpadding=\"0\" class=\"scheduleTable\">");
					po.push("<thead>");
						po.push("<tr>");
						for(;wi < cfg.weeks.length;wi++){
							var ww = cfg.weeks[wi];
							po.push("<td class=\"head_" + wi + "\" style=\"" + ww.style + "\">" + ww.name + "</td>");
						}
						po.push("</tr>");
					po.push("</thead>");
					po.push("<tbody>");

					var roopDate = calendarStartDate;
					this.cstdate = roopDate;
					var roopDates = [];

					var i = 0; while (i < 6) {
						po.push("<tr>");
						var k = 0; while (k < 7) {
							this.datePointer["D" + roopDate.print("yyyymmdd")] = {};
							var dayValue, addClass = [], tdClass = [];
							dayValue = (roopDate.getDate() == 1) ? roopDate.print(this.config.printFullFormat) : roopDate.print(this.config.printFormat);
							
							if (roopDate.getMonth() != monthStartDate.getMonth()) addClass.push("notThisMonth");
							if (setDate.diff(roopDate) == 0) tdClass.push("setDate");
							if (toDay.diff(roopDate) == 0) tdClass.push("toDay");
							po.push("<td class=\"datePanelblock bodyCol_" + k + " bodyRow_" + i + " " + tdClass.join(" ") + "\" style=\"\" id=\"" + cfg.targetID + "_AX_D_AX_" + roopDate.print("yyyymmdd") + "\">");
								po.push("<a class=\"calendarDate " + addClass.join(" ") + "\" id=\"" + cfg.targetID + "_AX_date_AX_" + roopDate.print("yyyymmdd") + "\" title=\"" + roopDate.print(this.config.titleFormat) + "\">");
									po.push(dayValue);
									po.push("<span class=\"label\" id=\"" + cfg.targetID + "_AX_datelabel_AX_" + roopDate.print("yyyymmdd") + "\"></span>");
								po.push("</a>");
							po.push("</td>");
							k++;
							roopDates.push(roopDate);
							roopDate = roopDate.add(1);
						}
						po.push("</tr>");
						i++;
					}

					this.ceddate = roopDate.add(-1);

					po.push("</tbody>");
				po.push("</table>");
			po.push('</div>');
			po.push("<div id=\"" + cfg.targetID + "_editSpace\" style=\"height:20px;overflow:hidden;\"></div>");
		po.push("</div>");
		cfg.target.html(po.join(''));
		
		this.roopDates = roopDates;

		cfg.editSpace = axdom("#" + cfg.targetID + "_editSpace");
		

		cfg.target.find(".calendarDate").click(function () {
			var ids = this.id.split(/_AX_/g);
			var myDate = ids.last();
			onclickday(myDate);
		});

		if (cfg.editable) {
			this.monthPageDates = cfg.target.find(".datePanelblock");
			var monthPageUpdater = this.monthPageUpdater;
			this.monthPageDates.bind("mousedown.axscheduler", function (event) {
				if (event.target.tagName == "A" || event.target.tagName == "SPAN") {
					return;
				}
				if (event.button == 2) return;
				var touchDate = event.target.id.split(/_AX_/g).last();
				monthPageUpdater.firstDateTime = touchDate.date().getTime();
				monthPageUpdater.watch();
				monthPageUpdater.update(monthPageUpdater.firstDateTime);
			});
			this.monthPageDates.bind("dragstart.axscheduler", function (event) {
				event.stopPropagation(); // disable  event
				return false;
			});
		}
	    //var targetHeight = cfg.target.height();
		var targetHeight = 1100;
		targetHeight = targetHeight - 72;
		cfg.target.find("tbody tr td").css({height:(targetHeight/6-1)});

		if (cfg.onchangeView && callNext != false) {
			cfg.onchangeView.call(
				cfg,
				{ viewType: cfg.viewType, modeType: cfg.modeType, stDate: calendarStartDate.print(), edDate: this.ceddate.print() }
			);
		}

	},
		/* { printMonthPage */
		selectingMonthPage: function (startDateTime, endDateTime) {
			var cfg = this.config;
			if (!cfg.editable) return;
			var startDate = (new Date(startDateTime)).print("yyyymmdd");
			var endDate = (new Date(endDateTime)).print("yyyymmdd");
			this.monthPageDates.removeClass("selecting");
			this.monthPageDates.each(function(){
				var dateID = this.id.split(/_AX_/g).last();
				//trace(dateID, startDate);
				if(dateID >= startDate && dateID <= endDate){
					axdom(this).addClass("selecting");
				}
			});
		},
		selectingMonthPageClear: function(){
			this.monthPageDates.removeClass("selecting");
		},
		onselectMonthPage: function(startDateTime, endDateTime){
			var cfg = this.config;
			var startDate = (new Date(startDateTime)).print("yyyy-mm-dd");
			var endDate = (new Date(endDateTime)).print("yyyy-mm-dd");
			if(cfg.onselectMonthPage && cfg.editable){
				cfg.onselectMonthPage.call(cfg, startDate, endDate);
			}
		},
		/* printMonthPage } */
	printMixPage: function (date, period, callNext) {
		var cfg = this.config;
		var basicDate = this.getBasicDate();
		if(date === undefined) date = basicDate;
		
		var calendarDate, calendarStartDate;
		if(cfg.viewType == "1week"){
			calendarDate = this.getCalendarStartDate(date);
			calendarStartDate = calendarDate.weekStartDate;
		}else{
			//period 에 따라 기간 변경
			calendarStartDate = date.date().add(-1);
		}
		
		var onclickday = this.onclickday.bind(this);

		var toDay = (new Date()).print().date();
		var setDate = (date) ? date.date() : (new Date()).print().date();

		var getWeek = function (vdate, daySeq) {
		    //현재 주차
		    var dayseq = daySeq || 0; //없으면 현재일
		    // 현재일자의 주차를 리턴한다.
		    if (vdate != undefined) {
		        //var tmp = new Date(vdate);
		        var tdate = new Date(vdate.getFullYear(), 0, 1, 12);
		    } else {
		        var tdate = new Date((new Date()).getFullYear(), 0, 1, 12);
		    }
		    var ndate = new Date();

		    //return Math.ceil((((ndate.add(-dayseq).getTime() - tdate.getTime()) / 86400000) + tdate.getDay() + 1) / 7);
		    return Math.ceil((((vdate.add(-dayseq).getTime() - tdate.getTime()) / 86400000) + tdate.getDay() + 1) / 7);
		}

		cfg.datePanel.html(calendarStartDate.print("yyyy-mm-dd") + " ~ " + calendarStartDate.add(period - 1).print("yyyy-mm-dd") + "(" + getWeek(calendarStartDate, 0) + "주차)");
		this.datePointer = {};
		
		var roopDate = calendarStartDate;
		var roopDates = [];
		this.cstdate = roopDate;

		var po = [], wi = 0;
		po.push("<div id=\"" + cfg.targetID + "_AX_box\" class=\"" + cfg.theme + " zoom\" onselectstart=\"return false;\">");
			po.push("<div id=\"", cfg.targetID + "_AX_calendarPanel", "\" class=\"calendarPanel\" style=\"\">");
				po.push("<div id=\"" + cfg.targetID + "_editSpace\" class=\"editSpace\"  style=\"height:20px;overflow:hidden;\"></div>");
				/* { calendar Table */
				po.push("<table cellspacing=\"0\" cellpadding=\"0\" class=\"scheduleTable\">");
					po.push("<thead>");
						po.push("<tr>");
						for (; wi < period; wi++) {

							if (cfg.viewWeekEnd || wi < 5) {

								var roopDateDay = roopDate.axGetDay(1);
								var dayValue, addClass = [], tdClass = [], ww = cfg.weeks[roopDateDay];
								dayValue = roopDate.print(this.config.printFullFormat);

								if (setDate.diff(roopDate) == 0) tdClass.push("setDate");
								if (toDay.diff(roopDate) == 0) tdClass.push("toDay");

								po.push("<td class=\"head_" + wi + " " + tdClass.join(" ") + "\" style=\"" + ww.style + "\">");
									po.push(dayValue);
									po.push("<span class=\"weekdayLabel\" id=\""+ cfg.targetID + "_AX_weekdayLabel_AX_" + roopDate.print("yyyymmdd") +"\"></span>");
								po.push("</td>");

								roopDates.push(roopDate);
								roopDate = roopDate.add(1);

							}
						}
						this.ceddate = roopDate.add(-1);
						po.push("</tr>");
					po.push("</thead>");
					po.push("<tbody>");

					/* { calendar tbody */

						po.push("<tr>");
						for (var di = 0; di < roopDates.length; di++) {

							var _roopDate = roopDates[di];
							this.datePointer["D" + _roopDate.print("yyyymmdd")] = {};
							var dayValue, addClass = [], tdClass = [];
							dayValue = (_roopDate.getDate() == 1) ? _roopDate.print(this.config.printFullFormat) : _roopDate.print(this.config.printFormat);

							if (setDate.diff(_roopDate) == 0) tdClass.push("setDate");
							if (toDay.diff(_roopDate) == 0) tdClass.push("toDay");
							po.push("<td class=\"datePanelblock bodyCol_" + di + " bodyRow_0 " + tdClass.join(" ") + "\" style=\"\" id=\"" + cfg.targetID + "_AX_D_AX_" + _roopDate.print("yyyymmdd") + "\">");
							/*
							
							*/
							po.push("</td>");
						}
						po.push("</tr>");
					
					/* calendar tbody } */
					po.push("</tbody>");
				po.push("</table>");
				/* calendar Table } */
			po.push('<a href="#" id="'+cfg.targetID + '_editSpace_expand" style="display:none;text-align:center;background:#eee;color:#444;text-decoration:none;line-height:20px;">모두보기</a>');
			po.push('</div>');
			po.push('<div id="', cfg.targetID + "_AX_box_AX_timePanel",'" class=\"timePanel\">');
				po.push("<div class='inBox' id='", cfg.targetID + "_AX_UIScrollTarget", "'>");

					po.push("<div class=\"timeBgBlock\">");
					for(var ti = 0;ti<cfg.timeset.length-1;ti=ti+2){
						po.push("<div class=\"timeBg\" id=\""+ cfg.targetID +"_AX_timeBg"+ ti +"\"></div>");
						po.push("<div class=\"timeBgHour\"></div>");
					}
					po.push("</div>");
					
					po.push("<div class=\"timeSelector bodyTimeTd\" id='", cfg.targetID + "_AX_timeSelector", "'></div>");

				/* { timePanel */
					po.push("<table cellspacing=\"0\" cellpadding=\"0\" class=\"timeTable\">");
					/* { timePanel tbody */
					po.push("<tbody>");
						po.push("<tr>");
							po.push("<td class=\"time_disp\">");
							for(var ti = 0;ti<cfg.timeset.length-1;ti=ti+2){
								var ts = cfg.timeset[ti];
								po.push("<div class=\"timeDisplay\">");
								po.push(ts.display);
								po.push("</div>");
							}
							po.push("</td>");
							for(var di = 0;di<roopDates.length;di++){
								po.push("<td class=\"bodyTimeTd bodyPlanTimeTd bodyCol_"+ di +"\" id=\"" + cfg.targetID + "_AX_plantime_AX_" + roopDates[di].print("yyyymmdd") + "\">");
								po.push("</td>");
								if(cfg.modeType == "act"){
									po.push("<td class=\"bodyTimeTd bodyActTimeTd bodyColAct\" id=\"" + cfg.targetID + "_AX_acttime_AX_" + roopDates[di].print("yyyymmdd") + "\">");
									po.push("</td>");
								}
							}
						po.push("</tr>");
					po.push("</tbody>");
					/* timePanel tbody } */
				po.push("</table>");
				/* timePanel } */
				
				po.push("<div class=\"editSpace\" id='", cfg.targetID + "_AX_timeEditSpace", "'></div>");
			po.push('</div>');
		po.push("</div>");

		cfg.target.html( po.join('') );
		
		cfg.calendarTimePanelScroll = null;
		
		cfg.calendarBox = axdom("#" + cfg.targetID + "_AX_box");
		cfg.calendarPanel = axdom("#" + cfg.targetID + "_AX_calendarPanel");
		cfg.calendarTimePanel = axdom("#" + cfg.targetID + "_AX_box_AX_timePanel");
		cfg.calendarTimePanelScroller = axdom("#" + cfg.targetID + "_AX_UIScrollTarget");
		cfg.calendarTimeSelector = axdom("#" + cfg.targetID + "_AX_timeSelector");
		cfg.editSpace = axdom("#" + cfg.targetID + "_editSpace");
		cfg.editSpace_expand = axdom("#" + cfg.targetID + "_editSpace_expand");
		cfg.editTimeSpace = axdom("#" + cfg.targetID + "_AX_timeEditSpace");
		
		this.roopDates = roopDates;


		//trace("printMixpage : " + cfg.editable);


			/*
			cfg.calendarPanel.find(".calendarDate").click(function () {
				var ids = this.id.split(/_AX_/g);
				var myDate = ids[(ids.length - 2)];
				onclickday(myDate);
			});
			*/

			this.monthPageDates = cfg.calendarPanel.find(".datePanelblock");
			/* { calendarPanel 선택기능 활성화 */
			/*
			var monthPageUpdater = this.monthPageUpdater;
			this.monthPageDates.bind("mousedown.axscheduler", function(event){
				if (event.button == 2) return;
				var touchDate = event.target.id.split(/_AX_/g).last();
				monthPageUpdater.firstDateTime = touchDate.date().getTime();
				monthPageUpdater.watch();
				monthPageUpdater.update(monthPageUpdater.firstDateTime);
			});
			this.monthPageDates.bind("dragstart.axscheduler", function (event) {
				event.stopPropagation(); // disable  event
				return false;
			});
			*/
			/* calendarPanel 선택기능 활성화 } */

			this.timePageDates = cfg.calendarTimePanel.find(".bodyTimeTd");
			/* { calendarTimePanel 선택기능 활성화 */
			var timePageUpdater = this.timePageUpdater;
			this.timePageDates.bind("mousedown.axscheduler", function (event) {
				if (event.button == 2) return;
				var eids = event.target.id.split(/_AX_/g);
				var touchDate = eids.last();
				
				if(cfg.editStartDate.date().diff(touchDate) < 0){
					//edit lock
					return;
				}				
				
				var pos = {
					y1: cfg.calendarTimePanel.offset().top,
					y2: cfg.calendarTimePanelScroller.position().top,
					y3: event.pageY
				};
				var realY = (((pos.y3 - pos.y1) - pos.y2) / 20).floor();
				//trace(realY);

				cfg.calendarTimeSelector.show();
				cfg.calendarTimeSelector.css({ left: axdom(event.target).position().left, top: realY * 20, height: 20, width: axdom(event.target).width() + 1 });

				timePageUpdater.selectDateType = eids[eids.length - 2];
				timePageUpdater.selectDate = touchDate;
				timePageUpdater.firstTime = realY;
				timePageUpdater.watch();
				timePageUpdater.update(timePageUpdater.firstTime);
				//cfg.timeset
			});
			this.timePageDates.bind("dragstart.axscheduler", function (event) {
				event.stopPropagation(); // disable  event
				return false;
			});

			if (cfg.timeItemContextMenu) {
				AXContextMenu.bind({
					id: cfg.targetID + "ContextMenuTimeItem",
					theme: cfg.timeItemContextMenu.theme,
					width: cfg.timeItemContextMenu.width,
					menu: cfg.timeItemContextMenu.menu
				});
				cfg.calendarTimePanel.bind("contextmenu", this.onContextmenuTimeItem.bind(this));
			}

		/* calendarTimePanel 선택기능 활성화 } */
		
		setTimeout(function(){

		    //cfg.calendarTimePanel.css({ height: $("#" + cfg.targetID + "_AX_UIScrollTarget").height() });
		    //cfg.calendarTimePanel.css({ height: cfg.calendarBox.height() - cfg.calendarPanel.innerHeight() });

		    if (cfg.setTimePageHeight) {
		        cfg.calendarTimePanel.css({ height: cfg.setTimePageHeight() - cfg.calendarTimePanel.offset().top });
		    } else {
		        cfg.calendarTimePanel.css({ height: $("#" + cfg.targetID + "_AX_UIScrollTarget").height() });
		    }

			cfg.onUpdateHeight();
		}, 10);
		
		
		setTimeout(function(){
			if(cfg.calendarTimePanelScroll){
				cfg.calendarTimePanelScroll.unbind();
				cfg.calendarTimePanelScroll = null;
			}
				cfg.calendarTimePanelScroll = new AXScroll();
				cfg.calendarTimePanelScroll.setConfig({
					targetID: cfg.targetID + "_AX_box_AX_timePanel",
					scrollID: cfg.targetID + "_AX_UIScrollTarget"
				});
				cfg.calendarTimePanelScroll.focusElement(cfg.targetID + "_AX_timeBg16");
		}, 200);
		

		if (cfg.onchangeView && callNext != false) {
			cfg.onchangeView.call(
				cfg,
				{ viewType: cfg.viewType, modeType: cfg.modeType, stDate: calendarStartDate.print(), edDate: this.ceddate.print() }
			);
		}
	},
		/* { printTimePage */
		selectingTimePage: function(startTime, endTime){
			var cfg = this.config;
			if (!cfg.editable) return;
			//trace(startTime, endTime);
			if (startTime >= 0 && endTime < cfg.timeset.length-1) {
				cfg.calendarTimeSelector.css({ top: startTime * 20, height: ((endTime + 1) - startTime) * 20 });
			}
		},
		selectingTimePageClear: function(){
			if(this.config.calendarTimeSelector) this.config.calendarTimeSelector.hide();
		},
		onselectTimePage: function(sType, sDate, startTime, endTime){
			var cfg = this.config;
			
			if (startTime < 0) startTime = 0;
			if (endTime > cfg.timeset.length-1) endTime = cfg.timeset.length-2;

			//trace(sType, sDate, startTime, endTime);
			
			var compareList;
			if(sType == "plantime"){ /* 계획 선택 */
				compareList = this.plantimeList;
			}else{ /* 실행 선택 */
				compareList = this.acttimeList;
			}
			var endHour = (endTime == cfg.timeset.length-1) ? "23:59" : cfg.timeset[(endTime+1)].hour;
			var startHour = cfg.timeset[startTime].hour;
			var error = null;
			axf.each(compareList, function(){
				if (this[cfg.reserveKeys.sdate].date().print("yyyymmdd") == sDate) {
					if (this[cfg.reserveKeys.stime].dec().number() < endHour.number() && this[cfg.reserveKeys.etime].dec().number() > startHour.number()) {
						error = { errorno: "ES1", fn: "onselectTimePage", type: "ES1", msg: "시간 겹칩", data: { sType: sType, sDate: sDate, startTime: startTime, endTime: endTime } };
						return false;
					} else if (this[cfg.reserveKeys.stime].dec().number() >= startHour.number() && this[cfg.reserveKeys.etime].dec().number() <= endHour.number()) {
						error = { errorno: "ES1", fn: "onselectTimePage", type: "ES1", msg: "시간 겹칩", data: { sType: sType, sDate: sDate, startTime: startTime, endTime: endTime } };
						return false;
					}
				}
			});
			
			if(error){
				if(cfg.onerror) cfg.onerror.call(cfg, error);
			}else{
				if (cfg.onselectTimePage && cfg.editable) cfg.onselectTimePage.call(cfg, sType, sDate.date().print(), startHour, endHour);
			}
		},
		/* printTimePage } */
	printListPage: function (arg1, callNext) {

		var cfg = this.config, _this = this;
		
		cfg.datePanel.html("목록보기");
		
		var po = [];
		po.push("<div id=\"" + cfg.targetID + "_AX_box\" class=\"" + cfg.theme + " AXGrid\">");
			po.push("<div id=\"" + cfg.targetID + "_AX_gridSearch\"></div>");
			po.push("<div class=\"AXHspace10\"></div>");
			po.push("<div id=\"" + cfg.targetID + "_AX_grid\" style=\"height:450px;\"></div>");
			po.push("<div class=\"AXHspace10\"></div>");
		po.push("</div>");
		
		cfg.target.html( po.join('') );
		
		this.list_mySearch = new AXSearch();
		this.list_mySearch.setConfig({
			targetID: cfg.targetID + "_AX_gridSearch",
			theme : "AXSearch",
			onsubmit: function(){
				
			},
			rows:[
				{display:true, addClass:"", style:"", list:[
//					{label:"", labelWidth:"", type:"selectBox", width:"150", key:"searchType", addClass:"", valueBoxStyle:"", value:"",
//						options:[{optionValue:"all", optionText:"전체보기"}, {optionValue:"open", optionText:"공개"}, {optionValue:"close", optionText:"비공개"}],
//						AXBind:{
//							type:"select", config:{
//								onChange:function(){
//									toast.push(Object.toJSON(this));
//								}
//							}
//						}
//					},
//					{label:"", labelWidth:"", type:"", width:"150", key:"searchQuery", addClass:"secondItem", valueBoxStyle:"padding-left:0px;", value:"",
//						onChange: function(){}
//					},
					{label:"조회기간", labelWidth:"60", type:"inputText", width:"70", key:"searchDateS", addClass:"", valueBoxStyle:"", value:this.roopDates.first().print(),
						onChange: function(){}
					},
					{label:"", labelWidth:"", type:"inputText", width:"90", key:"searchDateE", addClass:"secondItem", valueBoxStyle:"padding-left:0px;", value:this.roopDates.last().print(),
						AXBind:{
							type:"twinDate", config:{
								align:"right", valign:"top", startTargetID:"searchDateS", 
								onChange:function(){
									//toast.push(Object.toJSON(this));
								}
							}
						}
					},
					{label:"", labelWidth:"", type:"button", width:"80", key:"button", addClass:"Blue", valueBoxStyle:"padding-left:0px;padding-right:5px;", value:"조회",
						onclick: function(){
							var pars = _this.list_mySearch.getParam();
							var ajaxConfig = axf.copyObject(cfg.listConfig);

							if (ajaxConfig.ajaxPars != "") {
								ajaxConfig.ajaxPars += "&" + pars;
							} else {
								ajaxConfig.ajaxPars = pars;
							}

							_this.list_myGrid.setList(ajaxConfig);
						}
					}
				]}
			]
		});
		
		this.list_myGrid = new AXGrid();
		this.list_myGrid.setConfig({
			targetID : cfg.targetID + "_AX_grid",
			colHeadAlign: "center", // 헤드의 기본 정렬 값
			colGroup : [
//				{key: cfg.reserveKeys.schduleid, label:"번호", width:"40", align:"right", display : false}, 
//                {key: "gubun_tp", label:"업무구분", width:"50", align:"center", formatter: "dec" },
                {key:"work_rank", label:"우선순위", width:"25", align:"center"},
                {key: "prjnm", label: "프로젝트명", width: "70", formatter: "dec" },
				{key: "schedulename", label: "액티비티/업무명", width: "70", formatter: "dec" },
                {key: "plan_time", label:"계획시간", width:"25", align:"center", formatter:"dec"},
                {key: "plan_contents", label: "계획 상세업무", width: "*", align: "left", formatter:function() {
				    return (this.item.plan_contents || "").dec().crlf();
				}},
				{key: "act_time", label:"실적시간", width:"25", align:"center", formatter:"dec"},
                {key: "real_contents", label: "실적 상세업무", width: "*", align: "left", formatter:function() {
				    return (this.item.real_contents || "").dec().crlf();
				}},
                {key:"rt", label:"진척율", width:"25", align:"center"}
                //{key:"cost", label:"완료", width:"30", align:"right"},
				

			],
			body : {
				onclick: function(){
					//toast.push(Object.toJSON({index:this.index, r:this.r, c:this.c, item:this.item}));
				}
			}
		});
        var pars = _this.list_mySearch.getParam();
		var ajaxConfig = axf.copyObject(cfg.listConfig);

		if (ajaxConfig.ajaxPars != "") {
			ajaxConfig.ajaxPars += "&" + pars;
		} else {
			ajaxConfig.ajaxPars = pars;
		}

		this.list_myGrid.setList(ajaxConfig);

		//this.list_myGrid.setList(cfg.listConfig);
		
		
		if (cfg.onchangeView && callNext != false) {
			cfg.onchangeView.call(
				cfg,
				{ viewType: cfg.viewType, modeType: cfg.modeType, stDate: null, edDate: null }
			);
		}
	},

	setList: function(list){
		var cfg = this.config;
		this.list = list;

		$.each(this.list, function (lindex, L) {
			//this.duration = this.sdate.date().diff(this.edate) + 1;
			this.duration = this[cfg.reserveKeys.sdate].date().diff(this[cfg.reserveKeys.edate]) + 1;
		});

		this.list = this.list.sort(function (pItem, nItem) {
			var v1 = pItem.duration;
			var v2 = nItem.duration;
			if (v1 < v2) return 1;
			else if (v1 > v2) return -1;
			else if (v1 == v2) return 0;
		});
		
		return this.list;
	},
	setWeekList: function (list) {
		var cfg = this.config;
		this.weekList = list;

		$.each(this.weekList, function (lindex, L) {
			//this.duration = this.sdate.date().diff(this.edate) + 1;
			this.duration = this[cfg.reserveKeys.sdate].date().diff(this[cfg.reserveKeys.edate]) + 1;
		});

		this.weekList = this.weekList.sort(function (pItem, nItem) {
			var v1 = pItem.duration;
			var v2 = nItem.duration;
			if (v1 < v2) return 1;
			else if (v1 > v2) return -1;
			else if (v1 == v2) return 0;
		});

		return this.weekList;
	},
	printList: function(){
		var cfg = this.config, _this = this;
		var dayPanelHeight = cfg.target.find(".datePanelblock").height() - 25;
		var printItemCount = (dayPanelHeight / cfg.itemHeight).floor();
		var defaultTop = 25;

		var loopList;
		if (cfg.viewType == "1week") {
			printItemCount = 0;
			defaultTop = 3;
			loopList = this.weekList;
		} else {
			loopList = this.list;
		}
		var addedDotPosition = 0;

		var datePointer = this.datePointer;
		axf.each(datePointer, function (k, v) {
			datePointer[k] = {};
		});

		var maxDotPosition = 0;

		$("#" + cfg.targetID + "_editSpace").empty();

		for (var lindex = 0; lindex < loopList.length; lindex++) {
			var L = loopList[lindex];
			var itemColor = L[cfg.reserveKeys.color];

			// { for
				var roopDate = L[cfg.reserveKeys.sdate].date(), _roopDate = roopDate, roopEndDate = null, maxWidthForDayEnd = 7 - roopDate.axGetDay(1), itemID;

				if (maxWidthForDayEnd >= L.duration) {

					if (datePointer["D" + (itemID = roopDate.print("yyyymmdd"))]) {
	
						var pos = $("#" + cfg.targetID + "_AX_D_AX_" + itemID).position();
						var boxCss = { left: pos.left.number(), top: (pos.top.number() + defaultTop) };
	
						var dotPosition = 0;
						while (datePointer["D" + itemID][dotPosition] != undefined) {
							dotPosition++;
						}
						for (var d = 0; d < L.duration; d++) {
							var _dateID = _roopDate.print("yyyymmdd");
							if (datePointer["D" + _dateID]) {
								while (datePointer["D" + _dateID][dotPosition] != undefined) {
									dotPosition++;
								}
							}
							_roopDate = _roopDate.add(1);
						}
						for (var d = 0; d < L.duration; d++) {
							var dateID = roopDate.print("yyyymmdd");
							if (datePointer["D" + dateID]) {
								datePointer["D" + dateID][dotPosition] = L;
								if (dotPosition >= printItemCount && printItemCount != 0) {
									$("#" + cfg.targetID + "_AX_date_AX_" + roopDate.print("yyyymmdd")).find(".label").html("+" + (dotPosition - printItemCount + 1));
								}

								roopEndDate = roopDate;
							}
							roopDate = roopDate.add(1);
						}
						if(maxDotPosition < dotPosition) maxDotPosition = dotPosition;
						if (cfg.viewType == "M") boxCss.top += dotPosition * cfg.itemHeight;
						else boxCss.top += dotPosition * cfg.itemHeight2;
	
						var endpos = $("#" + cfg.targetID + "_AX_D_AX_" + roopEndDate.print("yyyymmdd")).position();
						var boxWidth = $("#" + cfg.targetID + "_AX_D_AX_" + roopEndDate.print("yyyymmdd")).width();
	
						//boxCss.width = (boxWidth) * this.duration - (7 - this.duration) + 3;
						boxCss.width = (endpos.left + boxWidth) - boxCss.left;
						
						var addClass = [itemColor];
						if (cfg.itemHeight == 21) {
							addClass.push("itemHeight21");
						}
						
						var po = [];
						po.push('<div id="SCH_AX_' + lindex + '_AX_0" class="scheduleItem dotPosition_' + dotPosition + ' scheduleItem_' + lindex + ' ' + addClass.join(" ") + '" style="left:' + boxCss.left + 'px;top:' + boxCss.top + 'px;width:' + boxCss.width + 'px;">');
						po.push(L[cfg.reserveKeys.schedulename].dec());
                        if (L[cfg.reserveKeys.stime] != undefined)
                        {
							po.push('<br />' + L[cfg.reserveKeys.stime].dec());
                        }
						po.push('</div>');
	
						$("#" + cfg.targetID + "_editSpace").append(po.join(''));
	
						if (addedDotPosition < dotPosition) addedDotPosition = dotPosition;
					}
				}else{
					var remainDuration = L.duration - maxWidthForDayEnd;
					var itemID, pos, boxCss, dotPosition = null;
					
					if (datePointer["D" + (itemID = roopDate.print("yyyymmdd"))]) {
	
						pos = $("#" + cfg.targetID + "_AX_D_AX_" + itemID).position();
						boxCss = { left: pos.left.number(), top: (pos.top.number() + defaultTop) };
	
						dotPosition = 0;
						while (datePointer["D" + itemID][dotPosition] != undefined) {
							dotPosition++;
						}
						if(L.schduleid == 1){
							//trace(dotPosition);
						}
						
						var _duration = maxWidthForDayEnd;
						for (var d = 0; d < _duration; d++) {
							var _dateID = _roopDate.print("yyyymmdd");
							if (datePointer["D" + _dateID]) {
								
								if(L.schduleid == 1){
									//trace( datePointer["D" + _dateID] );
								}
								
								while (datePointer["D" + _dateID][dotPosition] != undefined) {
									dotPosition++;
								}
							}
							_roopDate = _roopDate.add(1);
						}
						for (var d = 0; d < _duration; d++) {
							var dateID = roopDate.print("yyyymmdd");
							if (datePointer["D" + dateID]) {
								datePointer["D" + dateID][dotPosition] = L;
								if (dotPosition >= printItemCount && printItemCount != 0) {
									$("#" + cfg.targetID + "_AX_date_AX_" + roopDate.print("yyyymmdd")).find(".label").html("+" + (dotPosition - printItemCount + 1));
								}
								roopEndDate = roopDate;
							}
							roopDate = roopDate.add(1);
						}
						if(maxDotPosition < dotPosition) maxDotPosition = dotPosition;
						if (cfg.viewType == "M") boxCss.top += dotPosition * cfg.itemHeight;
						else boxCss.top += dotPosition * cfg.itemHeight2;
	
						var endpos = $("#" + cfg.targetID + "_AX_D_AX_" + roopEndDate.print("yyyymmdd")).position();
						var boxWidth = $("#" + cfg.targetID + "_AX_D_AX_" + roopEndDate.print("yyyymmdd")).width();
						boxCss.width = (endpos.left + boxWidth) - boxCss.left;
	
						//boxCss.width -= 7;
						
						var addClass = [itemColor];
						if(remainDuration > 0){
							addClass.push("notEndScheduleItem");
						}
						
						var po = [];
						po.push('<div id="SCH_AX_' + lindex + '_AX_0" class="scheduleItem dotPosition_' + dotPosition + ' scheduleItem_' + lindex + ' ' + addClass.join(" ") + '" style="left:' + boxCss.left + 'px;top:' + boxCss.top + 'px;width:' + boxCss.width + 'px;">');
						po.push(L[cfg.reserveKeys.schedulename].dec());

						if (L[cfg.reserveKeys.stime] != undefined)
                        {
							po.push('<br />' + L[cfg.reserveKeys.stime].dec());
                        }

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
						_roopDate = roopDate;
						if (datePointer["D" + (itemID = roopDate.print("yyyymmdd")) ]) {
							
							if (datePointer["D" + itemID]) {
								
								pos = $("#" + cfg.targetID + "_AX_D_AX_" + itemID).position();
								boxCss = { left: pos.left.number(), top: (pos.top.number() + defaultTop) };
								
								dotPosition = 0;
								while (datePointer["D" + itemID][dotPosition] != undefined) {
									dotPosition++;
								}

								for (var d = 0; d < _duration; d++) {
									var _dateID = _roopDate.print("yyyymmdd");
									if (datePointer["D" + _dateID]) {
										while (datePointer["D" + _dateID][dotPosition] != undefined) {
											dotPosition++;
										}			
									}
									_roopDate = _roopDate.add(1);
								}
								for (var d = 0; d < _duration; d++) {
									var dateID = roopDate.print("yyyymmdd");
									if (datePointer["D" + dateID]) {
										datePointer["D" + dateID][dotPosition] = L;
										if (dotPosition >= printItemCount && printItemCount != 0) {
											$("#" + cfg.targetID + "_AX_date_AX_" + roopDate.print("yyyymmdd")).find(".label").html("+" + (dotPosition - printItemCount + 1));
										}
										roopEndDate = roopDate;
									}
									roopDate = roopDate.add(1);
								}
								if(maxDotPosition < dotPosition) maxDotPosition = dotPosition;
								if (cfg.viewType == "M") boxCss.top += dotPosition * cfg.itemHeight;
								else boxCss.top += dotPosition * cfg.itemHeight2;
	
								var endpos = $("#" + cfg.targetID + "_AX_D_AX_" + roopEndDate.print("yyyymmdd")).position();
								var boxWidth = $("#" + cfg.targetID + "_AX_D_AX_" + roopEndDate.print("yyyymmdd")).width();
	
								//boxCss.width = (boxWidth) * _duration - (7 - _duration) + 3;
								boxCss.width = (endpos.left + boxWidth) - boxCss.left;

								var addClass = [itemColor];
								addClass.push("notStartScheduleItem");
								if(remainDuration-7 > 0){
									addClass.push("notEndScheduleItem");
								}
	
								var po = [];
								po.push('<div id="SCH_AX_' + lindex + '_AX_' + subIndex + '" class="scheduleItem dotPosition_' + dotPosition + ' scheduleItem_' + lindex + ' ' + addClass.join(" ") + '" style="left:' + boxCss.left + 'px;top:' + boxCss.top + 'px;width:' + boxCss.width + 'px;">');
								//po.push(L.schedulename);
								po.push(L[cfg.reserveKeys.schedulename].dec());
								if (L[cfg.reserveKeys.stime] != undefined)
                                {
							        po.push('<br />' + L[cfg.reserveKeys.stime].dec());
                                }
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
			// for }
		}

		if (cfg.editable) {
			cfg.editSpace.find(".scheduleItem").bind("mouseover.axscheduler", function () {
				var ids = this.id.split(/_AX_/g);
				var lindex = ids[ids.length - 2];
				cfg.editSpace.find(".scheduleItem_" + lindex).addClass("hover");
			});
			cfg.editSpace.find(".scheduleItem").bind("mouseout.axscheduler", function () {
				var ids = this.id.split(/_AX_/g);
				var lindex = ids[ids.length - 2];
				cfg.editSpace.find(".scheduleItem_" + lindex).removeClass("hover");
			});

			var _list = loopList;
			cfg.editSpace.find(".scheduleItem").bind("click.axscheduler", function () {
				var ids = this.id.split(/_AX_/g);
				var lindex = ids[ids.length - 2];
				/* { cfg.onclickList */
				if (cfg.onclickList) {
					var sendObj = {
						index: lindex,
						item: _list[lindex]
					};
					cfg.onclickList.call(sendObj, lindex, _list[lindex]);
				}
				/* cfg.onclickList } */
			});
		}
		if(printItemCount != 0){
			for (var a = printItemCount; a < addedDotPosition+1; a++) {
				cfg.editSpace.find(".dotPosition_" + a).hide();
			}
		} else if (cfg.viewType == "1week" && cfg.calendarTimePanel) {
			// cfg.itemHeight 값은 월별보기에서 아이템의 높이 값 주별보기에서는 다를 수 있음.
			
			setTimeout(function(){
				
				var scpHeight = maxDotPosition * cfg.itemHeight2;
				var showItemCount = 1;
				if(scpHeight > cfg.itemHeight2*showItemCount){
					cfg.editSpace.css({"overflow":"hidden", height:(showItemCount * cfg.itemHeight2 + 55)});
					$("#" + cfg.targetID + "_AX_calendarPanel").css({ height: (showItemCount * cfg.itemHeight2 + 75) }); //  펼쳐보기 영역까지 확장
					$("#" + cfg.targetID + "_AX_calendarPanel").find("table.scheduleTable tbody td").css({ height: (showItemCount * cfg.itemHeight2 + 25) });
					
					cfg.editSpace_expand.css({display:"block"});
					cfg.editSpace_expand.show();				
					cfg.editSpace_expand.data("expand", "false");
					
					cfg.editSpace_expand.unbind("click").bind("click", function(){
						if(cfg.editSpace_expand.data("expand") == "true"){
							cfg.editSpace_expand.html("펼쳐보기");
							cfg.editSpace_expand.data("expand", "false");
							cfg.editSpace.css({"overflow":"hidden", height:(showItemCount * cfg.itemHeight2 + 55)});
							$("#" + cfg.targetID + "_AX_calendarPanel").css({ height: (showItemCount * cfg.itemHeight2 + 75) }); //  펼쳐보기 영역까지 확장
							$("#" + cfg.targetID + "_AX_calendarPanel").find("table.scheduleTable tbody td").css({ height: (showItemCount * cfg.itemHeight2 + 25) });
						}else{
							cfg.editSpace_expand.html("축소하기");
							cfg.editSpace.css({"overflow":"hidden", height:(maxDotPosition * cfg.itemHeight2 + 55)});
							$("#" + cfg.targetID + "_AX_calendarPanel").css({ height: (maxDotPosition * cfg.itemHeight2 + 75) }); //  펼쳐보기 영역까지 확장
							$("#" + cfg.targetID + "_AX_calendarPanel").find("table.scheduleTable tbody td").css({ height: (maxDotPosition * cfg.itemHeight2 + 25) });
							cfg.editSpace_expand.data("expand", "true");	
						}
						
					    if (cfg.setTimePageHeight) {
					        cfg.calendarTimePanel.css({ height: cfg.setTimePageHeight() - cfg.calendarTimePanel.offset().top });
					    } else {
					        cfg.calendarTimePanel.css({ height: $("#" + cfg.targetID + "_AX_UIScrollTarget").height() });
					    }
						
					});
				}else{
					cfg.editSpace_expand.hide();
					cfg.editSpace.css({"overflow":"hidden", height:(maxDotPosition * cfg.itemHeight2 + 55)});
					$("#" + cfg.targetID + "_AX_calendarPanel").css({ height: (maxDotPosition * cfg.itemHeight2 + 55) });
					$("#" + cfg.targetID + "_AX_calendarPanel").find("table.scheduleTable tbody td").css({ height: (maxDotPosition * cfg.itemHeight2 + 25) });
				}
				_this.printTimeList();
			}, 10);
			
			setTimeout(function(){	
			    if (cfg.setTimePageHeight) {
			        cfg.calendarTimePanel.css({ height: cfg.setTimePageHeight() - cfg.calendarTimePanel.offset().top });
			    } else {
			        cfg.calendarTimePanel.css({ height: $("#" + cfg.targetID + "_AX_UIScrollTarget").height() });
			    }
			    
				
				//cfg.calendarTimePanelScroll = new AXScroll();
				//cfg.calendarTimePanelScroll.setConfig({
				//	targetID: cfg.targetID + "_AX_box_AX_timePanel",
				//	scrollID: cfg.targetID + "_AX_UIScrollTarget"
				//});
				//cfg.calendarTimePanelScroll.focusElement(cfg.targetID + "_AX_timeBg16");
				
	
				cfg.onUpdateHeight();
			}, 50);
		}

	},
	printDayList: function(){
		var cfg = this.config;
		var basicDate = this.getBasicDate();

		var dayPanelHeight = cfg.target.find(".datePanelblock").height() - 25;
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
			//if (basicDate.diff(this.sdate) <= 0 && basicDate.diff(this.edate) >= 0) {
			if (basicDate.diff(this[cfg.reserveKeys.sdate]) <= 0 && basicDate.diff(this[cfg.reserveKeys.edate]) >= 0) {

				var myTop = boxCss.top + dotPosition * cfg.itemHeight;
				boxCss.width = (endpos.left + boxWidth) - boxCss.left - 2;

				if (dotPosition >= printItemCount) {
					$("#" + cfg.targetID + "_AX_" + roopDate.print(cfg.valueFormat) + "_AX_date").find(".label").html("+" + (dotPosition - printItemCount + 1));
				}

				var po = [];
				po.push('<div id="SCH_AX_' + lindex + '_AX_0" class="scheduleItem dotPosition_' + dotPosition + ' scheduleItem_' + lindex + '" style="left:' + boxCss.left + 'px;top:' + myTop + 'px;width:' + boxCss.width + 'px;">');
				//po.push(L.schedulename);
				po.push(L[cfg.reserveKeys.schedulename]);
				po.push('</div>');

				$("#" + cfg.targetID + "_editSpace").append(po.join(''));

				dotPosition++;

			}
		});


		$("#" + cfg.targetID + "_editSpace").find(".scheduleItem").bind("mouseover", function () {
			var ids = this.id.split(/_AX_/g);
			var lindex = ids[ids.length - 2];
			$("#" + cfg.targetID + "_editSpace").find(".scheduleItem_" + lindex).addClass("hover");
		});
		$("#" + cfg.targetID + "_editSpace").find(".scheduleItem").bind("mouseout", function () {
			var ids = this.id.split(/_AX_/g);
			var lindex = ids[ids.length - 2];
			$("#" + cfg.targetID + "_editSpace").find(".scheduleItem_" + lindex).removeClass("hover");
		});

		var _list = this.list;
		$("#" + cfg.targetID + "_editSpace").find(".scheduleItem").bind("click", function () {
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
		po.push('<div id="SCH_AX_' + lindex + '_AX_0" class="scheduleItem dotPosition_' + dotPosition + ' scheduleItem_' + lindex + '" style="left:' + boxCss.left + 'px;top:' + boxCss.top + 'px;width:' + boxCss.width + 'px;">');
		//po.push(L.schedulename);
		po.push(L[cfg.reserveKeys.schedulename]);
		po.push('</div>');

		$("#" + cfg.targetID + "_editSpace").append(po.join(''));


	},
	
	printTimeList: function(){
		var _this = this;
		this.timeDataSet = {};
		//_this.printTimeListAct();
		
		if(this.printTimeListObs) clearTimeout(this.printTimeListObs);
		this.printTimeListObs = setTimeout(function(){
			_this.printTimeListAct();
		}, 10);
	},
	
	printTimeListAct: function(){
		if(this.printTimeListObs) clearTimeout(this.printTimeListObs);
		var cfg = this.config, _this = this;
		//cfg.editTimeSpace
		//trace(this.plantimeList);
		
		axdom("#" + cfg.targetID + "_AX_calendarPanel").find(".weekdayLabel").empty();
		axf.each(this.roopDates, function(){
			_this.timeDataSet[this.print("yyyymmdd")] = {p:0, a:0};
		});
		
		var planPo = this.getPlanTimeList();
		var actPo = this.getActTimeList();

		//cfg.editTimeSpace.empty();		
		axdom("#" + cfg.targetID + "_AX_timeEditSpace").empty();

		cfg.editTimeSpace.append(planPo.join(''));
		cfg.editTimeSpace.append(actPo.join(''));

		axf.each(this.roopDates, function(){
			axdom("#" + cfg.targetID + "_AX_weekdayLabel_AX_" + this.print("yyyymmdd")).html(" : " + _this.timeDataSet[this.print("yyyymmdd")].p/2 + "/" + _this.timeDataSet[this.print("yyyymmdd")].a/2 );
		});
		
		if (cfg.editable) {

			cfg.editTimeSpace.find(".timeZoneItem").bind("mouseover.axscheduler", function (event) {	
				
				if (event.button == 2) return;
				var eTarget = event.target;
				if (eTarget.tagName == "SPAN") eTarget = eTarget.parentNode;

				var eids = eTarget.id.split(/_AX_/g), item;
				if (eids[eids.length - 2] == "plan") {
					item = _this.plantimeList[eids[eids.length - 1]];
				} else {
					item = _this.acttimeList[eids[eids.length - 1]];
				}
				if(cfg.editStartDate.date().diff(item.sdate) < 0){
					//edit lock
					return;
				}
				
							
				axdom(this).addClass("hover");
			});
			cfg.editTimeSpace.find(".timeZoneItem").bind("mouseout.axscheduler", function (event) {
				axdom(this).removeClass("hover");
			});

			/* { itmeItem 선택기능 활성화 */
			var timeItemUpdater = this.timeItemUpdater;
			cfg.editTimeSpace.find(".timeZoneItem").bind("mousedown.axscheduler", function (event) {
				if (event.button == 2) return;

				var eTarget = event.target;
				if (eTarget.tagName == "SPAN") eTarget = eTarget.parentNode;

				var eids = eTarget.id.split(/_AX_/g), item;
				var itemID = eids[eids.length - 2] + "_AX_" + eids[eids.length - 1];


				var pos = {
					y1: cfg.calendarTimePanel.offset().top,
					y2: cfg.calendarTimePanelScroller.position().top,
					y3: event.pageY
				};
				var realY = (((pos.y3 - pos.y1) - pos.y2) / 20).floor();

				if (axdom(eTarget).hasClass("stimeControl")) {
					timeItemUpdater.updateType = "stime";
				} else if (axdom(eTarget).hasClass("etimeControl")) {
					timeItemUpdater.updateType = "etime";
				} else {
					timeItemUpdater.updateType = "move";
				}

				if (eids[eids.length - 2] == "plan") {
					item = _this.plantimeList[eids[eids.length - 1]];
				} else {
					item = _this.acttimeList[eids[eids.length - 1]];
				}
				
				
				if(cfg.editStartDate.date().diff(item.sdate) < 0){
					//edit lock
					return;
				}
				
				
				timeItemUpdater.itemID = itemID;
				timeItemUpdater.firstTime = realY;


				timeItemUpdater.init(item.stime, item.etime);
				timeItemUpdater.watch();
			});
			cfg.editTimeSpace.bind("dragstart.axscheduler", function (event) {
				event.stopPropagation(); // disable  event
				return false;
			});
			/* itmeItem 선택기능 활성화 } */
		}
	},
	
	onContextmenuTimeItem: function(event){
		var cfg = this.config;
		if (!cfg.editable) return;
		/* event target search - */
		if (event.target.id == "") return;
		var eid = event.target.id.split(/_AX_/g);
		var eventTarget = event.target;
		if (eventTarget.tagName.toLowerCase() == "input") return; /*input 인 경우 제외 */
		var myTarget = this.getEventTarget({
			evt: eventTarget, evtIDs: eid,
			until: function (evt, evtIDs) { return (axdom(evt.parentNode).hasClass("editSpace")) ? true : false; },
			find: function (evt, evtIDs) { return (axdom(evt).hasClass("timeZoneItem")) ? true : false; }
		});
		/* event target search ------------------------ */

		if (myTarget) {
			/*colHeadTool ready */
			var targetID = myTarget.id;
			var itemIndex = targetID.split(/_AX_/g).last();
			var ids = targetID.split(/_AX_/g);

            var item = [];
            if (ids[2] == "plan")
            {
                item = this.plantimeList[itemIndex];
            }
            else
            {
                item = this.acttimeList[itemIndex];
            }
            

			AXContextMenu.open({ id: cfg.targetID + "ContextMenuTimeItem", filter: cfg.timeItemContextMenu.filter, sendObj: { item: item, index: ids } }, event); /* event 직접 연결 방식 */
		} else {
			//AXContextMenu.open({ id: cfg.targetID + "ContextMenuTimeItem", filter: cfg.timeItemContextMenu.filter, sendObj: null }, event); /* event 직접 연결 방식 */
		}
		return false;
	},
		getPlanTimeList: function(){
			var cfg = this.config, _this = this;
			
			var po = [];
			for(var zindex = 0;zindex < this.plantimeList.length;zindex++){
				var ZS = this.plantimeList[zindex];
				var stime, etime, styles = [];
				for(var tt = 0;tt < cfg.timeset.length;tt++){
					if (cfg.timeset[tt].hour == ZS[cfg.reserveKeys.stime].dec()) stime = tt;
					if (cfg.timeset[tt].hour == ZS[cfg.reserveKeys.etime].dec()) etime = tt;
				}
				
				var sdateID = cfg.targetID + "_AX_plantime_AX_" + ZS[cfg.reserveKeys.sdate].date().print("yyyymmdd");
				trace(sdateID);
				var sdateTD = cfg.calendarTimePanel.find("#" + sdateID);
				if (AXgetId(sdateID)) {
					styles.push("left:" + (sdateTD.position().left+3) + "px");
					styles.push("width:" + (sdateTD.width()-6) + "px");
					styles.push("top:" + stime * 20 + "px");
					styles.push("height:" + (etime - stime) * 20 + "px");
					
					po.push("<div class=\"timeZoneItem\" id=\"" + cfg.targetID + "_AX_TZItem_AX_plan_AX_" + zindex + "\" style=\"" + styles.join(";") + "\" title='" + ZS[cfg.reserveKeys.schedulename].dec() + "'>");
					po.push(ZS[cfg.reserveKeys.schedulename].dec());
						po.push("<span id=\"" + cfg.targetID + "_AX_TZItemSpan_AX_plan_AX_" + zindex + "\">" + ZS.detail_nm.dec().crlf() + "</span>");
					po.push("	<div class=\"stimeControl\" id=\"" + cfg.targetID + "_AX_TZItemS_AX_plan_AX_" + zindex + "\">" + ZS[cfg.reserveKeys.stime].dec() + "</div>");
					po.push("	<div class=\"etimeControl\" id=\"" + cfg.targetID + "_AX_TZItemE_AX_plan_AX_" + zindex + "\">" + ZS[cfg.reserveKeys.etime].dec() + "</div>");
					po.push("</div>");
				}
				
				try{
					_this.timeDataSet[ZS[cfg.reserveKeys.sdate].date().print("yyyymmdd")].p = _this.timeDataSet[ZS[cfg.reserveKeys.sdate].date().print("yyyymmdd")].p.number() + (etime - stime).number();
				}catch(e){
				}
			}
			
			return po;
		},
		getActTimeList: function(){
			var cfg = this.config, _this = this;

			var po = [];
			for (var zindex = 0; zindex < this.acttimeList.length; zindex++) {
				var ZS = this.acttimeList[zindex];
				var stime, etime, styles = [];
				for (var tt = 0; tt < cfg.timeset.length; tt++) {
					if (cfg.timeset[tt].hour == ZS[cfg.reserveKeys.stime].dec()) stime = tt;
					if (cfg.timeset[tt].hour == ZS[cfg.reserveKeys.etime].dec()) etime = tt;
				}

				var sdateID = cfg.targetID + "_AX_acttime_AX_" + ZS[cfg.reserveKeys.sdate].date().print("yyyymmdd");
				var sdateTD = cfg.calendarTimePanel.find("#" + sdateID);
				if (AXgetId(sdateID)) {
					styles.push("left:" + (sdateTD.position().left+3) + "px");
					styles.push("width:" + (sdateTD.width() - 6) + "px");
					styles.push("top:" + stime * 20 + "px");
					styles.push("height:" + (etime - stime) * 20 + "px");

					po.push("<div class=\"timeZoneItem act-timeZoneItem\" id=\"" + cfg.targetID + "_AX_TZItem_AX_act_AX_" + zindex + "\" style=\"" + styles.join(";") + "\" title='" + ZS[cfg.reserveKeys.schedulename].dec() + "1" + "'>");
					po.push(ZS[cfg.reserveKeys.schedulename].dec());
					po.push("<span id=\"" + cfg.targetID + "_AX_TZItemSpan_AX_act_AX_" + zindex + "\">" + ZS.detail_nm.dec().crlf() + "</span>");
					po.push("	<div class=\"stimeControl\" id=\"" + cfg.targetID + "_AX_TZItemS_AX_act_AX_" + zindex + "\">");
                    po.push(        "<div style=\"float:left;\" id=\"" + cfg.targetID + "_AX_TZItemPoint_AX_act_AX_" + zindex + "\">"+ ZS[cfg.reserveKeys.stime].dec() +"</div>");
                    po.push("   </div>");
					po.push("	<div class=\"etimeControl\" id=\"" + cfg.targetID + "_AX_TZItemE_AX_act_AX_" + zindex + "\">" + ZS[cfg.reserveKeys.etime].dec() + "</div>");
                    //돌발업무일 경우 상단에 빨강 표시
                    if (ZS.popgubun.dec() == "Y")
                    {
                        po.push(        "<div style=\"position:absolute;top:0px;right:0px;width:6px;height:10px; background-color:Red;\">&nbsp;</div>");
                    }
					po.push("</div>");
					
					_this.timeDataSet[ZS[cfg.reserveKeys.sdate].date().print("yyyymmdd")].a = _this.timeDataSet[ZS[cfg.reserveKeys.sdate].date().print("yyyymmdd")].a.number() + (etime - stime).number();
				}
			}

			return po;
		},
		
		/* { updateTimeItem */
		onupdateTimeItem: function (itemID, startTime, endTime) {
			if (startTime >= 0 && endTime < this.config.timeset.length - 1) {
				axdom("#" + this.config.targetID + "_AX_TZItem_AX_" + itemID).css({ top: startTime * 20, height: ((endTime) - startTime) * 20 });
				axdom("#" + this.config.targetID + "_AX_TZItemS_AX_" + itemID).text(this.config.timeset[startTime].hour); // 시간라벨 변경
				axdom("#" + this.config.targetID + "_AX_TZItemE_AX_" + itemID).text((this.config.timeset[endTime] || { hour: "23:59" }).hour);
			}
		},
		updateTimeItem: function(itemID, startTime, endTime, updateType){
			var cfg = this.config, compareList, item;
			//trace(itemID);
			var eids = itemID.split(/_AX_/g);
			if(eids[0] == "plan"){
				item = this.plantimeList[eids[1]];
			}else{
				item = this.acttimeList[eids[1]];
			}
			
			if (startTime < 0) startTime = 0;
			if (endTime > cfg.timeset.length - 1) endTime = cfg.timeset.length - 2;
			var isChanged = false;
			if(item[cfg.reserveKeys.stime].dec() != cfg.timeset[startTime].hour || item[cfg.reserveKeys.etime].dec() != cfg.timeset[endTime].hour) isChanged = true; // 아이템 시간값이 변경 된 경우

			if(isChanged){ // 시간이 변경 된 경우 다른 데이터와 비교 하여 변경해도 되는지 검증 합니다.
				if(eids[0] == "plan"){
					compareList = this.plantimeList;
				}else{
					compareList = this.acttimeList;
				}
				
				//trace(endTime);

				var endHour = (cfg.timeset[endTime] || { hour: "23:59" }).hour;
				var startHour = cfg.timeset[startTime].hour;
				var error = null;
					
				axf.each(compareList, function(lidx, L){
					if(this[cfg.reserveKeys.sdate] == item[cfg.reserveKeys.sdate] && lidx != eids[1]){
						if( this[cfg.reserveKeys.stime].dec().number() < endHour.number() && this[cfg.reserveKeys.etime].dec().number() > startHour.number() ){
							//trace(this[cfg.reserveKeys.stime].dec().number(), this[cfg.reserveKeys.etime].dec().number(), startHour.number(), endHour.number());
							error = { errorno: "EU1", fn: "updateTimeItem", type: "EU1", msg: "시간 겹칩", data: { sType: eids[0], index: eids[1], item: item } };
							return false;					
						} else if (this[cfg.reserveKeys.stime].dec().number() >= startHour.number() && this[cfg.reserveKeys.etime].dec().number() <= endHour.number()) {
							error = { errorno: "EU1", fn: "updateTimeItem", type: "EU1", msg: "시간 겹칩", data: { sType: eids[0], index: eids[1], item: item } };
							return false;
						}
					}
				});
				
				if(error){
					if(cfg.onerror) cfg.onerror.call(cfg, error);
					// rollBack item
					this.updateTimeItemClear(eids[0], eids[1]);
					return error;
				}
				
				item.stime = cfg.timeset[startTime].hour;
				item.etime = (cfg.timeset[endTime] || { hour: "23:59" }).hour;
			}

			if(isChanged){
				if(cfg.onupdateTimeItem) cfg.onupdateTimeItem.call(item, eids[1], item, eids[0]);
			}else{
				if(cfg.onclickTimeItem) cfg.onclickTimeItem.call(item, eids[1], item, eids[0]);
			}
		},
		updateTimeItemClear: function(sType, index){
			var cfg = this.config, item;
			if(sType == "plan"){
				item = this.plantimeList[index];
			}else{
				item = this.acttimeList[index];
			}
			
			var stime, etime;
			for (var tt = 0; tt < cfg.timeset.length; tt++) {
				if (cfg.timeset[tt].hour == item[cfg.reserveKeys.stime].dec()) stime = tt;
				if (cfg.timeset[tt].hour == item[cfg.reserveKeys.etime].dec()) etime = tt;
			}
			
			axdom("#" + cfg.targetID + "_AX_TZItem_AX_"+ sType +"_AX_" + index).css({top: stime*20, height: ((etime) - stime)*20});
			axdom("#" + cfg.targetID + "_AX_TZItemS_AX_"+ sType +"_AX_" + index).text( cfg.timeset[stime].hour ); // 시간라벨 변경
			axdom("#" + cfg.targetID + "_AX_TZItemE_AX_"+ sType +"_AX_" + index).text( cfg.timeset[etime].hour );
			
		},
		/* updateTimeItem } */

		validateTime: function (itemID, sDate, sType, startTime, endTime) {

			var cfg = this.config, compareList, item;
			
			if (sType == "plan") {
				compareList = this.plantimeList;
			} else {
				compareList = this.acttimeList;
			}

			var stime, etime, styles = [];
			for (var tt = 0; tt < cfg.timeset.length; tt++) {
				if (cfg.timeset[tt].hour == startTime) stime = tt;
				if (cfg.timeset[tt].hour == endTime) etime = tt;
			}

			//trace(itemID, sDate, sType, startTime, endTime);

			var startHour = cfg.timeset[stime].hour;
			var endHour = (cfg.timeset[etime] || { hour: "23:59" }).hour;
			
			var result = true;

			axf.each(compareList, function (lidx, L) {

				if (this[cfg.reserveKeys.sdate] == sDate && this[cfg.reserveKeys.schduleid] != itemID) {
					//trace(this[cfg.reserveKeys.stime].dec().number(), this[cfg.reserveKeys.etime].dec().number(), startHour.number(), endHour.number());

					if (this[cfg.reserveKeys.stime].dec().number() < endHour.number() && this[cfg.reserveKeys.etime].dec().number() > startHour.number()) {
						result = false;
						return false;
					} else if (this[cfg.reserveKeys.stime].dec().number() >= startHour.number() && this[cfg.reserveKeys.etime].dec().number() <= endHour.number()) {
						result = false;
						return false;
					}
				}
			});
			
			return result;

		},

		
	setPlanTimeList: function(list){
		var cfg = this.config;
		$.each(list, function () {
			this.stime = this.stime.dec();
			this.etime = this.etime.dec();
		});
		this.plantimeList = list;
		return this.plantimeList;
	},
	setActTimeList: function(list){
		var cfg = this.config;
		$.each(list, function () {
			this.stime = this.stime.dec();
			this.etime = this.etime.dec();
		});
		this.acttimeList = list;
		return this.acttimeList;
	},

	removePlanTimeList: function (schduleid) {
		var cfg = this.config;
		var findIndex = 0;

		for (var zindex = 0; zindex < this.plantimeList.length; zindex++) {
			var item = this.plantimeList[zindex];

			//trace(item[cfg.reserveKeys.schduleid], schduleid);

			if (item[cfg.reserveKeys.schduleid] == schduleid) {
				findIndex = zindex;
			}
		}

		//trace(  AXgetId(cfg.targetID + "_AX_TZItem_AX_plan_AX_" + findIndex) );

		//$("#" + cfg.targetID + "_AX_TZItem_AX_plan_AX_" + findIndex).remove();

	},
	removeActTimeList: function (schduleid) {
		var cfg = this.config;
		var findIndex = 0;
		for (var zindex = 0; zindex < this.acttimeList.length; zindex++) {
			var item = this.acttimeList[zindex];
			if (item[cfg.reserveKeys.schduleid] == schduleid) {
				findIndex = zindex;
			}
		}
		$("#" + cfg.targetID + "_AX_TZItem_AX_act_AX_" + findIndex).remove();
	},


	setListConfig: function(config){
		var cfg = this.config;
		axf.each(config, function(k, v){
			cfg.listConfig[k] = v;
		});
		if (cfg.viewType == "List") {
			var pars = this.list_mySearch.getParam();
			var ajaxConfig = axf.copyObject(cfg.listConfig);

			if (ajaxConfig.ajaxPars != "") {
				ajaxConfig.ajaxPars += "&" + pars;
			} else {
				ajaxConfig.ajaxPars = pars;
			}

			//trace(ajaxConfig);

			this.list_myGrid.setList(ajaxConfig);
		}
	},
	changeView: function () {
		var cfg = this.config;

		var stDate = null, edDate = null;
		if (cfg.viewType == "M" || cfg.viewType == "1week") {
			stDate = this.roopDates.first().print();
			edDate = this.roopDates.last().print();
		}

		if (cfg.onchangeView) {
			cfg.onchangeView.call(
				cfg,
				{ viewType: cfg.viewType, modeType: cfg.modeType, stDate: stDate, edDate: edDate }
			);
		}
	},
	editStatus: function(TF){
		var cfg = this.config;
		//trace(cfg.editable, TF);
		if (cfg.editable != TF) {
			//this.reloadPrintCalendar();
			//this.config.editable = TF;
			cfg.editable = TF;
		}

	},

	viewWeekEnd: function(TF){
		this.config.viewWeekEnd = TF;
		this.printCalendar();
	},

	nothing: function () { }
} );
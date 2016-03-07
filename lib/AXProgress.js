/* AXISJ Javascript UI Framework */
/* http://www.axisj.com, license : http://www.axisj.com/license */
/**
 * AXProgress
 * @class AXProgress
 * @extends AXJ
 * @version v1.1
 * @author tom@axisj.com
 * @logs
 "2012-12-19 오후 5:47:58",
 "2014-02-03 오후 9:29:34 : tom count 표시문제 해결"
 "2014-10-15 groovedk : 주석추가"
 */

var AXProgress = Class.create(AXJ, {
/**
 * @method AXProgress.initialize
 * @param {fn} -
 * @param {jsObject} [options] - config.options 에 할당 / 추가
 * @description
 * 프로그래스바를 시작합니다. options 를 지정하지 않으면 setConfig에 지정한 속성을 이용하여 프로그래스바를 시작합니다.
 * @example
 ```
var myProgress = new AXProgress();

myProgress.setConfig({
	theme:"AXlineProgress", //[String = "AXlineProgress"] - 프로그래스 CSS Class 이름 AXlineProgress, AXCircleProgress 클래스가 기본 제공됩니다.
	totalCount:100,         //{number} - 프로그래스 전체 카운트 수
	width:400,              //{number} - 프로그래스바 너비
	top:100,                //{number} - 프로그래스바 표시 위치
	title:"AXProgress BAR", //{String} - 프로그래스바 제목
	duration:50             //{number = 50} - 프로그래스바의 애니메이션 속도 값 입니다.
});

 ```
 */
	initialize: function(AXJ_super) {
		AXJ_super();
		this.Observer = null;
		//this.config.easing = {duration:10, easing:""};
		this.config.duration = 50;
		this.config.theme = "AXlineProgress";
	},
	init: function(){
		
	},

/**
 * @method AXProgress.start
 * @param {fn} - callBack function
 * @param {jsObject} [options] - config.options 에 할당 / 추가
 * @description
 * 프로그래스바를 시작합니다. options 를 지정하지 않으면 setConfig에 지정한 속성을 이용하여 프로그래스바를 시작합니다.
 * @example
 ```
var myProgress = new AXProgress();

myProgress.start(function(){
	trace(this);
	if(this.isEnd){
		myProgress.close();
		mask.close();
		toast.push("progress end");
	}else{
		// 무언가 처리를 해줍니다.	대부분 비동기 AJAX 통신 처리 구문을 수행합니다.
		myProgress.update(); // 프로그레스의 다음 카운트를 시작합니다.
	}
});

// options 지정방식
mask.open();
myProgress.start(function(){
    if(this.isEnd){
		myProgress.close();
		mask.close();
		toast.push("progress end");
	}else{
		// 무언가 처리를 해줍니다.	대부분 비동기 AJAX 통신 처리 구문을 수행합니다.
		myProgress.update(); // 프로그레스의 다음 카운트를 시작합니다.
	}},
    {
        totalCount:10,
        width:500,
        top:200,
        title:"Set Options Type Progress"
    }
);

 ```
 */
	start: function(callBack, options){
		var config = this.config;
		config.callBack = callBack;
		
		config.options = options;
		
		var totalCount = config.totalCount || 100;
		this.loadedCount = 0;
		var loadedCount = this.loadedCount;
		var loadedRate = (loadedCount / totalCount * 100).round(1);
		var progressWidth = config.width || 200;
		var progressTitle = config.title || "";
		var progressTop = config.top || 0;
		this.progressID = "progress_AX_"+AXUtil.timekey();
		var progressID = this.progressID;
		this.progressStop = false;
		var theme = config.theme;
		
		var hasCancel = false;
		
		if(config.options){
			if(config.options.totalCount) totalCount = config.options.totalCount;
			if(config.options.width) progressWidth = config.options.width;
			if(config.options.top) progressTop = config.options.top;
			if(config.options.title) progressTitle = config.options.title;
			if(config.options.cancel) hasCancel = config.options.cancel;
			if(config.options.theme) theme = config.options.theme;
		}

		var po = [];
		po.push("<div class=\"AXprogressTray "+theme+"\" id=\""+progressID+"_AX_tray\" align=\"center\" style=\"top:"+progressTop+"px;\">");
		if(progressTitle != ""){
			po.push("	<div class=\"AXprogressTitle\" id=\""+progressID+"_AX_title\" style=\"width:"+progressWidth+"px;\" align=\"left\">"+progressTitle+"</div>");
		}
		po.push("<div class=\"AXprogress\" id=\""+progressID+"\" style=\"width:"+progressWidth+"px;\">");
		po.push("	<div class=\"AXprogressContainer\" id=\""+progressID+"_AX_container\" align=\"left\" style=\"overflow:hidden;\">");
		if(theme == "AXlineProgress") po.push("		<div class=\"AXprogressBar\" id=\""+progressID+"_AX_bar\" style=\"width:"+loadedRate+"%;\"></div>");
		else  po.push("		<div class=\"AXprogressBar\" id=\""+progressID+"_AX_bar\"></div>");

		po.push("	</div>");

        po.push("    <div class=\"AXprogressLoadedText\" id=\""+progressID+"_AX_loadedText\">"+loadedRate+"%</div>");

		if(hasCancel){
			po.push(" <a href=\"#axexec\" id=\""+progressID+"_AX_cancel\" class=\"AXprogressCancel\">Cancel</a>");
		}

		po.push("</div>");
				
		po.push("</div>");
		this.progress = axdom(po.join(''));
		axdom(document.body).append(this.progress);
		
		axdom("#"+progressID+"_AX_cancel").bind("click", this.cancel.bind(this));
        this.loadedCount = 1;
		this.update();
	},

/**
 * @method AXProgress.update
 * @description - 프로그레스바 진행 상태를 업데이트 합니다.
 * @example
 ```
myProgress.update();
 ```
 */
	update: function(){
		var config = this.config;
		var theme = config.theme;
		
		if(this.progressStop) return;

		var totalCount = config.totalCount || 100;

		if(config.options){
			if(config.options.totalCount) totalCount = config.options.totalCount;
			if(config.options.theme) theme = config.options.theme;
		}
		
		var loadedCount = this.loadedCount;
		
		var progressID = this.progressID;
		var loadedRate = ((loadedCount-1) / (totalCount.number()) * 100).round(1);
		if(loadedRate > 100) loadedRate = 100;
		axdom("#"+progressID+"_AX_loadedText").html(loadedRate+"%<span>"+(loadedCount-1).money()+"/"+totalCount.money()+"</span>");
		
		if(theme == "AXlineProgress"){
			axdom("#"+progressID+"_AX_bar").animate(
				{width:loadedRate+"%"},
				config.duration, "", 
				function(){
					if(config.callBack){
						config.callBack.call({
							totalCount:totalCount,
							loadedCount:loadedCount,
							loadedRate:(loadedCount / (totalCount.number()+1) * 100).round(1),
							isEnd:((loadedCount-1) == totalCount)
						});
					}
				}
			);
		}else{
			//circle
			setTimeout(function(){
				axdom("#"+progressID+"_AX_bar").addClass("percent"+((loadedCount / (totalCount.number()) * 100).round(0) / 5).round() * 5);
				if(config.callBack){
					config.callBack.call({
						totalCount:totalCount,
						loadedCount:loadedCount-1,
						loadedRate:(loadedCount / (totalCount.number()+1) * 100).round(1),
						isEnd:((loadedCount-1) == totalCount)
					});
				}				
			}, config.duration);
		}
		this.loadedCount++;
	},

/**
 * @method AXProgress.cancel
 * @description - 프로그래스바 진행을 중지합니다.
 * @example
 ```
myProgress.cancel();
 ```
 */
	cancel: function(){
		var config = this.config;
		var progressID = this.progressID;
		var cancelMSg = AXConfig.AXProgress.cancelMsg;
		if(config.options){
			var cancel = config.options.cancel;
			if(cancel.confirmMsg) cancelMSg = cancel.confirmMsg;
			if(confirm(cancelMSg)){
				this.progressStop = true;
				var totalCount = config.totalCount || 100;
				var loadedCount = this.loadedCount;
				cancel.oncancel.call({
					totalCount:totalCount,
					loadedCount:loadedCount,
					loadedRate:(loadedCount / totalCount * 100).round(1),
					isEnd:(loadedCount == totalCount)
				});
			}else{
				
			}
		}
	},

/**
 * @method AXProgress.restart
 * @description - 중지된 프로그레스바 진행상태를 재시작 합니다.
 * @example
 ```
myProgress.restart();
 ```
 */
	restart: function(){
		this.progressStop = false;
		this.update();
    },

/**
 * @method AXProgress.close
 * @description - 프로그레스바 창을 닫습니다.
 * @example
 ```
myProgress.close();
 ```
 */
	close: function(){
		var config = this.config;
		var progressID = this.progressID;
		axdom("#"+progressID+"_AX_tray").remove();
	}
});
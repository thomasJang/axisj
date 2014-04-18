AXISJ를 사용하시려는 페이지의 코딩 안에 AXISJ 의 공통적으로 사용되는 CSS 와 JS 파일 을 링크시킵니다. 

<!-- css block -->
<link rel="stylesheet" type="text/css" href="/axisj/ui/default/AXJ.css">
<!-- css block -->
<!-- js block -->
<script type="text/javascript" src="/axisj/jquery/jquery.min.js"></script>
<script type="text/javascript" src="/axisj/lib/AXJ.js"></script>


그 외에 실제로 사용하실 기능의 CSS 와 JS도 함께 링크시킵니다. 
다음 예제는 사용자가 AXISJ 의 여러 기능 중 AXProgress 를 사용할 시의 가이드입니다. 

<script type="text/javascript" src="/axisj/lib/AXProgress.js"></script>

AXISJ 기능 중 사용할 기능을 자바스크립트 안에 오브젝트로 생성하고 변수를 선언해 줍니다. 
다음 예제는 AXProgress 기능을 자바스크립트 안에 선언할 때의 가이드 입니다.

<script type="text/javascript">
var myProgress = new AXProgress();
var fnObj = {
	pageStart: function(){
	    myProgress.setConfig({
			totalCount:50, 
			width:300, 
			top:100, 
			title:"AXProgress BAR",
			duration:50 // 프로세스바의 애니메이션 속도 값 입니다.
		});
		//반드시는 아니지만 페이지 준비가 된 후에 코드를 적용해 줍니다.
	},
	progressStart: function(){
		mask.open();
		myProgress.start(function(){
			trace(this);
			if(this.isEnd){
				myProgress.close();
				mask.close();
				toast.push("progress end");
			}else{
				// 무언가 처리를 해줍니다.	
				// 대부분 비동기 AJAX 통신 처리 구문을 수행합니다.
				myProgress.update(); 
				// 프로그레스의 다음 카운트를 시작합니다.
			}	
		});
	}
};

$(document.body).ready(function(){
	setTimeout(fnObj.pageStart, 1);
});
</script>



여기까지의 과정을 마치셨으면, 이제 AXISJ의 기능을 사용하실 준비가 되어있으며, 미리 생성해 놓은 오브젝트를 html 의body 안에 선언하여 사용시면 됩니다. 

<body>
	<div style="padding:20px;">
		<h2>AXProgress</h2>
		<input type="button" value="AXProgress Start" 
		class="AXButton Red" onclick="fnObj.progressStart();">
		<div class="Hspace20"></div>
	</div>
</body>


스타일시트를 수정해야 한다면 페이지 상단에 스타일을 오버라이딩 하세요

<style type="text/css">
.AXlineProgress .AXprogressTitle{
	color:#000;
	font-weight:bold;
}
.AXlineProgress .AXprogress .AXprogressContainer .AXprogressLoadedText{
	color:#000;
}
</style>



웹사이트
http://www.axisj.com

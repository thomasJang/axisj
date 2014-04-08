
{
	id:"/API/jQueryExtends/bindTooltip",
	head:{
		type:"method", 
		name:"bindTooltip",
		flnm:"jQueryExtends.bindTooltip",
		file:"_AXJ/lib/AXJ.js",
		tags:"jQueryExtends,bindTooltip"
	},
	h1:"bindTooltip",
	desc: "툴팁을 바인드 하는 대상의 '아이디+\"_AX_tooltip\"'를 아이디로 하는 엘리먼트를 대상이 마우스 오버 이벤트 발생 할때 툴팁으로 표시 합니다. ",
	define: "$(\"jQuerySelector\").bindTooltip(configs);",
	arguments:[
		{k:"configs", v:{
			direction:"(\"auto\" | \"top\" | \"bottom\") 툴팁의 표시 위치",
			width:"(Number) HTML 엘리먼트 타겟아이디"
		}}
	],
	returns: {k:"", v:""},
	samplecode:[
'//AXPopOverTooltip (bindTooltip) 다중바인드 형식 지원됨.',
'$(".tooltipbind").bindTooltip({width:300});'
	],
	reference:[],
	extendForm:[
		{
			samplecode:[
				'<div style="position:relative;">',
				'	<button class="AXButton tooltipbind" onclick="" id="tooltip0"><div class="black_help">도움말</div></button>',
				'	<div id="tooltip0_AX_tooltip" class="AXTooltipContent">',
				'		AXCore 에서는 자바스크립트 자료형에 대한 prototype 확장 메소드, ',
				'		AXJ 클래스 원형, AXUtil 개체, AXReq(AJAX통신용) 클래스, AXCalendar 클래스, AXContext 클래스, AXPopOver 클래스, AXMask 클래스, AXNotification 클래스, ',
				'		AXScroll 클래스, AXMultiSelect 클래스, jQuery extend(eventType, easing) 구문 등을 포함하고 있습니다. ',
				'	</div>',
				'	<button class="AXButton tooltipbind" onclick="" id="tooltip2"><div class="black_help">도움말</div></button>',
				'	<div id="tooltip2_AX_tooltip" class="AXTooltipContent">',
				'		<div style="border:1px dashed #ccc;padding:10px;background:#fff;">',
				'		2가지 파일 <b>(/_AXJ/lib/AXJ.js, /_AXJ/ui/[themeName]/AXJ.css)</b>을 html 페이지에 <br/>',
				'		import 한 경우 사용이 가능한 core 기능에 대한 설명 입니다. ',
				'		</div>',
				'	</div>',
				'	<button class="AXButton tooltipbind" onclick="" id="tooltip3"><div class="black_help">도움말</div></button>',
				'	<div id="tooltip3_AX_tooltip" class="AXTooltipContent">',
				'		AXJ.css에는 기본 버튼 스타일, AXButton.css 에는 색이 들어간 버튼스타일이 정의 되어있습니다. ',
				'		<input type="button" value="버튼" class="AXButton" />',
				'	</div>',
				'</div>'
			],
			example:[
		'<div style="position:relative;">',
		'	<button class="AXButton tooltipbind" onclick="" id="tooltip0"><div class="black_help">도움말</div></button>',
		'	<div id="tooltip0_AX_tooltip" class="AXTooltipContent">',
		'		AXCore 에서는 자바스크립트 자료형에 대한 prototype 확장 메소드, ',
		'		AXJ 클래스 원형, AXUtil 개체, AXReq(AJAX통신용) 클래스, AXCalendar 클래스, AXContext 클래스, AXPopOver 클래스, AXMask 클래스, AXNotification 클래스, ',
		'		AXScroll 클래스, AXMultiSelect 클래스, jQuery extend(eventType, easing) 구문 등을 포함하고 있습니다. ',
		'	</div>',
		'	<button class="AXButton tooltipbind" onclick="" id="tooltip2"><div class="black_help">도움말</div></button>',
		'	<div id="tooltip2_AX_tooltip" class="AXTooltipContent">',
		'		<div style="border:1px dashed #ccc;padding:10px;background:#fff;">',
		'		2가지 파일 <b>(/_AXJ/lib/AXJ.js, /_AXJ/ui/[themeName]/AXJ.css)</b>을 html 페이지에 <br/>',
		'		import 한 경우 사용이 가능한 core 기능에 대한 설명 입니다. ',
		'		</div>',
		'	</div>',
		'	<button class="AXButton tooltipbind" onclick="" id="tooltip3"><div class="black_help">도움말</div></button>',
		'	<div id="tooltip3_AX_tooltip" class="AXTooltipContent">',
		'		AXJ.css에는 기본 버튼 스타일, AXButton.css 에는 색이 들어간 버튼스타일이 정의 되어있습니다. ',
		'		<input type="button" value="버튼" class="AXButton" />',
		'	</div>',
		'</div>'
			],
			exampleFn:[
		'$(".tooltipbind").bindTooltip({width:300});	'
			]
		},
		{
			samplecode:[
				'//AXPopOverTooltip (bindTooltip) 방향설정 방식',
				'$("#tooltip4").bindTooltip({direction:"bottom", width:300}); //{direction:"[auto|top|bottom]"}',
				'$("#tooltip5").bindTooltip({direction:"top", width:300}); //{direction:"[auto|top|bottom]"}',
				'$("#tooltip6").bindTooltip({direction:"auto", width:300}); //{direction:"[auto|top|bottom]"}'
			]
		},
		{
			samplecode:[
'<div style="position:relative;">	',
'	<button class="AXButton" onclick="" id="tooltip4"><div class="black_help">Bottom</div></button>',
'	<div id="tooltip4_AX_tooltip" class="AXTooltipContent">',
'		AXCore 에서는 자바스크립트 자료형에 대한 prototype 확장 메소드, ',
'		AXJ 클래스 원형, AXUtil 개체, AXReq(AJAX통신용) 클래스, AXCalendar 클래스, AXContext 클래스, AXPopOver 클래스, AXMask 클래스, AXNotification 클래스, ',
'		AXScroll 클래스, AXMultiSelect 클래스, jQuery extend(eventType, easing) 구문 등을 포함하고 있습니다. ',
'	</div>',
'	<button class="AXButton" onclick="" id="tooltip5"><div class="black_help">Top</div></button>',
'	<div id="tooltip5_AX_tooltip" class="AXTooltipContent">',
'		AXCore 에서는 자바스크립트 자료형에 대한 prototype 확장 메소드, ',
'		AXJ 클래스 원형, AXUtil 개체, AXReq(AJAX통신용) 클래스, AXCalendar 클래스, AXContext 클래스, AXPopOver 클래스, AXMask 클래스, AXNotification 클래스, ',
'		AXScroll 클래스, AXMultiSelect 클래스, jQuery extend(eventType, easing) 구문 등을 포함하고 있습니다. ',
'	</div>',
'	<button class="AXButton" onclick="" id="tooltip6"><div class="black_help">Auto</div></button>',
'	<div id="tooltip6_AX_tooltip" class="AXTooltipContent">',
'		AXCore 에서는 자바스크립트 자료형에 대한 prototype 확장 메소드, ',
'		AXJ 클래스 원형, AXUtil 개체, AXReq(AJAX통신용) 클래스, AXCalendar 클래스, AXContext 클래스, AXPopOver 클래스, AXMask 클래스, AXNotification 클래스, ',
'		AXScroll 클래스, AXMultiSelect 클래스, jQuery extend(eventType, easing) 구문 등을 포함하고 있습니다. ',
'	</div>',
'</div>'
			],
			example:[
'<div style="position:relative;">',
'	<button class="AXButton" onclick="" id="tooltip4"><div class="black_help">Bottom</div></button>',
'	<div id="tooltip4_AX_tooltip" class="AXTooltipContent">',
'		AXCore 에서는 자바스크립트 자료형에 대한 prototype 확장 메소드, ',
'		AXJ 클래스 원형, AXUtil 개체, AXReq(AJAX통신용) 클래스, AXCalendar 클래스, AXContext 클래스, AXPopOver 클래스, AXMask 클래스, AXNotification 클래스, ',
'		AXScroll 클래스, AXMultiSelect 클래스, jQuery extend(eventType, easing) 구문 등을 포함하고 있습니다. ',
'	</div>',
'	<button class="AXButton" onclick="" id="tooltip5"><div class="black_help">Top</div></button>',
'	<div id="tooltip5_AX_tooltip" class="AXTooltipContent">',
'		AXCore 에서는 자바스크립트 자료형에 대한 prototype 확장 메소드, ',
'		AXJ 클래스 원형, AXUtil 개체, AXReq(AJAX통신용) 클래스, AXCalendar 클래스, AXContext 클래스, AXPopOver 클래스, AXMask 클래스, AXNotification 클래스, ',
'		AXScroll 클래스, AXMultiSelect 클래스, jQuery extend(eventType, easing) 구문 등을 포함하고 있습니다. ',
'	</div>',
'	<button class="AXButton" onclick="" id="tooltip6"><div class="black_help">Auto</div></button>',
'	<div id="tooltip6_AX_tooltip" class="AXTooltipContent">',
'		AXCore 에서는 자바스크립트 자료형에 대한 prototype 확장 메소드, ',
'		AXJ 클래스 원형, AXUtil 개체, AXReq(AJAX통신용) 클래스, AXCalendar 클래스, AXContext 클래스, AXPopOver 클래스, AXMask 클래스, AXNotification 클래스, ',
'		AXScroll 클래스, AXMultiSelect 클래스, jQuery extend(eventType, easing) 구문 등을 포함하고 있습니다. ',
'	</div>',
'</div>'
			],
			exampleFn: [
'$("#tooltip4").bindTooltip({direction:"bottom", width:300}); //{direction:"[auto|top|bottom]"}',
'$("#tooltip5").bindTooltip({direction:"top", width:300}); //{direction:"[auto|top|bottom]"}',
'$("#tooltip6").bindTooltip({direction:"auto", width:300}); //{direction:"[auto|top|bottom]"}'			
			]
		}
	]
}
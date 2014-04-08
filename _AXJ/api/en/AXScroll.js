
{
	id:"/API/Classes/AXScroll",
	head:{
		type:"Class", 
		name:"AXScroll",
		flnm:"Classes.AXScroll",
		file:"_AXJ/lib/AXJ.js",
		tags:"Class,AXScroll"
	},
	h1:"AXScroll",

	items: [
		{
			name:		"initialize", 
			type:		"method", 
			desc:		"클래스를 초기화합니다. 초기화 한 오브젝트를 변수에 담아 제어할 수 있습니다.", 
			define:		"new AXScroll();", 
			arguments:	[],
			returns:		{k:"", v:""},
			samplecode:	["var myUIScroll = new AXScroll();"],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"setConfig", 
			type:		"method", 
			desc:		"선언된 스크롤 클래스를 사용하기 위해 속성을 정의합니다.",
			define:		"_AXScroll.setConfig(configs);",
			arguments:	[
				{k:"configs", v:{
					targetID:"스크롤 대상을 감싸고 있는 컨테이너 엘리먼트 아이디",
					scrollID:"스크롤 대상 엘리먼트 아이디",
					touchDirection:"true|false 터치 스크롤 할때 스크롤 방향 false 이면 역방향 움짐임"
				}}
			],
			returns:		{k:"", v:""},
			samplecode:	[
				"myUIScroll.setConfig({",
				"	targetID:\"UIScrollContainer\",",
				"	scrollID:\"UIScrollTarget\",",
				"	touchDirection:false",
				"});"
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"resizeScroll", 
			type:		"method", 
			desc:		"스크롤 처리 대상의 사이즈를 재정의 합니다. 스크롤 대상의 크기가 변경되었을 때 호출",
			define:		"_AXScroll.resizeScroll();",
			arguments:	[],
			returns:		{k:"", v:""},
			samplecode:	["myUIScroll.resizeScroll();"],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"focusElement", 
			type:		"method", 
			desc:		"스크롤 오브젝트 안에 엘리먼트를 포커스 합니다.",
			define:		"_AXScroll.focusElement(String)",
			arguments:	[
				{
					k:"String", v:"포커스 할 대상 엘리먼트 아이디"
				}
			],
			returns:		{k:"", v:""},
			samplecode:	["myUIScroll.focusElement(\"resizer01\");"],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"scrollTop", 
			type:		"method", 
			desc:		"스크롤 포지션을 원하는 포지션으로 이동합니다.",
			define:		"_AXScroll.scrollTop(Number)",
			arguments:	[
				{
					k:"Number", v:"scrollTop"
				}
			],
			returns:		{k:"", v:""},
			samplecode:	["myUIScroll.scrollTop(0);"],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"unbind", 
			type:		"method", 
			desc:		"스크롤을 해제합니다.",
			define:		"_AXScroll.unbind()",
			arguments:	[],
			returns:		{k:"", v:""},
			samplecode:	["myUIScroll.unbind();"],
			example:[],
			exampleFn:[],
			reference:	[]
		}		
	]
}
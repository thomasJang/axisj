
{
	id:"/API/Classes/AXSearch",
	head:{
		type:"Class", 
		name:"AXSearch",
		flnm:"Classes.AXSearch",
		file:"_AXJ/lib/AXSearch.js",
		tags:"Class,AXSearch"
	},
	h1:"AXSearch",

	items: [
		{
			name:		"initialize", 
			type:		"method", 
			desc:		"클래스를 초기화 합니다. 초기화 한 오브젝트를 변수에 담아 제어할 수 있습니다.",
			define:		"new AXSearch();",
			arguments:	[],
			returns:		{k:"", v:""},
			samplecode:	["var mySearch = new AXSearch();"],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"setConfig",
			type:		"method", 
			desc:		"선언된 클래스를 사용하기 위해 속성을 정의합니다.",
			define:		"_AXSearch.setConfig(configs);",
			arguments:	[
				{k:"configs", v:{
					targetID:"AXSearch 클래스 코딩이 처리될 HTML 엘리먼트 타겟아이디",
					theme : "AXSearch CSS Class 이름",
					onsubmit: "Function AXSearch 가 onsubmit 이벤트 발생되었을 때 연결되는 콜백함수",
					rows:{
						display:"true|false 해당 줄의 노출 여부. 숨겨진 row의 경우 사용자의 선택으로 활성화 처리할 수 있습니다.", 
						addClass:"row에 추가될 CSS 클래스", 
						style:"row에 추가될 CSS 클래스", 
						list:{
							label:"아이템 라벨", 
							labelWidth:"라벨너비", 
							type:"아이템 타입 ( link | checkBox | radioBox | selectBox | inputText | button | submit )", 
							width:"아이템 너비", 
							key:"아이템 유니크 키", 
							addClass:"아이템 엘리먼트에 추가될 CSS 클래스", 
							valueBoxStyle:"아이템 엘리먼트에 추가될 CSS", 
							value:"아이템 value ( options 가 정의되는 아이템 link | checkBox | radioBox | selectBox 에는 정의할 수 없습니다 )",
							options:{
								optionValue:"all", 
								optionText:"전체보기"
							}, 
							AXBind:{
								type:"selector | select | date | twinDate", 
								config:"AX 개체에 전달된 config 속성"
							},
							onclick:"onclick 이벤트 바인드",
							onChange:"onchange 이벤트 바인드"
						}
					}
				}}
			],
			returns:		{k:"", v:""},
			samplecode:	[
				'mySearch.setConfig({',
				'	targetID:"AXSearchTarget",',
				'	theme : "AXSearch",',
				'	onsubmit: function(){',
				'		fnObj.search1(); // 버튼이 선언되지 않았거나 submit 개체가 있는 경우 발동 합니다.',
				'	},',
				'	rows:[',
				'		{display:true, addClass:"gray", style:"", list:[',
				'			{label:"공개설정", labelWidth:"100", type:"link", width:"", key:"openType", addClass:"", valueBoxStyle:"", value:"open",',
				'				options:[',
				'					{optionValue:"all", optionText:"전체보기"},',
				'					{optionValue:"open", optionText:"공개"},',
				'					{optionValue:"close", optionText:"비공개"},',
				'					{optionValue:"close2", optionText:"비공개2", display:false},',
				'					{optionValue:"close3", optionText:"비공개3", display:false},',
				'					{optionValue:"close4", optionText:"비공개4", display:false}',
				'				],',
				'				onChange: function(selectedObject, value){',
				'',
				'				}',
				'			}',
				'		]}',
				'	]',
				'});'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"getItemId", 
			type:		"method", 
			desc:		"모달의 기본 너비 속성을 변경하고 창이 열려 있는 상태이면 동적으로 창의 크기도 변경합니다. (단, openDIV 로 모달이 오픈된 경우는 해당사항 없음)",
			define:		"_AXSearch.getItemId(String);",
			arguments:	[{k:"String", v:"아이템 유니크 키"}],
			returns:		{k:"String", v:"아이템 엘리먼트 키"},
			samplecode:	[
				'var myID = mySearch.getItemId("selectbox");',
				'$("#"+myID).append("<option value=1>1</option>")'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"setItemValue", 
			type:		"method", 
			desc:		"모달의 기본 너비 속성을 변경하고 창이 열려있는 상태이면 동적으로 창의 크기도 변경합니다. (단, openDIV 로 모달이 오픈된 경우는 해당사항 없음)",
			define:		"_AXSearch.setItemValue(String[, value]);",
			arguments:	[{k:"String", v:"아이템 유니크 키"}],
			returns:		{k:"String|Array", v:"단일 속성인 대상에는 String, 다중 속성인 대상에는 Array 로 값을 지정할 수 있습니다. value 가 지정되지 않은 경우 빈 값으로 처리합니다."},
			samplecode:	[
				'mySearch.setItemValue("checkbox", ["all","open"]);',
				'mySearch.setItemValue("radiobox");',
				'mySearch.setItemValue("inputText2"); // 입력된 값을 지웁니다.'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"getParam", 
			type:		"method", 
			desc:		"입력된 값들을 파라미터 형태로 추출 합니다.",
			define:		"_AXSearch.getParam();",
			arguments:	[],
			returns:		{k:"String", v:"파라미터 형태로 값을 반환합니다."},
			samplecode:	[
				'var pars = mySearch2.getParam();',
				'trace(pars);',
				'// a=11&b=22'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		}
	]
}
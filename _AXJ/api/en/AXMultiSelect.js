
{
	id:"/API/Classes/AXMultiSelect",
	head:{
		type:"Class", 
		name:"AXMultiSelect",
		flnm:"Classes.AXMultiSelect",
		file:"_AXJ/lib/AXMultiSelect.js",
		tags:"Class,AXMultiSelect"
	},
	h1:"AXMultiSelect",

	items: [
		{
			name:		"initialize", 
			type:		"method", 
			desc:		"클래스를 초기화 합니다. 초기화 한 오브젝트를 변수에 담아 제어할 수 있습니다.",
			define:		"new AXMultiSelect();",
			arguments:	[],
			returns:		{k:"", v:""},
			samplecode:	["var mycalendar = new AXMultiSelect();"],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"setConfig", 
			type:		"method", 
			desc:		"선언된 클래스를 사용하기 위해 속성을 정의합니다.",
			define:		"_AXMultiSelect.setConfig(configs);",
			arguments:	[
				{k:"configs", v:{
					selectStage       : "설렉트 대상이 담겨 있는 엘리먼트 아이디",
					selectClassName   : "셀렉트 대상의 클래스 이름",
					beselectClassName : "셀렉트 대상이 선택되었을때 셀렉트 대상에 추가될 클래스 이름",
					selectingClassName: "마우스로 선택 중일때 셀렉트 대상에 추가될 클래스 이름"
				}}
			],
			returns:		{k:"", v:""},
			samplecode:	[
				"multiSelector.setConfig({",
				"	selectStage       : \"selectStageBox\",",
				"	selectClassName   : \"readyselect\",",
				"	beselectClassName : \"beSelected\",",
				"	selectingClassName: \"AX_selecting\"",
				"});"
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"getSelects", 
			type:		"method", 
			desc:		"셀렉트된 대상들의 엘리먼트 배열을 반환합니다.",
			define:		"_AXMultiSelect.getSelects();",
			arguments:	[],
			returns:		{k:"Array", v:"selectedElements"},
			samplecode:	[
				'var selectsId = [];',
				'var selectedElements = multiSelector.getSelects();',
				'$.each(selectedElements, function(){',
				'	selectsId.push(this.id);',
				'});',
				'toast.push(selectsId.join(","));'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		}
	]
}
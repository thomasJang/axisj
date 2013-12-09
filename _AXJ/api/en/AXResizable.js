
{
	id:"/API/Classes/AXResizable",
	head:{
		type:"Class", 
		name:"AXResizable",
		flnm:"Classes.AXResizable",
		file:"_AXJ/lib/AXJ.js",
		tags:"Class,AXResizable"
	},
	h1:"AXResizable",

	items: [
		{
			name:		"initialize", 
			type:		"method", 
			desc:		"리사이저 클래스를 초기화 합니다. 초기화 한 오브젝트를 변수에 담아 제어할 수 있습니다.",
			define:		"new AXResizable();",
			arguments:	[],
			returns:		{k:"", v:""},
			samplecode:	["var MyResizable = new AXResizable();"],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"setConfig", 
			type:		"method", 
			desc:		"선언된 리사이즈 클래스를 사용하기 위해 속성을 정의합니다.",
			define:		"_AXResizable.setConfig();",
			arguments:	[],
			returns:		{k:"", v:""},
			samplecode:	["MyResizable.setConfig();"],
			example:[],
			exampleFn:[],
			reference:	[
				{anchor:"{id:\"/api/Classes/AXJ\", focus:\"AXJ-setConfig\"}", name:"AXJ.setConfig"}
			]
		},
		{
			name:		"bind", 
			type:		"method", 
			desc:		"리사이즈 처리할 대상을 바인드합니다.",
			define:		"_AXResizable.bind(configs);",
			arguments:	[
				{
					k:"configs", v: {
						id:"엘리먼트 아이디",
						minWidth:"최소 너비", minHeight:"최소 높이", 
						maxWidth:"최대 너비", maxHeight:"최대 높이",
						animate: "{easing:\"bounceOut\", duration:500}",
						aspectRatio: "가로 대 세로의 비율",
						snap:"리사이즈 스냅",
						onChange: "리사이즈 되었을 때 콜백함수 {id:ID}"
					}
				}
			],
			returns:		{k:"", v:""},
			samplecode:	[
				"MyResizable.bind({",
				"	id:\"resizer01\", minWidth:50, minHeight:50, maxWidth:200, maxHeight:200, ",
				"	animate:{easing:\"bounceOut\", duration:500}, ",
				"	aspectRatio: 2/1, snap:10, ",
				"	onChange: function(){",
				"		toast.push(this.id);",
				"	}",
				"});"
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"unbind", 
			type:		"method", 
			desc:		"바인드된 대상은 언 바인드 합니다.",
			define:		"_AXResizable.unbind(configs)",
			arguments:	[
				{
					k:"configs", v:{
						id:"엘리먼트 아이디"
					}
				}
			],
			returns:		{k:"", v:""},
			samplecode:	["MyResizable.unbind({id:\"resizer01\"})"],
			example:[],
			exampleFn:[],
			reference:	[]
		}
	]
}
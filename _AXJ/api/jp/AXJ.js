
{
	id : "/API/Classes/AXJ",
	head : {
		type : "Class", 
		name : "AXJ",
		flnm : "Classes.AXJ",
		file : "_AXJ/lib/AXJ.js",
		tags : "Class,AXJ"
	},
	h1:"AXJ",
	items: [
		{
			name:		"initialize", 
			type:		"method", 
			desc:		"클래스를 초기화합니다.",
			define:		"new AXJ();",
			arguments:	[
				{k:"", v:""}
			],
			returns:		{
				k:"", v:""
			},
			samplecode:	[
'var myClass = new AXJ();',
'myClass.setConfig({name:\"AXJ\"});'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"info", 
			type:		"method", 
			desc:		"버전과 로그를 반환 또는 출력합니다.",
			define:		"_AXJ.info(String);",
			arguments:	[
				{k:"String", v:"출력방식 console | alert | return "}
			],
			returns:		{
				k:"null | String", 
				v:"dispType \"return\"인 경우에만 String 반환"
			},
			samplecode:	[
'myClass.info(\"console\");',
'myClass.info(\"alert\");',
'var myInfo = myClass.info(\"return\");'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"echo", 
			type:		"method", 
			desc:		"메세지를 출력방식에 따라 출력합니다.",
			define:		"_AXJ.info(msg, dispType);",
			arguments:	[{k:"String", v:"메세지"},{k:"String", v:"출력방식 dispType"}],
			returns:		{k:"", v:""},
			samplecode:	[],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"setConfig", 
			type:		"method", 
			desc:		"클래스 속성 this.config 변수에 값을 지정합니다.",
			define:		"_AXJ.setConfig(configs);",
			arguments:	[{k:"configs", v:"JSObject"}],
			returns:{k:"", v:""},
			samplecode:	[],
			example: [],
			exampleFn:[],
			reference: []
		},
		{
			name:		"changeConfig", 
			type:		"method", 
			desc:		"클래스 속성 this.config 변수에 값을 변경합니다.",
			define:		"_AXJ.changeConfig(configs);",
			arguments:	[{k:"configs", v:"JSObject"}],
			returns:		{k:"", v:""},
			samplecode:	[],
			example: [],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"getEventTarget", 
			type:		"method", 
			desc:		"event 와 연관정보 원하는 htmlNode 오브젝트를 반환합니다.",
			define:		"_AXJ.getEventTarget(JSObject);",
			arguments:	[{k:"JSObject", v:""}],
			returns:		{k:"htmlNode", v:""},
			samplecode:	[],
			example: [],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"stopEvent", 
			type:		"method", 
			desc:		"진행 중인 이벤트를 중지합니다.",
			define:		"_AXJ.stopEvent(event);",
			arguments:	[{k:"event", v:""}],
			returns:		{k:"", v:""},
			samplecode:	[],
			example: [],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"clearRange", 
			type:		"method", 
			desc:		"브라우저의 사용자 선택을 모두 해제합니다.",
			define:		"_AXJ.clearRange();",
			arguments:	[{k:"", v:""}],
			returns:		{k:"", v:""},
			samplecode:	[],
			example: [],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"version", 
			type:		"object [String]", 
			desc:		"클래스 버전 정보",
			define:		"",
			samplecode:	[],
			example: [],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"author", 
			type:		"object [String]", 
			desc:		"제작자 정보",
			define:		"",
			samplecode:	[],
			example: [],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"logs", 
			type:		"object [Array]", 
			desc:		"클래스 업데이트 로그",
			define:		"",
			samplecode:	[],
			example: [],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"config", 
			type:		"object [JSObject]", 
			desc:		"",
			define:		"",
			samplecode:	[],
			example: [],
			exampleFn:[],
			reference:	[]
		}
	]
}

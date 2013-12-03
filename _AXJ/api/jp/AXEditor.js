
{
	id:"/API/Classes/AXEditor",
	folderPath : "",
	filePath : "html",
	head:{
		type:"Class", 
		name:"AXEditor",
		flnm:"Classes.AXEditor",
		file:"_AXJ/lib/AXEditor.js",
		tags:"Class,AXEditor",
		focus:""
	},
	h1:"AXEditor",
	items: [
		{
			aname:		"AXEditor-initialize", 
			name:		"initialize", 
			type:		"method", 
			desc:		"클래스를 초기화 합니다. 초기화 한 오브젝트를 변수에 담아 제어할 수 있습니다.",
			define:		"new AXEditor();",
			arguments:	[],
			returns:		{k:"", v:""},
			samplecode:	["var myEditor = new AXEditor();"],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			aname:		"AXEditor-setConfig", 
			name:		"setConfig",
			type:		"method", 
			desc:		"선언된 클래스를 사용하기 위해 속성을 정의합니다.",
			define:		"_AXEditor.setConfig(configs);",
			arguments:	[
				{k:"configs", v:{
					targetID: "(String) 에디터 타켓 엘리먼트 아이디",
					height:"(Number) 에디터의 높이",
					frameSrc: "(String) 에디터 바디 frame html url",
					editorFontFamily: "(String) 에디터 기본 폰트타입",
					fonts: "(Array) 에디터 지원 폰트 리스트",
					onReady: "(Function) 에디터 컨텐츠 준비완료 상태 이벤트 콜백함수"
				}}
			],
			returns:		{k:"", v:""},
			samplecode:	[
				'myEditor.setConfig({',
				'	targetID: "AXEditorTarget",',
				'	height:300,',
				'	frameSrc: "../../_AXJ/lib/AXEditor.html",',
				'	editorFontFamily: "Malgun Gothic",',
				'	fonts:["Malgun Gothic","Gulim","Dotum","궁서"],',
				'	onReady: function(){',
				'		myEditor.setContent($("#editContent"));',
				'		//myEditor.setContent("ABCDEF");',
				'	}',
				'});'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			aname:		"AXEditor-setContent", 
			name:		"setContent",
			type:		"method", 
			desc:		"선언된 클래스를 사용하기 위해 속성을 정의합니다.",
			define:		"_AXEditor.setContent(String|jQueryObject);",
			arguments:	[
				{k:"String|jQueryObject", v:"에디터에 값을 문자열로 직접 지정하거나 jQueryObject를 전달하여 값을 지정합니다."}
			],
			returns:		{k:"", v:""},
			samplecode:	[
				'myEditor.setContent($("#editContent"));',
				'myEditor.setContent("ABCDEF");',
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			aname:		"AXEditor-getContent", 
			name:		"getContent",
			type:		"method", 
			desc:		"선언된 클래스를 사용하기 위해 속성을 정의합니다.",
			define:		"_AXEditor.getContent();",
			arguments:	[
			],
			returns:		{k:"String", v:"에디터 값"},
			samplecode:	[
				'var myContent = myEditor.getContent();',
				'var content = [];',
				'while(myContent.length > 0){',
				'	content.push("content="+myContent.substr(0, 102399).enc());',
				'	myContent = myContent.substr(102399);',
				'}',
				'alert(content);'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			aname:		"AXEditor-insertIMG", 
			name:		"insertIMG",
			type:		"method", 
			desc:		"에디터 바디에 이미지를 추가합니다.",
			define:		"_AXEditor.insertIMG(file);",
			arguments:	[
				{k:"file", v:"정의된 파일형식 {id:'식별자(필수)', ti:'파일명', nm:'저장된파일이름(필수)', ty:'파일타입(필수)', sz:'사이즈', path:'파일경로', thumb:'썸네일url'}"}
			],
			returns:		{k:"", v:""},
			samplecode:	[
				'var file = {',
				'	id:"식별자", nm:"저장된파일이름", ty:"파일타입"',
				'};',
				'myEditor.insertIMG(file);'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			aname:		"AXEditor-removeIMG", 
			name:		"removeIMG",
			type:		"method", 
			desc:		"에디터 바디에서 이미지를 제거합니다.",
			define:		"_AXEditor.removeIMG(fileID);",
			arguments:	[
				{k:"fileID", v:"이미지태그의 id 값 또는 insertIMG 에서 사용된 id}"}
			],
			returns:		{k:"", v:""},
			samplecode:	[
				'myEditor.removeIMG("IMG_00110011");'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		}
	]
}
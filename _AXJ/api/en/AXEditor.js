
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
			desc:		"Initializes Class.",
			define:		"new AXEditor();",
			arguments:	[],
			returnss:		{k:"", v:""},
			samplecode:	["var myEditor = new AXEditor();"],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			aname:		"AXEditor-setConfig", 
			name:		"setConfig",
			type:		"method", 
			desc:		"Defines properties to use the initialized Class.",
			define:		"_AXEditor.setConfig(configs);",
			arguments:	[
				{k:"configs", v:{
					targetID: "(String) Editor target element ID",
					height:"(Number) Editor height",
					frameSrc: "(String) Frame html url of Editor body",
					editorFontFamily: "(String) Editor default font type",
					fonts: "(Array) Editor-supported font list",
					onReady: "(Function) Event callback function of Editor contents ready status"
				}}
			],
			returnss:		{k:"", v:""},
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
			desc:		"",
			define:		"_AXEditor.setContent(String|jQueryObject);",
			arguments:	[
				{k:"String|jQueryObject", v:"Values of editor can be defined in String directly or by passing to jQueryObject."}
			],
			returnss:		{k:"", v:""},
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
			desc:		"",
			define:		"_AXEditor.getContent();",
			arguments:	[
			],
			returns:		{k:"String", v:"Editor value"},
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
			desc:		"Inserts an image in Editor body.",
			define:		"_AXEditor.insertIMG(file);",
			arguments:	[
				{k:"file", v:"Defined file format {id:'identifier(required)', ti:'file name', nm:'file name saved(required)', ty:'fiel type(required)', sz:'size', path:'file path', thumb:'thumbnail url'}"}
			],
			returnss:		{k:"", v:""},
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
			desc:		"Removes images from Editor body.",
			define:		"_AXEditor.removeIMG(fileID);",
			arguments:	[
				{k:"fileID", v:"id of image tag or id used in insertIMG}"}
			],
			returnss:		{k:"", v:""},
			samplecode:	[
				'myEditor.removeIMG("IMG_00110011");'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		}
	]
}

{
	id:"/API/Objects/AXPopOver",
	head:{
		type:"Objects", 
		name:"AXPopOver",
		flnm:"Objects.AXPopOver",
		file:"_AXJ/lib/AXJ.js",
		tags:"Objects,AXPopOver"
	},
	h1:"AXPopOver",
	items: [
		{
			name: "bind", 
			type: "method", 
			desc: "AXPopOver 개체에 메뉴 데이터를 바인딩 합니다.",
			define: "AXPopOver.bind(configs);",
			arguments: [
				{k:"configs", v:{
					id:"(String) 식별자 ID AXPopOver 컨트롤을 위한 식별자",
					theme:"(String) 테마 클래스",
					width:"(Number) 컨텍스트메뉴의 너비",
					menu:"(JSObject Array) [{label:String, className:String, onclick:Function}] "
				}}
			],
			returns: {k:"", v:""},
			samplecode:[
'AXPopOver.bind({',
'	id:"myContextMenu", ',
'	theme:"AXPopOver", // 선택항목',
'	width:"200", // 선택항목',
'	menu:[',
'		{userType:0, label:"Friends", className:"groupName"},',
'		{userType:0, label:"Invite friends", className:"", onclick:function(){}},',
'		{userType:0, label:"Find friends", className:"", onclick:function(){}},',
'		{userType:0, label:"Photo", className:"groupName"},',
'		{userType:0, label:"Cut", className:"", onclick:function(){}},',
'		{userType:0, label:"Roll", className:"", onclick:function(){}},',
'		{userType:0, label:"Equipment", className:"groupName"},',
'		{userType:0, label:"Setting", className:""},',
'		{userType:0, label:"Screen", className:"", onclick:function(){}},',
'		{userType:0, label:"Securities", className:"groupName"},',
'		{userType:0, label:"Account", className:"", onclick:function(){}},',
'		{userType:0, label:"Logout", className:"", onclick:function(){}},',
'	]',
'});',
'$("#popoverBtn1").bind("mouseover", function(){',
'	var pos = $(this).offset();',
'	AXPopOver.open({',
'		id:"myContextMenu", sendObj:{id:"전달하고싶은 오브젝트", name:"형식은 자유"}}, ',
'		{left:pos.left-60, top:pos.top+30}',
'	);',
'});'
			],
			example:[
'<input type="button" value="popover 열기" class="AXButton" id="popoverBtn1" />'
			],
			exampleFn:[
'AXPopOver.bind({',
'	id:"myContextMenu", ',
'	theme:"AXPopOver", // 선택항목',
'	width:"200", // 선택항목',
'	menu:[',
'		{userType:0, label:"Friends", className:"groupName"},',
'		{userType:0, label:"Invite friends", className:"", onclick:function(){}},',
'		{userType:0, label:"Find friends", className:"", onclick:function(){}},',
'		{userType:0, label:"Photo", className:"groupName"},',
'		{userType:0, label:"Cut", className:"", onclick:function(){}},',
'		{userType:0, label:"Roll", className:"", onclick:function(){}},',
'		{userType:0, label:"Equipment", className:"groupName"},',
'		{userType:0, label:"Setting", className:""},',
'		{userType:0, label:"Screen", className:"", onclick:function(){}},',
'		{userType:0, label:"Securities", className:"groupName"},',
'		{userType:0, label:"Account", className:"", onclick:function(){}},',
'		{userType:0, label:"Logout", className:"", onclick:function(){}},',
'	]',
'});',
'$("#popoverBtn1").bind("mouseover", function(){',
'	var pos = $(this).offset();',
'	AXPopOver.open({id:"myContextMenu", sendObj:{id:"전달하고싶은 오브젝트", name:"형식은 자유"}}, {left:pos.left-60, top:pos.top+30}); // event 직접 연결 방식',
'});'
			],
			reference:	[]
		},
		{
			name:		"open", 
			type:		"method", 
			desc:		"바인드 된 개체를 오픈합니다.",
			define:		"AXPopOver.open(JSObject);",
			samplecodeDesc:"id, sendObj, event|position 으로 구성된 JSObject를 전달하면 id 로 바인딩 된 AXPopOver 개체의 오브젝트를 찾아 메뉴를 오픈시켜 줍니다.",
			samplecode:	[
'AXPopOver.open({',
'	id:"myContextMenuTree", sendObj:{id:"전달하고싶은 오브젝트", name:"형식은 자유"}',
'}, event); // event 직접 연결 방식',
'',
'AXPopOver.open({',
'	id:"myContextMenuTree", sendObj:{id:"전달하고싶은 오브젝트", name:"형식은 자유"}',
'}, {left:0, top:0}); // position 직접 결정 방식'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"close", 
			type:		"method", 
			desc:		"바인드 된 개체를 닫습니다.",
			define:		"AXPopOver.close(JSObject);",
			samplecodeDesc:"id로 구성된 JSObject를 전달하면 id 로 바인딩 된 AXPopOver 개체의 오브젝트를 찾아 메뉴를 Close시켜 줍니다.",
			samplecode:	[
'AXPopOver.close({',
'	id:"myContextMenuTree"',
'});'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		}
	]
}

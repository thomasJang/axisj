
{
	id:"/API/Objects/toast",
	head:{
		type:"Objects", 
		name:"toast",
		flnm:"Objects.toast",
		file:"_AXJ/lib/AXJ.js",
		tags:"Objects,toast"
	},
	h1:"toast",
	items: [
		{
			name: "push", 
			type: "method", 
			desc: "화면 우측 상단 토스트 개체에 메세지를 출력합니다.",
			define: "toast.push(JSObject);",
			arguments: [
				{k:"JSObject", v:"String 의 경우 그대로 출력하면 JSObject 형태로 전달하는 경우 스타일을 다르게 처리 할 수 있습니다. "}
			],
			returns: {k:"", v:""},
			samplecode:[
'toast.push(\'Complete Complete messange send !!\');',
'toast.push({type:\'Warning\', body:\'Complete Complete messange send !!\'});',
'toast.push({type:\'Caution\', body:\'Complete Complete messange send !!\'});'
			],
			example:[
'<input type="button" value="Complete" class="AXButton Classic" onclick="toast.push(\'<b>Warning</b> Warning messange send !!\');" />',
'<input type="button" value="Warning" class="AXButton Classic" onclick="toast.push({body:\'<b>Warning</b> Warning messange send !!\', type:\'Warning\'});" />',
'<input type="button" value="Caution" class="AXButton Red" onclick="toast.push({body:\'<b>Caution</b> Caution messange send !!\', type:\'Caution\'});" />'
			],
			exampleFn:[],
			reference:	[]
		}
	]
}

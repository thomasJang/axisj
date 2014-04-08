
{
	id:"/API/Objects/dialog",
	head:{
		type:"Objects", 
		name:"dialog",
		flnm:"Objects.dialog",
		file:"_AXJ/lib/AXJ.js",
		tags:"Objects,dialog"
	},
	h1:"dialog",
	items: [
		{
			name: "push", 
			type: "method", 
			desc: "알럿형식으로 dialog 를 출력합니다.",
			define: "dialog.push(JSObject);",
			arguments: [
				{k:"JSObject", v:"String 의 경우 그대로 출력하면 JSObject 형태로 전달하는 경우 스타일을 다르게 처리 할 수 있습니다."}
			],
			returns: {k:"", v:""},
			samplecode:[
'var btnOnConfirm: function(arg){',
'	alert(arg);',
'};',
'var btnClick: function(arg){',
'	alert(arg);',
'};',
'',
'dialog.push("Alert Application Call dialog push");',
'',
'dialog.push({',
'	body:"Warning Application Call dialog push", type:"Warning"',
'});',
'',
'dialog.push({',
'	body:"Caution Application Call dialog push", ',
'	type:"Caution", ',
'	onConfirm:btnOnConfirm, ',
'	data:"onConfirmData"',
'});'
			],
			example:[
'<input type="button" value="alert" class="AXButton Classic" onclick="dialog.push(\'<b>Alert</b> Application Call dialog push\');" />',
'<input type="button" value="alert Warning" class="AXButton Classic" onclick="dialog.push({body:\'<b>Warning</b> Application Call dialog push\', type:\'Warning\'});" />',
'<input type="button" value="alert Caution" class="AXButton Classic" onclick="dialog.push({body:\'<b>Caution</b> Application Call dialog push\', type:\'Caution\', onConfirm:function(arg){alert(arg);}, data:\'onConfirmData\'});" />',
'',
'<input type="button" value="choose alert Caution" class="AXButton Classic" onclick="dialog.push({body:\'<b>Caution</b> Application Call dialog push\', type:\'Caution\', buttons:[',
'	{buttonValue:\'button1\', buttonClass:\'Red W100\', onClick:function(arg){alert(arg);}, data:\'data1\'},',
'	{buttonValue:\'button2\', buttonClass:\'Blue\', onClick:function(arg){alert(arg);}, data:\'data2\'},',
'	{buttonValue:\'button3\', buttonClass:\'Green\', onClick:function(arg){alert(arg);}, data:\'data3\'}',
']});" />'
			],
			exampleFn:[],
			reference:	[]
		}
	]
}

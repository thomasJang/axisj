
{
	id:"/API/Functions/AXgetId",
	head:{
		type:"method", 
		name:"AXgetId",
		flnm:"Functions.AXgetId",
		file:"_AXJ/lib/AXJ.js",
		tags:"Functions,AXgetId"
	},
	h1: "AXgetId",
	desc: "document.getElementById 와 같은 역할을 수행합니다. 도큐먼트에서 인자에 해당하는 아이디를 가진 HTML Element 를 반환합니다. ",
	define: "AXgetId(String);",
	arguments:[
		{k:"String", v:"html nodeID"}
	],
	returns: {k:"HTMLElement", v:""},
	samplecode:[
		'<body>',
		'	<a id="tester">',
		'</body>',
		'<script type="text/javascript">',
		'AXgetId("tester").innerHTML = "테스트합니다.";',
		'',
		'if(AXgetId("tester2")) AXgetId("tester2").innerHTML = "테스트합니다.";',
		'<script>'
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/Functions/trace",
	head:{
		type:"method", 
		name:"trace",
		flnm:"Functions.trace",
		file:"_AXJ/lib/AXJ.js",
		tags:"Functions,trace"
	},
	h1: "trace",
	desc: "console 에 메세지를 출력하여 줍니다. AXUtil.console 과 같습니다. ",
	define: [
		'trace(JSObject);',
		'AXUtil.console(JSObject);',
		'trace(JSObject[, JSObject, ......]);'
	],
	arguments:[
		{k:"JSObject", v:""}
	],
	returns: {k:"", v:""},
	samplecode:[
		'trace("AXISJ");',
		'// AXISJ',
		'',
		'trace(1234);',
		'// 1234',
		'',
		'var myObj = {name:"AXISJ", url:"http://www.axisj.com"};',
		'trace(myObj);',
		'// {"name":"AXISJ", "url":"http://www.axisj.com"} ',
		'',
		'trace(1234, "1234");',
		'// arg[0] : 1234, arg[1] : 1234 ',
		'',
		'trace(1234, {a:1, b:2});',
		'// arg[0] : 1234, arg[1] : {"a":1, "b":2} '
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/Functions/AXReqAbort",
	head:{
		type:"method", 
		name:"AXReqAbort",
		flnm:"Functions.AXReqAbort",
		file:"_AXJ/lib/AXJ.js",
		tags:"Functions,AXReqAbort"
	},
	h1: "AXReqAbort",
	desc: "진행중인 AJAX 호출을 중지 합니다.",
	define: [
		'AXReqAbort();'
	],
	arguments:[
		{k:"", v:""}
	],
	returns: {k:"", v:""},
	samplecode:[
		'AXReqAbort();'
	],
	example:[],
	exampleFn:[],
	reference:[]
}
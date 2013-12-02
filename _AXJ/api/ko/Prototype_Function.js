
{
	id:"/API/prototype/Function/argumentNames",
	head:{
		type:"method", 
		name:"argumentNames",
		flnm:"Prototype.Function.argumentNames",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,Function,argumentNames"
	},
	h1: "Function.argumentNames",
	desc: "에러 객체를 문자열로 리턴 합니다. ",
	define: "Function.argumentNames();",
	arguments:[
	],
	returns: {k:"Array", v:"String Array"},
	samplecode:[
'var myFn = function(a, b, c){',
'	return a;',
'};',
'',
'trace(myFn.argumentNames());',
'//  ["a", "b", "c"] ',
'// prototypejs 를 참조하여 제작되었습니다.'
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/Function/bind",
	head:{
		type:"method", 
		name:"bind",
		flnm:"Prototype.Function.bind",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,Function,bind"
	},
	h1: "Function.bind",
	desc: "함수의 위치를 bind 대상에 연결하여 줍니다. ",
	define: "Function.bind(bindTarget[, args...]);",
	arguments:[
		{k:"JSObject", v:"Javascript object"},
		{k:"args", v:"함께 전달해야 할 인자를 지정 합니다. "}
	],
	returns: {k:"", v:""},
	samplecode:[
'var AlertClass = Class.create({',
'	initialize: function(msg) {',
'		this.msg = msg;',
'	},',
'	handleClick: function(event) {',
'		alert(this.msg);',
'	}',
'});',
'var myalert = new AlertClass("AXJ Clicked");',
'',
'$("#link1").click(myalert.handleClick);',
'//undefined',
'$("#link2").click(myalert.handleClick.bind(myalert));',
'//AXJ Clicked'
	],
	example:[],
	exampleFn:[],
	reference:[],
	extendForm:[
		{
			description:"bind 에 추가 인자를 전달하려고 할 때엔 다음의 예제와 같이 args 항목을 추가하고 추가한 순서대로 대상 함수에서 처리 하고 맨 마지막 항목에 event 인자가 전달되어 집니다.",
			samplecode:[
'var AlertClass = Class.create({',
'	initialize: function(msg) {',
'		this.msg = msg;',
'	},',
'	handleClick: function(a, b, c, event) {',
'		trace({a:a, b:b, c:c, event:event.type});',
'		// {"a":"A", "b":"X", "c":"J", "event":"click"}',
'		alert(this.msg);',
'	}',
'});',
'var myalert = new AlertClass("AXJ Clicked");',
'',
'$("#link1").click(myalert.handleClick);',
'$("#link2").click(myalert.handleClick.bind(myalert, "A", "X", "J"));'
			]
		},
		{
			description:"html Body",
			samplecode:[
'<body>',
'	<div id="link1">link1</div>',
'	<div id="link2">link2</div>',
'</body>'
			]
		}
	]
},
{
	id:"/API/prototype/Function/defer",
	head:{
		type:"method", 
		name:"defer",
		flnm:"Prototype.Function.defer",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,Function,defer"
	},
	h1: "Function.defer",
	desc: "delay(0.01[, args]) 와 같습니다. ",
	define: "Function.defer([args...]);",
	arguments:[
		{k:"args", v:"함께 전달해야할 인자를 지정합니다. "}
	],
	returns: {k:"대상 함수에 따라 구현됨", v:""},
	samplecode:[
'var showMsg = function(a, b){',
'	alert(a+"/"+b);',
'};',
'			',
'showMsg("One", "1");',
'showMsg.defer("Two", "1");',
'showMsg("Three", "1");'
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/Function/delay",
	head:{
		type:"method", 
		name:"delay",
		flnm:"Prototype.Function.delay",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,Function,delay"
	},
	h1: "Function.delay",
	desc: "함수의 실행을 지정된 시간 후에 실행되게 합니다. ",
	define: "Function.delay(timeout[, args...]);",
	arguments:[
		{k:"timeout", v:"second"},
		{k:"args", v:"함께 전달해야할 인자를 지정합니다. "}
	],
	returns: {k:"대상 함수에 따라 구현됨", v:""},
	samplecode:[
'var showMsg = function(a, b){',
'	alert(a+"/"+b);',
'};',
'showMsg.delay(2, "AX", "ISJ");',
'// 2초 후에 alert 구문이 실행됩니다.'
	],
	example:[],
	exampleFn:[],
	reference:[]
}
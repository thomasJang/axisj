
{
	id:"/API/prototype/Object/clone",
	head:{
		type:"method", 
		name:"clone",
		flnm:"Prototype.Object.clone",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,Object,clone"
	},
	h1: "Object.clone",
	desc: "JS Object 를 복제하여 원본과 분리된 JS Object를 리턴합니다.<br/>웹 애플리케이션이나 웹사이트 제작 시 사용되는 HTML, CSS 및 Javascript 기술을 이용하여 웹 브라우저(Web Browser) 또는 HTML를 이용하여 구동되는 다양한 디바이스에서 동작합니다. 액시스제이를 이용하여 일반적으로 웹에서 구현하기 어려운 다양한 기능과 UI 디자인을 제공하여 보다 쉽고 빠르게 웹 애플리케이션을 제작할 수 있습니다. ",
	define: "Object.clone(JSObject);",
	arguments:[
		{k:"JSObject", v:"javascript object JSObjectArray "}
	],
	returns: {k:"JSObject", v:"복제된 JSObject"},
	samplecode:[
'var axisj_member = {m1:"장기영", m2:"김정원", m3:"김동근", m4:"국정일"};',
'var new_members_0 = axisj_member;',
'axisj_member.m5 = "김동영";',
'// m5 가 추가되면 axisj_member 뿐 아리나 new_members_0 에도 추가됩니다.',
'',
'var new_members_1 = Object.clone(axisj_member);',
'axisj_member.m6 = "양용성";',
'// clone 으로 만들어진 new_members_1 은 axisj_member 의 값이 변해도 영향을 받지 않습니다.',
'// 이러한 점은 JS Object 의 특징입니다. ',
'',
'trace(Object.toJSON(axisj_member));',
'trace(Object.toJSON(new_members_0));',
'trace(Object.toJSON(new_members_1));'
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/Object/isArray",
	head:{
		type:"method", 
		name:"isArray",
		flnm:"Prototype.Object.isArray",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,Object,isArray"
	},
	h1: "Object.isArray",
	desc: "객체가 Array 인지 체크하여 true | false 로 반환합니다. ",
	define: "Object.isArray(JSObject);",
	arguments:[
		{k:"JSObject", v:"javascript object JSObjectArray "}
	],
	returns: {k:"Boolean", v:""},
	samplecode:[
'var axisj_member = {m1:"장기영", m2:"김정원", m3:"김동근", m4:"국정일"};',
'trace(Object.isArray(axisj_member));',
'// false ',
'',
'var axisj_members = ["장기영","김정원","김동근","김동영"];',
'trace(Object.isArray(axisj_members));',
'// true '
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/Object/isElement",
	head:{
		type:"method", 
		name:"isElement",
		flnm:"Prototype.Object.isElement",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,Object,isElement"
	},
	h1: "Object.isElement",
	desc: "전달된 객체가 HTML node 인지 true | false 로 반환합니다. ",
	define: "Object.isElement(object);",
	arguments:[
		{k:"Object", v:""}
	],
	returns: {k:"Boolean", v:""},
	samplecode:[
'var axisj_member = {m1:"장기영", m2:"김정원", m3:"김동근", m4:"국정일"};',
'trace(Object.isElement(axisj_member));',
'// A170236966 : false ',
'',
'trace(Object.isElement(document.getElementById("axisjDiv")));',
'// A170236966 : true ',
'',
'trace(Object.isElement(AXgetId("axisjDiv")));',
'// A170236966 : true '
	],
	example:[],
	exampleFn:[],
	reference:[
		{anchor:"/API/Functions/AXgetId", name:"document.getElementById == AXgetId"}
	]
},
{
	id:"/API/prototype/Object/isFunction",
	head:{
		type:"method", 
		name:"isFunction",
		flnm:"Prototype.Object.isFunction",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,Object,isFunction"
	},
	h1: "Object.isFunction",
	desc: "객체가 Function 인지 True | False 로 반환합니다. ",
	define: "Object.isFunction(Object);",
	arguments:[
		{k:"Object", v:""}
	],
	returns: {k:"Boolean", v:""},
	samplecode:[
'var axisj_member = {m1:"장기영", m2:"김정원", m3:"김동근", m4:"국정일"};',
'trace(Object.isFunction(axisj_member));',
'// A1712387 : false ',
'',
'var getAxisj = function(){',
'    return true;',
'};',
'trace(Object.isFunction(getAxisj));',
'// A1712387 : true '
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/Object/isNumber",
	head:{
		type:"method", 
		name:"isNumber",
		flnm:"Prototype.Object.isNumber",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,Object,isNumber"
	},
	h1: "Object.isNumber",
	desc: "객체가 Number 인지 true | false 로 반환합니다. ",
	define: "Object.isNumber(JSObject);",
	arguments:[
		{k:"JSObject", v:"javascript object JSObjectArray "}
	],
	returns: {k:"Boolean", v:""},
	samplecode:[
'var numberI = 999;',
'trace(Object.isNumber(numberI));',
'// true ',
'',
'var numberS = "999";',
'trace(Object.isNumber(numberS));',
'// false'
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/Object/isObject",
	head:{
		type:"method", 
		name:"isObject",
		flnm:"Prototype.Object.isObject",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,Object,isObject"
	},
	h1: "Object.isObject",
	desc: "전달된 객체가 JS Object 인지 True | False 로 반환합니다. ",
	define: "Object.isObject(JSObject);",
	arguments:[
		{k:"JSObject", v:"javascript object JSObjectArray "}
	],
	returns: {k:"Boolean", v:""},
	samplecode:[
'var axisj_member = {m1:"장기영", m2:"김정원", m3:"김동근", m4:"국정일"};',
'trace(Object.isObject(axisj_member));',
'// A170236966 : true ',
'',
'trace(Object.isObject(document.getElementById("axisjDiv")));',
'// A170236966 : false ',
'',
'trace(Object.isObject(AXgetId("axisjDiv")));',
'// A170236966 : false'
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/Object/isString",
	head:{
		type:"method", 
		name:"isString",
		flnm:"Prototype.Object.isString",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,Object,isString"
	},
	h1: "Object.isString",
	desc: "객체가 String 인지 True | False 로 반환합니다. ",
	define: "Object.isString();",
	arguments:[
		{k:"JSObject", v:"javascript object JSObjectArray "}
	],
	returns: {k:"Boolean", v:""},
	samplecode:[
'var axisj_member = {m1:"장기영", m2:"김정원", m3:"김동근", m4:"국정일"};',
'trace(Object.isString(axisj_member));',
'// A1712387 : false ',
'',
'var strAxisj = "대한민국 최초 무료 자바스크립트 UI 라이브러리";',
'trace(Object.isString(strAxisj));',
'// A1712387 : true '
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/Object/isUndefined",
	head:{
		type:"method", 
		name:"isUndefined",
		flnm:"Prototype.Object.isUndefined",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,Object,isUndefined"
	},
	h1: "Object.isUndefined",
	desc: "객체가 undefined 인지 True | False 로 반환합니다. ",
	define: "Object.isUndefined(JSObject);",
	arguments:[
		{k:"JSObject", v:"javascript object JSObjectArray "}
	],
	returns: {k:"Boolean", v:""},
	samplecode:[
'var varI = 999;',
'var varUndefined;',
'var varNull = null;',
'',
'trace(Object.isUndefined(varI));',
'// A1712387 : false',
'trace(Object.isUndefined(varUndefined));',
'// A1712387 : true',
'trace(Object.isUndefined(varNull));',
'// A1712387 : false',
'',
'/* null 은 undefined 가 아닙니다. 만약 null, undefined, "" 을 모두 함께 체크하려고 하신다면 */',
'',
'trace(AXUtil.isEmpty(varUndefined));',
'trace(AXUtil.isEmpty(varNull));',
'// A1712387 : true',
'// A1712387 : true'
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/Object/keys",
	head:{
		type:"method", 
		name:"keys",
		flnm:"Prototype.Object.keys",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,Object,keys"
	},
	h1: "Object.keys",
	desc: "JSObject 의 key 값을 모아 배열을 반환합니다. ",
	define: "Object.keys(JSObject);",
	arguments:[
		{k:"JSObject", v:"javascript object JSObjectArray "}
	],
	returns: {k:"Boolean", v:""},
	samplecode:[
'var axisj = {',
'	name:"AXISJ", url:"http://www.axisj.com", members:[',
'		{name:"장기영"},',
'		{name:"김정원"},',
'		{name:"김동근"},',
'		{name:"국정일"},',
'		{name:"김동영"},',
'		{name:"양용성"}',
'	]',
'};',
'trace(Object.keys(axisj));',
'// ["name", "url", "members"] '
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/Object/toJSON",
	head:{
		type:"method", 
		name:"toJSON",
		flnm:"Prototype.Object.toJSON",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,Object,toJSON"
	},
	h1: "Object.toJSON",
	desc: "JSObject 를 JSON 구문으로 반환하여 줍니다. ",
	define: "Object.toJSON(JSObject);",
	arguments:[
		{k:"JSObject", v:"javascript object JSObjectArray "}
	],
	returns: {k:"Boolean", v:""},
	samplecode:[
'trace(Object.toJSON({name:"AXISJ"}));',
'// A162233555 : {"name":"AXISJ"} ',
'',
'trace(Object.toJSON([1, 2, 3]));',
'// A162233556 : [1, 2, 3] ',
'		',
'var axisj = {',
'	name:"AXISJ", url:"http://www.axisj.com", members:[',
'		{name:"장기영"},',
'		{name:"김정원"},',
'		{name:"김동근"},',
'		{name:"국정일"},',
'		{name:"김동영"},',
'		{name:"양용성"}',
'	]',
'};',
'trace(Object.toJSON(axisj));',
'// A162233556 : {"name":"AXISJ", "url":"http://www.axisj.com", "members":[{"name":"장기영"}, {"name":"김정원"}, {"name":"김동근"}, {"name":"국정일"}, {"name":"김동영"}, , {"name":"양용성"}]} '
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/Object/toJSONfn",
	head:{
		type:"method", 
		name:"toJSONfn",
		flnm:"Prototype.Object.toJSONfn",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,Object,toJSONfn"
	},
	h1: "Object.toJSONfn",
	desc: "JSObject 를 JSON 구문으로 반환하여 줍니다. (toJSON 의 경우 funciton 타입을 무시하고 return, 하지만 toJSONfn 의 경우 function 을 실행한 결과를 return 합니다.) ",
	define: "Object.toJSONfn(JSObject);",
	arguments:[
		{k:"JSObject", v:"javascript object JSObjectArray "}
	],
	returns: {k:"String", v:"JSON String"},
	samplecode:[
'trace(Object.toJSONfn({name:"AXISJ"}));',
'// A162233555 : {"name":"AXISJ"} ',
'',
'trace(Object.toJSONfn([1, 2, 3]));',
'// A162233556 : [1, 2, 3] ',
'		',
'var axisj = {',
'	name:"AXISJ", url:"http://www.axisj.com", members:function(){',
'		return [',
'			{name:"장기영"},',
'			{name:"김정원"},',
'			{name:"김동근"},',
'			{name:"국정일"},',
'			{name:"김동영"},',
'			{name:"양용성"}',
'		];',
'};',
'trace(Object.toJSON(axisj));',
'//  A17245069 : {"name":"AXISJ", "url":"http://www.axisj.com"} ',
'',
'trace(Object.toJSONfn(axisj));',
'// A172509759 : {"name":"AXISJ", "url":"http://www.axisj.com", "members":[{"name":"장기영"}, {"name":"김정원"}, {"name":"김동근"}, {"name":"국정일"}, {"name":"김동영"}, {"name":"양용성"}]} '
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/Object/values",
	head:{
		type:"method", 
		name:"values",
		flnm:"Prototype.Object.values",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,Object,values"
	},
	h1: "Object.values",
	desc: "JS Object 의 value 값을 모아 배열을 반환합니다. ",
	define: "Object.values(JSObject);",
	arguments:[
		{k:"JSObject", v:"javascript object JSObjectArray "}
	],
	returns: {k:"Array", v:""},
	samplecode:[
'var axisj = {',
'	name:"AXISJ", url:"http://www.axisj.com", members:[',
'		{name:"장기영"},',
'		{name:"김정원"},',
'		{name:"김동근"},',
'		{name:"국정일"},',
'		{name:"김동영"},',
'		{name:"양용성"}',
'	]',
'};',
'trace(Object.values(axisj));',
'// A164702191 : ["AXISJ", "http://www.axisj.com", [{"name":"장기영"}, {"name":"김정원"}, {"name":"김동근"}, {"name":"국정일"}, {"name":"김동영"}, {"name":"양용성"}]] '
	],
	example:[],
	exampleFn:[],
	reference:[]
}

{
	id:"/API/prototype/String/array",
	head:{
		type:"method", 
		name:"array",
		flnm:"Prototype.String.array",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,String,array"
	},
	h1: "String.array",
	desc: "음수 또는 양수를 절대값으로 반환합니다. ",
	define: "String.array();",
	arguments:[
	],
	returns: {k:"JSObject", v:""},
	samplecode:[
'var myObj = "a,b,c".array();',
'trace(myObj);',
'// ["a", "b", "c"]'
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/String/crlf",
	head:{
		type:"method", 
		name:"crlf",
		flnm:"Prototype.String.crlf",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,String,crlf"
	},
	h1: "String.crlf",
	desc: "줄넘김 문자열 '\n'을 <br/> 태그로 변환하여 줍니다. ",
	define: "String.crlf();",
	arguments:[
	],
	returns: {k:"String", v:""},
	samplecode:[
'"123\n123".crlf(); ->  "123<br/>123"'
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/String/date",
	head:{
		type:"method", 
		name:"date",
		flnm:"Prototype.String.date",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,String,date"
	},
	h1: "String.date",
	desc: "문자열을 date 형식에 맞추어 날짜 포멧으로 리턴합니다. ",
	define: "String.date([separator]);",
	arguments:[
		{k:"separator", v:"날짜구분자 \"-\" 또는 \"/\" 또는 \",\" 로 할당 할 수 있습니다. 지정 하지 않았을 때 기본값은 \"-\" 입니다. "}
	],
	returns: {k:"Date", v:""},
	samplecode:[
'trace("20121119".date());',
'// "2012-11-19T03:00:00Z"',
' ',
'trace("2012-11-19".date());',
'// "2012-11-19T03:00:00Z" ',
'',
'trace("2012/11/19".date("/"));',
'// "2012-11-19T03:00:00Z" '
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/String/dec",
	head:{
		type:"method", 
		name:"dec",
		flnm:"Prototype.String.dec",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,String,dec"
	},
	h1: "String.dec",
	desc: "URLencode된 문자열로 디코드 합니다. ",
	define: "String.dec();",
	arguments:[
	],
	returns: {k:"String", v:""},
	samplecode:[
'"AXJ_String%2C%EC%97%91%EC%8B%9C%EC%8A%A4%EC%A0%9C%EC%9D%B4".dec(); -> "AXJ_String,엑시스제이"'
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/String/delHtml",
	head:{
		type:"method", 
		name:"delHtml",
		flnm:"Prototype.String.delHtml",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,String,delHtml"
	},
	h1: "String.delHtml",
	desc: "문자열에서 HTML 태그를 제거하여 반환합니다. ",
	define: "String.delHtml();",
	arguments:[
	],
	returns: {k:"String", v:""},
	samplecode:[
'"<div>AXJ</div>".delHtml(); ->  "AXJ"'
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/String/delScript",
	head:{
		type:"method", 
		name:"delScript",
		flnm:"Prototype.String.delScript",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,String,delScript,removeScript"
	},
	h1: "String.delScript, String.removeScript",
	desc: "문자열 안에 script 태그를 제거하여 줍니다. (script 외에 on 속성을 제거하여 주어 클라이언트 스크립트 보안을 강화 할 수 있습니다.) ",
	define: "String.delScript();",
	arguments:[
	],
	returns: {k:"String", v:""},
	samplecode:[
'<script type="text/javascript">',
'var fObj = {',
'	scriptFn: function(){',
'		alert("i got your cookies");',
'	}',
'};',
'</script>',
'<body onload="fObj.scriptFn();">',
'  <a href="" onclick="alert(\'111\');">test</a>',
'</body>'
	],
	example:[],
	exampleFn:[],
	reference:[],
	extendForm: [
		{
			description:"delScript() 처리 후",
			samplecode:[
				'<body xonload="fObj.scriptFn();">',
				'  <a href="" xonclick="alert(\'111\');">test</a>',
				'</body>'
			]
		}
	]
},
{
	id:"/API/prototype/String/ecrlf",
	head:{
		type:"method", 
		name:"ecrlf",
		flnm:"Prototype.String.ecrlf",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,String,ecrlf"
	},
	h1: "String.ecrlf",
	desc: "URLencode 된 줄넘김 문자열 '\n'을 <br/> 태그로 변환하여 줍니다. ",
	define: "String.ecrlf();",
	arguments:[
	],
	returns: {k:"String", v:""},
	samplecode:[
'"123%0A123".ecrlf(); ->  "123<br/>123"'
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/String/enc",
	head:{
		type:"method", 
		name:"enc",
		flnm:"Prototype.String.enc",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,String,enc"
	},
	h1: "String.enc",
	desc: "문자열을 URLencode로 인코드 합니다. ",
	define: "String.enc();",
	arguments:[
	],
	returns: {k:"String", v:""},
	samplecode:[
'"AXJ_String,엑시스제이".enc(); -> "AXJ_String%2C%EC%97%91%EC%8B%9C%EC%8A%A4%EC%A0%9C%EC%9D%B4"'
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/String/getByte",
	head:{
		type:"method", 
		name:"getByte",
		flnm:"Prototype.String.getByte",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,String,getByte"
	},
	h1: "String.getByte",
	desc: "문자열의 바이트 값을 계산하여 줍니다. ",
	define: "String.getByte();",
	arguments:[
	],
	returns: {k:"Number", v:""},
	samplecode:[
'trace("장".getByte());',
'// 2',
'trace("a".getByte());',
'// 1'
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/String/getFileName",
	head:{
		type:"method", 
		name:"getFileName",
		flnm:"Prototype.String.getFileName",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,String,getFileName"
	},
	h1: "String.getFileName",
	desc: "파일경로에서 파일명을 반환합니다. ",
	define: "String.getFileName();",
	arguments:[
	],
	returns: {k:"String", v:""},
	samplecode:[
'"C:\Works\AXISJ_project\css\myfile.zip".getFileName(); ->  "myfile.zip"'
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/String/isBlank",
	head:{
		type:"method", 
		name:"isBlank",
		flnm:"Prototype.String.isBlank",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,String,isBlank"
	},
	h1: "String.isBlank",
	desc: "문자열이 빈 값인지 체크하여 줍니다. 체크할 때 공백은 제거 후 비교합니다. ",
	define: "String.isBlank();",
	arguments:[
	],
	returns: {k:"Boolean", v:""},
	samplecode:[
'"  ".isBlank(); ->  true'
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/String/isJSON",
	head:{
		type:"method", 
		name:"isJSON",
		flnm:"Prototype.String.isJSON",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,String,isJSON"
	},
	h1: "String.isJSON",
	desc: "문자열이 JSON 구문인지 체크하여 줍니다. ",
	define: "String.isJSON();",
	arguments:[
	],
	returns: {k:"Boolean", v:""},
	samplecode:[
'trace("{a:1}".isJSON());',
'// true',
'trace("{a:\'1\'}".isJSON());',
'// flase',
'trace("{\'a\':\'1\'}".isJSON());',
'// flase',
'trace(\'{"a":"1"}a\'.isJSON());',
'// true'
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/String/lcase",
	head:{
		type:"method", 
		name:"lcase",
		flnm:"Prototype.String.lcase",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,String,lcase"
	},
	h1: "String.lcase",
	desc: "소문자로 변환하여 줍니다. ",
	define: "String.lcase();",
	arguments:[
	],
	returns: {k:"String", v:""},
	samplecode:[
'"AXISJ".lcase() -> "axisj"'
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/String/left",
	head:{
		type:"method", 
		name:"left",
		flnm:"Prototype.String.left",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,String,left"
	},
	h1: "String.left",
	desc: "문자열 시작부터 지정한 글자수 만큼 반환합니다. ",
	define: "String.left(Number);",
	arguments:[
		{k:"Number", v:""}
	],
	returns: {k:"String", v:""},
	samplecode:[
'"AXJ_String".left(3); -> "AXJ"',
'toast.push(\'left(3) : \' + "AXJ_String".left(3));'
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/String/num",
	head:{
		type:"method", 
		name:"num",
		flnm:"Prototype.String.num",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,String,num"
	},
	h1: "String.num",
	desc: "문자열을 parseFloat 처리해 줍니다. <br/>Number() 의 경우 쉼표 등 비숫자 문자를 제거 후 숫자로 반환하지만 num의 경우 숫자 형식이 아닌 문자열을 무시하여 처리하게 됩니다. ",
	define: "String.num();",
	arguments:[
	],
	returns: {k:"Number", v:""},
	samplecode:[
'var str = "1234";',
'trace(typeof str);',
'// string',
'',
'str = str.num();',
'trace(typeof str);',
'// number',
'',
'"1234".num(); ->  1234',
'"1,234".num(); ->  1',
'"1.11".num(); ->  1.11'
	],
	example:[],
	exampleFn:[],
	reference:[]
},

{
	id:"/API/prototype/String/number",
	head:{
		type:"method", 
		name:"number",
		flnm:"Prototype.String.number",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,String,number"
	},
	h1: "String.number",
	desc: "문자열을 Number로 변환해 줍니다. ",
	define: "String.number();",
	arguments:[
	],
	returns: {k:"Number", v:""},
	samplecode:[
'var str = "1234";',
'trace(typeof str);',
'// string',
'',
'str = str.number();',
'trace(typeof str);',
'// number',
'',
'"1,234".number(); -> 1234',
'"1,234.1".number(); -> 1234.1'
	],
	example:[],
	exampleFn:[],
	reference:[]
},

{
	id:"/API/prototype/String/object",
	head:{
		type:"method", 
		name:"object",
		flnm:"Prototype.String.object",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,String,object"
	},
	h1: "String.object",
	desc: "원하는 횟수 만큼 자릿수 맞춤 문자열을 포함한 문자열을 반환합니다. ",
	define: "String.object();",
	arguments:[
	],
	returns: {k:"JSObject", v:""},
	samplecode:[
'var myObj = "{a:1, b:2, name:\'AXJ\'}".object();',
'trace(myObj);',
'// {"a":1, "b":2, "name":"AXJ"}',
'',
'var myObjError = "{1, b:2, name:\'AXJ\'}".object();',
'trace(myObjError);',
'// {"error":"syntaxerr", "result":"syntaxerr", "msg":"JSON syntax error.\u0010{1, b:2, name:\'AXJ\'}", "body":"{1, b:2, name:\'AXJ\'}"} '
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/String/phone",
	head:{
		type:"method", 
		name:"phone",
		flnm:"Prototype.String.phone",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,String,phone"
	},
	h1: "String.phone",
	desc: "인자값 만큼 반복되는 문자열을 반환합니다. ",
	define: "String.phone();",
	arguments:[
	],
	returns: {k:"String", v:""},
	samplecode:[
'trace("장".phone());',
'// 02',
'trace("a".phone());',
'// 02',
'trace("88819123".phone());',
'// 02-8881-9123',
'trace("01088819123".phone());',
'// 010-8881-9137'
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/String/queryToObject",
	head:{
		type:"method", 
		name:"queryToObject",
		flnm:"Prototype.String.queryToObject",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,String,queryToObject"
	},
	h1: "String.queryToObject",
	desc: "queryString 형식의 문자열을 json object로 변환하여 줍니다. ",
	define: "String.queryToObject();",
	arguments:[
	],
	returns: {k:"JSObject", v:""},
	samplecode:[
'var myObject = "a=1&b=1".queryToObject();',
'trace(myObject);',
'// {"a":"1", "b":"1"} '
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/String/right",
	head:{
		type:"method", 
		name:"right",
		flnm:"Prototype.String.right",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,String,right"
	},
	h1: "String.right",
	desc: "문자열 끝부터 지정한 글자수 만큼 반환합니다. ",
	define: "String.right(Number);",
	arguments:[
		{k:"String", v:""}
	],
	returns: {k:"JSObject", v:""},
	samplecode:[
'"AXJ_String".right(3); -> "ing"',
'toast.push(\'right(3) : \'+$(\'#AXJrightTest\').val().left(3));'
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/String/setDigit",
	head:{
		type:"method", 
		name:"setDigit",
		flnm:"Prototype.String.setDigit",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,String,setDigit"
	},
	h1: "String.setDigit",
	desc: "문자열 끝부터 지정한 글자수 만큼 반환합니다. ",
	define: "String.setDigit(Number[, padder]);",
	arguments:[
		{k:"Number", v:"자릿수"},
		{k:"padder", v:"자릿수 채울 문자열 "}
	],
	returns: {k:"String", v:""},
	samplecode:[
'"A".setDigit(3); ->  "00A"',
'"A".setDigit(3, \'!\'); ->  "!!A"'
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/String/times",
	head:{
		type:"method", 
		name:"times",
		flnm:"Prototype.String.times",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,String,times"
	},
	h1: "String.times",
	desc: "문자열 끝부터 지정한 글자수 만큼 반환합니다. ",
	define: "String.times(Number);",
	arguments:[
	],
	returns: {k:"String", v:""},
	samplecode:[
'"AXJ".times(3); ->  "AXJAXJAXJ"'
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/String/toColor",
	head:{
		type:"method", 
		name:"toColor",
		flnm:"Prototype.String.toColor",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,String,toColor"
	},
	h1: "String.toColor",
	desc: "Mozila 브라우저 등에서 사용하는 색상정보 값을 표준색상코드로 변환합니다. 표준색상코드를 입력하여도 표준색상코드 값을 얻을 수 있습니다. ",
	define: "String.toColor(preFix);",
	arguments:[
		{k:"preFix", v:"색상표 앞에 들어갈 문자열을 지정합니다. "}
	],
	returns: {k:"String", v:""},
	samplecode:[
'"rgb(243, 243, 243)".toColor(); ->  "f3f3f3"',
'"rgb(243, 243, 243)".toColor(\'#\'); ->  "#f3f3f3"',
'"#f3f3f3".toColor(); ->  "f3f3f3"',
'"f3f3f3".toColor(); ->  "f3f3f3"',
'"f3f3f3".toColor(\'#\'); ->  "#f3f3f3"'
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/String/axtoJSON",
	head:{
		type:"method", 
		name:"axtoJSON",
		flnm:"Prototype.String.axtoJSON",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,String,axtoJSON"
	},
	h1: "String.axtoJSON",
	desc: "JSON 형식에 맞는 문자열을 반환합니다. ",
	define: "String.axtoJSON([Boolean]);",
	arguments:[
		{k:"Boolean", v:"문자열을 더블 쿼테이션으로 감싸주는지에 대한 옵션 "}
	],
	returns: {k:"String", v:""},
	samplecode:[
'var str = "1234.1";',
'trace(str.axtoJSON());',
'// 1234.1',
'',
'var str = "1234.1";',
'trace(str.axtoJSON(true));',
'// "1234.1"',
'',
'var str = "1234.1";',
'trace(str.axtoJSON(false));',
'// 1234.1'
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/String/trim",
	head:{
		type:"method", 
		name:"trim",
		flnm:"Prototype.String.trim",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,String,trim"
	},
	h1: "String.trim",
	desc: "문자열의 앞뒤 공백을 제거하여 줍니다. ",
	define: "String.trim();",
	arguments:[
	],
	returns: {k:"String", v:""},
	samplecode:[
'" AXJ ".trim(); ->  "AXJ"'
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/String/ucase",
	head:{
		type:"method", 
		name:"ucase",
		flnm:"Prototype.String.ucase",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,String,ucase"
	},
	h1: "String.ucase",
	desc: "대문자로 변환하여 줍니다. ",
	define: "String.ucase();",
	arguments:[
	],
	returns: {k:"String", v:""},
	samplecode:[
'"axisj".ucase() -> "AXISJ"'
	],
	example:[],
	exampleFn:[],
	reference:[]
}

{
	id:"/API/prototype/Number/abs",
	head:{
		type:"method", 
		name:"abs",
		flnm:"Prototype.Number.abs",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,Number,abs"
	},
	h1: "Number.abs",
	desc: "음수 또는 양수를 절대값으로 반환합니다. ",
	define: "Number.abs();",
	arguments:[
	],
	returns: {k:"Number", v:""},
	samplecode:[
'trace((1234).abs());',
'// 1234',
'trace((-1234).abs());',
'// 1234',
'trace((1234.123).abs());',
'// 1234.123',
'trace((-1234.123).abs());',
'// 1234.123'
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/Number/byte",
	head:{
		type:"method", 
		name:"byte",
		flnm:"Prototype.Number.byte",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,Number,byte"
	},
	h1: "Number.byte",
	desc: "숫자값을 Byte로 인식하여 값에 크기에 따르 KB, MB, GB 의 형식으로 반환합니다. ",
	define: "Number.byte();",
	arguments:[
	],
	returns: {k:"String", v:""},
	samplecode:[
'trace((1234567890).byte());',
'// 1.1GB ',
'trace((12345678).byte());',
'// 11.8MB ',
'trace((123456).byte());',
'// 120.6KB ',
'trace((123).byte());',
'// 0.1KB'
	],
	example:[
'<input type="text" name="" id="AXJ_byteTest" value="1234567890" class="AXInput W100" />',
'<input type="button" value="byte()" class="AXButton" onclick="toast.push(\'byte() : \'+$(\'#AXJ_byteTest\').val().byte());" />'
	],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/Number/ceil",
	head:{
		type:"method", 
		name:"ceil",
		flnm:"Prototype.Number.ceil",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,Number,ceil"
	},
	h1: "Number.ceil",
	desc: "\"크거나 같은 가장 작은 정수를 반환합니다.\" 이 표현은 jscript 도움말에 적힌 문구인데, 올림으로 기억하시면 쉽습니다. ",
	define: "Number.ceil();",
	arguments:[
	],
	returns: {k:"Number", v:""},
	samplecode:[
'trace((1234.9).ceil());',
'//1235',
'trace((1234.1).ceil());',
'//1235',
'trace((-1234.9).ceil());',
'//-1234',
'trace((-1234.1).ceil());',
'//-1234'
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/Number/date",
	head:{
		type:"method", 
		name:"date",
		flnm:"Prototype.Number.date",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,Number,date"
	},
	h1: "Number.date",
	desc: "숫자값을 timeserial 값으로 한 Date를 반환합니다. ",
	define: "Number.date();",
	arguments:[
	],
	returns: {k:"Date", v:""},
	samplecode:[
'trace( (29000001).date() );',
'// "1970-01-01T08:03:20Z" '
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/Number/dec",
	head:{
		type:"method", 
		name:"dec",
		flnm:"Prototype.Number.dec",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,Number,dec"
	},
	h1: "Number.dec",
	desc: "자신을 그대로 리턴합니다. <br/>애플리케이션 개발 시 String 과 Number 간의 불필요한 형변환 함수 사용을 막기 위해 선언되었습니다. ",
	define: "Number.dec();",
	arguments:[
	],
	returns: {k:"Number", v:""},
	samplecode:[
'trace( (123).dec() );',
'// 123 '
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/Number/div",
	head:{
		type:"method", 
		name:"div",
		flnm:"Prototype.Number.div",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,Number,div"
	},
	h1: "Number.div",
	desc: "나누기 연산 결과를 반환합니다. divisor 가 0인 경우 연산 결과는 오류 없이 0을 반환합니다. ",
	define: "Number.div(divisor);",
	arguments:[
		{k:"divisor", v:"나눔수"}
	],
	returns: {k:"Number", v:""},
	samplecode:[
'trace( (10).div(2); );',
'// 5',
'trace( (10).div(0); );',
'// 0'
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/Number/enc",
	head:{
		type:"method", 
		name:"enc",
		flnm:"Prototype.Number.enc",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,Number,enc"
	},
	h1: "Number.enc",
	desc: "자신을 그대로 리턴합니다. <br/>애플리케이션 개발 시 String 과 Number 간의 불필요한 형변환 함수 사용을 막기 위해 선언되었습니다. ",
	define: "Number.enc();",
	arguments:[
	],
	returns: {k:"Number", v:""},
	samplecode:[
'trace( (10).enc(); );',
'// 10'
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/Number/floor",
	head:{
		type:"method", 
		name:"floor",
		flnm:"Prototype.Number.floor",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,Number,floor"
	},
	h1: "Number.floor",
	desc: "\"작거나 같은 가장 큰 정수를 반환합니다.\" 이 표현은 jscript 도움말에 적힌 문구인데, 버림으로 기억하시면 쉽습니다. ",
	define: "Number.floor();",
	arguments:[
	],
	returns: {k:"Number", v:""},
	samplecode:[
'trace((1234.9).floor());',
'//1234',
'trace((1234.1).floor());',
'//1234',
'trace((-1234.9).floor());',
'//-1234',
'trace((-1234.1).floor());',
'//-1234'
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/Number/left",
	head:{
		type:"method", 
		name:"left",
		flnm:"Prototype.Number.left",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,Number,left"
	},
	h1: "Number.left",
	desc: "숫자의 시작부터 지정한 글자수 만큼 반환합니다. ",
	define: "Number.left(Number);",
	arguments:[
		{k:"Number", v:""}
	],
	returns: {k:"String", v:""},
	samplecode:[
'(1234).left(3); -> "123"'
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/Number/money",
	head:{
		type:"method", 
		name:"money",
		flnm:"Prototype.Number.money",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,Number,money"
	},
	h1: "Number.money",
	desc: "통화표현 단위로 변환된 문자열을 반환합니다. ",
	define: "Number.money();",
	arguments:[
	],
	returns: {k:"String", v:""},
	samplecode:[
'trace((1234.9).money());',
'//1,234.9',
'trace((1234.1).money());',
'//1,234.1',
'trace((-1234.9).money());',
'//-1,234.9',
'trace((-1234.1).money());',
'//-1,234.1',
'',
'(12345678).money(); -> "12,345,678"',
'"12345678".money(); -> "12,345,678"',
'// String 에서도 money 메소드를 직접 사용 할 수 있습니다.'
	],
	example:[
'				<input type="text" name="" id="AXJ_moneyTest" value="12345678" class="AXInput W100" />',
'				<input type="button" value="money()" class="AXButton" onclick="toast.push(\'money() : \'+$(\'#AXJ_moneyTest\').val().money());" />'
	],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/Number/number",
	head:{
		type:"method", 
		name:"number",
		flnm:"Prototype.Number.number",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,Number,number"
	},
	h1: "Number.number",
	desc: "자신을 그대로 리턴합니다. <br/>애플리케이션 개발 시 String 과 Number 간의 불필요한 형변환 함수 사용을 막기 위해 선언되었습니다. ",
	define: "Number.number();",
	arguments:[
	],
	returns: {k:"Number", v:""},
	samplecode:[
'trace( (1234567890).number(); );',
'// 1234567890'
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/Number/phone",
	head:{
		type:"method", 
		name:"phone",
		flnm:"Prototype.Number.phone",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,Number,phone"
	},
	h1: "Number.phone",
	desc: "전화번호 형식의 문자열로 반환합니다. ",
	define: "Number.phone();",
	arguments:[
	],
	returns: {k:"String", v:""},
	samplecode:[
'trace( (1).phone() );',
'//  02-1 ',
'trace( (1234567).phone() );',
'//  02-123-4567 ',
'trace( (4567891020).phone() );',
'//  02-4567-891020 '
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/Number/rangeFrom",
	head:{
		type:"method", 
		name:"rangeFrom",
		flnm:"Prototype.Number.rangeFrom",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,Number,rangeFrom"
	},
	h1: "Number.rangeFrom",
	desc: "인자값부터 원본까지 정수 단위로 이어진 배열을 리턴합니다. ",
	define: "Number.rangeFrom();",
	arguments:[
		{k:"Number", v:"숫자 배열의 시작 위치 기본값은 0 "}
	],
	returns: {k:"Array", v:""},
	samplecode:[
'trace( (10).rangeFrom() );',
'//  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] ',
'',
'trace( (10).rangeFrom(1) );',
'//  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] ',
'',
'trace( (10).rangeFrom(2) );',
'//  [2, 3, 4, 5, 6, 7, 8, 9, 10] '
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/Number/right",
	head:{
		type:"method", 
		name:"right",
		flnm:"Prototype.Number.right",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,Number,right"
	},
	h1: "Number.right",
	desc: "숫자의 끝부터 지정한 글자수 만큼 반환합니다. ",
	define: "Number.right(Number);",
	arguments:[
		{k:"Number", v:""}
	],
	returns: {k:"String", v:""},
	samplecode:[
'1234.right(3); -> 234'
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/Number/round",
	head:{
		type:"method", 
		name:"round",
		flnm:"Prototype.Number.round",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,Number,round"
	},
	h1: "Number.round",
	desc: "반올림 위치에서부터 반올림 한 값을 반환합니다. ",
	define: "Number.round([roundPosition]);",
	arguments:[
		{k:"roundPosition", v:"반올림 위치"}
	],
	returns: {k:"Number", v:""},
	samplecode:[
'trace((1234.5678).round());',
'//1235',
'trace((1234.5678).round(1));',
'//1234.6',
'trace((1234.5678).round(2));',
'//1234.57'
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/Number/setDigit",
	head:{
		type:"method", 
		name:"setDigit",
		flnm:"Prototype.Number.setDigit",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,Number,setDigit"
	},
	h1: "Number.setDigit",
	desc: "원하는 횟수 만큼 자릿수 맞춤 문자열을 포함한 문자열을 반환합니다. ",
	define: "Number.setDigit(Number[, padder, radix]);",
	arguments:[
		{k:"Number", v:"자릿수"},
		{k:"padder", v:"자릿수 맞춤 문자열 "},
		{k:"radix", v:"진수"}
	],
	returns: {k:"String", v:""},
	samplecode:[
'trace( (11).setDigit(3) );',
'//011',
'trace( (11).setDigit(3, \'!\') );',
'//!11',
'trace( (11).setDigit(3, 0, 16) );',
'//00b',
'trace( (25).setDigit(5, "X", 8) );',
'//XXX31 '
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/Number/times",
	head:{
		type:"method", 
		name:"times",
		flnm:"Prototype.Number.times",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,Number,times"
	},
	h1: "Number.times",
	desc: "인자값 만큼 반복되는 문자열을 반환합니다. ",
	define: "Number.times(Number);",
	arguments:[
		{k:"Number", v:""}
	],
	returns: {k:"String", v:""},
	samplecode:[
'(1).times(3);',
'// "111"'
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/Number/axtoJSON",
	head:{
		type:"method", 
		name:"axtoJSON",
		flnm:"Prototype.Number.axtoJSON",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,Number,axtoJSON"
	},
	h1: "Number.axtoJSON",
	desc: "자기 자신을 그대로 리턴합니다. ",
	define: "Number.axtoJSON();",
	arguments:[
	],
	returns: {k:"Number", v:""},
	samplecode:[
'(1).axtoJSON();',
'// 1'
	],
	example:[],
	exampleFn:[],
	reference:[]
}
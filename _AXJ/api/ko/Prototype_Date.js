
{
	id:"/API/prototype/Date/add",
	head:{
		type:"method", 
		name:"add",
		flnm:"Prototype.Date.add",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,Date,add"
	},
	h1: "Date.add",
	desc: "원본날짜에서 인자만큼 더해진 날짜 데이터를 반환합니다. ",
	define: "Date.add(Number[, interval]);",
	arguments:[
		{k:"Number", v:""},
		{k:"interval", v:"\"y\"|\"m\"|\"d\""}
	],
	returns: {k:"Date", v:""},
	samplecode:[
'var myDate = new Date();',
'trace(myDate.add(1));',
'// 내일값이 나옵니다.',
'',
'trace("2013-05-05".date().add(3));',
'// "2013-05-08T03:00:00Z"',
'trace("2013-05-05".date().add(2, \'m\'));	',
'//  "2013-07-05T03:00:00Z" ',
'trace("2013-05-05".date().add(2, \'y\'));',
'//  "2015-05-05T03:00:00Z" '
	],
	example:[
'<input type="text" name="" id="AXJ_dateAddTest" value="2013-05-05" class="AXInput W100" />',
'<input type="button" value="add(3)" class="AXButton" onclick="toast.push(\'add(3) : \'+$(\'#AXJ_dateAddTest\').val().date().add(3));" />'
	],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/Date/date",
	head:{
		type:"method", 
		name:"date",
		flnm:"Prototype.Date.date",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,Date"
	},
	h1: "Date.date",
	desc: "자신을 그대로 반환합니다. ",
	define: "Date.date();",
	arguments:[
	],
	returns: {k:"Date", v:""},
	samplecode:[
'var myDate = new Date();',
'trace(myDate.date());'
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/Date/diff",
	head:{
		type:"method", 
		name:"diff",
		flnm:"Prototype.Date.diff",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,Date,diff"
	},
	h1: "Date.diff",
	desc: "날짜와 날짜 사이의 날짜 수를 반환합니다. ",
	define: "Date.diff(Date|String)",
	arguments:[
		{k:"Date|String", v:""}
	],
	returns: {k:"Number", v:""},
	samplecode:[
'trace( "2013-05-05".date().diff("2013-05-08") );',
'// 3 ',
'trace( "2013-05-05".date().diff("2013-05-08".date()) );',
'// 3'
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/Date/getTimeAgo",
	head:{
		type:"method", 
		name:"getTimeAgo",
		flnm:"Prototype.Date.getTimeAgo",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,Date,getTimeAgo"
	},
	h1: "Date.getTimeAgo",
	desc: "현재와 날짜 데이터 간의 간격을 문자열로 반환합니다.  ",
	define: "Date.getTimeAgo();",
	arguments:[
	],
	returns: {k:"String", v:""},
	samplecode:[
'var pDate = new Date();',
'pDate.setTime(pDate.getTime()-1000*60);',
'trace( pDate.getTimeAgo() );',
'// 1분 전 ',
'',
'pDate.setTime(pDate.getTime()-1000*60*5);',
'trace( pDate.getTimeAgo() );',
'//  6분 전 ',
'',
'pDate.setTime(pDate.getTime()-1000*60*60);',
'trace( pDate.getTimeAgo() );',
'//  1시간 6분 전 ',
'',
'pDate.setTime(pDate.getTime()-1000*60*60*24);',
'trace( pDate.getTimeAgo() );',
'//  2013년 11월 19일 화 '
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/Date/print",
	head:{
		type:"method", 
		name:"print",
		flnm:"Prototype.Date.print",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,Date,print"
	},
	h1: "Date.print",
	desc: "yyyy:년도, mm:월, dd:일, hh:시, mi:분, ss:초, dw:요일 을 조합하여 format으로 지정하면 그에 맞는 날짜형식 문자열이 반환됩니다. ",
	define: "Date.print([printFormat]);",
	arguments:[
		{k:"printFormat", v:"yyyy: 년도, mm:월, dd:일, hh:시, mi:분, ss:초, dw:요일 "}
	],
	returns: {k:"String", v:""},
	samplecode:[
'"2013-05-05".date().print(); -> "2013-05-05"',
'"2013-05-05".date().print(\'yyyy년 mm월 dd일\'); -> "2013년 05월 05일"',
'"2013-05-05".date().print(\'yyyy년 mm월 dd일 (dw)\'); -> "2013년 05월 05일 (일)"'
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/Date/axtoJSON",
	head:{
		type:"method", 
		name:"axtoJSON",
		flnm:"Prototype.Date.axtoJSON",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,Date,axtoJSON"
	},
	h1: "Date.axtoJSON",
	desc: "날짜의 문자열 데이터를 반환합니다. ",
	define: "Date.axtoJSON();",
	arguments:[
	],
	returns: {k:"String", v:""},
	samplecode:[
'trace( "2013-05-05".date().axtoJSON() );',
'// "2013-05-05T03:00:00Z" '
	],
	example:[],
	exampleFn:[],
	reference:[]
}
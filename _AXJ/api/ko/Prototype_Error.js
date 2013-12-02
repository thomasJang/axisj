
{
	id:"/API/prototype/Error/print",
	head:{
		type:"method", 
		name:"print",
		flnm:"Prototype.Error.print",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,Error,print"
	},
	h1: "Error.print",
	desc: "에러 객체를 문자열로 리턴 합니다. ",
	define: "Error.print();",
	arguments:[
	],
	returns: {k:"String", v:""},
	samplecode:[
'try{',
'	var a;',
'	a.test();	',
'}catch(e){',
'	trace(e.print());',
'	// 5007 : TypeError: 정의되지 않음 또는 null 참조인 \'test\' 속성을 가져올 수 없습니다. ',
'}'
	],
	example:[],
	exampleFn:[],
	reference:[]
}
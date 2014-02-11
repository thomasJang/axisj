
{
	id:"/API/prototype/Array/clear",
	head:{
		type:"method", 
		name:"clear",
		flnm:"Prototype.Array.clear",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,Array,clear"
	},
	h1: "Array.clear",
	desc: "Array를 빈 Array 로 변경합니다.",
	define: "Array.clear();",
	arguments:[
	],
	returns: {k:"Array", v:""},
	samplecode:[
'var a = [1,2,3];',
'trace(a);',
'// [1, 2, 3]',
'trace(a.clear());',
'// []',
'trace(a);',
'// []'
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/Array/convertTree",
	head:{
		type:"method", 
		name:"convertTree",
		flnm:"Prototype.Array.convertTree",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,Array,convertTree"
	},
	h1: "Array.convertTree",
	desc: "리스트형 데이터를 부모 참조키와 자식 참조키를 이용하여 트리형 데이터로 변환처리 합니다. ",
	define: "Array.convertTree(parentKey, childKey[, hashDigit]);",
	arguments:[
		{k:"parentKey", v:"부모 아이템 식별자"},
		{k:"childKey", v:"아이템 식별자"},
		{k:"hashDigit", v:"트리의 주소값에 해당하는 hash 의 자릿수 단위 설정 (기본값 3) "}
	],
	returns: {k:"JSObject", v:""},
	samplecode:[
'var a = [',
'	{pno:0, no:1, name:"장기영"},',
'	{pno:1, no:2, name:"장기영"},',
'	{pno:1, no:3, name:"장기영"},',
'	{pno:3, no:4, name:"장기영"},',
'	{pno:3, no:5, name:"장기영"},',
'	{pno:5, no:6, name:"장기영"},',
'	{pno:5, no:7, name:"장기영"}',
'];',
'',
'var myTree = a.convertTree("pno", "no");',
'trace(myTree);',
'//[{"pno":0, "no":1, "name":"장기영", "subTree":[{"pno":1, "no":2, "name":"장기영", "__subTreeLength":0, "subTree":[], "pHash":"000_000", "hash":"000_000_000"}, {"pno":1, "no":3, "name":"장기영", "__subTreeLength":2, "subTree":[{"pno":3, "no":4, "name":"장기영", "__subTreeLength":0, "subTree":[], "pHash":"000_000_001", "hash":"000_000_001_000"}, {"pno":3, "no":5, "name":"장기영", "__subTreeLength":2, "subTree":[{"pno":5, "no":6, "name":"장기영", "__subTreeLength":0, "subTree":[], "pHash":"000_000_001_001", "hash":"000_000_001_001_000"}, {"pno":5, "no":7, "name":"장기영", "__subTreeLength":0, "subTree":[], "pHash":"000_000_001_001", "hash":"000_000_001_001_001"}], "pHash":"000_000_001", "hash":"000_000_001_001"}], "pHash":"000_000", "hash":"000_000_001"}], "__subTreeLength":2, "pHash":"000", "hash":"000_000"}] '
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/Array/first",
	head:{
		type:"method", 
		name:"first",
		flnm:"Prototype.Array.first",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,Array,first"
	},
	h1: "Array.first",
	desc: "Array의 첫번째 아이템을 반환합니다. ",
	define: "Array.first();",
	arguments:[
	],
	returns: {k:"JSObject", v:""},
	samplecode:[
'var a = [1,2,3];',
'trace(a.first());',
'// 1',
'',
'var b = [{a:"액시스제이"}, 2, 3];',
'trace(b.first());',
'// {"a":"액시스제이"} ',
'',
'var c = [[1,2,3], 2, 3];',
'trace(c.first());',
'// [1, 2, 3] '
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/Array/getIndex",
	head:{
		type:"method", 
		name:"getIndex",
		flnm:"Prototype.Array.getIndex",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,Array,getIndex"
	},
	h1: "Array.getIndex",
	desc: "조건에 맞는 아이템을 index 값과 함께 반환합니다. ",
	define: "Array.getIndex(Function);",
	arguments:[
		{k:"Function", v:""}
	],
	returns: {k:"JSObject", v:""},
	samplecode:[
'var b = [1,2,3,4];',
'trace(b);',
'// [1, 2, 3, 4]',
'trace(b.getIndex(function(idx, item){',
'	return (this.item >= 3);',
'}));',
'//  {"item":3, "index":2} '
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/Array/getMaxObject",
	head:{
		type:"method", 
		name:"getMaxObject",
		flnm:"Prototype.Array.getMaxObject",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,Array,getMaxObject"
	},
	h1: "Array.getMaxObject",
	desc: "인자에 맞는 키값을 기준으로 정렬한 후 가장 큰 아이템을 반환합니다. ",
	define: "Array.getMaxObject(key);",
	arguments:[
		{k:"key", v:"정렬기준이 되는 키 값"}
	],
	returns: {k:"JSObject", v:""},
	samplecode:[
'var a = [',
'	{a:"abc", b:""},',
'	{a:"def", b:""},',
'	{a:"456", b:""},',
'	{a:"123", b:""},',
'	{a:"789", b:""}',
'];',
'',
'trace( a.getMaxObject("a") );',
'// {"a":"def", "b":""} '
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/Array/getMinObject",
	head:{
		type:"method", 
		name:"getMinObject",
		flnm:"Prototype.Array.getMinObject",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,Array,getMinObject"
	},
	h1: "Array.getMinObject",
	desc: "인자에 맞는 키값을 기준으로 정렬한 후 가장 작은 아이템을 반환합니다. ",
	define: "Array.getMinObject(key);",
	arguments:[
		{k:"key", v:"정렬기준이 되는 키 값"}
	],
	returns: {k:"JSObject", v:""},
	samplecode:[
'var a = [',
'	{a:"abc", b:""},',
'	{a:"def", b:""},',
'	{a:"456", b:""},',
'	{a:"123", b:""},',
'	{a:"789", b:""}',
'];',
'',
'trace( a.getMinObject("a") );',
'// {"a":"123", "b":""} '
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/Array/getToSeq",
	head:{
		type:"method", 
		name:"getToSeq",
		flnm:"Prototype.Array.getToSeq",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,Array,getToSeq"
	},
	h1: "Array.getToSeq",
	desc: "인자값에 해당하는 인덱스의 아이템을 반환합니다. ",
	define: "Array.getToSeq(Number);",
	arguments:[
		{k:"Number", v:"반환하려는 대상 인덱스 "}
	],
	returns: {k:"JSObject", v:""},
	samplecode:[
'var a = [1,2,3];',
'trace(a.getToSeq(1));',
'// 2',
'',
'var a = [1,{a:2},3];',
'trace(a.getToSeq(1));',
'// {"a":2} '
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/Array/has",
	head:{
		type:"method", 
		name:"has",
		flnm:"Prototype.Array.has",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,Array,has"
	},
	h1: "Array.has",
	desc: "사용자가 정의한 조건에 맞는 아이템을 한 개만 반환합니다. ",
	define: "Array.has(Function);",
	arguments:[
		{k:"Function", v:"조건식에 맞는 아이템을 반환합니다. "}
	],
	returns: {k:"JSObject", v:""},
	samplecode:[
'var a = [1,2,3,4];',
'trace(a);',
'// [1, 2, 3, 4]',
'trace(a.has(function(idx, item){',
'	return (item == 3);',
'}));',
'// 3 ',
'',
'var b = [1,2,3,4];',
'trace(b);',
'// [1, 2, 3, 4]',
'trace(b.has(function(idx, item){',
'	return (this.item == 3);',
'}));',
'// 3 '
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/Array/last",
	head:{
		type:"method", 
		name:"last",
		flnm:"Prototype.Array.last",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,Array,last"
	},
	h1: "Array.last",
	desc: "array의 마지막 아이템을 반환합니다. ",
	define: "Array.last();",
	arguments:[
	],
	returns: {k:"JSObject", v:""},
	samplecode:[
'var a = [1,2,3];',
'trace(a.last());',
'// 1',
'',
'var b = [1, 2, {a:"액시스제이"}];',
'trace(b.last());',
'// {"a":"액시스제이"} ',
'',
'var c = [1, 2, [1,2,3]];',
'trace(c.last());',
'// [1, 2, 3] '
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/Array/remove",
	head:{
		type:"method", 
		name:"remove",
		flnm:"Prototype.Array.remove",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,Array,remove"
	},
	h1: "Array.remove",
	desc: "사용자가 정의한 조건에 맞는 아이템을 제거한 Array 를 반환합니다. ",
	define: "Array.remove(Function);",
	arguments:[
		{k:"Function", v:"remove 처리할 대상에 return true; 하면 true 인 대상이 제거 됩니다. "}
	],
	returns: {k:"Array", v:""},
	samplecode:[
'var a = [1,2,3,4];',
'trace(a);',
'// [1, 2, 3, 4] ',
'a = a.remove(function(idx, item){',
'	return (item == 3);',
'});',
'trace(a);',
'// [1, 2, 4] ',
'',
'var b = [1,2,3,4];',
'trace(b);',
'// [1, 2, 3, 4] ',
'b = b.remove(function(){',
'	return (this.item == 3 || this.index == 0);',
'});',
'trace(b);',
'// [2, 4] '
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/Array/searchObject",
	head:{
		type:"method", 
		name:"searchObject",
		flnm:"Prototype.Array.searchObject",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,Array,searchObject"
	},
	h1: "Array.searchObject",
	desc: "사용자가 정의한 조건에 맞는 아이템을 모두 반환합니다. ",
	define: "Array.searchObject(Function);",
	arguments:[
		{k:"Function", v:"조건식에 맞는 아이템을 반환합니다. "}
	],
	returns: {k:"Array", v:""},
	samplecode:[
'var a = [1,2,3,4];',
'trace(a);',
'// [1, 2, 3, 4]',
'trace(a.searchObject(function(idx, item){',
'	return (item < 3);',
'}));',
'// [1, 2] ',
'',
'var b = [1,2,3,4];',
'trace(b);',
'// [1, 2, 3, 4]',
'trace(b.searchObject(function(idx, item){',
'	return (this.item < 3);',
'}));',
'// [1, 2]'
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/prototype/Array/axtoJSON",
	head:{
		type:"method", 
		name:"axtoJSON",
		flnm:"Prototype.Array.axtoJSON",
		file:"_AXJ/lib/AXJ.js",
		tags:"Prototype,Array,axtoJSON"
	},
	h1: "Array.axtoJSON",
	desc: "JSON 문자열로 대상을 반환합니다. ",
	define: "Array.axtoJSON();",
	arguments:[
	],
	returns: {k:"String", v:""},
	samplecode:[
'var a = [1,2,3];',
'trace(a.axtoJSON());',
'//  [1, 2, 3] ',
'',
'var b = [1,{a:2},3];',
'trace(b.axtoJSON());',
'// [1, {"a":2}, 3] '
	],
	example:[],
	exampleFn:[],
	reference:[]
}
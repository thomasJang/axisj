
{
	id:"/API/Objects/AXUtil",
	head:{
		type:"Objects", 
		name:"AXUtil",
		flnm:"Objects.AXUtil",
		file:"_AXJ/lib/AXJ.js",
		tags:"Objects,AXUtil"
	},
	h1:"AXUtil",
	items: [
		{
			name: "timekey", 
			type: "method", 
			desc: "현재시간을 나타내는 타임시리얼 코드를 반환합니다.",
			define: "AXUtil.timekey();",
			returns: {k:"String", v:"Ayyyymmdd 의 조합"},
			samplecode:[
'trace(AXUtil.timekey());',
'// A162823302',
'// 첫번째 문자열은 AXISJ 약어 A 입니다.'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"overwriteObject", 
			type:		"method", 
			desc:		"타겟 오브젝트에 대상 오브젝트를 덮어쓰기 합니다.",
			define:		"AXUtil.overwriteObject(JSObject, JSObject[, rewrite]);",
			arguments: [
				{k:"JSObject", v:"타겟 오브젝트"},
				{k:"JSObject", v:"대상 오브젝트"},
				{k:"rewrite", v:"덮어쓰기 유무 기본값은 true 덮어쓰기 모드일때 대상 오브젝트의 키로 타겟 오브젝트를 치환합니다. false 인 경우 타겟 오브젝트에 존재하지 않는 키 만 추가 합니다."}
			],
			returns: {k:"JSObject", v:""},
			samplecode:	[
'var myObj = {name:"AXISJ"};',
'var myObj2 = {name:"null", url:"http://www.axisj.com"};',
'AXUtil.overwriteObject(myObj, myObj2);',
'trace(myObj);',
'//{"name":"null", "url":"http://www.axisj.com"} ',
'',
'var myObj = {name:"AXISJ"};',
'var myObj2 = {name:"null", url:"http://www.axisj.com"};',
'var newObj = AXUtil.overwriteObject(myObj, myObj2, false);',
'trace(myObj);',
'//{"name":"AXISJ", "url":"http://www.axisj.com"} ',
'trace(newObj);',
'//{"name":"AXISJ", "url":"http://www.axisj.com"} ',
'//처리된 오브젝트를 리턴 받아 사용 할 수 도 있습니다.'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"copyObject", 
			type:		"method", 
			desc:		"타겟 오브젝트를 복제 합니다.",
			define:		"AXUtil.copyObject(JSObject);",
			arguments: [
				{k:"JSObject", v:"타겟 오브젝트"}
			],
			returns: {k:"JSObject", v:""},
			samplecode:	[
'var myObj = {name:"AXISJ"};',
'var myObj2 = myObj;',
'myObj.id = 1;',
'',
'trace(myObj);',
'//{"name":"AXISJ", "id":1} ',
'trace(myObj2);',
'//{"name":"AXISJ", "id":1} ',
'',
'var newObj = AXUtil.copyObject(myObj);',
'myObj.etc = 1;',
'',
'trace(myObj2);',
'//{"name":"AXISJ", "id":1, "etc":1} ',
'trace(newObj);',
'//{"name":"AXISJ", "id":1} ',
'//copyObject 를 처리 하지 않은 오브젝트는 원본에 속성이 변경 될 때 영향을 받지만 복제된 오브젝트는 별개의 개체로 인식 됩니다.'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"setCookie", 
			type:		"method", 
			desc:		"쿠키에 값을 지정합니다.",
			define:		"AXUtil.setCookie(name, value, expiredays);",
			arguments: [
				{k:"name", v:""},
				{k:"value", v:""},
				{k:"expiredays", v:"쿠키 만료 일수"}
			],
			returns: {k:"", v:""},
			samplecode:	[
'AXUtil.setCookie("myname", "tomas", 10);'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"getCookie", 
			type:		"method", 
			desc:		"쿠키에서 값을 읽어들입니다.",
			define:		"AXUtil.getCookie(name);",
			arguments: [
				{k:"name", v:""}
			],
			returns: {k:"String", v:""},
			samplecode:	[
'trace( AXUtil.getCookie("myname") );',
'// tomas'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		} // AXUtil.dayLen 할 차례
	]
}

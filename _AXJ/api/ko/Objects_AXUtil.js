
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
		},
		{
			name:		"dayLen", 
			type:		"method", 
			desc:		"지정한 년도와 월의 날자수를 반환합니다.",
			define:		"AXUtil.getCookie(name);",
			arguments: [
				{k:"year", v:""},
				{k:"month", v:"주의 Data.getMonth() 의 반환값을 그대로 사용 하므로 1월은 0 으로 전달 해야 합니다. 0~11 까지의 값을 사용할 수 있습니다. "}
			],
			returns: {k:"Number", v:""},
			samplecode:	[
'trace( AXUtil.dayLen(2013, 1) );',
'// 28'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"clientHeight", 
			type:		"method", 
			desc:		"브라우저 clientHeight 반환합니다. window 창 높이와 같습니다.",
			define:		"AXUtil.clientHeight();",
			arguments: [],
			returns: {k:"Number", v:""},
			samplecode:	[
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"scrollHeight", 
			type:		"method", 
			desc:		"브라우저 scrollHeight 반환합니다.",
			define:		"AXUtil.scrollHeight();",
			arguments: [],
			returns: {k:"Number", v:""},
			samplecode:	[
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"clientWidth", 
			type:		"method", 
			desc:		"브라우저 clientWidth 반환합니다. window 창 너비와 같습니다.",
			define:		"AXUtil.clientWidth();",
			arguments: [],
			returns: {k:"Number", v:""},
			samplecode:	[
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"scrollWidth", 
			type:		"method", 
			desc:		"페이지 scrollWidth 반환합니다.",
			define:		"AXUtil.scrollWidth();",
			arguments: [],
			returns: {k:"Number", v:""},
			samplecode:	[
			],
			example:[],
			exampleFn:[],
			reference:[]
		},
		{
			name:		"Event", 
			type:		"Object", 
			desc:		"Event.keyCode 모음",
			define:	"",
			arguments: [],
			returns: {k:"Number", v:""},
			samplecode:	[
				'Event: {',
				'	KEY_BACKSPACE: 8,',
				'	KEY_TAB: 9,',
				'	KEY_RETURN: 13,',
				'	KEY_ESC: 27,',
				'	KEY_LEFT: 37,',
				'	KEY_UP: 38,',
				'	KEY_RIGHT: 39,',
				'	KEY_DOWN: 40,',
				'	KEY_DELETE: 46,',
				'	KEY_HOME: 36,',
				'	KEY_END: 35,',
				'	KEY_PAGEUP: 33,',
				'	KEY_PAGEDOWN: 34,',
				'	KEY_INSERT: 45,',
				'	cache: {}',
				'}'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"console", 
			type:		"method", 
			desc:		"브라우저 console 에 메세지를 출력하여 줍니다. trace 와 같습니다. ",
			define:		"AXUtil.console(JSObject);",
			arguments: [
				{k:"JSObject", v:""}
			],
			returns: {k:"", v:""},
			samplecode:	[
				'AXUtil.console("AXISJ");',
				'// AXISJ',
				'',
				'AXUtil.console(1234);',
				'// 1234',
				'',
				'var myObj = {name:"AXISJ", url:"http://www.axisj.com"};',
				'AXUtil.console(myObj);',
				'// {"name":"AXISJ", "url":"http://www.axisj.com"} '
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"alert", 
			type:		"method", 
			desc:		"window.alert 를 확장하여 JSObject 구조를 출력 합니다.",
			define:		"AXUtil.alert(JSObject);",
			arguments: [
				{k:"JSObject", v:""}
			],
			returns: {k:"", v:""},
			samplecode:	[
				'AXUtil.alert("AXISJ");',
				'// AXISJ',
				'',
				'AXUtil.alert(1234);',
				'// 1234',
				'',
				'var myObj = {name:"AXISJ", url:"http://www.axisj.com"};',
				'AXUtil.alert(myObj);',
				'// {"name":"AXISJ", "url":"http://www.axisj.com"} '
			],
			example:[
				'<input type="button" value="AXUtil.alert()" class="AXButton" onclick=\'AXUtil.alert({name:"AXISJ", url:"http://www.axisj.com"});\' />'
			],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"confirm", 
			type:		"method", 
			desc:		"window.confirm 를 확장하여 JSObject 구조를 출력 합니다.",
			define:		"AXUtil.confirm(JSObject);",
			arguments: [
				{k:"JSObject", v:""}
			],
			returns: {k:"", v:""},
			samplecode:	[
				'AXUtil.confirm("AXISJ");',
				'// AXISJ',
				'',
				'AXUtil.confirm(1234);',
				'// 1234',
				'',
				'var myObj = {name:"AXISJ", url:"http://www.axisj.com"};',
				'AXUtil.confirm(myObj);',
				'// {"name":"AXISJ", "url":"http://www.axisj.com"} '
			],
			example:[
				'<input type="button" value="AXUtil.confirm()" class="AXButton" onclick=\'AXUtil.confirm({name:"AXISJ", url:"http://www.axisj.com"});\' />'
			],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"isEmpty", 
			type:		"method", 
			desc:		"대상 개체가 undefined, null, \"\" 인지 체크 합니다.",
			define:		"AXUtil.confirm(JSObject);",
			arguments: [
				{k:"JSObject", v:""}
			],
			returns: {k:"Boolean", v:""},
			samplecode:	[
'trace( AXUtil.isEmpty("AXISJ") );',
'// false',
'trace( AXUtil.isEmpty("") );',
'// true',
'trace( AXUtil.isEmpty(undefined) );',
'// true'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"getUrlInfo", 
			type:		"method", 
			desc:		"브라우저 각종 속성 정보를 반환합니다.",
			define:		"AXUtil.getUrlInfo();",
			arguments: [
				
			],
			returns: {k:"JSObject", v:""},
			samplecode:	[
'trace( AXUtil.getUrlInfo() );',
'',
'/*',
'{',
'	"url":"http://127.0.0.1:2013/samples/AXcore/test.html", ',
'	"param":"", ',
'	"anchorData":"127.0.0.1:2013/samples/AXcore/test.html", ',
'	"urlParam":"http://127.0.0.1:2013/samples/AXcore/test.html", ',
'	"referUrl":"", ',
'	"pathName":"/samples/AXcore/test.html", ',
'	"protocol":"http:", ',
'	"hostName":"127.0.0.1"',
'} ',
'*/'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		}
	]
}

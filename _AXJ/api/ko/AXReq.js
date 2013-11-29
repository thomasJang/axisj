
{
	id:"/API/Classes/AXReq",
	head:{
		type : "Class", 
		name : "AXReq",
		flnm  :"Classes.AXReq",
		file : "_AXJ/lib/AXJ.js",
		tags : "Class,AXReq"
	},
	h1:"AXReq",

	items: [
		{
			name:		"initialize", 
			type:		"method", 
			desc:		"AJAX 통신을 지원하는 클래스 모듈입니다. 내부적으로 AXReqQue 오브젝트로 연계하여 작동하며 사용자의 요청대로 큐에 쌓아 개별 요청단위로 큐 처리 해줍니다. configs 에 들어가는 옵션중에 pars, debug, onsucc, onerr 를 제외하고 <a href='http://api.jquery.com/jQuery.ajax/' target='_blank'>http://api.jquery.com/jQuery.ajax/</a> 에서 지원하는 옵션을 모두 처리 할 수 있습니다.",
			define:		"new AXReq(url, configs);",
			arguments:	[
				{k:"url", v:"(String) AJAX 호출 URL"},
				{k:"configs", v:{
					pars: "AJAX 호출 URL 파라미터",
					type: "(<b>\"post\"</b>|\"get\") 파라미터 전송 방식",
					onsucc: "(Function) AJAX 통신 성공시 발생되는 콜백 함수 ",
					onerr: "(Function) AJAX 통신 에러시 발생되는 콜백 함수 http.status != 200 인경우",
					async: "(<b>true</b>|false) AJAX 전송을 true:동기, false:비동기 으로 정합니다.",
					dataType: "xml, json, script, or html, jsonp", 
					responseType: "필요한 경우 설정 하세요",
					contentType: "<b>\"application/x-www-form-urlencoded; charset=UTF-8\"</b> 서버환경에 따라 필요한 경우 변경 합니다. .net 웹메소드 개발시에는 \"application/json; charset=utf-8\" 로 설정 하세요.",
					crossDomain: "(<b>false</b>|true) 크로스도메인 통신을 원한다면 true 로 설정하세요.",
					debug: "(<b>false</b>|true)"
				}}
			],
			returns:		{k:"", v:""},
			samplecode:	[
'var url = "";',
'var pars = "";',
'new AXReq(url, {debug:false, pars:pars, onsucc:function(res){',
'		if(res.result == AXUtil.ajaxOkCode){',
'			//trace("requestOk");	',
'		}else{',
'			AXUtil.alert(res);',
'		}',
'	},',
'	onerr:function(res){',
'		alert("onFail:" + req.responseText);',
'	}',
'});',
'',
'// 속성정의 사항',
'AXReq.config = {',
'	pars: "",',
'	type: "post",',
'	onsucc: "",',
'	onerr: "",',
'	async: true,',
'	dataType: "", ',
'	responseType: "",',
'	debug:false',
'};'
			],
			example:[],
			exampleFn:[],
			reference:[]
		}
	]
}
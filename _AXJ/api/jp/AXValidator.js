
{
	id:"/API/Classes/AXValidator",
	head:{
		type:"Class", 
		name:"AXValidator",
		flnm:"Classes.AXValidator",
		file:"_AXJ/lib/AXValidator.js",
		tags:"Class,AXValidator",
		focus:""
	},
	h1:"AXValidator",
	items: [
		{
			aname:		"AXValidator-initialize", 
			name:		"initialize", 
			type:		"method", 
			desc:		"클래스를 초기화 합니다. 초기화 한 오브젝트를 변수에 담아 제어할 수 있습니다.",
			define:		"new AXValidator();",
			arguments:	[],
			returns:		{k:"", v:""},
			samplecode:	["var myValidator = new AXValidator();"],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			aname:		"AXValidator-setConfig", 
			name:		"setConfig",
			type:		"method", 
			desc:		"선언된 클래스를 사용하기 위해 속성을 정의합니다. setConfig 메소드가 실행되면 지정된 form 하위의 input 엘리먼트에 av- 로 시작하는 클래스를 감지하여  Validate 대상에 추가합니다. ",
			define:		"_AXValidator.setConfig(configs);\n"+
						"//Validate대상에 추가되는 클래스 목록 \n"+
						"av-required : 필수항목\n"+
						"av-number : 숫자 \n"+
						"av-email : 이메일 형식 체크 \n"+
						"av-hangul : 영문입력 거부 \n"+
						"av-engonly : 영문입력만 허용 \n"+
						"av-residentno : 주민등록 번호 형식 \n"+
						"av-foreignerno : 외국인 번호 형식 \n"+
						"av-bizno : 사업자 등록번호 형식 \n"+
						"av-phone : 전화번호 형식 \n"+
						"av-isdate : 날짜 형식 \n"+
						"av-zip : 우편번호 형식 \n"+
						"av-money : 숫자이면서 ',' 포함 ",
			arguments:	[
				{k:"configs", v:{
					targetFormName: "validate를 수행하려는 form 이름"
				}}
			],
			returns:		{k:"", v:""},
			samplecode:	[
				'myValidator.setConfig({',
				'	targetFormName : "myForm",',
				'});'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			aname:		"AXValidator-add", 
			name:		"add",
			type:		"method", 
			desc:		"validate 대상 아이템을 추가합니다.",
			define:		"_AXValidator.add(JSObject);",
			arguments:	[
				{k:"JSObject", v:{
					id: "아이템식별자",
				    label: "아이템라벨",
				    config: {
				        required: "(true) 필수입력 체크",
				        number: "(true) 숫자입력 체크",
				        email: "(true) 이메일형식 체크",
				        hangul: "(true) 한글형식 체크",
				        engonly: "(true) 영문형식 체크",
				        residentno: "(true) 주민등록번호형식 체크",
				        foreignerno: "(true) 외국인번호형식 체크",
				        bizno: "(true) 사업자등록번호형식 체크",
				        phone: "(true) 전화번호형식 체크",
				        isdate: "(true) 날짜형식 체크",
				        zip: "(true) 우편번호형식 체크",
				        money: "(true) 숫자에 , 포함 체크",
				        earlierThan: {id:"대상의 아이디. 현재 아이템의 값이 대상보다 커야함", label:"대상의 라벨"},
				        laterThan: {id:"대상의 아이디. 현재 아이템의 값이 대상보다 작아야함", label:"대상의 라벨"},
				        min: "(true) 최소값",
				        max: "(true) 최대값",
				        minbyte: "(true) 최소바이트값",
				        maxbyte: "(true) 최대바이트값",
				        minlength: "(true) 최소길이",
				        maxlength: "(true) 최대길이"
				    },
				    realtime: {
				        event: "(String) keydown",
				        response: "(Function) 정의된 이벤트에 따른 실시간 이벤트 콜백함수"
				    },
					onblur: "(Function) 대상 아이템에 블러 이벤트 발생 콜백함수"
				}}
			],
			returns:		{k:"", v:""},
			samplecode:	[
				'myValidator.add({',
				'    id: "userID",',
				'    label: "아이디",',
				'    config: {',
				'        required: true,',
				'        minbyte:10,',
				'        maxbyte:20',
				'    },',
				'    realtime: {',
				'        event: "keydown",',
				'        response: function () {',
				'        	if(this.result){',
				'        		$("#userID_realtime").html("OK");',
				'        	}else{',
				'            	$("#userID_realtime").html(this.message);',
				'           }',
				'			if (this.validateKey == "maxbyte" || this.validateKey == "maxlength") {',
				'			    return false; //키 입력 중지',
				'			} else {',
				'			    return true; //키 입력 제어 안함',
				'			}',
				'        }',
				'    },',
				'	onblur: function(){',
				'		trace(this);',
				'	}',
				'});',
				'',
				'myValidator.add({',
				'	id:"enddate", label:"종료일",',
				'	config:{isdate:true, laterThan:{id:"regdate", label:"등록일"}},',
				'	onblur: function(){',
				'',
				'	}',
				'});'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			aname:		"AXValidator-del", 
			name:		"del",
			type:		"method", 
			desc:		"validate 대상 아이템을 제거합니다.",
			define:		"_AXValidator.del(JSObject);",
			arguments:	[
				{k:"JSObject", v:{
					id: "아이템식별자"
				}}
			],
			returns:		{k:"", v:""},
			samplecode:	[
				''
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			aname:		"AXValidator-validate", 
			name:		"validate",
			type:		"method", 
			desc:		"validate 처리결과를 리턴합니다.",
			define:		"_AXValidator.validate();",
			arguments:	[
			],
			returns:		{k:"Boolean", v:"(true|false)"},
			samplecode:	[
				'var validateResult = myValidator.validate();'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			aname:		"AXValidator-getErrorMessage",
			name:		"getErrorMessage",
			type:		"method", 
			desc:		"",
			define:		"_AXValidator.getErrorMessage();",
			arguments:	[
			],
			returns:		{k:"String", v:"에러메세지"},
			samplecode:	[
				'var validateResult = myValidator.validate();',
				'if (!validateResult) {',
				'	var msg = myValidator.getErrorMessage();',
				'	alert(msg);',
				'	myValidator.getErrorElement().focus();',
				'	return false;',
				'}else{',
				'	alert(	validateResult );',
				'}'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			aname:		"AXValidator-getErrorElement",
			name:		"getErrorElement",
			type:		"method", 
			desc:		"",
			define:		"_AXValidator.getErrorElement();",
			arguments:	[
			],
			returns:		{k:"HTMLElement", v:"에러가 발생된 엘리먼트"},
			samplecode:	[
				'var validateResult = myValidator.validate();',
				'if (!validateResult) {',
				'	var msg = myValidator.getErrorMessage();',
				'	alert(msg);',
				'	myValidator.getErrorElement().focus();',
				'	return false;',
				'}else{',
				'	alert(	validateResult );',
				'}'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		}
	]
}
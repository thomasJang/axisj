
{
	id:"/API/Classes/AXModal",
	head:{
		type:"Class", 
		name:"AXModal",
		flnm:"Classes.AXModal",
		file:"_AXJ/lib/AXModal.js",
		tags:"Class,AXModal"
	},
	h1:"AXModal",

	items: [
		{
			name:		"initialize", 
			type:		"method", 
			desc:		"클래스를 초기화 합니다. 초기화 한 오브젝트를 변수에 담아 제어할 수 있습니다.",
			define:		"new AXModal();",
			arguments:	[],
			returns:		{k:"", v:""},
			samplecode:	["var myModal = new AXModal();"],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"setConfig", 
			type:		"method", 
			desc:		"선언된 클래스를 사용하기 위해 속성을 정의합니다.",
			define:		"_AXModal.setConfig(configs);",
			arguments:	[
				{k:"configs", v:{
					windowID : "모달 식별 아이디",
					width : "모달의 기본 너비",
					displayLoading : "모달창이 오픈될 때 로딩 표시 여부 기본값을 true",
					contentDivClass : "iframe 모달의 창이 오픈된 경우 iframe 의 높이를 정확히 제어하기 위해 컨텐츠 전체를 감싸는 대상에 지정한 className 값 (기본값 : 'bodyHeightDiv')"
				}}
			],
			returns:		{k:"", v:""},
			samplecode:	[
				'myModal.setConfig({',
				'	windowID:"myModalCT", width:740,',
				'	displayLoading:true',
				'});'
			],
			example:[],
			exampleFn:[],
			reference:[]
		},
		{
			name:		"setWidth", 
			type:		"method", 
			desc:		"모달의 기본 너비 속성을 변경하고 창이 열려있는 상태이면 동적으로 창의 크기도 변경합니다. (단, openDIV 로 모달이 오픈된 경우는 해당사항 없음)",
			define:		"_AXModal.setWidth(Number);",
			arguments:	[{k:"Number", v:"모달의 기본 너비"}],
			returns:		{k:"Array", v:"selectedElements"},
			samplecode:	[
				'myModal.setWidth(800);'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"open", 
			type:		"method", 
			desc:		"iframe 을 내장하는 모달 창을 오픈합니다.",
			define:		"_AXModal.open(configs);",
			arguments:	[{k:"configs", v:{
					url:"모달창의 URL",
					pars:"모달창 URL 에 전달 될 파라미터 모달창에는 ",
					methos:"post(default) | get 파라미터 전달방식",
					top:"모달창 포지션 top",
					width:"모달창 너비",
					closeByEscKey:"false(default) | true  모달창 닫기를 esc 키로 닫을 지 여부 "
				}}],
			returns:		{k:"", v:""},
			samplecode:	[
				'myModal.open({',
				'	url:"modal.asp",',
				'	pars:"",',
				'	top:100,',
				'	closeByEscKey:true',
				'});'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"openDiv", 
			type:		"method", 
			desc:		"div 모달 창을 오픈합니다.",
			define:		"_AXModal.openDiv(configs);",
			arguments:	[{k:"configs",v:{
				modalID:"모달창의 식별자",
				targetID:"모달창 타켓 엘리먼트 아이디",
				width:"모달창 너비",
				top:"모달창의 오픈 포지션 top",
				closeByEscKey:"false(default) | true  모달창 닫기를 esc 키로 닫을 지 여부 "
			}}],
			returns:		{k:"", v:""},
			samplecode:	[
				'myModal.openDiv({',
				'	modalID:"modalDiv01",',
				'	targetID:"modalContent",',
				'	width:300,',
				'	top:100',
				'});'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"openNew", 
			type:		"method", 
			desc:		"새로운 창으로 모달 창을 오픈 합니다.",
			define:		"_AXModal.openNew();",
			arguments:	[{k:"configs",v:{
				url:"새창 오픈 URL",
				pars:"새창 오픈 URL 전달 파라미터",
				name:"새창이름",
				options:"새창 오픈 옵션 window.open 속성과 동일합니다."
			}}],
			returns:		{k:"", v:""},
			samplecode:	[
				'myModal.openNew({',
				'	url:"modal.asp",',
				'	pars:"",',
				'	name:"mymodal_new",',
				'	options: "width=600,height=400,resizable=yes"',
				'});'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"close", 
			type:		"method", 
			desc:		"오픈된 모달 창을 닫습니다.",
			define:		"_AXModal.close([modalID]);",
			arguments:	[{k:"modalID", v:"openDiv로 열린 모달창의 경우 입력하세요"}],
			returns:		{k:"", v:""},
			samplecode:	[
				'myModal.close("modalDiv01");',
				'parent.myModal.close();',
				'//iframe 모달창을 오픈한 경우 열려진 iframe 안에서 호출 합니다.'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"resize", 
			type:		"method", 
			desc:		"열려진 iframe modal 의 높이를 iframe 창의 높이 만큼 리사이즈 합니다. contentDivClass 가 정의된 경우 contentDivClass 높이값으로 resize 합니다.",
			define:		"_AXModal.resize();",
			arguments:	[],
			returns:		{k:"", v:""},
			samplecode:	[
				'parent.myModal.resize();',
				'//iframe 모달창을 오픈한 경우 열려진 iframe 안에서 호출 합니다.'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		}
	]
}
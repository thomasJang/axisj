
{
	id:"/API/Classes/AXProgress",
	head:{
		type:"Class", 
		name:"AXProgress",
		flnm:"Classes.AXProgress",
		file:"_AXJ/lib/AXProgress.js",
		tags:"Class,AXProgress"
	},
	h1:"AXProgress",

	items: [
		{
			name:		"initialize",
			type:		"method",
			desc:		"클래스를 초기화 합니다. 초기화 한 오브젝트를 변수에 담아 제어할 수 있습니다.",
			define:		"new AXProgress();",
			arguments:	[],
			returns:		{k:"", v:""},
			samplecode:	["var myProgress = new AXProgress();"],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"setConfig",
			type:		"method",
			desc:		"선언된 클래스를 사용하기 위해 속성을 정의합니다.",
			define:		"_AXProgress.setConfig(configs);",
			arguments:	[
				{k:"configs", v:{
					theme:"(optional) 프로그래스 CSS Class 이름 AXlineProgress, AXCircleProgress 클래스가 기본 제공됩니다. (default : \"AXlineProgress\")",
					totalCount:"프로그래스 전체 카운트 수", 
					width:"프로그래스바 너비", 
					top:"프로그래스바 표시 위치", 
					title:"프로그래스바 제목",
					duration:"(optional) 프로그래스바의 애니메이션 속도 값 입니다. (default : 50, optional)"
				}}
			],
			returns:		{k:"", v:""},
			samplecode:	[
				'myProgress.setConfig({',
				'	theme:"AXlineProgress", ',
				'	totalCount:100, ',
				'	width:400, ',
				'	top:100, ',
				'	title:"AXProgress BAR",',
				'	duration:50 // 프로그래스바의 애니메이션 속도 값 입니다.',
				'});'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"start",
			type:		"method",
			desc:		"프로그래스바를 시작합니다. options 를 지정하지 않으면 setConfig에 지정한 속성을 이용하여 프로그래스바를 시작합니다.",
			define:		"_AXProgress.start(callBack[, options]);",
			arguments:	[
				{k:"callBack", v:"function(){//this.totalCount, this.loadedCount, this.loadedRate, this.isEnd}"},
				{k:"configs", v:{
					theme:"(optional) 프로그래스바 CSS Class 이름 AXlineProgress, AXCircleProgress 클래스가 기본으로 제공됩니다. (default : \"AXlineProgress\")",
					totalCount:"프로그래스바 전체 카운트 수", 
					width:"프로그래스바 너비", 
					top:"프로그래스바 표시 위치", 
					title:"프로그래스바 제목",
					cancel:{
						confirmMsg:"Cancle 버튼 클릭 후 확인 메세지",
						oncancel:"Function"
					}
				}}
			],
			returns:		{k:"", v:""},
			samplecode:	[
				'mask.open();',
				'myProgress.start(function(){',
				'	trace(this);',
				'	if(this.isEnd){',
				'		myProgress.close();',
				'		mask.close();',
				'		toast.push("progress end");',
				'	}else{',
				'		// 무언가 처리를 해줍니다.	대부분 비동기 AJAX 통신 처리 구문을 수행합니다.',
				'		myProgress.update(); // 프로그레스의 다음 카운트를 시작합니다.',
				'	}',
				'});',
				'// options 지정방식 ',
				'mask.open();',
				'myProgress.start(function(){',
				'	if(this.isEnd){',
				'		myProgress.close();',
				'		mask.close();',
				'		toast.push("progress end");',
				'	}else{',
				'		// 무언가 처리를 해줍니다.	대부분 비동기 AJAX 통신 처리 구문을 수행합니다.',
				'		myProgress.update(); // 프로그레스의 다음 카운트를 시작합니다.',
				'	}',
				'}, ',
				'{',
				'	totalCount:10,',
				'	width:500, ',
				'	top:200, ',
				'	title:"Set Options Type Progress"',
				'});'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"update",
			type:		"method",
			desc:		"프로그레스바 진행 상태를 업데이트 합니다.",
			define:		"_AXProgress.update();",
			arguments:	[],
			returns:		{k:"", v:""},
			samplecode:	["myProgress.update();"],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"cancel",
			type:		"method",
			desc:		"프로그래스바 진행을 중지합니다.",
			define:		"_AXProgress.cancel()",
			arguments:	[],
			returns:		{k:"", v:""},
			samplecode:	["myProgress.cancel();"],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"restart",
			type:		"method",
			desc:		"중지된 프로그레스바 진행상태를 재시작 합니다.",
			define:		"_AXProgress.restart()",
			arguments:	[],
			returns:		{k:"", v:""},
			samplecode:	["myProgress.restart();"],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"close",
			type:		"method",
			desc:		"프로그레스바 창을 닫습니다.",
			define:		"_AXProgress.close()",
			arguments:	[],
			returns:		{k:"", v:""},
			samplecode:	["myProgress.close();"],
			example:[],
			exampleFn:[],
			reference:	[]
		}
	]
}
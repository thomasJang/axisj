
{
	id:"/API/Classes/AXCalendar",
	head:{
		type:"Class",
		name:"AXCalendar",
		flnm:"Classes.AXCalendar",
		file:"_AXJ/lib/AXJ.js",
		tags:"Class,AXCalendar"
	},
	h1:"AXCalendar",
	items: [
		{
			name:		"initialize", 
			type:		"method", 
			desc:		"클래스를 초기화 합니다. 초기화 한 오브젝트를 변수에 담아 제어할 수 있습니다.",
			define:		"new AXCalendar();",
			arguments: [],
			returns: {k:"", v:""},
			samplecode:[
				'var mycalendar = new AXCalendar();'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"setConfig", 
			type:		"method", 
			desc:		"선언된 스크롤 클래스를 사용하기 위해 속성을 정의합니다.",
			define:		"_AXCalendar.setConfig(configs);",
			arguments:	[
				{k:"configs", v:{
					targetID:"스크롤 대상을 감싸고 있는 컨테이너 엘리먼트 아이디",
					basicDate:"캘린더의 기준일"
				}}
			],
			returns:		{k:"", v:""},
			samplecode:	[
				"mycalendar.setConfig({",
				"	targetID:\"UIScrollContainer\",",
				"	basicDate:new Date()",
				"});"
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"printDayPage", 
			type:		"method", 
			desc:		"일자 캘린더를 targetID 안에 출력합니다.",
			define:		"_AXCalendar.printDayPage([String]);",
			arguments:	[{k:"String", v:"2013-11-21 같은 날짜 형식의 문자열. 기본값은 현재 시각"}],
			returns:		{k:"", v:""},
			samplecode:	[
				'mycalendar.printDayPage("2013-11-21");'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"printMonthPage", 
			type:		"method", 
			desc:		"월 선택 캘린더를 targetID 안에 출력합니다.",
			define:		"_AXCalendar.printMonthPage(String)",
			arguments:	[{k:"String", v:"2013-11-21 같은 날짜 형식의 문자열. 기본값은 현재 시각"}],
			returns:		{k:"", v:""},
			samplecode:	["mycalendar.printMonthPage(\"2013-11-21\");"],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"printYearPage", 
			type:		"method", 
			desc:		"년도 선택 캘린더를 targetID 안에 출력합니다.",
			define:		"_AXCalendar.printYearPage(Number|String)",
			arguments:	[{k:"Number|String", v:"2013 과 같은 문자열 혹은 숫자"}],
			returns:		{k:"", v:""},
			samplecode:	["mycalendar.printYearPage(2013);"],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"printTimePage", 
			type:		"method", 
			desc:		"시간 선택 캘린더를 targetID 안에 출력합니다.",
			define:		"_AXCalendar.printTimePage(String)",
			arguments:	[
				{k:"String", v:"hh:mm AM|PM 형식의 문자열"}
			],
			returns:		{k:"", v:""},
			samplecode:	["mycalendar.printTimePage(\"06:36 AM\");"],
			example:[],
			exampleFn:[],
			reference:	[]
		}
	]
}

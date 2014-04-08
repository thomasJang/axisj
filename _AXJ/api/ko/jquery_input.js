
{
	id:"/API/jQueryExtends/bindDate",
	head:{
		type:"method", 
		name:"bindDate",
		flnm:"jQueryExtends.bindDate",
		file:"_AXJ/lib/AXInput.js",
		tags:"jQueryExtends,bindDate"
	},
	h1:"bindDate",
	desc: "input text 엘리먼트에 날짜 컨트롤을 바인딩 합니다. ",
	define: "$(\"jQuerySelector\").bindDate(configs);",
	arguments:[
		{k:"configs", v:{
			align:"(\"left\"|\"center\"|\"right\") 달력에서 input text 의 위치",
			valign:"(\"top\"|\"middle\"|\"bottom\") 달력에서 input text 의 위치",
			separator:"(String) 날짜형식 표시 구분 문자열",
			selectType:"(\"y\"|\"m\"|\"d\") 날짜선택범위 y 를 지정하면 년도만 선택됩니다.",
			defaultSelectType:"(\"y\"|\"m\"|\"d\") 달력컨트롤의 년월일 선택도구 중에 먼저 보이는 도구타입",
			defaultDate:"(\"yyyy[separator]mm[separator]dd\") 날짜 형식의 문자열로 빈값의 달력 기준일을 설정합니다. 지정하지 않으면 시스템달력의 오늘을 기준으로 합니다.",
			onchange:"(Function) 값이 변경되었을 때 이벤트 콜백함수"
		}}
	],
	returns: {k:"", v:""},
	samplecode:[
'$("#AXInputDate").bindDate({',
'	align:"right", ',
'	valign:"bottom", ',
'	separator:"/", ',
'	defaultSelectType:"m", ',
'	onchange:function(){',
'		toast.push(Object.toJSON(this));',
'	}',
'});',
'',
'$("#AXInputDateMiddle").bindDate({',
'	align:"left", ',
'	valign:"middle", ',
'	onchange:function(){',
'		toast.push(Object.toJSON(this));',
'	}',
'});'
	],
	example:[
'<div class="inlineBlock">',
'	<input type="text" name="" id="AXInputDate" class="AXInput W100" />',
'</div>',
'',
'&nbsp;',
'<div class="inlineBlock">',
'	<input type="text" name="" id="AXInputDateMiddle" class="AXInput W100" />',
'</div>	'	
	],
	exampleFn:[
'$("#AXInputDate").bindDate({',
'	align:"right", ',
'	valign:"bottom", ',
'	separator:"/", ',
'	defaultSelectType:"m", ',
'	onchange:function(){',
'		toast.push(Object.toJSON(this));',
'	}',
'});',
'',
'$("#AXInputDateMiddle").bindDate({',
'	align:"left", ',
'	valign:"middle", ',
'	onchange:function(){',
'		toast.push(Object.toJSON(this));',
'	}',
'});'
	],
	reference:[]
},
{
	id:"/API/jQueryExtends/bindDateTime",
	head:{
		type:"method", 
		name:"bindDateTime",
		flnm:"jQueryExtends.bindDateTime",
		file:"_AXJ/lib/AXInput.js",
		tags:"jQueryExtends,bindDateTime"
	},
	h1:"bindDateTime",
	desc: "input text 엘리먼트에 날짜와 시간 컨트롤을 바인딩 합니다. ",
	define: "$(\"jQuerySelector\").bindDateTime(configs);",
	arguments:[
		{k:"configs", v:{
			align:"(\"left\"|\"center\"|\"right\") 달력에서 input text 의 위치",
			valign:"(\"top\"|\"middle\"|\"bottom\") 달력에서 input text 의 위치",
			separator:"(String) 날짜형식 표시 구분 문자열",
			selectType:"(\"y\"|\"m\"|\"d\") 날짜선택범위 y 를 지정하면 년도만 선택됩니다.",
			defaultSelectType:"(\"y\"|\"m\"|\"d\") 달력컨트롤의 년월일 선택도구 중에 먼저 보이는 도구타입",
			defaultDate:"(\"yyyy[separator]mm[separator]dd\") 날짜 형식의 문자열로 빈값의 달력 기준일을 설정합니다. 지정하지 않으면 시스템달력의 오늘을 기준으로 합니다.",
			onchange:"(Function) 값이 변경되었을 때 이벤트 콜백함수"
		}}
	],
	returns: {k:"", v:""},
	samplecode:[
'$("#AXInputDate").bindDateTime({',
'	align:"right", ',
'	valign:"bottom", ',
'	separator:"/", ',
'	defaultSelectType:"m", ',
'	onchange:function(){',
'		toast.push(Object.toJSON(this));',
'	}',
'});',
'',
'$("#AXInputDateMiddle").bindDateTime({',
'	align:"left", ',
'	valign:"middle", ',
'	onchange:function(){',
'		toast.push(Object.toJSON(this));',
'	}',
'});'
	],
	example:[
'<div class="inlineBlock">',
'	<input type="text" name="" id="AXInputDate" class="AXInput W150" />',
'</div>',
'',
'&nbsp;',
'<div class="inlineBlock">',
'	<input type="text" name="" id="AXInputDateMiddle" class="AXInput W150" />',
'</div>	'	
	],
	exampleFn:[
'$("#AXInputDate").bindDateTime({',
'	align:"right", ',
'	valign:"bottom", ',
'	separator:"/", ',
'	defaultSelectType:"m", ',
'	onchange:function(){',
'		toast.push(Object.toJSON(this));',
'	}',
'});',
'',
'$("#AXInputDateMiddle").bindDateTime({',
'	align:"left", ',
'	valign:"middle", ',
'	onchange:function(){',
'		toast.push(Object.toJSON(this));',
'	}',
'});'
	],
	reference:[]
},
{
	id:"/API/jQueryExtends/bindMoney",
	head:{
		type:"method", 
		name:"bindMoney",
		flnm:"jQueryExtends.bindMoney",
		file:"_AXJ/lib/AXInput.js",
		tags:"jQueryExtends,bindMoney"
	},
	h1:"bindMoney",
	desc: "input text 엘리먼트에 통화단위가 입력 되도록 합니다. ",
	define: "$(\"jQuerySelector\").bindMoney(configs);",
	arguments:[
		{k:"configs", v:{
			min:"(Number) 최소값",
			max:"(Number) 최대값"
		}}
	],
	returns: {k:"", v:""},
	samplecode:[
'$("#AXInputNumber").bindMoney();',
'$("#AXInputNumber3").bindMoney(',
'	{',
'		min:10, ',
'		max:9000000',
'	}',
');'
	],
	example:[
'<div class="inlineBlock">',
'	<input type="text" name="NumberValue" id="AXInputNumber" value="" class="AXInput W100" style="padding-right:0px;" />',
'</div>',
'',
'&nbsp;',
'range(10~9000000)',
'<div class="inlineBlock">',
'	<input type="text" name="NumberValue" id="AXInputNumber3" value="" class="AXInput W200" style="padding-right:0px;" />',
'</div>'
	],
	exampleFn:[
'$("#AXInputNumber").bindMoney();',
'$("#AXInputNumber3").bindMoney(',
'	{',
'		min:10, ',
'		max:9000000',
'	}',
');'
	],
	reference:[]
},
{
	id:"/API/jQueryExtends/bindNumber",
	head:{
		type:"method", 
		name:"bindNumber",
		flnm:"jQueryExtends.bindNumber",
		file:"_AXJ/lib/AXInput.js",
		tags:"jQueryExtends,bindNumber"
	},
	h1:"bindNumber",
	desc: "input text 엘리먼트에 숫자 컨트롤을 바인딩 합니다. ",
	define: "$(\"jQuerySelector\").bindNumber(configs);",
	arguments:[
		{k:"configs", v:{
			min:"(Number) 최소값",
			max:"(Number) 최대값",
			onchange:"(Function) 값이 변경되었을 때 이벤트 콜백함수"
		}}
	],
	returns: {k:"", v:""},
	samplecode:[
'$("#AXInputNumber").bindNumber();',
'$("#AXInputNumber3").bindNumber(',
'	{',
'		min:1, ',
'		max:100, ',
'		onChange : function(){',
'			trace(this);',
'		}',
'	}',
');',
'$("#AXInputNumber4").bindNumber({min:20});'
	],
	example:[
'<div class="inlineBlock">',
'	<input type="text" name="NumberValue" id="AXInputNumber" value="" class="AXInput W50" />',
'</div>',
'',
'&nbsp;',
'range(1~100)',
'<div class="inlineBlock">',
'	<input type="text" name="NumberValue" id="AXInputNumber3" value="" class="AXInput W50" />',
'</div>',
'',
'&nbsp;',
'range(20~)',
'<div class="inlineBlock">',
'	<input type="text" name="NumberValue" id="AXInputNumber4" value="" class="AXInput W50" />',
'</div>'
	],
	exampleFn:[
'$("#AXInputNumber").bindNumber();',
'$("#AXInputNumber3").bindNumber(',
'	{',
'		min:1, ',
'		max:100, ',
'		onChange : function(){',
'			trace(this);',
'		}',
'	}',
');',
'$("#AXInputNumber4").bindNumber({min:20});'
	],
	reference:[]
},
{
	id:"/API/jQueryExtends/bindSegment",
	head:{
		type:"method", 
		name:"bindSegment",
		flnm:"jQueryExtends.bindSegment",
		file:"_AXJ/lib/AXInput.js",
		tags:"jQueryExtends,bindSegment"
	},
	h1:"bindSegment",
	desc: "input text 엘리먼트에 segment 컨트롤을 바인딩 합니다. ",
	define: "$(\"jQuerySelector\").bindSegment(configs);",
	arguments:[
		{k:"configs", v:{
			theme:"(String) CSS 클래스",
			options:"(String) {optionValue:\"옵션의값\", optionText:\"옵션라벨\", addClass:\"옵션아이템에 추가될 CSS 클래스\"}",
			onchange:"(Function) 값이 변경되었을 때 발생하는 이벤트 콜백함수"
		}}
	],
	returns: {k:"", v:""},
	samplecode:[
'$("#AXInputSegment").bindSegment({',
'	options:[',
'		{optionValue:0, optionText:"왼쪽"},',
'		{optionValue:1, optionText:"가운데"},',
'		{optionValue:2, optionText:"오른쪽"}',
'	], ',
'	onChange:function(){',
'		//this.targetID, this.options, this.selectedIndex, this.selectedOption',
'		toast.push(Object.toJSON(this));',
'	}',
'});',
'',
'$(\'#AXInputSegment\').setValueInput(\'0\'); // 값 변경구문',
'',
'$("#AXInputSegmentForImage").bindSegment({',
'	theme:"AXSegmentTest",',
'	options:[',
'		{optionValue:0, optionText:"왼쪽", addClass:"type1"},',
'		{optionValue:1, optionText:"가운데", addClass:"type2"},',
'		{optionValue:2, optionText:"오른쪽", addClass:"type3"}',
'	], ',
'	onChange:function(){',
'		//this.targetID, this.options, this.selectedIndex, this.selectedOption',
'		toast.push(Object.toJSON(this));',
'	}',
'});',
'',
'',
'.AXSegmentTest{',
'	position:absolute;left:0px;top:0px;height:50px;',
'	padding:0px;margin:0px;',
'}',
'	/* 각각의 버튼 */',
'	.AXSegmentTest .AXanchorSegmentHandle{',
'		cursor:pointer;',
'		display:block;float:left;',
'		padding:0px 0px;margin:0px;height:48px;',
'		border-top:1px solid #888;border-left:1px solid #888;border-bottom:1px solid #888;',
'		text-indent:-1000px;',
'		overflow:hidden;',
'	}',
'	 /* 버튼 왼쪽 끝 */',
'	.AXSegmentTest .AXanchorSegmentHandle.segmentLeft{',
'		border-top-left-radius:3px;border-bottom-left-radius:3px;',
'	}',
'	/* 버튼 오픈쪽 끝 */',
'	.AXSegmentTest .AXanchorSegmentHandle.segmentRight{',
'		border-right:1px solid #888;',
'		border-top-right-radius:3px;border-bottom-right-radius:3px;',
'	}',
'	.AXSegmentTest .AXanchorSegmentHandle.type1{',
'		background:url(/_AXJ/ui/buttonIcons/white_allow.png) no-repeat center center #A2A2A2;',
'	}',
'	.AXSegmentTest .AXanchorSegmentHandle.type2{',
'		background:url(/_AXJ/ui/buttonIcons/white_close.png) no-repeat center center #A2A2A2;',
'	}',
'	.AXSegmentTest .AXanchorSegmentHandle.type3{',
'		background:url(/_AXJ/ui/buttonIcons/white_copy.png) no-repeat center center #A2A2A2;',
'	}',
'	.AXSegmentTest .AXanchorSegmentHandle.type1.on{',
'		background:url(/_AXJ/ui/buttonIcons/black_allow.png) no-repeat center center #f8f8f8;',
'	}',
'	.AXSegmentTest .AXanchorSegmentHandle.type2.on{',
'		background:url(/_AXJ/ui/buttonIcons/black_close.png) no-repeat center center #f8f8f8;',
'	}',
'	.AXSegmentTest .AXanchorSegmentHandle.type3.on{',
'		background:url(/_AXJ/ui/buttonIcons/black_copy.png) no-repeat center center #f8f8f8;',
'	}'
	],
	example:[
'	<style type="text/css">',
'	.AXSegmentTest{',
'		position:absolute;left:0px;top:0px;height:50px;',
'		padding:0px;margin:0px;',
'	}',
'		/* 각각의 버튼 */',
'		.AXSegmentTest .AXanchorSegmentHandle{',
'			cursor:pointer;',
'			display:block;float:left;',
'			padding:0px 0px;margin:0px;height:48px;',
'			border-top:1px solid #888;border-left:1px solid #888;border-bottom:1px solid #888;',
'			text-indent:-1000px;',
'			overflow:hidden;',
'		}',
'		 /* 버튼 왼쪽 끝 */',
'		.AXSegmentTest .AXanchorSegmentHandle.segmentLeft{',
'			border-top-left-radius:3px;border-bottom-left-radius:3px;',
'		}',
'		/* 버튼 오픈쪽 끝 */',
'		.AXSegmentTest .AXanchorSegmentHandle.segmentRight{',
'			border-right:1px solid #888;',
'			border-top-right-radius:3px;border-bottom-right-radius:3px;',
'		}',
'		.AXSegmentTest .AXanchorSegmentHandle.type1{',
'			background:url(/_AXJ/ui/buttonIcons/white_allow.png) no-repeat center center #A2A2A2;',
'		}',
'		.AXSegmentTest .AXanchorSegmentHandle.type2{',
'			background:url(/_AXJ/ui/buttonIcons/white_close.png) no-repeat center center #A2A2A2;',
'		}',
'		.AXSegmentTest .AXanchorSegmentHandle.type3{',
'			background:url(/_AXJ/ui/buttonIcons/white_copy.png) no-repeat center center #A2A2A2;',
'		}',
'		.AXSegmentTest .AXanchorSegmentHandle.type1.on{',
'			background:url(/_AXJ/ui/buttonIcons/black_allow.png) no-repeat center center #f8f8f8;',
'		}',
'		.AXSegmentTest .AXanchorSegmentHandle.type2.on{',
'			background:url(/_AXJ/ui/buttonIcons/black_close.png) no-repeat center center #f8f8f8;',
'		}',
'		.AXSegmentTest .AXanchorSegmentHandle.type3.on{',
'			background:url(/_AXJ/ui/buttonIcons/black_copy.png) no-repeat center center #f8f8f8;',
'		}',
'	</style>',
'	<input type="text" name="" value="0" id="AXInputSegment" style="width:150px;height:20px;" />',
'	',
'	<div style="padding:10px 0px;">',
'		<input type="button" value="왼쪽으로" class="AXButton" onclick="$(\'#AXInputSegment\').setValueInput(\'0\');" />',
'		<input type="button" value="가운데로" class="AXButton" onclick="$(\'#AXInputSegment\').setValueInput(\'1\');" />',
'		<input type="button" value="오른쪽으로" class="AXButton" onclick="$(\'#AXInputSegment\').setValueInput(\'2\');" />',
'	</div>',
'	',
'	<input type="text" name="" value="0" id="AXInputSegmentForImage" style="width:150px;height:50px;" />'
	],
	exampleFn:[
'	$("#AXInputSegment").bindSegment({',
'		options:[',
'			{optionValue:0, optionText:"왼쪽"},',
'			{optionValue:1, optionText:"가운데"},',
'			{optionValue:2, optionText:"오른쪽"}',
'		], ',
'		onChange:function(){',
'			//this.targetID, this.options, this.selectedIndex, this.selectedOption',
'			toast.push(Object.toJSON(this));',
'		}',
'	});',
'	',
'	$("#AXInputSegmentForImage").bindSegment({',
'		theme:"AXSegmentTest",',
'		options:[',
'			{optionValue:0, optionText:"왼쪽", addClass:"type1"},',
'			{optionValue:1, optionText:"가운데", addClass:"type2"},',
'			{optionValue:2, optionText:"오른쪽", addClass:"type3"}',
'		], ',
'		onChange:function(){',
'			//this.targetID, this.options, this.selectedIndex, this.selectedOption',
'			toast.push(Object.toJSON(this));',
'		}',
'	});'
	],
	reference:[]
},
{
	id:"/API/jQueryExtends/bindSelector",
	head:{
		type:"method", 
		name:"bindSelector",
		flnm:"jQueryExtends.bindSelector",
		file:"_AXJ/lib/AXInput.js",
		tags:"jQueryExtends,bindSelector"
	},
	h1:"bindSelector",
	desc: "input text 엘리먼트에 selector 컨트롤을 바인딩 합니다.",
	define: "$(\"jQuerySelector\").bindSelector(configs);",
	arguments:[
		{k:"configs", v:{
			appendable:"(Boolean) options 에 정해진 값 외의 입력 가능 여부 true 이면 입력이 가능합니다.",
			options:"(Array) [{optionValue:\"값\", optionText:\"라벨\"}]",
			ajaxUrl:"(String) AJAX 데이터 호출 URL",
			ajaxPars:"(String) AJAX 데이터 호출 URL 파라미터",
			positionFixed:"(Boolean) expandBox position CSS 를 fixed 할지 여부. selector 가 fixed 된 엘리먼트 위에 위치하는 경우 사용하세요 ",
			onchange:"(Function) 값 변경 이벤트 콜백함수",
			finder:{
				onclick:"(Function) 파인더 버튼 클릭 이벤트 콜백함수"
			}
		}}
	],
	returns: {k:"", v:""},
	samplecode:[
'<input type="text" name="inputSelector" id="AXInputSelector" value="" class="AXInput" />',
'',
'$("#AXInputSelector").bindSelector({',
'	appendable:true,',
'	options:[',
'		{optionValue:1, optionText:"Seoul"},',
'		{optionValue:2, optionText:"대구"},',
'		{optionValue:3, optionText:"대전"},',
'		{optionValue:4, optionText:"창원"},',
'		{optionValue:5, optionText:"마산"},',
'		{optionValue:6, optionText:"구례"},',
'		{optionValue:7, optionText:"제주도"},',
'		{optionValue:8, optionText:"전주"},',
'		{optionValue:4, optionText:"창원"},',
'		{optionValue:5, optionText:"마산"},',
'		{optionValue:6, optionText:"구례"},',
'		{optionValue:7, optionText:"제주도"},',
'		{optionValue:8, optionText:"전주"},',
'		{optionValue:9, optionText:"Gwangju"}',
'	]',
'});',

	],
	example:[
'<input type="text" name="inputSelector" id="AXInputSelector" value="" class="AXInput" />'
	],
	exampleFn:[
'$("#AXInputSelector").bindSelector({',
'	appendable:true,',
'	options:[',
'		{optionValue:1, optionText:"Seoul"},',
'		{optionValue:2, optionText:"대구"},',
'		{optionValue:3, optionText:"대전"},',
'		{optionValue:4, optionText:"창원"},',
'		{optionValue:5, optionText:"마산"},',
'		{optionValue:6, optionText:"구례"},',
'		{optionValue:7, optionText:"제주도"},',
'		{optionValue:8, optionText:"전주"},',
'		{optionValue:4, optionText:"창원"},',
'		{optionValue:5, optionText:"마산"},',
'		{optionValue:6, optionText:"구례"},',
'		{optionValue:7, optionText:"제주도"},',
'		{optionValue:8, optionText:"전주"},',
'		{optionValue:9, optionText:"Gwangju"}',
'	]',
'});'
	],
	reference:[],
	extendForm:[
		{
			description:[],
			samplecode:[
'<input type="text" name="inputSelector" id="AXInputSelectorAjax" value="" class="AXInput" />',
'$("#AXInputSelectorAjax").bindSelector({',
'	appendable:false,',
'	ajaxUrl:"selectorData.asp", ',
'	ajaxPars:"",',
'	//selectorName:"imselector",',
'	onChange:function(){',
'		toast.push(Object.toJSON(this));',
'	}',
'});'
			]
		},
		{
			description:['서버에서 리턴하는 JSON 구문 예시'],
			samplecode:[
'{',
'	result:"ok",',
'	options:[',
'		{optionValue:1, optionText:"Seoul", desc:"부가설명글"},',
'		{optionValue:2, optionText:"대구"},',
'		{optionValue:3, optionText:"대전", optionDesc:"부가설명글"},',
'		{optionValue:8, optionText:"전주"},',
'		{optionValue:9, optionText:"Gwangju"}',
'	]',
'}',
'// 위의 형식을 만족 시켜야 합니다.',
'// desc 또는 optionDesc 값을 지정하면 option 라벨 뒤에 부가설명글로 표시됩니다.'
			]
		},
		{
			description:['다음은 selector 에 finder 를 확장하는 예제 입니다.'],
			samplecode:[
'<input type="text" name="inputSelector" id="AXInputSelectorFind" value="" class="AXInput" />',
'',
'$("#AXInputSelectorFind").bindSelector({',
'	appendable:false,',
'	options:[',
'		{optionValue:1, optionText:"Seoul"},',
'		{optionValue:2, optionText:"대구"},',
'		{optionValue:3, optionText:"대전"},',
'		{optionValue:4, optionText:"창원"},',
'		{optionValue:5, optionText:"마산"},',
'		{optionValue:6, optionText:"구례"},',
'		{optionValue:7, optionText:"제주도"},',
'		{optionValue:8, optionText:"전주"},',
'		{optionValue:4, optionText:"창원"},',
'		{optionValue:5, optionText:"마산"},',
'		{optionValue:6, optionText:"구례"},',
'		{optionValue:7, optionText:"제주도"},',
'		{optionValue:8, optionText:"전주"},',
'		{optionValue:9, optionText:"Gwangju"}',
'	],',
'	finder:{',
'		onclick: function(){',
'			AXUtil.alert(this);',
'		}',
'	}',
'});'
			]
		},
		{
			example:[
		'<input type="text" name="inputSelector" id="AXInputSelectorFind" value="" class="AXInput" />'
			],
			exampleFn:[
		'$("#AXInputSelectorFind").bindSelector({',
		'	appendable:true,',
		'	options:[',
		'		{optionValue:1, optionText:"Seoul"},',
		'		{optionValue:2, optionText:"대구"},',
		'		{optionValue:3, optionText:"대전"},',
		'		{optionValue:4, optionText:"창원"},',
		'		{optionValue:5, optionText:"마산"},',
		'		{optionValue:6, optionText:"구례"},',
		'		{optionValue:7, optionText:"제주도"},',
		'		{optionValue:8, optionText:"전주"},',
		'		{optionValue:4, optionText:"창원"},',
		'		{optionValue:5, optionText:"마산"},',
		'		{optionValue:6, optionText:"구례"},',
		'		{optionValue:7, optionText:"제주도"},',
		'		{optionValue:8, optionText:"전주"},',
		'		{optionValue:9, optionText:"Gwangju"}',
		'	],',
		'	finder:{',
		'		onclick: function(){',
		'			AXUtil.alert(this);',
		'		}',
		'	}',
		'});'
			]
		}
	]
},
{
	id:"/API/jQueryExtends/bindSelectorBlur",
	head:{
		type:"method", 
		name:"bindSelectorBlur",
		flnm:"jQueryExtends.bindSelectorBlur",
		file:"_AXJ/lib/AXInput.js",
		tags:"jQueryExtends,bindSelectorBlur"
	},
	h1:"bindSelectorBlur",
	desc: "bindSelector 된 개체 포커스된 상태를 해지 하고 확장된 옵션박스도 제거 합니다.",
	define: "$(\"jQuerySelector\").bindSelectorBlur();",
	arguments:[],
	returns: {k:"", v:""},
	samplecode:[],
	example:[],
	exampleFn:[],
	reference:[],
	extendForm:[]
},
{
	id:"/API/jQueryExtends/bindSlider",
	head:{
		type:"method", 
		name:"bindSlider",
		flnm:"jQueryExtends.bindSlider",
		file:"_AXJ/lib/AXInput.js",
		tags:"jQueryExtends,bindSlider"
	},
	h1:"bindSlider",
	desc: "input text 엘리먼트에 slider 컨트롤을 바인딩 합니다. ",
	define: "$(\"jQuerySelector\").bindSlider(configs);",
	arguments:[
		{k:"configs", v:{
			min:"(Number) 최소값",
			max:"(Number) 최대값",
			snap:"(Number) ",
			unit:"(String) 값 뒤에 붙여 표현하는 단위",
			onchange:"(Function) 값 변경 이벤트 콜백함수"
		}}
	],
	returns: {k:"", v:""},
	samplecode:[],
	example:[
'<input type="text" name="inputSlider" id="AXInputSlider" value="50" class="AXInput W200" />',
'<p></p>',
'<input type="text" name="inputSlider" id="AXInputSlider2" value="10000" class="AXInput" style="width:400px;" />',
'<p></p>',
'<input type="text" name="inputSlider" id="AXInputSlider3" value="0" class="AXInput" style="width:400px;" />	'
	],
	exampleFn:[
'$("#AXInputSlider").bindSlider({min:0, max:100, snap:10, unit:"%"});',
'$("#AXInputSlider2").bindSlider({min:1000, max:100000, snap:100});',
'$("#AXInputSlider3").bindSlider({min:0, max:1, snap:0.01});'
	],
	reference:[],
	extendForm:[
		{
			samplecode:[
'<input type="text" name="inputSlider" id="AXInputSlider" value="50" class="AXInput W200" />',
'<input type="text" name="inputSlider" id="AXInputSlider2" value="10000" class="AXInput" style="width:400px;" />',
'<input type="text" name="inputSlider" id="AXInputSlider3" value="0" class="AXInput" style="width:400px;" />	'
			]
		},
		{
			samplecode:[
'$("#AXInputSlider").bindSlider({min:0, max:100, snap:10, unit:"%"});',
'$("#AXInputSlider2").bindSlider({min:1000, max:100000, snap:100});',
'$("#AXInputSlider3").bindSlider({min:0, max:1, snap:0.01});'
			]
		}
	]
},
{
	id:"/API/jQueryExtends/bindSwitch",
	head:{
		type:"method", 
		name:"bindSwitch",
		flnm:"jQueryExtends.bindSwitch",
		file:"_AXJ/lib/AXInput.js",
		tags:"jQueryExtends,bindSwitch"
	},
	h1:"bindSwitch",
	desc: "input text 엘리먼트에 스위치 컨트롤을 적용합니다. ",
	define: "$(\"jQuerySelector\").bindSwitch(configs);",
	arguments:[
		{k:"configs", v:{
			off:"(Number) switch off value",
			on:"(Number) switch on vlaue",
			onchange:"(Function) 값 변경 이벤트 콜백함수"
		}}
	],
	returns: {k:"", v:""},
	samplecode:[],
	example:[
'<input type="text" name="" value="AM" id="AXInputSwitch" class="AXInput W40" />'
	],
	exampleFn:[
'$("#AXInputSwitch").bindSwitch({',
'	off:"AM", ',
'	on:"PM", ',
'	onChange:function(){',
'		toast.push(Object.toJSON(this));',
'	}',
'});'
	],
	reference:[],
	extendForm:[
		{
			samplecode:[
'$("#AXInputSwitch").bindSwitch({',
'	off:"AM", ',
'	on:"PM", ',
'	onChange:function(){',
'		toast.push(Object.toJSON(this));',
'	}',
'});'
			]
		}
	]
},
{
	id:"/API/jQueryExtends/bindTwinDate",
	head:{
		type:"method", 
		name:"bindTwinDate",
		flnm:"jQueryExtends.bindTwinDate",
		file:"_AXJ/lib/AXInput.js",
		tags:"jQueryExtends,bindTwinDate"
	},
	h1:"bindTwinDate",
	desc: "input text 엘리먼트에 날짜 컨트롤을 바인딩 합니다. ",
	define: "$(\"jQuerySelector\").bindTwinDate(configs);",
	arguments:[
		{k:"configs", v:{
			startTargetID:"(String) 시작일 input text 아이디",
			align:"(\"left\"|\"center\"|\"right\") 달력에서 input text 의 위치",
			valign:"(\"top\"|\"middle\"|\"bottom\") 달력에서 input text 의 위치",
			separator:"(String) 날짜형식 표시 구분 문자열 ",
			selectType:"(\"y\"|\"m\"|\"d\") 날짜선택범위 y 를 지정하면 년도만 선택됩니다.",
			defaultSelectType:"(\"y\"|\"m\"|\"d\") 달력컨트롤의 년월일 선택도구 중에 먼저 보이는 도구타입",
			defaultDate:"(\"yyyy[separator]mm[separator]dd\") 날짜 형식의 문자열로 빈값의 달력 기준일을 설정합니다. 지정하지 않으면 시스템달력의 오늘을 기준으로 합니다.",
			onchange:"(Function) 값 변경 이벤트 콜백함수"
		}}
	],
	returns: {k:"", v:""},
	samplecode:[
'$("#AXInputDateED").bindTwinDate({',
'	align:"right", ',
'	valign:"bottom", ',
'	separator:"/", ',
'	startTargetID:"AXInputDateST", ',
'	onchange:function(){',
'		toast.push(Object.toJSON(this));',
'	}',
'});'
	],
	example:[
'<div class="inlineBlock">',
'	<div class="inlineBlock"><input type="text" name="" id="AXInputDateST" class="AXInput W100" /></div>',
'	~',
'	<div class="inlineBlock"><input type="text" name="" id="AXInputDateED" class="AXInput W100" /></div>',
'</div>'
	],
	exampleFn:[
'$("#AXInputDateED").bindTwinDate({',
'	align:"right", ',
'	valign:"bottom", ',
'	separator:"/", ',
'	startTargetID:"AXInputDateST", ',
'	onchange:function(){',
'		toast.push(Object.toJSON(this));',
'	}',
'});'
	],
	reference:[],
	extendForm:[]
},
{
	id:"/API/jQueryExtends/bindTwinDateTime",
	head:{
		type:"method", 
		name:"bindTwinDateTime",
		flnm:"jQueryExtends.bindTwinDateTime",
		file:"_AXJ/lib/AXInput.js",
		tags:"jQueryExtends,bindTwinDateTime"
	},
	h1:"bindTwinDateTime",
	desc: "input text 엘리먼트에 날짜 컨트롤을 바인딩 합니다. ",
	define: "$(\"jQuerySelector\").bindTwinDateTime(configs);",
	arguments:[
		{k:"configs", v:{
			startTargetID:"(String) 시작일 input text 아이디",
			align:"(\"left\"|\"center\"|\"right\") 달력에서 input text 의 위치",
			valign:"(\"top\"|\"middle\"|\"bottom\") 달력에서 input text 의 위치",
			separator:"(String) 날짜형식 표시 구분 문자열 ",
			selectType:"(\"y\"|\"m\"|\"d\") 날짜선택범위 y 를 지정하면 년도만 선택됩니다.",
			defaultSelectType:"(\"y\"|\"m\"|\"d\") 달력컨트롤의 년월일 선택도구 중에 먼저 보이는 도구타입",
			defaultDate:"(\"yyyy[separator]mm[separator]dd\") 날짜 형식의 문자열로 빈값의 달력 기준일을 설정합니다. 지정하지 않으면 시스템달력의 오늘을 기준으로 합니다.",
			onchange:"(Function) 값 변경 이벤트 콜백함수"
		}}
	],
	returns: {k:"", v:""},
	samplecode:[
'$("#AXInputDateED").bindTwinDateTime({',
'	align:"right", ',
'	valign:"bottom", ',
'	separator:"/", ',
'	startTargetID:"AXInputDateST", ',
'	onchange:function(){',
'		toast.push(Object.toJSON(this));',
'	}',
'});'
	],
	example:[
'<div class="inlineBlock">',
'	<div class="inlineBlock"><input type="text" name="" id="AXInputDateST" class="AXInput W150" /></div>',
'	~',
'	<div class="inlineBlock"><input type="text" name="" id="AXInputDateED" class="AXInput W150" /></div>',
'</div>'
	],
	exampleFn:[
'$("#AXInputDateED").bindTwinDateTime({',
'	align:"right", ',
'	valign:"bottom", ',
'	separator:"/", ',
'	startTargetID:"AXInputDateST", ',
'	onchange:function(){',
'		toast.push(Object.toJSON(this));',
'	}',
'});'
	],
	reference:[],
	extendForm:[]
},
{
	id:"/API/jQueryExtends/bindTwinSlider",
	head:{
		type:"method", 
		name:"bindTwinSlider",
		flnm:"jQueryExtends.bindTwinSlider",
		file:"_AXJ/lib/AXInput.js",
		tags:"jQueryExtends,bindTwinSlider"
	},
	h1:"bindTwinSlider",
	desc: "input text 엘리먼트에 slider 컨트롤을 바인딩 합니다. ",
	define: "$(\"jQuerySelector\").bindTwinSlider(configs);",
	arguments:[
		{k:"configs", v:{
			min:"(Number) 최소값",
			max:"(Number) 최대값",
			separator:"(String) 두개의 값 사이를 구분 지을 문자열",
			snap:"(Number) ",
			unit:"(String) 값 뒤에 붙여 표현하는 단위",
			onchange:"(Function) 값 변경 이벤트 콜백함수"
		}}
	],
	returns: {k:"", v:""},
	samplecode:[],
	example:[
'<input type="text" name="inputTwinSlider" id="AXInputTwinSlider" value="200~700" class="AXInput W200" />'
	],
	exampleFn:[
'$("#AXInputTwinSlider").bindTwinSlider({min:0, max:1000, separator:"~", unit:"", snap:100}); // onChange 함수 바인드'
	],
	reference:[],
	extendForm:[
		{
			samplecode:[
'<input type="text" name="inputTwinSlider" id="AXInputTwinSlider" value="200~700" class="AXInput W200" />'
			]
		},
		{
			samplecode:[
'$("#AXInputTwinSlider").bindTwinSlider({min:0, max:1000, separator:"~", unit:"", snap:100}); // onChange 함수 바인드'
			]
		}
	]
},
{
	id:"/API/jQueryExtends/setConfigInput",
	head:{
		type:"method", 
		name:"setConfigInput",
		flnm:"jQueryExtends.setConfigInput",
		file:"_AXJ/lib/AXInput.js",
		tags:"jQueryExtends,setConfigInput"
	},
	h1:"setConfigInput",
	desc: "AXISJ 을 통해 바인딩 된 엘리먼트의 속성을 변경 합니다. ",
	define: "$(\"jQuerySelector\").setConfigInput(configs);",
	arguments:[
		{k:"configs", v:"바인딩된 타입에 따라 다름."}
	],
	returns: {k:"", v:""},
	samplecode:[
'$("#AXInputSelector").setConfigInput({',
'	onchange:function(){',
'		trace(this);',
'		toast.push(Object.toJSON(this));',
'	}',
'});'
	],
	example:[],
	exampleFn:[],
	reference:[]
},
{
	id:"/API/jQueryExtends/setValueInput",
	head:{
		type:"method", 
		name:"setValueInput",
		flnm:"jQueryExtends.setValueInput",
		file:"_AXJ/lib/AXInput.js",
		tags:"jQueryExtends,setValueInput"
	},
	h1:"setValueInput",
	desc: "AXISJ 을 통해 바인딩 된 엘리먼트의 속성을 변경 합니다. ",
	define: "$(\"jQuerySelector\").setValueInput(value);",
	arguments:[
		{k:"value", v:"(String) 변경하려는 값"}
	],
	returns: {k:"", v:""},
	samplecode:[
'$("#AXInputSwitch").bindSwitch({off:"AM", on:"PM", onChange:function(){',
'	toast.push(Object.toJSON(this));',
'}});',
'',
'$("#AXInputSwitch").setValueInput("AM");',
'$("#AXInputSwitch").setValueInput("PM");'
	],
	example:[
'<input type="text" name="" value="AM" id="AXInputSwitch" class="AXInput W40" />',
'<div style="padding:10px 0px;">',
'	<input type="button" value="AM" class="AXButton" onclick="$(\'#AXInputSwitch\').setValueInput(\'AM\');" />',
'	<input type="button" value="PM" class="AXButton" onclick="$(\'#AXInputSwitch\').setValueInput(\'PM\');" />',
'</div>'
	],
	exampleFn:[
'$("#AXInputSwitch").bindSwitch({',
'	off:"AM", ',
'	on:"PM", ',
'	onChange:function(){',
'		toast.push(Object.toJSON(this));',
'	}',
'});'
	],
	reference:[]
}
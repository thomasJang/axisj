
{
	id:"/API/jQueryExtends/bindSelect",
	head:{
		type:"method", 
		name:"bindSelect",
		flnm:"jQueryExtends.bindSelect",
		file:"_AXJ/lib/AXSelect.js",
		tags:"jQueryExtends,bindSelect"
	},
	h1:"bindSelect",
	desc: "select 엘리먼트에 select 콘트롤을 바인드 합니다. ",
	define: "$(\"jQuerySelector\").bindSelect(configs);",
	arguments:[
		{k:"configs", v:{
			maxHeight:"(Number) expandBox 최대 높이 optionBox 의 높이가 최대 높이보다 작으면 최대높이보다 작게 표시됩니다.",
			options:"(Array) {optionValue:\"값\", optionText:\"라벨\"}",
			positionFixed:"(true|false) select를 감싸고 있는 대상이 fixed 되었을 때 사용",
			position:"({top:Number}) fixed 적용된 상태에서 expandBox top 속성을 고정할 때 사용",
			ajaxUrl:"(String) AJAX 호출 URL ",
			ajaxPars:"(String) AJAX 호출 URL 파라미터",
			isspace:"(true|false) AJAX 로 options를 지정한 대상에 첫번째 옵션을 빈값으로 처리 할지 여부",
			isspaceTitle:"(String) AJAX 로 값을 지정한 대상에 첫번째 옵션의 라벨을 지정합니다.",
			onchange:"(Function) 값이 변경되었을 때 이벤트 콜백함수"
		}}
	],
	returns: {k:"", v:""},
	samplecode:[
'<select name="" class="AXSelect" id="AXSelect1" tabindex="7">',
'	<option value="">-- 선택하세요 --</option>',
'	<option value="1">%가나다라마바사</option>',
'	<option value="2" selected="selected">abcdefg</option>',
'	<option value="1">abcdefg 가나다라마바사</option>',
'	<option value="9">abcdefg 가나다라마바사</option>',
'	<option value="99">abcdefg 가나다라마바사</option>',
'	<option value="100">abcdefg 가나다라마바사</option>',
'</select>',
'',
'$("#AXSelect1").bindSelect({',
'	maxHeight: 200,',
'	onchange: function(){',
'		toast.push(Object.toJSON(this));',
'	}',
'});'
	],
	example:[
'<select name="" class="AXSelect" id="AXSelect1" tabindex="7">',
'	<option value="">-- 선택하세요 --</option>',
'	<option value="1">%가나다라마바사</option>',
'	<option value="2" selected="selected">abcdefg</option>',
'	<option value="1">abcdefg 가나다라마바사</option>',
'	<option value="9">abcdefg 가나다라마바사</option>',
'	<option value="99">abcdefg 가나다라마바사</option>',
'	<option value="100">abcdefg 가나다라마바사</option>',
'</select>'
	],
	exampleFn:[
'$("#AXSelect1").bindSelect({',
'	maxHeight: 200,',
'	onchange: function(){',
'		toast.push(Object.toJSON(this));',
'	}',
'});'
	],
	reference:[],
	extendForm:[
		{
			description:['option 을 script 로 지정하여 구현하는 방법'],
			samplecode:[
'// AJAX 정의 방식',
'$("#AXSelect3").bindSelect({',
'    ajaxUrl: "selectData.asp",',
'    ajaxPars: "",',
'    isspace: false,',
'    isspaceTitle: "전체"',
'});',
'',
'// script 정의 방식',
'$("#AXSelect4").bindSelect({',
'    options:[',
'		{optionValue:1, optionText:"%25 : ABCDEFG"},',
'		{optionValue:2, optionText:"2 : 09123123"},',
'		{optionValue:3, optionText:"2 : 1222"},',
'		{optionValue:4, optionText:"2 : AXISJ"},',
'		{optionValue:5, optionText:"2 : 액시스 제이"}',
'	],',
'	onchange: function(){',
'		//toast.push(Object.toJSON(this));',
'	}',
'});'
			]
		},
		{
			description:['AJAX 방식 구현시 서버 리턴 JSON 구문 예시'],
			samplecode:[
'{',
'	result:"ok",',
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
'	etcs:""',
'}'
			]
		}
	]
},
{
	id:"/API/jQueryExtends/bindSelectDisabled",
	head:{
		type:"method", 
		name:"bindSelectDisabled",
		flnm:"jQueryExtends.bindSelectDisabled",
		file:"_AXJ/lib/AXSelect.js",
		tags:"jQueryExtends,bindSelectDisabled"
	},
	h1:"bindSelectDisabled",
	desc: "AXISJ 을 통해 바인딩 된 엘리먼트를 disabled 처리 합니다. ",
	define: "$(\"jQuerySelector\").bindSelectDisabled(disabled);",
	arguments:[
		{k:"disabled", v:"(true|false) disabled "}
	],
	returns: {k:"", v:""},
	samplecode:[],
	example:[],
	exampleFn:[],
	reference:[],
	extendForm:[]
},
{
	id:"/API/jQueryExtends/setValueSelect",
	head:{
		type:"method", 
		name:"setValueSelect",
		flnm:"jQueryExtends.setValueSelect",
		file:"_AXJ/lib/AXSelect.js",
		tags:"jQueryExtends,setValueSelect"
	},
	h1:"setValueSelect",
	desc: "AXISJ 을 통해 바인딩 된 엘리먼트에 동적으로 값을 부여 합니다. ",
	define: "$(\"jQuerySelector\").setValueSelect(optionValue);",
	arguments:[
		{k:"optionValue", v:"(String) 변경하려는 값"}
	],
	returns: {k:"", v:""},
	samplecode:[],
	example:[],
	exampleFn:[],
	reference:[],
	extendForm:[]
},
{
	id:"/API/jQueryExtends/unbindSelect",
	head:{
		type:"method", 
		name:"unbindSelect",
		flnm:"jQueryExtends.unbindSelect",
		file:"_AXJ/lib/AXSelect.js",
		tags:"jQueryExtends,unbindSelect"
	},
	h1:"unbindSelect",
	desc: "select 엘리먼트에 select 콘트롤을 언바인드 합니다. ",
	define: "$(\"jQuerySelector\").unbindSelect();",
	arguments:[],
	returns: {k:"", v:""},
	samplecode:[],
	example:[],
	exampleFn:[],
	reference:[],
	extendForm:[]
},
{
	id:"/API/jQueryExtends/bindSelectUpdate",
	head:{
		type:"method", 
		name:"bindSelectUpdate",
		flnm:"jQueryExtends.bindSelectUpdate",
		file:"_AXJ/lib/AXSelect.js",
		tags:"jQueryExtends,bindSelectUpdate"
	},
	h1:"bindSelectUpdate",
	desc: "bindSelect 된 개체의 값이 스크립트에 의해 변경된 경우 변경된 값으로 bindSelect 컨트롤 상태값을 업데이트 합니다.",
	define: "$(\"jQuerySelector\").bindSelectUpdate();",
	arguments:[],
	returns: {k:"", v:""},
	samplecode:[],
	example:[],
	exampleFn:[],
	reference:[],
	extendForm:[]
},
{
	id:"/API/jQueryExtends/bindSelectFocus",
	head:{
		type:"method", 
		name:"bindSelectFocus",
		flnm:"jQueryExtends.bindSelectFocus",
		file:"_AXJ/lib/AXSelect.js",
		tags:"jQueryExtends,bindSelectFocus"
	},
	h1:"bindSelectFocus",
	desc: "bindSelect 된 개체를 포커스된 상태로 변경 합니다.",
	define: "$(\"jQuerySelector\").bindSelectFocus();",
	arguments:[],
	returns: {k:"", v:""},
	samplecode:[],
	example:[],
	exampleFn:[],
	reference:[],
	extendForm:[]
},
{
	id:"/API/jQueryExtends/bindSelectBlur",
	head:{
		type:"method", 
		name:"bindSelectBlur",
		flnm:"jQueryExtends.bindSelectBlur",
		file:"_AXJ/lib/AXSelect.js",
		tags:"jQueryExtends,bindSelectBlur"
	},
	h1:"bindSelectBlur",
	desc: "bindSelect 된 개체 포커스된 상태를 해지 하고 확장된 옵션박스도 제거 합니다.",
	define: "$(\"jQuerySelector\").bindSelectBlur();",
	arguments:[],
	returns: {k:"", v:""},
	samplecode:[],
	example:[],
	exampleFn:[],
	reference:[],
	extendForm:[]
}


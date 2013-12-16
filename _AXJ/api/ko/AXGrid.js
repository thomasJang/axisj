
{
	id:"/API/Classes/AXGrid",
	head:{
		type:"Class", 
		name:"AXGrid",
		flnm:"Classes.AXGrid",
		file:"_AXJ/lib/AXGrid.js",
		tags:"Class,AXGrid"
	},
	h1:"AXGrid",
	items: [
		{
			name:		"initialize", 
			type:		"method", 
			desc:		"클래스를 초기화 합니다. 초기화 한 오브젝트를 변수에 담아 제어할 수 있습니다.",
			define:		"new AXGrid();",
			arguments:	[],
			returns:		{k:"", v:""},
			samplecode:	["var myGrid = new AXGrid();"],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"setConfig",
			type:		"method", 
			desc:		"선언된 클래스를 사용하기 위해 속성을 정의합니다.",
			define:		"_AXSearch.AXGrid(configs);",
			arguments:	[
				{k:"configs", v:{
					targetID:"(String/필수) HTML 엘리먼트 타겟아이디",
					theme : "(String) CSS Class 이름",
					fixedColSeq : "(Number) 틀고정 컬럼 seq",
					fitToWidth : "(true|false) colGroup width 들의 비율대로 화면에 꽉 차게 col 너비를 자동 맞춤",
					height : "(Number|\"auto\") 그리드 높이",
					colHeadAlign : "(\"left\"|\"center\"|\"right\")head 기본 정렬 ",
					xscroll : "(true|false) 그리드 가로 스크롤 여부",
					passiveMode : "(true|false) 아이템 추가/수정/삭제 수동처리 모드. 추가(C) 수정(U) 삭제(D) 처리를 서버에 저장처리 하지 않고 사용자가 원하는 시점에 일괄 처리할 수 있는 모드입니다. 신규 추가된 아이템은 _CUD 속성값이 추가 C, 수정 U, 삭제 D 를 가지게 됩니다.",
					passiveRemoveHide : "(true|false)  수동처리 모드 상태에서 아이템 삭제 처리옵션. 삭제 요청 시 삭제된 아이템을 리스트에 표시할지 여부 리스트에 표시 되지 않는 아이템은 삭제되고 .removedList 속성으로 접근할 수 있습니다.",
					viewMode : "(\"grid\"|\"icon\") 지정하지 않으면 기본 grid 모드 body.view.icon 속성 정의가 있는 경우에 \"icon\" 사용 가능합니다.",
					colGroup: {
						key:"(String/필수) 컬럼에 매치될 item 의 키",
						label:"(String/필수) 컬럼에 표시할 라벨",
						width:"(String|\"*\") 컬럼의 너비 \"*\"으로 지정하면 화면의 남은 공간을 차지하게 됩니다.",
						align:"(\"left\"|\"center\"|\"right\") 컬럼 라벨의 정렬 방법",
						formatter:"(\"money\"|\"dec\"|\"checkbox\"|\"radioBox\"|Function) 컬럼값의 표현형식 각각 화폐 표현식, urlDecode, input.Checkbox, input.radioBox, 사용자 정의 함수",
						display:"(true|false) 컬럼의 표시 여부"
					},
					colHead: {
						rows: {
							colspan:"(Number) table tr td 에서의 colspan 속성과 같은 매커니즘으로 작동합니다.",
							rowspan:"(Number) table tr td 에서의 rowspan 속성과 같은 매커니즘으로 작동합니다.",
							colSeq:"(Number) colGroup에서 원하는 컬럼의 순번 key 를 지정하지 않은 경우에 사용됩니다. key 지정하는 방식보다 퍼포먼스 면에서 우수합니다.",
							key:"(String/필수) colGroup에서 원하는 컬럼의 key",
							label:"(String/필수) 헤드에 표시할 라벨을 정의하지 않으면 colGroup에서 지정한 값을 상속 받습니다.",
							align:"(\"left\"|\"center\"|\"right\") 헤드의 정렬 방법을 정의하지 않으면 colGroup에서 지정한 값을 상속 받습니다.",
							formatter:"(\"money\"|\"dec\"|\"checkbox\"|\"radioBox\"|Function) 헤드값의 표현형식 각각 화폐표현식, urlDecode, input.Checkbox, input.radioBox, 사용자 정의 함수를 정의하지 않으면 colGroup에서 지정한 값을 상속 받습니다."	
						},
						onclick: "(Function) 헤드 클릭 이벤트 콜백함수"
					},
					body: {
						rows: {
							colspan:"(Number) table tr td 에서의 colspan 속성과 같은 매커니즘으로 작동합니다.",
							rowspan:"(Number) table tr td 에서의 rowspan 속성과 같은 매커니즘으로 작동합니다.",
							colSeq:"(Number) colGroup에서 원하는 컬럼의 순번 key 를 지정하지 않은 경우에 사용됩니다. key 지정하는 방식보다 퍼포먼스 면에서 우수합니다.",
							key:"(String/필수) colGroup에서 원하는 컬럼의 key",
							label:"(String/필수) 바디에 표시할 라벨을 정의하지 않으면 colGroup에서 지정한 값을 상속 받습니다.",
							align:"(\"left\"|\"center\"|\"right\") 바디의 정렬 방법을 정의하지 않으면 colGroup에서 지정한 값을 상속 받습니다.",
							formatter:"(\"money\"|\"dec\"|\"checkbox\"|\"radioBox\"|Function) 바디값의 표현형식 각각 화폐 표현식, urlDecode, input.Checkbox, input.radioBox, 사용자 정의 함수를 정의하지 않으면 colGroup에서 지정한 값을 상속 받습니다."	
						},
						marker: {
							display: "(Function) marker row 를 출력할지 여부를 판단하는 사용자 함수 this.item, this.index 값이 사용자 함수에 전달이 됩니다. 전달된 변수를 활용하여 사용자 함수를 구성할 수 있습니다.",
							rows: "(Array) body rows 와 동일"
						},
						view_icon : {
							width:"너비",
							height:"높이",
							img: "이미지 속성 정의 {left:'10', top:'10', width:'179', height:'180',style:'border:1px solid #ccc;'}",
							label: "라벨 속성 정의 {left:'10', top:'200', width:'180', height:'20'}",
							description: "설명 속성 정의 {left:'10', top:'225', width:'180', height:'65', style:'color:#888;'}",
							buttons: "버튼 속성 정의",
							format: "뷰 formatter {imgsrc:'String', label:'String', description:'String'} "
						},
						onclick: "(Function) 바디 클릭 이벤트 콜백함수",
						ondblclick: "(Function) 바디 더블클릭 이벤트 콜백함수",
						oncheck: "(Function) Checkbox 아이템 클릭 이벤트 콜백함수",
						addClass: "(Function) 그리드 아이템에 사용자 CSS 클래스를 추가할 수 있는 사용자 함수. 추가하려는 클래스명을 return 으로 반환하십시요"
					},
					head: {
						description:"colHead 와는 다른 속성 입니다. scroll영역 안쪽에 위치하고 데이터 head 라고 표현해도 좋을 것 같습니다.",
						rows: {
							colspan:"(Number) table tr td 에서의 colspan 속성과 같은 매커니즘으로 작동합니다.",
							rowspan:"(Number) table tr td 에서의 rowspan 속성과 같은 매커니즘으로 작동합니다.",
							colSeq:"(Number) colGroup에서 원하는 컬럼의 순번 key 를 지정하지 않은 경우에 사용됩니다. key 지정하는 방식보다 퍼포먼스 면에서 우수합니다.",
							key:"(String/필수) colGroup에서 원하는 컬럼의 key",
							label:"(String/필수) 헤드에 표시할 라벨을 정의하지 않으면 colGroup에서 지정한 값을 상속 받습니다.",
							align:"(\"left\"|\"center\"|\"right\") 헤드의 정렬 방법을 정의하지 않으면 colGroup에서 지정한 값을 상속 받습니다.",
							formatter:"(\"money\"|\"dec\"|\"checkbox\"|\"radioBox\"|Function) 헤드값의 표현형식 각각 화폐표현식, urlDecode, input.Checkbox, input.radioBox, 사용자 정의 함수를 정의하지 않으면 colGroup에서 지정한 값을 상속 받습니다."	
						}	
					},
					foot: "head 개체와 동일합니다.",
					page: {
						display:"(true|false) 그리드 하단바의 표시여부",
						paging:"(true|false) 페이징 개체 표시 여부"
					},
					contextMenu: "<a href='#{id:\"/API/Objects/AXContextMenu\"}'>AXContextMenu</a> 참조"
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
			name:		"setList", 
			type:		"method", 
			desc:		"그리드에 데이터를 전달합니다. 비동기 방식의 경우 직접데이터를 전달하지 않고 데이터의 전달자 정보를 정의하여 처리합니다.",
			define:		"myGrid.setList(Array | AJAXconfigs);",
			arguments:	[
				{k:"Array", v:"list Array"},
				{k:"AJAXconfigs", v:{
					ajaxUrl:"AJAX 호출 URL",
					ajaxPars:"AJAX 호출 URL 파라미터 (전송은 post 방식으로 이루어집니다.)",
					onLoad:"Function AJAX 호출완료 이벤트 콜백함수"
				}}
			],
			returns:		{k:"", v:""},
			samplecode:	[],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"setDataSet", 
			type:		"method", 
			desc:		"head, foot 속성을 정의한 경우 head, foot 에 값을 표시하기 위한 메서드 입니다. setList를 통해 전달된 값과 head와 foot에서 표현할 데이터는 같다고 볼 수 없습니다. 페이징이 고려된 상황을 보았을 때 그렇습니다. 하여 head, body 에 표현하고자 하는 값을 setDataSet 메소드를 이용하여 정의할 수 있습니다.",
			define:		"_AXGrid.setDataSet(JSObject);",
			arguments:	[
				{k:"JSObject", v:"item JSObject 빈 오브젝트 {} 를 전달한 경우 formatter 에 연결된 함수계산에 의해 입력이 가능합니다."}
			],
			returns:		{k:"", v:""},
			samplecode:	[
				'myGrid.setDataSet({price:123000, amount:10});'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"reloadList", 
			type:		"method", 
			desc:		"그리드를 새로고침 하여 줍니다. 데이터를 AJAX로 호출한 경우에만 작동하고 스크롤값을 0으로 초기화되니 주의하세요.",
			define:		"_AXGrid.reloadList();",
			arguments:	[],
			returns:		{k:"", v:""},
			samplecode:	[
				'myGrid.reloadList();'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"setEditor", 
			type:		"method", 
			desc:		"특정 데이터 위치에 에디터를 활성화시켜 수정이 가능한 형태로 준비하여 줍니다. (setConfig 선언절 안에 editor 속성이 없는 경우에는 작동하지 않습니다.)",
			define:		"_AXGrid.setEditor(item, itemIndex[, insertIndex]);",
			arguments:	[
				{k:"item", v:"Array item"},
				{k:"itemIndex", v:"index of Array"},
				{k:"insertIndex", v:"에디터가 삽입될 index of Array"}
			],
			returns:		{k:"", v:""},
			samplecode:	[
				'myGrid.setEditor({}, 1);',
				'myGrid.setEditor(null, null, 1);'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"setEditorForm", 
			type:		"method", 
			desc:		"에디터가 활성화된 상태에서 에디터 안의 특정 폼에 값을 전달하고자 할 때 사용합니다.",
			define:		"_AXGrid.setEditorForm(JSobject);",
			arguments:	[
				{k:"JSObject", v:{
					key:"컬럼 key",
					position:"editor rows 적용할 대상의 배열 포지션 (다르면 적용되지 않습니다.)",
					value:"String"
				}}
			],
			returns:		{k:"", v:""},
			samplecode:	[
				'myGrid.setEditorForm({',
				'	key:"writer",',
				'	position:[0,3],',
				'	value:"String"',
				'});'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"appendList", 
			type:		"method", 
			desc:		"그리드에 신규 데이터를 삽입하기 위해 삽입용 에디터를 활성화 하여 줍니다.",
			define:		"_AXGrid.appendList(item[, insertIndex]);",
			arguments:	[
				{k:"item", v:"Array item"},
				{k:"insertIndex", v:"삽입될 index of Array"}
			],
			returns:		{k:"", v:""},
			samplecode:	[
				'var item = {};',
				'myGrid.appendList(item);',
				'myGrid.appendList(item, 3); //데이터를 삽입하고자 하는 index값을 지정합니다.'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"removeList", 
			type:		"method", 
			desc:		"삭제하려는 대상과 비교될 수 있는 Array 오브젝트를 전달하여 대상을 삭제합니다. 비교되는 Array 오브젝트의 키값이 모두 일치하는 아이템을 삭제됩니다.",
			define:		"_AXGrid.removeList(Array);",
			arguments:	[
				{k:"Array", v:""}
			],
			returns:		{k:"", v:""},
			samplecode:	[
				'var checkedList = myGrid.getCheckedList(0);// colSeq',
				'if(checkedList.length == 0){',
				'	alert("선택된 목록이 없습니다. 삭제하시려는 목록을 체크하세요");	',
				'	return;',
				'}',
				'if(!confirm("정말 삭제 하시겠습니까?")) return;',
				'var removeList = [];',
				'$.each(checkedList, function(){',
				'	removeList.push({no:this.no});',
				'});',
				'myGrid.removeList(removeList); // 전달한 개체와 비교하여 일치하는 대상을 제거 합니다. 이때 고유한 값이 아닌 항목을 전달 할 때에는 에러가 발생 할 수 있습니다.	'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"pushList", 
			type:		"method", 
			desc:		"그리드에 데이터를 추가합니다.",
			define:		"_AXGrid.pushList(item[, insertIndex]);",
			arguments:	[
				{k:"item", v:"Array item"},
				{k:"updateIndex", v:"추가될 index of Array"}
			],
			returns:		{k:"", v:""},
			samplecode:	[
				'var item = {};',
				'myGrid.pushList(item, 3); //데이터를 삽입하고자 하는 index값을 지정합니다.'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"updateList", 
			type:		"method", 
			desc:		"그리드에 데이터를 수정합니다.",
			define:		"_AXGrid.updateList(item[, updateIndex]);",
			arguments:	[
				{k:"item", v:"Array item"},
				{k:"updateIndex", v:"수정될 index of Array"}
			],
			returns:		{k:"", v:""},
			samplecode:	[
				'var item = {};',
				'myGrid.updateList(item, 3); //데이터를 삽입하고자 하는 index값을 지정합니다.'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"getCheckedList", 
			type:		"method", 
			desc:		"colGroup의 배열순번으로 해당 col의 checked 된 아이템을 반환하여 줍니다.",
			define:		"_AXGrid.getCheckedList(Number);",
			arguments:	[
				{k:"Number", v:"colGroup index"}
			],
			returns:		{k:"Array", v:"checked 된 아이템의 배열"},
			samplecode:	[
				'var myArray = myGrid.getCheckedList(0);'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"checkedColSeq", 
			type:		"method", 
			desc:		"colGroup의 배열순번에 해당 col의 checked 속성을 변경해 줍니다.",
			define:		"_AXGrid.checkedColSeq(Number, Boolean[, itemIndex]);",
			arguments:	[
				{k:"Number", v:"colGroup index"},
				{k:"Boolean", v:"checked 속성"},
				{k:"itemIndex", v:"index of Array"}
			],
			returns:		{k:"", v:""},
			samplecode:	[
				'myGrid.checkedColSeq(0, true);',
				'myGrid.checkedColSeq(0, true, 10);'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"getSelectedItem", 
			type:		"method", 
			desc:		"선택된 첫번째 아이템 개체를 반환합니다.",
			define:		"_AXGrid.getSelectedItem();",
			arguments:	[
			],
			returns:		{k:"JSobjct", v:{
				index:"(Number) index of Array 선택한 아이템들의 첫번째",
				item:"(JSObject) 선택한 아이템들의 첫번째",
				error:"선택된 아이템이 없는 경우 error 를 리턴합니다."
			}},
			samplecode:	[
				'var myResult = myGrid.getSelectedItem();'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"getCheckedListWithIndex", 
			type:		"method", 
			desc:		"colGroup의 배열순번으로 해당 col의 checked 된 아이템을 index와 함께 반환하여 줍니다.",
			define:		"_AXGrid.getCheckedListWithIndex(Number);",
			arguments:	[
				{k:"Number", v:"colGroup index"}
			],
			returns:		{k:"Array", v:"[{index:Number, item:JSObject}]"},
			samplecode:	[
				'var myArray = myGrid.getCheckedListWithIndex(0);',
				'// [{index:Number, item:JSObject},{index:Number, item:JSObject},.....]'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"removeListIndex", 
			type:		"method", 
			desc:		"Index 배열로 해당 아이템 인덱스의 아이템을 제거합니다",
			define:		"_AXGrid.removeListIndex(Array);",
			arguments:	[
				{k:"Array", v:"index or Array"}
			],
			returns:		{k:"", v:""},
			samplecode:	[
				'myGrid.removeListIndex([0,1,2]);'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"setFocus", 
			type:		"method", 
			desc:		"index 위치로 그리드 바디의 포커스를 이동합니다.",
			define:		"_AXGrid.setFocus(itemIndex);",
			arguments:	[
				{k:"itemIndex", v:"index or Array"}
			],
			returns:		{k:"", v:""},
			samplecode:	[
				'myGrid.setFocus(12);'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"focusMove", 
			type:		"method", 
			desc:		"direction 만큼 focus index 값을 이동합니다.",
			define:		"_AXGrid.focusMove(Number);",
			arguments:	[
				{k:"Number", v:"direction"}
			],
			returns:		{k:"", v:""},
			samplecode:	[
				'myGrid.focusMove(1);',
				'myGrid.focusMove(-1);'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"click", 
			type:		"method", 
			desc:		"index 에 해당하는 그리드 아이템의 클릭이벤트를 발생시켜 줍니다.",
			define:		"_AXGrid.click(Number);",
			arguments:	[
				{k:"Number", v:"itemIndex"}
			],
			returns:		{k:"", v:""},
			samplecode:	[
				'myGrid.click(1);'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"getSortParam", 
			type:		"method", 
			desc:		"그리드의 정렬 속성을 파라미터 형태로 리턴합니다.",
			define:		"_AXGrid.getSortParam(\"one\"|undefined);",
			arguments:	[
				{k:"\"one\"", v:"\"sortBy=sortObj.key sortObj.sort\"으로 리턴합니다."},
				{k:"undefined", v:"파라미터 타입으로 리턴합니다."}
			],
			returns:		{k:"String", v:"정렬 속성 파라미터"},
			samplecode:	[
				'var myParam = myGrid.getSortParam();'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"getExcelFormat", 
			type:		"method", 
			desc:		"excel format에 맞는 구문을 리턴합니다.",
			define:		"_AXGrid.getExcelFormat(\"html\"|\"json\");",
			arguments:	[
				{k:"\"html\"", v:"html 태그 소스를 리턴합니다."},
				{k:"\"json\"", v:"JSObject를 리턴합니다."}
			],
			returns:		{k:"String|JSObject", v:""},
			samplecode:	[
				'var txt = myGrid.getExcelFormat(\"html\");',
				'var json = myGrid.getExcelFormat(\"json\");'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"list", 
			type:		"Object [Array]", 
			desc:		"그리드의 그리드 데이터 Array",
			define:		"",
			samplecode:	[
				'var myGrid = new AXGrid();',
				'myGrid.setConfig({.....});',
				'trace(myGrid.list);'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"page", 
			type:		"Object [JSObject]", 
			desc:		"그리드의 페이징 데이터 JSObject",
			define:		"",
			samplecode:	[
				'var myGrid = new AXGrid();',
				'myGrid.setConfig({.....});',
				'trace(myGrid.page);'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		}
	]
}
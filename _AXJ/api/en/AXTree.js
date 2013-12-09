
{
	id:"/API/Classes/AXTree",
	head:{
		type:"Class", 
		name:"AXTree",
		flnm:"Classes.AXTree",
		file:"_AXJ/lib/AXTree.js",
		tags:"Class,AXTree"
	},
	h1:"AXTree",
	items: [
		{
			name:		"initialize", 
			type:		"method", 
			desc:		"클래스를 초기화 합니다. 초기화 한 오브젝트를 변수에 담아 제어할 수 있습니다.",
			define:		"new AXTree();",
			arguments:	[],
			returns:		{k:"", v:""},
			samplecode:	["var myTree = new AXTree();"],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"setConfig",
			type:		"method", 
			desc:		"선언된 클래스를 사용하기 위해 속성을 정의합니다. \n 1. 그리드 형\n- 표현할 각 키들을 정의\n2. 일반형\n- 한 개의 키만 정의하고 해당 오브젝트에서 fromatter에 사용자함수를 연결하여 원하는 내용을 표현합니다.",
			define:		"_AXSearch.AXTree(configs);",
			arguments:	[
				{k:"configs", v:{
					targetID:"(String/필수) HTML 엘리먼트 타겟아이디",
					theme : "(String) (\"AXTree\",\"AXTree_none\") CSS Class 이름",
					fitToWidth : "(true|false) colGroup width 들의 비율대로 화면에 꽉차게 col 너비를 자동 맞춤",
					height : "(Number|\"auto\") 그리드 높이",
					colHeadAlign : "(\"left\"|\"center\"|\"right\")head 기본 정렬 ",
					xscroll : "(true|false) 트리 가로스크롤 여부",
					width:"(\"auto\"|null) \"auto\"지정하면 트리의 너비만큼 단일 컬럼의 너비가 자동 맞춤 처리됩니다.",
					indentWidth: "(Number) 들여쓰기 너비",
					iconWidth: "(Number) 아이콘의 너비",
					indentRatio: "들여쓰기 비율 0.5~1 사이 값을 입력하시길 권장합니다.",
					showConnectionLine: "(true|false) 트리간의 관계를 연결선으로 연결하여 표시할지 여부",
					checkboxRelationFixed :"",
					reserveKeys:{
						parentHashKey:"부모 트리 포지션 해쉬 키",
						hashKey:"트리 포지션 해쉬 키",
						openKey:"트리오픈여부 키",
						subTree:"자식트리 개체 키",
						displayKey:"아이템출력여부 키"
					},
					relation:{
						parentKey:"부모아이디 키",
						childKey:"자식아이디 키"
					},
					colGroup: {
						key:"(String/필수) 컬럼에 매치될 item 의 키",
						label:"(String/필수) 컬럼에 표시할 라벨",
						width:"(String|\"*\") 컬럼의 너비 \"*\"으로 지정하면 화면의 남은 공간을 차지하게 됩니다.",
						align:"(\"left\"|\"center\"|\"right\") 컬럼라벨의 정렬 방법",
						formatter:"(\"money\"|\"dec\"|\"checkbox\"|\"radioBox\"|Function) 컬럼값의 표현형식 각각 화폐표현식, urlDecode, input.Checkbox, input.radioBox, 사용자 정의 함수",
						display:"(true|false) 컬럼의 표시 여부",
						indent:"(true|false) 트리의 컬럼중에 인덴트 표현할 대상",
						getIconClass:"function(){ return 'folder' | 'AXfolder' | 'movie' | 'img' | 'zip' | 'file' | 'fileTxt' | 'fileTag';} 으로 indent 속성 정의된 대상에 아이콘을 지정할 수 있습니다."
					},
					colHead: {
						display : "(true|false) 트리 컬럼헤드 노출정의 "
					},
					body: {
						onclick: "(Function) 바디 클릭 이벤트 콜백함수",
						ondblclick: "(Function) 바디 더블클릭 이벤트 콜백함수",
						oncheck: "(Function) 트리 체크박스클릭시 함수연결",
						onexpand: "(Function) 트리 아이템 확장 이벤트 콜백함수",
						oncontract: "(Function) 트리 아이템 축소 이벤트 콜백함수",
						addClass: "(Function) 트리 아이템에 사용자 CSS 클래스를 추가할 수 있는 사용자 함수 추가하려는 클래스명을 return 으로 반환하십시요"
					},
					contextMenu: "<a href='#{id:\"/API/Objects/AXContextMenu\"}'>AXContextMenu</a> 참조"
				}}
			],
			returns:		{k:"", v:""},
			samplecode:	[
				'var myTree = new AXTree();',
				'myTree.setConfig({',
				'	targetID : "AXTreeTarget",',
				'	theme: "AXTree_none",',
				'	relation:{',
				'		parentKey:"pno",',
				'		childKey:"no"',
				'	},',
				'	colGroup: [',
				'		{',
				'			key:"nodeName",',
				'			label:"제목",',
				'			width:"100%", align:"left", indent:true,',
				'			getIconClass: function(){',
				'				var iconNames = "folder, AXfolder, movie, img, zip, file, fileTxt, fileTag".split(/, /g);',
				'				var iconName = "";',
				'				if(this.item.type) iconName = iconNames[this.item.type];',
				'				return iconName;',
				'			},',
				'			formatter:function(){',
				'				return "<b>"+this.item.no.setDigit(2) + "</b> : " + this.item.nodeName + " (" + this.item.writer + ")";',
				'			}',
				'		}',
				'	],',
				'	body: {',
				'		onclick:function(idx, item){',
				'			toast.push(Object.toJSON(item));',
				'		}',
				'	}',
				'});'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"setList", 
			type:		"method", 
			desc:		"트리에 데이터를 전달합니다. 비동기 방식의 경우 직접데이터를 전달하지 않고 데이터의 전달자 정보를 정의하여 처리합니다.",
			define:		"myTree.setList(Array | AJAXconfigs);",
			arguments:	[
				{k:"Array", v:"list Array setConfig 에서 정의한 relation 의 부모, 자식키 값을 이용하여 list형 데이터를 tree형 데이터로 변환하여 트리를 구성합니다."},
				{k:"AJAXconfigs", v:{
					ajaxUrl:"AJAX 호출 URL",
					ajaxPars:"AJAX 호출 URL 파라미터 (전송은 post 방식으로 이루어집니다.)",
					onLoad:"Function AJAX 호출완료 이벤트 콜백함수"
				}}
			],
			returns:		{k:"", v:""},
			samplecode:	[
				'var List = [',
				'	{no:1, nodeName:"LEVEL 1-1", writer:"tom", type:"0", pno:0},',
				'		{no:11, nodeName:"LEVEL 1-1-1", writer:"tom", type:"0", pno:1},',
				'	{no:2, nodeName:"LEVEL 2-1", writer:"tom", type:"0", pno:0},',
				'		{no:21, nodeName:"LEVEL 2-1-1", writer:"tom", type:"0", pno:2},',
				'		{no:24, nodeName:"LEVEL 2-1-4", writer:"tom", type:"0", pno:2},',
				'			{no:241, nodeName:"LEVEL 2-1-4-1", writer:"tom", type:"0", pno:24},',
				'				{no:2411, nodeName:"LEVEL 2-1-4-1-1", writer:"tom", type:"0", pno:241},',
				'				{no:2412, nodeName:"LEVEL 2-1-4-1-1", writer:"tom", type:"0", pno:241},',
				'		{no:25, nodeName:"LEVEL 2-1-2", writer:"tom", type:"0", pno:2},',
				'		{no:26, nodeName:"LEVEL 2-1-3", writer:"tom", type:"0", pno:2},',
				'	{no:3, nodeName:"LEVEL 3-1", writer:"tom", type:"0", pno:0},',
				'	{no:11, nodeName:"LEVEL 3-1", writer:"tom", type:"0", pno:0}',
				'];',
				'',
				'myTree.setList(List);',
				'//myTree.setList({ajaxUrl:"loadList.asp", ajaxPars:"param1=1&param2=2"}); 비동기 방식으로 데이터 전달하기'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"setTree", 
			type:		"method", 
			desc:		"",
			define:		"_AXTree.setTree(Array | AJAXconfigs);",
			arguments:	[
				{k:"Array", v:"JSObject(tree형)"},
				{k:"AJAXconfigs", v:{
					ajaxUrl:"AJAX 호출 URL",
					ajaxPars:"AJAX 호출 URL 파라미터 (전송은 post 방식으로 이루어집니다.)",
					onLoad:"Function AJAX 호출완료 이벤트 콜백함수"
				}}
			],
			returns:		{k:"", v:""},
			samplecode:	[
				'var Tree = [',
				'	{no:"1", type:"WBS", activity:"WBS 이름", desc:"", charger:"", admin:"", docs:"", open:true, subTree:[',
				'		{no:"1.1", type:"phase", activity:"기획 및 설계", desc:"M", charger:"최인석", admin:"", docs:"", open:true, subTree:[',
				'			{no:"1.1.1", type:"process", activity:"기획단계", desc:"M", charger:"최인석", admin:"", docs:"", open:true, subTree:[',
				'				{no:"1.1.1.1", type:"activity", activity:"요구사항정의", desc:"M", charger:"최인석/PM", admin:"홍길동", docs:"[필수]요구사항정의서", open:false, subTree:[]},',
				'				{no:"1.1.1.2", type:"activity", activity:"업무분할", desc:"M", charger:"한승욱/기획", admin:"", docs:"[권고]요구사항정의서", open:false, subTree:[]}',
				'			]}',
				'		]}',
				'	]},',
				'	{no:"9", type:"WBS", activity:"WBS 이름", desc:"", charger:"", admin:"", docs:"", open:true, subTree:[]}',
				'];',
				'',
				'myTree.setTree(Tree);',
				'//myTree.setTree({ajaxUrl:"loadTree.asp", ajaxPars:"param1=1&param2=2"}); 비동기 방식으로 데이터 전달하기'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"getSelectedList", 
			type:		"method", 
			desc:		"현재 선택된 아이템을 반환합니다.",
			define:		"_AXTree.getSelectedList();",
			arguments:	[
			],
			returns:		{k:"JSObject", v:{
				index:"(Number) index of Array 선택한 아이템들의 첫번째",
				item:"(JSObject) 선택한 아이템들의 첫번째",
				error:"선택된 아이템이 없는 경우 error 를 리턴합니다."
			}},
			samplecode:	[
				'// 선택아이템의 자식 추가하기',
				'var obj = myTree.getSelectedList();',
				'myTree.appendTree(obj.index, obj.item, [{nodeID:"N", nodenm:frm.nodeName.value, writer:"mondo", type:"file", parentcd:obj.item.nodeID}]);'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"getSelectedListParent", 
			type:		"method", 
			desc:		"현재 선택된 아이템의 부모 아이템을 반환합니다.",
			define:		"_AXTree.getSelectedListParent();",
			arguments:	[
			],
			returns:		{k:"JSObject", v:{
				index:"(Number|null) index of Array 선택한 아이템들의 첫번째 부모 최상위 아이템인 경우 null 을 리턴합니다.",
				item:"(JSObject|null) 선택한 아이템들의 첫번째 부모 최상위 아이템인 경우 null 을 리턴합니다."
			}},
			samplecode:	[
				'// 선택아이템의 형제 추가하기',
				'var obj = myTree.getSelectedListParent();',
				'myTree.appendTree(obj.index, obj.item, [{nodeID:"N", nodenm:frm.nodeName.value, writer:"mondo", type:"file", parentcd:(obj.item.nodeID|0)}]);'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"getCheckedList", 
			type:		"method", 
			desc:		"colGroup의 배열순번으로 해당 col의 checked 된 아이템을 반환하여 줍니다. ",
			define:		"_AXTree.getCheckedList(Number);",
			arguments:	[
				{k:"Number", v:"colGroup index "}
			],
			returns:		{k:"Array", v:"checked 된 아이템의 배열"},
			samplecode:	[
				'var myArray = myTree.getCheckedList(0);'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"appendTree", 
			type:		"method", 
			desc:		"원하는 아이템 하위에 아이템을 추가합니다.",
			define:		"_AXTree.appendTree(itemIndex, item, Array);",
			arguments:	[
				{k:"itemIndex", v:"(Number) 부모 아이템 index"},
				{k:"item", v:"(JSObject) 부모 아이템"},
				{k:"Array", v:"(JSObject) 추가하려는 아이템"}
			],
			returns:		{k:"Array", v:"checked 된 아이템의 배열"},
			samplecode:	[
				'// 선택아이템의 자식 추가하기',
				'var obj = myTree.getSelectedList();',
				'myTree.appendTree(obj.index, obj.item, [{nodeID:"N", nodenm:frm.nodeName.value, writer:"mondo", type:"file", parentcd:obj.item.nodeID}]);',
				'',
				'// 선택아이템의 형제 추가하기',
				'var obj = myTree.getSelectedListParent();',
				'myTree.appendTree(obj.index, obj.item, [{nodeID:"N", nodenm:frm.nodeName.value, writer:"mondo", type:"file", parentcd:(obj.item.nodeID|0)}]);'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"updateTree", 
			type:		"method", 
			desc:		"원하는 아이템의 데이터를 수정합니다.",
			define:		"_AXTree.updateTree(itemIndex, item, Array);",
			arguments:	[
				{k:"itemIndex", v:"(Number) 아이템 index"},
				{k:"item", v:"(JSObject) 아이템"},
				{k:"Array", v:"(JSObject) 수정하려는 아이템 내용"}
			],
			returns:		{k:"", v:""},
			samplecode:	[
				'var obj = myTree.getSelectedList();',
				'myTree.updateTree(obj.index, obj.item, {nodenm:frm.nodeName.value});',
				'// 수정하려는 아이템의 일부 키만 전달 해도 수정이 가능합니다.'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"removeTree", 
			type:		"method", 
			desc:		"원하는 아이템의 데이터를 수정합니다.",
			define:		"_AXTree.removeTree(itemIndex, item);",
			arguments:	[
				{k:"itemIndex", v:"(Number|null) 아이템 index, index는 항목은 null 로 정의해도 처리가 가능합니다."},
				{k:"item", v:"(JSObject) 아이템"}
			],
			returns:		{k:"", v:""},
			samplecode:	[
				'var obj = myTree.getSelectedList();',
				'if(obj.error){',
				'	alert("개체를 선택해 주세요");',
				'	return;',
				'}',
				'myTree.removeTree(obj.index, obj.item);'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"moveTree", 
			type:		"method", 
			desc:		"원하는 아이템의 데이터를 수정합니다.",
			define:		"_AXTree.moveTree(JSObject);",
			arguments:	[
				{k:"JSObject", v:{
					startMove:"(Function) moveTree가 발동 되었을 때 발생되는 콜백함수",
					validate:"(Function) moveTree가 활성화 된 상태에서 사용자의 선택을 검증하는 콜백함수",
					endMove:"(Function) moveTree가 완료 되었을때 발생되는 콜백함수"
				}}
			],
			returns:		{k:"", v:""},
			samplecode:	[
				'myTree.moveTree({',
				'	startMove: function(){',
				'		myTree.addClassItem({',
				'			className:"disable", ',
				'			addClass:function(){',
				'				return (this.nodeID == "N");',
				'			}',
				'		});',
				'	},',
				'	validate:function(){',
				'		//this.moveObj',
				'		//this.targetObj',
				'		if(this.targetObj.nodeID == "N"){',
				'			alert("이동할 수 없는 대상을 선택하셨습니다.");',
				'			return false;',
				'		}else{',
				'			return true;	',
				'		}',
				'	},',
				'	endMove: function(){',
				'		myTree.removeClassItem({',
				'			className:"disable", ',
				'			removeClass:function(){',
				'				return (this.nodeID == "N");',
				'			}',
				'		});',
				'	}',
				'});'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"click", 
			type:		"method", 
			desc:		"아이템인덱스의 아이템 선택, 확장, 클릭이벤트 발생 처리를 합니다.",
			define:		"_AXTree.click(itemIndex[, open, doNotCallBack]);",
			arguments:	[
				{k:"Number", v:"(Number) index of Array"},
				{k:"open", v:"(\"open\") 아이템개체 확장여부"},
				{k:"doNotCallBack", v:"(Boolean) 아이템 개체 확장 처리후 클릭이벤트 발생 방지"}
			],
			returns:		{k:"JSObject", v:{
				focusedID:"(String) click된 아이템의 html node 아이디"
			}},
			samplecode:	[
				'var findIndex = null;',
				'$.each(List, function(jindex, J){',
				'	if(this.id == "findid"){',
				'		findIndex = jindex;',
				'		return false;',
				'	}',
				'});',
				'if(findIndex != null){',
				'	var focusItem = myTree.click(findIndex, "open", true); // 아이템 확장처리만 원함.',
				'}'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"expandAll", 
			type:		"method", 
			desc:		"트리의 모든 아이템을 확장상태로 변경합니다.",
			define:		"_AXTree.expandAll();",
			arguments:	[
			],
			returns:		{k:"", v:""},
			samplecode:	[
				'myTree.expandAll();'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"collapseAll", 
			type:		"method", 
			desc:		"트리의 모든 아이템을 축소상태로 변경합니다.",
			define:		"_AXTree.collapseAll();",
			arguments:	[
			],
			returns:		{k:"", v:""},
			samplecode:	[
				'myTree.collapseAll();'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"expandToggleList", 
			type:		"method", 
			desc:		"아이템의 확장/축소 상태를 토글처리 합니다.",
			define:		"_AXTree.expandToggleList(itemIndex, item);",
			arguments:	[
				{k:"itemIndex", v:"(Number) 아이템 index"},
				{k:"item", v:"(JSObject) 아이템"}
			],
			returns:		{k:"", v:""},
			samplecode:	[
				'var iwantItemIndex = 10;',
				'var myitem = myTree.list[iwantItemIndex];',
				'myTree.expandToggleList(iwantItemIndex, myitem);'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"relationFixedSync", 
			type:		"method", 
			desc:		"자식 항목에 체크된 경우 부모 값을 체크된 상태로 변경해주는 메서드 입니다. ",
			define:		"_AXTree.relationFixedSync();",
			arguments:	[
			],
			returns:		{k:"", v:""},
			samplecode:	[
				'myTree.relationFixedSync();'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"setFocus", 
			type:		"method", 
			desc:		"index 위치로 트리바디의 포커스를 이동하고 선택된 상태로 변경합니다.",
			define:		"_AXTree.setFocus(itemIndex);",
			arguments:	[
			],
			returns:		{k:"", v:""},
			samplecode:	[
				'myTree.setFocus(3);'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"clearFocus", 
			type:		"method", 
			desc:		"선택된 상태를 해제합니다.",
			define:		"_AXTree.clearFocus();",
			arguments:	[
			],
			returns:		{k:"", v:""},
			samplecode:	[
				'myTree.clearFocus();'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},

		{
			name:		"list", 
			type:		"Object [Array]", 
			desc:		"트리의 리스트 데이터 Array",
			samplecode:	[
				'var myTree = new AXTree();',
				'myTree.setConfig({.....});',
				'trace(myTree.list);'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name:		"tree", 
			type:		"Object [JSObject]", 
			desc:		"트리의 트리 데이터 JSObject",
			samplecode:	[
				'var myTree = new AXTree();',
				'myTree.setConfig({.....});',
				'trace(myTree.tree);'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		}
	]
}
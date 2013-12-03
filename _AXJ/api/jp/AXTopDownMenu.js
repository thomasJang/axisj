
{
	id:"/API/Classes/AXTopDownMenu",
	head:{
		type:"Class", 
		name:"AXTopDownMenu",
		flnm:"Classes.AXTopDownMenu",
		file:"_AXJ/lib/AXTopDownMenu.js",
		tags:"Class,AXTopDownMenu"
	},
	h1:"AXTopDownMenu",
	items: [
		{
			aname:		"AXTopDownMenu-initialize", 
			name:		"initialize", 
			type:		"method", 
			desc:		"클래스를 초기화 합니다. 초기화 한 오브젝트를 변수에 담아 제어할 수 있습니다.",
			define:		"new AXTopDownMenu();",
			arguments:	[],
			returns:		{k:"", v:""},
			samplecode:	["var mySearch = new AXTopDownMenu();"],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			aname:		"AXTopDownMenu-setConfig", 
			name:		"setConfig",
			type:		"method", 
			desc:		"선언된 클래스를 사용하기 위해 속성을 정의합니다.",
			define:		"_AXTopDownMenu.setConfig(configs);",
			arguments:	[
				{k:"configs", v:{
					menuBoxID:"메뉴타겟 엘리먼트 아이디",
					parentMenu:{
						className:"(String) 1단계 메뉴의 CSS 클래스"
					},
					childMenu:{
						className:"(String) 2단계 메뉴의 CSS 클래스",
						align:"('left'|'center'|'right') ",
						valign:"('top'|'bottom') ",
						margin:"{top:0, left:0}|{bottom:0, left:0}",
						arrowClassName:"(String) 2단계 메뉴의 박스 화살표 CSS 클래스",
						arrowMargin:"{top:0, left:0}|{bottom:0, left:0}"
					},
					childsMenu:{
						className:"(String) 3단계 메뉴 이상의 CSS 클래스",
						align:"('left'|'center'|'right') ",
						valign:"('top'|'bottom') ",
						margin:"{top:0, left:0}|{bottom:0, left:0}",
						arrowClassName:"(String) 3단계 메뉴 이상의 박스 화살표 CSS 클래스",
						arrowMargin:"{top:0, left:0}|{bottom:0, left:0}"
					}
				}}
			],
			returns:		{k:"", v:""},
			samplecode:	[
				'myMenu.setConfig({',
				'	menuBoxID:"menuBox",',
				'	parentMenu:{',
				'		className:"parentMenu"',
				'	},',
				'	childMenu:{',
				'		className:"childMenu",',
				'		align:"center",',
				'		valign:"top",',
				'		margin:{top:0, left:0},',
				'		arrowClassName:"varrow2",',
				'		arrowMargin:{top:1, left:0}',
				'	},',
				'	childsMenu:{',
				'		className:"childsMenu",',
				'		align:"left",',
				'		valign:"top",',
				'		margin:{top:-4, left:0},',
				'		arrowClassName:"harrow",',
				'		arrowMargin:{top:13, left:1}',
				'	}',
				'});'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			aname:		"AXTopDownMenu-setTree", 
			name:		"setTree",
			type:		"method", 
			desc:		"메뉴타겟 엘리먼트 아이디 안에 메뉴 대상 HTML 엘리먼트가 있는 경우 자동으로 메뉴를 구성합니다. setTree 메소드는 타겟을 빈 노드로 선언하고 setTree 메소드를 통해 동적으로 메뉴를 구성하는 메소드입니다.",
			define:		"_AXTopDownMenu.setTree(Tree);",
			arguments:	[
				{k:"Tree", v:{
					label:"메뉴의 라벨", url:"연결URL", addClass:"메뉴아이템에 추가할 CSS 클래스", cn:"자식 메뉴 Array"
				}}
			],
			returns:		{k:"", v:""},
			samplecode:	[
				'var tree = [',
				'	{label:"Bottom Menu", url:"http://www.axisj.com", cn:[',
				'		{label:"valign - bottom", url:"http://www.axisj.com"},',
				'		{label:"margin - bootom", url:"http://www.axisj.com"},',
				'		{label:"margin - top X", url:"http://www.axisj.com"}',
				'	]},',
				'	{label:"Script Control Way", url:"http://www.axisj.com", cn:[',
				'		{label:"Script Way Use setTree", url:"abhttp://www.axisj.comc"},',
				'		{label:"setHighLightMenu", url:"http://www.axisj.com", cn:[',
				'			{label:"first : String", url:"http://www.axisj.com"},',
				'			{label:"second : Array", url:"http://www.axisj.com"},',
				'			{label:"third : setHighLightOriginID", url:"http://www.axisj.com"}	',
				'		]},',
				'		{label:"myMenu2", url:"http://www.axisj.com"}',
				'	]},',
				'	{label:"no Expand Menu", url:"http://www.axisj.combc"},',
				'	{label:"no Expand Menu", url:"http://www.axisj.com"},',
				'	{label:"no Expand Menu", url:"http://www.axisj.com"}',
				'];',
				'myMenuForScript.setTree(tree);'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			aname:		"AXTopDownMenu-setHighLightOriginID", 
			name:		"setHighLightOriginID",
			type:		"method", 
			desc:		"타겟 엘리먼트안에 Html 엘리먼트로 메뉴를 정의한 경우 엘리먼트 안에 사용자가 정의해 둔 아이디로 메뉴의 하이라이트를 처리해줍니다.",
			define:		"_AXTopDownMenu.setHighLightOriginID(String);",
			arguments:	[
				{k:"String", v:"메뉴 엘리먼트에 사용자가 정의한 ID"}
			],
			returns:		{k:"", v:""},
			samplecode:	[
				'myMenu.setHighLightOriginID("ID1245");'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			aname:		"AXTopDownMenu-setHighLightMenu", 
			name:		"setHighLightMenu",
			type:		"method", 
			desc:		"메뉴의 포지션 값으로 포지션에 해당하는 메뉴를 하이라이트 처리해 줍니다.",
			define:		"_AXTopDownMenu.setHighLightMenu(Array);",
			arguments:	[
				{k:"Array", v:"[0, 1] 와 같이 각 뎁스의 순번을 전달합니다."}
			],
			returns:		{k:"", v:""},
			samplecode:	[
				'myMenu.setHighLightMenu([1, 1]); // 2번째 아이템의 2번째 아이템을 하이라이트 처리합니다.'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		}
	]
}
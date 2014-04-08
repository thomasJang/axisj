
{
	id:"/API/Classes/AXUPload5",
	head:{
		type:"Class", 
		name:"AXUPload5",
		flnm:"Classes.AXUPload5",
		file:"_AXJ/lib/AXUPload5.js",
		tags:"Class,AXUPload5"
	},
	h1:"AXUPload5",
	items: [
		{
			aname:		"AXUPload5-initialize", 
			name:		"initialize", 
			type:		"method", 
			desc:		"클래스를 초기화 합니다. 초기화 한 오브젝트를 변수에 담아 제어할 수 있습니다.",
			define:		"new AXUPload5();",
			arguments:	[],
			returns:		{k:"", v:""},
			samplecode:	["var myUpload = new AXUPload5();"],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			aname:		"AXUPload5-setConfig", 
			name:		"setConfig",
			type:		"method", 
			desc:		"선언된 클래스를 사용하기 위해 속성을 정의합니다.",
			define:		"_AXUPload5.setConfig(configs);",
			arguments:	[
				{k:"configs", v:{
					targetID:"(String) 업로드 버튼 엘리먼트 아이디",
					buttonTxt:"(String) 업로드 버튼 문구. 사용자가 지정하지 않으면 AXConfig 에서 정의한 값을 사용합니다.",
					targetButtonClass:"(String) 업로드 버튼에 추가될 CSS 클래스",
					uploadFileName:"(String) 서버에 전송될 파일 파라미터 키이름 (files[])",
					file_types:"(String) *.*|audio/*|video/*|image/*|MIME_type (accept)",
					dropBoxID:"(String) 드래그 드랍 타겟 엘리먼트 아이디",
					queueBoxID:"(String) 업로드된 파일 목록을 보여주는 업로드 큐박스 엘리먼트 아이디",
					queueBoxAppendType:"(\"prepend\" || \"append\") 업로드 큐 박스에 추가 되는 방향을 설정 합니다.",
					flash_url : "(String) html 5를 지원하지 않는 브라우저를 위한 swf upload. 설정하길 원치 않는 경우엔 선언하지 않아도 됩니다.",
					flash9_url : "(String) html 5를 지원하지 않는 브라우저를 위한 swf upload. 설정하길 원치 않는 경우엔 선언하지 않아도 됩니다.",
					onClickUploadedItem: "(Fundtion) 업로드된 목록을 클릭했을 때 이벤트 콜백함수",
					uploadMaxFileSize:"(Number) 업로드 될 개별 파일 사이즈 (클라이언트에서 제한하는 사이즈이며, 서버에서 설정되는 값이 아닙니다.)",
					uploadMaxFileCount:"(Number) 업로드 될 파일갯수 제한 0 은 무제한",
					uploadUrl:"(String) 서버전송 URL ",
					uploadPars:"(JSObject) 서버전송 URL 파라미터 ",
					deleteUrl:"(String) 서버전송 URL ",
					deletePars:"(JSObject) 서버전송 URL 파라미터 ",
					fileKeys:{
						name:"서버에서 리턴하는 json key 정의 (id는 예약어 사용할 수 없음)",
						type:"서버에서 리턴하는 json key 정의 (id는 예약어 사용할 수 없음)",
						saveName:"서버에서 리턴하는 json key 정의 (id는 예약어 사용할 수 없음)",
						fileSize:"서버에서 리턴하는 json key 정의 (id는 예약어 사용할 수 없음)",
						uploadedPath:"서버에서 리턴하는 json key 정의 (id는 예약어 사용할 수 없음)",
						thumbPath:"서버에서 리턴하는 json key 정의 (id는 예약어 사용할 수 없음)"
					},
					onbeforeFileSelect: "(Fundtion) 드랍되거나 파일이 선택되기 전에 이벤트 return true; 리턴하지 않으면 진행을 중지 합니다.",
					onUpload: "(Fundtion) 업로드가 완료되는 이벤트 콜백함수",
					onComplete: "(Fundtion) 업로드가 모두 완료되는 이벤트 콜백함수",
					onStart: "(Fundtion) 업로드가 시작되는 이벤트 콜백함수",
					onDelete: "(Fundtion) 파일 삭제 완료되는 이벤트 콜백함수",
					onError: "(Fundtion) 에러가 발생되었을 때 이벤트 콜백함수 [errorType, extData] 인자 사용"
				}}
			],
			returns:		{k:"", v:""},
			samplecode:	[
				'myUpload.setConfig({',
				'	targetID:"AXUpload5",',
				'	buttonTxt:"파일올리기",',
				'	targetButtonClass:"Green",',
				'	uploadFileName:"files[]",',
				'	file_types:"*.*",  //audio/*|video/*|image/*|MIME_type (accept)',
				'	dropBoxID:"uploadQueueBox",',
				'	queueBoxID:"uploadQueueBox", // upload queue targetID',
				'	// html 5를 지원하지 않는 브라우저를 위한 swf upload 설정 원치 않는 경우엔 선언 하지 않아도 됩니다. ------- s',
				'	flash_url : "../../_AXJ/lib/swfupload.swf",',
				'	flash9_url : "../../_AXJ/lib/swfupload_fp9.swf",',
				'	// --------- e',
				'	onClickUploadedItem: function(){ // 업로드된 목록을 클릭했을 때.',
				'		//trace(this);',
				'		window.open(this.uploadedPath.dec() + this.saveName.dec(), "_blank", "width=500,height=500");',
				'	},',
				'	uploadMaxFileSize:(10*1024*1024), // 업로드될 개별 파일 사이즈 (클라이언트에서 제한하는 사이즈 이지 서버에서 설정되는 값이 아닙니다.)',
				'	uploadMaxFileCount:3, // 업로드될 파일갯수 제한 0 은 무제한',
				'	uploadUrl:"uploadFile.asp",',
				'	uploadPars:{userID:"tom", userName:"액시스"},',
				'	deleteUrl:"deleteFile.asp",',
				'	deletePars:{userID:"tom", userName:"액시스"},',
				'	fileKeys:{ // 서버에서 리턴하는 json key 정의 (id는 예약어 사용할 수 없음)',
				'		name:"name",',
				'		type:"type",',
				'		saveName:"saveName",',
				'		fileSize:"fileSize",',
				'		uploadedPath:"uploadedPath",',
				'		thumbPath:"thumbUrl" // 서버에서 키값을 다르게 설정 할 수 있다는 것을 확인 하기 위해 이름을 다르게 처리한 예제 입니다.',
				'	},',
				'	onbeforeFileSelect: function(){',
				'		trace(this);',
				'		return true;',
				'	},',
				'	onUpload: function(){',
				'		trace(this);',
				'		//trace("onUpload");',
				'	},',
				'	onComplete: function(){',
				'		//trace(this);',
				'		//trace("onComplete");',
				'		$("#uploadCancelBtn").get(0).disabled = true; // 전송중지 버튼 제어',
				'	},',
				'	onStart: function(){',
				'		//trace(this);',
				'		//trace("onStart");',
				'		$("#uploadCancelBtn").get(0).disabled = false; // 전송중지 버튼 제어',
				'	},',
				'	onDelete: function(){',
				'		//trace(this);',
				'		//trace("onDelete");',
				'	},',
				'	onError: function(errorType, extData){',
				'		if(errorType == "html5Support"){',
				'			//dialog.push("The File APIs are not fully supported in this browser.");',
				'		}else if(errorType == "fileSize"){',
				'			trace(extData);',
				'			alert("파일사이즈가 초과된 파일을 업로드 할 수 없습니다. 업로드 목록에서 제외 합니다.\n("+extData.name+" : "+extData.size.byte()+")");',
				'		}else if(errorType == "fileCount"){',
				'			alert("업로드 갯수 초과 초과된 아이템은 업로드 되지 않습니다.");',
				'		}',
				'	}',
				'});'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			aname:		"AXUPload5-setUploadedList", 
			name:		"setUploadedList", 
			type:		"method", 
			desc:		"업로드된 목록을 지정합니다.",
			define:		"_AXUPload5.setUploadedList(Array);",
			arguments:	[
				{k:"Array", v:{
					name:"setConfig.fileKeys 에서 정의한 json key",
					type:"setConfig.fileKeys 에서 정의한 json key",
					saveName:"setConfig.fileKeys 에서 정의한 json key",
					fileSize:"setConfig.fileKeys 에서 정의한 json key",
					uploadedPath:"setConfig.fileKeys 에서 정의한 json key",
					thumbPath:"setConfig.fileKeys 에서 정의한 json key"
				}}
			],
			returns:		{k:"", v:""},
			samplecode:	[
				'var url = "loadFileList";',
				'var pars = "dummy="+AXUtil.timekey();',
				'new AXReq(url, {pars:pars, onsucc:function(res){',
				'	if(res.result == "ok"){',
				'		myUpload.setUploadedList(res.ds);',
				'	}else{',
				'		alert(res.msg.dec());',
				'	}',
				'}});'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			aname:		"AXUPload5-changeConfig", 
			name:		"changeConfig", 
			type:		"method", 
			desc:		"setConfig 에서 정의한 속성을 재정의 합니다.",
			define:		"_AXUPload5.changeConfig(configs);",
			arguments:	[
				{k:"configs", v:"setConfig 참조"}
			],
			returns:		{k:"", v:""},
			samplecode:	[
				'myUpload.changeConfig({',
				'	/*',
				'	uploadUrl:"uploadFile.asp",',
				'	uploadPars:{userID:"tom", userName:"액시스"},',
				'	*/',
				'	uploadMaxFileCount:10',
				'});'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			aname:		"AXUPload5-getUploadedList", 
			name:		"getUploadedList", 
			type:		"method", 
			desc:		"업로드된 파일 목록을 반환합니다.",
			define:		"_AXUPload5.getUploadedList(arg);",
			arguments:	[
				{k:"arg", v:"(\"param\"|\"json\") 옵션에 따라 파라미터 타입 또는 JSObject 형태로 리턴 타입을 지정합니다."}
			],
			returns:		{k:"String|JSObject", v:"파라미터 타입 또는 JSObject 형태"},
			samplecode:	[
				'var list = myUpload.getUploadedList("json");',
				'trace(list);',
				'toast.push(Object.toJSON(list));'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			aname:		"AXUPload5-getSelectUploadedList", 
			name:		"getSelectUploadedList", 
			type:		"method", 
			desc:		"업로드된 파일 목록 중에서 선택된 아이템을 반환합니다.",
			define:		"_AXUPload5.getSelectUploadedList(arg);",
			arguments:	[
				{k:"arg", v:"(\"param\"|\"json\") 옵션에 따라 파라미터 타입 또는 JSObject 형태로 리턴 타입을 지정합니다."}
			],
			returns:		{k:"String|JSObject", v:"파라미터 타입 또는 JSObject 형태"},
			samplecode:	[
				'var list = myUpload.getSelectUploadedList("json");',
				'trace(list);',
				'toast.push(Object.toJSON(list));'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		}
	]
}
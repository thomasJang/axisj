
{
	id:"/API/Objects/mask",
	head:{
		type:"Objects", 
		name:"mask",
		flnm:"Objects.mask",
		file:"_AXJ/lib/AXJ.js",
		tags:"Objects,mask"
	},
	h1:"mask",
	items: [
		{
			name: "open", 
			type: "method", 
			desc: "화면에 mask 개체를 활성화 시킵니다.",
			define: "mask.open([time]);",
			arguments: [
				{k:"time", v:"밀리세컨트"}
			],
			returns: {k:"", v:""},
			samplecode:[
'mask.open();',
'mask.close(1000); // 1초후에 마스크가 해제됩니다.'
			],
			example:[
'<input type="button" value="mask.open()" class="AXButton" onclick=\'mask.open();mask.close(1000);\' />'
			],
			exampleFn:[],
			reference:	[]
		},
		{
			name: "close", 
			type: "method", 
			desc: "화면에 mask 개체를 비 활성화 시킵니다.",
			define: "mask.close([time])",
			arguments: [
				{k:"time", v:"밀리세컨드값 지정한 시간 후에 마스크를 해제 시킵니다. "}
			],
			returns: {k:"", v:""},
			samplecode:[
'mask.close(); // 마스크를 즉시 해제 시킵니다.',
'mask.close(1000); // 1초후에 마스크가 해제됩니다.'
			],
			example:[
			],
			exampleFn:[],
			reference:	[]
		},
		{
			name: "blink", 
			type: "method", 
			desc: "화면에 mask 개체를 비 활성화 시킵니다.",
			define: "mask.blink([Array])",
			arguments: [
				{k:"Array", v:"블링크 처리에 필요한 시퀀스 배열"}
			],
			returns: {k:"", v:""},
			samplecode:[
'mask.open();',
'mask.blink([',
'	{',
'		css:{',
'			opacity: "0.1"',
'		}, time:300',
'	},',
'	{',
'		css:{',
'			opacity: "0.8"',
'		}, time:300',
'	}',
']); // 블링크 처리',
'mask.close(2000); // 1초후에 마스크가 해제됩니다.'
			],
			example:[
'<input type="button" value="mask.blink()" class="AXButton" onclick="fnObj.maskBlink();" />'
			],
			exampleFn:[
'fnObj.maskBlink = function(){',
'toast.push("마스크를 클릭하면 마스크가 사라집니다");',
'',
'//mask.setCSS({backgroundColor:"#ff0000"});',
'mask.open();',
'mask.blink([',
'	{',
'		css:{',
'			opacity: "0.1"',
'		}, time:300',
'	},',
'	{',
'		css:{',
'			opacity: "0.8"',
'		}, time:300',
'	}',
']);',
'	',
'setTimeout(function(){',
'	$(document.body).bind("click", function(){',
'		mask.stopBlink();',
'		mask.close();',
'		$(document.body).unbind("click");',
'	});',
'}, 1);	',
'}'
			],
			reference:	[]
		},
		{
			name: "stopBlink", 
			type: "method", 
			desc: "blink 를 중지합니다.",
			define: "mask.stopBlink()",
			arguments: [
			],
			returns: {k:"", v:""},
			samplecode:[],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name: "setCSS", 
			type: "method", 
			desc: "mask Element에 style을 적용합니다.",
			define: "mask.stopBlink(CSS)",
			arguments: [
				{k:"CSS", v:"스타일시트"}
			],
			returns: {k:"", v:""},
			samplecode:[
				'mask.setCSS(CSS);',
				'mask.setCSS({opacity:"0.6"});'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name: "addClass", 
			type: "method", 
			desc: "mask Element에 addClass 처리하여 줍니다.",
			define: "mask.addClass(String)",
			arguments: [
				{k:"String", v:"CSS 클래스"}
			],
			returns: {k:"", v:""},
			samplecode:[
				'mask.addClass("myClass");'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		},
		{
			name: "removeClass", 
			type: "method", 
			desc: "mask Element에 removeClass 처리하여 줍니다.",
			define: "mask.removeClass(String)",
			arguments: [
				{k:"String", v:"CSS 클래스"}
			],
			returns: {k:"", v:""},
			samplecode:[
				'mask.removeClass("myClass");'
			],
			example:[],
			exampleFn:[],
			reference:	[]
		}
	]
}

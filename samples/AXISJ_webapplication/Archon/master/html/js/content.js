var masterMenu = {
	tree:[
		{label:"계정관리", addClass:"icon01", subTree:[
			{programID:"INDEX01", label:"시작페이지", 	url:"index.html", target:"_self"},
			{programID:"MEM01", label:"사용방법안내", 	url:"readme.html", target:"_self"},
			{programID:"MEM02", label:"회원관리", url:"member.html", target:"_self"}
		]},
		{label:"관리자메뉴 01", addClass:"icon02", subTree:[
			{programID:"DOWNLOAD01", label:"관리자메뉴 01", url:"#", target:"_self"}
		]},
		{label:"관리자메뉴 02", addClass:"icon03", subTree:[
			{programID:"DOWNLOAD02", label:"관리자메뉴 02", url:"#", target:"_self"}
		]},
		{label:"관리자메뉴 03", addClass:"icon04", subTree:[
			{programID:"DOWNLOAD03", label:"관리자메뉴 03", url:"#", target:"_self"}
		]},		
		{label:"다운로드관리", addClass:"icon05", subTree:[
			{programID:"DOWNLOAD", label:"다운로드관리", url:"#", target:"_self"}
		]},
		{label:"커뮤니티", addClass:"icon06", subTree:[
			{programID:"BLOG", 		label:"블로그", 	url:"#", 		target:"_self"},
			{programID:"BUGREPORT",	label:"버그리포트",	url:"#",	target:"_self"},
			{programID:"SUGGEST", 	label:"제안", 		url:"#",	target:"_self"},
			{programID:"MEMBERBOARD",	label:"회원게시판", url:"#",	target:"_self"},
			{programID:"BOARDMNG", 	label:"게시판관리",	url:"#", target:"_self"}
		]},
		{label:"메일", addClass:"icon07", subTree:[
			{programID:"MAILMNG", label:"메일관리", url:"#", target:"_self"},
			{programID:"SENDMAIL", label:"메일작성", url:"#", target:"_self"},
		]},
		{label:"설정관리", addClass:"icon08", subTree:[
			{programID:"CODE01", label:"코드관리", url:"#", target:"_self"}
		]}
	],
	opened: AXUtil.getCookie("masterMenuOpened"),
	selectedPopMenu:"",
	selectedMenu0:"",
	selectedMenu1:"",
	init: function(_programID){
		if(masterMenu.opened == "") masterMenu.opened = "true";
		if(masterMenu.opened == "false"){
			$("#masterMenu").addClass("close");

			$("#masterBodyPath").addClass("expand");
			$("#masterBody").addClass("expand");
			if(AXUtil.browser.name != "ie"){
				$("#masterBodyPath .masterBodyLogo").css({width:$("#masterBodyPath").innerWidth()-39});
				$("#masterBodyPath .pathContainer").css({width:$("#masterBodyPath").innerWidth()-12-39});
				$("#masterBody .programTitle").css({width:$("#masterBody").innerWidth()-20-39});
			}
		}

		//trace(AXUtil.getCookie("masterMenuOpened"));

		var paths = [];
		var po = [];
		$.each(masterMenu.tree, function(treeIndex, Tree){
			var isOn = "";
			var spo = [];
			if(Tree.subTree.length > 0){
				spo.push("	<div class=\"contentBlock\" id=\"contentBlock_AX_"+treeIndex+"\">");
				$.each(Tree.subTree, function(subTreeIndex, subTree){
					var addClass = "";
					if(subTree.programID == _programID){
						paths.push("<a href=\"#axExec\" class=\"pathItem\">"+ Tree.label +"</a>");
						paths.push("<a href=\""+subTree.url+"\" target=\""+subTree.target+"\" class=\"pathItem\">"+ subTree.label +"</a>");
						isOn = " on";
						addClass = " on";
						//masterMenu.selectedPopMenu = treeIndex;
						masterMenu.selectedMenu0 = treeIndex;
					}
					//trace(subTree.addClass);
					if(subTree.addClass){
						addClass += " " + subTree.addClass;
					}
					var isLast = "";
					if(Tree.subTree.length-1 == subTreeIndex) isLast = " last";
					spo.push("		<a href=\""+subTree.url+"\" target=\""+subTree.target+"\" id=\"subTreeTitle_AX_"+subTreeIndex+"\" class=\"item"+isLast+addClass+"\">"+ subTree.label +"</a>");
				});
				spo.push("	</div>");
			}
			po.push("<a href=\"#axexec\" id=\"label_AX_"+treeIndex+"\" class=\"menuBlockLabel"+isOn+" "+Tree.addClass+"\">"+Tree.label+"</a>");
			po.push("<div class=\"menuBlock"+isOn+"\" id=\"menuBlock_AX_"+treeIndex+"\">");
			po.push("	<a href=\"#axExec\" id=\"title_AX_"+treeIndex+"\" class=\"title "+Tree.addClass+"\">"+Tree.label+"</a>");
			po.push(spo.join(''));
			po.push("</div>");
		});
		$("#masterMenuContainer").html(po.join(''));
		$("#masterMenuContainer").find(".title").bind("click", function(event){
			var id = event.target.id.split(/_AX_/g).last();
			masterMenu.openMenu(id);
		});
		$("#masterMenuContainer").find(".menuBlockLabel").bind("click", function(event){
			var id = event.target.id.split(/_AX_/g).last();
			masterMenu.popMenu(id);
		});

		// printPath
		var po = [];
		po.push("<a href=\"/master/\" class=\"home\">홈</a>");
		$.each(paths, function(){
			po.push(this);
		});
		//_selectedMenu
		$("#pathContainer").html(po.join(''));
	},
	openMenu: function(id){

		if(masterMenu.selectedMenu0 != id){
			if(masterMenu.selectedMenu0 !== ""){
				$("#label_AX_"+masterMenu.selectedMenu0).removeClass("on");
				$("#menuBlock_AX_"+masterMenu.selectedMenu0).removeClass("on");
			}
			$("#label_AX_"+id).addClass("on");
			$("#menuBlock_AX_"+id).addClass("on");

			masterMenu.selectedMenu0 = id;
		}
	},
	popMenu: function(id){
		if(masterMenu.selectedPopMenu != id){
			if(masterMenu.selectedMenu0 !== ""){
				$("#label_AX_"+masterMenu.selectedMenu0).removeClass("on");
				$("#menuBlock_AX_"+masterMenu.selectedMenu0).removeClass("on");
			}
			if(masterMenu.selectedPopMenu != ""){
				$("#menuBlock_AX_"+masterMenu.selectedPopMenu).removeClass("pop");
			}

			$("#label_AX_"+id).addClass("on");
			$("#menuBlock_AX_"+id).addClass("on");
			var top = $("#label_AX_"+id).position().top;
			$("#menuBlock_AX_"+id).addClass("pop");
			$("#menuBlock_AX_"+id).css({top:(top-1)});

			masterMenu.selectedPopMenu = id;
			masterMenu.selectedMenu0 = id;
		}else{
			$("#menuBlock_AX_"+masterMenu.selectedPopMenu).removeClass("pop");
			masterMenu.selectedPopMenu = "";
		}
	},
	toggle: function(){
		if(masterMenu.opened == "true"){
			if(masterMenu.selectedPopMenu != ""){
				$("#menuBlock_AX_"+masterMenu.selectedPopMenu).removeClass("pop");
				masterMenu.selectedPopMenu = "";
			}
			$("#masterMenu").addClass("close");

			$("#masterBodyPath").addClass("expand");
			$("#masterBody").addClass("expand");

			if(AXUtil.browser.name != "ie"){
				$("#masterBodyPath .masterBodyLogo").css({width:$("#masterBodyPath").innerWidth()-39});
				$("#masterBodyPath .pathContainer").css({width:$("#masterBodyPath").innerWidth()-12-39});
				$("#masterBody .programTitle").css({width:$("#masterBody").innerWidth()-20-39});
			}

			masterMenu.opened = "false";
			AXUtil.setCookie("masterMenuOpened", "false");
		}else{
			if(masterMenu.selectedPopMenu != ""){
				$("#menuBlock_AX_"+masterMenu.selectedPopMenu).removeClass("pop");
				masterMenu.selectedPopMenu = "";
			}
			$("#masterMenu").removeClass("close");

			$("#masterBodyPath").removeClass("expand");
			$("#masterBody").removeClass("expand");

			if(AXUtil.browser.name != "ie"){
				$("#masterBodyPath .masterBodyLogo").css({width:$("#masterBodyPath").innerWidth()-219});
				$("#masterBodyPath .pathContainer").css({width:$("#masterBodyPath").innerWidth()-12-219});
				$("#masterBody .programTitle").css({width:$("#masterBody").innerWidth()-20-219});
			}

			masterMenu.opened = "true";
			AXUtil.setCookie("masterMenuOpened", "true");
		}
		$(window).resize();
	}
};

var fcObj = {
	pageStart: function(){
		var _programID = "";
		try{
			_programID = programID;
		}catch(e){

		}
		masterMenu.init(_programID);

		$("input").bind("mousedown", function(){this.focus();});
		var clientHeight = (AXUtil.docTD == "Q") ? document.body.clientHeight : document.documentElement.clientHeight;
		var clienWidth = (AXUtil.docTD == "Q") ? document.body.clientWidth : document.documentElement.clientWidth;
		fnObj.pageStart(clienWidth, clientHeight);
	},
	pageResize: function(){
		var clientHeight = (AXUtil.docTD == "Q") ? document.body.clientHeight : document.documentElement.clientHeight;
		var clienWidth = (AXUtil.docTD == "Q") ? document.body.clientWidth : document.documentElement.clientWidth;
		fnObj.pageResize(clienWidth, clientHeight);

		if(AXUtil.browser.name != "ie"){
			$("#masterBodyPath .masterBodyLogo").css({width:"auto"});
			$("#masterBodyPath .pathContainer").css({width:"auto"});
			$("#masterBody .programTitle").css({width:"auto"});
		}
	},

	logout: function(){
		var ans = confirm("로그아웃하시겠습니까?");
		if (ans){
			location.href="../login/index.html";
		}
	},

	contentResetHeight: function(){

	}
};

$(document.body).ready(function(){
	setTimeout(fcObj.pageStart, 1);
});

$(window).bind("resize", fcObj.pageResize);
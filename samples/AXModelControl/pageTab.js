var myTabOption = [
	{optionValue:"AXModelControl", optionText:"AXModelControl", addClass:"", url:"index.html"},
	{optionValue:"AXModelControl2", optionText:"AXModelControl AXBind", addClass:"", url:"AXBind.html"},
	{optionValue:"AXModelControlGrid", optionText:"AXModelControlGrid", addClass:"", url:"controlGrid.html"},
	{optionValue:"cursorFocus", optionText:"cursorFocus", addClass:"", url:"cursorFocus.html"}
];

var pageTabChange = function(selectedObject, value){
	location.href = selectedObject.url;
};

$(document.body).ready(function(){
	var myPageID = "";
	try{
		myPageID = pageID;
	}catch(e){
		
	}
	$("#demoPageTabTarget").bindTab({
		value: (myPageID||""), 
		overflow: "scroll", 
		options: myTabOption, 
		onchange: pageTabChange
	});
});
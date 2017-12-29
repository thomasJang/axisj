
var myTabOption = [
	{optionValue:"AXTree", optionText:"AXTree", addClass:"", url:"index.html"},
	{optionValue:"setList", optionText:"setList", addClass:"", url:"setList.html"},
	{optionValue:"ajax", optionText:"ajax", addClass:"", url:"ajax.html"},
	{optionValue:"TreeControl", optionText:"TreeControl", addClass:"", url:"control.html"},
	{optionValue:"TreeControl2", optionText:"TreeControl(2)", addClass:"", url:"control2.html"},
	{optionValue:"treeCheckbox", optionText:"treeCheckbox", addClass:"", url:"treeCheckbox.html"},
	{optionValue:"connectionType", optionText:"connectionType", addClass:"", url:"connectionType.html"},
    {optionValue:"persist", optionText:"persist", addClass:"", url:"persist.html"}
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
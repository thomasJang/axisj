
var myTabOption = [
	{optionValue:"AXEditor", optionText:"AXEditor", addClass:"", url:"index.html"},
	{optionValue:"withAXUpload5", optionText:"with AXUpload5", addClass:"", url:"upload5.html"}
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
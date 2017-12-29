	
var myTabOption = [
	{optionValue:"AXGrid", optionText:"AXGrid(RWD)", addClass:"", url:"index.html"},
	{optionValue:"ajax", optionText:"RWD Paging", addClass:"", url:"ajax.html"},
	{optionValue:"custom", optionText:"RWD Custom", addClass:"", url:"custom.html"},
	{optionValue:"misc", optionText:"misc", addClass:"", url:"misc.html"}
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
var myTabOption = [
	{optionValue:"AXSlideViewer", optionText:"AXSlideViewer", addClass:"", url:"index.html"},
	{optionValue:"detectTag", optionText:"detectTag", addClass:"", url:"detect.html"}
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
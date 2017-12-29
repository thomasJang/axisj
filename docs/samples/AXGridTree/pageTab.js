var myTabOption = [
	{optionValue:"grid-tree", optionText:"AXGridTree", addClass:"", url:"index.html"}
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

var myTabOption = [
	{optionValue:"AXSearch", optionText:"AXSearch", addClass:"", url:"index.html"},
	{optionValue:"nonScript", optionText:"nonScript", addClass:"", url:"nonScript.html"},
	{optionValue:"RWD", optionText:"AXSearch RWD", addClass:"", url:"RWD.html"},
	{optionValue:"tagBind", optionText:"tagBind", addClass:"", url:"tagBind.html"},
	{optionValue:"MISC", optionText:"AXSearch MISC.", addClass:"", url:"misc.html"}
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
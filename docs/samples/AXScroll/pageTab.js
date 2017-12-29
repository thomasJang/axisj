var myTabOption = [
	{optionValue:"AXScroll", optionText:"AXScroll", addClass:"", url:"index.html"},
	{optionValue:"xyscroll", optionText:"XScroll,YScroll", addClass:"", url:"xyscroll.html"},
	{optionValue:"xscroll", optionText:"XScroll", addClass:"", url:"xscroll.html"},
	{optionValue:"bouncesScroll", optionText:"bouncesScroll", addClass:"", url:"fixedScroll.html"}
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
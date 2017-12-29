var myTabOption = [
	{optionValue:"AXGrid", optionText:"AXGrid for Angularjs", addClass:"", url:"index.html"},
	{optionValue:"AXTree", optionText:"AXTree for Angularjs", addClass:"", url:"AXTree.html"},
	{optionValue:"AXUpload5", optionText:"AXUpload5 for Angularjs", addClass:"", url:"AXUpload5.html"}
];

var pageTabChange = function(selectedObject, value){
	location.href = selectedObject.url;
};

axdom(document.body).ready(function(){
	try{
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
	}catch(e){
		trace(e);
	}
});
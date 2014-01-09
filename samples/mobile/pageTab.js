var myTabOption = [
	{optionValue:"AXMobileModal", optionText:"AXMobileModal", addClass:"", url:"index.html"},
	{optionValue:"mobileButton", optionText:"mobile button", addClass:"", url:"button.html"},
	{optionValue:"AXMobileMenu", optionText:"AXMobileMenu", addClass:"", url:"mobileMenu.html"},
	{optionValue:"AXMobileTab", optionText:"AXMobileTab", addClass:"", url:"mobileTab.html"},
	{optionValue:"mobileInput", optionText:"mobile input", addClass:"", url:"input.html"},
	{optionValue:"AXBindDate", optionText:"AXBindDate", addClass:"", url:"bindDate.html"}
];

var pageTabChange = function(selectedObject, value){
	location.href = selectedObject.url;
};

$(document.body).ready(function(){
	
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
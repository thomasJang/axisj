var myTabOption = [
	{optionValue:"AXMobileModal", optionText:"AXMobileModal", addClass:"Blue", url:"index.html"},
	{optionValue:"mobileButton", optionText:"mobile button", addClass:"Blue", url:"button.html"},
	{optionValue:"AXMobileMenu", optionText:"AXMobileMenu", addClass:"Blue", url:"mobileMenu.html"}	
];

var pageTabChange = function(selectedObject, value){
	location.href = selectedObject.url;
};
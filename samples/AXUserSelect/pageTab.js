var myTabOption = [
	{optionValue:"AXUserSelect", optionText:"AXUserSelect", addClass:"", url:"index.html"}
];

var pageTabChange = function(selectedObject, value){
	location.href = selectedObject.url;
};
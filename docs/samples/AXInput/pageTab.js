var myTabOption = [
	{optionValue:"Default", optionText:"Default", addClass:"", url:"index.html"},
	{optionValue:"Number", optionText:"Number", addClass:"", url:"Number.html"},
	{optionValue:"Switch", optionText:"Switch", addClass:"", url:"Switch.html"},
	{optionValue:"Segment", optionText:"Segment", addClass:"", url:"Segment.html"},
	{optionValue:"Slider", optionText:"Slider", addClass:"", url:"Slider.html"},
	{optionValue:"Selector", optionText:"Selector", addClass:"", url:"Selector.html"},
	{optionValue:"Date", optionText:"Date", addClass:"", url:"calendar.html"},
	{optionValue:"Pattern", optionText:"Pattern", addClass:"", url:"pattern.html"},
    {optionValue:"TagSelector", optionText:"TagSelector", addClass:"", url:"TagSelector.html"}
];

var pageTabChange = function(selectedObject, value){
	location.href = selectedObject.url;
};

$(document.body).ready(function(){

        var myPageID = "";
        try {
            myPageID = pageID;
        } catch (e) {

        }
        AXTab.setConfig({responsiveMobile:640}); /* mobile 너비 지정 */
        $("#demoPageTabTarget").bindTab({
            value: (myPageID || ""),
            overflow: "scroll",
            options: myTabOption,
            onchange: pageTabChange
        });

});
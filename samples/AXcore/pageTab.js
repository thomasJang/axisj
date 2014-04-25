var myTabOption = [
	{optionValue:"String", optionText:"String", addClass:"", url:"index.html"},
	{optionValue:"Number", optionText:"Number", addClass:"", url:"Number.html"},
	{optionValue:"Date", optionText:"Date", addClass:"", url:"Date.html"},
	{optionValue:"Array", optionText:"Array", addClass:"", url:"Array.html"},
	{optionValue:"Error", optionText:"Error", addClass:"", url:"Error.html"},	
	{optionValue:"AXUtil", optionText:"AXUtil", addClass:"", url:"AXUtil.html"},	
	{optionValue:"AXJ", optionText:"AXJ", addClass:"", url:"AXJ.html"},
	{optionValue:"AXReq", optionText:"AXReq", addClass:"", url:"AXReq.html"},
	{optionValue:"AXMask", optionText:"AXMask", addClass:"", url:"AXMask.html"},	
	{optionValue:"AXCalendar", optionText:"AXCalendar", addClass:"", url:"AXCalendar.html"},
	{optionValue:"AXContextMenu", optionText:"AXContextMenu", addClass:"", url:"AXContextMenu.html"},
	{optionValue:"AXTooltip", optionText:"AXTooltip", addClass:"", url:"AXTooltip.html"},
	{optionValue:"AXMultiSelect", optionText:"AXMultiSelect", addClass:"", url:"AXMultiSelect.html"},
	{optionValue:"Misc", optionText:"Misc", addClass:"", url:"Misc.html"}
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
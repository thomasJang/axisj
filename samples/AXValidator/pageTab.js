var myTabOption = [
	{optionValue:"AXValidator", optionText:"AXValidator", addClass:"", url:"index.html"}
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
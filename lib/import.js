var jss = [
	"/_AXJ/jquery/jquery.min.js",
	"/_AXJ/lib/AXJ.js",
	"/_AXJ/lib/AXInput.js",
	"/_AXJ/lib/AXSelect.js",
	"/_AXJ/lib/AXSearch.js",
	"/_AXJ/lib/AXModal.js",
	"/_AXJ/lib/AXTab.js",
	"/_AXJ/lib/AXGrid.js",
	"/_AXJ/lib/AXTree.js",
	"/_AXJ/lib/AXUpload.js"
];
for(var j = 0 ; j < jss.length ; j++) document.write('<script type="text/javascript" src="' + jss[j] + '"></script>');

var csss = [];
for(var c = 0 ; c < csss.length ; c++) document.write('<link rel="stylesheet" type="text/css" href="' + csss[c] + '" />');
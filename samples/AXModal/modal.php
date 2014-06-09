<?php
$a = $_POST["a"];
$b = $_POST["b"];
?>
<!DOCTYPE HTML>
<html>

<head>
	<title>modal</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta name="description" content="Description" />

    <link rel="stylesheet" type="text/css" href="../../ui/arongi/AXJ.min.css">

    <script type="text/javascript" src="../../jquery/jquery.min.js"></script>
    <script type="text/javascript" src="../../lib/AXJ.js"></script>
    <script type="text/javascript" src="../../lib/AXModal.js"></script>
</head>

<body>

	<header>
		<nav>
		</nav>
	</header>

	<h1>modal (<?=$a?>/<?=$b?>)</h1>

    <button class="AXButton" onclick="fnObj.open()">새창 한번더 열기</button>
	<!-- content goes here -->

	<footer>
	</footer>

</body>

</html>

<script>
    /**
     * Require Files for AXISJ UI Component...
     * Based		: jQuery
     * Javascript 	: AXJ.js, AXModal.js
     * CSS			: AXJ.css
     */
    var pageID = "AXModal";
    var myModal = new AXModal();
    var fnObj = {
        pageStart: function(){
            myModal.setConfig({
                windowID:"myModalCT",
                mediaQuery: {
                    mx:{min:0, max:320}, dx:{min:320}
                },
                displayLoading:true
            });
        },
        open: function(){
            var pars = {};
            myModal.open({
                url:"modal.php",
                pars:pars,
                top:0, width:300,
                closeByEscKey:true
            });
        }
    };
    jQuery(document).ready(fnObj.pageStart);
</script>

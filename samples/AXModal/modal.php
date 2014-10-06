<?php
$a = $_POST["a"];
$b = $_POST["b"];
?>
<!DOCTYPE HTML>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1.0, minimum-scale=1" />
	<title>modal</title>

    <link rel="stylesheet" type="text/css" href="../../ui/arongi/page.css">
    <link rel="stylesheet" type="text/css" href="../../ui/arongi/AXJ.min.css">

    <script type="text/javascript" src="../../jquery/jquery.min.js"></script>
    <script type="text/javascript" src="../../lib/AXJ.js"></script>
    <script type="text/javascript" src="../../lib/AXModal.js"></script>

    <style type="text/css">
        .modalProgramTitle{
            height:49px;line-height:49px;
            color:#282828;font-size:14px;font-weight:bold;
            padding-left:15px;
            border-bottom:1px solid #ccc;
        }
        .modalButtonBox{
            padding:10px;border-top:1px solid #ccc;
        }
    </style>
</head>

<body>

    <div class="bodyHeightDiv">
        <div class="modalProgramTitle">
            modal (param: <?=$a?>/<?=$b?>)
        </div>
        <div class="masterModalBody" id="masterModalBody">
            <div id="AXSearchTarget" style=""></div>
            <div style="padding:5px;">
                <div id="AXGridTarget" style="height:300px;"></div>
            </div>
        </div>
        <div class="modalButtonBox" align="center">
            <button class="AXButton" onclick="fnObj.open()">새창 한번더 열기</button>
            <button class="AXButton W60" onclick="fnObj.close();">취소</button>
        </div>
    </div>

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
        },
        close: function(){
            if(opener){
                window.close();
            }
            else
            if(parent){
                if(parent.myModal) parent.myModal.close();
            }
            else
            {
                window.close();
            }
        }
    };
    jQuery(document).ready(fnObj.pageStart);
</script>

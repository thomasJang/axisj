<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1.0, minimum-scale=1" />
	<title>AXGrid(bigData) - AXISJ</title>

    <link rel="shortcut icon" href="../../ui/axisj.ico" type="image/x-icon" />
    <link rel="icon" href="../../ui/axisj.ico" type="image/x-icon" />
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="../../ui/AXJ.png" />
    <link rel="apple-touch-icon-precomposed" href="../../ui/AXJ.png" />
    <meta property="og:image" content="/samples/_img/axisj_sns.png" />
    <meta property="og:site_name" content="Axis of Javascript - axisj.com" />
    <meta property="og:description" id="meta_description" content="Javascript UI Library based on JQuery" />

    <!-- css block -->
    <link href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="../../ui/arongi/page.css">
    <link rel="stylesheet" type="text/css" href="../../ui/arongi/AXJ.min.css">

    <script type="text/javascript" src="../../jquery/jquery.min.js"></script>
    <script type="text/javascript" src="../../dist/AXJ.min.js"></script>
    <script type="text/javascript" src="../../lib/AXGrid.js"></script>
    <script type="text/javascript" src="../page.js"></script>
    <script type="text/javascript" src="pageTab.js"></script>
    <!-- js block -->
	<script>
	/**
	 * Require Files for AXISJ UI Component...
	 * Based		: jQuery
	 * Javascript 	: AXJ.js, AXGrid.js, AXInput.js, AXSelect.js
	 * CSS			: AXJ.css, AXGrid.css, AXButton.css, AXInput.css, AXSelector.css
	 */	
	var pageID = "bigData";
	var myGrid = new AXGrid();
	var itemSum = 0;

	var fnObj = {
		pageStart: function(){

			myGrid.setConfig({
				targetID : "AXGridTarget",
				theme : "AXGrid",
                //mergeCells: true,
				//fixedColSeq:3,
				colGroup : [
					{key:"no", label:"번호", width:"70", align:"right", formatter:"money"},
					{key:"title", label:"제목", width:"*"},
					{key:"writer", label:"작성자", width:"100", align:"center"},
					{key:"regDate", label:"작성일", width:"100", align:"center"},
					{key:"price", label:"가격", width:"100", align:"right", formatter:"money"},
					{key:"amount", label:"수량", width:"80", align:"right", formatter:"money"},
					{key:"cost", label:"금액", width:"100", align:"right", formatter:function(){
						return (this.item.price.number() * this.item.amount.number()).money();
					}},
					{key:"desc", label:"비고", width:"100"}
				],
				
				body : {
                    /*
                    rows: [
                        [
                            {key:"no", rowspan:2, align:"center"},
                            {colSeq:null, colspan:3, formatter:function(){
                                var mul = (this.index * this.item.no);
                                itemSum += this.item.no;
                                return "index * no = " + mul + ", no 누적합은 = " + itemSum;
                            }, align:"center", addClass:""},
                            {key:"price", rowspan:2, valign:"bottom", align:"left"},
                            {key:"amount", rowspan:2, valign:"middle"},
                            {key:"cost", rowspan:2, valign:"middle"},
                            {key:"desc", rowspan:2, valign:"middle"}
                        ],
                        [
                            {key:"title"},
                            {key:"writer"},
                            {key:"regDate"}
                        ]
                    ],
                    */
					onclick: function(){
						toast.push(Object.toJSON({index:this.index, r:this.r, c:this.c, item:this.item}));
						//alert(this.list);
						//alert(this.page);
					}
				},
				page:{
					paging:false
				}
			});

            
            /*
            myGrid.setList({
                ajaxUrl:"loadGrid_big.php", ajaxPars:"browser="+axf.browser.name+"&version="+axf.browser.version.number(), onLoad:function(){
                    //trace(this);
                }
            });
            */
		}
	};
	jQuery(document.body).ready(function(){fnObj.pageStart()});
	</script>

	<style type="text/css">
	
	</style>
</head>
	
<body>

<div id="AXPage">

	<div id="AXPageBody" class="SampleAXSelect">
        <div id="demoPageTabTarget" class="AXdemoPageTabTarget"></div>
		<div class="AXdemoPageContent">

			<div class="title"><h1>AXGrid(bigData)</h1></div>
            <div id="AXGridTarget" style="height:400px;"></div>
            <div style="padding:10px 0px;">
                <button class="AXButton" onclick="myGrid.setFocus(0);">setFocus(0)</button>
                <button class="AXButton" onclick="myGrid.setFocus(100);">setFocus(100)</button>
                <button class="AXButton" onclick="myGrid.setFocus(200);">setFocus(200)</button>
                <button class="AXButton" onclick="myGrid.setFocus(600);">setFocus(600)</button>
            </div>

            <p>
                <div>mac chrome : 600,000건 OK</div>
                <div>mac FF : 600,000건 OK</div>
                <div>windows IE9 : 100,000건 OK</div>
                <div>windows IE7,8 : 30,000건 OK</div>
                <div>그러나.. 웹서버에서 작동하는 경우 인터넷 속도가 느려서 제대로 동작하지 않는 경우가 있습니다. WAS스크립트 응답시간도 문제가 될 수 있구요. 위의 건수 테스트는 테스트 데이터의 기준으로 로컬서버환경에서의 수치 입니다.</div>
            </p>

		</div>
	</div>

</div>

</body>
</html>		
<?
$itemCount = 300;
?>
<script>
    var list = [
    <?
    if(preg_match('/(?i)msie [1-8]/',$_SERVER['HTTP_USER_AGENT']))
    {
        for ($i = 0;$i<$itemCount; $i++){
            if($i > 0){ echo ","; }
            echo '{no:'.($i*3+1).',title:"AXGrid data line '.($i*3+1).'",writer:"Thomas",regDate:"2013-01-18",desc:"..",price:123000,amount:10}';
            echo ',{no:'.($i*3+2).',title:"AXGrid data line '.($i*3+2).'",writer:"Thomas",regDate:"2013-01-18",desc:"..",price:123000,amount:10}';
            echo ',{no:'.($i*3+3).',title:"AXGrid data line '.($i*3+3).'",writer:"Thomas",regDate:"2013-01-18",desc:"..",price:123000,amount:10}';
        }
    }
    else
    {
        for ($i = 0;$i<$itemCount; $i++){
            if($i > 0){ echo ","; }
            echo '{no:'.($i*10+1).',title:"AXGrid data line '.($i*10+1).'",writer:"Thomas",regDate:"2013-01-18",desc:"..",price:123000,amount:10}';
            echo ',{no:'.($i*10+2).',title:"AXGrid data line '.($i*10+2).'",writer:"Thomas",regDate:"2013-01-18",desc:"..",price:123000,amount:10}';
            echo ',{no:'.($i*10+3).',title:"AXGrid data line '.($i*10+3).'",writer:"Thomas",regDate:"2013-01-18",desc:"..",price:123000,amount:10}';
            echo ',{no:'.($i*10+4).',title:"AXGrid data line '.($i*10+4).'",writer:"Thomas",regDate:"2013-01-18",desc:"..",price:123000,amount:10}';
            echo ',{no:'.($i*10+5).',title:"AXGrid data line '.($i*10+5).'",writer:"Thomas",regDate:"2013-01-18",desc:"..",price:123000,amount:10}';
            echo ',{no:'.($i*10+6).',title:"AXGrid data line '.($i*10+6).'",writer:"Thomas",regDate:"2013-01-18",desc:"..",price:123000,amount:10}';
            echo ',{no:'.($i*10+7).',title:"AXGrid data line '.($i*10+7).'",writer:"Thomas",regDate:"2013-01-18",desc:"..",price:123000,amount:10}';
            echo ',{no:'.($i*10+8).',title:"AXGrid data line '.($i*10+8).'",writer:"Thomas",regDate:"2013-01-18",desc:"..",price:123000,amount:10}';
            echo ',{no:'.($i*10+9).',title:"AXGrid data line '.($i*10+9).'",writer:"Thomas",regDate:"2013-01-18",desc:"..",price:123000,amount:10}';
            echo ',{no:'.($i*10+10).',title:"AXGrid data line '.($i*10+10).'",writer:"Thomas",regDate:"2013-01-18",desc:"..",price:123000,amount:10}';
        }
    }
    ?>
    ];

    jQuery(document).ready(setTimeout(function(){
        myGrid.setList(list);
    }, 1000));
</script>
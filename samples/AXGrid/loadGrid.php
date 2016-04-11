<?php
$pageNo = $_POST["pageNo"];
$empty = $_POST["empty"];


echo('{result:"ok",list:[');
if ($empty != "true") {
    for ($i = 0; $i < 100; $i++) {
        if ($i > 0) {
            echo (',');
        }
        echo('{no:"'.$i.'", no2:"", title:"AXGrid data line ' . $pageNo . '/' . (($pageNo - 1) * 20 + ($i + 1)) . '",');
        echo('writer:"Thomas", regDate:"2013-01-18", desc:"myGrid.setList", price:123000, amount:10}');
	}
}
echo('],');
echo('page:{pageNo:' . $pageNo . ',pageCount:200,listCount:100},msg:""');
echo('}');

?>
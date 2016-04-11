<?php
$pageNo = $_POST["pageNo"];
$empty = $_POST["empty"];
?>
{
	list:[
<? if ($empty != "true") { ?>
    <? for ($i = 0;$i<100; $i++){ ?>
        <? if($i > 0){ echo ","; } ?>{no:<?=($pageNo-1)*100 + ($i + 1)?>, no2:<?=($pageNo-1)*100 + ($i + 1)?>, title:"AXGrid data line <?=$pageNo."/".(($pageNo-1)*20 + ($i + 1))?>", img:"images/<?=$i+1?>.jpg", writer:"Thomas", regDate:"2013-01-18", desc:"myGrid.setList", price:123000, amount:10}
    <? } ?>
<? } ?>
	],
	page:{
		pageNo:<?=$pageNo?>,
		pageCount:200,
		listCount:100
	},
	msg:""
}
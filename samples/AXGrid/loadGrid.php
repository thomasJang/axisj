<?php
$pageNo = $_POST["pageNo"];
?>
{
	result:"ok",
	list:[
<? for ($i = 1;$i<21; $i++){ ?>
		{no:<?=$pageNo.$i?>, title:"AXGrid data line <?=$pageNo."/".$i?>", img:"images/<?=$i?>.jpg", writer:"Thomas", regDate:"2013-01-18", desc:"myGrid.setList", price:123000, amount:10},
<? } ?>
	],
	page:{
		pageNo:<?=$pageNo?>,
		pageCount:200,
		listCount:20
	},
	msg:""
}
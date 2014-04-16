<?php


$pageNo = $_POST["pageNo"];




?>

{
	result:"ok",
	list:[
		<?	
		for ($i = 1; $i< 20; $i++) {
			if($i > 1) echo ",";
			echo "{no:$pageNo$i, title:'AXGrid 세번째 줄 입니다.$i', writer:'장기영$i', regDate:'2013-01-18', img:'img/$i.jpg', desc:'myGrid.setList 의 첫번째 사용법 list json 직접 지정 법', price:123000, amount:2}";
		}
		?>
	],
	page:{
		pageNo:<?=$pageNo?>,
		pageCount:100,	
		listCount:20
	},
	msg:""
}
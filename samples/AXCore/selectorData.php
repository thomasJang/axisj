<?php
$inputSelector = $_POST["inputSelector"];
?>
{
	result:"ok",
	<? if ($inputSelector == "null"){ ?>
	
	<? }else{ ?>
	options:[
		{optionValue:1, optionText:"<?=$inputSelector?> Seoul", desc:"부가설명글"},
		{optionValue:2, optionText:"대구"},
		{optionValue:3, optionText:"대전", optionDesc:"부가설명글"},
		{optionValue:4, optionText:"창원"},
		{optionValue:5, optionText:"마산"},
		{optionValue:6, optionText:"구례"},
		{optionValue:7, optionText:"제주도"},
		{optionValue:8, optionText:"전주"},
		{optionValue:4, optionText:"창원"},
		{optionValue:5, optionText:"마산"},
		{optionValue:6, optionText:"구례"},
		{optionValue:7, optionText:"제주도"},
		{optionValue:8, optionText:"전주"},
		{optionValue:9, optionText:"Gwangju"}
	],
	<? } ?>
	
	etcs:""
}
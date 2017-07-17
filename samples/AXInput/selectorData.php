<?php

echo('{');
echo('result:"ok",');
echo('options:[');
echo('{optionValue:1, optionText:" Seoul", desc:"부가설명글"},');
echo('{optionValue:2, optionText:"대구"},');
echo('{optionValue:3, optionText:"대전", optionDesc:"부가설명글"},');
echo('{optionValue:4, optionText:"창원"},');
echo('{optionValue:5, optionText:"마산"},');
echo('{optionValue:6, optionText:"구례"},');
echo('{optionValue:7, optionText:"제주도"},');
echo('{optionValue:8, optionText:"전주"},');
echo('{optionValue:4, optionText:"창원"},');
echo('{optionValue:5, optionText:"마산"},');
echo('{optionValue:6, optionText:"구례"},');
echo('{optionValue:7, optionText:"제주도"},');
echo('{optionValue:8, optionText:"전주"},');
echo('{optionValue:9, optionText:"Gwangju"}');
for ($i = 0; $i < 200; $i++) {
echo(',{optionValue:' . ($i + 1) . ', optionText:"text ' . ($i + 1) . '"}');
}
echo('],');
echo('etcs:""');
echo('}');
?>
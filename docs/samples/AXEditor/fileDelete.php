<?php

// $_SERVER["DOCUMENT_ROOT"]
$file_server_path = realpath(__FILE__);
$server_path = str_replace(basename(__FILE__), "", $file_server_path);
//$upload_dir = $server_path . "files";

$upload_dir = $_SERVER["DOCUMENT_ROOT"] . $_POST["uploadedPath"];
$file	= $_POST["saveName"];


if( is_file($upload_dir . $file) )
{
    unlink($upload_dir . $file);
    echo "{result:'ok', msg:''}";
}else{
    echo "{result:'err', msg:'". urlencode("파일을 찾을 수 없습니다.". $upload_dir) ."'}";
}

?>
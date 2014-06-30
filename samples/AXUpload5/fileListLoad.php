<?php

// $_SERVER["DOCUMENT_ROOT"]
$file_server_path = realpath(__FILE__);
$server_path = str_replace(basename(__FILE__), "", $file_server_path);
$upload_dir = $server_path . "files";
//echo $upload_dir;

if (!$dh = @opendir($upload_dir)) {
    return false;
}

echo "[";
$seq = 0;
while (($file = readdir($dh)) !== false) {
    if ($file == "." || $file == "..") continue; // . 과 .. 디렉토리는 무시
    if($seq > 0) echo(",");

    echo "{";
        echo "id:'MF_AX_".$seq."',";
        echo "name:'".$file."',";
        echo "saveName:'".$file."',";
        echo "type:'".filetype($upload_dir."/".$file)."',";
        echo "fileSize:'". filesize($upload_dir."/".$file) ."',";
        echo "uploadedPath:'/samples/AXUpload5/files/',";
        echo "thumbUrl:'".urlencode("files/".$file)."',";
        if($seq == 0) echo "mainImage: true";
    echo "}";

    $seq++;
}
echo "]";

closedir($dh);

?>




<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <META http-equiv=Content-Type content="text/html; charset=utf-8">
</head>
<body>
<p>파일명 : /axcms/admin/API/fileupload/upload.asp<br />
    Line : 40<br />
    Error : -2147467259<br />
    Description : DEXTUpload Professional&nbsp;&nbsp;Cannot write the file E:\axcms.axisj.com\files\thumb\2014-06\AEA0E84FF4004BC58FCAC71D92D60AB1.jpg. Check if you have the right to write to the folder.
    <br />
</p>
</body>
</html>
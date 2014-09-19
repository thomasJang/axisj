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
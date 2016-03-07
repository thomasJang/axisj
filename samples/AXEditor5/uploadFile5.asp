<% @Language='vbscript' codepage = '65001' %>
<%
Session.CodePage  = 65001
Response.CharSet  = "UTF-8"
Response.AddHeader "Pragma","no-cache"
Response.AddHeader "cache-control", "no-staff"
Response.Expires  = -1

uploadRoot = "/samples/_file/"

'## functions ######################################################################################
function getNewFileName()
	returnValue = tenCVT(Hex(right(year(now), 2)), 2)&_
	            tenCVT(Hex(month(now)), 1)&_
	            tenCVT(Hex(day(now)), 2)&_
	            tenCVT(Hex(hour(now)), 2)&_
	            tenCVT(Hex(minute(now)), 2)&_
	            tenCVT(Hex(second(now)), 2)
	getNewFileName = returnValue
end function

function tenCVT(iNum, iLen)
	tenCVT = String(iLen-Len(iNum), "0")&iNum
end function

function enc(strings)
	if isNull(strings) or strings = "" then
		enc = ""
	else
		enc = server.urlencode(strings)
	end if
end function

function getFolderName()
	Set fFSO = CreateObject("Scripting.FileSystemObject")
	Set f = fFSO.GetFolder(Server.Mappath("/")&uploadRoot)
	Set fc = f.SubFolders
	myFolderName = fc.Count

	fName_r = uploadRoot&myFolderName&"/"
	Set p = fFSO.GetFolder(Server.Mappath("/")&fName_r)
	Set pc = p.Files
	myFileCount = pc.Count

	if myFileCount > 9999 then
		fName_r = uploadRoot&(myFolderName+1)&"/"
		fFSO.CreateFolder(Server.Mappath("/")&fName_r)
	end if
	set fFSO = Nothing

	getFolderName = fName_r
end function

Sub jpgResizeImage(myPath, myWidth, myHeight, Sharpen, savePath)
	Set Jpeg = Server.CreateObject("Persits.Jpeg")
	newWidth    = myWidth
	newHeight   = myHeight
	
	Jpeg.Open myPath
	imgWidth    = Jpeg.OriginalWidth
	imgHeight   = Jpeg.OriginalHeight
	if imgWidth > imgHeight then '너비가 더 큰 경우
	  Jpeg.height   = newHeight
	Jpeg.width    = imgWidth * newHeight / imgHeight
	imgWidth      = imgWidth * newHeight / imgHeight
	'croping
	cropLen = (imgWidth - newWidth)/2
	
	Jpeg.Crop cropLen, 0, imgWidth-cropLen, newHeight
	
	else '높이가 더 크거나 정사각형인 경우
	
	Jpeg.width    = newWidth
	Jpeg.height   = imgHeight * newWidth / imgWidth
	imgHeight     = imgHeight * newWidth / imgWidth
	'croping
	cropLen = (imgHeight - newHeight)/2
	
	'Jpeg.Crop 0, cropLen, newWidth, imgHeight-cropLen
	Jpeg.Crop 0, 0, newWidth, newHeight
	
	end if 
	' Optional: apply sharpening
	if Sharpen > 100 then
	Jpeg.Sharpen 1, Sharpen
	end if
	Jpeg.Quality = 100
	
	' Create thumbnail and save it to disk
	Jpeg.Save savePath
	
	Set Jpeg = nothing
end Sub
'## functions ######################################################################################


Server.ScriptTimeout = 18000
tempFolder = uploadRoot
folderName = getFolderName()
tempDir = Server.Mappath("/")&tempFolder
strDir = Server.Mappath("/")&folderName

Set FSO = CreateObject("Scripting.FileSystemObject")
Set Upload = Server.CreateObject("Persits.Upload")
Upload.CodePage = 65001
Upload.SetMaxSize (500*1024*1024), True
Count = Upload.Save(tempDir)

'filename change..
'the filename rule is year.month.day.hour.
'getNewFileName

For Each File in Upload.Files
	FileTitle = File.FileName
	FileExt   = File.Ext

	bExist = True
	countFileName  = 1
	TempFilename = getNewFileName & tenCVT(Hex(countFileName), 4) & FileExt

	Do While bExist ' 우선 있다고 생각함.
		If (FSO.FileExists(strDir & "\" & TempFilename)) Then    ' 같은 이름의 파일이 있을 때
			countFileName = countFileName  + 1    '파일명에 숫자를 붙인 새로운 파일 이름 생성
			TempFilename = getNewFileName & tenCVT(Hex(countFileName), 4) & FileExt
		Else    '같은 이름의 파일이 없을 때
			bExist = False
		' 파일이 존재하지 않으므로.
		End If
	Loop

	FSO.CopyFile tempDir & FileTitle, strDir & TempFilename
	FSO.DeleteFile(tempDir & FileTitle)

	thumb = ""
	if LCase(FileExt) = ".jpg" or LCase(FileExt) = ".gif" or LCase(FileExt) = ".bmp" or LCase(FileExt) = ".png" then
		thbfolderName = getFolderName()
		thb_strDir = Server.Mappath("/")&thbfolderName
		thbName = "T_"&TempFilename
		call jpgResizeImage(strDir & TempFilename, 100, 100, 1.1, thb_strDir&"/"&thbName)
		thumb = thbfolderName&thbName
	end if

	response.write "{"
		For Each Item in Upload.Form
			Response.Write Item.Name & ":'" & enc(Item.Value) &"', "
		Next
	response.write "name:'"&enc(FileTitle)&"', "
	response.write "type:'"&enc(FileExt)&"', "
	response.write "saveName:'"&enc(TempFilename)&"', "
	response.write "fileSize:'"&File.size&"', "
	response.write "uploadedPath:'"&enc(folderName)&"', "
	response.write "thumbUrl:'"&enc(thumb)&"'"
	response.write "}"

Next

set Upload = Nothing
set FSO = Nothing
%>
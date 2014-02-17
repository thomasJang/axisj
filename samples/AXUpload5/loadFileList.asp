<% @Language='vbscript' codepage = '65001' %>
<%

function enc(strings)
	if isNull(strings) or strings = "" then
		enc = ""
	else
		enc = server.urlencode(strings)
	end if
end function


Set fso = CreateObject("Scripting.FileSystemObject")
Set f = fso.GetFolder(server.mappath("/samples/_file/1/"))
'Set sf = f.SubFolders
Set fc = f.Files

response.write "{result:'ok', ds:["

seq = 0

For Each f1 in fc
	fileExt = ""
	dotPosition = InStrRev(f1.name, ".")
	if dotPosition > 0 then
		fileExt = lcase(right(f1.name, Len(f1.name)-dotPosition+1))
	end if

	if Left(f1.name, 2) <> "T_" then
		if seq > 0 then
			response.write ","
		end if
		response.write "{"
		response.write "id:'AXUpload_AX_"&seq&"',"
		response.write "name:'"&enc(f1.name)&"',"
		response.write "saveName:'"&enc(f1.name)&"',"
		response.write "type:'"&fileExt&"',"
		response.write "fileSize:'"&f1.size&"',"
		response.write "uploadedPath:'"&enc("/samples/_file/1/")&"',"
		if fileExt = ".gif" or fileExt = ".jpg" or fileExt = ".png" or fileExt = ".bmp" then
		response.write "thumbUrl:'"&enc("/samples/_file/1/T_"&f1.name)&"'"
			if seq = 0 then
				response.write ", mainImage: true"
			end if
		else
		response.write "thumbUrl:''"
		end if



		response.write "}"
		seq = seq + 1
	end if
Next

response.write "]}"


%>
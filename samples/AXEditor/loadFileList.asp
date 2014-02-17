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
		fileExt = right(f1.name, Len(f1.name)-dotPosition+1)
	end if
	
	if Left(f1.name, 2) <> "T_" then
		if seq > 0 then
			response.write ","	
		end if
		response.write "{"
		response.write "id:'modsUploaded_"&seq&"',"
		response.write "ti:'"&enc(f1.name)&"',"
		response.write "nm:'"&enc(f1.name)&"',"
		response.write "ty:'"&fileExt&"',"
		response.write "size:'"&f1.size&"',"
		response.write "path:'"&enc("/samples/_file/1/")&"',"
		response.write "thumb:'"&enc("/samples/_file/1/T_"&f1.name)&"'"
		response.write "}"
		seq = seq + 1
	end if
Next

response.write "]}"
	
'{id:file.id, ti:SD.ti, nm:SD.nm, ty:SD.ty, size:SD.size, path:SD.path, thumb:SD.thumb}


			 	

%>
<% @Language='vbscript' codepage = '65001' %>
<%
Session.CodePage  = 65001
Response.CharSet  = "UTF-8"
Response.AddHeader "Pragma","no-cache"
Response.AddHeader "cache-control", "no-staff"
Response.Expires  = -1

'call dbconOpen()

'## functions ######################################################################################
function enc(strings)
	if isNull(strings) or strings = "" then
		enc = ""
	else
		enc = server.urlencode(strings)
	end if
end function
'## functions ######################################################################################

Set FSO = CreateObject("Scripting.FileSystemObject")

for i=1 to request.form("saveName").count

	myFile = request.form("saveName")(i)
	myPath = request.form("uploadedPath")(i)
	thumb = request.form("thumbUrl")(i)
	
'	query = "select thumb from T_fileSystem where filename = '"&myFile&"'"
'	Set rs = Server.CreateObject("ADODB.RecordSet")
'	with rs
'	.open query, dbcon, adOpenStatic, adLockReadOnly, adCmdText
'	If Not .EOF then
'		thumb = rs(0)
'	else
'		thumb = ""
'	end if
'	.Close
'	End with
'	Set rs = nothing
	
'	query = "delete T_fileSystem where filename = '"&myFile&"'"
'	dbcon.execute(query)
	
	fullPath = Server.Mappath("/")&myPath&myFile
	If (FSO.FileExists(fullPath)) Then    '파일이 있을 때
		set delfile = fso.getfile(fullPath)
		delfile.delete
	else
    	
	end if
	
	fullPath = Server.Mappath("/")&thumb
	If (FSO.FileExists(fullPath)) Then    '파일이 있을 때
		set delfile = fso.getfile(fullPath)
		delfile.delete
	else
    	
	end if
	
next

Set FSO = nothing

'call dbconClose()

response.write "{result:'ok', msg:''}"
%>
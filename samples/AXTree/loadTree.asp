<%@ language="VBScript" CODEPAGE="65001" %>
<%
Session.CodePage  = 65001
Response.CharSet  = "UTF-8"
Response.AddHeader "Pragma","no-cache"
Response.AddHeader "cache-control", "no-staff"
Response.Expires  = -1

no = request.form("no")

if no = "" then
%>
{
	result:"ok",
	tree:[
		{no:1, nodeName:"LEVEL 1-1", writer:"tom", type:"0", __subTree:true},
		{no:2, nodeName:"LEVEL 1-2", writer:"tom", type:"5", __subTree:true},
		{no:3, nodeName:"LEVEL 1-3", writer:"tom", __subTree:true}
	],
	msg:""
}
<%
else
%>
{
	result:"ok",
	tree:[
		{no:<%=no%>1, nodeName:"loadedItem", writer:"tom", type:"0", __subTree:true},
		{no:<%=no%>2, nodeName:"loadedItem", writer:"tom", type:"5", __subTree:true},
		{no:<%=no%>3, nodeName:"loadedItem", writer:"tom", __subTree:false}
	],
	msg:""
}
<%
end if
%>
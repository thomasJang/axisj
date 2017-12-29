<%@ language="VBScript" CODEPAGE="65001" %>
<%
Session.CodePage  = 65001
Response.CharSet  = "UTF-8"
Response.AddHeader "Pragma","no-cache"
Response.AddHeader "cache-control", "no-staff"
Response.Expires  = -1

'requestType : AXGrid 에서 정해주는 변수로 new 인 경우 새로만들기, edit 인 경우 수정
requestType = request.form("requestType")

' ajaxPars:"param1=1&param2=2" 으로 설정된 변수
param1 = request.form("param1")
param2 = request.form("param2")

'editor > row > form 으로 정의된 컬럼
no = request.form("no")
title = request.form("title")
writer = request.form("writer")
regDate = request.form("regDate")
price = replace(request.form("price"), ",", "")
if price = "" then 
	price = 0
end if
amount = replace(request.form("amount"), ",", "")
if amount = "" then 
	amount = 0
end if
cost = replace(request.form("cost"), ",", "")
desc = request.form("desc")

%>
<% if requestType = "edit" then %>
{
	result:"ok",
	item:{
		title:"<%=title%>", writer:"<%=writer%>", regDate:"<%=regDate%>", desc:"<%=desc%>", price:<%=price%>, amount:<%=amount%>
	},
	msg:""
}
<% elseif requestType = "new" then %>
{
	result:"ok",
	item:{
		no:21, title:"<%=title%>", writer:"<%=writer%>", regDate:"<%=regDate%>", desc:"<%=desc%>", price:<%=price%>, amount:<%=amount%>
	},
	msg:""
}
<% end if %>
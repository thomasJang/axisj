<%@ language="VBScript" CODEPAGE="65001" %>
<%
Session.CodePage  = 65001
Response.CharSet  = "UTF-8"
Response.AddHeader "Pragma","no-cache"
Response.AddHeader "cache-control", "no-staff"
Response.Expires  = -1

%>
{
	result:"ok",
	list:[
		<% for i=1 to 1000 %>
		{no:<%=i%>, title:"AXGrid 첫번째 줄 입니다.", writer:"장기영", regDate:"2013-01-18", desc:"myGrid.setList 의 첫번째 사용법 list json 직접 지정 법", price:123000, amount:10},
		<% next %>
		{no:<%=i%>, title:"AXGrid 첫번째 줄 입니다.", writer:"장기영", regDate:"2013-01-18", desc:"myGrid.setList 의 첫번째 사용법 list json 직접 지정 법", price:123000, amount:10}
	],
	page:{
		pageNo:1,
		pageCount:1,	
		listCount:<%=i%>
	},
	msg:""
}
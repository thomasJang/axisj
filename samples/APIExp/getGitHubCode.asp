<%@ language="javascript" CODEPAGE="65001" %>
<%
Session.CodePage  = 65001;
Response.CharSet  = "UTF-8";
Response.AddHeader("Pragma","no-cache");
Response.AddHeader("cache-control", "no-staff");
Response.Expires  = -1;
%>
<%
var code = Request.QueryString("code");

%>
<script type="text/javascript">
opener.fnObj.gitGetCode("<%=code%>");
window.close();
</script>
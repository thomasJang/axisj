// theme 선언
var pageObj;
pageObj = {
    host: "",
    theme: "arongi"
};
pageObj.theme = AXUtil.getCookie("AXISTHEME") || pageObj.theme;
if(pageObj.theme == "null") pageObj.theme = "arongi";
jQuery("link").each(function(){
    var re = new RegExp("/ui/(.*)/","ig"); //정규식 패턴입니다.
    var str = this.href;             //검색할 문자열입니다.
    var arr = re.exec(str);
    var myTheme = RegExp.$1;
    if(myTheme){
        this.href = str.replace("/"+myTheme+"/", "/"+pageObj.theme+"/");
    }
});
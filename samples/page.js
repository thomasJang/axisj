var disqus_shortname = 'axisjcom';
var disqus_url = 'http://dev.axisj.com';
var isIndex = false;
var pageObj;
var sampleMobileMenu = new AXMobileMenu();
var sampleTree = [
    {menuID:"1", label:"Common", url:"javascript:pageObj.goLink('samples/AXCore/index.html');", cn:[
        {menuID:"101", label:"AXCore", url:"javascript:pageObj.goLink('samples/AXCore/index.html');"},
        {menuID:"102", label:"AXValidator", url:"javascript:pageObj.goLink('samples/AXValidator/index.html');"},
        {menuID:"103", label:"AXAddress", url:"javascript:pageObj.goLink('samples/AXAddress/index.html');"},
        {menuID:"104", label:"Table CSS Guide", url:"javascript:pageObj.goLink('samples/tableStyleGuide/index.html');"}
    ]},
    {menuID:"2", label:"UI-Unique", url:"javascript:pageObj.goLink('samples/AXButton/index.html');", cn:[
        {menuID:"201", url:"javascript:pageObj.goLink('samples/AXButton/index.html');", label:"AXButton"},
        {menuID:"202", url:"javascript:pageObj.goLink('samples/AXInput/index.html');", label:"AXInput"},
        {menuID:"203", url:"javascript:pageObj.goLink('samples/AXSelect/index.html');", label:"AXSelect"},
        {menuID:"204", url:"javascript:pageObj.goLink('samples/AXNotification/index.html');", label:"AXNotification"},
        {menuID:"205", url:"javascript:pageObj.goLink('samples/AXProgress/index.html');", label:"AXProgress"},
        {menuID:"206", url:"javascript:pageObj.goLink('samples/AXScroll/index.html');", label:"AXScroll"},
        {menuID:"207", url:"javascript:pageObj.goLink('samples/AXTabs/index.html');", label:"AXTabs"},
        {menuID:"207", url:"javascript:pageObj.goLink('samples/AXToolBar/index.html');", label:"AXToolBar"}
    ]},
    {menuID:"3", label:"UI-Complex", url:"javascript:pageObj.goLink('samples/AXModal/index.html');", cn:[
        {menuID:"301", url:"javascript:pageObj.goLink('samples/AXModal/index.html');", label:"AXModal"},
        {menuID:"302", url:"javascript:pageObj.goLink('samples/AXGrid/index.html');", label:"AXGrid"},
        {menuID:"303", url:"javascript:pageObj.goLink('samples/AXGridRWD/index.html');", label:"AXGrid RWD"},
        {menuID:"304", url:"javascript:pageObj.goLink('samples/AXTree/index.html');", label:"AXTree"},
        {menuID:"305", url:"javascript:pageObj.goLink('samples/AXEditor/index.html');", label:"AXEditor"},
        {menuID:"306", url:"javascript:pageObj.goLink('samples/AXSearch/index.html');", label:"AXSearch"},
        {menuID:"307", url:"javascript:pageObj.goLink('samples/AXUpload5/index.html');", label:"AXUpload5"},
        {menuID:"307", url:"javascript:pageObj.goLink('samples/AXSlideViewer/index.html');", label:"AXSlideViewer"}
    ]},
    {menuID:"4", label:"Lab", url:"javascript:pageObj.goLink('samples/AXTopDownMenu/index.html');", cn:[
        {menuID:"401", url:"javascript:pageObj.goLink('samples/AXTopDownMenu/index.html');", label:"AXTopDownMenu"},
        {menuID:"402", url:"javascript:pageObj.goLink('samples/AXExcelConvert/index.html');", label:"AXExcelConvert"},
        {menuID:"403", url:"javascript:pageObj.goLink('samples/AXModelControl/index.html');", label:"AXModelControl"},
        {menuID:"404", url:"javascript:pageObj.goLink('samples/AXUserSelect/index.html');", label:"AXUserSelect"},
        //{menuID:"405", url:"javascript:pageObj.goLink('samples/AXScheduleCalendar/index.html');", label:"AXScheduleCalendar(alpha)"},
        //{menuID:"406", url:"javascript:pageObj.goLink('samples/AXFrameSet/index.html');", label:"AXFrameSet(alpha)"},
        {menuID:"407", url:"javascript:pageObj.goLink('samples/mobile/index.html');", label:"for Mobile"},
        {menuID:"404", url:"javascript:pageObj.goLink('samples/AXWaterfall/index.html');", label:"AXWaterfall"},
	    {menuID:"409", url:"javascript:pageObj.goLink('samples/AXSplit/index.html');", label:"AXSplit"},
	    {menuID:"410", url:"javascript:pageObj.goLink('samples/AXDivSlider/index.html');", label:"AXDivSlider"}
        //{menuID:"408", url:"javascript:pageObj.goLink('samples/Angularjs/index.html');", label:"for AngularJS"}
    ]}
];
var sampleTreeMenu = new AXTopDownMenu();

(function(){
    pageObj = {
        host: "",
        theme: "arongi",
        themeData: {
            arongi: {
                ver: "1.0",
                developer: "Jowrney Kim",
                mail: "jowrney@axisj.com",
                support: ["DX", "MX"]
            },
            bulldog: {
                ver: "1.0",
                developer: "Dongyoung Kim",
                mail: "young@axisj.com",
                support: ["DX"]
            },
            flybasket: {
                ver: "1.0",
                developer: "Jowrney Kim",
                mail: "jowrney@axisj.com",
                support: ["DX"]
            },
            kakao: {
                ver: "1.0",
                developer: "Jowrney Kim",
                mail: "jowrney@axisj.com",
                support: ["DX"]
            },
            cocker: {
                ver: "0.1 Beta",
                developer: "Jowrney Kim",
                mail: "jowrney@axisj.com",
                support: ["DX"]
            }
        },
        goLink: function(url){
            if(!isIndex){
                url = "../../" + url;
            }
            location.href = url;
        },
        incHeader:function(){

            if(!isIndex) {
                pageObj.host = "../../";
            }else{

            }

            var ho = [];
            // AXPageHead
            ho.push('<header id="AXPageHead">');
                ho.push('<div class="ax-wrap">');
                    ho.push('<div class="ax-layer-1">');
                        ho.push('<div class="ax-col-12">');
                            ho.push('<div class="ax-unit">');
                                ho.push('<nav class="navMenu ">');
                                    ho.push('<h3><a href="'+pageObj.host+'index.html"><img src="'+pageObj.host+'ui/AXJ-logo.png" style="width:110px; height:40px;" /></a></h3>');
                                    ho.push('<div id="sampleMenuBox"></div>');
                                ho.push('</nav>');
                            ho.push('</div>');
                        ho.push('</div>');
                        ho.push('<div class="ax-clear"></div>');
                    ho.push('</div>');
                    ho.push('<div class="ax-layer-2">');
                        ho.push('<div class="ax-col-12">');
                            ho.push('<div class="ax-unit">');
                                ho.push('<nav class="themeInfo"></nav>');
                            ho.push('</div>');
                        ho.push('</div>');
                        ho.push('<div class="ax-clear"></div>');
                    ho.push('</div>');
                ho.push('</div>');
                ho.push('<button class="AXButton" id="devCentermobileMenu">Menu</button>');
            ho.push('</header>');
            // AXPageHead

            jQuery("#AXPageBody").before(ho.join(""));

            var to = [], tdata = pageObj.themeData[pageObj.theme];
            to.push("<div class='logo'><img src='"+pageObj.host+"ui/"+pageObj.theme+"/images/dx-theme-logo.png' /></div>");
            to.push("<h1>");
            to.push("<span>"+pageObj.theme.substring(0,1).toUpperCase() + pageObj.theme.substring(1)+"</span> ver"+tdata.ver+"&nbsp;&nbsp;");
            for(var b=0; b<tdata.support.length; b++){
                to.push("<span class='support'>"+tdata.support[b]+"</span>");
            }
            to.push("</h1>");
            to.push("<h2>Theme Developer. <a href='mailto:"+tdata.mail+"'>"+tdata.developer+"</a></h2>");
            to.push("<a href='http://www.axisj.com' target='_blank' class='facebook'>Website</a>");
            to.push("<a href='https://github.com/axisj-com/axisj' target='_blank' class='github'>Github</a>");
            to.push("<a href='http://jdoc.axisj.com' target='_blank' class='api'>API</a>");
            to.push("<div class='ax-clear'></div>");
            jQuery(".themeInfo").append(to.join(""));

            sampleTreeMenu.setConfig({
                targetID:"sampleMenuBox",
                parentMenu:{
                    className:"parentMenu"
                },
                childMenu:{
                    className:"childMenu",
                    hasChildClassName:"expand", // script 방식에서만 지원 됩니다.
                    align:"left",
                    valign:"top",
                    margin:{top:0, left:0},
                    arrowClassName:"",
                    arrowMargin:{bottom:1, left:20}
                },
                childsMenu:{
                    className:"childsMenu",
                    hasChildClassName:"expand",
                    align:"left",
                    valign:"bottom",
                    margin:{bottom:-4, left:0},
                    arrowClassName:"",
                    arrowMargin:{bottom:13, left:1}
                }
            });
            sampleTreeMenu.setTree(sampleTree);
            //sampleTreeMenu.setHighLightMenu([1,1]);

            sampleMobileMenu.setConfig({
                reserveKeys:{
                    primaryKey:"menuID",
                    labelKey:"label",
                    urlKey:"url",
                    targetKey:"target",
                    addClassKey:"ac",
                    subMenuKey:"cn"
                },
                menu:sampleTree,
                onclick: function(){ // 메뉴 클릭 이벤트
                    sampleMobileMenu.close();
                    eval(this.url.replace("javascript:", ""));
                }
            });

            axdom("#devCentermobileMenu").bind("click", function(){
                sampleMobileMenu.open();
            })


        },
        incFooter:function(){
            var fo = [];

            fo.push('<div class="disqus_target">');
            fo.push('<div style="padding:20px 20px 50px 20px;background:#fff;">');
            fo.push('<div id="disqus_thread"></div>');
            fo.push('</div>');
            fo.push('</div>');

            fo.push('<div id="disqusTarget"></div>');

            fo.push('<footer id="AXPageFoot">');
                fo.push('<div class="ax-wrap">');
                    fo.push('<div class="ax-layer-1">');
                        fo.push('<div class="ax-col-12">');
                            fo.push('<div class="ax-unit">');
                                fo.push('<nav class="navTheme">');
                                    fo.push("<ul>");
                                        axf.each(pageObj.themeData, function(k, v){
                                            fo.push("<li><a href='javascript:pageObj.changeTheme(\""+ k +"\");' class='themeSelector' id='"+ k +"'>"+ k +"</a></li>");
                                        });
                                    fo.push("</ul>");
                                    fo.push("<div class='ax-clear'></div>");
                                fo.push('</nav>');
                            fo.push('</div>');
                        fo.push('</div>');


                        fo.push('<div style="position:absolute;top: -30px;right: 7px;">');

                            fo.push('<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" style="display:inline;margin:0px;padding:0px;">');
                            fo.push('<input type="hidden" name="cmd" value="_s-xclick">');
                            fo.push('<input type="hidden" name="hosted_button_id" value="TCMG6LS7X2VFE">');
                            fo.push('<button class="AXButtonSmall">Donate</button>');
                            fo.push('</form>');

                        fo.push('</div>');

                        fo.push('<div class="ax-clear"></div>');
                    fo.push('</div>');
                fo.push('</div>');
            fo.push('</footer>');
            jQuery("#AXPageBody").after(fo.join(""));


	        $("#disqus_thread").html('<a href="#axexec" onclick="pageObj.disqus();" style="font-size:13px;font-weight:bold;text-decoration: underline;">Disqus (댓글남기기)</a>');

	        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	        ga('create', 'UA-38119279-3', 'axisj.com');
	        ga('send', 'pageview');
        },
	    disqus: function(){
		    $("#disqus_thread").empty();
		    $("#disqusTarget").empty();

		    var fullUrls = document.location.toString();
		    fullUrls = fullUrls.replace(disqus_url, "").replace("http://axisj", "").split("#");

		    var fullUrl = fullUrls[0];
		    if(fullUrl == "" || fullUrl == "/") fullUrl = "/index.html";
		    disqus_url = disqus_url + fullUrl;

		    var dsq = document.createElement('script');
		    dsq.type = 'text/javascript';
		    dsq.async = true;
		    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
		    AXgetId("disqusTarget").appendChild(dsq);
	    },
        changeTheme: function(newTheme){
            if(!newTheme || newTheme == "null") return;

            //var newTheme = jQuery("#myThemeSelector").val();
            AXUtil.setCookie("AXISTHEME", newTheme);

            window.location.reload();
            return;

            pageObj.theme = newTheme;
            toast.push(newTheme+"가 적용 되었습니다.");

        },
        initTheme:function(){

            var gt = AXUtil.getCookie("AXISTHEME");
            if(gt){
                pageObj.changeTheme(gt);
                //pageObj.changeThemeButton(gt);
            }
        },
        changeThemeButton:function(tm){
            $(".themeSelector").removeClass("on");
            $("#"+tm).addClass("on");
        }
    };

    jQuery(document).ready(function(){
        pageObj.incHeader();
        pageObj.incFooter();
        $("#"+pageObj.theme).addClass("on");

        if (window["prettyPrint"]) {
            $("#pretty").text($("#jscode").text());
            window["prettyPrint"]();
        }

/*
        trace(" Fullstack open source javascript UI. framework ");
        trace(" axis of javascript - axisj.com, April 2014 ");
        trace(" tom@axisj.com & jowrney@axisj.com and team axisj ");
        trace(" ");
        trace(" http://www.axisj.com ");
        trace(" http://dev.axisj.com ");
        trace(" http://jdoc.axisj.com ");
        trace(" https://github.com/axisj-com ");
        trace(" ");
*/
    });


    // theme 선언
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


})();


// 구글 애널
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-56252826-1', 'auto');
ga('send', 'pageview');
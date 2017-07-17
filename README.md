## [주의!] 이 프로젝트는 더 이상 추가개발/개선작업을 진행하지 않습니다. 앞으로는 AX5UI를 이용해주세요.
> This Project will not proceed further development. Please use AX5UI in the future.

[![AX5UI](https://avatars1.githubusercontent.com/u/16002119?v=3&s=100)](http://ax5.io/)

- https://github.com/ax5ui
- https://github.com/ax5ui/ax5ui-kernel
- https://github.com/ax5ui/ax5core
- https://github.com/ax5ui/ax5ui-grid
- https://github.com/ax5ui/ax5ui-uploader
- 등등등 ...

현재까지 배포된 버전에 대한 이용에는 문제가 없고, 각종 링크 CDN등은 현재와 동일하게 유지 됩니다.   
단, 유지보수/하자보수 계약이 된 경우를 위한 버그 픽스는 진행됩니다.

---

# AXISJ
###Full-Stack Open-source Javascript UI Framework

>AXISJ means "Axis of Javascript" and also represents "Application eXeprience:AX" as well.

>AXISJ 는 “자바스크립트의 축(Axis of Javascript)”라는 뜻과 더불어 
애플리케이션 개발경험(Application eXperience: AX)을 구현한다는 의미도 담고 있습니다.

It can be used easily and lightly, by excluding the load which a developer does not intend or which is heavier than application.
In terms of the development method, the collision issue between components has been minimised with the use of Class-based coding rules which manage each UI tool in Class.

### link
- Demonstration (http://dev.axisj.com)
- Documentation (http://jdoc.axisj.com)
- Guide (http://axisj.github.io/axisj-about/docs/)
- Website (https://www.axisj.com)
- Facebook (http://facebook.com/axisj)
- Google+ (http://google.com/+axisj)

### Related Projects
- AXU (https://www.axisj.com/axu), (http://axu.axisj.com), (https://github.com/axisj-com/axu)
- AXU4J (https://github.com/axisj-com/axu4j)
- AXIcon (https://www.axisj.com/en/axicon/), (http://axicon.axisj.com), (https://github.com/axisj-com/axicon)

## Download
**By Bower.io**
```
// bower install
$ bower install axisj
```
**Direct Download**
[releases] (https://github.com/axisj-com/axisj/releases)


## Install
**CDN**
```html
<link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/axisj/axisj/master/ui/arongi/AXJ.min.css">
<script type="text/javascript" src="https://cdn.jsdelivr.net/jquery/1.12.3/jquery.min.js"></script>
<script type="text/javascript" src="https://cdn.rawgit.com/axisj/axisj/master/dist/AXJ.min.js"></script>
```

**CDN Theme**
```
<link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/axisj/axisj/master/ui/arongi/AXJ.min.css">
<link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/axisj/axisj/master/ui/bulldog/AXJ.min.css">
<link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/axisj/axisj/master/ui/cocker/AXJ.min.css">
<link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/axisj/axisj/master/ui/flybasket/AXJ.min.css">
<link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/axisj/axisj/master/ui/kakao/AXJ.min.css">
```


Installing AXISJ is simple and easy.
Copy and paste the downloaded file of AXISJ in an appropriate location of your project. (In this sample, the file was put in the project root / 'axisj' folder.)
Type in codes to load CSS and JS files in HTML codes of the pages where you want to use AXISJ.
Then, if needed, load CSS and JS files of some components of UI. This sample shows the codes to enable AXGrid component.
```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <!-- 공통요소 -->
    <link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/axisj/axisj/master/ui/arongi/AXJ.min.css">
    <script type="text/javascript" src="https://cdn.jsdelivr.net/jquery/1.12.3/jquery.min.js"></script>
    <script type="text/javascript" src="https://cdn.rawgit.com/axisj/axisj/master/dist/AXJ.min.js"></script>
</head>
```
Define the id of HTML element where you want to put the UI component. The id will be used in UI configuration for later.
'id' is a unique element and there should not be two id elements with the same id name in one HTML document.
```html
</head>
<body>
    <h1>AXGrid RWD</h1>
    <div id="AXGridTarget"></div>
</body>
</html>
```
Define UI configuration and data. Each component of UI has different configuration values.
```html
</body>
</html>
<script type="text/javascript">
var myGrid = new AXGrid(); // instance
var fnObj = {
    pageStart: function(){

        myGrid.setConfig({
            targetID : "AXGridTarget",
            theme : "AXGrid",
            autoChangeGridView: { // autoChangeGridView by browser width
                mobile:[0,600], grid:[600]
            },
            colGroup : [
                {key:"no", label:"No.", width:"40", align:"center", formatter:"money"},
                {key:"title", label:"Title", width:"200"},
                {key:"writer", label:"Writer", width:"100", align:"center"},
                {key:"date", label:"Date.", width:"100", align:"center"},
                {key:"desc", label:"Etc.", width:"*"}
            ],
            body : {
                onclick: function(){
                    toast.push(Object.toJSON({index:this.index, item:this.item}));
                }
            },
            page:{
                paging:false
            }
        });

        var list = [
            {
                no:1, title:"AXGrid 첫번째 줄 입니다.AXGrid 첫번째 줄 입니다.", writer:"장기영", img:"img/1.jpg", desc:"많은 글을 담고 있는 내용 입니다. 자연스럽게 줄이 넘어가고 표현되는 것이 관건 입니다.", category:"액시스제이", date:"2014-04-05"
            },
            {
                no:2, title:"AXGrid 두번째 줄 입니다.AXGrid 첫번째 줄 입니다.", writer:"장기영", img:"img/2.jpg", desc:"많은 글을 담고 있는 내용 입니다.", category:"액시스제이", date:"2014-04-07"
            },
            {
                no:3, title:"AXGrid 세번째 줄 입니다.AXGrid 첫번째 줄 입니다.", writer:"장기영", img:"img/3.jpg", desc:"많은 글을 담고 있는 내용 입니다. 자연스럽게...", category:"액시스제이", date:"2014-04-09"
            }
        ];

        //setList
        myGrid.setList(list);
        /* ajax way
        myGrid.setList({
            ajaxUrl:"...",
            ajaxPars:"",
            onLoad:function(){},
            onError:function(){}
        });
        */
    }
};
jQuery(document).ready(fnObj.pageStart.delay(0.1));
</script>
```
## Q&A
https://github.com/axisj-com/axisj/issues

## UI Preview
<img src="http://old2014.axisj.com/resource/images/ax-demo.png" alt="axisjui" />



[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/axisj-com/axisj/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

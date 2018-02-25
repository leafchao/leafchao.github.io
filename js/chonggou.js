 var timer;
        var nowTop;
        function bannerUp700(){
//            window.scrollTo(0,600);
            if (window.scrollY==606){
                clearInterval(timer);
            }else {
                window.scrollTo(0,window.scrollY+2)
                nowTop=window.scrollY;
            }
        }
        function bannerUp700D(){
            nowTop=window.scrollY;
            timer=setInterval(bannerUp700,2)
        }
        //移入返回顶部
        function yiRuDing(obj){
            var imgW=obj.getElementsByClassName("divUpW")[0];
            var imgB=obj.getElementsByClassName("divUpB")[0];
            imgW.style.opacity=0;
            imgB.style.opacity=1;
            obj.style.cursor="pointer";
        }
        function yiChuDing(obj){
            var imgW=obj.getElementsByClassName("divUpW")[0];
            var imgB=obj.getElementsByClassName("divUpB")[0];
            imgW.style.opacity=1;
            imgB.style.opacity=0;
        }
        //移入桥图片
        function yiRuQiao(obj){
            var imgRight=obj.getElementsByTagName("img")[0];
            var centralRow3MC=obj.getElementsByClassName("centralRow3MC")[0];
            imgRight.style.left="16px"
            imgRight.style.transition="all .2s linear";
            centralRow3MC.style.opacity=0.3;
            centralRow3MC.style.transition="all .2s linear";
        }
        function yiChuQiao(obj){
            var imgRight=obj.getElementsByTagName("img")[0];
            var centralRow3MC=obj.getElementsByClassName("centralRow3MC")[0];
            imgRight.style.left="0px"
            imgRight.style.transition="all .2s linear";
            centralRow3MC.style.opacity=0;
            centralRow3MC.style.transition="all .2s linear";
        }
        //移入下面部分文字
        function yiRuWen(obj){
            var wenOver=obj.getElementsByTagName("div");
            wenOver[1].style.transform="rotate(90deg)";
            wenOver[1].style.transition="all .2s linear";
            wenOver[0].style.transform="rotate(90deg)";
            wenOver[0].style.transition="all .2s linear";
            obj.style.cursor="pointer";
        }
        function yiChuWen(obj){
            var wenOut=obj.getElementsByTagName("div");
            wenOut[1].style.transform="rotate(0deg)";
            wenOut[1].style.transition="all .2s linear";
            wenOut[0].style.transform="rotate(0deg)";
            wenOut[0].style.transition="all .2s linear";
        }
        //移入下面部分图片
        function yiRuImg(obj){
//            alert(obj)
            var imgOver=obj.getElementsByTagName("img")[0];
            var divOver=obj.getElementsByTagName("div");
            imgOver.style.transform="scale(1.2,1.2)";
            imgOver.style.transition="all .2s linear";
            divOver[0].style.bottom="0px";
            divOver[0].style.transition="all .1s linear";
            divOver[1].style.transform="rotate(180deg)";
            divOver[1].style.transition="all .2s linear";
            divOver[2].style.transform="rotate(-90deg)";
            divOver[2].style.transition="all .2s linear";
            obj.style.cursor="pointer";
        }
        function yiChuImg(obj){
            var imgOut=obj.getElementsByTagName("img")[0];
            var divOut=obj.getElementsByTagName("div");
            imgOut.style.transform="scale(1,1)";
            imgOut.style.transition="all .2s linear";
            divOut[0].style.bottom="-62px";
            divOut[0].style.transition="all .1s linear";
            divOut[1].style.transform="rotate(0deg)";
            divOut[1].style.transition="all .2s linear";
            divOut[2].style.transform="rotate(0deg)";
            divOut[2].style.transition="all .2s linear";
        }

        //banner切换
        var bannerImg0=document.getElementById("bannerImg0");
        var bannerImg1=document.getElementById("bannerImg1");
        var bannerImg2=document.getElementById("bannerImg2");
        var bannerImgArr=new Array("images/DOCSLEEP.jpg","images/home_neaq.jpg","images/home_oribe1.jpg");
        var textPArr=new Array("CALVIN KLEIN","NEW ENGLAND AQUARIUM","ORIBE");
        var textH1Arr=new Array("A FRAGRANCE<br>FOR THE WEO<br>OF US.","A WORLD<br>BELOW THE<br>SURFACE.","STYLE.<br>LUXURY.<br>BEAUTY.");
        var contSub=document.getElementById("contSub");
        var liList=contSub.getElementsByTagName("li");
        var banP=contSub.getElementsByTagName("p");
        var banH1=contSub.getElementsByTagName("h1");
        var preNo=0;   //上一次
        var notChoose=0;
        var currentNo=0;   //下一次
        var myLeft;
        var myRight;
        var myCenter;
        var myCount=0;
        chuShi();


        //初始化banner
        function chuShi(){
            bannerImg0.innerHTML="<img src='"+bannerImgArr[0]+"'/>";
            bannerImg1.innerHTML="<img src='"+bannerImgArr[1]+"'/>";
            bannerImg2.innerHTML="<img src='"+bannerImgArr[2]+"'/>";
            bannerImg0.style.left="0px";
            bannerImg1.style.left="1349px";
            bannerImg2.style.left="1349px";
            liList[0].style.border="2px solid #ffffff";
            liList[0].style.background="transparent";
            banP[0].innerHTML=textPArr[0];
            banH1[0].innerHTML=textH1Arr[0];
            setTimeout(function(){
                contSub.style.bottom="30px";
            },50)
        }

        function changeImage(pos,obj){
            obj.style.background="transparent";
            obj.style.border="2px solid #ffffff";
//            var parentSub=obj.parentNode.parentNode;
//            var changebanP=parentSub.getElementsByTagName("li")
            for(var i=0;i<liList.length;i++){
                if(obj!=liList[i]){
                    liList[i].removeAttribute("style");
//                    alert(i)
                }else{
                    banP[0].innerHTML=textPArr[i];
                    banH1[0].innerHTML=textH1Arr[i];
                }
            }
            currentNo=pos;

            if(preNo==0&&currentNo==1){
                notChoose=2;
            }else if(preNo==0&&currentNo==2){
                notChoose=1;
            }else if(preNo==1&&currentNo==2){
                notChoose=0;
            }

            myLeft=document.getElementById("bannerImg"+preNo);
            myCenter=document.getElementById("bannerImg"+notChoose);
            myRight=document.getElementById("bannerImg"+currentNo);

            myCenter.style.zIndex=20;

            if((preNo==0&&currentNo==0)||(preNo==1&&currentNo==1)||(preNo==2&&currentNo==2)){
                myLeft.style.left="";
                myRight.style.left="";
                myLeft.style.transition="";
                myRight.style.transition="";
            }else{
                myLeft.style.left="-1349px";
                myRight.style.left="0px";
                myLeft.style.transition="all 1.2s linear";
                myRight.style.transition="all 1s linear";

                myLeft.style.zIndex=90;
                myRight.style.zIndex=50;

                contSub.style.bottom="-300px";

                setTimeout(function(){
                    myLeft.style.transition="";
                    myLeft.style.left="1349px";
                    myLeft.style.zIndex=50;
                    myRight.style.zIndex=90;
                    contSub.style.bottom="30px";
                },1200)
            }
            preNo=currentNo;
        }

        var central=document.getElementById("central");
        var menuColorL=document.getElementsByClassName("menuColor");
        var divD1=document.getElementsByClassName("centralRow2Block1")[0];
        var divD2=document.getElementsByClassName("centralRow2Block2")[0];
        var divD3=document.getElementsByClassName("centralRow2Block3")[0];
        var divD4=document.getElementsByClassName("centralRow2Block4")[0];
        var divD5=document.getElementsByClassName("centralRow2Block5")[0];
        var divD6=document.getElementsByClassName("centralRow2Block6")[0];
        var divD7=document.getElementsByClassName("centralRow2Block7")[0];
        var divD8=document.getElementsByClassName("centralRow2Block8")[0];
        var divD9=document.getElementsByClassName("centralRow2Block9")[0];
        //页面载入调用函数
        window.onload=function(){
            loadHtml();
        }
        function loadHtml(){
            var loading=document.getElementById("loading");
            if(loading.style.backgroundColor==""){
                loading.style.backgroundColor="rgb(203, 203, 203)"
            }
            function rotateX180(){
                if(loading.style.backgroundColor=="rgb(203, 203, 203)") {
                    loading.style.transform = "rotateX(180deg)";
                    loading.style.backgroundColor = "rgb(85, 246, 214)";
                    loading.style.transition = "all 1s linear";
                }
            }
            setTimeout(rotateX180,0);
            function rotateY180(){
                if(loading.style.backgroundColor == "rgb(85, 246, 214)"){
                    loading.style.transform = "rotateZ(180deg)";
                    loading.style.backgroundColor = "rgb(203, 203, 203)";
                    loading.style.transition = "all 1s linear";
                }
            }
            setTimeout(rotateY180,1100)
            function rotateX360(){
                if(loading.style.backgroundColor=="rgb(203, 203, 203)") {
                    loading.style.transform = "rotateY(180deg)";
                    loading.style.backgroundColor = "rgb(85, 246, 214)";
                    loading.style.transition = "all 1s linear";
                }
            }
            setTimeout(rotateX360,2200);
            function rotateY360(){
                if(loading.style.backgroundColor == "rgb(85, 246, 214)"){
                    loading.style.transform = "rotateY(360deg)";
                    loading.style.backgroundColor = "rgb(203, 203, 203)";
                }
            }
            setTimeout(rotateY360,3300);
            //显示主界面
            function showCentral(){
                var central=document.getElementById("central");
                central.style.cssText="opacity:1;height:2741px";
                loading.style.opacity="0";
                menuColorL[0].style.opacity=1;
            }
            setTimeout(showCentral,4500)
            divD1.style.marginTop="100px";
            divD2.style.marginTop="100px";
            divD3.style.marginTop="100px";
            divD4.style.marginTop="100px";
            divD5.style.marginTop="100px";
            divD6.style.marginTop="100px";
            divD7.style.marginTop="100px";
            divD8.style.marginTop="100px";
            divD9.style.marginTop="100px";
        }
        //竖滚动条变化调用函数
        window.onscroll=function(){
            menuColorF()
        }
        //menuColor
        var bannerMenuLefeList=document.getElementsByClassName("bannerMenuLeft");
        var bannerMenuRightList=document.getElementsByClassName("bannerMenuRight");
        var divMList=bannerMenuRightList[0].getElementsByTagName("div");
        var h2MList=bannerMenuLefeList[0].getElementsByTagName("h2");
        function menuColorF(){

            var SCT=document.body.scrollTop;
//            alert(SCT)
            if(SCT>=45){
                if(menuColorL[0].style.height==""){
                    menuColorL[0].style.height="4px";
                }
                menuColorL[0].style.height="60px";
                menuColorL[0].style.backgroundColor="#fbfcfc";
                menuColorL[0].style.opacity=0.8;
                menuColorL[0].style.transition="all .2s linear";
                divMList[0].style.opacity=0;
                divMList[1].style.opacity=0;
                divMList[2].style.opacity=0;
                divMList[3].style.opacity=1;
                divMList[4].style.opacity=1;
                divMList[5].style.opacity=1;
                h2MList[0].style.color="black";

            }else{
                menuColorL[0].style.height="4px";
                menuColorL[0].style.backgroundColor="#52ebcd";
                menuColorL[0].style.opacity=1;
                menuColorL[0].style.transition="all .2s linear";
                divMList[0].style.opacity=1;
                divMList[1].style.opacity=1;
                divMList[2].style.opacity=1;
                divMList[3].style.opacity=0;
                divMList[4].style.opacity=0;
                divMList[5].style.opacity=0;
                h2MList[0].style.color="white";
            }
//            if(SCT>=)360   700-6  780-4.5.7    1000-9  1170-8
            if(SCT>=360){
                divD1.style.marginTop="0px";
                divD1.style.transition="all .5s linear";
                divD2.style.marginTop="0px";
                divD2.style.transition="all .5s linear";
                divD3.style.marginTop="0px";
                divD3.style.transition="all .5s linear";
            }
            if(SCT>=700){
                divD6.style.marginTop="0px";
                divD6.style.transition="all .5s linear";
            }
            if(SCT>=780){
                divD5.style.marginTop="0px";
                divD5.style.transition="all .5s linear";
                divD7.style.marginTop="0px";
                divD7.style.transition="all .5s linear";
            }
            if(SCT>=800){
                divD4.style.marginTop="0px";
                divD4.style.transition="all .5s linear";
            }
            if(SCT>=1000){
                divD9.style.marginTop="0px";
                divD9.style.transition="all .5s linear";
            }
            if(SCT>=1190){
                divD8.style.marginTop="0px";
                divD8.style.transition="all .5s linear";
            }
        }
        //移入菜单按钮
        function yiruMenu(){
            divMList[0].style.top="6px";
            divMList[2].style.top="28px";
            divMList[3].style.top="6px";
            divMList[5].style.top="28px";
        }
        //移入按钮
        function yichuMenu(){
            divMList[0].style.top="10px";
            divMList[2].style.top="22px";
            divMList[3].style.top="10px";
            divMList[5].style.top="22px";
        }
        //点击按钮
        var count=0;
        var menuYe=document.getElementById("menuYe");
        function clickMenu(){
            divMList[0].style.transition = "all .2s linear";
            divMList[1].style.transition = "all .2s linear";
            divMList[2].style.transition = "all .2s linear";
            divMList[3].style.transition = "all .2s linear";
            divMList[4].style.transition = "all .2s linear";
            divMList[5].style.transition = "all .2s linear";
            if(count%2==0){
                divMList[0].style.transform="rotate(45deg)";
                divMList[2].style.transform="rotate(-45deg)";
                divMList[4].style.opacity=0;
                divMList[0].style.top="16px";
                divMList[2].style.top="16px";

                divMList[3].style.transform="rotate(45deg)";
                divMList[5].style.transform="rotate(-45deg)";
                divMList[1].style.opacity=0;
                divMList[3].style.top="16px";
                divMList[5].style.top="16px";
                menuColorL[0].style.opacity=0;
                h2MList[0].style.color="white";
                bannerMenuRightList[0].removeEventListener("mouseover",yiruMenu,false);
                bannerMenuRightList[0].removeEventListener("mouseout",yichuMenu,false);
                menuYe.style.left="0px";
                menuYe.style.transition="all .5s linear";
                central.style.height="642px";

                divMList[3].style.opacity=0;
                divMList[5].style.opacity=0;
                divMList[0].style.opacity=1;
                divMList[2].style.opacity=1;
            }else{
                divMList[0].style.transform="rotate(0deg)";
                divMList[2].style.transform="rotate(0deg)";
                divMList[0].style.top="10px";
                divMList[2].style.top="22px";

                divMList[3].style.transform="rotate(0deg)";
                divMList[5].style.transform="rotate(0deg)";
                divMList[3].style.top="10px";
                divMList[5].style.top="22px";
                menuColorL[0].style.opacity=0.5;
                bannerMenuRightList[0].addEventListener("mouseover",yiruMenu,false);
                bannerMenuRightList[0].addEventListener("mouseout",yichuMenu,false);
                var SCT1=document.body.scrollTop;
                if(SCT1>=45){
                    divMList[3].style.opacity=1;
                    divMList[4].style.opacity=1;
                    divMList[5].style.opacity=1;
                    h2MList[0].style.color="black";
                }else{
                    divMList[1].style.opacity=1;
                }
                menuYe.style.left="-1450px";
                menuYe.style.transition="all .5s linear";
                central.style.height="2741px";
            }
            count++;
        }
        bannerMenuRightList[0].addEventListener("mouseover",yiruMenu,false);
        bannerMenuRightList[0].addEventListener("mouseout",yichuMenu,false);
        bannerMenuRightList[0].addEventListener("click",clickMenu,false);
//var n = 10;
//var espeed = 10;
//var s = "";
//var i = 1;
//for (i = 1; i <= n * n; i++) {
//    s = s + '<div id="div' + i + '" style="position:absolute; left:0px; top:0px; background-color:#000000; ' +
//        'opacity:0.5;border:' + "0.1px" + ' ' + "solid" + ' ' + "#000000" + ' "></div>';
//
//}
//document.write(s);
//var counter = 1;
//var temp = new Array();
//var oddwidth = parseInt(document.body.clientWidth / n);
//var oddheight = parseInt(document.body.clientHeight / n);
//for (i = 1; i <= n * n; i++) {
//    temp[i] = eval("document.all.div" + i + ".style");
//    temp[i].width = oddwidth;
//    temp[i].height = oddheight;
//}
//
//for (i = 1; i <= n; i++) {
//    for (var j = 1; j < n; j++) {
//        temp[i * j].left = (j - 1) * oddwidth;
//        temp[i * j].height = (i - 1) * oddheight;
//    }
//}
//
//function whereat() {
//    var oddfew = Math.round(Math.random() * 100);
//    if (oddfew == 0) {
//        oddfew = 1;
//    }
//    if (temp[oddfew].visibility != "hidden") {
//        temp[oddfew].visibility = "hidden";
//    }
//    else {
//        while (temp[oddfew].visibility == "hidden") {
//            oddfew = Math.round(Math.random() * 100);
//            if (oddfew == 0) {
//                oddfew = 1;
//            }
//        }
//        temp[oddfew].visibility = "hidden";
//    }
//
//    if (counter == 100) {
//        clearInterval(beginerase)
//    }
//
//    counter++;
//}
//
//beginerase = setInterval("whereat()", espeed)

var s="";
for (var i=1;i<101;i++){
    s=s+'<div id="div'+i+'" style="position:absolute; left:0px; top:0px; background-color:#000000; opacity:0.5;border:'+"0.1px"+' '+"solid"+' '+"#0066FF"+' "></div>';
}
document.write(s);
var espeed=10;
var counter=1;
var temp=new Array();
var oddwidth=parseInt(document.body.clientWidth/10);
var oddheight=parseInt(document.body.offsetHeight/10);
for (i=1;i<=100;i++){
    temp[i]=eval("document.all.div"+i+".style");
    temp[i].width=oddwidth;
    temp[i].height=oddheight;
}
for (i=1;i<=10;i++)
    temp[i].left=(i-1)*oddwidth;
for (i=11;i<=20;i++){
    temp[i].left=(i-11)*oddwidth;
    temp[i].top=oddheight;
}
for (i=21;i<=30;i++){
    temp[i].left=(i-21)*oddwidth;
    temp[i].top=2*oddheight;
}
for (i=31;i<=40;i++){
    temp[i].left=(i-31)*oddwidth;
    temp[i].top=3*oddheight;
}
for (i=41;i<=50;i++){
    temp[i].left=(i-41)*oddwidth;
    temp[i].top=4*oddheight;
}
for (i=51;i<=60;i++){
    temp[i].left=(i-51)*oddwidth;
    temp[i].top=5*oddheight;
}
for (i=61;i<=70;i++){
    temp[i].left=(i-61)*oddwidth;
    temp[i].top=6*oddheight;
}
for (i=71;i<=80;i++){
    temp[i].left=(i-71)*oddwidth;
    temp[i].top=7*oddheight;
}
for (i=81;i<=90;i++){
    temp[i].left=(i-81)*oddwidth;
    temp[i].top=8*oddheight;
}
for (i=91;i<=100;i++){
    temp[i].left=(i-91)*oddwidth;
    temp[i].top=9*oddheight;
}
function whereat(){
    var oddfew=Math.round(Math.random()*100);
    if (oddfew==0){
        oddfew=1;
    }
    if (temp[oddfew].visibility!="hidden"){
        temp[oddfew].visibility="hidden";
    }
    else{
        while (temp[oddfew].visibility=="hidden"){
            oddfew=Math.round(Math.random()*100);
            if (oddfew==0) {
                oddfew=1;
            }
        }
        temp[oddfew].visibility="hidden";
    }
    if (counter==100){
        clearInterval(beginerase);
    }
    counter++;
    // espeed-=10;
}
beginerase=setInterval("whereat()",espeed)

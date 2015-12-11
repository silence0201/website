/**
 * Created by silence on 15/11/27.
 */
var w = 240;
var h = 59;
var str = "";
var obj = document.getElementById("divStayTopLeft");
if (obj) str = obj.innerHTML;
if (typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat') {
    document.writeln('<DIV  style="z-index:9;right:0;bottom:0;height:' + h + 'px;width:' + w + 'px;overflow:hidden;POSITION:fixed;_position:absolute; _margin-top:expression(document.documentElement.clientHeight-this.style.pixelHeight+document.documentElement.scrollTop);">');
} else {
    document.writeln('<DIV  style="z-index:9;right:0;bottom:0;height:' + h + 'px;width:' + w + 'px;overflow:hidden;POSITION:fixed;*position:absolute; *top:expression(eval(document.body.scrollTop)+eval(document.body.clientHeight)-this.style.pixelHeight);">');
}
document.writeln('<div style="clear:both;margin:auto;height:40px;font-size:14px;overflow:hidden;font-weight:bold;text-align:left;"><a href="javascript:scroll(0,0)" hidefocus="true"><img src="http://images.cnblogs.com/top.gif" alt="回到顶部" style="border: 0px;" /></a><a href="http://www.meowpet.com/" hidefocus="true"><img src="http://images.cnblogs.com/hsyg.gif" alt="返回首页" style="border: 0px;" /></a></div> ');
document.write('<div style="clear:both;margin:auto;overflow:hidden;text-align:left;">' + str + '</div>');
document.writeln('</DIV>');

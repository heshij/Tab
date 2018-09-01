/*1.先获取标签
2.1鼠标划入改变标题class名从而改变样式
2.2通过标题下标索引控制内容的显示*/

window.onload = function () {
    //获取标签
    var allLis = document.getElementById("tab_header").getElementsByTagName("li");
    var allDom  = document.getElementById("tab_content").getElementsByClassName("dom");
    //遍历监听
    for (var i =0;i<allLis.length;i++){
        var li = allLis[i];
        li.index = i;
        li.onmouseover = function () {
            for(var j= 0; j<allLis.length;j++){
                allLis[j].className = '';
                allDom[j].style.display = 'none';
            }
            this.className = 'selected';
             allDom[this.index].style.display = 'block';
        }
    }
};
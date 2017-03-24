//获取最外层的包裹元素
var wrap = document.getElementById("wrap");
//获取middle容器
var middle = document.getElementById("middle");
//获取所有图片
var imgs = middle.getElementsByTagName("img");
//获取所有 页数 按钮
var pages = document.getElementsByClassName("pages");
//取得上下一页按钮
var pn = document.getElementsByClassName("btn");
//获取上下一页按钮的父容器
var pageCenter = document.getElementById("pages-center");
//设置当前的index值为0
var currentIndex = 0;
//遍历所有的分页按钮
for (var i = 0; i < pages.length; i++) {
    pages[i].index = i; //设置按钮的自定义属性index 为
    //		当前按钮的下标值
    //为每个按钮添加鼠标移入事件
    pages[i].onmouseover = function() {
        //			bol = false;
        //设置当前页数为点击的按钮的index值
        currentIndex = this.index;
        selectedPageBtn();
        switchPage();
        //3秒后 继续执行滚动
        //			setTimeout(function(){
        //				bol = true;
        //			},3000);
        delay();
    }
}
//选中页数的按钮
function selectedPageBtn() {
    if (currentIndex < 0) {
        currentIndex = imgs.length - 1;
    }
    if (currentIndex == imgs.length) {
        currentIndex = 0;
    }
    //将当前激活的按钮 取消激活
    document.getElementsByClassName("selected")[0].className = "pages";
    //激活当前按钮
    pages[currentIndex].className = "pages selected";
}
for (var i = 0; i < pn.length; i++) {
    pn[i].index = i;
    pn[i].onclick = function() {
        if (this.index == 0) {
            currentIndex--;
        } else {
            currentIndex++;
        }
        selectedPageBtn();
        switchPage();
        delay();
    }
}
//定义定时器
var timer;
//更换页面方法
function switchPage() {
    if (currentIndex < 0) {
        currentIndex = imgs.length - 1;
    }
    if (currentIndex == imgs.length) {
        currentIndex = 0;
    }
    clearInterval(timer);
    //得到当前距左侧的值
    var currentLeft = middle.offsetLeft;
    //得到目标的左侧值
    var targetLeft = -currentIndex * imgs[0].offsetWidth;
    //初始值
    var start = 0;
    //总步数
    var step = 30;
    //得到需要改变的距离
    var change = targetLeft - currentLeft;
    //得到每一步需要移动的象素值
    change = change / step;
    //构建定时器，用于移动Middle
    timer = setInterval(function() {
        start++;
        //元素当前距左侧的距离+每一步需要移动的距离
        // = 元素最终到达的位置
        var l = middle.offsetLeft + change;
        if (start >= step) {
            //如果移动到最大步数，则将元素最终
            //					到达的位置设为元素的目标位置
            l = targetLeft;
            clearInterval(timer);
        }
        middle.style.left = l + "px";
    }, 30)
}
var bol = true; //设置一个布尔值用于判断
//		是否更改middel的left值
//设置一个定时任务，用于页面载入后自动切换图片
setInterval(function() {
    if (bol) { //如果此值为true 则调用switchPage来更改图片的显示位置
        currentIndex++;
        if (currentIndex == imgs.length) {
            currentIndex = 0;
        }
        switchPage();
        selectedPageBtn();
    }
}, 3000);
//为最外层包裹元素添加鼠标移出事件 当鼠标移出后，
//		继续执行滚动
wrap.onmouseout = function() {
    bol = true;
    //			document.getElementById("pages-center").style.display = "none";
    pageCenter.style.display = "none";
}
//为最外层的包裹元素添加鼠标移入事件，当鼠标移入后
//显示上下一页按钮
wrap.onmouseover = function() {
    //			document.getElementById("pages-center").style.display = "block";
    pageCenter.style.display = "block";
}
//创建一个延迟函数，需要延迟滚动时，即可调用此函数
function delay() {
    bol = false;
    setTimeout(function() {
        bol = true;
    }, 3000);
}
switchPage()
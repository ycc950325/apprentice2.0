

$(function() {
    var $header = '<div style="height: 70px;background-color: black" class="navbar navbar-inverse  navbar-fixed-top"> <div class="navbar-header"> <a id="Header" href="index.html" class="navbar-brand" style="margin:0;padding:0;"><img style="width:150px;height:70px;" src="images/logo3.png"></a> <button style="margin-top: 15px" type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myColl"> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> </div><div id="myColl" class="collapse navbar-collapse"><ul style="margin-top: 10px;background-color: #000;" class="nav navbar-nav navbar-left"><li><a  href="门派.html" target="_parent"><span class="glyphicon glyphicon-fire"></span>门派</a></li> <li><a href="众师父信息.html" target="_parent"><span class="glyphicon glyphicon-heart"></span>拜师</a> </li> <li><a href="项目首页.html" target="_parent"><span class="glyphicon glyphicon-star"></span>商业项目</a> </li> <li><a href="#" target="_parent"><span class="glyphicon glyphicon-question-sign"></span>网上答疑</a> </li>  <li><a href="个人资料.html" target="_parent"><span class="glyphicon glyphicon-user"></span>个人资料</a> </li></ul> <ul class="nav navbar-nav navbar-right"> <li><a href="#"></a> </li> <li><a href="#"></a> </li> <li><a href="#">&nbsp;</a> </li> </ul> </div> </divsty>'
    $("body").prepend($header);
    $("body").css({"margin":"0px",
        "padding-left":"10%",
        "padding-right":"10%",
        //"min-width":"480px",
        "background-color":"#EEEEEE"});
    $("div").first().next().css("margin-top","80px");

})

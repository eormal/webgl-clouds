var yearregular = /^\d{4}$/;
var nameregular = /^[\u4E00-\u9FA5]{1,15}$/;
var idcardregular = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
$(function(){
    LoadYear();
    LoadCaptcha();
    var handlerEmbed = function (captchaObj) {
        $("#embed-submit").click(function (e) {
            var validate = captchaObj.getValidate();
            var seYear = $("#seYear").val();
            var name = $("#name").val();
            var idcard = $("#idcard").val();
            if (!validate) {
                $("#notice").show();
                $("#notice").css({"opacity":"1","color":"red"});
                $("#notice").text("请先完成验证！");
                setTimeout(function () {
                    $("#notice").hide();
                    $("#notice").empty();
                }, 2000);
                e.preventDefault();
            }else if(!yearregular.test(seYear)){
                $("#notice").show();
                $("#notice").css({"opacity":"1","color":"red"});
                $("#notice").text("年份不合法！");
                setTimeout(function () {
                    $("#notice").hide();
                    $("#notice").empty();
                }, 3000);
                e.preventDefault();
            }else if(!nameregular.test(name)){
                $("#notice").show();
                $("#notice").css({"opacity":"1","color":"red"});
                $("#notice").text("请输入合法的姓名！");
                setTimeout(function () {
                    $("#notice").hide();
                    $("#notice").empty();
                }, 3000);
                e.preventDefault();
            }else if(!idcardregular.test(idcard)){
                $("#notice").show();
                $("#notice").css({"opacity":"1","color":"red"});
                $("#notice").text("请输入合法的身份证号码！");
                setTimeout(function () {
                    $("#notice").hide();
                    $("#notice").empty();
                }, 3000);
                e.preventDefault();
            }
        });
        // 将验证码加到id为captcha的元素里，同时会有三个input的值：geetest_challenge, geetest_validate, geetest_seccode
        captchaObj.appendTo("#embed-captcha");
        captchaObj.onReady(function () {
            $("#wait").text(".");
            $("#wait").css({"opacity":"0.1","width":"1px"});
        });
        // 更多接口参考：http://www.geetest.com/install/sections/idx-client-sdk.html
    };
});

$(window).resize(function(){
    LoadCaptcha();
});

function LoadCaptcha() {
    var width = $(window).width();
    if(width > 300){
        var wid = (width - 300) / 2;
        $('#embed-captcha').css({'left':wid+'px'});
    }
}

function LoadYear() {
    var currentYear = new Date().getFullYear();
    $("#copyright").append("<p>&copy;2005-" + currentYear + " 山外计协--无念.");
    $("#seYear").append("<option value='"+currentYear+"'>"+"请选择年份(不选则默认今年)"+"</option>");
    for(var i = currentYear; i >= 2005; i--)
        $("#seYear").append("<option value='"+i+"'>"+i+"年"+"</option>");
}

$('#name').bind('click',function(e){
    var $this = $(this);
    e.preventDefault();
    setTimeout(function(){
        $(window).scrollTop($this.offset().top - 10);
    },200)
})

$('#idcard').bind('click',function(e){
    var $this = $(this);
    e.preventDefault();
    setTimeout(function(){
        $(window).scrollTop($this.offset().top - 10);
    },200)
})
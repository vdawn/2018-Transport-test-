// 弹出授权框，授权过的用户不会再弹出
window.location.replace('https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx3f96f5c667557fb6&redirect_uri=http://www.web2312.com/yuanxia/111&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect')
$(function () {
  // 获取code
var a = window.location.href;
var code=a.slice(a.indexOf("code=")+5,a.indexOf("&"));
// 获取code的另一种方式
// function getQueryString(name) {
//   var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
//   var r = window.location.search.substr(1).match(reg);
//   if (r != null) return unescape(r[2]); return null;
// }
// var code = getQueryString('code');
// alert(code);

// redirect_uri里的域名
var b = "://www.web2312.com/yuanxia/111";
if(code != b){
  $.ajax({
    url: "https://andashi.top/yc/api/yicui/v1",
    type: "post",
    // async: false,
    data: JSON.stringify({
      type: "code",
      code: code
    }),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (data) {
      //请求成功
      // alert("ok")
  },
    error: function (e) {
    }
  })
  window.location.href = 'luck.html';
}

});
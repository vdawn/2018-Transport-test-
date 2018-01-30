// 福袋雨
$(function () {
    function abc() {
      $(".blessing1").animate({ top: "300px" }, getNum(), function () {
        flag_1 = true;
        $(this).css('top', '-70px');
      });
      $(".blessing2").animate({ top: "300px" }, getNum(), function () {
        flag_2 = true;
        $(this).css('top', '-70px');
      });
      $(".blessing3").animate({ top: "300px" }, getNum(), function () {
        flag_3 = true;
        $(this).css('top', '-70px');
      });
      $(".blessing4").animate({ top: "300px" }, getNum(), function () {
        flag_4 = true;
        $(this).css('top', '-70px');
      });
      $(".blessing5").animate({ top: "300px" }, getNum(), function () {
        flag_5 = true;
        $(this).css('top', '-70px');
      });
      $(".blessing6").animate({ top: "300px" }, getNum(), function () {
        flag_6 = true;
        $(this).css('top', '-70px');
      });
      $(".blessing7").animate({ top: "300px" }, getNum(), function () {
        flag_7 = true;
        $(this).css('top', '-70px');
      });
    }
    function getNum() {
        return Math.floor(Math.random()*3000)+2000;
        //返回一个2000到5000之间的随机数到调用处
    }
    abc();
    var time_1;
    var time_2;
    var time_3;
    var time_4;
    var time_5;
    var time_6;
    var time_7;
    var flag_1 = false;
    var flag_2 = false;
    var flag_3 = false;
    var flag_4 = false;
    var flag_5 = false;
    var flag_6 = false;
    var flag_7 = false;
  // 定时器
    clearInterval(time_1);
    time_1 = setInterval(function () {
      if (flag_1) {
        flag_1 = false;
        $(".blessing1").animate({ top: "300px" },getNum() , function () {
          flag_1 = true;
          $(this).css('top', '-70px');
        });
      }
    }, 1000)
    clearInterval(time_2);
    time_2 = setInterval(function () {
      if (flag_2) {
        flag_2 = false;
        $(".blessing2").animate({ top: "300px" }, getNum(), function () {
          flag_2 = true;
          $(this).css('top', '-70px');
        });
      }
    }, 1000)
    clearInterval(time_3);
    time_3 = setInterval(function () {
      if (flag_3) {
        flag_3 = false;
        $(".blessing3").animate({ top: "300px" }, getNum(), function () {
          flag_3 = true;
          $(this).css('top', '-70px');
        });
      }
    }, 1000)
    clearInterval(time_4);
    time_4 = setInterval(function () {
      if (flag_4) {
        flag_4 = false;
        $(".blessing4").animate({ top: "300px" }, getNum(), function () {
          flag_4 = true;
          $(this).css('top', '-70px');
        });
      }
    }, 1000)
    clearInterval(time_5);
    time_5 = setInterval(function () {
      if (flag_5) {
        flag_5 = false;
        $(".blessing5").animate({ top: "300px" }, getNum(), function () {
          flag_5 = true;
          $(this).css('top', '-70px');
        });
      }
    }, 1000)
    clearInterval(time_6);
    time_6 = setInterval(function () {
      if (flag_6) {
        flag_6 = false;
        $(".blessing6").animate({ top: "300px" }, getNum(), function () {
          flag_6 = true;
          $(this).css('top', '-70px');
        });
      }
    }, 1000)
    clearInterval(time_7);
    time_7 = setInterval(function () {
      if (flag_7) {
        flag_7 = false;
        $(".blessing7").animate({ top: "300px" }, getNum(), function () {
          flag_7 = true;
          $(this).css('top', '-70px');
        });
      }
    }, 1000)
  });
  
  // 点击任意一个福袋打开
  $(function(){
    $('.showtime').find('.blessing').each(function() {
      $(this).click(function() {
          $('.blessing8').show().addClass('open').siblings().hide();
          //显示有动画的第八个DIV，添加上有动画效果的类，从小变大，同时让其他DIV都隐藏
          setTimeout(function () {
              window.location.href='surprise.html';
              //将跳转时间写在延迟计时器里
          },5000)
          //延迟计时器的周期为动画的持续时间
          // 如果与CSS中的动画持续相同则在动画播放完立即跳转
          // 如果小于动画持续时间将在动画完成前跳转
          // 如果大于动画持续时间将在动画完成后一定时间再跳转
      })
  })
  })
  
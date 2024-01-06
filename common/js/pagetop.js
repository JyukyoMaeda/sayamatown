// JavaScript Document

$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});



jQuery(function() {
  var appear = false;
  var pagetop = $('#page_top');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {  //100pxスクロールしたら
      if (appear == false) {
        appear = true;
        pagetop.stop().animate({
          'right': '10px' //右から0pxの位置に
        }, 300); //0.3秒かけて現れる
      }
    } else {
      if (appear) {
        appear = false;
        pagetop.stop().animate({
          'right': '-50px' //右から-50pxの位置に
        }, 300); //0.3秒かけて隠れる
      }
    }
  });
});



//ローディングアニメーション記述

//読み込みが完了したら実行
//$(window).on('load',function () {
  // ローディングが10秒以内で終わる場合、読み込み完了後ローディング非表示
  //endLoading();
//});

//10秒経過した段階で、以下で上記の処理を上書き、強制終了
$(function(){
  setTimeout('endLoading()', 5000);
});

//ローディング非表示処理
function endLoading(){
  // 1秒かけてロゴを非表示にし、その後0.8秒かけて背景を非表示にする
  $('.loading').fadeOut(1000, function(){
    $('.loading').fadeOut(800);
  });
}
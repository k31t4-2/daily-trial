

// スライダー ----------------------------

const swiper = new Swiper(".swiper", {
  // loop:true,
  // ページネーション
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
    // bulletActiveClass: ,
  },
  //時間指定
  autoplay: {
    delay: 1000000,
  },
  // spaceBetween:30,
});

// アコーディオンリスト-----------------------

$('.accordion__ttl').on('click', function () {

  $(this).next().slideToggle(200);

  // $(this).toggleClass("open", 200);
});



// トップへ戻る-----------------------------

$("#to-top").click(function () {
  $("body,html").animate({ scrollTop: 0 }, 200);
})

$(document).ready(function () {
  // １、最初はボタンを非表示にする
  $('.to-top').hide();
  // ２、↓↓ 1280pxスクロールしたらフェードイン、フェードアウトする関数を記述
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > $('.fav').height()) {
      $('.to-top').fadeIn("slow");
    } else {
      $('.to-top').fadeOut("slow");
    }
  })
})

// ヘッダースクロールカラーチェンジ ------------------

jQuery(window).on('scroll', function () {
  if ($('.fav').height() < jQuery(this).scrollTop()) {
    jQuery('.header').addClass('change-color');
  } else {
    jQuery('.header').removeClass('change-color');
  }
});

// ページ内リンク ----------------------------------

$(function () {
    // headerの高さを取得して、変数に入れる
    var headerHeight = $('header').outerHeight();
    // #で始まるアンカーをクリックした場合に処理
  $('a[href^="#"]').click(function () {
    // スクロールの速度
    var speed = 400; // ミリ秒
    // アンカーの値取得
    var href = $(this).attr("href");
    // 移動先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を数値で取得
    var position = target.offset().top - headerHeight;
    // スムーススクロール
    $('body,html').animate({ scrollTop: position }, speed, 'swing');
    return false;
  });
});


// ハンバーガーメニュー    ---------------

$(".offcanvas-right").hiraku({
  btn: "#offcanvas-btn-right",
  direction: "right"
});

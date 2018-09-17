require('jquery');
$(function() {

  //セレクトボックスが切り替わったら発動
  $('#selectbox').change(function() {
    //選択したvalue値を変数に格納
    var val = $(this).val();
    if(val == 0) {
      // cssで要素を消す
      $("#form").addClass("none");
    } else {
      $("#form").removeClass("none");
    }
  });
  //追加ボタン
  $('#btn_add').click(function () {
    // classは複数存在する可能性があるので配列で返ってくる
    var elm = $('.template')[0];
    // テンプレートをコピーする
    elm = $(elm).clone().removeClass('template');
    // コピーの中から削除ボタンを見つけて、
    // イベントをバインドする
    $(elm).find('.btn_rmv').click(function () {
      // thisは押された自分自身の要素を示す
      parent_remove(this);
    });
    $(elm).appendTo('#form');
  });

  function parent_remove(elm) {
    //自分の親要素を消す
    $(elm).parent().remove();
  }
});

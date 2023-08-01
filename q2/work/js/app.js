$(function(){
  //OPENボタンをクリックでイベント発生
  $(".modal_open_button").on("click",function(){
    //グレーの背景をフェードインで表示
    $(".modal_bg").fadeIn(),
    //display:noneで処理されていたモジュールを表示
    $(".modal_win").show();
  });
  //クローズボタンをクリックするとイベント発生
  $(".modal_close_button").on("click",function(){
    //背景色とモーダルをフェードアウトにする処理
    $(".modal_bg, .modal_win").fadeIn();
  });
});
$(function(){
  //ハンバーガーメニューボタンをクリックした際にイベント発生
  $(".drawer_button").on("click", function(){
    //フェードイン・フェードアウトで切り替え処理
    $(".drawer_bg").fadeToggle();
    //drawer_buttonにactiveクラスに切り替え処理
    $(".drawer_button").toggleClass("active");
    //navのクラスをopenに切り替え処理
    $("nav").toggleClass("open")});
    //close×ボタンをクリックした際にイベント発生
  $(".drawer_bg").on("click", function(){
    //drawer_bgを非表示にする
    $(".drawer_bg").hide();
    //drawer_buttonのactiveクラスを削除
    $(".drawer_button").removeClass("active");
    //navのopenクラスを削除
    $("nav").removeClass("open");
  });
});
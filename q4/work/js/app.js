$(function(){
  //要素クリックの際にイベント発生
  $(".nav li").on("click", function(){
    //クリックした要素のインデックス番号を取得
    const index=$(".nav li").index(this);
    //イベント発生時に対象の要素にis-hiddenクラスを追加し非表示にする
    $(".description li").addClass("is-hidden");
    //イベント発生時にインデックス番号（5行目）と同様のインデックス番号のis-hiddenを削除しdisplay:noneを解除する処理
    $(".description li").eq(index).removeClass("is-hidden");
  });
});
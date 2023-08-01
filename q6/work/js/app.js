$(function(){
  //セレクトボックスの選択変更でイベント発生
  $(".select-box").on("change", function(){
  //選択変更タブのvalueの値を拾い代入
    const category = $(this).val();
    //food-listを取得。
    let foodList = $(".food-list li");
    //変数の値が"all"だった場合
    if("all" === category){
      //リストのすべてを表示する。
      foodList.show();
      //値をリターンし以降の処理を続ける。
      return false;
    }
    //リスト内ループ処理実装
    $.each(foodList, function(index, element){
      //category-typeを取得
      const categoryType = $(element).data("category-type");
      //もし変数が一致していたら
      if(category === categoryType){
        //要素を表示する
        $(element).show();
        //異なっている場合の処理
      } else {
        //要素を非表示にする
        $(element).hide();
      };
    });
  });
});
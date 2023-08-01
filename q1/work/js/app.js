//Q1-1
$(function(){
  //button id="q1"のCSSの文字色を変更
  $("#q1").css("color", "#080");
});

//Q1-2
$(function(){
  //Q2のボタンをクリックした際にイベント発生
  $("#q2").on("click", function(){
    //選択したボタンの要素の背景色を変更
    $("#q2").css("background-color", "#ffc0cb");
  });
});


//Q1-3
$(function(){
  //Q3のボタンをクリックした際にイベント発生
  $("#q3").on("click", function(){
    //選択したボタンの要素を3秒後にフェードアウト
    $("#q3").fadeOut(3000);
  });
});


//Q1-4
$(function(){
  //Q4のボタンをクリックした際にイベント発生
  $("#q4").on("click", function(){
    //選択したボタンの要素をサイズ変更
    $("#q4").css({
      "padding":"50px",
      "width":"300px",
      "font-size":"20px"
    });
  });
});

//Q1-5
$(function(){
  //Q5ボタンをクリックした際にイベント発生
  $("#q5").on("click", function(){
    //選択した要素内の先頭にpを追加する
    $("#q5").prepend("DOMの中の前");
    //選択した要素の内の最後にpを追加する
    $("#q5").append("DOMの中の後");
    //選択した要素内の前にpを追加する
    $("#q5").before("DOMの前");
    //選択した要素内の後にpを追加する
    $("#q5").after("DOMの後");
  });
});

//Q1-6
$(function(){
  //Q6のボタンをクリックした際にイベント発生
  $("#q6").on("click", function(){
    $("#q6").animate({
    //選択した要素のmargin-top:100 & margin-left:100を2秒かけて移動
    "margin-top":"100px",
    "margin-left":"100px"},2000)
  });
});

//Q1-7
$(function(){
  //Q7のボタンをクリックした際にイベント発生
  $("#q7").on("click", function(){
    //選択した要素をコンソールに表示する
    console.log(this);
  });
});

//Q1-8
$(function(){
  //Q8のボタンをホバー時イベント発生
  $("#q8").hover(function(){
  $("#q8").addClass("large");}, //cssクラスにlargeを追加
  function(){                   //ホバーしていない時にlargeを削除
  $("#q8").removeClass("large");
});
});

//Q1-9
$(function(){
  //Q9のリストボタンをクリックした際にイベント発生
  $("#q9 li").on("click", function(){
    //クリックしたリスト（li）のインデックス番号を取得
    const index=$("#q9 li").index(this);
    //アラートでインデックス番号を表示する
    alert(index);
  });
});

//Q1-10
$(function(){
  //Q10のリストボタンをクリックした際にイベント発生
  $("#q10 li").on("click",function(){
    //クリックしたリスト（li）のインデックス番号を取得
    const index=$("#q10 li").index(this);
    //クリックしたq10と同様のq11のインデックス番号の要素にlarge-textクラスを追加
    $("#q11 li").eq(index).addClass("large-text");
  });
});
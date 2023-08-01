$(function(){
  $(".btn__submit").on("click", function(){//アカウント作成ボタンをクリックしたときにイベント発生
    console.log("名字");//名字と表示する
    console.log($("#family__name").val());//入力された名字を取得する

    console.log("名前");//名前と表示する
    console.log($("#given__name").val());//入力された名前を取得する

    console.log("生年月日");//生年月日と表示する
    console.log($(".year").val() + "年" + $(".month").val() + "月" + $(".day").val() + "日");//選択された生年月日を取得表示

    console.log("性別");//性別と表示する
    console.log($('[name="gender"]:checked').val());//チェックされた性別を表示する

    console.log("職業");//職業と表示する
    console.log($(".occupation").val());//職業を取得し表示する

    console.log("アカウント名");//アカウント名と表示する
    console.log($("#account__name").val());//アカウント名取得し表示

    console.log("メールアドレス");//メールアドレスと表示する
    console.log($("#email").val());//メールアドレスを取得し表示

    console.log("パスワード");//パスワードと表示する
    console.log($("#password").val());//パスワードを取得し表示

    console.log("確認パスワード");//確認パスワードと表示する
    console.log($("#duplication__password").val());//確認パスワードを取得し表示

    console.log("住所");//住所と表示する
    console.log($("#address").val());//住所を取得し表示

    console.log("電話番号");//電話番号と表示する
    console.log($("#tel").val());//電話番号を取得し表示

    console.log("購読情報");//購読情報と表示する
    //購読情報のチェックボックスにチェックされたものを取得し表示する
    $('[name="subscription"]:checked').each(function(){
      console.log($(this).val())
    });
  });
});
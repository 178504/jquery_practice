// API
// const settings = {
//   "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
//   "method": "GET",
// }
// $.ajax(settings).done(function (response) {
//   const result = response['@graph'];
//   displayResult(result)
// }).fail(function (err) {
//   displayError(err)
// });
$(function(){
  //pageCountを宣言し1を代入
  let pageCount = 1;
  //keepWordを空にする
  let keepWord = "";

  //検索ボタンをクリックしてイベント発生
  $(".search-btn").on("click", function (){
    //検索ワードを取得する
    const searchWord =$("#search-input").val();
    //searchWordがkeepWordと一致する場合の処理
    if(searchWord === keepWord){
    //pageCountに1を足す
    pageCount++;
    } else {
    //一致しない場合の処理　listの中身を空にする処理
    $(".lists").empty();
    //keepWordにsearchWordの値を代入する処理
    keepWord = searchWord;
    pageCount = 1;
    };

  //変数settingsに設定情報等を格納する処理
  const settings = {
    //実行用(エンドポイント)URL
    "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
    //サーバーに送るメソッド
    "method": "GET",
  }
  //Ajaxの実行
  //.doneが通信成功した時の処理、"response"が引数となっていて通信した結果を受け取っている。
  $.ajax(settings).done(function (response) {
    //resultにresponse['@graph']を格納
    const result = response['@graph'];
    //関数displayResultに引数をresultを渡して実行
    displayResult(result)
    //.fallが通信失敗した時の処理、"err"にサーバーから送られてきたエラー内容を受け取っている
    }).fail(function (err) {
    displayError(err)
  });
});

//関数displayResultに仮引数resultを渡す処理
function displayResult(result){
  //message要素を削除する
  $(".message").remove();
  //result[0]['items']がundefinedでない場合の処理
  if(result[0].items !== undefined ){
    //ajaxから取得したアイテムの数の分ループする
    $.each(result[0].items,function(i){
      //titleに値が返ってきた時その値をtrue　空だった時はタイトル不明でfalseを代入
      //creator,publisher,idもそれぞれ同様の処理
      const title = result[0].items[i].title ? result[0].items[i].title : 'タイトル不明';
      const creator = result[0].items[i]['dc:creator'] ? result[0].items[i]['dc:creator'] : '作者不明';
      const publisher = result[0].items[i]['dc:publisher'] ? result[0].items[i]['dc:publisher'] : '出版社不明';
      const id = result[0].items[i]['@id'] ? result[0].items[i]['@id'] : '書籍情報不明';
      //listsクラスの子要素の先頭に上記コードで代入したタイトル・作者・出版社・書籍情報詳細にいくリンク要素を追加
      $(".lists").prepend('<li class="lists-item"><div class="list-inner"><p>タイトル：' + title + '</p><p>作者：' + creator + '</p><p>出版社：' + publisher + '</p><a href = "' + id + '"target="_blank">書籍情報</a></div></li>')
    });
  } else {
    //undefinedの場合listクラスを持つ要素の前に以下のテキストを追加
    $(".lists").before('<div class="message">検索結果が見つかりませんでした<br>別のキーワードで検索してください</div>');
  };
};

//関数名displayErrorに仮引数errを渡す。
function displayError(err){
  //lists要素の中を空にする
  $(".lists").empty();
  //message要素を削除する
  $(".message").remove();

  //err.statusが0の場合
  if(err.status === 0){
      //lists要素の先頭に以下のdivを追加
      $(".lists").before('<div class="message">正常に通信できませんでした。<br>インターネットの接続の確認をしてください。</div>')
      //err.statusが400の場合の処理
    } else if (err.status === 400){
      //lists要素の先頭に以下のdivを追加する
      $(".lists").before('<div class="message">検索ワードが入力されていません。</div>')
      //それ以外の場合の処理
    } else {
      //lists要素の先頭に以下のdivを追加する
      $(".lists").before('<div class="message">予期せぬエラーが発生しました。</div>')
    };
  };
});

//リセットボタンをクリックして以下の内容を実行する
$(".reset-btn").on("click", function(){
  //ページカウントを１にする
  pageCount = 1;
  //list要素の中を空にする
  $(".lists").empty();
  //入力フォームの中を空にする
  $("#search-input").val("");
  //message要素を削除する
  $(".message").remove();
  //keepWordを空にする
  keepWord ="";
});

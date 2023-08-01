$(function(){
  //ホバーした際にイベント発生
  $("ul.dropdwn li").hover(function(){
  //ドロップダウンメニューをスライドしながら表示されるかつモーションの中断可能
    $(".dropdwn_menu", this).stop().slideDown();
  },function(){
    //ホバーしないときはドロップダウンメニューをスライドしつつ非表示にする
    $(".dropdwn_menu",this).slideUp();
    });
});
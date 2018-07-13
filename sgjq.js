$(function() {
  $('#compute').click( function(e){
    var total_price = parseInt($("input[name='yellow_stone']").val())
    +parseInt($("input[name='red_stone']").val())+
    parseInt($("input[name='grey_stone']").val())+
    parseInt($("input[name='green_stone']").val())
    var unit_price = total_price/8
    $('#total_price').text(total_price)
    $('#unit_price').text(unit_price)
    $('#triple_price').text(unit_price*3)
  });
  $(".market_price_list .input-group input").focusout(function() {
    var text_val = $(this).val();
    if (text_val === "") {
      $(this).removeClass("has-value");
    } else {
      $(this).addClass("has-value");
    }
  });
});

function allowDrop(ev){
  ev.preventDefault();
}
//拖动开始
function drag(ev) {
  ev.dataTransfer.setData("Text",ev.target.id);
}

function drop(ev){
  ev.preventDefault();
  var data=ev.dataTransfer.getData("Text");
  ev.target.appendChild(document.getElementById(data));
}

function dropCopy(ev){
  ev.preventDefault();
  //TODO 清除原本有的元素并添加拷贝元素
  var data=ev.dataTransfer.getData("Text");
  var item = document.getElementById(data).cloneNode(true);
  item.id=item.id+"copy"
  ev.target.appendChild(item);
}







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

  setInterval(function(){saveData();},5000);
});
var api1 = "http://localhost:3216/training_grounds/team"
var a 
$.getJSON(api1, function(data){
  a = data
  if (data.spring !== null) {
    for ( key in data.spring ) {
      if ( data.spring[key].name !== '' && data.spring[key].name !== undefined) {
        $('#spring').append('<a id="'+data.spring[key].name+'1" class="'+ data.spring[key].medal +
         '_medal" draggable="true" ondragstart="drag(event)">'+data.spring[key].name+'</a>')
      }
    }
  }
  if (data.summer !== null) {
    for ( key in data.summer ) {
      if ( data.summer[key].name !== '' && data.summer[key].name !== undefined) {
        $('#summer').append('<a id="'+data.summer[key].name+'1" class="'+ data.summer[key].medal + 
        '_medal" draggable="true" ondragstart="drag(event)">'+data.spring[key].name+'</a>')
      }
    }
  }
  if (data.autumn !== null) {
    for ( key in data.autumn ) {
      if ( data.autumn[key].name !== '' && data.autumn[key].name !== undefined) {
        $('#autumn').append('<a id="'+data.autumn[key].name+'1" class="'+ data.autumn[key].medal + 
        '_medal" draggable="true" ondragstart="drag(event)">'+data.autumn[key].name+'</a>')
      }
    }
  }
  if (data.winter !== null) {
    for ( key in data.winter ) {
      if ( data.autumn[key].name !== '' && data.autumn[key].name !== undefined) {
        $('#winter').append('<a id="'+data.autumn[key].name+'1" class="'+ data.autumn[key].medal + 
        '_medal" draggable="true" ondragstart="drag(event)">'+data.autumn[key].name+'</a>')
      }
    }
  }
});

function success(data) {
  // do something with data, which is an object
  alert(data)
}
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

function saveData(){
  var spring_medal1 = $('#spring a:eq(0)').attr("class")
  var spring_medal2 = $('#spring a:eq(1)').attr("class")
  var summer_medal1 = $('#summer a:eq(0)').attr("class")
  var summer_medal2 = $('#summer a:eq(1)').attr("class")
  var autumn_medal1 = $('#autumn a:eq(0)').attr("class")
  var autumn_medal2 = $('#autumn a:eq(1)').attr("class")
  var winter_medal1 = $('#winter a:eq(0)').attr("class")
  var winter_medal2 = $('#winter a:eq(1)').attr("class")

  var team = {
    "spring":[
      {
        "name":$('#spring a:eq(0)').text(),
        "medal":spring_medal1 === undefined ? null : spring_medal1.slice(0,-6)
      },
      {
        "name":$('#spring a:eq(1)').text(),
        "medal":spring_medal2 === undefined ? null : spring_medal2.slice(0,-6)
      }
    ],
    "summer":[
      {
        "name":$('#summer a:eq(0)').text(),
        "medal":summer_medal1 === undefined ? null : summer_medal1.slice(0,-6)
      },
      {
        "name":$('#summer a:eq(1)').text(),
        "medal":summer_medal2 === undefined ? null : summer_medal2.slice(0,-6)
      }
    ],
    "autumn":[
      {
        "name":$('#autumn a:eq(0)').text(),
        "medal":autumn_medal1 === undefined ? null : autumn_medal1.slice(0,-6)
      },
      {
        "name":$('#autumn a:eq(1)').text(),
        "medal":autumn_medal2 === undefined ? null : autumn_medal2.slice(0,-6)
      }
    ],
    "winter":[
      {
        "name":$('#winter a:eq(0)').text(),
        "medal":winter_medal1 === undefined ? null : winter_medal1.slice(0,-6)
      },
      {
        "name":$('#winter a:eq(1)').text(),
        "medal":winter_medal2 === undefined ? null : winter_medal2.slice(0,-6)
      }
    ]
  }
$.ajax({
    type: "POST",
    url: api1,
    // The key needs to match your method's input parameter (case-sensitive).
    data: JSON.stringify(team),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function(data){alert(data);},
    failure: function(errMsg) {
        alert(errMsg);
    }
});

}







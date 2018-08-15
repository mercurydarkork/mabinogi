

$(function(){
    $('.player').on('contextmenu',  function (e) {
        //阻止默认的右键事件
        e.preventDefault();
        //拿到该人的属性
        var radar = $(this).attr("radar")
        var playerName = $(this).text()
        var chart = AmCharts.makeChart("chartdiv", {
            type: "radar",
            theme: "light",
            addClassNames: true,
            color:"#FF0000",
            titles: [{
                text: playerName,
                color: "#FFFFFF"
              }],
            dataProvider: [
              {
                skill: "Shield",
                level: Number(radar.charAt(0)),
                image:
                  "http://128.1.224.111/down/%E6%B4%9B%E5%A5%87/alban_knights/img/Shield_of_Trust.png"
              },
              {
                skill: "Judgment",
                level: Number(radar.charAt(1)),
                image:
                  "http://128.1.224.111/down/%E6%B4%9B%E5%A5%87/alban_knights/img/Judgment_Blade.png"
              },
              {
                skill: "SpikeAndSupport",
                level: Number(radar.charAt(2)),
                image:
                  "http://128.1.224.111/down/%E6%B4%9B%E5%A5%87/alban_knights/img/SpikeAndSupport_Shot.png"
              },
              {
                skill: "PlayInstrument",
                level: Number(radar.charAt(3)),
                image:
                  "http://128.1.224.111/down/%E6%B4%9B%E5%A5%87/alban_knights/img/Playing_Instrument.png"
              },
              {
                skill: "Hunzi",
                level: Number(radar.charAt(4)),
                image:
                  "http://128.1.224.111/down/%E6%B4%9B%E5%A5%87/alban_knights/img/hunzi.jpg"
              },
              {
                skill: "LaGuai",
                level: Number(radar.charAt(5)),
                image:
                  "http://128.1.224.111/down/%E6%B4%9B%E5%A5%87/alban_knights/img/compose_laguai.png"
              },
              {
                skill: "SmashAndRect",
                level: Number(radar.charAt(6)),
                image:
                  "http://128.1.224.111/down/%E6%B4%9B%E5%A5%87/alban_knights/img/smashAndRect.png" 
              }
            ],
            valueAxes: [
              {
                axisTitleOffset: 20,
                minimum: 0,
                maximum: 5,
                axisAlpha: 0.9,
                axisColor: "#FF0000",
                guides: [{
                    "value": 0,
                    "toValue": 1,
                    "fillColor": "#2196f3",
                    "fillAlpha": 0.2
                  }, {
                    "value": 1,
                    "toValue": 2,
                    "fillColor": "#2196f3",
                    "fillAlpha": 0.3
                  }, {
                    "value": 2,
                    "toValue": 3,
                    "fillColor": "#2196f3",
                    "fillAlpha": 0.4
                  }, {
                    "value": 3,
                    "toValue": 4,
                    "fillColor": "#2196f3",
                    "fillAlpha": 0.5
                  }, {
                    "value": 4,
                    "toValue": 5,
                    "fillColor": "#2196f3",
                    "fillAlpha": 0.6
                  }]
              }
            ],
            startDuration: 2,
            graphs: [
              {
                balloonText: "[[value]]",
                bullet: "round",
                valueField: "level"
              }
            ],
            categoryField: "skill",
            listeners: [
              {
                event: "rendered",
                method: updateLabels
              },
              {
                event: "resized",
                method: updateLabels
              }
            ]
          });

    });
});
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
}
function allowDrop(ev) {
    ev.preventDefault();
}
//拖动开始
function drag(ev) {
    ev.dataTransfer.setData("Text", ev.target.id);
}

function updateLabels(event) {
    var labels = event.chart.chartDiv.getElementsByClassName(
      "amcharts-axis-title"
    );
    for (var i = labels.length - 1; i >= 0; i--) {
      var src = event.chart.dataProvider[i].image;
      if (src === undefined) continue;
      var label = labels[i];
      var parent = label.parentNode;
      var group = document.createElementNS("http://www.w3.org/2000/svg", "g");
      var img = document.createElementNS("http://www.w3.org/2000/svg", "image");
  
      // Setup image
      img.setAttributeNS("http://www.w3.org/1999/xlink", "href", src);
      img.setAttribute("x", "-17");
      img.setAttribute("y", "-17");
      img.setAttribute("width", "34");
      img.setAttribute("height", "34");
  
      // Swap position to group; remove from label
      group.setAttribute("transform", label.getAttribute("transform"));
      parent.removeChild(label);
  
      // Group axis labels
      //group.appendChild(label);
      group.appendChild(img);
      parent.appendChild(group);
    }
  }
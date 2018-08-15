
var chart = AmCharts.makeChart("chartdiv", {
    type: "radar",
    theme: "light",
    addClassNames: true,
    dataProvider: [
      {
        skill: "Shield",
        level: Number(1),
        image:
          "http://128.1.224.111/down/%E6%B4%9B%E5%A5%87/alban_knights/img/Shield_of_Trust.png"
      },
      {
        skill: "Judgment",
        level: Number(2),
        image:
          "http://128.1.224.111/down/%E6%B4%9B%E5%A5%87/alban_knights/img/Judgment_Blade.png"
      },
      {
        skill: "SpikeAndSupport",
        level: Number(3),
        image:
          "http://128.1.224.111/down/%E6%B4%9B%E5%A5%87/alban_knights/img/SpikeAndSupport_Shot.png"
      },
      {
        skill: "PlayInstrument",
        level: Number(4),
        image:
          "http://128.1.224.111/down/%E6%B4%9B%E5%A5%87/alban_knights/img/Playing_Instrument.png"
      },
      {
        skill: "Hunzi",
        level: Number(5),
        image:
          "http://128.1.224.111/down/%E6%B4%9B%E5%A5%87/alban_knights/img/hunzi.jpg"
      },
      {
        skill: "LaGuai",
        level: Number(5),
        image:
          "http://128.1.224.111/down/%E6%B4%9B%E5%A5%87/alban_knights/img/compose_laguai.png"
      },
      {
        skill: "SmashAndRect",
        level: Number(5),
        image:
          "http://128.1.224.111/down/%E6%B4%9B%E5%A5%87/alban_knights/img/smashAndRect.png" 
      }
    ],
    valueAxes: [
      {
        axisTitleOffset: 20,
        minimum: 0,
        axisAlpha: 0.15
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
  
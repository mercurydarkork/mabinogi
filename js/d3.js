FusionCharts.ready(function() {
    var myChart = new FusionCharts({
      type: "radar",
      renderAt: "chart-container",
      width: "50%",
      height: "50%",
      dataFormat: "json",
      dataSource: {
          char: {
            showlegend: "0",
            showdivlinevalues: "0",
            showlimits: "0",
            showvalues: "1",
            plotfillalpha: "40",
            theme: "candy",
          },
          categories: [
              {
                  category:[
                      {
                          label:"sward"
                      },
                      {
                          label:"shield"
                      },
                      {
                          label:"music play"
                      },
                      {
                          label:"support shoot"
                      },
                      {
                          label:"nothing"
                      }
                  ]
              }
          ],
          dataset: [
              {
                seriesname:"非困使徒",
                data:[
                    {
                        value:"3",
                    },
                    {
                        value:"4",
                    },
                    {
                        value:"5",
                    },
                    {
                        value:"3",
                    },
                    {
                        value:"3",
                    }
                ]
              }
          ]
      }
    }).render();
  });
  
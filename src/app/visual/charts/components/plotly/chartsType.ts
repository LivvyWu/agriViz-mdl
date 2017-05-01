/**
 * Created by pengtawu on 2017/4/18.
 */
export var chartsType: any = {
  'barchart': {
    'Basic Bar Chart': {
      'data': [{
        x: ['label1', 'label2', 'label3', 'label4', 'label5'],
        y: [20, 14, 23, 35, 17],
        type: 'bar'
      }],
      'layout': {
        barmode: 'group'
      }
    },
    'Basic Horizontal Bar Chart': {
      'data': [{
        x: [20, 14, 23, 35, 17],
        y: ['label1', 'label2', 'label3', 'label4', 'label5'],
        type: 'bar',
        orientation : 'h'
      }],
      'layout': {
        barmode: 'group',
        orientation : 'h'
      }
    },
    'Grouped Bar Chart': {
      'data': [
        {
          x: ['giraffes', 'orangutans', 'monkeys'],
          y: [20, 14, 23],
          name: 'SF Zoo',
          type: 'bar'
        },
        {
          x: ['giraffes', 'orangutans', 'monkeys'],
          y: [12, 18, 29],
          name: 'LA Zoo',
          type: 'bar'
        }
      ],
      'layout ': {
        barmode: 'group'
      }
    },
    'Stacked Bar Chart': {
      'data': [
        {
          x: ['giraffes', 'orangutans', 'monkeys'],
          y: [20, 14, 23],
          name: 'SF Zoo',
          type: 'bar'
        },
        {
          x: ['giraffes', 'orangutans', 'monkeys'],
          y: [12, 18, 29],
          name: 'LA Zoo',
          type: 'bar'
        }
      ],
      'layout': {
        barmode: 'stack'
      }
    },
    'Bar Chart with Hover Text': {
      'data': [{
        x: ['Liam', 'Sophie', 'Jacob', 'Mia', 'William', 'Olivia'],
        y: [8.0, 8.0, 12.0, 12.0, 13.0, 20.0],
        type: 'bar',
        text: ['4.17 below the mean', '4.17 below the mean', '0.17 below the mean', '0.17 below the mean',
          '0.83 above the mean', '7.83 above the mean'],
        marker: {
          color: 'rgb(142,124,195)'
        }
      }],
      'layout': {
        title: 'Number of Graphs Made this Week',
        font: {
          family: 'Raleway, snas-serif'
        },
        showlegend: false,
        xaxis: {
          tickangle: -45
        },
        yaxis: {
          zeroline: false,
          gridwidth: 2
        },
        bargap: 0.05
      }
    }
  },
  'linechart': {
    'Basic Line Plot': {
      'data': [{
        x: [1, 2, 3, 4],
        y: [10, 15, 13, 17],
        type: 'scatter'
      },
        {
          x: [1, 2, 3, 4],
          y: [16, 5, 11, 9],
          type: 'scatter'
        }
      ],
      'layout': {}
    },
    'Styling Line Plot': {
      'data': [
        {
          type: 'scatter',
          x: [1, 2, 3, 4],
          y: [10, 15, 13, 17],
          mode: 'lines',
          name: 'Red',
          line: {
            color: 'rgb(219, 64, 82)',
            width: 3
          }
        },
        {
          type: 'scatter',
          x: [1, 2, 3, 4],
          y: [12, 9, 15, 12],
          mode: 'lines',
          name: 'Blue',
          line: {
            color: 'rgb(55, 128, 191)',
            width: 1
          }
        }
      ],
      'layout': {
        width: 500,
        height: 500
      }
    },
    'Graph and Axes Titles': {
      'data': [
        {
          x: [1, 2, 3, 4],
          y: [10, 15, 13, 17],
          mode: 'markers',
          name: 'Scatter'
        },
        {
          x: [2, 3, 4, 5],
          y: [16, 5, 11, 9],
          mode: 'lines',
          name: 'Lines'
        },
        {
          x: [1, 2, 3, 4],
          y: [12, 9, 15, 12],
          mode: 'lines+markers',
          name: 'Scatter and Lines'
        }
      ],
      'layout': {
        title: 'Title of the Graph',
        xaxis: {
          title: 'x-axis title'
        },
        yaxis: {
          title: 'y-axis title'
        }
      }
    }
  },
  'piechart': {
    'Basic Pie Chart': {
      'data': [{
        values: [19, 26, 55],
        labels: ['Residential', 'Non-Residential', 'Utility'],
        type: 'pie'
      }],
      'layout': {
        height: 400,
        width: 500
      }
    },
    'Donut Chart': {
      'data': [{
        values: [16, 15, 12, 6, 5, 4, 42],
        labels: ['US', 'China', 'European Union', 'Russian Federation', 'Brazil', 'India', 'Rest of World'],
        domain: {
          x: [0, .48]
        },
        name: 'GHG Emissions',
        hoverinfo: 'label+percent+name',
        hole: .4,
        type: 'pie'
      }, {
        values: [27, 11, 25, 8, 1, 3, 25],
        labels: ['US', 'China', 'European Union', 'Russian Federation', 'Brazil', 'India', 'Rest of World'],
        text: 'CO2',
        textposition: 'inside',
        domain: {x: [.52, 1]},
        name: 'CO2 Emissions',
        hoverinfo: 'label+percent+name',
        hole: .4,
        type: 'pie'
      }],
      'layout': {
        title: 'Global Emissions 1990-2011',
        annotations: [
          {
            font: {
              size: 20
            },
            showarrow: false,
            text: 'GHG',
            x: 0.17,
            y: 0.5
          },
          {
            font: {
              size: 20
            },
            showarrow: false,
            text: 'CO2',
            x: 0.82,
            y: 0.5
          }
        ],
        height: 600,
        width: 600
      }
    }
  },
  'scatter': {
    'Data Labels Hover': {
      'data': [
        {
          x: [1, 2, 3, 4, 5],
          y: [1, 6, 3, 6, 1],
          mode: 'markers',
          type: 'scatter',
          name: 'Team A',
          text: ['A-1', 'A-2', 'A-3', 'A-4', 'A-5'],
          marker: {size: 12}
        },
        {
          x: [1.5, 2.5, 3.5, 4.5, 5.5],
          y: [4, 1, 7, 1, 4],
          mode: 'markers',
          type: 'scatter',
          name: 'Team B',
          text: ['B-a', 'B-b', 'B-c', 'B-d', 'B-e'],
          marker: {size: 12}
        }
      ],
      'layout': {
        xaxis: {
          range: [0.75, 5.25]
        },
        yaxis: {
          range: [0, 8]
        },
        title: 'Data Labels Hover'
      }
    },
    'Data Labels on The Plot': {
      'data': [
        {
          x: [1, 2, 3, 4, 5],
          y: [1, 6, 3, 6, 1],
          mode: 'markers+text',
          type: 'scatter',
          name: 'Team A',
          text: ['A-1', 'A-2', 'A-3', 'A-4', 'A-5'],
          textposition: 'top center',
          textfont: {
            family: 'Raleway, sans-serif'
          },
          marker: {size: 12}
        },
        {
          x: [1.5, 2.5, 3.5, 4.5, 5.5],
          y: [4, 1, 7, 1, 4],
          mode: 'markers+text',
          type: 'scatter',
          name: 'Team B',
          text: ['B-a', 'B-b', 'B-c', 'B-d', 'B-e'],
          textfont: {
            family: 'Times New Roman'
          },
          textposition: 'bottom center',
          marker: {size: 12}
        }
      ],
      'layout': {
        xaxis: {
          range: [0.75, 5.25]
        },
        yaxis: {
          range: [0, 8]
        },
        legend: {
          y: 0.5,
          yref: 'paper',
          font: {
            family: 'Arial, sans-serif',
            size: 20,
            color: 'grey',
          }
        },
        title: 'Data Labels on the Plot'
      }
    }
  }
};


// apex chart js
var options = {
    series: [{
    data: [08, 44, 18, 55, 32, 42, 34,39]
  }],
    chart: {
    height: 283,
    type: 'area',
    toolbar: {
      show: false
    }
  },
  colors:['#8FE1B2', '#B4DEC6', '#E7F6EF'],
  strokeColors: {
      show: false   
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
      show: true,
      curve: 'smooth',
      lineCap: 'butt',
      colors: undefined,
      width: 2,
      dashArray: 0,  
  },
  xaxis: {
    type: 'datetime',
    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z", "2018-09-19T07:30:00.000Z"]
  },
  tooltip: {
    x: {
      format: 'dd/M',
    },
  },
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();

// table redirect
jQuery(document).ready(function($) {
    $(".clickable1").click(function() {
        window.location = $(this).data("href");
    });
    $(".clickable2").click(function() {
      window.location = $(this).data("href");
  });
});
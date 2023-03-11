//Mui
import { useTheme } from '@mui/material';
import { tokens } from '../theme/themeConfig';

//Chartjs
import ReactApexChart from 'react-apexcharts';

export const LineColumnArea = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const series = [
    {
      name: 'team a',
      type: 'column',
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
    },
    {
      name: 'team b',
      type: 'area',
      data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
    },
    {
      name: 'team c',
      type: 'line',
      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
    }
  ];
  var options: ApexCharts.ApexOptions | undefined = {
    chart: {
      width: '100%',
      toolbar: { show: false },
      zoom: { enabled: false },
      fontFamily: theme.typography.fontFamily
    },
    grid: {
      show: true,
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: false
        }
      }
    },
    colors: [`blue`, `${colors.warning[500]}`, `${colors.info[500]}`],
    stroke: {
      width: 3,
      curve: 'smooth',
      lineCap: 'round'
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        columnWidth: '15%',
        borderRadiusApplication: 'end',
        borderRadiusWhenStacked: 'last'
      }
    },

    legend: {
      show: true,
      fontSize: '12px',
      fontFamily: 'nunito',
      fontWeight: 700,
      position: 'top',
      horizontalAlign: 'right',
      labels: {
        colors: `${theme.palette.text.primary}`
      },
      markers: {
        radius: 12
      },
      itemMargin: { horizontal: 12 }
    },
    fill: {
      opacity: [1, 0.2, 1],
      colors: [`#0000FF`, `${colors.warning[500]}`, `${colors.info[500]}`],
      gradient: {
        shade: 'dark',
        type: 'vertical',
        shadeIntensity: 0.5,
        gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 100],
        colorStops: []
      }
    },

    labels: [
      '01/01/2003',
      '02/01/2003',
      '03/01/2003',
      '04/01/2003',
      '05/01/2003',
      '06/01/2003',
      '07/01/2003',
      '08/01/2003',
      '09/01/2003',
      '10/01/2003',
      '11/01/2003'
    ],

    xaxis: {
      type: 'datetime',
      group: {
        style: {
          fontSize: '20px'
        }
      },
      tooltip: {
        style: {
          fontSize: '12px'
        }
      },
      labels: {
        style: {
          fontSize: '12px',
          colors: `${theme.palette.text.primary}`
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          fontSize: '12px',
          colors: `${theme.palette.text.primary}`
        }
      }
    },
    states: {
      hover: {
        filter: {
          type: 'lighten',
          value: 0.04
        }
      },
      active: {
        filter: {
          type: 'darken',
          value: 0.88
        }
      }
    },
    tooltip: {
      cssClass: 'tooltipWebsiteVisit',
      theme: 'false', // disable default style
      style: {
        fontFamily: 'nunito'
      },
      x: {
        show: false
      },
      shared: true,
      intersect: false,
      y: {
        formatter: function (y: number) {
          if (typeof y !== 'undefined') {
            return y.toFixed(0) + ' vistis';
          }
          return y;
        }
      }
    }
  };

  return (
    <ReactApexChart
      type="line"
      series={series}
      options={options}
      height={364}
    />
  );
};

export const PieChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const series = [44, 55, 13, 43];
  const options: ApexCharts.ApexOptions | undefined = {
    chart: {
      width: '100%',
      type: 'pie',
      fontFamily: theme.typography.fontFamily
    },
    colors: [
      `#0000FF`,
      `${colors.success[500]}`,
      `${colors.warning[500]}`,
      `${colors.error[500]}`
    ],
    fill: {
      colors: [
        `#0000FF`,
        `${colors.success[500]}`,
        `${colors.warning[500]}`,
        `${colors.error[500]}`
      ]
    },

    legend: {
      show: true,
      fontSize: '12px',
      fontFamily: 'nunito',
      fontWeight: 700,
      position: 'bottom',
      horizontalAlign: 'center',

      labels: {
        colors: `${theme.palette.text.primary}`
      },
      markers: {
        radius: 12
      },
      itemMargin: { horizontal: 12 }
    },
    dataLabels: {
      style: {
        fontSize: '12px',
        fontWeight: 700
      },
      dropShadow: {
        enabled: false
      }
    },
    tooltip: {
      cssClass: 'pieTooltip',
      theme: 'false', // disable default style
      style: {
        fontFamily: 'nunito'
      },
      followCursor: true,
      fillSeriesColor: false,
      marker: {
        show: true
      }
    },
    labels: ['america', 'asia', 'europe', 'africa'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }
    ]
  };
  return (
    <ReactApexChart type="pie" series={series} options={options} height={360} />
  );
};

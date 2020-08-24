import React, { Component } from "react";
import Chart from "react-apexcharts";

class AreaChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "Seasons-Overview",
          //   background: "#16b164",
        },
        dataLabels: {
          enabled: false,

        },
        grid: {
          show: false,

        },

        colors: ["#16b164"],
        xaxis: {
          name: "Seasons",
          categories: [
            "1 Aug",
            "2 Aug",
            "3 Aug",
            "4 Aug",
            "5 Aug",
            "6 Aug",
            "7 Aug",
            "8 Aug",
            "9 Aug",
            "10 Aug",
            "11 Aug",
            "12 Aug",
            "13 Aug",
            "14 Aug",
            "15 Aug",
          ],

          labels: {
            style: {
              colors: "#7f8283",
            },
          },
        },

        yaxis: {

          labels: {

            style: {
              colors: '#7f8283',
              fontSize: '12px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 400,
              cssClass: 'apexcharts-yaxis-label',
            },

          },

        }
      },
      series: [
        {
          name: "Total",
          data: [10, 20, 8, 15, 10, 20, 15, 23, 20, 30, 25, 40, 30],
        },
      ],
    };
  }

  render() {
    return (
      <div className="card-box pt-3 pb-0 my-0">
        <h4 className="header-title mt-0">Seasons Overview</h4>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height={345}
        />
      </div>
    );
  }
}

export default AreaChart;

import React, { Component } from 'react';
import Chart from "react-apexcharts";


class BarChart extends Component {
    constructor(props) {
        super(props);

        this.state = {

            total: [{
                data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 350
                },
                colors: ["#16b164"],


                plotOptions: {
                    bar: {
                        horizontal: true,
                    }

                },
                dataLabels: {
                    enabled: false,

                },
                grid: {
                    show: false,

                },

                xaxis: {
                    categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
                        'United States', 'China', 'Germany'
                    ],
                    labels: {

                        style: {
                            colors: ['#7f8283'],
                            fontSize: '12px',
                            fontFamily: 'Helvetica, Arial, sans-serif',
                            fontWeight: 400,
                            cssClass: 'apexcharts-xaxis-label',
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


        };
    }

    render() {
        return (
            <div className="col-lg-6 pt-lg-4">
                <div id="chart pt-4">
                    <Chart options={this.state.options} series={this.state.total} type="bar" height={350} />
                </div>
            </div>

        );
    }
}

export default BarChart;
import React from "react";
import { Pie as Donut } from "react-chartjs-2";
import { chartHelpers } from "./Charts";
import dataDonutChart from "./data/donutchart.json";

export class DonutChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataDonutChart: chartHelpers.mergeColorsIntoPieData(this.props.data||dataDonutChart)
    };
  }

  optionsDonut() {
    return {
      cutoutPercentage: (this.props.cutoutPercentage||85),
      legend: {
        display: false,
        position: "bottom",
        labels: {
          pointStyle: "circle",
          usePointStyle: true
        }
      }
    };
  }

  render() {
    return (
      <Donut
        data={chartHelpers.mergeColorsIntoPieData(this.state.dataDonutChart)}
        options={this.props.options||this.optionsDonut()}
      />
    );
  }
}

export default DonutChart;
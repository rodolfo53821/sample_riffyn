import React, { Component } from 'react';
import {ScatterPlot} from 'react-d3-basic';
import Animation from './animation';

  const chartData = require('dsv!../../../../data/dataDistribution.csv');

  const width = 1500,
    height = 300,
    margins = {left: 100, right: 100, top: 50, bottom: 50},
    chartSeries = [
      {
        field: 'mut1',
        name: 'Mut1',
        symbol: 'diamond',
        symbolSize: 6
      },
      {
        field: 'mut2',
        name: 'Mut2',
        symbol: 'cross',
        symbolSize: 5
      },
      {
        field: 'mut3',
        name: 'Mut3',
        symbol: 'cross',
        symbolSize: 4
      }
    ],
    // your x accessor
    x = function(d) {
      return (new Date(d.month.replace('M','/')))
        .getTime();
    },
    xScale = 'time';

export default class GraphContainer extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      animation: new Animation(props)
    };
  }

  componentWillMount() {
    this.state.animation.run('willMount', null);
  }

  componentDidMount() {
    this.state.animation.run('didMount', null);
  }

  render() {
    return (
      <ScatterPlot
        data= {chartData}
        width= {width}
        height= {height}
        margins= {margins}
        chartSeries= {chartSeries}
        x= {x}
        xScale={xScale}
      />
    );
  }
};

import React, { Component } from 'react';
import {ScatterPlot} from 'react-d3-basic';
import Animation from './animation';

  let chartData = require('dsv!../../../../data/data.csv');

  let width = 1500,
    height = 300,
    margins = {left: 100, right: 100, top: 50, bottom: 50},
    // chart series,
    // field: is what field your data want to be selected
    // name: the name of the field that display in legend
    // color: what color is the line
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

    const time = 100;
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

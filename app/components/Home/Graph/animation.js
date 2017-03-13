import * as d3 from "d3";

const COLOR_MAP = {
  a: '#5050ff',
  c: '#e00000',
  g: '#00c000',
  t: '#e6e600',
  '-': 'rgba(0, 0, 0, 0.3)'
};

const runDidMount = (node, transition, props, newProps, callback) => {
  d3.select(node).transition(transition)
    .attr('y', 0)
    .attr('x', props.x)
    .style('opacity', 1)
    .style('fill', COLOR_MAP[props.base])
    .on('end', () => {
      callback && callback();
    });
};

const runWillMount = (node, transition, props, newProps, callback) => {
  d3.select(node).interrupt()
    .transition(transition)
    .attr('y', 100)
    .style('opacity', 0.01)
    .style('fill', COLOR_MAP['-'])
    .on('end', () => {
      callback && callback();
    });
};


const runWillReceiveProps = (node, transition, props, newProps, callback) => {
  d3.select(node).transition(transition)
    .attr('x', newProps.x)
    .style('opacity', 1)
    .style('fill', COLOR_MAP[newProps.base])
    .on('end', () => {
      callback && callback();
    });
};

const ANIMATION_ACTIONS = {
  'didMount': runDidMount,
  'willMount': runWillMount,
  'willReceiveProps': runWillReceiveProps
};

class Animation {
  constructor(props) {
    const timeFrame = 40;
    const time =  props.ind*timeFrame + Math.floor(Math.random()*timeFrame);
    this.transition = d3.transition().duration(time).ease(d3.easeBackOut);
    this.enabled = true;
    this.props = props;
  }

  run(action, node, newProps, callback) {
    const {transition, props} = this;

    if(this.enabled && action in ANIMATION_ACTIONS) {
      ANIMATION_ACTIONS[action].call(null, node, transition, props, newProps, callback);
    }
  }
};

export default Animation;

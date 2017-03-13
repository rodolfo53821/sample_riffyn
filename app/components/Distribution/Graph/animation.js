import * as d3 from "d3";

const COLOR_MAP = {
  a: '#5050ff',
  c: '#e00000',
  g: '#00c000',
  t: '#e6e600',
  '-': 'rgba(0, 0, 0, 0.3)'
};

const runDidMount = (node, transition, props, newProps, callback) => {
  let _node = d3.selectAll('svg path');

  _node.transition(transition)
    .style('display', 'block')
    .delay((d, i) => { return i * 20; })
    .style('opacity', 1)
    .transition(transition)
    .style('opacity', 0.1)
    .transition(transition)
    .style('opacity', 1);;
};

const runWillMount = (node, transition, props, newProps, callback) => {
  let _node = d3.selectAll('svg path');
   _node.transition(transition)
    .style('display', 'none')
    .style('fill', 'white');
};

const ANIMATION_ACTIONS = {
  'didMount': runDidMount,
  'willMount': runWillMount
};

class Animation {
  constructor(props) {
    const time = 40;
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

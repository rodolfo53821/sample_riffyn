import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Animation from './animation';

const COLOR_MAP = {
  a: '#5050ff',
  c: '#e00000',
  g: '#00c000',
  t: '#e6e600',
  '-': 'rgba(0, 0, 0, 0.3)'
};

const heightMap = {
  a: '55',
  c: '50',
  g: '45',
  t: '40',
  '-': '37'
};

export default class GeneRepresentation extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      animation: new Animation(props)
    };
  }

  componentDidMount() {
    let node = ReactDOM.findDOMNode(this);
    this.state.animation.run('didMount', node);
  }

  componentWillReceiveProps(nextProps) {
    
    if (this.props.base != nextProps.base) {
        let node = ReactDOM.findDOMNode(this);
        this.state.animation.run('willReceiveProps', node, nextProps);
    }
 
  }

  componentWillUnmount() {
    let node = ReactDOM.findDOMNode(this);
    this.setState({base: '-'});
    this.state.animation.run('willMount', node);
  }

  getProps() {

    const {rx, ry, width, base, y} = this.props;
    const animationEnabled = this.state.animation.enabled;

    const style = {
      fill: animationEnabled ? COLOR_MAP['-'] : COLOR_MAP[this.props.base]
    }

    let x = animationEnabled ? 0 : this.props.x;

    const height = heightMap[base];

    return {
      style, 
      height, 
      rx, 
      ry, 
      width, 
      x, 
      y
    };

  }

  render() {
    const props = this.getProps();
    
    return (
      <rect  {...props} >
      </rect>
    );
  }
}

GeneRepresentation.propTypes = {
  base: React.PropTypes.oneOf(['a', 'c', 'g', 't', '-']).isRequired,
  ind: React.PropTypes.number.isRequired,
  x: React.PropTypes.number.isRequired,
  y: React.PropTypes.number.isRequired
};

// Specifies the default values for props:
GeneRepresentation.defaultProps = {
  rx: '3',
  ry: '3',
  width: '8'
};

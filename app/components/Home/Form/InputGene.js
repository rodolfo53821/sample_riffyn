import React, { Component } from 'react';
import Input from 'muicss/lib/react/input';

const styles = {
  wrapper: {
    paddingBottom: '2rem'
  }
};

const parseInput = (str) => {
  return str.replace(/[^agtc]/g, '');
};

export default class InputGene extends Component {
  
  constructor(props) {
    super(props);
    
    this.onChangeInput = this.onChangeInput.bind(this);
    this.state = {
      value: parseInput(props.value)
    };
  }

  onChangeInput(event) {
    let value = parseInput(event.target.value);
    this.setState({
      value
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.value !== this.state.value) {
      this.props.onChangeChain(this.props.ele, this.state.value);
    }
  }

  render() {
    
    const {ele} = this.props;

    return (
      <div style={styles.wrapper}>
        <Input
          id={`form_compare_genes-${ele}-input`}
          hint={this.state.value}
          value={this.state.value}
          label={this.props.label}
          onChange={this.onChangeInput}
        />
      </div>
    );
  }
};

InputGene.propTypes = {
  ele: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  onChangeChain: React.PropTypes.func.isRequired,
  value: React.PropTypes.string
};

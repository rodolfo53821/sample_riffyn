import React, { Component } from 'react';
import {Svg} from 'react-d3-core';
import GraphGenes from './GraphGenes';

const styles = {
  tittle: {
    borderBottomColor: 'lightgrey',
    borderBottomStyle: 'inset',
    borderBottomWidth: '1px',
    padding: '0.6rem',
    margin: '1rem 1rem 3.5rem 1rem'
  },
  wrapper: {
    paddingBottom: '7rem'
  }
};

const getMatch = (chain1, chain2) => {
  try{
    let chainMatch = chain1.length < chain2.length ? chain2 : chain1;
    const chainOther = chain1.length >= chain2.length ? chain2 : chain1;
    const chainOtherN = chainOther.length;

    chainMatch = chainMatch.split('').map((ele, ind) => {
      if(ind < chainOtherN ){
        if(ele !== chainOther[ind]) {
          return '-';
        }

        return ele;
      }

      return '-';
    });

    return chainMatch.join('');
  }catch(e) {
    return '';
  }
}

export default class GraphContainer extends Component {

  constructor(props) {
    super(props);

    const genesMatch = getMatch(this.props.chain1Str, this.props.chain2Str);

    this.state = {
      genesMatch
    };

  }

  componentWillReceiveProps(nextProps) {
    const genesMatch = getMatch(nextProps.chain1Str, nextProps.chain2Str);

    this.setState({
      genesMatch
    });
  }

  render() {
    const {chain1Str, chain2Str} = this.props;

    return (
      <div>
        <h2 style={styles.tittle}>Graph</h2>
        <GraphGenes label='Chain 1' genes={chain1Str}/>
        <GraphGenes label='Chain 2' genes={chain2Str}/>
        <GraphGenes label='Match' genes={this.state.genesMatch}/>
      </div>
    );
  }
};

GraphContainer.propTypes = {
  chain1Str: React.PropTypes.string,
  chain2Str: React.PropTypes.string
};

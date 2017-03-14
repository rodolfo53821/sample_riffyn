import React, { Component } from 'react';
import GraphContainer from './Graph/GraphContainer';
import FormCompareGenes from './Form/FormCompareGenes';
import Panel from 'muicss/lib/react/panel';


const styles = {
  inner: {
    padding: '1rem'
  }
};

export default class Home extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      chain1Str: 'agcagctcgcccctcgcccccgggtttcgggtagctcgcccccgggcgccagctcgtcgcccccgggtttcccccgggcccggg',
      chain2Str: 'agctcgagctcgcccccggagctcgagctcgcccccgggttttccgggcaaaatttgcaaaatttccgggccggg'
    }

    this.onChangeChain = this.onChangeChain.bind(this);
  }

  onChangeChain(chain, value) {
    if(`${chain}Str` in this.state) {
      this.setState({
        [`${chain}Str`]: value
      });
    }
  }

  render() {
    return (
      <div id='compare_genes-wrapper'>
        <h1>Compare Genes</h1>
        <div id='compare_genes-inner' style={styles.inner}>
          <Panel className="mui--z4">
            <GraphContainer {...this.state} />
          </Panel>
          <Panel className="mui--z4">
            <FormCompareGenes {...this.state} onChangeChain={this.onChangeChain} />
          </Panel>
        </div>
      </div>
    );
  }
};

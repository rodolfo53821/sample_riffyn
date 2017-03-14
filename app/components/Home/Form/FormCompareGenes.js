import React, { Component } from 'react';
import InputGene from './InputGene';
import Form from 'muicss/lib/react/form';

const styles = {
  tittle: {
    borderBottomColor: 'lightgrey',
    borderBottomStyle: 'inset',
    borderBottomWidth: '1px',
    padding: '0.6rem',
    margin: '1rem 1rem 3.5rem 1rem'
  }
};

export default class FormCompareGenes extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
  	const {chain1Str, chain2Str} = this.props;
    
    return (
      <div id='form_compare_genes-wrapper'>
        <h2 style={styles.tittle}>Genes</h2>
        <Form onSubmit={this.onSubmitForm}>
          <InputGene label='Chain 1' ele='chain1' value={chain1Str} onChangeChain={this.props.onChangeChain}/>
          <InputGene label='Chain 2' ele='chain2' value={chain2Str} onChangeChain={this.props.onChangeChain}/>
        </Form>
      </div>
    );
  }
};

FormCompareGenes.propTypes = {
  chain1Str: React.PropTypes.string,
  chain2Str: React.PropTypes.string,
  onChangeChain: React.PropTypes.func.isRequired
};

import React, { Component } from 'react';
import GeneRepresentation from './GeneRepresentation';
import {Svg} from 'react-d3-core';
import Panel from 'muicss/lib/react/panel';

const styles = {
  wrapper: {
    paddingBottom: '4rem'
  },
  title: {
    paddingBottom: '0.5rem',
    color: 'rgba(0, 0, 0, 0.54)'
  }
};

const getSVG = (chainStr) => {
  return (
    <Svg width={'100%'} height={60} viewBox='0 0 1000 60' margins={{top: 0, right: 0, bottom: 0, left: 0}}>
      {Array.from(chainStr).map((el,ind) => {
        let x = ind*10+5;
        return (<GeneRepresentation key={ind} ind={ind} base={el} x={x} y={10}/>);
      })}
    </Svg>
  );
};

export default class GraphGenes extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    const {genes, label} = this.props;

    return (
      <div style={styles.wrapper}>
        <div className='mui--text-caption' style={styles.title}>{label}</div>
        <Panel>
          {getSVG(genes)}
        </Panel>
      </div>
    );
  }
};

GraphGenes.propTypes = {
  genes: React.PropTypes.string,
  label: React.PropTypes.string
};

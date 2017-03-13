import React, { Component } from 'react';
import GraphContainer from './Graph/GraphContainer';
import Panel from 'muicss/lib/react/panel';


const styles = {
  inner: {
    padding: '1rem'
  }
};

export default class Distribution extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='distribution-wrapper'>
        <h1>Distribution</h1>
        <div id='distribution-inner' style={styles.inner}>
          <Panel className="mui--z4">
            <GraphContainer {...this.state} />
          </Panel>
        </div>
      </div>
    );
  }
};

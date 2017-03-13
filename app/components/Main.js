import React, { Component } from 'react'
import Header from './Header'

const styles = {
  content: {
    padding: '5rem',
    backgroundColor: 'rgba(112, 112, 112, 0.08)'
  }
};

export default class Main extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <div id='main-wrapper'>
        <div id='main-header'>
          <Header {...this.props}/>
        </div>
        <div id='main-content' style={styles.content}>
          {this.props.children}
        </div>
      </div>
      );
  }
};

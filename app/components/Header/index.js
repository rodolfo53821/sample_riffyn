import React, { Component } from 'react';
import TabsMenu from './TabsMenu';

const styles = {
  wrapperStyle: {
    width: '100%'
  },
  innerStyle: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem',
    backgroundColor: 'rgb(44, 117, 165)'
  },
  imageStyle: {
    height: '6rem',
    width: '13rem'
  },
  title: {
    margin: '1rem',
    color: 'white'
  }
};

export default class Header extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div style={styles.wrapperStyle}>
        <div id='header-img' style={styles.innerStyle}>
          <img 
            style={styles.imageStyle} 
            src="http://static1.squarespace.com/static/53f6dface4b050d619ba3249/t/55e7c173e4b06519fea5b6e5/1488865266995/"
            alt="Riffyn Logo"
          />
          <h1 style={styles.title}>Sample App</h1>
        </div>
        <TabsMenu {...this.props}/>
      </div>
    );
  }
};

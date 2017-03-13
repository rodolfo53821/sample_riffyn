import React, { Component } from 'react';
import Panel from 'muicss/lib/react/panel';

const styles = {
  inner: {
    display: 'inline-flex',
    justifyContent: 'center',
    width: '100%'
  }
};

const formatText = (strings, ...args) => {
  let stringsArray = strings.join(" ").split(".");

  return stringsArray.map((el, ind) => {
    return (
      <h4 key={ind}>
        {el}
      </h4>
    );
  })
};

export default class About extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='about-wrapper'>
        <h1>About</h1>
        <div id='about-inner' style={styles.inner}>
          <Panel className="mui--z4" style={styles.content}>
            {formatText`Portifolio for Riffyn. 
            This is a test only application.
            This application is created to demonstrated some functionalities using React and D3.
            Webpack webserver provides browser content.
            Techs: React, React-router, React-d3, d3, React-mui, Webpack.
            No redux used neither storing application state.
            Unit tests are not implemented yet.
            PS: SVG ELEMENTS ARE NOT RESPONSIVE DUO TO React-d3 package.
            Developed by: Rodolfo Ladeira`}
          </Panel>
        </div>
      </div>
    );
  }
};

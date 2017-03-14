import React, { Component } from 'react';
import Tabs from 'muicss/lib/react/tabs';
import Tab from 'muicss/lib/react/tab';
import {browserHistory} from "react-router";

const MAP_INDEX = {
  '/': 0,
  '/distribution': 1,
  '/about': 2
};

export default class TabsMenu extends React.Component {
  
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(i, value, tab, ev) {
    window.location = value;
  }

  render() {

    const {
      location: {
        pathname = '/'
      } = {}
    } = this.props;

    return (
      <Tabs onChange={this.onChange} defaultSelectedIndex={MAP_INDEX[pathname]}>
        <Tab value="/" key={1} label="Compare"></Tab>
        <Tab value="/distribution" key={2} label="Distribution"></Tab>
        <Tab value="/about" key={3} label="About"></Tab>
      </Tabs>
    );
  }
};

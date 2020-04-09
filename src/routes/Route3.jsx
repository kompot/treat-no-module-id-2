import React from 'react';

import { Component1 } from '../components/module/Component1';
import { Component3 } from '../components/module/Component3';

export default class Route3 extends React.Component {
  render() {
    return (
      <>
        <Component1 />
        <Component3 />
      </>
    );
  }
}

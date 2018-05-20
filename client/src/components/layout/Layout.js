import React, { Component } from 'react';

import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';

class Layout extends Component {
  render(){
    return (
      <div>
        <Header />
        <Sidebar />
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Layout;

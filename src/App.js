import React, { Component } from 'react';
import './App.css';

import SideDrawer from './components/Navigation/SideDrawer/SideDrawer';
import Backdrop from './components/Navigation/Backdrop/Backdrop';
import Toolbar from './components/Navigation/Toolbar/Toolbar';

import Main from './Main';

class App extends Component {
  state = {
    SideDrawerOpen: false
  };
  
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {SideDrawerOpen: !prevState.SideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({SideDrawerOpen: false})
  };

  render() {
    let backdrop;
    
    if (this.state.SideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }

    return (
      <div style={{height: '100%'}} className="App">
        <Toolbar drawerToggleClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.SideDrawerOpen}/>
        {backdrop}
        <main style={{ marginTop: '64px'}}>
          <p>This is the page content</p>
          <Main />
        </main>
      </div>
    );
  }
}

export default App;

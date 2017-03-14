import React, { Component } from 'react';
import logo from './logo.svg';


// our custom import
import TopHeader from './user/TopHeader';
import SideNavLeft from './user/SideNavLeft';
import SideNavRight from './user/SideNavRight';
import MainContainer from './user/MainContainer';

class App extends Component {
  render() {
    return (
      <div id="sd-full-site" className="sd-full-site">

        <div>
          <TopHeader />
        </div>
        
        <div>
          <SideNavLeft />
        </div>

        <div>
          <SideNavRight />
        </div>

        <div>
          <MainContainer />
        </div>

        <footer>
        </footer>

      </div>
    );
  }
}

export default App;

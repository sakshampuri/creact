import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import Main from './components/MainComponent';
import {BrowserRouter} from "react-router-dom";

library.add(fas, fab);

class App extends Component {

  render() {
    return(
        <BrowserRouter>
          <div>
            <Main />
          </div>
        </BrowserRouter>
    );
  }
}

export default App;

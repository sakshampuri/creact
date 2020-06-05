import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {Provider} from 'react-redux';
import {ConfigureStore} from "./redux/configureStore";

import Main from './components/MainComponent';
import {BrowserRouter} from "react-router-dom";

library.add(fas, fab);

const store = ConfigureStore();

class App extends Component {

  render() {
    return(
        <Provider store={store}>
            <BrowserRouter>
              <div>
                <Main />
              </div>
            </BrowserRouter>
        </Provider>
    );
  }
}

export default App;

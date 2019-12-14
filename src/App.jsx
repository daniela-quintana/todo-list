import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Home from './containers/home/Home';


function App() {
    return (
      <div className="App">
        <div className="container" style={{ marginTop: "80px"}} >
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"></div>
              <Provider store={store}>
                <Home />
              </Provider>
            </div>
          </div>
        </div>
    );
  }


export default App;

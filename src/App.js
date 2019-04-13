import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "./redux/store/configure-store";
import PunctationContainer from "./containers/PunctationContainer";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PunctationContainer/>
      </Provider>
    );
  }
}

export default App;

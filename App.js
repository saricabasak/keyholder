import React from "react";
import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducers/index";
import PasswordHeader from "./components/PasswordHeader";
import Navigator from "./navigation/Navigator";

const store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PasswordHeader/>
        <Navigator/>
      </Provider>
    );
  }
}

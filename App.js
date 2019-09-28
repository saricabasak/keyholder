import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MainPage from "./components/MainPage";
import PasswordItemDetail from "./components/PasswordItemDetail";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducers/index";



const AppNavigator = createStackNavigator(
  
  {
    MainPage: MainPage,
    PasswordItemDetail: PasswordItemDetail
  }
);

const store = createStore(reducer);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

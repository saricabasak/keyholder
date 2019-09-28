import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MainPage from "./components/MainPage";
import PasswordItemDetail from "./components/PasswordItemDetail";

const AppNavigator = createStackNavigator(
  {
    MainPage:MainPage,
    PasswordItemDetail:  PasswordItemDetail
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer/>;
  }
}

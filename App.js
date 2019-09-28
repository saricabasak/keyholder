import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Icon } from 'native-base';
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import PasswordItemDetail from "./components/PasswordItemDetail";

const AppNavigator = createStackNavigator(
  {
    HomePage:HomePage,
    PasswordItemDetail:  PasswordItemDetail
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    ProfilePage: {
      screen: ProfilePage,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='person' />
        )
      }
    },
    HomePage: {
      screen: HomePage,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='home' />
        )
      }
    },
    PasswordItemDetail: {
      screen: PasswordItemDetail,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='save' />
        )
      }
    }
  }, {
    initialRouteName: "HomePage",
    tabBarOptions: {
      showIcon: true,
      showLabel: false
    }
  }
);

const AppContainer = createAppContainer(TabNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer/>;
  }
}

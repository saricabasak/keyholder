import React from "react";
import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { Icon } from 'native-base';
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import PasswordPage from "../pages/PasswordPage";

const TabNavigator = createMaterialTopTabNavigator(
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
    PasswordPage: {
      screen: PasswordPage,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='ios-add-circle' />
        )
      }
    }
  }, {
    initialRouteName: "HomePage",
    tabBarPosition :'bottom',
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      indicatorStyle: {
        backgroundColor: "black"
      },
      style: {
        backgroundColor: "whitesmoke"
      }
    },
  }
);

const AppContainer = createAppContainer(TabNavigator);

export default class Navigator extends React.Component {
  render() {
    return (
      <AppContainer/>
    )
  }
};

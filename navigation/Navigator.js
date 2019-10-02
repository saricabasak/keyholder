import React from "react";
import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { Icon } from 'native-base';
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import PasswordPage from "../pages/PasswordPage";
import NavigationService from './NavigationService';

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
        ),
        tabBarOnPress: ({ navigation, defaultHandler }) => {
          navigation.setParams({
            passworditem: {
              id:0,
              name: '',
              username: '',
              password: ''
            }
          });
          defaultHandler();
        }
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
      <AppContainer
        ref={navigatorRef => {
          NavigationService.setTabNavigator(navigatorRef);
        }}
      />
    )
  }
};

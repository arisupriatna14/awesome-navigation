import { createStackNavigator } from 'react-navigation-stack';

import { HomeScreen } from '../../ScreenConfig/ScreenConfig';

const HomeTabNavigator = (headerNavigationOption, tabNavigatorConfig) => createStackNavigator({
  Home: {
    screen: HomeScreen,
  }
}, tabNavigatorConfig);

export { HomeTabNavigator };

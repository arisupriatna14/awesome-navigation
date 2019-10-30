import { createStackNavigator } from 'react-navigation-stack';

import { AccountScreen } from '../../ScreenConfig/ScreenConfig';

const AccountTabNavigator = (headerNavigationOption, tabNavigatorConfig) => createStackNavigator({
  Account: {
    screen: AccountScreen,
  }
}, tabNavigatorConfig);

export { AccountTabNavigator };

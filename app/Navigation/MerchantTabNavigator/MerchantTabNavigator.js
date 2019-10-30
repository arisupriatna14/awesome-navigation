import { createStackNavigator } from 'react-navigation-stack';

import { MerchantScreen } from '../../ScreenConfig/ScreenConfig';

const MerchantTabNavigator = (headerNavigationOption, tabNavigatorConfig) => createStackNavigator({
  Merchant: {
    screen: MerchantScreen,
  }
}, tabNavigatorConfig);

export { MerchantTabNavigator };

import { createStackNavigator } from 'react-navigation-stack';

import { FAQScreen } from '../../ScreenConfig/ScreenConfig';

const FaqTabNavigator = (headerNavigationOption, tabNavigatorConfig) => createStackNavigator({
  Faq: {
    screen: FAQScreen,
  }
}, tabNavigatorConfig);

export { FaqTabNavigator };

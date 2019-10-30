import { createStackNavigator } from 'react-navigation-stack';

import { InboxScreen } from '../../ScreenConfig/ScreenConfig';

const InboxTabNavigator = (headerNavigationOption, tabNavigatorConfig) => createStackNavigator({
  Inbox: {
    screen: InboxScreen,
  }
}, tabNavigatorConfig);

export { InboxTabNavigator };

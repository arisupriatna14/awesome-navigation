import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import {
  HomeTabNavigatorStack,
  MerchantTabNavigatorStack,
  FaqTabNavigatorStack,
  InboxTabNavigatorStack,
  AccountTabNavigatorStack
} from '../RouteConfiguration/RouteConfiguration';
import {
  HomeTabNavigationOptions,
  MerchantTabNavigationOptions,
  FaqTabNavigationOptions,
  InboxTabNavigationOptions,
  AccountTabNavigationOptions
} from '../TabBarNavigationOptions';

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeTabNavigatorStack,
    navigationOptions: HomeTabNavigationOptions
  },
  Merchant: {
    screen: MerchantTabNavigatorStack,
    navigationOptions: MerchantTabNavigationOptions
  },
  FAQ: {
    screen: FaqTabNavigatorStack,
    navigationOptions: FaqTabNavigationOptions
  },
  Inbox: {
    screen: InboxTabNavigatorStack,
    navigationOptions: InboxTabNavigationOptions
  },
  Account: {
    screen: AccountTabNavigatorStack,
    navigationOptions: AccountTabNavigationOptions
  }
}, {
  order: ['Home', 'Merchant', 'FAQ', 'Inbox', 'Account'],
  tabBarOptions: {
    safeAreaInset: {
      bottom: 'always'
    }
  },
  navigationOptions: ({ navigation }) => {
    const { routeName } = navigation.state.routes[navigation.state.index];
    return {
      headerTitle: routeName
    }
  }
});

const MainTabNavigator = createStackNavigator({
  Home: {
    screen: TabNavigator
  }
}, {
  headerMode: 'none'
});

export { MainTabNavigator };

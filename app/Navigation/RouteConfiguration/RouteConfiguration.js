import React from 'react';

import { HomeTabNavigator } from '../HomeTabNavigator/HomeTabNavigator';
import { MerchantTabNavigator } from '../MerchantTabNavigator/MerchantTabNavigator';
import { FaqTabNavigator } from '../FaqTabNavigator/FaqTabNavigator';
import { InboxTabNavigator } from '../InboxTabNavigator/InboxTabNavigator';
import { AccountTabNavigator } from '../AccountTabNavigator/AccountTabNavigator';

const tabNavigatorConfig = {
  swipeEnabled: false,
  headerMode: 'screen'
};

const headerNavigationOptions = ({ navigation }) => {
  return {
    header: null
  };
};

const HomeTabNavigatorStack = HomeTabNavigator(headerNavigationOptions, tabNavigatorConfig);
const MerchantTabNavigatorStack = MerchantTabNavigator(headerNavigationOptions, tabNavigatorConfig);
const FaqTabNavigatorStack = FaqTabNavigator(headerNavigationOptions, tabNavigatorConfig);
const InboxTabNavigatorStack = InboxTabNavigator(headerNavigationOptions, tabNavigatorConfig);
const AccountTabNavigatorStack = AccountTabNavigator(headerNavigationOptions, tabNavigatorConfig);

export {
  HomeTabNavigatorStack,
  MerchantTabNavigatorStack,
  FaqTabNavigatorStack,
  InboxTabNavigatorStack,
  AccountTabNavigatorStack
};

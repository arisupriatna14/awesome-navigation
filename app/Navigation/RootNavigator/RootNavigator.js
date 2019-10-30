import { createAppContainer } from 'react-navigation';

import { MainTabNavigator } from '../MainTabNavigator/MainTabNavigator';

export const RootNavigator = createAppContainer(MainTabNavigator);
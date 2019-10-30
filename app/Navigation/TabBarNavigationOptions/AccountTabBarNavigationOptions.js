import { MainTabBarIcon } from '../../Modules/MainTabBarIcon/MainTabBarIcon';
import { Images } from '../../Themes/Images/Images';
import { Styles } from './TabBarNavigationOptions.style';

const AccountTabNavigationOptions = ({ navigation }) => {
  return {
    title: 'Account',
    tabBarIcon: MainTabBarIcon(
      Images.icTabAccountActive,
      Images.icTabAccountInctive,
      Styles.iconAccount
    )
  };
};

export { AccountTabNavigationOptions };

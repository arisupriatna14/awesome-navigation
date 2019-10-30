import { MainTabBarIcon } from '../../Modules/MainTabBarIcon/MainTabBarIcon';
import { Images } from '../../Themes/Images/Images';
import { Styles } from './TabBarNavigationOptions.style';

const HomeTabNavigationOptions = ({ navigation }) => {
  return {
    title: 'Home',
    tabBarIcon: MainTabBarIcon(
      Images.icTabHomeActive,
      Images.icTabHomeInctive,
      Styles.iconHome
    )
  };
};

export { HomeTabNavigationOptions };

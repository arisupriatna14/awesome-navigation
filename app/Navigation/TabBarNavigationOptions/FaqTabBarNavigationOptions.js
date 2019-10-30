import { MainTabBarIcon } from '../../Modules/MainTabBarIcon/MainTabBarIcon'
import { Images } from '../../Themes/Images/Images';
import { Styles } from './TabBarNavigationOptions.style';

const FaqTabNavigationOptions = ({ navigation }) => {
  return {
    title: 'FAQ',
    tabBarIcon: MainTabBarIcon(
      Images.icTabFaqActive,
      Images.icTabFaqInctive,
      Styles.iconFaq
    )
  };
};

export { FaqTabNavigationOptions };

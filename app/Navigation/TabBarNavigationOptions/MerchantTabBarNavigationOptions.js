import { MainTabBarIcon } from '../../Modules/MainTabBarIcon/MainTabBarIcon';
import { Images } from '../../Themes/Images/Images';
import { Styles } from './TabBarNavigationOptions.style';

const MerchantTabNavigationOptions = ({ navigation }) => {
  return {
    title: 'Merchant',
    tabBarIcon: MainTabBarIcon(
      Images.icTabMerchantActive,
      Images.icTabMerchantInctive,
      Styles.iconBoostSpot
    )
  };
};

export { MerchantTabNavigationOptions };

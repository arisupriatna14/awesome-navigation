import { MainTabBarIcon } from '../../Modules/MainTabBarIcon/MainTabBarIcon'
import { Images } from '../../Themes/Images/Images';
import { Styles } from './TabBarNavigationOptions.style';

const InboxTabNavigationOptions = ({ navigation }) => {
  return {
    title: 'Inbox',
    tabBarIcon: MainTabBarIcon(
      Images.icTabInboxActive,
      Images.icTabInboxInctive,
      Styles.iconInbox
    )
  };
};

export { InboxTabNavigationOptions };

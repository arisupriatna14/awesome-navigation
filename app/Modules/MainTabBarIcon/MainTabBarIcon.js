import React from 'react';
import { Image } from 'react-native';

const MainTabBarIcon = (iconActive, iconInactive, styleIcon) => (params) => {
  const iconTab = params.focused ? iconActive : iconInactive;

  return (
    <Image
      source={iconTab}
      style={styleIcon}
    />
  );
};

export { MainTabBarIcon };

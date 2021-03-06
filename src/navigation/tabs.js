/**
 * Tabs Scenes
 */
import React from 'react';
import { Scene } from 'react-native-router-flux';

// Consts and Libs
import { AppConfig } from '@constants/';
import { AppStyles, AppSizes } from '@theme/';

// Components
import { TabIcon } from '@ui/';
import { NavbarMenuButton } from '@containers/ui/NavbarMenuButton/NavbarMenuButtonContainer';
import { NavbarSettingButton } from '@containers/ui/NavbarSettingButton/NavbarSettingButtonContainer';

// Scenes
import Placeholder from '@components/general/Placeholder';
import Error from '@components/general/Error';
import StyleGuide from '@containers/StyleGuideView';
import MsgCenterView from '@containers/MsgCenter/MsgCenterView';

const navbarPropsTabs = {
  ...AppConfig.navbarProps,
  renderLeftButton: () => <NavbarMenuButton />,
  renderRightButton: () => <NavbarSettingButton />,
  sceneStyle: {
    ...AppConfig.navbarProps.sceneStyle,
    paddingBottom: AppSizes.tabbarHeight,
  },
};

/* Routes ==================================================================== */
const scenes = (
  <Scene key={'tabBar'} tabs tabBarIconContainerStyle={AppStyles.tabbar} pressOpacity={0.95}>

    <Scene
      key={'MsgCenterView'}
      {...navbarPropsTabs}
      title={'MsgCenter'}
      component={MsgCenterView}
      icon={props => TabIcon({ ...props, icon: 'speaker-notes' })}
      analyticsDesc={'Placeholder: MsgCenterView'}
    />
      <Scene
      key={'timeline'}
      {...navbarPropsTabs}
      title={'Coming Soon'}
      component={Placeholder}
      icon={props => TabIcon({ ...props, icon: 'timeline' })}
      analyticsDesc={'Placeholder: Coming Soon'}
    />

    <Scene
      key={'error'}
      {...navbarPropsTabs}
      title={'Example Error'}
      component={Error}
      icon={props => TabIcon({ ...props, icon: 'error' })}
      analyticsDesc={'Error: Example Error'}
    />

    <Scene
      key={'styleGuide'}
      {...navbarPropsTabs}
      title={'Style Guide'}
      component={StyleGuide}
      icon={props => TabIcon({ ...props, icon: 'search' })}
      analyticsDesc={'StyleGuide: Style Guide'}
    />
  </Scene>
);

export default scenes;

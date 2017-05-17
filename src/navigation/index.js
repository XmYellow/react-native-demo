/**
 * App Navigation
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React from 'react';
import { Actions, Scene, ActionConst } from 'react-native-router-flux';

// Consts and Libs
import { AppConfig } from '@constants/';

// Components
import Drawer from '@containers/ui/DrawerContainer';

// Scenes
import AppLaunch from '@containers/Launch/LaunchContainer';
import Placeholder from '@components/general/Placeholder';
import Setting from '@containers/Setting/SettingView';
import MsgCenter from '@containers/MsgCenter/MsgCenterView';
import MsgDetail from '@containers/MsgDetail/MsgDetailView';
import AuthScenes from './auth';
import TabsScenes from './tabs';

/* Routes ==================================================================== */
export default Actions.create(
  <Scene key={'root'} {...AppConfig.navbarProps}>
    <Scene
      hideNavBar
      key={'splash'}
      component={AppLaunch}
      analyticsDesc={'AppLaunch: Launching App'}
    />

    {/* Auth */}
    {AuthScenes}

    {/* Main App */}
    <Scene key={'app'} {...AppConfig.navbarProps} title={AppConfig.appName} hideNavBar={false} type={ActionConst.RESET}>
      {/* Drawer Side Menu */}
      <Scene key={'home'} component={Drawer} initial={'tabBar'}>
        {/* Tabbar */}
        {TabsScenes}
      </Scene>

      {/* General */}
      <Scene
        clone
        key={'comingSoon'}
        title={'Coming Soon'}
        component={Placeholder}
        analyticsDesc={'Placeholder: Coming Soon'}
      />
      <Scene
        clone
        key={'setting'}
        title={'设置'}
        component={Setting}
        analyticsDesc={'设置'}
      />
        <Scene
        clone
        key={'msgcenter'}
        title={'消息中心'}
        component={MsgCenter}
        analyticsDesc={'消息中心'}
      />
        <Scene
        clone
        key={'msgdetail'}
        title={'消息详情'}
        component={MsgDetail}
        analyticsDesc={'消息详情'}
      />
    </Scene>
  </Scene>
);

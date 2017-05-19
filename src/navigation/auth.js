import React from 'react';
import { Scene, ActionConst } from 'react-native-router-flux';

// Consts and Libs
import { AppConfig } from '@constants/';
import { View } from 'react-native';
// Scenes
import Authenticate from '@containers/auth/AuthenticateView';
import AuthWebView from '@containers/auth/WebView';
import AuthLogin from '@containers/auth/Login/LoginContainer';

/* Routes ==================================================================== */
const scenes = (
  <Scene key={'authenticate'}>
    <Scene
      hideNavBar
      key={'authLanding'}
      component={Authenticate}
      type={ActionConst.RESET}
      analyticsDesc={'Authenticate: Authentication'}
    />
    <Scene
      {...AppConfig.navbarProps}
      key={'login'}
      title={'Login'}
      clone
      component={AuthLogin}
      analyticsDesc={'AuthLogin: Login'}
    />
  </Scene>
);

export default scenes;


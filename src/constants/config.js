/* global __DEV__ */
import { AppColors, AppStyles, AppSizes } from '@theme/';

export default {
  // App Details
  appName: 'ReactNativeApp',

  // Build Configuration - eg. Debug or Release?
  DEV: __DEV__,

  // Google Analytics - uses a 'dev' account while we're testing
  gaTrackingId: (__DEV__) ? 'UA-84284256-2' : 'UA-84284256-1',

  // URLs
  urls: {
    resetPassword: 'https://github.com/XmYellow',
    signUp: 'https://github.com/XmYellow',
  },

  // Navbar Props
  navbarProps: {
    hideNavBar: false,
    titleStyle: AppStyles.navbarTitle,
    navigationBarStyle: AppStyles.navbar,
    leftButtonIconStyle: AppStyles.navbarButton,
    rightButtonIconStyle: AppStyles.rightIcon,
    sceneStyle: {
      backgroundColor: AppColors.background,
      paddingTop: AppSizes.navbarHeight,
    },
  },
};

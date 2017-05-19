/**
 * Navbar Menu Button
 *
 */
import React, { PropTypes } from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
/* Component ==================================================================== */
const NavbarSettingButton = ({ toggleSideMenu }) => (
  <TouchableOpacity
    onPress={Actions.setting}
    activeOpacity={0.7}
    style={{ top: -4 }}
    hitSlop={{ top: 7, right: 7, bottom: 7, left: 7 }}
  >
    <Icon
        name='cog'
        type='font-awesome'
        color='#fff'
         />
  </TouchableOpacity>
);
NavbarSettingButton.propTypes = {
  toggleSideMenu: PropTypes.func.isRequired,
};

/* Export Component ==================================================================== */
export default NavbarSettingButton;

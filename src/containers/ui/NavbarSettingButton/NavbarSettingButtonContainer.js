/**
 * Navbar Elements
 *
 */
import { connect } from 'react-redux';

// Actions
import * as SideMenuActions from '@redux/sidemenu/actions';

// The component we're mapping to
import NavbarSettingButtonRender from './NavbarSettingButtonView';

// What data from the store shall we send to the component?
const mapStateToProps = () => ({});

// Any actions to map to the component?
const mapDispatchToProps = {
  toggleSideMenu: SideMenuActions.toggle,
};

/* Export Component ==================================================================== */
exports.NavbarSettingButton = connect(mapStateToProps, mapDispatchToProps)(NavbarSettingButtonRender);

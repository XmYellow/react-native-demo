import { connect } from 'react-redux';

// Actions
import * as UserActions from '@redux/user/actions';

// The component we're mapping to
import SettingRender from './SettingView';

// What data from the store shall we send to the component?
const mapStateToProps = state => ({
    value: state.value
});

// Any actions to map to the component?
const mapDispatchToProps = {
    value: UserActions.value
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingRender);

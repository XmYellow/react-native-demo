/**
 * Created by Administrator on 2017/5/8.
 */
import { connect } from 'react-redux';

// Actions
import * as MessageActions from '@redux/messages/actions';

// The component we're mapping to
import MsgCenterRender from './MsgCenterView';

// What data from the store shall we send to the component?
const mapStateToProps = state => ({
    messages: state.messages
});

// Any actions to map to the component?
const mapDispatchToProps = {
    getMessages: MessageActions.getMessages
};

export default connect(mapStateToProps, mapDispatchToProps)(MsgCenterRender);

import AppUtil from '@lib/util';

// Set initial state
export const initialState = {
  messages: []
};

export default function messageReducer(state = initialState, action) {
  switch (action.type) {
    case 'MESSAGES_REPLACE': {
      let messages = [];
      console.info("+++++++++++")
      console.info(action.data)
      if (action.data && typeof action.data === 'object') {
        message = action.data.map(item => ({
         title:item.title
        }));
      }

      return {
        ...state,
        messages,
        loading:false
      };
    }
    default:
      return state;
  }
}

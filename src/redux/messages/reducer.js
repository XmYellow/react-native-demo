import AppUtil from '@lib/util';

// Set initial state
export const initialState = {
  messages: [],
};

export default function messageReducer(state = initialState, action) {
  switch (action.type) {
    case 'MESSAGES_REPLACE': {
      let messages = [];

      // Pick out the items to keep
      if (action.data && typeof action.data === 'object') {
        message = action.data.map(item => ({
          //id: item.id,
          //name: AppUtil.htmlEntitiesDecode(item.name),
          //slug: AppUtil.htmlEntitiesDecode(item.slug),
          //description: AppUtil.htmlEntitiesDecode(item.description),
          //count: item.count,
        }));
      }

      return {
        ...state,
        messages,
      };
    }
    default:
      return state;
  }
}

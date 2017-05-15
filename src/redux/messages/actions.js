import AppAPI from '@lib/api';

export function getMessages() {
  return dispatch =>
    AppAPI.messages.get()
      .then((res) => {
        dispatch({
          type: 'MESSAGES_REPLACE',
          data: res,
        });
      });
}

export function reset() {
  return {
    type: 'MESSAGES_RESET',
  };
}

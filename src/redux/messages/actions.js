import AppAPI from '@lib/api';

export function getMessages() {
  return dispatch =>
      fetch("http://rapapi.org/mockjsdata/18498/meals")
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

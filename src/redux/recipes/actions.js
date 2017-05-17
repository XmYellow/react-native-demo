import AppAPI from '@lib/api';

export function getMeals() {
    return dispatch => {
        fetch("http://rapapi.org/mockjsdata/18498/meals")
            .then((response) => response.json())
            .then(res => {
                dispatch({
                    type: 'MEALS_REPLACE',
                    data: res
                });
            })
            .catch((err) => {
                console.log(err)
            });
    }
}

export function reset() {
  return {
    type: 'MEALS_RESET'
  };
}

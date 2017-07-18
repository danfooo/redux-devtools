import * as types from '../constants/ActionTypes';

export function getSuggestions(text) {
  console.log('suggestActionDispatch', text, 'types.GET_SUGGESTIONS', types.GET_SUGGESTIONS);
  return {
    type: types.GET_SUGGESTIONS,
    text
  };
}

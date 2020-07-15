export const CHANGE_TEXT = 'CHANGE_TEXT';
export const SET_SUGGESTIONS = 'SET_SUGGESTIONS';

export function changeText(text) {
  return {
    type: CHANGE_TEXT,
    payload: text,
  };
}

export function setSuggestions(suggestions) {
  return {
    type: SET_SUGGESTIONS,
    payload: suggestions,
  };
}

const initialState = {
  text: '',
  suggestions: [],
};

export default function rootReducer(state = initialState, action) {
  if (action.type === CHANGE_TEXT) {
    return {
      ...state,
      text: action.payload,
    };
  }

  if (action.type === SET_SUGGESTIONS) {
    return {
      ...state,
      suggestions: action.payload,
    };
  }

  return state;
}

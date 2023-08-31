export const INITIAL_STATE = {
  target: null,
};

export function Reducer(state, action) {
  switch (action.type) {
    case "SEARCH_TERM":
      return {
        ...state,
        term: action.term,
      };

    default:
      return state;
  }
}

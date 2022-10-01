import { SEARCH_SKILLS_REQUEST, SEARCH_SKILLS_FAILURE,
         SEARCH_SKILLS_SUCCESS, CHANGE_SEARCH_FIELD } from '../actions/actionTypes';

const initialState = {
  items: [],
  loading: false,
  error: null,
  search: ''
}

export default function skillsReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_SKILLS_REQUEST:
      return {...state, items: [], loading: true, error: null};
    case SEARCH_SKILLS_FAILURE:
      return {...state, items: [], loading: false, error: action.payload};
    case SEARCH_SKILLS_SUCCESS:
      return {...state, items: action.payload, loading: false, error: null};
    case CHANGE_SEARCH_FIELD:
      return {...state, search: action.payload};
    default:
      return state;
  }
}

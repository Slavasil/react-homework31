import { SEARCH_SKILLS_REQUEST, SEARCH_SKILLS_FAILURE,
         SEARCH_SKILLS_SUCCESS, CHANGE_SEARCH_FIELD } from './actionTypes';

export const searchSkillsRequest = query => (
  {type: SEARCH_SKILLS_REQUEST, payload: query}
);
export const searchSkillsFailure = error => (
  {type: SEARCH_SKILLS_FAILURE, payload: error}
);
export const searchSkillsSuccess = result => (
  {type: SEARCH_SKILLS_SUCCESS, payload: result}
);
export const changeSearchField = query => (
  {type: CHANGE_SEARCH_FIELD, payload: query}
);

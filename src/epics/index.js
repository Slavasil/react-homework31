import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, filter, debounceTime, switchMap, retry, catchError, from } from 'rxjs';
import { CHANGE_SEARCH_FIELD, SEARCH_SKILLS_REQUEST } from '../actions/actionTypes';
import { searchSkillsRequest, searchSkillsFailure,
         searchSkillsSuccess } from '../actions';

export const changeSearchEpic = actionStream => actionStream.pipe(
  ofType(CHANGE_SEARCH_FIELD),
  map(action => action.payload.trim()),
  debounceTime(100),
  map(searchSkillsRequest)
);
export const searchSkillsEpic = actionStream => actionStream.pipe(
  ofType(SEARCH_SKILLS_REQUEST),
  map(action => action.payload),
  switchMap(query => {
    if (query.trim() !== '') {
      return ajax(`${process.env.REACT_APP_SEARCH_URL}?q=${query}`).pipe(
        retry(10),
        map(load => load.response)
      );
    } else {
      return from([ [] ]);
    }
  }),
  map(result => searchSkillsSuccess(result))
);

import {SEARCH_RESULTS} from '../actions/types.js';

export const SearchResultsReducer = function(state=[],action){
    switch(action.type){
        case SEARCH_RESULTS:  return Object.assign([],action.payload);
                              break;
        default            :  return state;
                              break;
    }
}
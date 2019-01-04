import {LOGIN,SIGNUP,LOGIN_ERROR,SIGNUP_ERROR,LOG_OUT} from '../actions/types.js'

/*
user : {},
    errors:[],
    searchFieldsHome:{},
    searchResults:[]
*/
export const UserProfileReducer = function(state = {},action){
    
    switch(action.type){
        
        case LOGIN      : return Object.assign({},state,action.payload);
                          break;
        case SIGNUP     : return Object.assign({},state,action.payload);
                          break;
        case LOG_OUT    : return Object.assign({});
                          break;
        default         : return state;
                          break;
    }
}

export const LoginSignUpErrorReducer = function(state=[],action){
    switch(action.type){

        case LOGIN_ERROR    : return Object.assign([], state, action.payload);
                              break;
        case SIGNUP_ERROR   : return Object.assign([], state, action.payload);
                              break;
        case LOG_OUT        : return Object.assign([]);
                              break;
        default             : return state;
                              break;
    }
}
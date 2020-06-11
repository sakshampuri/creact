import * as ActionTypes from './ActionTypes';
import {ADD_COMMENTS, COMMENTS_FAILED} from "./ActionTypes";

export const Comments = (state = {
    errMsg: null,
    comments: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            let comment = action.payload;
            return {...state, comments: state.comments.concat(comment)};
        case ADD_COMMENTS:
            return {
                ...state,
                errMsg: null,
                comments: action.payload
            };
        case COMMENTS_FAILED:
            return {
                ...state,
                errMsg: action.payload,
                comments: []
            };
        default:
            return state;
    }
};
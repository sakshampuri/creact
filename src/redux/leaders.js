import {ADD_LEADERS, LEADERS_FAILED, LEADERS_LOADING} from "./ActionTypes";


export const Leaders = (state ={
    isLoading: true,
    errMsg: null,
    leaders: []
} , action) => {
    switch (action.type) {
        case ADD_LEADERS:
            return {
                ...state,
                isLoading: false,
                errMsg: null,
                leaders: action.payload
            };

        case LEADERS_LOADING:
            return {
                ...state,
                isLoading: true,
                errMsg: null,
                leaders: []
            };

        case LEADERS_FAILED:
            return {
                ...state,
                isLoading: false,
                errMsg: action.payload,
                leaders: []
            };
        default:
            return state;
    }
};
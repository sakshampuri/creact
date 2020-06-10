import {ADD_PROMOS, PROMOS_FAILED, PROMOS_LOADING} from "./ActionTypes";

export const Promotions = (state = {
    isLoading: true,
    errMsg: null,
    promotions: []
}, action) => {
    switch (action.type) {
        case ADD_PROMOS:
            return {
                ...state,
                isLoading: false,
                errMsg: null,
                promotions: action.payload
            };

        case PROMOS_LOADING:
            return {
                ...state,
                isLoading: true,
                errMsg: null,
                promotions: []
            };

        case PROMOS_FAILED:
            return {
                ...state,
                isLoading: false,
                errMsg: action.payload,
                promotions: []
            };
        default:
            return state;
    }
};
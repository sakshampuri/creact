import {ADD_DISHES, DISHES_FAILED, DISHES_LOADING} from "./ActionTypes";


//Initial State of dishes in the menu

const initDish = {
    isLoading: true,
    errMsg: null,
    dishes: []
}

//reducer
export const Dishes = (state = initDish, action) => {
    switch (action.type) {
        case ADD_DISHES:
            return {
                ...state,
                isLoading: false,
                errMsg: null,
                dishes: action.payload
            };

        case DISHES_LOADING:
            return {
                ...state,
                isLoading: true,
                errMsg: null,
                dishes: []
            };

        case DISHES_FAILED:
            return {
                ...state,
                isLoading: false,
                errMsg: action.payload,
                dishes: []
            };

        default:
            return state;
    }
};
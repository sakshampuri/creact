import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';
import {ADD_DISHES, DISHES_FAILED, DISHES_LOADING} from "./ActionTypes";

//COMMENT action function

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

//DISHES action functions

export const addDishes = (dish) => (
    {
        type: ADD_DISHES,
        payload: dish
    }
);

export const dishesLoading = (isLoading) => (
    {
        type: DISHES_LOADING,
        payload: isLoading
    }
);

export const dishesFailed = (errMsg) => (
    {
        type: DISHES_FAILED,
        payload: errMsg
    }
);


//THUNK

export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading(true));

    setTimeout(
        () => {
            dispatch(addDishes(DISHES));
        },
        2000
    );

}
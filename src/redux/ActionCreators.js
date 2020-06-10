import {
    ADD_COMMENT,
    ADD_COMMENTS,
    ADD_DISHES, ADD_PROMOS,
    COMMENTS_FAILED,
    DISHES_FAILED,
    DISHES_LOADING, PROMOS_FAILED,
    PROMOS_LOADING
} from "./ActionTypes";
import {baseUrl} from "../shared/baseUrl";

//COMMENT action function

export const addComment = (dishId, rating, author, comment) => ({
    type: ADD_COMMENT,
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

    return fetch(baseUrl + 'dishes')
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)));

}

export const fetchComments = () => (dispatch) => {

    return fetch(baseUrl + 'comments')
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)));

}

export const addComments = (comments) => (
    {
        type: ADD_COMMENTS,
        payload: comments

    }
);

export const commentsFailed = (errMsg) => (
    {
        type: COMMENTS_FAILED,
        payload: errMsg
    }
);

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));
    return fetch(baseUrl + 'promotions')
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)))
        .catch(err => dispatch(promosFailed(err)));

}

export const promosLoading = (isLoading) => (
    {
        type: PROMOS_LOADING,
        payload: isLoading
    }
);

export const addPromos = (promos) => (
    {
        type: ADD_PROMOS,
        payload: promos

    }
);

export const promosFailed = (errMsg) => (
    {
        type: PROMOS_FAILED,
        payload: errMsg
    }
);
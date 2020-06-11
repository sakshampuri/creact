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

export const addComment = (comment) => ({
    type: ADD_COMMENT,
    payload: comment
});

//POST

export const postComment = (dishId, rating, author, comment) => (dispatch) => {
    const newComment =
        {
            dishId: dishId,
            rating: rating,
            author: author,
            comment: comment,
            date: new Date().toISOString()
        };
    return fetch(baseUrl + 'comments', {
        method: 'POST',
        body:  JSON.stringify(newComment),
        headers: {
            "Content-Type" : 'application/json'
        },
        credentials: 'same-origin'
    })
        .then(response => {
        if(!response.ok)
            throw new Error(response.status+': '+response.statusText);
        else
            return response;
    }, error => {
        throw new Error(error.message)
    })
        .then(response => response.json())
        .then(comments => dispatch(addComment(comments)))
        .catch(err => dispatch(commentsFailed(err.message)));
}



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
        .then(response => {
            if(!response.ok)
                throw new Error(response.status+': '+response.statusText);
            else
                return response;
        }, error => {
            throw new Error(error.message)
        })
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(err => dispatch(dishesFailed(err.message)));

}

export const fetchComments = () => (dispatch) => {

    return fetch(baseUrl + 'comments')
        .then(response => {
            if(!response.ok)
                throw new Error(response.status+': '+response.statusText);
            else
                return response;
        }, error => {
            throw new Error(error.message)
        })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(err => dispatch(commentsFailed(err.message)));

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
        .then(response => {
            if(!response.ok)
                throw new Error(response.status+': '+response.statusText);
            else
                return response;
        }, error => {throw new Error(error.message)})
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)))
        .catch(err => dispatch(promosFailed(err.message)));

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
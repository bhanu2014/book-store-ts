import {
    ADD_TO_CART, EMPTY_CART
} from "./index";

///

export const addToCart = (payload) => {
    return {
        type: ADD_TO_CART,
        payload: payload
    }
}

export const emptyCart = () => {
    return {
        type: EMPTY_CART
    }
}
import {
    GET_BOOKS
} from "./index";

///

export const getfetchBooksInit = () => {
    return {
        type: GET_BOOKS+'_INIT'
    }
}

export const getBooksFulfilled = (payload) => {
    return {
        type: GET_BOOKS+'_FULFILLED',
        payload: payload
    }
}

export const getBooksFailed = (payload) => {
    return {
        type: GET_BOOKS+'_FULFILLED',
        payload: payload
    }
}
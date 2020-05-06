import {
  GET_BOOKS
} from "../actions";

export default (state = {data:[]}, action) => {
  switch (action.type) {
    case `${GET_BOOKS}_INIT`: {
      return { data: [], spinner: true };
    }

    case `${GET_BOOKS}_FULFILLED`: {
      return { data:[...state?.data, ...action.payload], spinner: false };
    }

    case `${GET_BOOKS}_REJECTED`: {
      return { data: [], spinner: false, error: action.payload };
    }

    default:
      return state;
  }
};

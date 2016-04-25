/* @flow */

// import { CALL_API } from 'redux-api-middleware';
import { CALL_API } from '../middleware/api';

// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT';

// ------------------------------------
// Actions
// ------------------------------------
// NOTE: "Action" is a Flow interface defined in https://github.com/TechnologyAdvice/flow-interfaces
// If you're unfamiliar with Flow, you are completely welcome to avoid annotating your code, but
// if you'd like to learn more you can check out: flowtype.org.
// DOUBLE NOTE: there is currently a bug with babel-eslint where a `space-infix-ops` error is
// incorrectly thrown when using arrow functions, hence the oddity.
export function increment (value: number = 1): Action {
  return {
    type: COUNTER_INCREMENT,
    payload: value
  }
}

// This is a thunk, meaning it is a function that immediately
// returns a function for lazy evaluation. It is incredibly useful for
// creating async actions, especially when combined with redux-thunk!
// NOTE: This is solely for demonstration purposes. In a real application,
// you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
// reducer take care of this logic.
export const doubleAsync = (): Function => {
  return (dispatch: Function, getState: Function): Promise => {
    return new Promise((resolve: Function): void => {
      setTimeout(() => {
        dispatch(increment(getState().counter));
        resolve()
      }, 200)
    })
  }
};

export const actionTypes = {
  REQUEST: ('BOOKS/REQUEST'),
  SUCCESS: ('BOOKS/SUCCESS'),
  FAILURE: ('BOOKS/FAILURE'),
};


import { Schema, arrayOf, normalize } from 'normalizr'

const bookSchema = new Schema('book', {
  idAttribute: 'id'
});


// Schemas for Github API responses.
export const Schemas = {
  BOOK: bookSchema,
  BOOK_ARRAY: arrayOf(bookSchema)
};


export function fetchAll() {
  return {
    [CALL_API]: {
      types: [ actionTypes.REQUEST, actionTypes.SUCCESS, actionTypes.FAILURE ],
      endpoint: `book`,
      schema: Schemas.BOOK_ARRAY
    }
  };
  // return {
  //   [CALL_API]: {
  //     endpoint: 'http://192.168.50.10/api/book',
  //     method: 'GET',
  //     types: [actionTypes.REQUEST, actionTypes.SUCCESS, actionTypes.FAILURE]
  //   }
  // }
}

export const actions = {
  increment,
  doubleAsync
};





// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [COUNTER_INCREMENT]: (state: number, action: {payload: number}): number => state + action.payload,
  [actionTypes.REQUEST]: (state, action: {payload: number}) => {
    // console.info(state, action);
    return state;
  },
  [actionTypes.SUCCESS]: (state, action: {payload: number}) => {
    console.info(state, action);
    Object.assign(state, action.response);
    return state;
  }
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {};
export default function booksReducer (state = initialState, action: Action): number {
  // const handler = ACTION_HANDLERS[action.type];
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}

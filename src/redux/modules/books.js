/* @flow */

import { CALL_API, createApiActionTypes, crudApiActionTypes, apiActionTypes, apiActionTypeMethods, createCrudReducers } from '../middleware/api';

// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT';

// ------------------------------------
// Actions
// ------------------------------------


import { Schema, arrayOf, normalize } from 'normalizr'

const bookSchema = new Schema('book', {
    idAttribute: 'id'
});


// Schemas for Github API responses.
export const Schemas = {
    ENTITY: bookSchema,
    COLLECTION: arrayOf(bookSchema)
};

const BOOKS_CRUD = 'BOOKS';

// export const fetchActionTypes = createApiActionTypes('FETCH_BOOKS', Schemas.COLLECTION);

const CRUD_ACTION_TYPES = crudApiActionTypes(BOOKS_CRUD, Schemas);

const CORE_API_ROOT_ENDPOINT = 'http://192.168.50.10/api/';

const booksService = {
    rootEndpoint: CORE_API_ROOT_ENDPOINT,
    types: CRUD_ACTION_TYPES,
    endpoint: 'book',
    schema: Schemas
};

import {each} from "lodash";

function required(target, requiredFields, prefix = '') {
    requiredFields.forEach(field => {
        if (target[field] === undefined) throw new Error((prefix ? `${prefix}: ` : prefix) + 'UNDEFINED ' + field);
    });
}

function createApiAction(service, apiActionType, args = {}) {
    const method = apiActionTypeMethods[apiActionType];

    let endpoint;
    switch (apiActionType) {
        case apiActionTypes.FETCH_ONE:
            required(args, ['id']);
            endpoint = service.endpoint + '/' + args.id;
            break;
        default:
            endpoint = service.endpoint;
            break;
    }

    const action = {
        endpoint: service.rootEndpoint + endpoint,
        method: method,
        types: service.types[apiActionType].asArray(),
        headers: { 'Content-Type': 'application/json' }
    };

    return {
        [CALL_API]: action
    };
}

function createCrudActions(service) {
    return {
        [apiActionTypes.FETCH_ALL]: () => createApiAction(service, apiActionTypes.FETCH_ALL),
        [apiActionTypes.FETCH_ONE]: ({id}) => createApiAction(service, apiActionTypes.FETCH_ONE, {id}),
        // [apiActionTypes.CREATE_ONE]: createApiAction(service, apiActionTypes.CREATE_ONE),
        // [apiActionTypes.CREATE_ALL]: createApiAction(service, apiActionTypes.CREATE_ALL),
        // [apiActionTypes.UPDATE_ONE]: createApiAction(service, apiActionTypes.UPDATE_ONE),
        // [apiActionTypes.UPDATE_ALL]: createApiAction(service, apiActionTypes.UPDATE_ALL),
        // [apiActionTypes.DELETE_ONE]: createApiAction(service, apiActionTypes.DELETE_ONE),
        // [apiActionTypes.DELETE_ALL]: createApiAction(service, apiActionTypes.DELETE_ALL),
    };
}

export const CRUD_ACTIONS = createCrudActions(booksService);


const CRUD_ACTION_HANDLERS = createCrudReducers(BOOKS_CRUD, booksService, CRUD_ACTION_TYPES);

export function fetchAll() {
    return CRUD_ACTIONS.FETCH_ALL({id: 1133});
    // return {
    //     [CALL_API]: {
    //         types: fetchActionTypes.asArray(),
    //         endpoint: `book`,
    //         schema: Schemas.BOOK_ARRAY
    //     }
    // };
    // console.info(createApiAction(booksService, apiActionTypes.FETCH_ALL));
    // return createApiAction(booksService, apiActionTypes.FETCH_ALL);
    // return {
    //     [CALL_API]: {
    //         endpoint: 'book',
    //         method: 'GET',
    //         types: CRUD_ACTION_TYPES.FETCH_ALL.asArray()
    //     }
    // }
}


// ------------------------------------
// Action Handlers
// ------------------------------------
console.warn(CRUD_ACTION_TYPES);

const ACTION_HANDLERS = {
    // [CRUD_ACTION_TYPES.FETCH_ONE.SUCCESS.type]: (state, action: {payload: number}) => {
    //     return Object.assign({}, state, {entities: action.payload.entities, isLoading: true});
    // },
    // [CRUD_ACTION_TYPES.FETCH_ONE.FAILURE.type]: (state, action: {payload: number}) => {
    //     return Object.assign({}, state, {isLoading: false});
    //     // return Object.assign({}, state, {status: action.payload});
    // },
    // [CRUD_ACTION_TYPES.FETCH_ONE.REQUEST.type]: (state, action: {payload: number}) => {
    //     return Object.assign({}, state, {isLoading: true});
    //     // return Object.assign({}, state, {status: action.payload});
    // },
    //
    //
    //
    // [CRUD_ACTION_TYPES.FETCH_ALL.SUCCESS.type]: (state, action: {payload: number}) => {
    //     return Object.assign({}, state, {entities: action.payload.entities});
    // },
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
    entities: {},
    isLoading: false
};
export default function booksReducer (state = initialState, action: Action): number {
    console.info(CRUD_ACTION_HANDLERS);
    const crud_handler = CRUD_ACTION_HANDLERS[action.type];
    const handler = ACTION_HANDLERS[action.type];

    console.info('in crud handler', crud_handler);
    state = crud_handler ? crud_handler(state, action) : state;
    console.info(state);
    state = handler ? handler(state, action) : state;
    return state;
}
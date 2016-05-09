import { CALL_API, apiMiddleware } from 'redux-api-middleware';

export {CALL_API};
export default apiMiddleware;

import { Schema, arrayOf, normalize } from 'normalizr';

const PAYLOADS = {
    // REQUEST: (action, state, res) => {
    //     const contentType = res.headers.get('Content-Type');
    //     if (contentType && ~contentType.indexOf('json')) {
    //         // Just making sure res.json() does not raise an error
    //         if (schema)
    //             return res.json().then((json) => normalize(json, schema));
    //         else
    //             return res.json();
    //     }
    // },
    SUCCESS: (schema) => (action, state, res) => {
        const contentType = res.headers.get('Content-Type');
        if (contentType && ~contentType.indexOf('json')) {
            // Just making sure res.json() does not raise an error
            if (schema)
                return res.json().then((json) => normalize(json, schema));
            else
                return res.json();
        }
    },
    FAILURE: (schema) => (action, state, res) => {
        const contentType = res.headers.get('Content-Type');
        if (contentType && ~contentType.indexOf('json')) {
            // Just making sure res.json() does not raise an error
            if (schema)
                return res.json().then((json) => normalize(json, schema));
            else
                return res.json();
        }
    }
};

export function createApiActionTypes(actionName, schema) {
    const prefix = `$/API/${actionName}`;
    const typesStrings = {
        REQUEST: `${prefix}/REQUEST`,
        SUCCESS: `${prefix}/SUCCESS`,
        FAILURE: `${prefix}/FAILURE`
    };

    const types = {
        REQUEST: {
            type: typesStrings.REQUEST
        },
        SUCCESS: {
            type: typesStrings.SUCCESS,
            payload: PAYLOADS.SUCCESS(schema)
        },
        FAILURE: {
            type: typesStrings.FAILURE,
            payload: PAYLOADS.FAILURE(false)
        }
    };

    const arr = [types.REQUEST, types.SUCCESS, types.FAILURE];
    types.asArray = () => arr;
    return types;
}


export const apiActionTypes = {
    FETCH_ALL: 'FETCH_ALL',
    FETCH_ONE: 'FETCH_ONE',
    CREATE_ONE: 'CREATE_ONE',
    CREATE_ALL: 'CREATE_ALL',
    UPDATE_ONE: 'UPDATE_ONE',
    UPDATE_ALL: 'UPDATE_ALL',
    DELETE_ONE: 'DELETE_ONE',
    DELETE_ALL: 'DELETE_ALL'
};

export const apiActionTypeMethods = {
    FETCH_ALL: 'GET',
    FETCH_ONE: 'GET',
    CREATE_ONE: 'POST',
    CREATE_ALL: 'POST',
    UPDATE_ONE: 'PUT',
    UPDATE_ALL: 'PUT',
    DELETE_ONE: 'DELETE',
    DELETE_ALL: 'DELETE'
};


export function crudApiActionTypes(entityName, schema) {
    return {
        [apiActionTypes.FETCH_ALL]: createApiActionTypes(`${entityName}/FETCH_ALL`, schema.COLLECTION),
        [apiActionTypes.FETCH_ONE]: createApiActionTypes(`${entityName}/FETCH_ONE`, schema.ENTITY),

        [apiActionTypes.CREATE_ONE]: createApiActionTypes(`${entityName}/CREATE_ONE`, schema.COLLECTION),
        [apiActionTypes.CREATE_ALL]: createApiActionTypes(`${entityName}/CREATE_ALL`, schema.COLLECTION),

        [apiActionTypes.UPDATE_ONE]: createApiActionTypes(`${entityName}/UPDATE_ONE`, schema.COLLECTION),
        [apiActionTypes.UPDATE_ALL]: createApiActionTypes(`${entityName}/UPDATE_ALL`, schema.COLLECTION),

        [apiActionTypes.DELETE_ONE]: createApiActionTypes(`${entityName}/DELETE_ONE`, schema.COLLECTION),
        [apiActionTypes.DELETE_ALL]: createApiActionTypes(`${entityName}/DELETE_ALL`, schema.COLLECTION),
    };
}



export function createCrudReducers(name, service, CRUD_ACTIONS) {
    const actions = crudApiActionTypes(name, service.schema);
    console.info(actions);
    return {
        // [fetchActionTypes.REQUEST]: (state, action: {payload: number}) => {
        //     return state;
        // },
        [CRUD_ACTIONS.FETCH_ALL.REQUEST.type]: (state, action:{payload: number}) => {
            return Object.assign({}, state, {entities: action.payload.entities, isLoading: true});
        },
        [CRUD_ACTIONS.FETCH_ONE.REQUEST.type]: (state, action:{payload: number}) => {
            return Object.assign({}, state, {entities: action.payload.entities, isLoading: true});
        },
        [CRUD_ACTIONS.FETCH_ALL.SUCCESS.type]: (state, action:{payload: number}) => {
            return Object.assign({}, state, {entities: action.payload.entities, isLoading: false});
        },
        [CRUD_ACTIONS.FETCH_ONE.SUCCESS.type]: (state, action:{payload: number}) => {
            return Object.assign({}, state, {entities: action.payload.entities, isLoading: false});
        }
    };
}


// import { Schema, arrayOf, normalize } from 'normalizr'
// // import { camelizeKeys } from 'humps'
// import 'isomorphic-fetch'
//
//
// const API_ROOT = 'http://192.168.50.10/api/';
//
// // Fetches an API response and normalizes the result JSON according to schema.
// // This makes every API response have the same shape, regardless of how nested it was.
// function callApi(endpoint, schema) {
//     const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;
//
//     return fetch(fullUrl)
//         .then(response =>
//             response.json().then(json => ({ json, response }))
//         ).then(({ json, response }) => {
//             // if (!response.ok) {
//             //     return Promise.reject(json)
//             // }
//
//             return Object.assign({},
//                 normalize(json, schema)
//             )
//         })
// }
//
//
//
// // Action key that carries API call info interpreted by this Redux middleware.
// export const CALL_API = Symbol('Call API');
//
// // A Redux middleware that interprets actions with CALL_API info specified.
// // Performs the call and promises when such actions are dispatched.
// export default store => next => action => {
//     const callAPI = action[CALL_API];
//     if (typeof callAPI === 'undefined') {
//         return next(action)
//     }
//
//     let { endpoint } = callAPI;
//     const { schema, types } = callAPI;
//
//     if (typeof endpoint === 'function') {
//         endpoint = endpoint(store.getState())
//     }
//
//     if (typeof endpoint !== 'string') {
//         throw new Error('Specify a string endpoint URL.')
//     }
//     if (!schema) {
//         throw new Error('Specify one of the exported Schemas.')
//     }
//     if (!Array.isArray(types) || types.length !== 3) {
//         throw new Error('Expected an array of three action types.')
//     }
//     if (!types.every(type => typeof type === 'string')) {
//         throw new Error('Expected action types to be strings.')
//     }
//
//     function actionWith(data) {
//         const finalAction = Object.assign({}, action, data);
//         delete finalAction[CALL_API];
//         return finalAction
//     }
//
//     const [ requestType, successType, failureType ] = types;
//     next(actionWith({ type: requestType }));
//
//     return callApi(endpoint, schema).then(
//         response => next(actionWith({
//             response,
//             type: successType
//         })),
//         error => next(actionWith({
//             type: failureType,
//             error: error.message || 'Something bad happened'
//         }))
//     )
// }
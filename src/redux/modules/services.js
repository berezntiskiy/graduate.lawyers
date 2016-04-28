/* @flow */

// import { CALL_API } from 'redux-api-middleware';
import {CALL_API} from '../middleware/api';
import {merge} from 'lodash';

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

export const actionTypes = {
    REQUEST: ('SERVICES/REQUEST'),
    SUCCESS: ('SERVICES/SUCCESS'),
    FAILURE: ('SERVICES/FAILURE'),
    SET_NATURALPERSON_FILTER: ('SET_NATURALPERSON_FILTER'),
};


import {Schema, arrayOf, normalize} from 'normalizr'

const servicesSchema = new Schema('services', {
    idAttribute: 'id'
});


// Schemas for Github API responses.
export const Schemas = {
    SERVICE: servicesSchema,
    SERVICE_ARRAY: arrayOf(servicesSchema)
};


export function fetchAll() {
    return {
        [CALL_API]: {
            types: [actionTypes.REQUEST, actionTypes.SUCCESS, actionTypes.FAILURE],
            endpoint: `service`,
            schema: Schemas.SERVICE_ARRAY
        }
    };
}

export function setNaturalpersonFilter(cond) {
    return {
        type: actionTypes.SET_NATURALPERSON_FILTER,
        cond: cond
    };
}

export const actions = {
    fetchAll,
    setNaturalpersonFilter
};


// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
    [actionTypes.SUCCESS]: (state, action:{payload: number}) => {
        Object.assign(state, action.response);
        return state;
    },
    [actionTypes.SET_NATURALPERSON_FILTER]: (state, action:{payload: number}) => {
        Object.assign(state, {naturalperson: action.cond});
        return state;
    }
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialServiceState = {};
const initialUIState = {
    naturalperson: false
};
const initialState = {
    ui: initialUIState,
    services: initialServiceState
};

function servicesUIReducer(state = initialServiceState, action:Action):number {
    // const handler = ACTION_HANDLERS[action.type];
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}


function servicesReducer(state = initialUIState, action:Action):number {
    // const handler = ACTION_HANDLERS[action.type];
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}


export default function servicesRootReducer(state = initialState, action:Action):number {
    state = merge({}, state);
    state.ui = servicesUIReducer(state.ui, action);
    state.services = servicesReducer(state.services, action);
    return state;
}
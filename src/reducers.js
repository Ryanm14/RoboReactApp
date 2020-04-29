import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_FAIL,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS
} from "./constants";


const intialStateSearch = {
    searchField: ''
}

const intialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
}

export const searchRobots = (state = intialStateSearch, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCHFIELD:
            return Object.assign({}, state, {searchField: action.payload})
        default:
            return state
    //    OR {...state, searchField: action.payload}
    }
}

export const requestRobots = (state=intialStateRobots, action={}) => {
    switch(action.type){
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, {isPending: true})
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, {robots: action.payload, isPending: false})
        case REQUEST_ROBOTS_FAIL:
            return Object.assign({}, state, {error: action.payload, isPending: false})
        default:
            return state
    }
}
import {
    FETCH_SMURF_START,
    FETCH_SMURF_SUCCESS,
    FETCH_SMURF_FAILURE
} from '../actions';

const initialState = {
    smurfs: [],
    fetchSmurf: false,
    addSmurf: false,
    //updateSmurf: false,
    //deleteSmurf: false,
    error: null
}


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURF_START:
            return {
                ...state,
                fetchSmurf: true,
                error: ''
            };
        case FETCH_SMURF_SUCCESS:
        return {
            ...state,
            fetchSmurf: false,
            smurfs: action.payload,
            error: ''
        };
        case FETCH_SMURF_FAILURE:
        return {
            ...state,
            fetchSmurf: false,
            error: ''
        };
        default: 
        return state;
    }
};
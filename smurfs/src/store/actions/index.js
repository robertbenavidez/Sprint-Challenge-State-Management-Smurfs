import axios from 'axios';

export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE';

export const ADD_SMURF_START = 'ADD_SMURF_START';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';



export const fetchSmurf = () => dispatch => {
    dispatch({type: FETCH_SMURF_START});
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res);
            dispatch({ type:FETCH_SMURF_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err)
            dispatch({type: FETCH_SMURF_FAILURE, payload: err.response })
        })
    dispatch({type: ADD_SMURF_START});
    axios
        .post('http://localhost:3333/smurfs', smurf)
        .then(res => {
            console.log(res);
            dispatch({ type:ADD_SMURF_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err)
            dispatch({type: ADD_SMURF_FAILURE, payload: err.response })
        })
}
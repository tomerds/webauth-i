import axios from 'axios';

export const SUBMIT_LOGIN_START = "SUBMIT_LOGIN_START";
export const SUBMIT_LOGIN_SUCCESS = " SUBMIT_LOGIN_SUCCESS";
export const SUBMIT_LOGIN_FAIL = " SUBMIT_LOGIN_FAIL";

export const submitLogin = (login) => dispatch => {
  dispatch({ type: SUBMIT_LOGIN_START });
  axios.post('http://localhost:5000/api/auth/login', login)
    .then(res => {
      dispatch({
        type: SUBMIT_LOGIN_SUCCESS,
        payload: res.data,
      })
    })
    .catch(err => {
      dispatch({
        type: SUBMIT_LOGIN_FAIL,
        payload: res.data,
      })
    })
}
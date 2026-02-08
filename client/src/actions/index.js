import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS } from './types';

export const fetchUser = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res.data });
  } catch (err) {
    dispatch({ type: FETCH_USER, payload: null });
  }
};

export const handleToken = (token) => async (dispatch, getState) => {
  try {
    const res = await axios.post('/api/stripe', token);
    dispatch({ type: FETCH_USER, payload: res.data });
  } catch (err) {
    // Keep current user so auth state isn't overwritten by error payload
    dispatch({ type: FETCH_USER, payload: getState().auth || null });
  }
};

export const submitSurvey = (values, history) => async (dispatch, getState) => {
  try {
    const res = await axios.post('/api/surveys', values);
    history.push('/surveys');
    dispatch({ type: FETCH_USER, payload: res.data });
  } catch (err) {
    // Keep current user so auth state isn't overwritten by error payload
    dispatch({ type: FETCH_USER, payload: getState().auth || null });
  }
};

export const fetchSurveys = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/surveys');
    dispatch({ type: FETCH_SURVEYS, payload: res.data });
  } catch (err) {
    dispatch({ type: FETCH_SURVEYS, payload: [] });
  }
};

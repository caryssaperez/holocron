import axios from 'axios';
import { CREATE_USER, FETCH_USER } from '../constants/actionTypes';

export const createUser = (values, history) => async dispatch => {
  const response = await axios.post('/api/signup', values);

  history.push('/');
  return dispatch({ type: CREATE_USER, payload: response.data });
};

export const fetchUser = () => async dispatch => {
  const response = await axios.get('/api/current_user');

  return dispatch({ type: FETCH_USER, payload: response.data });
};

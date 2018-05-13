import axios from 'axios';
import { FETCH_USER, CREATE_USER } from '../constants/actionTypes';

export const fetchUser = () => async dispatch => {
  const response = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: response.data });
};

export const createUser = () => async dispatch => {
  const response = await axios.post('/api/user/new');

  dispatch({ type: CREATE_USER, payload: response.data });
};

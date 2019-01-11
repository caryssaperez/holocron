import axios from 'axios';
import { apolloFetch } from 'global';
import { CREATE_USER, FETCH_USER } from 'constants/actionTypes';

export const createUser = (values, history) => async dispatch => {
  const response = await axios.post('/api/signup', values);

  history.push('/');
  return dispatch({ type: CREATE_USER, payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const response = await apolloFetch({
    query: `query($userId: ID!) {
      user(id: $userId) {
        id
        name
        arcs {
          title
          description
        }
      }
    }`,
    variables: { userId: id },
  });

  return dispatch({ type: FETCH_USER, payload: response.data });
};

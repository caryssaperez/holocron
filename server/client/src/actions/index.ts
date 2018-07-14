import axios from 'axios';
import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { CREATE_USER, FETCH_USER } from '../constants/actionTypes';
import { IState } from '../types';

export interface ICreateUser {
  type: CREATE_USER;
}

export interface IFetchUser {
  type: FETCH_USER;
}

export type UserAction = ICreateUser | IFetchUser;

export const createUser: ActionCreator<
ThunkAction<Promise<Action>, IState, void, ICreateUser>> = (values:object, history:any) => async (dispatch: Dispatch<ICreateUser>): Promise<Action> => {
  const response = await axios.post('/api/signup', values);

  history.push('/');
  return dispatch({ type: CREATE_USER, payload: response.data });
};

export const fetchUser: ActionCreator<
ThunkAction<Promise<Action>, IState, void, IFetchUser>> = () => async (dispatch: Dispatch<IFetchUser>): Promise<Action> => {
  const response = await axios.get('/api/current_user');

  return dispatch({ type: FETCH_USER, payload: response.data });
};

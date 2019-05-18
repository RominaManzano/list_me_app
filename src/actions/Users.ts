import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';

import API from '../data/api';

export interface UsersActions {
  fetchUsersList: () => {};
}

class Users {
  public static FETCH_USERS_LIST_TRIGGERED: string = 'FETCH_USER_TRIGGERED';
  public static FETCH_USERS_LIST_SUCCESS: string = 'FETCH_USERS_LIST_SUCCESS';
  public static FETCH_USERS_LIST_ERROR: string = 'FETCH_USERS_LIST_ERROR';

  public static fetchUsersList = () => async (
    dispatch: Dispatch,
  ) => {
    dispatch({
      type: Users.FETCH_USERS_LIST_TRIGGERED,
    });

    let res: AxiosResponse | null = null;

    try {
      res = await API.get('/api', {
        headers: { 'Content-Type': 'application/json' },
        params: { results: 32 },
      });
    } catch (error) {
      dispatch({
        payload: error,
        type: Users.FETCH_USERS_LIST_ERROR,
      });
      return;
    }

    dispatch({
      payload: res.data,
      type: Users.FETCH_USERS_LIST_SUCCESS,
    });
  }
}

export default Users;

import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';

import API from '../data/api';

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
        headers: {
          'Content-Type': 'application/json'
        },
      });
    } catch (error) {
      dispatch({
        type: Users.FETCH_USERS_LIST_ERROR,
        payload: error,
      });
      return;
    }

    dispatch({
      type: Users.FETCH_USERS_LIST_SUCCESS,
      payload: res,
    });
  }
}


export default Users;

import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';

import API from '../data/api';

export interface UsersActions {
  fetchUsersList: () => {};
  searchUsers: (searchTerm: string) => {};
}

class Users {
  public static FETCH_USERS_LIST_TRIGGERED: string = 'FETCH_USER_TRIGGERED';
  public static FETCH_USERS_LIST_SUCCESS: string = 'FETCH_USERS_LIST_SUCCESS';
  public static FETCH_USERS_LIST_ERROR: string = 'FETCH_USERS_LIST_ERROR';
  public static SEARCH_USERS_TRIGGERED: string = 'SEARCH_USERS_TRIGGERED';

  public static fetchUsersList = () => async (
    dispatch: Dispatch,
  ) => {
    dispatch({
      type: Users.FETCH_USERS_LIST_TRIGGERED,
    });

    let res: AxiosResponse;

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

    setTimeout(
      () => {
        dispatch({
          payload: res.data,
          type: Users.FETCH_USERS_LIST_SUCCESS,
        });
      },
      800);
  }

  public static searchUsers = (searchTerm: string) => (
    dispatch: Dispatch,
  ) => {
    dispatch({
      payload: searchTerm,
      type: Users.SEARCH_USERS_TRIGGERED,
    });
  }
}

export default Users;

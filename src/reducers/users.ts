import Users from '../actions/Users';
import { ActionType } from '../types/ActionType';
import { UserType } from '../types/UserType';

export interface UserStore {
  usersList: UserType[];
  usersListLoadingState: 'needed' | 'fetching' | 'loaded' | 'error';
}

const initialState: UserStore = {
  usersList: [],
  usersListLoadingState: 'needed',
};

function users(state: UserStore = initialState, action: ActionType): UserStore {
  switch (action.type) {
    case Users.FETCH_USERS_LIST_TRIGGERED: {
      return {
        ...state,
        usersListLoadingState: 'fetching',
      };
    }
    case Users.FETCH_USERS_LIST_SUCCESS: {
      return {
        ...state,
        usersList: action.payload.results,
        usersListLoadingState: 'loaded',
      };
    }
    case Users.FETCH_USERS_LIST_ERROR: {
      return {
        ...state,
        usersList: [],
        usersListLoadingState: 'error',
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}

export default users;

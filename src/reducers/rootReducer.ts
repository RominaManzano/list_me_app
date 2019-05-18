import users, { UserStore } from './users';

export interface GlobalStore {
  users: UserStore;
}

export default {
  users,
};

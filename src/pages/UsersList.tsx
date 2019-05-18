import React from 'react';
import { connect } from 'react-redux';

import Users, { UsersActions } from '../actions/Users';
import { GlobalStore } from '../reducers/rootReducer';
import { UserStore } from '../reducers/users';

type Props =
  & UserStore
  & UsersActions;

class UsersList extends React.Component<Props> {
  public componentDidMount(): void {
    const { fetchUsersList }: Props = this.props;

    fetchUsersList();
  }

  public render(): React.ReactNode {
    return (
      <div>
        USERS
      </div>
    );
  }
}

type MapStateToProps = (state: GlobalStore) => UserStore;

const mapStateToProps: MapStateToProps = ({ users }: GlobalStore) => ({
  ...users,
});

const mapDispatchToProps: UsersActions = {
  fetchUsersList: Users.fetchUsersList,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersList);
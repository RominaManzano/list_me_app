import React from 'react';
import { connect } from 'react-redux';
import {
  Col,
  Container,
  Row
} from 'reactstrap';

import Users, { UsersActions } from '../actions/Users';
import { GlobalStore } from '../reducers/rootReducer';
import { UserStore } from '../reducers/users';
import { UserType } from '../types/UserType';

type Props =
  & UserStore
  & UsersActions;

class UsersList extends React.Component<Props> {
  public componentDidMount(): void {
    const {
      fetchUsersList,
      usersListLoadingState,
    }: Props = this.props;

    if (usersListLoadingState === 'needed') {
      fetchUsersList();
    }
  }

  public renderUsersList = (): React.ReactNode => {
    const { usersList }: Props = this.props;

    return usersList.map((user: UserType) => (
      <Col lg="6" key={user.login.username}>
        {user.login.username}
      </Col>
    ));
  }

  public render(): React.ReactNode {
    const { usersListLoadingState }: Props = this.props;

    if (usersListLoadingState === 'fetching') {
      return <div>Loading...</div>;
    }

    if (usersListLoadingState === 'error') {
      return <div>Unexpected Error</div>;
    }

    return (
      <Container fluid={true}>
        <Row>
          {this.renderUsersList()}
        </Row>
      </Container>
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
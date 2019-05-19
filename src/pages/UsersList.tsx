import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
  Col,
  Container,
  Row
} from 'reactstrap';

import SearchBar from '../components/SearchBar';
import UserThumb from '../components/UserThumb';
import Users, { UsersActions } from '../actions/Users';
import { GlobalStore } from '../reducers/rootReducer';
import { UserStore } from '../reducers/users';
import { UserType } from '../types/UserType';

type Props =
  & UserStore
  & UsersActions;

interface State {
  searchTerm: string;
}

class UsersList extends React.Component<Props, State> {
  public state: State = {
    searchTerm: '',
  };

  public componentDidMount(): void {
    const {
      fetchUsersList,
      usersListLoadingState,
    }: Props = this.props;

    if (usersListLoadingState === 'needed') {
      fetchUsersList();
    }
  }

  public handleSearchChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    event.preventDefault();
    this.setState({
      searchTerm: event.currentTarget.value,
    });
  }

  public handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const { searchTerm }: State = this.state;
    const {
      fetchUsersList,
      searchUsers,
    }: Props = this.props;

    event.preventDefault();

    if (!searchTerm) {
      fetchUsersList();
    } else {
      searchUsers(searchTerm);
    }
  }

  public renderUsersList = (): React.ReactNode => {
    const {
      usersList,
      usersListLoadingState,
    }: Props = this.props;

    if (usersListLoadingState === 'fetching') {
      return <div>Loading...</div>;
    }

    return usersList.map((user: UserType) => (
      <Col
        key={user.login.username}
        lg="3" md="6"
      >
        <UserThumb user={user} />
      </Col>
    ));
  }

  public render(): React.ReactNode {
    const { usersListLoadingState }: Props = this.props;
    const { searchTerm }: State = this.state;

    if (usersListLoadingState === 'error') {
      return <div>Unexpected Error</div>;
    }

    return (
      <Container fluid={true}>
        <Title>
          ListMeApp
        </Title>
        <Description>
          Click on a user thumbnail to get more information. If you want to get
          detailed contact information, click on the <b>More</b> link to see their profile.
          <br />
          Input a name or last name to search for a specific user.
        </Description>
        <Row>
          <Col
            lg={{ size: 4, offset: 4 }}
            md={{ size: 6, offset: 3 }}
            xs="12"
          >
            <SearchBar
              term={searchTerm}
              onChange={this.handleSearchChange}
              onSubmit={this.handleSearchSubmit}
            />
          </Col>
        </Row>

        <hr />

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
  searchUsers: Users.searchUsers,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersList);

const Title: React.FC = styled.h2`
  margin-top: 20px;
  font-family: 'Baloo Bhai', cursive;
  color: #f77d92;
  text-align: center;
`;

const Description: React.FC = styled.p`
  padding: 10px 0;
  color: #797979;
  text-align: center;
`;

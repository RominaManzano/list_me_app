import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
  Col,
  Container,
  Row,
} from 'reactstrap';

import Message from '../components/Message';
import PlaceholderThumb from '../components/PlaceholderThumb';
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

  public renderSearchBar = (): React.ReactNode => {
    const { searchTerm }: State = this.state;

    return (
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
    );
  }

  public renderPlaceholders = (): React.ReactNode => {
    const placeholders: React.ReactNode[] = [];

    for (let i: number = 0; i < 32; i = i + 1) {
      const placeholder: React.ReactNode = (
        <Col lg="3" md="6" key={i}>
          <PlaceholderThumb />
        </Col>
      );

      placeholders.push(placeholder);
    }

    return placeholders;
  }

  public renderUsersList = (): React.ReactNode => {
    const {
      usersList,
      usersListLoadingState,
    }: Props = this.props;

    if (usersListLoadingState === 'fetching') {
      return this.renderPlaceholders();
    }

    if (usersList.length <= 0) {
      return (
        <Message
          type="info"
          message="No results found"
        />
      );
    }

    if (usersListLoadingState === 'error') {
      return (
        <Message
          type="error"
          message="Oops! Seems you ecountered an error."
        />
      );
    }

    return usersList.map((user: UserType) => (
      <Col key={user.login.username} lg="3" md="6">
        <UserThumb user={user} />
      </Col>
    ));
  }

  public render(): React.ReactNode {
    return (
      <Container fluid={true}>
        <Title>
          ListMeApp
        </Title>
        <Description>
          If you want to get detailed contact information for a specific user,
          click on their thumbnail. To close the modal, click on any area outise of
          it or the <b>X</b> icon.
          <br />
          Input a name or last name to search for a specific user. To reset the list,
          clear the search input.
        </Description>

        {this.renderSearchBar()}

        <hr />

        <StyledRow>
          {this.renderUsersList()}
        </StyledRow>
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

const StyledRow: React.FC = styled(Row)`
  height: 65vh;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

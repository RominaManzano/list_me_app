// tslint:disable: no-any
import React from 'react';
import styled from 'styled-components';
import {
  Dialog,
  DialogContent,
  IconButton,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';

import TextHelper from '../utils/TextHelper';
import UserDetail from './UserDetail';
import { UserType } from '../types/UserType';

interface Props {
  isOpen: boolean;
  toggle: () => void;
  user: UserType;
}

const UserModal: React.FC<Props> = ({ isOpen, toggle, user }: Props) => {
  const {
    name: { first, last },
    picture,
  }: UserType = user;

  const displayName: string = `${TextHelper.capitalize(first)} ${TextHelper.capitalize(last)}`;
  const displayGender: string = TextHelper.capitalize(user.gender);
  const displayCity: string = TextHelper.capitalize(user.location.city);

  const renderUserDetails: () => React.ReactNode = (): React.ReactNode => {
    return (
      <DetailsContainer>
        <UserDetail label="Email" display={user.email} />
        <StyledHR />
        <UserDetail label="Gender" display={displayGender} />
        <StyledHR />
        <UserDetail label="Location" display={displayCity} />
        <StyledHR />
        <UserDetail label="Age" display={user.dob.age.toString()} />
        <StyledHR />
        <UserDetail label="Phone" display={user.phone} />
      </DetailsContainer>
    );
  };

  return (
    <Dialog
      onClose={toggle}
      open={isOpen}
      maxWidth="sm"
      fullWidth={true}
    >
      <DialogContentDetails>
        <Header background={picture.large} />
        <PictureHeader>
          <IconButton aria-label="Close" onClick={toggle} style={{ alignSelf: 'flex-end' }}>
            <Close />
          </IconButton>
          <Avatar background={picture.large} />
          <Name>
            {displayName}
            <UserName>
              {user.login.username}
            </UserName>
          </Name>
        </PictureHeader>
        {renderUserDetails()}
      </DialogContentDetails>
    </Dialog>
  );
};

export default UserModal;

const DialogContentDetails: React.FC<any> = styled(DialogContent)`
  && {
    padding: 0;
    overflow-y: unset;
    background-color: #666;
  }
`;

interface HeaderProps {
  background: string;
}

const Header: React.FC<HeaderProps> = styled.div`
  height: 300px;
  background-image: url(${({ background }: HeaderProps) => background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  -webkit-filter: blur(8px);
  -moz-filter: blur(8px);
  -o-filter: blur(8px);
  -ms-filter: blur(8px);
  filter: blur(8px);
`;

const PictureHeader: React.FC = styled.div`
  position: absolute;
  top: 0;
  height: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
`;

const Avatar: React.FC<HeaderProps> = styled.div`
  height: 140px;
  width: 140px;
  background-image: url(${({ background }: HeaderProps) => background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  border: 3px solid white;
`;

const Name: React.FC = styled.h4`
  margin-top: 10px;
  text-align: center;
  text-shadow: 1px 1px 4px black;
  color: white;
`;

const UserName: React.FC = styled.div`
  text-align: center;
  font-weight: 400;
  opacity: 0.8;
  font-size: 0.6em;
`;

const StyledHR: React.FC = styled.hr`
  margin: 0.5rem 0;
  border-top: 1px solid #ffc9d2;
`;

const DetailsContainer: React.FC = styled.div`
  background: white;
  margin: -15px;
  padding: 30px;
  position: relative;
`;

// tslint:disable: no-any
import React from 'react';
import styled from 'styled-components';
import {
  Modal,
  ModalBody,
} from 'reactstrap';
import { IconContext } from 'react-icons';
import { MdClose } from 'react-icons/md';

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

  const containerStyle: any = {
    background: 'white', margin: '-15px', padding: '30px',
  };

  const renderUserDetails: () => React.ReactNode = (): React.ReactNode => {
    return (
      <ModalBody style={containerStyle}>
        <UserDetail label="Email" display={user.email} />
        <StyledHR />
        <UserDetail label="Gender" display={displayGender} />
        <StyledHR />
        <UserDetail label="Location" display={user.location.timezone.description} />
        <StyledHR />
        <UserDetail label="Age" display={user.dob.age.toString()} />
        <StyledHR />
        <UserDetail label="Phone" display={user.phone} />
      </ModalBody >
    );
  };

  return (
    <Modal
      isOpen={isOpen}
      toggle={toggle}
      style={{ overflow: 'hidden' }}
    >
      <Header background={picture.large} />
      <IconContext.Provider value={{ color: 'white', size: '1.5em' }}>
        <StyledMdClose onClick={toggle} />
      </IconContext.Provider>

      <PictureHeader>
        <Avatar background={picture.large} />
        <Name>
          {displayName}
        </Name>
      </PictureHeader>

      {renderUserDetails()}
    </Modal>
  );
};

export default UserModal;

const StyledMdClose: React.FC<any> = styled(MdClose)`
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  z-index: 100;

  -webkit-filter: drop-shadow(1px 1px 1px black);
  -moz-filter: drop-shadow(1px 1px 1px black);
  -o-filter: drop-shadow(1px 1px 1px black);
  -ms-filter: drop-shadow(1px 1px 1px black);
  filter: drop-shadow(1px 1px 1px black);
`;

interface HeaderProps {
  background: string;
}

const Header: React.FC<HeaderProps> = styled.div`
  margin: -15px;
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
  height: 250px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const StyledHR: React.FC = styled.hr`
  margin: 0.5rem 0;
  border-top: 1px solid #ffc9d2;
`;

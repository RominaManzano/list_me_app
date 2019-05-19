import React from 'react';
import styled from 'styled-components';
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
} from 'reactstrap';

import TextHelper from '../utils/TextHelper';
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

  const displayName: string = `
    ${TextHelper.capitalize(first)} ${TextHelper.capitalize(last)}
  `;

  const containerStyle: any = {
    background: 'white', margin: '-15px', padding: '30px',
  };

  return (
    <Modal
      isOpen={isOpen}
      toggle={toggle}
      style={{ overflow: 'hidden' }}
    >
      <Header background={picture.large} />
      <PictureHeader>
        <Avatar background={picture.large} />
        <Name>
          {displayName}
        </Name>
      </PictureHeader>

      <ModalBody style={containerStyle}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </ModalBody>

      <ModalFooter style={containerStyle}>
        <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
        <Button color="secondary" onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
};

export default UserModal;

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

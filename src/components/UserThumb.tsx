import React from 'react';
import styled from 'styled-components';

import TextHelper from '../utils/TextHelper';
import UserModal from './UserModal';
import { UserType } from '../types/UserType';
import { zoomIn } from './animations';

interface Props {
  user: UserType;
}

interface State {
  modalOpen: boolean;
}

class UserThumb extends React.Component<Props> {
  public state: State = {
    modalOpen: false,
  };

  public toggleModal = () => {
    this.setState((prevState: State) => ({
      modalOpen: !prevState.modalOpen,
    }));
  }

  public render(): React.ReactNode {
    const { modalOpen }: State = this.state;
    const { user }: Props = this.props;
    const {
      picture: { thumbnail },
      name: { first, last },
    }: UserType = user;

    const displayName: string = `
      ${TextHelper.capitalize(first)} ${TextHelper.capitalize(last)}
    `;

    return (
      <React.Fragment>
        <Thumb onClick={this.toggleModal}>
          <ThumbImage background={thumbnail} />
          <ThumbName>
            {displayName}
            <ThumbUserName>
              {user.login.username}
            </ThumbUserName>
          </ThumbName>
        </Thumb>
        <UserModal
          isOpen={modalOpen}
          toggle={this.toggleModal}
          user={user}
        />
      </React.Fragment>
    );
  }
}

export default UserThumb;

interface ThumbProps {
  onClick: () => void;
}

const Thumb: React.FC<ThumbProps> = styled.div<ThumbProps>`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #dfdfdf;
  border-radius: 60px;
  display: flex;
  justify-content: start;
  align-items: center;
  animation: ${zoomIn} 0.4s linear;

  &:hover {
    transform: scale(1.05);
    border: 1px solid #f77d92;
    background-color: #f77d920a;
    cursor: pointer;
  }
`;

interface ThumbImageProps {
  background: string;
}

const ThumbImage: React.FC<ThumbImageProps> = styled.div<ThumbImageProps>`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background: url(${({ background }: ThumbImageProps) => background});
`;

const ThumbName: React.FC = styled.div`
  margin: 0 0 0 10px;
  font-weight: 500;
  color: #7b7b7b;
`;

const ThumbUserName: React.FC = styled.div`
  font-size: 12px;
  color: #b3b2b2;
`;

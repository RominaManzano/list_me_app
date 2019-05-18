import React from 'react';
import styled from 'styled-components';

import TextHelper from '../utils/TextHelper';
import { UserType } from '../types/UserType';
import { zoomIn } from './animations';

interface Props {
  user: UserType;
}

const UserThumb: React.FC<Props> = ({ user }: Props) => {
  const {
    picture: { thumbnail },
    name: { first, last },
  }: UserType = user;

  const displayName: string = `
    ${TextHelper.capitalize(first)} ${TextHelper.capitalize(last)}
  `;

  return (
    <Thumb>
      <ThumbImage background={thumbnail} />
      <ThumbName>
        {displayName}
      </ThumbName>
    </Thumb>
  );
};

export default UserThumb;

const Thumb: React.FC = styled.div`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #dfdfdf;
  border-radius: 60px;
  display: flex;
  justify-content: start;
  align-items: center;
  animation: ${zoomIn} 0.4s linear;

  &:hover {
    transform: scale(1.06);
    -webkit-box-shadow: 0px 0px 5px 1px #fb9ed173;
    -moz-box-shadow: 0px 0px 5px 1px #fb9ed173;
    box-shadow: 0px 0px 5px 1px #fb9ed173;
    border: 1px solid #ffd3eb;
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

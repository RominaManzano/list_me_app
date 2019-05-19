import React from 'react';
import styled from 'styled-components';
import {
  Col,
  Row,
} from 'reactstrap';

interface Props {
  label: string;
  display: string;
}

const UserDetail: React.FC<Props> = ({ label, display }: Props) => {
  return (
    <Row>
      <Col xs="12">
        <Label>
          {label}
        </Label>
      </Col>
      <Col xs="12">
        <Display>
          {display}
        </Display>
      </Col>
    </Row>
  );
};

export default UserDetail;

const Label: React.FC = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #a5a5a5;
`;

const Display: React.FC = styled.span`
  font-size: 18px;
  color: #5a5a5a;
`;

import React from 'react';
import styled from 'styled-components';

import { Title } from '../styles/TextStyles';

const FormDemo: React.FC = () => {
  return (
    <FormContainer>
      <Title>
        Form Demo
      </Title>
    </FormContainer>
  );
};

export default FormDemo;

const FormContainer: React.FC = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;

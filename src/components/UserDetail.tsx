import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';

interface Props {
  label: string;
  display: string;
}

const UserDetail: React.FC<Props> = ({ label, display }: Props) => {
  return (
    <React.Fragment>
      <Grid item={true} xs={12}>
        <Label>
          {label}
        </Label>
      </Grid>
      <Grid item={true} xs={12}>
        <Display>
          {display}
        </Display>
      </Grid>
    </React.Fragment>
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

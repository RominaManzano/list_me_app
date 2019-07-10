// tslint:disable: no-any
import React from 'react';
import styled from 'styled-components';
import {
  IconButton,
  InputBase,
  Paper,
} from '@material-ui/core';
import { Search } from '@material-ui/icons';

interface Props {
  term: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const SearchBar: React.FC<Props> = (props: Props) => {
  const {
    term,
    onChange,
    onSubmit,
  }: Props = props;

  return (
    <form onSubmit={onSubmit}>
      <PaperContainer>
        <InputBase
          value={term}
          onChange={onChange}
          placeholder="Search User"
        />
        <SearchIconButton
          arial-label="Search"
          type="submit"
        >
          <Search />
        </SearchIconButton>
      </PaperContainer>
    </form>
  );
};

export default SearchBar;

const PaperContainer: React.FC<any> = styled(Paper)`
  && {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 4px 4px 4px 16px;
    width: 100%;
    border-radius: 40px;
    border: 1px solid rgba(0,0,0,0.1);
    box-shadow: unset;
  }
`;

const SearchIconButton: React.FC<any> = styled(IconButton)`
  && {
    color: #f77d92;

    &:hover {
      background-color: #f77d92;
      color: white;
    }
  }
`;

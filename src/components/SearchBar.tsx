// tslint:disable: no-any
import React from 'react';
import styled from 'styled-components';
import {
  Button,
  Input,
  InputGroup,
  InputGroupAddon,
} from 'reactstrap';
import { MdSearch } from 'react-icons/md';

interface Props {
  term: string;
  onChange: (event: React.SyntheticEvent<HTMLInputElement>) => void;
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
      <InputGroup>
        <Input
          value={term}
          onChange={onChange}
          placeholder="Search user"
        />
        <InputGroupAddon addonType="append">
          <SearchButton type="submit">
            <MdSearch />
          </SearchButton>
        </InputGroupAddon>
      </InputGroup>
    </form>
  );
};

export default SearchBar;

const SearchButton: React.FC<any> = styled(Button)`
  && {
    background-color: #f77d92;
    border-color: #f94d6b;

    &:hover {
      background-color: #f793a4;
      border-color: #f77d92;
    }

    &&:active {
      background-color: #f793a4;
      border-color: #f77d92;
    }
  }
`;

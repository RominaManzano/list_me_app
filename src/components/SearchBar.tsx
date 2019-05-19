import React from 'react';
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
          placeholder="Input name..."
        />
        <InputGroupAddon addonType="append">
          <Button
            color="primary"
            type="submit"
          >
            <MdSearch />
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </form>
  );
};

export default SearchBar;

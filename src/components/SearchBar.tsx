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
}

const SearchBar: React.FC<Props> = (props: Props) => {
  const {
    term,
    onChange,
  }: Props = props;

  return (
    <div>
      <InputGroup>
        <Input
          value={term}
          onChange={onChange}
          placeholder="Input name..."
        />
        <InputGroupAddon addonType="append">
          <Button color="primary">
            <MdSearch />
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default SearchBar;

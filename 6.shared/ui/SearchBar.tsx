import { useState } from "react";

import Button from "./Button";
import styled from "styled-components";

interface Props {
  placeholder?: string;
  buttonText?: string;
  searchAction: (value: string) => void;
}

function SearchBar({
  placeholder = "",
  buttonText = "검색",
  searchAction,
}: Props) {
  const [value, setValue] = useState("");

  return (
    <Root>
      <Input
        placeholder={placeholder}
        className="search-bar--input"
        onInput={(e) => setValue(e.currentTarget.value)}
        value={value}
      />
      <Button onClick={() => searchAction(value)}>{buttonText}</Button>
    </Root>
  );
}

const Root = styled.div`
  height: 4rem;
  width: 40rem;
  display: flex;
`;

const Input = styled.input`
  height: inherit;
  margin-right: 1rem;
  flex: 1;
  outline: none;
  padding: 0 1rem;
  border-radius: 4px;
  border: 1px solid #000;
`;

SearchBar.displayName = "SearchBar";

export default SearchBar;

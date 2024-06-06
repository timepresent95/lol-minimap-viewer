import { useState } from "react";

import { Button, Input } from "@/6.shared/ui";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function SummonerSearchBar() {
  const [gameName, setGameName] = useState("");
  const [tagLine, setTagLine] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <SearchContainer>
        <InputContainer>
          <InputItem $flexGrow={2}>
            <Label>GAME NAME</Label>
            <Input
              onInput={(e) => setGameName(e.currentTarget.value)}
              value={gameName}
            />
          </InputItem>
          <InputItem $flexGrow={1}>
            <Label>TAGLINE</Label>
            <Input
              onInput={(e) => setTagLine(e.currentTarget.value)}
              value={tagLine}
            />
          </InputItem>
        </InputContainer>
        <Button
          onClick={() => {
            const url = `/summoner/${gameName}/${tagLine}`;
            console.log(url);
            navigate(url);
          }}>
          검색
        </Button>
      </SearchContainer>
      <FindAccountLink
        href="https://account.riotgames.com/#riot-id"
        target="_blank">
        만약 소환사 이름 또는 tagline을 모른다면?
      </FindAccountLink>
    </div>
  );
}

const Label = styled.label`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 4px;
  display: block;
`;

const InputItem = styled.div<{ $flexGrow: number }>`
  flex: ${(props) => props.$flexGrow};
`;
const InputContainer = styled.div`
  display: flex;
  width: 35rem;
  gap: 1rem;
  margin-right: 1rem;
`;

const FindAccountLink = styled.a`
  margin-top: 2rem;
  padding-left: 1rem;
  display: block;
  font-size: 1.3rem;
  text-decoration: underline;
  color: var(--slate-500);
  &:hover {
    color: var(--blue-500);
  }
  &:active {
    color: var(--blue-700);
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: end;
`;

SummonerSearchBar.displayName = "SummonerSearchBar";

export default SummonerSearchBar;

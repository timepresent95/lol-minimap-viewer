import styled from "styled-components";
import { RankInfo } from "../model";

type Props = Pick<RankInfo, "queue">;

function UnrankedLeagueComponent({ queue }: Props) {
  return (
    <League>
      <LeagueTitle>{queue}</LeagueTitle>
      <UnrankedText>Unranked</UnrankedText>
    </League>
  );
}

const League = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-radius: 4px;
  background-color: var(--slate-600); //600
  padding: 0.8rem 1.6rem;
  font-size: 1.6rem;
`;

const LeagueTitle = styled.span`
  font-weight: normal;
`;

const UnrankedText = styled.span`
  color: var(--slate-400); //400
  font-weight: bold;
`;

UnrankedLeagueComponent.displayName = "UnrankedLeagueComponent";
export default UnrankedLeagueComponent;

import styled from "styled-components";
import { capitalizeFirst } from "@/6.shared/lib/string";
import { Rank } from "../model";

interface Props {
  rankInfo: Rank;
}
function LeagueComponent({ rankInfo }: Props) {
  const tierName = capitalizeFirst(rankInfo.tier);
  return (
    <League>
      <LeagueTitle>{rankInfo.queue}</LeagueTitle>
      <LeagueContent>
        <EmblemContainer>
          <Emblem
            src={`/public/image/emblem/${tierName}.png`}
            alt="emblem"
            width="80%"
          />
        </EmblemContainer>
        <Info>
          <Tier>
            {tierName} {rankInfo.rank}
          </Tier>
          <LP>{rankInfo.leaguePoints} LP</LP>
        </Info>
        <WinLoseContainer>
          <p>
            {rankInfo.wins}승 {rankInfo.losses}패
          </p>
          <p>승률 {rankInfo.winingRate}%</p>
        </WinLoseContainer>
      </LeagueContent>
    </League>
  );
}

const League = styled.div`
  width: 100%;
  border-radius: 4px;
  background-color: var(--slate-600); //600
`;

const LeagueTitle = styled.h6`
  font-size: 1.6rem;
  font-weight: normal;
  padding: 0.8rem 1.6rem;
  border-bottom: solid 2px #0f172a; //900
`;

const LeagueContent = styled.div`
  display: flex;
  align-items: center;
  padding: 1.2rem 1.6rem;
`;

const EmblemContainer = styled.div`
  border-radius: 100%;
  width: 7.2rem;
  height: 7.2rem;
  background-color: var(--slate-700); //700
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Emblem = styled.img`
  transform: translateY(5%);
`;

const Info = styled.div`
  margin-left: 2rem;
`;
const Tier = styled.p`
  font-size: 2rem;
  font-weight: bold;
`;
const LP = styled.p`
  margin-top: 0.5rem;
  font-size: 1.2rem;
  color: var(--slate-400); //400
`;

const WinLoseContainer = styled.div`
  margin-left: auto;
  color: var(--slate-400); //400
  text-align: right;
`;

const WinRate = styled.p`
  margin-top: 0.5rem;
`;

LeagueComponent.displayName = "LeagueComponent";
export default LeagueComponent;

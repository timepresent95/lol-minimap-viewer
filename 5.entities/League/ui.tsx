import styled from "styled-components";
import { Rank } from "./model";
import { capitalizeFirst } from "@/6.shared/lib/string";

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
  background-color: #475569; //600
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
  background-color: #334155; //700
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
  font-size: 1.2rem;
  color: #94a3b8; //400
`;

const WinLoseContainer = styled.div`
  margin-left: auto;
  color: #94a3b8; //400
  text-align: right;
`;

LeagueComponent.displayName = "LeagueComponent";
export default LeagueComponent;

import styled from "styled-components";

function LeagueComponent() {
  return (
    <League>
      <LeagueTitle>솔로 랭크</LeagueTitle>
      <LeagueContent>
        <EmblemContainer>
          <img
            src="/public/image/emblem/Bronze.png"
            alt="emblem"
            width="100%"
          />
        </EmblemContainer>
        <Info>
          <Tier>Emerald 1</Tier>
          <LP>67 LP</LP>
        </Info>
        <WinLoseContainer>
          <p>52승 32패</p>
          <p>승률 62%</p>
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
`;

LeagueComponent.displayName = "LeagueComponent";
export default LeagueComponent;

import styled from "styled-components";

function SummonerComponent() {
  return (
    <Summoner>
      <ProfileIcon>
        <ProfileImage
          src="/public/image/profileicon/0.png"
          alt="profile icon"
        />
        <SummonerLevel>154</SummonerLevel>
      </ProfileIcon>
      <SummonerInfo>
        <SummonerName>
          <GameName>chichchic</GameName>
          <TagName>#KR1</TagName>
        </SummonerName>
        <RankInfo>
          래더 랭킹 <RankInfoStress>176,372위</RankInfoStress>&nbsp;(상위 5.63%)
        </RankInfo>
      </SummonerInfo>
    </Summoner>
  );
}

const Summoner = styled.div`
  display: flex;
  background-color: #334155; //700
  gap: 2rem;
  padding: 2rem 4rem 3rem 0.5rem;
  border-radius: 4px;
`;

const ProfileIcon = styled.div`
  position: relative;
  margin-bottom: 13px;
`;

const ProfileImage = styled.img`
  border-radius: 8px;
`;

const SummonerLevel = styled.span`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  border-radius: 8px;
  background-color: #475569; //600
  padding: 4px 8px;
`;

const SummonerInfo = styled.div``;
const SummonerName = styled.div`
  font-size: 2.4rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;
const GameName = styled.span`
  margin-right: 1rem;
`;
const TagName = styled.span`
  color: #94a3b8; //400
`;
const RankInfo = styled.p`
  color: #94a3b8; //400
`;
const RankInfoStress = styled.span`
  color: #60a5fa; //blue 400
`;

SummonerComponent.displayName = "SummonerComponent";
export default SummonerComponent;

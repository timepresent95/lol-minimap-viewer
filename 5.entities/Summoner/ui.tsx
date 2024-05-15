import styled from "styled-components";
import dayjs from "dayjs";

interface Props {
  gameName: string;
  tagLine: string;
  profileIconId: number;
  summonerLevel: number;
  revisionDate: Date;
}
function SummonerComponent(props: Props) {
  return (
    <Summoner>
      <ProfileIcon>
        <ProfileImage
          src={`/public/image/profileicon/${props.profileIconId}.png`}
          alt="profile icon"
        />
        <SummonerLevel>{props.summonerLevel}</SummonerLevel>
      </ProfileIcon>
      <SummonerInfo>
        <SummonerName>
          <GameName>{props.gameName}</GameName>
          <TagLine>{props.tagLine}</TagLine>
        </SummonerName>
        <RankInfo>
          래더 랭킹 <RankInfoStress>176,372위</RankInfoStress>&nbsp;(상위 5.63%)
        </RankInfo>
        <UpdateLog>
          최근 업데이트: {dayjs().diff(props.revisionDate, "h")}시간 전
        </UpdateLog>
      </SummonerInfo>
    </Summoner>
  );
}

const Summoner = styled.div`
  display: flex;
  background-color: #334155; //700
  gap: 2rem;
  padding: 2rem 4rem 1rem 1rem;
  border-radius: 4px;
`;

const ProfileIcon = styled.div`
  position: relative;
  margin-bottom: 13px;
`;

const ProfileImage = styled.img`
  border-radius: 8px;
  width: 12rem;
  height: 12rem;
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

const SummonerInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
`;
const SummonerName = styled.div`
  font-size: 2.4rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;
const GameName = styled.span`
  margin-right: 1rem;
`;
const TagLine = styled.span`
  color: #94a3b8; //400
`;
const RankInfo = styled.p`
  color: #94a3b8; //400
  flex: 1;
`;
const RankInfoStress = styled.span`
  color: #60a5fa; //blue 400
`;

const UpdateLog = styled.p`
  color: #94a3b8; //400
`;

SummonerComponent.displayName = "SummonerComponent";
export default SummonerComponent;

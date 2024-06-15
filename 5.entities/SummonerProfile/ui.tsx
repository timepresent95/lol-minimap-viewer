import styled from "styled-components";
import dayjs from "dayjs";

interface Props {
  gameName: string;
  tagLine: string;
  profileIconId: number;
  summonerLevel: number;
  updatedAt: Date;
}

const PROFILE_ICON_IMAGE_BASE_URL =
  "https://ddragon.leagueoflegends.com/cdn/14.11.1/img/profileicon";

function SummonerProfile(props: Props) {
  const updatedAt = dayjs().diff(props.updatedAt, "h");

  return (
    <Root>
      <ProfileIcon>
        <ProfileImage
          src={`${PROFILE_ICON_IMAGE_BASE_URL}/${props.profileIconId}.png`}
          alt="profile icon"
        />
        <SummonerLevel>{props.summonerLevel}</SummonerLevel>
      </ProfileIcon>
      <SummonerInfo>
        <SummonerName>
          <GameName>{props.gameName}</GameName>
          <TagLine>#{props.tagLine}</TagLine>
        </SummonerName>
        <UpdateLog>
          최근 업데이트:{" "}
          {updatedAt === 0 ? "1 시간 미만 전" : `${updatedAt} 시간 전`}
        </UpdateLog>
      </SummonerInfo>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  background-color: var(--slate-700); //700
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
  background-color: var(--slate-600); //600
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
  color: var(--slate-400);
`;
const UpdateLog = styled.p`
  color: var(--slate-400);
`;

SummonerProfile.displayName = "SummonerComponent";
export default SummonerProfile;

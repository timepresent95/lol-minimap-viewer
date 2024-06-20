import { getSummonerPlayInfo } from "@/4.features/SummonerSearch/api";
import { LeagueUi, UnrankedLeagueUi } from "@/5.entities/League/ui";
import MatchComponent from "@/3.widget/Match/ui";
import SummonerProfile from "@/5.entities/SummonerProfile/ui";
import { useLoaderData } from "react-router-dom";
import styled from "styled-components";
import { getSummonerMatches } from "@/3.widget/Match/api";

function SummonerPage() {
  const { playInfo, matches } = useLoaderData() as {
    playInfo: Awaited<ReturnType<typeof getSummonerPlayInfo>>;
    matches: Awaited<ReturnType<typeof getSummonerMatches>>;
  };
  const {
    gameName,
    tagLine,
    profileIconId,
    summonerLevel,
    updatedAt,
    puuid,
    rankInfos,
  } = playInfo;

  const soloRank = rankInfos.find(({ queue }) => queue === "솔로 랭크");
  const flexRank = rankInfos.find(({ queue }) => queue === "자유 랭크");

  return (
    <PageContainer>
      <UserInfo>
        <SummonerProfile
          gameName={gameName}
          tagLine={tagLine}
          profileIconId={profileIconId}
          summonerLevel={summonerLevel}
          updatedAt={updatedAt}
        />
        {soloRank ? (
          <LeagueUi rankInfo={soloRank} />
        ) : (
          <UnrankedLeagueUi queue="솔로 랭크" />
        )}
        {flexRank ? (
          <LeagueUi rankInfo={flexRank} />
        ) : (
          <UnrankedLeagueUi queue="자유 랭크" />
        )}
      </UserInfo>
      <div>
        {matches.map((v) => (
          <MatchComponent key={v.gameId} matchInfo={v} myPuuid={puuid} />
        ))}
      </div>
    </PageContainer>
  );
}

const PageContainer = styled.section`
  max-width: 1024px;
  margin: 2rem auto;
  display: flex;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 40rem;
`;

SummonerPage.displayName = "SummonerPage";

export default SummonerPage;

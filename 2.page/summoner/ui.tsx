import { getSummonerInfoByAccount } from "@/4.features/SummonerSearch/api";
import { LeagueUi, UnrankedLeagueUi } from "@/5.entities/League/ui";
import SummonerComponent from "@/5.entities/Summoner/ui";
import { useLoaderData } from "react-router-dom";
import styled from "styled-components";

function SummonerPage() {
  const {
    gameName,
    tagLine,
    profileIconId,
    summonerLevel,
    revisionDate,
    ranks,
  } = useLoaderData() as Awaited<ReturnType<typeof getSummonerInfoByAccount>>;

  const soloRank = ranks.find((v) => v.queue === "솔로 랭크");
  const flexRank = ranks.find((v) => v.queue === "자유 랭크");

  return (
    <PageContainer>
      <UserInfo>
        <SummonerComponent
          gameName={gameName}
          tagLine={tagLine}
          profileIconId={profileIconId}
          summonerLevel={summonerLevel}
          revisionDate={revisionDate}
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
    </PageContainer>
  );
}

const PageContainer = styled.section`
  max-width: 1024px;
  margin: 2rem auto;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 40rem;
`;

SummonerPage.displayName = "SummonerPage";

export default SummonerPage;

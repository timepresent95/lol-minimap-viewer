// import styled from "styled-components";
import { getSummonerInfoByAccount } from "@/4.features/SummonerSearch/api";
import LeagueComponent from "@/5.entities/League/ui";
import SummonerComponent from "@/5.entities/Summoner/ui";
import { useLoaderData } from "react-router-dom";
import styled from "styled-components";

function SummonerPage() {
  const { gameName, tagLine, profileIconId, summonerLevel, revisionDate } =
    useLoaderData() as Awaited<ReturnType<typeof getSummonerInfoByAccount>>;

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
        <LeagueComponent />
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

// import styled from "styled-components";
import LeagueComponent from "@/5.entities/League/ui";
import SummonerComponent from "@/5.entities/Summoner/ui";
import { useLoaderData } from "react-router-dom";
import styled from "styled-components";

function SummonerPage() {
  const data = useLoaderData();

  return (
    <PageContainer>
      <UserInfo>
        <SummonerComponent />
        <LeagueComponent />
      </UserInfo>
      <code>{JSON.stringify(data)}</code>
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

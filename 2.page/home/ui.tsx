import styled from "styled-components";
import SummonerSearchBar from "@/4.features/SummonerSearch/ui";

function HomePage() {
  return (
    <Root>
      <SummonerSearchBar />
    </Root>
  );
}

const Root = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

HomePage.displayName = "HomePage";

export default HomePage;

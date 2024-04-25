import styled from "styled-components";
import SearchBar from "@/5.entities/SummonerSearchBar/ui";

function HomePage() {
  return (
    <Root>
      <SearchBar />
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

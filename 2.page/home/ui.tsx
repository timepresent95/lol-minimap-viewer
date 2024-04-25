import styled from "styled-components";
import SearchBar from "../../6.shared/ui/SearchBar";

function HomePage() {
  return (
    <Root>
      <SearchBar
        searchAction={() => {}}
        placeholder="소환사이름을 입력해주세요"
      />
    </Root>
  );
}

const Root = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

HomePage.displayName = "HomePage";

export default HomePage;

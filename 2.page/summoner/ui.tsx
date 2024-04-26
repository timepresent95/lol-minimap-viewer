// import styled from "styled-components";
import { useLoaderData } from "react-router-dom";

function SummonerPage() {
  const data = useLoaderData();

  return <code>{JSON.stringify(data)}</code>;
}

SummonerPage.displayName = "SummonerPage";

export default SummonerPage;

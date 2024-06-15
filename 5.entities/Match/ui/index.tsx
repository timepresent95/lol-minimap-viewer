import ChampionComponent from "@/5.entities/Champion/ui";
import MatchTeamComponent from "./matchTeam";
import { extractMe, extractTeams } from "../lib";
import { Match } from "../model";
import styled from "styled-components";

interface Props {
  matchInfo: Match;
  myPuuid: string;
}

const MatchSummaryContainer = styled.div``;
const MatchSummoaryGameInfo = styled.div``;
const GameMode = styled.span``;
const GameCreation = styled.span``;
const GameResult = styled.span``;
const GameDuration = styled.span``;

//NOTE: Arena 형식은 불가능함
function MatchComponent({ matchInfo, myPuuid }: Props) {
  if (matchInfo.gameMode === "cherry") {
    //XXX: Arena를 대응할수 있는 컴포넌트를 만들어야 함
    return null;
  }
  const meInMatch = extractMe(matchInfo, myPuuid);
  const { blueTeam, redTeam } = extractTeams(matchInfo);

  return (
    <section>
      <MatchSummaryContainer>
        <MatchSummoaryGameInfo>
          <div>
            <GameMode>{matchInfo.gameMode}</GameMode>
            <GameCreation>{matchInfo.gameCreation.toString()}</GameCreation>
          </div>
          <hr />
          <div>
            <GameResult>{meInMatch.win}</GameResult>
            <GameDuration>{matchInfo.gameDuration}</GameDuration>
          </div>
        </MatchSummoaryGameInfo>
        <div>
          <div>
            <ChampionComponent
              name={meInMatch.championName}
              level={meInMatch.champLevel}
              fullRounded={true}
              championImgUrl={meInMatch.championImgUrl}
              size="4.8rem"
              levelDirection="right"
            />
            <div>
              {meInMatch.summonerSpells.map(({ imageUrl, name }) => (
                <img src={imageUrl} alt={name} />
              ))}
            </div>
            <div>
              <span>
                {meInMatch.kills}/{meInMatch.deaths}/{meInMatch.assists}
              </span>
              <span>
                {Math.round(
                  ((meInMatch.kills + meInMatch.assists) / meInMatch.deaths) *
                    100
                ) / 100}
                :1 평점
              </span>
            </div>
          </div>
          {/* <div>
            <span>{meInMatch.item0}</span>
            <span>{meInMatch.item1}</span>
            <span>{meInMatch.item2}</span>
            <span>{meInMatch.item3}</span>
            <span>{meInMatch.item4}</span>
            <span>{meInMatch.item5}</span>
            <span>{meInMatch.trinket}</span>
          </div> */}
        </div>
        <div>
          <span>킬관여 {meInMatch.killAssistantRate}%</span>
          <span>제어 와드 {meInMatch.detectorWardsPlaced}</span>
          <span>
            CS{meInMatch.totalMinionsKilled + meInMatch.neutralMinionsKilled} (
            {Math.round(
              ((meInMatch.totalMinionsKilled + meInMatch.neutralMinionsKilled) /
                Math.floor(matchInfo.gameDuration / 60)) *
                100
            ) / 100}
            )
          </span>
        </div>
        <div>
          <div>
            {blueTeam.members.map((v) => (
              <div>
                <ChampionComponent
                  championImgUrl={v.championImgUrl}
                  name={v.championName}
                  level={v.champLevel}
                  fullRounded={true}
                  size="1.6rem"
                />
                <span>{v.riotIdGameName}</span>
              </div>
            ))}
          </div>
          <div>
            {redTeam.members.map((v) => (
              <div>
                <ChampionComponent
                  championImgUrl={v.championImgUrl}
                  name={v.championName}
                  level={v.champLevel}
                  fullRounded={true}
                  size="1.6rem"
                />
                <span>{v.riotIdGameName}</span>
              </div>
            ))}
          </div>
        </div>
      </MatchSummaryContainer>
      <section>
        <MatchTeamComponent
          matchInfo={matchInfo}
          win={blueTeam.win}
          isBlueTeam={true}
          members={blueTeam.members}
        />
        <div>
          <div>
            <div>{blueTeam.teamBaronKills}</div>
            <div>{blueTeam.teamDragonKills}</div>
            <div>{blueTeam.teamRiftHeraldKills}</div>
            <div>{blueTeam.teamHordeKills}</div>
            <div>{blueTeam.teamTowerKills}</div>
            <div>{blueTeam.teamInhibitorKills}</div>
          </div>
          <div>
            <progress
              value={Math.round(
                (blueTeam.totalKill /
                  (blueTeam.totalKill + redTeam.totalKill)) *
                  100
              )}
            />
            <progress
              value={Math.round(
                (blueTeam.totalGold /
                  (blueTeam.totalGold + redTeam.totalGold)) *
                  100
              )}
            />
          </div>
          <div>
            <div>{redTeam.teamBaronKills}</div>
            <div>{redTeam.teamDragonKills}</div>
            <div>{redTeam.teamRiftHeraldKills}</div>
            <div>{redTeam.teamHordeKills}</div>
            <div>{redTeam.teamTowerKills}</div>
            <div>{redTeam.teamInhibitorKills}</div>
          </div>
        </div>
        <MatchTeamComponent
          matchInfo={matchInfo}
          win={redTeam.win}
          isBlueTeam={false}
          members={redTeam.members}
        />
      </section>
    </section>
  );
}

MatchComponent.displayName = "MatchComponent";
export default MatchComponent;

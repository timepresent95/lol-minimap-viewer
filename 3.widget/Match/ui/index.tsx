import ChampionComponent from "@/5.entities/Champion/ui";
import MatchTeamComponent from "./matchTeam";
import { extractCherryTeam, extractMe, extractTeams } from "../lib";
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
  if (matchInfo.gameMode === "CHERRY") {
    const teams = extractCherryTeam(matchInfo);
    return (
      <section>
        {teams.map((v, i) => (
          <MatchTeamComponent
            key={i}
            matchInfo={matchInfo}
            win={i < 4}
            isBlueTeam={i < 4}
            members={v.members}
          />
        ))}
      </section>
    );
  }

  const meInMatch = extractMe(matchInfo, myPuuid);
  const teams = extractTeams(matchInfo);

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
              {meInMatch.championCustom.map(({ imgUrl }, i) =>
                imgUrl === null ? (
                  <div key={i}></div>
                ) : (
                  <img src={imgUrl} alt="perk" key={i} />
                )
              )}
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
          <div>
            {meInMatch.item0 && (
              <img src={meInMatch.item0.imageUrl} alt={meInMatch.item0.name} />
            )}
            {meInMatch.item1 && (
              <img src={meInMatch.item1.imageUrl} alt={meInMatch.item1.name} />
            )}
            {meInMatch.item2 && (
              <img src={meInMatch.item2.imageUrl} alt={meInMatch.item2.name} />
            )}
            {meInMatch.item3 && (
              <img src={meInMatch.item3.imageUrl} alt={meInMatch.item3.name} />
            )}
            {meInMatch.item4 && (
              <img src={meInMatch.item4.imageUrl} alt={meInMatch.item4.name} />
            )}
            {meInMatch.item5 && (
              <img src={meInMatch.item5.imageUrl} alt={meInMatch.item5.name} />
            )}
            {meInMatch.trinket && (
              <img
                src={meInMatch.trinket.imageUrl}
                alt={meInMatch.trinket.name}
              />
            )}
          </div>
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
            {teams[0].members.map((v, i) => (
              <div key={i}>
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
            {teams[1].members.map((v, i) => (
              <div key={i}>
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
          win={teams[0].win}
          isBlueTeam={true}
          members={teams[0].members}
        />
        <div>
          <div>
            <div>{teams[0].teamBaronKills}</div>
            <div>{teams[0].teamDragonKills}</div>
            <div>{teams[0].teamRiftHeraldKills}</div>
            <div>{teams[0].teamHordeKills}</div>
            <div>{teams[0].teamTowerKills}</div>
            <div>{teams[0].teamInhibitorKills}</div>
          </div>
          <div>
            <progress
              value={Math.round(
                (teams[0].totalKill /
                  (teams[0].totalKill + teams[1].totalKill)) *
                  100
              )}
            />
            <progress
              value={Math.round(
                (teams[0].totalGold /
                  (teams[0].totalGold + teams[1].totalGold)) *
                  100
              )}
            />
          </div>
          <div>
            <div>{teams[1].teamBaronKills}</div>
            <div>{teams[1].teamDragonKills}</div>
            <div>{teams[1].teamRiftHeraldKills}</div>
            <div>{teams[1].teamHordeKills}</div>
            <div>{teams[1].teamTowerKills}</div>
            <div>{teams[1].teamInhibitorKills}</div>
          </div>
        </div>
        <MatchTeamComponent
          matchInfo={matchInfo}
          win={teams[1].win}
          isBlueTeam={false}
          members={teams[1].members}
        />
      </section>
    </section>
  );
}

MatchComponent.displayName = "MatchComponent";
export default MatchComponent;

import ChampionComponent from "@/5.entities/Champion/ui";
import styled from "styled-components";
import { Match, Participant } from "../model";

interface Props {
  matchInfo: Match;
  win: boolean;
  isBlueTeam: boolean;
  members: (Participant & { killAssistantRate: number })[];
}

function MatchTeamComponent({ matchInfo, win, isBlueTeam, members }: Props) {
  const gameResult = win ? "승리" : "패배";
  const teamType = isBlueTeam ? "블루팀" : "레드팀";
  const maxAmount = members.reduce(
    (acc, cur) =>
      Math.max(
        acc,
        Math.max(cur.totalDamageDealtToChampions, cur.totalDamageTaken)
      ),
    0
  );
  return (
    <section>
      <table>
        <thead>
          <th>
            <span>{gameResult}</span>&nbsp;({teamType})
          </th>
          <th>KDA</th>
          <th>피해량</th>
          <th>와드</th>
          <th>CS</th>
          <th>아이템</th>
        </thead>
        <tbody>
          {members.map((v) => (
            <tr>
              <ChampionInfo>
                <ChampionComponent
                  championImgUrl={v.championImgUrl}
                  name={v.championName}
                  level={v.champLevel}
                  fullRounded={true}
                  size="3.2rem"
                />
                <div>
                  <span>{v.summoner1Id}</span>
                  <span>{v.summoner2Id}</span>
                  <span>{v.primaryPerkStyle}</span>
                  <span>{v.subPerkStyle}</span>
                </div>
                <div>
                  <span>{v.riotIdGameName}</span>
                </div>
              </ChampionInfo>
              <td>
                <span>
                  {v.kills}/{v.deaths}/{v.assists}&nbsp;(
                  {v.killAssistantRate}%)
                </span>
                <span>
                  {Math.round(((v.kills + v.assists) / v.deaths) * 100) / 100}
                  :1
                </span>
              </td>
              <td>
                <div>
                  <span>{v.totalDamageDealtToChampions}</span>
                  <progress
                    value={Math.round(
                      (v.totalDamageDealtToChampions / maxAmount) * 100
                    )}
                  />
                </div>
                <div>
                  <span>{v.totalDamageTaken}</span>
                  <progress
                    value={Math.round((v.totalDamageTaken / maxAmount) * 100)}
                  />
                </div>
              </td>
              <td>
                <span>{v.detectorWardsPlaced}</span>
                <span>
                  {v.wardsPlaced} / {v.wardsKilled}
                </span>
              </td>
              <td>
                <span>{v.totalMinionsKilled + v.neutralMinionsKilled}</span>
                <span>
                  분당{" "}
                  {Math.round(
                    ((v.totalMinionsKilled + v.neutralMinionsKilled) /
                      Math.floor(matchInfo.gameDuration / 60)) *
                      100
                  ) / 100}
                </span>
              </td>
              <td>
                {/* <div>
                  <span>{v.item0}</span>
                  <span>{v.item1}</span>
                  <span>{v.item2}</span>
                  <span>{v.item3}</span>
                  <span>{v.item4}</span>
                  <span>{v.item5}</span>
                  <span>{v.trinket}</span>
                </div> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

const ChampionInfo = styled.th`
  font-weight: normal;
`;

MatchTeamComponent.displayName = "MatchTeamComponent";
export default MatchTeamComponent;

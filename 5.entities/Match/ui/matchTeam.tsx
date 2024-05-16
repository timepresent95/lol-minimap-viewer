import { Champion } from "@/5.entities/Champion/model";
import ChampionComponent from "@/5.entities/Champion/ui";
import styled from "styled-components";

type Item = number | undefined;

interface Participant {
  champion: Champion;
  spell1: number;
  spell2: number;
  rune1: number;
  rune2: number;
  gameName: string;
  league?: {
    rank: string;
    tier: string;
  };
  level: number;
  kills: number;
  deathes: number;
  assistants: number;
  killAssistantRate: number;
  attacks: number;
  depenses: number;
  controlWards: number;
  setWards: number;
  removeWards: number;
  totalCs: number;
  csPerMin: number;
  items: [Item, Item, Item, Item, Item, Item];
  wardItem: number;
}

export interface MatchTeamMeta {
  isWin: boolean;
  isBlueTeam: boolean;
  participants: [
    Participant,
    Participant,
    Participant,
    Participant,
    Participant
  ];
}

interface Props extends MatchTeamMeta {}

function MatchTeamComponent({ isWin, isBlueTeam, participants }: Props) {
  const gameResult = isWin ? "승리" : "패배";
  const teamType = isBlueTeam ? "블루팀" : "레드팀";
  const maxAmount = participants.reduce(
    (acc, cur) => Math.max(acc, Math.max(cur.attacks, cur.depenses)),
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
          {participants.map((v) => (
            <tr>
              <ChampionInfo>
                <ChampionComponent
                  {...v.champion}
                  fullRounded={true}
                  size="3.2rem"
                />
                <div>
                  <span>{v.spell1}</span>
                  <span>{v.spell2}</span>
                  <span>{v.rune1}</span>
                  <span>{v.rune2}</span>
                </div>
                <div>
                  <span>{v.gameName}</span>
                  {v.league ? (
                    <span>
                      {v.league.rank}&nbsp;
                      {v.league.tier}
                    </span>
                  ) : (
                    <span>Level {v.level}</span>
                  )}
                </div>
              </ChampionInfo>
              <td>
                <span>
                  {v.kills}/{v.deathes}/{v.assistants}&nbsp;(
                  {v.killAssistantRate}%)
                </span>
                <span>
                  {Math.round(((v.kills + v.assistants) / v.deathes) * 100) /
                    100}
                  :1
                </span>
              </td>
              <td>
                <div>
                  <span>{v.attacks}</span>
                  <progress value={Math.round((v.attacks / maxAmount) * 100)} />
                </div>
                <div>
                  <span>{v.depenses}</span>
                  <progress
                    value={Math.round((v.depenses / maxAmount) * 100)}
                  />
                </div>
              </td>
              <td>
                <span>{v.controlWards}</span>
                <span>
                  {v.setWards} / {v.removeWards}
                </span>
              </td>
              <td>
                <span>{v.totalCs}</span>
                <span>분당 {v.csPerMin}</span>
              </td>
              <td>
                <div>
                  {v.items.map((item) => (
                    <span>{item}</span>
                  ))}
                  <span>{v.wardItem}</span>
                </div>
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

import ChampionComponent from "@/5.entities/Champion/ui";
import MatchTeamComponent, { MatchTeamMeta } from "./matchTeam";
import { Champion } from "@/5.entities/Champion/model";

type Item = number | undefined;

interface Participant {
  champion: Champion;
  gameName: string;
}

export interface Props {
  queue: string;
  playedAt: Date;
  isWin: boolean;
  playTime: number;
  champion: Champion;
  spell1: number;
  spell2: number;
  rune1: number;
  rune2: number;
  kills: number;
  deathes: number;
  assistants: number;
  killAssistantRate: number;
  controlWards: number;
  totalCs: number;
  csPerMin: number;
  league?: {
    rank: string;
    tier: string;
  };
  level: number;
  participants: [
    [Participant, Participant, Participant, Participant, Participant],
    [Participant, Participant, Participant, Participant, Participant]
  ];
  items: [Item, Item, Item, Item, Item, Item];
  wardItem: number;
  matchTeamMeta: [MatchTeamMeta, MatchTeamMeta];
}

function MatchComponent(props: Props) {
  const gameResult = props.isWin ? "승리" : "패배";

  return (
    <section>
      <section>
        <div>
          <div>
            <span>{props.queue}</span>
            <span>{props.playedAt.toString()}</span>
          </div>
          <hr />
          <div>
            <span>{gameResult}</span>
            <span>{props.playTime}</span>
          </div>
        </div>
        <div>
          <div>
            <ChampionComponent
              {...props.champion}
              fullRounded={true}
              size="4.8rem"
              levelDirection="right"
            />
            <div>
              <span>
                {props.kills}/{props.deathes}/{props.assistants}
              </span>
              <span>
                {Math.round(
                  ((props.kills + props.assistants) / props.deathes) * 100
                ) / 100}
                :1 평점
              </span>
            </div>
          </div>
          <div>
            {props.items.map((item) => (
              <span>{item}</span>
            ))}
            <span>{props.wardItem}</span>
          </div>
        </div>
        <div>
          <span>킬관여 {props.killAssistantRate}%</span>
          <span>제어 와드 {props.controlWards}</span>
          <span>
            CS{props.totalCs} ({props.csPerMin})
          </span>
          {props.league ? (
            <span>
              {props.league.rank}&nbsp;
              {props.league.tier}
            </span>
          ) : (
            <span>Level {props.level}</span>
          )}
        </div>
        <div>
          <div>
            {props.participants[0].map((v) => (
              <div>
                <ChampionComponent
                  {...v.champion}
                  fullRounded={true}
                  size="1.6rem"
                />
                <span>{v.gameName}</span>
              </div>
            ))}
          </div>
          <div>
            {props.participants[1].map((v) => (
              <div>
                <ChampionComponent
                  {...v.champion}
                  fullRounded={true}
                  size="1.6rem"
                />
                <span>{v.gameName}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <MatchTeamComponent {...props.matchTeamMeta[0]} />
        <div>
          <div>
            <div>0</div>
            <div>0</div>
            <div>0</div>
            <div>0</div>
            <div>0</div>
            <div>0</div>
          </div>
          <div>
            <progress />
            <progress />
          </div>
          <div>
            <div>0</div>
            <div>0</div>
            <div>0</div>
            <div>0</div>
            <div>0</div>
            <div>0</div>
          </div>
        </div>
        <MatchTeamComponent {...props.matchTeamMeta[1]} />
      </section>
    </section>
  );
}

MatchComponent.displayName = "MatchComponent";
export default MatchComponent;

import { Match, Participant } from "./model";

export function extractMe(matchInfo: Match, myPuuid: string) {
  const me = matchInfo.Participant.find((v) => v.puuid === myPuuid);
  if (me === undefined) {
    throw new Error("게임에 참여하지 않았습니다.");
  }

  const teamTypes = [
    ...new Set(matchInfo.Participant.map((v) => v.teamType)),
  ].sort((a, b) => a - b);

  const teamTotalKill =
    teamTypes[0] === me.teamType
      ? matchInfo.blueTotalKill
      : matchInfo.redTotalKill;

  const championCustom = formatChampionCustom(me, matchInfo.gameMode);

  return {
    ...me,
    championCustom,
    killAssistantRate:
      Math.round(((me.kills + me.assists) / teamTotalKill) * 100) / 100,
  };
}

export function extractTeams(matchInfo: Match) {
  if (matchInfo.gameMode === "CHERRY") {
    throw new Error("use extract cheery teams when match is cherry mode");
  }
  const teamTypes = [
    ...new Set(matchInfo.Participant.map((v) => v.teamType)),
  ].sort((a, b) => a - b);
  const [blueTeamMember, redTeamMember] = matchInfo.Participant.reduce(
    (acc, cur) => {
      if (cur.teamType === teamTypes[0]) {
        acc[0].push(cur);
      } else {
        acc[1].push(cur);
      }
      return acc;
    },
    [[], []] as Participant[][]
  );

  const blueTeam = {
    members: blueTeamMember.map((v) => ({
      ...v,
      championCustom: formatChampionCustom(v, matchInfo.gameMode),
      killAssistantRate:
        Math.round(((v.kills + v.assists) / matchInfo.blueTotalKill) * 100) /
        100,
    })),
    win: blueTeamMember[0].win,
    teamBaronKills: matchInfo.blueTeamBaronKills,
    teamDragonKills: matchInfo.blueTeamDragonKills,
    teamRiftHeraldKills: matchInfo.blueTeamRiftHeraldKills,
    teamHordeKills: matchInfo.blueTeamHordeKills,
    teamTowerKills: matchInfo.blueTeamTowerKills,
    teamInhibitorKills: matchInfo.blueTeamInhibitorKills,
    totalKill: matchInfo.blueTotalKill,
    totalGold: matchInfo.blueTotalGold,
  };

  const redTeam = {
    members: redTeamMember.map((v) => ({
      ...v,
      championCustom: formatChampionCustom(v, matchInfo.gameMode),
      killAssistantRate:
        Math.round(((v.kills + v.assists) / matchInfo.redTotalKill) * 100) /
        100,
    })),
    win: redTeamMember[0].win,
    teamBaronKills: matchInfo.redTeamBaronKills,
    teamDragonKills: matchInfo.redTeamDragonKills,
    teamRiftHeraldKills: matchInfo.redTeamRiftHeraldKills,
    teamHordeKills: matchInfo.redTeamHordeKills,
    teamTowerKills: matchInfo.redTeamTowerKills,
    teamInhibitorKills: matchInfo.redTeamInhibitorKills,
    totalKill: matchInfo.redTotalKill,
    totalGold: matchInfo.redTotalGold,
  };

  return [blueTeam, redTeam];
}

interface CherryTeam {
  placement: number;
  members: [Participant, Participant];
}
export function extractCherryTeam(matchInfo: Match) {
  const teamTypes = [
    ...new Set(matchInfo.Participant.map((v) => v.playerSubteamId)),
  ].sort((a, b) => a - b);

  const teams = matchInfo.Participant.reduce((acc, cur) => {
    const teamIndex = teamTypes.findIndex((v) => v === cur.playerSubteamId);
    if (teamIndex < 0) {
      throw new Error("can not find teamIndex");
    }
    acc[teamIndex].placement = cur.subteamPlacement;
    acc[teamIndex].members.push(cur);
    return acc;
  }, teamTypes.map(() => ({ placement: -1, members: [] })) as unknown as CherryTeam[]);

  return teams
    .sort((a, b) => a.placement - b.placement)
    .map(({ members }) => ({
      members: members.map((v) => ({
        ...v,
        killAssistantRate:
          Math.round(
            ((v.kills + v.assists) /
              members.reduce((acc, { kills }) => acc + kills, 0)) *
              100
          ) / 100,
      })),
    }));
}

//TODO: 상세 타입 설정 필요
type ChampionAugment = { imgUrl: string | null };
type ChampionSpell = { imgUrl: string | null };
type ChampionPerk = { imgUrl: string | null };
type ChampionCustoms =
  | [ChampionAugment, ChampionAugment, ChampionAugment, ChampionAugment]
  | [ChampionSpell, ChampionSpell, ChampionPerk, ChampionPerk];

function formatChampionCustom(participantInfo: Participant, gameMode: string) {
  const championCustom: ChampionCustoms = [
    { imgUrl: null },
    { imgUrl: null },
    { imgUrl: null },
    { imgUrl: null },
  ];

  if (gameMode === "CHERRY") {
    championCustom[0].imgUrl =
      participantInfo.playerAugment1 !== 0
        ? `/image/emblem/${participantInfo.playerAugment1}.png`
        : null;
    championCustom[1].imgUrl =
      participantInfo.playerAugment1 !== 0
        ? `/image/emblem/${participantInfo.playerAugment1}.png`
        : null;
    championCustom[2].imgUrl =
      participantInfo.playerAugment1 !== 0
        ? `/image/emblem/${participantInfo.playerAugment1}.png`
        : null;
    championCustom[3].imgUrl =
      participantInfo.playerAugment1 !== 0
        ? `/image/emblem/${participantInfo.playerAugment1}.png`
        : null;
  } else {
    championCustom[0].imgUrl = participantInfo.summonerSpells[0].imageUrl;
    championCustom[1].imgUrl = participantInfo.summonerSpells[1].imageUrl;
    championCustom[2].imgUrl = `/image/perk/${participantInfo.primaryPerk1}.png`;
    championCustom[3].imgUrl = `/image/perk/${participantInfo.subPerkStyle}.png`;
  }

  return championCustom;
}

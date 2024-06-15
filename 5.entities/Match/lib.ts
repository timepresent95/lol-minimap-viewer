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

  return {
    ...me,
    killAssistantRate:
      Math.round(((me.kills + me.assists) / teamTotalKill) * 100) / 100,
  };
}

export function extractTeams(matchInfo: Match) {
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

  return {
    blueTeam,
    redTeam,
  };
}

export function extractCherryTeams(matchInfo: Match) {
  const teams = new Map<number, Participant[]>();

  matchInfo.Participant.forEach((v) => {
    let team = teams.get(v.playerSubteamId);
    if (team === undefined) {
      team = [];
      teams.set(v.playerSubteamId, team);
    }
    team.push(v);
  });

  return [...teams].sort((a, b) => a[0] - b[0]).map((v) => v[1]);
}

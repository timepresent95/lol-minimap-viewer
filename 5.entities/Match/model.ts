import { Platform } from "@/6.shared/constant/platform";

export interface Match {
  id: string;
  version: string;
  gameId: number;
  gameCreation: Date;
  gameEndTimestamp: Date;
  gameStartTimestamp: Date;
  gameDuration: number;
  gameMode: string;
  gameName: string;
  gameType: string;
  gameVersion: string;
  mapId: number;
  platformId: Platform;
  queueId: number;
  tournamentCode: number | null;
  endOfGameResult: string;
  blueTeamBaronKills: number;
  blueTeamDragonKills: number;
  blueTeamRiftHeraldKills: number;
  blueTeamHordeKills: number;
  blueTeamTowerKills: number;
  blueTeamInhibitorKills: number;
  blueTotalKill: number;
  blueTotalGold: number;
  redTeamBaronKills: number;
  redTeamDragonKills: number;
  redTeamRiftHeraldKills: number;
  redTeamHordeKills: number;
  redTeamTowerKills: number;
  redTeamInhibitorKills: number;
  redTotalKill: number;
  redTotalGold: number;
  Participant: [
    Participant,
    Participant,
    Participant,
    Participant,
    Participant,
    Participant,
    Participant,
    Participant,
    Participant,
    Participant
  ];
}

export interface Participant {
  matchId: string;
  playerSubteamId: number;
  subteamPlacement: number;
  participantId: number;
  puuid: string;
  riotIdGameName: string;
  riotIdTagline: string;
  summonerLevel: number;
  teamType: number;
  champLevel: number;
  championId: number;
  championName: string;
  championImgUrl: string;
  summoner1Id: number;
  summoner2Id: number;
  summonerSpells: [SummonerSpell, SummonerSpell];
  depenseStatPerk: number;
  flexStatPerk: number;
  offenseStatPerk: number;
  primaryPerkStyle: number;
  primaryPerk1: number;
  primaryPerk2: number;
  primaryPerk3: number;
  primaryPerk4: number;
  subPerkStyle: number;
  subPerk1: number;
  subPerk2: number;
  kills: number;
  deaths: number;
  assists: number;
  neutralMinionsKilled: number;
  totalMinionsKilled: number;
  totalDamageDealtToChampions: number;
  totalDamageTaken: number;
  detectorWardsPlaced: number;
  wardsPlaced: number;
  wardsKilled: number;
  item0: Item | null;
  item1: Item | null;
  item2: Item | null;
  item3: Item | null;
  item4: Item | null;
  item5: Item | null;
  trinket: Item | null;
  firstBloodKill: boolean;
  firstTowerKill: boolean;
  doubleKills: number;
  tripleKills: number;
  quadraKills: number;
  pentaKills: number;
  unrealKills: number;
  win: boolean;
  playerAugment1: number;
  playerAugment2: number;
  playerAugment3: number;
  playerAugment4: number;
}

interface SummonerSpell {
  key: string;
  gameVersion: string;
  language: string;
  description: string;
  tooltip: string;
  imageUrl: string;
  name: string;
}

interface Item {
  id: number;
  gameVersion: string;
  name: string;
  description: string; //NOTE: xml 형식
  plaintext: string;
  from: number[];
  into: number[];
  imageUrl: string;
  purchasable: boolean;
  baseCost: number;
  totalCost: number;
  sellCost: number;
}

export interface League {
  leagueId: string;
  tier: string;
  queue: string;
  name?: string;
}

export interface LeagueEntry {
  leagueId: string;
  summonerId: string;
  rank: string;
  leaguePoints: number;
  wins: number;
  losses: number;
  hotStreak: boolean;
  freshBlood: boolean;
  inactive: boolean;
}

export interface RankInfo {
  leaguePoints: number;
  wins: number;
  losses: number;
  winingRate: number;
  tier: string;
  queue: "자유 랭크" | "솔로 랭크";
  rank: number;
}
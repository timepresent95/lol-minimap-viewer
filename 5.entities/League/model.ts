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

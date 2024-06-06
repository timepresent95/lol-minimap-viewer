export const regions = ["AMERICAS", "ASIA", "EUROPE", "SEA"] as const;
export type Region = (typeof regions)[number];

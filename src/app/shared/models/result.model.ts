export interface Result {
    id: number;
    homeScore: number;
    awayScore: number;
    divisionId: number;
    seasonId: number;
    homeId: number;
    awayId: number;
    matchDate: string;
    round: number;
    played: boolean;
    walkover: boolean;
    homeAdjust: number;
    awayAdjust: number;
    deleted: boolean;
}

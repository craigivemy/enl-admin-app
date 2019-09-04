export interface Season {
    id?: number;
    name: string;
    startDate?: string;
    endDate?: string;
    rounds: number;
    current: number;
    deleted?: boolean; // todo - add this to api
}

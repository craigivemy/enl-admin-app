export interface Season {
    id: number;
    name: string;
    startDate: string;
    endDate: string;
    rounds: number;
    current: boolean;
    deleted: boolean; // todo - add this to api
}

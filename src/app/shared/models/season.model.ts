import {Division} from './division.model';

export interface Season {
    id?: number;
    name: string;
    startDate?: string;
    endDate?: string;
    rounds: number;
    current: number;
    divisions?: Division[];
    deleted?: boolean; // todo - add this to api
}

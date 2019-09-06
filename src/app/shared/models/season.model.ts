import {Division} from './division.model';
import {Team} from './team.model';

export interface Season {
    id?: number;
    name: string;
    startDate?: string;
    endDate?: string;
    rounds: number;
    current: number;
    divisions?: Division[];
    teams?: Team[];
    deleted?: boolean; // todo - add this to api
}

import {Club} from './club.model';
import {Division} from './division.model';

export interface Team {
    id: number;
    name: string;
    primaryColour?: string;
    secondaryColour?: string;
    tertiaryColour?: string;
    logoUrl?: string;
    narrative?: string;
    club?: Club;
    division?: Division;
    deleted?: boolean;
}

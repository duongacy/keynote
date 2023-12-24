import { TSpeaker } from "../speaker/type";

export type TDay = {
    name: string;
    dateTime: string;
    speakers: TSpeaker[];
    summary: string
    timeSlots: Array<{
        speaker: TSpeaker;
        description?: string;
        start: string;
        end: string;
    }>
}
import { flattenArrayObject } from "../flatten";
import { TDay } from "./type";

export const getAllDays = async (): Promise<TDay[]> => {
    const result = await fetch(process.env.API_ENDPOINT + '/api/days?populate=deep');
    const resultJson = await result.json();

    return resultJson.data.map((item: any) => ({
        ...item,
        timeSlots: flattenArrayObject(item.timeSlots)
    }));
}

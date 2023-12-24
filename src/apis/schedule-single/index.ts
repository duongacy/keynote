import { TScheduleSingle } from "./type.schedule-single";

export const getSchedulesSingle = async () => {
    const result = await fetch(process.env.API_ENDPOINT + '/api/schedules-single');
    const resultJson = await result.json();

    return resultJson.data as TScheduleSingle;
}
export const getSchedulesSingleKey=()=>{
    return ['schedules-single']
}
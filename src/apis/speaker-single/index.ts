import { TSpeakersSingle } from "../speaker-single/type.speakers-single";

export const getSpeakersSingle = async (): Promise<TSpeakersSingle> => {
    const result = await fetch(process.env.API_ENDPOINT + '/api/speakers-single');
    const resultJson = await result.json();

    return resultJson.data as TSpeakersSingle;
}
export const getSpeakersSingleKey = () => {
    return ['speakers-single']
}
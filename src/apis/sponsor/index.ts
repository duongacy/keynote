import { TSponsor } from "./type.sponsor";

export const getAllSponsors = async (): Promise<TSponsor[]> => {
    const result = await fetch(process.env.API_ENDPOINT + '/api/sponsors?populate=deep');
    const resultJson = await result.json();

    return resultJson.data as TSponsor[];
}

export const getAllSponsorsKey = () => {
    return ['sponsors']
} 
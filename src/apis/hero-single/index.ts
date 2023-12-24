import { THeroSingle } from "./type.hero-single";

export const getHeroSingle = async (): Promise<THeroSingle> => {
    const result = await fetch(process.env.API_ENDPOINT + '/api/hero');
    const resultJson = await result.json();

    return resultJson.data as THeroSingle;
}

export const getHeroSingleKey = () => {
    return ['hero-single']
}
import { TSignupSingle } from "./type.signup-single";

export const getSignupSingle = async (): Promise<TSignupSingle> => {
    const result = await fetch(process.env.API_ENDPOINT + '/api/signup-single');
    const resultJson = await result.json();

    return resultJson.data as TSignupSingle;
}
export const getSignupSingleKey = () => {
    return ['signup-single']
}
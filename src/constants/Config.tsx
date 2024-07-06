import axios from "axios";

import { I18nManager } from "react-native";
import RNRestart from "react-native-restart";
import { Constants } from "./Constants";
import { saveItem } from "./helpers";

const { isRTL, forceRTL, allowRTL, swapLeftAndRightInRTL } = I18nManager;

export const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
};
export enum SERVER {
    PROD = "https://newsapi.org/v2/",
}

export const axiosAPI = axios.create({
    baseURL: SERVER.PROD,
    headers: headers,
});

axiosAPI.interceptors.response.use(function (response) {
    return response;

}, async function (error) {
    if (401 === error?.response?.status) {

    } else {
        return Promise.reject(error);
    }
})

export const ChangeLanguageHandler = async (
    code: string,
) => {
    await saveItem(Constants.LANG_CODE, code);
    allowRTL(code === "ar");
    forceRTL(code === "ar");
    swapLeftAndRightInRTL(code === "ar");
    setTimeout(() => {
        RNRestart.Restart();
    }, 300);

};
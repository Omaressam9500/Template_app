import analytics from '@react-native-firebase/analytics';
// import { IFirebasePayload } from '../constants/interfaces';
// import appsFlyer from 'react-native-appsflyer';
// import { userModel } from '../models/userModel';
import { EventNames } from './EventsNames';

export const logUIEvent = async (eventName: string, appsFlyername: string, payload: IFirebasePayload) => {
    console.log('FB ANA Event playload:', payload);

    let res = await analytics().logEvent(eventName , payload);
    // appsFlyer.logEvent(
    //     appsFlyername + " " + (userModel.getIsLive() ? "Live" : ""),
    //     payload,
    //     (res) => {
    //         console.log("EVENT Response" + res);
    //     },
    //     (err) => {
    //         console.error("Error" + err);
    //     }
    // );

}
export const setUserProperty = async (name: string, merchantID: string) => {
    console.log('FB ANA setUserProperty name', name);
    console.log('FB ANA setUserProperty value', merchantID);
    await analytics().setUserProperty(name, merchantID);
}
export const setUserID = async (email: string) => {
    console.log('FB ANA User ID name', email);
    await analytics().setUserId(email);
}

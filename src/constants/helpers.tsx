import moment from "moment";

import AsyncStorage from "@react-native-async-storage/async-storage";

export const formatDate = (dateString: string) => {

    return moment(dateString).format('YYYY/MM/DD hh:mm a');

};
export const saveItem = async (key: string, data: any) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(data));
        return true;
    } catch (error) {
    }
    return false;
};

export const getItem = async (key: string) => {
    try {
        const retrievedItem: any = await AsyncStorage.getItem(key);
        return JSON.parse(retrievedItem);
    } catch (error) {
    }
    return null;
};


export const removeItem = async (key: string) => {
    try {
        await AsyncStorage.removeItem(key);
        return true;
    } catch (error) {
    }
    return false;
};
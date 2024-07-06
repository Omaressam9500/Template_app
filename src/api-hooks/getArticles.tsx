
import { showMessage } from "react-native-flash-message";
import { useMutation, useQuery } from "react-query";
import { axiosAPI } from "../constants/Config";
import { Constants } from "../constants/Constants";




export const getArticles = (searchName: string, onSuccess?: (data: any) => void) => {
    return useQuery(["getArticles", searchName],
        () => axiosAPI.get(`everything?q=${searchName}&sortBy=publishedAt&apiKey=${Constants.API_KEY}`,),
        {

            onSuccess: (data) => {
                onSuccess && onSuccess(data);

            },
            onError: (error) => {
                  showMessage({ message: error?.message,type:'danger' })
            }
        }
    );
};
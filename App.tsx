/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

 import React from 'react';
 import type { PropsWithChildren } from 'react';
 import {
 
   StatusBar,
   StyleSheet,
 
   I18nManager,
   LogBox
 } from 'react-native';
 import { QueryClient, QueryClientProvider } from "react-query";
 import Navigation from "./src/navigation/Navigation";
 import i18n from "i18next";
 import { initReactI18next } from "react-i18next";
 import ar from "./src/localization/ar";
 import en from "./src/localization/en";
 import { ThemeProvider } from './src/context/ThemeProvider';
 import FlashMessage from 'react-native-flash-message';
 import { Pixel } from './src/constants/styleConstatnts';
 import HttpApi from 'i18next-http-backend';
 import Locize from "i18next-locize-backend";
 const { isRTL } = I18nManager;
 
 LogBox.ignoreAllLogs();
 
 const queryClient = new QueryClient();
 i18n.use(initReactI18next).use(HttpApi).init({
  backend: {
    loadPath: 'https://api.locize.app/711b5a25-d2ed-49a6-9bae-d28787e9bf6f/latest/en/TempalteApp',
    
  },
  
   resources: {
    
    //  ar: {
    //    translation: ar,
    //  },
    //  en: {
    //    translation: en,
    //  },
   },
   lng: isRTL ? "ar" : "en",
   debug:true,
   fallbackLng: isRTL ? "ar" : "en",
   interpolation: {
     escapeValue: false,
   },
   compatibilityJSON: "v3",
 });
 
 function App(): React.JSX.Element {
 
 
   return (
     <ThemeProvider>
       <QueryClientProvider client={queryClient}>
 
         <StatusBar
           // translucent={true}
           backgroundColor={"black"}
         // barStyle="dark-content"
         />
         <Navigation />
         <FlashMessage
           position="bottom"
           hideOnPress={true}
           style={{
             paddingTop: 5,
           }}
           titleStyle={styles.flashMsgTitle}
 
           floating
         />
       </QueryClientProvider>
     </ThemeProvider>
   );
 }
 
 const styles = StyleSheet.create({
   flashMsgTitle: {
     paddingTop: Pixel(14),
     alignSelf: "flex-start",
   },
 })
 
 export default App;
 
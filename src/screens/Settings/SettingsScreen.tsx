import React, { useState, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
import { View, StyleSheet, TextInput, FlatList, I18nManager, Image, Text, ActivityIndicator, TouchableOpacity, Platform } from 'react-native'
import { Container } from "../../constants/Containers";
import ToggleSwitch from "toggle-switch-react-native";
import { ChangeLanguageHandler } from "../../constants/Config";
import { useTheme } from '../../context/ThemeProvider';
import { darkTheme, lightTheme } from "../../constants/Colors";
import { styles } from "./style";



export const SettingsScreen = () => {
    const { t } = useTranslation()
    const { isRTL } = I18nManager;
    const { toggleTheme, theme } = useTheme();
    const {headerStyle,headerTitleStyle,settingsItemStyle,settingsTextItemStyle,mainContainerStyle}=styles()
    const [langCode, setLangCode] = useState<string>(isRTL ? "ar" : "en");

    const handleDonePress = (langCode: string) => {

        ChangeLanguageHandler(langCode);

    };
    return (
        <Container style={mainContainerStyle}>

            <View style={headerStyle}>
                <Text style={[headerTitleStyle,{color:theme.textColor}]}>{t("Settings")}</Text>

            </View>


            <View style={settingsItemStyle}>

                <Text style={settingsTextItemStyle}>{t("DarkMood")}</Text>
                <ToggleSwitch
                    isOn={JSON.stringify(theme) === JSON.stringify(lightTheme) ? false : true}
                    onColor="green"
                    offColor="grey"

                    labelStyle={{ color: 'black', fontWeight: '900', height: 100 }}
                    size="medium"
                    onToggle={isOn => {
                        toggleTheme()
                    }}
                />


            </View>
            <View style={settingsItemStyle}>

                <Text style={settingsTextItemStyle}>{t("ChangeLanguage")}</Text>
                <ToggleSwitch
                    isOn={langCode === "ar" ? true : false}
                    onColor="green"
                    offColor="grey"

                    labelStyle={{ color: 'black', fontWeight: '900', height: 100 }}
                    size="medium"
                    onToggle={isOn => {
                        handleDonePress(langCode === "ar" ? "en" : "ar")
                    }}
                />


            </View>
        </Container>
    )

}


import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Screens } from "../constants/Screens";
import { View, Text, Image } from "react-native";

import { Container } from "../constants/Containers";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
import { useTheme } from "../context/ThemeProvider";
import { Pixel } from "../constants/styleConstatnts";
import { ArticleDetailsPage } from "../screens/ArticleDetailes/AricleDetails";
import { NewsScreen } from "../screens/News/NewsScreen";
import { SettingsScreen } from "../screens/Settings/SettingsScreen";


const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();


const BottomTabs = () => {
    const { t } = useTranslation();
    const {  theme } = useTheme();

    return (
        <Container noPadding>

            <BottomTab.Navigator
                initialRouteName={Screens.NEWSFEED}

                screenOptions={{
                    tabBarStyle: { backgroundColor: theme.backgroundColor },
                    tabBarInactiveTintColor: theme.textColor,
                    tabBarActiveTintColor: theme.headerTxtColor,
                    tabBarLabelStyle: { fontSize: Pixel(12) },
                    headerShown: false,
                }}
            >
                <BottomTab.Screen
                    name={Screens.NEWSFEED}
                    component={NewsScreen}
                    options={{
                        tabBarLabel: t("News"),
                        tabBarIcon: ({ focused, color, size }) => (
                            <View style={{ width: 30.3, height: 29.7 }}>
                                <Image style={{ width: "100%", height: "100%" }}
                                    source={require('../assets/homeIcn.png')} />
                            </View>
                        ),
                    }}
                />

                <BottomTab.Screen
                    name={Screens.SETTINGS}
                    component={SettingsScreen}
                    options={{
                        tabBarLabel: t("Settings"),
                        tabBarIcon: ({ focused, color, size }) => (
                            <View style={{ width: 30.3, height: 29.7 }}>
                                <Image style={{ width: "80%", height: "80%" }}
                                    source={require('../assets/setting.png')} />
                            </View>
                        ),

                    }}
                />




            </BottomTab.Navigator>

        </Container>
    );
};
const MainStacks = () => {
    const { theme } = useTheme();
    return (
        <Stack.Navigator
            initialRouteName={Screens.HOME}
            screenOptions={{ headerShown: false }}>


            <Stack.Screen
                name={Screens.HOME}
                component={BottomTabs}
            />
            <Stack.Screen
                name={Screens.ARTICLES_DETAILS}
                component={ArticleDetailsPage}
                options={{
                    headerShown: true, title: "", headerBackTitle: t('Home'),
                    headerTintColor: theme.textColor,
                    headerStyle: {
                        backgroundColor: theme.screenBackgroundColor, // Set the background color of the header
                    },
                }}

            />

        </Stack.Navigator>

    )
}
const linking = {
    prefixes: ["newsApp://", "https://newsapi.org/v2/"],
    config: {
        screens: {
            ARTICLES_DETAILS: `articles/:articelId`,
        },
    },
};
const initNavigation = () => {
    return (
        <NavigationContainer
            linking={linking}
        >
            <MainStacks />
        </NavigationContainer>
    );
};

export default initNavigation;
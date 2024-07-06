


import { StyleSheet } from 'react-native';
import { Pixel } from '../../constants/styleConstatnts';
import { commonStyles } from '../../constants/styles';
import { useTheme } from '../../context/ThemeProvider';
export const styles = () => {
    const { theme } = useTheme();

    return StyleSheet.create({
        mainContainerStyle:{
             paddingHorizontal: Pixel(16), backgroundColor: theme.backgroundColor 
        },
        headerStyle: {
            justifyContent: "space-between",
            paddingHorizontal: Pixel(24),
            marginBottom: Pixel(60),
        },
        headerTitleStyle: {
            color: theme.black,
            fontSize: Pixel(20),
            alignSelf: "center",
        
        },
        settingsItemStyle: {
            ...commonStyles.rowBox,
            justifyContent: "space-between",
            paddingVertical: Pixel(17),
            borderBottomColor: "#E6E8E8",
            borderBottomWidth: 1,
        },
        
        settingsTextItemStyle: {
            fontSize: Pixel(16),
            fontFamily: "bold",
            marginLeft: Pixel(8),
            color: theme.black
        },
    })
}
  
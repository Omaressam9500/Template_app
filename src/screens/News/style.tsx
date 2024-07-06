import { StyleSheet } from 'react-native';
import { Pixel } from '../../constants/styleConstatnts';
import { useTheme } from '../../context/ThemeProvider';
export const styles = () => {
    const { theme, } = useTheme();

    return StyleSheet.create({

        mainContainer: {
            paddingHorizontal: Pixel(16),
            backgroundColor: theme.screenBackgroundColor


        },
        listContentStyle: {
            marginTop: Pixel(23),
            paddingBottom: Pixel(140),
            paddingTop: 0,
        },
        emptyView:{
            flex:1,
            alignItems:'center',
            justifyContent:'center',
            height:Pixel(150)
        }
    })
}
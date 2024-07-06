import { StyleSheet } from 'react-native';
import { Pixel } from '../../constants/styleConstatnts';
import { commonStyles } from '../../constants/styles';
import { useTheme } from '../../context/ThemeProvider';
export const styles = () => {
    const { theme } = useTheme();

    return StyleSheet.create({

        container: {
            flex: 1,
            backgroundColor: theme.backgroundColor,
        },
        imageStyle: {
            width: '100%',
            height: 200,
            resizeMode: 'cover',
        },
        contentStyle: {
            padding: 20,
        },
        titleStyle: {
            fontSize: Pixel(20),
            fontWeight: 'bold',
            marginBottom: 10,
            alignSelf: 'flex-start',
            color:theme.textColor
        },
        descriptionStyle: {
            fontSize: 16,
            lineHeight: 24,
            alignSelf: 'flex-start',
            color:theme.textColor
        },
        sectionView:{
            marginBottom:Pixel(15)
        },
        headLineStyle:{
            fontSize: Pixel(20),
            marginBottom: 10,
            alignSelf: 'flex-start',
            color:theme.headerTxtColor
        }
    })
}
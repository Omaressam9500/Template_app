import { StyleSheet } from 'react-native';
import { Pixel } from '../../constants/styleConstatnts';
import { useTheme } from '../../context/ThemeProvider';
export const styles = () => {
    const { theme } = useTheme();

    return StyleSheet.create({

        card: {
            backgroundColor: theme.backgroundColor,
            borderRadius: 8,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            elevation: 3,
            marginBottom: 20,
        },
        imageStyle: {
            width: '100%',
            height: 200,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
    
        },
        content: {
            padding: 10,
        },
        titleStyle: {
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 5,
            alignSelf: 'flex-start',
            color:theme.textColor
        },
        descriptionStyle: {
            fontSize: 16,
            alignSelf: 'flex-start',
            color:theme.textColor
        },
    })
}
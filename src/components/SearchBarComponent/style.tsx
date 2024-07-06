import { StyleSheet ,I18nManager} from 'react-native';
import { Pixel } from '../../constants/styleConstatnts';
import { useTheme } from '../../context/ThemeProvider';
export const styles = () => {
    const { theme } = useTheme();
    const { isRTL } = I18nManager;

    return StyleSheet.create({

        container: {

            flexDirection: 'row',
            paddingBottom: Pixel(10),
            marginTop:Pixel(15)
        },
    
        textInputStyle: {
            backgroundColor:theme.screenBackgroundColor,
            borderRadius: Pixel(55),
            borderColor: theme.black,
            borderWidth: 1,
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            paddingRight: Pixel(10),
            paddingLeft: Pixel(15),
            height: Pixel(48),
            marginRight: Pixel(7.5),
    
            fontSize: Pixel(14),
        },
        textInput: {
            flex: 1,
            color: theme.black,
            fontSize: Pixel(14),
            textAlign: isRTL?'right':'left'
        },
    })
}
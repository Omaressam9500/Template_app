import React, {FC} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {TouchableProps} from '../../constants/interfaces';
import { Pixel } from '../../constants/styleConstatnts';
import Touchable from './Touchable';

const IconTouchableContainer: FC<
    TouchableProps & { style?: StyleProp<ViewStyle>, noPadding?: boolean }
> = ({children, dark, onPress, style, noPadding}) => {
    return (
        <View style={[{overflow: 'hidden'}, style]}>
            <Touchable dark={dark} onPress={onPress}>
                <View style={!noPadding && {padding: Pixel(12)}}>{children}</View>
            </Touchable>
        </View>
    );
};

export default IconTouchableContainer;

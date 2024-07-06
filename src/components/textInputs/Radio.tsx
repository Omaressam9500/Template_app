import React, {FC} from 'react';
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Colors, Fonts, PixelPerfect} from '../../constants/styleConstants';
interface ICheckBox {
  active?: boolean;
  label: string;
  onPress?: () => void;
  contentContainerStyle?: StyleProp<ViewStyle>;
}
const CheckBox: FC<ICheckBox> = ({
  active,
  label,
  onPress,
  children,
  contentContainerStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, contentContainerStyle]}
      onPress={onPress}>
      <View
        style={[
          styles.checkContainer,
          active && {backgroundColor: Colors.minColor},
        ]}>
        <Icon name={'check'} color={Colors.white} size={PixelPerfect(20)} />
      </View>
      <Text style={styles.label}>{label}</Text>
      {children}
    </TouchableOpacity>
  );
};

export default CheckBox;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontFamily: Fonts.medium,
    color: Colors.dark,
    marginRight: 10,
    fontSize: PixelPerfect(25),
  },
  checkContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    width: PixelPerfect(43),
    height: PixelPerfect(43),
    borderRadius:  PixelPerfect(43) / 2,
    marginRight: 10,
    borderWidth: 1.8,
    borderColor: Colors.sacandAppBackgroundColor,
  },
});

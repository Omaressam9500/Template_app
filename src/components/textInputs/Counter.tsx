import React, {FC, memo, useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MinusIcon, PlusSmIcon} from '../../../assets/Icons/Icons';
import {Colors, Fonts, PixelPerfect} from '../../constants/styleConstants';
import IconTouchableContainer from '../touchables/IconTouchableContainer';
interface ICounter {
  num?: number;
  plusOnPress: () => void;
  miunsOnPress: () => void;
}

const Counter: FC<ICounter> = ({miunsOnPress, num = 1, plusOnPress}) => {
  return useMemo(
    () => (
      <View style={styles.container}>
        <IconTouchableContainer
          onPress={miunsOnPress}
          style={[
            styles.icon,
            {backgroundColor: Colors.sacandAppBackgroundColor},
          ]}>
          <MinusIcon width={PixelPerfect(20)} />
        </IconTouchableContainer>
        <View style={styles.counterContainer}>
          <Text style={styles.counterNum}>{num}</Text>
        </View>
        <IconTouchableContainer
          onPress={plusOnPress}
          style={[styles.icon, {backgroundColor: Colors.minColor}]}>
          <PlusSmIcon width={PixelPerfect(20)} />
        </IconTouchableContainer>
      </View>
    ),
    [num],
  );
};

export default memo(Counter);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: PixelPerfect(34),
    height: PixelPerfect(34),
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterNum: {
    fontFamily: Fonts.semiBold,
    fontSize: PixelPerfect(24),
  },
  counterContainer: {
    width: PixelPerfect(60),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

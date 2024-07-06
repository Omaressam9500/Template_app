import React, { FC, forwardRef } from "react";
import {
  Animated,
  ScrollView,
  ScrollViewProps,
  StatusBar,
  StyleProp,
  View,
  ViewStyle,
} from "react-native";
import { Colors, Pixel, ScreenOptions } from "../constants/styleConstatnts";
import { useTheme } from "../context/ThemeProvider";

interface containerProps {
  children?: JSX.Element[] | JSX.Element;
  style?: StyleProp<ViewStyle>;
  noPadding?: boolean;

}




export const Container: FC<containerProps> = ({ children, style, noPadding }) => {
const { theme, } = useTheme();

  return (
    <View
      style={[{
        flex: 1, backgroundColor: theme.screenBackgroundColor,
        paddingTop: noPadding ? 0 : ScreenOptions.StatusBarHeight,
      }, style]}>
      <StatusBar
        // translucent={true}
        backgroundColor={"black"}
        // barStyle="dark-content"
      />
      {children}
    </View>
  );
};



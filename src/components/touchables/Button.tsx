import React, { FC } from "react";
import {
  I18nManager,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
  StyleProp,

} from "react-native";
import Touchable from "./Touchable";
import LottieView from "lottie-react-native";
import { TouchableProps } from "../../constants/interfaces";
import { Colors, ColorWithOpacity, Fonts } from "../../constants/styleConstants";
import { Pixel } from "../../constants/styleConstants";
import { commonStyles } from "../../constants/styles";

const { isRTL } = I18nManager;

interface Props extends TouchableProps {
  title: string;
  style?: StyleProp<ViewStyle>;
  styleTitle?: StyleProp<TextStyle>;
  loader?: boolean;
  disabled?: boolean;
  onPress?: () => void;
}

const Button: FC<Props> = ({
  dark,
  onPress,
  disabled,
  title,
  style,
  styleTitle,
  children,
  loader,
}) => {
  return (
    <Touchable disabled={disabled} dark={dark} onPress={onPress}>
      <View
        style={[styles.container,

        { backgroundColor: disabled ? Colors.disapledColor : Colors.mainColor },
        !disabled && { ...commonStyles.boxShadow },
          style]}>
        {children}
        {loader ? (
          <View style={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
            <LottieView
              source={require("../../assets/animation/loader.json")}
              autoPlay
              loop
              style={{
                width: Pixel(25),
                height: Pixel(25),
                
                marginRight: 4,
              }}
            />
          </View>
        ) : (
          <Text
            style={[styles.title, { color: disabled ? Colors.disapledTxt : Colors.white }, styleTitle]}>{title}</Text>
        )}
      </View>
    </Touchable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    height: Pixel(51),
    borderRadius:5,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    // padding: Pixel(12),
  },
  title: {
    color: Colors.white,
    fontFamily: isRTL ? "NotoNaskhArabic-Bold" : "NotoSans-SemiBold",
    fontSize: Pixel(16),
    // letterSpacing: 0.5,
    width: "100%",
    textAlign: "center",
    // lineHeight: Pixel(17.9),
  },
});

import React, { FC } from "react";
import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import { Colors, Fonts, Pixel } from "../../constants/styleConstatnts";
import { commonStyles } from "../../constants/styles";
import { CheckedIcon, UnCheckedIcon } from "../../assets/icons/SvgIcons";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";

interface ICheckBox {
  id: string;
  title: string;
  onPress: () => void;
  selected: boolean;
  containerStyle?: StyleProp<ViewStyle>;
}

const CheckBox: FC<ICheckBox> = ({ id, title, onPress, selected, containerStyle }) => {
  const { t } = useTranslation();
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity style={[styles.container, containerStyle]} onPress={onPress}>
      <View style={styles.checkBtn}>
        {selected ? <CheckedIcon /> : <UnCheckedIcon />}
      </View>
      <Text style={styles.optionTitle} numberOfLines={2} lineBreakMode={"tail"}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    ...commonStyles.rowBox,
    alignItems: "center"
    // paddingRight: Pixel(60),
    // paddingLeft: Pixel(40),
    // marginTop: Pixel(20),
  },
  checkBtn: {
    ...commonStyles.rowBox
  },
  optionTitle: {
    fontFamily: Fonts.regular,
    fontSize: Pixel(30),
    marginStart: Pixel(20),
    color: Colors.black
  },

  actionsContainer: {
    justifyContent: "space-between"
  }
});

export default CheckBox;

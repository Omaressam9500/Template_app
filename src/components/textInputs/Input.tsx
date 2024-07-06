import React, {useState} from "react";
import {
    I18nManager,
    StyleProp,
    StyleSheet,
    Text,
    TextInput,
    TextInputProps,
    TextStyle,
    View,
    ViewStyle,
    Platform
} from "react-native";
import {
    Colors,
    ColorWithOpacity,
    Fonts,
    Pixel,
} from "../../constants/styleConstatnts";
import {commonStyles} from "../../constants/styles";

const {isRTL} = I18nManager;

interface Props {
    options?: TextInputProps & { ref?: (ref: any) => void };
    contentContainerStyle?: StyleProp<ViewStyle>;
    textInputContainer?: TextInputProps & StyleProp<ViewStyle>;
    iconRightStyle?: StyleProp<ViewStyle>;
    iconLeftStyle?: StyleProp<ViewStyle>;
    label?: string;
    handleSubmitEditing?: () => void,
    placeholder?: string,
    labelStyle?: StyleProp<ViewStyle>;
    labelTextStyle?: StyleProp<TextStyle>;
    placeholderTextColor?: TextInputProps;
    leftContent?: () => JSX.Element;
    rightContent?: () => JSX.Element;
    optionalLabel?: string,
    optionalLabelStyle?: StyleProp<ViewStyle>;
    erorrMessage?: string | boolean;
    isFocused?: string | boolean;
    hasCurrency: boolean,
    currenctTxt: string,
    currencyContent?: () => JSX.Element;
}

const Input: React.FC<Props> = ({
                                    options,
                                    contentContainerStyle,
                                    textInputContainer,
                                    placeholderTextColor,
                                    leftContent,
                                    rightContent,
                                    erorrMessage,
                                    iconRightStyle,
                                    iconLeftStyle,
                                    label,
                                    optionalLabel,
                                    optionalLabelStyle,
                                    placeholder,
                                    labelStyle,
                                    labelTextStyle,
                                    isFocused,
                                    hasCurrency,
                                    currenctTxt,
                                    handleSubmitEditing,
                                    currencyContent,
                                }) => {
    const [contentWidth, setContentWidth] = useState(0);
    const isRTL = I18nManager.isRTL;

    const handleContentSizeChange = (event) => {
        const {width} = event.nativeEvent.contentSize;
        setContentWidth(width);
    };
    return (
        <>
            {label && (
                <View style={[styles.label, labelStyle]}>
                    <Text style={[commonStyles.labelText, labelTextStyle]}>{label}</Text>
                    {optionalLabel ?
                        <Text style={[styles.optionalTxt, optionalLabelStyle]}>{optionalLabel}</Text> : null}
                </View>
            )}
            <View
                style={[
                    styles.container,
                    contentContainerStyle,
                    (hasCurrency || currencyContent) && {
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        paddingRight: 0
                    },
                    !!isFocused && {borderColor: Colors.mainColor},
                    !!erorrMessage && {borderColor: Colors.dangerColor},
                ]}>
                {rightContent && (
                    <View style={[styles.iconRight, iconRightStyle]}>
                        {rightContent()}
                    </View>
                )}
                <TextInput
                    {...options}
                    placeholder={placeholder}
                    placeholderTextColor={Colors.placeHoldertxtColor}
                    onContentSizeChange={handleContentSizeChange}
                    onSubmitEditing={handleSubmitEditing}
                    style={[
                        styles.textInputContainer,
                        hasCurrency && {flex: 2},
                        currencyContent && {flex: 3.5},
                        // rightContent && { paddingEnd: Pixel(12) },
                        // leftContent && { paddingStart: Pixel(12) },
                        textInputContainer
                        , !options?.multiline && Platform.OS === "android" ? {
                            width: isRTL ? contentWidth : '100%',
                        } : null
                    ]}
                />
                {leftContent && (
                    <View style={[styles.iconLeft, iconLeftStyle]}>{leftContent()}</View>
                )}
                {hasCurrency && (
                    <View style={[styles.currencyView]}>
                        <Text style={styles.egpTxt}>{currenctTxt}</Text>
                    </View>
                )}

                {currencyContent && (
                    <View style={[styles.currencyView,]}>
                        {currencyContent && currencyContent()}
                    </View>
                )}

            </View>
            {/*{!!erorrMessage && (*/}
            {/*  <View style={{ marginBottom: 7 }}>*/}
            {/*    <Text*/}
            {/*      style={[*/}
            {/*        styles.errorMessage,*/}
            {/*        { color: erorrMessage ? Colors.dangerColor : 'transparent' },*/}
            {/*      ]}>*/}
            {/*      {erorrMessage}*/}
            {/*    </Text>*/}
            {/*  </View>*/}
            {/*)}*/}
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.inputBackground,
        borderRadius: 5,
        width: "100%",
        borderWidth: 1,
        borderColor: Colors.CommonBorderColor,
        paddingHorizontal: Pixel(16),
        marginBottom: Pixel(12),
    },
    textInputContainer: {
        fontFamily: Fonts.body_regular,
        fontSize: Pixel(16),

        color: Colors.lableTxtColor,
        height: Pixel(51),
        textAlign: isRTL ? "right" : "left",
    },
    label: {
        marginTop: Pixel(8),
        marginBottom: Pixel(8),
    },

    iconLeft: {
        position: "absolute",
        top: 15,
        left: Pixel(12),
        alignSelf: "center",
        zIndex: 100,
    },
    iconRight: {
        position: "absolute",
        top: Pixel(6),
        justifyContent: 'center',
        //  bottom:0,
        right: Pixel(8),
        alignSelf: "center",
        zIndex: 100,
    },
    errorMessage: {
        textAlign: "center",
        fontFamily: Fonts.regular,
        fontSize: 14,
    },
    optionalTxt: {
        color: '#B3BBBB',
        fontSize: Pixel(14),
        marginLeft: Pixel(7)
    },
    currencyView: {
        // height: Pixel(51),
        // borderRadius: 5,
        borderColor: Colors.CommonBorderColor,
        borderWidth: 1,
        backgroundColor: Colors.inputBackground,
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        paddingHorizontal: Pixel(8),
        paddingVertical: Pixel(6),
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        borderLeftWidth: 1,
        borderRightWidth: 0,
    },
    egpTxt: {
        color: '#202020',
        fontSize: Pixel(14),
        fontFamily: Fonts.body_regular
    }
});

export default Input;

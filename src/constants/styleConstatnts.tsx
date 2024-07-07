import {Dimensions, I18nManager, NativeModules, PixelRatio} from "react-native";

const {isRTL} = I18nManager;
const {width, height} = Dimensions.get("screen");

// console.log('Screen width : ', width);
// console.log('Screen height : ', height);
// console.log('PixelRatio.getPixelSizeForLayoutSize(width); ', PixelRatio.getPixelSizeForLayoutSize(width));

export enum Colors {
    appBackgroundColor = "#ffffff",
    secondBackgroundColor = "#FDFDFD",
    mainColor = "#001F5F",
    secondColor = "#254177",
    dangerColor = "#A50017",
    successColor = "#4AAB4E",
    mainTextColor = "#686868",
    secondTextColor = "#697979",
    disapledColor = "#E6E8E8",
    placeHoldertxtColor = "#B3BBBB",
    lableTxtColor = "#556767",
    darkTextColor = "#202020",
    white = "#FFFFFF",
    disapledTxt = "#919C9C",
    green = "#21AC17",
    black = "#000000",
    gray = "#0D0E10",
    warning = "#E04F5F",
    sacandAppBackgroundColor = "#F9F9F9",
    CommonBorderColor = "#D5D9D9",
    inputBackground = "#FBFBFB",
    hintBackground = "#FFF7E8",
    primaryBlue = "#4785FE",
    borderSecondColor = "#DDE9FF",
    lightRed = "#FCEEEF",
    stepColor = "#CCF2F0",
    light_blue = "#F9FBFF",
    purpel = "#A97BF4",
    light_purpel = "#F9F5FF",
    yellow = "#FEA71C",
    mid_blue = "#729EF3",
    second_light_blue = "#C0D5FF",
    grey_txt = "#999999",
    light_grey_border = "#F8F9F9",
    icn_bk = "#F1F6FF",
    filterBk = "#F5F6F6",
    commonTitle="#6F7E7E"

    // placeholderColor = ColorWithOpacity("#0D0E10",0.5),
}

export const Fonts = {
    head_medium: isRTL ? "Cairo-Medium" : "Outfit-Medium",
    head_regular: isRTL ? "Cairo-Regular" : "Outfit-Regular",
    head_bold: isRTL ? "Cairo-Bold" : "Outfit-Bold",
    head_semiBold: isRTL ? "Cairo-SemiBold" : "Outfit-SemiBold",

    body_medium: isRTL ? "NotoNaskhArabic-Medium" : "NotoSans-Medium",
    body_regular: isRTL ? "NotoNaskhArabic-Regular" : "NotoSans-Regular",
    body_bold: isRTL ? "NotoNaskhArabic-Bold" : "NotoSans-Bold",
    body_semiBold: isRTL ? "NotoNaskhArabic-SemiBold" : "NotoSans-SemiBold",

};



export const NavigationAnimations = {
    fade: "fade",
    fade_from_bottom: "fade_from_bottom",
    flip: "flip",
    slide_from_bottom: "slide_from_bottom",
    slide_from_right: "slide_from_right",
    slide_from_left: "slide_from_left",
};

export enum ScreenOptions {
    StatusBarHeight = NativeModules.StatusBarManager.HEIGHT,
    HalfScreen = width / 2 - 15,
    CURRENT_RESOLUTION = Math.sqrt(height * height + width * width),
    DesignResolution = {
        width: 390,
        height: 844,
    } as any,
}

/**
 * create PerfectPixel fnction from psd or xd workflow size
 * @param designSize uor psd or xd workflow size
 * @returns function to use in PixelPerfect
 */

export const createPerfectPixel = (designSize = {width, height}) => {
    if (
        !designSize ||
        !designSize.width ||
        !designSize.height ||
        typeof designSize.width !== "number" ||
        typeof designSize.height !== "number"
    ) {
        throw new Error(
            "Invalid design size object! must have width and height fields of type Number.",
        );
    }
    const DESIGN_RESOLUTION = Math.sqrt(
        designSize.height * designSize.height + designSize.width * designSize.width,
    );
    const RESOLUTIONS_PROPORTION =
        ScreenOptions.CURRENT_RESOLUTION / DESIGN_RESOLUTION;
    // console.log('===============================')
    // console.log('DESIGN_RESOLUTION', DESIGN_RESOLUTION)
    // console.log('CURRENT_RESOLUTION', ScreenOptions.CURRENT_RESOLUTION)
    // console.log('RESOLUTIONS_PROPORTION', RESOLUTIONS_PROPORTION)
    return (size: number) => Math.floor(RESOLUTIONS_PROPORTION * size);
};
/**
 * Get perfect pixel for current resolution
 * @param pixel design size pixel
 * @returns Perfect pixel for current resolution 😄
 */

export const Pixel = (pixel: number) => {
    const Perfect = createPerfectPixel(ScreenOptions.DesignResolution as any);
    return Perfect(pixel);
};


/**
 * create color with opacity
 * @param hex color
 * @param opacity decimal value
 * @returns new color with opacity 👏
 */
export const ColorWithOpacity = (hex: Colors | string, opacity: number) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    let color;
    if (result) {
        color = {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
        };
    } else {
        return hex;
    }
    return `rgba(${color.r},${color.g},${color.b},${opacity})`;
};



import React, { FC, useContext, useEffect, useState, useRef } from "react";
import {
    StyleSheet, View,
} from "react-native";
import FastImage from 'react-native-fast-image'


interface IImage {
    url: string,
    style?: any;
    onLoadStart?: () => void,
    onLoadEnd?: () => void,
    onError?: () => void,
    defaultSource?: any,
    resizeMode?: any,
    isError?:boolean

}

export const ImageComponent: FC<IImage> = ({
    url,
    style,
    onLoadStart,
    onError,
    onLoadEnd,
    defaultSource,
    resizeMode,
    isError
}) => {
 
    return (<View>
        <FastImage
            style={[styles.imageStyle, style]}
       
            source={!isError ? {
                uri: url ,
                priority: FastImage.priority.normal,
                    cache: FastImage.cacheControl.immutable
            }
                : defaultSource}
            onLoadStart={onLoadStart}
            onLoadEnd={onLoadEnd}
            onError={onError}

            resizeMode={resizeMode ? resizeMode : FastImage.resizeMode.center}
        />
    </View>)
}
const styles = StyleSheet.create({
    imageStyle: { width: 50, height: 50, marginBottom: 10 }
})

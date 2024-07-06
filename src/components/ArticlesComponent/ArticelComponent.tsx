import React, { FC } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Pixel } from "../../constants/styleConstatnts";
import { ImageComponent } from "../ImageComponent";
import { Screens } from "../../constants/Screens";
import { styles } from "./style";

interface IArticelComponent {
    post: IArticle
}
export const ArticelComponent: FC<IArticelComponent> = ({
    post
}) => {
    const { navigate } = useNavigation();
    const { author, urlToImage, title } = post;
    const { card, imageStyle, content, titleStyle, descriptionStyle } = styles()
    return (
        <TouchableOpacity
        testID="CardTestId"
         style={card}
            onPress={() => {
                navigate(Screens.ARTICLES_DETAILS, {
                    post: post
                })
            }}>
            <ImageComponent
                url={urlToImage}
                style={imageStyle}
                resizeMode={"cover"}
            />

            <View style={content}>
                <Text testID={"AuthorTestId"}
                    style={titleStyle} numberOfLines={2} ellipsizeMode="tail">{author}</Text>
                <Text testID={"TitleTestId"}
                    style={descriptionStyle} numberOfLines={2} ellipsizeMode="tail">{title}</Text>

            </View>

        </TouchableOpacity>


    )
}

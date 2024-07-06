import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { RouteProp, useRoute } from "@react-navigation/native";
import { styles } from './style';
import { ImageComponent } from '../../components/ImageComponent';
import { formatDate } from '../../constants/helpers';
import { t } from 'i18next';
type RootStackParamList = {
    routes: { post: IArticle, };
};
export const ArticleDetailsPage = () => {
    const { container, contentStyle, titleStyle, descriptionStyle, imageStyle, sectionView ,headLineStyle} = styles()
    const route = useRoute<RouteProp<RootStackParamList, 'routes'>>();
    const { title, urlToImage, author, publishedAt, description } = route.params.post;

    return (
        <View style={container}>
            <ImageComponent url={urlToImage} style={imageStyle}
                resizeMode={"cover"} />

            <View style={contentStyle}>
                <View style={sectionView}>
                    <Text style={headLineStyle}>{t('Author')}</Text>
                    <Text style={titleStyle}>{author}</Text>
                </View>
                <View style={sectionView}>
                    <Text style={headLineStyle}>{t('Date')}</Text>

                    <Text style={descriptionStyle}>{formatDate(publishedAt)}</Text>
                </View>
             
                <Text style={titleStyle}>{title}</Text>


                <Text style={descriptionStyle}>{description}</Text>
            </View>
        </View>
    );
};




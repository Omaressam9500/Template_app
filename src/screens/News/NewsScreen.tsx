import { t } from "i18next";
import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet, TextInput, FlatList, Image, Text, ActivityIndicator, RefreshControl } from 'react-native'
import { useQueryClient } from "react-query";
import { getArticles } from "../../api-hooks/getArticles";
import { ArticelComponent } from "../../components/ArticlesComponent/ArticelComponent";
import SearchBar from "../../components/SearchBarComponent/SearchBar";
import { Container } from "../../constants/Containers";
import { useTheme } from '../../context/ThemeProvider';
import { styles } from "./style";


export const NewsScreen = () => {
    const { mainContainer, listContentStyle,emptyView } = styles();
    const [searchName, setSearchName] = useState('tesla')
    const [articlesList, setArticlesList] = useState([])
    const { theme } = useTheme();

    const { isFetching: isArticlesFetching,
        refetch: refetchArticles
    } = getArticles(searchName, (data) => {
        setArticlesList(data?.data?.articles)
    })
    return (
        <Container style={mainContainer} >
            <SearchBar
                handleSearchValue={(search) => {
                    setSearchName(search)
                }}
            />
            <FlatList
                data={articlesList}
                legacyImplementation
                testID="articlesListId"
                renderItem={({ item, index }) => {
                    {
                        return (
                            <ArticelComponent
                                post={item}
                            />

                        )
                    }
                }}
                refreshControl={
                    <RefreshControl refreshing={isArticlesFetching} onRefresh={refetchArticles}
                        tintColor={theme.black} />
                }
                ListEmptyComponent={() => {
                    return (
                        <View style={emptyView}>
                            {!isArticlesFetching &&
                                <Text testID="loading-message">{t('NoData')}</Text> 


                            }
                        </View>
                    )
                }
                }

                contentContainerStyle={listContentStyle}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            />
        </Container>
    )


}

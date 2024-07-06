import { t } from 'i18next';
import React, { FC, useRef, useState } from 'react';
import {

    TextInput,
    View,
} from 'react-native';
import { styles } from './style';



interface ISearchHeader {
    handleSearchValue: (searchValue: string) => void;

}
const SearchBar: FC<ISearchHeader> = ({ handleSearchValue
}) => {
    const { container, textInput, textInputStyle } = styles()
    const [searchTxt, setSearchTxt] = useState('')
    return (
        <View style={[container]}>
            <View style={textInputStyle}>
                <TextInput style={textInput}
                    testID={"input"}
                    placeholder={t("Search")}
                    value={searchTxt}
                    placeholderTextColor={"#919C9C"}
                    returnKeyType="search"
                    onChangeText={(text) => {
                        setSearchTxt(text)
                        handleSearchValue(text)
                    }}


                    focusable={true}
                />
            </View>


        </View>


    );
};




export default SearchBar;

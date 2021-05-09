import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet,ScrollView } from 'react-native'
import NewsList from '../components/NewsList';
import SearchBar from '../components/SearchBar'
import newsApi from '../api/newsApi'
import useNews from '../hooks/useNews'
export default function LandingScreen({navigation}) {
    const [searchKey, setSearchKey] = useState('');
    const [generalNews,searchApi,errorMessage,topHeadlines,wallstreet]=useNews();
    return (
        <>
            <SearchBar searchKey={searchKey}
                onSearch={(anySearch) => setSearchKey(anySearch)}
                search={(key)=>searchApi(key)}
            />
            <ScrollView>
            <NewsList category="Head Lines" generalNews={generalNews} navigation={navigation}/>
            <NewsList category="Business" generalNews={topHeadlines} navigation={navigation}/>
            <NewsList category="General" generalNews={wallstreet} navigation={navigation}/>
            </ScrollView>
            {errorMessage?<Text>{errorMessage}</Text>:null}
        </>
    )
}

const styles = StyleSheet.create({

})

import React from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import News from './News'
export default function NewsList({ category, generalNews,navigation}) {
    if(!generalNews){
        return null;
    }
    return (
        <View>
            <Text style={styles.category}>{category}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={generalNews}
                keyExtractor={(news, index) => index.toString()}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={()=>navigation.navigate('NewsDetails',item={item})}>
                            <News item={item} />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    category: {
        marginLeft: 12,
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom:5
    }
})

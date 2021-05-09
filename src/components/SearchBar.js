import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto'
export default function searchBar({ searchKey, onSearch,search}) {
    return (
        <View style={styles.background}>
            <Fontisto name="search" size={25} style={styles.icon} />
            <TextInput
                placeholder="Search"
                style={styles.inputText}
                value={searchKey}
                onChangeText={(value) => onSearch(value)}
                onEndEditing={()=>search(searchKey)}
            />

        </View>
    )
}
const styles = StyleSheet.create({
    background: {
        backgroundColor: '#d6d4ce',
        height: 40,
        marginHorizontal: 10,
        borderRadius: 8,
        marginTop: 10,
        flexDirection: 'row'
    },
    inputText: {
        flex: 1,
        marginLeft: 10,
        fontWeight: 'bold',
    },
    icon: {
        alignSelf: 'center',
        marginLeft: 10
    }
})

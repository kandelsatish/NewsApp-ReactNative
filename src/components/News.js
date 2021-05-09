import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Card } from 'react-native-paper'
export default function News({ item }) {
    return (
        <Card style={styles.container}>
            <Image
                source={{ uri: item.urlToImage }}
                style={styles.image}
            />
            <Text style={styles.title}>{item.title}</Text>
            <Text numberOfLines={4} style={styles.description}>{item.description}</Text>
            <Text style={styles.source}>{item.source.name} {item.publishedAt}</Text>
        </Card>
    )
}
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        height: 250,
        width: 300,
        borderRadius: 8,
    },
    image: {
        height: 100,
        width: '100%',
        marginRight: 10,
        marginBottom: 5
    },
    title: {
        fontWeight: 'bold',
        marginHorizontal: 5,
        marginBottom: 5
    },
    description: {
        marginHorizontal: 2
    },
    source: {
        alignSelf: 'flex-end',
        fontSize: 12,
        margin: 5
    }
})

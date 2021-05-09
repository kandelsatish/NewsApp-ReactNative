import React from 'react'
import { View } from 'react-native';
import { WebView } from 'react-native-webview';
export default function NewsDetails({ route }) {
    const { item } = route.params
    return (
        <>
            <WebView
                source={{ uri: item.url }}
            />
        </>
    )
}

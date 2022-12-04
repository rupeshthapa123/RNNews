import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import LottieView from "lottie-react-native";


const ActivityIndicator = ({visible}) => {
    if (!visible) return null;
    return (
    <View style={styles.container}>
        <LottieView source={require('../../../assets/loading.json')} autoplay loop/>
    </View>
    )
}

export default ActivityIndicator

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
    }
})
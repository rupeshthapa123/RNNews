import { StyleSheet, View } from 'react-native';
import React from 'react';
import { AntDesign } from "@expo/vector-icons";

const Close = ({ onPress }) => {
    return (
        <View style={styles.container}>
            <AntDesign name='close' size={25} color='white' style={styles.icon} onPress={onPress}/>
        </View>
    )
}

export default Close;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 0,
        marginVertical: 20,
    },
    icon:{
        backgroundColor: 'rgba(92, 90, 91, 0.7)',
        padding: 10,
        borderRadius: 50 
    }
});
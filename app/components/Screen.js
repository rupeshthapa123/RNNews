import { View, StyleSheet, StatusBar } from 'react-native'
import React from 'react'


const Screen = ({children}) => {
  return (
    <View style= {styles.container}>
        {children}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        paddingHorizontal: 15,
        backgroundColor:'#f7f3f3',
        flex:1,
    },
});

export default Screen;
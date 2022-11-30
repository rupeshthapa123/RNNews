import { View, StyleSheet, Image } from 'react-native'
import React from 'react'
import Title from './Title'
import Subtitle from './Subtitle'

const BlockCard = ({style}) => {
  return (
    <View style={[styles.container, style]}>
        <Image source={require('../../assets/random-content.png')} style={styles.image}/>  
        <View style={styles.contentContainer}>
            <Title>Some Title</Title>
            <Subtitle>Some description</Subtitle>
        </View>
    </View>
  )
};

const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: 300,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#fff'
    },
    image:{
        width: "100%",
        height: 200,
    },
    contentContainer:{
        padding: 5,
    }
});

export default BlockCard;
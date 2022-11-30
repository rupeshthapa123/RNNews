import { Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import BlockCard from "./BlockCard"

const {width} = Dimensions.get("window")

const Smallcard = ({item}) => {
  return <BlockCard item={item} style={styles.container}/>
}

const styles = StyleSheet.create({
    container: {
        width: width / 2,
        marginRight: 15,
        height: 200,
    },
    image:{
        height: 100,
    },
});

export default Smallcard;

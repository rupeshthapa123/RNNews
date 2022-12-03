import { Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import BlockCard from "./BlockCard"
import ViewMore from './ViewMore'

const {width} = Dimensions.get("window")

const Smallcard = ({item}) => {
    
    if(item.type === "viewMore"){
        return <ViewMore style={styles.viewMore}/>
    }

    return (
        <BlockCard item={item} style={styles.container}/>
    );
};

const styles = StyleSheet.create({
    container: {
        width: width / 2,
        marginRight: 15,
        height: 200,
    },
    image:{
        height: 100,
    },
    viewMore:{
        width: width / 2,
        height: 200,
    }
});

export default Smallcard;

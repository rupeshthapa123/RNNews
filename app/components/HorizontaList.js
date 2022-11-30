import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import Title from './Title'
import Smallcard from './Smallcard'

const HorizontaList = ({title, data}) => {
    return (
    <>
    <Title size={20}>{title}</Title>
    <View style = {styles.listStyle}>
    <FlatList 
    data={data} 
    keyExtractor={item => item.id} 
    horizontal 
    showsHorizontalScrollIndicator={false} 
    renderItem={({item}) => <Smallcard item={item} />}
    />
    </View>
    </>
    );
};

const styles = StyleSheet.create({
    listStyle: {
        marginVertical: 15,
    },
});

export default HorizontaList;

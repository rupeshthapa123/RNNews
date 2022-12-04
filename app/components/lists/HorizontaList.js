import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import Title from '../common/Title'
import Smallcard from '../cards/Smallcard'
import {useNavigation} from "@react-navigation/native"

const HorizontaList = ({ title, data }) => {
    const navigation = useNavigation();
    return (
    <>
    <Title size={20}>{title}</Title>
    <View style = {styles.listStyle}>
    <FlatList 
    data={data} 
    keyExtractor={item => item.id} 
    horizontal 
    showsHorizontalScrollIndicator={false} 
    renderItem={({item}) => 
    <Smallcard onPress={() => navigation.push('NewsDetail', {item})} item={item} />}
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

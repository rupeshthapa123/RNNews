import { StyleSheet, Text, View, StatusBar,ScrollView } from 'react-native'
import React from 'react'
import VerticalList from './VerticalList';

const NewsList = ({route}) => {
    const data = route.params;
    const header = data[0].category.split('-').join(' ').toUpperCase();
    return (
        <>
        <View style={styles.headerContainer}>
            <Text style={styles.categoryTitle}>{header}</Text>
        </View>
        <ScrollView contentContainerStyle={{padding:15}}>
            <VerticalList data={data} />
        </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        width: "100%",
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        marginTop: StatusBar.currentHeight,
        backgroundColor: "#4e4d4d",
    },
    categoryTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: "white"
    }
})

export default NewsList;

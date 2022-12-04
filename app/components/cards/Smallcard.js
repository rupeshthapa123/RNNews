import { Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import BlockCard from "./BlockCard"
import ViewMore from './ViewMore'
import newsAPI from '../../api/newsAPI'
import {useNavigation} from "@react-navigation/native"

const { width } = Dimensions.get("window")

const Smallcard = ({ item, onPress}) => {

    const navigation = useNavigation();
    const handleViewMore = async (category) => {
        const result = await newsAPI.getByCategory(category);
        navigation.navigate('NewsList', result);
    }
    if (item.type === "viewMore") {
        return <ViewMore style={styles.vMore} onPress={() => handleViewMore(item.category)} />
    }

    return (
        <BlockCard onPress={onPress} item={item} style={styles.container} />
    );
};

const styles = StyleSheet.create({
    container: {
        width: width / 2,
        marginRight: 15,
        height: 200,
    },
    image: {
        height: 100,
    },
    vMore: {
        width: width / 2,
        height: 200,
    }
});

export default Smallcard;

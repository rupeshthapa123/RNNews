import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import SearchBar from "../screens/SearchBar";
import Screen from "../common/Screen";
import FeaturedNews from "../FeaturedNews";
import BreakingNews from "../BreakingNews";
import TechNews from "../TechNews";
import PoliticalNews from "../PoliticalNews";
import EntertainmentNews from "../EntertainmentNews";
import useNews from "../../hooks/useNews";
import ActivityIndicator from '../common/ActivityIndicator';

const Home = () => {
    const [isSearchedFocused, setIsSearchedFocused] = useState(false);

    const [
        featuredNews,
        breakingNews,
        techNews,
        politicalNews,
        entertainmentNews,
        loading
    ] = useNews();

    return (
        <>
        <ActivityIndicator visible={loading}/>
        <Screen isSearchedFocused={isSearchedFocused}>
            <SearchBar setIsSearchedFocused = {setIsSearchedFocused}/>
            <FeaturedNews item={featuredNews} />
            <BreakingNews data={breakingNews} />
            <PoliticalNews data={politicalNews} />
            <TechNews data={techNews} />
            <EntertainmentNews data={entertainmentNews} />
        </Screen>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
    }
})

export default Home;


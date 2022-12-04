import { useState, useEffect } from "react";
import newsAPI from "../api/newsAPI";

export default useNews = () => {
    const [featuredNews, setFeaturedNews] = useState({});
    const [breakingNews, setBreakingNews] = useState([]);
    const [techNews, setTechNews] = useState([]);
    const [politicalNews, setPoliticalNews] = useState([]);
    const [entertainmentNews, setEntertainmentNews] = useState([]);
    const qty = 5;
    const [loading, setLoading] = useState(false);

    const filterFeatured = (data) => {
        return [...data].filter(item => item.featured === 'on').reverse()[0];
    }

    const filterByCategory = (data, category) => {
        const result = data
            .filter(item => item.category === category)
            .reverse()
            .splice(0, qty);

        if (result.length) {
            result.push({ type: 'viewMore', category: category, id: category })
        }

        return result;
    }

    const filterMultipleNews = async () => {
        setLoading(true)
        const allNews = await newsAPI.getAll()

        setFeaturedNews(filterFeatured(allNews));
        setBreakingNews(filterByCategory(allNews, 'breaking-news'));
        setPoliticalNews(filterByCategory(allNews, 'political'));
        setTechNews(filterByCategory(allNews, 'tech'));
        setEntertainmentNews(filterByCategory(allNews, 'entertainment'));
        setLoading(false)
    }
    useEffect(() => {
        filterMultipleNews()
    }, [])

    return [
        featuredNews,
        breakingNews,
        techNews,
        politicalNews,
        entertainmentNews,
        loading
    ];
};
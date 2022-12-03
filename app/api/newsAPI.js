import Client from "./Client";

const getAll = async() => {
    try {
        const response = await Client.get('/news')

        if(response.data.success){
            return response.data.news
        }

    }catch(error){
        return [];
        console.log("Error while getting all news",error.message);
    }
}

const getByCategory = async(category, qty) => {
    const endpoint = qty ? `/news/${category}/${qty}` : `/news/${category}`
    try {
        const response = await Client.get(endpoint)

        if(response.data.success){
            return response.data.news
        }
    }
    catch(error){
        return [];
        console.log('Error while getting categories news.', error.message);
    }
}

export default {
    getAll,
    getByCategory,
};
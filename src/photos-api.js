import axios from 'axios';

axios.defaults.baseURL = "https://api.unsplash.com/";


export const fetchPhotos = async (query, page) => {

    const response = await axios.get("/search/photos/", {
        params: {
            client_id: "2XBzr96cBxi5tZEO40X9Xsl2i-Ygx8dH5qGcPRjno0s",
            query,
            per_page: 15,
            page,
    }});
    return response.data.results;
}
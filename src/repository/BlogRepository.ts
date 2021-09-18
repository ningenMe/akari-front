import axios from 'axios';
import {Blog,DiaryWithAround} from 'interfaces/Blog'
import {Urls} from 'constants/Urls'
import {BlogType} from 'interfaces/Blog'

export const getBlog = async (blogTypes : BlogType[]): Promise<Blog[]> => {
    let blogs : Blog[] = [];

    const url = Urls.API_NINGENME_NET + "/v1/blogs";

    await axios
        .get(url, {
            params: {
                types: blogTypes.join(",")
            }
        })
        .then((results) => {
            blogs = results.data.blogs
        })
        .catch((error) => {
            console.log(error.status);
        }); 
    return blogs;
}

export const getDiary = async (date : string): Promise<DiaryWithAround> => {
    const url = Urls.API_NINGENME_NET + "/v1/diaries/" + date;

    return await axios
        .get(url)
        .then((results) => {
            return results.data
        })
        .catch((error) => {
            console.log(error.status);
        }); 
}

export const putDiaryLiked = async (date : string) => {
    const url = Urls.API_NINGENME_NET + "/v1/diaries/" + date + "/liked";
    
    return await axios
        .put(url)
        .catch((error) => {
            console.log(error.status);
        }); 
}

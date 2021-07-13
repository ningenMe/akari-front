import axios from 'axios';
import {Blog,DiaryWithAround} from 'interfaces/Blog'
import {Urls} from 'constants/Urls'
import {BlogType} from 'interfaces/BlogType'

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
    let diary : DiaryWithAround = {prev:null,curr:null,next:null}

    const url = Urls.API_NINGENME_NET + "/v1/diaries/" + date;

    await axios
        .get(url)
        .then((results) => {
            diary = results.data
        })
        .catch((error) => {
            console.log(error.status);
        }); 
    return diary;
}

import axios from 'axios'
import { Blog, BlogType, DiaryWithAround } from 'interfaces/Blog'
import { UrlConst } from 'constants/UrlConst'
import { BlogPostedCount } from '../interfaces/BlogPostedCount'

export const getBlog = async (blogTypeList: BlogType[]): Promise<Blog[]> => {
  let blogs: Blog[] = []

  const url = UrlConst.API_NINGENME_NET + '/v1/blogs'

  await axios
    .get(url, {
      params: {
        types: blogTypeList.join(','),
      },
    })
    .then((results) => {
      blogs = results.data.blogs
    })
    .catch((error) => {
      console.log(error.status)
    })
  return blogs
}

export const getBlogPostedCount = async (): Promise<BlogPostedCount[]> => {
  const url = UrlConst.API_NINGENME_NET + '/v1/blogs/posted-counts'

  return await axios
    .get(url)
    .then((results) => {
      return results.data.monthCounts
    })
    .catch((error) => {
      console.log(error.status)
      return []
    })
}

export const getDiary = async (date: string): Promise<DiaryWithAround> => {
  const url = UrlConst.API_NINGENME_NET + '/v1/diaries/' + date

  return await axios
    .get(url)
    .then((results) => {
      return results.data
    })
    .catch((error) => {
      console.log(error.status)
    })
}

export const putDiaryLiked = async (date: string) => {
  const url = UrlConst.API_NINGENME_NET + '/v1/diaries/' + date + '/liked'

  return await axios
    .put(url)
    .catch((error) => {
      console.log(error.status)
    })
}

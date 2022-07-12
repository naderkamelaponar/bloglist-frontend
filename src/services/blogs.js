// بسم الله الرحمن الرحيم
import axios from 'axios'
import config from '../utils/config'
const baseUrl = config.baseUrl+'blogs/'

const getAll =  async() => {
  try {
    const request =await axios.get(baseUrl)
    if (request) return request.data
  } catch (error) {
    return error.response
  }
}
const newBlog =  async (newBlog,token) => {

  const postConfig={
    headers:{  'authorization':`Bearer ${token}` }
  }

  const request =  await  axios.post(baseUrl,newBlog,postConfig)
  try {
    if (request) return request.data
  } catch (error) {
    return error.response
  }

}
const newLike =  async (blogId,likes,token) => {
  const newLikeValue=likes+1
  const blog ={ id:blogId,likes:newLikeValue }
  const putConfig={
    headers:{  'authorization':`Bearer ${token}` }
  }
  const request =  await  axios.put(baseUrl+blogId,blog,putConfig)
  try {
    if (request) return request.data
  } catch (error) {
    return error.response
  }

}
const deleteBlog =  async (blogId,userId,token) => {
  const deleteConfig={
    headers:{  'authorization':`Bearer ${token}` },data:{ user:userId }
  }
  const request =  await  axios.delete(baseUrl+blogId,deleteConfig)
  try {
    if (request) return request.data
  } catch (error) {
    return error.response
  }

}
const blogService={ getAll,newBlog , newLike ,deleteBlog }
export default blogService
// بسم الله الرحمن الرحيم
import axios from 'axios'
import config from '../utils/config'
const baseUrl = config.baseUrl+'blogs'

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
  headers:{  'authorization':`Bearer ${token}`}
  }
  
  const request =  await  axios.post(baseUrl,newBlog,postConfig)  
  try {
    if (request) return request.data  
  } catch (error) {
    return error.response
  }
   
  }
const blogService={getAll,newBlog}
export default blogService
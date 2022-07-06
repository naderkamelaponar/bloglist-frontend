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
const blogService={getAll}
export default blogService
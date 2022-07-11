// بسم الله الرحمن الرحيم
import axios from 'axios'
import config from '../utils/config'
const baseUrl = config.baseUrl+'login/' 

const login = async (username,password) => {
  const cred={ username,password }
  const request =  await axios.post(baseUrl,cred)
  try {
    if (request) return request.data
  } catch (error) {
    return error.response
  }
}

export default login
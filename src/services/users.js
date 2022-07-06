import axios from 'axios'
import config from "../utils/config"
const baseUrl = config.baseUrl+'users/'

const getAll = async () => {
  try {
    const request = await axios.get(baseUrl)
    if (request) return request.data
  } catch (error) {
    return error.response
  }
}
const newUser =  async user => {
  const request =  await  axios.post(baseUrl,user)  
  try {
    if (request) return request.data  
  } catch (error) {
    return error.response
  }
   
  }
  const userService ={getAll, newUser}
  export default userService


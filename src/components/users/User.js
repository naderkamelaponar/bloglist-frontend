// بسم الله الرحمن الرحيم
//import NewBlog from '../blogs/NewBlog'
import Notification from '../utils/Notification'
import Button from '../utils/Button'
import Blog from '../blogs/Blog'
import { useState } from 'react'
const User=({ handleSignOut,userData }) => {
  const userCoockie = JSON.parse(userData)
  const userInfo = userCoockie.user?userCoockie.user:null
  const [msg,setMsg]=useState(`Welcome ${userInfo['name']} You're in`)
  setTimeout(() => {
    setMsg('')
  },5000)

  const userStyle=  { 'backgroundColor':'limegreen','color':'white','width':'50%','textAlign':'center' ,'borderRadius':'75px 75px' }
  //<NewBlog handleNewBlog={handleNewBlog}  userData={userCoockie}/>
  return (<>{msg?<Notification msg={msg} error={false}/>:null}
    <h3 style={userStyle}>{userInfo.name}</h3>

    <Button label={'Logout'} handleMethod={handleSignOut}/ >
    <div>
      <Blog user={userData}/>

    </div>
  </>)
}
export default User
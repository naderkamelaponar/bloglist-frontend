// بسم الله الرحمن الرحيم
import { useState } from 'react'
import Notification from './Notification'
import Button from './Button'
const User=({handleSignOut})=>{
    const userData = JSON.parse(window.localStorage.getItem('loggedInUser'))
    const userInfo = userData.user?userData.user:null
    
    const [msg,setMsg]=useState(`Welcome ${userInfo.name} You're in`)
    setTimeout(()=>{
        setMsg('')
    },5000)
    const userStyle=  {"backgroundColor":"limegreen","color":"white","width":"50%","textAlign":"center" ,"borderRadius":"75px 75px"}
return (<>{msg?<Notification msg={msg} error={false}/>:null}
<h3 style={userStyle}>{userInfo.name}</h3>
<Button label={'Logout'} handleMethod={handleSignOut}/ >
</>)
}
export default User
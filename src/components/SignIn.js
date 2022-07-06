// بسم الله الرحمن الرحيم
import { useState } from 'react'
import NewUser from './NewUser'
import Login from './Login'
const SignIn = ({handleSignIn})=>{
    const [newUser,setNewUser] = useState(false)
    const handleNewUser= (loggeduser)=>{
        handleSignIn(loggeduser)
    }
    const handleLogin= (loggeduser)=>{
        handleSignIn(loggeduser)
    }
    const displayForm = newUser ?<NewUser handleNewUser={handleNewUser} /> : <Login  handleLogin={handleLogin}/>
    const displayButton = !newUser ?<button onClick={()=>{
        setNewUser(!newUser)
    }} >New User</button> : <button  onClick={()=>{
        setNewUser(!newUser)
    }}>Login</button>
    return (
        <>
        {displayButton}
        {displayForm}
        </>
    ) 
}
export default SignIn

// بسم الله الرحمن الرحيم
import { useState } from 'react'
import NewUser from '../users/NewUser'
import Login from '../users/Login'
import Cookies  from 'universal-cookie'
const cookies = new Cookies()
const SignIn = ({ handleSignIn }) => {
  const [newUser,setNewUser] = useState(false)
  const handleNewUser= (loggeduser) => {
    cookies.set('inUser',loggeduser)
    handleSignIn(cookies.cookies['inUser'])
  }
  const handleLogin= (loggeduser,keepMeIn) => {
    cookies.set('inUser',loggeduser)
    handleSignIn(cookies.cookies['inUser'],keepMeIn)
  }
  const displayForm = newUser ?<NewUser handleNewUser={handleNewUser} /> : <Login  handleLogin={handleLogin}/>
  const displayButton = !newUser ?<button onClick={() => {
    setNewUser(!newUser)
  }} >New User</button> : <button  onClick={() => {
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

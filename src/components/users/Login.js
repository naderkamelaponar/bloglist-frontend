// بسم الله الرحمن الرحيم
import { useState } from 'react'
import login from '../../services/login'
import Notification from '../utils/Notification'
const LoginForm =({ handleSubmmit }) => {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const handleUsername =(e) => {
    setUsername(e.target.value)
  }
  const handlePassword =(e) => {
    setPassword(e.target.value)
  }
  const handleForm=(e) => {
    handleSubmmit(e,username,password)
  }
  return (<form onSubmit={handleForm}>
    <p>Username : <input value={username} placeholder="Enter the username" onChange={handleUsername}/></p>
    <p>Password : <input value={password}type="password" placeholder="Enter the username" onChange={handlePassword}/></p>
    <p><button >Submit</button></p>
  </form>)
}
const Login =  ({ handleLogin }) => {
  const [error,setError] = useState(false)
  const [msg,setMsg]=useState('')
  const freeMsg=() => {
    setTimeout(() => {setMsg('')},5000)
  }
  const handleSubmmit = (e,username,password) => {
    e.preventDefault()
    login(username,password).then((u) => {
      if (u.user)handleLogin(u)
    }
    ).catch(error => {
      setError(true)
      setMsg(error.response.data)
      freeMsg()
    })

  }

  return (
    <>
      <h4>Login to write blogs</h4>
      {msg?<Notification msg={msg} error={error}/>:null}
      <LoginForm handleSubmmit={handleSubmmit}/>
    </>
  )
}
export default Login
// بسم الله الرحمن الرحيم
import { useState } from 'react'
import userServices from '../../services/users'
import Notification from '../utils/Notification'
const NewUserForm =({ handleSubmmit }) => {
  const [username,setUsername] = useState('')
  const [name,setName] = useState('')
  const [password,setPassword] = useState('')
  const [passwordAgain,setPasswordAgain] = useState('')

  const handleUsername =(e) => {
    setUsername(e.target.value)
  }
  const handleName =(e) => {
    setName(e.target.value)
  }
  const handlePassword =(e) => {
    setPassword(e.target.value)
  }
  const handlePasswordAgain =(e) => {
    setPasswordAgain(e.target.value)

  }
  const handleForm=(e) => {
    e.preventDefault()

    handleSubmmit(e,username,name,password,passwordAgain)
  }
  return (
    <>

      <form onSubmit={handleForm}>

        <p>Username : <input value={username} placeholder="Enter the username" onChange={handleUsername}/></p>
        <p>Name : <input value={name} placeholder="Enter the name" onChange={handleName}/></p>
        <p>Password : <input value={password}type="password" placeholder="Enter the password" onChange={handlePassword}/></p>
        <p>Password Again : <input value={passwordAgain}type="password" placeholder="Enter the password again" onChange={handlePasswordAgain}/></p>
        <p><button >Submit</button></p>
      </form>
    </>
  )
}

const NewUser = ({ handleNewUser }) => {
  const [error,setError] = useState(false)
  const [msg,setMsg]=useState('')
  const handleSubmmit = (e,username,name,password,passwordAgain) => {
    const freeMsg=() => {
      setTimeout(() => {setMsg('')},5000)
    }
    if(password !== passwordAgain){
      setError(true)
      setMsg('password don\'t match')
      freeMsg()
      return
    }

    userServices.newUser({ username,name,password }).then(res => {
      if (res.user){handleNewUser(res)}
    }).catch((er) => {
      setError(true)
      setMsg(er.response.data.message)
      freeMsg()

    })
  }

  return (
    <>
      <h4>Sign up to write blogs</h4>
      {msg && <Notification msg={msg} error={error}/>}
      <NewUserForm handleSubmmit={handleSubmmit}/>
    </>
  )
}
export default NewUser
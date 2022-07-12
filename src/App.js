import { useState } from 'react'

import SignIn from './components/utils/SignIn'
import User from './components/users/User'
//import blogService from './services/blogs'
const App = () => {
  const [user,setUser] = useState(null)
  /// const [blogs,setBlogs] = useState([])
  const handleSignIn = (user) => {
    if (user) {
      setUser(user)
    }
  }
  const handleSignOut = () => {
    setUser(null)
  }

  return (
    <>
      <div>
        <h1>بسم الله الرحمن الرحيم</h1>
        <h3>Blogs list fs-B- 5.10</h3>
        {user === null? <SignIn handleSignIn={handleSignIn} user={user}/>:<User handleSignOut={handleSignOut}  userData={user}/>}


      </div>
      <footer>
        <p>BackEnd <a  href="https://github.com/naderkamelaponar/fs-blog-be" target={'_blank'} rel={'noreferrer'}>Repo</a></p>
        <p>FrontEnd <a  href="https://github.com/naderkamelaponar/bloglist-frontend" target={'_blank'} rel={'noreferrer'}>Repo</a></p>
      </footer></>
  )
}

export default App

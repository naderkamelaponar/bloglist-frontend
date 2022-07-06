import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import SignIn from './components/SignIn'
import User from './components/User'
import blogService from './services/blogs'
const App = () => {
  
  const [blogs, setBlogs] = useState([])
  const [user,setUser] = useState(null)
  useEffect(() => {
    const userHere= window.localStorage.getItem('loggedInUser')?JSON.parse(window.localStorage.getItem('loggedInUser')):null
    setUser(userHere)
   blogService.getAll().then(blogs=>{
    if(blogs)setBlogs(blogs)
   })
    
  }, [setUser])
const handleSignIn = (user)=>{
  if (user) {
    setUser(user)
    window.localStorage.setItem(
      'loggedInUser', JSON.stringify(user)
    ) 
  }
}
const handleSignOut = ()=>{
  window.localStorage.clear()
  setUser(null)
}
  return (
    <>
    <div>
      <h1>بسم الله الرحمن الرحيم</h1>
      <h3>Blogs list fs-A- 5.1</h3>
      
      {user === null? <SignIn handleSignIn={handleSignIn}/>:<User handleSignOut={handleSignOut} />}
      <h3>blogs</h3>
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
      
    </div>
    <footer>
      BackEnd <a  href="https://github.com/naderkamelaponar/fs-blog-be" target={'_blank'} rel={"noreferrer"}>Repo</a>
    </footer></>
  )
}

export default App

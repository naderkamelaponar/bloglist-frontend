import { useState, useEffect } from 'react'
import Blog from './components/blogs/Blog'
import SignIn from './components/utils/SignIn'
import User from './components/users/User'
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
    
  }, [])
const handleSignIn = (user)=>{
  
  if (user) {
  setUser(user)
  }
}
const handleSignOut = ()=>{
  setUser(null)
}
const handleUserBlogs =()=>{
  blogService.getAll().then(blogs=>{
    if(blogs)setBlogs(blogs)
   })
}
  return (
    <>
    <div>
      <h1>بسم الله الرحمن الرحيم</h1>
      <h3>Blogs list fs-A- 5.1</h3>
      {user === null? <SignIn handleSignIn={handleSignIn} user={user}/>:<User handleSignOut={handleSignOut} handleSubmit={handleUserBlogs} userData={user}/>}
      <h3>blogs</h3>
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
      
    </div>
    <footer>
      <p>BackEnd <a  href="https://github.com/naderkamelaponar/fs-blog-be" target={'_blank'} rel={"noreferrer"}>Repo</a></p>
      <p>FrontEnd <a  href="https://github.com/naderkamelaponar/bloglist-frontend" target={'_blank'} rel={"noreferrer"}>Repo</a></p>
    </footer></>
  )
}

export default App

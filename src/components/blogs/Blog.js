// بسم الله الرحمن الرحيم
import { useState , useEffect ,useRef } from 'react'
import NewBlog from './NewBlog'
import blogService from '../../services/blogs'
import Notification from '../utils/Notification'
import BlogLine from './BlogLine'
import Togglable from '../utils/Togglable '
const Blog=({ user }) => {
  const [blogs,setBlogs]=useState([])
  const [msg,setMsg] = useState('')
  const freeMsg=() => {
    setTimeout(() => {setMsg('')},5000)
  }

  const fetchBlogs = () => {
    blogService.getAll().then(res => {
      if(res)setBlogs(res)
    })
  }
  useEffect(() => {
    fetchBlogs()
  }, [])

  const handleSubmit= (res) => {
    setMsg(`${res.title} blog for the ${res.author} has been created`)
    handleBlogFormRef()
    fetchBlogs()
    freeMsg()
  }
  const token= user? JSON.parse(user)['token']:null
  const blogFormRef = useRef()
  const handleBlogFormRef = () => {
    blogFormRef.current.toggleVisibility()
  }
  return (
    <div>

      {msg?<Notification msg={msg} error={false}/>:null}
      <Togglable buttonLabel={'create'}  ref={blogFormRef}><NewBlog userData={user} handleNewBlog={handleSubmit} cancel={handleBlogFormRef}/> </Togglable>
      {blogs ?blogs.map((b,i) => {return <BlogLine handleSubmit ={fetchBlogs}key={i} likes={b.likes}token = {token}blog={b}/>}):null}
    </div>
  )
}


export default Blog
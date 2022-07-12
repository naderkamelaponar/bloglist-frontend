// بسم الله الرحمن الرحيم
import { useState  } from 'react'
import blogService from '../../services/blogs'
import Notification from '../utils/Notification'

const NewBlog = ({ handleNewBlog,userData ,cancel }) => {
  const user = userData? JSON.parse(userData):null
  const [msg,setMsg]=useState('')
  const [title,setTitle] = useState('')
  const [author,setAuthor] = useState('')
  const [url,setUrl] = useState('')

  const handleTitle =(e) => {
    setTitle(e.target.value)
  }
  const handleAuthor =(e) => {
    setAuthor(e.target.value)
  }
  const handleUrl =(e) => {
    setUrl(e.target.value)
  }

  const freeMsg=(duration=5000) => {
    setTimeout(() => {setMsg('')},duration)
  }
  const addNewBlog = async(blog) => {

    try {
      const addBlog = await  blogService.newBlog(blog, user.token)
      setMsg(`created the blog ${addBlog['title']} `)
      freeMsg()
      return addBlog
    } catch (er) {
      setMsg(er.response.data.message)
      freeMsg()
      return null
    }
  }
  const handleSubmmit = async() => {
    const newBlog = { title,author,url }
    if (user) newBlog.user= user.user.id
    try {
      const addNew =   await addNewBlog(newBlog)
      if (addNew) {
        setTitle('')
        setAuthor('')
        setUrl('')
        handleNewBlog(addNew)
      }
    } catch (er) {
      setMsg('Oops! something went wrong')
      freeMsg()
    }

  }
  return (
    <>
      <h4>Write a blog</h4>
      {msg && <Notification msg={msg} error={true}/>}
      <div>

        <p>Title : <input value={title} placeholder="Enter the title" onChange={handleTitle}/></p>
        <p>Author : <input value={author} placeholder="Enter the author" onChange={handleAuthor}/></p>
        <p>Url : <input value={url} placeholder="Enter the url" onChange={handleUrl}/></p>
        <p><button onClick={handleSubmmit} >Create</button>         <button onClick={cancel} >Cancel</button>
        </p>
      </div>
    </>
  )
}
export default NewBlog
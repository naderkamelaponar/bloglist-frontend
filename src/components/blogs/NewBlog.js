// بسم الله الرحمن الرحيم
import { useState } from 'react'
import blogService from '../../services/blogs'
import Notification from '../utils/Notification'
const NewBlogForm =({handleSubmmit})=>{
    
    const [title,setTitle] = useState('')
    const [author,setAuthor] = useState('')
    const [url,setUrl] = useState('')
    
    const handleTitle =(e)=>{
        setTitle(e.target.value)
    }
    const handleAuthor =(e)=>{
        setAuthor(e.target.value)
    }
    const handleUrl =(e)=>{
        setUrl(e.target.value)
    }
    
    const handleForm=(e)=>{
        e.preventDefault()
        const newBlog= {title,author,url}
        handleSubmmit(e,newBlog)
    }
    return (
        <>
        
    <form onSubmit={handleForm}>
        
        <p>Title : <input value={title} placeholder="Enter the title" onChange={handleTitle}/></p>
        <p>Author : <input value={author} placeholder="Enter the author" onChange={handleAuthor}/></p>
        <p>Url : <input value={url} placeholder="Enter the url" onChange={handleUrl}/></p>
        <p><button >Create</button></p>
    </form>
    </>
    )
}

const NewBlog = ({handleNewBlog})=>{
    const [error,setError] = useState(false)
    const [msg,setMsg]=useState('')
    const freeMsg=()=>{
        setTimeout(()=>{setMsg('')},5000)
    }
    const user = window.localStorage.getItem('loggedInUser')?JSON.parse(window.localStorage.getItem('loggedInUser')):null
    const addNewBlog = async(blog,token)=>{
        
        try {
            const addBlog = await  blogService.newBlog(blog,token)
            
            setError(false)    
            setMsg(`created the blog ${addBlog['title']} `)
            freeMsg()
            return addBlog
        } catch (er) {
            setError(true) 
            setMsg(er.response.data.message)
            freeMsg()
            return null
        }
        
    }
    const handleSubmmit = async(e,newBlog)=>{
        e.preventDefault()
        if (user) newBlog.user= user.user.id
        try {
            const addNew =   await addNewBlog(newBlog,user.token)
            if (addNew) handleNewBlog()
        } catch (er) {
            console.log(er)
            setError(true) 
            setMsg('Oops! something went wrong')
            freeMsg()
        }
        
    }

    return (
        <>
        <h4>Write a blog</h4>
    {msg && <Notification msg={msg} error={error}/>}
       <NewBlogForm handleSubmmit={handleSubmmit}/>
        </>
    )
}
export default NewBlog
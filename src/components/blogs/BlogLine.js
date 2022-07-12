// بسم الله الرحمن الرحيم

import { useState } from 'react'
import blogService from '../../services/blogs'
const ToggleButton = ({ handleClick,label }) => {
  const buttonStyle={ color:'red' }
  return (
    <button style={buttonStyle} onClick={handleClick}>{label} </button>
  )
}
const BlogLine=({ blog ,handleSubmit ,token }) => {

  const [visible,setVisible] = useState(false)
  const handleToggle = () => {
    setVisible(!visible)
  }
  const titleStyle={ paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5 }
  const styleDisplay={ display:visible?'':'none' }
  return (<div style={titleStyle}>
    <p ><b   >{blog.title } </b>  {visible?<ToggleButton handleClick={handleToggle} label={'Hide'}/>:<ToggleButton handleClick={handleToggle} label={'View'}/>}</p>
    <p style={styleDisplay}><b>Url : </b> {blog.url} </p>
    <p style={styleDisplay}><b>Likes :</b>{blog.likes}  <button onClick={() => {
      blogService.newLike(blog.id,blog.likes,token).then(() => {
        handleSubmit()
      })
    }}>like</button></p>
    <p style={styleDisplay}><b>Author : </b> {blog.author} </p>
    <p style={styleDisplay}> <button onClick={() => {
      if (window.confirm(`Remover Blog ${blog.title} by ${blog.author} ?`)) blogService.deleteBlog(blog.id,blog.user.id,token).then(() => {
        handleSubmit()
      })

    }}>Delete</button></p>
  </div> )


}


export default BlogLine
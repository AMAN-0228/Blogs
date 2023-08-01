import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Create = () => {
  const[title,setTitle] = useState('')
  const[description,setDescription] = useState('')
  const[author,setAuthor] = useState('mario')
  const[isPending,setIsPending] =useState(false)
  const navigate = useNavigate()

  const handSubmit = (e)=>{
    e.preventDefault()
    const blog = {title,description,author}
    setIsPending(true);
    fetch('  http://localhost:8000/blogs',{
      method:'POST',
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify(blog)
    })
    .then(()=>{
      console.log("new blog added")
      setIsPending(false)
      navigate('/')
    })
    console.log(blog)
  }
  return (
    <div className='create'>
      <h2>Add new Blog</h2>
      <form onSubmit={handSubmit}>
        <label >Blog title:</label>
        <input 
          type="text"
          required
          value={title}
          onChange={e=>setTitle(e.target.value)} 
        />
        <label >Blog description:</label>
        <textarea 
          value={description}
           onChange={e=>setDescription(e.target.value)}
        />
        <label >Blog author:</label>
        <select
          value={author}
          onChange={e=>setAuthor(e.target.value)}
          >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding Blog...</button>}
      </form>
    </div>
  )
}

export default Create

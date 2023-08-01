import React from 'react'
import { useNavigate } from 'react-router-dom'

const Bloglist = ({blogs,title}) => {
    const navigate = useNavigate();
  return (
    <div className='blog-list'>
        <h2 className="list-title">{title}</h2>
        {blogs&&<div className="list" >
            {blogs.map((blog)=>(
                <div className='blogcard' key={blog.id} onClick={()=>navigate(`/blog/${blog.id}`)}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        {/* {blogs.map((blog)=>(
            <BlogCard key ={blog.id} author={blog.author} title={blog.title}/>
        ))} */}
        </div>}
    </div>
  )
}

export default Bloglist

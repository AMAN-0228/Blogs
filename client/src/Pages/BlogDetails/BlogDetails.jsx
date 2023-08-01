import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import UseFetch from '../../custom hooks/UseFetch/UseFetch';

const BlogDetails = () => {
    const {blogId} = useParams();
    const navigate = useNavigate()
    const {data : blog, error, isPending} = UseFetch('http://localhost:8000/blogs/' + blogId);
    const handClick = ()=>{
      fetch(`http://localhost:8000/blogs/${ blog.id}`,{
        method:'DELETE'
      }).then(()=>navigate('/'))
    }
  return (
    <div>
      {error&& <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blog&& <article className='blog-detail'>      
        <h2>{blog.title}</h2>
        <p className='blog-detail-author'>{blog.author}</p>
        <p className="blog-description">{blog.description}</p>
        <button onClick={handClick}>Delete</button>
      </article>}
    </div>
  )
}

export default BlogDetails

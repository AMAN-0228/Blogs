import React from 'react'

const BlogCard = (props) => {
    console.log(props)
  return (
    <div className='blogcard'>
      <h2>{props.title}</h2>
      <p>Written by {props.author}</p>
    </div>
  )
}

export default BlogCard

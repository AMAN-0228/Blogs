import BlogCard from '../../compents/Blogcard/BlogCard'
import Bloglist from '../../compents/bloglist/Bloglist'
import UseFetch from '../../custom hooks/UseFetch/UseFetch'

const Home = () => {
  // data : blogs --> data as blogs 
  const {data: blogs, isPending,error} = UseFetch("http://localhost:8000/blogs")
  // console.log("home",blogs)
  return (
    <div>
      {error&& <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs&&<Bloglist blogs={blogs} title="All blogs" />}
    </div>
  )
}

export default Home

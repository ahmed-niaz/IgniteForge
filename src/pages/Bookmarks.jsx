import { useEffect, useState } from "react";
import { getBlogs } from "../utils";
import BlogCard from "../components/BlogCard";
import { deleteBlog } from "../utils";
import EmptyState from "../components/EmptyState";


const Bookmarks = () => {
    const [blogs,setBlogs] = useState([]);
    useEffect(()=>{
        const storedBlogs = getBlogs();
        setBlogs(storedBlogs);
    },[]);
    const handleDelete = id => {
        deleteBlog(id);
        const storedBlogs = getBlogs();
        setBlogs(storedBlogs);
      }

      if(blogs.length<1) return <EmptyState message={`No bookmarks avilable`} address={`/blogs`} label={`Go to Blogs`}/>
    return (
        <main>
             <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {
            blogs.map((blog)=> <BlogCard handleDelete={handleDelete} deletable={true} blog={blog} key={blog.id}/>)
          }
          </div>
          
        </main>
    );
};

export default Bookmarks;

import { useState } from "react";
import { useEffect } from "react";

import Blog from "./Blog";


const Blogs = () => {

    const [blogs, setBlogs] = useState([]);


    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[]);



    return (
        <div className="max-w-[700px] ">
        

        {
            blogs.map(blog=><Blog blog={blog} key={blog.id}></Blog>)
        }
            
            
        </div>
    );
};

export default Blogs;
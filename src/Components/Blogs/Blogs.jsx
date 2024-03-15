
import { useState } from "react";
import { useEffect } from "react";
import PropTypes from 'prop-types';

import Blog from "./Blog";


const Blogs = ({handleBookmarks, handleReadingTime}) => {

    const [blogs, setBlogs] = useState([]);


    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[]);



    return (
        <div className="max-w-[700px] ">
        

        {
            blogs.map(blog=><Blog 
            blog={blog} 
            key={blog.id}
            handleBookmarks={handleBookmarks}
            handleReadingTime={handleReadingTime}></Blog>)
        }
            
            
        </div>
    );
};


Blogs.propTypes={
    handleBookmarks: PropTypes.func,
    handleReadingTime: PropTypes.func
}

export default Blogs;
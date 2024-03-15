import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";

import './Blog.css'

// eslint-disable-next-line react/prop-types
import authorImage from '../../assets/profile.png'

const Blog = ({ blog, handleBookmarks, handleReadingTime }) => {

    const {title, cover_photo, author, posted_date, reading_time, hashtags} = blog;

    
    return (
        <div className='mb-5'>
            <div className='cover-container'>
                <img src={cover_photo}></img>
            </div>
            <div className='flex justify-between gap-4 mt-4'>
                <div className='flex gap-5'>
                    <div className='author-image'>
                        <img src={authorImage}></img>
                    </div>
                    <div>
                        <p>{author}</p>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex gap-5 items-center'>
                    <p>{reading_time} min read</p>
                    <button onClick={()=>handleBookmarks(blog)}><FaBookmark></FaBookmark></button>

                </div>
            </div>
            <p className='text-2xl font-semibold'>{title}</p><br></br>
            <p>{hashtags}</p>


            <br></br>

            <a role='button' onClick={()=>handleReadingTime(reading_time)}>Mark as read</a>



        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarks: PropTypes.func.isRequired,
    handleReadingTime: PropTypes.func.isRequired
}


export default Blog;
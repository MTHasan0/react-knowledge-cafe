import PropTypes from 'prop-types';

import './Blog.css'

// eslint-disable-next-line react/prop-types
import authorImage from '../../assets/profile.png'
const Blog = ({ blog }) => {

    const {title, cover_photo, author, posted_date, reading_time, hashtags} = blog;

    console.log(blog);
    return (
        <div>
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
                <div>
                    <p>{reading_time} min read</p>

                </div>
            </div>
            <p className='text-2xl font-semibold'>{title}</p><br></br>
            <p>{hashtags}</p>


            <br></br>

            <a role='button'>Mark as read</a>



        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}


export default Blog;
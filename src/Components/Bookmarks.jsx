import PropTypes from 'prop-types';

import Bookmark from "./Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {
    

    return (
        <div className="w-1/4 text-2xl ">
        <div>
            <h3>Reading Time: {readingTime}</h3>
        </div>
            <p className='font-bold'>Bookmarks {bookmarks.length}</p>
            {
                bookmarks.map(bookmark=><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
            
        </div>
        
    );
};


Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}


export default Bookmarks;

import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='text-center py-2 bg-slate-200'>
            <p className="text-lg bg-white p-5 mx-4 rounded-lg">{title}</p>
            
        </div>
    );
};


Bookmark.propTypes={
    bookmark: PropTypes.object
}

export default Bookmark;
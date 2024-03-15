
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookmarks = blog =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleReadingTime = time =>{

    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    
    
  }

  return (
    <>
     
      <Header></Header>
      <div className='flex gap-10'>
        <Blogs handleBookmarks={handleBookmarks} handleReadingTime={handleReadingTime}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
      
    </>
  )
}

export default App

import React from 'react'

const Bookmark = ({bookmarks}) => {
 
  return (
    <div className="bookmark"> 
    
          <h2>Bookmarked Blogs : {bookmarks.length}</h2>
          <div className="bookmarkdiv">
            
        <h3>{bookmarks}</h3>
            
          </div>

    </div>
  )
}

export default Bookmark
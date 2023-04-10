import React from 'react'

const Bookmark = ({bookmarks}) => {
  
  let spendtime = 0;
  for (const blog of bookmarks) {
    spendtime = spendtime + blog.read_time;
  }
  return (
    <div className="bookmark"> 
     <div className="readtime">
            <h2 className="spend-time">Spend time on read:{spendtime} </h2>
          </div>
          <h2>Bookmarked Blogs : {bookmarks.length}</h2>
          <div className="bookmarkdiv">
            
        <h3>{bookmarks}</h3>
            
          </div>

    </div>
  )
}

export default Bookmark
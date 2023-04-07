import React from 'react'
import './content.css'
import { BsBookmark } from 'react-icons/bs'
const Content = (props) => {
  const  bookMarked = props.bookMarked;
 // const  spendTime = props.spendTime;
  return (
    <div className='content'>
      <div className="content-container">
        <img src={props.cover_img} alt="" />
        <div className="author-min">
          <div className="author">
            <img src={props.author_img} alt="" />
            <div className="author-name">
              <h3>{props.author}</h3>
              <p>{props.publish_date}</p>
            </div>
          </div>
            <div className="min">
              <span>{props.read_time} min read</span> <button onClick={()=> bookMarked(props.title)}><BsBookmark /></button>
            </div>
        </div>
        <h1 className='blog-title'>{props.title}</h1>
        <button className="mark-read-btn" onClick={()=> bookMarked(props.read_time)}>Mark as read</button>
      </div>
    </div>
  )
}

export default Content
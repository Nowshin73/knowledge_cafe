import React from 'react'
import './Spendtime.css'
const Spendtime = ({readtimes}) => {
     
  let spendtime = 0;
  for (const blog of readtimes) {
    spendtime = spendtime + blog.read_time;
  }
  return (
    <div className="readtime">
            <h2 className="spend-time">Spend time on read:{spendtime} </h2>
          </div>
  )
}

export default Spendtime
import React from 'react'
import './Blog.css'
const Blog = () => {
  return (
    <div className='blog'>
      <div className="blog-container">
        <h1 className='blog-title'>Difference between props and state</h1>
        <p>The difference is which component owns the data. The component is in charge of the state and updates it locally. The props are owned by a parent, who has read-only access to them. Props can be changed only if an upstream shift is caused by a callback function passed on to the child.</p>
      </div>
      <div className="blog-container">
        <h1 className='blog-title'>useState in React</h1>
        <p>useState is a React Hook that adds state to a functional component. It returns an array with two values: the current state and an update function. When the setter function is called, the Hook takes an initial state value as an argument and returns an updated state value.</p>
      </div>
      <div className="blog-container">
        <h1 className='blog-title'>What does useEffect do except data loading?</h1>
        <p>Except data loading or fetching useEffect updates the DOM, and timers.</p>
      </div>
      <div className="blog-container">
        <h1 className='blog-title'>How does React work?</h1>
        <p>ReactJS divides the user interface into isolated, reusable code chunks called components. Like JavaScript functions, React components accept arbitrary inputs known as properties or props. You can have as many components as you want without blocking up your code.</p>
      </div>
    </div>
  )
}

export default Blog
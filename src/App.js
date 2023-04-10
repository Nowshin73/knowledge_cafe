
import { useEffect, useState } from 'react';
import './App.css';
import Blog from './components/blog/Blog';
import Bookmark from './components/bookmark/Bookmark';
import Content from './components/content/Content';

function App() {
  const [blogs, setBlogs] = useState([]);
  const [bookmarks, setBookMarks] = useState([]);
  



  useEffect(() => {
    fetch("data.json")
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, []);

  const bookMarked = (blog) => {
    const newBlog = [...bookmarks, blog]
    setBookMarks(newBlog);
  }
  const spendTime = (blog) => {
    const newBlog = [...bookmarks, blog]
    setBookMarks(newBlog);
  }
 

  return (
    <div className="App">
      <header className='app-header'>
        <nav>
          <h1>Knowledge Cafe</h1>
          <div className='links'>
            <a href="#">FAQ</a>
            <a href="#">about</a>
          </div>
        </nav>
      </header>
      <hr />
      <main>
        <section className="container">
          {blogs.map(blog => <Content
            key={blog.id}
            author={blog.author_name}
            title={blog.blog_title}
            cover_img={blog.images.blog_cover_image}
            author_img={blog.images.author_image}
            read_time={blog.read_time}
            publish_date={blog.publish_date}
            bookMarked={bookMarked}
            spendTime = {spendTime}
          ></Content>)}
          <Blog></Blog>
        </section>
        <section className='side-part'>
        <Bookmark bookmarks={bookmarks}
                 
            ></Bookmark>
        </section>
      </main>
    </div>
  );
}

export default App;

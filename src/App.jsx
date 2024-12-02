import React, {useEffect, useState} from 'react';
import Header from './components/Header.jsx';
import Post from './components/Post.jsx'
import Footer from './components/Footer.jsx'
import styles from './App.module.css';
import { posts } from './data/posts.js';

const App = () => {
  const [uniqueTags, setUniqueTags] = useState([]);

  // Funzione per calcolare i tag unici
  const getUniqueTags = (posts) => {
    console.log(posts);
    
    const allTags = posts.flatMap((post) => post.tags);
    console.log(allTags);
    
    const uniqueTags = [...new Set(allTags)];
    console.log(uniqueTags);
    
    setUniqueTags(uniqueTags);
  };

  useEffect(() => {
    getUniqueTags(posts);
  }, [posts]);

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        {posts
            .filter((post) => post.published)
            .map((post) => (
              <Post key={post.id} post={post} uniqueTags={uniqueTags.toString(' ')}
              title= {post.title}
              content= {post.content}
              image= {post.image}  
               />
        ))}
        <div className={styles.flex}>
        {uniqueTags.map((tag) => (
          <span className= {styles.tags}key={tag}>{tag}</span>
        ))}
      </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;

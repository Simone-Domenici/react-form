import React from 'react';
import styles from './Post.module.css';

const Post = ({ post }) => {
  const getImage = (image) => {
    return image || 'https://via.placeholder.com/600x400'; // Immagine di placeholder
  };
  
  const colorMap = {
    html: 'green',
    css: 'pink',
    php: 'orange',
    js: 'yellow'
  };
  
  const getColor = (tag) => {
    return colorMap[tag] || 'gray'; // Colore di default per tag non mappati
  };
  return (
    <div className={styles.post}>
      <img src={getImage(post.image)}alt={post.title} className={styles.postImage} />
      <div className={styles.postContent}>
        <h2>{post.title}</h2>
        {post.tags.map((tag) => (
          <span className={styles.tags} key={tag} style={{ backgroundColor: getColor(tag) }}>
            {tag}
          </span>))}
        <p>{post.content}</p>
        <button className={styles.readMoreButton}>LEGGI DI PIÙ</button>
      </div>
    </div>
  );
};

export default Post;
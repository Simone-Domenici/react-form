import React from 'react';
import styles from './Post.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Post = ({ post, onDelete }) => {
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
        <div className={styles.btnWrapper}>
          <button className={styles.readMoreButton}>LEGGI DI PIÙ</button>
          <div className={styles.postActions}>
            <FontAwesomeIcon
              icon={faTrash}
              className={styles.deleteIcon}
              onClick={onDelete}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
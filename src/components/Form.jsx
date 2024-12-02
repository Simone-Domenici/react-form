import React, { useState } from 'react';
import styles from './Form.module.css'

const Form = ({ onAddPost }) => {
    const [formState, setFormState] = useState({
      title: '',
      image: '',
      content: '',
      tags: '',
      published: true,
      author: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!formState.title) {
        alert('Il titolo è obbligatorio.');
        return;
      }
  
      onAddPost({
        ...formState,
        tags: formState.tags.split(',').map(tag => tag.trim()),
      });
  
      setFormState({ title: '', image: '', content: '', tags: '', published: true, author: '' });
    };
  
    return (
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Titolo"
          value={formState.title}
          onChange={handleChange}
        />
        <button type="submit">Aggiungi Post</button>
      </form>
    );
  };
  
  export default Form;
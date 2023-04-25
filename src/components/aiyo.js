import './Seller_post.css'
import { useState,useEffect } from 'react';




function Seller_post() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    // Validate form inputs
    if (title.trim() === '' || price.trim() === '' || description.trim() === '') {
      setError('All fields are required.');
      return;
    }
    else{setError('success.');}
    // Submit form data
    // ...
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <br />
      <label>
        Price:
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      </label>
      <br />
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </form>
  );
}

export default Seller_post;

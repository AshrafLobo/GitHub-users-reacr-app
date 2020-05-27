import React, { useState } from 'react';
import Axios from 'axios';

const Form = props => {
  const [username, setUsername] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    Axios.get(`https://api.github.com/users/${username}`).then(resp => {
      props.onSubmit(resp.data)
      setUsername('')
    })
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={event => setUsername(event.target.value)}
        placeholder="GitHub username"
        required
      />
      <button type="submit">Add card</button>
    </form>
  );
};

export default Form;